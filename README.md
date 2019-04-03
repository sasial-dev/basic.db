<div align="center">
  <p>
    <a href="https://nodei.co/npm/basic.db/">
      <img src="https://nodei.co/npm/basic.db.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>  

[![dependencies Status](https://david-dm.org/sasial-roblox/basic.db/status.svg)](https://david-dm.org/sasial-roblox/basic.db)
[![Build Status](https://travis-ci.org/sasial-roblox/basic.db.svg?branch=master)](https://travis-ci.org/sasial-roblox/basic.db)
<a href="https://discord.gg/hvJPUwR"><img src="https://discordapp.com/api/guilds/558591477010268170/embed.png" alt="Discord server" /></a>
<a href="https://www.npmjs.com/package/basic.db"><img src="https://img.shields.io/npm/dt/basic.db.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://www.npmjs.com/package/basic.db"><img src="https://img.shields.io/npm/v/basic.db.svg?maxAge=3600" alt="NPM version" /></a>

# Basic.db
*** 
This module is a simple Node.js based database package for Discord.js projects.

__The commands available are:__ 
* `dbcreate`: Create a database to start with.
* `dbset`: Set the database
* `dbreset`: Clear the database.
* `dbget`: Get the infomation in the database
* `wait` : Delay.

***
# Installation
***  
__Pre-installation:__  

* None

__Installation:__  
* `npm install basic.db --save`  
If you have troubles installing, plesase submit an issue, or for faster help [join the discord server] (https://discord,gg/hvJPUwR).

# Example
***
__dbcreate__
```js
  var easyDb = require("basic.db")
  easyDb.dbcreate("dbname")
```
***
__dbset__
```js
var easyDb = require("basic.db")
  easyDb.dbset("dbname",test)
```
***
__dbreset__
```js
var easyDb = require("basic.db")
  easyDb.dbreset("dbname")
```
***
__dbget__
```js
var easyDb = require("basic.db")
  var get = easyDb.dbget("dbname")
  console.log(get)
```
***
__wait__
```js
var easyDb = require("basic.db")
  easyDb.wait(100)
```
***
__Full Example__
```js
var easyDb = require("basic.db")
easyDb.dbcreate("db")
easyDb.wait(100)
easyDb.dbset("db","Test")
easyDb.wait(100)
var get = easyDb.dbget("db")
console.log(get)
```
