---
title: Računovodstveni parametri
sidebar_position: 2
---

:::tip[Brzi početak]
Tabela je obuhvaćena postupkom [**Brzi početak**](/docs/guide/fast-start).

Ako želite da konfiguraciju izvršite ručno, potrebno je da pratite kontrolnu listu dostupnu na poveznici.
:::

Obrazac Računovodstveni parametri omogućava definisanje različitih parametara upravljanja **za svaku odabranu računovodstvenu godinu**.

:::tip VAŽNO
Mora postojati zapis koji sadrži različite detaljne parametre za **svaku obračunsku godinu**. Zbog toga se **svaka nova godina** mora inicijalizovati kreiranjem novog zapisa parametara za tu obračunsku godinu pomoću dugmeta **Novo**.

Prilikom kreiranja novog zapisa parametara, program vas pita da li želite da kreirate i [**druge brojače za novu godinu**](/docs/configurations/utility/new-year-counter-generation).
:::

---

**### Specifična dugmad**

> **Sačuvaj:** čuva podešavanja godine.

> **Unos računa:** prilikom unosa liste računa kupaca/dobavljača u tabelu, omogućava automatsku zamenu generičkog računa u referenci računom vlasnika podračuna poreskog dokumenta, kao i blokiranje ili prijavljivanje nekompatibilnih računa.

> **Izbriši račun:** briše prethodno unete račune.

> **Otkaži konačni izveštaj:** omogućava otkazivanje konačnih ispisa dnevnika. Nakon otkazivanja konačnog ispisa, korisnik mora da resetuje odgovarajući brojač koji odgovara polju **_Datum poslednjeg ispisa dnevnika_** u odeljku **_Podaci o godini_**. Ovo polje se sastoji od tri okvira koji sadrže datum, poslednji red i poslednju stranicu konačnog ispisa.

> **Izbriši knjigu amortizacije:** omogućava otkazivanje konačnih ispisa knjige osnovnih sredstava. Nakon otkazivanja konačnog ispisa, korisnik mora da resetuje odgovarajući brojač stranica koji odgovara polju **_Poslednja stranica odštampana iz dnevnika osnovnih sredstava_** u odeljku **_Podaci o godini_**.

> **Premesti nagore:** pomera odabrani red nagore u okviru tabele „Predlog mesta troška/profita“, čime mu se dodeljuje viši prioritet.

> **Premesti nadole:** pomera odabrani red nadole u okviru tabele „Predlog mesta troška/profita“, čime mu se dodeljuje niži prioritet.
::: 

**## 1. Opšte**

**### 1.1 Podaci za godinu**

- **(Početak/Kraj) Poslovna godina:** Definiše raspon datuma za odabranu poslovnu godinu. Svako računovodstveno knjiženje, nakon provere prethodno navedenih polja, unosi se u finansijsku godinu kojoj pripada na osnovu ovih datuma, koji se ne smeju preklapati između različitih finansijskih godina.

- **(Početak/Kraj) Obračunski period:** Preporučena, opciona polja koja definišu raspon datuma obračunskih perioda kojima se može upravljati u okviru zapisa odabrane poslovne godine.

- **(Početak/Kraj) Tekući period:** Obavezna polja koja definišu raspon datuma dokumenata kojima se može upravljati u okviru zapisa odabrane finansijske godine.

- **Zatvaranje prethodnog perioda knjiženja:** Definiše datum zatvaranja prethodne finansijske godine.

- **Poslednji datum štampanja dnevnika:** Čuva datum poslednjeg konačnog štampanja dnevnika za tekuću finansijsku godinu. Prilikom otvaranja nove poslovne godine, ovaj datum mora odgovarati datumu završetka prethodne poslovne godine.

- **Saldo duguje/potražuje:** Čuva poslednje konačno odštampano dugovno/potražno stanje dnevnika odabrane finansijske godine. Prilikom otvaranja nove poslovne godine, ova polja moraju biti postavljena na nulu.

- **Datum/poslednji red/poslednja stranica štampanja dnevnika:** Čuva podatke o poslednjem konačnom štampanju dnevnika odabrane finansijske godine. Prilikom otvaranja nove poslovne godine, ova polja moraju biti postavljena na nulu.

