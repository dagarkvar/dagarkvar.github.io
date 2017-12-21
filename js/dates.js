var date = {
    skolbegin: new Date("August 21, 2017 16:00:00"),
	jullov: new Date("December 21, 2017 16:00:00"),
    springbegin: new Date("January 9, 2018 16:00:00"),
    sommarlov: new Date("June 15, 2018 16:00:00"),
    sportlov: new Date("December 22, 2017 16:00:00")
}

var lovdist = date.springbegin.getTime() - new Date().getTime()
var lovdays = Math.floor(lovdist / (1000 * 60 * 60 * 24));

var lovdist = date.springbegin.getTime() - date.jullov.getTime()
var terminlangd = Math.floor(lovdist / (1000 * 60 * 60 * 24));
console.log(terminlangd)


var lovdist = date.springbegin.getTime() - new Date().getTime()
var day4 = Math.floor(lovdist / (1000 * 60 * 60 * 24));
var day4 = terminlangd - day4
var framsteg = day4 / terminlangd

var result = parseFloat(framsteg) * 100.0;
console.log(result)