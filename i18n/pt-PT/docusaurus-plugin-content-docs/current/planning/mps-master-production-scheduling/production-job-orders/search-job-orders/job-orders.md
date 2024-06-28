---
title: Encomendas
sidebar_position: 2
---

A janela Encomendas se abre através do percurso Planejamento > Encomendas > Encomendas. Essa janela permite procurar as Encomendas de produção já criadas em precedência, além de criar algumas novas com os botões da Ribbon.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de procura ao interno do banco de dados das encomendas de procudção inseridas. |
| Inserir a encomenda produto | Refere-se ao procedimento para inserir uma nova encomenda de produção monoproduto. |
| Inserir a encomenda multiproduto | Refere-se ao procedimento para inserir uma nova encomenda de produção multiproduto. |
| Modificar a encomenda | Refere-se ao procedimento para modificar uma encomenda de produção precedentemente inserida. |
| Visualizar a encomenda | Refere-se ao procedimento para visualizar uma encomenda de produção precedentemente inserida. |
| Cancelar a encomenda | Executa o procedimento para cancelar uma encomenda de produção precedentemente inserida. |
| Modificar a data encomenda | Executa o procedimento para modificar a data fim prevista de uma ou mais encomendas de produção. |
| Modificar o filtro atributos | Abre uma janela que permite de decidir se ativar ou não o Filtro atributos, que permite de filtrar as encomendas de produção de acordo com os atributos inseridos através o codificador nos artigos objeto da mesma encomenda. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos. 

O usuário pode utilizar os seguintes filtros: 

**Tipo enc** **.**: nessa caixa de combinação é possível inserir o tipo encomenda de produção e filtrar de acordo com esse critério, visualização portanto todas as encomendas de produção do tipo selecionado; 

**Do número ....** **. Ao número**: nesses campos é possível procurar as encomendas inserindo uma gama de numeração; 

**Do ano ....** **. Ao ano**: nesses campos é possível procurar as encomendas inserindo uma gama temporal considerando o ano de criação da encomenda; 

**Artigo**: na primeira caixa de combinação é possível estabelecer a classe do artigo, com um duplo click no segundo e terço campo se abre uma ajuda artigos que serve para selecionar o artigo para a qual se quer filtrar as encomendas de produção; 

**Variante**: nessa caixa de combinação é possível selecionar a variante do artigo pela qual se quer exercitar o filtro;

**Tipo encomenda**: através dessa caixa de combinação é possível filtrar para a encomenda monoproduto, encomenda multiproduto ou todas;

**Ordem cliente**: através dessa caixa de combinação se pode estabelecer o tipo da ordem, a descrição e o número relativo. Nesse caso vão ser visualizadas todas as encomendas de produção associadas com o número ordem pela qual foi estabelecido o filtro;

**Encomenda**: nesse campo com um duplo click é possível, com a Ajuda encomendas, selecionar a encomenda de venda pela qual estão associadas as encomendas de produção que se quer procurar;

**Cliente**: nesses 3 campos são especificados os relativos dados do cliente: 'conta', 'subconta', 'nome do cliente', com um duplo-click no primeiro campo é possível abrir uma 'Ajuda contas' pela qual pode-se selecionar o cliente em questão. Nesse modo se procuram todas as encomendas de produção associadas com o cliente selecionado;

**Local prod.**: a partir daqui é possível filtrar as encomendas para o Local de produção associado com a mesma encomenda;

**Prevista fim de produção Da data...A data**: nesses campos se pode inserir (numa gama) a data prevista de fim produção (da...a...); é possível eventualmente especificar através os adeguatos flag se visualizar as encomendas em atrazo e/ou aquelas vencidas;

**Tipo aprovisonamento**: através desse flag é possível selecionar a tipologia de aprovisionamento que interessa filtrar se si trata de uma encomenda de compra, de produção ou de empreiteiro;

**Estado encomenda**: através desse flag é possível filtrar o estado da encomenda que interessa visualizar (não examindas, planejadas, lançadas, executivas, executadas ou historicizadas).

GRELHA DE RESULTADO: a grelha de resultado é uma lista de encomendas de produção que correspondem os dados de filtro especificadas acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das encomendas de produção, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha a lista das encomendas que quiser. 

As colunas visualizadas na grelha de resultado são as seguintes:

**Tipo demanda**: pode ser Dependente, se refere-se a uma encomenda gerada automaticamente através da Definição PMP, ou Independente, se refere-se a uma encomenda gerada manualmente;

**Tipo aprov. encomenda**: a coluna visualiza o tipo de aprovisionamento da encomenda, que pode ser de produção, de compra ou de empreiteiro, de acordo com o tipo de aprovisionamento estabelecido para o artigo objeto da encomenda nos seus Parâmetros PMP;

**Ano**: a coluna visualiza o ano da encomenda de produção;

**Encomenda de produção**: a coluna visualiza o número da encomenda de venda associada com a encomenda de produção;

**Estado encomenda**: a coluna visualiza o estado da encomenda de produção (não examinada, planejada, lançada, executiva, executada e historicizada);

**Data previsto início/fim produção**: a coluna visualiza as datas previstas de início e fim produção da encomenda de produção;

**Data sugerida**: a coluna visualiza a data que o planejamento geral sugere como data prevista final da encomenda de produção se foi estabelecida uma data de bloqueio nos oportunos parâmetros antes de executar o procedimento de planejamento;

**Classe**: a coluna visualiza a classe dos artigos presentes na encomenda de produção;

**Código artigo**: a coluna visualiza o código dos artigos presentes na encomenda de produção;

**Variante**: a coluna visualiza a eventual variante do artigo;

**Quantidade**: a coluna visualiza a quantidada a produzir do artigo;

**Cliente**: a coluna visualiza a conta e a subconta do cliente associado com a linha da encomenda de produção;

**Encomenda**: a coluna visualiza a eventual encomenda de venda associada com a linha de encomenda de produção;

**Descrição artigo**: a coluna visualiza a descrição do artigo a produzir;

**Descrição cliente**: a coluna visualiza a razão social do cliente associado com a linha de encomenda de produção;

**Código tipo encomenda**: a coluna visualiza o código do tipo encomenda de produção;

**Descrição tipo encomenda**: a coluna visualiza a descrição do tipo encomenda de produção.






