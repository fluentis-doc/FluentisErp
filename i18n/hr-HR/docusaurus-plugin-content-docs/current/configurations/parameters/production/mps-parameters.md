---
title: MS Parametri
sidebar_position: 3
tags: [MS]
---

U ovom se prozoru postavljaju svi parametri koji se odnose na upravljanje radnim nalozima za proizvodnju te određuju način upravljanja fazama nakon generiranja radnih naloga.

## Metoda generiranja radnog naloga

U ovom odjeljku potrebno je postaviti **Vrstu radnog naloga** (jednoproizvodni (mono) / višproizvodni (multi)) koja će se predlagati u postupku **Generiranje radnih naloga za proizvodnju**, na kartici [Parametri](/docs/planning/mps-master-production-scheduling/job-order-creation).

Prilikom generiranja radnog naloga putem postupka [Generiranje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation) moguće je promijeniti ovu postavku, kao i postavku sljedećeg padajućeg izbornika **Grupiranje prema**, kojim se određuje kako će se artikli grupirati unutar istog *jednoproizvodnog* ili *višproizvodnog* radnog naloga.

Ako je odabrana **Vrsta radnog naloga**:

- **Jednoproizvodni**: jedino dopušteno grupiranje jest prema artiklu. Ovaj način rada omogućuje automatsko generiranje više jednoproizvodnih radnih naloga na temelju odabranih redaka narudžbi kupaca, redaka iz prognoza prodaje, glavnog plana proizvodnje ili podzaliha. Svaki generirani radni nalog sadržavat će zbroj traženih količina za isti artikl. Završni datum grupiranog radnog naloga uvijek odgovara datumu najbliže potrebe u odnosu na datum pokretanja obrade.
- **Višproizvodni**: grupiranje je moguće prema kupcu, prodajnom radnom nalogu ili kombinaciji kupca i prodajnog radnog naloga. Na taj način korisnik može uključiti više artikala u isti višproizvodni radni nalog ako njihovi retci narudžbi pripadaju istom kupcu, istom prodajnom radnom nalogu ili istom prodajnom radnom nalogu istog kupca.

Polje **Prioritet nabave** omogućuje unos zadane vrijednosti prioriteta za izrađene radne naloge. Taj će se prioritet uzimati u obzir u postupku [Planiranje uz ograničeni kapacitet](/docs/planning/ms-master-scheduling/finite-capacityscheduling/).

## Generiranje radnog naloga iz

U ovom odjeljku korisnik može odgovarajućim potvrdnim okvirima odrediti treba li se radni nalog generirati iz **narudžbi kupaca** ili iz **prognoze**, pri čemu se može odabrati generiranje iz **prognoza prodaje** i/ili iz **glavnog plana proizvodnje**.

Ove se postavke naknadno mogu promijeniti u prozoru [Generiranje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation).

Ako se radni nalog za proizvodnju generira iz prognoze, potrebno je odrediti želi li se generiranje radnih naloga s tjednim ili mjesečnim rokovima.

**Uzimanje u obzir raspoloživosti iz**

U ovom odjeljku korisnik može odrediti raspoloživost gotovih proizvoda koja će se uzimati u obzir prilikom generiranja radnih naloga za proizvodnju iz sljedećih područja: **Kooperacija**, **Nabava**, **Prodaja**, **Proizvodnja** i **Skladište**.

Dostupni su i sljedeći potvrdni okviri:

