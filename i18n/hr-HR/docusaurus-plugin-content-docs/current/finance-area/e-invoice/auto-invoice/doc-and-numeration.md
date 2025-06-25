---
title: Vrste dokumenata, numeriranje i vrste faktura
sidebar_position: 2
---
:::note BILJEŠKA:
Sljedeće upute odnose se na postupak za automatizirano generiranje faktura za prodaju stvorenih kako bi se SDI-u, putem kruga elektroničkog fakturiranja, priopćili podaci o kupnjama prethodno priopćenim putem ukinutog zahtjeva poznatog kao "Esterometro".
:::

Potrebno je provjeriti da su vrste potrebnih samofaktura kodirane u vrstama knjigovodstvenih dokumenata:

![](/img/it-it/finance-area/e-invoice/auto-invoice/doc-types.png)

Izrada samoračuna u prodaji će stvoriti novi prodajni dokument, sa svojim brojem: kako bi se izbjegli utjecaji na izdavanje uobičajenih prodajnih dokumenata, predlaže se kreiranje posebnih vrsta prodajnih računa za svaku vrstu samoračuna izdavanje i brojnici u skladu s prodajnim registrima PDV-a u kojima se bilježe automatski računovodstveni prijenosi ovih intra/obrnutih kupnji.  

Na primjer, ako postoji jedinstveni registar za bilježenje automatskih obrta i intra kupnji i internih obrnutih kupnji, tada će biti potrebno stvoriti jedan brojnik fakture i dvije vrste faktura koje ga koriste; naprotiv, ako je za svaki slučaj osiguran poseban registar, potrebno je osigurati brojnik za svaki od njih. Ako želite koristiti postupak tijekom godine, početni brojnik mora odgovarati sljedećem PDV protokolu koji će biti pripisan u svakom od ovih registara.

![](/img/it-it/finance-area/e-invoice/auto-invoice/numeration.png)

:::danger PAŽNJA
SDI ne može prepoznati razliku između TD01 i TD18 (na primjer), jedina razlika koju prepoznaje je između TD01 i TD04 (kreditna izvješća). Stoga je prikladno definirati formulu u brojniku koja generira sufiks u numeriranju kako bi se razlikovale različite vrste dokumenata, izbjegavajući gubitak zbog dvostrukog numeriranja.

Pogledajte stranicu brojnika Fluentis, upamtite **kao primjer** da bi formula (polje *formule broja* u zaglavlju brojnika) mogla biti Number.ToString() + "/RC" za samofakture generirane kupnjom obrnutog terećenja..
:::

Vrste računa za ove samofakture imat će pridružene brojnike, kao i računovodstveni predložak (isti kao i automatski prijenos u prodaji) i vrstu računovodstvenog dokumenta:

![](/img/it-it/finance-area/e-invoice/auto-invoice/invoice-type.png)