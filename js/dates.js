var date = {
    skolbegin: new Date("August 21, 2017 16:00:00"),
	jullov: new Date("December 22, 2017 16:00:00"),
    sportlov: new Date("December 22, 2017 16:00:00")
}

var lovdist = date.jullov.getTime() - new Date().getTime()
var lovdays = Math.floor(lovdist / (1000 * 60 * 60 * 24));




var now = date.skolbegin;
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day2 = Math.floor(diff / oneDay);

var now = date.jullov;
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

var terminlangd = day - day2

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day3 = Math.floor(diff / oneDay);

var day4 = day3 - day2
var framsteg = day4 / terminlangd

var result = parseFloat(framsteg) * 100.0;