---
title: Uvod
sidebar_position: 1
---

Modul Rizik kupaca u okviru Fluentis ERP-a predstavlja koristan alat za praćenje i upravljanje finansijskim rizikom povezanim sa kupcima, obezbeđujući stalnu kontrolu izloženosti preduzeća kreditnom riziku. Ovaj modul omogućava analizu i procenu rizika insolventnosti kupaca, pomažući kompanijama da donose informisane odluke i unaprede upravljanje kreditima.

Modul omogućava operateru definisanje i kontrolu kreditnih odobrenja za kupce. Za svakog kupca definiše se kreditni limit i način kontrole, bilo putem jednostavnog upozorenja ili blokade u slučaju prekoračenja. Takođe je moguće definisati prava i uloge unutar preduzeća za korisnike zadužene za autorizaciju blokiranih dokumenata, kako bi se omogućila njihova obrada u izuzetnim slučajevima prekoračenja limita.

Modul se nalazi u okviru Blagajne i preuzima podatke iz aktivnog toka dokumenata i računovodstvenih podataka.

Pre početka upravljanja rizikom kupaca preporučuje se definisanje niza podešavanja koja uključuju unapred definisane tabelarne konfiguracije, kao i pravilnu parametrizaciju osnovnih algoritama.

## Glavne funkcionalnosti

- **Praćenje kreditne izloženosti**: Modul omogućava definisanje prilagođenih kreditnih limita za svakog kupca i kontinuirano praćenje njihove finansijske izloženosti, upoređujući raspoloživo zaduženje sa iskorišćenim kreditom.

- **Procena rizika**: Integrisani su alati za analizu koji omogućavaju klasifikaciju kupaca prema njihovom ponašanju u plaćanju, kao što je prosečno kašnjenje u plaćanju, čime se omogućava proaktivno donošenje odluka u upravljanju potraživanjima i novčanim tokovima.

- **Automatske blokade i obaveštenja**: Ukoliko kupac prekorači kreditni limit ili ima dospela neizmirena potraživanja, sistem može automatski aktivirati blokade za kreiranje novih porudžbina ili slati obaveštenja prodajnom ili administrativnom sektoru.

- **Integracija sa računovodstvom**: Modul je u potpunosti integrisan sa glavnom knjigom i upravljanjem otvorenim stavkama, odakle preuzima podatke za ažuriranje izveštaja o izloženosti riziku i iskorišćenosti kredita svakog kupca. Takođe je povezan sa procesima prodajnog ciklusa, direktno intervenišući pri kreiranju dokumenata kao što su porudžbine, otpremnice i fakture, kako bi upozorio ili blokirao isporuku u slučaju prekoračenja limita.

**Tabele:** Ne postoje specifične tabele za ovaj modul, ali treba napomenuti da različite vrste dokumenata nabavke i prodaje sadrže podešavanja povezana sa rizikom kupaca ([tabele povezane sa modulom Rizik kupaca](/docs/configurations/tables/treasury/customer-risk-module-tables)).

**Preliminarni parametri za podešavanje:** [Parametri rizika kupaca](/docs/configurations/parameters/treasury/customer-risk-parameters).