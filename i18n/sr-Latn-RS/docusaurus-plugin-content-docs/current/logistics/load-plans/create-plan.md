---
title: "Unos plana utovara"
sidebar_position: 2
sidebar_label: "Kreiranje plana utovara"
description: "Vodič za kreiranje i upravljanje planom utovara u Fluentis ERP-u."
schema: "TechArticle"
tags: ["Plan utovara", "Logistika", "ERP"]
keywords: ["Plan utovara", "Kreiranje", "Narudžbine kupaca", "Priprema robe"]
---

# Kreiranje plana utovara

**Plan utovara** je dokument koji se kreira između narudžbine kupca i pripreme robe za utovar.

## Pretraživanje narudžbina kupaca

Polazna tačka za kreiranje plana utovara je pretraživanje i odabir narudžbina kupaca koje je potrebno uključiti u plan. U području filtera moguće je izvršiti napredno pretraživanje narudžbina koje je potrebno realizovati među narudžbinama sa statusom *Nerealizovano* ili *Delimično realizovano*.

**Postavke pretraživanja**:
- Prema podrazumevanim postavkama, u poljima **Od datuma isporuke** i **Do datuma isporuke** predlažu se datum početka i završetka tekuće nedelje, ali ih je moguće promeniti.
- U [Parametrima planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) moguće je:
  - promeniti datume isporuke predložene za pretraživanje;
  - odabrati da li će se prikazivati i redovi artikala koji se nalaze u otvorenim planovima utovara;
  - postaviti različite boje redova u zavisnosti od raspoloživosti potrebne za realizaciju narudžbine.

**Dostupni filteri**:
- **Prikaži narudžbine sa datumom isporuke na isključeni dan**: omogućava prikaz u mreži i narudžbina koje imaju datum isporuke na blokirani dan u kalendaru, na primer praznik.  
- **Prikaži narudžbine sa ispravnim datumom isporuke**: omogućava prikaz narudžbina sa važećim datumom.

Narudžbine je moguće otvoriti dvostrukim klikom.

### Podaci u mreži rezultata

- **Vrsta**: sadrži [vrstu](/docs/configurations/tables/sales/sales-order-types) narudžbine kupca, nakon čega slede podaci o narudžbini kao što su **Broj**, **Datum**, **Artikal** itd.
- **Napomene**: omogućavaju pregled napomena iz redova narudžbine i napomena plana utovara.
- **Količina**: prikazuje ukupnu količinu reda artikla u narudžbini.
- **Preostala količina**: prikazuje preostalu količinu narudžbine koja još nije realizovana.
- **Narudžbina prisutna u drugom planu utovara**: označava da je narudžbina već uključena u drugi plan.
- **Narudžbina prisutna u drugom otvorenom planu utovara**: označava da je narudžbina već uključena u drugi otvoreni plan.
- **Raspoloživost**: vidljiva je samo ako su u [Parametrima planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) aktivirane oznake za raspoloživost.  
Raspoloživost se odnosi na skladište navedeno u redu narudžbine na predviđeni datum isporuke ako je taj datum u budućnosti. Ako je datum isporuke u prošlosti, raspoloživost se izračunava na današnji datum. Osim toga, ako je red artikla već uključen u drugi plan utovara za koji nisu kreirani drugi dokumenti, kao što su priprema robe za utovar/istovar, otpremnice ili računi, njegova količina se oduzima od raspoloživosti prikazane u redu artikla. Stoga se raspoloživost prikazana u planovima utovara može razlikovati od raspoloživosti prikazane u funkcionalnosti **Analiza raspoloživosti**.
- **Zaliha**: vidljiva je samo ako su u [Parametrima planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) aktivirane oznake za raspoloživost.  
Zaliha se odnosi na skladište navedeno u redu narudžbine na predviđeni datum isporuke ako je taj datum u budućnosti. Ako je datum isporuke u prošlosti, zaliha se izračunava na današnji datum.
- **Artikli**: omogućava unos količine artikla koju je potrebno realizovati.  
Vrednost *Artikli* izračunava se za artikle kojima se ne upravlja prema jedinicama tereta, dok se za artikle kojima se upravlja prema jedinicama tereta izračunava *Broj jedinica tereta*. Ako je vrednost *Artikli* jednaka nuli, to znači da redovi narudžbine nemaju raspoloživu količinu za plan utovara.

### Radnje pomoću dugmadi

Nakon odabira redova narudžbina koje je potrebno obraditi u planu utovara, moguće je izvršiti različite radnje pomoću dugmadi na traci menija. Ako u parametrima obavezna raspoloživost nije postavljena kao uslov, moguće je realizovati i redove bez raspoložive količine.

- **Umetni narudžbinu**: prenosi odabrane redove na karticu **Priprema plana utovara**.
- **Napomena otpreme**: prikazuje *Napomene za otpremu* unete na kartici *Isporuka* u *Matičnim podacima kupca*.
- **Svojstva narudžbine**: otvara **Status realizacije** odabrane narudžbine.
- **Izmeni napomene plana utovara**: omogućava izmenu **Napomena plana utovara** na kartici *Artikli* narudžbine kupca.

