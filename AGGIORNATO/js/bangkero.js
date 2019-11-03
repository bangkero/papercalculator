



var select = document.getElementById("cartedozio"); 




//                                               CARTA                                     SPESSORE                               GRAMMI




var bangkero=[                         
    
                                     { carta: 'CartaFiltro 212/SRL   12,3gr'              ,spessore: '50'                     ,grammi:'12.3'             },
                                     { carta: 'CartaFiltro 138/2   38gr'                  ,spessore: '149'                    ,grammi:'38'               },
                                     { carta: 'CartaFiltro 125/2   25gr'                  ,spessore: '82'                     ,grammi:'25'               },  
                                     { carta: 'CartaFiltro 128/2   27,5gr'                ,spessore: '92'                     ,grammi:'27.5'             },
                                     { carta: 'Velina bianca ATP/M 25gr'                  ,spessore: '42'                     ,grammi:'25'               },
                                     { carta: 'Velina bianca BR 22gr'                     ,spessore: '35'                     ,grammi:'22'               },

                                     { carta: 'Velina bianca BR 26gr'                     ,spessore: '31'                     ,grammi:'26'               },
                                     { carta: 'Velina Nera 35gr'                          ,spessore: '60'                     ,grammi:'35'               },
                                     { carta: 'Velina Nera 50gr'                          ,spessore: '72'                     ,grammi:'50'               },
                                     { carta: 'Bianca Satinata 45gr'                      ,spessore: '55'                     ,grammi:'45'               },
                                     { carta: 'Bianca Patinata 70gr'                      ,spessore: '54'                     ,grammi:'70'               },
                                     { carta: 'Kraft Bianca 30gr'                         ,spessore: '43'                     ,grammi:'30'               },
                                     { carta: 'Kraft Bianca 40gr'                         ,spessore: '54'                     ,grammi:'40'               },
                                     { carta: 'Kraft Bianca 60gr'                         ,spessore: '74'                     ,grammi:'60'               },
                                     { carta: 'Kraft Bianca 80gr'                         ,spessore: '100'                    ,grammi:'80'               },
                                     { carta: 'Kraft Bianca 100gr'                        ,spessore: '122'                    ,grammi:'100'              },
                                     { carta: 'Kraft Bianca 120gr'                        ,spessore: '147'                    ,grammi:'120'              },
                                     { carta: 'Kraft Bianco Grezzo 100gr'                 ,spessore: '140'                    ,grammi:'100'              },
                                     { carta: 'Kraft Bianco Grezzo 120gr'                 ,spessore: '162'                    ,grammi:'120'              },
                                     { carta: 'Pergamin 45gr'                             ,spessore: '35'                     ,grammi:'45'               },
                                     { carta: 'Pergamin 60gr'                             ,spessore: '50'                     ,grammi:'60'               },
                                     { carta: 'Kraft Avana Monolucido LB 40gr'            ,spessore: '60'                     ,grammi:'40'               },
                                     { carta: 'Kraft Avana Monolucido LB 120gr'           ,spessore: '170'                    ,grammi:'120'              },
                                     { carta: 'Kraft Avana Monolucido LB 60gr'            ,spessore: '76'                     ,grammi:'60'               },
				     { carta: 'Kraft Avana Monolucido BM 60gr'            ,spessore: '78'                     ,grammi:'60'               },
                                     { carta: 'Sealing Medio C  65gr'                     ,spessore: '101'                    ,grammi:'65'               },
                                     { carta: 'Sealing Medio C  80gr'                     ,spessore: '120'                    ,grammi:'80'               },
                                     { carta: 'Sealing Medio C  100gr'                    ,spessore: '137'                    ,grammi:'100'              },
                                     { carta: 'Sealing Medio C  120gr'                    ,spessore: '185'                    ,grammi:'120'              },
                                     { carta: 'Sealing Medio A  60gr'                     ,spessore: '75'                     ,grammi:'60'               },
                                     { carta: 'Sealing Medio A  80gr'                     ,spessore: '97'                     ,grammi:'80'               },
                                     { carta: 'Sealing Medio A  100gr'                    ,spessore: '120'                    ,grammi:'100'              },
                                     { carta: 'Sealing Extra A  40gr'                     ,spessore: '53'                     ,grammi:'40'               },
                                     { carta: 'Sealing Extra A  60gr'                     ,spessore: '74'                     ,grammi:'60'               },
                                     { carta: 'Sealing Extra A  80gr'                     ,spessore: '97'                    ,grammi:'80'               },
                                     { carta: 'Sealing Extra A  100gr'                    ,spessore: '122'                    ,grammi:'100'              },
                                     { carta: 'Sealing Extra A  120gr'                    ,spessore: '145'                    ,grammi:'120'              },
                                     { carta: 'Carta Paglia 100gr'                        ,spessore: '152'                    ,grammi:'100'              },
                                     { carta: 'Greggia 80gr'                              ,spessore: '120'                    ,grammi:'80'               },
                                     { carta: 'Greggia 100gr'                             ,spessore: '150'                    ,grammi:'100'              },
                                     { carta: 'Greggia Blu 140gr'                         ,spessore: '230'                    ,grammi:'140'              },
                                     { carta: 'Greggia Verde 140gr'                       ,spessore: '230'                    ,grammi:'140'              },
                                     { carta: 'Kraft Svedese 115gr'                       ,spessore: '151'                    ,grammi:'115'              },
                                     { carta: 'Kraft Svedese 125gr'                       ,spessore: '160'                    ,grammi:'125'              },
                                     { carta: 'Kraft Svedese 140gr'                       ,spessore: '185'                    ,grammi:'140'              },
                                     { carta: 'Kraft Svedese 175gr'                       ,spessore: '220'                    ,grammi:'175'              },
                                     { carta: 'Kraft Svedese 200gr'                       ,spessore: '260'                    ,grammi:'200'              },
                                     { carta: 'Kraft Svedese 225gr'                       ,spessore: '302'                    ,grammi:'225'              },
                                     { carta: 'Kraft Svedese 300gr'                       ,spessore: '385'                    ,grammi:'300'              },
                                     { carta: 'Politenata Bianca 31+9'                    ,spessore: '47'                     ,grammi:'40'               },
                                     { carta: 'Politenata Bianca Patinata 40+10'          ,spessore: '48'                     ,grammi:'50'               },
                                     { carta: 'Politenata Bianca 60+20'                   ,spessore: '103'                    ,grammi:'80'               },
                                     { carta: 'Politenata Bianca 70+20'                   ,spessore: '114'                    ,grammi:'90'               },
                                     { carta: 'Politenata Bianca 80+16'                   ,spessore: '120'                    ,grammi:'96'               },
                                     { carta: 'Politenata Bianca 90+16'                   ,spessore: '136'                    ,grammi:'106'              },
                                     { carta: 'Politenata Bianca 100+20'                  ,spessore: '156'                    ,grammi:'120'              },
                                     { carta: 'Politenata Avana 70+20'                    ,spessore: '121'                    ,grammi:'90'               },
                                     { carta: 'Politenata Avana 80+16'                    ,spessore: '135'                    ,grammi:'96'               },
                                     { carta: 'Politenata Bianca 90+16'                   ,spessore: '137'                    ,grammi:'106'              },
                                     { carta: 'Politenata Bianca 100+30'                  ,spessore: '160'                    ,grammi:'130'              },
                                     { carta: 'CartaFiltro 117/2/C  16,5gr'               ,spessore: '50'                     ,grammi:'16.5'             },
                                     { carta: 'CartaFiltro 121/2/C  21,5gr'               ,spessore: '66'                     ,grammi:'21.5'             },
                                     { carta: 'CartaFiltro 117/8/CG  16,5gr'              ,spessore: '57'                     ,grammi:'16.5'             },
                                     { carta: 'CartaFiltro 121/2/C03  21,5gr'             ,spessore: '53'                     ,grammi:'21.5'             },
                                     { carta: 'CartaFiltro 140/2 40gr'                    ,spessore: '101'                    ,grammi:'40'               },
                                     { carta: 'Crespata NK60 60gr'                        ,spessore: '153'                    ,grammi:'60'               },
                                     { carta: 'Film Acc. PET/PP P8'                       ,spessore: '78'                     ,grammi:'65'               },
                                     { carta: 'Microforato P16'                           ,spessore: '105'                    ,grammi:'64'               },
                                     { carta: 'CartaFiltro 121/2 LYD'                     ,spessore: '66'                     ,grammi:'21'               },
                                 
                                     { carta: 'Crespata NK PLA KV55'                      ,spessore: '160'                    ,grammi:'55'               },
                                     { carta: 'Crespata NK41'                             ,spessore: '97'                     ,grammi:'41'               },
                                     { carta: 'Cellulosa 28gr'                            ,spessore: '34'                     ,grammi:'28'               },
                                     { carta: 'Politenata Bianca 25+9'                    ,spessore: '39'                     ,grammi:'34'               },
                                     { carta: 'Crespata NK51'                             ,spessore: '135'                    ,grammi:'51'               },
                                     { carta: 'CF- Lutradur'                              ,spessore: '300'                    ,grammi:'100'              },
                                     { carta: 'Kraft Svedese 170gr'                       ,spessore: '229'                    ,grammi:'170'              },
                                     { carta: 'SPH 150'                                   ,spessore: '150'                    ,grammi:'108'              },
                                     { carta: 'SPH 80'                                    ,spessore: '80'                     ,grammi:'69'               },
                                     { carta: 'SPH 100'                                   ,spessore: '100'                    ,grammi:'79'               },
                                     { carta: 'SPH 120'                                   ,spessore: '120'                    ,grammi:'90'               },

                                     { carta: 'SPH 200'                                   ,spessore: '200'                    ,grammi:'140'              },

                                     { carta: 'CartaFiltro 121/8/C 21gr'                  ,spessore: '77'                     ,grammi:'21'               },
                                     { carta: 'CartaFiltro 123/2  23gr'                   ,spessore: '71'                     ,grammi:'23'               },
                                     { carta: 'Kraft Avana Monolucido LB 35gr'            ,spessore: '40'                     ,grammi:'35'               },

                                     { carta: 'Velina Nera 25gr'                          ,spessore: '39'                     ,grammi:'25'               },

                                     { carta: 'CartaFiltro 121/9/CF PLA SC 21,5gr'        ,spessore: '58'                     ,grammi:'21,5'             },

                                     { carta: 'CartaFiltro 125/9  PLA   25gr'             ,spessore: '94'                     ,grammi:'25'               },
                                     { carta: 'CartaFiltro KFP (51-3381)   51gr'          ,spessore: '129'                    ,grammi:'51'               },
                                     { carta: 'Parafinata  60gr'                          ,spessore: '130'                    ,grammi:'87'               },
 
                                     { carta: 'CartaFiltro KFP (60-3339)  60gr'           ,spessore: '153'                    ,grammi:'60'               },
                                     { carta: 'Accoppiata (125/9+pergamin45)  73gr'       ,spessore: '130'                    ,grammi:'73'               },
				     { carta: 'Carta Anticorrosiva VCI(STAMPATO) 57gr'       ,spessore: '92'                    ,grammi:'62'               },








]; 






















