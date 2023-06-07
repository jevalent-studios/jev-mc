# JevMC
A mineflayer bot that requires little to no coding to run

Please consider the following before installing:

```This is a WORK IN PROGRESS!!!! Most things will be buggy and/or will not work!!```

# Installation (JevMC Release ^1.8, version 1.19)

Download NodeJS [here](https://nodejs.org/en/download/)

Edit .env files for hostname (the server you wish for JevMC to connect to)

Edit .env files for username (the username of JevMC)

Edit .env files for port (the port of the server you wish for JevMC to connect to, everything after the colon)

Edit .env files for authentication type (Mojang if your account is a Mojang Account, Microsoft if you've either migrated from or have created a Microsoft aka Xbox account for minecraft)

Done! Just click start.bat and your bot should join your server!

# Installation
## Short-ish way
To install the bot, Firstly download VS Code [here](https://code.visualstudio.com)

Download the release titled "JevMC Version 1.6^" (the symbol ^ means that version or above), then unzip the compressed folder

Open the unzipped folder in Visual Code Studio (it should have the files "README.md" and the folder "Production")

When Visual Code Studio is open, click "Run" then from the drop down menu, click "start debugging"

## Longer way (NOT RECCOMENDED FOR NORMAL USERS)

### Part 1
To install the bot, Firstly download VS Code [here](https://code.visualstudio.com)

Then run the following commands by clicking **Terminal > New Terminal**

Then Click where it says ">"

Then type the following:
```npm install mineflayer```

```npm install mineflayer-pathfinder``` (I didn't complete the code for the pathfinding part of the bot, but install it anyway)

```npm install vec3```

## Replacing some stuff
Replace HOSTNAME with the server address you want the bot to connect to


Replace USERNAME with the username of the bot, by leaving it blank it will default to Player


Replace PASSWORD with the password of the account you want the bot to login to


Replace PORT with the numbers after the colon of the server address you want the bot to connect to


Replace AUTH with either microsoft or mojang


most options are case senitive

```
var hostname = '[HOSTNAME]' // the hostname of the server you want to connect to
var displayname = '[USERNAME]' // The display name or email you wish to connect to
var password1 = '[PASSWORD]' // The password of the account you want to connect to
var portid = '[PORT]' // The port of the server you want to connect to, by default it's 25565
var authtype = '[AUTH]' // The type of account you want to login to (can be microsoft or mojang)
```
