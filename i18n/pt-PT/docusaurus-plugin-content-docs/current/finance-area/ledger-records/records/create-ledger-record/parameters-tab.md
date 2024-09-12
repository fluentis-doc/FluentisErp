---
title: Tab Parâmetros
sidebar_position: 8
---

O tabulador 'Parâmetros' é sempre presente numa registração contábil, mas normalmente não acontece indo a visualizar/gerir por que a única nota de interesse é o estado definitivo ou provisório da registração contábil em utilização: de fato, a registração contábil 'definitiva' vai continuar a ser modificável (em tudo menos na causal e moeda de referência) até quando não for impresso em definitivo um livro fiscal obrigatório ou a mesma não foi utilizada em nenhum encerramento das contas. A utilização do estado 'provisório' da registração (que vai tirar e desabilitar o protocolo Imposto e a numerar negativamente de -1000 a registração) pode ser utilizada para relevar na contabilidade faturas a pagar antecipadas ou outros tipos de operação periódica de manifestação futura (tipo cânone adiantados). Entrar na registração e inserir de novo o estado definitivo vai atribuir de novo automaticamente o número da registração e o protocolo Imposto válido para a data registração estabelecida (salvo a progressividade do mesmo). Lembra-se que na contabilidade está presente um procedimento de gestão registrações provisórias que permite gerir em maneira mais rápida a atribuição a registração definitiva de um set de registrações provisórias selecionadas.

Os flag seguintes derivam da causal contábil:

**Atualização saldos**: tem que ser sempre estabelecido, Agrupar registro Imposto (que simplesmente vai agrupar ou não no jornal as linhas Imposto que se referem a mesma subconta contábil);

**Atualização automática CdC, CdL e encomendas**: pode ser de interesse para alguns tipos de registração manual, pelas quais o usuário tem que gerir normalmente a gestão manual das fichas CdC/CdL: deixando o flag inserido, o aplicativo vai resetar as fichas citadas em cada mudança do dado de origem do livro jornal, isso poderia causar a perda de todas as inserções manuais efetuadas. Tal automatismo, mesmo com o flag não inserido, está presente no ato da inserção da registração: isso vale para a entrada em mudança da mesma.

Os campos relativos o livro preto permitem gerir o caso particular das compras extra-cee (com causal não Imposto) a resumir na declaração das operações com países com fiscalidade privilegiada, associando a registração atual no movimento Imposto da nota de entrega da alfandega aonde ler os valores a declara.

A grelha abaixo, invés, visualiza a eventual registração automática associada com aquele em utilização: em cada mudança da primeira, o procedimento vai continuar a alinhar a segunda em relação a lógica das causais automáticas.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar a registração. |
| Nova registração | Botão para criar uma nova registração. |
| Parâmetros de inserção | Refere-se aos parâmetros de inserção da primeira nota. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Botão para a ligação com a gestão documental. |






