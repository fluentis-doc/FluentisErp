---
title: Šifarnik banaka
sidebar_position: 1
---

## 1. Reference

Šifarnik banaka na kartici **Reference** sadrži osnovne podatke o bankovnom računu koje je potrebno unijeti:

**ISO**: unesite prva 4 znaka IBAN-a, odnosno 2 znaka oznake države (npr. IT) i 2 znaka šifre institucije.

**ABI**, **CAB**, broj **tekućeg računa (C/C)** (za talijanske banke potrebno je unijeti 5 znakova za ABI i CAB, uključujući početnu nulu, kao i svih 12 znakova talijanskog broja tekućeg računa), međunarodna šifra **SWIFT** i **CIN**.

**Valuta**: navedite valutu u kojoj je izražen bankovni račun.

Moguće je unijeti i određene podatke korisne za povezivanje s aplikacijom **DocFinance®** (vanjski program za upravljanje riznicom):

**R.B.N.**: predstavlja vrstu odnosa (npr. tekući račun, devizni račun itd.).

**Banka DocFinance**: naziv banke koji se koristi za analizu tijekova prema banci i druge funkcije dostupne u aplikaciji DocFinance.

**Šifra banke**: neobvezna, proizvoljna šifra banke.

**SIA**: šifra za slanje talijanskih elektroničkih datoteka, npr. za bankovne potvrde (Ri.Ba.). Ako nije navedena, koristi se zadana vrijednost unesena u tablici Poduzeće (Početna stranica > Tablice > Opće).

**Referentna banka**: omogućuje povezivanje šifarnika banke s odgovarajućom općom šifrom [referentne banke](/docs/configurations/tables/general-settings/reference-bank). To može biti korisno za automatsko usmjeravanje financijskih kretanja otvorenih stavki i njihovo uključivanje u analize tijeka novca.

Odjeljak koji se odnosi na *elektroničko fakturiranje* trenutačno se ne koristi.

## 2. Detalji

U prvom odjeljku **Iznos provizija** mogu se unijeti sljedeće vrijednosti:

**Po transakciji**: koristi se prilikom odobravanja vrijednosnih papira.

**Za maksimalno prekoračenje**: ne koristi se automatski.

**Razno**: ne koristi se automatski.

**Za neplaćene stavke**: koristi se za naplatu troškova od korisnika i knjiženje troška u postupku izrade neplaćene stavke. Iznos se unosi u zaglavlje novog zapisa neplaćene stavke, u odgovarajuće polje.

**Predujam po računu**: koristi se za automatsko dodavanje provizije u modulu [Predujmovi i naplate](/docs/treasury/advance/advances-collections).

U tablicama **Aktivne**/**Pasivne** nalaze se rasponi kamatnih stopa za obračun aktivnih i pasivnih kamata.

**Datum**: datum početka primjene raspona.

**Raspon**: vrijednost do koje vrijedi kamatna stopa.

**Kamatna stopa**: postotna vrijednost.

**Šifra kamatne stope**: padajući izbornik koji omogućuje odabir vrsta definiranih u povezanoj tablici *Vrste bankovnih kamatnih stopa* (*Konfiguracija > Tablice > Opće postavke > Vrste bankovnih kamatnih stopa*). U toj je tablici moguće definirati vrste bankovnih kamatnih stopa i odrediti odnose li se na aktivne ili pasivne kamate.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/detail/image04.png)

#### Posebni gumbi

- **Izbriši aktivne**: briše odabrane aktivne kamatne stope.
- **Izbriši pasivne**: briše odabrane pasivne kamatne stope.

## 3. Kreditni limiti (Castelletti)

Na ovoj se kartici definiraju kreditni limiti za prezentaciju vrijednosnih papira banci, zasebno za vrste **Uz uvjet naplate (Salvo buon fine)**, **Uz diskontiranje (Allo sconto)** i **Predujam** po računima (odabirom načina **Različito**) ili se može definirati jedan zajednički kreditni limit (odabirom načina **Globalno**).

Odobreni iznos kreditnog limita unosi korisnik na temelju važećih bankovnih uvjeta, dok će iskorišteni iznos limita, a time i preostali iznos, Fluentis automatski ažurirati na temelju prezentacijskih lista vrijednosnih papira povezanih s bankom iz trenutačnog šifarnika i obrađenih u modulu *Riznica*.

#### Posebni gumb

- **Ažuriraj**: ažurira vrijednosti prikazane na kartici.

## 4. Čekovi

Ova kartica predstavlja ručni šifarnik u koji se unose detalji čekovnih knjižica i podaci o pojedinačno izdanim čekovima.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/cheques/image01.png)

#### Posebni gumbi

- **Izbriši čekovne knjižice**: briše odabranu čekovnu knjižicu.
- **Izbriši detalje čekovnih knjižica**: briše detalje odabranih čekova.

## 5. Dani banke

U ovom je obrascu moguće povezati dane valute s odgovarajućim računovodstvenim predlošcima kako bi se automatiziralo izračunavanje datuma valute banke u računovodstvenim kretanjima (ako sami računovodstveni predlošci podržavaju upravljanje danima banke).

Opcija **Radni dani** određuje treba li uzeti u obzir je li dan radni ili neradni, pri čemu se uzima u obzir i tablica praznika definiranih za poduzeće (Početna stranica > Alati > Godišnji praznici).

:::note Napomena
Odabrani računovodstveni predložak mora biti omogućen za prikaz podatka o datumu valute banke.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image02.png)

Na taj će se način podatak moći prikazati unutar računovodstvenog knjiženja koje koristi navedeni računovodstveni predložak i odnosi se na banku za koju je aktivirana odgovarajuća postavka.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image03.png)

#### Posebni gumbi

- **Novo**: postavlja pokazivač na unos novog detalja o danima banke.
- **Izbriši**: briše odabrane detalje o danima banke.