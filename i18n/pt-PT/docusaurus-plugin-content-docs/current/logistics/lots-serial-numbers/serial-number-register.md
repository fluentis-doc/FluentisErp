---
title: Modificar número de série
sidebar_position: 5
---

Esta janela visualiza o detalhe do lote e se compõe de 4 diferentes seções: uma primeira seção cujo se encontram os dados gerais do cabeçalho do mesmo lote e outras 3 seções chamadas 'Documentos de carregamento', 'Quantidade e documento para o descarregamento número de série' e 'Documentos de descarregamento'.

**Seção 1 - Cabeçalho lote**:

Nesta seção se visualizam, com a possibilidade de modificar alguns, os dados principais relativos ao lote e em particular:

**Artigo**: nos 3 campos relativos se visualizam a classe, o código e a descrição do artigo cujo se refere o número de série. Se trata de uma artigo com o flag 'Gestão NS' ativado no tab lotes/NS do registro artigo, caso contrário não seria possível executar o carregamento do lote para o mesmo artigo;

**Variante**: nos 2 campos relativos se visualizam o código e a descrição da variante do artigo cujo se refere o número de série;

**Número de série**: neste campo aparece o código do número de série. Se trata de um campo editável pelo usuário, embora durante as operações de carregamento podem ser gerados automaticamente de acordo com algumas regras que vão ser estabelecidas no tab 'Códigos número de série' presente nos parâmetros iniciais de depósito. Se insere antes de tudo um código e uma descrição do tipo código número de série, se salva a linha e depois se decide quais parâmetros se quer utilizar para a composição do tipo código lote apenas criado. Para cada parâmetro utilizado se pode decidir por quantos caracteres tem de ser formado e eventualmente também o caráter de enchimento a utilizar. Por exemplo, com o parâmetro 'Número progressivo' estabelecendo como caráter de enchimento 0 e como largura 5 vão ser criados Números de série que tem como primeiro número o 00000, depois o 00001, 00002 e assim pra frente. O tipo código número de série tem de ser enganchado ao registro artigo no adequado campo colocado no tab 'Lotes/NS', para fazer em modo que nos procedimentos que criam automaticamente o código número de série para o artigo em questão o mesmo número de série vai ser gerado de acordo com as regras estabelecidas no tab 'Códigos número de série' dos parâmetros iniciais de depósito e associados com o tipo código número de série enganchado ao artigo. O campo é alfanumérico e pode chegar a largura de 50 caracteres como limite máximo;

**Código lote**: neste campo aparece o código do lote cujo faz parte o número de série. O artigo que se refere o número de série poderia ser gerido também a lotes, portanto neste caso um lote de 100 peças, por exemplo, poderia ser composto de 100 diferentes números de série. O mesmo número de série poderia também pertencer a lotes diferentes do mesmo artigo, ou a lotes de artigos diferentes;

**Depósito**: nesses 2 campos aparecem o código e a descrição do depósito cujo foi carregado o número de série;

**Carreg./Descar.**: nestes 2 campos aparecem as informações que se referem ao estado do lote número de série, cujo já foi indicado no paragrafo relativo a grelha de resultado da Pesquisa dos números de série;

**Data início**: neste campo aparece normalmente a data cujo foi carregado o número de série, editável pelo usuário. Se o número de série foi carregado através da registração de depósito, esta data vai ser proposta idêntica a data cujo foi criada a registração; se o número de série foi carregado através do carregamento de uma nota de entrega de compra ou registração de retorno de empreiteiro, essa data vai ser estabelecida como igual a data da nota de entrega de compra ou de empreiteiro (a menos que dentro da nota de entrega o usuário não a modificada manualmente); se o número de série foi carregado através da registração de um aviso de produção, esta data vai ser proposta como idêntica a data do aviso de produção;

**Data fim**: neste campo aparece a data de vencimento do número de série, editável pelo usuário, que vai ser calculada, na sede da criação do lote e portanto do carregamento do relativo movimento de depósito, partindo da data de início e somando os dias de validade do número de série inseridos no tab lotes/NS do registro artigo;

**Carregamento reg. dep.**: neste campo aparece por estendido a informação que se refere a registração de depósito que carregou o número de série.

**Seção 2 - Documentos de carregamento**:

Nesta seção vão ser visualizados os dados fundamentais dos documentos que contribuíram a efetuar o carregamento do número de série. Normalmente aparece sempre o detalhe da registração de depósito que carregou o número de série; se essa foi gerada através do carregamento de um documento (nota de entrega, retorno, etc.), vai então aparecer uma linha aonde saem os detalhes também desse documento. Esses dados são visualizados numa grelha cujo aparecem as seguintes colunas:

**Documento**: neste campo se visualiza o tipo de documento que gerou o carregamento do número de série. Pode ser uma registração de depósito, uma nota de entrega de compra ou um retorno de empreiteiro;

**Número**: neste campo se visualiza o número do documento;

**Data**: neste campo se visualiza a data do documento;

Observe que com um simples duplo click na linha do documento é possível, de acordo com os direitos do usuário, abrir só na visualização o documento relativo.

**Seção 3 - Quantidade e documento para o descarregamento lote**:

Nesta seção se visualizam os dados fundamentais do primeiro documento, em ordem cronológico, que utilizou o número de série. Se o número de série foi carregado diretamente através duma registração de depósito, nessa grelha não aparece nada, por que a registração de depósito do número de série aparece sempre na seção 4. Esses dados são visualizados numa grelha aonde aparecem as seguintes colunas:

**Tipo documento**: neste campo se visualiza o tipo de documento que tem por primeiro utilizado o número de série. Pode ser uma ordem de produção, uma ordem cliente, uma nota de entrega de venda, uma fatura de venda, uma lista de retirada, uma nota de entrega de empreiteiro e um retorno de empreiteiro;

**Número**: neste campo se visualiza o número do documento;

**Data**: neste campo se visualiza a data do documento;

Observe que com um simples duplo click na linha documento é possível, de acordo com os direitos do usuário, abrir só na visualização o documento relativo.

**Seção 4 - Documentos de descarregamento**:

Nesta seção se visualizam os dados fundamentais da registração de depósito que descarregou o número de série e alguns outros eventuais documentos cujo número de série foi utilizado, em relação o documento selecionado na gelha da seção 3. Esses dados foram visualizados numa grelha cujo aparecem as seguintes colunas:

**Documento**: neste campo se visualiza o tipo de documento dentro da qual está presente o número de série, em relação o documento selecionado na grelha da seção 3. Isso pode ser uma nota de entrega de venda, uma fatura de venda, uma lista de retirada, uma nota de entrega de empreiteiro e um retorno de empreiteiro;

**Número**: neste campo se visualiza o número do documento;

**Data**: neste campo se visualiza a data do documento.

Observe que com um simples duplo click na linha do documento é possível, de acordo com os direitos do usuário, abrir só na visualização o documento relativo.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão que salva as mudanças feitas aos dados do número de série. |






