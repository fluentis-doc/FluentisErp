---
title: Procurar faturas de compra
sidebar_position: 2
---

O procedimento Procurar faturas de compra foi desinhado para permitir ao usuário procurar facilmente as faturas precedentemente inseridas, com o objetivo de visualizá-las, modificá-las, eventualmente cancelá-las ou proceder com a inserção de uma nova fatura, após a possibilidade de ter os direitos necessários para essas operações.

Com a ajuda dos filtros, pode-se visualizar: um só documento (p.ex.: procurar por número documento), mais documentos (p.ex. procurar por data), os documentos inseridos num ano (p.ex.: procurar por ano), os documentos inseridos por um certo fornecedor (p.ex.: procurar por conta/subconta). Além disso, tem a possibilidade de procurar os documentos que contém um certo artigo ou uma certa classe artigos utilizando 'Procurar artigos'.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar as faturas | Botão para procurar as faturas no banco de dados. |
| Nova fatura | Botão para criar uma nova fatura. |
| Modificar a fatura | Botão para modificar uma fatura precedentemente inserida. |
| Visualizar a fatura | Botão para visualizar as faturas precedentemente inseridas. Não permite a modificação. |
| Cancelar a fatura | Botão para cancelar uma fatura precedentemente inserida. |
| Duplicar a fatura | Botão para duplicar uma fatura. Permite a criação de uma cópia de um documento, reportando todas as condições do documento de origem mas com os dados atuais. |
| Estorno fatura | Botão para criar o documento de estorno da fatura de origem inserida. Quando o usuário executa o estorno sai uma Form com a lista de todos os artigos da fatura de origem; o usuário tem de selecionar a causal de movimentação do artigo, estabelecer o flag 'Estorno' e enfim o tipo fatura a criar. A ligação entre a fatura de estorno e a fatura de origem tem de ser inserida manualmente pelo usuário nos campos de referência 'Ref. FA' e 'Tipo'. |
| Conversão | Botão para a conversão dos preços de um documento numa outra moeda. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Faturas de compra | Refere-se ao procedimento para imprimir as faturas de compra em relação os critérios de filtro especificados (tipo fatura, número, data, fornecedor, etc.). |
| Lista faturas de compra | Refere-se ao procedimento para imprimir uma lista de faturas em relação so critérios de filtro especificados (tipo fatura, número, data, fornecedor), oferecendo a possibilidade de ordenar em relação ao fornecedor, número fatura, tipo fatura ou data inserção. |
| Faturado de compras | Refere-se ao procedimento para imprimir as faturas de compra em relação so critérios de filtro especificados (tipo fatura, número, data, fornecedor), oferecendo a possibilidade de ordenas em relação o artigo, classe artigos, país e fornecedor. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Parâmetros faturas de compra](/docs/configurations/parameters/purchase/purchase-invoices-parameters)  | O procedimento permite configurar e visualizar os parâmetros das faturas de compra. |
|  [Contabilização faturas de compra](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting)  | O procedimento permite contabilizar as faturas de compra. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

GRELHA DE RESULTADO: a grelha de resultado é uma lista das faturas que correspondem aos dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das registrações, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha a lista das faturas que quiser. 






