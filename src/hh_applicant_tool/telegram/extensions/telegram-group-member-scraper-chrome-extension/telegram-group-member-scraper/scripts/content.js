// Telegram Bio Scraper v2 - Fixed
const STORAGE_KEY = 'tg_bio_scraper_v2';

let isRunning = false;
let stopRequested = false;

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    if (data.msg === 'do-scraping') {
        if (isRunning) {
            stopRequested = true;
            console.log('[Scraper] Stop requested');
        } else {
            DoScrape();
        }
    }
});

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getState() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { results: [], processedIds: [] };
    } catch {
        return { results: [], processedIds: [] };
    }
}

function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}

function createUI() {
    const existing = document.getElementById('bio-scraper-ui');
    if (existing) existing.remove();

    const ui = document.createElement('div');
    ui.id = 'bio-scraper-ui';
    ui.innerHTML = `
        <style>
            #bio-scraper-ui {
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
                min-width: 320px;
                box-shadow: 0 4px 20px rgba(124,77,255,0.3);
            }
            #bio-scraper-ui h3 { margin: 0 0 10px; color: #7c4dff; font-size: 14px; }
            #bio-scraper-ui .row { margin: 5px 0; font-size: 12px; }
            #bio-scraper-ui .label { color: #888; }
            #bio-scraper-ui .value { color: #4caf50; font-weight: bold; }
            #bio-scraper-ui .status {
                background: #252542; padding: 8px; border-radius: 6px;
                margin: 8px 0; font-size: 11px; max-height: 60px; overflow: auto;
                word-break: break-all;
            }
            #bio-scraper-ui button {
                background: #7c4dff; color: white; border: none;
                padding: 8px 12px; border-radius: 6px; cursor: pointer;
                margin: 4px; font-size: 11px;
            }
            #bio-scraper-ui button:hover { background: #6200ea; }
            #bio-scraper-ui button.danger { background: #f44336; }
            #bio-scraper-ui button.success { background: #4caf50; }
        </style>
        <h3>Bio Scraper v2</h3>
        <div class="row"><span class="label">Progress:</span> <span class="value" id="scraper-progress">0/0</span></div>
        <div class="row"><span class="label">With Bio:</span> <span class="value" id="scraper-bios">0</span></div>
        <div class="status" id="scraper-status">Starting...</div>
        <div>
            <button id="scraper-stop" class="danger">STOP</button>
            <button id="scraper-download" class="success">Download CSV</button>
            <button id="scraper-clear">Clear</button>
        </div>
    `;
    document.body.appendChild(ui);

    document.getElementById('scraper-stop').onclick = () => {
        stopRequested = true;
        document.getElementById('scraper-status').textContent = 'Stopping...';
    };
    document.getElementById('scraper-download').onclick = downloadCSV;
    document.getElementById('scraper-clear').onclick = () => {
        if (confirm('Clear all data?')) {
            clearState();
            alert('Cleared!');
        }
    };

    return {
        progress: document.getElementById('scraper-progress'),
        bios: document.getElementById('scraper-bios'),
        status: document.getElementById('scraper-status'),
    };
}

