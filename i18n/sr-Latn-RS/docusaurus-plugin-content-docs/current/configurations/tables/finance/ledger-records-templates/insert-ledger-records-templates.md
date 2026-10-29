---
title: Unos šablona za knjiženje glavne knjige
sidebar_position: 3
---

:::tip[Fast start]

Na ovu tabelu utiče postupak [**Fast start**](/docs/guide/fast-start).

Ako konfiguraciju nameravate da obavite ručno, pogledajte kontrolnu listu na povezanoj stranici.

Šabloni za knjiženje kreirani postupkom Fast start omogućavaju sledeće:

- Knjiženja nabavke i prodaje
- Nabavku i prodaju po principu **prenosa poreske obaveze (Reverse charge)**, prenos na drugi konto za nabavku i odgovarajuće samoizdavanje faktura
- Knjiženja nabavke i prodaje **unutar EU**, prenos na drugi konto za nabavku i odgovarajuće samoizdavanje faktura
- Knjiženja nabavke i prodaje **izvan EU** i odgovarajuće samoizdavanje faktura sa prenosom na drugi konto
- Knjižna odobrenja za storniranje prethodnih knjiženja
- Nabavku i prodaju **osnovnih sredstava**
- Evidentiranje prihoda od prodaje
- **Naplate i plaćanja**
- Aktivni portfolio (izdavanje i predaja bankarskih potvrda Ri.Ba., naplata i neplaćene stavke)
- Slobodna knjiženja u dnevniku
- Ostala knjiženja u dnevniku, kao što su obračuni zarada i slično
- Prenos PDV-a na drugi konto
- Uplate poreza i doprinosa
- Korektivna knjiženja, kao što su vremenska razgraničenja unapred plaćenih troškova i unapred naplaćenih prihoda, kao i obračunati troškovi i prihodi
- Amortizaciju
- Završna knjiženja i ponovno otvaranje konta

:::

## 1. Zaglavlje

#### Specifična polja

**Šablon za knjiženje**: predstavlja jedinstvenu alfanumeričku šifru od 5 znakova.

**Opis šablona za knjiženje**: opis šablona za knjiženje.

**Vrsta kretanja**: označava vrstu kretanja računovodstvenog knjiženja. Reč je o fiksnoj internoj tabeli koju korisnik ne može da menja, a koja razdvaja šablone za knjiženje bez PDV-a od različitih vrsta kretanja povezanih sa PDV-om.

**Vrsta dokumenta**: tabela je unapred popunjena, ali korisnik može da je menja i dopunjuje. Posebno su važne stavke sa oznakama **Knjižno odobrenje** i **Dokument o izmeni**.

Kod knjižnih odobrenja postupak proverava da li su iznosi u odeljku PDV-a negativni. Proverava se i usklađenost predznaka prilikom knjiženja knjižnih odobrenja iz oblasti prodaje ili nabavke. To znači da nije dozvoljeno istovremeno imati redove sa pozitivnim iznosima i druge redove sa negativnim iznosima na drugom analitičkom kontu.

Za dokumente označene kao **Dokument o izmeni**, postupak u odeljku PDV-a knjiženja aktivira oznaku kojom se identifikuju redovi povezani sa dokumentima o izmeni, kao i datum dokumenta koji se ispravlja za potrebe PDV-a. Taj datum ne treba mešati sa poljem **Period PDV-a**: knjižno odobrenje ili drugi dokument o izmeni ispraviće PDV za period naveden u tom polju.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image02.png)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image03.png)

**Numerisanje**: padajuće liste omogućavaju povezivanje svakog računovodstvenog šablona sa određenim numerisanjem za konačna, odnosno privremena knjiženja. Takav način upravljanja potreban je u nekim stranim lokalizacijama. Pogledajte [*Tabelu numerisanja računovodstvenih knjiženja*](/docs/configurations/tables/fluentis-numerations).

Ako za šablon za knjiženje nije definisano posebno numerisanje, sistem će najpre potražiti numerisanje eventualno postavljeno u **[Opštim računovodstvenim parametrima](/docs/configurations/parameters/finance/accounting-parameters/)**. Ako ni tamo nije definisano, koristiće se opšta tabela *Numerisanje računovodstvenih knjiženja*.

**Računovodstvene knjige**: padajuća lista povezana sa posebnom tabelom u kojoj se definišu šifra i opis, koji se zatim povezuju sa šablonom za knjiženje radi grupisanja i kategorizacije šablona. Te kategorije mogu se povezati i sa različitim numerisanjima iz prethodnog polja. To je korisno u stranim lokalizacijama u kojima se vode odvojeni zapisi u dnevniku, u zavisnosti od vrste računovodstvenog knjiženja.

Na primer, nabavka može da koristi numerisanje a), povezano sa računovodstvenom knjigom „Nabavka”, prodaja numerisanje b), povezano sa knjigom „Prodaja”, a bankarska knjiženja (naplate i plaćanja) numerisanje c), povezano sa knjigom „Bankarska knjiženja” itd.

