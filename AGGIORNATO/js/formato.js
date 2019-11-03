









document.getElementById("largezza").addEventListener("focus", comLargezza);  
document.getElementById("lungezza").addEventListener("focus", comLungezza);
document.getElementById("fogli").addEventListener("focus", comFogli);
document.getElementById("fquadrate").addEventListener("focus", comFquadrate);
document.getElementById("fgrammi").addEventListener("focus", comFgrammi);
document.getElementById("fkilo").addEventListener("focus", comFkilo);




function comLungezza(){
	var largezza = parseFloat(document.getElementById("largezza").value)
	var fogli = parseFloat(document.getElementById("fogli").value)
	var fquadrate = parseFloat(document.getElementById("fquadrate").value)

	var lungezza=((((fquadrate*1000)/largezza)/fogli)*1000)
		if(isNaN(lungezza)){ 
			document.getElementById("lungezza").value="";
    
        } else { 
         document.getElementById("lungezza").value=Math.round(lungezza);
		 document.getElementById("lungezza").style.color = "red";
		}



	}
function comLargezza(){ 
	
	var lungezza = parseFloat(document.getElementById("lungezza").value)
	var fogli = parseFloat(document.getElementById("fogli").value)
	var fquadrate =parseFloat(document.getElementById("fquadrate").value)
	
		var largezza=((((fquadrate*1000)/lungezza)/fogli)*1000)
		if(isNaN(largezza)){
			document.getElementById("largezza").value="";
    
        } else { 
         document.getElementById("largezza").value=Math.round(largezza);
		 document.getElementById("largezza").style.color = "red";
		}
	
	
	
		
} ;
function comFogli(){
	var lungezza = parseFloat(document.getElementById("lungezza").value)
	var largezza = parseFloat(document.getElementById("largezza").value)
	var fquadrate= parseFloat(document.getElementById("fquadrate").value)

	var fogli=((fquadrate*1000)/(((lungezza*largezza)/1000)))
		if(isNaN(fogli)){ 
			document.getElementById("fogli").value="";
    
        } else { 
         document.getElementById("fogli").value=Math.round(fogli);
		 document.getElementById("fogli").style.color = "red";
		}
 };
function comFquadrate(){ 
	var lungezza = parseFloat(document.getElementById("lungezza").value)
	var largezza = parseFloat(document.getElementById("largezza").value)
	var fogli =parseFloat(document.getElementById("fogli").value)
	var fgrammi = parseFloat(document.getElementById("fgrammi").value)		
	var fquadrate=((((lungezza/1000)*largezza/1000))*fogli)

	var fkilo = parseFloat(document.getElementById("fkilo").value)
		var fquadrateup=((fkilo*1000)/fgrammi)
		if(((isNaN(fquadrate)) && (isNaN(fquadrateup)))||((!(isNaN(fquadrate))) && (!(isNaN(fquadrateup))))){
				document.getElementById("fquadrate").value=""
    
        } else if (isNaN(fquadrate)){ 
				document.getElementById("fquadrate").value=Math.round(fquadrateup);
				document.getElementById("fquadrate").style.color = "red";
		} else {
			
				document.getElementById("fquadrate").value=Math.round(fquadrate);
				document.getElementById("fquadrate").style.color = "red";
		}




};
function comFgrammi(){ 
	var fquadrate = parseFloat(document.getElementById("fquadrate").value)
	var fkilo = parseFloat(document.getElementById("fkilo").value)
	
	
		var fgrammi=((fkilo*1000)/fquadrate)
		if(isNaN(fgrammi)){
			document.getElementById("fgrammi").value="";
    
        } else { 
         document.getElementById("fgrammi").value=Math.round(fgrammi);
		 document.getElementById("fgrammi").style.color = "red";
		}
	







};
function comFkilo(){ 
	var fquadrate = parseFloat(document.getElementById("fquadrate").value)
	var fgrammi = parseFloat(document.getElementById("fgrammi").value)
	
	
		var fkilo=((fquadrate*fgrammi)/1000)
		if(isNaN(fkilo)){
			document.getElementById("fkilo").value="";
    
        } else { 
         document.getElementById("fkilo").value=(fkilo).toFixed(2);
		 document.getElementById("fkilo").style.color = "red";
		}
	








};
	
	
	
	
	
	
	
	
function lungezzas(event) {
		var x = event.which || event.keyCode ;
		if(x=="40" || x=="13"){
			document.getElementById("largezza").focus();
			
		}    
		}	
		
		
function largezzas(event) {
		var x =  event.which || event.keyCode;
		if(x=="13" || x=="40"){
			document.getElementById("fogli").focus();
		}    
		}	
		
function foglis(event) {
		var x = event.keyCode ;
		if(x=="13"){
			document.getElementById("fquadrate").focus();
		}    
		}	
		
function fquadrates(event) {
		var x = event.keyCode ;
		if(x=="13"){
			document.getElementById("fgrammi").focus();
		}    
		}	
		
function fgrammis(event) {
		var x = event.keyCode ;
		if(x=="13"){
			document.getElementById("fkilo").focus();
		}    
		}	
		
function fkilos(event) {
		var x = event.keyCode ;
		if(x=="13"){
			document.getElementById("lungezza").focus();
		}    
		}	
