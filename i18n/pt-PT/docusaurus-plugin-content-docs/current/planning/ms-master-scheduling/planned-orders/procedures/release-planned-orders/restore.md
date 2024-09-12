---
title: Restauração
sidebar_position: 4
---

Neste tab é possível visualizar a lista das ordens planejadas que devem subir a restauração de uma libertação, filtráveis através duma série de critérios de seleção. A execução do procedimento de restauração ordem planejada permite anular a libertação precedentemente efetuada, restaurando a situação antecedente a libertação. Obviamente esta operação é fatível só em alguns casos bem precisos:

Para a **ordem planejada de produção**: só se a ordem de produção gerada se encontra no estado de 'Lançado'; se for 'Executiva' precisa executar a restauração da libertação da ordem de produção, se está já no estado 'Executado' não se pode mais executar a restauração da ordem planejada, a menos que não se continue ao inverso partindo da redução da registração do aviso de produção;

Para a **ordem planejada de compra**: só se a linha de pedido de compra gerada se encontre no estado de 'Não executada'; si a linha PC já foi executada com a criação de uma ordem fornecedor, vai precisar proceder ao inverso partindo do documento de compra até quando foi ativada;

Para a **ordem planejada de empreiteiro**: só se a linha da ordem de empreiteiro gerada não foi ainda executada, ou não foi ainda gerada uma nota de entrega para o material relativo aquela linha de ordem de empreiteiro.

Para executar a libertação é suficiente selecionar uma ou mais linhas pela grelha superior e clicar no botão 'Restauração' presente na Ribbon Bar.

O tab se compõe por uma área de filtro, por uma grelha de resultado e por uma grelha composta de 3 diferentes tab, que depende da linha selecionada na grelha superior.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa ao interno do banco de dados das ordens planejadas inseridas e já libertadas. |
| Restauração | Refere-se ao procedimento que executa a restauração da libertação das ordens planejadas de produção, de compra e/ou de empreiterio selecionados na grelha de resultado, como se explica no detalhe deste tab. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa sobre o total das ordens planejadas inseridas que já subiram uma libertação. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

O usuário pode utilizar os seguintes filtros:

**Artigo**: o primeiro campo permite estabelecer a classe do artigo, com duplo click no segundo campo se abre uma 'Ajuda artigos' pela qual se pode selecionar cada artigo (código e descrição);

**Variante**: com um duplo click se abre uma ajuda variantes pela qual é possível selecionar a variante do artigo;

**Ordens de manutenção**: com este flag é possível decidir de visualizar também as ordens planejadas de manutenção;

**Tipo enc.**: neste campo é possível inserir o tipo encomenda de produção e filtrar de acordo este critério, visualizando todas as ordens planejadas geradas pelas encomendas que pertencem ao tipo selecionado;

**Encomenda**: neste campo se insere o número da encomenda de venda, através da adequada ajuda encomendas;

**Cliente**: nestes 3 campos são especificados os relativos dados do cliente: 'Conta', 'Subconta', 'Nome do cliente', com um duplo click no primeiro campo é possível abrir uma 'Ajuda contas' pela qual se pode selecionar o cliente pela qual filtrar;

****Fornecedor****: nestes 3 campos são especificados os relativos dados do fornecedor: 'Conta', 'Subconta', 'Razão social do cliente', com um duplo click no primeiro campo é possível abrir uma 'Ajuda contas' pela qual se pode selecionar o fornecedor desejado;

**Enc. prod.**: nestes 2 campos são estabelecidos o número e o ano da encomenda de produção;

GRELHA DE RESULTADO: a grelha de resultado é uma lista das ordens planejadas que correspondem os dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das ordens planejadas, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha da lista das ordens planejadas que quiser.

As colunas visualizadas na grelha de resultado são as seguintes:

**Usuário libertação**: a coluna visualiza o usuário de ERP que executou a libertação da ordem planejada selecionada;

**Data libertação**: a coluna visualiza a data cujo usuário acima executou a libertação;

**Ano**: a coluna visualiza o ano da ordem planejada;

**Ordem**: a coluna visualiza o número da ordem planejada;

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

****Encomenda****: a coluna visualiza a eventual encomenda de venda associada com a ordem planejada;

**Quantidade confirmada**: a coluna visualiza a quantidade confirmada da ordem planejada do artigo, diferente de zero se a ordem planejada vem da elaboração PNR;

**Cliente**: a coluna visualiza a conta e a subconta do cliente associado com a ordem planejada;

**Fornecedor**: a coluna visualiza a conta e a subconta do fornecedor associado com a ordem planejada, se de compra ou de empreiteiro;

**Característica**: a coluna visualiza o código da característica do artigo objeto da ordem planejada;

**Descrição artigo**: a coluna visualiza a descrição do artigo objeto da ordem planejada;

**Descrição cliente**: a coluna visualiza a razão social do cliente associado com a ordem planejada;

**Descrição fornecedor**: a coluna visualiza a razão social do fornecedor associado com a ordem planejada, se de compra ou de empreiteiro;

**Descrição característica**: a coluna visualiza a descrição da característica do artigo objeto da ordem planejada;

Selecionando uma das linhas presentes na grelha de resultado, se visualiza um detalhe, na grelha abaixo, relativo ao documento gerado pela ordem planejada. O documento pode ser, como precedentemente antecipado:

**Ordem de produção**: neste caso o detalhe é visualizado no tab 'Ordens de produção';

**Ordem de empreiteiro**: neste caso o detalhe é visualizado no tab 'Ordens de empreiteiro';

**Pedido de compra**: neste caso o detalhe é visualizado no tab 'Ordens de compra'.

Para cada documento se fornece um detalhe parecido com aquele que se pode obter procurando os documentos nas respectivas janelas de pesquisa colocadas nos respetivos módulos aplicativos.