- **Poslednja stranica odštampana iz dnevnika osnovnih sredstava:** Čuva broj poslednje konačno odštampane stranice knjige osnovnih sredstava za odabranu finansijsku godinu. Prilikom otvaranja nove poslovne godine, ovo polje mora biti postavljeno na nulu.

- **Šablon za otvaranje i zatvaranje računa:** Dva opciona polja koja omogućavaju unapred definisanje predložaka koji će se koristiti u postupcima zatvaranja i otvaranja računa.

- **Procenat za nepotpuni period:** Omogućava podešavanje procentualne vrednosti pro-rata obračuna koja važi za odabranu finansijsku godinu. Ako ova opcija nije potrebna, polje ostavite praznim ili unesite 100%.

:::tip[Informacije]
Upravljanje pro-rata obračunom može se, kao alternativa ovom jedinstvenom polju za sve knjige PDV-a, podesiti i zasebno za svaku knjigu PDV-a. Na taj način omogućava se podrška za vođenje više delatnosti sa različitim procentima pro-rata obračuna PDV-a. Pogledajte [**Knjige PDV-a**](/docs/configurations/tables/finance/vat-books) i [**Tip aktivnosti PDV-a**](/docs/configurations/tables/finance/vat-activity-type).
:::

**Tip knjiženja PDV-a:** Omogućava definisanje podrazumevanog tipa obračuna stopa PDV-a na različitim analitičkim računima kontnog plana.

**Mesečno zatvaranje:** Ako je aktivno, menja način rada postupka *Automatsko zatvaranje računa* kako bi se zatvaranje moglo obavljati mesečno, prema potrebama određenih stranih tržišta, naročito u istočnoj Evropi. **Ovo podešavanje se ne preporučuje za Italiju.**

:::danger[PAŽNJA]
Ova oznaka mora biti deaktivirana za uobičajeno računovodstvo u Italiji. Ako je aktivirana, na primer slučajno, osim uočljivih razlika u obrascu za sprovođenje zatvaranja računa, neće biti moguće izračunavati i upravljati obračunatim prihodima i rashodima u obrascu *Zapisi usklađivanja*.
:::

- **Upravljanje provizijama:** Aktivira funkcije za upravljanje obračunom provizija agenata iz modula Administracija.

- **Koeficijent ažuriranja:** Označava godišnje povećanje vrednosti imovine za potrebe obračuna amortizacije, koja se zasebno izračunava u modulu Kontroling. Dodatnim parametrima upravlja se na kartici *Amortizacija za kontroling*, dostupnoj u podešavanjima liste imovine [*Obrazac kategorija imovine za kontroling*](/docs/configurations/tables/controlling/analytical-accounting/controlling-asset-categories).

  **PRIMER:** Unosom vrednosti 1,1 vrednost imovine koja se amortizuje povećavaće se za 10% svake godine. Tako će imovina početne vrednosti 1000 imati vrednost 1100 u godini x+1, a u godini x+2 vrednost će se dodatno povećati prema istoj logici.

- **Poreski režim:** Opšti podaci koje je potrebno popuniti radi upravljanja automatizovanim postupcima i referencama na ove podatke u vezi sa poreskim obavezama i elektronskim fakturisanjem.

- **Obim poslovanja**: koristi se za izračunavanje određenih pokazatelja povezanih sa funkcionalnošću finansijskih izveštaja usmerenih na prevenciju poslovne krize.

- **Obračun PDV-a:** Podešava učestalost periodičnih obračuna PDV-a. Ove oznake se međusobno isključuju, a dve glavne odnose se na mesečnu ili tromesečnu učestalost na osnovu prometa (pogledajte propise o PDV-u), dok se treća odnosi na subjekte koji obračunavaju PDV tromesečno po prirodi, prema posebnom režimu iz člana 74. DPR 633/72.

- **Minimalni dug za uplatu PDV-a**: predstavlja iznos (koji može biti izmenjen u skladu sa važećim propisima o PDV-u) ispod kojeg nije potrebno platiti dug koji eventualno proizlazi iz periodične prijave PDV-a. Ovo polje utiče na štampanje periodične prijave PDV-a i na obradu tromesečne prijave (Li.Pe.).

