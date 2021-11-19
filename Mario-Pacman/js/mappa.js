


// posizione iniziale dell'omino
var ominoX = 0; 
var ominoY = 0;



//posizione iniziale cacciatore Bowser
var cacciatoreX = 8;
var cacciatoreY = 8;

//posizione iniziale cacciatore Boo
var cacciatoreBooX = 5;
var cacciatoreBooY = 12;

// posizione iniziale cacciatore Wario
var cacciatoreWarioX = 19;
var cacciatoreWarioY = 19;

// valore iniziale dell'energia
var energia = 200;

// costanti e parametri per la configurazioen del gioco
var PILLOLA = 1;
var DELTA_ENERGIA = 20;
var OSTACOLO=3; 
var SFONDO = 0;


var FUNGO=6;
var BANANA=7;


var ominoDX = "ominoDX";

var ominoSX = "ominoSX";

var ominoSU = "ominoSU";

var ominoGIU = "ominoGIU";


var pathImg = "img1/";

// dichiarazione variabili di lavoro
var i=0;
var j=0;
var countPillole = 0;

// numero di righe e numero di colonne
var R = 10; 
var C = 20; 

// definizione id matrice, come array di array
var piano = new Array();

for (var i=0; i<R; i++) {
	piano[i]=new Array(); // ogni riga contiene un array: si ha così una matrice
	for (var j=0; j<C;j++){
		piano[i][j]=SFONDO; // si assegna un valore di default a tutte le celle
	}
}

function clear(){

	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			var id = "c"+i+"_"+j;
			document.getElementById(id).src= "img1/0.jpg";
			piano[i][j]=SFONDO;
		}
	}

	countPillole = 0;

	resetEnergia();
	

	clearInterval(t1);
	clearInterval(t2);

	clearInterval(t3);

	clearInterval(t4);
	clearInterval(t5);

	clearInterval(t7);
	clearInterval(t8);
	
}

// posizionamento di ostacoli fissi:


function mostraMatriceHTML(){
	var s = "";

	for (var i=0; i<R; i++) {
		for (var j=0; j<C;j++){
			s = s + piano[i][j] + " " ;
		}
		s = s + "<br>";
	}
	
   
    var e =  document.getElementById("messaggioDebug"); 
	e.innerHTML=s; 
}

 /*************************  AREA DI GIOCO  ************************************/

 var t1;
 var t2;
 var t3;
 var t4;
 var t5;

 var t7;
 var t8;

 var num_livello = 0;

function  cambiaLivello(num_livello){
	 if(num_livello == 2)
	 	livello2();
	 if(num_livello == 3)
	 	livello3();
	 if(num_livello == 4)
	 	livello4();
 }

 /************************************* livello 1 *******************************************/

 function livello1(){

	clear();

	num_livello = 2;

	moveProgressBar();

	document.getElementById("playButton").style.display = 'none'

	play_audio_start();

	document.getElementById("livello").innerHTML= "livello 1"; 

	window.addEventListener('scroll', noScroll);

	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			disegnaCella(i,j);
		}
	}

	ominoX = 5;
	ominoY = 0;

	// disegna l'omino in una data posizione
	disegnaCella(ominoX,ominoY,ominoDX); 

	for(let i=1; i<=4; i++){
		generaPillole();
	}
	

	for(var k=0; k<5; k++){
		generaOstacolo();
	}
	
	setTimeout(play_game1,1000)

}

function play_game1(){


	t8 = setInterval("generaPilloleNuove()",15000);

	t2 = setInterval("disegnaCacciatoreBoo()", 500);

	t3 = setInterval("generaFungo()", 10000);
	t4 = setInterval("generaBanana()", 2000);

	t5 = setInterval("decurtaEnergia()", 2000);


}

/********************* livello 2 *****************************/

function livello2(){

	num_livello = 3;

	clear();

	document.getElementById("livello").innerHTML= "livello 2"; 

	window.addEventListener('scroll', noScroll);

	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			disegnaCella(i,j);
		}
	}

	// disegna l'omino in una data posizione
	disegnaCella(ominoX,ominoY,ominoDX); 

	for(var k=0; k<10; k++){
		generaPillole();
	}

	for(var k=0; k<20; k++){
		generaOstacolo();
	}
	
	setTimeout(play_game2,5000);

}

