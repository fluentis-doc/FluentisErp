---
title: Execução subestoque
sidebar_position: 3
---

O procedimento do subestoque utiliza um algoritmo que se baseia sobre a consumação média cotidiana calculada pelo tab Aprovisionamento do registro artigos.

Se parte portanto do estoque no momento da elaboração e se controla se na data pedido, através da consumação médio, se vai ou não no subestoque.

(Estoque mínimo  - Ponde de reabastecimento)/Dias para o reabastecimento.

O procedimento do subestoque é constituído na seguinte maneira:

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Executar | Uma vez inseridos os filtros permite executar o procedimento do subestoque. |
| Pré-visualização | Refere-se ao procedimento de pré-visualização de imprensa. |
| Imprimir | Refere-se ao procedimento para a imprensa física do subestoque. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa sobre o total dos artigos inseridos e geridos com estoque. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos. Em particular é possível escolher artigo (classe, código artigo, descrição), eventual variante só para os artigos geridos a variante, a data limite até a qual se quer calcular o subestoque. É também possível habilitar a criação automática dos pedidos de compra para os artigos em subestoque. Se foi ativada esta função precisa especificar o tipo pedido documento e, se quer, uma nota a inserir no cabeçalho pedido de compra.

GRELHA DE RESULTADO DA EXECUÇÃO: a grelha de resultado da execução é uma lista das elaborações efetuadas especificando número e data elaboração. Com um duplo click em correspondência da linha desejada é possível abrir o resultado e portanto o detalhe da elaboração. As informações que se encontram dentro são as referências aos artigos no subestoque (classe, código artigo, descrição), eventual variante e descrição variante, disponibilidade da data de elaboração, ponto de reabastecimento calculado, consumação média calculada, data pela qual vão no subestoque e a quantidade pedida para satisfazer o estoque.






