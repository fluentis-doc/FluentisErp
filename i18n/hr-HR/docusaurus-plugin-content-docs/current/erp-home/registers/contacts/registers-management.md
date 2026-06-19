---
title: Šifarnik kontakata
sidebar_position: 2
---

## Kontakti

Kroz ovu funkcionalnost moguće je definirati jedinstveni adresar-šifarnik svih subjekata s kojima društva evidentirana u bazi podataka posluju, bilo kao nositelji dokumenata prodajnog, nabavnog i računovodstvenog ciklusa, bilo kao alternativne adrese i kontaktne lokacije.

:::warning[Pažnja]
Opći podaci definirani na razini **Kontakta** sadrže isključivo osnovne informacije o subjektu, kao što su: naziv tvrtke ili organizacije, ime i prezime fizičke osobe, porezni broj (OIB / PDV ID), adresa i ostali identifikacijski podaci.
Ti podaci predstavljaju zajednički registar (adresar) dostupan svim društvima koja se vode u istoj bazi podataka.
Budući da svako društvo ima vlastiti kontni plan, kako bi se kontakt mogao koristiti u dokumentima i računovodstvenim knjiženjima, potrebno ga je unutar svakog pojedinog društva povezati s odgovarajućom vrstom konta.

Na taj se način kontakt povezuje s konkretnim računovodstvenim kontom koje ga identificira i u poslovnom i u računovodstvenom smislu, primjerice kao: kupca, domaćeg ili inozemnog dobavljača, agenta, banku, prijevoznika, ili drugi poslovni subjekt.
:::

### Pretraživanje šifarnika

Obrazac se otvara putem **Početna stranica > Šifarnik > Šifarnik kontakata** i osmišljen je kako bi korisniku omogućio jednostavno pretraživanje unutar adresara kontakata, s ciljem pregledavanja, izmjene, otkazivanja i eventualnog brisanja ili nastavka umetanja nove reference, podložno mogućnosti da ima potrebna prava za te funkcije. 

Kao i svi obrasci za pretraživanje, ovaj se prozor sastoji od područja filtra i tablice rezultata. Nakon što se postave svi željeni filteri, klikom na **Traži** generiraju se rezultati unutar tablice rezultata.

Pozicioniranjem u redak glavnih podataka koje se želi detaljno pregledati i dvostrukim klikom na njega otvorit će se prozor s detaljima koji sadrži **Opće podatke** i sve **Računovodstvene podatke** koji se odnose na spomenute glavne podatke, koji će biti detaljno opisani u sljedećim člancima.

*Posebna tipka*: 

>**Dupliciraj**: omogućuje dupliciranje odabranog šifarnika. Tipka otvara obrazac u kojem je potrebno definirati osnovne elemente kopije: naziv tvrtke, nadimak (tj. šifru samog šifarnika), adresu, poštanski broj, općinu i pokrajinu. Nakon što je kopija potvrđena, automatski će se otvoriti za uređivanje. U kopiji matičnih podataka, sva konta računovodstvenog plana povezani s matičnim podacima u aktivnom poduzeću također će se ponovno kreirati, dodjeljivanjem novog konta prema progresivnom broju svake knjige.

### Stvori šifarnik

U **Novi šifarnik** moguće je upisati:

- putem **Početna stranica  > Kontakti > Unos novog kontakta**

Ili

- klikom na gumb **Novo**, unutar obrasca **[Šifarnik kontakata](/docs/erp-home/registers/contacts/registers-management)**.

Obrazac **Šifarnik** sastoji se od dvije kartice:
- **[Općenito](/docs/erp-home/registers/contacts/create-new-contact/general)** gdje se mogu pronaći opće informacije o šifarniku;
- **[Računovodstveni podaci](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro)** predstavljaju niz kartica u kojima se mogu unijeti specifičniji administrativni, komercijalni i logistički podaci koji će biti detaljno opisani u sljedećim člancima.

## Sažetak

:::tip[Tijek rada za unos poslovnih partnera]
1. Koristite naredbu **Novo** za unos novog kontakta koji sadrži osnovne matične podatke.
2. Unesite **PDV identifikacijski broj (PDV ID)** te koristite funkciju **Predloži podatke** kako bi sustav automatski popunio opće podatke i provjerio valjanost PDV broja.
3. Povežite kontakt s odgovarajućom **vrstom konta**. Sustav će automatski kreirati pripadajuće računovodstveno konto te omogućiti pristup dodatnim poslovnim podacima.
4. Popunite podatke u pojedinim karticama, posebno:
   - **Uvjeti plaćanja** (za kupce, dobavljače i agente),
   - **IBAN i bankovni podaci** (za banke),
   - te ostale podatke specifične za vrstu poslovnog partnera.
:::