// a launcher for World War III.

const wwiiilauncher = document.createElement("button");
wwiiilauncher.id = "WWIIILauncher";
wwiiilauncher.innerText = "Launch WWIII";
wwiiilauncher.style.position = "absolute";
wwiiilauncher.style.marginLeft = "15px";
wwiiilauncher.style.marginTop = "1px";
wwiiilauncher.style.backgroundImage = "linear-gradient(to right, #61ff81, #ffea00)";
wwiiilauncher.style.backgroundSize = "50% 100% 50% 100%";
wwiiilauncher.style.backgroundRepeat = "no-repeat";
wwiiilauncher.style.borderRadius = "10px";
const htmlofbtn = wwiiilauncher.outerHTML;
document.getElementById('a').outerHTML = document.getElementById('a').outerHTML + "<button id='WWIIILauncher' style='position: absolute; margin-left: 15px; margin-top: 1px; background-image: linear-gradient(to right, rgb(97, 255, 129), rgb(255, 234, 0)); background-repeat: no-repeat; border-radius: 10px;' onclick=\"const entries = Object.entries(nations);const fridx = 7;const gridx = 0;const [key1, value1] = entries[fridx];one = { key: key1, ...value1 };const [key2, value2] = entries[gridx];two = { key: key2, ...value2 };document.getElementById('1').textContent = one.name;document.getElementById('2').textContent = two.name;\">Launch WWIII</button>"