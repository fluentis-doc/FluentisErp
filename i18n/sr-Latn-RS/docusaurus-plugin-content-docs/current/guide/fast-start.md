---
title: Fluentis Fast Start - mapa pokretanja okruženja
sidebar_position: 2
---

**Fast Start** je postupak osmišljen za pojednostavljenje i ubrzavanje inicijalizacije poslovnog softvera, omogućavajući automatsko popunjavanje sistema osnovnim parametrima i tabelama. Ova funkcionalnost značajno smanjuje vreme i trud potreban za početnu konfiguraciju, izbegavajući ručni unos svakog pojedinačnog podešavanja.

---
<details>

  <summary>Fast Start (Click to expand)</summary>
  
  Za pokretanje postupka, pristupite tabeli Kompanije i pritisnite dugme *Opšta podešavanja*.

  PAŽNJA: kontni plan ne sme biti unapred popunjen (ni u jednom delu), kao ni druge tabele koje su uključene u postupak. Preporučuje se da odmah donesete odluku i sprovedete ovaj postupak kao prvu radnju nakon instalacije.  

Tabele uključene u postupak (Stored Procedure Fluentis.SH_CreateNewYear_IT):
    
 - > Tipovi konta
 - > Kontni plan
 - > Parametri glavne knjige
 - > Parametri osnovnih sredstava
 - > Parametri portfelja (aktivno - menice)
 - > Parametri neplaćeno
 - > Parametri MPS
 - > Predlošci konta
 - > Šifre PDV-a                   
 - > Knjige PDV-a
 - > Tipovi dokumenta
 - > Načini plaćanja
 - > Rešenja plaćanja
 - > Kategorije trgovačkih predstavnika
 - > Tipovi zadržavanja (avansa)
 - > Kategorija osnovnih sredstava 
 - > Tipovi novčanog toka
 - > Tipovi avansa
 - > Stanja nepodmirenja
 - > Statusi hartija od vrednosti
 - > Tipovi odvojenog prikaza (efekti)
 - > Tipovi hartija od vrednosti
 - > Veza između tabele Tipovi plaćanja i tipova efekata
 - > Numeracije računovodstvenih evidencija (konačne i privremene)
 - > Numeracija dospeća plaćanja
 - > Numeracija kompenzacija (stanja)
 - > Numeracija plaćanja dobavljačima
 - > Numeracija Intrastat
 - > Numeracija likvidacije agenata
 - > Numeracija odvojenog prikaza efekata
 - > Numeracija hartija od vrednosti
  - > [Numeracija prodajnih dokumenata](/docs/configurations/tables/fluentis-numerations)
 - > [Numeracija dokumenata nabavke](/docs/configurations/tables/fluentis-numerations)
 - > Tipovi računa ([nabavka](/docs/configurations/tables/purchase/purchase-invoices-type) i [prodaja](/docs/configurations/tables/sales/invoices-type)) sa povezivanjem sa računovodstvenim predlošcima
 - > Tipovi otpremnica ([nabavka](/docs/configurations/tables/purchase/purchase-delivery-notes-type) i [prodaja](/docs/configurations/tables/sales/delivery-notes-type)) sa povezivanjem sa tipovima računa
 - > Tipovi narudžbina ([nabavka](/docs/configurations/tables/purchase/purchase-orders-type) i [prodaja](/docs/configurations/tables/sales/sales-order-types)) sa povezivanjem sa tipovima otpremnica  
 - > [Tipovi ponuda](/docs/configurations/tables/sales/sales-offer-type)
 - > [Parametri računa](/docs/configurations/parameters/sales/sales-invoices-parameters) i pripadajuće [grupacije](/docs/configurations/parameters/sales/invoice-grouping) 
 - > [Parametri otpremnica](/docs/configurations/parameters/sales/dn-parameters) i pripadajuće [grupacije](/docs/configurations/parameters/sales/dn-grouping) 
 - > [Parametri narudžbina](/docs/configurations/parameters/sales/sales-orders-parameters) i pripadajuće [grupacije](/docs/configurations/parameters/sales/orders-grouping)
 - > [Parametri ponuda](/docs/configurations/parameters/sales/offer-parameters)
 - > Tipovi projekata (sales job order)
 - > Tipovi intervencija
 - > Numeracija projekata
 - > Numeracija intervencija 
 - > Tipovi zahteva za intervenciju (i njihova numeracija)
 - > Tipovi planiranih intervencija (i numeracija)
 - > Tipovi povrata podizvođača (i numeracija)
 - > Tipovi narudžbina za podizvođače (i numeracija)
 - > Tipovi radnih naloga za proizvodnju (i numeracija)
 - > Tipovi planiranih narudžbina za nabavku (i numeracija)
 - > Tipovi planiranih narudžbina za proizvodnju (i numeracija)
 - > Tipovi planiranih narudžbina za podizvođače (i numeracija)
 - > Tipovi narudžbina za proizvodnju (i numeracija)
 - > Tipovi narudžbina za podizvođače (i numeracija)
 - > Tipovi zahteva za nabavku (i numeracija)
 - > (Tipovi) fakturisanja prodaje
 - > (Tipovi) fakturisanja nabavke
 - > Tipovi cenovnika
 - > Tipovi adresa
 - > Tipovi rabata
 - > Jezici
 - > Države
 - > Države Black list
 - > Valute
 - > Merne jedinice
 - > Paritet (Incoterms - uslovi isporuke)
 - > Pošiljke (tipovi)
 - > Modeli reklasifikacije (kontroling)
 - > Povezivanje modela reklasifikacije za CEE bilans sa detaljima kontnog plana 
 - > Radno vreme (upravljanje zaposlenima)
 - > Ozbiljnost (CRM *tiket*)
 - > SLA (CRM *tiket*)
 - > Tipovi CRM *tiketa* (i numeracija)
 - > Verzije osnovne liste
 - > Klase artikala
 - > Skladišta
 - > Predlošci za skladište
 - > Podrazumevani podaci za CRM (Tipovi kontakata, Izveštaj o posetama, Prilike, Kvalitet kontakta, Procenti uspeha itd.)



