---
title: Subestoque
sidebar_position: 5
---

Através desse tab é possível filtrar as linhas de artigos geridas a estoque que se quer fazer analisar pelo procedimento Definição PMP. O único requisito essencial que permite ao artigo ser visualizável nessa grelha é representado pelo fato que tenha, nos seus parâmetros PMP, o tipo de gestão 'A estoque'.

O tab se compõe por uma área de filtro e uma grelha de resultado.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de procura dentro do banco de dados dos artigos que respondem aos requisitos explicitados no começo do ponto 5.3. |
| Considerar por encomendas | Refere-se ao procedimento para mover as linhas selecionadas na grelha no tab 'Resumo'. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção, uma pesquisa sobre o total dos artigos que respondem aos critérios de seleção já pré estabelecidos pelo código da janela e listados no parágrafo precedente. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos. O usuário pode utilizar o filtro por classe, código, descrição e variante do artigo, o filtro por categoria produto e por característica. Dentro da área de filtro é presente uma caixa de combinação do tipo encomenda de produção, que permite ao usuário decidir o tipo de encomenda de produção a gerar. Enfim, é presente uma caixa cujo usuário pode inserir a data fim pela qual não quer que os artigos da grelha terminam o subestoque.

GRELHA DE RESULTADO: a grelha de resultado é uma lista das linhas artigo que correspondem os dados de filtro especificadas acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa dos artigos, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha da lista das linhas que quiser. 

Os dados visualizados na grelha de resultado são os seguintes:

- classe, código e descrição do artigo;

- ponto de reabastecimento, estoque mínimo e dias para o reabastecimento (dados tomados pelo tab Aprovisionamento do registro artigo);

- consumo médio cotidiano (dado calculado subtraindo o estoque mínimo pelo ponto de reabastecimento e dividindo o resultado obtido para os dias para o reabastecimento);

- lote econômico de produção e os relativos múltiplos (dados retomados pelos parâmetros PNR do artigo);

- disponibilidade início (se refere a disponibilidade do artigo no dia em que lança a elaboração);

- disponibilidade final (se refere a disponibilidade do artigo no dia indicado na caixa 'Subponto de reabastecimento no dia');

- disponibilidade mínima (se refere a disponibilidade mínima que o artigo apresenta no tempo que intercorre entre o dia atual e o dia indicado na caixa 'Subponto de reabastecimento no dia').

Existe enfim uma ademais grelha, na parte baixa da janela, que visualiza o detalhe da disponibilidade do artigo selecionado na grelha principal.

Depois de ter filtrado as linhas artigo, o usuário tem a possibilidade de selecionar algumas dessas linhas (ou também todas) e, clicando no botão 'Considerar por encomendas' presente na Ribbon Bar, move-las no tab 'Resumos', pela qual as linhas vão poder ser pegas em exame pelo procedimento de geração encomenda de produção. Só as linhas pelas quais o procedimento supõe que precisa criar as encomendas de produção vão ser transferidas no tab 'Resumos'. O procedimento propõe, para cada artigo, uma encomenda de produção que permite ao usuário fazer em modo que, no dia em que o artigo corre o perigo de descer embaixo do nível do estoque mínimo, vai ser reintegrado através uma encomenda de produção que tem a data idêntica a data subestoque. A quantidade dessa encomenda de produção vai ter que permitir sobreviver até o dia 'Subponto de reabastecimento' indicado na área de filtro; obviamente se o artigo apresenta alguns lotes econômicos de produção ou de compra ou dos múltiplos, esses vão ser respeitados.






