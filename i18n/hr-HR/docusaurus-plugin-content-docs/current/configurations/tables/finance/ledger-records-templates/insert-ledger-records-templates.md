---
title: Unos predložaka knjiženja glavne knjige
sidebar_position: 3
---

:::tip[Fast start]
Na ovu tablicu utječe postupak [**Fast start**](/docs/guide/fast-start).

Ako konfiguraciju namjeravate obaviti ručno, pogledajte kontrolni popis na povezanoj stranici.

Predlošci knjiženja izrađeni postupkom Fast start omogućuju sljedeće:

- Knjiženja nabave i prodaje
- Nabavu i prodaju po načelu **prijenosa porezne obveze (Reverse charge)**, prijenos na drugi konto za nabavu i pripadajuće samoizdavanje računa
- Knjiženja nabave i prodaje **unutar EU-a**, prijenos na drugi konto za nabavu i pripadajuće samoizdavanje računa
- Knjiženja nabave i prodaje **izvan EU-a** te pripadajuće samoizdavanje računa s prijenosom na drugi konto
- Knjižna odobrenja za storniranje prethodnih knjiženja
- Nabavu i prodaju **osnovnih sredstava**
- Evidentiranje primitaka od prodaje
- **Naplate i plaćanja**
- Aktivni portfelj (izdavanje i predaja bankovnih potvrda Ri.Ba., naplata i neplaćene stavke)
- Slobodna knjiženja u dnevniku
- Ostala knjiženja u dnevniku, kao što su obračuni plaća i sl.
- Prijenos PDV-a na drugi konto
- Uplate poreza i doprinosa
- Korektivna knjiženja, kao što su vremenska razgraničenja unaprijed plaćenih troškova i unaprijed naplaćenih prihoda te obračunati troškovi i prihodi
- Amortizaciju
- Završna knjiženja i ponovno otvaranje konta
:::

## 1. Zaglavlje

#### Posebna polja

**Predložak knjiženja**: predstavlja jedinstvenu alfanumeričku šifru od 5 znakova.

**Opis predloška knjiženja**: opis predloška knjiženja.

**Vrsta kretanja**: označava vrstu kretanja računovodstvenog knjiženja. Riječ je o fiksnoj internoj tablici koju korisnik ne može mijenjati, a koja razdvaja predloške knjiženja bez PDV-a od različitih vrsta kretanja povezanih s PDV-om.

**Vrsta dokumenta**: tablica je unaprijed popunjena, ali korisnik je može mijenjati i nadopunjavati. Posebno su važne stavke s oznakama **Knjižno odobrenje** i **Dokument o izmjeni**.

Za knjižna odobrenja postupak provjerava jesu li iznosi u odjeljku PDV-a negativni. Provodi se i provjera usklađenosti predznaka pri knjiženju knjižnih odobrenja iz područja prodaje ili nabave. To znači da nije dopušteno istodobno imati retke s pozitivnim iznosima i druge retke s negativnim iznosima na drugom analitičkom kontu.

Za dokumente označene kao **Dokument o izmjeni**, postupak u odjeljku PDV-a knjiženja aktivira oznaku kojom se identificiraju retci povezani s dokumentima o izmjeni te datum dokumenta koji se ispravlja za potrebe PDV-a. Taj datum ne treba miješati s poljem **Razdoblje PDV-a**: knjižno odobrenje ili drugi dokument o izmjeni ispravit će PDV za razdoblje navedeno u tom polju.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image02.png)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image03.png)

**Numeriranje**: padajući izbornici omogućuju povezivanje svakog računovodstvenog predloška s određenim numeriranjem za konačna, odnosno privremena knjiženja. Takav način upravljanja potreban je u nekim stranim lokalizacijama. Pogledajte [*Tablicu numeriranja računovodstvenih knjiženja*](/docs/configurations/tables/fluentis-numerations).

Ako za predložak knjiženja nije definirano posebno numeriranje, sustav će najprije potražiti numeriranje eventualno postavljeno u **[Općim računovodstvenim parametrima](/docs/configurations/parameters/finance/accounting-parameters/)**. Ako ni ondje nije definirano, koristit će se opća tablica *Numeriranje računovodstvenih knjiženja*.

**Računovodstvene knjige**: padajući izbornik povezan s posebnom tablicom u kojoj se definiraju šifra i opis, koji se zatim povezuju s predloškom knjiženja radi grupiranja i kategorizacije predložaka. Te se kategorije mogu povezati i s različitim numeriranjima iz prethodnog polja. To je korisno u stranim lokalizacijama u kojima se vode odvojeni dnevnički zapisi ovisno o vrsti računovodstvenog knjiženja.

Primjerice, nabava može koristiti numeriranje a), povezano s računovodstvenom knjigom „Nabava”, prodaja numeriranje b), povezano s knjigom „Prodaja”, a bankovna knjiženja (naplate i plaćanja) numeriranje c), povezano s knjigom „Bankovna knjiženja” itd.

**Datum završetka valjanosti**: omogućuje onemogućavanje korištenja računovodstvenog predloška od navedenog datuma. Od sljedećeg dana predložak više neće biti vidljiv na popisu predložaka knjiženja.