</details>

---

**CUSTOM OKRUŽENJE BEZ FAST STARTA**

U slučaju da se Fast Start ne pokrene, potrebno je ručno popuniti sledeće tabele.    

## OSNOVNE TABELE

<details>

  <summary>DRŽAVE Click to expand!</summary>
 
 ## Tabela potrebna za sve dokumente i unos šifarnika klijenata i dobavljača

  1. Popuniti kod (može biti i interni, ali se preporučuje međunarodni) i opis. 
  2. Posebno proveriti polje COD ISO EU, jer ako nedostaje, neće se sačuvati šifra poreskog broja. Obratiti pažnju na posebne slučajeve: 
     * Grčka GR -> ISO = 'EL'
     * Osim u posebnim slučajevima, može se izvršiti ažuriranje za popunjavanje ISO EU = COD ISO (stare baze podataka pre Fast Starta).

</details>

<details>

  <summary>VALUTE Click to expand!</summary>
 
 ## Tabela potrebna za upravljanje deviznim kursevima i računovodstvenim evidencijama

  1. Proveriti prisustvo barem glavnih valuta, posebno evra.
  2. Oznaka za *preuzimanje kursa* omogućava unos kursa za valutu.
  3. Ostala polja:
     * Decimale, preporučuje se podešavanje na 2 mesta
     * Evro - označiti samo za EUR

  4. Donja tabela je opciona, ali korisna za automatizaciju evidentiranja kursnih razlika postavljanjem odgovarajućih računovodstvenih konta. 


</details>

<details>

  <summary>KOMPANIJA Click to expand!</summary>
 
 ## Tabela potrebna za elektronsko fakturisanje i podatke o kompaniji u dokumentima i izveštajima

  1. Popunite sve poreske podatke.
  2. Podaci potrebni za elektronsko fakturisanje:
     * PDV broj i poreski broj
     * Telefon i faks nisu obavezni. Pazite da ne unosite / ili posebne znakove za razdvajanje prefiksa.
     * REA (dvoslovna oznaka provincije i broj)
     * Jednočlano / višečlano društvo
     * Likvidacija DA / NE
     * Upisani / uplaćeni kapital - PAŽNJA: nemojte koristiti tačku za hiljade i odvojite decimalna mesta tačkom, a NE zarezom
     * Pravna priroda
     * Poreski režim

</details>

