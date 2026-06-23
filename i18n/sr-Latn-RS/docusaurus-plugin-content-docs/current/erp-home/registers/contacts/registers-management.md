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

Na taj se način kontakt povezuje s konkretnim računovodstvenim kontom koje ga identificira i u poslovnom i u računovodstvenom smislu, primjerice kao: kupca, domaćeg ili inozemnog dobavljača, agenta, banku, prijevoznika ili drugi poslovni subjekt.
:::

### Pretraživanje šifarnika

Obrazac se otvara putem **Početna stranica > Šifarnik > Šifarnik kontakata** i osmišljen je kako bi korisniku omogućio jednostavno pretraživanje unutar adresara kontakata, s ciljem pregledavanja, izmjene, otkazivanja i eventualnog brisanja ili nastavka unosa novog kontakta, pod uvjetom da korisnik ima potrebna prava za te funkcije.

Kao i svi obrasci za pretraživanje, ovaj se prozor sastoji od područja filtra i tablice rezultata. Nakon što se postave svi željeni filtri, klikom na **Traži** generiraju se rezultati unutar tablice rezultata.

Pozicioniranjem na redak kontakta koji se želi detaljno pregledati i dvostrukim klikom otvara se prozor s detaljima koji sadrži **Opće podatke** i sve **Računovodstvene podatke** povezane s odabranim kontaktom, a koji će biti detaljno opisani u sljedećim člancima.

*Posebna tipka*:

> **Dupliciraj**: omogućuje dupliciranje odabranog šifarnika. Tipka otvara obrazac u kojem je potrebno definirati osnovne elemente kopije: naziv tvrtke, kratki naziv (šifru kontakta), adresu, poštanski broj, mjesto i županiju. Nakon potvrde kopije, novi će se zapis automatski otvoriti za uređivanje. U kopiji kontakta ponovno će se kreirati i sva konta kontnog plana povezana s izvornim kontaktom u aktivnom društvu, uz dodjelu novih šifri prema odgovarajućem brojaču.

### Stvaranje novog kontakta

Novi kontakt moguće je unijeti:

- putem **Početna stranica > Kontakti > Unos novog kontakta**

ili

- klikom na gumb **Novo** unutar obrasca **[Šifarnik kontakata](/docs/erp-home/registers/contacts/registers-management)**.

Obrazac **Šifarnik** sastoji se od dvije kartice:

- **[Općenito](/docs/erp-home/registers/contacts/create-new-contact/general)** gdje se unose osnovni podaci o kontaktu;
- **[Računovodstveni podaci](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro)** koji sadrže skup kartica za unos administrativnih, komercijalnih i logističkih podataka specifičnih za pojedinu vrstu poslovnog partnera.

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