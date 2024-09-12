---
title: Modificar lote
sidebar_position: 4
---

Esta janela visualiza o detalhe do lote e se compõe de 4 diferentes seções: uma primeira seção cujo se encontram os dados gerais do cabeçalho do mesmo lote e outras 3 seções chamadas 'Documentos de carregamento', 'Quantidade e documento para o descarregamento do lote', e 'Documentos de descarregamento'.

**Seção 1 - Cabeçalho lote**:

Nesta seção se selecionam, com a possibilidade de modificar alguns, os dados principais relativos o lote e em particular:

**Artigo**: nos 3 campos relativos se visualizam a classe, o código e a descrição do artigo cujo se refere o lote. Se trata de um artigo com o flag 'Gestão lotes' ativado no tab Lotes/NS do registro artigo, se não teria sido possível executar o carregamento do lote para o mesmo artigo;

**Variante**: nos 2 campos relativos se visualizam o código e a descrição da variante do artigo cujo se refere o lote;

**Lote nº**: neste campo aparece o código do lote. Trata-se de um campo editável pelo usuário, embora durante as operações de carregamento pode ser gerido automaticamente de acordo com algumas regras que vão ser estabelecidas no tab 'Códigos lote' presente nos Parâmetros iniciais de depósito. Se insere antes de tudo um código e uma descrição do tipo código lote, se salva a linha e depois se decide quais parâmetros se quer utilizar para a composição do tipo código lote apenas criado. Para cada parâmetro utilizados se pode decidir por quantos caracteres tem de ser formado e eventualmente também o caráter de enchimento a utilizar. Por exemplo, com o parâmetro 'Número progressivo' estabelecendo como caráter de enchimento '0' e como largura '5', vão ser criados lotes que vão ter como primeiro número o 00000, depois o 00001, 00002, e assim vai. O tipo código lote tem de ser enganchado com o registro artigo no adequado campo colocado no tab 'Lotes/NS', em modo que nos procedimentos que criam automaticamente o código lote pelo o artigo em questão, o mesmo lote vai ser gerado de acordo com as regras estabelecidas no tab 'Códigos lotes' dos parâmetros iniciais de depósito associados com o tipo código lote enganchado com o artigo. O campo é alfanumérico e pode alcançar a largura de 50 caracteres como o limite máximo. Não se trata do identificativo do lote, por que é possível efetuar mais carregamentos em diferentes momentos do mesmo lote; neste caso vai aparecer mais linhas com o mesmo código lote dentro da grelha Procurar lotes;

**Lote fornecedor**: neste campo aparece o código do Lote fornecedor, portanto normalmente o nome que o fornecedor atribui ao lote. Se trata de um campo editável pelo usuário e não gerido automaticamente durante as operações de carregamento. Esse também pode alcançar a largura de 50 caracteres como limite máximo e pode se idêntico também por lotes diferentes de artigos diferentes;

**Data início validade**: neste campo aparece normalmente a data cujo foi carregado o lote, editável pelo usuário. Se o lote foi carregado através da registração de depósito, essa data vai ser proposta idêntica a data cujo foi criada a registração; se o lote foi carregado através do carregamento de uma nota de entrega de compra ou de registração retorno de empreiteiro, essa data vai ser estabelecida como igual a data da nota de entrega de compra ou de empreiteiro (só se dentro da nota de entrega o usuário não a tenha modificado manualmente); se o lote foi carregado através da registração de um aviso de produção, essa data vai ser proposta como idêntica a data do aviso de produção;

**Data vencimento**: neste campo aparece a data de vencimento do lote, editável pelo usuário, que é calculada, na sede da criação do lote e portanto de carregamento do relativo movimento de depósito, partindo da data de início e somando os dias de validade do lote inserido no tab lotes/NS do registro artigo;

**Quantidade**: neste campo aparece a quantidade inicial carregada pelo lote através do primeiro documento que carregou o mesmo lote;

**Depósito**: nestes 2 campos aparecem o código e a descrição do depósito cujo foi carregado o lote;

**Encom./Ano**: neste campo aparece a encomenda de venda, editável pelo usuário, associada ao lote. Normalmente se trata da encomenda de venda enganchada a linha do artigo que foi carregada e que carregou o mesmo lote;

**Notas**: neste campo aparece as notas inseridas na registração de depósito contextualmente o carregamento do lote. O campo é editável pelo usuário e visualizável também em Procurar lotes, como acima especificado;

