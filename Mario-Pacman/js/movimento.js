
//gestione dell'evento onkeydown:
function checkKeyDown(e) {
    e = e || window.event;
    switch(e.keyCode){
	case 39: destra(); break;
	case 40: giu();    break;
	case 37: sinistra();   break;
	case 38: su();    break;
	//case 65: gestioneA(); break; 
    }    
    //alert ("The Unicode character code is: " + e.keyCode);   
}

// gestione dell'evento onkeypress:
function checkKeyPress (event){
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    
	switch(chCode){
    	case 100: destra();   break;
    	case 115: giu();      break;
    	case 97:  sinistra(); break;
    	case 119: su();       break;
    }
    //alert ("The Unicode character code is: " + chCode);   
}


function controllaCella(x,y){
	if(energia<=0){
		game_over();
	}
	switch (piano[x][y]){	
		case OSTACOLO: 
		    return false;
		case FUNGO:
			play_audio_fungo();
			energia = energia + 5;
			aggiornaEnergia(energia);
			piano[x][y] = SFONDO;
			return true;
		case BANANA:
			play_audio_banana();
			energia = energia - 10;
			aggiornaEnergia(energia);
			piano[x][y] = SFONDO;
			return true;
		case PILLOLA:
			play_audio_ghost();
			piano[x][y] = SFONDO;
			countPillole--;
			if (countPillole==0){
				cambiaLivello(num_livello);
			}
			return true;
		default: 
	      return true; 
	}

	return true; 
}



var orientamento = "";

function sposta (daX,daY, aX,aY){
	if (controllaCella(aX, aY)){
		
		disegnaCella(daX,daY); 
		
		ominoX= aX;
		ominoY= aY;

		if(orientamento == "dx")
			disegnaCella(aX,aY,ominoDX);
		if(orientamento == "sx")
			disegnaCella(aX,aY,ominoSX)
		if(orientamento == "su")
			disegnaCella(aX,aY,ominoSU)
		if(orientamento == "giu")
			disegnaCella(aX,aY,ominoGIU)
	}
	
}

//mappa fissa 
//piano[0] = [0,1,...]



// l'indice di riga diminuisce
function su(){
	orientamento = "su";
	var newX = (ominoX -1 + R)%R; 
	sposta (ominoX,ominoY, newX,ominoY);
}

function sinistra(){
	orientamento = "sx";
	var newY = (ominoY -1 + C)%C; 
	sposta (ominoX,ominoY, ominoX,newY);
}
// l'indice di riga aumenta
function giu(){
	orientamento = "giu";
	var newX = (ominoX + 1+ R)%R; 
	sposta (ominoX,ominoY, newX,ominoY);
}

function destra(){
	orientamento = "dx";
	var newY = (ominoY + 1 + C)%C; 
	sposta (ominoX,ominoY, ominoX,newY);
}