**Registar naplata i plaćanja**: NIJE AKTIVNO (označava predloške koji se prikazuju u registru naplata i obračuna u pojednostavljenom računovodstvu za samostalne djelatnosti).

**Samostalne djelatnosti**: NIJE AKTIVNO (označava predložak za računovodstvo samostalnih djelatnosti).

### 1.1 Detalji atributa

#### Posebna polja

**Automatski predložak knjiženja**: prilikom spremanja knjiženja koje se temelji na predlošku koji se uređuje, program će automatski izraditi drugo knjiženje na temelju predloška navedenog u ovom polju. Kako bi drugo knjiženje bilo ispravno popunjeno, potrebno je poštovati sljedeće odnose između dvaju knjiženja:

a) Prvi je slučaj kada prvo knjiženje ima vrstu kretanja *PDV na nabavu unutar EU-a*, a drugo *Prijenos PDV-a na nabavu unutar EU-a*. Povezanost se temelji na evidentiranju PDV-a na nabavu i u registru prodaje. Isto vrijedi i za prijenos porezne obveze (*reverse charge*), pri čemu se koriste vrste kretanja *PDV na nabavu po načelu reverse charge* i *Prijenos PDV-a na nabavu po načelu reverse charge*.

b) Drugi je slučaj kada se prvim knjiženjem otvara stavka, a drugim se ona odmah zatvara.

c) Treći se slučaj odnosi na knjiženje zatvaranja stavke nastale knjiženjem s vrstom kretanja „PDV na prodaju javnim tijelima”, kod kojeg je PDV odgođen. U tom se slučaju povezuje knjiženje *Prijenos odgođenog PDV-a*.

d) Četvrti je slučaj nabava s odgođenim PDV-om, obrnut od prethodnog slučaja.

e) Peti je slučaj kada prvo knjiženje sadrži PDV, dok se drugo popunjava prema logici automatskih analitičkih konta definiranih u kontnom planu.

f) Ako nijedan od prethodnih slučajeva nije primjenjiv, program će pokušati postaviti podatke drugog knjiženja na temelju podataka o PDV-u iz prvog knjiženja. U suprotnom će drugo knjiženje biti izrađeno s predviđenim analitičkim kontima, ali bez dodijeljenih vrijednosti.

**Vrsta automatskog samoizdavanja računa**: pogledajte poseban odjeljak o [**konfiguraciji automatskog samoizdavanja računa**](/docs/finance-area/e-invoice/auto-invoice/ledger-templates).

**Zamjena stupaca ako je iznos manji od nule**: omogućuje programu zamjenu stupaca duguje/potražuje na temelju predznaka kretanja PDV-a. To se najčešće koristi pri knjiženju knjižnih odobrenja. Preporučuje se aktivirati ovo polje za sva knjiženja koja uključuju PDV.

**Upozorenje**: ovo je polje aktivno samo ako je prethodna opcija aktivirana. Omogućuje prikaz poruke upozorenja korisniku o promjeni predznaka. Ova oznaka nema učinka na predloške koji se koriste u automatskim postupcima knjiženja.

**Dopusti analitička konta s nultim vrijednostima**: aktiviranjem ove oznake postupak će:

a) omogućiti ručni unos redaka u kojima su iznosi na duguje i potražuje jednaki nuli;

b) prilikom spremanja knjiženja **NEĆE** brisati retke preuzete iz predloška koji korisnik nije popunio;

c) za retke kojima se u dnevniku knjiženja evidentira obveza ili potraživanje PDV-a iznos nula ipak će biti izbrisan, ali samo ako u tablici [Stope PDV-a i načini obračuna PDV-a](/docs/configurations/tables/finance/vat-rates) nije aktivirana i oznaka „Dopusti PDV 0 u dnevniku knjiženja”.

#### PRIMJERI

<details>

<summary>Kliknite za primjer</summary>

- Ako je oznaka deaktivirana, moguće je u predložak knjiženja uključiti sva potencijalno potrebna konta. Konta koja se ne koriste neće se zadržati prilikom spremanja knjiženja. To je korisno, primjerice, kod knjiženja plaća zaposlenika, jer se ne koriste uvijek ista konta svakog mjeseca, iako postoji više mogućih konta.

- Ako je oznaka aktivirana, moguće je unijeti analitička konta s nultim iznosom. Takva se situacija često pojavljuje, primjerice, pri knjiženju telefonskih ili električnih računa.

**Predložak knjiženja**: ovo je ključan, ali neobvezan odjeljak računovodstvenog predloška, u koji se unosi tipična shema računovodstvenog knjiženja koje treba obraditi. Moguće je unijeti i opće šifre konta (npr. konto dobavljača), koje će program automatski ažurirati na temelju popisa konta kupaca i dobavljača unesenih u opće računovodstvene parametre.

Ta analitička konta, zajedno s odjeljcima duguje/potražuje, određuju računovodstvene vrijednosti, koje je ipak moguće mijenjati tijekom ručnog unosa knjiženja.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image02.png)

