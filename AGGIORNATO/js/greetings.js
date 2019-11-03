window.onload = function() {verify();}







		
		var bd=new Date();
		var m=1+bd.getMonth();
		var d=bd.getDate();
		var h=bd.getHours();
		
		//var m=11
		//var d=4
		
		
		function bday(){ 
			document.getElementById("ale").style.textAlign="center";
			document.getElementById("ale").innerHTML=birth[i].auguri;
			document.getElementById("ale").style.backgroundColor="lightblue";
			var Scolor=document.getElementById("ale").style.color;				
			switch(Scolor) {
				case "green":
					document.getElementById("ale").style.color="white";					
				break;
				case "white":
					document.getElementById("ale").style.color="red";
				break;
				default:
					document.getElementById("ale").style.color="green";
					//alert(m +d)
			}										
		} 
		
		function verify(){
			
			for (i=0;i<=(birth.length-1);i++ ){
			
				//alert(i)
				if ((m==birth[i].month) && (d==birth[i].day)) { 
					//sessionStorage.setItem("actor",birth[i].celebrant);
					//alert(birth[i].month)
					 var blink=setInterval(bday,500);
					 
					 
					 break;
				
				}else{
					clearInterval(blink);
					document.getElementById("ale").style.color="green";
					document.getElementById("ale").style.textAlign="center";
					document.getElementById("ale").style.backgroundColor="#E10E9FA";
					document.getElementById("ale").innerHTML="ROTOLO";
					
			}}
			
		
			
		
		
		
		
			}
			
			
		
		