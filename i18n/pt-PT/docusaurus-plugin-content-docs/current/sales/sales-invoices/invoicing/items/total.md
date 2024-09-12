---
title: Totais
sidebar_position: 2
---

**Descontos**: são propostos todos os descontos associados ao artigo, cada um com a própria base de cálculo e de atribuição. Os descontos podem ser retomados: pelo registro cliente, pela solução de pagamento atribuída ao documento, pelo catálogo da associação catálogo - cliente. Todos os dados propostos são modificáveis;

**Valores catálogo**: é proposto o catálogo pela qual foi retomado o artigo, com a data início/fim validade, com condições particulares de venda (p.ex. escalão de desconto) atribuídas ao artigo no catálogo;

**Depósito e causal**: são propostos o depósito e a causal de referência que vão aparecer em automático no momento do descarregamento dos artigos relativos pelo depósito. Os dados são retomados pelos tipos faturas.

Os seguintes valores pertencem a cada linha artigo:

**Preço unitário**: o valor do campo 'Preço';

**Quantidade**: o valor do campo 'Quantidade';

**Quantia bruta**: preço artigo * quantidade artigo;

**Total descontos**: a soma dos descontos do artigo; os descontos finais também estão incluídos;

**Tributável**: quantia bruta - descontos;

**Imposto**: tributável * imposto do artigo;

**Total**: tributável + imposta.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Cancelar os descontos | Permite cancelar o desconto associado com um artigo. |






