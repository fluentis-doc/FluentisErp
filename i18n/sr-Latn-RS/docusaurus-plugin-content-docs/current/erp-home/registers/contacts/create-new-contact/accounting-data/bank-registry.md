---
title: Šifarnik banaka
sidebar_position: 1
---

## 1. Reference

Šifarnik banaka na kartici **Reference** sadrži osnovne podatke o bankarskom računu koje je potrebno uneti:

**ISO**: unesite prva 4 znaka IBAN-a, odnosno 2 znaka za oznaku države (npr. IT) i 2 znaka za šifru institucije.

Šifre **ABI**, **CAB**, broj **tekućeg računa (C/C)** (za italijanske banke potrebno je uneti 5 znakova za ABI i CAB, uključujući početnu nulu, kao i svih 12 znakova italijanskog broja tekućeg računa), međunarodna šifra **SWIFT** i **CIN**.

**Valuta**: navedite valutu u kojoj je izražen bankarski račun.

Moguće je uneti i određene podatke korisne za povezivanje sa aplikacijom **DocFinance®** (eksterni program za upravljanje riznicom):

**R.B.N.**: predstavlja tip odnosa (npr. tekući račun, devizni račun itd.).

**Banka DocFinance**: naziv banke koji se koristi za analizu tokova prema banci i druge funkcije dostupne u aplikaciji DocFinance.

**Šifra banke**: opciona, proizvoljna šifra banke.

**SIA**: šifra za slanje italijanskih elektronskih datoteka, npr. za bankarske potvrde (Ri.Ba.). Ako nije navedena, koristi se podrazumevana vrednost uneta u tabeli Preduzeće (Početna stranica > Tabele > Opšte).

**Referentna banka**: omogućava povezivanje šifarnika banke sa odgovarajućom opštom šifrom [referentne banke](/docs/configurations/tables/general-settings/reference-bank). To može biti korisno za automatsko usmeravanje finansijskih kretanja otvorenih stavki i njihovo uključivanje u analize novčanog toka.

Odeljak koji se odnosi na *elektronsko fakturisanje* trenutno se ne koristi.

## 2. Detalji

U prvom odeljku **Iznos provizija** mogu se uneti sledeće vrednosti:

**Po transakciji**: koristi se prilikom odobravanja hartija od vrednosti.

**Za maksimalno prekoračenje**: ne koristi se automatski.

**Razno**: ne koristi se automatski.

**Za neplaćene stavke**: koristi se za naplatu troškova od korisnika i knjiženje troška u postupku izrade neplaćene stavke. Iznos se unosi u zaglavlje novog zapisa neplaćene stavke, u odgovarajuće polje.

**Avans po fakturi**: koristi se za automatsko dodavanje provizije u modulu [Avansi i naplate](/docs/treasury/advance/advances-collections).

U tabelama **Aktivne**/**Pasivne** nalaze se rasponi kamatnih stopa za obračun aktivnih i pasivnih kamata.

**Datum**: datum početka primene raspona.

**Raspon**: vrednost do koje važi kamatna stopa.

**Kamatna stopa**: procentualna vrednost.

**Šifra kamatne stope**: padajući meni koji omogućava izbor tipova definisanih u povezanoj tabeli *Tipovi bankarskih kamatnih stopa* (*Konfiguracija > Tabele > Opšta podešavanja > Tipovi bankarskih kamatnih stopa*). U toj tabeli moguće je definisati tipove bankarskih kamatnih stopa i odrediti da li važe za aktivne ili pasivne kamate.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/detail/image04.png)

#### Posebna dugmad

> **Izbriši aktivne**: briše odabrane aktivne kamatne stope.
>
> **Izbriši pasivne**: briše odabrane pasivne kamatne stope.

## 3. Kreditni limiti (Castelletti)

Na ovoj kartici definišu se kreditni limiti za prezentaciju hartija od vrednosti banci, zasebno za tipove **Uz uslov naplate (Salvo buon fine)**, **Uz diskontovanje (Allo sconto)** i **Avans** po fakturama (izborom načina **Različito**) ili se može definisati jedan zajednički kreditni limit (izborom načina **Globalno**).

Odobreni iznos kreditnog limita unosi korisnik na osnovu važećih bankarskih uslova, dok će iskorišćeni iznos limita, a samim tim i preostali iznos, Fluentis automatski ažurirati na osnovu prezentacionih lista hartija od vrednosti povezanih sa bankom iz trenutnog šifarnika i obrađenih u modulu *Riznica*.

#### Posebno dugme

> **Ažuriraj**: ažurira vrednosti prikazane na kartici.

## 4. Čekovi

Ova kartica predstavlja ručni šifarnik u koji se unose detalji čekovnih knjižica i podaci o pojedinačno izdatim čekovima.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/cheques/image01.png)

#### Posebna dugmad

> **Izbriši čekovne knjižice**: briše odabranu čekovnu knjižicu.
>
> **Izbriši detalje čekovnih knjižica**: briše detalje odabranih čekova.

## 5. Dani banke

U ovom obrascu moguće je povezati dane valute sa odgovarajućim računovodstvenim šablonima kako bi se automatizovalo izračunavanje datuma valute banke u računovodstvenim kretanjima (ako sami računovodstveni šabloni podržavaju upravljanje danima banke).

Opcija **Radni dani** određuje da li treba uzeti u obzir da li je dan radni ili neradni, pri čemu se uzima u obzir i tabela praznika definisanih za preduzeće (Početna stranica > Alati > Godišnji praznici).

:::note Napomena
Odabrani računovodstveni šablon mora biti omogućen za prikaz podatka o datumu valute banke.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image02.png)

Na taj način podatak će moći da se prikaže unutar računovodstvenog knjiženja koje koristi navedeni računovodstveni šablon i odnosi se na banku za koju je aktivirano odgovarajuće podešavanje.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image03.png)

#### Posebna dugmad

> **Novo**: postavlja pokazivač na unos novog detalja o danima banke.
>
> **Izbriši**: briše odabrane detalje o danima banke.