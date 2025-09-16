---
title: Vrsta kontakta 
sidebar_position: 1
---

To je tabela koja omogućuje definiranje **Tipova kontakta** u CRM-u kako bi se mogli kategorizirati.
Sastoji se od dijela za filtriranje u kojem se može pretraživati po kodu ili opisu tipa, te od mreže u kojoj će biti navedeni svi uneseni tipovi kontakta.
Unutar ovog obrasca također je moguće dodati nove tipove kontakta u mrežu klikom na gumb ![](/img/neutral/common/new.png) Novo: na taj način će se dodati nova linija unutar mreže gdje će se unijeti kod i opis novog tipa. Za svaki kontakt također je moguće definirati:
-	Tipologija, odabir jednog od zapisa iz mreže: Kontakt, Potencijalni klijent, Prospekt, Prilika, Klijent, Dobavljač; 
-	Kartice koje će se prikazivati za tu vrstu kontakta među sljedećima: Aktivnosti, Reference, Adrese, Bilješke, Upravljanje dokumentima, Izvještaji o posjetima, Poslovna kategorija, Područje, Agenti, Newsletter, Plaćanje, Ponude, Narudžbe kupaca, Otpremnice prodaje, Intervencije, Dodatni podaci, Radno vrijeme, Konkurenti, Telefonski poziv, Marketinške kampanje, Cjenici.

Za svaki tip kontakta također je moguće definirati  

## Uloga tipa kontakta

odnosno za pojedinačne Fluentis korisnike (ili grupe korisnika definirane prema ulogama), moguće je odrediti koje kartice mogu biti prikazane. Za svaku vrstu uloge kontakta potrebno je definirati:
**Datum kreiranja**: datum stvaranja vrste uloge kontakta;
**Uloga**: odnosi se na tablicu uloga Fluentis korisnika;
**Operater**: odnosi se na tablicu Fluentis korisnika.
**Kartice omogućene po ulozi/operatoru**: koje kartice korisnik može pregledavati i uređivati među dostupnima, kao što su: Aktivnosti, Adresa, Agenti, Poslovna kategorija, itd.

## Extra data

Također je moguće za svaku vrstu kontakta definirati i [Extra data](/docs/configurations/utility/extra-data/extradata/search-extradata/), koji će se prikazivati za kontakte koji pripadaju toj vrsti (za dodatne informacije o Dodatnim podacima pogledajte odgovarajući odjeljak ovog priručnika).

## Pipeline kontakta

Popis dostupnih statusa za vrstu kontakta, konfiguriran od strane korisnika.
Ako kontakt ima pridružen workflow i stanje workflowa odgovara jednom od statusa dostupnih za tu vrstu kontakta, polje „Pipeline kontakta“ u evidenciji kontakta automatski će se ažurirati.
Dakle, pri svakoj promjeni statusa workflowa, ako postoji podudaranje, polje „Pipeline kontakta“ automatski će se osvježiti. Na taj će način workflow i polje Pipeline kontakta u evidenciji uvijek biti usklađeni.
