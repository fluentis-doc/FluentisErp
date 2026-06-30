---
sidebar_position: 1
title: Poseban režim PDV-a za poljoprivredu
---

Poseban režim PDV-a za poljoprivredu podrazumeva da **PDV na nabavke koje podležu ovom režimu nije odbitak**, dok se na prodaji primenjuje **kompenzaciona stopa**.

Za razliku od standardnog PDV režima, u kojem se pretporez odbija od obračunatog PDV-a, u poljoprivrednom režimu PDV na nabavke uvek predstavlja nepriznati trošak. Istovremeno, PDV obračunat na prodaji plaća se samo delimično, primenom unapred definisanih kompenzacionih stopa koje zavise od vrste prodate robe, bez ikakve veze sa nabavkama ostvarenim u istom poreskom periodu.

## Prethodna konfiguracija tabela

Za upravljanje kompenzacionim procentima potrebno je najpre definisati odgovarajuće PDV stope za prodaju, pri čemu će se za obračun koristiti polje **procenat neodbitnog PDV-a**.

![](/img/it-it/finance-area/other/agr1.png)

U praksi, ako PDV stopa **X** ima kompenzacioni procenat **Y**, tada će:

- vrednost **Y** biti upisana u kolonu **% IVA agr. detr.** (informativni podatak koji se prikazuje u obračunu PDV-a),
- u kolonu **Procenat neodbitnog PDV-a** biti upisana vrednost **Y × 100 / X**.

Potrebno je definisati posebno konto na kojem će se knjižiti kompenzovani deo PDV-a obračunat primenom procenta neodbitnog PDV-a, na primer:

![](/img/it-it/finance-area/other/agr2.png)

Zatim je potrebno definisati posebne obrasce knjiženja za razdvajanje dva PDV iznosa kod prodaje u poljoprivrednom režimu, pri čemu je potrebno podesiti:

- tip prometa **Prodaja – poljoprivredni režim**,
- posebno PDV konto za knjiženje kompenzovanog dela PDV-a.

Za ove transakcije **nije potrebno** definisati poseban PDV registar.

![](/img/it-it/finance-area/other/agr3.png)

Nabavke u poljoprivrednom režimu takođe treba evidentirati pomoću posebnog obrasca knjiženja, čija je osnovna karakteristika da je povezan sa poljoprivrednim PDV režimom.

![](/img/it-it/finance-area/other/agr4.png)

Pošto će PDV na nabavkama knjižen ovim obrascem uvek imati **100% neodbitni PDV** (ili 0% ukoliko je transakcija oslobođena ili izuzeta od PDV-a), preporučuje se popunjavanje kartice **Kontrola PDV stopa**, kako bi se sprečile pogrešne kombinacije PDV stopa.

![](/img/it-it/finance-area/other/agr5.png)

Ako postoje i **intrakomunitarne nabavke** koje podležu poljoprivrednom režimu, umesto standardnih obrazaca za intrakomunitarne nabavke i pripadajućeg prenosa PDV-a koriste se dva posebna tipa prometa:

- **PDV za intrakomunitarnu nabavku u poljoprivrednom režimu**,
- odgovarajući **prenos PDV-a za poljoprivredni režim**.

I u ovom slučaju nabavka će imati **100% neodbitni PDV**, dok će se na prodajnoj strani obračunavati PDV za uplatu. Promena PDV stope upravlja se pomoću automatske zamene PDV stope u PDV mreži, na isti način kao kod mešovitog *reverse charge* postupka.

## Rezultat u periodičnom obračunu PDV-a

Obračun PDV-a prikazaće promet u poljoprivrednom režimu na sledeći način:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger PAŽNJA
Zatvaranje konta **PDV na prodaju u poljoprivrednom režimu**, koje služi za evidentiranje kompenzovanog dela PDV-a na prodaji, korisnik mora izvršiti **ručno**, odgovarajućim računovodstvenim knjiženjem.
:::