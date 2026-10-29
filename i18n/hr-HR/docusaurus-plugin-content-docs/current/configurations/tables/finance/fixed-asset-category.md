---
title: Kategorija osnovnog sredstva
sidebar_position: 5
---

:::tip[Fast Start]
Na ovu se tablicu odnosi postupak [**Fast Start**](/docs/guide/fast-start).

Ako tablicu namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

U ovoj se tablici definiraju kategorije osnovnih sredstava kojima se upravlja u tvrtki.

### Gornja tablica

**Kategorija**: alfanumerička šifra kategorije.

**Opis kategorije**: opis kategorije.

**Konto**: bilančni konto osnovnog sredstva.

**Analitički konto**: bilančni analitički konto osnovnog sredstva.

**Opis**: opis bilančnog analitičkog konta osnovnog sredstva.

**Materijalno/nematerijalno**: oznaka vrste imovine, materijalne ili nematerijalne.

**Maksimalni iznos amortizacije**: najveći iznos amortizacije koji se može obračunati za svako osnovno sredstvo u kategoriji.

**Postotak amortizacije**: najveći postotak vrijednosti osnovnog sredstva koji se može amortizirati.

**Povećanja vrijednosti**: ako oznaka nije aktivirana, što je zadana postavka, svaki redak povećanja vrijednosti osnovnog sredstva obrađuje se zasebno, s vlastitim detaljima amortizacije. Ako je oznaka aktivirana, svako se povećanje pripisuje izvornom retku nabave, čime se početna vrijednost povećava uz zadržavanje izvornog datuma nabave.

**Ograničenje ukupne amortizacije**: granični iznos za primjenu ukupne amortizacije od 100 % u godini nabave.

**Revalorizacije**: oznaka za upravljanje detaljima revalorizacija.

**Šifra bilance**: šifra bilance koja se koristi za ispis izvještaja o revalorizacijama.

**Izvanbilančno upravljanje**: aktivira upravljanje izvanbilančnim podacima osnovnog sredstva. To uključuje dupliciranje računovodstvenih bilančnih vrijednosti kako bi se omogućio zaseban izvanbilančni obračun amortizacije.

**Dani**: aktiviranjem ove oznake pri izračunu amortizacije uzima se u obzir točan broj dana posjedovanja sredstva u tekućoj godini. Time se zamjenjuje standardna logika prema kojoj se obračunava puni iznos amortizacije neovisno o datumu nabave, uz mogućnost prepolovljenja amortizacije u prvoj godini ako je u drugoj tablici aktivirana oznaka *Amortizacija u prvoj godini* (vidi u nastavku).

**Numeriranje**: (neobavezno) omogućuje definiranje posebnog numeriranja kartica osnovnih sredstava za svaku pojedinu kategoriju. Polje je povezano s [**odgovarajućom tablicom**](/docs/configurations/tables/fluentis-numerations), u kojoj se definira brojač. Ako brojač nije definiran, zadano se nastavlja koristiti opće numeriranje osnovnih sredstava, eventualno povezano s prefiksom ili jedinstvenim numeriranjem.

### Druga tablica

Drugi odjeljak namijenjen je postavljanju detalja amortizacije koji se primjenjuju na odabranu kategoriju osnovnih sredstava iz gornje tablice.

**Vrsta amortizacije**: odabire se vrsta amortizacije između redovne, ubrzane i usporene amortizacije. Usporena amortizacija u pravilu se ne koristi.

**Konto**: konto troška na kojem se evidentira periodična amortizacija.

**Analitički konto**: analitički konto troška na kojem se evidentira periodična amortizacija.

**Opis konta**: opis analitičkog konta troška.

**Konto ispravka vrijednosti**: konto ispravka vrijednosti na kojem se akumulira periodična amortizacija.

**Analitički konto ispravka vrijednosti**: analitički konto ispravka vrijednosti na kojem se akumulira periodična amortizacija. To može biti i isti konto na kojem se evidentira vrijednost imovine, kako bi se vrijednost izravno umanjivala na tom kontu.

**Opis konta**: opis analitičkog konta ispravka vrijednosti.

**Isključi**: ovom se oznakom odabrana vrsta amortizacije isključuje iz automatskog izračuna amortizacije.

**Postotak**: postotak amortizacije koji se primjenjuje za odabranu vrstu amortizacije.

