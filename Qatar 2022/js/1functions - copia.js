
function reiniciar()
			{
				reiniciarPais("#A1");
				reiniciarPais("#A2");
				reiniciarPais("#B1");
				reiniciarPais("#B2");
				reiniciarPais("#C1");
				reiniciarPais("#C2");
				reiniciarPais("#D1");
				reiniciarPais("#D2");
				reiniciarPais("#E1");
				reiniciarPais("#E2");
				reiniciarPais("#F1");
				reiniciarPais("#F2");
				reiniciarPais("#G1");
				reiniciarPais("#G2");
				reiniciarPais("#H1");
				reiniciarPais("#H2");
				reiniciarPais("#quarta1");
				reiniciarPais("#quarta2");
				reiniciarPais("#quarta3");
				reiniciarPais("#quarta4");
				reiniciarPais("#quarta5");
				reiniciarPais("#quarta6");
				reiniciarPais("#quarta7");
				reiniciarPais("#quarta8");
				reiniciarPais("#semi1");
				reiniciarPais("#semi2");
				reiniciarPais("#semi3");
				reiniciarPais("#semi4");
				reiniciarPais("#fin_campeao_1");
				reiniciarPais("#fin_campeao_2");
				reiniciarPais("#fin_bronze_1");
				reiniciarPais("#fin_bronze_2");
				reiniciarPais("#campeao_ouro");
				reiniciarPais("#campeao_bronze_1");
				$(".reiniciar").css("display","none");
				return false;
			}	

			function reiniciarPais(id)
			{
						$(id).attr("data-pais","");
						$(id).attr("data-id","");
						var nome="#nome" + id.replace("#","");										
						$(id).css('background-image','');
						$(id).css('background-size','');
						$(id).css('background-position','');																						
						$(id).css('background','url(img/remeras/remera-vacia.png) no-repeat 0 0;');						
						$(nome).html("");
						$(id).attr("data-click","");
			}


			function armarURL()
			{
				//EN LA SIGUIENTE LINEA SE DEBE COLOCAR LA URL DONDE SE ENCUENTRAN ALOJADOS LOS ARCHIVOS; ES LA QUE SE COMPARTIRA EN FACEBOOK
				var url= "http://narcisoft.com.ar/app_web/simulador";
				url= url + "?p=";
				url= url + pegarPais("#A1") + "_";
				url= url + pegarPais("#A2") + "_";
				url= url + pegarPais("#B1") + "_";
				url= url + pegarPais("#B2") + "_";
				url= url + pegarPais("#C1") + "_";
				url= url + pegarPais("#C2") + "_";
				url= url + pegarPais("#D1") + "_";
				url= url + pegarPais("#D2") + "_";
				url= url + pegarPais("#E1") + "_";
				url= url + pegarPais("#E2") + "_";
				url= url + pegarPais("#F1") + "_";
				url= url + pegarPais("#F2") + "_";
				url= url + pegarPais("#G1") + "_";
				url= url + pegarPais("#G2") + "_";
				url= url + pegarPais("#H1") + "_";
				url= url + pegarPais("#H2") + "_";
				url= url + pegarPais("#quarta1") + "_";
				url= url + pegarPais("#quarta2") + "_";
				url= url + pegarPais("#quarta3") + "_";
				url= url + pegarPais("#quarta4") + "_";
				url= url + pegarPais("#quarta5") + "_";
				url= url + pegarPais("#quarta6") + "_";
				url= url + pegarPais("#quarta7") + "_";
				url= url + pegarPais("#quarta8") + "_";
				url= url + pegarPais("#semi1") + "_";
				url= url + pegarPais("#semi2") + "_";
				url= url + pegarPais("#semi3") + "_";
				url= url + pegarPais("#semi4") + "_";
				url= url + pegarPais("#fin_campeao_1") + "_";
				url= url + pegarPais("#fin_campeao_2") + "_";
				url= url + pegarPais("#fin_bronze_1") + "_";
				url= url + pegarPais("#fin_bronze_2") + "_";
				url= url + pegarPais("#campeao_ouro") + "_";
				url= url + pegarPais("#campeao_bronze_1") + "_";								
				window.open("https://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=%C2%A1&p%5Bsummary%5D=el&p%5Burl%5D="+url+"&p%5Bimages%5D%5B0%5D=http%3A%2F%2Fnarcisoft.com.ar%2Fapp_web%2Fsimulador%2Fimg%2Ftonito.jpg", "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=800, height=400, left=200 , top=150");

			}

			function pegarPais(id)
			{
				var id_pais=$(id).attr("data-id");

				return id_pais;
			}

			
			function decodificarResultados(resultado)
			{
				var result_split=resultado.split("_");
				completarPais("#A1",result_split[0]);
				completarPais("#A2",result_split[1]);
				completarPais("#B1",result_split[2]);
				completarPais("#B2",result_split[3]);
				completarPais("#C1",result_split[4]);
				completarPais("#C2",result_split[5]);
				completarPais("#D1",result_split[6]);
				completarPais("#D2",result_split[7]);
				completarPais("#E1",result_split[8]);
				completarPais("#E2",result_split[9]);
				completarPais("#F1",result_split[10]);
				completarPais("#F2",result_split[11]);
				completarPais("#G1",result_split[12]);
				completarPais("#G2",result_split[13]);
				completarPais("#H1",result_split[14]);
				completarPais("#H2",result_split[15]);
				completarPais("#quarta1",result_split[16]);
				completarPais("#quarta2",result_split[17]);
				completarPais("#quarta3",result_split[18]);
				completarPais("#quarta4",result_split[19]);
				completarPais("#quarta5",result_split[20]);
				completarPais("#quarta6",result_split[21]);
				completarPais("#quarta7",result_split[22]);
				completarPais("#quarta8",result_split[23]);
				completarPais("#semi1",result_split[24]);
				completarPais("#semi2",result_split[25]);
				completarPais("#semi3",result_split[26]);
				completarPais("#semi4",result_split[27]);
				completarPais("#fin_campeao_1",result_split[28]);
				completarPais("#fin_campeao_2",result_split[29]);
				completarPais("#fin_bronze_1",result_split[30]);
				completarPais("#fin_bronze_2",result_split[31]);
				completarPais("#campeao_ouro",result_split[32]);
				completarPais("#campeao_bronze_1",result_split[33]);
				$(".reiniciar").css("display","block");

			}

			function completarPais(id,pais)
			{
				switch(pais)
				{
					case "A1":
						completar(id,pais,"Brasil","brasil");
						break;
					case "A2":
						completar(id,pais,"Croacia","croacia");
						break;
					case "A3":
						completar(id,pais,"Mexico","mexico");
						break;
					case "A4":
						completar(id,pais,"Camerún","camerun");
						break;
					case "B1":
						completar(id,pais,"España","espana");
						break;
					case "B2":
						completar(id,pais,"Holanda","holanda");
						break;
					case "B3":
						completar(id,pais,"Chile","chile");
						break;
					case "B4":
						completar(id,pais,"Australia","australia");
						break;
					case "C1":
						completar(id,pais,"Colombia","colombia");
						break;
					case "C2":
						completar(id,pais,"Grecia","grecia");
						break;
					case "C3":
						completar(id,pais,"Costa de Marfil","costademarfil");
						break;
					case "C4":
						completar(id,pais,"Japón","japon");
						break;
					case "D1":
						completar(id,pais,"Uruguay","uruguay");
						break;
					case "D2":
						completar(id,pais,"Costa Rica","costarica");
						break;
					case "D3":
						completar(id,pais,"Inglaterra","inglaterra");
						break;
					case "D4":
						completar(id,pais,"Italia","italia");
						break;
					case "E1":
						completar(id,pais,"Suiza","suiza");
						break;
					case "E2":
						completar(id,pais,"Ecuador","ecuador");
						break;
					case "E3":
						completar(id,pais,"Francia","francia");
						break;
					case "E4":
						completar(id,pais,"Honduras","honduras");
						break;
					case "F1":
						completar(id,pais,"Argentina","argentina");
						break;
					case "F2":
						completar(id,pais,"Bosnia","bosnia");
						break;
					case "F3":
						completar(id,pais,"Irán","iran");
						break;
					case "F4":
						completar(id,pais,"Nigeria","nigeria");
						break;
					case "G1":
						completar(id,pais,"Alemania","alemania");
						break;
					case "G2":
						completar(id,pais,"Portugal","portugal");
						break;
					case "G3":
						completar(id,pais,"Ghana","ghana");
						break;
					case "G4":
						completar(id,pais,"EE.UU","usa");
						break;
					case "H1":
						completar(id,pais,"Bélgica","belgica");
						break;
					case "H2":
						completar(id,pais,"Argélia","argelia");
						break;
					case "H3":
						completar(id,pais,"Rusia","rusia");
						break;
					case "H4":
						completar(id,pais,"Corea del Sur","coreadelsur");
						break;
				}
			}

			function completar(id,id_pais,pais,imagen)
			{
						$(id).attr("data-pais",pais);
						$(id).attr("data-id",id_pais);
						var nome="#nome" + id.replace("#","");				
						var image= "transparent url('img/remeras/"+ imagen +".png') no-repeat 0 0";									
						$(id).css('background',image);
						$(id).css('background-size','23px');
						$(id).css('background-position','0px 9px');																						
						$(nome).html($(id).attr("data-pais"));
						$(id).attr("data-click","on");
			}

			$(document).keydown(function(tecla){ 
			    if (tecla.keyCode == 27) { 
			    	$("#elegir-seleccion").css("display","none");				    
			    } 
			});

			

			var pcol1=$("#col1").position();
			$(".time").click(function(){
				 
				cargarSelector($(this).attr("id"));
				var p = $(this);
				var position = p.position();
				var top=position.top -38;
				var left=position.left + pcol1.left + 23;
				$("#elegir-seleccion").attr("class","");
				$("#elegir-seleccion").css("display","block");				
				$("#elegir-seleccion").css("top",top);
				$("#elegir-seleccion").css("left",left);
			});

			$("#mysimulador").click(function(){ 
			    	//console.log("hola");
			    	//$("#elegir-seleccion").css("display","none");				    
			    
			});

			var pcol9=$("#col9").position();
			$(".time2").click(function(){
				cargarSelector($(this).attr("id"));
				var p = $(this);
				var position = p.position();
				var top=position.top -38;
				var left=position.left + pcol9.left + 23;
				$("#elegir-seleccion").attr("class","");
				$("#elegir-seleccion").css("display","block");				
				$("#elegir-seleccion").css("top",top);
				$("#elegir-seleccion").css("left",left);
			});

			var pcol2=$("#col2").position();
			$(".time3").click(function(){
				if ($(this).attr("data-click")!="")
				{
					cargarSelectorOctavos($(this).attr("id"));
					var p = $(this);
					var position = p.position();
					var top=position.top + 5;
					var left=position.left + pcol2.left + 23;
					$("#elegir-seleccion").attr("class","dois");
					$("#elegir-seleccion").css("display","block");				
					$("#elegir-seleccion").css("top",top);
					$("#elegir-seleccion").css("left",left);
				}	
			});			

			var pcol8=$("#col8").position();
			$(".time4").click(function(){
				if ($(this).attr("data-click")!="")
				{
					cargarSelectorOctavos($(this).attr("id"));
					var p = $(this);
					var position = p.position();
					var top=position.top + 5;
					var left=position.left + pcol8.left + 23;
					$("#elegir-seleccion").attr("class","dois");
					$("#elegir-seleccion").css("display","block");				
					$("#elegir-seleccion").css("top",top);
					$("#elegir-seleccion").css("left",left);
				}	
			});	

			var pcol3=$("#col3").position();
			$(".time5").click(function(){
				if ($(this).attr("data-click")!="")
				{
					cargarSelectorCuartos($(this).attr("id"));
					var p = $(this);
					var position = p.position();
					var top=position.top + 5;
					var left=position.left + pcol3.left + 23;
					$("#elegir-seleccion").attr("class","dois");
					$("#elegir-seleccion").css("display","block");				
					$("#elegir-seleccion").css("top",top);
					$("#elegir-seleccion").css("left",left);
				}	
			});	

			var pcol7=$("#col7").position();
			$(".time6").click(function(){
				if ($(this).attr("data-click")!="")
				{
					cargarSelectorCuartos($(this).attr("id"));
					var p = $(this);
					var position = p.position();
					var top=position.top + 5;
					var left=position.left + pcol7.left + 23;
					$("#elegir-seleccion").attr("class","dois");
					$("#elegir-seleccion").css("display","block");				
					$("#elegir-seleccion").css("top",top);
					$("#elegir-seleccion").css("left",left);
				}	
			});	

			var pcol4=$("#col4").position();
			$(".time7").click(function(){
				if ($(this).attr("data-click")!="")
				{
					cargarSelectorSemi($(this).attr("id"));
					var p = $(this);
					var position = p.position();
					var top=position.top + 5;
					var left=position.left + pcol4.left + 23;
					$("#elegir-seleccion").attr("class","dois");
					$("#elegir-seleccion").css("display","block");				
					$("#elegir-seleccion").css("top",top);
					$("#elegir-seleccion").css("left",left);
				}	
			});	

			var pcol6=$("#col6").position();
			$(".time8").click(function(){
				if ($(this).attr("data-click")!="")
				{
					cargarSelectorSemi($(this).attr("id"));
					var p = $(this);
					var position = p.position();
					var top=position.top + 5;
					var left=position.left + pcol6.left + 23;
					$("#elegir-seleccion").attr("class","dois");
					$("#elegir-seleccion").css("display","block");				
					$("#elegir-seleccion").css("top",top);
					$("#elegir-seleccion").css("left",left);
				}	
			});	

			var pcol5=$("#col5").position();
			$(".time9").click(function(){
				if ($(this).attr("data-click")!="")
				{
					cargarSelectorFinal($(this).attr("id"));
					var p = $(this);
					var position = p.position();
					var top=position.top + 5;
					var left=position.left + pcol5.left + 23;
					$("#elegir-seleccion").attr("class","dois");
					$("#elegir-seleccion").css("display","block");				
					$("#elegir-seleccion").css("top",top);
					$("#elegir-seleccion").css("left",left);
				}	
			});	

			$(".pais").click(function(){
				var dataSplit=$(this).attr('data-id').split('-');
				var data="#" + dataSplit[0];				
				if (data=="#fin_campeao_1" || data=="#fin_campeao_2" || data=="#fin_bronze_1" || data=="#fin_bronze_2")
				{
					var data_adv="";
					switch(data){
						case "#fin_campeao_1":
								data_adv="fin_bronze_1";
								break;
						case "#fin_campeao_2":
								data_adv="fin_bronze_2";
								break;
						case "#fin_bronze_1":
								data_adv="fin_campeao_1";
								break;
						case "#fin_bronze_2":
								data_adv="fin_campeao_2";
								break;

						}

					var nome1="#nome" + data_adv;		
					data_adv="#" + data_adv;		
					var divs=$("#elegir-seleccion").find("div");
					
					
					if ($(divs[0]).attr("data-id")==$(this).attr("data-id"))
					{
						var image1= "transparent url('" + $(divs[1]).find('img').attr('src') +"') no-repeat 0 0";
						$(data_adv).attr("data-pais",$(divs[1])[0].textContent);			
						$(nome1).html($(divs[1])[0].textContent);
						var dataid=$(divs[1]).attr("data-id");
						dataid=dataid.split('-');
						$(data_adv).attr("data-id",dataid[1]);
					}
					else
					{
						var image1= "transparent url('" + $(divs[0]).find('img').attr('src') +"') no-repeat 0 0";
						$(data_adv).attr("data-pais",$(divs[0])[0].textContent);			
						$(nome1).html($(divs[0])[0].textContent);
						var dataid=$(divs[0]).attr("data-id");
						dataid=dataid.split('-');
						$(data_adv).attr("data-id",dataid[1]);
					}
					
					
					$(data_adv).css('background',image1);
					$(data_adv).css('background-size','23px');
					$(data_adv).css('background-position','0px 9px');				
					
						
					//$(nome).html("<strong>" + $(this)[0].textContent + "</strong>");
					
				}

				

				var nome="#nome" + dataSplit[0];				
				var image= "transparent url('" + $(this).find('img').attr('src') +"') no-repeat 0 0";			
				var data_pais=$(data).attr('data-id'); 
				comprobarLinksIguales(dataSplit[0],dataSplit[1],$(this)[0].textContent,image,data_pais);

				$(data).css('background',image);
				$(data).css('background-size','23px');
				$(data).css('background-position','0px 9px');				
				$(data).attr("data-id",dataSplit[1]);
				$(data).attr("data-pais",$(this)[0].textContent);				
				//$(nome).html("<strong>" + $(this)[0].textContent + "</strong>");
				$(nome).html($(this)[0].textContent);
				$("#elegir-seleccion").css("display","none");
				comprobarLinks(dataSplit[0],$(data).attr("data-adv"));
				

			});			
			
			function comprobarLinksIguales(id,id_elegido,pais_elegido,image_elegido,data_pais)
			{				
				var id_viejo= "#" + id;
				
				var clase= $(id_viejo).attr("class");
				console.log(id_viejo +"  "+ clase+"  "+data_pais);
				if (data_pais!="")
				{
					switch(clase)
					{
						case "time":
								var time3=$(".time3");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);									
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);			
										

										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[2]).attr('data-id'):

										var nome="#nome" + $(time3[2]).attr("id");	
										console.log(image_elegido);													
										$(time3[2]).css('background',image_elegido);
										$(time3[2]).css('background-size','23px');
										$(time3[2]).css('background-position','0px 9px');				
										$(time3[2]).attr("data-id",id_elegido);
										$(time3[2]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[3]).attr('data-id'):

										var nome="#nome" + $(time3[3]).attr("id");	
										console.log(image_elegido);													
										$(time3[3]).css('background',image_elegido);
										$(time3[3]).css('background-size','23px');
										$(time3[3]).css('background-position','0px 9px');				
										$(time3[3]).attr("data-id",id_elegido);
										$(time3[3]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
								}																			
								break;
						case "time2":
								var time3=$(".time4");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);									
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);			
										

										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[2]).attr('data-id'):

										var nome="#nome" + $(time3[2]).attr("id");	
										console.log(image_elegido);													
										$(time3[2]).css('background',image_elegido);
										$(time3[2]).css('background-size','23px');
										$(time3[2]).css('background-position','0px 9px');				
										$(time3[2]).attr("data-id",id_elegido);
										$(time3[2]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[3]).attr('data-id'):

										var nome="#nome" + $(time3[3]).attr("id");	
										console.log(image_elegido);													
										$(time3[3]).css('background',image_elegido);
										$(time3[3]).css('background-size','23px');
										$(time3[3]).css('background-position','0px 9px');				
										$(time3[3]).attr("data-id",id_elegido);
										$(time3[3]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
								}																			
								break;

						case "time3":
								var time3=$(".time5");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;									
								}																			
								break;
						case "time4":
								var time3=$(".time6");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;									
								}																			
								break;

						case "time5":
								var time3=$(".time7");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;									
								}																			
								break;
						
						case "time6":
								var time3=$(".time8");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;									
								}																			
								break;

						case "time7":
								var time3=$(".time9");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;									
								}																			
								break;

						case "time8":
								var time3=$(".time9");
								switch(data_pais)
								{
									case $(time3[0]).attr('data-id'):
										var nome="#nome" + $(time3[0]).attr("id");	
										console.log(image_elegido);													
										$(time3[0]).css('background',image_elegido);
										$(time3[0]).css('background-size','23px');
										$(time3[0]).css('background-position','0px 9px');				
										$(time3[0]).attr("data-id",id_elegido);
										$(time3[0]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;
									case $(time3[1]).attr('data-id'):
										var nome="#nome" + $(time3[1]).attr("id");	
										console.log(image_elegido);													
										$(time3[1]).css('background',image_elegido);
										$(time3[1]).css('background-size','23px');
										$(time3[1]).css('background-position','0px 9px');				
										$(time3[1]).attr("data-id",id_elegido);
										$(time3[1]).attr("data-pais",pais_elegido);														
										$(nome).html(pais_elegido);
										comprobarLinksIguales($(time3[0]).attr("id"),id_elegido,pais_elegido,image_elegido,data_pais);
										break;									
								}																			
								break;
					}
				}

			}
			function comprobarLinks(id,id_adv)
			{				
				id= "#" + id;
				id_adv= "#" + id_adv;
				
				if ($(id).attr('data-id')!="" && $(id_adv).attr('data-id')!="")
				{
					switch(id) {
						case '#B2':
								$("#quarta1").attr('data-click','on');
								break;
						case '#A1':
								$("#quarta1").attr('data-click','on');
								break;
						case '#C1':
								$("#quarta2").attr('data-click','on');
								break;
						case '#D2':
								$("#quarta2").attr('data-click','on');
								break;
						case '#F2':
								$("#quarta3").attr('data-click','on');
								break;
						case '#E1':
								$("#quarta3").attr('data-click','on');
								break;
						case '#H2':
								$("#quarta4").attr('data-click','on');
								break;
						case '#G1':
								$("#quarta4").attr('data-click','on');
								break;
						case '#A2':
								$("#quarta5").attr('data-click','on');
								break;
						case '#B1':
								$("#quarta5").attr('data-click','on');
								break;
						case '#D1':
								$("#quarta6").attr('data-click','on');
								break;
						case '#C2':
								$("#quarta6").attr('data-click','on');
								break;
						case '#E2':
								$("#quarta7").attr('data-click','on');
								break;
						case '#F1':
								$("#quarta7").attr('data-click','on');
								break;
						case '#G2':
								$("#quarta8").attr('data-click','on');
								break;
						case '#H1':
								$("#quarta8").attr('data-click','on');
								break;
						case '#quarta2':
								$("#semi1").attr('data-click','on');
								break;
						case '#quarta1':
								$("#semi1").attr('data-click','on');
								break;
						case '#quarta4':
								$("#semi2").attr('data-click','on');
								break;
						case '#quarta3':
								$("#semi2").attr('data-click','on');
								break;
						case '#quarta6':
								$("#semi3").attr('data-click','on');
								break;
						case '#quarta5':
								$("#semi3").attr('data-click','on');
								break;
						case '#quarta7':
								$("#semi4").attr('data-click','on');
								break;
						case '#quarta8':
								$("#semi4").attr('data-click','on');
								break;
						case '#semi1':
								$("#fin_campeao_1").attr('data-click','on');
								$("#fin_bronze_1").attr('data-click','on');
								break;
						case '#semi2':
								$("#fin_campeao_1").attr('data-click','on');
								$("#fin_bronze_1").attr('data-click','on');
								break;
						case '#semi4':
								$("#fin_campeao_2").attr('data-click','on');
								$("#fin_bronze_2").attr('data-click','on');
								break;						
						case '#semi3':
								$("#fin_campeao_2").attr('data-click','on');
								$("#fin_bronze_2").attr('data-click','on');
								break;						
						case '#fin_campeao_1':
								$("#campeao_ouro").attr('data-click','on');								
								$("#campeao_bronze_1").attr('data-click','on');								
								break;						
						case '#fin_campeao_2':
								$("#campeao_ouro").attr('data-click','on');								
								$("#campeao_bronze_1").attr('data-click','on');								
								break;						
						case '#fin_bronze_1':
								$("#campeao_bronze_1").attr('data-click','on');							
								$("#campeao_ouro").attr('data-click','on');									
								break;						
						case '#fin_bronze_2':
								$("#campeao_bronze_1").attr('data-click','on');							
								$("#campeao_ouro").attr('data-click','on');								
								break;						
						case '#campeao_bronze_1':
								if ($("#campeao_ouro").attr('data-id')!="")
									{
										$("#share2").css("display","block");
										$(".reiniciar").css("display","block");
									}								
								break;						
						case '#campeao_ouro':
								if ($("#campeao_bronze_1").attr('data-id')!="")
									{
										$("#share1").css("display","block");
										$(".reiniciar").css("display","block");
									}																
								break;						
										


					}
				}
			}

			function cargarSelectorFinal(id)
			{				
				var divs=$("#elegir-seleccion").find("div");
				$(divs[0]).html("");
				$(divs[0]).attr('data-id','');
				$(divs[1]).html("");
				$(divs[1]).attr('data-id','');
				$(divs[2]).html("");
				$(divs[2]).attr('data-id','');
				$(divs[3]).html("");
				$(divs[3]).attr('data-id','');				
				switch(id) {
					case 'campeao_ouro':			
							var datos=$("#fin_campeao_1");
							var datos_adv=$("#fin_campeao_2");				
							$(divs[0]).attr('data-id','campeao_ouro-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','campeao_ouro-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'campeao_bronze_1':			
							var datos=$("#fin_bronze_1");
							var datos_adv=$("#fin_bronze_2");				
							$(divs[0]).attr('data-id','campeao_bronze_1-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','campeao_bronze_1-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
						}
				}
			function cargarSelectorSemi(id)
			{				
				var divs=$("#elegir-seleccion").find("div");
				$(divs[0]).html("");
				$(divs[0]).attr('data-id','');
				$(divs[1]).html("");
				$(divs[1]).attr('data-id','');
				$(divs[2]).html("");
				$(divs[2]).attr('data-id','');
				$(divs[3]).html("");
				$(divs[3]).attr('data-id','');				
				switch(id) {
					case 'fin_campeao_1':			
							var datos=$("#semi1");
							var datos_adv=$("#semi2");				
							$(divs[0]).attr('data-id','fin_campeao_1-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','fin_campeao_1-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'fin_campeao_2':			
							var datos=$("#semi3");
							var datos_adv=$("#semi4");				
							$(divs[0]).attr('data-id','fin_campeao_2-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','fin_campeao_2-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'fin_bronze_1':			
							var datos=$("#semi1");
							var datos_adv=$("#semi2");				
							$(divs[0]).attr('data-id','fin_bronze_1-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','fin_bronze_1-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'fin_bronze_2':			
							var datos=$("#semi3");
							var datos_adv=$("#semi4");				
							$(divs[0]).attr('data-id','fin_bronze_2-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','fin_bronze_2-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
						}
			}

			function cargarSelectorCuartos(id)
			{				
				var divs=$("#elegir-seleccion").find("div");
				$(divs[0]).html("");
				$(divs[0]).attr('data-id','');
				$(divs[1]).html("");
				$(divs[1]).attr('data-id','');
				$(divs[2]).html("");
				$(divs[2]).attr('data-id','');
				$(divs[3]).html("");
				$(divs[3]).attr('data-id','');				
				switch(id) {
					case 'semi1':			
							var datos=$("#quarta1");
							var datos_adv=$("#quarta2");				
							$(divs[0]).attr('data-id','semi1-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','semi1-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'semi2':			
							var datos=$("#quarta3");
							var datos_adv=$("#quarta4");				
							$(divs[0]).attr('data-id','semi2-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','semi2-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'semi3':			
							var datos=$("#quarta5");
							var datos_adv=$("#quarta6");				
							$(divs[0]).attr('data-id','semi3-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','semi3-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'semi4':			
							var datos=$("#quarta7");
							var datos_adv=$("#quarta8");				
							$(divs[0]).attr('data-id','semi4-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','semi4-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
						}
			}

			function cargarSelectorOctavos(id)
			{				
				var divs=$("#elegir-seleccion").find("div");
				$(divs[0]).html("");
				$(divs[0]).attr('data-id','');
				$(divs[1]).html("");
				$(divs[1]).attr('data-id','');
				$(divs[2]).html("");
				$(divs[2]).attr('data-id','');
				$(divs[3]).html("");
				$(divs[3]).attr('data-id','');				
				switch(id) {
					case 'quarta1':			
							var datos=$("#A1");
							var datos_adv=$("#B2");				
							$(divs[0]).attr('data-id','quarta1-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta1-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("','');
							datos=datos.replace('"','');
							datos=datos.replace(')','');							
							datos_adv=datos_adv.css('background-image').replace('url("','');
							datos_adv=datos_adv.replace('"','');					
							datos_adv=datos_adv.replace(')','');					
							var img1=datos.split("remeras");										
							var img2=datos_adv.split("remeras");										
							img1="img/remeras" + img1[1];
							img2="img/remeras" + img2[1];
							$(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);												
							$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'quarta2':			
							var datos=$("#C1");
							var datos_adv=$("#D2");				
							$(divs[0]).attr('data-id','quarta2-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta2-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);
							break;
					case 'quarta3':			
							var datos=$("#E1");
							var datos_adv=$("#F2");				
							$(divs[0]).attr('data-id','quarta3-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta3-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'quarta4':			
							var datos=$("#G1");
							var datos_adv=$("#H2");				
							$(divs[0]).attr('data-id','quarta4-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta4-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'quarta5':			
							var datos=$("#B1");
							var datos_adv=$("#A2");				
							$(divs[0]).attr('data-id','quarta5-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta5-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'quarta6':			
							var datos=$("#D1");
							var datos_adv=$("#C2");				
							$(divs[0]).attr('data-id','quarta6-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta6-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'quarta7':			
							var datos=$("#F1");
							var datos_adv=$("#E2");				
							$(divs[0]).attr('data-id','quarta7-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta7-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
					case 'quarta8':			
							var datos=$("#H1");
							var datos_adv=$("#G2");				
							$(divs[0]).attr('data-id','quarta8-'+ datos.attr("data-id"));
							$(divs[1]).attr('data-id','quarta8-'+ datos_adv.attr("data-id"));
							var nombre=datos.attr("data-pais");
							var nombre_adv=datos_adv.attr("data-pais");
							datos=datos.css('background-image').replace('url("',''); datos=datos.replace('"',''); datos=datos.replace(')','');datos_adv=datos_adv.css('background-image').replace('url("',''); datos_adv=datos_adv.replace('"','');	datos_adv=datos_adv.replace(')','');var img1=datos.split("remeras");var img2=datos_adv.split("remeras");	img1="img/remeras" + img1[1]; img2="img/remeras" + img2[1]; $(divs[0]).html("<img class='imgSelector' src='"+img1+"'/><br/>"+ nombre);$(divs[1]).html("<img class='imgSelector' src='"+img2+"'/><br/>" +nombre_adv);																										
							break;
				}

				
			}
			function cargarSelector(id)
			{
				var id_loc="#" + id;
				var adv= "#" + $(id_loc).attr("data-adv");
				var divs=$("#elegir-seleccion").find("div");
				$(divs[0]).html("");
				$(divs[0]).attr('data-id','');
				$(divs[1]).html("");
				$(divs[1]).attr('data-id','');
				$(divs[2]).html("");
				$(divs[2]).attr('data-id','');
				$(divs[3]).html("");
				$(divs[3]).attr('data-id','');
				switch(id) {
					case 'A1':												
						if ($("#A2").attr("data-id")!="A1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/brasil.png'/><br/>Brasil");
							$(divs[0]).attr('data-id','A1-A1');
						}
						if ($("#A2").attr("data-id")!="A2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/croacia.png'/><br/>Croacia");
							$(divs[1]).attr('data-id','A1-A2');
						}
						if ($("#A2").attr("data-id")!="A3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/mexico.png'/><br/>Mexico");
							$(divs[2]).attr('data-id','A1-A3');
						}
						if ($("#A2").attr("data-id")!="A4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/camerun.png'/><br/>Camerún");
							$(divs[3]).attr('data-id','A1-A4');
						}	
						
					    break;					
					case 'B2':
						if ($("#B1").attr("data-id")!="B1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/espana.png'/><br/>España");
							$(divs[0]).attr('data-id','B2-B1');
						}
						if ($("#B1").attr("data-id")!="B2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/holanda.png'/><br/>Holanda");
							$(divs[1]).attr('data-id','B2-B2');
						}
						if ($("#B1").attr("data-id")!="B3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/chile.png'/><br/>Chile");
							$(divs[2]).attr('data-id','B2-B3');
						}
						if ($("#B1").attr("data-id")!="B4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/australia.png'/><br/>Australia");
							$(divs[3]).attr('data-id','B2-B4');
						}																													   					    
					    break;					
					case 'C1':
						if ($("#C2").attr("data-id")!="C1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/colombia.png'/><br/>Colombia");
							$(divs[0]).attr('data-id','C1-C1');
						}
						if ($("#C2").attr("data-id")!="C2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/grecia.png'/><br/>Grecia");
							$(divs[1]).attr('data-id','C1-C2');
						}
						if ($("#C2").attr("data-id")!="C3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/costademarfil.png'/><br/>Costa de Marfil");
							$(divs[2]).attr('data-id','C1-C3');
						}
						if ($("#C2").attr("data-id")!="C4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/japon.png'/><br/>Japón");
						    $(divs[3]).attr('data-id','C1-C4');
						}																													   
					    break;					
					case 'D2':
						if ($("#D1").attr("data-id")!="D1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/uruguay.png'/><br/>Uruguay");
							$(divs[0]).attr('data-id','D2-D1');
						}
						if ($("#D1").attr("data-id")!="D2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/costarica.png'/><br/>Costa Rica");
							$(divs[1]).attr('data-id','D2-D2');
						}
						if ($("#D1").attr("data-id")!="D3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/inglaterra.png'/><br/>Inglaterra");
							$(divs[2]).attr('data-id','D2-D3');
						}
						if ($("#D1").attr("data-id")!="D4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/italia.png'/><br/>Italia");
						    $(divs[3]).attr('data-id','D2-D4');																	    
						}
							
							
					    break;					
					case 'E1':
						if ($("#E2").attr("data-id")!="E1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/suiza.png'/><br/>Suiza");
							$(divs[0]).attr('data-id','E1-E1');
						}
						if ($("#E2").attr("data-id")!="E2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/ecuador.png'/><br/>Ecuador");
							$(divs[1]).attr('data-id','E1-E2');
						}
						if ($("#E2").attr("data-id")!="E3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/francia.png'/><br/>Francia");
							$(divs[2]).attr('data-id','E1-E3');
						}
						if ($("#E2").attr("data-id")!="E4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/honduras.png'/><br/>Honduras");
						    $(divs[3]).attr('data-id','E1-E4');																	    
						}												
					    break;					
					case 'F2':
						
						if ($("#F1").attr("data-id")!="F1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/argentina.png'/><br/>Argentina");
							$(divs[0]).attr('data-id','F2-F1');
						}
						if ($("#F1").attr("data-id")!="F2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/bosnia.png'/><br/>Bosnia");
							$(divs[1]).attr('data-id','F2-F2');
						}
						if ($("#F1").attr("data-id")!="F3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/iran.png'/><br/>Irán");
							$(divs[2]).attr('data-id','F2-F3');
						}
						if ($("#F1").attr("data-id")!="F4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/nigeria.png'/><br/>Nigeria");
						    $(divs[3]).attr('data-id','F2-F4');																	    
						}														
					    break;					
					case 'G1':
						if ($("#G2").attr("data-id")!="G1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/alemania.png'/><br/>Alemania");
							$(divs[0]).attr('data-id','G1-G1');
						}
						if ($("#G2").attr("data-id")!="G2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/portugal.png'/><br/>Portugal");
							$(divs[1]).attr('data-id','G1-G2');
						}
						if ($("#G2").attr("data-id")!="G3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/ghana.png'/><br/>Ghana");
							$(divs[2]).attr('data-id','G1-G3');
						}
						if ($("#G2").attr("data-id")!="G4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/usa.png'/><br/>EE.UU.");
						    $(divs[3]).attr('data-id','G1-G4');																	    
						}								
					    break;					
					case 'H2':						
						if ($("#H1").attr("data-id")!="H1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/belgica.png'/><br/>Bélgica");
							$(divs[0]).attr('data-id','H2-H1');
						}
						if ($("#H1").attr("data-id")!="H2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/argelia.png'/><br/>Argélia");
							$(divs[1]).attr('data-id','H2-H2');
						}
						if ($("#H1").attr("data-id")!="H3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/rusia.png'/><br/>Rusia");
							$(divs[2]).attr('data-id','H2-H3');
						}
						if ($("#H1").attr("data-id")!="H4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/coreadelsur.png'/><br/>Corea del Sur");
						    $(divs[3]).attr('data-id','H2-H4');																	    
						}
					    break;					
					case 'A2':						
						console.log($("#A1").attr("data-id") + "?");
						var sacarPais= $("#A1").attr("data-id");
						if (sacarPais!="A1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/brasil.png'/><br/>Brasil");
							$(divs[0]).attr('data-id','A2-A1');
						}
						if (sacarPais!="A2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/croacia.png'/><br/>Croacia");
							$(divs[1]).attr('data-id','A2-A2');
						}
						if (sacarPais!="A3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/mexico.png'/><br/>Mexico");
							$(divs[2]).attr('data-id','A2-A3');
						}
						if (sacarPais!="A4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/camerun.png'/><br/>Camerún");
							$(divs[3]).attr('data-id','A2-A4');
						}
					    break;					
					case 'B1':
						if ($("#B2").attr("data-id")!="B1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/espana.png'/><br/>España");
							$(divs[0]).attr('data-id','B1-B1');
						}
						if ($("#B2").attr("data-id")!="B2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/holanda.png'/><br/>Holanda");
							$(divs[1]).attr('data-id','B1-B2');
						}
						if ($("#B2").attr("data-id")!="B3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/chile.png'/><br/>Chile");
							$(divs[2]).attr('data-id','B1-B3');
						}
						if ($("#B2").attr("data-id")!="B4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/australia.png'/><br/>Australia");
							$(divs[3]).attr('data-id','B1-B4');
						}					    break;					
					case 'C2':
						if ($("#C1").attr("data-id")!="C1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/colombia.png'/><br/>Colombia");
							$(divs[0]).attr('data-id','C2-C1');
						}
						if ($("#C1").attr("data-id")!="C2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/grecia.png'/><br/>Grecia");
							$(divs[1]).attr('data-id','C2-C2');
						}
						if ($("#C1").attr("data-id")!="C3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/costademarfil.png'/><br/>Costa de Marfil");
							$(divs[2]).attr('data-id','C2-C3');
						}
						if ($("#C1").attr("data-id")!="C4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/japon.png'/><br/>Japón");
						    $(divs[3]).attr('data-id','C2-C4');
						}																													   
					    break;					
					case 'D1':
						if ($("#D2").attr("data-id")!="D1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/uruguay.png'/><br/>Uruguay");
							$(divs[0]).attr('data-id','D1-D1');
						}
						if ($("#D2").attr("data-id")!="D2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/costarica.png'/><br/>Costa Rica");
							$(divs[1]).attr('data-id','D1-D2');
						}
						if ($("#D2").attr("data-id")!="D3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/inglaterra.png'/><br/>Inglaterra");
							$(divs[2]).attr('data-id','D1-D3');
						}
						if ($("#D2").attr("data-id")!="D4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/italia.png'/><br/>Italia");
						    $(divs[3]).attr('data-id','D1-D4');																	    
						}
					    break;					
					case 'E2':
						if ($("#E1").attr("data-id")!="E1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/suiza.png'/><br/>Suiza");
							$(divs[0]).attr('data-id','E2-E1');
						}
						if ($("#E1").attr("data-id")!="E2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/ecuador.png'/><br/>Ecuador");
							$(divs[1]).attr('data-id','E2-E2');
						}
						if ($("#E1").attr("data-id")!="E3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/francia.png'/><br/>Francia");
							$(divs[2]).attr('data-id','E2-E3');
						}
						if ($("#E1").attr("data-id")!="E4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/honduras.png'/><br/>Honduras");
						    $(divs[3]).attr('data-id','E2-E4');																	    
						}
					    break;					
					case 'F1':
						if ($("#F2").attr("data-id")!="F1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/argentina.png'/><br/>Argentina");
							$(divs[0]).attr('data-id','F1-F1');
						}
						if ($("#F2").attr("data-id")!="F2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/bosnia.png'/><br/>Bosnia");
							$(divs[1]).attr('data-id','F1-F2');
						}
						if ($("#F2").attr("data-id")!="F3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/iran.png'/><br/>Irán");
							$(divs[2]).attr('data-id','F1-F3');
						}
						if ($("#F2").attr("data-id")!="F4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/nigeria.png'/><br/>Nigeria");
						    $(divs[3]).attr('data-id','F1-F4');																	    
						}														
					    break;					
					case 'G2':
						if ($("#G1").attr("data-id")!="G1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/alemania.png'/><br/>Alemania");
							$(divs[0]).attr('data-id','G2-G1');
						}
						if ($("#G1").attr("data-id")!="G2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/portugal.png'/><br/>Portugal");
							$(divs[1]).attr('data-id','G2-G2');
						}
						if ($("#G1").attr("data-id")!="G3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/ghana.png'/><br/>Ghana");
							$(divs[2]).attr('data-id','G2-G3');
						}
						if ($("#G1").attr("data-id")!="G4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/usa.png'/><br/>EE.UU.");
						    $(divs[3]).attr('data-id','G2-G4');																	    
						}
					    break;					
					case 'H1':
						if ($("#H2").attr("data-id")!="H1")
						{
							$(divs[0]).html("<img class='imgSelector' src='img/remeras/belgica.png'/><br/>Bélgica");
							$(divs[0]).attr('data-id','H1-H1');
						}
						if ($("#H2").attr("data-id")!="H2")
						{
							$(divs[1]).html("<img class='imgSelector' src='img/remeras/argelia.png'/><br/>Argélia");
							$(divs[1]).attr('data-id','H1-H2');
						}
						if ($("#H2").attr("data-id")!="H3")
						{
							$(divs[2]).html("<img class='imgSelector' src='img/remeras/rusia.png'/><br/>Rusia");
							$(divs[2]).attr('data-id','H1-H3');
						}
						if ($("#H2").attr("data-id")!="H4")
						{
							$(divs[3]).html("<img class='imgSelector' src='img/remeras/coreadelsur.png'/><br/>Corea del Sur");
						    $(divs[3]).attr('data-id','H1-H4');																	    
						}
					    break;					
					}
					
			}
