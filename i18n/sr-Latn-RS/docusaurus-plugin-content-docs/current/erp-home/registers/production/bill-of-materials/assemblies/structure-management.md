---
title: Sastavnica materijala
sidebar_position: 2
---

Kao što je već navedeno, iz obrasca [Sastavnica materijala](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), odabirom željene sastavnice i dvostrukim klikom otvara se njen prikaz i uređivanje u obliku stabla.
Sastavnica predstavlja višeslojnu strukturu u obliku stabla u kojoj postoji odnos **roditelj–dijete**. Jedna [komponenta](/docs/guide/common/glossary/glossary-intro#a) može istovremeno biti i roditelj drugim komponentama, čime se formira proizvoljan broj nivoa sve do posljednjeg nivoa na kojem se nalaze osnovni materijali.

Prozor je podijeljen na dva dijela: s lijeve strane prikazuje se stablo sastavnice, dok se s desne strane prikazuju detaljne informacije o odabranoj komponenti.

## Struktura sastavnice

Za prikaz kompletnog stabla dovoljno je kliknuti na oznaku **+** pored šifre artikla ili koristiti dugme **Proširi**. Na taj način prikazuju se svi nivoi sastavnice, pri čemu su različite vrste artikala označene odgovarajućim ikonama:

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image02.png): predstavlja proizvodne artikle;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image03.png): predstavlja nabavne artikle;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image04.png): predstavlja artikle kooperacije.

Nakon proširivanja stabla dostupna su sljedeća **specifična dugmad** za odabrani artikal:

> **Dodaj komponentu**: omogućava unos nove komponente u sastavnicu;  
> **Obriši komponentu**: omogućava brisanje odabrane komponente;  
> **Proširi**: potpuno razvija stablo sastavnice;  
> **Kopiraj komponentu**: kopira odabranu komponentu;  
> **Isijeci komponentu**: isijeca (*cut*) odabranu komponentu;  
> **Nalijepi komponentu**: lijepi (*paste*) prethodno kopiranu ili isječenu komponentu;  
> **MRP parametri**: otvara [MRP parametre](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) odabrane komponente;  
> **Radni ciklus**: otvara [Radni ciklus](/docs/erp-home/registers/production/routes/new-route) odabrane komponente;  
> **Ažuriraj strukturu**: ažurira sve informacije sastavnice (na primjer, ako je promijenjen opis artikla, nakon pokretanja ove funkcije prikazaće se ažurirani opis).

## Informacije o roditelju i komponenti

Odabirom bilo koje komponente u stablu, u desnom dijelu prozora prikazuju se informacije o njenom roditelju (gornji dio) i o samoj komponenti (donji dio).

**Sastavnica**: prikazuju se verzija sastavnice, klasa, šifra, opis i varijanta roditeljskog artikla, količina roditelja na koju se odnosi količina komponente i pripadajuća mjerna jedinica.
Za količinu je moguće odrediti da li je **fiksna** ili **promjenljiva**, odnosno da li će se uvijek proizvoditi ista količina ili ona može varirati između proizvodnih naloga.
Takođe je moguće označiti sastavnicu kao **Fiktivnu sastavnicu**, čime se ona neće uzimati u obzir tokom planiranja proizvodnje ili MRP izračuna.
Dostupno je i polje **Napomena** za unos dodatnih informacija, kao i polja koja prikazuju datum početka važenja, datum unosa i datum posljednje izmjene sastavnice.

:::note Napomena
**Datum važenja** omogućava pregled sastava sastavnice za određeni datum, čime je moguće pratiti istoriju svih izmjena.

Na primjer, uklanjanjem datuma važenja prikazaće se sve komponente koje su ikada bile dio sastavnice od njenog nastanka, pri čemu će komponente koje više nisu važeće biti označene crvenom bojom.
:::

**Komponenta**: prikazuju se klasa, šifra, opis, varijanta i mjerna jedinica odabrane komponente, kao i njen prioritet odnosno redoslijed prikaza u stablu.

Prikazuje se i informacija da li je komponenta fiktivna. Opcija **Fiktivna** omogućava da se komponenta smatra fiktivnom samo unutar konkretne sastavnice.
U slučaju fiktivnog artikla ili fiktivne komponente, procedure **Glavnog planiranja** i **MRP-a** tokom obračuna potreba preskaču tu komponentu i direktno obrađuju potrebe njenih podkomponenti, ukoliko one postoje. Za odabranu komponentu dostupne su i sve pripadajuće kartice.