**Datum završetka važenja**: omogućava onemogućavanje korišćenja računovodstvenog šablona od navedenog datuma. Od sledećeg dana šablon više neće biti vidljiv na listi šablona za knjiženje.

**Registar naplata i plaćanja**: NIJE AKTIVNO (označava šablone koji se prikazuju u registru naplata i obračuna u pojednostavljenom računovodstvu za samostalne delatnosti).

**Samostalne delatnosti**: NIJE AKTIVNO (označava šablon za računovodstvo samostalnih delatnosti).

### 1.1 Detalji atributa

#### Specifična polja

**Automatski šablon za knjiženje**: prilikom čuvanja knjiženja koje se zasniva na šablonu koji se uređuje, program će automatski kreirati drugo knjiženje na osnovu šablona navedenog u ovom polju. Da bi drugo knjiženje bilo ispravno popunjeno, potrebno je poštovati sledeće odnose između dva knjiženja:

a) Prvi slučaj je kada prvo knjiženje ima vrstu kretanja *PDV na nabavku unutar EU*, a drugo *Prenos PDV-a na nabavku unutar EU*. Povezanost se zasniva na evidentiranju PDV-a na nabavku i u registru prodaje. Isto važi i za prenos poreske obaveze (*reverse charge*), pri čemu se koriste vrste kretanja *PDV na nabavku po principu reverse charge* i *Prenos PDV-a na nabavku po principu reverse charge*.

b) Drugi slučaj je kada se prvim knjiženjem otvara stavka, a drugim se ona odmah zatvara.

c) Treći slučaj odnosi se na knjiženje zatvaranja stavke nastale knjiženjem sa vrstom kretanja „PDV na prodaju javnim organima”, kod kojeg je PDV odložen. U tom slučaju povezuje se knjiženje *Prenos odloženog PDV-a*.

d) Četvrti slučaj je nabavka sa odloženim PDV-om, suprotna prethodnom slučaju.

e) Peti slučaj je kada prvo knjiženje sadrži PDV, dok se drugo popunjava prema logici automatskih analitičkih konta definisanih u kontnom planu.

f) Ako nijedan od prethodnih slučajeva nije primenljiv, program će pokušati da postavi podatke drugog knjiženja na osnovu podataka o PDV-u iz prvog knjiženja. U suprotnom će drugo knjiženje biti kreirano sa predviđenim analitičkim kontima, ali bez dodeljenih vrednosti.

**Vrsta automatskog samoizdavanja fakture**: pogledajte poseban odeljak o [**konfiguraciji automatskog samoizdavanja faktura**](/docs/finance-area/e-invoice/auto-invoice/ledger-templates).

**Zamena kolona ako je iznos manji od nule**: omogućava programu da zameni kolone duguje/potražuje na osnovu predznaka kretanja PDV-a. To se najčešće koristi pri knjiženju knjižnih odobrenja. Preporučuje se aktiviranje ovog polja za sva knjiženja koja uključuju PDV.

**Upozorenje**: ovo polje je aktivno samo ako je prethodna opcija aktivirana. Omogućava prikaz poruke upozorenja korisniku o promeni predznaka. Ova oznaka nema uticaja na šablone koji se koriste u automatskim postupcima knjiženja.

**Dozvoli analitička konta sa nultim vrednostima**: aktiviranjem ove oznake postupak će:

a) omogućiti ručni unos redova u kojima su iznosi na duguje i potražuje jednaki nuli;

b) prilikom čuvanja knjiženja **NEĆE** brisati redove preuzete iz šablona koje korisnik nije popunio;

c) za redove kojima se u dnevniku knjiženja evidentira obaveza ili potraživanje PDV-a iznos nula ipak će biti obrisan, ali samo ako u tabeli [Stope PDV-a i načini obračuna PDV-a](/docs/configurations/tables/finance/vat-rates) nije aktivirana ni oznaka „Dozvoli PDV 0 u dnevniku knjiženja”.

#### PRIMERI

<details>

<summary>Kliknite za primer</summary>

- Ako oznaka nije aktivirana, u šablon za knjiženje moguće je uključiti sva potencijalno potrebna konta. Konta koja se ne koriste neće biti zadržana prilikom čuvanja knjiženja. To je korisno, na primer, kod knjiženja zarada zaposlenih, jer se ne koriste uvek ista konta svakog meseca, iako postoji više mogućih konta.

- Ako je oznaka aktivirana, moguće je uneti analitička konta sa nultim iznosom. Takva situacija se često javlja, na primer, pri knjiženju telefonskih ili računa za električnu energiju.

**Šablon za knjiženje**: ovo je ključan, ali neobavezan odeljak računovodstvenog šablona, u koji se unosi tipična šema računovodstvenog knjiženja koje treba obraditi. Moguće je uneti i opšte šifre konta (npr. konto dobavljača), koje će program automatski ažurirati na osnovu liste konta kupaca i dobavljača unetih u opšte računovodstvene parametre.

Ta analitička konta, zajedno sa odeljcima duguje/potražuje, određuju računovodstvene vrednosti, koje je ipak moguće menjati tokom ručnog unosa knjiženja.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image02.png)

