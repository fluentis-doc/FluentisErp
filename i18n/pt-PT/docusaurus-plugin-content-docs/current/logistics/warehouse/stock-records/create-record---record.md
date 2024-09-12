---
title: Registração
---

Este tab é constituído por um cabeçalho e por 4 diferentes grelhar, a primeira das quais é aquela que o dentro se inserem os artigos que são movimentados através da registração de depósito; as outras 3 grelhas são utilizadas, dependendo de como se configurou o registro do artigo e a causal de depósito inserida no cabeçalho.

**Cabeçalho registração**:

A aplicação pede, como primeira coisa, de inserir no cabeçalho do tab Registração o código do depósito aonde efetuar a registração. O procedimento insere em automático a data da registração (Data reg.) igual a data atual e o número da registração; que não é que um progressivo por depósito que se zera cada dia, partindo de novo automaticamente pelo número 1. Ambos os dados são editáveis pelo usuário; a data da registração identifica no específico o dia cujo se efetuam os movimentos de depósito que vão ser depois inseridos na adequada grelha, portanto pode também ser modificada estabelecendo por exemplo uma data precedente a data atual. Esta data tem que ser sempre entre os dias de início e fim período inseridas no primeiro tab dos Parâmetros iniciais de Depósito. Se nota que depois da inserção do primeiro artigo na grelha, a data e o número da registração tornam-se Read Only.

O segundo e último dado obrigatório durante a inserção dos movimentos de depósito é a causal de depósito, que se seleciona utilizando a adequada caixa de combinação, aonde são propostas só as causais associadas com o depósito selecionado. Depois de ter inserido esse dado, o usuário pode proceder, se quiser, com a inserção dos movimentos na grelha artigos. Todavia existem outros dados de cabeçalho que se podem compilar, e precisamente:

**CdC**: neste campo, utilizando a adequada 'Ajuda centros de custo' que se explode com um duplo click no mesmo campo, é possível inserir o centro de custo que tem que ser associado com a inteira registração de depósito. Se nota que esta operação se efetua só depois de ter inserido ao menos uma linha dentro da grelha dos artigos; neste caso o procedimento vai impor, para cada linha de movimento, o centro de custo inserido no cabeçalho;

**Doc. int.**: neste campo, chamado 'Documento interno', o usuário pode dar uma específica ulterior que se refere ao motivo pela qual foi criada a registração. Se a registração foi criada em automático pela registração de um aviso de produção, neste campo aparece a indicação que se refere ao número do aviso e a fase pela qual a mesma foi efetuada;

**Versão**: através desta caixa de combinação o usuário pode estabelecer uma versão diferente daquela de default, proposta em automático pelo procedimento;

**Doc. ref.**: neste campo, chamado 'Documento de referência', o usuário pode especificar o motivo principal pela qual foi inserida a registração de depósito. Se a registração foi criada em automático através do carregamento ou o descarregamento de um documento, neste campo se estabelece automaticamente uma descrição paramétrica do documento, aonde aparecem também a descrição do tipo de documento e o seu número. Se a registração foi criada em automático pela registração de um aviso de produção, neste campo aparece o número da ordem de produção pela qual foi efetuado o Aviso de produção. Esse campo resulta editável pelo usuário, mesmo se foi enchido em automático pela aplicação;

**Data doc. ref.**: neste campo, chamado 'Data documento de referência', o usuário pode especificar uma data relativa ao documento de acordo com o que se está inserindo a registração. Se a registração foi criada em automático através do carregamento ou o descarregamento de um documento, neste campo se estabelece automaticamente a data de inserção do documento. Se a registração foi criada em automático pela registração de um Aviso de produção, neste campo aparece a data de efetivo início da ordem de produção pela qual foi efetuado o aviso de produção. Esse campo resulta editável pelo usuário, mesmo se foi enchido em automático pela aplicação;

**Encomenda**: com um duplo click se abre uma 'ajuda encomendas' que permite associar uma encomenda de venda da inteira registração que se está inserindo. Vai ser depois replicada em cada uma das linhas artigo inseridas na grelha;

**Cli./Forn.**: nestes 3 campo se especificam os relativos dados do cliente ou do fornecedor: 'Conta', 'Subconta', 'Razão social', com um duplo click no primeiro campo é possível abrir uma 'Ajuda contas' pela qual se pode selecionar o cliente ou o fornecedor cujo associar a registração. Se a registração foi criada em automático através do carregamento ou o descarregamento de um documento, neste campo se estabelecem automaticamente os dados do cliente ou do fornecedor titular do mesmo documento.

