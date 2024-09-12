---
title: Nova encomenda multiproduto
sidebar_position: 4
---

A janela que permite inserir uma nova encomenda multiproduto se abre através do percurso Planejamento > Encomendas > Nova encomenda multriproduto, ou clicando no ícone da Ribbon pela janela Encomendas chamada 'Nova encomenda monoproduto'.

A aplicação pede, como primeira coisa, de inserir o Tipo encomenda de produção, mesmo se propõe, na caixa de combinação, o tipo predefinido como tipo de default. Depois de ter indicado o tipo encomenda, o usuário precisa salvar o cabeçalho da encomenda multiproduto e depois pode proceder a inserir, através da ajuda ou digitando manualmente a classe e o código, o artigo a produzir na grelha. Depois de ter inserido o artigo a produzir, a aplicação permite ao usuário escolher também a variante do artigo, inserir a quantidade a produzir e a data fim prevista da encomenda; portanto é completada automaticamente a primeira linha de grelha Nova encomenda multiproduto com a descrição do artigo, o tipo de aprovisionamento da grelha de encomenda (que é retomada pelo tipo de aprovisionamento do mesmo artigo e pode ser de produção, de compra ou de empreiteiro), o estado da encomenda, a unidade de medida do artigo, a quantidade produzida e a data de início prevista.

Vamos detalhar agora os dados presentes na janela do cabeçalho da encomenda multiproduto:

**Ano/Número**: nesses campos é inserido de default o ano e o número da encomenda que se está criando, em relação ao tipo numeração associado com o tipo encomenda que foi inserido no campo. Esses dois dados podem ser também modificados manualmente pelo usuário;

**Estado**: nesse campo pode-se visualizar, e eventualmente modificar, o estado do cabeçalho da encomenda de produção multiproduto. O estado da encomenda pode ser:

**Não examinado**: se refere ao estado aonde é criada a encomenda, portanto significa que acabou de ser inserida ou criada;

**Planejada**: a encomenda passa nesse estado após que ao menos uma linha de encomenda tenha subido o processo de planejamento geral;

**Lançada**: a encomenda passa para esse estado depois que ao menos uma das ordens planejadas de produção ou de compra geradas por ao menos uma das linhas de encomenda enquanto que o planejamento geral foi libertado.

**Executiva**: a encomenda passa para esse campo depois que ao menos uma das ordens de produção geradas por ao menos uma das linhas de encomenda tenha sido libertada ou depois que uma das ordens planejadas de empreiteiro geradas tenha sido libertada ou depois que ao menos uma das linhas de pedido de compra geradas foi transformada na linha da ordem fornecedor.

**Executada**: a encomenda passa nesse estado depois que todas as ordens de produção geradas para todas as linhas de encomenda para os artigos objeto da encomenda passaram no estado 'Executado';

**Historicizada**: a encomenda pode ser colocada nesse estado manualmente para fazer em modo que não saía mais quando se efetua uma pesquisa das encomendas Executadas;

**Taxativo (flag)**: Refere-se a um flag puramente descritivo, que permite ao usuário indicar se essa encomenda é de fundamental importância ou não;

**Prioridade**: através da caixa de combinação é possível estabelecer a prioridade da encomenda. Esse dado é simplesmente de tipo informativo;

**Aprovisionamento**: essa caixa de combinação visualiza o tipo de encomenda de produção que se está criando ou que foi criada (Produção, Compra, Empreiteiro). Geralmente corresponde com o tipo de aprovisionamento do artigo inserido na encomenda de produção. Se refere ao um dado geral pouco indicativo no caso de encomenda multiproduto;

**Data inserção/Última mudança**: nesses campos, não editáveis, aparece a data de inserção da encomenda e embaixo a data da última mudança;

**Data produção previsto início/fim**: nesses campos aparecem as datas de previsto início/fim da encomenda de produção, considerando como data de início a data de início mais velha entre aquelas de todas as linhas de encomenda e como data fim a data fim mais longe entre aquelas de todas as linhas de encomenda;

**Data sugerida**: nesse campo aparece a data que o sistema sugeriu se o usuário planejou a encomenda utilizando o parâmetro 'Controlar os documentos em atraso com o ATP', e se estabeleceu, sempre nos parâmetros de Planejamento geral, uma 'Data início PM (plano mestre)'. A data sugerida é aquela que o usuário vai poder decidir se torná-la data de previsto fim da encomenda;

**Data produção efetiva início/fim**: nesses campos aparecem as datas de início/fim de produção efetiva, quer dizer respectivamente a data do primeiro aviso de produção de uma ordem de produção gerada pela encomenda e a data do último aviso de produção que causou o encerramento definitivo da ordem de produção aonde o artigo é o mesmo da encomenda de produção. Obviamente a data de efetivo fim vai estar presente só se a encomenda estiver no estado 'Executada';

