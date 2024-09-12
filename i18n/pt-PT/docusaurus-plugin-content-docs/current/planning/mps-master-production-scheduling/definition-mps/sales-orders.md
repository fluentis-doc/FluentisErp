---
title: Ordens clientes
sidebar_position: 3
---

Através desse tab podem-se filtrar as linhas ordem cliente que se quer fazer analisar pelo procedimento Definição PMP. As linhas ordem que podem ser visualizadas nesse tab tem de responder aos seguintes requisitos:

- o artigo objeto da linha ordem cliente tem de ter o flag 'Encomendas' habilitado nos seus 'Parâmetros PNR';

- a linha não tem de ser executada através a lista de retirada, ou nota de entrega de venda, ou fatura de venda;

- a linha não tem de ser colocada 'Forçada executada';

- a linha tem de resultar no estado 'Não executada' ou 'Parcialmente executada';

- a partir da linha não devem ainda ser geradas as encomendas de produção;

- a linha tem de ter a data mercadoria pronta inserida no tab Artigos da ordem cliente cujo provem;

- a ordem cliente cujo provém a linha tem de ser 'Imprimida' ou 'Confirmada'.

A não presença de UMA SÓ dessas condições provoca a impossibilidade de visualizar a linha ordem cliente na grelha.

O tab se compõe por uma área de filtro e uma grelha de resultado.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa dentro do banco de dados das linhas ordem cliente inseridas e que respondam aos requisitos explicitados no começo do ponto 5.2. |
| Considerar por encomendas | Refere-se ao procedimento para mover as linhas ordem cliente selecionadas na grelha no tab 'Resumo'. |
| Geração fluxo | Refere-se ao procedimento para executar a geração do fluxo de produção de acordo com os parâmetros estabelecidos na janela 'Parâmetros PMP'. |
| Modificar o filtro atributos | Refere-se ao procedimento para visualizar ou não o filtro atributos. Ativando esse botão e os 2 flag presentes na janela de pop-up que sai automaticamente, é possível utilizar o filtro para Atributos, portanto usufruindo os dados que provêm das tabelas do 'Codificador'. Para cada tabela é possível estabelecer um ou mais filtros, acrescentando depois na grelha alguns resultados das colunas associadas  com os atributos selecionados, com visualizados os dados que provêm das mesmas tabelas. Nessa grelha se visualizam, no caso de utilizo do filtro atributos, os dados presentes na janela dos Atributos que se ativa com o adequado botão presente no tab Artigos da ordem cliente. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos. O usuário pode utilizar o filtro por classe, código, descrição e variante do artigo, o filtro por tipo e número ordem cliente, por cliente, por encomenda de venda, por data de prevista entrega da linha ordem cliente, por tipo encomenda de produção (nesse cado se filtram as linhas ordem cliente que provêm da ordens clientes cujo tipo tem um determinado tipo encomenda associada na tabela 'Tipos ordem cliente').

GRELHA DE RESULTADO: na grelha de resultado se visualiza uma lista de linhas ordem cliente que correspondem com os dados de filtro especificadas acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das linhas d'ordem, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha da lista das linhas que quiser. 

Os dados visualizados na grelha de resultado são o tipo ordem cliente, o número ordem ano, a data inserção ordem ('Data OC'), o número linha, o campo que visualiza a conta e a subconta de cliente, a encomenda de venda, classe, código e variante do artigo, a opção da linha ordem cliente, a quantidade ainda a executar da linha ordem ('Quantidade'), a quantidade disponível ('Disponibilidade') daquele artigo na data de mercadoria pronta da linha ordem ('Entrega'), o código e a descrição do tipo encomenda de produção associado com o tipo ordem cliente, a descrição do artigo e a razão social do cliente ('Descrição cliente').

Precisa especificar que a coluna 'Disponibilidade' resulta igual a zero para todas as linhas se o flag 'Considerar a disponibilidade do artigo' presente no tab parâmetros é desativado. Obviamente se o flag estiver ativado, o procedimento de pesquisa das linhas ordem pede um tempo de espera um pouco mais longo por que naquele momento o sistema executa 'Run time' o cálculo da disponibilidade de cada linha artigo visualizável na grelha de acordo com os filtros de pesquisa estabelecidos.

Depois de ter filtrado as linhas ordem desejadas, o usuário tem a possibilidade de selecionar algumas dessas linhas (ou também todas) e, clicando no botão 'Considerar por encomendas' presente na Ribbon Bar, move-las no tab Resumo, pela qual as linhas podem ser pegas em exame pelo procedimento de geração encomenda de produção.

Uma outra possibilidade é aquela de utilizar, sempre depois de ter selecionado uma ou mais linhas ordem cliente, o botão 'Geração fluxo', que se habilita só se nos Parâmetros PMP foi habilitado o flag 'Geração automática fluxo de produção'. Com esse botão se pode lançar diretamente a execução do fluxo de produção completo a jusante da criação das encomendas de produção, as quais vão ser, portanto, imediatamente planejadas e, de acordo com os flag sucessivos onde se explica o funcionamento no documento relativo aos parâmetros de produção, vão ser eventualmente geradas ordens planejadas, ordens de produção e também na última hipótese avisos de produção.






