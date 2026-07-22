---
title: Advanced F.C.S.
sidebar_position: 5
---

:::important Čemu služi
Fluentis A.F.C.S. sustav omogućuje simulaciju proizvodnih, nabavnih, prodajnih i distribucijskih procesa organizacije.

Fluentis A.F.C.S. provodi vrlo realističnu detaljnu simulaciju koja omogućuje ostvarenje sljedećih ciljeva:

- Preciznu procjenu datuma isporuke internim i vanjskim kupcima (uključujući DDMRP okruženja).
- Optimizaciju proizvodnih procesa radi postizanja najboljeg omjera između troškova proizvodnje i razine usluge.
- Prepoznavanje kritičnih točaka koje smanjuju učinkovitost proizvodnog sustava te simulaciju korektivnih mjera (npr. prekovremeni rad, vanjsko izvođenje aktivnosti, povećanje proizvodnog kapaciteta i sl.).
- Mjerenje kvalitete proizvodnog plana pomoću ključnih pokazatelja uspješnosti (KPI).
- Simulaciju različitih scenarija i njihovu usporedbu putem KPI pokazatelja radi odabira najboljeg rješenja.
- Izradu detaljnih kratkoročnih planova rada za puštanje u proizvodnju.
- Brzo ažuriranje proizvodnog plana na temelju stvarnog napretka i nepredviđenih događaja (npr. izostanak radnika, kvar stroja i sl.).
:::

Za pokretanje A.F.C.S. simulacije potrebno je najprije izvršiti fazu učitavanja podataka iz Fluentis baze podataka u RAM memoriju.

Tijekom ove faze provode se brojne provjere ispravnosti podataka za potrebe simulacije. Po završetku mogu se pojaviti poruke o pogreškama koje onemogućuju pokretanje simulacije ili upozorenja koja ipak dopuštaju nastavak rada.

Ako je faza učitavanja završila bez pogrešaka, simulacija se može pokrenuti klikom na gumb **Pokreni**, a njezin rezultat spremiti klikom na gumb **Spremi**. Spremljeni rezultati mogu se naknadno analizirati u formi [A.F.C.S. izvršenja](/docs/planning/ms-master-scheduling/fcs-execution).

Ponašanje planera ovisi o vrijednostima definiranima u parametrima raspoređivanja, koji su organizirani u sljedeće sekcije forme.

### Simulacija

- **Datum i vrijeme početka simulacije**: ovim poljem određuju se datum i vrijeme početka simulacije. Prilikom otvaranja forme automatski se predlažu trenutačni datum i vrijeme.

- **Korak simulacije u minutama**: ovim poljem određuje se trajanje pojedinog koraka simulacije u višekratnicima od 6 minuta (desetina sata), od najmanje 6 do najviše 30 minuta. Što je korak manji, simulacija će trajati dulje za isti vremenski horizont.

  Ako su radne aktivnosti uglavnom kratke, preporučuje se manji korak. Ako su aktivnosti duže, primjerice u građevinskom sektoru, može se koristiti veći korak.

- **Broj dana ranijeg puštanja naloga**: faze proizvodnog naloga simuliraju se počevši od datuma početka naloga. Ako se želi omogućiti ranije izvođenje operacija (raspoređivanje što ranije ili optimizacija slijeda rada na strojevima s dugim vremenima podešavanja), u ovo polje treba upisati pozitivnu vrijednost.

  Primjerice, ako se unese vrijednost 10, operacije naloga bit će puštene u proizvodnju i potencijalno raspoložive za obradu 10 dana prije datuma početka naloga.

  Negativna vrijednost ima suprotan učinak: operacije neće moći biti puštene u proizvodnju na datum početka naloga, već tek nakon broja dana definiranog ovim parametrom.

  Ukratko, pozitivna vrijednost može poboljšati slijed rada na strojevima s dugim vremenima podešavanja i povećati opterećenje proizvodnje u kratkom roku, ali istovremeno dovodi do ranijeg pokretanja operacija, povećanja vezanog obrtnog kapitala i većih troškova zadržavanja robe u proizvodnji.

- **Trajanje simulacije u danima**: određuje ukupno trajanje simulacije, računajući od definiranog datuma početka.

### Dobavljači