**Descrição**: nesse campo é possível digitar manualmente uma descrição da encomenda de produção. Refere-se a um campo não obrigatório e absolutamente descritivo;

**Encomenda**: nesse campo visualiza-se a ligação com a encomenda de venda. O usuário pode utilizar esse campo para enganchar manualmente a encomenda de produção num cabeçalho ou numa linha de uma encomenda de venda existente;

**Cliente**: nesses 3 campos são especificados os relativos dados do cliente: 'Conta', 'Subconta', 'Razão social do cliente', com um duplo click no primeiro campo é possível abrir uma 'ajuda contas' pela qual selecionar o cliente em questão. Se a encomenda de produção multiproduto foi gerada através o agrupamento de mais linhas ordem cliente do mesmo cliente, nesse campo  aparece o cliente titular da ordem cliente contida naquela linha; diversamente, o campo aparece vazio. Fica de qualquer maneira editável manualmente pelo usuário;

**Notas**: nesse campo é possível inserir manualmente uma nota relativa a Encomenda de produção;

**Local prod.**: nesse campo pode-se especificar qual local produtivo tem de ser considerado pelo planejamento do artigo presente na encomenda de produção;

Passamos agora a detalhar os campos presentes na grelha dos artigos da encomenda multiproduto:

**Tipo aprovisionamento**: esse campo visualiza o tipo de linha de encomenda de produção que está criando ou que foi criado (produção, compra, empreiteiro). Geralmente corresponde com o tipo de aprovisionamento do artigo objeto da encomenda de produção;

**Estado**: nesse campo pode-se visualizar, e eventualmente modificar, o estado da linha de encomenda de produção. O estado da linha de encomenda pode ser:

**Não examinado**: se refere ao estado aonde é criada a encomenda, portanto significa que acabou de ser inserida ou criada;

**Planejada**: a encomenda passa nesse estado depois de ter subido o processo de planejamento geral;

**Lançada**: a encomenda passa para esse estado depois que ao menos uma das ordens planejadas de produção ou de compra geradas por ao menos uma das linhas de encomenda enquanto que o planejamento geral foi libertado.

**Executiva**: a encomenda passa para esse campo depois que ao menos uma das ordens de produção geradas da ao menos uma das linhas de encomenda tenha sido libertada ou depois de, pelo menos, uma das ordens planejadas de empreiteiro geradas tenha sido libertada ou depois que ao menos uma das linhas de pedido de compra geradas foi transformada na linha da ordem fornecedor.

**Executada**: a encomenda passa nesse estado depois que todas as ordens de produção geradas para todas as linhas de encomenda para os artigos objeto da encomenda passaram no estado 'Executado';

**Historicizada**: a encomenda pode ser colocada nesse estado manualmente para fazer em modo que não saía mais quando se efetua uma pesquisa das encomendas Executadas;

**Anulada**: a encomenda pode ser colocada nesse estado manualmente, em vez de eliminá-la completamente, para indicar que a encomenda, que inicialmente foi prevista, não foi levada para a produção;

**Prog.**: nesse campo, editável pelo usuário, é proposto um progressivo de linha da encomenda de produção multiproduto;

**Ciclo**: nesse campo pode-se especificar qual é o número de ciclo de produção que tem de ser considerado pelo planejamento do artigo presente na encomenda;

**Classe**: nessa coluna pode-se especificar a classe do artigo a inserir na linha de encomenda;

**Código artigo**: nessa coluna pode ser inserido manualmente o código artigo a produzir, ou com um duplo click na caixa amarela é possível exceder na 'ajuda artigos' para poder inserir o código do artigo; a descrição do artigo vai ser inserida de consequência em maneira automática;

**Variante**: com esse campo é possível selecionar a variante do artigo;

**Opção**: nesse campo, visualiza-se a opção que precisa ser utilizada para o planejamento do artigo presente na encomenda;

**UM util.**: nessa coluna, insere-se a unidade de medida alternativa precodificada para aquele artigo que tem de ser considerada;

**Quantidade utilizo a produzir**: nesse campo, insere-se a quantidade a produzir na unidade de medida alternativa do artigo. Se o artigo não tem nenhuma unidade de medida alternativa, ou se quer inserir a quantidade a produzir na unidade de medida gestional, se insere simplesmente a quantidade a produzir sem atualizar o campo 'UM util.'. Enfim, lembra-se que em caso de inserção manual da linha da encomenda de produção, o usuário precisa inserir esse dado manualmente, pena a impossibilidade de salvar a linha da encomenda;

**UM**: nessa coluna visualiza-se a unidade de medida gestional do artigo;

**Quantidade gest. a produzir**: nesse campo, insere-se a quantidade a produzir na unidade de medida gestional. O campo 'Quantidade gest. a produzir' é atualizada automaticamente inserindo a quantidade a produzir no campo no ponto 'j';



