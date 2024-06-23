nations.MOS /*key, 3 uppercase letters*/ = { 
    key: "MOS", /*key of the nation*/
    name: "Mosslandia", /*key of the nation*/
    ideology: "democratic", /*Impacts power change and nation name.*/
    power: 10, /*starting power*/
    changeMin: 2, /*Minimal Change per update*/
    changeMax: 7, /*Maximal Change per update*/
    color: ["#87A822", "#B7D019", "#E1FF21"], /*color*/
    mood: 'hungry'
}

ideologies.anarchism /*name of the ideology*/ = {
    change: 5, /*Impacts power change, this is democratic change for example*/
    format: "Anarchic country of COUNTRY", /*Would change like Poland to Empire of Poland*/
    max: 1500 /*The maximum power that the country can have*/
}
