console.info("05_lagerbestand.js");
$(document).ready(function() {
	//Variable artikel in oberste Ebene deklarieren, Ajax Anfrage einmal durchführen und nicht bei jedem klick
	var artikel; 
	
	// Ajax-Anfrage mit jQuery $.getJSON
	$.getJSON("05_lagerbestand.json", function(data) {
		//Ausgabevariable (Leerstring)
		var html = "";
		//Aus dem JSON-Objekt das Array Artikel auslesen
		artikel = data.Lager.Artikel;
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
			//suchtext aus inputfeld auslesen
			var suche = $("input[name='artbez']").val(); // string
			//inputfelder für Ausgabe als jQuery-Objekt einlesen
			var $bestand = $("input[name='bestand']");  //inputfeld als jQuery-Objekt
			var $preis = $("input[name='preis']");  //inputfeld als jQuery-Objekt
			var $absatz = $("input[name='absatz']");  //inputfeld als jQuery-Objekt
			
			// Alle Feldfvalues löschen
			$bestand.val("");
			$preis.val("");
			$absatz.val("");
			
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
		
	}); // onclick Daten anzeigen
}); // end ready