<details>

  <summary>TIPOVI DOKUMENATA Click to expand!</summary>
 
 ## Tabela opšte grupe „Tipovi dokumenata“ koju ne treba mešati sa istoimenom tabelom iz administrativne grupe

  1. Proveriti minimalno potrebne tipove za Fast Start.
  2. **Za elektronsko fakturisanje unesite tip sa kodom i opisom FattPubb.**
   
</details>

<details>

  <summary>TIPOVI PLAĆANJA Click to expand!</summary>
 
 ## Potrebno za šifarnike i dokumente (dospeća), kao i za računovodstvene zapise

Proveriti prisustvo podataka u polju **Kod javne uprave** za izradu elektronskog računa.

Obratiti pažnju na povezivanje sa tipovima efekata (donja desna tabela), u suprotnom zapisi neće biti pronađeni prilikom izrade efekata.

</details>

<details>

  <summary>REŠENJA ZA PLAĆANJE Click to expand!</summary>
 
 ## Potrebno za dokumente (dospeća) i računovodstvo

</details>

## TABELE ADMINISTRACIJE

### Osnovna računovodstvena evidencija

<details>

  <summary>STOPE PDV-A Click to expand!</summary>
 
 ## Potrebno za računovodstvo, dokumente i elektronsko fakturisanje

  1. Obratiti pažnju na popunjavanje polja Kod javne uprave za oslobođenje / isključenje / neoporezivost kod elektronskih računa.
  2. Proveriti polje Uključeno u poresku prijavu, potrebno za tromesečno izveštavanje o obračunu PDV-a.
  3. Proveriti gde je potrebno polje PDV 0 u LG, koje omogućava stavke sa PDV-om nula.
  4. Proveriti gde je potrebno polje PDV za automatske obračune (slučajevi obrnute naplate bez odbitka pri nabavci).
  5. Proveriti polje Izuzmi iz automatskih obračuna (slučajevi mešovite obrnute naplate - deo nije u režimu obrnute naplate).
    

</details>

<details>

  <summary>REGISTRI PDV-A Click to expand!</summary>
 
 ## Potrebno za računovodstvo i obračun PDV-a

  1. Predvideti podelu između Italije, EU i van EU. Preporučuje se razlikovanje između dobara i usluga unutar EU u dokumentima kodova TD17 - TD18 za sopstvene fakture koje se šalju SDI-u (preporučuje se podela i za transakcije van EU).
  2. Za nabavku u režimu *reverse charge* (Hrvatska i EU) predvideti odgovarajuće registre na strani prodaje za prenos. Ne koristiti isti registar prenosa za prodaju unutar EU (na primer).
  3. Preporučljivo je predvideti poseban registar za obračun PDV-a (radi lakšeg konačnog štampanja i ponovnog štampanja u slučaju uklanjanja blokade samo ovog dela).
  4. Planirati (i zatim proveriti) ispravno povezivanje između vrste fakture, numeracije vrste fakture, predložaka knjiženja i PDV registra kako bi se izbeglo stvaranje praznina u protokolima ili sukoba. Predlošci knjiženja na strani prodaje obično imaju opciju nametanja protokola jednakog broju fakture.
  5. Proveriti da li je uneta tekuća godina i eventualne prethodne godine ako je potrebno. Nakon toga će se godina automatski kreirati pomoću alata za generisanje brojača za novu godinu.
    

</details>

<details>

  <summary>NUMERACIJA RAČUNOVODSTVENIH ZAPISA Click to expand!</summary>
 
 ## Potrebno za računovodstvo

  1. Predvideti barem jednu numeraciju za zapise (preporučuje se korišćenje koda 1, opis: *General ledger posting numeration*).
  2. Planirati i postaviti politiku numeratora (Dnevno ili Godišnje) i ostale parametre numeratora prema opštim uputstvima o numeratorima.
  3. Preporučuje se predvideti i numerator za privremene zapise (kod 2, opis: *General ledger posting provisory numeration*).
    

</details>