function play_game2(){

	t8 = setInterval("generaPilloleNuove()",15000);
	
	t1 = setInterval("disegnaCacciatoreBoo()", 500);

	t3 = setInterval("generaFungo()", 10000);
	t4 = setInterval("generaBanana()", 2000);

	t5 = setInterval("decurtaEnergia()", 1000);


}

/********************* livello 3 *****************************/

function livello3(){

	num_livello = 4;

	clear();

	document.getElementById("livello").innerHTML= "livello 3"; 

	window.addEventListener('scroll', noScroll);

	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			disegnaCella(i,j);
		}
	}

	// disegna l'omino in una data posizione
	disegnaCella(ominoX,ominoY,ominoDX); 

	for(var k=0; k<15; k++){
		generaPillole();
	}

	for(var k=0; k<20; k++){
		generaOstacolo();
	}
	
	setTimeout(play_game3,5000);

}

function play_game3(){

	t8 = setInterval("generaPilloleNuove()",15000);

	t1 = setInterval("disegnaCacciatoreBoo()", 500);
	t2 = setInterval("disegnaCacciatoreBowser()", 500);

	t3 = setInterval("generaFungo()", 10000);
	t4 = setInterval("generaBanana()", 2000);

	t5 = setInterval("decurtaEnergia()", 1000);


}

/********************* livello 4 *****************************/

function livello4(){

	num_livello = 5;

	clear();

	document.getElementById("livello").innerHTML= "final level"; 

	window.addEventListener('scroll', noScroll);

	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			disegnaCella(i,j);
		}
	}

	// disegna l'omino in una data posizione
	disegnaCella(ominoX,ominoY,ominoDX); 

	for(var k=0; k<20; k++){
		generaPillole();
	}

	for(var k=0; k<50; k++){
		generaOstacolo();
	}
	
	setTimeout(play_game4,2000)

}

function play_game4(){

	t8 = setInterval("generaPilloleNuove()",15000);
	t7 = setInterval("generaOstacolo();", 500);

	t1 = setInterval("disegnaCacciatoreBowser()", 500);
	t2 = setInterval("disegnaCacciatoreBoo()", 500);
	

	t3 = setInterval("generaFungo()", 1000);
	t4 = setInterval("generaBanana()", 2000);

	t5 = setInterval("decurtaEnergia()", 800);
   
   moveProgressBar();

}



function disegnaPiano(){

	play_audio_start();

	document.getElementById("livello").innerHTML= "livello 1"; 

	window.addEventListener('scroll', noScroll);

	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			disegnaCella(i,j);
		}
	}

	// disegna l'omino in una data posizione
	disegnaCella(ominoX,ominoY,ominoDX); 

	for(var k=0; k<5; k++){
		generaPillole();
	}

	for(var k=0; k<15; k++){
		generaOstacolo();
	}
	
	setTimeout(play_game,5000)

} 

function play_game(){


	 t1 = setInterval("disegnaCacciatoreBowser()", 500);
	 t2 = setInterval("disegnaCacciatoreBoo()", 500);

	 t3 = setInterval("generaFungo()", 10000);
	 t4 = setInterval("generaBanana()", 2000);

	 t5 = setInterval("decurtaEnergia()", 1000);
	
	moveProgressBar();

}




function generaPillole(){
    countPillole ++; //vanno raccolti tutti, meglio contarli
	generaOggetto(PILLOLA);
}

function generaPilloleNuove(){
	generaOggetto(PILLOLA);
}


function generaOstacolo(){
	generaOggetto(OSTACOLO);
}

function generaBanana(){
	generaOggetto(BANANA)
}

function generaFungo(){
	generaOggetto(FUNGO)
}