Como já especificado acima, o usuário pode passar para esse ponto a inserção dos movimentos na primeira grelha, aquela que vai contar os artigos a movimentar.

**Grelha artigos/movimentos**:

Nesta grelha o usuário pode inserir, ajudando-se com o adequado 'Ajuda artigos', a lista de artigos a movimentar.

As colunas presentes na grelha são as seguintes:

**Classe**: neste campo, através da adequada caixa de combinação, é possível selecionar a classe do artigo;

**Código artigo**: nesta coluna é possível digitar manualmente o código do artigo, ou com um duplo click neste campo o usuário tem a possibilidade de usufruir da ajuda artigos, que permite procurar o artigo em relação uma série de filtros de pesquisa;

**Variante**: através desta caixa de combinação o usuário pode selecionar e inserir uma das variantes do artigo. Se o artigos não apresenta variantes, a caixa de combinação resulta desativada;

**Opção**: nesta caixa de combinação se específica a opção do artigo. Normalmente é estabelecida em automático a opção de default (opção base). O dado da opção é obrigatório, pena a impossibilidade de salvar a linha do movimento;

**Descrição opções**: nesta coluna se visualiza a descrição da opção inserida;

**UM gest.**: nesta coluna aparece, em Read Only, o código da unidade de medida gestional do artigo;

**UM alt.**: nesta coluna o usuário pode selecionar, através da adequada caixa de combinação, o código de uma das unidades de medida alternativas do artigo, com o objetivo de executar o movimento imputando a quantidade da unidade de medida alternativa escolhida. A quantidade gestional seria em caso calculada automaticamente de acordo com o fator de conversão estabelecido no tab 'UM alternativas' do registro artigo;

**Quantidade movimento**: nesta coluna o usuário tem que obrigatoriamente inserir a quantidade do movimento, expressa em unidade de medida gestional se a colona 'UM alt.' resulta vazia; caso contrário a quantidade seria expressa na unidade de medida alternativa inserida na coluna 'UM alt'. Depois que o usuário inseriu o código do artigo e reconheceu como válido durante o procedimento, a quantidade movimento é inserida automaticamente como igual a 1: a partir daqui o usuário pode modificá-la. A quantidade do movimento vai sempre inserida com valor absoluto, por que, visto que se trata de um movimento de carregamento ou de descarregamento, é determinado pelo tipo de causal utilizada;

**Quantidade gestional**: nesta coluna aparece, em Read Only, a quantidad expressa na unidade de medida gestional do artigo. É idêntica a quantidade movimento se a coluna 'U.M. alt.' resulta vazia; em caso contrário a coluna torna-se editável e o usuário tem que inserir a quantidade gestional manualmente. Vai ser depois calculada automaticamente a quantidade movimento, que teria portanto  um valor igual a quantidade gestional dividida ou multiplicada (de acordo quanto estabelecido nos Parâmetros iniciais de depósito) pelo fator de conversão estabelecido no tab 'UM alternativas' do registro artigo;

**Quantia movimento**: nesta coluna aparece em automático o valor de custo último, custo médio, custo padrão, ou preço de venda, de acordo com a impostação da causal de depósito utilizada na registração. Se na causal foi inserido como custo proposto, 'Nenhum', o procedimento propõe como custo da registração um valor igual a zero. Se a coluna 'UM alt.' resulta vazia, a quantia movimento resulta sempre idêntico a quantia gestional; diversamente, nesta coluna precisaria inserir a quantia unitária do artigo de acordo com a unidade de medida alternativa inserida na linha do movimento. Se nos Parâmetros iniciais de depósito foi ativado, para o ano em curso, o flag 'Mostrar tooltip de estoque nas registrações', o procedimento visualiza, numa tooltip, o estoque daquele artigo no depósito cujo se esta criando o movimento, exatamente no momento em que o usuário está inserindo ou modificando a mesma quantidade; se o estoque não for suficiente e se nos Parâmetros inicial de depósito foi desativado, para o ano em curso, o flag 'Permitir estoque negativo' para aquele depósito, a linha de movimento não vai ser salva;

**Quantia gestional**: nesta coluna aparece em automático o valor de custo último, custo médio, custo padrão, o preço de venda, de acordo com a impostação da causal de depósito utilizada na registração. Se na causal estiver como custo proposto a indicação 'Nenhum', o procedimento propõe como custo da registração um valor igual a zero. Se a coluna 'UM alt.' resulta vazia, a quantia gestional resulta sempre idêntica a quantia movimento; diversamente, nesta coluna, sempre em Read Only, seria calculado o valor unitário do movimento de acordo com a unidade de medida gestional, através da seguinte formula: Quantia movimento*Quantidade movimento/Quantidade gestional;