</details>

#### [Vrsta iznosa]{#amount-type}

Kodovi vrste iznosa zahtijevaju posebno objašnjenje jer su ključni za automatsko popunjavanje dnevnika knjiženja na temelju podataka o PDV-u i analitičkim kontima obuhvaćenima knjiženjem. Posebno:

**Ručno**: označava da će korisnik ručno unijeti vrijednost retka prilikom knjiženja.

**Oporezivi iznos analitičkog konta**: označava da će se redak ažurirati za svaku šifru analitičkog konta unesenu u odjeljak PDV-a, i to iznosom dobivenim iz oporezivog iznosa odgovarajućeg retka ili redaka. **Ova se vrsta iznosa u pravilu preporučuje za sve prihode unesene u predloške prodajnih knjiženja.**

**Ukupni oporezivi iznos**: označava da će se redak ažurirati ukupnim oporezivim iznosom knjiženja, bez obzira na unesenu šifru konta ili analitičkog konta. PRIMJERI: prodaja u sustavu podijeljene naplate PDV-a (*split payment*) ili prodaja unutar EU-a.

**Ukupni iznos poreza**: označava da će se redak ažurirati ukupnim iznosom poreza knjiženja, bez obzira na unesenu šifru konta ili analitičkog konta.

**Odbitni porez**: označava da će se redak ažurirati ukupnim odbitnim iznosom poreza knjiženja, bez obzira na unesenu šifru konta ili analitičkog konta.

**Ukupni iznos dokumenta/knjiženja**: označava da će se redak ažurirati ukupnim iznosom dokumenta/knjiženja na analitičkom kontu navedenom kao nositelj knjiženja, ako je ono u skladu s kombinacijama definiranima u računovodstvenim parametrima.

**Oporezivi iznos + neodbitni porez**: označava da će se redak ažurirati ukupnim oporezivim iznosom uvećanim za ukupni neodbitni iznos poreza knjiženja, bez obzira na unesenu šifru konta ili analitičkog konta. Ova se vrsta kretanja rijetko koristi; preporučuje se koristiti **Oporezivi iznos analitičkog konta + neodbitni porez analitičkog konta**.

**50 % oporezivog iznosa**: označava da će se redak ažurirati s 50 % ukupnog oporezivog iznosa knjiženja, bez obzira na unesenu šifru konta ili analitičkog konta.

**50 % oporezivog iznosa + neodbitni PDV**: označava da će se redak ažurirati s 50 % ukupnog oporezivog iznosa knjiženja, uvećanim za ukupni neodbitni iznos PDV-a, bez obzira na unesenu šifru konta ili analitičkog konta.

**50 % oporezivog iznosa + 50 % neodbitnog PDV-a**: označava da će se redak ažurirati s 50 % ukupnog oporezivog iznosa knjiženja, uvećanim za 50 % neodbitnog iznosa PDV-a, bez obzira na unesenu šifru konta ili analitičkog konta.

**Ove su vrste izrađene zbog poreznih zahtjeva i treba ih smatrati zastarjelima.**

**Oporezivi iznos analitičkog konta + neodbitni porez analitičkog konta**: označava da će se redak ažurirati za svaku šifru analitičkog konta unesenu u odjeljak PDV-a, i to zbrojem oporezivog iznosa odgovarajućeg retka ili redaka i pripadajućeg neodbitnog poreza. **Ova se vrsta iznosa u pravilu preporučuje za sve troškove unesene u predloške nabavnih knjiženja.**

**Pozitivna zaokruživanja**: označava da će se redak ažurirati iznosom pozitivnih zaokruživanja. Koristi se uz predloške za zatvaranje stavki.

**Negativna zaokruživanja**: označava da će se redak ažurirati iznosom negativnih zaokruživanja. Koristi se uz predloške za zatvaranje stavki.

**Iznos analitičkog konta**: označava da će se redak ažurirati iznosima plaćanja stavki unesenih u knjiženje, u skladu s predznakom pojedinog plaćanja.

**Dobit od tečajnih razlika**: označava da će se redak ažurirati analitičkim kontom dobiti za valutu na koju se odnosi tečajna razlika, u iznosu izračunatom na temelju razlike između povijesnog tečaja i tečaja pri zatvaranju stavke. Ako je aktivirana oznaka zatvaranja po povijesnom tečaju, redak neće dobiti vrijednost.

**Gubitak od tečajnih razlika**: označava da će se redak ažurirati analitičkim kontom gubitka za valutu na koju se odnosi tečajna razlika, u iznosu izračunatom na temelju razlike između povijesnog tečaja i tečaja pri zatvaranju stavke. Ako je aktivirana oznaka zatvaranja po povijesnom tečaju, redak neće dobiti vrijednost.

**Automatski**: vrsta iznosa koja se koristi u određenim postupcima automatskog knjiženja.

*PRIMJER*: koristi se u predlošcima prodajnih knjiženja osnovnih sredstava za obračun dobiti ili gubitka od otuđenja. U ostalim slučajevima vrijednost postavlja sustav tijekom postupaka automatskog knjiženja.

