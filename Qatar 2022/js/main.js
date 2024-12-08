var caminho_selecao = {};
;(function($, R, window, document, undefined) {




$(function() {

	var w = 920,
		h = 344.899,
		simulador = R("simulador_copa_linhas", w, h);

	var fim = false;

	var path_brasil = {

		'lado1': [
			[0],
			[54,16,10],
			[68,24,11],
			[29, 9],
			[67, 15, 16],
			[28, 12],
			[69,33,13]

		],

		'campeao_lado1': [
			[66,27,12],
			[67,70,13]
		],

		'campeao_lado2': [
			[31,30,7],
			[67,70,13]
		],


		'terceiro_lado1': [
			[66,28,9],
			[65,69,15]
		],

		'terceiro_lado2': [
			[31,29,8],
			[65,69,15]
		],

		'lado2': [
			[42],
			[43,63,40],
			[41,51,64]
		]
	};


	trajeto_brasil = [],

	lado_trajeto_brasil = '',

	codigo_selecao = [],
	indisponiveis = [],

	id_brasil = "A1";


	var $selecoes_simulador = $("#selecoes_simulador"),
		$tooltip_quatro = $("#tooltip_quatro"),
		$tooltip_apagar = $("#tooltip_apagar"),
		$tooltip_bloqueado = $("#tooltip_bloqueado"),
		$tooltip_dois = $("#tooltip_dois"),
		$btn_jogar = $("#btn_jogar"),
		$nome = $(".nome");



	$.getJSON("paths.txt", function(path) {
		
		var si = simulador.set();

		var len_path = path.length;

		for (var i = 0; i < len_path; i++) {

			si.push(
				simulador.path(path[i])
			);

		};

		si.attr({
			"fill": "#C5D3D1",
			"stroke": "none"
		})


		

		var $escolhe_selecoes = $("#escolhe_selecoes"),
			$btn_fechar = $(".btn_fechar", $escolhe_selecoes),
			$opc_ativo = {},
			$oitavas = $(".oitavas", $selecoes_simulador),
			$tooltip_apagar = $("#tooltip_apagar");

		var times = lista;


			for (prop in times) {
				$(times[prop].times).each(function() {
					codigo_selecao[this.codigo] = this;
				});
			}

			$btn_jogar.click(function() {
				$(this).hide();
				window.location = 'http://oglobo.globo.com/infograficos/copa-2014-tabela-simulador';
			});

			if(location.search.split('=')[0] === '?form') {
				
				var query = location.search.split('=')[1];

				var etapas = query.split('_');

				var oitavas1 = [],
					oitavas2 = [];


				oitavas1 = fatia(etapas[0]);
				oitavas2 = fatia(etapas[1]);

				quartas1 = fatia(etapas[2]);
				quartas2 = fatia(etapas[3]);

				semi1 = fatia(etapas[4]);
				semi2 = fatia(etapas[5]);

				fin1 = fatia(etapas[6]);
				fin2 = fatia(etapas[7]);

				campeao = fatia(etapas[8]);




				$("#col1", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', oitavas1[i]).data('time', codigo_selecao[oitavas1[i]].nome).data('slug', codigo_selecao[oitavas1[i]].slug).addClass(codigo_selecao[oitavas1[i]].slug).css('cursor','default');

				});


				$("#col9", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', oitavas2[i]).data('time', codigo_selecao[oitavas2[i]].nome).data('slug', codigo_selecao[oitavas2[i]].slug).addClass(codigo_selecao[oitavas2[i]].slug);

				});


				$("#col2", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', quartas1[i]).data('time', codigo_selecao[quartas1[i]].nome).data('slug', codigo_selecao[quartas1[i]].slug).addClass(codigo_selecao[quartas1[i]].slug);

				});


				$("#col8", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', quartas2[i]).data('time', codigo_selecao[quartas2[i]].nome).data('slug', codigo_selecao[quartas2[i]].slug).addClass(codigo_selecao[quartas2[i]].slug);

				});


				$("#col3", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', semi1[i]).data('time', codigo_selecao[semi1[i]].nome).data('slug', codigo_selecao[semi1[i]].slug).addClass(codigo_selecao[semi1[i]].slug);

				});


				$("#col7", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', semi2[i]).data('time', codigo_selecao[semi2[i]].nome).data('slug', codigo_selecao[semi2[i]].slug).addClass(codigo_selecao[semi2[i]].slug);

				});


				$("#col4", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', fin1[i]).data('time', codigo_selecao[fin1[i]].nome).data('slug', codigo_selecao[fin1[i]].slug).addClass(codigo_selecao[fin1[i]].slug);

				});


				$("#col6", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', fin2[i]).data('time', codigo_selecao[fin2[i]].nome).data('slug', codigo_selecao[fin2[i]].slug).addClass(codigo_selecao[fin2[i]].slug);

				});


				$("#col5", $selecoes_simulador).find('.time').each(function(i) {
					
					$(this).data('id', campeao[i]).data('time', codigo_selecao[campeao[i]].nome).data('slug', codigo_selecao[campeao[i]].slug).addClass(codigo_selecao[campeao[i]].slug);

				});



				$btn_jogar.show();

				// console.log(etapas);

				return;
			}


			function fatia (arr) {

				var temp = [];

			 	for (var i = 0; i < arr.length; i+=2) {
			
					temp.push( arr.slice(i, (2+i)) );

				};

				return temp;
			}
		
			$selecoes_simulador.delegate(".time", "click", function(event) {

				if(fim) return;

				var $pai = $(this).parents('.col');

				if($(this).data('id') !== '') {
					$opc_ativo = $(this);

					$tooltip_apagar.css({
						top: $(this).position().top,
						left: $(this).parent().position().left + 30
					})

					$escolhe_selecoes.hide();

					$tooltip_apagar.show();
					return;
				}

				

				$tooltip_apagar.hide();

				if($pai.hasClass('oitavas')) {
					$escolhe_selecoes.data('tipo', 'oitavas');

				} else if ( $pai.hasClass('final_ter') ){
					$escolhe_selecoes.data('tipo', 'final_ter');
				} else {	
					$escolhe_selecoes.data('tipo', 'outros');
				}


				var $pai = $(this).parents('.col'),
					$this = $(this),
					opcoes = [],
					opt1 = {},
					opt2 = {},
					opc_li = '';

				if( $pai.hasClass("oitavas") ) {
				
					opcoes = times[ $this.data('grupo') ];
				
					$(opcoes.times).each(function() {
						if($.inArray(this.codigo, indisponiveis) == -1)
							opc_li = opc_li + '<div class="pais maiusc left" data-id="'+ this.codigo +'"><img src="assets/imgs/'+ this.slug +'.png"><br>'+ this.nome +'</div>';
					});

					$escolhe_selecoes.removeClass('dois');
		
				
				} else if ( $pai.hasClass("quartas") || $pai.hasClass( 'semi' )) {

					$escolhe_selecoes.addClass('dois');

					opcoes =  eval( $this.data('opcoes') );


					var $alvo1 = $('#' + opcoes[0]),
						$alvo2 = $('#' + opcoes[1]);


					if($alvo1.data('id') == '' || $alvo2.data('id') == '')
						return;

					opc_li = '<div class="pais maiusc left" data-id="'+ $alvo1.data('id') +'"><img src="assets/imgs/'+ $alvo1.data('slug') +'.png"><br>'+ $alvo1.data('time') +'</div>';
					opc_li = opc_li + '<div class="pais maiusc left" data-id="'+ $alvo2.data('id') +'"><img src="assets/imgs/'+ $alvo2.data('slug') +'.png"><br>'+ $alvo2.data('time') +'</div>';


				


				} else if ( $pai.hasClass("final_ter") ) {

					$escolhe_selecoes.addClass('dois');

					opcoes =  eval( $this.data('opcoes') );

					var $alvo1 = $('#' + opcoes[0]),
						$alvo2 = $('#' + opcoes[1]);

					if($alvo1.data('id') == '' || $alvo2.data('id') == '') 
						return;
					
					opc_li = '<div class="pais maiusc left" data-id="'+ $alvo1.data('id') +'"><img src="assets/imgs/'+ $alvo1.data('slug') +'.png"><br>'+ $alvo1.data('time') +'</div>';
					opc_li = opc_li + '<div class="pais maiusc left" data-id="'+ $alvo2.data('id') +'"><img src="assets/imgs/'+ $alvo2.data('slug') +'.png"><br>'+ $alvo2.data('time') +'</div>';

				} else if( $pai.hasClass('camp_final_ter') ) {

					$escolhe_selecoes.addClass('dois');
					opcoes =  eval( $this.data('opcoes') );

					var $alvo1 = $('#' + opcoes[0]),
						$alvo2 = $('#' + opcoes[1]);

					if($alvo1.data('id') == '' || $alvo2.data('id') == '')
						return;

					opc_li = '<div class="pais maiusc left" data-id="'+ $alvo1.data('id') +'"><img src="assets/imgs/'+ $alvo1.data('slug') +'.png"><br>'+ $alvo1.data('time') +'</div>';
					opc_li = opc_li + '<div class="pais maiusc left" data-id="'+ $alvo2.data('id') +'"><img src="assets/imgs/'+ $alvo2.data('slug') +'.png"><br>'+ $alvo2.data('time') +'</div>';

				}

				$escolhe_selecoes.html(opc_li);

				if($escolhe_selecoes.hasClass('dois')) {

					$escolhe_selecoes.css({
						top: $(this).position().top,
						left: $(this).parent().position().left + 50
					});


				} else {
					$escolhe_selecoes.css({
						top: $(this).position().top - 40,
						left: $(this).parent().position().left + 50
					});
				}

				

				$tooltip_apagar.hide();
				$escolhe_selecoes.show();

				$opc_ativo = $(this);


			});


			$btn_fechar.click(function() {
				// $escolhe_selecoes.hide();
				$tooltip_quatro.hide();
			});


			var $col5 = $("#col5", $selecoes_simulador);

	

			$tooltip_apagar.click(function() {

				var etapa = '';

				var etapa_apaga = $opc_ativo.parent();

				if(etapa_apaga.hasClass("oitavas")) {

					
					if(etapa_apaga.attr('id') === 'col1') {
						apaga_jogos ('lado1', 'oitavas', 0);
						etapa = 'lado1';
					} else {
						apaga_jogos ('lado2', 'oitavas', 8, 0);
						etapa = 'lado2';
					}
											
				} else if ( etapa_apaga.hasClass("quartas")) {
					// console.log('aqui1');
					if(etapa_apaga.attr('id') === 'col2') {

						// console.log('aqui2');
						apaga_jogos ('lado1', 'quartas', 1);
					} else {
						apaga_jogos ('lado2', 'quartas', 7, 1);
					}

				} else if ( etapa_apaga.hasClass("semi")) {

					if(etapa_apaga.attr('id') === 'col3') {

						apaga_jogos ('lado1', 'quartas', 2);
					} else {
						apaga_jogos ('lado2', 'quartas', 6, 2);
					}

				} else if ( etapa_apaga.hasClass("final_ter")) {

					if(etapa_apaga.attr('id') === 'col4') {

						apaga_jogos ('lado1', 'quartas', 3);
					} else {
						apaga_jogos ('lado2', 'quartas', 5, 3);
					}

				} else if ( etapa_apaga.hasClass("camp_final_ter")) {

				}

				

				function apaga_jogos (lado, etapa, i, j) {

					var ativo_apagar = caminho_selecao[ $opc_ativo.data('id') ],
						id_temp = $opc_ativo.data('id'),
						id_ativo = $opc_ativo.data('id'),
						aux,
						i_temp = i;
						historico_apaga = {},
						adv_temp = {};

					if(lado == 'lado1') {

	
						while(ativo_apagar && i < 3){

							adv_temp = $('#' + ativo_apagar[i].adv, $selecoes_simulador);

							if(!adv_temp.data('id') === '')
								break;

							adv = adv_temp.data('id');
					
							aux = $(".col:eq("+ (i+1) +") .time", selecoes_simulador).filter(function() {				
								return ($(this).data('id') == id_ativo || $(this).data('id') == adv) && $(this).data('id') !== "";
							});

							if(!aux)
								break;

							
							id_ativo = aux.data('id');

							ativo_apagar = caminho_selecao[ id_ativo ];

							if( !historico_apaga[id_ativo] && id_ativo !== "" && id_ativo !== undefined){
								historico_apaga[id_ativo] = (i+1);
							}

							

							// console.log(aux.length);	

							$(aux).each(function() {
								var that = this;

								$nome.filter(function() {
									return $(this).data('nome') === $(that).attr('id');
								}).html('');


								$(this).data('id', '').data('time', '').removeClass( $(this).data('slug') ).data('slug', '').html('');

								
							});								
							

							++i;

								
						}


						caminho_selecao[id_temp].splice(i_temp);



					} else if (lado == 'lado2') {

			
						while(ativo_apagar && i > 5){

							adv_temp = $('#' + ativo_apagar[j].adv, $selecoes_simulador);

							if(!adv_temp.data('id') === '')
								break;

							adv = adv_temp.data('id');
					
							aux = $(".col:eq("+ (i-1) +") .time", $selecoes_simulador).filter(function() {				
								return ($(this).data('id') == id_ativo || $(this).data('id') == adv) && $(this).data('id') !== "";
							});

							if(!aux)
								break;

							
							id_ativo = aux.data('id');

							// console.log('id_ativo', id_ativo);

							ativo_apagar = caminho_selecao[ id_ativo ];

							if( !historico_apaga[id_ativo] && id_ativo !== "" && id_ativo !== undefined){
								historico_apaga[id_ativo] = (j+1);
							}


							$(aux).each(function() {

								var that = this;

								$nome.filter(function() {
									return $(this).data('nome') === $(that).attr('id');
								}).html('');

								$(this).data('id', '').data('time', '').removeClass( $(this).data('slug') ).data('slug', '').html('');
							});
							

							--i;
							++j;

							
						}


					}



					if(etapa === 'oitavas') {

						var existe_id = $.inArray($opc_ativo.data('id'), indisponiveis);

						if(existe_id !== -1) {
							indisponiveis.splice(existe_id, 1);	
						}
						
						delete caminho_selecao[ $opc_ativo.data('id') ];

					} 


					for(prop in historico_apaga) {

						if(caminho_selecao[ prop ]) {

							if(caminho_selecao.hasOwnProperty(prop)) {


								caminho_selecao[ prop ].splice( historico_apaga[prop] );	
								// console.log('2');
							}
							
						}
							
					}

					if(etapa !== 'camp_final_ter')
						var slug_temp = '';
						$col5.find(".time").each(function() {
							slug_temp = $(this).data('slug') == undefined ? '' :  $(this).data('slug');

							$(this).data('slug', '').data('id', '').data('time', '').html('');
							$(this).removeClass(slug_temp);

						});

	
					pinta_brasil('del', etapa);
		
				}
				

				$opc_ativo.data("id", "");
				$opc_ativo.data("time", "");
				$opc_ativo.html("");
				$opc_ativo.removeClass( $opc_ativo.data('slug') );
				$opc_ativo.data('slug', '');
				$(this).hide();

				$nome.filter(function() {
					return $(this).data('nome') === $opc_ativo.attr('id');
				}).html('');

				ativa_desativa_time();


				// if(caminho_selecao['A1']) {
				// 	// console.log('oi', trajeto_brasil, caminho_selecao['A1'].length-1);
				// 	trajeto_brasil.splice( caminho_selecao['A1'].length-1 );


				// } else {
				// 	trajeto_brasil = [];
				// }

					
				// $(si).each(function() {
				// 	this.attr({
				// 		"fill": "#C5D3D1"
				// 	})
				// });


				// $(si).each(function() {

				// 	for (var i = 0; i < trajeto_brasil.length; i++) {
						
				// 		for (var j = 0; j < trajeto_brasil[i].length; j++) {
							
				// 			if(this.id == trajeto_brasil[i][j]) {
				// 				// console.log('aqui');
				// 				this.attr({
				// 					"fill": "#C4DFA9"
				// 				})

				// 			}
					
				// 		};

				// 	};

					
				// });



				
			});

			var escolha = '';

			

			var $btn_compartilhar = $("#btn_compartilhar");


			function finaliza_jogo (argument) {

				$btn_jogar.show();

				$btn_compartilhar.show();

				escolha = '';

				$(".col:eq(0) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(8) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(1) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(7) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(2) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(6) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(3) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(5) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				escolha = escolha + '_';

				$(".col:eq(4) .time", $selecoes_simulador).each(function() {
					escolha = escolha + $(this).data('id');
				});

				




	
			}

			


			$btn_compartilhar.click(function(event) {
		    	

			    FB.init({appId: "356860394458651"});

			      function postToFeed() {

			        // calling the API ...
			        var obj = {
			          method: 'feed',
			          redirect_uri: 'http://oglobo.globo.com/infograficos/copa-2014-tabela-simulador/?form=' + escolha,
			          link: 'http://oglobo.globo.com/infograficos/copa-2014-tabela-simulador/?form=' + escolha,
			          picture: 'http://oglobo.globo.com/infograficos/copa-2014-tabela-simulador/thumb.jpg',
			          name: 'Simulador Copa 2014',
			          caption: 'Veja minha aposta para os vencedores da Copa 2014 no simulador do jornal O Globo.',
			          description: ''
			        };


			        FB.ui(obj);
			      }

			      postToFeed();

			      $(this).hide();

			      return false;

			    });
			

			$escolhe_selecoes.delegate('.pais', 'click', function() {

				
				var ativo = codigo_selecao[$(this).data('id')];


				$opc_ativo.data('slug', $opc_ativo.data('slug') == undefined ? '' : $opc_ativo.data('slug'));

				if($escolhe_selecoes.data("tipo") === "final_ter") {

					var $opc_ativo_2 = $($opc_ativo.siblings()[0]);
						irmao_ativo = codigo_selecao[$(this).siblings().data('id')],



					$opc_ativo.data('time', ativo.nome).data('id', ativo.codigo);
					// $opc_ativo.data('id', ativo.codigo);

			
					$opc_ativo.removeClass( $opc_ativo.data('slug') ).addClass(ativo.slug).data('slug', ativo.slug);


					$opc_ativo_2.data('slug', $opc_ativo_2.data('slug') == undefined ? '' : $opc_ativo_2.data('slug'));


					$opc_ativo_2.data('time', irmao_ativo.nome);
					$opc_ativo_2.data('id', irmao_ativo.codigo);

					$nome.filter(function() {
						return $(this).data('nome') === $opc_ativo_2.attr('id');
					}).html($opc_ativo_2.data('time'));


					$opc_ativo_2.removeClass($opc_ativo_2.data('slug')).addClass(irmao_ativo.slug).data('slug', irmao_ativo.slug);

					caminho_selecao[ $opc_ativo_2.data('id') ].push({ adv: $opc_ativo_2.data('adv')});

					$escolhe_selecoes.hide();


				} else {

					if($escolhe_selecoes.data("tipo") === "oitavas") {

						indisponiveis.push(ativo.codigo);	
					}
					

					$opc_ativo.data('time', ativo.nome);
					$opc_ativo.data('id', ativo.codigo);


					$opc_ativo.removeClass( $opc_ativo.data('slug') ).addClass(ativo.slug);
					$opc_ativo.data('slug', ativo.slug);


					// $opc_ativo.text(ativo.codigo);

					$escolhe_selecoes.hide();
				}


				if(!caminho_selecao[ $(this).data('id') ]) {
					caminho_selecao[ $(this).data('id') ] = [];
				}


				caminho_selecao[ $(this).data('id') ].push({adv:$('#' + $opc_ativo.data('adv')).attr('id') });
				ativa_desativa_time();

				if($opc_ativo.parent().hasClass('camp_final_ter')) {
					var c = 0;

					$opc_ativo.parent().find('.time').each(function() {

						if($(this).data('id') !== ''){
							if(++c >= 2) {
								$(".time").addClass('inativo');
								fim = true;

								finaliza_jogo();

							}
						}

					});

				}

				// if(caminho_selecao['A1']) {
				// 	if(caminho_selecao['A1'][0].adv === 'B2') {

				// 		if(trajeto_brasil.length < 3)
				// 			trajeto_brasil.push( path_brasil['lado1'][ caminho_selecao['A1'].length-1] );
				// 		// else if (trajeto_brasil.length === )

				// 	} else {

				// 	}
				// }


				// $opc_ativo.data('time');

				$nome.filter(function() {
					return $(this).data('nome') === $opc_ativo.attr('id');

				}).html($opc_ativo.data('time'));

				// if(caminho_selecao['A1']) {

				// 	if(caminho_selecao['A1'][0].adv === 'B2') {

				// 		$opc_ativo.parent().find('.time').each(function() {

				// 			if( (trajeto_brasil.length+1) > caminho_selecao['A1'].length) return;

			

				// 			if($(this).data('id') == 'A1') {
								
				// 				if($(this).attr('id') == 'fin_campeao_1') {

				// 					trajeto_brasil.push(path_brasil['campeao_lado1'][0]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['campeao_lado1'][0].length; i++) {
				// 							if(this.id == path_brasil['campeao_lado1'][0][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});



				// 				} else if ($(this).attr('id') == 'fin_bronze_1') {

				// 					trajeto_brasil.push(path_brasil['terceiro_lado1'][0]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['terceiro_lado1'][0].length; i++) {
				// 							if(this.id == path_brasil['terceiro_lado1'][0][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});


				// 				} else if ($(this).attr('id') == 'campeao_bronze_1') {

				// 					trajeto_brasil.push(path_brasil['terceiro_lado1'][1]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['terceiro_lado1'][1].length; i++) {
				// 							if(this.id == path_brasil['terceiro_lado1'][1][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});


				// 				} else if ($(this).attr('id') == 'campeao_ouro') {

				// 					trajeto_brasil.push(path_brasil['campeao_lado1'][1]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['campeao_lado1'][1].length; i++) {
				// 							if(this.id == path_brasil['campeao_lado1'][1][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});


				// 				} else {
									
			
				// 					trajeto_brasil.push(path_brasil['lado1'][ caminho_selecao['A1'].length-1 ]);

				// 					$(si).each(function() {


				// 						for (var i = 0, len = caminho_selecao['A1'].length; i < len; i++) {


											

				// 							for (var j = 0; j < path_brasil['lado1'][ i ].length; j++) {



				// 								if(this.id == path_brasil['lado1'][i][j]) {


				// 									this.attr({
				// 										"fill": "#C4DFA9"
				// 									}).toFront();

				// 								} 


												


				// 							};

				// 						};


				// 					});
				// 				}

				// 				return;
								
				// 			}




				// 		});

					

						
	
						

				// 	} else if (caminho_selecao['A1'][0].adv === 'B1') {


				// 		$opc_ativo.parent().find('.time').each(function() {

				// 			if( (trajeto_brasil.length+1) > caminho_selecao['A1'].length) return;

															

				// 				if($(this).data('id') == 'A1') {
				// 					if($(this).attr('id') === 'fin_bronze_2') {


				// 					trajeto_brasil.push(path_brasil['terceiro_lado2'][0]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['terceiro_lado2'][0].length; i++) {
				// 							if(this.id == path_brasil['terceiro_lado2'][0][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});

				// 				} else if ($(this).attr('id') === 'campeao_bronze_1') {

				// 					trajeto_brasil.push(path_brasil['terceiro_lado2'][1]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['terceiro_lado2'][1].length; i++) {
				// 							if(this.id == path_brasil['terceiro_lado2'][1][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});

				// 				} else if ($(this).attr('id') === 'fin_campeao_2') {

				// 					trajeto_brasil.push(path_brasil['campeao_lado2'][0]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['campeao_lado2'][0].length; i++) {
				// 							if(this.id == path_brasil['campeao_lado2'][0][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});
				// 				} else if ($(this).attr('id') === 'campeao_ouro') {

				// 					trajeto_brasil.push(path_brasil['campeao_lado2'][1]);

				// 					$(si).each(function() {

				// 						for (var i = 0; i < path_brasil['campeao_lado2'][1].length; i++) {
				// 							if(this.id == path_brasil['campeao_lado2'][1][i]) {
				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}
				// 						};								

				// 					});
				// 				} else {

				// 					console.log(caminho_selecao['A1']);

				// 					trajeto_brasil.push(path_brasil['lado2'][ caminho_selecao['A1'].length-1 ]);									

				// 					for (var j = 0; j < path_brasil['lado2'][ caminho_selecao['A1'].length-1 ].length; j++) {

				// 						$(si).each(function() {

				// 							if(this.id == path_brasil['lado2'][caminho_selecao['A1'].length-1][j]) {


				// 								this.attr({
				// 									"fill": "#C4DFA9"
				// 								}).toFront();
				// 							}


										
				// 						});

				// 					};

				// 						// };


									
									
				// 				}

				// 				// console.log('lado2:', trajeto_brasil);
				// 			return;
				// 			}

							
				// 		});

						
				// 	}
				// }




				

			});



	





		function pinta_brasil () {

			if($opc_ativo.data('id') !== 'A1')
				return;

			acao = arguments[0];
	
			// console.log(path_brasil[lado_trajeto_brasil][arguments[1]]);
	
			if(acao == 'add') {
				
				// trajeto_brasil.push( path_brasil[ lado_trajeto_brasil ][ trajeto_brasil.length ] );

			} else {

			}
			// console.log(trajeto_brasil);
		}


	});





	function ativa_desativa_time () {

		var $cols = $(".col", $selecoes_simulador);

		for (var i = 1,times, opcoes; i < 4; i++) {

			$($cols[i]).find('.time').each(function() {
				opcoes = eval($(this).data('opcoes'));

			
				if($('#' + opcoes[0], $cols[i-1]).data('id') !== '' && $('#' + opcoes[1], $cols[i-1]).data('id') !== '')
					$(this).removeClass('inativo');
				else
					$(this).addClass('inativo');
			});


		};


		for (var i = 5,times, opcoes; i < 8; i++) {

			$($cols[i]).find('.time').each(function() {
				opcoes = eval($(this).data('opcoes'));

			
				if($('#' + opcoes[0], $cols[i+1]).data('id') !== '' && $('#' + opcoes[1], $cols[i+1]).data('id') !== '')
					$(this).removeClass('inativo');
				else
					$(this).addClass('inativo');
			});


		};

		$($cols[4]).find('.time').each(function() {
			opcoes = eval($(this).data('opcoes'));

			if($('#' + opcoes[0]).data('id') !== '' && $('#' + opcoes[1]).data('id') !== '')
				$(this).removeClass('inativo');
			else
				$(this).addClass('inativo');

		});

	}









});

}(jQuery, window, document));