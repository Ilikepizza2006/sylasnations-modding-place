document.getElementById('bonuses').appendChild(document.createElement('p'))

let MTITLE = document.createElement('p')
MTITLE.textContent = "MORE BONUSES MOD"
MTITLE.style.color = "purple"
document.getElementById('bonuses').appendChild(MTITLE)

let ohp = document.createElement('button')
ohp.onclick = function() {
  bType = 100
}
ohp.style.backgroundImage = "linear-gradient(to right, #d40000, #ed5555)"
ohp.style.backgroundSize = "50% 100% 50% 100%"
ohp.style.backgroundRepeat = "no-repeat"
ohp.style.borderRadius = "10px"
ohp.textContent = "MORE POWER BONUS"
document.getElementById('bonuses').appendChild(ohp)

document.getElementById('bonuses').appendChild(document.createElement('p'))

let ohp2 = document.createElement('button')
ohp2.onclick = function() {
  bType = 101
}
ohp2.style.backgroundImage = "linear-gradient(to right, #0388fc, #8ceeff)"
ohp2.style.backgroundSize = "50% 100% 50% 100%"
ohp2.style.backgroundRepeat = "no-repeat"
ohp2.style.borderRadius = "10px"
ohp2.textContent = "MORE CHANGE BONUS"
document.getElementById('bonuses').appendChild(ohp2)

bTypes["100"] = { change: ["power"], by: 100}
bTypes["101"] = { change: ["changeMax"], by: 100}