//sort in alphabetical

function compare(a,b) {
  if (a.carta < b.carta)
    return -1;
  if (a.carta > b.carta)
    return 1;
  return 0;
}

bangkero.sort(compare);




//populate the dropdown list

for(var i = 0; i < bangkero.length; i++){
    
    var opt = bangkero[i];
    var el = document.createElement("OPTION");
    el.textContent = opt.carta;
    el.value = opt.carta;
    
    select.add(el);

}




 function chosen()
    {var target_spessore=document.getElementById("spessore")
     var target_grammi=document.getElementById("grammi")
     var e = document.getElementById("cartedozio");
     var scelto = e.selectedIndex;
     if(scelto<=0){




               clear_spessore=document.getElementById("spessore");
               clear_diametro=document.getElementById("diametro");
               clear_metro=document.getElementById("metri");
               clear_faccio=document.getElementById("faccia");
               clear_rotolo=document.getElementById("numeri");
               clear_quadrato=document.getElementById("quadrate");
               clear_grammo=document.getElementById("grammi");
               clear_kilo=document.getElementById("kilo");

               clear_spessore.value="";
               clear_diametro.value="";
               clear_metro.value=""; 
               clear_faccio.value="";
               clear_rotolo.value="";
               clear_quadrato.value="";
               clear_grammo.value="";
               clear_kilo.value="";

      

                 



         }else{clear_spessore=document.getElementById("spessore");
               clear_diametro=document.getElementById("diametro");
               clear_metro=document.getElementById("metri");
               clear_faccio=document.getElementById("faccia");
               clear_rotolo=document.getElementById("numeri");
               clear_quadrato=document.getElementById("quadrate");
               clear_grammo=document.getElementById("grammi");
               clear_kilo=document.getElementById("kilo");

               clear_spessore.value="";
               clear_diametro.value="";
               clear_metro.value=""; 
               clear_faccio.value="";
               clear_rotolo.value="";
               clear_quadrato.value="";
               clear_grammo.value="";
               clear_kilo.value="";




                     scelto_spessore=bangkero[scelto-1].spessore
                     scelto_grammi=bangkero[scelto-1].grammi
     
                     target_spessore.value=scelto_spessore
                     target_grammi.value=scelto_grammi
                     sessionStorage.setItem("passGram", (Math.round(target_grammi.value=scelto_grammi)));

             

        //you can get the value from arguments itself
      // alert(bangkero[scelto-1].carta);
    };
 if(bangkero[scelto-1].carta=="Microforato P16")
                 { alert(bangkero[scelto-1].carta+

                  " I base spessore materiale forato luca albini con tensione a 20kg-f");
     }




}



 function redirect() {
  var input = document.getElementById("diametro").focus();
  
}



function reSet() {

		 document.getElementById("cartedozio").value="leon"; 

 	       clear_spessore=document.getElementById("spessore");
               clear_diametro=document.getElementById("diametro");
               clear_metro=document.getElementById("metri");
               clear_faccio=document.getElementById("faccia");
               clear_rotolo=document.getElementById("numeri");
               clear_quadrato=document.getElementById("quadrate");
               clear_grammo=document.getElementById("grammi");
               clear_kilo=document.getElementById("kilo");

               clear_spessore.value="";
               clear_diametro.value="";
               clear_metro.value=""; 
               clear_faccio.value="";
               clear_rotolo.value="";
               clear_quadrato.value="";
               clear_grammo.value="";
               clear_kilo.value="";
               sessionStorage.removeItem("passAlt");
               sessionStorage.removeItem("passGram");
               sessionStorage.removeItem("passMeter");

}




