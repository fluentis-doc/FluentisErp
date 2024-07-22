---
title: Cabeçalho
sidebar_position: 2
---

Com a inserção do cliente são propostos, em automático, todos os dados específicos do tab ‘cabeçalho', segundo os dados estabelecidos precedentemente no registro cliente.

Os dados propostos, se foram especificados no registro, são:

**Expedição**: é proposta a informação inserida no registro cliente, tab ‘Expedições' (tabela de referência ‘Expedições');

**Frete**: é proposta a informação inserida no registro cliente, tab ‘Expedições' (tabela de referência ‘Frete');

**Embalagem**: é proposta a informação inserida no registro cliente, tab ‘Expedições' (tabela de referência ‘Embalagem');

**País**: é proposta a informação inserida no tab ‘Dados comuns' no registro cliente (tabela de referência ‘País');

**Áreas**: é proposta a informação inserida no registro cliente, tab ‘Expedições' (tabela de referência ‘Áreas');

**Catálogo**: é proposta a informação inserida no registro cliente no tab Catálogos, mas só se existe uma oferta de default (tab de referênciao ‘Catálogos de venda');

**Da (data validade)**: o catálogo selecionado é válido partindo desta data;

**A (data validade)**: o catálogo selecionado é válido até esta data;

**Língua**: é proposta a informação inserida no tab ‘Dados comuns' do registro cliente;

**Moeda**: é proposta a informação inserida no registro cliente no tab ‘Administrativo' (tabela de referência ‘moedas');

**Troca de moeda**: se a moeda da sociedade é igual aquela do documento, o valor relatado será 1, caso contrário, o valor será tomado pelas Trocas moedas ou pelas Trovas fixas para o euro;

**Data moeda**: data o qual se calcula o valor da troca como relação entre a moeda da sociedade e aquela do cliente, de acordo com as impostações na tabela ‘Troca de moeda';

**Notas iniciais**: é possível inserir algumas notas que foram inseridas em precedência nas ‘Notas codificadas', por isso o usuário tem de efetuar um duplo click no campo ‘Notas iniciais' para abrir a ‘Ajuda notas codificadas' e para selecionar os dados, ou com o botão direito do mouse pode abrir uma janela para poder especificar um longo texto de nota, se o campo contém um valor vai ser trocada a cor do fundo do campo;

**Anotações cliente**: é proposta a informação inserida no registro cliente no tab ‘Administrativo', ou com o botão direito do mouse se pode abrir uma janela para poder especificar um longo texto de nota, se o campo contém um valor vai ser trocada a cor do fundo do campo;

**Destino e destinatário**: é proposta a informação inserida no registro cliente no tab ‘Expedições', só se existem destinatários e destinos de default. A caixa de combinação propõe todos os destinatários e destinos inseridos no registro cliente;

**Usuário**: permite inserir o usuário que cria o documento (tabela de referência ‘Procurar pessoal' na Área administrativa/Pessoal). Esta opção tem de ser estabelecida nos Parâmetros de cada documento;

**Encomenda**: permite associar o documento à encomenda de venda;

**Estado doc.**: o dado se refere a tabela dos estados do documento, o dado tem de ser inserido pelo usuário e pode ser utilizado pelos procedimentos de replicação do ERP, instalados para a gestão de uma sede com alguns pontos de venda. O estado da nota de entrega pode ser impresso, descarregado, valorizado ou anulado;

**EDI**: é a data de transmissão do documento pelos procedimentos de EDI.