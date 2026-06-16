---
title: Knjiženje plaćanja Dobavljača
sidebar_position: 1
---

Ova forma se nalazi u Riznica > Plaćanja dobavljaču > Knjiženje > Knjiženje plaćanja dobavljača.

Iz ovog prozora moguće je knjižiti plaćanja koja su prethodno unesena u platne naloge (liste za plaćanje).

Alternativno, može se koristiti integrirana procedura [*Automatsko generiranje plaćanja dobavljačima*](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), koja istovremeno generira platni nalog i knjiži plaćanja.

## Kako knjižiti plaćanja

1. Koristi se gornji dio obrasca s filtrima za pretraživanje plaćanja koja su kreirana, ali još nisu knjižena: pritisnuti gumb *Pretraži*, a u tablici će biti prikazane sve stavke plaćanja unutar različitih platnih naloga, koje se stoga mogu knjižiti i djelomično. Uobičajena situacija ipak predviđa filtriranje prema referenci platnog naloga i njegovo grupno knjiženje.

2. U donjem dijelu unesu se podaci za upravljanje knjiženjem: **Tip temeljnice** koja će se koristiti za knjiženje, te **datume unosa i obračuna**. Ako se proširi sekcija, može se odabrati **kriterij grupiranja** za knjiženje. 

Zadana opcija, *grupiranje banke*, omogućuje knjiženje jednog zapisa za svaki bankovni konto izlaznih sredstava, što je optimalno rješenje za pojednostavljenje usklađivanja bankovnih transakcija s ispisima iz bankovnih izvoda. Alternativno, dostupno je *grupiranje po detaljnom kontu (dobavljača)* ili detaljno knjiženje svake pojedinačne uplate (*Ne grupira se*).

**Konto** za evidentiranje **aktivnih i pasivnih doplata** unesenih u platnom nalogu predlaže se na temelju konta *izvanredni prihodi* koji je definiran u parametrima glavne knjige. 

**Datum i broj dokumenta** su opcionalni i mogu se unijeti kao referenca zaglavlja knjiženja (na primjer, broj/datum platnog naloga).

Oznaka **zatvaranje otvorene stavke** (zadano uključena, ne preporučuje se isključivati) omogućuje ispravno zatvaranje stavke u knjizi dospijeća.


Ako kontna šifra predviđa upravljanje valutnim datumom banke, te je u registru banaka definiran broj dana za njegovo izračunavanje u odnosu na korištenu kontnu šifru, polje će automatski biti popunjeno prilikom knjiženja.

3. Pritisnuti gumb **Knjiženje** za pokretanje postupka.


### Kartica za vraćanje knjiženja (Prethodni)

Omogućuje pregled knjiženja dvostrukim klikom u odjeljku za knjiženja, kao i djelomično/potpuno poništavanje odabranih platnih transakcija. Poništavanje je moguće samo ako je obračunsko razdoblje još uvijek otvoreno (nije izvršen ispis dnevnika i zaključenje konta).

**Specifični gumbi**

**Traži** Pretražuje popis izvršenih knjiženja.

**Povrat knjiženja** Izvršava povrat cijelog odabranog knjiženja.

**Povrat temeljnice**  Izvršava povrat odabranih pojedinačnih knjiženja.


<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

