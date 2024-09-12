---
title: Números de série
sidebar_position: 3
---

A janela Procurar números de série se abre através do percurso Logística > Lotas/NS > Lotes > Números de série, e apresenta a lista de todos os Números de série presentes no banco de dados, permitindo modificá-los e visualizar um detalhe.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa dentro do banco de dados dos Números de série inseridos. |
| Modificar número de série | Refere-se ao procedimento para abrir em modificação um Número de série inserido. |
| Visualizar o número de série | Refere-se ao procedimento para abrir em visualização um número de série inserido. |

A utilização do botão 'Modificar número de série', come foi dito na seção dedicada a Ribbon Bar, permite ao usuário entrar na modificação no detalhe do número de série, abrindo portanto a janela chamada 'Modificar número de série'.

A janela se compõe por uma área de filtro e por uma grelha de resultado.

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa sobre o total dos números de série carregados. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

O usuário pode utilizar os seguintes filtros:

**Artigo**: a primeira caixa de combinação permite estabelecer a classe do artigo, com um duplo click no segundo campo se abre uma 'Ajuda artigos' através do qual se pode selecionar cada artigo (código e descrição);

**Variante**: com um duplo click se abre uma ajuda variantes através da qual é possível selecionar a variante do artigo;

**Código NS**: através deste campo é possível filtrar de acordo com o código número de série;

**Depósito**: nesta caixa de combinação é possível estabelecer o código do depósito aonde se quer procurar os números de série a visualizar na grelha;

**Lote nº**: através desse campo é possível filtrar de acordo com o código lote cujo pertence o número de série que se quer visualizar na grelha;

**Data reg. início/fim**: nestes 2 campos é possível estabelecer uma gama de datas de acordo com a qual filtrar os lotes de acordo com a suas datas de carregamento no depósito;

**Números de série presentes na data**: neste campo é possível decidir de visualizar só os números de série que estavam presentes numa certa data. Neste caso o procedimento controla todos os movimentos de depósito que interessaram os artigos geridos no número de série e visualiza só os Números de série presentes na data indicada;

**Situação NS**: nesta seção se encontram 4 flag, que permite ao usuário filtrar os Números de série Descarregados (quer dizer aqueles que já foram utilizados em algum documento de descarregamento e que portanto não são mais disponíveis); Carregados (quer dizer que foram descarregados no depósito), Não descarregados (estão ainda disponíveis no depósito e que portanto não foram ainda utilizados em algum documento de descarregamento), Não carregados (aqueles que já foram gerados dentro de um documento de carregamento como por exemplo uma nota de entrega de compra, mas em que o documento de carregamento não foi ainda carregado no depósito). Obviamente o combinação desses flag permite ao usuário visualizar os números de série que deseja de acordo com o seu estado;

**Visualizar números de série vencidos**: esse flag permite ao usuário decidir de visualizar na grelha também os números de série vencidos, portanto aqueles em que a data final é antecedente a data atual.

GRELHA DE RESULTADO: a grelha de resultado é uma lista de números de série que correspondem aos dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa dos números de série, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha a lista dos números de série que quiser. 

As colunas visualizadas na grelha de resultado são as seguintes:

**Número de série**: a coluna visualiza o número de série;

**Carregado/Não carregado**: a coluna visualiza a escrita 'Carregado' se o documento através da qual foi gerado o número de série já foi carregado no depósito, 'Não carregado' no caso contrário;

**Descarregado/Não descarregado**: a coluna visualiza a escrita 'Descarregado' se o documento através da qual foi gerado o número de série já foi descarregado pelo depósito, 'Não descarregado' no caso contrário;

**Data início**: a coluna visualiza a data de início do número de série;

**Data final**: a coluna visualiza a data de fim do número de série;

**Código lote**: a coluna visualiza o código do lote associado com o número de série;

**Classe**: a coluna visualiza a classe do artigo cujo se refere o número de série;

**Código artigo**: a coluna visualiza o código do artigo cujo se refere o número de série;

**Código variante**: a coluna visualiza a eventual variante do artigo cujo se refere o número de série;

**Depósito**: a coluna visualiza o código do depósito cujo se encontra o número de série;

**Descrição depósito**: a coluna visualiza a descrição do depósito cujo se encontra o número de série;

**Localização**: a coluna visualiza o código da localização cujo se encontra o número de série;

**Descrição artigo**: a coluna visualiza a descrição do artigo cujo se refere o número de série;

**Descrição variante**: a coluna visualiza a descrição da eventual variante do artigo cujo se refere o número de série.






