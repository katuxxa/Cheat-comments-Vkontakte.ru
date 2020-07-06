const { VK } = require('vk-io');
const vk = new VK();
const request = require('prequest');
const { updates, snippets } = vk;
const hd = require('humanize-duration');
const message = `made by oasis`
const rq = require("prequest");
const fs = require('fs');
const date = require("datejs");
const settings = require('./settings.json');
updates.startPolling();

setInterval(async () => {
    console.log(`дай 2 гривнi`)
}, 60000);

setInterval(async () => {
    const date = new Date();
     let day = date.getDate(); 
     let month = date.getMonth(); 
     let year = date.getFullYear();
     let hours = date.getHours(); 
     let minutes = date.getMinutes(); 
     let seconds = date.getSeconds();
    const oasis = new VK();
     oasis.setOptions({token: `${settings.token}`});
     oasis.api.wall.createComment({ owner_id: `${settings.post_owner}`, post_id: `${settings.post_id}`, message: `${settings.text}`/*, sticker_id: `${settings.sticker_id}`*/ });
     console.log(`+1 comment added.`)
}, 5000);

console.log(message)