let nations = {
  "GER": {
    key: "GER",
    name: "Germany",
    ideology: "democratic",
    power: 17,
    changeMin: 1,
    changeMax: 5,
    color: ["#4a4949", "#4a4949", "#e82727", "#e82727", "#edc124", "#edc124"],
    mood: "bread"
  },
  "POL": {
    key: "POL",
    name: "Poland",
    ideology: "democratic",
    power: 13,
    changeMin: 1,
    changeMax: 4,
    color: ["#ff0000", "#ff0000", "#dedede", "#dedede"],
    mood: "sad"
  },
  "CZE": {
    key: "CZE",
    name: "Czech",
    ideology: "democratic",
    power: 14,
    changeMin: 1,
    changeMax: 4,
    attributes: ["noformat"],
    format: 'COUNTRY republic',
    color: ["#ff0000", "#2471ed", "#dedede"],
    mood: "beer"
  },
  "SKO": {
    key: "SKO",
    name: "Slovakia",
    ideology: "democratic",
    power: 8,
    changeMin: 1,
    changeMax: 3,
    color: ["#ff0000", "#2471ed", "#dedede"],
    mood: "smol"
  },
  "RUS": {
    key: "RUS",
    name: "Russia",
    ideology: "democratic",
    power: 24,
    changeMin: 1,
    changeMax: 7,
    color: ["#ff0000", "#2471ed", "#dedede"],
    mood: "vodka"
  },
  "USA": {
    key: "USA",
    name: "United States",
    ideology: "democratic",
    attributes: [
      "noformat"
    ],
    power: 24,
    changeMin: 1,
    changeMax: 7,
    color: ["#2471ed", "#dedede", "#ff0000"],
    mood: "free"
  },
  "HUN": {
    key: "HUN",
    name: "Hungary",
    ideology: "democratic",
    power: 12,
    changeMin: 1,
    changeMax: 3,
    color: ["#ed3c2f", "#e0e0e0", "#35b83c"],
    mood: "ew"
  },
  "FRA": {
    key: "FRA",
    name: "France",
    ideology: "democratic",
    power: 15,
    changeMin: 1,
    changeMax: 5,
    color: ["#041185", "#f2f2f2", "#f53333"],
    mood: "quassont"
  },
  "SCT": {
    key: "SCT",
    name: "Scotland",
    ideology: "democratic",
    power: 5,
    changeMin: 1,
    changeMax: 2,
    color: ["#33e1f5", "#f2f2f2", "#33e1f5"],
    mood: "nub"
  },
}

const ideologies = {
  democratic: {
    format: 'Republic of COUNTRY',
    change: 5
  },
  communist: {
    format: 'Socialist Republic of COUNTRY',
    change: 3
  },
  fascist: {
    format: 'Empire of COUNTRY',
    change: 4
  },
  monarchist: {
    format: 'Kingdom of COUNTRY',
    change: 6
  },
}

let backMap = {}

let one = null
let year = 0
let ycounter = 0
let two = null
let canTick = true
let used = false
let mods = []
let menuMods = false
let bType = 3

function c() {
  const entries = Object.entries(nations);

  const index1 = Math.floor(Math.random() * entries.length);
  const [key1, value1] = entries[index1];
  one = { key: key1, ...value1 };

  let index2;
  do {
    index2 = Math.floor(Math.random() * entries.length);
  } while (index2 === index1);

  const [key2, value2] = entries[index2];
  two = { key: key2, ...value2 };

  document.getElementById('1').textContent = one.name;
  document.getElementById('2').textContent = two.name;
}

function tick() {
  ycounter += 0.5
  if (ycounter == 10.0) {
    year += 1
    ycounter = 0
    document.getElementById('year').textContent = 'YEAR: ' + year
  }
  if (canTick == true) {
    backMap = {}
    for (const k in nations) {
      const idea = nations[k].ideology
      if (idea in ideologies) {
        nations[k].power += (Math.floor(Math.random() * (nations[k].changeMax - nations[k].changeMin + 1) - nations[k].changeMin)) + (Math.floor(Math.random() * (ideologies[idea].change - (ideologies[idea].change - 3) + 1)))
      }
    }
    const natsList = document.getElementById('nats');
    while (natsList.firstChild) {
      natsList.removeChild(natsList.firstChild);
    }
    for (const k in nations) {
      const nl = document.createElement('li');
      nl.onclick = function() {
        bonus(bType, nations[k].key)
      }
      if (nations[k].attributes && nations[k].attributes.includes("noformat")) {
        nl.textContent = k + ": " + nations[k].name + ", POWER: " + nations[k].power + ", MOOD: " + nations[k].mood + ", IDEOLOGY: " + nations[k].ideology;
      } else if (nations[k].format) {
        nl.textContent = k + ": " + nations[k].format.replace('COUNTRY', nations[k].name) + ", POWER: " + nations[k].power + ", MOOD: " + nations[k].mood + ", IDEOLOGY: " + nations[k].ideology;
      } else {
        nl.textContent = k + ": " + ideologies[nations[k].ideology].format.replace('COUNTRY', nations[k].name) + ", POWER: " + nations[k].power + ", MOOD: " + nations[k].mood + ", IDEOLOGY: " + nations[k].ideology;
      }
      nl.style = "background-image: linear-gradient(to right, " + nations[k].color + ");" + "background-size: 1500px;" + " background-repeat: no-repeat; cursor: pointer;"
      natsList.appendChild(nl);
    }
  }
  mood()
}