Tablica se dopunjuje sljedećim poljima:

- Polje za definiranje protukonta (ne preporučuje se njegova uporaba jer u računovodstvu već postoji ispis „Izvadak konta s protukontima”, koji prikazuje protukonta neovisno o ovoj postavci). Osim toga, aktiviranjem oznake za prikaz analitičkih protukonta (kartica Detalji knjiženja) ta će se polja popunjavati automatski. Zbog toga se ne preporučuje ručno definirati protukonta u predlošku knjiženja.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image03.png)

Primjerice, uz konta pretporeza (ili obveze PDV-a) i troška (ili prihoda) prikazuju se podaci o dobavljaču (ili kupcu), dok se uz dobavljača (ili kupca) prikazuje konto protustavke troška ili prihoda. Ako postoji više protustavki, prikazuje se ona s najvećim iznosom, dok se ostale zanemaruju.

- Polje za detaljne napomene: u ovom polju moguće je koristiti sve kodove navedene u legendi na dnu obrasca.

**Za predloške zatvaranja stavki** uz opći konto kupaca/dobavljača unesite **kodove (8) ili (9)** zajedno s oznakom **„Ref. dok. stavke u plaćanju”** (na kartici Detalji knjiženja) kako bi se u računovodstvu zabilježile reference plaćenih ili naplaćenih dokumenata.

Obratite pozornost na to da se opći konto u predlošku (primjerice „Dobavljači u Italiji”) doista koristi u [Računovodstvenim parametrima](/docs/configurations/parameters/finance/accounting-parameters) i da je povezan s odgovarajućom vrstom konta (npr. FIT u standardnoj bazi podataka Fluentisa). Također provjerite je li vrsta iznosa uz redak kupca ili dobavljača ispravno postavljena na **Iznos analitičkog konta**.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image04.png)

**Odbitni PDV i analitički konto PDV-a**: vrsta iznosa koja se koristi za popunjavanje retka PDV-a odbitnim iznosom PDV-a i analitičkim kontom određenim prema vrsti knjiženja PDV-a koja je prioritetno povezana sa šifarnikom subjekta na kojeg glasi knjiženje ili je zadano određena u Općim računovodstvenim parametrima.

Ova se postavka ne koristi u Italiji, ali je korisna u stranim lokalizacijama, primjerice u Hrvatskoj, gdje omogućuje povezivanje konta PDV-a s korištenom stopom. Primjerice, ako se koristi stopa PDV-a od 10 %, povezat će se konto „Pretporez po stopi od 10 %”, specifičan za tu stopu, umjesto općeg konta „Pretporez”, koji se u Italiji koristi za sve stope.

**Parametarski opis računovodstvenog knjiženja**: u ovom se polju mogu definirati standardni opisi koje program sastavlja pomoću kodova navedenih u legendi neposredno iznad polja. Ti se opisi prikazuju na računovodstvenim ispisima, osobito na izvacima konta i u dnevniku knjiženja.

Za svaki redak knjiženja u odjeljku *Detalji konta / analitičkih konta – Predložak knjiženja* moguće je, kao što je prethodno opisano, definirati unaprijed postavljene napomene, jednako kao i za opći opis knjiženja.

**POZOR**: kodovi (8) i (9) koriste se isključivo za opis pojedinačnog retka i ne uzimaju se u obzir u općem opisu knjiženja iz ovog polja.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image05.png)

### 1.2 Detalji knjiženja

**PDV registar**: ovo je polje obvezno samo za predloške s vrstom kretanja koja uključuje PDV. Omogućuje dodjelu odgovarajućeg PDV registra predlošku koji se uređuje.

**Datum obračuna PDV-a**: ovim se poljem određuje datum obračuna koji će se dodijeliti kretanju PDV-a. Program za knjiženja u registrima nabave predlaže datum knjiženja, a za knjiženja u registrima prodaje datum dokumenta. Preporučuje se postaviti datum knjiženja kao datum obračuna PDV-a i za predloške prijenosa PDV-a za nabave unutar EU-a i za *reverse charge*.

Vrlo je važno provjeriti imaju li oba predloška, nabavni i predložak prijenosa, koja sudjeluju u ovim vrstama „dvostrukog knjiženja”, jednake postavke. Time se izbjegava da odbitni PDV i odgovarajuća obračunana obveza PDV-a pripadnu različitim obračunskim razdobljima.

To je posebno važno jer predložak prijenosa PDV-a, budući da se radi o predlošku PDV-a na strani prodaje, prema zadanim postavkama predlaže datum dokumenta. Tu je postavku stoga potrebno promijeniti.

#### Opcije vrste dokumenta

**Vrsta/broj dokumenta**: aktiviranjem ove oznake polje Broj dokumenta postaje obvezno za spremanje knjiženja koje se temelji na ovom predlošku.

**Datum dokumenta**: aktiviranjem ove oznake polje Datum dokumenta postaje obvezno za spremanje knjiženja koje se temelji na ovom predlošku.

