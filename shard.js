const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./server.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',
    token: "NTk2NjQzMDg2MjQ4MDUwNzAx.XcWT7Q.9C25NmEr7BkZDJ-bRsY-uZWySfE"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);