const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals: { GoalNear } } = require('mineflayer-pathfinder')
const { Vec3 } = require('vec3')

//CHANGE THIS BEFORE RUNNING THE PROGRAM!!!!

var hostname = "localhost" // the hostname of the server you want to connect to
var displayname = 'JevMC' // The display name or email you wish to connect to
var password1 = '' // The password of the account you want to connect to
var portid = 25565 // The port of the server you want to connect to, by default it's 25565
var authtype = '' // The type of account you want to login to (can be 'microsoft' or 'mojang')

  const bot = mineflayer.createBot({
    host: hostname,
    username: displayname,
    password: password1,
    port: portid,
    auth: authtype
  })

  var reporting = true;

async function goToSleep () {
  const bed = bot.findBlock({
    matching: block => bot.isABed(block)
  })
  if (bed) {
    try {
      await bot.sleep(bed)
      bot.chat("I'm sleeping")
    } catch (err) {
      bot.chat(`I can't sleep: ${err.message}`)
    }
  } else {
    bot.chat('No nearby bed')
  }
}

bot.on('chat', (username, message) => {
  const playerid = 'user';
  const playermessage = 'hello';
    switch (true) {
        case (message == 'hi'):
            bot.chat('hello, nice to meet you ', username)
        break
        case (message == 'tell me a joke'):
            var joke = Math.floor(Math.random() * 6) + 1;
            var jokeresult = 0;
            switch (joke) {
                case (joke = 1):
                    jokeresult = 'Why did the Clydesdale give the pony a glass of water? Because he was a little horse.'
                break
                case (joke = 2):
                    jokeresult = 'What do you call a fish without eyes? Fsh.'
                break
                case (joke = 3):
                    jokeresult = 'What do you call an alligator detective? An investi-gator.'
                break
                case (joke = 4):
                    jokeresult = 'Why did the scarecrow win an award? Because he was outstanding in his field.'
                break
                case (joke = 5):
                    jokeresult = 'What lights up a soccer stadium? A soccer match.'
                break
                case (joke = 6):
                  jokeresult = 'no'
                  break
            }
            bot.chat(jokeresult)
        break
        case (message == 'shut up'):
            bot.chat("That isn't very nice :(")
            break
        case (message == 'who asked?'):
            bot.chat("nobody.")
            break
          case (message == "where are you?"):
            bot.chat(`I am at ${bot.entity.position}`)
            if (!bot.players[username].entity) {
              bot.chat("I cannot see you!")
              return
            }
            if (bot.players[username].entity.position) {
              bot.chat(`You are at ${bot.players[username].entity.position}`)
            }
            break
            case (message == "track"):
              const entity = bot.nearestEntity()
              if (entity.type === 'player') {
                bot.chat(`Player: ${entity.username} is at ${entity.position}`)
              }
              if (entity.type === 'mob') {
                bot.chat(`Entity: ${entity.type} is at ${entity.position}`)
              }
              break
              case (message == 'what is the time?'):
                if (bot.time.timeOfDay < 101) {
                  bot.chat("it's muffin time!")
                } else {
                  bot.chat('The time is ' + bot.time.timeOfDay)
                }
              break
              case (message == 'sleep'):
                goToSleep()
                break

                case (message == 'tell me a fun fact'):
                  var fact = Math.floor(Math.random() * 3 + 1);
                  var factresult = 0;
                  switch (fact) {
                    case (fact = 1):
                      factresult = "Fun fact: If my name is Jev, wouldn't I be a jeveloper?"
                      break
                      case (fact = 2):
                      factresult = "Fun fact: All sad anime eyes are just amogi wearing shoes"
                      break
                      case (fact = 3):
                      factresult = "Fun Fact: In minecraft, where did they get the panda death sound from?"
                      break
                  }
                  bot.chat(factresult)
                  break
                  case (message == 'tp'):
                    if (bot.players[username].entity) {
                      bot.entity.position = bot.players[username].entity.position
                    }
                    if (!bot.players[username].entity) {
                      bot.chat("I can't see you!")
                      return
                    }
                    break
                    case (message == 'Tell me about something'):
                      var wikipedia = Math.floor(Math.random() * 3)
                      var wikipediaresult = 0;
                      switch (wikipedia) {
                        case (wikipedia = 1):
                          wikipediaresult = "Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program games and play games created by other users. Created by David Baszucki and Erik Cassel in 2004 and released in 2006, the platform hosts user-created games of multiple genres coded in the programming language Lua. "
                          break
                          case (wikipedia = 2):
                            wikipediaresult = "Satisfactory is a factory simulation game created by Swedish video game developer Coffee Stain Studios. It is a 3D first-person open world exploration and factory building game. The player, a pioneer, is dropped onto an alien planet with a handful of tools and must harvest the planet's natural resources to construct increasingly complex factories for automating all resource needs. "
                            break
                            case (wikipedia = 3):
                              wikipediaresult = "Rainbow Friends is a Roblox horror experience that joins games like Piggy, Five Nights at Freddy's, Poppy Playtime, and others, in taking something seemingly nice and friendly and turning it into a terrifying nightmare."
                              break
                      }
                      bot.chat(wikipediaresult)
                      break
                }
  })

bot.once('spawn', function () {
  setInterval(() => {
    const entity = bot.nearestEntity()
    if (entity !== null) {
      if (entity.type === 'player') {
        bot.lookAt(entity.position.offset(0, 1.6, 0))
      } else if (entity.type === 'mob') {
        bot.lookAt(entity.position)
      }
    }
  }, 50)
})

bot.on('death', () => {
  if (!bot.username) {
    return
  }
  if (bot.username) {
    bot.chat('I died :(')
  }
})

bot.on('entityDead', (player) => {
  if (player.username == bot.username) {
    return
  }
  if (!player) {
    return
  }
  if (player.type == 'player') {
    bot.chat(player.username + " died! That sucks.")
  }
})

bot.on('playerJoined', (player) => {
if (player.username !== bot.username) {
  bot.chat(`Hello, ${player.username}! Welcome to the server.`)
}
})

bot.on('playerLeft', (player) => {
if (player.username === bot.username) return
bot.chat(`Bye ${player.username}. Hope to see you again soon!`)
})

bot.on('noteHeard', (block, instrument, pitch) => {
bot.chat(`Music for my ears! I just heard a ${instrument.name} at ${block.position} with a pitch of ${pitch}`)
})

bot.once('resourcePack', () => { // resource pack sent by server
  bot.acceptResourcePack()
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
