---
title: Vrsta kontakta 
sidebar_position: 1
---

To je tabela koja omogućuje definiranje **Tipova kontakta** u CRM-u kako bi se mogli kategorizirati.
Sastoji se od dijela za filtriranje u kojem se može pretraživati po kodu ili opisu tipa, te od mreže u kojoj će biti navedeni svi uneseni tipovi kontakta.
Unutar ovog obrasca također je moguće dodati nove tipove kontakta u mrežu klikom na gumb ![](/img/neutral/common/new.png) Novo: na taj način će se dodati nova linija unutar mreže gdje će se unijeti kod i opis novog tipa. Za svaki kontakt također je moguće definirati:
-	Tipologija, odabir jednog od zapisa iz mreže: Kontakt, Potencijalni klijent, Prospekt, Prilika, Klijent, Dobavljač; 
-	Kartice koje će se prikazivati za tu vrstu kontakta među sljedećima: Aktivnosti, Reference, Adrese, Bilješke, Upravljanje dokumentima, Izvještaji o posjetima, Poslovna kategorija, Područje, Agenti, Newsletter, Plaćanje, Ponude, Narudžbe kupaca, Otpremnice prodaje, Intervencije, Dodatni podaci, Radno vrijeme, Konkurenti, Telefonski poziv, Marketinške kampanje, Cjenici, Poslovne informacije, bodovanje, povezani kontakti i vrsta aktivnosti za aktivnosti unesene u tijek rada povezane s bodovanjem.

Za svaki tip kontakta također je moguće definirati:

## Pipeline kontakta**

Popis statusa dostupnih za vrstu kontakta, koje konfigurira korisnik.

Svaki redak može se koristiti za označavanje faze u kojoj se kontakt nalazi, na temelju određenog strukturiranog tijeka.

Ako prva konfigurirana faza odgovara statusu „Kontakt” / „Contact”, ta će se vrijednost automatski predložiti u prodajnom *pipelineu* novog kontakta. Prelazak na sljedeće statuse može se izvršiti ručno ili pomoću odgovarajućih skripti u statusima povezanog tijeka rada.
Za svaku fazu moguće je aktivirati jednu od sljedećih oznaka: Kontakt, Potencijalni klijent, Lead, Poslovna prilika, Kupac, Dobavljač ili Partner.
Ovisno o aktiviranoj oznaci, ažurirat će se brojači na pločicama (Tiles) i omogućiti odgovarajuće funkcionalnosti, primjerice pretvaranje kontakta u kupca.
Prednosti korištenja prodajnog *pipelinea* su:
- jednostavnije pretraživanje kontakata koji se nalaze u određenoj fazi;
- dodijeljena vrsta kontakta može ostati nepromijenjena, dok se razvoj kontakta u potencijalnog klijenta, lead, poslovnu priliku, kupca, dobavljača ili partnera prati putem prodajnog *pipelinea*.

## Uloga tipa kontakta

odnosno za pojedinačne Fluentis korisnike (ili grupe korisnika definirane prema ulogama), moguće je odrediti koje kartice mogu biti prikazane. Za svaku vrstu uloge kontakta potrebno je definirati:
**Datum kreiranja**: datum stvaranja vrste uloge kontakta;
**Uloga**: odnosi se na tablicu uloga Fluentis korisnika;
**Operater**: odnosi se na tablicu Fluentis korisnika.
**Kartice omogućene po ulozi/operatoru**: koje kartice korisnik može pregledavati i uređivati među dostupnima, kao što su: Aktivnosti, Adresa, Agenti, Poslovna kategorija, itd.

## Bodovanje

Omogućuje konfiguriranje kriterija za procjenu kontakta na temelju bodova dodijeljenih određenim vrijednostima.
Svaka stavka bodovanja ima minimalnu i maksimalnu vrijednost kojom može utjecati na ukupan rezultat, vrijednost koraka povećanja te pripadajuće boje.
Dodijeljene vrijednosti zbrajaju se i prikazuju u zaglavlju, u polju **Ukupni broj bodova**, kao i u pretraživanju kontakata.
Ako je u konfiguraciji bodovanja dodijeljena aktivnost, ona će se automatski dodati u odjeljak **Aktivnosti** tijeka rada, kako bi se mogle pratiti sve promjene.

## Extra data

Također je moguće za svaku vrstu kontakta definirati i [Extra data](/docs/configurations/utility/extra-data/extradata/search-extradata/), koji će se prikazivati za kontakte koji pripadaju toj vrsti (za dodatne informacije o Dodatnim podacima pogledajte odgovarajući odjeljak ovog priručnika).

