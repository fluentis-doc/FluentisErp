---
title: Advanced F.C.S.
sidebar_position: 5
---

:::important Čemu služi
Fluentis A.F.C.S. sistem omogućava simulaciju proizvodnih, nabavnih, prodajnih i distributivnih procesa organizacije.

Fluentis A.F.C.S. sprovodi veoma realističnu detaljnu simulaciju koja omogućava ostvarenje sledećih ciljeva:

- Preciznu procenu datuma isporuke internim i eksternim kupcima (uključujući DDMRP okruženja).
- Optimizaciju proizvodnih procesa radi postizanja najboljeg odnosa između troškova proizvodnje i nivoa usluge.
- Prepoznavanje kritičnih tačaka koje smanjuju efikasnost proizvodnog sistema i simulaciju korektivnih mera (npr. prekovremeni rad, eksterno izvođenje aktivnosti, povećanje proizvodnog kapaciteta i sl.).
- Merenje kvaliteta proizvodnog plana pomoću ključnih pokazatelja uspešnosti (KPI).
- Simulaciju različitih scenarija i njihovo poređenje putem KPI pokazatelja radi odabira najboljeg rešenja.
- Izradu detaljnih kratkoročnih planova rada za puštanje u proizvodnju.
- Brzo ažuriranje proizvodnog plana na osnovu stvarnog napretka i nepredviđenih događaja (npr. odsustvo radnika, kvar mašine i sl.).
:::

Za pokretanje A.F.C.S. simulacije potrebno je najpre izvršiti fazu učitavanja podataka iz Fluentis baze podataka u RAM memoriju.

Tokom ove faze sprovode se brojne provere ispravnosti podataka za potrebe simulacije. Po završetku mogu se pojaviti poruke o greškama koje onemogućavaju pokretanje simulacije ili upozorenja koja ipak dozvoljavaju nastavak rada.

Ako je faza učitavanja završena bez grešaka, simulacija se može pokrenuti klikom na dugme **Pokreni**, a njen rezultat sačuvati klikom na dugme **Sačuvaj**. Sačuvani rezultati mogu se naknadno analizirati u formi [A.F.C.S. izvršenja](/docs/planning/ms-master-scheduling/fcs-execution).

Ponašanje planera zavisi od vrednosti definisanih u parametrima raspoređivanja, koji su organizovani u sledeće sekcije forme.

### Simulacija

- **Datum i vreme početka simulacije**: ovim poljem određuju se datum i vreme početka simulacije. Prilikom otvaranja forme automatski se predlažu trenutni datum i vreme.

- **Korak simulacije u minutima**: ovim poljem određuje se trajanje pojedinačnog koraka simulacije u višekratnicima od 6 minuta (desetina sata), od najmanje 6 do najviše 30 minuta. Što je korak manji, simulacija će trajati duže za isti vremenski horizont.

  Ako su radne aktivnosti uglavnom kratke, preporučuje se manji korak. Ako su aktivnosti duže, na primer u građevinskom sektoru, može se koristiti veći korak.

- **Broj dana ranijeg puštanja naloga**: faze proizvodnog naloga simuliraju se počev od datuma početka naloga. Ako se želi omogućiti ranije izvođenje operacija (raspoređivanje što ranije ili optimizacija redosleda rada na mašinama sa dugim vremenima podešavanja), u ovo polje treba uneti pozitivnu vrednost.

  Na primer, ako se unese vrednost 10, operacije naloga biće puštene u proizvodnju i potencijalno raspoložive za obradu 10 dana pre datuma početka naloga.

  Negativna vrednost ima suprotan efekat: operacije neće moći da budu puštene u proizvodnju na datum početka naloga, već tek nakon broja dana definisanog ovim parametrom.

  Ukratko, pozitivna vrednost može poboljšati redosled rada na mašinama sa dugim vremenima podešavanja i povećati opterećenje proizvodnje u kratkom roku, ali istovremeno dovodi do ranijeg pokretanja operacija, povećanja vezanog obrtnog kapitala i većih troškova zadržavanja robe u proizvodnji.

  - **Trajanje simulacije u danima**: određuje ukupno trajanje simulacije, računajući od definisanog datuma početka.

### Dobavljači