**Broj dokumenta = PDV protokol**: aktiviranjem ove oznake program predlaže broj dokumenta na temelju rednog broja PDV protokola. Ova se opcija ne smije koristiti za nabavna knjiženja kod kojih broj dokumenta i broj protokola nisu međusobno povezani.

Za prodaju se preporučuje samo za predloške knjiženja koji se ručno unose izravno u glavnu knjigu. Ne preporučuje se za predloške definirane u vrstama prodajnih računa koji se koriste pri knjiženju računa.

**PDV protokol = broj dokumenta**: aktiviranjem ove oznake program pokušava dodijeliti PDV protokol na temelju broja dokumenta. Ova se opcija ne smije koristiti za nabavna knjiženja kod kojih broj dokumenta i broj protokola nisu međusobno povezani.

Za prodaju se **preporučuje za sve predloške definirane u vrstama prodajnih računa koji se koriste pri automatskom knjiženju računa**. Korištenje ove postavke ovisi o tome je li numeriranje vrsta računa jednako za sve dokumente koji se knjiže u istom PDV registru. U suprotnom mogu nastati preskakanja brojeva ili duplikati, zbog kojih sustav neće dopustiti spremanje.

Prednost ove funkcije pri automatskom knjiženju računa jest to što nije potrebno paziti na redoslijed dodjele protokola. Primjerice, moguće je prvo knjižiti račun broj 2, a zatim račun broj 1, pri čemu će se protokoli ispravno dodijeliti tako da račun broj 1 dobije protokol 1 itd.

Na kraju poreznog razdoblja za PDV (mjeseca ili tromjesečja) dovoljno je provjeriti jesu li svi izdani računi proknjiženi.

#### Opcije vrste knjiženja

**Otvaranje stavki**: aktiviranjem ove oznake u računovodstvenom knjiženju koje koristi ovaj predložak prikazat će se kartica za otvaranje otvorenih stavki. Ova se postavka preporučuje za sva knjiženja koja uključuju PDV i općenito za upravljanje rokovima dospijeća kupaca i dobavljača. Oznaka se može aktivirati i za predloške kojima se evidentiraju predujmovi. U tom će se slučaju otvoriti stavka suprotnog predznaka, koja će se naknadno zatvoriti stavkama nastalima prilikom računovodstvenog evidentiranja sljedećeg poreznog dokumenta.

**Detalji kretanja u stavkama**: aktiviranjem ove oznake program će u **napomene otvorenih stavki** prenijeti tekst unesen u polje „Detalji kretanja” izvornog računovodstvenog retka stavke.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image02.png)

Ova je oznaka aktivna samo ako je prethodno aktivirana opcija *Otvaranje stavki*.

**Otvaranje za svaki redak kretanja**: aktiviranjem ove oznake program će otvoriti zasebnu stavku za svaki redak kretanja koji sadrži analitički konto s aktiviranom opcijom upravljanja otvorenim stavkama. Ova je oznaka aktivna samo ako je prethodno aktivirana opcija *Otvaranje stavki*.

Ova se oznaka može aktivirati samo za predloške bez PDV-a, primjerice za početno otvaranje konta. Za svaki redak kretanja kupca ili dobavljača otvara se zasebna stavka, a podaci o plaćanju preuzimaju se iz šifarnika kupca ili dobavljača. To je korisno kada se za istog kupca ili dobavljača otvara više redaka.

**Zatvaranje stavki**: aktiviranjem ove oznake u računovodstvenom knjiženju koje koristi ovaj predložak prikazat će se kartica za zatvaranje otvorenih stavki. Ova se opcija obično koristi za sva knjiženja plaćanja i naplate bez PDV-a, ali može se kombinirati s otvaranjem i prijebojem stavki kod predložaka za knjižna odobrenja i općenito kod svih knjiženja koja otvaraju stavke uz istodobni prijeboj prethodno nastalih stavki.

**Koristi povijesni tečaj**: ova je oznaka dostupna samo ako je aktivirano zatvaranje stavki. Aplikacija će zatvoriti otvorene stavke primjenom povijesnog tečaja korištenog pri njihovu otvaranju, bez automatskog evidentiranja tečajnih razlika, čime se omogućuje njihovo eventualno ručno knjiženje.

**Grupiranje plaćanja u dnevniku knjiženja**: ova je oznaka dostupna samo ako je aktivirano zatvaranje stavki. Aplikacija će objediniti sve iznose zatvaranja stavki povezanih s istim analitičkim kontom u jedno računovodstveno kretanje. Pritom će grupirati kretanja istog predznaka i iste valute.

**Isključi iz obračunatih provizija**: ova je oznaka dostupna samo ako je aktivirano zatvaranje stavki. Zatvaranja stavki provedena ovim računovodstvenim predloškom neće se uzimati u obzir pri izračunu obračunatih provizija agenata kod kojih je način obračuna postavljen na „Nakon izvršenog plaćanja”.

**Referenca dokumenta stavke u plaćanju**: ova je oznaka dostupna samo ako je aktivirano zatvaranje stavki. Aplikacija će koristiti kodove (8) i (9) za evidentiranje referenci zatvorenih stavki u detaljnim opisima kretanja.