<details>

  <summary>TIPOVI KONTA Click to expand!</summary>
 
 ## Potrebno za kontni plan, računovodstvo i štampanje bilansa

  1. Predvideti barem 4 tipa: Aktivu, Pasivu, Troškove i Prihode za bilans i početni bilans.
  2. Planirati i postaviti tipove konta za Kupce i Dobavljače (preporučuje se podela na Hrvatsku, EU i van EU), vodeći računa da se označe i Aktiva/Pasiva i Kupac/Dobavljač.
  3. Preporučuje se predvideti i tip za Banke za korišćenje putem osnovnih podataka, u suprotnom nije moguće upravljati nekim funkcijama kao što je portfelj itd. Ne preporučuje se vršiti bankovna knjiženja sa kontom koji nije tip osnovnih podataka banke.
  4. Preporučuje se predvideti tip konta za troškove i prihode koji se ispravljaju odloženim prihodima i rashodima, kao i postaviti oznaku za uslugu uz trošak/prihod.
  5. Potrebno je kreirati tip za Agente ako se želi aktivirati upravljanje provizijama (oznaka na pasivi i Agent).
  6. Opciono je kreirati tip konta za vanbilansne stavke (sa oznakom za vanbilansne stavke) za upravljanje zapisima van bilansa.
    

</details>


<details>

  <summary>KONTNI PLAN Click to expand!</summary>
 
 ## Potrebno za računovodstvo i štampanje bilansa

  1. Obezbediti u tabeli grupa barem 4 vrste: Aktiva, Pasiva, Troškovi i Prihodi.
  2. Planirati podgrupe (broj podnivoa nije ograničen) i popuniti polje Priroda grupe.
  3. Definisati u donjoj tabeli, za svaku grupu poslednjeg nivoa detalja, konta/podkonta. PAŽNJA: Za svaku grupu mora postojati barem jedan konto u koji će se zatim unositi njena podkonta.
  4. NE unositi konta šifarnika (Kupci, Dobavljači, Agenti i BANKE) ovde, već samo putem KONTAKATA.
  5. Obezbediti sva potrebna konta (Bilans stanja na kraju i početku godine, Bilans uspeha na kraju godine, Dobitak i gubitak prethodne godine, Rokovi i akontacije - sa posebnim vrstama konta).
  6. Po želji, kreirati grupu konta za upravljanje vanbilansnim zapisima.
    

</details>

<details>

  <summary>PARAMETRI OPŠTEG RAČUNOVODSTVA Click to expand!</summary>
 
 ## Potrebno za računovodstvo

  1. Unesite tekuću godinu i, ako je potrebno, prethodne godine. Nakon toga, godina će automatski biti kreirana pomoću alata za generisanje brojača za novu godinu.
  2. Popunite tri raspona datuma za upravljanje poslovanjem.
  3. Popunite, ako su dostupni, i razloge za zatvaranje i otvaranje konta ili ih unesite kasnije.
  4. Popunite periodičnost PDV-a.
  5. Unesite vezu između konta glavne knjige povezanih sa klijentima i dobavljačima, bankama i agentima i njihovih odgovarajućih tipova konta.
  6. Definišite konta za automatske postupke na drugoj kartici.
 

</details>

<details>

  <summary>OPŠTI RAČUNOVODSTVENI PREDLOŠCI Click to expand!</summary>
 
 ## Potrebno za računovodstvo

  1. Predvideti predloške povezane sa glavnim tipovima konta i povezati ih sa odgovarajućim PDV evidencijama (potreban je predložak sa opštim kontima za kupca/dobavljača i troškove/prihode, kao i poseban konto za ulazni i izlazni PDV). Obavezno obratiti pažnju na tip iznosa u redovima.
  2. Predvideti i predloške prenosa za obrnuto terećenje i EU.
  3. Predvideti predloške za plaćanja i naplate sa zatvaranjem stavki (potrebno i za pojedinačne uplate itd.). Obratiti pažnju na predložak i tip poreza u redovima.
  4. Predvideti predloške za faze aktivnog portfelja (izdavanje efekata, prezentacija i akreditacija). Za prezentaciju i akreditaciju nije potreban predložak, dok je za izdavanje potreban predložak Efekti u portfelju kupca.
  5. Predvideti predloške za odobrenja sa obrnutim predznacima. Za obrnuto terećenje, obrnuti prvi predložak i podeliti prenos sa opcijom automatskog obrtanja predznaka.
  6. Predvideti predloške za primaoce (sa predloškom) i za plaćanje primalaca (bez predloška).
  7. Predvideti predloške za otvaranje i zatvaranje, rate i obračune, amortizacije (bez predloška).
  8. Preporučuje se predvideti dodatne predloške knjiženja i opšti predložak knjiženja bez predloška.
  9. Predvideti podešavanja za slanje automatskih računa SDI-u i predložak za nabavku usluga van EU bez PDV-a sa povezivanjem na automatski konto.
 
    
