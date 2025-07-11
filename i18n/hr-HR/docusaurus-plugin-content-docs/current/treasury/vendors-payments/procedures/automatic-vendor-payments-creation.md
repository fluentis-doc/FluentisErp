---
title: Automatsko kreiranje plaćanja dobavljačima
sidebar_position: 1
---
Ova forma se nalazi u Riznica > Plaćanja dobavljačima > Procedure > Automatsko kreiranje plaćanja dobavljačima

Ova procedura predstavlja alternativu ručnom kreiranju nove [isplatne liste](/docs/treasury/vendors-payments/create-vendor-payments)  i njezinom naknadnom knjiženju, omogućujući da se obje operacije izvrše integrirano, direktno iz ove forme.

## Kako automatski kreirati plaćanje dobavljačima


1. Na prvom tabu *Filtriranje otvorenih stavki* pronađite stavke koje treba platiti. (Moguće je filtrirati i po ABI/CAB kodovima banke preko koje je vezana pojedina stavka, kao i po šifri/opisu banke – širenjem sekcije *Banka*).

Ako proširite sekciju *Vrsta stavki*, *plaćanja stavki primatelja naknada* su *isključena* po defaultu, jer <u> ovu operaciju treba izvršiti unutar modula primatelja naknada</u> ako želite koristiti proceduru za [izdavanje potvrda o obračunatim porezima na dohodak](/docs/finance-area/declarations/declarations/withholding-tax-certification). 

Filtriranje po **analitičkom kontu banke za plaćanje** omogućava kreiranje isplatne liste na temelju kanala plaćanja postavljenih u parametrima partnera i u proceduri [Upravljanje plaćanjima](/docs/treasury/vendors-payments/procedures/payments-support-management).

2. Provjerite ukupne iznose odabranih stavki prikazane na dnu ekrana.


3. Prijeđite na drugi tab **Podaci o plaćanju dobavljača** i postavite različite parametre za upravljanje procedurom: prije svega je potrebno odabrati **banku za plaćanje**, koja će biti nositelj isplatne liste. Unosom ovog podatka aktivira se gumb **Pokreni kreiranje plaćanja iz stavki**.


4. Postavite ostale parametre:

- Oznaka **Koristi banku za plaćanje sa stavke dobavljača, a u nedostatku iz partnera** nalaže proceduri da kreira onoliko isplatnih lista koliko ima različitih banaka za plaćanje dodijeljenih pojedinim stavkama, prema postavkama u proceduri *Upravljanje bankama za plaćanje* ili prema podacima u šifrarniku dobavljača. Ako nije definirano ni jedno ni drugo, plaćanje će biti uključeno u isplatnu listu s bankom unesenom u početnom polju.

- Oznaka **Koristi banku dobavljača iz šifrarnika** prisiljava proceduru da pročita podatke o banci primatelja iz banke postavljene kao default u sekciji *Banke dobavljača* na kartici plaćanja partnera. Ova postavka može biti unaprijed definirana u parametrima modula.

- **Vrsta plaćanja** omogućava definiranje vrste plaćanja koja će biti dodijeljena isplatnoj listi; polje postaje obavezno ako odabrane stavke uključuju različite vrste plaćanja.

- Godina i datum izdavanja po defaultu se određuju prema datumu sustava.

- Oznaka **Nametni datum valute primatelja** omogućava postavljanje datuma valute za primatelja plaćanja unutar SEPA/telematskog zapisa. Ako nije postavljeno, kao valuta se uzima današnji datum. Ako oznaka nije uključena, datum valute će biti jednak datumu dospijeća.

- Polje **Početna napomena** je slobodno polje za unos bilješki o plaćanju, nije standardno korišteno.

- Polje **Završne napomene** koristi se prilikom knjiženja plaćanja za unos opisa stavke u kontu banke.

5. Ako želiš odmah proknjižiti plaćanja, uključi oznaku **Knjiženje stavke**, koja omogućava istovremeno zatvaranje stavki i kreiranje pripadajućih dvostranih knjiženja za plaćanja koja se generiraju. Ako ova opcija nije uključena, knjiženje možeš obaviti naknadno koristeći *odvojenu proceduru knjiženja*.

6. Unesi kontni nalog koji će se koristiti za knjiženje, datume knjiženja i razdoblja pripadnosti. Konti za knjiženje prihoda i rashoda po osnovi zaokruženja automatski se predlažu na temelju konta *izvanredni prihodi* definiranog u parametrima kontnog plana. Datum i broj dokumenta, kao referenca zaglavlja knjiženja, su opcionalni (npr. broj i datum isplatne liste).

S desne strane nalazi se zadano uključena oznaka **Zatvaranje stavki** (ne preporučuje se isključiti) i kriterij za grupiranje knjiženja **Grupiraj po banci**, koji omogućuje da se evidentira jedno knjiženje po svakom bankovnom kontu s kojeg ide isplata.

Alternativno su dostupne opcije **Grupiraj po kontu dobavljača** i **Ne grupiraj**, koja knjiži svako plaćanje pojedinačno.

Ako kontni nalog uključuje upravljanje datumom valute banke i u šifrarniku banaka je definiran broj dana za obračun valute u odnosu na odabrani kontni nalog, polje datum valute automatski će se popuniti prilikom knjiženja.

7. Pritisni gumb **Pokreni kreiranje plaćanja iz stavki.**


**<a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Si rinvia al Tutorial - Link YouTube </a>**

### Kartica za poništavanje

Omogućuje pregled knjiženja dvostrukim klikom na dio ekrana s prikazom knjiženja, kao i djelomično ili potpuno poništavanje odabranih plaćanja. Poništavanje je moguće samo ako je razdoblje još uvijek otvoreno za izmjene (nije izvršten ispis dnevnika glavne knjige i nije provedeno zaključenje razdoblja).



**Specifični gumbi**

**Pretraži prethodne**: Pretražuje popis prethodno izvršenih kreiranja.

**Poništi kreiranje**: Ovom tipkom briše se cjelokupno izvršeno knjiženje, uključujući sva povezana plaćanja.

**Poništi plaćanje**: Ova tipka omogućava poništavanje odabranog plaćanja.

