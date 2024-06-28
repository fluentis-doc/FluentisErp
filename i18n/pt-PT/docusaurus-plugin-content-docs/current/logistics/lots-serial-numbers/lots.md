---
title: Lotes
sidebar_position: 2
---

A janela Procurar lotes se abre através do percurso Logística > Lotes/NS > Lotes > Lotes, e apresenta a lista de todos os lotes presentes no banco de dados, permitindo modificá-los e visualizar um detalhe.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa dentro do banco de dados dos lotes inseridos. |
| Modificar lote | Refere-se ao procedimento para abrir em modificação um lote inserido. |
| Visualizar lote | Refere-se ao procedimento para abrir em visualização um lote inserido. |
| Trocar estado do lote | Refere-se ao procedimento para trocar o estado do ou dos lotes selecionados. A utilização desse botão abre uma janela de pop-up chamada 'Novo estado lote', dentro da qual é possível selecionar um dos estados lotes presentes na tabela, apertar o botão 'Ok' e modificar portanto massivamente o estado de todos os lotes selecionados. |

A utilização do botão 'Modificar lote', como foi dito na seção dedicada a Ribbon Bar, permite ao usuário entrar em mudança no detalhe do lote, abrindo portanto a janela chamada 'Modificar lote'.

A janela se compõe de uma área de filtro e de uma grelha de resultado.

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa do total dos lotes carregados. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

O usuário pode utilizar os seguintes filtros:

**Artigo**: a primeira caixa de combinação permite estabelecer a classe do artigo, com duplo click no segundo campo se abre uma 'Ajuda artigos' através do qual se pode selecionar cada artigo (código e descrição);

**Variante**: com um duplo click se abre uma ajuda variantes através do qual é possível selecionar a variante do artigo;

**Lote nº**: através deste campo é possível filtrar em relação o código lote;

**Lote fornecedor**: através deste campo é possível filtrar em relação o lote fornecedor;

**Depósito**: nesta caixa de combinação é possível estabelecer o código do depósito pela qual se quer procurar os lotes a visualizar na grelha;

**Data início venc./val.**: nestes 2 campos é possível estabelecer uma gama de datas em relação as quais filtrar de acordo com a sua data de início e fim validade;

**Data carregamento lote Da...A...**: nestes 2 campos é possível estabelecer uma gama de datas em relação aonde filtrar os lotes de acordo com a sua data de carregamento no depósito;

**Cliente**: neste 3 campos se especificam os relativos dados do cliente: 'Conta', 'Subconta', 'Nome do cliente', com um duplo click no segundo campo é possível abrir uma 'Ajuda contas' pela qual poder selecionar o cliente cujo filtrar;

**Todos**: ativando este flag o usuário pode filtrar todos os lotes presentes no banco de dados;

**Abertos**: ativando este flag o usuário pode filtrar só os lotes abertos, quer dizer só os lotes aonde existe ainda um estoque no depósito;

**Fechados**: ativando este flag o usuário pode filtrar só os lotes fechados, quer dizer só os lotes cujo estoque resulta igual a zero;

**Agrupar por código lote**: ativando este flag se ativa uma ulterior grelha dentro da qual se ve uma linha por cada código lote, com as quantidades das diferentes linhas do mesmo lote somadas, depósito por depósito e artigo por artigo;

**Encom./Ano**: através deste campo é possível filtrar os lotes em relação a encomenda de venda a eles associadas, utilizando a ajuda encomendas que se explode com um duplo click no capo amarelo.

GRELHA DE RESULTADO: a grelha de resultado é uma lista dos lotes que correspondem aos dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa dos lotes, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha a lista dos lotes que quiser. 

As colunas visualizadas na grelha de resultado são as seguintes:

**Fechado**: o flag, se ativo, evidência que o estoque é igual a zero;

**Lote nº**: a coluna visualiza o código do lote;

**Data início**: a coluna visualiza a data de início do lote;

**Data venc.**: a coluna visualiza a data de vencimento do lote;

**Quantidade**: a coluna visualiza a quantidade inicial do lote para cada depósito;

**Quantidade disp.**: a coluna visualiza a quantidade disponível para cada depósito do lote, quer dizer a quantidade em estoque menos a quantidade utilizada nos vários documentos. A quantidade disponível pode também ser visualizada como igual a zero se o lote se encontra num estado 'não disponível para retiradas automáticas';

**Estado lote**: a coluna visualiza o estado do lote. Se refere ao um dado que poderia ser não gerido;

**L. vend.**: o flag 'Lote vendível', se ativo, evidência que o lote é disponível para ser retirado dentro dos documentos de venda, de produção ou nas registrações de depósito;

**Dep.**: a coluna visualiza o código do depósito aonde se encontra o lote;

**Descrição dep.**: a coluna visualiza a descrição do depósito cujo se encontra o lote;

**Classe**: a coluna visualiza a classe do artigo cujo se refere o lote;

**Código artigo**: a coluna visualiza o código do artigo cujo se refere o lote;

**Variante**: a coluna visualiza a eventual variante do artigo cujo se refere o lote;

**Encomenda**:  a coluna visualiza a encomenda de venda associada com o lote;

**Notas**: a coluna visualiza as notas do lote;

**Descrição variante**: a coluna visualiza a descrição da eventual variante do artigo cujo se refere o lote;

**Descrição artigo**: a coluna visualiza a descrição do artigo cujo se refere o lote;

**Lote forn.**: a coluna visualiza o lote fornecedor;

**Fornecedor**: a coluna visualizar os dados do fornecedor do lote, portanto do fornecedor titular do documento com a qual foi criado o mesmo lote;

**UC**: a coluna visualiza a UC associada com o lote.






