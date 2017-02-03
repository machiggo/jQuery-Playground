console.info("04_zusammenfassung.js eingebunden");
$(document).ready(function() {
	//1
	/*
	var $div_ausgabe = $("#ausgabe").empty();
	var $einstieg_a = $("#einstieg").find("a");
	
	$einstieg_a
	.on("click",function(e) {
		e.preventDefault();
		
		$einstieg_a.removeAttr("class");
		$(this).addClass("marked");
		//Natives JS this und Attribute über die DOT-Natition auslesen
		var ausgabe = "Beispielausgabe:<br>Die id des geklickten links <b>"+this.id+"</b>.<br>Die Zahl <b>"+this.id.split("-")[1]+"</b><br>Der Textknoten: <b>"+this.firstChild.nodeValue+"</b><br>Er wurde durch jQuery mit der Klasse <b>marked</b> versehen.";
		
		//var ausgabe = "Beispielausgabe:<br>Die id des geklickten links //<b>"+$(this).attr("id")+"</b>.<br>Die Zahl //<b>"+$(this).attr("id").split("-")[1]+"</b><br>Der Textknoten: //<b>"+$(this).text()+"</b><br>Er wurde durch jQuery mit der Klasse //<b>marked</b> versehen.";
		
		
		$div_ausgabe
		.empty()
		.append(ausgabe);
		//Text striped Tags aus dem Inhalt, nur die Textknoten bleiben übrig
		console.log($div_ausgabe.text());
		
		
		//console.log( 
		//	$(this)
		//		.parents("ul")
		//		.find("a")
		//		.removeAttr("class")
		//		.end()
		//		.end()
		//		.addClass("marked")
		//);
		
	}); //end click #einstieg a
	*/
	
	
	var $div_ausgabe = $("#ausgabe").detach();
	var $einstieg_a = $("#einstieg").find("a");
	$einstieg_a
	.on("click",function(e) {
		e.preventDefault();
		$einstieg_a.removeAttr("class");
		
		var $b = $div_ausgabe.find("b");
		$b.eq(0).text(this.id);
		$b.eq(1).text(this.id.split("-")[1]);
		$b.eq(2).text(this.firstChild.nodeValue);
		$b.eq(3).text(this.className);
		
		$(this)
		.addClass("marked")
		.parents("ul")
		.after($div_ausgabe);
	}); //end click #einstieg a
	
	//2 
	$("#eintragen")
	.on("click", function(e){
		//submit unterbinden:
		e.preventDefault();
		//Inputfelder als jQuery-Objekt einlesen:
		var $vorname = $("#vorname");
		var $nachname = $("#nachname");
		var $geburtstag = $("#geburtstag");
		var $fehler = $("#fehler").empty();
		
		//Hilfsvariable zum sammeln der Fehler anlegen:
		var html = "";
		
		//value aus den Inputfeldern auslesen:
		var vorname = $.trim( $vorname.val() ); 
		var nachname = $.trim( $nachname.val() );
		var geburtstag = $.trim( $geburtstag.val() );
		//Alternativ wenn trim für IE8 verfügbar gemacht wird, siehe lib.js:
		//$vorname.val().trim();
		
		//Felderinhalt auf Leerstring prüfen:
		if(vorname === "") {
			html += "<p>Vorname darf nicht leer sein</p>";
		}
		
		if(nachname === "") {
			html += "<p>Nachname darf nicht leer sein</p>";
		}
		
		if(geburtstag === "") {
			html += "<p>Geburtstag darf nicht leer sein</p>";
		}
		
		// Gibt es Fehler auszuzugeben oder kann Listeneintrag erzeugt werden
		if(html) { // html.length > 0 , html.length, html !== ""
			//Fehler anzeigen
			$fehler
				.append(html);
		} else {
			//Listenelement erzeugen
			$("#liste")
				.append("<li>"+ vorname + " " + nachname + " " + geburtstag + "</li>");
				//Values nach erfolgreichem schreiben leeren
				//verhindert das der gleiche Eintrag zweimal 
				//hinzugefügt wird
				$vorname.val("");
				$nachname.val("");
				$geburtstag.val("");
		}
		
	}); // end click #eintragen
	
	//3
	//../../_lib/img/kugeln/kugel_1_v1.png
	//3 a)
	/*
	var zz = randomNumber(1,49);
	var src = "../../_lib/img/kugeln/kugel_"+zz+"_v1.png";
	console.log(zz, " ", src);
	
	//3 b)
	$("#bilder")
		.find("img")
			.attr("src", src)
			.on("mouseover", function(){
				var zz = randomNumber(1,49);
				var src = "../../_lib/img/kugeln/kugel_"+zz+"_v1.png";
				$(this).attr("src", src);
			});

	*/
	//3
	function getRandomImage() {
		return "../../_lib/img/kugeln/kugel_"+randomNumber(1,49)+"_v1.png";
	}
	
	var $bild = $("#bilder")
		.find("img")
		.attr("src", getRandomImage)
			.on("mouseover", function(){
				$(this).attr("src", getRandomImage);
			});
			
	//4
	$("#links")
	.find("a")
		.on("click", function(e){
			e.preventDefault();
			/*var src = $(this).attr("href");
			$bild.attr("src",src);*/
			$bild.attr("src",this.href);
		});
	
}); //end rdy