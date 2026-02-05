// ==UserScript==
// @name         Telegram Bio Scraper v3
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Scrape bios via #@username navigation
// @author       AutoKus
// @match        https://web.telegram.org/k/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const STORAGE_KEY = 'tg_bio_scraper_v3';
    const DELAY_BETWEEN = 1000;  // ms между юзерами
    const DELAY_LOAD = 800;      // ms ждать загрузки профиля

    // State
    let state = loadState() || {
        usernames: [],    // [{username, name, id}]
        results: [],
        currentIndex: 0,
        isRunning: false
    };

    function loadState() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); }
        catch { return null; }
    }

    function saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function clearState() {
        localStorage.removeItem(STORAGE_KEY);
        state = { usernames: [], results: [], currentIndex: 0, isRunning: false };
    }

    // UI
    const panel = document.createElement('div');
    panel.innerHTML = `
        <style>
            #bio-scraper {
                position: fixed;
                top: 10px;
                left: 10px;
                background: #1a1a2e;
                border: 2px solid #7c4dff;
                border-radius: 12px;
                padding: 15px;
                z-index: 999999;
                font-family: 'Segoe UI', sans-serif;
                color: #fff;
                min-width: 340px;
                box-shadow: 0 4px 20px rgba(124,77,255,0.3);
            }
            #bio-scraper h3 { margin: 0 0 10px; color: #7c4dff; }
            #bio-scraper .row { margin: 8px 0; font-size: 13px; }
            #bio-scraper .label { color: #888; }
            #bio-scraper .value { color: #4caf50; font-weight: bold; }
            #bio-scraper button {
                background: #7c4dff; color: white; border: none;
                padding: 10px 14px; border-radius: 6px; cursor: pointer;
                margin: 4px; font-size: 12px; transition: all 0.2s;
            }
            #bio-scraper button:hover { background: #6200ea; }
            #bio-scraper button:disabled { background: #444; cursor: not-allowed; }
            #bio-scraper button.danger { background: #f44336; }
            #bio-scraper button.success { background: #4caf50; }
            #bio-scraper .status {
                background: #252542; padding: 8px; border-radius: 6px;
                margin: 10px 0; font-size: 11px; max-height: 80px; overflow: auto;
            }
            #bio-scraper textarea {
                width: 100%; height: 60px; margin: 5px 0;
                background: #252542; color: #fff; border: 1px solid #444;
                border-radius: 4px; padding: 8px; font-size: 11px;
            }
        </style>
        <div id="bio-scraper">
            <h3>🔍 Bio Scraper v3</h3>
            <div class="row"><span class="label">Users:</span> <span class="value" id="s-users">0</span></div>
            <div class="row"><span class="label">Progress:</span> <span class="value" id="s-progress">0/0</span></div>
            <div class="row"><span class="label">With Bio:</span> <span class="value" id="s-bios">0</span></div>
            <div class="status" id="s-status">Paste usernames (one per line) or CSV</div>
            <textarea id="input-usernames" placeholder="username1&#10;username2&#10;or paste CSV..."></textarea>
            <div>
                <button id="btn-load">Load Usernames</button>
                <button id="btn-start" disabled>Start</button>
                <button id="btn-stop" disabled>Stop</button>
            </div>
            <div>
                <button id="btn-download" class="success" disabled>Download CSV</button>
                <button id="btn-reset" class="danger">Reset</button>
            </div>
        </div>
    `;
    document.body.appendChild(panel);

    const ui = {
        users: document.getElementById('s-users'),
        progress: document.getElementById('s-progress'),
        bios: document.getElementById('s-bios'),
        status: document.getElementById('s-status'),
        input: document.getElementById('input-usernames'),
        btnLoad: document.getElementById('btn-load'),
        btnStart: document.getElementById('btn-start'),
        btnStop: document.getElementById('btn-stop'),
        btnDownload: document.getElementById('btn-download'),
        btnReset: document.getElementById('btn-reset')
    };

    function updateUI() {
        ui.users.textContent = state.usernames.length;
        ui.progress.textContent = `${state.currentIndex}/${state.usernames.length}`;
        ui.bios.textContent = state.results.filter(r => r.bio).length;
        ui.btnStart.disabled = state.usernames.length === 0 || state.isRunning;
        ui.btnStop.disabled = !state.isRunning;
        ui.btnDownload.disabled = state.results.length === 0;
        ui.btnLoad.disabled = state.isRunning;
    }

    function setStatus(msg) {
        ui.status.textContent = msg;
        console.log('[BioScraper]', msg);
    }

    // Load usernames from textarea
    function loadUsernames() {
        const text = ui.input.value.trim();
        if (!text) {
            setStatus('❌ Paste usernames first!');
            return;
        }

        const lines = text.split('\n').map(l => l.trim()).filter(l => l);
        const users = [];

        // Detect CSV format (has commas)
        if (lines[0].includes(',')) {
            // CSV format: id,username,first_name,...
            const hasHeader = lines[0].toLowerCase().includes('username');
            const startIdx = hasHeader ? 1 : 0;

            for (let i = startIdx; i < lines.length; i++) {
                const parts = lines[i].split(',');
                const id = parts[0]?.trim();
                const username = parts[1]?.trim();
                const name = parts[2]?.trim() || '';

                if (username && username !== '' && !username.includes(' ')) {
                    users.push({ id, username, name });
                }
            }
        } else {
            // Plain usernames, one per line
            lines.forEach(line => {
                const username = line.replace(/^@/, '').trim();
                if (username && !username.includes(' ')) {
                    users.push({ username, name: '', id: '' });
                }
            });
        }

        if (users.length === 0) {
            setStatus('❌ No valid usernames found');
            return;
        }

        state.usernames = users;
        state.results = [];
        state.currentIndex = 0;
        saveState();
        updateUI();
        setStatus(`✅ Loaded ${users.length} usernames. Click Start.`);
    }

    // Parse profile from current page
    function parseProfile() {
        const data = { username: '', phone: '', bio: '' };

        // Method 1: Right sidebar (User Info panel)
        const rightPanel = document.querySelector('.sidebar-right');
        if (rightPanel) {
            const rows = rightPanel.querySelectorAll('.row');
            rows.forEach(row => {
                const text = row.textContent || '';
                if (text.endsWith('Username')) {
                    data.username = text.slice(0, -8).trim();
                }
                if (text.endsWith('Phone')) {
                    data.phone = text.slice(0, -5).trim();
                }
                if (text.endsWith('Bio')) {
                    data.bio = text.slice(0, -3).trim();
                }
            });
        }

        // Method 2: Try chat header area if sidebar not open
        if (!data.bio) {
            const chatInfo = document.querySelector('.chat-info, .profile-content');
            if (chatInfo) {
                const bioEl = chatInfo.querySelector('[class*="bio"], [class*="about"]');
                if (bioEl) data.bio = bioEl.textContent?.trim() || '';
            }
        }

        return data;
    }

    // Wait for page to load
    function waitForLoad(timeout = 3000) {
        return new Promise(resolve => {
            const start = Date.now();
            const check = () => {
                // Check if profile/chat loaded
                const hasContent = document.querySelector('.sidebar-right .row') ||
                                   document.querySelector('.chat-info') ||
                                   document.querySelector('.bubbles-inner');

                if (hasContent || Date.now() - start > timeout) {
                    setTimeout(resolve, DELAY_LOAD);
                } else {
                    setTimeout(check, 100);
                }
            };
            check();
        });
    }

    // Click on chat header to open User Info
    async function openUserInfo() {
        // Click on the header to open right panel
        const header = document.querySelector('.chat-info, .person, .chat-utils')?.closest('.sidebar-header') ||
                       document.querySelector('.chat .person');

        if (header) {
            header.click();
            await new Promise(r => setTimeout(r, 500));
        }
    }

    // Main scraping loop
    async function startScraping() {
        if (state.usernames.length === 0) {
            setStatus('❌ Load usernames first!');
            return;
        }

        state.isRunning = true;
        updateUI();

        for (let i = state.currentIndex; i < state.usernames.length && state.isRunning; i++) {
            const user = state.usernames[i];
            state.currentIndex = i;
            saveState();
            updateUI();

            setStatus(`[${i+1}/${state.usernames.length}] @${user.username}`);

            // Navigate to user
            location.hash = `@${user.username}`;

            // Wait for load
            await waitForLoad();

            // Try to open User Info panel
            await openUserInfo();
            await new Promise(r => setTimeout(r, 300));

            // Parse profile
            const profile = parseProfile();

            state.results.push({
                id: user.id || '',
                username: user.username,
                name: user.name || '',
                phone: profile.phone || '',
                bio: profile.bio || ''
            });

            if (profile.bio) {
                setStatus(`[${i+1}/${state.usernames.length}] ✓ @${user.username}: "${profile.bio.substring(0, 35)}..."`);
            }

            saveState();
            updateUI();

            await new Promise(r => setTimeout(r, DELAY_BETWEEN));
        }

        state.isRunning = false;
        state.currentIndex = state.usernames.length;
        saveState();
        updateUI();

        const bioCount = state.results.filter(r => r.bio).length;
        setStatus(`✅ Done! ${state.results.length} users, ${bioCount} with bio.`);
    }

    function stopScraping() {
        state.isRunning = false;
        saveState();
        updateUI();
        setStatus('⏸ Stopped. Click Start to resume.');
    }

    // Download CSV
    function downloadCSV() {
        if (state.results.length === 0) return;

        const esc = s => {
            if (!s) return '';
            s = String(s).replace(/"/g, '""');
            return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s}"` : s;
        };

        let csv = 'id,username,name,phone,bio\n';
        state.results.forEach(r => {
            csv += `${esc(r.id)},${esc(r.username)},${esc(r.name)},${esc(r.phone)},${esc(r.bio)}\n`;
        });

        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `telegram_bios_${new Date().toISOString().slice(0,10)}.csv`;
        a.click();
    }

    // Events
    ui.btnLoad.addEventListener('click', loadUsernames);
    ui.btnStart.addEventListener('click', startScraping);
    ui.btnStop.addEventListener('click', stopScraping);
    ui.btnDownload.addEventListener('click', downloadCSV);
    ui.btnReset.addEventListener('click', () => {
        if (confirm('Reset all?')) {
            clearState();
            updateUI();
            setStatus('Reset.');
        }
    });

    // Init
    updateUI();
    if (state.isRunning) {
        setStatus(`Resuming from ${state.currentIndex}...`);
        setTimeout(startScraping, 1000);
    } else if (state.usernames.length > 0) {
        setStatus(`${state.usernames.length} users loaded, ${state.results.length} done.`);
    }

    console.log('[BioScraper v3] Ready');
})();