- **Knjige PDV-a:** Omogućava podešavanje zaokruživanja PDV-a naviše, izborom opcije „Lire“ ili primenom logike za evro.

- **Knjige PDV-a:** Definiše da li se knjige PDV-a štampaju prema datumu knjiženja ili prema datumu obračuna PDV-a unutar odabranog perioda. Za korisnike koji ne koriste mogućnost odloženog fakturisanja do 15. dana narednog meseca, rezultat se ne menja.

- **Datum primene plafona jednak:** Određuje da li datum primene plafona koji se dodeljuje PDV transakcijama sa stopom povezanom sa plafonom treba da bude postavljen prema datumu knjiženja ili datumu dokumenta.

**Numeracija:** Omogućava povezivanje svake odabrane godine sa brojačem za konačna računovodstvena knjiženja i ona sa statusom „privremeno“. Ovo je korisno u slučaju povremenih promena pravila numerisanja, umesto fiksnog definisanja brojača u tabeli [Numeracija računovodstvenih knjiženja](/docs/configurations/tables/fluentis-numerations). Ako numeracija nije podešena u ovom obrascu, podrazumevano će se koristiti numeracija definisana u tabeli *Numeracija računovodstvenih knjiženja*. Podešavanje šifarnika za konačna i privremena knjiženja dostupno je i u okviru svakog pojedinačnog računovodstvenog razloga, kako bi se omogućilo razlikovanje brojeva za različite vrste dokumenata, što zahtevaju određene lokalizacije, najčešće francuska. Ovo podešavanje nalazi se u [*zaglavlju šablona*](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates). Ako numeracija nije podešena u računovodstvenom razlogu, podrazumevano će se koristiti ona definisana u ovom obrascu opštih parametara. Ako ni ovde nije definisana, koristiće se numeracija iz opšte tabele, kao što je prethodno navedeno.

**Samofaktura:** Ovaj odeljak sadrži parametre za kreiranje samofakture iz računovodstvenog knjiženja radi slanja podataka o kupovini u SDI. Pogledajte [**specifične parametre**](/docs/finance-area/e-invoice/auto-invoice/parameters).

**Intrastat:** Ovaj odeljak sadrži nekoliko polja povezanih sa obradom i izvozom Intrastat obrazaca.

- **Prikaži detalje prirode transakcije:** Nedavnom izmenom propisa uvedeno je detaljnije polje za prirodu transakcije, koje se može prikazati aktiviranjem ove oznake. Napominjemo da ovo detaljno polje popunjavaju oni koji tokom godine premaše prag od 20 miliona evra za isporuke u obrascu Intra 1 bis ili za nabavke u obrascu Intra 2 bis. Za detalje o kodiranju nove kolone B koja se odnosi na detalje prirode transakcije pogledajte uputstva ministarstva.

- **Identifikacioni kod ovlašćenog korisnika:** U ovom polju moguće je definisati kod koji se koristi u nazivu izvezene datoteke sa listama, a koji se navodi i u zaglavlju zapisa, za slanje datoteka putem kanala Entratel.

- **Periodičnost Intrastat nabavki/prodaje:** Padajuće liste omogućavaju podešavanje mesečne ili tromesečne periodičnosti za nabavke i prodaju. U skladu sa propisima, od izabrane periodičnosti zavisi nivo detalja koji je potrebno navesti prilikom popunjavanja podataka. Napomena: tromesečna periodičnost za nabavke trenutno je ukinuta.

**PDV na maržu:** U ovom odeljku unose se specifični parametri za upravljanje funkcionalnostima povezanim sa posebnim režimom PDV-a na maržu. Za detalje pogledajte [**ovde**](/docs/finance-area/particular-cases/VAT_regime-del-maine).

---

**### 1.2 Lista računa kupaca/dobavljača**

**Dodela** odgovarajućih glavnih računa (bez šifre analitičkog računa) tipovima računa kupaca, dobavljača, banaka i agenata u ovoj tabeli nije obavezna, ali se <u>**snažno preporučuje**</u> kako bi se omogućilo pravilno funkcionisanje različitih automatizovanih procesa u sistemu.

Posebno izdvajamo dva slučaja:

1. Nakon kreiranja zapisa kontakta, kada se dodeli tip računa i zatim unesu detalji zapisa, ovaj parametar omogućava kreiranje novog analitičkog računa namenjenog odgovarajućem kupcu, dobavljaču, agentu ili banci, uz njegovo povezivanje sa odgovarajućim glavnim računom. Bez ovog povezivanja, zadatak bi morao da se obavi ručno.

2. U okviru računovodstvenih šablona, naročito onih za knjiženje faktura, šema knjiženja koja sadrži određeni glavni račun omogućava da se, putem odgovarajuće kombinacije, proveri da li se u knjiženju koristi ispravan glavni račun. Na primer, može se proveriti da li se u knjiženju ulazne fakture koristi račun dobavljača, a ne račun istog naziva koji pripada tipu kupca. U zavisnosti od podešavanja odgovarajućeg bezbednosnog parametra u šablonu, unos može biti blokiran.

**PAŽNJA:** Ovo podešavanje omogućava automatsku zamenu generičkog računa u računovodstvenom razlogu analitičkim računom koji pripada poreskom dokumentu. Ako podešavanje nedostaje, automatizovani računovodstveni razlozi neće pravilno funkcionisati, što može onemogućiti automatsko knjiženje faktura.

**Predlog mesta troška/profita:**

U ovom odeljku definiše se logički redosled računovodstvenog određivanja mesta troška i profita.

### 1.3 Predlog mesta troška/profita iz: {#center-proposal}

U ovom odeljku definiše se logički redosled određivanja mesta troška i profita u računovodstvu.

Redosled se može menjati pomoću dugmadi *Premesti nagore/Premesti nadole*, koja se nalaze na traci sa alatkama. Na taj način upravlja se prioritetom pretrage, koja se uvek odvija odozgo nadole. Prvo se proverava prvi element na listi, a ako se mesto troška/profita (CDC) ne pronađe, prelazi se na sledeći element i tako redom.

**<u>NAPOMENA:</u>** Kriterijum *Industrijski trošak* trenutno se smatra zastarelim, pa će se podaci prvenstveno preuzimati iz kontnog plana ili matičnih podataka kupca.

---

**## 2. Računi**

Na ovoj kartici detaljno se podešavaju računi kontnog plana koji će se koristiti u različitim automatizovanim računovodstvenim postupcima koje izvršava sistem.