## Priprema plana utovara

Na ovoj kartici predlažu se podaci za pripremu plana utovara. Prema podrazumevanim postavkama prikazuju se podaci postavljeni u tabeli [Vrste plana utovara](/docs/configurations/tables/logistics/load-plan-type), dok se ostali podaci mogu uneti ručno.

#### Posebna dugmad

- **Sačuvaj**: omogućava čuvanje plana utovara.
- **Postavi prevoznika**: otvara formu za pretraživanje **Prevoznici** radi odabira prevoznika koji će se povezati sa planom utovara; odabrani prevoznik prikazaće se u koloni **Prevoznik** u mreži.
- **Izmeni napomene prevoznika**: omogućava izmenu napomena prevoznika i prikazuje ih u koloni *Napomene prevoznika* u mreži.
- **Izmeni broj prevoznika (vektora)**: omogućava podelu otpreme ako isti prevoznik dolazi sa više dostavnih vozila.
- **Pusti plan**: čini plan dostupnim za kreiranje drugih dokumenata, na primer pripreme robe.
- **Premesti u drugi plan utovara**: premešta red u postojeći plan utovara odabran putem forme za pretraživanje.
- **Kreiranje uzimanja sa zalihe**: kreira *Pripremu robe* iz plana utovara; u formi je potrebno uneti **Vrstu pripreme** i **Operatera**, a moguće je odabrati i da li će se za svaku narudžbinu kreirati zasebna priprema. Kreirana priprema biće dostupna u funkcionalnosti **Pretraživanje priprema**.

:::important
Za izvršavanje funkcije *Izdaj plan* potrebno je definisati dimenzije plana.  
Dimenzije se automatski izračunavaju na osnovu dimenzija, težina i zapremina unetih na kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) i težine i zapremine vrste jedinice tereta navedene na kartici [Pakovanje](/docs/erp-home/registers/items/create-new-item) u matičnim podacima artikala uključenih u plan.
:::

### Upravljanje serijama

Ako se artiklima u planu utovara upravlja prema serijama, serije se u kreiranoj pripremi predlažu u zavisnosti od konfiguracije:

- Ako su serije navedene u narudžbini kupca, predlažu se nezavisno od oznaka **Obavezne serije / serijski brojevi** i **Predlaganje serija / serijskih brojeva** u [Parametrima plana utovara](/docs/configurations/parameters/logistics/picking-parameters/).
- Ako serije nisu navedene u narudžbini kupca, a oznake **Obavezne serije / serijski brojevi** i **Predlaganje serija / serijskih brojeva** u [Parametrima plana utovara](/docs/configurations/parameters/logistics/picking-parameters/) su aktivirane, serije se predlažu prema **Vrsti izdavanja** (*FIFO* ili *Datum isteka*) postavljenoj na kartici **Serije i serijski brojevi** u matičnim podacima artikla. Ako je **Vrsta izdavanja** postavljena na *Ručno*, plan/priprema utovara će se kreirati bez serija i serijskih brojeva čak i ako je obaveznost aktivirana.
- Ako je oznaka **Obavezne serije / serijski brojevi** aktivirana, a oznaka **Predlaganje serija / serijskih brojeva** nije aktivirana, plan/pripremu utovara nije moguće kreirati jer se serije i serijski brojevi ne bi predložili.
- Ako oznaka **Obavezne serije / serijski brojevi** nije aktivirana, a oznaka **Predlaganje serija / serijskih brojeva** jeste, plan/priprema utovara će se kreirati sa serijama predloženim prema **Vrsti izdavanja** (*FIFO* ili *Datum isteka*) postavljenoj na kartici **Serije i serijski brojevi** u matičnim podacima artikla. Ako je **Vrsta izdavanja** postavljena na *Ručno*, plan/priprema utovara će se kreirati bez serija i serijskih brojeva.
- Ako oznake **Obavezne serije / serijski brojevi** i **Predlaganje serija / serijskih brojeva** nisu aktivirane, plan/priprema utovara će se kreirati bez serija i serijskih brojeva.

## Legenda

Na ovoj kartici prikazuju se položaji i odeljci za redove plana utovara; oni se konfigurišu u matičnim podacima *Vozila*.

## Sažetak planova utovara

Na ovoj kartici prikazuje se sažetak podataka povezanih sa *Planom utovara*.

## Sažetak i dodatne informacije

Ukratko, kreiranje plana utovara zahteva pažljivo pretraživanje i odabir nerealizovanih narudžbina kupaca. Dostupne su različite radnje za optimizaciju postupka, uključujući pripremu plana i upravljanje planom/pripremom utovara.

Za dodatne informacije pogledajte [Parametre planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) i [Vrste plana utovara](/docs/configurations/tables/logistics/load-plan-type).