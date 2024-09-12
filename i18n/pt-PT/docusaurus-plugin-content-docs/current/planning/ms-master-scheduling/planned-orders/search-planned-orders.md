---
title: Procurar as ordens planejadas
sidebar_position: 2
---

A janela Procurar as ordens planejadas abre-se através do percurso Planejamento > PMP > Ordens planejadas > Procurar ordens planejadas, e apresenta a lista das ordens planejadas já inseridas, permitindo de modificá-las, visualizá-las e inserir novas.

A janela se compõe por uma área de filtro e uma grelha de resultado.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa ao interno do banco de dados das ordens planejadas inseridas. |
| Inserir ordem | Refere-se ao procedimento para inserir uma nova ordem planejada. |
| Modificar as ordens | Refere-se ao procedimento para abrir em mudança uma ordem planejada. |
| Visualizar as ordens | Refere-se ao procedimento para abrir em visualização uma ordem planejada. |
| Cancelar as ordens | Refere-se ao procedimento para cancelar uma ordem planejada precedentemente inserida. |
| Verificar a disponibilidade | Executa o procedimento que permite calcular e visualizar, para cada material presente da ordem planejada de produção, a disponibilidade na data de utilizo do material. |
| Modificar o filtro atributos | Abre uma janela que permite decidir se ativar ou não o filtro atributos, que permite filtrar as ordens planejadas de acordo com os atributos inseridos através o codificador nos artigos objeto da ordem. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa sobre o total das ordens planejadas inseridas. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

O usuário pode utilizar os seguintes filtros:

**Artigo**: o primeiro campo permite estabelecer a classe do artigo, com um duplo click no segundo campo abre-se uma Ajuda artigos pela qual se seleciona cada artigo (código e descrição);

**Variante**: com um duplo click se abre uma Ajuda variantes através da qual é possível selecionar a variante do artigo;

**Cliente**: nesses 3 campos são especificados os relativos dados do cliente: 'Conta', 'subconta', 'nome do cliente', com um duplo click no primeiro campo é possível abrir uma Ajuda contas' pela qual é possível selecionar o cliente a filtrar;

**Encomenda**: nesse campo insere-se o número da encomenda de venda, através do adequado botão Ajuda encomendas;

**Início produção da...a**: nestes campos pode-se inserir (numa gama) a data prevista de início produção (da...a...);

**Fim produção da...a**: nestes campos pode-se inserir (numa gama) a data prevista de fim produção (da...a...);

**Tipo enc.**: neste campo é possível inserir o tipo encomenda de produção e filtrar de acordo com este critério, visualizando portanto todas as encomendas de produção do tipo selecionado;

**Enc. prod.**: nestes 2 campos são estabelecidos o número e o ano da encomenda de produção;

**Ordem**: neste campo é possível filtrar pelo número e o ano da ordem planejada;

**Tipo ordem de**: através destes flag é possível filtrar só as ordens de compra, produção, ou de empreiteiro; se estiver ativos todos os flag, vão ser visualizadas todas as ordens;

**Grupo**: nesse campo é possível inserir o número do grupo cujo pertencem as ordens planejadas que se quer visualizar na grelha;

**Ordens de manutenção**: com este flag é possível decidir de visualizar também as ordens planejadas de manutenção;

**Síntese mês**: ativando este flag, a grelha de resultado visualiza, para cada artigo, uma linha para cada mês do ano, somando as quantidades totais previstas para todas as ordens planejadas que se encontram dentro do mês. A nova visualização é ativada depois de ter clicado no ícone que permite fazer um 'Atualizar' da visualização na janela;

GRELHA DE RESULTADO: a grelha de resultado é uma lista das ordens clientes que correspondem os dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das ordens planejadas, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha da lista das ordens planejadas que quiser. 

As colunas visualizadas nas grelhas de resultado são as seguintes:

**Aprovisionamento**: a coluna visualiza o tipo de aprovisionamento da ordem planejada, que pode ser de produção, de compra ou de empreiteiro, de acordo com o tipo de aprovisionamento estabelecido para o artigo objeto da ordem nos seus parâmetros PNR;

**Ano**: a coluna visualiza o ano da ordem planejada;

**Ordem**: a coluna visualiza o número da ordem planejada;

**Nível**: a coluna visualiza o nível da estrutura de produtos que identifica o artigo objeto da ordem planejada;

**Código tipo ordem**: a coluna visualiza o código do tipo ordem planejada;

**Descrição tipo ordem**: a coluna visualiza a descrição do tipo ordem planejada;

**Ano encomenda**: a coluna visualiza o ano da encomenda de produção pela qual foi gerada a ordem planejada. A coluna resulta vazia se a ordem planejada foi gerada manualmente ou vem da elaboração PNR;

