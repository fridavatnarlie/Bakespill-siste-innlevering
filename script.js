

const ingredienser = document.querySelectorAll(".ingrediens")
const bolle = document.getElementById("bolle")
const fullbolle = document.getElementById("fullbolle")

const timerElm = document.getElementById("timer")

const musikkBakgrunn = document.getElementById("musikkBakgrunn")
const klikklyd = document.getElementById("klikklyd")

let antallKlikk = 0
let spillStartet = false
let klarForSteking = false

function startSpill() {
        if (!spillStartet) {
            musikkBakgrunn.loop = true
            musikkBakgrunn.play()
            spillStartet = true
            console.log("Spillet er startet")
        }
    }

ingredienser.forEach(function(ingrediens){
    ingrediens.addEventListener("click", function(){
        startSpill()
        klikklyd.currentTime = 0
        klikklyd.play()

        ingrediens.style.display = "none"
        antallKlikk++

        if (antallKlikk === 6){
            bolle.style.display = "none"
            fullbolle.style.display = "block"
            fullbolle.style.position = "absolute"
            fullbolle.style.bottom = "30px"
            fullbolle.style.right = "515px"
            fullbolle.style.height = "230px"

            klarForSteking = true

        }
    })
})

fullbolle.addEventListener("click", function() {
    if (klarForSteking) {
        fullbolle.style.display = "none"
        startTimer(10)
        klarForSteking = false
    }
});

function visKake() {
    kake.style.display = "block"
    kake.style.position = "absolute"
    kake.style.bottom = "30px"
    kake.style.right = "500px"
    kake.style.height = "230px"
}

function startTimer(sekunder) {
    let tidIgjen = sekunder
    timerElm.textContent = tidIgjen
    timerElm.style.display = "block"

    const nedtelling = setInterval(() => {
        tidIgjen--
        timerElm.textContent = tidIgjen

        if (tidIgjen <= 0) {
            clearInterval(nedtelling)
            timerElm.style.display = "none"
            visKake()
        }
    }, 1000);
}