**Prijeboj stavki**: ova je oznaka dostupna samo ako su aktivirane obje opcije, otvaranje i zatvaranje stavki. Postupak će omogućiti prijeboj stavki unutar knjiženja koje se temelji na ovom predlošku. Ova se kombinacija oznaka preporučuje za sve predloške povezane s dokumentima vrste knjižno odobrenje.

**Upozorenje o prijeboju**: aktiviranjem ove oznake prilikom spremanja računovodstvenog knjiženja provjerit će se postoje li stavke za prijeboj te će se korisniku prikazati upozorenje.

**Grupiranje stavki**: ovom se oznakom omogućuje upravljanje grupama stavki umjesto standardnog načina rada s otvaranjem i zatvaranjem stavki. Za to se u računovodstvenom knjiženju koristi posebna kartica za evidentiranje grupa.

**Izradi grupu**: ako je ova oznaka aktivirana zajedno s prethodnom, program će automatski izraditi grupu stavki i u nju uključiti stavke iz knjiženja. Ovu opciju treba aktivirati u predlošcima za nabavne i prodajne račune.

**Grupiranje stavki – vrsta plaćanja**: vrsta plaćanja koja se dodjeljuje kretanjima u grupama stavki evidentiranima ovim predloškom.

**Projekti**: (ranije *Nalozi*). Aktiviranjem ove oznake u zaglavlju knjiženja prikazat će se polje *Projekt*, kao i odgovarajuća polja u detaljima knjiženja, radi povezivanja projekata (naloga) s pojedinačnim računovodstvenim kretanjima.

