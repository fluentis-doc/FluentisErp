---
title: MS parametri
sidebar_position: 3
tags: [MS]
---

U ovom prozoru podešavaju se svi parametri koji se odnose na upravljanje nalozima za proizvodnju i određuje način upravljanja fazama nakon generisanja radnih naloga.

## Metod generisanja radnog naloga

U ovom odeljku potrebno je podesiti **Vrstu radnog naloga** (jednoproizvodni (mono) / viš proizvodni (multi)) koja će se predlagati u postupku **Generisanje radnih naloga za proizvodnju**, na kartici [Parametri](/docs/planning/mps-master-production-scheduling/job-order-creation).

Prilikom generisanja radnog naloga putem postupka [Generisanje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation) moguće je promeniti ovo podešavanje, kao i podešavanje sledećeg padajućeg menija **Grupisanje prema**, kojim se određuje kako će artikli biti grupisani unutar istog *jednoproizvodnog* ili *viš proizvodnog* radnog naloga.

Ako je izabrana **Vrsta radnog naloga**:

- **Jednoproizvodni**: jedino dozvoljeno grupisanje je prema artiklu. Ovaj način rada omogućava automatsko generisanje više jednoproizvodnih radnih naloga na osnovu izabranih redova narudžbina kupaca, redova prognoza prodaje, glavnog plana proizvodnje ili podzaliha. Svaki generisani radni nalog sadržavaće zbir traženih količina za isti artikal. Završni datum grupisanog radnog naloga uvek odgovara datumu najbliže potrebe u odnosu na datum pokretanja obrade.
- **Viš proizvodni**: grupisanje je moguće prema kupcu, prodajnom radnom nalogu ili kombinaciji kupca i prodajnog radnog naloga. Na taj način korisnik može da uključi više artikala u isti viš proizvodni radni nalog ako njihovi redovi narudžbina pripadaju istom kupcu, istom prodajnom radnom nalogu ili istom prodajnom radnom nalogu istog kupca.

Polje **Prioritet nabavke** omogućava unos podrazumevane vrednosti prioriteta za kreirane radne naloge. Taj prioritet uzimaće se u obzir u postupku [Planiranje sa ograničenim kapacitetom](/docs/planning/ms-master-scheduling/finite-capacityscheduling/).

## Generisanje radnog naloga iz

U ovom odeljku korisnik može odgovarajućim potvrdnim okvirima da odredi da li radni nalog treba generisati iz **narudžbina kupaca** ili iz **prognoze**, pri čemu može da izabere generisanje iz **prognoza prodaje** i/ili iz **glavnog plana proizvodnje**.

Ova podešavanja naknadno mogu da se promene u prozoru [Generisanje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation).

Ako se nalog za proizvodnju generiše iz prognoze, potrebno je odrediti da li se radni nalozi generišu sa nedeljnim ili mesečnim rokovima.

**Uzimanje u obzir raspoloživosti iz**

U ovom odeljku korisnik može da odredi raspoloživost gotovih proizvoda koja će se uzimati u obzir prilikom generisanja radnih naloga za proizvodnju iz sledećih područja: **Kooperacija**, **Nabavka**, **Prodaja**, **Proizvodnja** i **Skladište**.

Dostupni su i sledeći potvrdni okviri:

**Izračunavanje količine na osnovu Lead Time-a artikla**: aktivira se ako se za izračunavanje trajanja radnog naloga za proizvodnju ne žele koristiti tehnološki postupci. U tom slučaju trajanje radnog naloga izračunava se na osnovu polja *Lead Time proizvodnje* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.

**Automatsko generisanje radnog naloga iz narudžbina kupaca**: ako je opcija aktivirana, radni nalog za proizvodnju automatski se kreira čim se unese red narudžbine kupca. U tom slučaju radni nalog kreira se sa statusom *Nepregledan*. Ova opcija obično se aktivira kada se za planiranje koristi postupak *MRP* umesto postupka *Opšte planiranje*.

**Ažuriranje datuma spremnosti robe**: ako je opcija aktivirana, prilikom promene planiranog završnog datuma obrade u radnom nalogu, bilo ručno ili putem postupka, novi datum prenosi se i u polje *Datum spremnosti robe* tog radnog naloga i povezanog naloga kupca.

Osim toga, kreirana je tabela zapisnika **MS_ProductionJobOrderItemReadyGoodsDateLogs**, koja beleži sve izvršene promene. Ovoj tabeli moguće je pristupiti samo putem SQL-a.

**Automatsko generisanje proizvodnog toka**: ako je opcija aktivirana, korisnik može da uključi potvrdni okvir **Planiranje**, kojim se određuje željeni nivo automatizacije generisanja proizvodnog toka. Proizvodni tok pokreće se direktno pomoću dugmeta **Generisanje toka** u postupku [Generisanje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation).

Na primer, korisnik može da aktivira opciju **Planiranje** kako bi radni nalozi za proizvodnju bili automatski planirani odmah nakon generisanja putem postupka [Generisanje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation).

