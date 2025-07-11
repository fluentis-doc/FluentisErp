---
title: Knjiženje Plaćanja Dobavljača
sidebar_position: 1
---

Ova forma se nalazi u Riznica > Plaćanja dobavljača > Knjiženje > Knjiženje plaćanja dobavljača.

Iz ovog prozora moguće je knjižiti plaćanja koja su prethodno unesena u platne naloge.

Alternativno, može se koristiti integrirana procedura [*Automatsko generiranje plaćanja dobavljačima*](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), koja istovremeno generira platni nalog i knjiži plaćanja.

## Kako knjižiti plaćanja

1. Koristite gornji dio obrasca s filtrima za pretraživanje plaćanja koja su kreirana, ali još nisu knjižena: pritisnite gumb *Pretraži*, a u rešetki će biti prikazane sve stavke plaćanja unutar različitih platnih naloga, koje se stoga mogu knjižiti i djelomično. Uobičajena situacija ipak predviđa filtriranje prema referenci platnog naloga i njegovo grupno knjiženje.

2. U donjem dijelu unesite podatke za upravljanje operacijom: **Predložak zapisa knjige** koja će se koristiti za knjiženje, te **datume knjiženja i razgraničenja**. Ako proširite sekciju, možete odabrati **kriterij grupiranja** za knjiženje. 

Zadana opcija, *grupiranje po banci*, omogućuje knjiženje jednog zapisa za svaki bankovni podračun izlaznih sredstava, što je optimalno rješenje za pojednostavljenje usklađivanja bankovnih transakcija s ispisima iz bankovnih izvoda. Alternativno, dostupno je *grupiranje po podračunu dobavljača* ili detaljno knjiženje svake pojedinačne uplate (*Bez grupiranja*).

**Podračun** za evidentiranje **aktivnih i pasivnih rabata** unesenih u platnom nalogu predlaže se na temelju podračuna *izvanredni prihodi* koji je definiran u parametrima glavne knjige. 

**Datum i broj dokumenta** su opcionalni i mogu se unijeti kao referenca zaglavlja knjiženja (na primjer, broj/datum platnog naloga).

Oznaka **zatvaranje stavke** (zadano uključena, ne preporučuje se isključivati) omogućuje ispravno zatvaranje stavke u knjizi dospijeća.


Ako kontna šifra predviđa upravljanje valutnim datumom banke, te je u registru banaka definiran broj dana za njegovo izračunavanje u odnosu na korištenu kontnu šifru, polje će automatski biti popunjeno prilikom knjiženja.

3. Pritisnite gumb **Knjiži** za pokretanje postupka.


### Kartica za vraćanje knjiženja

Omogućuje pregled knjiženja dvostrukim klikom u odjeljku za knjiženja, kao i djelomično/potpuno poništavanje odabranih platnih transakcija. Poništavanje je moguće samo ako je obračunsko razdoblje još uvijek otvoreno (nije izvršten ispis dnevnika i zaključenje računa).

**Specifični gumbi**

**Traži** Pretražuje popis izvršenih knjiženja.

**Poništi knjiženje** Izvršava povratak (rollback) cijelog odabranog knjiženja.

**Poništi pojedinačna knjiženja**  Izvršava povratak (rollback) odabranih pojedinačnih knjiženja.


<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