**Quantidade produzida**: nesse campo, visualiza-se a quantidade já produzida na unidade de medida gestional do artigo;

**Data início previsto**: nessa coluna aparece a data de previsto início da linha de encomenda de produção. Até quando a encomenda de produção fica no estado 'Não examinada', essa data é idêntica a data de previsto fim e a data de mercadoria pronta da linha da ordem cliente pela qual a linha de encomenda foi gerada, ou igual a data de início de previsão de venda pela qual a linha de encomenda foi gerada. Depois que a linha de encomenda de produção foi planejada, a data de previsto início da encomenda corresponde com a data de previsto início da primeira ordem planejada que foi gerada pelo planejamento da linha de encomenda;

**Data fim previsto**: nessa coluna aparece a data de previsto fim da linha de encomenda de produção. Até quando a encomenda de produção fica no estado 'Não examinada', essa data é idêntica a data de previsto início e a data de mercadoria pronta da linha da ordem cliente pela qual a linha de encomenda foi gerada, ou igual a data de fim da previsão de venda pela qual a linha de encomenda foi gerada. Depois que a linha de produção foi planejada, a data de previsto fim da encomenda corresponde com a data de previsto fim da primeira ordem planejada que foi gerada pelo planejamento da linha de encomenda. Enfim, se lembra que em caso de inserção manual da linha de Encomenda de produção, o usuário precisa inserir esse dado manualmente, pena a impossibilidade de salvar a linha de encomenda;

**Data sugerida**: nessa coluna aparece a data que o sistema sugeriu se o usuário tenha planejado a linha de encomenda utilizando o parâmetro 'Controlar os documentos em atraso com o ATP', e tendo estabelecido, sempre nos parâmetros de Planejamento geral, uma 'Data início PM (Plano mestre)'. A data sugerida é aquela que depois o usuário pode decidir se tornar na data de previsto fim da linha de encomenda;

**Data início previsão**: nessa coluna aparece a data de início da previsão de venda operativa pela qual foi gerada a linha de encomenda de produção;

**Data fim previsão**: nessa coluna aparece a data de fim da previsão de venda operativa pela qual foi gerada a linha de encomenda de produção;

**Encomenda**: nesse campo, visualiza-se a ligação com a encomenda de venda. O usuário pode utilizar esse campo para enganchar manualmente a linha de encomenda de produção com um cabeçalho ou com uma linha de uma encomenda de venda existente;

**Ano**: nessa coluna, visualiza-se o ano da encomenda de venda eventualmente enganchada no campo cujo ponto precedente;

**Cliente conta/Cliente subconta/Descrição cliente**: nesses 3 campos são especificados os relativos dados do cliente: 'Conta', 'Subconta', 'Razão social do cliente', com um duplo click no primeiro ou no segundo campo é possível abrir uma 'Ajuda contas' pela qual selecionar o campo em questão. Se a linha de encomenda de produção foi gerada por uma linha de ordem cliente, nesse campo vai aparecer o cliente titular da ordem cliente que contém aquela linha;

**Descrição artigo**: nessa coluna aparece a descrição do artigo objeto da linha de encomenda de produção.

Na parte inferior da janela aparecem 3 diferentes tab: Atributos encomenda, Referência ordens clientes e Variantes, que se referem a linha de encomenda selecionada na grelha e que foram detalhados na seção do presente documento dedicado a 'Nova encomenda monoproduto'.

RIBBON BAR: rappresenta il menù della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni collegate alla procedura in uso. La lista delle funzionalità possibili è di seguito rappresentata:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as mudanças efetuadas na encomenda de produção. |
| Inserir a encomenda multiproduto | Refere-se ao procedimento para inserir uma nova encomenda de produção multiproduto: a aplicação salva automaticamente a encomenda que acabou de ser inserida e limpa todos os campos tornando a janela disponível para a inserção de uma nova encomenda.  |
| Duplicar a encomenda | Refere-se ao procedimento para gerar uma nova encomenda de produção multiproduto, composto com os mesmos artigos pela qual se compões a encomenda de partida. Antes de abrir a nova janela, a aplicação pede o eventual salvamento dos dados da encomenda de partida. |
| Inserir o artigo | Move automaticamente o foco do mouse na primeira coluna da primeira linha disponível da grelha, em modo de permitir a inserção de uma nova linha de encomenda. |
| Cancelar o artigo | Cancela a linha selecionada na grelha dos artigos da encomenda de produção multiproduto. |
| Pré-visualização | Refere-se a janela 'Verificar as encomendas', pela qual um dos pontos sucessivos do presente documento, já foi pré-filtrado pela encomenda de produção cujo partiu. |
| Imprimir | Refere-se a janela 'Verificar encomendas', pela qual um dos pontos sucessivos do presente documento, já foi pré-filtrado pela encomenda de produção cujo partiu. |






