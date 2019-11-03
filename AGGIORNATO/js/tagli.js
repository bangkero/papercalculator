var passMeter
var passAlt
var passGram


var h1=0
var h2=0
var h3=0
var h4=0
var h5=0
var totalface









function reSet() {
        passMeter=parseInt(sessionStorage.getItem("passMeter"));
        passAlt=parseInt(sessionStorage.getItem("passAlt"));
        passGram=parseInt(sessionStorage.getItem("passGram"));


		if((isNaN(passAlt))||(isNaN(passMeter))||(isNaN(passGram))){
                        document.getElementById("zamora").value="Carte Dozio"
         		document.getElementById("zamora").placeholder="Carte Dozio"

                        h1=0,h2=0,h3=0,h4=0,h5=0,totalface=passAlt;

                         alert("controllo gram, altezza, metri");
                         document.getElementById("rot1").innerHTML="0"
        document.getElementById("fascia1").value=""
        document.getElementById("fascia2").value=""
        document.getElementById("fascia3").value=""
	document.getElementById("fascia4").value=""
	document.getElementById("fascia5").value=""

	document.getElementById("num1").value="1"
	document.getElementById("num2").value="1"
	document.getElementById("num3").value="1"
	document.getElementById("num4").value="1"
	document.getElementById("num5").value="1"


	document.getElementById("rot2").innerHTML="0"
	document.getElementById("rot3").innerHTML="0"
	document.getElementById("rot4").innerHTML="0"
	document.getElementById("rot5").innerHTML="0"

	document.getElementById("peso1").innerHTML="kg"
	document.getElementById("peso2").innerHTML="kg"
	document.getElementById("peso3").innerHTML="kg"
	document.getElementById("peso4").innerHTML="kg"
	document.getElementById("peso5").innerHTML="kg"

	document.getElementById("taglio").value="1"
	document.getElementById("scarto").innerHTML="kg"

 		}else{

   

	
        document.getElementById("fascia1").value=""
        document.getElementById("fascia2").value=""
        document.getElementById("fascia3").value=""
	document.getElementById("fascia4").value=""
	document.getElementById("fascia5").value=""

	document.getElementById("num1").value="1"
	document.getElementById("num2").value="1"
	document.getElementById("num3").value="1"
	document.getElementById("num4").value="1"
	document.getElementById("num5").value="1"

	document.getElementById("rot1").innerHTML="0"
	document.getElementById("rot2").innerHTML="0"
	document.getElementById("rot3").innerHTML="0"
	document.getElementById("rot4").innerHTML="0"
	document.getElementById("rot5").innerHTML="0"

	document.getElementById("peso1").innerHTML="kg"
	document.getElementById("peso2").innerHTML="kg"
	document.getElementById("peso3").innerHTML="kg"
	document.getElementById("peso4").innerHTML="kg"
	document.getElementById("peso5").innerHTML="kg"

	document.getElementById("taglio").value="1"
	document.getElementById("scarto").innerHTML="kg"

        	if(isNaN(passAlt)){
                        document.getElementById("zamora").value="Carte Dozio"
         		document.getElementById("zamora").placeholder="Carte Dozio"

                        h1=0,h2=0,h3=0,h4=0,h5=0,totalface=passAlt;


                        
                }else{


                        h1=0,h2=0,h3=0,h4=0,h5=0,totalface=passAlt;
                        document.getElementById("zamora").placeholder=passAlt
                        document.getElementById("zamora").value=passAlt

                        document.getElementById("fascia1").focus();


                }


          }

                 

}








function comPeso1() {
        
        
	var passMeter1 = parseFloat(passMeter)
	var passGram1 = parseFloat(passGram)
	var face1 = parseFloat(document.getElementById("fascia1").value)
	var passnum1 =parseFloat(document.getElementById("num1").value)
	var taglio1 = parseFloat(document.getElementById("taglio").value)		 
        var totface1=face1*passnum1
        var quadrate1=((((passMeter1/1)*totface1/1000))*taglio1);
        var peso1=((quadrate1*passGram1)/1000)
        var rot1=(taglio1*passnum1)

                       
		if(isNaN(peso1)){

			  document.getElementById("peso1").innerHTML="kg"
                          document.getElementById("rot1").innerHTML="0";
                         // alert("controllo gram, altezza, metri");
                          reSet();

                }else if(totalface<face1){alert("controllo bobina");
                         
                 document.getElementById("num1").value=passnum1-1         
                          
                           
                }else{ 
                          totAlt=(passAlt -totface1)
                          document.getElementById("peso1").innerHTML=peso1.toFixed(2);
                          document.getElementById("rot1").innerHTML="A- "+rot1;
                          sessionStorage.setItem("face1", face1);
                          sessionStorage.setItem("rot1", rot1); 
                          h1=totface1
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;                      
               		  var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=parseFloat((((passMeter/1)*scarto/1000))*taglio1);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);
                                                
                           
                    
                                                                                
                        }
 
}