- **Raspoloživost artikla nakon nabavke od dobavljača (u danima)**: ovaj parametar određuje nakon koliko dana od datuma isporuke navedenog na narudžbini dobavljaču roba postaje raspoloživa za izdavanje sa skladišta u okviru A.F.C.S. simulacije. Radi se o sigurnosnom parametru koji proizvodni plan generisan od strane planera čini realističnijim i pouzdanijim.

  Ako je vrednost ovog parametra nula, roba iz narudžbina dobavljača smatra se dostupnom od dana nakon datuma isporuke. Na primer, ako isporuka dobavljača kasni 3 dana, a ovaj parametar ima vrednost najmanje 3, radni plan koji je izradio planer i dalje će biti validan i izvodljiv jer nijedna operacija koja zahteva tu robu neće biti planirana pre njenog stvarnog dolaska. Ako je parametar postavljen na nulu, operacije koje zahtevaju robu koja kasni i koje su planirane unutar ta 3 dana neće biti moguće izvršiti.

- **Raspoloživost artikla nakon povrata od podizvođača (u danima)**: funkcioniše na isti način kao i prethodni parametar, ali se odnosi na naloge kooperacije.

### Grupisanje

- **Maksimalno vreme čekanja operacije (sati)**: operacija na mašini koja koristi grupisanje operacija može biti stavljena na čekanje kako bi se izvršila zajedno sa drugim fazama koje imaju isti kod grupisanja, sa ciljem optimizacije produktivnosti mašine.

  Ako vreme čekanja faze (izraženo u satima aktivnog radnog vremena mašine) premaši ovu vrednost, operacija se raspoređuje u prvi slobodan radni termin, nezavisno od pravila optimizacije korišćenja mašine.

  Kada ovaj parametar nije definisan, vreme čekanja faze bilo bi neograničeno.

  Na primer, ako je standardna smena mašine 8 sati dnevno, a vrednost ovog parametra 24, faza može čekati najviše 3 radna dana.

  Ovaj parametar služi za ograničavanje kašnjenja koje operacija može pretrpeti zbog optimizacije opterećenja mašine. Što je vrednost veća, to će optimizacija iskorišćenosti mašine biti bolja, ali će prosečna kašnjenja operacija takođe biti veća.

### Podešavanje

- **Smatra se kratkim ako ne prelazi broj minuta**: ako je uz mašinu definisano pravilo podešavanja, kada tokom simulacije postane slobodna, planer može odlučiti da je privremeno ne koristi i ostavi neaktivnom ako nijedna od puštenih operacija nema vreme podešavanja kraće od vrednosti ovog polja i ako je opterećenje radnog centra manje od praga koji određuje kada se centar smatra uskim grlom.

  Ako postoji puštena operacija čije vreme podešavanja ne prelazi zadatu vrednost, ona će bez izuzetka biti dodeljena mašini.

- **Maksimalno kašnjenje operacija zbog podešavanja (u danima)**: operacija može kasniti u odnosu na planirani početak ako, s obzirom na trenutno stanje mašine, vreme podešavanja nije kratko.

  Pošto takva logika može izazvati neprihvatljiva kašnjenja, ovim parametrom definiše se najveće dozvoljeno kašnjenje, nakon čega se operacija izvršava bez obzira na trajanje podešavanja.

- **Procenat opterećenja uskog grla (%)**: predstavlja procenat opterećenja radnog centra iznad kojeg se centar smatra zasićenim.

  U tom slučaju mašine unutar tog centra koje koriste pravila podešavanja uvek će biti angažovane čim postanu slobodne, bez obzira na trajanje podešavanja puštenih operacija koje čekaju obradu.

  Ovaj parametar ima efekat samo za radne centre koji sadrže mašine sa pravilima podešavanja.

- **Trošak dnevnog kašnjenja**: optimizacija redosleda operacija na mašini sa pravilom podešavanja može dovesti do ranijeg izvođenja nekih operacija i odlaganja drugih.

  Ovim parametrom, čiju optimalnu vrednost treba eksperimentalno odrediti u svakoj kompaniji, svakom danu kašnjenja operacije pridružuje se određeni trošak kako bi se pronašao optimalan redosled rada.

  Povećanje ove vrednosti dodatno penalizuje rasporede sa velikim kašnjenjima i smanjuje prosečno kašnjenje operacija na mašinama koje koriste pravila podešavanja.

- **Procenat godišnjeg troška zaliha (%)**: kod mašina sa pravilima podešavanja optimalan redosled rada određuje se uzimajući u obzir i trošak koji proizlazi iz ranijeg izvršavanja operacija radi smanjenja vremena podešavanja.

  To neizbežno generiše trošak nedovršene proizvodnje (WIP), jer ranije izvršavanje operacija povećava potrebu za obrtnim kapitalom (na koji se plaćaju kamate) i zahteva dodatni skladišni prostor, čime rastu troškovi skladištenja robe.

  Povećanje ove vrednosti smanjuje prosečno ranije pokretanje operacija na mašinama koje koriste pravila podešavanja.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom načinu rada obrazaca, pogledajte poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).