### Opšti podaci

**Količina**: predstavlja količinu komponente potrebnu za proizvodnju referentne količine njenog roditeljskog nivoa;
**Jedinica mjere upotrebe**: može se razlikovati od osnovne mjerne jedinice same komponente.
**Fiksno**: označava da će se uvijek koristiti ista količina komponente za proizvodnju roditeljskog artikla.
**Promjenljivo**: označava da će se količina komponente mijenjati u zavisnosti od količine roditeljskog artikla.
**Procenat odstupanja količine (negativno i pozitivno)**: određuje dozvoljeno odstupanje stvarno utrošene količine komponente u odnosu na definisanu količinu.
**Početak važenja** i **Kraj važenja**: određuju period u kojem je komponenta važeća u sastavnici.
**Prioritet**: određuje redoslijed prikaza komponente u stablu sastavnice.
**Dozvoljeno knjiženje**: određuje da li će komponenta biti uključena u skladišna knjiženja. Tokom generisanja skladišnih dokumenata obrađuju se samo komponente kod kojih je ova opcija aktivna.
**Kritično**: ako je uključeno, komponenta se označava kao kritična. Trenutno se koristi samo u proceduri [Planiranje sa konačnim kapacitetima](/docs/planning/ms-master-scheduling/finite-capacityscheduling).
**Podrazumijevani procenat otpada**: omogućava automatsko uvećanje potrebne količine komponente za definisani procenat otpada.
**Fiktivni nivo**: ako je uključeno, procedure **Glavnog planiranja** i **MRP-a** preskaču ovu komponentu prilikom obračuna potreba.
**Referentna šema**: omogućava unos slobodne napomene vezane za komponentu (na primjer, oznaka tehničkog crteža).
**Napomene**: omogućavaju unos dodatnih napomena za komponentu.

### Alternative

Na ovoj kartici moguće je definisati alternativne komponente koje će se koristiti prema definisanom prioritetu ukoliko osnovna komponenta nije dostupna u trenutku proizvodnje.
Alternative se uzimaju u obzir tokom skladišnih knjiženja kada se koristi skladišni predložak kod kojeg su aktivirane opcije **Alternative** i/ili **Mješovite alternative**.
Procedure **Glavnog planiranja** i **MRP-a** uzimaju alternative u obzir samo ako su aktivirane odgovarajuće opcije:

- za Glavno planiranje potrebno je aktivirati opciju **Razmatraj alternative materijala**, koja se nalazi u prozoru Glavnog planiranja, na kartici [Opšti parametri](/docs/planning/ms-master-scheduling/general-schedule);
- za MRP potrebno je aktivirati opciju **Razmatraj alternative materijala**, koja se nalazi u prozoru [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters).

### Faze razduženja

Na ovoj kartici moguće je definisati fazu proizvodnje u kojoj će se izvršiti razduženje komponente.
Postoje tri načina razduženja materijala: **Automatsko**, **Sa liste** i **Ručno**, a definišu se u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters).

Ako je izabrano **Ručno** razduženje, **Fluentis** automatski razdužuje materijal koji nije dodijeljen nijednoj fazi na posljednjoj fazi koja ima aktivirane opcije **Skladišna** i **Proizvodna**, ukoliko proizvodni ciklus sadrži više faza.

### Ciklus

Na ovoj kartici prikazan je spisak [faza](/docs/configurations/tables/production/standard-phases) koje čine [Radni ciklus](/docs/erp-home/registers/production/routes/new-route) odabranog artikla.

### Komponente

Na ovoj kartici prikazuju se sve komponente odabranog artikla.

Komponente je moguće dodavati, mijenjati i brisati direktno iz ove kartice ili korišćenjem odgovarajućih dugmadi na *ribbon* traci (**Dodaj**, **Kopiraj**, **Nalijepi**, **Isijeci** i **Obriši komponentu**).

### Napomene

Na ovoj kartici moguće je unositi napomene, kao i dodavati datoteke ili slike koje treba uzeti u obzir tokom proizvodnje.

### Dodatni podaci – Sastavnica

Na ovoj kartici moguće je pregledati i po potrebi izmijeniti dodatne podatke koji se odnose na sastavnicu odabrane komponente.
Kartica je dostupna samo ako odabrana komponenta ima vlastitu sastavnicu.

### Dodatni podaci – Komponenta

Na ovoj kartici moguće je pregledati i po potrebi izmijeniti dodatne podatke koji se odnose na odabranu komponentu.
Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte dokument [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).