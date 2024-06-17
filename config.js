const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="pyavamottapettavan@gmail.com"
global.location="Kerala,India"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://jevica2283:GeB12nR5XhSQmEEB@cluster0.2rqlpqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/QUEEN-NISHIMIYA/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Krn1VGvyWqP5brTWbNoZsp";
global.website=process.env.GURL || "https://chat.whatsapp.com/Krn1VGvyWqP5brTWbNoZsp" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://te.legra.ph/file/488293c53fb1ed5c619fb.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪɀꪊᴍιꫀ ᥊ꫀꪀρꪖι💋" 


global.devs = "918593848438" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918593848438";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,918593848438";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "918593848438,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_38_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMTU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxCVUdYR3dabDQwRzNabkdQMDlVYmVnMTRxMVFINEtxQlNuR0RJWERLNnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAwNTQwNjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0ODg2NjgzQjU5Mzk4Njk5QzdFQjBEMDAwOUEzRDI3NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2NDIyNzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDA1NDA2NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZCODcxNzY3QUI1NThGRjc2NDNEMTEyQTBBNTQ0ODJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY0MjI4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyNUZKUlF5U1NsLTJsMVhxOE96VW1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZmYmEwMzAyLTM4MDMtNGZkZC05NDZjLWZhNjMxMjdhYjRjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDk0LFxuICAgICAgNDMsXG4gICAgICAxMDQsXG4gICAgICA2OCxcbiAgICAgIDc4LFxuICAgICAgMTcyLFxuICAgICAgNTksXG4gICAgICA1MSxcbiAgICAgIDEzLFxuICAgICAgMTk1LFxuICAgICAgMTYzLFxuICAgICAgNTIsXG4gICAgICAzMSxcbiAgICAgIDY3LFxuICAgICAgMTQyLFxuICAgICAgNyxcbiAgICAgIDE5MixcbiAgICAgIDAsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAxNzgsXG4gICAgICAyNDUsXG4gICAgICAyMDIsXG4gICAgICA5NyxcbiAgICAgIDI0OSxcbiAgICAgIDEyLFxuICAgICAgMTkxLFxuICAgICAgMTYsXG4gICAgICA3NCxcbiAgICAgIDE2NixcbiAgICAgIDEwMyxcbiAgICAgIDE4MSxcbiAgICAgIDgzLFxuICAgICAgMTgxLFxuICAgICAgMTcyLFxuICAgICAgMTUyLFxuICAgICAgMTkwLFxuICAgICAgMTMyLFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJQOUY5SjU4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDA1NDA2NjU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNzEzMTQ4NDk4MzM0MToxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZek8J2XqPCdl5jwnZeY8J2XoSDwnZeY8J2Xn/Cdl5zwnZem8J2XlFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyWDVzVUZFTi9Nd2JNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUIzYnZLY3ZLYXd1aEVlSHRvZlRGcmd5b3JrZmIzWHZHRkZlSllYOUhqST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKTjFYUndnRVEvc05QZHMzbDdFUW5IQllMNk5rcS9WZHdNeG84M2xyWU5hMk5nZFBKY1hOOFloaW95bFF2ZHZqbVQ4NGpYelZORDFuM3N0R2xPdTRDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrNGtlNnVjRWRpMit1NE11MFk1UkNyVDhNa0czQWVHVXYvT3NNd0xIaXBHSEQ2UkU0Tm1NMFBVZGRVVHErWWk2Vk15QVlMQ1ZyNW1ocy9nUngxZ2FEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDA1NDA2NjU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjQyMjc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkxHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1ZllvK0QxeUNFOGR4WWNSMktQVzVtNWx2VEx1SzByS2JZQ012S0NvQnVzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODg1NjMwODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzOTQ4OTc4NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗜𝗭𝗨𝗠𝗜𝗘 𝗫𝗘𝗡𝗣𝗔𝗜",
  packname: process.env.PACK_NAME || "918593848438",
  botname : process.env.BOT_NAME  || "𝘲ꪊꫀꫀꪀ ꫀℓɪ𝘴α💋",
  ownername:process.env.OWNER_NAME|| "ɪɀꪊᴍιꫀ ᥊ꫀꪀρꪖι💋",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "qSSwGimGhhzjJqJxFFeB7PAp",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "b0cbf2a35c9fb1450a102b8d8ba4f63f";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
