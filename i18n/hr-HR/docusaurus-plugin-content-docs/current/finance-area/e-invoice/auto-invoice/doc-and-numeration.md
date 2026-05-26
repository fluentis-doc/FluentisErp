---
title: Vrste dokumenata, numeriranje i vrste faktura
sidebar_position: 2
---
:::note BILJEŠKA:
Sljedeće upute odnose se na postupak za automatizirano generiranje faktura za prodaju stvorenih kako bi se SDI-u, putem kruga elektroničkog fakturiranja, priopćili podaci o kupnjama prethodno priopćenim putem ukinutog zahtjeva poznatog kao "Esterometro" (Italija).
:::

Potrebno je provjeriti da su vrste potrebnih *samofaktura* kodirane u vrstama knjigovodstvenih dokumenata:

![](/img/it-it/finance-area/e-invoice/auto-invoice/doc-types.png)

Kreiranje takvih računa u prodaji generirat će novi prodajni dokument s vlastitim brojem. Kako bi se izbjegao utjecaj na izdavanje standardnih prodajnih dokumenata, preporučuje se kreirati posebne vrste izlaznih računa za svaku vrstu samoračuna koji se izdaje, kao i brojače usklađene s registrima izlaznog PDV-a u kojima se evidentiraju automatska prijenosna knjiženja za ove *intrakomunitarne/reverse charge* nabave.

Na primjer, ako je predviđen jedan zajednički registar za evidentiranje automatskih prijenosnih knjiženja i za intrakomunitarne nabave i za domaći reverse charge, tada je potrebno kreirati jedan zajednički brojač računa i dvije vrste računa koje ga koriste. Suprotno tome, ako je za svaki slučaj predviđen zaseban registar, potrebno je definirati poseban brojač za svaki od njih. U slučaju da se procedura želi koristiti tijekom tekuće godine, početni broj brojača mora odgovarati sljedećem PDV protokolu koji treba biti dodijeljen u svakom od tih registara.

![](/img/it-it/finance-area/e-invoice/auto-invoice/numeration.png)

:::danger PAŽNJA
SDI ne može prepoznati razliku između TD01 i TD18 (na primjer), jedina razlika koju prepoznaje je između TD01 i TD04 (kreditna izvješća). Stoga je prikladno definirati formulu u numeraciji (brojaču) koja generira sufiks u numeriranju kako bi se razlikovale različite vrste dokumenata, izbjegavajući gubitak zbog dvostrukog numeriranja.

Pogledajte stranicu brojnika Fluentis, upamtite **kao primjer** da bi formula (polje *formule broja* u zaglavlju brojnika) mogla biti Number.ToString() + "/RC" za samofakture generirane kupnjom obrnutog terećenja..
:::

Vrste računa za ove samofakture imat će pridružene brojnike, kao i računovodstveni predložak (isti kao i automatski prijenos u prodaji) i vrstu računovodstvenog dokumenta:

![](/img/it-it/finance-area/e-invoice/auto-invoice/invoice-type.png)