---
title: Parametri
sidebar_position: 3
---

U okviru odeljka **Parametri**, procedura prikazuje sve stavke sa detaljima artikala unetih u odabrane dokumente, prenoseći iz svakog od njih podatke preuzete iz dokumenta. Konkretno:

![](/img/it-it/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters/image01.png)

**Status i PDV šifra**: preuzimaju se iz registra partnera;

**Iznos u valuti**: prikazuje iznos artikla (*cena × količina − popusti*) u valuti ulaznog računa (polje je dostupno samo za Intra2);

**Vrsta Intrastat transakcije**: preuzima se iz vrste dokumenta;

**Nomenklatura**: preuzima se iz stavke artikla na računu, a ako nije popunjena, iz šifarnika artikala;

**Neto masa**: izračunava se na osnovu težine definisane u šifarniku artikla;

**Dodatna jedinica mere**: može se automatski izračunati ako šifra nomenklature predviđa drugu jedinicu mere, primenom konverzije između osnovne jedinice mere i dodatne jedinice, prema faktorima konverzije definisanim za artikal;

**Statistička vrednost**: izračunava se na više načina, u zavisnosti od podešavanja (procentualna korekcija prema šifarniku kupca/dobavljača ili uvećanje za troškove posebno unete u dokument);

**Šifra prevoza i Način transporta**: preuzimaju se iz šifre otpreme povezane sa dokumentom;

**Podaci o okrugu porekla/odredišta** i **zemlji porekla/odredišta** preuzimaju se iz šifarnika partnera na kojeg glasi dokument ili iz podataka o preduzeću.

Na dnu pregleda prikazane su reference na izvorni dokument svake stavke.

Nakon što se unesu svi potrebni podaci u obrazac (što zavisi od oznake **Pojednostavljeno** u zaglavlju deklaracije, kao i od vrste obračunskog perioda), moguće je pokrenuti kreiranje obrasca. Ova radnja prenosi podatke u odeljke *bis/ter/quater*, u zavisnosti od vrste Intrastat transakcije (tip **2** prenosi se u odeljak **ter** za ispravke, dok se tip **S** prenosi u odeljak **quater**). Pre ovog prenosa moguće je izvršiti prvo grupisanje iznosa. Grupisanje se vrši po dokumentu, pri čemu se vrednosti zaokružuju na cele brojeve.

| Funkcija | Značenje |
| --- | --- |
| Otkaži | Dugme za brisanje odabranih računa. |
| Kreiranje | Pokreće kreiranje Intrastat obrasca prenosom podataka sa ove kartice u odgovarajuće odeljke obrasca. |
| Izbriši sve | Briše sve redove iz tabele. |
| Grupiši | Grupiše redove prema primaocu računa i ostalim zajedničkim podacima. |
| Sačuvaj | Omogućava čuvanje unetih podataka, na primer radi nastavka rada kasnije. |