//v1.0.7

const { VK } = require('vk-io');
const vk = new VK();
const request = require('prequest');
const { updates, snippets } = vk;
const hd = require('humanize-duration');
const message = `made by oasis`;
const rq = require("prequest");
const fs = require('fs');
const date = require("datejs");
const settings = require('./settings.json');
vk.setOptions({ token:e6be441276b90e8cc7a20de461aee8c1566546936a595a2b938a3fb4da1ff9e8997bo7915aeae2e80e072 '781f0f339b4435c4727ccfaa345cdab76de85faeb38aaafcf49edc4a60933aa2fffc49be9d7f854b10517' });
updates.startPolling();

console.log(`♥ ` + message)

setInterval(async(1000) => {
	let errors = Number(4);

	if(settings.token) { errors -= Number(1); }
	if(settings.post_owner && settings.post_id) { errors -= Number(2); }
	if(!settings.sticker_id) { if(settings.text) { errors -= Number(1); } }
	if(settings.sticker_id) { if(!settings.text) { if(sticker_id > 0) { errors -= Number(1); } } }
	if(errors > 0) { console.log(`Error: Enter all the necessary data in the settings.`) }
		if(errors == 0) { 
			const date = new Date(); 
			let day = date.getDate();  
			let month = date.getMonth(); 
			let year = date.getFullYear(); 
			let hours = date.getHours();  
			let minutes = date.getMinutes();  
			let seconds = date.getSeconds(); 
			const oasis = new VK(); 
			oasis.setOptions({token: `${settings.token}`}); 
			oasis.api.wall.createComment({ 
				owner_id: `${settings.post_owner}`, 
				post_id: `${settings.post_id}`,  
				message: `${settings.text}`, 
				sticker_id: `${settings.sticker_id}`
			})
			console.log(`[${hours}:${minutes} ${day}.${month}.${year}] +1 comment added.`)
			console.log(`[${hours}:${minutes} ${day}.${month}.${year}] Subscribe to @oasis.nodejs`)
		}
}, 5000);
