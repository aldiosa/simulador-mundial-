<!doctype html>
<html class="no-js" lang="es">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Esta descripcion tambien es la que utiliza para compartir en facebook -->    
    <meta name="description" content="Sos un Crack - Demuéstranos cuanto sabes de fútbol" />	
	<!-- Este titulo tambien es el que utiliza para compartir en facebook -->    
    <title>Sos un Crack - Demuéstranos cuanto sabes de fútbol</title>
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="css/main.css" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  	<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
  	<script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    
	  <style>
	  #mysimulador{
			position: absolute;
			top: 65%;  /* position the top  edge of the element at the middle of the parent */
     }
	  @media screen and (min-width:1025px) {

		#mysimulador{
			position: absolute;
			top: 65%;  /* position the top  edge of the element at the middle of the parent */
			left: 50%; /* position the left edge of the element at the middle of the parent */
			transform: translate(-50%, -50%); 
     }
}
		
		/* CSS code here */
	</style>
  </head>
  <body class="container">
  		
		<!-- INICIO CODIGO -->
		
		<img style="width:0px;" class="fondo_labels" src="img/cabeza.png" />
		<img style="width:0px;;" class="fondo_labels" src="img/tonito.jpg" />
		<div    id="mysimulador" >						
			
			<img class="fondo_labels" src="img/fundo_labels.jpg" />
			<img class="data-hora-local" src="img/data-hora-local.png" />
			
			<div id="nome_selecoes" align="right">
				<div class="nome" id="nomeA1" data-nome="A1"></div>
				<div class="nome" id="nomeB2" data-nome="B2"></div>
				<div class="nome" id="nomeC1" data-nome="C1"></div>
				<div class="nome" id="nomeD2" data-nome="D2"></div>
				<div class="nome" id="nomeE1" data-nome="E1"></div>
				<div class="nome" id="nomeF2" data-nome="F2"></div>
				<div class="nome" id="nomeG1" data-nome="G1"></div>
				<div class="nome" id="nomeH2" data-nome="H2"></div>
				<div class="nome" id="nomequarta1" data-nome="quarta1"></div>
				<div class="nome" id="nomequarta2" data-nome="quarta2"></div>
				<div class="nome" id="nomequarta3" data-nome="quarta3"></div>
				<div class="nome" id="nomequarta4" data-nome="quarta4"></div>
				<div class="nome" id="nomesemi1" data-nome="semi1"></div>
				<div class="nome" id="nomesemi2" data-nome="semi2"></div>

				<div class="nome" id="nomefin_campeao_1" align="left" data-nome="fin_campeao_1"></div>
				<div class="nome" id="nomefin_bronze_1" align="left" data-nome="fin_bronze_1"></div>
				<div class="nome" id="nomecampeao_ouro" data-nome="campeao_ouro"></div>
				<div class="nome" id="nomecampeao_bronze_1" data-nome="campeao_bronze_1"></div>
				<div class="nome" id="nomefin_campeao_2" align="right" data-nome="fin_campeao_2"></div>
				<div class="nome" id="nomefin_bronze_2" align="right" data-nome="fin_bronze_2"></div>

				<div class="nome" id="nomesemi3" align="left" data-nome="semi3"></div>
				<div class="nome" id="nomesemi4" align="left" data-nome="semi4"></div>
				<div class="nome" id="nomequarta5" align="left" data-nome="quarta5"></div>
				<div class="nome" id="nomequarta6" align="left" data-nome="quarta6"></div>
				<div class="nome" id="nomequarta7" align="left" data-nome="quarta7"></div>
				<div class="nome" id="nomequarta8" align="left" data-nome="quarta8"></div>
				<div class="nome" id="nomeB1" align="left" data-nome="B1"></div>
				<div class="nome" id="nomeA2" align="left" data-nome="A2"></div>
				<div class="nome" id="nomeD1" align="left" data-nome="D1"></div>
				<div class="nome" id="nomeC2" align="left" data-nome="C2"></div>
				<div class="nome" id="nomeF1" align="left" data-nome="F1"></div>
				<div class="nome" id="nomeE2" align="left" data-nome="E2"></div>
				<div class="nome" id="nomeH1" align="left" data-nome="H1"></div>
				<div class="nome" id="nomeG2" align="left" data-nome="G2"></div>
			</div>
			<div id="elegir-seleccion" style="display: none;">
				<div class="pais maiusc left" data-id=""></div>
				<div class="pais maiusc left" data-id=""></div>
				<div class="pais maiusc left" data-id=""></div>
				<div class="pais maiusc left" data-id=""></div>
			</div>

			<div class="col oitavas" id="col1">				
					<div class="time" data-grupo="A" data-adv="B2" id="A1" data-id="" data-time=""></div>
					<div class="time" data-grupo="B" data-adv="A1" id="B2" data-id="" data-time=""></div>				
					<div class="time" data-grupo="C" data-adv="D2" id="C1" data-id="" data-time=""></div>
					<div class="time" data-grupo="D" data-adv="C1" id="D2" data-id="" data-time=""></div>				
					<div class="time" data-grupo="E" data-adv="F2" id="E1" data-id="" data-time=""></div>
					<div class="time" data-grupo="F" data-adv="E1" id="F2" data-id="" data-time=""></div>				
					<div class="time" data-grupo="G" data-adv="H2" id="G1" data-id="" data-time=""></div>
					<div class="time" data-grupo="H" data-adv="G1" id="H2" data-id="" data-time=""></div>				
			</div>

			<div class="col quartas" id="col2">
				<div class="time3" id="quarta1" data-click="" data-id="" data-adv="quarta2" data-opcoes="['A1','B2']" data-time=""></div>
				<div class="time3" id="quarta2" data-click="" data-id="" data-adv="quarta1" data-opcoes="['C1','D2']" data-time=""></div>
				<div class="time3" id="quarta3" data-click="" data-id="" data-adv="quarta4" data-opcoes="['E1','F2']" data-time=""></div>
				<div class="time3" id="quarta4" data-click="" data-id="" data-adv="quarta3" data-opcoes="['G1','H2']" data-time=""></div>
			</div>

			<div class="col semi" id="col3">
				<div class="time5" data-click="" id="semi1" data-adv="semi2" data-opcoes="['quarta1','quarta2']" data-id="" data-time=""></div>
				<div class="time5" data-click="" id="semi2" data-adv="semi1" data-opcoes="['quarta3','quarta4']" data-id="" data-time=""></div>
			</div>

			<div class="col final_ter" id="col4">
				<div class="time7" data-click="" data-id="" data-adv="fin_campeao_2" id="fin_campeao_1" data-opcoes="['semi1','semi2']" data-time=""></div>
				<div class="time7" data-click="" data-id="" data-adv="fin_bronze_2" id="fin_bronze_1" data-opcoes="['semi1','semi2']" data-time=""></div>
			</div>

			<div class="col camp_final_ter" id="col5">
				<div class="time9" data-click="" data-id="" id="campeao_ouro" data-opcoes="['fin_campeao_1','fin_campeao_2']" data-time=""></div>
				<div class="time9" data-click="" data-id="" id="campeao_bronze_1" data-opcoes="['fin_bronze_1','fin_bronze_2']" data-time=""></div>
			</div>

			<div class="col final_ter" id="col6">
				<div class="time8" data-click="" data-id="" data-adv="fin_campeao_1" id="fin_campeao_2" data-opcoes="['semi3','semi4']" data-time=""></div>
				<div class="time8" data-click="" data-id="" data-adv="fin_bronze_1" id="fin_bronze_2" data-opcoes="['semi3','semi4']" data-time=""></div>
			</div>

			<div class="col semi" id="col7">
				<div class="time6" data-click="" id="semi3" data-adv="semi4" data-opcoes="['quarta5','quarta6']" data-id="" data-time=""></div>
				<div class="time6" data-click="" id="semi4" data-adv="semi3" data-opcoes="['quarta7','quarta8']" data-id="" data-time=""></div>
			</div>

			<div class="col quartas" id="col8">
				<div class="" id="quarta5" data-click="" data-id="" data-adv="quarta6" data-opcoes="['B1','A2']" data-time=""></div>
				<div class="time4" id="quarta6" data-click="" data-id="" data-adv="quarta5" data-opcoes="['D1','C2']" data-time=""></div>
				<div class="time4" id="quarta7" data-click="" data-id="" data-adv="quarta8" data-opcoes="['F1','E2']" data-time=""></div>
				<div class="time4" id="quarta8" data-click="" data-id="" data-adv="quarta7" data-opcoes="['H1','G2']" data-time=""></div>
			</div>

			<div class="col oitavas" id="col9">				
					<div class="time2" data-grupo="B" data-adv="A2" id="B1" data-id="" data-time=""></div>
					<div class="time2" data-grupo="A" data-adv="B1" id="A2" data-id="" data-time=""></div>							
					<div class="time2" data-grupo="D" data-adv="C2" id="D1" data-id="" data-time=""></div>
					<div class="time2" data-grupo="C" data-adv="D1" id="C2" data-id="" data-time=""></div>								
					<div class="time2" data-grupo="F" data-adv="E2" id="F1" data-id="" data-time=""></div>
					<div class="time2" data-grupo="E" data-adv="F1" id="E2" data-id="" data-time=""></div>					
					<div class="time2" data-grupo="H" data-adv="G2" id="H1" data-id="" data-time=""></div>
					<div class="time2" data-grupo="G" data-adv="H1" id="G2" data-id="" data-time=""></div>
			</div>
			<a onclick="reiniciar();" href="#" ><img class="reiniciar" src="img/reiniciar.png" /></a>
			<a  href="#" onclick='armarURL();' ><img style="display:none;position: absolute;top: 8px;left: 534px;width: 120px;" id="share1" src="img/fb_off.png"/></a>
			<a  href="#" onclick='armarURL();' ><img style="display:none;position: absolute;top: 354px;left: 534px;width: 120px;" id="share2" src="img/fb_off.png"/></a>
		</div>	
			

		<script src="js/functions.js"></script>	
		<script>
		<?php
				$resultado=$_GET['p'];

				if ($resultado!="")
				{
					?>
						decodificarResultados('<?php echo $resultado;?>');
					<?php
				}
			?>
		</script>
		<!-- FIN CODIGO -->


  </body>
</html>
