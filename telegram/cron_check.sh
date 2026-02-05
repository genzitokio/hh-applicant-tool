#!/bin/zsh
# AutoKus cron — запускает clg /hr-check каждую минуту
source ~/.zshrc
cd /home/flyingkuskus/AutoKus
clg --print "/hr-check"