</details>

### Osnovna sredstva

<details>

  <summary>PARAMETRI OSNOVNIH SREDSTAVA Click to expand!</summary>
 
 ## Potrebno za osnovna sredstva  

  1. Planirati politiku upravljanja numeracijom, bilo jednostranom ili sa predznakom.
    
</details>

<details>

  <summary>Tabela OSNOVNA SREDSTVA Click to expand!</summary>
 
 ## Potrebno za računovodstvo i upravljanje osnovnim sredstvima

  1. Definisati kategorije i stopu amortizacije prema vrsti delatnosti koja se obavlja.
  2. U kategorije uneti godišnju granicu amortizacije (obično 516 evra).
  3. Postaviti oznaku Prva godina amortizacije za smanjenje stope u prvoj godini.
  4. Planirati politiku amortizacije inkrementalnih komponenti (preporučuje se izbegavanje promena tokom rada).
   
</details>

<details>

  <summary>Tabela ŠIFRE OSNOVNIH SREDSTAVA Click to expand!</summary>
 
 ## Opciono

  1. Planirati politiku upravljanja numeracijom, jednostavnu ili sa *predšifrom*.
 
    

</details>

### Upravljanje primaocima

<details>

  <summary>Tabela ŠIFRA POREZA Click to expand!</summary>
 
 ## Potrebno za upravljanje F24

  1. Proveriti postojanje podataka i po potrebi dodati kodove za PDV (6001, 6002.... 6099) i za zadržavanje (1040, 1038....).

   
</details>

<details>

  <summary>Tabela VRSTE ZADRŽAVANJA Click to expand!</summary>
 
 ## Potrebno za upravljanje primaocima

  1. Definisati potrebne vrste za primaoce (1040) sa 20% zadržavanja, za agente i za paušalne obveznike (0% na 100%).
  2. Povezati predloške za knjiženje naknade.
  3. Povezati kategoriju agenta sa vrstom rezervisanom za agente.
   
</details>

---

## TABELE RIZNICE

### Aktivni portfelj

<details>

  <summary>Tabela STATUSI EFEKATA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem

  1. Potrebno je definisati barem osnovne vrste: Izdato, Prezentovano SBF, Rit. Accr (Akreditovano) i Rit. Ins (neizmireno), povezane sa odgovarajućom oznakom.
   
</details>

<details>

  <summary>Tabela STATUSI NEPLAĆENIH Click to expand!</summary>
 
 ## Potrebno za upravljanje neplaćenim stavkama povezanim sa portfeljem

  1. Potrebno je definisati barem vrstu „Neizmireno“ povezanu sa odgovarajućom oznakom.
  2. Preporučuje se kodiranje svih vrsta simetrično sa postojećim oznakama.
  
   
</details>

<details>

  <summary>Tabela TIPOVI EFEKATA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem

  1. Definisati barem vrstu „Bankovna uplata“.
  2. Povezati numeraciju kao u sledećoj tački.
  3. Povezati sa kontnim planom (npr. Aktivni portfelj efekata) za knjiženje izdavanja.

   
</details>

<details>

  <summary>NUMERACIJA EFEKATA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem

  1. Konfigurisati „Numeraciju računa“.
  2. Konfigurisati detalje kao kod drugih standardnih numeracija.
  3. Preporučuje se godišnja učestalost.

   
</details>

<details>

  <summary>NUMERACIJA RAZLIČITIH PREZENTACIJA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem

  1. Konfigurisati „Numeraciju računa“.
  2. Konfigurisati detalje kao kod ostalih standardnih numeracija.
  3. Preporučuje se godišnja učestalost.

   
</details>

<details>

  <summary>Tabela TIPOVI PREZENTACIJE POPISA EFEKATA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem

  1. Definisati barem jednu vrstu podrazumevane numeracije.
  2. Preporučuje se predvideti različite vrste u zavisnosti od banke prezentacije, povezivanjem odgovarajućih konta za prezentaciju i posebnih tekućih računa za određene uplate.

   
</details>

### Upravljanje doznakama dobavljačima

<details>

  <summary>NUMERACIJA PLAĆANJA DOBAVLJAČIMA Click to expand!</summary>
 
 ## Potrebno za upravljanje odvojenim uplatama

  1. Konfigurisati „Numeraciju računa za plaćanje“.
  2. Konfigurisati detalje kao kod ostalih standardnih numeracija.
  3. Preporučuje se godišnja učestalost.

   
