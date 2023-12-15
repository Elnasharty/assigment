
var quote =[ "You miss 100% of the shots you don't take." , "Resentment is like drinking poison and waiting for your enemies to die.", "Do not take life too seriously. You will not get out alive." , "It's not what happens to you, but how you react to it that matters." ]

var writer = ["Rank Sinatra" , " Elbert Hubbard" , " Wayne Gretzy" ,"Epictetus"]


document.getElementById('btn').onclick=function(){click()};



function click() {
var num = Math.floor( Math .random()* quote.length)
document.getElementById("demo").innerHTML= quote[num];
document.getElementById("demo2").innerHTML= writer[num];
}

