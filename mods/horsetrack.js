for (const n in nations) {
	delete nations[n]
}

ideologies.horse = ideologies.democratic
ideologies.horse.format = 'HorseCOUNTRY'

const template = {
	key: "HR",
	name: "",
	color: ["#dede00", "#dede00"],
	ideology: "horse",
	power: 10,
	changeMin: 1,
	changeMax: 10,
	mood: 'aughhh'
}

for (let i = 0; i < 10; i++) {
    let key = "HR" + String(i);
    nations[key] = { ...template };  // Create a shallow copy of template
    nations[key].key = "HR" + String(i);
    nations[key].name = String(i);
}