</details>

<details>

  <summary>Tabela TIPOVI PLAĆANJA Click to expand!</summary>
 
 ## Provera: već se upravlja u opštim tabelama

  1. Proveriti da li postoji odgovarajući tip (npr. „Uplata“) koji će se koristiti.

   
</details>

### Avans za fakture

<details>

  <summary>Tabela TIPOVI AVANSA Click to expand!</summary>
 
 ## Potrebno za upravljanje avansima

  1. Konfigurisati za svaku povezanu banku.
  2. Povezati numeraciju iz sledeće tačke.
  
  
</details>

<details>

  <summary>NUMERACIJA ODVOJENIH AVANSA ZA FAKTURE Click to expand!</summary>
 
 ## Potrebno za upravljanje odvojenim avansima

  1. Konfigurisati „Podrazumevano“.
  2. Konfigurisati detalje kao kod ostalih standardnih numeracija.
  3. Preporučuje se godišnja učestalost.

   
</details>

### Novčani tok

<details>

  <summary>Tabela TIPOVI NOVČANOG TOKA Click to expand!</summary>
 
 ## Potrebno za upravljanje novčanim tokom

  1. Konfigurisati svaki tip novčanog toka sa odgovarajućom oznakom.
  2. Preporučuje se omogućiti sve, jer se prilikom pokretanja obračuna biraju samo oni koji su od interesa, a izbor se pamti.
  
  
</details>

<details>

  <summary>Tabela TIPOVI FINANSIJSKIH RAČUNA Click to expand!</summary>
 
 ## Potrebno za upravljanje novčanim tokom

  1. Uneti redovne tekuće račune.
  2. Nije potrebno unositi dodatne račune za SBF ako se omogući parametar čitanja prilikom pokretanja obračuna.
  
  
</details>

<details>

  <summary> Tabela VRSTE DOSPEĆA Click to expand!</summary>
 
 ## Opcije za upravljanje vanbilansnim dospećima u novčanom toku

  1. Unesite željene vrste (npr. Plate).
  
  
</details>

Proverite u različitim tabelama dokumenata (Narudžbenice, otpremnice itd.) koje vrste želite uključiti u obračun novčanog toka.

## TABELE PRODAJE

### Ponude

<details>

  <summary> PARAMETRI Click to expand!</summary>

  Definisati opšte [parametre](/docs/configurations/parameters/sales/offer-parameters) koji će se koristiti u ponudama.

</details>

### Narudžbine

<details>

  <summary> Tabela VRSTE NARUDŽBINA Click to expand!</summary>

  Unesite [vrste narudžbina](/docs/configurations/tables/sales/sales-order-types) koje se koriste; obavezni podaci su: *Vrsta*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriterijumi za kreiranje različitih vrsta mogu biti različiti, na primer:        
  - kreiranje vrste NARUDŽBINA KUPCA SRBIJA, NARUDŽBINA KUPCA EU, NARUDŽBINA KUPCA VAN EU.       
  - kreiranje vrste prema [Vrsti otpremnice](/docs/configurations/tables/sales/delivery-notes-type) ili [Vrsti fakture](/docs/configurations/tables/sales/invoices-type) koja se kreira.     
  - kreiranje vrste prema skladištu koje se premešta.

</details>

<details>

  <summary> PARAMETRI Click to expand!</summary>

  Definisati opšte [parametre](/docs/configurations/parameters/sales/sales-orders-parameters) koji će se koristiti u narudžbinama kupca. 

</details>

### Prodajne otpremnice

<details>

  <summary> Tabela VRSTE OTPREMNICA Click to expand!</summary>

  Unesite [vrste otpremnica](/docs/configurations/tables/sales/delivery-notes-type) koje se koriste; obavezni podaci su: *Vrsta*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriterijumi za kreiranje različitih vrsta mogu biti različiti, na primer:      
  - kreiranje vrste otpremnice KUPCI SRBIJA, KUPCI EU, KUPCI VAN EU.       
  - kreiranje vrste na osnovu [Vrste fakture](/docs/configurations/tables/sales/invoices-type) koju treba kreirati.    
  - kreiranje vrste na osnovu skladišta kojim treba upravljati.
  
