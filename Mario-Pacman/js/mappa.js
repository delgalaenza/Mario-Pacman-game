


// posizione iniziale dell'omino
var ominoX = 0; 
var ominoY = 0;

// posizione dell'arma
var armaX = 9; 
var armaY = 9;

//posizione iniziale cacciatore Bowser
var cacciatoreX = 8;
var cacciatoreY = 8;

//posizione iniziale cacciatore Boo
var cacciatoreBooX = 5;
var cacciatoreBooY = 12;

// valore iniziale dell'energia
var energia = 200;

// costanti e parametri per la configurazioen del gioco
var PILLOLA = 1;
var DELTA_ENERGIA = 20;
var OSTACOLO=3; 
var SFONDO = 0;
var ARMA=2;
var SPINE=5; 

var FUNGO=6;
var BANANA=7;

var omino = "omino";
var ominoConSpada = "ominoConSpada";

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

// posizionamento di ostacoli fissi:
piano[4][4] = OSTACOLO;
piano[armaX][armaY] = ARMA;


piano[9][2] = FUNGO;
piano[1][6] = BANANA;

piano[5][5] = SPINE;
piano[8][7] = SPINE;

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


function disegnaPiano(){
	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			disegnaCella(i,j);
		}
	}
	// disegna l'omino in una data posizione
	disegnaCella(ominoX,ominoY,omino); 
	// disegna l'arma in una data posizione
	disegnaCella(armaX,armaY,ARMA);


	setInterval("disegnaCacciatoreBowser()", 500);
	setInterval("disegnaCacciatoreBoo()", 500);

	for(var k=0; k<5; k++){
		generaPillole();
	}

	for(var k=0; k<5; k++){
		generaOstacolo();
	}

	setInterval("generaFungo()", 10000);
	setInterval("generaBanana()", 2000);

	setInterval("decurtaEnergia()", 1000);
	
	moveProgressBar();
	
} 




function generaPillole(){
    countPillole ++; //vanno raccolti tutti, meglio contarli
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
	
	piano[rx][ry] = valOggetto; //posiziona oggetto nella matrice
	// in rx, ry c'è un nuovo valore quindi meglio ridisegnare la cella
	disegnaCella(rx,ry);
	console.log("generato:" + valOggetto);
}