**Encomenda de venda**: nesta coluna o usuário pode inserir, através da adequada 'Ajuda encomendas' que se explode com um duplo click no campo amarelo, a encomenda de venda que tem de ser associada com a linha do movimento;

**Quantia total**: nesta coluna aparece, não editável, a quantia total da linha do movimento. Resulta pela aplicação da quantidade gestional para a quantia gestional;

**Descrição artigo**: nesta coluna aparece a descrição do artigo. É estabelecida automaticamente logo quando é reconhecido pela grelha o artigo inserido pelo usuário;

**Descrição variante**: nesta coluna aparece a descrição da variante do artigo. É estabelecida automaticamente logo quando é reconhecido pela grelha o código da variante do artigo inserido pelo usuário;

**Número movimento**: nesta coluna aparece o número progressivo do movimento. Parte sempre de 1 e é um simples progressivo que se zera quando se abre uma outra registração de depósito. O campo é Read Only e não permite a recuperação manual dos números de movimento, no caso de eliminação manual de linhas movimento.

Resumindo, o usuário para inserir um movimento na grelha tem que digitar o código artigo na adequada coluna e ajudando-se com a tooltip faze-lo reconhecer ao procedimento através do botão 'Enter', ou utilizar a 'Ajuda artigos'; pode depois inserir a variante do artigo e a eventual unidade de medida alternativa, em seguida a quantidade do movimento (ou gestional, de acordo com as circunstâncias já expostas no parágrafo), o valor do movimento, a eventual encomenda, e enfim pode descer na linha abaixo salvando portanto a linha do movimento.

Quando o usuário procede com o salvamento da linha do movimento, o procedimento pode executar corretamente o salvamento e tornar disponível a linha sucessiva para a inserção de um novo movimento, ou pode impor ao usuário de completar a inserção através do carregamento dos lotes e/ou números de série nas adequadas grelhas abaixo.

**Grelha lotes**:

Nesta grelha, ativa só se a causal de depósito utilizada tem o flag 'Gest. lotes' ativado e se também o artigo foi desenhado como artigo gerido a lotes, o usuário tem que obrigatoriamente inserir as informações associadas com o lote ou com os lotes a movimentar.

A registração de depósito pode ser de carregamento ou de descarregamento; de acordo com 2 diferentes casos, a grelha dos lotes tem diferentes utilizações e impostações.

1º caso: Registração de carregamento

Quando o usuário procede com o salvamento da linha do movimento, o procedimento deixa em 'Update' a mesma linha, invitando o usuário a mover-se na grelha lotes e a indicar os detalhes dos lotes a carregar.

As  colunas presentes na grelha são as seguintes:

**Auto**: apertando este botão, que se encontra no começo da primeira linha da grelha, o procedimento executa a criação automático do lote, de acordo com o Tipo código lote associado com o registro do artigo e de acordo com o número de dias de vencimento inseridos sempre no registro;

**Tipos cód.**: nesta coluna se insere automaticamente, com a pressão do botão 'Auto', o tipo código lote inserido no registro artigo. É mesmo assim modificável pelo usuário;

**Tipos lote**: nesta coluna pode ser opcionalmente inserido pelo usuário o tipo lote, através da adequada caixa de combinação, que atinge pela homônima tabelaa. Se trata de um dado não abrigatório;

**Lotes nº**: nesta coluna se inseri automaticamente, com a pressão do botão 'Auto', o código do lote a carregar, construído de acordo com as regras estabelecidas nos parâmetros iniciais de depósito associadas com o tipo código lote inserido. É mesmo assim editável pelo usuário, que poderia portanto evitar de utilizar o botão 'Auto' e inserir manualmente o código do lote. O campo é de cor amarela porque o usuário, em alternativa a pressão do botão 'Auto', poderia decidir de executar um novo carregamento de um lote já existente no banco de dados; nesta caso com um duplo click no campo amarelo, se teria modo de, através duma adequada 'Ajuda lotes', escolher o lote a carregar filtrando-o entre os lotes geridos até aquele momento no banco de dados e na sociedade cujo se está trabalhando;

**Lote forn.**: nesta coluna se insere manualmente o código do Lote fornecedor, portanto normalmente o nome que o fornecedor atribui ao lote. Se trata de um campo não gerável automaticamente durante as operações de carregamento e não obrigatório. Se o código lote é inserido atingindo pela 'Ajuda lotes', esta coluna seria compilada automaticamente com a data de início do lote pré escolhido;