function comPeso2() {
        
        
	var passMeter2 = parseFloat(passMeter)
	var passGram2 = parseFloat(passGram)
	var face2 = parseFloat(document.getElementById("fascia2").value)
	var passnum2 =parseFloat(document.getElementById("num2").value)
	var taglio2 = parseFloat(document.getElementById("taglio").value)
        var totface2=(face2*passnum2)
        var quadrate2=((((passMeter2/1)*totface2/1000))*taglio2);
        var peso2=((quadrate2*passGram2)/1000)
        var rot2=(taglio2*passnum2)

               

		if(isNaN(peso2)){
			  document.getElementById("peso2").innerHTML="kg"
                          document.getElementById("rot2").innerHTML="0"
                          alert("controllo gram, altezza, metri"); 
                          reSet();

                }else if(totalface<face2){alert("controllo bobina");

                      document.getElementById("num2").value=passnum2-1

                }else{
                          totAlt=(passAlt-totface2)
                          document.getElementById("peso2").innerHTML=peso2.toFixed(2);
                          document.getElementById("rot2").innerHTML="B- "+rot2 
                          sessionStorage.setItem("face2", face2);
                          sessionStorage.setItem("rot2", rot2);                           
                          h2=totface2
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;                      
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio2);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);


                        
                           
                         
                  
                         
                         }

}




function comPeso3() {

      
	var passMeter3 = parseFloat(passMeter)
	var passGram3 = parseFloat(passGram)
	var face3 = parseFloat(document.getElementById("fascia3").value)
	var passnum3 =parseFloat(document.getElementById("num3").value)
	var taglio3 = parseFloat(document.getElementById("taglio").value)
        var totface3=(face3*passnum3)
        var quadrate3=((((passMeter3/1)*totface3/1000))*taglio3);
        var peso3=((quadrate3*passGram3)/1000)
        var rot3=(taglio3*passnum3)
                
		if(isNaN(peso3)){
			  document.getElementById("peso3").innerHTML="kg"
                          document.getElementById("rot3").innerHTML="0"
                          alert("controllo gram, altezza, metri");
                          reSet();

	        }else if(totalface<face3){alert("controllo bobina");
                      document.getElementById("num3").value=passnum3-1



                }else{
                          totAlt=(passAlt-totface3)
                          document.getElementById("peso3").innerHTML=peso3.toFixed(2);
                          document.getElementById("rot3").innerHTML="C- "+rot3
			  sessionStorage.setItem("face3", face3);
                          sessionStorage.setItem("rot3", rot3);
                          h3=totface3
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio3);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);



			                        
                      
                          }

}



function comPeso4() {


	var passMeter4 = parseFloat(passMeter)
	var passGram4 = parseFloat(passGram)
	var face4 = parseFloat(document.getElementById("fascia4").value)
	var passnum4 =parseFloat(document.getElementById("num4").value)
	var taglio4 = parseFloat(document.getElementById("taglio").value)
        var totface4=(face4*passnum4)
        var quadrate4=((((passMeter4/1)*totface4/1000))*taglio4);
        var peso4=((quadrate4*passGram4)/1000)
        var rot4=(taglio4*passnum4)
                
		if(isNaN(peso4)){
			  document.getElementById("peso4").innerHTML="kg"
                          document.getElementById("rot4").innerHTML="0"
                          alert("controllo gram, altezza, metri");
                          reSet();

                }else if(totalface<face4){alert("controllo bobina");  

                    document.getElementById("num4").value=passnum4-1



                }else{
                          totAlt=(passAlt-totface4)
                          document.getElementById("peso4").innerHTML=peso4.toFixed(2);
                          document.getElementById("rot4").innerHTML="D- "+rot4
                          sessionStorage.setItem("face4", face4);
                          sessionStorage.setItem("rot4", rot4);
                          h4=totface4
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface                   
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio4);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);



                                                                               

                         }


 }





