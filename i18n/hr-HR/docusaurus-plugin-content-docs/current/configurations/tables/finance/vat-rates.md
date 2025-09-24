---
title: PDV stope
sidebar_position: 1
---

:::tip[FAst Start]
Na ovu tablicu utječe procedura [**Fast Start**](/docs/guide/fast-start)

U slučaju ručne konfiguracije potrebno je slijediti kontrolni popis na poveznici.
:::

Ova tablica je zajednička za sve tvrtke u bazi podataka i prikazuje popis PDV stopa primjenjivih u cijelom sustavu.

Radi se o unaprijed učitanoj tablici na kojoj ovlašteni korisnik može izvršavati izmjene ili dodavanja prema potrebama poslovanja tvrtke.

### Glavna mreža

**Šifra / Opis**: šifra i odgovarajući opis za pozivanje PDV stope koju se parametrizira; numerički identifikator stope.

**Sekundarni opis**: dodatni opis koji se može koristiti za prilagođene izvještaje i ispise (obično nije nužan).

**Postotak**: definira postotak PDV-a koji se primjenjuje. Za kodove oslobađanja, izuzeća i neoporezivosti potrebno je postaviti 0.

**Kategorija PDV-a**: poziva unaprijed definirane tipove PDV-a predviđene u sustavu. Tip je vrlo važan, primjerice, za totalizaciju različitih transakcija u tromjesečnom izvještaju PDV-a i, općenito, za sve PDV deklaracije. Opcije dostupne za talijansku lokalizaciju su:
    - *Stopa*
    - *Neoporezivo*
    - *Oslobođeno*
    - *Isključeno*
    - *74 ter CEE*, za putničke agencije
    - *74 ter FUORI CEE*, za putničke agencije
    - *74 ter PARTE CEE*, za putničke agencije
    - *74 ter PARTE FUORI CEE*, za putničke agencije

**Postotak nedopustivosti odbitka**: definira postotak PDV-a koji se ne može odbiti. Ova vrijednost se prikazuje unutar knjiženja u sekciji PDV-a za izračun stvarnog dijela koji se ne može odbiti i može se promijeniti ili prisilno postaviti izravno u knjiženju. 

**Plafond**: ova opcija definira koje su PDV stope povezane s izjavama o namjeri (dichiarazioni d’intento). Samo stope s uključenim ovim označivačem omogućuju prikaz padajućeg izbornika za povezivanje s izjavama o namjeri u mreži PDV-a knjiženja.

PAŽNJA: opcija je nevažna za upravljanje izjavama o namjeri u dokumentnom ciklusu kupnje/prodaje; tamo je relevantno isključivo ono što je postavljeno unutar odgovarajuće knjige izdanih/prihvaćenih izjava o namjeri.

Za izračun ukupnog plafonda, ovaj označivač također identificira stopu koja **"troši"** mjesečno naš ukupni raspoloživi plafon kao redovni izvoznici (u okviru procedure upravljanja plafonom), posebno s aspekta kupnji.

**Strana prodaja za Plafond**: s ovim označivačem identificiraju se PDV stope u knjigama prodaje godine yyyy koje **povećavaju** raspoloživi plafon za godinu yyyy+1 kao redovni izvoznici.

**U PDV prijavi**: označava koje PDV stope treba uključiti u tromjesečne PDV prijave i, općenito, u sve PDV deklaracije. Primjer: kodovi u kategoriji PDV-a *Isključeno* obično <u>nemaju</u> aktiviran ovaj označivač, dok *stope*, *oslobođeno* i *neoporezivo* imaju označivač aktiviran jer moraju biti uključene u PDV deklaracije (usp. upute ministarstva za godišnju PDV prijavu ili tromjesečnu komunikaciju obračuna PDV-a).

**Ne Intra**: označava PDV stope koje, iako se koriste u dokumentima (u modulima faktura kupnje/prodaje) ili u intra-CEE knjiženjima, ne trebaju biti smatrane intra-CEE stopama. Koristi se prilikom automatskog generiranja Intrastat sažetaka.

