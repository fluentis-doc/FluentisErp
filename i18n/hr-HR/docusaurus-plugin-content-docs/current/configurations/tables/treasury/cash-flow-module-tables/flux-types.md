---
title: Vrste toka  
sidebar_position: 2
---

:::tip[FAst Start]
Ova tablica uključena je u postupak [**Fast Start**](/docs/guide/fast-start)

Ako se planira ručna konfiguracija, pogledajte check listu na poveznici stranice.  
:::

Tablica, pripremna za korištenje modula, služi za kodiranje vrsta tokova cash flowa koje tvrtka želi omogućiti za simulacije.  

Preporučuje se kodirati sve predviđene vrste: postupak *automatskog generiranja cash flowa* omogućuje definiranje, svaki put, koje od njih uključiti, a koje ne.

Kodiranje vrste toka je slobodno u šifri i opisu, a kasnije se povezuje pomoću odgovarajućih flagova s podacima kojima se može upravljati.

Predviđene su sljedeće izvori podataka:  

**Šifra**: šifra vrste toka;  

**Opis**: opis vrste toka;  

**Stavke**: izvor podataka su otvorene stavke glavne knjige;  

**Knjigovodstveni saldo**: iz ove vrste toka dobivaju se početne financijske raspoloživosti, u odnosu na *vrste financijskih računa* koje su kodificirane;

**Nalozi kupaca/nalozi dobavljača**: nalozi kupaca, vrste s flagom *cash flow*, ispisani i potvrđeni, a nisu još izvršeni;

**Računi kupnje/prodaje**: računi ispisani/kontrolirani, ali još ne knjiženi (ne uključuju pro-forma račune);  

**Izvanbilančno**: ručno definirane izvanbilančne dospijeće u modulu cash flowa putem forme *Izvanbilančna dospijeća*;

**Primatelji**: naknade profesionalcima još neknjižene (ako su knjižene, spadaju u otvorene stavke);  

**Otpremnice kupnje/prodaje**: otpremnice vrsta s flagom *cash flow*, ispisane i potvrđene, neprocijenjene (ako su procijenjene, spadaju u račune);

**Nalozi i povrati po ugovoru o radu**: nalozi po ugovoru o radu za izvršenje i povrati koji još nisu fakturirani;  

**Zahtjevi za kupnju (RDA)**: zahtjevi za kupnju;  

**Planirani nalozi**: proizvodni nalozi s planiranim vanjskim fazama ili proizvodni nalozi koji zahtijevaju zahtjev za kupnju;  

**Portfelj mjenica**: izdane mjenice (i prezentirane, ovisno o postavci flag *Koristi dospijeće* u formi *Automatsko generiranje cash flowa*);

**Avans**: stvorene odvojene liste avansa računa. Prilikom obrade cash flowa, ako je za ovu vrstu postavljen flag *Koristi u dospijeću* (u formi *Automatsko generiranje Cashflowa*), uzimaju se u obzir iznosi knjiženih avansnih lista kao avansirani iznos na bankovnom računu, te u tokovima po datumima dospijeća. Kada se računi naplate (prilikom obrade novog cash flowa), tokovi po dospijeću se uklanjaju, a iznos na bankovnom računu se ažurira preostalim iznosom koji još nije unaprijed isplaćen, umanjen za eventualne provizije i kamate.