function comPeso5() {


	var passMeter5 = parseFloat(passMeter)
	var passGram5 = parseFloat(passGram)
	var face5 = parseFloat(document.getElementById("fascia5").value)
	var passnum5 =parseFloat(document.getElementById("num5").value)
	var taglio5 = parseFloat(document.getElementById("taglio").value)
        var totface5=(face5*passnum5)
        var quadrate5=((((passMeter5/1)*totface5/1000))*taglio5);
        var peso5=((quadrate5*passGram5)/1000)
        var rot5=(taglio5*passnum5)
                
		if(isNaN(peso5)){
			  document.getElementById("peso5").innerHTML="kg"
                          document.getElementById("rot5").innerHTML="0"
                          alert("controllo gram, altezza, metri");
                          reSet();


                }else if(totalface<face5){alert("controllo bobina");

                    document.getElementById("num5").value=passnum5-1




                }else{
                          totAlt=(passAlt-totface5)
                          document.getElementById("peso5").innerHTML=peso5.toFixed(2);
                          document.getElementById("rot5").innerHTML="E- "+rot5
                          sessionStorage.setItem("face5", face5);
                          sessionStorage.setItem("rot5", rot5);
                          h5=totface5
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio5);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);                                                       
                          h5=totface5
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;



                          }



}



