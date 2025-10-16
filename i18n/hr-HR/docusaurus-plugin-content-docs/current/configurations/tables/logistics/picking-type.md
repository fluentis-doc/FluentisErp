---
title: Tipovi pickinga
sidebar_position: 34
---

:::important Čemu služi
Tablica Tip pickinga u sustavu Fluentis omogućuje kodiranje i definiranje različitih tipova pickinga koji se mogu koristiti prilikom izrade lista za preuzimanje. Korisnici mogu unositi nove zapise, uređivati postojeće ili ih brisati, ovisno o operativnim potrebama.

Svaki tip pickinga može imati pridružene specifične parametre, uključujući jedinstveni alfanumerički kôd, numeraciju dokumenata i predloške za manipulaciju robom. Moguće je definirati i tip računa ili otpremnice koji će se koristiti, kao i konfiguracije poput početnog statusa pickinga i prioriteta skladišnih lokacija. Ova fleksibilnost omogućuje tvrtkama prilagodbu sustava vlastitim potrebama, čime se povećava učinkovitost skladišnog poslovanja i omogućuje optimalno upravljanje materijalnim tokovima.
:::

Tablica se nalazi putem izbornika: **Tablice > Logistika > Tipovi pickinga**.

U ovoj tablici moguće je kodirati različite tipove pickinga koji će se koristiti prilikom kreiranja [Novog pickinga](/docs/logistics/picking/picking-management).

Omogućuje unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.

**Pretraživanje tipova pickinga**

Forma se sastoji od područja za filtriranje i područja za prikaz rezultata. Nakon što postavite željene filtre, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u donjoj tablici.

**Unos tipova pickinga**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Novo**.

**Tip/Opis**: jedinstveni alfanumerički kod i opis *Tipa pickinga*;   

**Numeracija**: ovdje se unosi šifra odgovarajuće numeracije. Više informacija dostupno je u članku [Numeracije u Fluentisu](/docs/configurations/tables/fluentis-numerations);

**Numeracija liste za preuzimanje**: označava numeraciju koja će se koristiti za liste utovarnih jedinica kreirane s ovim tipom pickinga;   

**Izvršenje tipa računa**: u ovo polje unosi se tip računa koji se predlaže za kreiranje računa iz pickinga putem predviđene procedure;  

**Izvršenje tipa otpremnice**: u ovo polje unosi se tip otpremnice koji se predlaže za kreiranje otpremnice iz pickinga putem predviđene procedure;  

**Početno stanje**: označava početni *Status* koji se automatski dodjeljuje novom pickingu;

**Skladište / Opis skladišta**: u ova polja unosi se skladište iz kojeg se predlaže kretanje robe na redovima artikala unutar pickinga;     

**Predložak / Opis predloška**: u ova polja navodi se predložak za manipulaciju robom koji se koristi za pickinge ove vrste;  

**Bez izvršenja**: prilikom izvršenja narudžbe putem pickinga, status izvršenja narudžbe se ne mijenja;

**Izvršenje bez zbrajanja količina artikala**: ako je ova opcija aktivna, prilikom kreiranja pickinga na temelju drugog dokumenta, količine artikala na redovima se neće zbrajati; 

**Prijenos**: ako je ova opcija aktivna, označava da se radi o internom prijenosu između skladišta;   

**Lista preuzimanja materijala**: *Tipovi pickinga* s ovom aktivnom opcijom bit će vidljivi u *Listi preuzimanja materijala*;

:::note Napomena
Za *Tipove pickinga* koji će se koristiti u *Listama preuzimanja materijala*, dakle one s aktiviranom opcijom *Lista preuzimanja materijala* potrebno je unijeti skladišni predložak koji uključuje i kontropartiju.  
:::

**Isporuka narudžbi s radnim nalozima**: više se ne koristi;  

**Obavezna utovarna jedinica**: tipovi pickinga kod kojih je ova opcija deaktivirana ne mogu se koristiti za preuzimanje utovarnih jedinica te će biti vidljivi u formi za [Potvrdu pickinga](/docs/logistics/wms/sales/check-row-management) unutar WMS-a. Suprotno tome, tipovi pickinga s aktiviranom ovom opcijom bit će prikazani u modulu [Upravljanje označavanjem](/docs/logistics/wms/sales/check-row-management) u WMS-u. 

**Mogućnost isporuke veće količine**: ako je opcija uključena, sustav omogućuje isporuku količine veće od one navedene u pickingu. Funkcija je dostupna i u [Upravljanju označavanjem](/docs/logistics/wms/sales/check-row-management) i u [Potvrdi pickinga](/docs/logistics/wms/sales/check-row-management). Ako opcija nije uključena, a pokuša se isporučiti veća količina, pojavljuje se upozorenje i onemogućuje se nastavak.  
**Ispis**: označava naziv pripadajuće ispise te **Broj kopija** koje se automatski ispisuju.   

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).

