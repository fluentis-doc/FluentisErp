---
title: Cabeçalho
sidebar_position: 3
---

Depois da inserção dos dados acima indicados, o campo do fornecedor também pode ser modificado. A escolha do fornecedor pode acontecer através da ajuda de campo. Com a inserção do fornecedor vão ser propostos em automático todos os dados específicos do tab 'Cabeçalho', em relação os dados estabelecidos precedentemente no registro fornecedor. Os dados propostos, se especificados no registro, são:

**Expedição**: é proposta a informação inserida no registro fornecedor, tab 'Expedições' (tabela de referência 'Expedições');

**Frete**: é proposta a informação inserida no registro fornecedor, tab 'Expedições' (tabela de referência 'Frete');

**Embalagem**: é proposta a informação inserida no registro fornecedor, tab 'Expedições' (tabela de referência 'Embalagens');

**País**: é proposta a informação inserida no tab 'Dados comuns' no registro fornecedor (tabela de referência 'Áreas');

**Catálogo**: é proposta a informação inserida no registro fornecedor no tab 'Catálogos', mas só se existe uma oferta de default (tabela de referência 'Catálogos fornecedores');

**Da data validade**: o catálogo selecionado é válido partindo desta data;

**A (data validade)**: o catálogo selecionado é válido até esta data;

**Língua**: é proposta a informação inserida no tab 'Dados comuns' do registro fornecedor;

**Moeda**: é proposta a informação inserida no registro fornecedor no tab 'Administrativo' (tabela de referência 'Moedas');

**Câmbio moeda**: se a moeda da sociedade é igual aquela do documento, o valor reportado vai ser 1, se não o valor vai ser pego do 'Câmbios moedas' ou do 'Câmbios fixos para o Euro';

**Data moeda**: data cujo é calculado o valor do câmbio como relação entre a moeda da sociedade e aquela do fornecedor, em relação as impostações da tabela 'Câmbios moedas';

**Notas iniciais**: podem-se inserir algumas notas precedentemente inseridas na 'Notas codificadas'. Para abrir 'Ajuda notas codificadas' e para selecionar os dados, o usuário tem que executar um duplo click no campo 'Notas iniciais', ou com o botão direito do mouse pode abrir uma janela para poder especificar um texto de nota muito longo; se o campo contém um valor vai ser trocada a cor do fundo do campo;

**Encomenda**: permite associar o documento com uma encomenda;

**Ref. FA e tipo**: depois de ter criado o estorno de uma fatura, o usuário tem de associar as duas faturas inserindo no estorno o número, data e tipo da fatura de origem;

**Reg. cont.**: reporta o número, a data e o protocolo da registração contábil derivada pela contabilização da fatura;

**Estado documento**: o dado refere-se a tabela dos estados documento, o dado tem de ser inserido pelo usuário e pode ser utilizado pelos procedimentos de replicação do gestional instalados para a gestão de uma sede com alguns pontos de venda.

Alguns campos do cabeçalho da fatura podem ter uma gestão um pouco diferente daquela de outros documentos. Esses são:

**Nossa referência**: quando é completado o procedimento 'Execução da ordem', é proposta também a informação presente no campo homônimo da ordem. Essa transferência é válida só se a fatura foi criada através da retirada dos dados de uma só ordem. Se a fatura foi emitida por uma só nota de entrega através do procedimento 'Valorização notas de entrega de compra', esse campo propõe a informação presente no campo homônimo da nota de entrega;

**Vossa referência**: quando é completado o procedimento 'Execução da ordem', é proposta também a informação presente no campo homônimo da ordem. Essa transferência é válida só se a fatura foi criada através da retirada dos dados de uma só ordem. Se a fatura foi emitida por uma só nota de entrega através do procedimento 'Valorização notas de entrega de compra', esse campo propõe a informação presente no campo homônimo da nota de entrega;

**Estado fatura**: quando é criada a fatura, ela não tem nenhum flag ativo. Para contabilizar a fatura é necessário que ela tenha o flag 'Controlada' ativo. O flag 'Contabilizada' é automaticamente selecionada quando a fatura suoporta o procedimento a contabilizar; o flag 'Carregada' torna-se ativo quando a fatura suporta o procedimento de carregamento e é tirado com o procedimento de restauração da operação. Existe também a possibilidade de anular a fatura através o flag 'Anulada'.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as faturas de compra. |
|  [Execução da ordem fornecedor](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note)  | Refere-se ao procedimento para criar uma fatura duma ordem fornecedor. |
| Abrir o registro | Permite visualizar os dados do registro. |
| Cancelar os pagamentos | Permite cancelar os pagamentos inseridos no cabeçalho; os pagamentos são retomados pelo registro. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document manager](/docs/guide/common/operations-with-data/document-manager)  | Gestão do armazenamento documental associado a máscara em uso. |






