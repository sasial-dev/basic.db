<p>
<a  href="https://nodei.co/npm/basic.db/">
<img  src="https://nodei.co/npm/basic.db.png?downloads=true&stars=true"  alt="NPM info"  /></a>
</p>
</div>

[![dependencies Status](https://david-dm.org/sasial-roblox/basic.db/status.svg)](https://david-dm.org/sasial-roblox/basic.db)
[![Build Status](https://travis-ci.org/sasial-roblox/basic.db.svg?branch=master)](https://travis-ci.org/sasial-roblox/basic.db)
<a  href="https://discord.gg/hvJPUwR"><img  src="https://discordapp.com/api/guilds/558591477010268170/embed.png"  alt="Discord server"  /></a>
<a  href="https://www.npmjs.com/package/basic.db"><img  src="https://img.shields.io/npm/dt/basic.db.svg?maxAge=3600"  alt="NPM downloads"  /></a>
<a  href="https://www.npmjs.com/package/basic.db"><img  src="https://img.shields.io/npm/v/basic.db.svg?maxAge=3600"  alt="NPM version"  /></a>

# Basic.db
This module is a simple Node.js based database package for Discord.js projects.
__The commands available are:__
*  `dbset`: Set the database
*  `dbreset`: Clear the database.
*  `dbget`: Get the infomation in the database, if none it will create it.
*  `wait` : Delay Command; Async function is NOT required for this.
***
# Installation
__Pre-installation:__
* None
__Installation:__
*  `npm install basic.db --save`
If you have troubles installing, plesase submit an issue, or for faster help join the discord server at https://discord.gg/hvJPUwR.
# Example
__dbcreate__

This is now depcapritated. To check if a db exists use db.dbget.
```js
// This code is not needed. To check if a db exists use db.dbget, 
var db = require("basic.db")
db.dbcreate("dbname")
```
***
__dbset - Set a Database__
```js
var db = require("basic.db")
var testing = "This is a test"
db.dbset("test",testing)
```
***
__dbreset - Reset a database__
```js
var db = require("basic.db")
db.dbreset("dbname")
```
***
__dbget - Get a database__
```js
var db = require("basic.db")
var get = await db.dbget("dbname") /* You are not required to use await,
though if you do not use await, the varible will not update. */
console.log(get)
```
***
__wait - Wait for a period of time. (Async is NOT required)__
```js
var db = require("basic.db")
await db.wait(100)
```
***
__Full Example__
```js
var db = require("basic.db")
console.log(db.dbget("db"))
db.wait(100).then(() => {
  db.dbset("db","Test")
  db.wait(100).then(() => {
    console.log(db.dbget("db"))
  });
});
```