**Rep. San Marino**: označava PDV stope korištene u transakcijama sa San Marinom (zastarjelo, obavijest ukinuta).

**% PDV poljoprivredne nedopustivosti**: polje definira fiksni postotak odbitka PDV-a za poljoprivredni režim u slučaju knjiženja u skladu s poljoprivrednim režimom.

**Omogući PDV 0 u Dnevniku**: ovaj označivač zahtijeva knjiženje PDV stavki s iznosom 0, i na dugu i na potražnoj strani, u Dnevniku. Ipak, [**računovodstvena šifra**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) koja se koristi mora također omogućavati stavke s iznosom 0.

**Uvoz zlato/srebro**: označava koje PDV stope se sažimaju u polja predviđena za Godišnju PDV prijavu. (Trenutno zastarjelo)

**Uvoz otpadaka**: označava koje PDV stope se sažimaju u polja predviđena za Godišnju PDV prijavu. (Trenutno zastarjelo)

**Ne u spesometro**: označava isključivanje PDV transakcija povezanim s ovom stopom iz *spesometra*. (Trenutno zastarjelo)

**Šifra PA**: u ovo polje unosi se šifra predviđena za elektroničko fakturiranje između privatnih subjekata i prema javnoj upravi u slučajevima kada nema PDV-a (oslobođenje, izuzeće, neoporezivo). Za detalje šifri pogledajte tehničke specifikacije elektroničkih faktura objavljene na webu Porezne uprave.

**Isključi iz Izjave o namjeri**: opcija trenutno nije aktivno korištena u nijednoj proceduri. Razvijena je da, eventualno, spriječi da PDV stopa s aktiviranim označivačem bude prepisana šifrom PDV-a postavljenom u knjizi izjava o namjeri za transakcije u oslobođenju prema toj izjavi.

**Isključi iz automatske šifre**: aktiviranjem ovog označivača odgovarajuća šifra PDV-a ne se prenosi u automatski generirane knjiženja jer je povezana s glavnom računovodstvenom šifrom preko polja *Automatska šifra*.

:::note  Napomena
Korištenje ovog označivača postaje **ključno** u određenim situacijama, primjerice kod primitka **“mješovite” fakture kupnje**, gdje je dobavljač fakturirao dio u **reverse charge** režimu, a dio u redovnom režimu. Za dio u redovnom režimu PDV se može odbiti pri kupnji, dok će dio u reverse charge biti neutralan jer se knjiži i u knjizi kupnji i u knjizi prodaja. Pravilnim razlikovanjem PDV šifri, primjerice kreiranjem šifre "Reverse charge mješoviti – odbitni dio" i aktiviranjem ovog označivača na toj šifri, u automatski kreiranom prijebojnom knjiženju bit će prikazana samo šifra 22, čime se automatski priznaje odbitak samo na dijelu koji nije uključen u reverse charge mehanizam.
:::

**PDV za automatske šifre**: ovo polje služi za prisilno postavljanje određene PDV šifre u automatski generiranom knjiženju (npr. prijeboj za reverse charge) u odnosu na šifru korištenu u glavnom knjiženju (npr. s kupovne strane u reverse charge-u).

:::note Napomena
Korištenje ovog polja postaje **ključno** u slučaju primitka **fakture kupnje u reverse charge-u s djelomično ili potpuno neodbitnim PDV-om**. Po zadanim postavkama softver bi primijenio istu PDV šifru i u prijebojnom knjiženju s prodajne strane, a postotak neodbitnosti bi efektivno značio "neoporezivo" za taj dio. Dakle, efekt bi bio neutralan.
Za ostvarivanje ograničenog odbitka potrebno je da PDV s prodajne strane bude u potpunosti oporeziv, dok neodbitni dio ostaje trošak s kupovne strane. Kako bi se izbjeglo ručno mijenjanje PDV šifre u automatski generiranom prijebojnom knjiženju (npr. šifra 2250 s 50% ograničenog odbitka koja bi se trebala promijeniti u šifru 22), moguće je koristiti ovo polje, koje automatski vrši korekciju.
:::

