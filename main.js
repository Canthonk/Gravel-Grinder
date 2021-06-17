var Flints = 1271782178271
var Gravel = 0
var Rngflint = 0
var Shovel = 1
var ShovPrice = 10
var Prestiges = 1
var Pcost = 3000
while (Shovel >= 10) {
    document.getElementById("Prestige").textContent ="Prestige"
}
function dig() {
    if (Math.random() * 11 > 1) {
    Gravel += (1+(Prestiges-1)*Prestiges*2)
    document.getElementById("gravels").textContent = "Gravels: " + Gravel; 
    }
    if (Math.random() * 11 > 10-Shovel){
        Flints += (1+(Prestiges-1)*Prestiges*2)
        document.getElementById("Flints").textContent = "Flints: " + Flints; }
}
function ShovShop() {
    if (Shovel >= 10){
        document.getElementById("Prestige").value="Prestige";
        ShovPrice = ShovPrice**100
    }
    if (Flints > ShovPrice) {
        Shovel +=1
        Flints = Flints-ShovPrice
        ShovPrice = ShovPrice*2
        document.getElementById("Shovel").textContent = "Shovel tier:  " + Shovel; 
        document.getElementById("P1").textContent = "Shovel Price : " + ShovPrice + " Flints"; 
        document.getElementById("Flints").textContent = "Flints: " + Flints; 
        document.getElementById("P2").textContent = ""
        document.getElementById("P3").textContent = ""
        document.getElementById("P4").textContent = ""
    }
    if (Flints < ShovPrice) {
        document.getElementById("P1").textContent = "Shovel Price : " + ShovPrice + " Flints";
        document.getElementById("P2").textContent = ""
        document.getElementById("P3").textContent = ""
        document.getElementById("P4").textContent = ""
        
    }
}
function Prestige () {
    if (Shovel >= 10) {
        document.getElementById("Prestige").textContent ="Prestige"
        document.getElementById("P1").textContent = "Prestige cost : " + 3000*Prestiges
        document.getElementById("P2").textContent = "Prestige is capped at 450. The Flint and Gravel You Gain is +200%"
        document.getElementById("P3").textContent = "Prestige Requirments will go up by 3000 Flints every time you rebirth."
        document.getElementById("P4").textContent = "Prestige Milestones : 10 Prestiges : Perma Tier 9 Shovel For this rebirth 25 Prestige for +10 Flints 50 Prestiges Unlocks HARDMODE"
        if (Flints <  3000*Prestiges) {
        document.getElementById("P5").textContent = "You dont have Enough Flint for Prestige!"
        }
        if (Flints >= 3000*Prestiges) {
            Prestiges += 1
            var Flints = 0
            var Gravel = 0
        }
    }
}