</details>

#### [Vrsta iznosa]{#amount-type}

Kodovi vrste iznosa zahtevaju posebno objašnjenje jer su ključni za automatsko popunjavanje dnevnika knjiženja na osnovu podataka o PDV-u i analitičkim kontima obuhvaćenim knjiženjem. Konkretno:

**Ručno**: označava da će korisnik ručno uneti vrednost reda prilikom knjiženja.

**Oporezivi iznos analitičkog konta**: označava da će se red ažurirati za svaku šifru analitičkog konta unetu u odeljak PDV-a, i to iznosom dobijenim iz oporezivog iznosa odgovarajućeg reda ili redova. **Ova vrsta iznosa se po pravilu preporučuje za sve prihode unete u šablone prodajnih knjiženja.**

**Ukupni oporezivi iznos**: označava da će se red ažurirati ukupnim oporezivim iznosom knjiženja, bez obzira na unetu šifru konta ili analitičkog konta. PRIMERI: prodaja u sistemu podeljenog plaćanja PDV-a (*split payment*) ili prodaja unutar EU.

**Ukupni iznos poreza**: označava da će se red ažurirati ukupnim iznosom poreza knjiženja, bez obzira na unetu šifru konta ili analitičkog konta.

**Odbitni porez**: označava da će se red ažurirati ukupnim odbitnim iznosom poreza knjiženja, bez obzira na unetu šifru konta ili analitičkog konta.

**Ukupni iznos dokumenta/knjiženja**: označava da će se red ažurirati ukupnim iznosom dokumenta/knjiženja na analitičkom kontu navedenom kao nosilac knjiženja, ako je to u skladu sa kombinacijama definisanim u računovodstvenim parametrima.

**Oporezivi iznos + neodbitni porez**: označava da će se red ažurirati ukupnim oporezivim iznosom uvećanim za ukupni neodbitni iznos poreza knjiženja, bez obzira na unetu šifru konta ili analitičkog konta. Ova vrsta kretanja se retko koristi; preporučuje se upotreba opcije **Oporezivi iznos analitičkog konta + neodbitni porez analitičkog konta**.

**50 % oporezivog iznosa**: označava da će se red ažurirati sa 50 % ukupnog oporezivog iznosa knjiženja, bez obzira na unetu šifru konta ili analitičkog konta.

**50 % oporezivog iznosa + neodbitni PDV**: označava da će se red ažurirati sa 50 % ukupnog oporezivog iznosa knjiženja, uvećanim za ukupni neodbitni iznos PDV-a, bez obzira na unetu šifru konta ili analitičkog konta.

**50 % oporezivog iznosa + 50 % neodbitnog PDV-a**: označava da će se red ažurirati sa 50 % ukupnog oporezivog iznosa knjiženja, uvećanim za 50 % neodbitnog iznosa PDV-a, bez obzira na unetu šifru konta ili analitičkog konta.

**Ove vrste su uvedene zbog poreskih zahteva i treba ih smatrati zastarelim.**

**Oporezivi iznos analitičkog konta + neodbitni porez analitičkog konta**: označava da će se red ažurirati za svaku šifru analitičkog konta unetu u odeljak PDV-a, i to zbirom oporezivog iznosa odgovarajućeg reda ili redova i pripadajućeg neodbitnog poreza. **Ova vrsta iznosa se po pravilu preporučuje za sve troškove unete u šablone nabavnih knjiženja.**

**Pozitivna zaokruživanja**: označava da će se red ažurirati iznosom pozitivnih zaokruživanja. Koristi se uz šablone za zatvaranje stavki.

**Negativna zaokruživanja**: označava da će se red ažurirati iznosom negativnih zaokruživanja. Koristi se uz šablone za zatvaranje stavki.

**Iznos analitičkog konta**: označava da će se red ažurirati iznosima plaćanja stavki unetih u knjiženje, u skladu sa predznakom pojedinačnog plaćanja.

**Dobit od kursnih razlika**: označava da će se red ažurirati analitičkim kontom dobiti za valutu na koju se odnosi kursna razlika, u iznosu izračunatom na osnovu razlike između istorijskog kursa i kursa pri zatvaranju stavke. Ako je aktivirana oznaka zatvaranja po istorijskom kursu, red neće dobiti vrednost.

**Gubitak od kursnih razlika**: označava da će se red ažurirati analitičkim kontom gubitka za valutu na koju se odnosi kursna razlika, u iznosu izračunatom na osnovu razlike između istorijskog kursa i kursa pri zatvaranju stavke. Ako je aktivirana oznaka zatvaranja po istorijskom kursu, red neće dobiti vrednost.

**Automatski**: vrsta iznosa koja se koristi u određenim postupcima automatskog knjiženja.

*PRIMER*: koristi se u šablonima prodajnih knjiženja osnovnih sredstava za obračun dobiti ili gubitka od otuđenja. U ostalim slučajevima vrednost postavlja sistem tokom postupaka automatskog knjiženja.

