# JevMC
A mineflayer bot that requires little to no coding to run

Please consider the following before installing:

```This is a WORK IN PROGRESS!!!! Most things will be buggy and/or will not work!!```

# Installation
## Short-ish way
To install the bot, Firstly download VS Code [here](https://code.visualstudio.com)

Download the source code, then unzip the file.

Open the unzipped folder in Visual Code Studio

When Visual Code Studio is open, click "Run" then from the drop down menu, click "start debugging"

## Longer way

### Part 1
To install the bot, Firstly download VS Code [here](https://code.visualstudio.com)

Then run the following commands by clicking **Terminal > New Terminal**

Then Click where it says ">"

Then type the following:
```npm install mineflayer```

```npm install mineflayer-pathfinder``` (I didn't complete the code for the pathfinding part of the bot, but install it anyway)

```npm install vec3```

### Part 2
Replace HOSTNAME with the server address you want the bot to connect to


Replace USERNAME with the username of the bot, by leaving it blank it will default to Player


Replace PASSWORD with the password of the account you want the bot to login to


Replace PORT with the numbers after the colon of the server address you want the bot to connect to


Replace AUTH with either microsoft or mojang


most options are case senitive
```var hostname = '[HOSTNAME]' // the hostname of the server you want to connect to
var displayname = '[USERNAME]' // The display name or email you wish to connect to
var password1 = '[PASSWORD]' // The password of the account you want to connect to
var portid = '[PORT]' // The port of the server you want to connect to, by default it's 25565
var authtype = '[AUTH]' // The type of account you want to login to (can be microsoft or mojang)```
