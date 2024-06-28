---
title: Cabeçalho
sidebar_position: 1
---

Com a inserção do cliente são propostos, em automático, todos os dados específicos do tab 'Cabeçalho', de acordo com os dados estabelecidos em precedência no registro cliente. Os dados propostos, se foram especificados no registro, são: 

**Expedição**: é proposta a informação inserida no registro cliente, tab 'Expedições' (tabela de referência 'Expedições'); 

**Frete**: é proposta a informação inserida no registro cliente, tab 'Expedições' (tabela de referência 'Frete'); 

**Embalagem**: é proposta a informação inserida no registro cliente, tab 'Expedições' (tabela de referência 'Embalagem'); 

**País**: é proposta a informação inserida no tab 'Dados comuns' no registro cliente (tabela de referência 'País'); 

**Área**: é proposta a informação inserida no registro cliente, tab 'Expedições' (tabela de referência 'Áreas'); 

**Catálogo**: é proposta a informação inserida no registro cliente. tab 'Catálogos', mas só se existe um oferta de defautl (tabela de referência 'Catálogos de venda'); 

**Da** ** (data validade)**: o catálogo selecionado é válido partindo desta data; 

**A (data validade)**: o catálogo selecionado é válido até esta data;

**Língua**: é proposta a informação inserida no tab 'Dados comuns' do registro cliente; 

**Moeda**: é proposta a informação inserida no registro cliente, tab 'Administrativo' (tabela de referência 'Moedas'); 

**Câmbio moeda**: se a moeda da sociedade é igual aquela do documento, o valor reportado vai ser 1, se não, o valor vai ser retomado do Câmbio moedas ou do Câmbio fixos para o euro; 

**Data moeda**: data na qual é calculado o valor do câmbio como relação entre as moedas da sociedade e aquela do cliente, de acordo com as impostações na tabela Câmbios moedas; 

**Notas iniciais**: podem-se inserir algumas notas que foram inseridas em precedência no 'Notas codificadas'. Para este usuário precisa efetuar duplo click no campo 'Notas iniciais' para abrir 'Ajuda notas codificadas' e para selecionar os dados, ou com a tecla direita do mouse pode abrir uma janela para poder especificar um texto muito longo de nota, se o campo contém um valor, vai ser trocado a cor do fundo do campo; 

**Anotações registro**: é proposta a informação inserida no registro cliente no tab 'Administrativo', ou com a tecla direita do mouse pode abrir uma janela para pode especificar um texto muito longo de nota, se o campo contém um valor vai ser trocado a cor do fundo do capo; 

**Destino e destinatário**: é proposta a informação inserida no registro cliente, tab 'Expedições'; 

**Usuário**: permite inserir o usuário que cria o documento (tabela de referência 'Procurar pessoal' na Área administrativa/pessoal. Esta opção tem de ser estabelecida nos Parâmetros do mesmo documento; 

**Encomenda**: permite ligar o documento com uma encomenda de venda; 

**Ref.** ** FT e tipo**: depois de ter criado o estorno de uma fatura, o usuário precisa ligar as duas faturas inserindo no estorno o número, a data e o tipo da fatura de origem; 

**Reg.Cont** **.**: reporta o número, a data e o protocolo da registração contábil derivada da contabilização da fatura; 

**Estado doc.**: o dado se refere a tabela dos estados documento, o dado precisa ser inserido pelo usuário e pode ser utilizado pelos procedimentos de replicação do gestional, instalados para a gestão de uma sede com mais pontos de venda; 

**EDI**: é a data de transmissão do documento dos procedimentos de EDI; 

**Prazo**: é a data de prazo para o cálculo dos vencimentos de pagamento.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as faturas de venda. |
| Execução da ordem cliente | Se refere ao procedimento para criar uma fatura da ordem cliente. |
| Criar a fatura da retirada | Permite retomar os artigos por uma lista de retirada. |
| Criar a fatura dos catálogos de venda | Permite retomar os artigos pelos catálogos de venda. |
| Criar a fatura da lista de retirada | Permite retomar os artigos da lista de retirada. |
| Ajuda destinatário/destino | Permite visualizar e inserir os destinatários/destinos pelo registro cliente. |
| Cancelar a fatura | Executa o procedimento para cancelar uma fatura precedentemente inserida. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document manager](/docs/guide/operations-with-data/document-manager)  | Gestão do armazenamento documental associado a máscara em uso. |