function mood() {
  for (const k in nations) {
    if (nations[k].power < 0 && nations[k].power > -50) {
        nations[k].mood = "sad";
    } else if (nations[k].power < -49) {
        nations[k].mood = "pain";
    } else if (nations[k].power > 0 && nations[k].power <= 50) {
        nations[k].mood = "normal";
    } else if (nations[k].power > 50 && nations[k].power <= 135) {
        nations[k].mood = "stronk";
    } else if (nations[k].power > 135) {
        nations[k].mood = "super stronk";
    }

    if ("FRA" in nations && "GER" in nations) {
      nations.GER.mood = "pain (france exists) "
    }
  }
}

function show() {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  document.getElementById('selected').textContent = backMap[x]
}

function bonus(bt, t) {
  if (t in nations) {
    if (bt == 1) {
      nations[t].power = nations[t].power + 5
    } else if (bt == 2) {
      nations[t].changeMin = nations[t].changeMin + 1
    } else if (bt == 3) {
      nations[t].changeMax = nations[t].changeMax + 1
    }
  }
}


function a() {
  if (one.power > two.power) {
    nations[two.key].power -= two.changeMin + 5
    nations[two.key].mood = "sad"
    nations[one.key].power += two.changeMin + 5
    document.getElementById('act').textContent = "WON: " + nations[one.key].name
    document.getElementById('act').style = "background-image: linear-gradient(to right, #006eff, #00aaff); background-size: 180px 1250px; background-repeat: no-repeat;"
  } else if (one.power === two.power) {
    document.getElementById('act').textContent = "TIE: " + nations[one.key].name + " - " + nations[two.key].name;
    document.getElementById('act').style = "background-image: linear-gradient(to right, #006eff, #00aaff); background-size: 180px 1250px; background-repeat: no-repeat;"
    nations[two.key].power -= two.changeMax - 3
    nations[one.key].power -= one.changeMax - 3
  } else {
    nations[two.key].power += one.changeMin + 5
    nations[one.key].power -= one.changeMin + 5
    nations[one.key].mood = "sad"
    document.getElementById('act').textContent = "WON: " + nations[two.key].name
    document.getElementById('act').style = "background-image: linear-gradient(to right, #006eff, #00aaff); background-size: 180px 1250px; background-repeat: no-repeat;"
  }
  c()
}

function loadMod(mod) {
  try {
    const scr = document.createElement('script');
    scr.src = "mods/" + mod
    document.head.appendChild(scr);
  } catch (err) {
    console.log(err)
  }
}

function saveMod(mod) {
  try {
    if (!mods.includes(mod)) {
      mods.push(mod);
      localStorage.setItem('mods', JSON.stringify(mods));
      alert('Reload page to see changes');
    } else {
      alert('Mod already saved!');
    }
  } catch (err) {
    console.error(err);
  }
}

function removeMod(mod) {
  try {
    if (mods.includes(mod)) {
      mods.pop(mod)
      localStorage.setItem('mods', JSON.stringify(mods))
      alert('Reload page to see changes')
    } else {
      alert('Mod isnt saved!')
    }
  } catch (err) {
    console.error(err)
  }
}

function modMenu() {
  if (menuMods == false) {
    document.getElementById('m').style.display = "block"
    document.getElementById('m2').style.display = "block"
    document.getElementById('m3').style.display = "block"
    document.getElementById('mList').style.display = "block"
    document.getElementById('mList2').style.display = "block"
    menuMods = true
  } else {
    document.getElementById('m').style.display = "none"
    document.getElementById('m2').style.display = "none"
    document.getElementById('m3').style.display = "none"
    document.getElementById('mList').style.display = "none"
    document.getElementById('mList2').style.display = "none"
    menuMods = false
  }
}

function createButton(class_, textContent, function_) {
  const classes = ['red', 'blue', 'green']
  if (classes.includes(class_)) {
    let button = document.createElement('button')
    button.className = class_
    button.textContent = textContent
    button.onclick = function_
    document.getElementById('cbutton').appendChild(button)
  }
}

window.onload = function() {
  console.log('hi')
  for (const c of document.getElementById('nats').children) {
    document.getElementById('nats').removeChild(c)
  }
  for (const k in nations) {
    const nl = document.createElement('li')
    nl.textContent = k + ": " + nations[k].name + ", POWER: " + nations[k].power
    document.getElementById('nats').appendChild(nl)
  }
  try {
    mods = JSON.parse(localStorage.mods)
    for (const m of mods) {
      loadMod(m)
      let nl = document.createElement('li')
      nl.textContent = m
      document.getElementById('mList').appendChild(nl)
    }
  } catch (err) {
    console.log('no mods/invalid mod')
  }
}

setInterval(tick, 500)
