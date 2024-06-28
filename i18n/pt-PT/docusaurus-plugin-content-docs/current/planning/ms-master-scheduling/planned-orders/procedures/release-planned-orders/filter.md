---
title: Filtro
sidebar_position: 2
---

Neste tab é possível visualizar a lista das ordens planejadas que devem subir uma libertação, filtráveis através duma série de critérios de seleção. O tab se compõe de uma área de filtro e de uma grelha de resultado.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa dentro do banco de dados das ordens planejadas inseridas. |
| Libertação ordens planejadas de produção | Refere-se ao procedimento que executa a libertação das ordens planejadas de produção selecionadas na grelha de resultado, gerando ordens de produção lançadas ou executivas, de acordo de como foram estabelecidos os parâmetros de necessidades dos materiais. |
| Libertação ordens planejadas de compra | Refere-se ao procedimento que executa a libertação das ordens planejaas de compra selecionadas na grelha de resultado, gerando pedidos de compra autorizados ou não autorizados, de acordo de como foram estabelecidos os parâmetros  de necessidades dos materiais. |
| Libertação ordens planejadas de empreiteiro | Refere-se ao procedimento que executa a libertação das ordens planejadas de empreiteiro selecionadas na grelha de resultado, gerando ordens de empreiteiro. |
| Abrir a pesquisa das ordens de produção | Refere-se ao procedimento para abrir a Pesquisa das ordens de produção filtradas com os mesmos critérios utilizados na seção de filtro dessa janela. Por exemplo, se filtrar as ordens planejadas de acordo com o número de encomenda 3 do ano 2012, a janela de pesquisa das ordens de produção vai se abrir já filtrada para a encomenda 3 do ano 2012. |
| Atributos | Abre uma janela que permite decidir se ativar ou não o filtro atributos, que permite filtrar as ordens planejadas de acordo com os atributos inseridos através do codificador nos artigos objeto da mesma ordem. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa sobre o total das ordens planejadas inseridas. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

O usuário pode utilizar os seguintes filtros:

**Artigo**: o primeiro campo permite estabelecer a classe do artigo, com duplo click no segundo campo se abre uma 'Ajuda artigos' pela qual se pode selecionar cada artigo (código e descrição);

**Variante**: com um duplo click se abre uma ajuda variantes pela qual é possível selecionar a variante do artigo;

**Data início produção da...a...**: nestes campos se pode inserir (numa gama) a data prevista de início produção (da...a...);

**Data fim produção da...a...**: nestes campos se pode inserir (numa gama) a data prevista de fim produção (da...a...);

**Ordens de manutenção**: com este flag é possível decidir de visualizar também as ordens planejadas de manutenção;

**Libertação ordens planejadas a**: com este campo se seleciona o tipo de ordem que vai ser gerada com a libertação (pedidos de compra, ordens de produção, ordens empreiteiro);

**Tipo ord.**: neste campo é possível inserir o tipo ordem planejado e filtrar de acordo este critério, visualizando todas as ordens planejadas do tipo selecionado;

**Tipo enc.**: neste campo é possível inserir o tipo encomenda de produção e filtrar de acordo este critério, visualizando todas as ordens planejadas geradas pelas encomendas que pertencem ao tipo selecionado;

**Enc. prod.**: nestes 2 campos são estabelecidos o número e o ano da encomenda de produção;

**Fornecedor**: nestes 3 campos são especificados os relativos dados do fornecedor: 'Conta', 'Subconta', 'Razão social do cliente', com um duplo click no primeiro campo é possível abrir uma 'Ajuda contas' pela qual se pode selecionar o fornecedor desejado;

**Encomenda**: neste campo se insere o número da encomenda de venda, através da adequada ajuda encomendas;

**Cliente**: nestes 3 campos são especificados os relativos dados do cliente: 'Conta', 'Subconta', 'Nome do cliente', com um duplo click no primeiro campo é possível abrir uma 'Ajuda contas' pela qual se pode selecionar o cliente pela qual filtrar;

**Grupo**: neste campo é possível inserir o número do grupo cujo pertencem as ordens planejadas que se quer visualizar na grelha. 