Aktiviranjem opcije **Planiranje** omogućava se i aktiviranje opcije **Puštanje**, kojom se određuje da li nakon automatskog planiranja treba automatski pustiti i planirane naloge za nabavku, proizvodnju i/ili kooperaciju.

Za **planirane naloge za proizvodnju** moguće je dodatno aktivirati opciju **Puštanje izvršnih naloga za proizvodnju**, koja omogućava direktno generisanje izvršnih naloga za proizvodnju, čime se preskače i postupak [Puštanje planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders).

:::note[Važno]
Ova automatizacija može da se aktivira i prilikom potvrde narudžbine kupca, ali samo ako je u tabeli [Vrste narudžbina kupaca](/docs/configurations/tables/sales/sales-order-types/) definisana **Vrsta naloga za proizvodnju** i aktivirana opcija **Generisanje naloga za proizvodnju**.

Napominjemo da narudžbina kupca mora biti *potvrđena* i *odštampana* da bi se automatizacija pokrenula, a za sve redove artikala moraju biti navedeni *datumi isporuke* i *datumi spremnosti robe*.
:::

## Kalkulacija troškova naloga za proizvodnju

U ovom odeljku moguće je definisati parametre koji će se predlagati kao podrazumevane vrednosti prilikom kalkulacije troškova naloga za proizvodnju.

> **Vrsta troška**: omogućava izbor vrste troška koja će se koristiti za kalkulaciju troškova sirovina: *poslednji*, *prosečni* ili *standardni* trošak.
>
> **Vrsta dodatka**: omogućava izbor načina obračuna dodatka: prema *trošku* (u novčanom iznosu) ili prema *procentu*. U susedno polje moguće je uneti odgovarajuću vrednost.
>
> **Trošak lota**: aktiviranjem ove opcije postupak vrednuje materijal prema izabranoj vrsti troška, uzimajući u obzir samo vrednosti koje se odnose na određeni lot.
>
> **Trošak radnog naloga**: aktiviranjem ove opcije postupak vrednuje materijal prema izabranoj vrsti troška, uzimajući u obzir samo vrednosti koje se odnose na određeni radni nalog.

:::note[Napomena]
Ako su istovremeno aktivirane opcije **Trošak lota** i **Trošak radnog naloga**, postupak vrednuje materijal prema izabranoj vrsti troška, uzimajući u obzir samo vrednosti koje se odnose na određeni radni nalog i određeni lot.

Pritom se uzimaju u obzir knjiženja izvršena pomoću ulaznih šablona koji imaju aktiviranu opciju ažuriranja poslednjeg ili prosečnog troška (u zavisnosti od vrednosti izabrane u polju **Vrsta troška**) i aktiviranu opciju poreske relevantnosti.

Ako ne pronađe nijedno knjiženje koje ispunjava ove uslove, postupak traži knjiženja kojima je taj lot primljen. Ako ni takva knjiženja ne postoje, pretražuju se sva knjiženja za taj artikal. Ako za artikal ne postoji nijedno ulazno knjiženje, postupak proverava odgovarajuća polja poslednjeg, prosečnog i standardnog troška u šifarniku artikala.
:::

## Skladišta za planiranje radnih naloga

Ova mreža prikazuje spisak skladišta na kojima se proverava raspoloživost prilikom generisanja naloga za proizvodnju. Spisak se konfiguriše u obrascu *Izračunavanje raspoloživosti*, koji se nalazi na putanji *Početna stranica > Artikli > [Izračunavanje raspoloživosti](/docs/erp-home/registers/items/calculate-availability)*.

**Predloženi parametri planiranja**: omogućava određivanje parametara koji će se predlagati prilikom planiranja. Mogu se ponovo predložiti parametri poslednjeg izvršenog planiranja ili parametri koje je pojedinačni korisnik koristio za planiranje.

**Broj dana do sledećeg planiranja**: određuje broj dana za pomeranje početnog datuma planiranja sa ograničenim kapacitetom (polje *Od datuma*) na kartici *Parametri planiranja sa ograničenim kapacitetom* u obrascu *Planiranje sa ograničenim kapacitetom*.

**Maksimalan broj meseci za planiranje**: određuje broj meseci koji se dodaju tekućem datumu kako bi se odredio završni datum planiranja (*Planiranje do*) u parametrima *Opšteg planiranja*.

**Maksimalan broj meseci za izračunavanje raspoloživosti materijala**: omogućava definisanje vremenskog perioda za izračunavanje raspoloživosti, odnosno broja meseci unutar kojih će se dokumenti uzimati u obzir. Dokumenti sa datumom nakon definisanog perioda neće se uzimati u obzir prilikom planiranja.

**Prvi dan nedelje prikazan u fabričkom kalendaru**: omogućava određivanje prvog dana radne nedelje koji će se prikazivati u [Fabričkom kalendaru](/docs/configurations/tables/production/factory-calendar). Uobičajeno se podešava ponedeljak.

## Boje radnih naloga

U ovom odeljku moguće je podesiti boje pozadine i teksta naloga za proizvodnju u zavisnosti od njihovog statusa (nepregledani, pokrenuti itd.).

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).