**Broj godina**: polje je aktivno samo za ubrzanu amortizaciju, a u njega se unose tri godine tijekom kojih se ona primjenjuje. Za rabljena osnovna sredstva broj godina primjene automatski se postavlja samo na godinu nabave.

**Amortizacija u prvoj godini**: automatski se predlaže za sve kategorije materijalnih osnovnih sredstava. Prepolovljuje postotak amortizacije u godini početka korištenja osnovnog sredstva.

**Porezna**: može se aktivirati za retke ubrzane amortizacije kako bi se njome upravljalo kao poreznom amortizacijom koja se ne knjiži u računovodstvu.

**Vrsta porezne priznatosti**: omogućuje dodjelu šifre porezne priznatosti odabranoj vrsti amortizacije.

**Opis porezne priznatosti**: opis vrste porezne priznatosti.

**Konto / analitički konto / opis porezno nepriznatog iznosa**: u ovo se polje može unijeti računovodstveni analitički konto na kojem će se automatski knjižiti porezno nepriznati dio amortizacije. Konto se prenosi u karticu osnovnog sredstva, u redak koji odgovara pripadajućem iznosu amortizacije. Da bi se iznos knjižio, i tijekom knjiženja godišnje amortizacije i tijekom ponovnog obračuna amortizacije pri zatvaranju privremenih konta, potrebno je aktivirati odgovarajuću oznaku. Ta se oznaka može unaprijed postaviti u [**parametrima osnovnih sredstava**](/docs/configurations/parameters/finance/fixed-assets-parameters).

#### Posebni gumbi

**Pretraži gornju tablicu**: omogućuje pretraživanje gornje tablice prema kategoriji i opisu.

**Umetni u gornju tablicu**: omogućuje unos nove kategorije osnovnih sredstava.

**Umetni u tablicu detalja**: omogućuje unos detalja za odabranu kategoriju iz gornje tablice.

**Umetni u tablicu centara troška**: omogućuje unos centara troška za odabranu kategoriju iz gornje tablice. ZASTARJELO.

**Izbriši odabrane retke**: omogućuje brisanje odabranih redaka kategorija osnovnih sredstava.

**Izbriši odabrane retke iz donje tablice**: omogućuje brisanje odabranih redaka iz donje tablice, odnosno detalja vrste amortizacije.

**Izbriši odabrane retke iz tablice centara troška**: omogućuje brisanje odabranih redaka iz tablice centara troška. ZASTARJELO.

**Spremi**: omogućuje spremanje promjena.

### TABLICA CENTARA TROŠKA (UKLONJENA AKO JE U TABLICI TVRTKE AKTIVIRAN POTPUNI MODUL CONTROLLING, BEZ PARAMETRA ZA KORIŠTENJE RAČUNOVODSTVENIH CENTARA)

:::note Napomena
Iako se upravljanje centrima troška za osnovna sredstva može provoditi primjenom složenijih pravila amortizacije, korisnih za detaljnu kontrolu poslovanja, moguće je i dodijeliti pojedinačni centar troška svakom osnovnom sredstvu na kartici **Detalji**. Centar troška može se dodijeliti i izravno kategoriji osnovnog sredstva, ali je u tom slučaju potrebno deaktivirati oznaku upravljanja kontrolingom u šifarniku aktivne tvrtke. Dodijeljeni centar troška vrednuje se godišnjim iznosom amortizacije izračunatim za porezne i računovodstvene potrebe.
:::

U kartici osnovnog sredstva, u tablici centara troška na kartici **Imovinske transakcije**, moguće je za **pojedinačni redak amortizacije** definirati zadani postotak raspodjele na centar troška za osnovna sredstva koja pripadaju toj kategoriji. Ova je postavka podređena dodjeli centara troška izravno u kartici pojedinačnog osnovnog sredstva, u odjeljku Detalji.

**Centar troška**: centar troška kojem se dodjeljuje vrijednost osnovnih sredstava iz odabrane kategorije.

**Opis**: opis centra troška.

**Postotak**: postotak vrijednosti koji se dodjeljuje centru troška.

### VIDEOUPUTE

:::important Vidi također
[**VIDEOUPUTE O TABLICAMA OSNOVNIH SREDSTAVA**](/docs/video/finance/intro)
:::