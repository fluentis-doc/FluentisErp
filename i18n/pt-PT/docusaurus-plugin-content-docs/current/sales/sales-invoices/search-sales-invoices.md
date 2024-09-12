---
title: Procurar faturas de venda
sidebar_position: 2
---

O procedimento Procurar faturas de venda foi desinhado para permitir ao usuário de procurar facilmente as faturas, antes inseridas, com o objetivo de visualizá-las, modificá-las, anulá-las e eventualmente cancelá-las ou avançar com a inserção de uma nova fatura, após a possibilidade de ter os direitos necessários para essas operações.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar faturas | Botão para procurar as faturas no banco de dados. |
| Nova fatura | Botão para criar uma nova fatura. |
| Modificar fatura | Botão para modificar uma fatura precedentemente inserida. |
| Visualizar a fatura | Botão para visualizar as faturas precedentemente inseridas. Não permite a mudança. |
| Cancelar a fatura | Botão para cancelar uma fatura precedentemente inserida. |
| Estorno fatura | Botão para criar o documento de estorno da fatura de origem inserida. Quando o usuário executa o estorno sai uma Form com a lista de todos os artigos da fatura de origem e o usuário precisa selecionar a causal de movimentação do artigo e estabelecer o flag estorno e enfim o tipo fatura a criar. A ligação entre a fatura de estorno e a fatura de origem precisa ser inserido manualmente pelo usuário no campo de referência Ref. FT do e o Tipo. |
| Duplicar fatura | Botão para duplicar uma fatura. Permite a criação de um cópia de um documento, reportando todas as condições do documento de origem, porém com os dados atuais. |
| Conversão | Botão para a conversão dos preços de um documento numa outra moeda. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  Faturas de venda  | Se refere ao procedimento para imprimir as faturas de venda de acordo com os critérios de filtro especificados (tipo fatura, número, data, cliente, etc.) |
|  Lista faturas de venda | Se refere ao procedimento para imprimir uma lista de faturas de acordo com os critérios de filtro especificados (tipo fatura, número, data e cliente), oferecendo a possibilidade de ordenar de acordo com o cliente, o número fatura, o tipo fatura ou a data de inserção. |
|  Faturação | Se refere ao procedimento para imprimir as faturas de venda, de acordo com os critérios de filtro especificados (tipo fatura, número, data e cliente), oferecendo a possibilidade de ordenar de acordo com o artigo, classe artigos, país ou cliente. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  Contabilização faturas de venda | O procedimento permite contabilizar as faturas de venda. |
|  Criação do CT-e  | O procedimento permite criar uma fatura de venda de um ou mais CT-e. |
|  Descarregamento faturas imediatas pelo depósito | O procedimento permite descarregar uma fatura de venda pelo depósito. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

Com a ajuda dos filtros se pode visualizar: um só documento (p.ex. procurar por número documento), mais documentos (p.ex. procurar por data), os documentos inseridos num ano (p.ex. procurar por ano), os documentos inseridos para um certo cliente (p.ex. procurar por conta/subconta), os documentos inseridos por um certo agente ou relativos a uma encomenda de venda (só se a encomenda foi inserida no cabeçalho). Também tem a possibilidade de procurar os documentos que contêm um certo artigo ou uma certa classe artigos usando 'Procurar artigos'.

GRELHA DE RESULTADO: a grelha de resultado é uma lista das faturas que correspondem os dados de filtro especificadas acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das registrações, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha de resultado a lista das faturas que quiser. 