GRELHA DE RESULTADO: a grelha de resultado é uma lista das ordens planejadas que correspondem os dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das ordens planejadas, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha da lista das ordens planejadas que quiser.

As colunas visualizadas na grelha de resultado são as seguintes:

**Ano**: a coluna visualiza o ano da ordem planejada;

**Ordem**: a coluna visualiza o número da ordem planejada;

**Nível**: a coluna visualiza o nível da estrutura de banco que identifica o artigo objeto da ordem planejada;

**Código tipo ordem**: a coluna visualiza o código do tipo ordem planejada;

**Descrição tipo ordem**: a coluna visualiza a descrição do tipo ordem planejada;

**Ano encomenda**: a coluna visualiza o ano da encomenda de produção pela qual foi gerada a ordem planejada. A coluna resulta vazia se a ordem planejada foi gerada manualmente ou vem da elaboração PNR;

**Número encomenda**: a coluna visualiza o número da encomenda de produção pela qual foi gerada a ordem planejada. A coluna resulta vazia se a ordem planejada foi gerada manualmente ou vem da elaboração PNR;

**Código tipo encomenda**: a coluna visualiza o código do tipo encomenda de produção;

**Descrição tipo encomenda**: a coluna visualiza a descrição do tipo encomenda de produção;

**Classe**: a coluna visualiza a classe do artigo objeto da ordem planejada;

**Código artigo**: a coluna visualiza o código do artigo objeto da ordem planejada;

**Variante**: a coluna visualiza a eventual variante do artigo;

**Data início**: a coluna visualiza a data previsto início da ordem planejada; se si refere a uma ordem planejada de compra ou de empreiteiro esta data representa a data pela qual tem de ser enviada ao fornecedor a ordem de compra que vai ser sucessivamente gerada com a libertação da ordem; se si refere a ordem planejada de produção, esta data representa a data de previsto início da primeira fase de produção do ciclo do artigo;

**Data fim**: a coluna visualiza a data previsto fim da ordem planejada; se si refere a uma ordem planejada de compra ou de empreiteiro esta data representa a data pela qual tem de ser recebida o fornecimento e vai corresponder com a data de previsto recebimento da linha da ordem fornecedor que vai ser sucessivamente gerada com a libertação da ordem; se si refere a ordem planejada de produção, esta data representa a data de previsto fim da última fase de produção do ciclo do artigo;

**Quantidade**: a coluna visualiza a quantidade da ordem planejada do artigo;

**Quantidade confirmada**: a coluna visualiza a quantidade confirmada da ordem planejada do artigo, diferente de zero se a ordem planejada vem da elaboração PNR;

**Cliente**: a coluna visualiza a conta e a subconta do cliente associado com a ordem planejada;

**Fornecedor**: a coluna visualiza a conta e a subconta do fornecedor associado com a ordem planejada, se de compra ou de empreiteiro;

**Característica**: a coluna visualiza o código da característica do artigo objeto da ordem planejada;

**Encomenda**: a coluna visualiza a eventual encomenda de venda associada com a ordem planejada;

**Número ordem**: a coluna visualiza o número da ordem cliente pela qual foi gerada a linha de encomenda de produção pela qual a programação gerou a ordem planejada;

**Ano ordem cliente**: a coluna visualiza o ano da ordem cliente pela qual foi gerada a linha de encomenda de produção pela qual a programação gerou a ordem planejada;

**Tipo OC**: a coluna visualiza o tipo da ordem cliente pela qual foi gerada a linha de encomenda de produção pela qual a programação gerou a ordem planejada;

**Descrição artigo**: a coluna visualiza a descrição do artigo objeto da ordem planejada;

**Descrição cliente**: a coluna visualiza a razão social do cliente associado com a ordem planejada;

**Descrição fornecedor**: a coluna visualiza a razão social do fornecedor associado com a ordem planejada, se de compra ou de empreiteiro;

**Descrição característica**: a coluna visualiza a descrição da característica do artigo objeto da ordem planejada;

**Taxativo**: a coluna visualiza um flag que se ativo permite ao usuário indicar que a ordem planejada seja absolutamente não movível.