Tabela se dopunjuje sledećim poljima:

- Polje za definisanje protivkonta (ne preporučuje se njegova upotreba jer u računovodstvu već postoji izveštaj „Izvod konta sa protivkontima”, koji prikazuje protivkonta nezavisno od ove postavke). Osim toga, aktiviranjem oznake za prikaz analitičkih protivkonta (kartica Detalji knjiženja) ta polja će se popunjavati automatski. Zbog toga se ne preporučuje ručno definisanje protivkonta u šablonu za knjiženje.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image03.png)

Na primer, uz konta prethodnog poreza (ili obaveze za PDV) i troška (ili prihoda) prikazuju se podaci o dobavljaču (ili kupcu), dok se uz dobavljača (ili kupca) prikazuje konto protivstavke troška ili prihoda. Ako postoji više protivstavki, prikazuje se ona sa najvećim iznosom, dok se ostale zanemaruju.

- Polje za detaljne napomene: u ovom polju moguće je koristiti sve kodove navedene u legendi na dnu obrasca.

**Za šablone za zatvaranje stavki**, uz opšti konto kupaca/dobavljača unesite **kodove (8) ili (9)** zajedno sa oznakom **„Ref. dok. stavke u plaćanju”** (na kartici Detalji knjiženja) kako bi se u računovodstvu zabeležile reference plaćenih ili naplaćenih dokumenata.

Obratite pažnju na to da se opšti konto u šablonu (na primer „Dobavljači u Italiji”) zaista koristi u [Računovodstvenim parametrima](/docs/configurations/parameters/finance/accounting-parameters) i da je povezan sa odgovarajućom vrstom konta (npr. FIT u standardnoj Fluentis bazi podataka). Takođe proverite da li je vrsta iznosa uz red kupca ili dobavljača ispravno postavljena na **Iznos analitičkog konta**.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image04.png)

**Odbitni PDV i analitički konto PDV-a**: vrsta iznosa koja se koristi za popunjavanje reda PDV-a odbitnim iznosom PDV-a i analitičkim kontom određenim prema vrsti knjiženja PDV-a koja je prioritetno povezana sa šifarnikom subjekta na kojeg glasi knjiženje ili je podrazumevano određena u Opštim računovodstvenim parametrima.

Ova postavka se ne koristi u Italiji, ali je korisna u stranim lokalizacijama, na primer u Hrvatskoj, gde omogućava povezivanje konta PDV-a sa korišćenom stopom. Na primer, ako se koristi stopa PDV-a od 10 %, povezaće se konto „Prethodni porez po stopi od 10 %”, specifičan za tu stopu, umesto opšteg konta „Prethodni porez”, koji se u Italiji koristi za sve stope.

**Parametarski opis računovodstvenog knjiženja**: u ovom polju mogu se definisati standardni opisi koje program sastavlja pomoću kodova navedenih u legendi neposredno iznad polja. Ti opisi prikazuju se u računovodstvenim izveštajima, naročito u izvodima konta i dnevniku knjiženja.

Za svaki red knjiženja u odeljku *Detalji konta / analitičkih konta – Šablon za knjiženje* moguće je, kao što je prethodno opisano, definisati unapred postavljene napomene, jednako kao i za opšti opis knjiženja.

**PAŽNJA**: kodovi (8) i (9) koriste se isključivo za opis pojedinačnog reda i ne uzimaju se u obzir u opštem opisu knjiženja iz ovog polja.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image05.png)

### 1.2 Detalji knjiženja

**PDV registar**: ovo polje je obavezno samo za šablone sa vrstom kretanja koja uključuje PDV. Omogućava dodelu odgovarajućeg PDV registra šablonu koji se uređuje.

**Datum obračuna PDV-a**: ovim poljem određuje se datum obračuna koji će biti dodeljen kretanju PDV-a. Program za knjiženja u registrima nabavke predlaže datum knjiženja, a za knjiženja u registrima prodaje datum dokumenta. Preporučuje se postavljanje datuma knjiženja kao datuma obračuna PDV-a i za šablone prenosa PDV-a za nabavke unutar EU i za *reverse charge*.

Veoma je važno proveriti da li oba šablona, nabavni i šablon prenosa, koji učestvuju u ovim vrstama „dvostrukog knjiženja”, imaju jednake postavke. Time se izbegava da odbitni PDV i odgovarajuća obračunata obaveza za PDV pripadnu različitim obračunskim periodima.

To je posebno važno jer šablon prenosa PDV-a, pošto je reč o šablonu PDV-a na strani prodaje, podrazumevano predlaže datum dokumenta. Tu postavku je zato potrebno promeniti.

#### Opcije vrste dokumenta

**Vrsta/broj dokumenta**: aktiviranjem ove oznake polje Broj dokumenta postaje obavezno za čuvanje knjiženja koje se zasniva na ovom šablonu.

**Datum dokumenta**: aktiviranjem ove oznake polje Datum dokumenta postaje obavezno za čuvanje knjiženja koje se zasniva na ovom šablonu.

