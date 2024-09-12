---
title: Nova ordem planejada
sidebar_position: 1
---

A janela que permite inserir uma nova ordem planejada se abre através do percurso Planejamento > PMP > Ordens planejadas > Nova ordem planejada, ou clicando no ícone da Ribbon da janela Procurar as ordens planejadas chamada 'Inserir ordem'.

Normalmente as ordens planejadas são geradas automaticamente pelo procedimento de planejamento geral ou pela elaboração PNR, com esse elemento de menu o usuário tem a possibilidade de gerar manualmente uma ordem planejada, seja ela de compra, de produção ou de empreiteiro.

A aplicação pede, como primeira coisa, de inserir o tipo ordem planejada, mesmo se propõe, na adequada caixa de combinação, o tipo predefinido como tipo de default. Depois de ter indicado o tipo ordem, o usuário pode proceder a inserir, através da ajuda ou digitando manualmente a classe e o código, o artigo a produzir nas casas. Depois de ter inserido o artigo a produzir, a aplicação permite ao usuário escolher também a variante do artigo, e completa a janela da Nova ordem planejada com todas as informações disponíveis relativas ao artigo. Enfim, para poder salvar a ordem, a aplicação pede a inserção da data fim prevista e da quantidade a produzir nos adequados campos que se detalham abaixo. Depois do salvamento, precisa apertar o botão 'Completamente dados ordem' para pode ver atualizados todos os tab (materiais, fases, etc...) que peguem os dados da estrutura de produtos e ciclo de trabalho do artigo objeto de ordem planejada (só se de produção).

Os outros dados presente na janela de gestão são os seguintes:

**Número/ano**: nestes campos se insere de default o ano e o número da ordem planejada que se esta criando, de acordo com o tipo numeração associado ao tipo ordem planejada que foi inserido no adequado campo. Esses dois dados podem também ser modificados manualmente pelo usuário, mesmo se é desaconselhado;

**Tipo ordem**: este campo visualiza o tipo da ordem planejada que se esta criando ou que foi criado (produção, compra, empreiteiro). Geralmente corresponde com o tipo de aprovisionamento do artigo objeto da ordem planejada;

**Ordem taxativa**: se este flag é ativo, a ordem planejada assume uma importância prioritária e não permite ao usuário mover a ordem mesmo estabelecendo uma data maior que a data fim prevista pelo planejamento geral;

**Prioridade da ordem**: nesta caixa de combinação se estabelece a prioridade que se da para essa ordem;

**Tipo encomenda**: nessa casa visualiza-se o tipo da encomenda de produção pela qual foi gerada a ordem planejada. Obviamente se foi gerada manualmente, não vai ser possível associá-lo com algumas encomendas de produção já existente e portanto essa casa vai resultar vazia;

**Gerado pela demanda**: neste campo se visualiza 'Manual' (se é uma ordem planejada criada manualmente), 'Dependente' (se é uma ordem planejada criada pelo planejamento e que depende da outras ordens planejadas de nível superior) ou 'Independente' (se é uma ordem planejada criada pelo planejamento e que não depende da outras ordens planejadas de nível superior, por que esse já é uma ordem de nível 1);

**Enc. prod.**: nestes 3 campos são estabelecidos o ano, o número e a descrição da encomenda de produção pela qual foi gerada a ordem planejada. Obviamente se já foi gerada manualmente, não vai ser possível associá-la com algumas encomendas de produção já existente e portanto essa casa vai ficar vazia;

**Data inserção**: é estabelecida de default a data atual (não editável);

**Encomenda**: com um duplo click se abre uma 'Ajuda encomendas' que permite de associar uma encomenda de venda com a ordem planejada que se está inserindo;

**Última mudança**: se estabelece a data pela qual foi efetuada a última mudança da ordem;

**Cliente**: nestes 3 campos são especificados os relativos dados do cliente: 'Conta', 'Subconta' e 'Nome do cliente', com um duplo click no primeiro campo é possível abrir uma 'Ajuda artigos' pela qual selecionar o cliente a associar a ordem;

**Ciclo estruturas preferencial**: com um duplo click se entra na Ajuda ciclos pela qual se pode selecionar um ciclo. Nesse campo o usuário tem a possibilidade de decidir por qual ciclo de produção daquele artigo tenham que ser pegas as informações a inserir sucessivamente no tab Fases da ordem planejada;

**Versão**: a caixa de combinação permite selecionar a 'Versão', enquanto o campo sucessivo é relativo ao ano de referência da versão. Normalmente se estabelece em automático a versão de default;

**Produção previsto fim - início**: se estabelecem as datas previstas de início e fim da relativa produção. Se depois de ter completado os dados do ciclo de produção o usuário executa uma mudança de uma dessas 2 datas, a outra se recalcula de consequência;

**Artigo**: o primeiro campo permite estabelecer a classe do artigo, com um duplo click no segundo campo se abre uma 'Ajuda artigos' pela qual é possível selecionar cada artigo da ordem (código e descrição);

**Notas**: é uma campo livre pela qual se pode inserir notas;

**Variante**: nesta caixa de combinação se específica a variante do artigo;

**Opção**: nesta caixa de combinação se específica a opção do artigo. Normalmente se estabelece em automático a opção de default (opção base);

**Fornecedor/Empreiteiro**: através a 'Conta', 'Subconta' e o relativo 'Nome' é possível inserir os dados do relativo fornecedor/empreiteiro, abrindo eventualmente com um duplo click a relativa ajuda contas. Essa casa resulta ativa só se a ordem planejada for de compra ou de empreiteiro;

**Quantidade a produzir**: neste campo se específica a quantidade do artigo que precisa produzir. Se o artigo inserido é de produção, nessa casa vai ser proposta automaticamente a quantidade do lote econômico de produção inserida nos parâmetros PNR do artigo;

**UM gest.**: se indica a unidade de medida gestional do artigo;

**Quantidade utilizo**: neste campo se estabelece a quantidade a produzir na eventual unidade de medida alternativa;

**UM utilizo**: se indica a unidade de medida alternativo do artigo.

Na parte inferior da janela aparecem 8 diferentes tab: materiais, fases, aparelhagem, equipamentos, nota fases, notas precodificadas fases, atributos, encomendas, que são detalhadas abaixo.