- **Analitički račun ulaznog PDV-a**: omogućava podešavanje analitičkog računa koji će biti predložen prilikom automatskog knjiženja poravnanja PDV-a, kada se periodični obračun PDV-a konačno odštampa.
- **Analitički račun izlaznog PDV-a**: omogućava podešavanje analitičkog računa koji će biti predložen prilikom automatskog knjiženja poravnanja PDV-a, kada se periodični obračun PDV-a konačno odštampa.
- **Početno finansijsko stanje**: omogućava podešavanje analitičkog računa koji će biti predložen za automatsko otvaranje računa.
- **Dobit tekuće godine pre oporezivanja**: omogućava podešavanje analitičkog računa koji će biti predložen za automatsko zatvaranje i otvaranje računa.
- **Gubitak tekuće obračunske godine**: omogućava podešavanje analitičkog računa koji će biti predložen za automatsko zatvaranje i otvaranje računa.
- **Dobit prethodne godine pre oporezivanja**: omogućava podešavanje analitičkog računa koji će biti predložen za automatsko zatvaranje i otvaranje računa.
- **Gubitak prethodne godine pre oporezivanja**: omogućava podešavanje analitičkog računa koji će biti predložen za automatsko zatvaranje i otvaranje računa.
- **Račun dobiti i gubitka**: omogućava podešavanje analitičkog računa koji će biti predložen za automatsko zatvaranje računa.
- **Kapitalni gubitak**: omogućava podešavanje analitičkog računa koji će se koristiti za evidentiranje negativnih ekonomskih razlika nastalih prodajom imovine.
- **Kapitalni dobitak**: omogućava podešavanje analitičkog računa koji će se koristiti za evidentiranje pozitivnih ekonomskih razlika nastalih prodajom imovine.
- **Vanredni prihod**: omogućava podešavanje analitičkog računa koji će se koristiti za evidentiranje potencijalne imovine.
- **Vanredni rashod**: omogućava podešavanje analitičkog računa koji će se koristiti za evidentiranje potencijalnih obaveza.
- **Potencijalna imovina**: omogućava podešavanje analitičkog računa koji će se koristiti za evidentiranje potencijalnih aktivnih stavki.
- **Potencijalne obaveze**: omogućava podešavanje analitičkog računa koji će se koristiti za evidentiranje potencijalnih pasivnih stavki.
- **Obaveza za obračunati porez**: omogućava podešavanje analitičkog računa koji će biti predložen prilikom automatskog knjiženja prijave PDV-a, kada se periodični obračun PDV-a konačno odštampa.
- **Pretporez**: omogućava podešavanje potražnog analitičkog računa prema trezoru koji će biti predložen prilikom automatskog knjiženja poravnanja PDV-a, kada se periodični obračun PDV-a konačno odštampa.
- **Račun naknada**: omogućava podešavanje analitičkog računa fiktivnog kupca za evidentiranje potraživanja po osnovu naknada.
- **Protivkonto naknada**: ako je prethodni račun naknada aktiviran, omogućava podešavanje analitičkog računa za evidentiranje ekonomskog poravnanja naknada koje treba proveriti.
- **Stopa PDV-a na primljene avanse**: ako je aktiviran račun za prethodne uplate, omogućava podešavanje stope PDV-a za evidentiranje uplata koje treba prijaviti.
- **Neprimljene fakture**: omogućava podešavanje generičkog računa koji će se koristiti u postupku „Knjiženje primljenih faktura“ u modulu „Ulazne fakture“ ili prilikom knjiženja ulaznih faktura određenog [tipa](/docs/configurations/tables/purchase/purchase-invoices-type) koji podržava razgraničenje troškova po obračunskom periodu.
- **Fakture koje treba izdati**: omogućava podešavanje generičkog računa koji će se koristiti prilikom knjiženja izlaznih faktura određenog [tipa](/docs/configurations/tables/sales/invoices-type) koji podržava razgraničenje troškova po obračunskom periodu.
- **Odobrenja za prijem**: omogućava podešavanje generičkog računa koji će se koristiti prilikom knjiženja odobrenja dobavljača određenog [tipa](/docs/configurations/tables/purchase/purchase-invoices-type) koji podržava obračun po periodima.
- **Odobrenja za izdavanje**: omogućava podešavanje generičkog računa koji će se koristiti prilikom knjiženja odobrenja kupcima određenog [tipa](/docs/configurations/tables/sales/invoices-type) koji podržava razgraničenje po obračunskim periodima.
- **Odloženi troškovi**: omogućava podešavanje generičkog računa koji će se koristiti u postupku automatskih korekcija u modulu „Međugodišnje zatvaranje“.
- **Obračunati prihod**: omogućava podešavanje generičkog računa koji će se koristiti u postupku automatskih korekcija u modulu „Međugodišnje zatvaranje“.
- **Odloženi prihod**: omogućava podešavanje generičkog računa koji će se koristiti u postupku automatskih korekcija u modulu „Međugodišnje zatvaranje“.
- **Obračunati trošak**: omogućava podešavanje generičkog računa koji će se koristiti u postupku automatskih korekcija u modulu „Međugodišnje zatvaranje“.
- **Račun za obrazac F24**: omogućava podešavanje generičkog računa koji će se koristiti prilikom knjiženja obrasca F24.
- **Račun INPS / penzijsko osiguranje**: omogućava podešavanje generičkog računa koji se koristi prilikom knjiženja obrasca F24.
- **Ostali poreski račun**: omogućava podešavanje generičkog računa koji će se koristiti prilikom knjiženja obrasca F24.
- **Analitički račun samofakture**: omogućava podešavanje računa za kreiranje samofakture iz računovodstvenih knjiženja radi slanja podataka o nabavkama u SDI.
  [**Specifični parametri**](/docs/finance-area/e-invoice/auto-invoice/parameters).
- **Protivkonto za kamate na poravnanje PDV-a:** omogućava automatizaciju knjiženja zateznih kamata koje proizlaze iz tromesečnog poravnanja PDV-a, unosom željenog protivkonta troška.

---

**### 3. Video-tutorijali o parametrima**

:::important Pogledajte i
[**VIDEO-TUTORIJALI O PARAMETRIMA**](/docs/video/finance/intro)
:::