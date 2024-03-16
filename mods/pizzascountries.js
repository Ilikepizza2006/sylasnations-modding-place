nations.MS = {
    key: "MS", /*key, make sure its the same as the tag, frances tag is FRA so for managing france u will do nations.FRA , key value has to be the same as the tag */
    name: "The Moss Republic", /*Name of the nation*/
    power: 25, /*Starting power */
    changeMin: 1, /*this is the ideal, higher it is = less power */
    changeMax: 5, /* higher it is = more power, 5 is for examply Germany's */
    mood: "Hungry", /*Set this to anything, it wont matter*/
    color: ["#355E3B", "#114232"]
}

canTick = false
let modTick = true
function customTick() {
  if ("FRA" in nations && "GER" in nations) {
    nations.GER.mood = "pain (france exists) "
  } else if ('GER' in nations && 'RUS' in nations && 'POL' in nations) {
    nations.POL.mood = "mega fear"
  } else if (('RUS' in nations || 'GER' in nations)  && 'POL' in nations) {
    nations.POL.mood = "fear"
  }
}
setInterval(customTick, 500)
