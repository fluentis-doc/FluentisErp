---
title: Konsolidacija
sidebar_position: 1
---

Ova procedura omogućava povezivanje privremenih zatvaranja različitih preduzeća koja se nalaze u istoj bazi podataka, kako bi se kreirao **konsolidovani bilans uspeha** grupe, koji se može štampati ili dalje obrađivati kroz reklasifikovani bilans. Takođe, kreira se i konsolidaciono knjiženje u kojem se **eliminišu interkompanijski prihodi i rashodi**, kao i **interkompanijska potraživanja i obaveze** (u okviru *intercompany* konfiguracije).

U zaglavlju obrasca moguće je definisati opseg datuma za zatvaranja koja će biti uključena u obradu, kao i opciono odabrati matično preduzeće od interesa. Na taj način će u tabeli biti prikazana preduzeća koja nemaju definisano matično preduzeće ili ona koja pripadaju izabranom matičnom preduzeću. Za svako preduzeće prikazuje se poslednje zatvaranje konta kreirano unutar definisanog perioda filtriranja (moguće je izabrati i neko drugo privremeno zatvaranje umesto predloženog). Opcija **Označeno** određuje koja će preduzeća biti uključena u konsolidaciju, dok je u koloni **Kurs** moguće definisati poseban kurs koji će se koristiti za konverziju salda preduzeća čija se valuta razlikuje od valute matičnog preduzeća.

Ispod tabele unose se dodatni parametri koji će se koristiti tokom obrade: opis koji će biti dodeljen konsolidaciji, predložak knjiženja, korisnik (koji je unapred predložen kao trenutno prijavljeni korisnik) i oznaka za konverziju konta/podkonta u konta matičnog preduzeća (*master*).

U okviru tabele preduzeća moguće je, red po red, povezati osnovne podatke. Na osnovu tih podataka sistem identifikuje kupce i dobavljače unutar grupe (na primer, u preduzeću X proverava se da li je preduzeće Y evidentirano kao kupac i/ili dobavljač). Iz knjiženja vezanih za te podkonte, koja su obuhvaćena zatvaranjima, u novo knjiženje unose se troškovi i prihodi sa obrnutim predznakom. Za iste podkonte proveravaju se i otvorene stavke u trenutku konsolidacije, nakon čega se njihova salda poništavaju.

:::tip NAPOMENA
U kontnom planu preduzeća koja imaju definisano matično preduzeće, dostupna su polja za povezivanje sa kontima/podkontima matičnog preduzeća.
:::

## Procedura

:::important[]

Procedura korak po korak za aktivaciju i izvršavanje (primer sa dva preduzeća):

- U tabeli [**Preduzeća**](/docs/configurations/tables/general-settings/company) svakog preduzeća potrebno je popuniti polje ***Šifarnik*** kako bi se povezalo sa kontaktom koji jednoznačno identifikuje to preduzeće u procesu konsolidacije. Na primer, ako se preduzeće zove Alfa, u njegovoj tabeli preduzeća povezuje se prethodno kreiran kontakt pod nazivom „Alfa d.o.o.“.

- U kontnom planu svakog preduzeća potrebno je kreirati podkonto (putem upravljanja **računovodstvenim podacima** osnovnih podataka) tipa kupac ili dobavljač za drugo preduzeće iz grupe i evidentirati međusobne transakcije, na primer kupovinu u preduzeću 1 i odgovarajuću prodaju u preduzeću 2.

- Svako preduzeće izvršava privremeno zatvaranje za isti obračunski period.

- U proceduri *Konsolidacija* biraju se zatvaranja ta dva preduzeća. Sistem zatim generiše korektivna knjiženja za konsolidaciju koja eliminišu međusobne troškove i prihode, kao i međusobna potraživanja i obaveze, dok se transakcije prema eksternim subjektima agregiraju.
:::

## Prethodni

Na kartici **Prethodni** moguće je obrisati prethodno izvršene postupke konsolidacije.