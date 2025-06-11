

const ingredienser = document.querySelectorAll(".ingrediens")
const bolle = document.getElementById("bolle")
const fullbolle = document.getElementById("fullbolle")

const timerElm = document.getElementById("timer")

const musikkBakgrunn = document.getElementById("musikkBakgrunn")
const klikklyd = document.getElementById("klikklyd")

let antallKlikk = 0
let spillStartet = false

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

        }
    })
})

