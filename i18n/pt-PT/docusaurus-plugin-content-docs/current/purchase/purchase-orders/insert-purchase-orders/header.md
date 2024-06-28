---
title: Cabeçalho
sidebar_position: 2
---

Inserindo o fornecedor através da ajuda contas ou manualmente com a ajuda da Tooltip, vão ser propostos todos os dados de default presente no registro fornecedor: a moeda e a data moeda, o frete, a expedição e a embalagem, a nação, a área e a língua, o catálogo se no registro foi colocado como catálogo de default e não com prioridade (se não no registro o tipo catálogo é inserido com prioridade, o catálogo cujo é retomado o preço é inserido diretamente nas linhas artigo) e as anotações cliente.

A encomenda de venda é inserida automaticamente se a ordem fornecedor nasce com um documento que contém a encomenda de venda (p.ex. ordens planejadas de compra) mas pode ser inserida pelo usuário através da ajuda encomendas.

O usuário pode ser inserido com nossa e vossa referência, as notas iniciais (que podem ser inseridas também com a ajuda das notas codificadas), a encomenda de produção (que tem de ser um número encomenda existente para o ano especificado, se a ordem foi criada pela libertação das ordens planejadas de compra a encomenda é proposta automaticamente), data pedida entrega e data de prevista entrega.

O ponto de venda é gerido só pela verticalização que refere-se as cadeias de distribuição. Se uma ordem fornecedor foi criada pela transferência de mercadorias entre pontos de venda de uma mesma cadeia no ponto de venda vai ser visualizado o ponto de venda de origem da mercadoria.

O estado documento é inserido pelo usuário e vai ser gerido em algumas verticalizações (cadeias de distribuição ou sociedades associadas) para replicar os documentos pelo ponto de venda no sistema central e vice-versa.

A ordem depois de ser inserida pode ser:

**Imprimida**: quando é imprimida em definitivo;

**Autorizada**: quando o usuário a autoriza, não tem nenhuma implicação no gestional mas é evaluado pelo Mobile;

**Historicizada**: quando o usuário historiciza, não tem nenhuma implicação no gestional;

**Anulada**: quando o usuário quer anular um documento invés que cancelá-lo, automaticamente a ordem vai ser colocada como forçamente executada em todas as suas linhas artigo.

Quando a ordem é executada através dos documentos CT-e ou faturas o seu estado execução troca automaticamente de Não executado a Parcialmente executado ou Executado. O usuário pode forçar a execução de uma ordem não totalmente executada, quando é forçada a execução, é salvada também a data de execução.

São pegos também pelo registro os pagamentos, os eventuais descontos e os diferentes destinos da mercadoria.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Salva a ordem. |
|  [Retomada dos artigos da encomenda de compra](/docs/purchase/purchase-orders/insert-purchase-orders/header-procedures)  | Depois de ter especificado o fornecedor pela qual emitir a ordem se ativa a retomada dos artigos da encomenda de compra. |
| Retomada dos artigos pelos catálogos fornecedores | Depois de ter especificar o fornecedor pela qual emitir a ordem se ativa a retomada dos artigos pelos catálogos fornecedores. |
| Substituir a data prev. entrega nas linhas  | Depois de ter especificado a data de pedido entrega e/ou a data prevista entrega no cabeçalho ordem é possível substituir em quantidade tal datas nas linhas artigo já inseridas. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Documentos](/docs/guide/operations-with-data/document-manager)  | Na ordem cliente é possível associar alguns documentos em diversos formados. |