**Fechado**: o flag 'Fechado', se ativo, indica que o lote foi completamente descarregado pelo depósito. Precisa notar que depois do encerramento de depósito todos os lotes restantes do ano que se está fechando vão ser automaticamente estabelecidos como 'Fechados', por que vão ser recarregados, no estoque inicial do ano novo, os lotes 'gêmeos' com as quantidades restantes no fim do ano precedente o encerramento;

**Estado lote**: a caixa de combinação visualiza o estado do lote. É modificável pelo usuário e chama os dados que vêm da adequada tabela 'Estado lotes'. O estado do lote determina a possibilidade de utilizar ou não o lote nos documentos de venda, de produção e nas registrações de descarregamento de depósito. Se trata de uma gestão não obrigatória, o usuário não precisa explorar a funcionalidade da tabela 'Estados lote';

**Avaliação lote**: a caixa de combinação visualiza o dado relativo a avaliação do lote. É modificável pelo usuário e chama os dados que vêm da adequada tabela 'Avaliação lotes'. Este dado tem funções descritivas, sem ter portanto nenhuma influência particular sobre os procedimentos e janelas do Ideale, resultando portanto esse também facultativo;

**L. vend.**: o flag 'Lote vendível', se ativo, evidência que o lote é disponível para ser retirado dentro dos documentos de venda, de produção ou nas registrações de depósito. Se trata praticamente de uma possibilidade que o usuário em para definir a possibilidade de retirar o não um lote, em alternativa a gestão, mas complexas e articulada, dos estados lote;

**Seção 2 - Documentos de carregamento**:

Nesta seção se visualizam os dados fundamentais dos documentos que contribuirão a efetuar o carregamento do lote. Normalmente aparece sempre o detalhe da Registração de depósito que carregou o lote; se essa foi gerada através do carregamento de um documento (nota de entrega, retorno, etc.), vai aparecer uma linha com os detalhes também desse documento. Esses dados são visualizados numa grelha aonde aparecem as seguintes colunas:

**Documento**: neste campo se visualiza o tipo de documento que gerou o carregamento do lote. Pode ser uma registração de depósito, uma nota de entrega de compra ou um retorno de empreiteiro;

**Número**: neste campo se visualiza o número do documento;

**Data**: neste campo se visualiza a data do documento;

Observe que com um simples duplo click na linha do documento é possível, de acordo com os direitos do usuário, abrir só na visualização o documento relativo.

**Seção 3 - Quantidade e documento para o descarregamento do lote**:

Nesta seção se visualizam os dados fundamentais do primeiro documento, em ordem cronológica, que utilizou o lote. Se o lote foi descarregado diretamente através duma registração de depósito, nessa grelha não vai aparecer nada, por que a registração de depósito de descarregamento do lote aparece sempre na seção 4. Esses dados são visualizados numa grelha aonde aparecem as seguintes colunas:

**Quantidade**: neste campo se visualiza a quantidade do lote que foi utilizada no documento;

**Documento**: neste campo se visualiza o tipo de documento que tem como primeira coisa o lote utilizado. Pode ser uma ordem de produção, uma ordem cliente, uma nota de entrega de venda, uma fatura de venda, uma lista de retirada, uma nota de entrega de empreiteiro, um retorno de empreiteiro;

**Número**: neste campo se visualiza o número do documento;

**Data**: neste campo se visualiza a data do documento;

Observe que com um simples duplo click na linha do documento é possível, de acordo com os direitos do usuário, abrir em só visualização o documento relativo.

**Seção 4 - Documentos de descarregamento**:

Nesta seção se visualizam os dados fundamentais da registração de depósito que descarregou o lote e os outros eventuais documentos aonde o lote foi utilizado, em relação o documento selecionado na grelha da seção 3. Esses dados são visualizados numa grelha aonde aparecem as seguintes colunas:

**Documento**: neste campo se visualiza o tipo de documento dentro da qual está presente o lote, de acordo com o documento selecionado na grelha da seção 3. Pode ser uma nota de entrega de venda, uma fatura de venda, uma lista de retirada, uma nota de entrega de empreiteiro, e um retorno de empreiteiro;

**Número**: neste campo se visualiza o número do documento;

**Data**: neste campo se visualiza a data do documento.

Observe que com um simples duplo click na linha do documento é possível, de acordo com os direitos do usuário, abrir só na visualização o documento relativo.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão que salva as mudanças feitas nos dados do lote. |
| Visualiza os atributos de lote | Abre uma ulterior janela dentro da qual o usuário pode atribuir ao lote uma série de atributos, atingindo as tabelas do Codificador. |