Za više pojedinosti pogledajte **[ovdje](/docs/finance-area/ledger-records/records/ledger-recor&#x64;)**.

**Centri troška**: aktiviranjem ove oznake u računovodstvenim knjiženjima prikazat će se kartica za upravljanje raspodjelom vrijednosti na centre troška.

**Profitni centri**: aktiviranjem ove oznake u računovodstvenim knjiženjima prikazat će se kartica za upravljanje raspodjelom vrijednosti na profitne centre.

**Upravljanje vozilima**: oznaka NIJE AKTIVIRANA. Njezinim aktiviranjem u analitičkoj kartici računovodstva prikazat će se tablica za raspodjelu troškova i prihoda na službena vozila tvrtke.

**Osnovna sredstva**: aktiviranjem ove oznake u računovodstvenom knjiženju prikazat će se kartica za upravljanje evidencijom osnovnih sredstava.

**Vrsta operacije**: vrsta operacije koja će se zadano predložiti za nova kretanja evidentirana na kartici osnovnih sredstava u računovodstvu.

**Ažuriranje stanja**: oznaka koja je zadano aktivirana.

**Opis kretanja u dnevniku i plaćanjima**: aktiviranjem ove oznake postupak će kopirati opći opis knjiženja u sve detaljne opise pojedinačnih kretanja, kao i u napomene uz plaćanja.

**Provizije**: ova oznaka aktivira posebnu karticu unutar računovodstvenih knjiženja za upravljanje podacima za izračun provizija iz administrativnog modula. Ovaj je modul uveden nedavno i predstavlja alternativu upravljanju provizijama iz prodajnog modula, ali ga ne zamjenjuje jer prodajni modul ostaje aktivan.

**Intrastat**: ova oznaka aktivira posebnu karticu unutar računovodstvenih knjiženja za upravljanje podacima potrebnima za izradu Intrastat obrazaca. Podaci se mogu preuzeti iz nabavnog ili prodajnog računa automatski proknjiženog odgovarajućim postupkom ili unijeti prilikom unosa računovodstvenog knjiženja u dnevnik.

Tako evidentirani podaci preuzimaju se u postupak izrade Intrastat obrazaca putem postupka *Preuzimanje računovodstvenih knjiženja*. Napominjemo da postoji i alternativni postupak *Preuzimanje iz računa*, koji ne koristi računovodstvena kretanja, već izravno čita isključivo nabavne i prodajne dokumente.

#### Dodatni stupci koji se mogu prikazati u tablici računovodstvenih knjiženja

**Valuta**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polje Valuta.

**Tečaj/datum valute**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polja Tečaj i Datum valute.

**Iznos u valuti**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polje Iznos u valuti.

**Analitički konto protustavke**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polja za analitičke konte protustavki. Ne preporučuje se upravljanje tim poljima.

**Detalji kretanja**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polje Detalji kretanja. Preporučuje se aktivirati ovu oznaku za sve računovodstvene predloške kako bi se uvijek omogućio unos detaljnih napomena za pojedino računovodstveno kretanje.

**Organizacijska jedinica**: aktiviranjem ove oznake polje Organizacijska jedinica prikazat će se već u odjeljku PDV-a, kao i u odjeljku dnevnika knjiženja. Time je omogućeno raspoređivanje istog dokumenta na više organizacijskih jedinica tvrtke.

**Dani bankovne valute**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polje Datum valute banke. Preporučuje se za sve računovodstvene predloške kojima se evidentiraju financijska kretanja. Popunjavanje ovog polja moguće je automatizirati na temelju pozitivnih ili negativnih dana valute definiranih u šifarniku banaka za svaku pojedinu vrstu predloška.

**Redni broj**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polje Broj retka. Preporučuje se za opsežnije računovodstvene predloške kako bi korisnik mogao trajno odrediti redoslijed zapisa, kao što je slučaj s knjiženjima plaća.

**Ručna referenca stavke**: aktiviranjem ove oznake u odjeljku dnevnika knjiženja prikazat će se polje Ručna referenca stavke. Ovo je polje namijenjeno ručnom povezivanju računovodstvenih kretanja bez korištenja upravljanja otvorenim stavkama. U osnovi se radi o slobodnom polju za napomene.

**Izvanredne transakcije**: aktiviranjem ove oznake prikazat će se istoimeno polje (tipa bit, odnosno oznaka) kojim se određena računovodstvena kretanja, primjerice troškovi, mogu označiti kao *izvanredna*. To omogućuje njihovo jednostavno pretraživanje ili izdvajanje u ispisima.

Ova je mogućnost korisna nakon izmjena strukture financijskih izvještaja uvedenih Direktivom 2013/34 (Zakonodavna uredba 139/2015). Tim je izmjenama, ukratko, ukinuto izvanredno područje računa dobiti i gubitka. Posljedično se izvanredne stavke više ne mogu prikazivati na posebnim kontima, primjerice na kontima izvanrednih prihoda, već se moraju evidentirati izravno na kontu koji odgovara prirodi prihoda ili troška.

Ipak, potrebno je zasebno identificirati takve izvanredne troškove i prihode radi odgovarajućih detalja u bilješkama uz financijske izvještaje i drugih mogućih poreznih potreba, primjerice porezno nepriznatih troškova koji se dodaju poreznoj osnovici u poreznoj prijavi.

**Vrsta porezne transakcije**: prikazuje padajući izbornik kojim se računovodstveni redak označava za potrebe naknadne vanjske obrade godišnje prijave PDV-a. Potrebno je navesti odnosi li se transakcija na:

- nabavu amortizirajuće imovine
- nabavu dugotrajne imovine koja se ne amortizira
- nabavu robe ili usluga namijenjenih daljnjoj prodaji
- ostale nabave

**Referenca dokumenta**: prikazuje dva dodatna polja uz retke računovodstvenog kretanja za unos datuma i broja dokumenta, primjerice računa uz redak konta protustavke.

### 1.3 Parametri

#### Redoslijed kartica u računovodstvenim knjiženjima

Ovaj odjeljak služi za određivanje redoslijeda prikaza kartica pomoću odgovarajućih gumba **Pomakni gore** i **Pomakni dolje**.

#### Parametri knjiženja

**Provjera vrste konta**: aktiviranjem ove oznake postupak će provjeravati odgovara li analitički konto nositelja knjiženja postavkama računovodstvenih parametara. Primjerice, provjerava se koristi li se konto kupca u predlošku nabavnog knjiženja dobavljača. Ako provjera nije uspješna, prikazat će se upozorenje.

**Blokiraj knjiženje ako vrsta konta nije kompatibilna**: aktiviranjem ove oznake postupak će onemogućiti unos analitičkog konta nositelja knjiženja koji nije u skladu s postavkama računovodstvenih parametara. Primjerice, neće biti dopuštena uporaba konta kupca u predlošku nabavnog knjiženja dobavljača.

**Dopusti neuravnoteženo računovodstveno knjiženje**: aktiviranjem ove oznake korisniku se omogućuje spremanje računovodstvenih knjiženja koja nisu uravnotežena. Ova se mogućnost ne preporučuje. Može biti korisna, uz odgovarajući oprez, za prisilno izvršavanje automatskog knjiženja koje vraća poruku o pogrešci, kako bi se lakše razumio rezultat knjiženja i ispravile postavke.

**Blokiraj brisanje knjiženja s plaćenim stavkama**: aktiviranjem ove oznake neće biti moguće izbrisati knjiženja koja sadrže barem jednu stavku povezanu s plaćanjem.

**Blokiraj knjiženje ako vrijednost stavki nije jednaka računovodstvenom kretanju**: aktiviranjem ove oznake postupak će blokirati spremanje knjiženja ako se vrijednosti računovodstvenih kretanja ne podudaraju s vrijednostima kretanja otvorenih stavki (pri otvaranju i zatvaranju stavki). Ako oznaka nije aktivirana, postupak će ipak prikazati upozorenje o postojanju razlike. Provjera se provodi za sve analitičke konte koji u kontnom planu imaju aktiviranu oznaku *Otvaranje stavki*.

**Blokiraj knjiženje ako se ukupni iznos dokumenta razlikuje od ukupnog iznosa podataka o PDV-u**: aktiviranjem ove oznake postupak će blokirati spremanje knjiženja ako ukupni iznos kretanja PDV-a ne odgovara ukupnim iznosima unesenima u zaglavlju knjiženja. Ako oznaka nije aktivirana, postupak će ipak prikazati upozorenje.

**Automatski ažuriraj ukupni iznos dokumenta pri promjeni podataka u tablici PDV-a**: aktiviranjem ove oznake postupak će ažurirati ukupne iznose u zaglavlju knjiženja pri promjeni ukupnog zbroja unesenog u odjeljku PDV-a, ali samo ako se iznos povećava.

**Ažuriraj i pri smanjenju**: ova je oznaka aktivna samo ako je prethodna opcija aktivirana. Omogućuje ažuriranje ukupnih iznosa knjiženja i pri smanjenju.

**Blokiraj knjiženje ako nije poštovan redoslijed protokola**: aktiviranjem ove oznake postupak će blokirati spremanje knjiženja ako nije poštovan kronološki redoslijed dodjele protokola. Konkretno, brojevi protokola dodjeljivat će se samo ako je za njih postavljen odgovarajući datum knjiženja. Ako oznaka nije aktivirana, postupak će ipak prikazati upozorenje o nepoštovanju redoslijeda protokola. Napominjemo da zadane postavke ispisa PDV registara ne dopuštaju konačni ispis registara koji imaju praznine u numeriranju ili ne slijede ispravan redoslijed protokola.

**Odvojeno upravljanje centrima troška i profitnim centrima**: ova je oznaka aktivna samo ako predložak omogućuje upravljanje i centrima troška i profitnim centrima. Omogućuje dodjelu računovodstvenih kretanja na obje vrste centara. Ako nije aktivirana, kretanje se može dodijeliti samo jednoj od tih dviju skupina.

**Automatski ponovni izračun centara troška, profitnih centara i naloga**: ova se oznaka prenosi i u računovodstvena knjiženja koja se temelje na ovom predlošku. Određuje hoće li se automatski ponovno izračunavati analitički odjeljci centara troška, profitnih centara i naloga prilikom otvaranja već spremljenog knjiženja radi izmjene. Pri unosu novog knjiženja, sve do prvog spremanja, ti se odjeljci uvijek ažuriraju automatski, u skladu sa zadanim postavkama.

**Blokiraj knjiženje ako vrijednost centara troška/profitnih centara nije jednaka računovodstvenom kretanju**: aktiviranjem ove oznake postupak će blokirati spremanje knjiženja ako ukupna vrijednost analitičkih kretanja centara troška i profitnih centara ne odgovara iznosima evidentiranima u glavnoj knjizi. Ako oznaka nije aktivirana, prikazat će se upozorenje o nepodudaranju vrijednosti.

**Grupiraj PDV u dnevniku knjiženja**: aktiviranjem ove oznake postupak će grupirati retke PDV-a u dnevniku knjiženja koji su povezani s istim analitičkim kontom i istom organizacijskom jedinicom.

**Blokiraj spremanje ako je broj dokumenta dupliciran**: ova je oznaka zadano aktivirana. Njome se blokira spremanje računovodstvenih knjiženja koja imaju isti broj dokumenta, istu godinu, istu vrstu dokumenta i isti subjekt naveden u zaglavlju knjiženja.

**Boja pozadine**: u ovo polje postavlja se boja pozadine kojom će se u rezultatima pretraživanja na zaslonu prikazivati kretanja koja se temelje na ovom predlošku. Boje mogu olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifri predložaka.

**Boja teksta**: u ovo polje postavlja se boja teksta kojim će se u rezultatima pretraživanja na zaslonu prikazivati kretanja koja se temelje na ovom predlošku. Boje mogu olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifri predložaka.

**Primjer teksta**: ovo polje prikazuje rezultat odabrane kombinacije boja.

**Kurziv**: omogućuje prikaz teksta u kurzivu za ovaj predložak u rezultatima pretraživanja na zaslonu. To može olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifri predložaka.

**Podebljano**: omogućuje prikaz teksta podebljanim slovima za ovaj predložak u rezultatima pretraživanja na zaslonu. To može olakšati prepoznavanje vrste kretanja bez čitanja opisa ili šifri predložaka.

:::important Vidi također
[**VIDEOUPUTE O RAČUNOVODSTVENIM PREDLOŠCIMA KNJIŽENJA**](/docs/video/finance/intro)
:::

### 1.4 Kontrola stopa PDV-a

Na ovoj kartici moguće je navesti određene stope PDV-a, prethodno definirane u tablici [**Stope PDV-a / Načini obračuna PDV-a**](/docs/configurations/tables/finance/vat-rates/), čime se korisnika ograničava na njihovu isključivu uporabu.

To je način kontrole kojim se osigurava korištenje samo onih šifri PDV-a koje se smatraju ispravnima i prikladnima za računovodstveno knjiženje povezano s predmetnim predloškom.

Mogućnost unosa stopa u tablicu i aktiviranja ove kontrole omogućuje oznaka **Postavi dopuštene stope PDV-a**.

Uz polja sa šifrom i opisom unesene stope nalazi se i polje za postavljanje datuma završetka valjanosti prethodno odabranog pravila, što omogućuje promjenu ili završetak primjene određene postavke.