</details>

<details>

  <summary> PARAMETRI Click to expand!</summary>

  Definisati opšte [parametre](/docs/configurations/parameters/sales/dn-parameters) za korišćenje u otpremnicama.
  
</details>

### IZLAZNE FAKTURE

<details>

  <summary> Tabela VRSTE IZLAZNIH FAKTURA Click to expand!</summary>

  Uneti [vrste faktura](/docs/configurations/tables/sales/invoices-type) koje se koriste; obavezni podaci su: *Vrsta*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriterijumi za kreiranje različitih vrsta mogu biti različiti, na primer:      
  - kreiranje vrste FAKTURA KUPCI SRBIJA, FAKTURA KUPCI EU, FAKTURA KUPCI VAN EU.     
  - kreiranje vrste na osnovu prirode fakture (faktura, kreditna nota itd.).  
  - kreiranje vrste na osnovu skladišta kojim treba upravljati.  
  
</details>

<details>

  <summary> PARAMETRI Click to expand!</summary>

  Definisati opšte [parametre](/docs/configurations/parameters/sales/sales-invoices-parameters) za korišćenje u izlaznim fakturama.

</details>

## TABELE NABAVKE

### Narudžbine

<details>

  <summary> Tabela TIPOVI NARUDŽBINE Click to expand!</summary>

  Unesite [vrste narudžbina](/docs/configurations/tables/purchase/purchase-orders-type) koje se koriste; obavezni podaci su: *Tip*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriterijumi za kreiranje različitih vrsta mogu biti različiti, na primer:      
  - kreiranje tipologije NARUDŽBINA DOBAVLJAČA SRBIJA, NARUDŽBINA DOBAVLJAČA EU, NARUDŽBINA DOBAVLJAČA VAN EU.       
  - kreiranje tipologije na osnovu [Tipa prijemnice](/docs/configurations/tables/purchase/purchase-delivery-notes-type) ili [Tipa fakture](/docs/configurations/tables/purchase/purchase-invoices-type) koja treba da se kreira.    
  - kreiranje tipologije na osnovu skladišta koje treba da se premesti.

</details>

<details>

  <summary> PARAMETRI Click to expand!</summary>

  Definisati opšte [parametre](/docs/configurations/parameters/purchase/purchase-orders-parameters) koji će se koristiti u narudžbinama dobavljača.  

</details>

### Prijemnica

<details>

  <summary> Tabela TIPOVI PRIJEMNICA Click to expand!</summary>

  Unesite [vrste prijemnica](/docs/configurations/tables/purchase/purchase-delivery-notes-type) koje se koriste; obavezni podaci su: *Tip*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriterijumi za kreiranje različitih vrsta mogu biti različiti, na primer:      
  - kreiranje tipologije OTPREMNICA DOBAVLJAČA SRBIJA, OTPREMNICA DOBAVLJAČA EU, OTPREMNICA DOBAVLJAČA VAN EU.       
  - kreiranje tipologije na osnovu [Tipa fakture](/docs/configurations/tables/purchase/purchase-invoices-type) koja treba da se kreira.      
  - kreiranje tipologije na osnovu skladišta koje treba da se premesti.
  
</details>

<details>

  <summary> PARAMETRI Click to expand!</summary>

  Definisati opšte [parametre](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) koji će se koristiti u prijemnicama.  
  
</details>

### Ulazne fakture

<details>

  <summary> Tabela TIPOVI ULAZNIH FAKTURA Click to expand!</summary>

  Unesite [vrste faktura](/docs/configurations/tables/purchase/purchase-invoices-type) koje se koriste; obavezni podaci su: *Tip*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriterijumi za kreiranje različitih vrsta mogu biti različiti, na primer:      
  - kreiranje tipologije FAKTURA DOBAVLJAČA SRBIJA, FAKTURA DOBAVLJAČA EU, FAKTURA DOBAVLJAČA VAN EU.     
  - kreiranje tipologije na osnovu prirode fakture (faktura, nota zaduženja itd.). 
  - kreiranje tipologije na osnovu skladišta koje treba da se premesti.
  
</details>

<details>

  <summary> PARAMETRI Click to expand!</summary>

  Definisati opšte [parametre](/docs/configurations/parameters/purchase/purchase-invoices-parameters) koji će se koristiti u ulaznim fakturama. 

</details>