**Data venc.**: neste campo aparece a data de vencimento do lote, editável pelo usuário, que é calculado, partindo da data de início e somando os dias de validade do lote inseridos no tab Lotes/NS do registro artigo. Se o código lote foi inserido atingindo pela 'Ajuda Lotes', esta coluna vai ser compilada automaticamente com a data de vencimento do lote pré escolhido;

**Quantidade**: neste campo aparece a quantidade que se quer atribuir ao lote inserido. No caso de criação do lote através da pressão do botão 'Auto', a quantidade é enchida automaticamente com a quantidade contida na linha do movimento; é porém editável pelo usuário,  a qual poderia decidir de modificar a quantidade, diminuindo-a, e executando uma ulterior pressão sobre o botão 'Auto', mas na linha abaixo: nesse modo se vai a criar um novo lote, com características parecidas com o lote já inserido mas com o código lote diferente;

**Fechado**: o flag 'Fechado', se ativo, indica que o lote foi completamente descarregado pelo depósito. Logicamente no caso de carregamento do lote o flag resulta sempre desativado;

**L. vend.**: o flag 'Loto vendível', se ativo, evidência que o lote é disponível para ser retirado dentro dos documentos de venda, de produção ou nas registrações de depósito. Se trata praticamente de uma possibilidade que tem o usuário para definir a possibilidade de retirar ou não um lote, em alternativa a gestão, mas complexa e articulada, dos estados lote. Portanto no caso do carregamento automático do lote, o flag resulta ativo de default, mesmo se o usuário pode decidir já nesta fase de desativá-lo, tornando-o portanto já disponível o mesmo lote;

**Descrição**: neste campo o usuário pode inserir uma nota relativa o lote que se está carregando. Se o código lote foi inserido atingindo pela 'ajuda lotes', esta coluna seria compilada automaticamente com a nota associada com o lote escolhido.

Depois de ter completada a inserção dos lotes na grelha 'Lotes', fazendo em modo que a quantidade da linha do movimento seja igual a soma das quantidades dos lotes carregados. O usuário pode prover a salvar a linha do movimento sem mais receber mensagem de erro pelo procedimento.

2º caso: Registração de descarregamento

Quando o usuário procede com o salvamento da linha do movimento, o procedimento deixa em 'Update' a mesma linha, invitando o usuário a mover-se na grelha Lotes e a indicar os detalhes dos lotes a descarregar.

As colunas presentes na grelha são as seguintes:

**Lotes nº**: nesta coluna com um duplo click no campo amarelo o usuário tem modo, através da adequada 'Ajuda lotes', de escolher o lote a descarregar filtrando-o entre os lotes disponíveis no depósito da registração;

**Lote forn.**: nesta coluna se compila automaticamente com o lote fornecedor enganchado com o lote pré escolhido;

**Data início**: neste campo aparece a data de início do lote pré escolhido;

**Data venc.**: neste campo aparece a data de vencimento do lote pré escolhido;

**Quantidade**: neste campo aparece a quantidade que se quer descarregar do lote pré escolhido. É editável pelo usuário, o qual poderia portanto decidir de modificar a quantidade, diminuindo-a, e executando uma ulterior pesquisa através da ajuda lotes mas na linha abaixo;

**Localização**: neste campo se visualiza a localização cujo é carregado o lote pré escolhido.

Depois de ter completado a inserção dos lotes a descarregar na grelha 'Lotes', fazendo em modo que a quantidade da linha do movimento seja igual a soma das quantidades dos lotes descarregados, o usuário pode prover a salvar a linha do movimento sem mais receber mensagens de erro pelo procedimento.

**Grelha números de série**:

Nesta grelha, ativa só se a causal de depósito utilizada tem o flag 'Gest. lotes' ativado e se também o artigo foi desinhado como artigo gerido a número de série, o usuário tem que obrigatóriamente inserir as informações associadas com o números de série a movimentar.

A registração de depósito pode ser de carregamento ou de descarregamento; de acordo com 2 diferentes casos, a grelha números de série tem diferentes utilizações e impostações.

1º caso: Registração de carregamento

Quando o usuário proceder com o salvamento da linha do movimento, o procedimento deixa em 'Update' a mesma linha, invitando o usuário a se mover na grelha Números de série e a indicar os detalhes dos números de série a carregar.

As colunas presentes na grelha são as seguintes:

**Auto**: apertando este botão, que se encontra no começo da primeira linha da grelha, o procedimento executa a criação automática do número de série, de acordo com o Tipo código NS associado com o registro do artigo e em relação o número de dias de vencimento inseridos sempre no registro. Porém se cria só o primeiro número de série; na grelha precise inserir um número de linhas iguais a quantidade inserida na grelha do movimento. Portanto, por exemplo, se a linha movimento apresenta uma quantidade de 30 peças, na grelha dos números de série precisa inserir 30 números de série, um para cada linha da grelha. O sistema mais rápido para criar automaticamente os números de série nesta grelha é aproveitar do campo externo da grelha chamado 'Proposta automática número de série' aonde se pode estabelecer o primeiro dos números de série que se quer carregar e depois se pode clicar no botão 'Propor NS', que provê, partindo do primeiro número de série inserido, a criar todos os outros números de série pedidos pela quantidade da linha do movimento; os números de série vão ser criardo em progressivo partindo do primeiro inserido;

**Tipos NS**: nesta coluna se insere automaticamente, com a pressão do botão 'Auto', o tipo código inserido no registro artigo. É mesmo assim modificável pelo usuário;

**Número de série**: nesta coluna se insere automaticamente, com a pressão do botão 'Auto', o código do NS a carregar, construído de acordo com as regras estabelecidas nos parâmetros iniciais de depósito associados com o tipo código NS inserido. É mesmo assim editável pelo usuário.

Depois de ter completado a inserção dos lotes na grelha 'Números de série', fazendo em modo que a quantidade da linha do movimento seja igual a soma ao número dos números de série inseridos na grelha, o usuário pode prover a salvar a linha do movimento sem mais receber mensagens de erro pelo procedimento.

2º caso: Registração de descarregamento

Quando o usuário procede com o salvamento da linha do movimento, o procedimento deixa em 'Update' a mesma linha, inviando o usuário a mover-se na grelha números de série e a indicar os detalhes dos números de série a descarregar.

As colunas presentes na grelha são as seguintes:

**Nº**: nesta coluna se visualiza simplesmente o número da linha; se trata de um progressivo gerado automaticamente;

**Número de série**: nesta coluna o usuário tem que inserir, através dum duplo click no campo amarelo, os números de série a descarregar, atingindo pela adequada 'Ajuda números de série.

Depois de ter completado a inserção dos lotes a descarregar na grelha 'Números de série', fazendo em modo que a quantidade da linha do movimento seja igual a soma ao número dos números de série inseridos na grelha, o usuário pode prover a salvar a linha do movimento sem mais receber mensagens de erro pelo procedimento.

**Grelha variantes**:

Nesta grelha o usuário pode gerir a movimentação do artigo com variantes utilizando a possibilidade de aproveitar a presença de um 'Atributo' de default, que foi inserido pelo tab 'Atributos' do registro artigo. Estabelecendo o atributo de default na adequada caixa de combinação que aparece logo acima da grelha, o usuário pode ligar a mesma linha do movimento com mais quantidades de diferentes variantes do mesmo artigo, permitindo portando ao procedimento executar automaticamente a soma das quantidades de cada linha de variantes inseridas e de reportá-la na quantidade gestional da linha movimento.

A grelha é composta simplesmente por uma coluna aonde se pode selecionar a variante do artigo e uma coluna aonde precisa inserir a quantidade para aquela variante. A grelha é utilizável só se no registro artigo está presente um atributo de default.

O modo de inserção dos dados dentro desta rede não muda em relação ao fato de que se trata do registro de carregamento ou descarregamento.

**Grelha centros de custo de cada movimento**:

Nesta grelha o usuário pode enganchar a linha movimento um ou mais centros de custo, atribuindo portanto diferentes quantidades do movimento em diferentes centros de custo.

A grelha se compõe por uma coluna cujo aparece um campo de cor amarela, aonde o usuário pode, exercitando um duplo click, abrir a 'Ajuda centros de custo', através da qual se pode inserir o centro de custo na linha da grelha, completando depois a linha com a quantidade cujo esse centro de custo tem que se referir, Se a soma das quantidades inseridas na linha das grelhas dos centros de custo é diferente da quantidade gestional da linha movimento, o procedimento dá um aviso e impede de salvar o movimento.

Se observa que de depois de ter inserido os centros de custo em cada movimento da registração o usuário estabelece o centro de custo no cabeçalho da mesma, todos os centros de custo inseridos em cada linha movimento são substituídos daquele do cabeçalho.