function comPesotagli() {


        var passMeter1 = parseFloat(passMeter)
	var passGram1 = parseFloat(passGram)
	var face1 = parseFloat(document.getElementById("fascia1").value)
	var passnum1 =parseFloat(document.getElementById("num1").value)
	var taglio1 = parseFloat(document.getElementById("taglio").value)
        var totface1=face1*passnum1
        var quadrate1=((((passMeter1/1)*totface1/1000))*taglio1);
        var peso1=((quadrate1*passGram1)/1000)
        var rot1=(taglio1*passnum1)

                      
		if(isNaN(peso1)){
			  document.getElementById("peso1").innerHTML="kg"
                          document.getElementById("rot1").innerHTML="0";
                }else{ 
                          totAlt=(passAlt -totface1)
                          document.getElementById("peso1").innerHTML=peso1.toFixed(2);
                          document.getElementById("rot1").innerHTML="A- "+rot1;
                          sessionStorage.setItem("face1", face1);
                          sessionStorage.setItem("rot1", rot1); 
                          h1=totface1
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;                       
               		  var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=parseFloat((((passMeter/1)*scarto/1000))*taglio1);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);

                         
                                                                                                    
                          }





	var passMeter2 = parseFloat(passMeter)
	var passGram2 = parseFloat(passGram)
	var face2 = parseFloat(document.getElementById("fascia2").value)
	var passnum2 =parseFloat(document.getElementById("num2").value)
	var taglio2 = parseFloat(document.getElementById("taglio").value)
        var totface2=(face2*passnum2)
        var quadrate2=((((passMeter2/1)*totface2/1000))*taglio2);
        var peso2=((quadrate2*passGram2)/1000)
        var rot2=(taglio2*passnum2)


               

		if(isNaN(peso2)){
			  document.getElementById("peso2").innerHTML="kg"
                          document.getElementById("rot2").innerHTML="0"

                }else{
                          totAlt=(passAlt-totface2)
                          document.getElementById("peso2").innerHTML=peso2.toFixed(2);
                          document.getElementById("rot2").innerHTML="B- "+rot2
                          sessionStorage.setItem("face2", face2);
                          sessionStorage.setItem("rot2", rot2);  
                          h2=totface2
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                    	  document.getElementById("zamora").value=totalface;                      
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio2);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);


                        
                           
                         
                  
                         
                        }


	var passMeter3 = parseFloat(passMeter)
	var passGram3 = parseFloat(passGram)
	var face3 = parseFloat(document.getElementById("fascia3").value)
	var passnum3 =parseFloat(document.getElementById("num3").value)
	var taglio3 = parseFloat(document.getElementById("taglio").value)
        var totface3=(face3*passnum3)
        var quadrate3=((((passMeter3/1)*totface3/1000))*taglio3);
        var peso3=((quadrate3*passGram3)/1000)
        var rot3=(taglio3*passnum3)
                
		if(isNaN(peso3)){
			  document.getElementById("peso3").innerHTML="kg"
                          document.getElementById("rot3").innerHTML="0"
	        }else{   
				
                          totAlt=(passAlt-totface3)
                          document.getElementById("peso3").innerHTML=peso3.toFixed(2);
                          document.getElementById("rot3").innerHTML="C- "+rot3
                          sessionStorage.setItem("face3", face3);
                          sessionStorage.setItem("rot3", rot3);
                          h3=totface3
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio3);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);



			 
                        
                      
                          }




	var passMeter4 = parseFloat(passMeter)
	var passGram4 = parseFloat(passGram)
	var face4 = parseFloat(document.getElementById("fascia4").value)
	var passnum4 =parseFloat(document.getElementById("num4").value)
	var taglio4 = parseFloat(document.getElementById("taglio").value)
        var totface4=(face4*passnum4)
        var quadrate4=((((passMeter4/1)*totface4/1000))*taglio4);
        var peso4=((quadrate4*passGram4)/1000)
        var rot4=(taglio4*passnum4)
                
		if(isNaN(peso4)){
			  document.getElementById("peso4").innerHTML="kg"
                          document.getElementById("rot4").innerHTML="0"
                }else{
                          totAlt=(passAlt-totface4)

                          document.getElementById("peso4").innerHTML=peso4.toFixed(2);
                          document.getElementById("rot4").innerHTML="D- "+rot4
                          sessionStorage.setItem("face4", face4);
                          sessionStorage.setItem("rot4", rot4);
                          h4=totface4
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;                  
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio4);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);




                            
                                                    
                          }





	var passMeter5 = parseFloat(passMeter)
	var passGram5 = parseFloat(passGram)
	var face5 = parseFloat(document.getElementById("fascia5").value)
	var passnum5 =parseFloat(document.getElementById("num5").value)
	var taglio5 = parseFloat(document.getElementById("taglio").value)
        var totface5=(face5*passnum5)
        var quadrate5=((((passMeter5/1)*totface5/1000))*taglio5);
        var peso5=((quadrate5*passGram5)/1000)
        var rot5=(taglio5*passnum5)
                
		if(isNaN(peso5)){
			  document.getElementById("peso5").innerHTML="kg"
                          document.getElementById("rot5").innerHTML="0"
                }else{
                          totAlt=(passAlt-totface5)
                          document.getElementById("peso5").innerHTML=peso5.toFixed(2);
                          document.getElementById("rot5").innerHTML="E- "+rot5
                          sessionStorage.setItem("face5", face5);
                          sessionStorage.setItem("rot5", rot5);
                          h5=totface5
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;
                          var scarto=parseFloat(document.getElementById("zamora").value)
			  var scartoquadrate=((((passMeter/1)*scarto/1000))*taglio5);
        		  var scartopeso=((scartoquadrate*passGram)/1000)
                          document.getElementById("scarto").innerHTML="kg. "+scartopeso.toFixed(2);                                                       
                          h5=totface5
                          totalface=passAlt-(h1+h2+h3+h4+h5)
                          document.getElementById("zamora").value=totalface;



                          }

	
}






function h1(event) {
		var x =  event.which || event.keyCode;
		if(x=="13" ||x=="40"){
			document.getElementById("fascia2").focus();
		}    
		}	

function h2(event) {
		var x =  event.which || event.keyCode;
		if(x=="13" ||x=="40"){
			document.getElementById("fascia3").focus();
		}    
		}

function h3(event) {
		var x =  event.which || event.keyCode;
		if(x=="13" ||x=="40"){
			document.getElementById("fascia4").focus();
		}    
		}	
	
function h4(event) {
		var x =  event.which || event.keyCode;
		if(x=="13" ||x=="40"){
			document.getElementById("fascia5").focus();
		}    
		}	

function h5(event) {
		var x =  event.which || event.keyCode;
		if(x=="13" ||x=="40"){
			document.getElementById("fascia1").focus();
		}    
		}	

