const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_30_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaTZTSHplQ1VkVEVzbnFCRGMwWDE2YlZ6c1prR1RHWTNSTU5HQWYvbUdLMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMzM3MTU0MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNUU0QzcyNEM4RDBENUZDRUFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE3MjY1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUVGU2eFpnRVJVaTZRa3hEeExFekxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAzNTgzZTI1LTUzYWEtNDI0NC1hMmQzLWU5MzAzYmQ4YTU0Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICA0OCxcbiAgICAgIDkzLFxuICAgICAgMTI2LFxuICAgICAgMTUwLFxuICAgICAgMjIzLFxuICAgICAgNzEsXG4gICAgICA2LFxuICAgICAgMjQ2LFxuICAgICAgNzgsXG4gICAgICA0MSxcbiAgICAgIDE4MixcbiAgICAgIDEwNyxcbiAgICAgIDE5LFxuICAgICAgMTI3LFxuICAgICAgODEsXG4gICAgICAxNjMsXG4gICAgICAzOCxcbiAgICAgIDEyMixcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTUwLFxuICAgICAgMTE2LFxuICAgICAgMTMyLFxuICAgICAgMTY3LFxuICAgICAgMTU4LFxuICAgICAgMTQ4LFxuICAgICAgMTkxLFxuICAgICAgMjI3LFxuICAgICAgMjAzLFxuICAgICAgMjMsXG4gICAgICAyMjUsXG4gICAgICAxNTAsXG4gICAgICAxMTMsXG4gICAgICAyMjQsXG4gICAgICA5NyxcbiAgICAgIDE3MyxcbiAgICAgIDM5LFxuICAgICAgMjE3LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU0E0dmtDRUtPRjNMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFYN0hmc2l6R21OcXJQeTUzSVV2eENXRVA3V0FUdFpXKzBvanFaTDdubkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVB2dDAxUlA5d3FWTkpxZ09EUk1wUjhQYUpuT3ZRT2tLUlg0Qnd0N0pJaUZMRTFYQ1pTclNmSXlMWlhrUVVKb0J4K3NFUGZCdWhoaEhOMFBSVG42Z0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZmh4eG9sOHI2TE05L1B5K05kVmZHSCtqNi9EOTBWVE00bkg4amsxeXFqS1ZlelZpOWF2YkEyY3g1T2lBNlpDdjNhcGZlaDZIRmJiLzBqeGFtTmc1QUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzM3MTU0MTc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkJnwnZCE8J2Qh/CdkJHwnZCI4oCi8J2QkvCdkIDwnZCH8J2QiPCdkIFcIixcbiAgICBcImxpZFwiOiBcIjI3NDUzMDU1MTQ2ODA5Nzo3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzMzNzE1NDE3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE3MjY0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpXRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSldFLmpzb24iOiAie1wia2V5RGF0YVwiOlwicFc1OEQwc0xYVFJvRGs3NnRvcUY1THV4clBWMmlBQ0E2UHVqVWZ6L25uYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3OTIyMzE5ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE3MjY0NjQ3N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
