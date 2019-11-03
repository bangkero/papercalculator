window.onload = function() {verify()}




		//var actor


		
		var bd=new Date();
		var m=1+bd.getMonth();
		var d=bd.getDate();
		//var m=11
		//var d=4
		
		
		function bday(){ 
			document.getElementById("martina").innerHTML=birth[i].celebrant;
			document.getElementById("martina").style.textAlign="center";
			
			document.getElementById("martina").style.backgroundColor="lightblue";
			var Scolor=document.getElementById("martina").style.color;				
			switch(Scolor) {
				case "green":
					document.getElementById("martina").style.color="white";					
				break;
				case "white":
					document.getElementById("martina").style.color="red";
				break;
				default:
					document.getElementById("martina").style.color="green";
					//alert(m +d)
			}										
		} 
		
		function verify(){
			
			for (i=0;i<=(birth.length-1);i++ ){
			
				//alert(i)
				if ((m==birth[i].month) && (d==birth[i].day)) { 
					//var actor=birth[i].celebrant;
					//alert(birth[i].month)
					 var blink=setInterval(bday,500);
					 
					 
					 break;
				
				}else{
					clearInterval(blink);
					document.getElementById("martina").style.color="green";
					document.getElementById("martina").style.textAlign="center";
					document.getElementById("martina").style.backgroundColor="#E10E9FA";
					document.getElementById("martina").innerHTML="FORMATO";
					
			}}
			
		
			
		
		
		
		
		}
		