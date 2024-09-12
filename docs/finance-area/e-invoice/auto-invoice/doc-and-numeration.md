---
title: Tipi documento, Numerazione e Tipi Fatt.
sidebar_position: 2
---
:::note NOTA:
Le seguenti istruzioni riguardano la procedura di generazione automatizzata delle auto-fatture di vendita create al fine di comunicare allo SDI, tramite il circuito della fatturazione elettronica, i dati sugli acquisti precedentemente comunicati tramite l'abrogato adempimento noto come "Esterometro".
:::

Occorre verificare che, nei tipi documento contabili, siano stati codificate le tipologie delle autofatture necessarie:

![](/img/it-it/finance-area/e-invoice/auto-invoice/doc-types.png)

La creazione dell’autofattura nelle vendite andrà a creare un nuovo documento di vendita, con un suo numero: al fine di evitare influenze sull’emissioni dei documenti di vendita normali, si suggerisce di creare tipi fatture di vendita specifici per ogni tipologia di autofattura da emettere e numeratori coerenti con i registri iva vendite dove si protocollano i giroconti automatici contabili di questi acquisti intra/reverse.

Ad esempio, se è previsto un unico registro dove rilevare i giri automatici sia degli acquisti intra che gli acquisti in reverse charge interno, allora sarà necessario creare un unico numeratore fatture e due tipi fatture che lo utilizzano; al contrario, se per ogni casistica è stato previsto un registro a sé stante, è necessario prevedere un numeratore per ognuno di questi. Nel caso in cui si voglia utilizzare la procedura in corso d’anno, il numeratore iniziale dovrà corrispondere con il prossimo protocollo iva da attribuire in ognuno di questi registri.

![](/img/it-it/finance-area/e-invoice/auto-invoice/numeration.png)

:::danger ATTENZIONE
Lo SDI non è in grado di riconoscere la differenza tra TD01 e TD18 (ad esempio), l'unica differenza che riconosce è tra TD01 e TD04 (note di credito). Pertanto risulta opportuno definire una formula nel numeratore che generi un suffisso nella numerazione al fine di differenziare le varie tipologie di documento evitando lo scarto per numerazione duplicata.

Si rinvia alla pagina dei numeratori Fluentis ricordando **a titolo di esempio** che una formula (campo *Formula numero* nella testata del numeratore) potrebbe essere Number.ToString() + "/RC" per le autofatture generate da un acquisto in reverse charge.
:::

I tipi fatture per queste autofatture avranno associato i relativi numeratori, così come la causale contabile (la stessa del giroconto automatico nelle vendite) e il tipo documento contabile:

![](/img/it-it/finance-area/e-invoice/auto-invoice/invoice-type.png)