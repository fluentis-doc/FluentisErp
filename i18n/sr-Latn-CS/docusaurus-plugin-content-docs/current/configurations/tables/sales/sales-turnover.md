---
title: Prodajni prihodi
sidebar_position: 10
---

Omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.

Forma se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Pretraži** kako bi se rezultati prikazali u mreži rezultata.  

Za unos novih zapisa potrebno je kliknuti na prvu praznu red u mreži ili pritisnuti tipku **Novo**.

#### Specifična polja  

**Tip**: šifra za identifikaciju prodajnog prihoda;  

**Opis**: opis prodajnog prihoda;  

**Konto/Podkonto/Opis podkonta**: konto troška koji se koristi za knjiženje prodajnih dokumenata;

**Tip PDV-a**: koristi se prilikom knjiženja dokumenta. Obično je postavljeno na generički; za više detalja provjeriti upotrebu u predlošcima kontiranja i knjiženju u administrativnom području;  

**Tip iznosa**: koristi se prilikom knjiženja dokumenta; za više detalja provjeriti [upotrebu](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) u administrativnom području.  

**Obitelj proizvoda/Opis obitelji proizvoda**: polje za statističko dodjeljivanje prodaje za Sales Forecast CRM-a.  

**Detalji po zemljama**: podaci se koriste isključivo za razmjenu podataka s vanjskim programima. U budućnosti će biti moguće definirati različite konta troška po zemlji i tipu knjiženja artikla, povezano s karticom klijenta.  

:::note Napomena
Ako je *Tip prodajnog prihoda* unesen u *Karticu artikla* ta šifra se automatski predlaže u stavkama artikala dokumenta prodaje i automatizira knjiženje dokumenata na određeni konto kontropartije.  
:::

#### Primjer prodajne fakture:

Ako je *Tip prodajnog prihoda* već prisutan u *Kartici artikla*, u dokumentima prodaje će se pojaviti u kartici *Artikli*, u polju *Prodajni prihodi*. Ako nije prisutan u kartici artikla, moguće ga je odabrati izravno unutar dokumenta prodaje putem pripadajuće padajuće liste.

Ako nije unesen u karticu artikla i zaboravi se unijeti ručno u dokumentu prodaje, sustav, kako bi se ne blokiralo knjiženje, omogućuje (ako je to željena opcija) preuzimanje podkonta kontropartije prema zadanoj vrijednosti postavljenoj u Kartica kontakta > kartica Knjigovodstveni podaci > kartica Administracija > **Cijena/Prir. kontropartije po defaultu**.  

Za sve ostalo što nije detaljno objašnjeno u ovom dokumentu o općem funkcioniranju formi, pogledati [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).