function generaOggetto(valOggetto){
	// si genera un indice di riga casuale tra 0 e R
	var r = Math.random(); 
	rx = Math.floor( r * R);
	// si genera un indice di colonna casuale tra 0 e C
	var c = Math.random(); 
	ry = Math.floor( c * C);
	// utilizzando rx e rc si ha una posizione casuale nel piano di gioco
	
	if(piano[rx][ry] == PILLOLA)
		return;
	piano[rx][ry] = valOggetto; //posiziona oggetto nella matrice
	// in rx, ry c'è un nuovo valore quindi meglio ridisegnare la cella
	disegnaCella(rx,ry);
	console.log("generato:" + valOggetto);
}

/* accorpare i tre metodi*/
function disegnaCella(i,j,valore=""){

	if(valore!=""){
		var id = "c"+i+"_"+j;
		var src = pathImg + valore + ".jpg";
		document.getElementById(id).src=src;
	}
	else{
	var id = "c"+i+"_"+j;
	var src = pathImg + piano[i][j] + ".jpg"; // es: img1/0.jpg
	document.getElementById(id).src= src;
	}
} 


/*function disegnaCellaSpeciale(i,j,valore) {
	var id = "c"+i+"_"+j;
	var src = pathImg + valore + ".jpg";
	document.getElementById(id).src=src;

		
	if(valore==omino){
		document.getElementById(id).onmouseover = visualizzaSpiegazioniOmino
		document.getElementById(id).onmouseout = cancellaSpiegazioni
	}



} */


 /*************************  STATISTICHE DI GIOCO  ************************************/