**Broj dokumenta = PDV protokol**: aktiviranjem ove oznake program predlaže broj dokumenta na osnovu rednog broja PDV protokola. Ova opcija ne sme se koristiti za nabavna knjiženja kod kojih broj dokumenta i broj protokola nisu međusobno povezani.

Za prodaju se preporučuje samo za šablone za knjiženje koji se ručno unose direktno u glavnu knjigu. Ne preporučuje se za šablone definisane u tipovima prodajnih faktura koji se koriste pri knjiženju faktura.

**PDV protokol = broj dokumenta**: aktiviranjem ove oznake program pokušava da dodeli PDV protokol na osnovu broja dokumenta. Ova opcija ne sme se koristiti za nabavna knjiženja kod kojih broj dokumenta i broj protokola nisu međusobno povezani.

Za prodaju se **preporučuje za sve šablone definisane u tipovima prodajnih faktura koji se koriste pri automatskom knjiženju faktura**. Korišćenje ove postavke zavisi od toga da li je numerisanje tipova faktura jednako za sve dokumente koji se knjiže u istom PDV registru. U suprotnom mogu nastati preskakanja brojeva ili duplikati, zbog kojih sistem neće dozvoliti čuvanje.

Prednost ove funkcije pri automatskom knjiženju faktura jeste to što nije potrebno voditi računa o redosledu dodele protokola. Na primer, moguće je prvo proknjižiti fakturu broj 2, a zatim fakturu broj 1, pri čemu će protokoli biti ispravno dodeljeni tako da faktura broj 1 dobije protokol 1 itd.

Na kraju poreskog perioda za PDV (meseca ili tromesečja) dovoljno je proveriti da li su sve izdate fakture proknjižene.

#### Opcije vrste knjiženja

**Otvaranje stavki**: aktiviranjem ove oznake u računovodstvenom knjiženju koje koristi ovaj šablon prikazaće se kartica za otvaranje otvorenih stavki. Ova postavka se preporučuje za sva knjiženja koja uključuju PDV i uopšteno za upravljanje rokovima dospeća kupaca i dobavljača. Oznaka se može aktivirati i za šablone kojima se evidentiraju avansi. U tom slučaju otvoriće se stavka suprotnog predznaka, koja će se naknadno zatvoriti stavkama nastalim prilikom računovodstvenog evidentiranja sledećeg poreskog dokumenta.

**Detalji kretanja u stavkama**: aktiviranjem ove oznake program će u **napomene otvorenih stavki** preneti tekst unet u polje „Detalji kretanja” izvornog računovodstvenog reda stavke.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image02.png)

Ova oznaka je aktivna samo ako je prethodno aktivirana opcija *Otvaranje stavki*.

**Otvaranje za svaki red kretanja**: aktiviranjem ove oznake program će otvoriti zasebnu stavku za svaki red kretanja koji sadrži analitički konto sa aktiviranom opcijom upravljanja otvorenim stavkama. Ova oznaka je aktivna samo ako je prethodno aktivirana opcija *Otvaranje stavki*.

Ova oznaka može se aktivirati samo za šablone bez PDV-a, na primer za početno otvaranje konta. Za svaki red kretanja kupca ili dobavljača otvara se zasebna stavka, a podaci o plaćanju preuzimaju se iz šifarnika kupca ili dobavljača. To je korisno kada se za istog kupca ili dobavljača otvara više redova.

**Zatvaranje stavki**: aktiviranjem ove oznake u računovodstvenom knjiženju koje koristi ovaj šablon prikazaće se kartica za zatvaranje otvorenih stavki. Ova opcija se obično koristi za sva knjiženja plaćanja i naplate bez PDV-a, ali može se kombinovati sa otvaranjem i prebijanjem stavki kod šablona za knjižna odobrenja i uopšteno kod svih knjiženja koja otvaraju stavke uz istovremeno prebijanje prethodno nastalih stavki.

**Koristi istorijski kurs**: ova oznaka je dostupna samo ako je aktivirano zatvaranje stavki. Aplikacija će zatvoriti otvorene stavke primenom istorijskog kursa korišćenog pri njihovom otvaranju, bez automatskog evidentiranja kursnih razlika, čime se omogućava njihovo eventualno ručno knjiženje.

**Grupisanje plaćanja u dnevniku knjiženja**: ova oznaka je dostupna samo ako je aktivirano zatvaranje stavki. Aplikacija će objediniti sve iznose zatvaranja stavki povezanih sa istim analitičkim kontom u jedno računovodstveno kretanje. Pritom će grupisati kretanja istog predznaka i iste valute.

**Isključi iz obračunatih provizija**: ova oznaka je dostupna samo ako je aktivirano zatvaranje stavki. Zatvaranja stavki izvršena ovim računovodstvenim šablonom neće se uzimati u obzir pri izračunavanju obračunatih provizija agenata kod kojih je način obračuna postavljen na „Nakon izvršenog plaćanja”.

**Referenca dokumenta stavke u plaćanju**: ova oznaka je dostupna samo ako je aktivirano zatvaranje stavki. Aplikacija će koristiti kodove (8) i (9) za evidentiranje referenci zatvorenih stavki u detaljnim opisima kretanja.

