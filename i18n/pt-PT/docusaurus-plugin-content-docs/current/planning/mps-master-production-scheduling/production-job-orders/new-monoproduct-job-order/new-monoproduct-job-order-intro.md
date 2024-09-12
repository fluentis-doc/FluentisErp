---
title: Nova encomenda monoproduto
sidebar_position: 1
---

A janela que permite inserir uma nova encomenda monoproduto se abre através o percurso Planejamento > Encomendas > Nova encomenda monoproduto, ou clicando no ícone da Ribbon pela janela Encomendas chamada 'Nova encomenda monoproduto'.

A aplicação pede, como primeira coisa, de inserir o tipo encomenda de produção, mesmo se propõe, na caixa de combinação, o tipo predefinido como tipo de default. Depois de ter indicado o tipo encomenda, o usuário pode proceder a inserir, através a ajuda ou digitando manualmente a classe e o código, o artigo a produzir nas adequadas caixas. Depois de ter inserido o artigo a produzir, a aplicação permite ao usuário escolher também a relativa Variante do artigo, e completa a janela da Nova encomenda monoproduto com todas as informações disponíveis relativas ao artigo, quer dizer os dados contidos na seção 'Características artigo', por onde se visualiza o tipo de aprovisionamento do artigo inserido na encomenda (produção, compra ou empreiteiro), o lote econômico de produção e os seus múltiplos, o tempo de espera de produção e a porcentagem de sobra; se refere aos dados retomados pelos Parâmetros PMP do artigo. Enfim, para poder salvar a encomenda, a aplicação pede a inserção da data de fim prevista e da quantidade a produzir nos adequados campos que se detalham abaixo. 

Os outros dados presentes na janela de gestão são as seguintes:

**Ano/número**: nesses campos é inserido de default o ano e o numero da encomenda que se esta criando, de acordo com o tipo de numeração associado com o tipo encomenda que foi inserido no adequado campo. Esses dois dados podem também ser modificados manualmente pelo usuário;

**Estado**: nesse campo pode-se visualizar, e eventualmente modificar, o estado da encomenda de produção. O estado da encomenda pode ser:

**Não examinada**: refere-se ao estado aonde foi criada a encomenda, portanto significa que acabou de ser inserida ou criada;

**Planejada**: a encomenda passa para esse estado após o processo de Planejamento geral;

**Lançada**: a encomenda passa para esse estado depois que ao menos uma das ordens planejadas de produção ou de compra foram geradas enquanto que o planejamento geral foi libertado.

**Executiva**: a encomenda passa para esse campo depois que ao menos uma das ordens de produção geradas tenha sido libertada ou depois de, pelo menos, uma das ordens planejadas de empreiteiro geradas tenha sido libertada ou depois que ao menos uma das linhas de pedido de compra geradas foi transformada na linha da ordem fornecedor.

**Executada**: a encomenda passa nesse estado depois que a ordem de produção gerada para o artigo objeto da encomenda passou no estado 'Executado';

**Historicizada**: a encomenda pode ser colocada nesse estado manualmente para fazer em modo que não saía mais quando se efetua uma pesquisa das encomendas Executadas;

**Anulada**: a encomenda pode ser colocada nesse estado manualmente, em vez de eliminá-la inteiramente, para indicar que a encomenda que inicialmente foi prevista não foi levada na produção.

**Origem**: nesse campo indica-se a encomenda que foi inserida manualmente, nesse caso vai ser visualizado o dado 'Manual', se foi gerada por uma linha de uma ordem cliente, visualizado o dado 'Ordem cliente', ou se a encomenda foi gerada pelas previsões de venda ou por um plano principal de produção, visualizado o dado 'Provisional';

**Taxativo (flag)**: refere-se a um flag puramente descritivo, que permite ao usuário indicar se essa encomenda é de fundamental importância ou não;

**Prioridade**: através da caixa de combinação é possível estabelecer a prioridade da encomenda. Esse dado é simplesmente de tipo informativo.

**Aprovisionamento**: essa caixa de combinação visualiza o tipo de encomenda de produção que se está criando ou que foi criada (Produção, Compra, Empreiteiro). Geralmente corresponde com o tipo de aprovisionamento do artigo objeto da mesma encomenda de produção;

**Data inserção/Última mudança**: nesses campos, não editáveis, aparece a data de inserção da encomenda e embaixo a data da última mudança;

