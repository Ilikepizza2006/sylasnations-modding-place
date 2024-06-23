function launchWWIII() {
    const entries = Object.entries(nations);
    const fridx = 6;
    const gridx = 0;
    const [key1, value1] = entries[fridx];
    one = { key: key1, ...value1 };
    const [key2, value2] = entries[gridx];
    two = { key: key2, ...value2 };
    document.getElementById('1').textContent = one.name;
    document.getElementById('2').textContent = two.name;
}

const wwiiilauncher = document.createElement("button");
wwiiilauncher.id = "WWIIILauncher";
wwiiilauncher.onclick = function() { //<------- !!!
    launchWWIII()
}; 
wwiiilauncher.innerText = "Launch WWIII";
wwiiilauncher.style.position = "absolute";
wwiiilauncher.style.marginLeft = "15px";
wwiiilauncher.style.marginTop = "1px";
wwiiilauncher.style.backgroundImage = "linear-gradient(to right, #61ff81, #ffea00)";
wwiiilauncher.style.backgroundSize = "50% 100% 50% 100%";
wwiiilauncher.style.backgroundRepeat = "no-repeat";
wwiiilauncher.style.borderRadius = "10px";
document.getElementById('warbutton').appendChild(wwiiilauncher)