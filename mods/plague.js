function plagueTime() {
    one = nations.GER
    two = nations.FRA
    document.getElementById('1').textContent = one.name;
    document.getElementById('2').textContent = two.name;
}

const plagueb = document.createElement("button");
plagueb.id = "PlagueButton";
plagueb.onclick = function() {
    plagueTime()
}; 
plagueb.innerText = "Deploy The Plague";
plagueb.style.position = "absolute";
plagueb.style.marginLeft = "15px";
plagueb.style.marginTop = "1px";
plagueb.className = "purple";
document.getElementById('plaguebutton').appendChild(plagueb)