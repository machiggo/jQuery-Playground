console.info("05_lagerbestand.js");
$(document).ready(function() {
	// Ajax-Anfrage mit jQuery $.getJSON
	$.getJSON("05_lagerbestand.json", function(data) {
		//Ausgabevariable (Leerstring)
		var html = "";
		//Aus dem JSON-Objekt das Array Artikel auslesen
		var artikel = data.Lager.Artikel; //=> [{},{},{},{},{},...]
		//Liste für Ausgabe beginnen
		var html = "<ul>";
		//Schleife die über das Array artikel läuft um...
		for(var i = 0; i < artikel.length; i++ ) {
			//...auf den Text jeder einzelnen Eigenschaft Bezeichnung zuzugreifen
			html += "<li>" + artikel[i].Bezeichnung + "</li>";		
		}
		//Liste für Ausgabe schließen
		html += "</ul>";
		// div#ausgabe leeren und Liste neu eintragen
		$("#ausgabe").empty().append(html);
	}); // end $.getJSON lagerbestand.json
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$("input[value='Daten anzeigen']").on("click", function(e) {
		e.preventDefault();
		$.getJSON("05_lagerbestand.json", function(data) {
			//Aus dem JSON-Objekt das Array Artikel auslesen
			var artikel = data.Lager.Artikel;
			console.log(artikel);
			console.log( $.type(artikel) );
			//suchtext aus inputfeld auslesen
			var suche = $("input[name='artbez']").val(); // string
			//inputfelder für Ausgabe als jQuery-Objekt einlesen
			var $bestand = $("input[name='bestand']");  //inputfeld als jQuery-Objekt
			var $preis = $("input[name='preis']");  //inputfeld als jQuery-Objekt
			var $absatz = $("input[name='absatz']");  //inputfeld als jQuery-Objekt
			
			// Alle Feldfvalues löschen
			$bestand.val(""); //$bestand[0].value = "";
			$preis.val("");	//$preis[0].value = "";
			$absatz.val(""); //$absatz[0].value = "";
			
			//Schleife die über das Array Artikel  läuft um...
			for(var i = 0; i < artikel.length; i++ ) {
				//bei einer übereinstimmung einer Eigenschaft Bezeichnung mit suche das
				//value der vorher eingelesenen Feld über jQuery füllen
				if(artikel[i].Bezeichnung.toLowerCase() === suche.toLowerCase() ) {
					$bestand.val( artikel[i].Bestand );	
					$preis.val( artikel[i].Preis );	
					$absatz.val( artikel[i].Absatz );
				} 		
			}
		}); // end $.get lagerbestand.json	
	}); // onclick Daten anzeigen
}); // end ready



console.log("**************************** for vs for-in ****************************");
var zahlen = [1,2,3,4,5];
for(var index in zahlen) {
	console.log(zahlen[index]);
}

//Assoziatives Arrays bzw. Objekt
var person = [];
person.vorname = "Max";
person.nachname = "Mustermann";

//index mehrDim     0         1         2         3
var mehrDim = [ ["a","b"] , [1,2] , ["c","d"] , [4,5] ];
// 				  0   1      0 1      0   1      0 1

//////////////////////////////////////////////////////////////////////////
// Arrays immer mit for-schleife oder forEach 
// Objekte mit for-in
//////////////////////////////////////////////////////////////////////////
var x = [];
// x[0] = undefined;
// x[1] = undefined;
// x[2] = undefined;
// x[3] = undefined;
// x[4] = undefined;
x[5] = 100;

for(var i = 0; i < x.length; i++) {
	console.log(x[i]);
}

//Zeigt nur Eigenschaften die einen Wert haben an
for(var index in x) {
	console.log(x[index]);
}