**Número encomenda**: a coluna visualiza o número da encomenda de produção pela qual foi gerada a ordem planejada. A coluna resulta vazia se a ordem planejada foi gerada manualmente ou vem da elaboração PNR;

**Código tipo encomenda**: a coluna visualiza o código do tipo encomenda de produção;

**Descrição tipo encomenda**: a coluna visualiza a descrição do tipo encomenda de produção;

**Data início**: a coluna visualiza a data de previsto início da ordem planejada; se refere-se a uma ordem planejada de compra ou de empreiteiro essa data representa a data pela qual tem de ser enviado ao fornecedor a ordem de compra que vai ser sucessivamente gerada com a libertação da ordem; se refere-se a uma ordem planejada de produção, essa data representa a data de previsto início da primeira fase de produção do ciclo do artigo;

**Data FOB**: a coluna visualiza a data FOB ('Free on Board'), que é calculada somando a data de início previsto com o tempo de aprovisionamento inserido no tab Fornecedores preferenciais do artigo objeto da ordem planejada, e é gerida só para os artigos com tipo aprovisionamento Compra;

**Data ETA**: a coluna visualiza a data ETA ('Estimated Time of Arrival'), que é calculada somando a data de FOB com o tempo de espera da expedição inserido no tab Fornecedores preferenciais do artigo objeto da ordem planejada, e é gerida só para os artigos com tipo aprovisionamento Compra;

**Data fim**: a coluna visualiza a data de previsto fim da ordem planejada; se refere-se a uma ordem planejada de compra ou de empreiteiro essa data representa a data pela qual tem de ser recebido o abastecimento e portanto vai corresponder com a data de previsto recebimento da linha da ordem fornecedor que vai ser sucessivamente gerada com a libertação da ordem; se refere-se a uma ordem planejada de produção, essa data representa a data de previsto fim da última fase de produção do ciclo do artigo;

**Da disponibilidade mínima**: a coluna visualiza um flag que resulta ativado só se a ordem planejada foi gerada utilizando o procedimento de Planejamento geral e tendo ativado nos parâmetros de planejamento o flag que permite considerar a disponibilidade mínima no período;

**Classe**: a coluna visualiza a classe do artigo objeto da ordem planejada;

**Código artigo**: a coluna visualiza o código do artigo objeto da ordem planejada;

**Variante**: a coluna visualiza a quantidade da ordem planejada do artigo;

**Quantidade confirmada**: a coluna visualiza a quantidade confirmada da ordem planejada do artigo, diferente de zero só se a ordem planejada vem da elaboração PNR;

**Cliente**: a coluna visualiza a conta e a subconta do cliente associado com a ordem planejada;

**Fornecedor**: a coluna visualiza a conta e a subconta do fornecedor associado a ordem planejada, se de compra ou de empreiteiro;

**Característica**: a coluna visualiza o código da característica do artigo objeto da ordem planejada;

**Encomenda**: a coluna visualiza a eventual encomenda de venda associada com a ordem planejada;

**Descrição artigo**: a coluna visualiza a descrição do artigo objeto da ordem planejada;

**Descrição cliente**: a coluna visualiza a razão social do cliente associado com a ordem planejada;

**Descrição fornecedor**: a coluna visualiza a razão social do fornecedor associado com a ordem planejada, se de compra ou de empreiteiro;

**Descrição característica**: a coluna visualiza a descrição da característica do artigo objeto da ordem planejada;

**Lote econômico de compra**: a coluna visualiza o lote econômico de compra do fornecedor preferencial do artigo objeto da ordem planejada de compra;

**Múltiplos lote econômico de compra**: a coluna visualiza os múltiplos do lote econômico de compra do fornecedor preferencial do artigo objeto da ordem planejada de compra;

**Tempo de aprovisionamento**: a coluna visualiza o tempo de aprovisionamento do fornecedor preferencial do artigo objeto da ordem planejada de compra;

**Lote econômico de produção**: a coluna visualiza o lote econômico de produção inserido nos parâmetros PNR do artigo objeto da ordem planejada de produção;

**Múltiplos lote econômico de produção**: a coluna visualiza os múltiplos do lote econômico de produção inserido nos parâmetros PNR do artigo objeto da ordem planejada de produção;

**Ponto de reabastecimento**: a coluna visualiza o valor do ponto de reabastecimento inserido no tab Aprovisionamento do registro do artigo objeto da ordem planejada;

**Estoque mínimo**: a coluna visualiza o valor do estoque mínimo inserido no tab Aprovisionamento do registro do artigo objeto da ordem planejada;

**Quant. utilizada**: a coluna visualiza a quantidade utilizada na data atual do artigo objeto da ordem planejada;

**Taxativo**: a coluna visualiza um flag que se ativo permite ao usuário indicar que a ordem planejada seja absolutamente não movível.






