---
title: Automatsko kreiranje plaćanja dobavljačima
sidebar_position: 1
---
Ova forma se nalazi u Riznica > Plaćanja dobavljačima > Procedure > Automatsko kreiranje plaćanja dobavljačima

Ova procedura predstavlja alternativu ručnom kreiranju nove [liste za plaćanje (nalogu)](/docs/treasury/vendors-payments/create-vendor-payments) i njezinom naknadnom knjiženju, omogućujući da se obje operacije izvrše integrirano, direktno iz ove forme.

## Kako automatski kreirati plaćanje dobavljačima

1. Na prvom tabu *Filter dospijeća plaćanja* pronađite stavke koje treba platiti. (Moguće je filtrirati i po ABI/CAB kodovima banke preko koje je vezana pojedina stavka, kao i po šifri/opisu banke – širenjem sekcije *Banka*).

Ako proširite sekciju *Tip dospjele vrijednosti*, *plaćanja stavki vrijednosti zaposlenika* su *isključena* po *defaultu*, jer <u> ovu operaciju treba izvršiti unutar modula obračuna predstavnika</u> ako želite koristiti proceduru za [izdavanje potvrda o obračunanim porezima na dohodak](/docs/finance-area/declarations/declarations/withholding-tax-certification). 

Filtriranje po **analitičkom kontu banke za plaćanje** omogućava kreiranje isplatne liste na temelju kanala plaćanja postavljenih u parametrima partnera i u proceduri [Upravljanje plaćanjima](/docs/treasury/vendors-payments/procedures/payments-support-management).

2. Provjerite ukupne iznose odabranih stavki prikazane na dnu ekrana.

3. Prijeđite na drugi tab **Podaci za plaćanje dobavljaču** i postavite različite parametre za upravljanje procedurom: prije svega je potrebno odabrati **banku za plaćanje**, koja će biti nositelj liste za plaćanje. Unosom ovog podatka aktivira se gumb **Započni kreiranje plaćanja iz dospijeća plaćanja**.

4. Postavite ostale parametre:

- Oznaka **Koristi banku plaćanja dospjele vrijednosti, ako nedostaje nomenklatura** nalaže proceduri da kreira onoliko isplatnih lista koliko ima različitih banaka za plaćanje dodijeljenih pojedinim stavkama, prema postavkama u proceduri *Upravljanje bankama za plaćanje* ili prema podacima u šifarniku dobavljača. Ako nije definirano ni jedno ni drugo, plaćanje će biti uključeno u isplatnu listu s bankom unesenom u početnom polju.

- Oznaka **Umetni banku prisutnu u registru dobavljača** prisiljava proceduru da pročita podatke o banci primatelja iz banke postavljene kao default u sekciji *Banke dobavljača* na kartici plaćanja partnera. Ova postavka može biti unaprijed definirana u parametrima modula.

- **Način plaćanja** omogućava definiranje vrste plaćanja koja će biti dodijeljena isplatnoj listi; polje postaje obavezno ako odabrane stavke uključuju različite vrste plaćanja.

- Godina i datum izdavanja po *defaultu* se određuju prema datumu sustava.

- Oznaka **Postavi ovaj korisnički datum valute** omogućava postavljanje datuma valute za primatelja plaćanja unutar SEPA zapisa. Ako nije postavljeno, kao valuta se uzima današnji datum. Ako oznaka nije uključena, datum valute će biti jednak datumu dospijeća.

- Polje **Početna bilješka** je slobodno polje za unos bilješki o plaćanju, nije standardno korišteno.

- Polje **Završne napomene** koristi se prilikom knjiženja plaćanja za unos opisa stavke u kontu banke.

5. Ako želiš odmah knjižiti plaćanja, uključi oznaku **Knjiženje dospjele vrijednosti**, koja omogućava istovremeno zatvaranje stavki i kreiranje pripadajućih dvostranih knjiženja za plaćanja koja se generiraju. Ako ova opcija nije uključena, knjiženje možeš obaviti naknadno koristeći *odvojenu proceduru knjiženja*.

6. Unesi konta koja će se koristiti za knjiženje, datume knjiženja i razdoblja pripadnosti. Konta za knjiženje prihoda i rashoda po osnovi se automatski predlažu na temelju konta *izvanredni prihodi* definiranih parametrima kontnog plana. Datum i broj dokumenta, kao referenca zaglavlja knjiženja, su opcionalni (npr. broj i datum isplatne liste).

S desne strane nalazi se zadano uključena oznaka **Zatvaranje otvorene stavke** (ne preporučuje se isključiti) i kriterij za grupiranje knjiženja **Grupiranja po banci**, koji omogućuje da se evidentira jedno knjiženje po svakom bankovnom kontu s kojeg ide isplata.

Alternativno su dostupne opcije **Grupiraj po detaljnom kontu (dobavljača)** i **Nema grupiranja**, koja knjiži svako plaćanje pojedinačno.

Ako predložak uključuje upravljanje datumom valute banke i u šifarniku banaka je definiran broj dana za obračun valute u odnosu na odabrani predložak, polje datum valute automatski će se popuniti prilikom knjiženja.

7. Pritisni gumb **Započni kreiranje plaćanja iz dospijeća plaćanja**

**<a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Pogledaj tutorijal – YouTube link </a>**

### Kartica za poništavanje (Prethodni)

Omogućuje pregled knjiženja dvostrukim klikom na dio ekrana s prikazom knjiženja, kao i djelomično ili potpuno poništavanje odabranih plaćanja. Poništavanje je moguće samo ako je razdoblje još uvijek otvoreno za izmjene (nije izvršen ispis dnevnika glavne knjige i nije provedeno zaključenje razdoblja).

**Specifični gumbi**

**Traži prethodne**: Pretražuje popis prethodno izvršenih kreiranja.

**Izbriši kreirano**: Ovom tipkom briše se cjelokupno izvršeno knjiženje, uključujući sva povezana plaćanja.

**Izbriši plaćanja**: Ova tipka omogućava poništavanje odabranog plaćanja.

