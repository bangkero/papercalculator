window.onload = function() {
  var input = document.getElementById("spessore").focus();
}

	var chiara=""
	document.getElementById("anima").value=90
	document.getElementById("anima").addEventListener("focus", comAnima);    
	document.getElementById("spessore").addEventListener("focus", comSpessore);
	document.getElementById("diametro").addEventListener("focus", comDiametro);	
	document.getElementById("metri").addEventListener("focus", comMetri);  
	document.getElementById("faccia").addEventListener("focus", comFaccia);
	document.getElementById("numeri").addEventListener("focus", comNumeri);
	document.getElementById("quadrate").addEventListener("focus", comQuadrate);
	document.getElementById("grammi").addEventListener("focus", comGrammi);
	document.getElementById("kilo").addEventListener("focus", comKilo);
function comAnima() { 
	document.getElementById("anima").value="";
	sessionStorage.setItem("benincasa","")
 } 
function comSpessore(){
	var anima = parseFloat(document.getElementById("anima").value)
	var diametro = parseFloat(document.getElementById("diametro").value)
	var metri =parseFloat(document.getElementById("metri").value)
	var spessore=(((3.14159*(((diametro/2)**2)-((anima/2)**2)))/(metri*1000))*1000)
		if(isNaN(spessore)){ 
			document.getElementById("spessore").value="";
			sessionStorage.setItem("benincasa","")
        } else { 
         document.getElementById("spessore").value=Math.round(spessore);
		 document.getElementById("spessore").style.color = "red";
		 chiara=spessore+"=(((3.14159*((("+diametro+"/2)**2)-(("+anima+"/2)**)))/("+metri+"*1000))*1000)"
		 sessionStorage.setItem("benincasa",chiara)
		}
}	
function comDiametro(){
	var anima = parseFloat(document.getElementById("anima").value)
	var spessore = parseFloat(document.getElementById("spessore").value)
	var metri =parseFloat(document.getElementById("metri").value)
	var diametro=(2*(Math.sqrt((((metri*1000)*(spessore/1000))/3.14159)+((anima/2)**2))))
		if(isNaN(diametro)){sessionStorage.setItem("benincasa",chiara)
			document.getElementById("diametro").value="";
			sessionStorage.setItem("benincasa","")
        } else { 
         document.getElementById("diametro").value=Math.round(diametro);
		 document.getElementById("diametro").style.color = "red";
		 chiara= diametro+"=(2*(sqrt(((("+metri+"*1000)*("+spessore+"/1000))/3.14159)+(("+anima+"/2)**2))))";
		 sessionStorage.setItem("benincasa",chiara)
		};
}	sessionStorage.setItem("benincasa",chiara)
function comMetri(){
	var anima = parseFloat(document.getElementById("anima").value)
	var spessore = parseFloat(document.getElementById("spessore").value)
	var diametro =parseFloat(document.getElementById("diametro").value)
	var faccia = parseFloat(document.getElementById("faccia").value)
	var numeri = parseFloat(document.getElementById("numeri").value)
	var quadrate =parseFloat(document.getElementById("quadrate").value)
	var metri=(((3.14159*(((diametro/2)**2)-((anima/2)**2)))/(spessore/1000))/1000)
	var metriup=(((quadrate*1000)/faccia)/numeri)
		if(((isNaN(metri)) && (isNaN(metriup)))||((!(isNaN(metri))) && (!(isNaN(metriup))))){
				document.getElementById("metri").value=""
				sessionStorage.setItem("benincasa","")
        } else if (isNaN(metri)){ 
				document.getElementById("metri").value=Math.round(metriup);
                                sessionStorage.setItem("passMeter", (Math.round(metriup)));
								chiara=metriup+"=((("+quadrate+"*1000)/"+faccia+")/"+numeri+")";
								
								
				document.getElementById("metri").style.color = "red";
		} else {
				document.getElementById("metri").value=Math.round(metri);
                                sessionStorage.setItem("passMeter", (Math.round(metri)));
								chiara=metri+"=(((3.14159*((("+diametro+"/2)**2)-(("+anima+"/2)**2)))/("+spessore+"/1000))/1000)"
								
				document.getElementById("metri").style.color= "red";
				sessionStorage.setItem("benincasa",chiara)
		}	kilo=((quadrate*grammi)/1000)
}
function comFaccia(){
	var metri = parseFloat(document.getElementById("metri").value)
	var numeri = parseFloat(document.getElementById("numeri").value)
	var quadrate =parseFloat(document.getElementById("quadrate").value)
		var faccia=(((quadrate*1)/(metri/1000))/numeri)
		if(isNaN(faccia)){
			document.getElementById("faccia").value="";
			sessionStorage.setItem("benincasa","")
        } else { 
         	document.getElementById("faccia").value=Math.round(faccia);
                sessionStorage.setItem("passAlt", (Math.round(faccia)));
				chiara=faccia+"=((("+quadrate+"*1)/("+metri+"/1000))/"+numeri+")"
				sessionStorage.setItem("benincasa",chiara)
				
		document.getElementById("faccia").style.color = "red";
		}
}		
function comNumeri(){
	var metri = parseFloat(document.getElementById("metri").value)
	var faccia = parseFloat(document.getElementById("faccia").value)
	var quadrate =parseFloat(document.getElementById("quadrate").value)
 	var numeri=(quadrate/(metri*(faccia/1000))) 
		if(isNaN(numeri)){
			document.getElementById("numeri").value="";
			sessionStorage.setItem("benincasa","")
        } else { 
         document.getElementById("numeri").value=Math.round(numeri);
		 document.getElementById("numeri").style.color = "red";
		 chiara=numeri+"=("+quadrate+"/("+metri+"*("+faccia+"/1000)))"
		 sessionStorage.setItem("benincasa",chiara)
		}
}		
function comQuadrate(){
	var metri = parseFloat(document.getElementById("metri").value)
	var faccia = parseFloat(document.getElementById("faccia").value)
	var numeri =parseFloat(document.getElementById("numeri").value)
	var grammi = parseFloat(document.getElementById("grammi").value)
	var kilo = parseFloat(document.getElementById("kilo").value)
		var quadrate=((((metri/1)*faccia/1000))*numeri)
		var quadrateup=((kilo*1000)/grammi)
		if(((isNaN(quadrate)) && (isNaN(quadrateup)))||((!(isNaN(quadrate))) && (!(isNaN(quadrateup))))){
				document.getElementById("quadrate").value=""
				sessionStorage.setItem("benincasa","")
        } else if (isNaN(quadrate)){ 
				document.getElementById("quadrate").value=Math.round(quadrateup);
				document.getElementById("quadrate").style.color = "red";
				chiara= quadrateup+"=(("+kilo+"*1000)/"+grammi+")"
			    sessionStorage.setItem("benincasa",chiara)
				
		} else {
				document.getElementById("quadrate").value=Math.round(quadrate);
				document.getElementById("quadrate").style.color = "red";
				chiara=quadrate+"=(((("+metri+"/1)*"+faccia+"/1000))*"+numeri+")"
				sessionStorage.setItem("benincasa",chiara)
				
		}
}	    
function comGrammi(){
	var quadrate = parseFloat(document.getElementById("quadrate").value)
	var kilo = parseFloat(document.getElementById("kilo").value)
		var grammi=((kilo*1000)/quadrate)
		if(isNaN(grammi)){
			document.getElementById("grammi").value="";
			sessionStorage.setItem("benincasa","")
        } else { 
                document.getElementById("grammi").value=Math.round(grammi);
                sessionStorage.setItem("passGram", (Math.round(grammi)));
				document.getElementById("grammi").style.color = "red";
				chiara= grammi+"=(("+kilo+"*1000)/"+quadrate+")"
				sessionStorage.setItem("benincasa",chiara)
		}
}		
function comKilo(){
	var quadrate = parseFloat(document.getElementById("quadrate").value)
	var grammi = parseFloat(document.getElementById("grammi").value)
		var kilo=((quadrate*grammi)/1000)
		if(isNaN(kilo)){
			document.getElementById("kilo").value="";
			sessionStorage.setItem("benincasa","")
        } else { 
         document.getElementById("kilo").value=(kilo).toFixed(2);
		 document.getElementById("kilo").style.color = "red";
		 
			chiara=kilo+"=(("+quadrate+"*"+grammi+")/1000)"
			sessionStorage.setItem("benincasa",chiara)
		}
}	
function animas(event) {
		var x =  event.which || event.keyCode;
		if(x=="13" ||x=="40"){
			document.getElementById("spessore").focus();
		}    
		}	