/* accorpare i tre metodi*/
function disegnaCella(i,j,valore=""){

	if(valore!=""){
		/*if(cacciatoreX==ominoX && cacciatoreY==ominoY){
			alert("game_over");
			break;
		}*/
		var id = "c"+i+"_"+j;
		var src = pathImg + valore + ".jpg";
		document.getElementById(id).src=src;

		
		/*if(valore==omino){
			document.getElementById(id).onmouseover = visualizzaSpiegazioniOmino
			document.getElementById(id).onmouseout = cancellaSpiegazioni
		}*/
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


var i = 0;
function moveProgressBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}


function aggiornaEnergia(delta){
	"use strict";
	if (delta >= 0) {
       delta = delta - 20;
    }
	document.getElementById("energia").style.width = delta + "px";
}

function decurtaEnergia(){
	energia = energia -5;
	aggiornaEnergia(energia);
}




function disegnaOmino() {
	disegnaCella(ominoX,ominoY,omino);
	document.getElementById("posizioneOmino").innerHTML=" coordinate omino: Omino(" + ominoX + "," + ominoY + ")"; 
} 



var btn1 = document.getElementById('btn1');	
btn1.addEventListener("click",generaPillole); 


/************************* SPIEGAZIONI  ************************************/

document.getElementById("pillola").addEventListener("mouseover", visualizzaSpiegazioniPillola);
document.getElementById("pillola").onmouseout = cancellaSpiegazioni

document.getElementById("arma").addEventListener("mouseover", visualizzaSpiegazioniArma);
document.getElementById("arma").onmouseout = cancellaSpiegazioni

document.getElementById("ostacolo").addEventListener("mouseover", visualizzaSpiegazioniOstacolo);
document.getElementById("ostacolo").onmouseout = cancellaSpiegazioni

document.getElementById("spine").addEventListener("mouseover", visualizzaSpiegazioniSpine);
document.getElementById("spine").onmouseout = cancellaSpiegazioni

document.getElementById("fungo").addEventListener("mouseover", visualizzaSpiegazioniFungo);
document.getElementById("fungo").onmouseout = cancellaSpiegazioni

document.getElementById("banana").addEventListener("mouseover", visualizzaSpiegazioniBanana);
document.getElementById("banana").onmouseout = cancellaSpiegazioni



function visualizzaSpiegazioniArma(){
	var s = '<img src="'+pathImg + ARMA +'.jpg">';  
	s = s + '<p> arma letale: serve a rompere gli ostacoli </p>' 
	document.getElementById("spiegazioni").innerHTML= s; 
	
}

function visualizzaSpiegazioniOmino(){
	var s = '<img src="'+pathImg + omino +'.jpg">';  
	s = s + '<p> Muovi il personaggio con le frecce o con "WASD" </p>'
	document.getElementById("spiegazioni").innerHTML= s; 
}

function visualizzaSpiegazioniFungo(){
	var s = '<img src="'+pathImg + 6 +'.jpg">';  
	s = s + '<p> ottieni + 5 velocit\u00E0 </p>'
	document.getElementById("spiegazioni").innerHTML= s; 
}

function visualizzaSpiegazioniBanana(){
	var s = '<img src="'+pathImg + 7 +'.jpg">';  
	s = s + '<p> perdi - 5 velocit\u00E0 </p>'
	document.getElementById("spiegazioni").innerHTML= s; 
}

function visualizzaSpiegazioniOstacolo(){
	var s = '<img src="'+pathImg + 3 +'.jpg">';  
	s = s + '<p> ti serve un arma per attraversarlo </p>'
	document.getElementById("spiegazioni").innerHTML= s; 
}

function visualizzaSpiegazioniPillola(){
	var s = '<img src="'+pathImg + 1 +'.jpg">';  
	s = s + '<p> colleziona tutte le pillole per vincere </p>'
	document.getElementById("spiegazioni").innerHTML= s; 
}

function visualizzaSpiegazioniSpine(){
	var s = '<img src="'+pathImg + 5 +'.jpg">';  
	s = s + '<p>fare attenzione alle spine: tolgono energia! </p>'
	document.getElementById("spiegazioni").innerHTML= s; 
}





function cancellaSpiegazioni(){
	document.getElementById("spiegazioni").innerHTML= ""; 
	
}

/*
function Cacciatore (x,y,nome){
	this.x=x;  // posizione iniziale del cacciatore 
	this.y=y;  // posizione iniziale del cacciatore 
    this.nome=nome; // proprietà utilizzata per caricare immagine del cacciatore (es. blu.jpg)
}


Cacciatore.prototype.insegui = function () {
	
	var precX = this.x;
    var precY = this.y;

    // aggiornamento della posizione
	if (this.x < ominoX) { this.x ++; }
	if (this.x > ominoX) { this.x --;   }

 	if (this.y < ominoY) { this.y ++; }
 	if (this.y > ominoY) { this.y --;   }

	document.getElementById("c"+precX+"_"+precY).src   = pathImg + piano[precX][precY ] + ".jpg";
	document.getElementById("c"+this.x+"_"+this.y).src    = pathImg + this.nome + ".jpg"; 

	// il this.nome coincide con il nome dell’immagine nel file system 

	if (this.x == ominoX && this.y == ominoY ){
		gameOver();
	}
}
*/

/*************************  CACCIATORI  ************************************/

function calcolaNuovaPosizioneCacciatoreBowser(){
	if(cacciatoreX > ominoX) {
		cacciatoreX --;
	} else {
		cacciatoreX++;
	}
             
	if(cacciatoreY > ominoY) {
		cacciatoreY --;
	} else {
		cacciatoreY++;
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
	document.getElementById("c" + cacciatoreX + "_" + cacciatoreY).src= "img1/0.jpg" ;
	calcolaNuovaPosizioneCacciatoreBowser();
	// si disegna il cacciatore nella nuova posizione
	document.getElementById("c" + cacciatoreX + "_" + cacciatoreY).src="img1/blu.jpg";
	if(cacciatoreX==ominoX && cacciatoreY==ominoY){
		alert("game_over");
	}
}

function disegnaCacciatoreBoo(){
	// si rimette nella posizione precedente quello che c'è nella matrice piano
	document.getElementById("c" + cacciatoreBooX + "_" + cacciatoreBooY).src= "img1/0.jpg" ;
	calcolaNuovaPosizioneCacciatoreBoo();
	// si disegna il cacciatore nella nuova posizione
	document.getElementById("c" + cacciatoreBooX + "_" + cacciatoreBooY).src="img1/boo.jpg";
	if(cacciatoreBooX==ominoX && cacciatoreBooY==ominoY){
		alert("game_over");
	}
}








