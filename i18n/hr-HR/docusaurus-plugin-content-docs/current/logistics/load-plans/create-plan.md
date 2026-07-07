---
title: "Unos plana utovara"
sidebar_position: 2
sidebar_label: "Kreiranje plana utovara"
description: "Vodič za kreiranje i upravljanje planom utovara u Fluentis ERP-u."
schema: "TechArticle"
tags: ["Plan utovara", "Logistika", "ERP"]
keywords: ["Plan utovara", "Kreiranje", "Narudžbe kupaca", "Priprema robe"]
---

# Kreiranje plana utovara

**Plan utovara** dokument je koji se kreira između narudžbe kupca i pripreme robe za utovar.

## Pretraživanje narudžbi kupaca

Polazišna točka za kreiranje plana utovara jest pretraživanje i odabir narudžbi kupaca koje je potrebno uključiti u plan. U području filtra moguće je izvršiti napredno pretraživanje narudžbi koje je potrebno realizirati među narudžbama sa statusom *Nerealizirano* ili *Djelomično realizirano*.

**Postavke pretraživanja**:
- Prema zadanim postavkama, u poljima **Od datuma isporuke** i **Do datuma isporuke** predlažu se datum početka i završetka tekućeg tjedna, ali ih je moguće promijeniti.
- U [Parametrima planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) moguće je:
  - promijeniti datume isporuke predložene za pretraživanje;
  - odabrati hoće li se prikazivati i retci artikala koji se nalaze u otvorenim planovima utovara;
  - postaviti različite boje redaka ovisno o raspoloživosti potrebnoj za realizaciju narudžbe.

**Dostupni filtri**:
- **Prikaži narudžbe s datumom isporuke na isključeni dan**: omogućuje prikaz u mreži i narudžbi koje imaju datum isporuke na blokirani dan u kalendaru, primjerice blagdan.  
- **Prikaži narudžbe s ispravnim datumom isporuke**: omogućuje prikaz narudžbi s važećim datumom.

Narudžbe je moguće otvoriti dvostrukim klikom.

### Podaci u mreži rezultata

- **Vrsta**: sadrži [vrstu](/docs/configurations/tables/sales/sales-order-types) narudžbe kupca, nakon čega slijede podaci o narudžbi kao što su **Broj**, **Datum**, **Artikl** itd.
- **Napomene**: omogućuju pregled napomena iz redaka narudžbe i napomena plana utovara.
- **Količina**: prikazuje ukupnu količinu retka artikla u narudžbi.
- **Preostala količina**: prikazuje preostalu količinu narudžbe koja još nije realizirana.
- **Narudžba prisutna u drugom planu utovara**: označava da je narudžba već uključena u drugi plan.
- **Narudžba prisutna u drugom otvorenom planu utovara**: označava da je narudžba već uključena u drugi otvoreni plan.
- **Raspoloživost**: vidljiva je samo ako su u [Parametrima planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) aktivirane oznake za raspoloživost.  
Raspoloživost se odnosi na skladište navedeno u retku narudžbe na predviđeni datum isporuke ako je taj datum u budućnosti. Ako je datum isporuke u prošlosti, raspoloživost se izračunava na današnji datum. Osim toga, ako je redak artikla već uključen u drugi plan utovara za koji nisu kreirani drugi dokumenti, kao što su priprema robe za utovar/istovar, otpremnice ili računi, njegova se količina oduzima od raspoloživosti prikazane u retku artikla. Stoga se raspoloživost prikazana u planovima utovara može razlikovati od raspoloživosti prikazane u funkcionalnosti **Analiza raspoloživosti**.
- **Zaliha**: vidljiva je samo ako su u [Parametrima planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) aktivirane oznake za raspoloživost.  
Zaliha se odnosi na skladište navedeno u retku narudžbe na predviđeni datum isporuke ako je taj datum u budućnosti. Ako je datum isporuke u prošlosti, zaliha se izračunava na današnji datum.
- **Artikli**: omogućuje unos količine artikla koju je potrebno realizirati.  
Vrijednost *Artikli* izračunava se za artikle kojima se ne upravlja prema jedinicama tereta, dok se za artikle kojima se upravlja prema jedinicama tereta izračunava *Broj jedinica tereta*. Ako je vrijednost *Artikli* jednaka nuli, to znači da retci narudžbe nemaju raspoloživu količinu za plan utovara.

### Radnje pomoću gumba

Nakon odabira redaka narudžbi koje je potrebno obraditi u planu utovara, moguće je izvršiti različite radnje pomoću gumba na traci izbornika. Ako u parametrima obavezna raspoloživost nije postavljena kao uvjet, moguće je realizirati i retke bez raspoložive količine.

- **Umetni narudžbu**: prenosi odabrane retke na karticu **Priprema plana utovara**.
- **Napomena otpreme**: prikazuje *Napomene za otpremu* unesene na kartici *Isporuka* u *Matičnim podacima kupca*.
- **Svojstva narudžbe**: otvara **Status realizacije** odabrane narudžbe.
- **Izmijeni napomene plana utovara**: omogućuje izmjenu **Napomena plana utovara** na kartici *Artikli* narudžbe kupca.