**Prebijanje stavki**: ova oznaka je dostupna samo ako su aktivirane obe opcije, otvaranje i zatvaranje stavki. Postupak će omogućiti prebijanje stavki unutar knjiženja koje se zasniva na ovom šablonu. Ova kombinacija oznaka preporučuje se za sve šablone povezane sa dokumentima tipa knjižno odobrenje.

**Upozorenje o prebijanju**: aktiviranjem ove oznake prilikom čuvanja računovodstvenog knjiženja proveriće se da li postoje stavke za prebijanje i korisniku će se prikazati upozorenje.

**Grupisanje stavki**: ovom oznakom omogućava se upravljanje grupama stavki umesto standardnog načina rada sa otvaranjem i zatvaranjem stavki. Za to se u računovodstvenom knjiženju koristi posebna kartica za evidentiranje grupa.

**Kreiraj grupu**: ako je ova oznaka aktivirana zajedno sa prethodnom, program će automatski kreirati grupu stavki i u nju uključiti stavke iz knjiženja. Ovu opciju treba aktivirati u šablonima za nabavne i prodajne fakture.

**Grupisanje stavki – vrsta plaćanja**: vrsta plaćanja koja se dodeljuje kretanjima u grupama stavki evidentiranim ovim šablonom.

**Projekti**: (ranije *Nalozi*). Aktiviranjem ove oznake u zaglavlju knjiženja prikazaće se polje *Projekat*, kao i odgovarajuća polja u detaljima knjiženja, radi povezivanja projekata (naloga) sa pojedinačnim računovodstvenim kretanjima.