var t6;
var w=0;
function moveProgressBar() {
	if(w==0){
		w=1;
    	var elem = document.getElementById("myBar");
    	var width = 10;
    	var id = setInterval(frame, 1000);
		t6=id;
    	function frame() {
      		if (width >= 100) {
       			 clearInterval(id);
        		 w = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
   }
}

function resetProgressBar(){
	w=0;
	let elem = document.getElementById("myBar");
	clearInterval(t6);
	elem.style.width = 10 + "%";
	elem.innerHTML = 10  + "%";
}


function aggiornaEnergia(delta){
	"use strict";
	if (delta >= 0) {
       delta = delta - 20;
    }
	document.getElementById("energia").style.width = delta + "px";
}

function decurtaEnergia(){
	energia = energia -10;
	aggiornaEnergia(energia);
	console.log("energia" + energia);
}

function resetEnergia(){
	document.getElementById("energia").style.width = 200 + "px";
	energia = 200;
}




/*************************  CACCIATORI  ************************************/

var scelta;
function calcolaNuovaPosizioneCacciatoreBowser(){
	if(cacciatoreX > ominoX) {
		scelta = false;
		cacciatoreX --;
	} else {
		scelta = true;
		cacciatoreX++;
	}
             
	if(cacciatoreY > ominoY) {
		cacciatoreY --;
		scelta = false;
	} else {
		cacciatoreY++;
		scelta = true;
	}
}

function calcolaNuovaPosizioneCacciatoreBoo(){
	var dir = Math.round(Math.random());
	// dir può valere 0 o 1, javascript converte questi valori in false/true se li usiamo in espressioni boolean 
 	if (cacciatoreBooY < ominoY && dir) { cacciatoreBooY  ++;} else 
 	if (cacciatoreBooY > ominoY && dir) { cacciatoreBooY--;  } else

	if (cacciatoreBooX < ominoX && !dir) {cacciatoreBooX ++;} else
	if (cacciatoreBooX > ominoX && !dir) {cacciatoreBooX  --;}
}



function disegnaCacciatoreBowser(){
	// si rimette nella posizione precedente quello che c'è nella matrice piano
	if(piano[cacciatoreX][cacciatoreY] == PILLOLA)
		document.getElementById("c" + cacciatoreX + "_" + cacciatoreY).src= "img1/1.jpg" ;
	else
		document.getElementById("c" + cacciatoreX + "_" + cacciatoreY).src= "img1/0.jpg" ;
	calcolaNuovaPosizioneCacciatoreBowser();
	// si disegna il cacciatore nella nuova posizione
	if(scelta == true)
		document.getElementById("c" + cacciatoreX + "_" + cacciatoreY).src="img1/bowserDX.jpg";
	else
		document.getElementById("c" + cacciatoreX + "_" + cacciatoreY).src="img1/bowserSX.jpg";

	if(cacciatoreX==ominoX && cacciatoreY==ominoY){
		game_over();
	}
}

function disegnaCacciatoreBoo(){
	// si rimette nella posizione precedente quello che c'è nella matrice piano
	if(piano[cacciatoreBooX][cacciatoreBooY] == PILLOLA)
		document.getElementById("c" + cacciatoreBooX + "_" + cacciatoreBooY).src= "img1/1.jpg" ;
	else
		document.getElementById("c" + cacciatoreBooX + "_" + cacciatoreBooY).src= "img1/0.jpg" ;
	calcolaNuovaPosizioneCacciatoreBoo();
	// si disegna il cacciatore nella nuova posizione
	document.getElementById("c" + cacciatoreBooX + "_" + cacciatoreBooY).src="img1/boo.jpg";
	if(cacciatoreBooX==ominoX && cacciatoreBooY==ominoY){
		game_over();
	}
}









/*************game over *************** */

function game_over(){

	window.removeEventListener('scroll', noScroll);

	resetProgressBar();

	clear();

	document.getElementById("c0_2").src="img1/game_over_bg.jpg";
	document.getElementById("c0_3").src="img1/game_over_bg.jpg";
	document.getElementById("c0_8").src="img1/game_over_bg.jpg";
	document.getElementById("c0_9").src="img1/game_over_bg.jpg";
	document.getElementById("c0_11").src="img1/game_over_bg.jpg";
	document.getElementById("c0_15").src="img1/game_over_bg.jpg";
	document.getElementById("c0_17").src="img1/game_over_bg.jpg";
	document.getElementById("c0_18").src="img1/game_over_bg.jpg";
	document.getElementById("c0_19").src="img1/game_over_bg.jpg";

	document.getElementById("c1_1").src="img1/game_over_bg.jpg";
	document.getElementById("c1_2").src="img1/game_over_bg.jpg";
	document.getElementById("c1_3").src="img1/game_over_bg.jpg";
	document.getElementById("c1_7").src="img1/game_over_bg.jpg";
	document.getElementById("c1_9").src="img1/game_over_bg.jpg";
	document.getElementById("c1_11").src="img1/game_over_bg.jpg";
	document.getElementById("c1_12").src="img1/game_over_bg.jpg";
	document.getElementById("c1_14").src="img1/game_over_bg.jpg";
	document.getElementById("c1_15").src="img1/game_over_bg.jpg";
	document.getElementById("c1_17").src="img1/game_over_bg.jpg";

	document.getElementById("c2_1").src="img1/game_over_bg.jpg";
	document.getElementById("c2_6").src="img1/game_over_bg.jpg";
	document.getElementById("c2_9").src="img1/game_over_bg.jpg";
	document.getElementById("c2_11").src="img1/game_over_bg.jpg";
	document.getElementById("c2_13").src="img1/game_over_bg.jpg";
	document.getElementById("c2_15").src="img1/game_over_bg.jpg";
	document.getElementById("c2_17").src="img1/game_over_bg.jpg";
	document.getElementById("c2_18").src="img1/game_over_bg.jpg";
	document.getElementById("c2_19").src="img1/game_over_bg.jpg";

	document.getElementById("c3_1").src="img1/game_over_bg.jpg";
	document.getElementById("c3_2").src="img1/game_over_bg.jpg";
	document.getElementById("c3_3").src="img1/game_over_bg.jpg";
	document.getElementById("c3_6").src="img1/game_over_bg.jpg";
	document.getElementById("c3_9").src="img1/game_over_bg.jpg";
	document.getElementById("c3_11").src="img1/game_over_bg.jpg";
	document.getElementById("c3_15").src="img1/game_over_bg.jpg";
	document.getElementById("c3_17").src="img1/game_over_bg.jpg";

	document.getElementById("c4_1").src="img1/game_over_bg.jpg";
	document.getElementById("c4_4").src="img1/game_over_bg.jpg";
	document.getElementById("c4_6").src="img1/game_over_bg.jpg";
	document.getElementById("c4_7").src="img1/game_over_bg.jpg";
	document.getElementById("c4_8").src="img1/game_over_bg.jpg";
	document.getElementById("c4_9").src="img1/game_over_bg.jpg";
	document.getElementById("c4_11").src="img1/game_over_bg.jpg";
	document.getElementById("c4_15").src="img1/game_over_bg.jpg";
	document.getElementById("c4_17").src="img1/game_over_bg.jpg";

	document.getElementById("c5_2").src="img1/game_over_bg.jpg";
	document.getElementById("c5_3").src="img1/game_over_bg.jpg";
	document.getElementById("c5_6").src="img1/game_over_bg.jpg";
	document.getElementById("c5_9").src="img1/game_over_bg.jpg";
	document.getElementById("c5_11").src="img1/game_over_bg.jpg";
	document.getElementById("c5_15").src="img1/game_over_bg.jpg";
	document.getElementById("c5_17").src="img1/game_over_bg.jpg";
	document.getElementById("c5_18").src="img1/game_over_bg.jpg";
	document.getElementById("c5_19").src="img1/game_over_bg.jpg";

	document.getElementById("c7_2").src="img1/game_over_bg.jpg";
	document.getElementById("c7_3").src="img1/game_over_bg.jpg";
	document.getElementById("c7_4").src="img1/game_over_bg.jpg";
	document.getElementById("c7_6").src="img1/game_over_bg.jpg";
	document.getElementById("c7_10").src="img1/game_over_bg.jpg";
	document.getElementById("c7_12").src="img1/game_over_bg.jpg";
	document.getElementById("c7_13").src="img1/game_over_bg.jpg";
	document.getElementById("c7_15").src="img1/game_over_bg.jpg";
	document.getElementById("c7_16").src="img1/game_over_bg.jpg";

	document.getElementById("c8_2").src="img1/game_over_bg.jpg";
	document.getElementById("c8_4").src="img1/game_over_bg.jpg";
	document.getElementById("c8_7").src="img1/game_over_bg.jpg";
	document.getElementById("c8_9").src="img1/game_over_bg.jpg";
	document.getElementById("c8_12").src="img1/game_over_bg.jpg";
	document.getElementById("c8_15").src="img1/game_over_bg.jpg";
	document.getElementById("c8_16").src="img1/game_over_bg.jpg";

	
	document.getElementById("c9_2").src="img1/game_over_bg.jpg";
	document.getElementById("c9_3").src="img1/game_over_bg.jpg";
	document.getElementById("c9_4").src="img1/game_over_bg.jpg";
	document.getElementById("c9_8").src="img1/game_over_bg.jpg";
	document.getElementById("c9_12").src="img1/game_over_bg.jpg";
	document.getElementById("c9_13").src="img1/game_over_bg.jpg";
	document.getElementById("c9_15").src="img1/game_over_bg.jpg";
	document.getElementById("c9_17").src="img1/game_over_bg.jpg";

	play_audio_death();

	document.getElementById("buttonAppear").innerHTML = '<button onclick="livello1()">play-again</button>';

}


//blocca pagina su area di gioco
function noScroll() {
  window.scrollTo(0, 120);
}

/********** GESTIONE AUDIO ************************ */


function play_audio_death(){
 	var audio = new Audio('audio/Pacman-death-sound.mp3');
 	audio.play();
}

function play_audio_start(){
	 var audio = new Audio('audio/start-game.mp3');
	 audio.play();
}

function play_audio_banana(){
	 var audio = new Audio('audio/banana.mp3');
	 audio.play();
}
 function play_audio_fungo(){
 	var audio = new Audio('audio/mushroom.mp3');
	audio.play();
}

function play_audio_ghost(){
	 var audio = new Audio('audio/pacman_eatghost.mp3');
     audio.play();
}






