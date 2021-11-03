
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
		alert("game_over");
	}
	switch (piano[x][y]){
		case ARMA:
			omino = ominoConSpada;
			piano[x][y] = SFONDO; 
			return true; 	
		case OSTACOLO: 
		    return false;
		case SPINE: 
		    energia = energia -20;
			aggiornaEnergia(energia);
			return true;
		case FUNGO:
			energia = energia + 5;
			aggiornaEnergia(energia);
			piano[x][y] = SFONDO;
			return true;
		case BANANA:
			energia = energia - 10;
			aggiornaEnergia(energia);
			piano[x][y] = SFONDO;
			return true;
		case PILLOLA:
			piano[x][y] = SFONDO;
			countPillole--;
			if (countPillole==0){
				alert("hai vinto");
			}
			return true;
		default: 
	      return true; 
	}

	return true; 
}

function sposta (daX,daY, aX,aY){
	if (controllaCella(aX, aY)){
		
		disegnaCella(daX,daY); 
		
		ominoX= aX;
		ominoY= aY;
		disegnaOmino();
	}
	
}
// l'indice di riga diminuisce
function su(){
	var newX = (ominoX -1 + R)%R; 
	sposta (ominoX,ominoY, newX,ominoY);
}

function sinistra(){
	var newY = (ominoY -1 + C)%C; 
	sposta (ominoX,ominoY, ominoX,newY);
}
// l'indice di riga aumenta
function giu(){
	var newX = (ominoX + 1+ R)%R; 
	sposta (ominoX,ominoY, newX,ominoY);
}

function destra(){
	var newY = (ominoY + 1 + C)%C; 
	sposta (ominoX,ominoY, ominoX,newY);
}