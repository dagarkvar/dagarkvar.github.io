var date = {
    jullov: new Date("December 22, 2017 16:00:00").getTime()
}

var lovdist = date.jullov - new Date().getTime()
var lovdays = Math.floor(lovdist / (1000 * 60 * 60 * 24));