- **Dostupnost artikla nakon nabave od dobavljača (u danima)**: ovaj parametar određuje nakon koliko dana od datuma isporuke navedenog na narudžbi dobavljača roba postaje raspoloživa za izdavanje sa skladišta u okviru A.F.C.S. simulacije. Radi se o sigurnosnom parametru koji proizvodni plan generiran od strane planera čini realističnijim i pouzdanijim.

  Ako je vrijednost ovog parametra nula, roba iz narudžbi dobavljača smatra se dostupnom od dana nakon datuma isporuke. Primjerice, ako isporuka dobavljača kasni 3 dana, a ovaj parametar ima vrijednost najmanje 3, radni plan koji je izradio planer i dalje će biti valjan i izvediv jer nijedna operacija koja zahtijeva tu robu neće biti planirana prije njezina stvarnog dolaska. Ako je parametar postavljen na nulu, operacije koje zahtijevaju robu koja kasni i koje su planirane unutar ta 3 dana neće biti moguće izvršiti.

- **Dostupnost artikla nakon povrata od podizvođača (u danima)**: funkcionira na isti način kao i prethodni parametar, ali se odnosi na naloge kooperacije.

### Grupiranje

- **Maksimalno vrijeme čekanja operacije (sati)**: operacija na stroju koji koristi grupiranje operacija može biti stavljena na čekanje kako bi se izvršila zajedno s drugim fazama koje imaju isti kod grupiranja, s ciljem optimizacije produktivnosti stroja.

  Ako vrijeme čekanja faze (izraženo u satima aktivnog radnog vremena stroja) premaši ovu vrijednost, operacija se raspoređuje u prvi slobodan radni termin, neovisno o pravilima optimizacije korištenja stroja.

  Kada ovaj parametar nije definiran, vrijeme čekanja faze bilo bi neograničeno.

  Primjerice, ako je standardna smjena stroja 8 sati dnevno, a vrijednost ovog parametra 24, faza može čekati najviše 3 radna dana.

  Ovaj parametar služi za ograničavanje kašnjenja koje operacija može pretrpjeti zbog optimizacije opterećenja stroja. Što je vrijednost veća, to će optimizacija iskorištenosti stroja biti bolja, ali će prosječna kašnjenja operacija također biti veća.

### Podešavanje

- **Smatra se kratkim ako ne prelazi broj minuta**: ako je uz stroj definirano pravilo podešavanja, kada tijekom simulacije postane slobodan, planer može odlučiti da ga privremeno ne koristi i ostavi neaktivnim ako nijedna od puštenih operacija nema vrijeme podešavanja kraće od vrijednosti ovog polja te ako je opterećenje radnog centra manje od praga koji određuje kada se centar smatra uskim grlom.

  Ako postoji puštena operacija čije vrijeme podešavanja ne prelazi zadanu vrijednost, ona će bez iznimke biti dodijeljena stroju.

- **Maksimalno kašnjenje operacija za postavljanje (u danima)**: operacija može kasniti u odnosu na planirani početak ako, s obzirom na trenutno stanje stroja, vrijeme podešavanja nije kratko.

  Budući da takva logika može uzrokovati neprihvatljiva kašnjenja, ovim parametrom definira se najveće dopušteno kašnjenje, nakon čega se operacija izvršava bez obzira na trajanje podešavanja.

- **Postotak opterećenja uskog grla (%)**: predstavlja postotak opterećenja radnog centra iznad kojeg se centar smatra zasićenim.

  U tom slučaju strojevi unutar tog centra koji koriste pravila podešavanja uvijek će biti angažirani čim postanu slobodni, bez obzira na trajanje podešavanja puštenih operacija koje čekaju obradu.

  Ovaj parametar ima učinak samo za radne centre koji sadrže strojeve s pravilima podešavanja.

- **Trošak dnevnog kašnjenja**: optimizacija slijeda operacija na stroju s pravilom podešavanja može dovesti do ranijeg izvođenja nekih operacija i odgađanja drugih.

  Ovim parametrom, čiju optimalnu vrijednost treba eksperimentalno odrediti u svakoj tvrtki, svakom danu kašnjenja operacije pridružuje se određeni trošak kako bi se pronašao optimalan slijed rada.

  Povećanje ove vrijednosti dodatno penalizira rasporede s velikim kašnjenjima te smanjuje prosječno kašnjenje operacija na strojevima koji koriste pravila podešavanja.

- **Postotak godišnjeg troška zaliha (%)**: kod strojeva s pravilima podešavanja optimalan redoslijed rada određuje se i uzimajući u obzir trošak koji proizlazi iz ranijeg izvršavanja operacija radi smanjenja vremena podešavanja.

  To neizbježno generira trošak nedovršene proizvodnje (WIP), jer ranije izvršavanje operacija povećava potrebu za obrtnim kapitalom (na koji se plaćaju kamate) te zahtijeva dodatni skladišni prostor, čime rastu troškovi skladištenja robe.

  Povećanje ove vrijednosti smanjuje prosječno ranije pokretanje operacija na strojevima koji koriste pravila podešavanja.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom načinu rada obrazaca, pogledajte poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).