function spessores(event) {
		var x = event.which || event.keyCode;
		if(x=="13"||x=="40" ){
			document.getElementById("diametro").focus();
		} else{	
		if(x=="38"){
			document.getElementById("anima").focus();
		}
		}
		}
function diametros(event) {
		var x = event.which || event.keyCode;
		if(x=="13"||x=="40" ){
			document.getElementById("metri").focus();
		}else{
		if(x=="38"){
			document.getElementById("spessore").focus(); 
		}   
		}
		}						
function metris(event) {
		var x = event.keyCode ;
		if(x=="13" ||x=="40"){
			document.getElementById("faccia").focus();
                        sessionStorage.setItem("passMeter",document.getElementById("metri").value);
		}else{
		if(x=="38"){
			document.getElementById("diametro").focus();
		}
		}    
		}			
function faccias(event) {
		var x = event.keyCode ;
		if(x=="13"||x=="40" ){
			document.getElementById("numeri").focus();
                        sessionStorage.setItem("passAlt",document.getElementById("faccia").value);
		}else{
		if(x=="38"){
			document.getElementById("metri").focus();
		}
		}    
		}					
function numeris(event) {
		var x = event.keyCode ;
		if(x=="13"||x=="40" ){
			document.getElementById("quadrate").focus();
		}else{
		if(x=="38"){
			document.getElementById("faccia").focus();
		}
		}    
		}		
function quadrates(event) {
		var x = event.keyCode ;
		if(x=="13" ||x=="40"){
			document.getElementById("grammi").focus();	
		}else{
		if(x=="38"){
			document.getElementById("numeri").focus();
		}
		}    
		}			
function grammis(event) {
		var x = event.keyCode ;
		if(x=="13" ||x=="40"){
			document.getElementById("kilo").focus();
                        sessionStorage.setItem("passGram",document.getElementById("grammi").value);
		}else{
		if(x=="38"){
			document.getElementById("quadrate").focus();
		}
		}    
		}			
function kilos(event) {
		var x = event.keyCode ;
		if(x=="13"||x=="40" ){
			document.getElementById("spessore").focus();
		}else{
		if(x=="38"){
			document.getElementById("grammi").focus();
		}
		}    
		}	