**Izračun količine na temelju Lead Timea artikla**: aktivira se ako se za izračun trajanja radnog naloga za proizvodnju ne žele upotrebljavati tehnološki postupci. U tom se slučaju trajanje radnog naloga izračunava na temelju polja *Lead Time proizvodnje* u [Parametrima MRP-a](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.

**Automatsko generiranje radnog naloga iz narudžbi kupaca**: ako je opcija aktivirana, radni nalog za proizvodnju automatski se izrađuje čim se unese redak narudžbe kupca. U tom se slučaju radni nalog izrađuje sa statusom *Nepregledan*. Ova se opcija obično aktivira kada se za planiranje upotrebljava postupak *MRP* umjesto postupka *Opće planiranje*.

**Ažuriranje datuma spremnosti robe**: ako je opcija aktivirana, prilikom promjene planiranog završnog datuma obrade u radnom nalogu, bilo ručno ili putem postupka, novi se datum prenosi i u polje *Datum spremnosti robe* tog radnog naloga te povezanog naloga kupca.

Osim toga, izrađena je tablica zapisnika **MS_ProductionJobOrderItemReadyGoodsDateLogs**, koja bilježi sve izvršene promjene. Ovoj je tablici moguće pristupiti samo putem SQL-a.

**Automatsko generiranje proizvodnog tijeka**: ako je opcija aktivirana, korisnik može uključiti potvrdni okvir **Planiranje**, kojim se određuje željena razina automatizacije generiranja proizvodnog tijeka. Proizvodni tijek pokreće se izravno pomoću gumba **Generiranje tijeka** u postupku [Generiranje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation).

Primjerice, korisnik može aktivirati opciju **Planiranje** kako bi radni nalozi za proizvodnju bili automatski planirani odmah nakon generiranja putem postupka [Generiranje radnih naloga za proizvodnju](/docs/planning/mps-master-production-scheduling/job-order-creation).

Aktiviranjem opcije **Planiranje** omogućuje se i aktivacija opcije **Puštanje**, kojom se određuje trebaju li se nakon automatskog planiranja automatski pustiti i planirani nalozi za nabavu, proizvodnju i/ili kooperaciju.

Za **planirane naloge za proizvodnju** moguće je dodatno aktivirati opciju **Puštanje izvršnih naloga za proizvodnju**, koja omogućuje izravno generiranje izvršnih naloga za proizvodnju, čime se preskače i postupak [Puštanje planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders).

:::note Važno
Ova se automatizacija može aktivirati i prilikom potvrde narudžbe kupca, ali samo ako je u tablici [Vrste narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types/) definirana **Vrsta radnog naloga za proizvodnju** i aktivirana opcija **Generiranje radnog naloga za proizvodnju**.

Napominjemo da za pokretanje automatizacije narudžba kupca mora biti *potvrđena* i *ispisana*, a za sve retke artikala moraju biti navedeni *datumi isporuke* i *datumi spremnosti robe*.
:::

## Kalkulacija troškova radnog naloga

U ovom odjeljku moguće je definirati parametre koji će se predlagati kao zadane vrijednosti prilikom kalkulacije troškova radnih naloga za proizvodnju.

> **Vrsta troška**: omogućuje odabir vrste troška koja će se upotrebljavati za kalkulaciju troškova sirovina: *posljednji*, *prosječni* ili *standardni* trošak.
>
> **Vrsta dodatka**: omogućuje odabir načina obračuna dodatka: prema *trošku* (u novčanom iznosu) ili prema *postotku*. U susjedno polje moguće je unijeti odgovarajuću vrijednost.
>
> **Trošak lota**: aktiviranjem ove opcije postupak vrednuje materijal prema odabranoj vrsti troška, uzimajući u obzir samo vrijednosti koje se odnose na određeni lot.
>
> **Trošak radnog naloga**: aktiviranjem ove opcije postupak vrednuje materijal prema odabranoj vrsti troška, uzimajući u obzir samo vrijednosti koje se odnose na određeni radni nalog.

:::note Napomena
Ako su istodobno aktivirane opcije **Trošak lota** i **Trošak radnog naloga**, postupak vrednuje materijal prema odabranoj vrsti troška, uzimajući u obzir samo vrijednosti koje se odnose na određeni radni nalog i određeni lot.

Pritom se uzimaju u obzir knjiženja izvršena pomoću predložaka ulaza koji imaju aktiviranu opciju ažuriranja posljednjeg ili prosječnog troška (ovisno o vrijednosti odabranoj u polju **Vrsta troška**) te aktiviranu opciju porezne relevantnosti.

Ako ne pronađe nijedno knjiženje koje ispunjava te uvjete, postupak traži knjiženja kojima je zaprimljen taj lot. Ako ni takva knjiženja ne postoje, pretražuju se sva knjiženja za taj artikl. Ako za artikl ne postoji nijedno knjiženje ulaza, postupak provjerava odgovarajuća polja posljednjeg, prosječnog i standardnog troška u šifarniku artikala.
:::

## Skladišta za planiranje radnih naloga

Ova mreža prikazuje popis skladišta na kojima se provjerava raspoloživost prilikom generiranja radnih naloga za proizvodnju. Popis se konfigurira u obrascu *Izračun raspoloživosti*, koji se nalazi na putanji *Početna stranica > Artikli > [Izračun raspoloživosti](/docs/erp-home/registers/items/calculate-availability)*.

**Predloženi parametri planiranja**: omogućuje određivanje parametara koji će se predlagati prilikom planiranja. Mogu se ponovno predložiti parametri posljednjeg izvršenog planiranja ili parametri koje je pojedini korisnik upotrijebio za planiranje.

**Broj dana do sljedećeg planiranja**: određuje broj dana za pomicanje početnog datuma planiranja uz ograničeni kapacitet (polje *Od datuma*) na kartici *Parametri planiranja uz ograničeni kapacitet* u obrascu *Planiranje uz ograničeni kapacitet*.

**Maksimalan broj mjeseci za planiranje**: određuje broj mjeseci koji se dodaju trenutačnom datumu kako bi se odredio završni datum planiranja (*Planiranje do*) u parametrima *Općeg planiranja*.

**Maksimalan broj mjeseci za izračun raspoloživosti materijala**: omogućuje definiranje vremenskog razdoblja za izračun raspoloživosti, odnosno broja mjeseci unutar kojih će se dokumenti uzimati u obzir. Dokumenti s datumom nakon definiranog razdoblja neće se uzimati u obzir pri planiranju.

**Prvi dan tjedna prikazan u tvorničkom kalendaru**: omogućuje određivanje prvog dana radnog tjedna koji će se prikazivati u [Tvorničkom kalendaru](/docs/configurations/tables/production/factory-calendar). Uobičajeno se postavlja ponedjeljak.

## Boje radnih naloga

U ovom je odjeljku moguće postaviti boje pozadine i teksta radnih naloga za proizvodnju ovisno o njihovu statusu (nepregledani, pokrenuti itd.).

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).