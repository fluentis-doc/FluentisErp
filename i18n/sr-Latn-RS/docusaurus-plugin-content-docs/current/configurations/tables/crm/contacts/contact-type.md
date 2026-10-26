---
title: Vrsta kontakta 
sidebar_position: 1
---

To je tabela koja omogućuje definiranje **Tipova kontakta** u CRM-u kako bi se mogli kategorizirati.
Sastoji se od dijela za filtriranje u kojem se može pretraživati po kodu ili opisu tipa, te od mreže u kojoj će biti navedeni svi uneseni tipovi kontakta.
Unutar ovog obrasca također je moguće dodati nove tipove kontakta u mrežu klikom na gumb ![](/img/neutral/common/new.png) Novo: na taj način će se dodati nova linija unutar mreže gdje će se unijeti kod i opis novog tipa. Za svaki kontakt također je moguće definirati:
-	Tipologija, odabir jednog od zapisa iz mreže: Kontakt, Potencijalni klijent, Prospekt, Prilika, Klijent, Dobavljač; 
-	Kartice koje će se prikazivati za tu vrstu kontakta među sljedećima: Aktivnosti, Reference, Adrese, Bilješke, Upravljanje dokumentima, Izvještaji o posjetima, Poslovna kategorija, Područje, Agenti, Newsletter, Plaćanje, Ponude, Narudžbe kupaca, Otpremnice prodaje, Intervencije, Dodatni podaci, Radno vrijeme, Konkurenti, Telefonski poziv, Marketinške kampanje, Cjenici, Poslovne informacije, bodovanje, povezani kontakti i vrsta aktivnosti za aktivnosti unete u tok rada povezane sa bodovanjem.

Za svaki tip kontakta također je moguće definirati:

## Pipeline kontakta

Lista statusa dostupnih za vrstu kontakta, koje konfiguriše korisnik.

Svaki red može se koristiti za označavanje faze u kojoj se kontakt nalazi, na osnovu određenog strukturiranog toka.

Ako prva konfigurisana faza odgovara statusu „Kontakt” / „Contact”, ta vrednost će automatski biti predložena u prodajnom *pipelineu* novog kontakta. Prelazak na sledeće statuse može se izvršiti ručno ili pomoću odgovarajućih skripti u statusima povezanog toka rada.
Za svaku fazu moguće je aktivirati jednu od sledećih oznaka: Kontakt, Potencijalni klijent, Lead, Poslovna prilika, Kupac, Dobavljač ili Partner.
U zavisnosti od aktivirane oznake, ažuriraće se brojači na pločicama (Tiles) i omogućiće se odgovarajuće funkcionalnosti, na primer pretvaranje kontakta u kupca.

Prednosti korišćenja prodajnog *pipelinea* su:
- jednostavnija pretraga kontakata koji se nalaze u određenoj fazi;
- dodeljena vrsta kontakta može ostati nepromenjena, dok se razvoj kontakta u potencijalnog klijenta, lead, poslovnu priliku, kupca, dobavljača ili partnera prati putem prodajnog *pipelinea*.

## Uloga tipa kontakta

odnosno za pojedinačne Fluentis korisnike (ili grupe korisnika definirane prema ulogama), moguće je odrediti koje kartice mogu biti prikazane. Za svaku vrstu uloge kontakta potrebno je definirati:
**Datum kreiranja**: datum stvaranja vrste uloge kontakta;
**Uloga**: odnosi se na tablicu uloga Fluentis korisnika;
**Operater**: odnosi se na tablicu Fluentis korisnika.
**Kartice omogućene po ulozi/operatoru**: koje kartice korisnik može pregledavati i uređivati među dostupnima, kao što su: Aktivnosti, Adresa, Agenti, Poslovna kategorija, itd.

## Bodovanje

Omogućava konfigurisanje kriterijuma za procenu kontakta na osnovu bodova dodeljenih određenim vrednostima.
Svaka stavka bodovanja ima minimalnu i maksimalnu vrednost kojom može uticati na ukupan rezultat, vrednost koraka povećanja i pripadajuće boje.
Dodeljene vrednosti se sabiraju i prikazuju u zaglavlju, u polju **Ukupan broj bodova**, kao i prilikom pretrage kontakata.
Ako je u konfiguraciji bodovanja dodeljena aktivnost, ona će automatski biti dodata u odeljak **Aktivnosti** toka rada, kako bi se mogle pratiti sve promene.


## Extra data

Također je moguće za svaku vrstu kontakta definirati i [Extra data](/docs/configurations/utility/extra-data/extradata/search-extradata/), koji će se prikazivati za kontakte koji pripadaju toj vrsti (za dodatne informacije o Dodatnim podacima pogledajte odgovarajući odjeljak ovog priručnika).

