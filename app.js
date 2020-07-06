//v1.0.4

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
var errors = Number(4);
vk.setOptions({ token: '781f0f339b4435c4727ccfaa345cdab76de85faeb38aaafcf49edc4a60933aa2fffc49be9d7f854b10517' });
updates.startPolling();

setInterval(async () => {
    console.log(`дай 2 гривнi`)
}, 60000);

setInterval(async() => {
	if(settings.token) { errors -= Number(1); }
	if(settings.post_owner && settings.post_id) { errors -= Number(2); }
		if(settings.text) { errors -= Number(1); }
			if(errors > 0) { console.log(`Error: Enter all the necessary data in the settings.`)}
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
	message: `${settings.text}`/*, sticker_id: `${settings.sticker_id}`*/ 
})
			console.log(`[${hours}:${minutes} ${day}.${month}.${year}] +1 comment added.`)
			console.log(`[${hours}:${minutes} ${day}.${month}.${year}] Subscribe to @oasis.nodejs`)
		}
}, 5000);

console.log(`♥ ` + message)