function downloadCSV() {
    const state = getState();
    if (state.results.length === 0) {
        alert('No data');
        return;
    }

    const esc = s => {
        if (!s) return '';
        s = String(s).replace(/"/g, '""').replace(/\n/g, ' ').replace(/\r/g, '');
        return s.includes(',') || s.includes('"') ? `"${s}"` : s;
    };

    let csv = 'peer_id,name,username,phone,bio\n';
    state.results.forEach(r => {
        csv += `${esc(r.peerId)},${esc(r.name)},${esc(r.username)},${esc(r.phone)},${esc(r.bio)}\n`;
    });

    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `telegram_bios_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
}

// Parse User Info panel (right sidebar when viewing a user)
function parseUserInfo() {
    const data = { name: '', username: '', phone: '', bio: '' };

    // Name from profile header
    const nameEl = document.querySelector('.sidebar-right .profile-content .peer-title') ||
                   document.querySelector('.sidebar-right .profile-name .peer-title');
    if (nameEl) data.name = nameEl.textContent?.trim() || '';

    // Parse rows - they have .row-subtitle (label) and .row-title (value)
    const rows = document.querySelectorAll('.sidebar-right .profile-content .row');
    rows.forEach(row => {
        const subtitle = row.querySelector('.row-subtitle')?.textContent?.toLowerCase() || '';
        const title = row.querySelector('.row-title')?.textContent?.trim() || '';

        if (!title || title === 'Notifications') return;

        if (subtitle.includes('username') || subtitle.includes('имя пользователя')) {
            data.username = title.replace('@', '');
        } else if (subtitle.includes('phone') || subtitle.includes('телефон')) {
            data.phone = title;
        } else if (subtitle.includes('bio') || subtitle.includes('о себе') || subtitle === '') {
            // Bio often has empty subtitle, check for pre-wrap class
            const preWrap = row.querySelector('.row-title.pre-wrap');
            if (preWrap) {
                data.bio = preWrap.textContent?.trim() || '';
            } else if (!data.bio && !subtitle) {
                // Could be bio if it's multiline text
                if (title.length > 30) data.bio = title;
            }
        }
    });

    return data;
}

// Wait for User Info to load with the correct user
async function waitForUserInfo(expectedPeerId, timeout = 5000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
        // Check if we're now viewing the user's chat/profile
        const currentHash = location.hash;
        const profileContent = document.querySelector('.sidebar-right .profile-content');

        if (profileContent && currentHash !== '#@ITrecruiters_community') {
            await wait(800); // Extra time for content to render
            return true;
        }
        await wait(100);
    }
    return false;
}

// Scroll to load more members
async function scrollMemberList() {
    const scrollable = document.querySelector('.search-super-container-members .scrollable-y');
    if (scrollable) {
        scrollable.scrollTop = scrollable.scrollHeight;
        await wait(500);
    }
}

async function DoScrape() {
    if (isRunning) {
        console.log('[Scraper] Already running');
        return;
    }

    isRunning = true;
    stopRequested = false;

    const ui = createUI();
    const state = getState();

    ui.status.textContent = 'Looking for Members tab...';

    // Check we're in a group with Members visible
    const membersContainer = document.querySelector('.search-super-container-members');
    if (!membersContainer) {
        ui.status.textContent = 'ERROR: Open Group Info > Members first!';
        isRunning = false;
        return;
    }

    // Scroll to load members
    ui.status.textContent = 'Loading members...';
    for (let i = 0; i < 5; i++) {
        await scrollMemberList();
    }

    // Get member links
    const memberLinks = membersContainer.querySelectorAll('ul.chatlist a[data-peer-id]');
    const total = memberLinks.length;

    ui.status.textContent = `Found ${total} members`;
    console.log(`[Scraper] Found ${total} members`);

    let processed = 0;

    for (let i = 0; i < memberLinks.length; i++) {
        if (stopRequested) {
            ui.status.textContent = 'Stopped';
            break;
        }

        const link = memberLinks[i];
        const peerId = link.getAttribute('data-peer-id');

        // Skip already processed
        if (state.processedIds.includes(peerId)) {
            processed++;
            ui.progress.textContent = `${processed}/${total} (skip)`;
            continue;
        }

        // Get name from list before clicking
        const nameInList = link.querySelector('.peer-title')?.textContent?.trim() || '';

        ui.status.textContent = `[${i+1}/${total}] Opening ${nameInList || peerId}...`;

        // Click to open user
        link.click();

        // Wait for User Info to appear
        const loaded = await waitForUserInfo(peerId);

        if (!loaded) {
            ui.status.textContent = `[${i+1}/${total}] Failed to load, skipping...`;
            history.back();
            await wait(1500);
            continue;
        }

        // Parse profile
        const profile = parseUserInfo();
        processed++;

        // Use name from list if profile didn't have it
        if (!profile.name) profile.name = nameInList;

        // Save result
        state.results.push({
            peerId,
            name: profile.name,
            username: profile.username,
            phone: profile.phone,
            bio: profile.bio
        });
        state.processedIds.push(peerId);

        // Update UI
        const bioCount = state.results.filter(r => r.bio).length;
        ui.progress.textContent = `${processed}/${total}`;
        ui.bios.textContent = bioCount;

        const bioPreview = profile.bio ? profile.bio.substring(0, 35) + '...' : 'no bio';
        ui.status.textContent = `[${processed}/${total}] ${profile.name}: ${bioPreview}`;
        console.log(`[Scraper] ${processed}/${total} - ${profile.name}: ${profile.bio || 'no bio'}`);

        // Save every 10
        if (processed % 10 === 0) {
            saveState(state);
            console.log(`[Scraper] Saved checkpoint at ${processed}`);
        }

        // Go back to group with Members list
        history.back();
        await wait(1500);

        // Verify we're back
        const backInGroup = document.querySelector('.search-super-container-members');
        if (!backInGroup) {
            ui.status.textContent = 'Lost Members list, stopping...';
            console.log('[Scraper] Lost Members list after history.back()');
            break;
        }
    }

    // Final save
    saveState(state);

    const bioCount = state.results.filter(r => r.bio).length;
    ui.status.textContent = `Done! ${state.results.length} users, ${bioCount} with bio`;
    console.log(`[Scraper] Finished: ${state.results.length} total, ${bioCount} with bio`);

    isRunning = false;
}
