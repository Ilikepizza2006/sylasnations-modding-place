document.addEventListener('DOMContentLoaded', function() {
    const wwiiilauncher = document.createElement("button");
    wwiiilauncher.id = "WWIIILauncher";
    wwiiilauncher.innerText = "Launch WWIII";
    wwiiilauncher.style.position = "relative";
    wwiiilauncher.style.marginLeft = "15px";
    wwiiilauncher.style.marginTop = "1px";
    wwiiilauncher.style.backgroundImage = "linear-gradient(to right, #61ff81, #ffea00)";
    wwiiilauncher.style.backgroundRepeat = "no-repeat";
    wwiiilauncher.style.borderRadius = "10px";
    wwiiilauncher.addEventListener('click', function() {
        const entries = Object.entries(nations);
        const fridx = 7;
        const gridx = 0;
        const [key1, value1] = entries[fridx];
        one = { key: key1, ...value1 };
        const [key2, value2] = entries[gridx];
        two = { key: key2, ...value2 };
        document.getElementById('1').textContent = one.name;
        document.getElementById('2').textContent = two.name;
    });
    const container = document.getElementById('a');
    container.appendChild(wwiiilauncher);
});
