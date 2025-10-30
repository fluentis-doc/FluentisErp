---
title: Automatsko kreiranje likvidacije provizija
sidebar_position: 1
---

Forma se otvara putem putanje *Prodaja > Agenti > Procedure > Automatsko kreiranje likvidacije provizija*.

Postupak automatskog kreiranja likvidacije provizija izvršava konačni izračun likvidacija agenata prema postavljenim parametrima. 


## Izračun likvidacija

Nakon pokretanja pretrage, u sekciji **Lista agenata** prikazat će se svi agenti definirani u sustavu. U ovom dijelu potrebno je odabrati (uz pomoć tipki *Ctrl* ili *Shift* za višestruki odabir) agente za koje se želi izvršiti izračun.  

Vidljiv je **tip stjecanja prava** na proviziju agenta, kako bi se mogli **ispravno postaviti filtri s desne strane** u skladu s postavkama agenta.  

S desne strane nalaze se sljedeći filtri:  

- filter po valuti dokumenta, za kreiranje zasebnih likvidacija po valuti;  

- tri sekcije filtera ovisno o referentnom dokumentu (narudžba / otpremnica / račun — za agente kojima se provizija priznaje po potvrdi narudžbe, izvršenoj isporuci ili izdanom računu);  

- sekcija filtra po **stavkama (partite)**, za agente kojima se provizija priznaje po **dospijeću** ili po **naplati**: na temelju postavljenog datuma bit će uzete u obzir stavke s ranijim dospijećem (u prvom slučaju) ili iznosi povezani s **naplatama evidentiranim** u računovodstvu **s ranijim datumom** (u drugom slučaju).  

U slučaju **efekata**, oni se neće smatrati dospjelima sve do **datuma dospijeća**, tj. datuma dospijeća **uvećanog za broj dana rizika kupca**, definiranog u parametrima istoimenog modula.  

:::note[Napomena]
Kod metode *po naplati*, odabir provizija za likvidaciju uvijek se odnosi na “sve do zadanog datuma”; nije moguće odabrati samo ono što je dospjelo unutar određenog vremenskog raspona, niti postoji poveznica s poljem periodičnosti likvidacije u [kartici agenta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement).


To je nužno jer, za razliku od dokumenata (koji se više ne mijenjaju u već likvidiranim razdobljima), kod plaćanja je moguće unijeti uplatu s datumom unutar već zatvorenog razdoblja (npr. ako banke nisu bile usklađene ili je postojala pogreška u staroj evidenciji). Takvi bi podaci inače bili izgubljeni u budućim izračunima.  
:::

Flag **Pretvori provizije koristeći tečaj na datum dokumenta** znači da se iznos provizije računa prema tečaju iz datuma dokumenta; u suprotnom, koristi se **tečaj iz datuma likvidacije agenta**, kako je postavljeno u osnovnim poljima forme.  

:::note **Detaljnije objašnjenje:**  
- Ako **flag nije postavljen**, Fluentis će zbrojiti provizije po valuti dokumenta, a zatim taj ukupan iznos pretvoriti u valutu agenta prema tečaju datuma likvidacije (npr. ako je račun u GBP, a agent u USD, sustav će pokušati pronaći izravan tečaj GBP–USD ili USD–GBP; ako ga ne nađe, koristit će tečajeve u odnosu na euro).  
- Ako je **flag postavljen**, Fluentis će svakom dokumentu primijeniti tečaj zabilježen u samom dokumentu za pretvorbu u valutu društva (uz zaokruživanje na broj decimala te valute), a zatim ukupan iznos pretvoriti u valutu agenta.  

Ako bi, primjerice, postojala samo dva dokumenta s istim tečajem jer su izdani istog datuma, mogli bi se pojaviti sitni razliki od nekoliko centi zbog međuzbroja i zaokruživanja po dokumentima — što je teoretski slučaj, ali objašnjava točnu logiku izračuna ovisno o flagu.  

:::

U **donjoj sekciji**, *Podaci za kreiranje likvidacije provizija*, unosi se datum likvidacije, njen opis i mjesec/godina na koju se odnosi obračun Enasarco doprinosa.  

:::important[Važno]
Polja za mjesec/godinu Enasarco treba pažljivo popuniti jer od njih ovisi izračun minimalnog i maksimalnog iznosa doprinosa. Time se izračunu koji se pokreće dodjeljuje “obračunsko razdoblje” radi provjere ispunjenja minimalnog ili maksimalnog iznosa doprinosa — prilagođavajući iznose koje snosi agent i/ili nalogodavac.  

Skale doprinosa Enasarco definirane su u tablici [Kategorije agenata](/docs/configurations/tables/sales/agent-category)  
:::

:::tip PROVIZIJE NA NAPLAĆENO I PRIVREMENE KNJIGE  
Za izračun provizija koje su dospjele uzimaju se u obzir samo knjiženja sa statusom **definitivno**. Sva knjiženja u statusu *privremeno* (uključujući i predujmove) se zanemaruju.  
:::

:::tip PROVIZIJE NA NAPLAĆENO I BANKOVNE PRIMKE  
Kod izračuna provizija uzima se u obzir **datum dospijeća efekta**, čak i ako je stavka kupca zatvorena knjiženjem izdavanja Ri.Ba. dokumenta, neovisno o tome je li efekt prezentiran *na inkaso* ili *na dobro plaćanje*.  
:::

:::danger UPOZORENJE
Obratite posebnu pažnju na postavke **PARAMETARA RIZIKA KUPCA**, gdje se nalaze polja:    

**Broj dana nakon dospijeća za efekte prezentirane na dobro plaćanje** i  
**Broj dana nakon dospijeća za efekte prezentirane na inkaso**.  
Ako su ta polja popunjena, dodaju dodatno kašnjenje u priznavanju provizija.

Također, pri inicijalizaciji novog okruženja potrebno je **barem jednom spremiti formu Parametar rizika kupca** kako bi se učitali zadani parametri (posebno gore navedena polja); u suprotnom, datum dospijeća efekta neće biti ispravno pročitan te će se provizija smatrati dospjelom tek pri zatvaranju stavke za izdavanje Ri.Ba. dokumenta.  
:::


*Tipke*:
> **Pretraga**: pokreće pretragu agenata unutar aktivnog društva.  
> **Izračun likvidacija**: izvršava izračun likvidacija za odabrane agente prema postavljenim filtrima.  

## Povrati 

Kartica *Povrati* omogućuje pronalaženje u kojoj je likvidaciji evidentirana provizija za određene dokumente, ili pronalazak jedne ili više likvidacija prema filtrima u formi.  
Pomoću odgovarajuće tipke moguće je **poništiti kreiranu likvidaciju agenta**. Nije dopušteno poništavanje likvidacija koje su već prenesene u modul za isplatne liste primatelja.


*Tipke*:
> **Pretraga**: pokreće pretragu već izračunatih automatskih likvidacija.  
> **Vraćanje**: poništava kreiranje odabranih likvidacija.