**Data produção previsto início/fim**: nesses campos aparecem as datas de previsto início/fim da encomenda de produção. Até quando a encomenda de produção permanece no estado 'Não examinada', essas datas são iguais a data fim da previsão de venda pela qual a encomenda foi gerada. Depois que a encomenda de produção foi planejada, a data de previsto início da encomenda corresponde com a data de previsto início da primeira ordem planejada que é gerada pelo planejamento da encomenda. Enfim, lembra-se que em caso de inserção manual da Encomenda de produção, o usuário precisa inserir esse dado manualmente, pena a impossibilidade de salvar a encomenda;

**Data sugerida**: nesse campo aparece a data que o sistema sugeriu se o usuário planejou a encomenda utilizando o parâmetro 'Controlar os documentos em atraso com o ATP', e se estabeleceu, sempre nos parâmetros de Planejamento geral, uma 'Data início PM (plano mestre)'. A data sugerida é aquela que o usuário vai poder decidir se torná-la data de previsto fim da encomenda;

**Data produção efetiva início/fim**: nesses campos aparecem as datas de início/fim de produção efetiva, quer dizer respectivamente a data do primeiro aviso de produção de uma ordem de produção gerada pela encomenda e a data do último aviso de produção que causou o encerramento definitivo da ordem de produção aonde o artigo é o mesmo da encomenda de produção. Obviamente a data de efetivo fim vai estar presente só se a encomenda estiver no estado 'Executada';

**Data previsão início/fim**: nesses campos aparecem as datas de início/fim da previsão de venda operativo pela qual foi gerada a encomenda de produção;

**Descrição**: nesse campo é possível digitar manualmente uma descrição da encomenda de produção. Se refere a um campo não obrigatório e absolutamente descritivo;

**Encomenda**: nesse campo se visualiza a ligação com a encomenda de venda. O usuário pode utilizar esse campo para enganchar manualmente a encomenda de produção num cabeçalho ou numa linha de uma encomenda de venda existente;

**Cliente**: nesses 3 campos são especificados os relativos dados do cliente: 'Conta', 'Subconta', 'Razão social do cliente', com um duplo click no primeiro campo é possível abrir uma 'ajuda contas' pela qual selecionar o cliente em questão. Se a encomenda de produção foi gerada por uma linha Ordem cliente, então nesse campo aparece o cliente titular da ordem cliente contida naquela linha;

**Notas**: nesse campo é possível inserir manualmente uma nota relativa a Encomenda de produção;

**Local prod.**: nesse campo pode-se especificar qual local produtivo tem de ser considerado pelo planejamento do artigo presente na encomenda de produção;

**Artigo**: nesses campos pode ser inserida a classe e com um duplo click no segundo campo é possível aceder a Ajuda artigos para poder inserir o código do artigo e a relativa descrição;

**Variante**: com essa caixa de combinação é possível selecionar a variante do artigo;

**Ciclo**: nesse campo pode-se especificar qual é o número do ciclo de produção que tem de ser considerado para o planejamento do artigo presente na encomenda;

**Opção**: nessa caixa de combinação é visualizada a opção que tem de ser utilizada para o planejamento do artigo presente na encomenda;

**Quantidade util. a produzir/UMU**: nesse campo se insere a quantidade a produzir na unidade de medida alternativa do artigo, e no campo 'UMU' se insere a unidade de medida alternativa precodificada para aquele artigo que tem de ser considerada. Se o artigo não tem nenhuma unidade de medida alternativa, ou se quer inserir a quantidade a produzir na unidade de medida gestional, se insere simplesmente a quantidade a produzir sem atualizar o campo 'UMU'. Enfim, lembra-se que em caso de inserção manual da encomenda de produção, o usuário precisa inserir esse dado manualmente, pena a impossibilidade de salvar a encomenda;

**Quantidade gest. a produzir/UMG**: nesse campo insere-se a quantidade a produzir na unidade de medida gestional, e no campo 'UMG' se visualiza a unidade de medida gestional do artigo. O campo 'Quantidade gest. a produzir' é atualizado automaticamente inserindo a quantidade a produzir no campo no ponto 'u';

**Quantidade já produzida/UMG**: nesse campo visualiza-se a quantidade já produzida na unidade de medida gestional (UMG) do artigo.

Na parte inferior da janela aparecem 3 diferentes tab: Atributo encomenda, Referência ordens clientes e Variantes, que são detalhados abaixo.