## Priprema plana utovara

Na ovoj se kartici predlažu podaci za pripremu plana utovara. Prema zadanim postavkama prikazuju se podaci postavljeni u tablici [Vrste plana utovara](/docs/configurations/tables/logistics/load-plan-type), dok se ostali podaci mogu unijeti ručno.

#### Posebni gumbi

- **Spremi**: omogućuje spremanje plana utovara.
- **Postavi prijevoznika**: otvara formu za pretraživanje **Prijevoznici** radi odabira prijevoznika koji će se povezati s planom utovara; odabrani prijevoznik prikazat će se u stupcu **Prijevoznik** u mreži.
- **Izmijeni napomene prijevoznika**: omogućuje izmjenu napomena prijevoznika i prikazuje ih u stupcu *Napomene prijevoznika* u mreži.
- **Izmijeni broj prijevoznika (vektora)**: omogućuje podjelu otpreme ako isti prijevoznik dolazi s više dostavnih vozila.
- **Pusti plan**: čini plan dostupnim za kreiranje drugih dokumenata, primjerice pripreme robe.
- **Premjesti u drugi plan utovara**: premješta redak u postojeći plan utovara odabran putem forme za pretraživanje.
- **Kreiranje uzimanje sa zalihe**: kreira *Pripremu robe* iz plana utovara; u formi je potrebno unijeti **Vrstu pripreme** i **Operatera**, a moguće je odabrati i hoće li se za svaku narudžbu kreirati zasebna priprema. Kreirana priprema bit će dostupna u funkcionalnosti **Pretraživanje priprema**.

:::important
Za izvršavanje funkcije *Izdaj plan* potrebno je definirati dimenzije plana.  
Dimenzije se automatski izračunavaju na temelju dimenzija, težina i volumena unesenih na kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) te težine i volumena vrste jedinice tereta navedene na kartici [Pakiranje](/docs/erp-home/registers/items/create-new-item) u matičnim podacima artikala uključenih u plan.
:::

### Upravljanje serijama

Ako se artiklima u planu utovara upravlja prema serijama, serije se u kreiranoj pripremi predlažu ovisno o konfiguraciji:

- Ako su serije navedene u narudžbi kupca, predlažu se neovisno o oznakama **Obavezne serije / serijski brojevi** i **Predlaganje serija / serijskih brojeva** u [Parametrima plana utovara](/docs/configurations/parameters/logistics/picking-parameters/).
- Ako serije nisu navedene u narudžbi kupca, a oznake **Obavezne serije / serijski brojevi** i **Predlaganje serija / serijskih brojeva** u [Parametrima plana utovara](/docs/configurations/parameters/logistics/picking-parameters/) su aktivirane, serije se predlažu prema **Vrsti izdavanja** (*FIFO* ili *Datum isteka*) postavljenoj na kartici **Serije i serijski brojevi** u matičnim podacima artikla. Ako je **Vrsta izdavanja** postavljena na *Ručno*, plan/priprema utovara će se kreirati bez serija i serijskih brojeva čak i ako je obaveznost aktivirana.
- Ako je oznaka **Obavezne serije / serijski brojevi** aktivirana, a oznaka **Predlaganje serija / serijskih brojeva** nije aktivirana, plan/pripremu utovara nije moguće kreirati jer se serije i serijski brojevi ne bi predložili.
- Ako oznaka **Obavezne serije / serijski brojevi** nije aktivirana, a oznaka **Predlaganje serija / serijskih brojeva** jest, plan/priprema utovara će se kreirati sa serijama predloženima prema **Vrsti izdavanja** (*FIFO* ili *Datum isteka*) postavljenoj na kartici **Serije i serijski brojevi** u matičnim podacima artikla. Ako je **Vrsta izdavanja** postavljena na *Ručno*, plan/priprema utovara će se kreirati bez serija i serijskih brojeva.
- Ako oznake **Obavezne serije / serijski brojevi** i **Predlaganje serija / serijskih brojeva** nisu aktivirane, plan/priprema utovara će se kreirati bez serija i serijskih brojeva.

## Legenda

Na ovoj se kartici prikazuju položaji i odjeljci za retke plana utovara; oni se konfiguriraju u matičnim podacima *Vozila*.

## Sažetak planova utovara

Na ovoj se kartici prikazuje sažetak podataka povezanih s *Planom utovara*.

## Sažetak i dodatne informacije

Ukratko, kreiranje plana utovara zahtijeva pažljivo pretraživanje i odabir nerealiziranih narudžbi kupaca. Dostupne su različite radnje za optimizaciju postupka, uključujući pripremu plana i upravljanje planom/pripremom utovara.

Za dodatne informacije pogledajte [Parametre planova utovara](/docs/configurations/parameters/logistics/load-plan-parameters) i [Vrste plana utovara](/docs/configurations/tables/logistics/load-plan-type).