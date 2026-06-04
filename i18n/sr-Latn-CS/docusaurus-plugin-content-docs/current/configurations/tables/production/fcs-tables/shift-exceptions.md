---
title: Izuzeci u kalendaru
sidebar_position: 7
---

Tablica se nalazi na putanji **Tablice > Proizvodnja > Tablice F.C.S. > Izuzeci u kalendaru**.

Podaci u ovoj tablici koriste se isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling). 

Ovaj obrazac omogućuje definiranje izuzetaka u kalendaru za bilo koji resurs koji se simulira u raspoređivaču (Radni centri, Strojevi, Radnici, Proizvodni resursi).
Postoji hijerarhijski odnos između centara i strojeva – ako je centar neaktivan u određeno vrijeme, tada će i povezani strojevi automatski biti neaktivni.
Svaki resurs ima svoj standardni radni turnus, no u određenim danima moguće je definirati drugačiji turnus. Na primjer, blagdani se unose kao izuzeci u kalendaru s praznim radnim turnusom.
Ostali tipični primjeri praznog turnusa uključuju održavanje stroja, odsutnost radnika (godišnji odmor ili bolovanje), održavanje proizvodnih resursa.
Izuzeci se također mogu koristiti za ograničena vremenska razdoblja u kojima se radi manje ili više nego inače (prekovremeni rad, rad na skraćeno radno vrijeme itd.).
Unos izuzetaka vrši se odabirom radnog turnusa, vremenskog razdoblja u kojem će izuzetak vrijediti te elemenata na koje se izuzetak primjenjuje (moguće je istovremeno odabrati više elemenata istog tipa, npr. više centara i više strojeva).

**Pretraživanje izuzetaka u kalendaru**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što postavite sve željene filtre, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži rezultata.  

**Unos izuzetaka u kalendaru**

Za unos novih zapisa potrebno je kliknuti na prvi prazan redak u mreži ili pritisnuti tipku **Novo**. 

Za novi zapis obavezno je unijeti najmanje one podatke koje sustav zahtijeva: **Datum**, **Kategorija** i **Radna smjena**.

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).