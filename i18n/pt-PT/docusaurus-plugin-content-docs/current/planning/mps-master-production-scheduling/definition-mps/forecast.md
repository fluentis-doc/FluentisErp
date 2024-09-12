---
title: Previsional
sidebar_position: 4
---

Através desse tab pode-se filtrar as linhas de previsão de venda ou do plano principal de produção que se quer fazer analisar pelo procedimento Definição PMP, utilizando os filtros para o artigo e para a variante.

As linhas das previsões de venda que podem ser visualizadas nesse tab devem responder a esses requisitos:

- a previsão de venda anual tem de ser no estado 'Consolidada';

- a previsão de venda anual tem de ser gerada com a versão válida;

- a partir da previsão não devem ter sido geradas as encomendas de produção.

- a partir das linhas do plano principal de produção, que podem ser visualizados nesse tab, não devem ter sido ainda geradas a encomenda de produção.

O tab se compõe por uma área de filtro e por uma grelha de resultado.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa dentro do banco de dados das linhas de previsões de venda e do plano principal de produção e que respondem aos requisitos explicativos no começo do ponto 5.3. |
| Considerar por encomenda | Refere-se ao procedimento para mover as linhas selecionadas na grelha no tab 'Resumo'. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção, uma procura no total dos artigos que respondem aos critérios de seleção já pré estabelecidos pelo código da janela e listados no parágrafo precedente. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos. O usuário pode utilizar o filtro por classe, código, descrição e variante do artigo.

GRELHA DE RESULTADO: a grelha de resultado é uma lista dos artigos que correspondem os dados de filtro especificado acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das linhas ordem, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha da lista das linhas que quiser. 

Os dados visualizados na grelha de resultado são classe, código e descrição do artigo, o ano da previsão de venda, o número do mês ou da semana de previsão de venda, a data de geração da encomenda de produção, as datas início fim previsão (por exemplo, se a previsão foi estabelecida para o mês de maio, a data início vai ser o 01/05 e a data fim 31/05), a quantidade relativa a cada linha de previsão, a conta, a subconta e a descrição do cliente relativo à linha de previsão de venda.

Na parte baixa da janela é presente uma grelha que permite ao usuário estabelecer os tipos ordens clientes que devem ser considerados contemporaneamente com as quantidades presentes nas previsões de venda, nesse modo o procedimento de criação encomenda gera a encomenda de produção com uma quantidade igual ao maior, ao menor da soma das quantidades presentes, para o mesmo artigo, na linha ordem cliente e/ou na previsão de produção ou plano principal.

Enfim, é possível estabelecer o mês fim planejamento, que serve para visualizar na grelha só as previsões de venda que chegam até a data indicada, e o tipo encomenda de produção a gerar.






