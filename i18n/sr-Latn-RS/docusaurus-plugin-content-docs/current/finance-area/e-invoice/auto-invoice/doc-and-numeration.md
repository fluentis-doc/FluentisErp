---
title: Vrste dokumenata, numerisanje i vrste računa
sidebar_position: 2
---

:::note NAPOMENA
Sledeća uputstva odnose se na postupak automatskog generisanja izlaznih računa koji služe za prijavljivanje podataka o nabavkama putem SDI sistema elektronskog fakturisanja, a koji su se ranije prijavljivali kroz ukinutu prijavu poznatu kao **Esterometro** (Italija).
:::

Potrebno je proveriti da li su vrste potrebnih **samofaktura** definisane u tabeli **Vrste knjigovodstvenih dokumenata**.

![](/img/it-it/finance-area/e-invoice/auto-invoice/doc-types.png)

Generisanjem ovakvih računa u modulu prodaje nastaje novi izlazni dokument sa sopstvenim rednim brojem.

Kako bi se izbegao uticaj na numerisanje standardnih izlaznih računa, preporučuje se definisanje posebnih vrsta izlaznih računa za svaku vrstu samofakture, kao i posebnih brojača usklađenih sa registrima izlaznog PDV-a u kojima se evidentiraju automatska prenosna knjiženja za **intrakomunitarne nabavke** i **reverse charge** transakcije.

Primer:

- ako se koristi jedan zajednički registar za automatska prenosna knjiženja intrakomunitarnih nabavki i domaćeg reverse charge postupka, potrebno je definisati jedan zajednički brojač računa i dve vrste računa koje ga koriste;
- ako svaki postupak koristi poseban registar, potrebno je definisati poseban brojač za svaki od njih.

Ako se funkcionalnost uvodi tokom tekuće poslovne godine, početna vrednost brojača mora odgovarati sledećem slobodnom PDV protokolu koji će biti dodeljen odgovarajućem registru.

![](/img/it-it/finance-area/e-invoice/auto-invoice/numeration.png)

:::danger PAŽNJA
SDI sistem ne razlikuje vrste dokumenata **TD01** i **TD18** (na primer), već razlikuje samo određene vrste dokumenata, kao što su **TD01** i **TD04** (odobrenja).

Zbog toga se preporučuje definisanje formule za numerisanje (polje **Formula broja** u zaglavlju brojača) koja će dodavati sufiks broju dokumenta kako bi se različite vrste samofaktura međusobno razlikovale i izbegla mogućnost duplog numerisanja.

Primer formule:

`Number.ToString() + "/RC"`

Ova formula generiše numeraciju sa sufiksom **/RC** za račune nastale iz reverse charge nabavki.
:::

Vrsti računa za pojedinačnu samofakturu potrebno je dodeliti:

- odgovarajući **brojač**;
- **knjigovodstveni obrazac** (isti onaj koji se koristi za automatski prenos u prodaji);
- odgovarajuću **vrstu knjigovodstvenog dokumenta**.

![](/img/it-it/finance-area/e-invoice/auto-invoice/invoice-type.png)