Za više detalja pogledajte **[ovde](/docs/finance-area/ledger-records/records/ledger-recor&#x64;)**.

**Centri troška**: aktiviranjem ove oznake u računovodstvenim knjiženjima prikazaće se kartica za upravljanje raspodelom vrednosti na centre troška.

**Centri prihoda**: aktiviranjem ove oznake u računovodstvenim knjiženjima prikazaće se kartica za upravljanje raspodelom vrednosti na centre prihoda.

**Upravljanje vozilima**: oznaka NIJE AKTIVIRANA. Njenim aktiviranjem u analitičkoj kartici računovodstva prikazaće se tabela za raspodelu troškova i prihoda na službena vozila preduzeća.

**Osnovna sredstva**: aktiviranjem ove oznake u računovodstvenom knjiženju prikazaće se kartica za upravljanje evidencijom osnovnih sredstava.

**Vrsta operacije**: vrsta operacije koja će se podrazumevano predložiti za nova kretanja evidentirana na kartici osnovnih sredstava u računovodstvu.

**Ažuriranje stanja**: oznaka koja je podrazumevano aktivirana.

**Opis kretanja u dnevniku i plaćanjima**: aktiviranjem ove oznake postupak će kopirati opšti opis knjiženja u sve detaljne opise pojedinačnih kretanja, kao i u napomene uz plaćanja.

**Provizije**: ova oznaka aktivira posebnu karticu u okviru računovodstvenih knjiženja za upravljanje podacima za obračun provizija iz administrativnog modula. Ovaj modul je uveden nedavno i predstavlja alternativu upravljanju provizijama iz prodajnog modula, ali ga ne zamenjuje jer prodajni modul ostaje aktivan.

**Intrastat**: ova oznaka aktivira posebnu karticu u okviru računovodstvenih knjiženja za upravljanje podacima potrebnim za izradu Intrastat obrazaca. Podaci se mogu automatski preuzeti iz nabavne ili prodajne fakture odgovarajućim postupkom knjiženja ili uneti prilikom unosa računovodstvenog knjiženja u dnevnik.

Tako evidentirani podaci preuzimaju se u postupak izrade Intrastat obrazaca putem postupka *Preuzimanje računovodstvenih knjiženja*. Napominjemo da postoji i alternativni postupak *Preuzimanje iz faktura*, koji ne koristi računovodstvena kretanja, već direktno čita isključivo nabavne i prodajne dokumente.

#### Dodatne kolone koje se mogu prikazati u tabeli računovodstvenih knjiženja

**Valuta**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polje Valuta.

**Kurs/datum valute**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polja Kurs i Datum valute.

**Iznos u valuti**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polje Iznos u valuti.

**Analitički konto protivstavke**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polja za analitičke konte protivstavki. Ne preporučuje se upravljanje tim poljima.

**Detalji kretanja**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polje Detalji kretanja. Preporučuje se aktiviranje ove oznake za sve računovodstvene šablone kako bi se uvek omogućio unos detaljnih napomena za pojedinačno računovodstveno kretanje.

**Organizaciona jedinica**: aktiviranjem ove oznake polje Organizaciona jedinica prikazaće se već u odeljku PDV-a, kao i u odeljku dnevnika knjiženja. Time je omogućena raspodela istog dokumenta na više organizacionih jedinica preduzeća.

**Dani bankarske valute**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polje Datum valute banke. Preporučuje se za sve računovodstvene šablone kojima se evidentiraju finansijska kretanja. Popunjavanje ovog polja moguće je automatizovati na osnovu pozitivnih ili negativnih dana valute definisanih u šifarniku banaka za svaku pojedinačnu vrstu šablona.

**Redni broj**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polje Broj reda. Preporučuje se za obimnije računovodstvene šablone kako bi korisnik mogao trajno da odredi redosled zapisa, kao što je slučaj sa knjiženjima zarada.

**Ručna referenca stavke**: aktiviranjem ove oznake u odeljku dnevnika knjiženja prikazaće se polje Ručna referenca stavke. Ovo polje namenjeno je ručnom povezivanju računovodstvenih kretanja bez korišćenja upravljanja otvorenim stavkama. U osnovi je reč o slobodnom polju za napomene.

**Vanredne transakcije**: aktiviranjem ove oznake prikazaće se istoimeno polje (tipa bit, odnosno oznaka) kojim se određena računovodstvena kretanja, na primer troškovi, mogu označiti kao *vanredna*. To omogućava njihovo jednostavno pretraživanje ili izdvajanje u izveštajima.

Ova mogućnost je korisna nakon izmena strukture finansijskih izveštaja uvedenih Direktivom 2013/34 (Zakonodavna uredba 139/2015). Tim izmenama je, ukratko, ukinuta vanredna kategorija bilansa uspeha. Zbog toga se vanredne stavke više ne mogu prikazivati na posebnim kontima, na primer na kontima vanrednih prihoda, već se moraju evidentirati direktno na kontu koji odgovara prirodi prihoda ili troška.

Ipak, potrebno je zasebno identifikovati takve vanredne troškove i prihode radi odgovarajućih detalja u napomenama uz finansijske izveštaje i drugih mogućih poreskih potreba, na primer poreski nepriznatih troškova koji se dodaju poreskoj osnovici u poreskoj prijavi.

**Vrsta poreske transakcije**: prikazuje padajuću listu kojom se računovodstveni red označava za potrebe naknadne spoljne obrade godišnje prijave PDV-a. Potrebno je navesti da li se transakcija odnosi na:

- nabavku amortizujuće imovine
- nabavku dugotrajne imovine koja se ne amortizuje
- nabavku robe ili usluga namenjenih daljoj prodaji
- ostale nabavke

**Referenca dokumenta**: prikazuje dva dodatna polja uz redove računovodstvenog kretanja za unos datuma i broja dokumenta, na primer fakture uz red konta protivstavke.

### 1.3 Parametri

#### Redosled kartica u računovodstvenim knjiženjima

Ovaj odeljak služi za određivanje redosleda prikaza kartica pomoću odgovarajućih dugmadi **Pomeri nagore** i **Pomeri nadole**.

#### Parametri knjiženja

**Provera vrste konta**: aktiviranjem ove oznake postupak će proveravati da li je analitički konto nosioca knjiženja u skladu sa postavkama računovodstvenih parametara. Na primer, proverava se da li se konto kupca koristi u šablonu nabavnog knjiženja dobavljača. Ako provera nije uspešna, prikazaće se upozorenje.

**Blokiraj knjiženje ako vrsta konta nije kompatibilna**: aktiviranjem ove oznake postupak će onemogućiti unos analitičkog konta nosioca knjiženja koji nije u skladu sa postavkama računovodstvenih parametara. Na primer, neće biti dozvoljena upotreba konta kupca u šablonu nabavnog knjiženja dobavljača.

**Dozvoli neuravnoteženo računovodstveno knjiženje**: aktiviranjem ove oznake korisniku se omogućava čuvanje računovodstvenih knjiženja koja nisu uravnotežena. Ova mogućnost se ne preporučuje. Može biti korisna, uz odgovarajući oprez, za prinudno izvršavanje automatskog knjiženja koje vraća poruku o grešci, kako bi se lakše razumeo rezultat knjiženja i ispravile postavke.

**Blokiraj brisanje knjiženja sa plaćenim stavkama**: aktiviranjem ove oznake neće biti moguće obrisati knjiženja koja sadrže barem jednu stavku povezanu sa plaćanjem.

**Blokiraj knjiženje ako vrednost stavki nije jednaka računovodstvenom kretanju**: aktiviranjem ove oznake postupak će blokirati čuvanje knjiženja ako se vrednosti računovodstvenih kretanja ne podudaraju sa vrednostima kretanja otvorenih stavki (pri otvaranju i zatvaranju stavki). Ako oznaka nije aktivirana, postupak će ipak prikazati upozorenje o postojanju razlike. Provera se sprovodi za sve analitičke konte koji u kontnom planu imaju aktiviranu oznaku *Otvaranje stavki*.

**Blokiraj knjiženje ako se ukupni iznos dokumenta razlikuje od ukupnog iznosa podataka o PDV-u**: aktiviranjem ove oznake postupak će blokirati čuvanje knjiženja ako ukupni iznos kretanja PDV-a ne odgovara ukupnim iznosima unetim u zaglavlje knjiženja. Ako oznaka nije aktivirana, postupak će ipak prikazati upozorenje.

**Automatski ažuriraj ukupni iznos dokumenta pri promeni podataka u tabeli PDV-a**: aktiviranjem ove oznake postupak će ažurirati ukupne iznose u zaglavlju knjiženja pri promeni ukupnog zbira unetog u odeljak PDV-a, ali samo ako se iznos povećava.

**Ažuriraj i pri smanjenju**: ova oznaka je aktivna samo ako je prethodna opcija aktivirana. Omogućava ažuriranje ukupnih iznosa knjiženja i pri smanjenju.

**Blokiraj knjiženje ako nije poštovan redosled protokola**: aktiviranjem ove oznake postupak će blokirati čuvanje knjiženja ako nije poštovan hronološki redosled dodele protokola. Konkretno, brojevi protokola dodeljivaće se samo ako je za njih postavljen odgovarajući datum knjiženja. Ako oznaka nije aktivirana, postupak će ipak prikazati upozorenje o nepoštovanju redosleda protokola. Napominjemo da podrazumevane postavke štampanja PDV registara ne dozvoljavaju konačno štampanje registara koji imaju praznine u numerisanju ili ne prate ispravan redosled protokola.

**Odvojeno upravljanje centrima troška i centrima prihoda**: ova oznaka je aktivna samo ako šablon omogućava upravljanje i centrima troška i centrima prihoda. Omogućava dodelu računovodstvenih kretanja na obe vrste centara. Ako nije aktivirana, kretanje se može dodeliti samo jednoj od te dve grupe.

**Automatski ponovni obračun centara troška, centara prihoda i naloga**: ova oznaka prenosi se i u računovodstvena knjiženja koja se zasnivaju na ovom šablonu. Određuje da li će se automatski ponovo obračunavati analitički odeljci centara troška, centara prihoda i naloga prilikom otvaranja već sačuvanog knjiženja radi izmene. Pri unosu novog knjiženja, sve do prvog čuvanja, ti odeljci se uvek automatski ažuriraju u skladu sa podrazumevanim postavkama.

**Blokiraj knjiženje ako vrednost centara troška/centara prihoda nije jednaka računovodstvenom kretanju**: aktiviranjem ove oznake postupak će blokirati čuvanje knjiženja ako ukupna vrednost analitičkih kretanja centara troška i centara prihoda ne odgovara iznosima evidentiranim u glavnoj knjizi. Ako oznaka nije aktivirana, prikazaće se upozorenje o nepodudaranju vrednosti.

**Grupiši PDV u dnevniku knjiženja**: aktiviranjem ove oznake postupak će grupisati redove PDV-a u dnevniku knjiženja koji su povezani sa istim analitičkim kontom i istom organizacionom jedinicom.

**Blokiraj čuvanje ako je broj dokumenta dupliran**: ova oznaka je podrazumevano aktivirana. Njome se blokira čuvanje računovodstvenih knjiženja koja imaju isti broj dokumenta, istu godinu, isti tip dokumenta i isti subjekt naveden u zaglavlju knjiženja.

**Boja pozadine**: u ovo polje postavlja se boja pozadine kojom će se u rezultatima pretraživanja na ekranu prikazivati kretanja koja se zasnivaju na ovom šablonu. Boje mogu olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifara šablona.

**Boja teksta**: u ovo polje postavlja se boja teksta kojim će se u rezultatima pretraživanja na ekranu prikazivati kretanja koja se zasnivaju na ovom šablonu. Boje mogu olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifara šablona.

**Primer teksta**: ovo polje prikazuje rezultat izabrane kombinacije boja.

**Kurziv**: omogućava prikaz teksta u kurzivu za ovaj šablon u rezultatima pretraživanja na ekranu. To može olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifara šablona.

**Podebljano**: omogućava prikaz teksta podebljanim slovima za ovaj šablon u rezultatima pretraživanja na ekranu. To može olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifara šablona.

:::important Pogledajte i

[**VIDEO-UPUTSTVA O RAČUNOVODSTVENIM ŠABLONIMA ZA KNJIŽENJE**](/docs/video/finance/intro)

:::

### 1.4 Kontrola stopa PDV-a

Na ovoj kartici moguće je navesti određene stope PDV-a, prethodno definisane u tabeli [**Stope PDV-a / Načini obračuna PDV-a**](/docs/configurations/tables/finance/vat-rates/), čime se korisnik ograničava na njihovu isključivu upotrebu.

To je način kontrole kojim se obezbeđuje korišćenje samo onih šifara PDV-a koje se smatraju ispravnim i odgovarajućim za računovodstveno knjiženje povezano sa predmetnim šablonom.

Mogućnost unosa stopa u tabelu i aktiviranja ove kontrole omogućava oznaka **Postavi dozvoljene stope PDV-a**.

Uz polja sa šifrom i opisom unete stope nalazi se i polje za postavljanje datuma završetka važenja prethodno izabranog pravila, što omogućava izmenu ili završetak primene određene postavke.