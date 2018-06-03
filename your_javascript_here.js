// Variables
let hero = {
  name: 'Sal, the Script Sculptor',
  heroic: true,
  inventory: [{type: 'an old button', damage: 0}, {type: 'a couple of strings', damage: 0}, {type: ' a few matches ', damage: 0}],
  health: 10,
  weapon: {
    type: 'Mental coding',
    damage: 1
    }
}

let enemy = {
  name: 'Super Nerd, the Evil Bug Writer',
  heroic: false,
  health: 10,
  weapon: {
    type : 'Sloppy Code',
    damage: 1
  }
}

// Game logic
function rest(creature) {
  creature.health = 10
  return creature
};

function pickUpItem(creature, item) {
  creature.inventory.push(item)
  return creature
};

function dealDamage(attacker, defender) {
  let dealtDmg = attacker.weapon.damage
  let defenderCurrentHealth = defender.health
  let newHealth = defenderCurrentHealth - dealtDmg
  defender.health = newHealth
  return defender
  console.log(`${attacker} dealth ${dealtDmg} damage`)
};

function equipWeapon(creature, index) {
  let newWeapon = creature.inventory[index]
  creature.weapon = newWeapon
  creature.inventory.splice(index)
  return creature
};

function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic === true) {}
    else return null

  do {
    dealDamage(heroicCreature, creature)
    console.log(`${heroicCreature.name} dealt damage, ${creature.name} has ${creature.health} health left`)
    if (creature.health > 0 && heroicCreature.health > 0) {
      dealDamage(creature, heroicCreature)
      console.log(`${creature.name} dealt damage, ${heroicCreature.name} has ${heroicCreature.health} health left `)
    } else if (heroicCreature.health > 0 && creature.health <= 0) {
        window.alert(`${heroicCreature.name} killed ${creature.name}!`)
        console.log(`${creature.name} died`)
    } else if (heroicCreature.health <= 0 && creature.health > 0) {
        return heroicCreature.health
        window.alert(`${heroicCreature.name} died a horrible death`)
        console.log(`${heroicCreature.name} died`)
    } else if (heroicCreature.health <= 0 && creature.health <= 0) {
        return window.alert(`${heroicCreature.name} and ${creature.name} both died fighting`)
    }
  } while (heroicCreature.health > 0 && creature.health > 0)
}

function displayStats(creature) {
  window.alert(`name: ${creature.name}, health: ${creature.health}, current weapon: ${creature.weapon.type}, weapon damage: ${creature.weapon.damage}`)
}

//can't make displayInventory to work properly :(
//function displayInventory(creature) {
//  let inventory = creature.inventory
//  let i = 0
//  let length = inventory.length
//  let result = {}
//  let result2 = Object.toString(result)
//  for (i = 0; i < length ;) {
//    result =+ `${inventory[i]}`
//    i++
//  }
//  window.alert(`Inventory: ${result2}`)
//}


//can't make this displayInventory to work the way I want either :(
function displayInventory(creature) {
  let inventory = creature.inventory
  window.alert(`Inventory: ${JSON.stringify(inventory)}`)
}

// UI

let goToSleep = document.getElementById('sleep')
goToSleep.addEventListener('click', function(event) {
  rest(hero)
  window.alert('Your Hero has fully healed.')
  console.log(hero.health)
})

let selectWeapon = document.getElementById('weapon')
selectWeapon.addEventListener('click', function(event) {
  pickUpItem(hero, {type: 'Keyboard', damage: 3})
  console.log(hero.inventory)
  window.alert('Keyboard was added to your inventory.')
})

let wildNerdAppears = document.getElementById('enemy')
wildNerdAppears.addEventListener('click', function(event) {
  doBattle(hero, enemy)
})

let displayHero = document.getElementById('heroStats')
displayHero.addEventListener('click', function(event) {
  displayStats(hero)
})

let checkBackpack = document.getElementById('backpack')
checkBackpack.addEventListener('click', function(event) {
  displayInventory(hero)
})

let selectKeyboard = document.getElementById('equip')
selectKeyboard.addEventListener('click', function(event) {
  result = window.prompt('Equip keyboard?', 'yes')
  if (result === 'yes') {
    equipWeapon(hero, [3])
    window.alert('Keyboard was equiped.')
  } else {
    window.alert('Coding without a keyboard? You are mad!')
  }
})























//some placeholder text here