**Datum isteka valjanosti**: nakon postavljenog datuma šifra više neće biti dostupna, što je korisno za blokiranje korištenja zastarjelih PDV šifri.

**Osnova za obračun pečata**: budući da se pečat na fakturi unosi automatski samo kada postoje PDV šifre oslobođene, isključene ili neoporezive (prepoznaje se Kategorija PDV-a same šifre) i kada faktura prelazi određeni iznos (postavljeno u tablici osnovnih podataka tvrtke), funkcija ovog označivača je upravljanje posebnim slučajevima koji, iako oslobođeni, neoporezivi ili isključeni, predstavljaju iznimku i ne podliježu primjeni pečata. U tim slučajevima označivač treba biti isključen.

NAPOMENA: u slučaju pogrešnog aktiviranja označivača na šiframa tipa Stopa, prevladava čitanje kategorije PDV-a i pečat NE se unosi.

**Reverse charge**: vidi [**ovdje**](/docs/finance-area/particular-cases/mixed-reverse-charge)

**PDV na maržu / Referentni PDV na maržu**: vidi [**ovdje**](/docs/finance-area/particular-cases/VAT_regime-del-maine)

###  Vrsta PDV knjiženja  

U ovom odjeljku moguće je definirati za svaku PDV stopu jedan ili više podračuna za PDV kupnji/prodaja (obično relevantno za lokalizacije izvan Italije, npr. zemlje Istočne Europe, gdje je obavezno knjiženje smanjenog, normalnog ili povećanog PDV-a na zasebne podračune).
Također je moguće povezati te račune s *Vrsta PDV knjiženja* koja se kodira u odgovarajućoj [**tablici**](/docs/configurations/tables/finance/vat-accounting-types) , dodjeljuje klijentu/dobavljaču unutar osnovnih podataka ili se definira kao zadana u [**općim računovodstvenim parametrima**](/docs/configurations/parameters/finance/accounting-parameters)

**Vrsta / Opis PDV knjiženja**: šifra / opis vrste PDV knjiženja (polje nije obavezno).

 **Račun kupnji**: račun kupnje predložen za ovu vrstu PDV knjiženja.

**Podračun kupnji**: podračun kupnje predložen za ovu vrstu PDV knjiženja.

**Opis**: opis podračuna kupnje predložen za ovu vrstu PDV knjiženja.

**Račun prodaje**: račun prodaje predložen za ovu vrstu PDV knjiženja.

**Podračun prodaje**: podračun prodaje predložen za ovu vrstu PDV knjiženja.

**Opis**: opis podračuna prodaje predložen za ovu vrstu PDV knjiženja.

### Napomene 

**Šifra**: numerička šifra koja identificira PDV stopu.

**Napomene**: eventualne dodatne napomene.

### Specifikacije za prijavu

U ovom odjeljku moguće je parametizirati različite PDV šifre korištene u knjiženjima kako bi se generirao ispisni izvještaj (po potrebi kreiran putem integriranog report designera u Fluentisu) koji predstavlja primjer godišnje PDV prijave.
Izvještaj će agregirati sve PDV šifre korištene tijekom godine kako bi prikazao ukupne iznose koje treba unijeti u redove porezne prijave. Stoga je potrebno povezati svaku PDV šifru s odgovarajućim redom prijave prema uputama ministarstva i specifičnim pravilima relevantne prijave.

**Operacije**: pomoću padajućeg izbornika odabrati tip operacije: Aktivna, Pasivna ili Reverse charge, kako bi se razlikovali dijelovi transakcija koje se knjiže s odgovarajućom PDV šifrom u redove prijave za kupnje, prodaje ili reverse charge.

**Redak prijave / Opis**: pomoću padajućeg izbornika odabrati redak (šifra i opis) PDV prijave kojem će PDV šifra biti pridružena (popis je unaprijed učitan i korisnik ga ne može mijenjati).
  
### VIDEO TUTORIJALI

:::important Vidi također
[**VIDEO TUTORIJALI PDV STOPA**](/docs/video/finance/intro)
:::
 
