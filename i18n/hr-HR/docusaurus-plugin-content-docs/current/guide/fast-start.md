---
title: Fluentis Fast Start - roadmap startup novo operativno okruženje
sidebar_position: 2
---

**Fast Start** je postupak osmišljen za pojednostavljenje i ubrzanje inicijalizacije poslovnog softvera, omogućujući automatsko popunjavanje sustava s osnovnim parametrima i tablicama. Ova funkcionalnost značajno smanjuje vrijeme i trud potreban za početnu konfiguraciju, izbjegavajući ručni unos svake pojedinačne postavke.

---
<details>

  <summary>Fast Start (Click to expand)</summary>
  
  Za pokretanje postupka, pristupite tablici Društva i pritisnite gumb *Opće postavke*.

  PAŽNJA: plan konta ne smije biti unaprijed popunjen (ni u jednom dijelu), kao ni druge tablice koje su uključene u postupak. Preporučuje se da odmah donesete odluku i provedete ovaj postupak kao prvu radnju nakon instalacije.  

Tablice uključene u postupak (Stored Procedure Fluentis.SH_CreateNewYear_IT):
    
 - > Tipovi konta
 - > Kontni plan
 - > Parametri glavne knjige
 - > Parametri osnovnih sredstava
 - > Parametri portfelja (aktivno - mjenice)
 - > Parametri neplaćeno
 - > Parametri MPS
 - > Predlošci konta
 - > Šifre PDV-a                   
 - > Knjige PDV-a
 - > Tipovi dokumenta
 - > Načini placanja
 - > Rješenja plaćanja
 - > Kategorije trgovačkih predstavnika
 - > Tipovi zadržavanja (predujma)
 - > Kategorija osnovnih sredstava 
 - > Tipovi novčanog toka
 - > Tipovi avansa
 - > Stanja nepodmirenja
 - > Statusi vrijednosnih papira
 - > Tipovi odvojenog prikaza (efekti)
 - > Tipovi vrijednosnih papira
 - > Poveznica između tablice Tipovi plaćanja i tipova efekata
 - > Brojčane oznake računovodstvenih evidencija (konačne i privremene)
 - > Numeracija dospijeća plaćanja
 - > Brojčana oznaka kompenzacija (stanja)
 - > Numeracija plaćanja dobavljačima
 - > Numeriranje Intrastat
 - > Numeracija likvidacije agenata
 - > Brojčana oznaka odvojenog prikaza efekata
 - > Numeriranje vrijednosnih papira
 - > [Brojčana oznaka prodajnih dokumenata](/docs/configurations/tables/fluentis-numerations)
 - > [Brojčana oznaka dokumenata o nabavi](/docs/configurations/tables/fluentis-numerations)
 - > Tipovi faktura ([nabava](/docs/configurations/tables/purchase/purchase-invoices-type) i [prodaja](/docs/configurations/tables/sales/invoices-type)) s povezivanjem na računovodstvene predloške
 - > Tipovi otpremnica ([nabava](/docs/configurations/tables/purchase/purchase-delivery-notes-type) i [prodaja](/docs/configurations/tables/sales/delivery-notes-type)) s povezivanjem na tipove faktura
 - > Tipovi narudžbi ([nabava](/docs/configurations/tables/purchase/purchase-orders-type) i [prodaja](/docs/configurations/tables/sales/sales-order-types)) s povezivanjem na tipove otpremnica  
 - > [Tipovi ponuda](/docs/configurations/tables/sales/sales-offer-type)
 - > [Parametri fakture](/docs/configurations/parameters/sales/sales-invoices-parameters) i pripadajuće [grupacije](/docs/configurations/parameters/sales/invoice-grouping) 
 - > [Parametri otpremnica](/docs/configurations/parameters/sales/dn-parameters) i pripadajuće [grupacije](/docs/configurations/parameters/sales/dn-grouping) 
 - > [Parametri narudžbi](/docs/configurations/parameters/sales/sales-orders-parameters) i pripadajuće [grupacije](/docs/configurations/parameters/sales/orders-grouping)
 - > [Parametri ponuda](/docs/configurations/parameters/sales/offer-parameters)
 - > Tipovi projekata (sales job order)
 - > Tipovi intervencija
 - > Numeracija projekata
 - > Numeracija intervencija 
 - > Tipovi zahtjeva za intervenciju (i njihova numeracija)
 - > Tipovi planiranih intervencija (i numeracija)
 - > Tipovi povrata podizvođača (i numeracija)
 - > Tipovi narudžbi za podizvođače (i numeracija)
 - > Tipovi radnih naloga za proizvodnju (i numeracija)
 - > Tipovi planiranih narudžbi za nabavu (i numeracija)
 - > Tipovi planiranih narudžbi za proizvodnju (i numeracija)
 - > Tipovi planiranih narudžbi za podizvođače (i numeracija)
 - > Tipovi narudžbi za proizvodnju (i numeracija)
 - > Tipovi narudžbi za podizvođače (i numeracija)
 - > Tipovi RDA (i numeracija)
 - > (Tipovi) fakturiranja prodaje
 - > (Tipovi) fakturiranja nabave
 - > Tipovi cjenika
 - > Tipovi adresa
 - > Tipovi rabata
 - > Jezici
 - > Države
 - > Države Black list
 - > Valute
 - > Mjerne jedinice
 - > Luka (Incoterms - uvjeti isporuke)
 - > Pošiljke (tipovi)
 - > Modeli reklasifikacije (kontroling)
 - > Povezivanje modela reklasifikacije za CEE bilancu s detaljima plana računa  
 - > Radno vrijeme (upravljanje zaposlenicima)
 - > Ozbiljnost (CRM tiket)
 - > SLA (CRM tiket)
 - > Tipovi CRM tiketa (i numeracija)
 - > Verzije osnovne liste
 - > Klase artikala
 - > Skladišta
 - > Predlošci za skladište
 - >  Zadani podaci za CRM (Tipovi kontakata, Izvještaj o posjetima, Prilike, Kvaliteta kontakta, Postotci uspjeha itd.)



</details>

---

**CUSTOM OKRUŽENJE BEZ FAST STARTA**

U slučaju da se Fast Start ne pokrene, potrebno je ručno popuniti sljedeće tablice.    

## OSNOVNE TABLICE

<details>

  <summary>NACIJE Click to expand!</summary>
 
 ## Tablica potrebna za sve dokumente i unos šifarnika o klijentima i dobavljačima

  1. Ispuniti kod (može biti i interni, ali se preporučuje međunarodni) i opis. 
  2. Posebno provjeriti polje COD ISO EU, jer ako nedostaje, neće se spremiti predkod porezne brojke, paziti na posebne slučajeve: 
     * Grčka GR -> ISO = 'EL'
     * Osim u posebnim slučajevima, može se izvršiti ažuriranje za popunjavanje ISO EU = COD ISO (stari bazu podataka prije brzog početka).

</details>

<details>

  <summary>VALUTE Click to expand!</summary>
 
 ## Tablica potrebna za upravljanje tečajevima valuta i knjigovodstvenim evidencijama

  1. Provjeriti prisutnost barem glavnih valuta, osobito eura.
  2. Zastava za *preuzimanje promjene* za omogućavanje unosa stope za valutu.
  3. Ostala polja
     * Decimali, si consiglia di mpistare a 2
     * Euro - označiti samo za EUR

    4. Opcionalna donja mreža, ali korisna za automatizaciju evidentiranja razlika u tečaju postavljanjem odgovarajućih knjigovodstvenih računa. 


</details>

<details>

  <summary>TVRTKA Click to expand!</summary>
 
 ## Tablica potrebna za elektroničko fakturiranje i podatke o tvrtki u dokumentima i ispisima

  1. Popunite sve porezne podatke
  2. Podaci potrebni za elektroničko fakturiranje:
         * PDV broj i porezni broj
         * Telefon i fax nisu obavezni, pazite da ne unosite / ili posebne znakove za razdvajanje prefiksa
        * REA (dvoslovna oznaka provincije i broj)
        * Jedinični / višestruki partneri
        * Likvidacija DA / NE
        * Upisan / uplaćen kapital - PAŽNJA: nemojte koristiti točku za tisuću i razdvojiti decimalne znamenke točkom, a NE zarezom
        * Pravna priroda
        * Porezni režim

</details>

<details>

  <summary>TIPOVI DOKUMENATA Click to expand!</summary>
 
 ## Tablica općeg grupe 'Tipovi dokumenata' koju ne treba zamijeniti s istoimenom tablicom iz administrativne grupe

  1. Provjeriti minimalno potrebne tipove s brzim početkom.
  2. **Za elektroničko fakturiranje unesite tipologiju s kodom i opisom FattPubb**
   
</details>

<details>

  <summary>TIPOVI PLAĆANJA Click to expand!</summary>
 
 ## Potrebno za šifarnike i dokumenata (dospijeća) te knjigovodstvenih zapisa


Provjeriti prisutnost podataka u polju **Kod Javna uprave** za izradu elektroničkog računa.

Paziti na povezivanje s tipovima efekata (donja desna mreža), inače neće pronaći zapise prilikom izrade efekata.

</details>

<details>

  <summary>RJEŠENJA ZA PLAĆANJE Click to expand!</summary>
 
 ## Potrebno za dokumente (dospijeća) i knjigovodstvo 

</details>

## TABLICE ADMINISTRACIJE 

### Osnovna knjigovodstvena evidencija

<details>

  <summary>STOPE PDV-A Click to expand!</summary>
 
 ## Potrebno za knjigovodstvo, dokumente, elektroničko fakturiranje

  1. Paziti na popunjavanje polja Kod Javne uprave za izuzeće / isključenje / neoporezivost kod elektroničkih računa.
  2. Provjeriti polje Uključeno u Poreznu prijavu potrebno za tromjesečno izvješćivanje o obračunu PDV-a.
  3. Provjeriti gdje je potrebno polje PDV 0 u LG koje omogućava stavke s PDV-om nula.
  4. Provjeriti gdje je potrebno polje PDV za automatske kalkulacije (slučajevi obrnute naplate s neodbitnošću na kupnju).
  5. Provjeriti polje Izuzmi iz automatskih kalkulacija (slučajevi miješane obrnute naplate - dio nije u obrnutom).
    

</details>

<details>

  <summary>Registri PDV-a Click to expand!</summary>
 
 ## Potrebno za računovodstvo i obračun PDV-a

  1. Predvidjeti raspodjelu između Italije, EU i izvan EU, preporučuje se razlikovanje između dobara i usluga unutar EU u dokumentima kodova TD17 - TD18 za vlastite fakture koje se šalju SDI-u (preporučuje se raspodjela i za izvan EU).
  2. Za registre kupovine u reverse charge (Italija i EU) predvidjeti odgovarajuće registre na strani prodaje za prijenos, ne dijeliti registar prijenosa s prodajom unutar EU (na primjer).
  3. Preporučljivo je predvidjeti poseban registar za obračun PDV-a (radi lakšeg konačnog ispisa i ponovnog ispisa u slučaju odblokiranja samo ovog dijela).
  4. Planirati (i potom provjeriti) ispravnu povezanost između vrste fakture, numeracije vrste fakture, računovodstvene uzročnosti i PDV registra kako bi se izbjeglo stvaranje rupa u protokolima ili sukoba. Uzročnosti na strani prodaje obično imaju opciju nametanja protokola jednakog broju fakture.
  5. Provjeriti je li unesena tekuća godina i eventualne prethodne godine ako je potrebno, potom će se godina automatski kreirati pomoću alata za generiranje brojača za novu godinu.
    

</details>


<details>

  <summary>NUMERACIJA RAČUNOVODSTVENIH ZAPISA Click to expand!</summary>
 
 ## Potrebno za računovodstvo

  1. Predvidjeti barem jednu numeraciju za konačne zapise (preporuča se korištenje koda 1, opis: General ledger posting numeration).
  2. Planirati i postaviti politiku numeratora (Dnevno ili Godišnje) i ostale parametre numeratora prema općim uputama o numeratorima.
  3. Preporučuje se predvidjeti i numerator za privremene zapise (kod 2, opis: General ledger posting provisory numeration).
    

</details>

<details>

  <summary>TIPOVI KONTA Click to expand!</summary>
 
 ## Potrebno za kontni plan, računovodstvo i ispis bilance

  1. Predvidjeti barem 4 tipologije: Aktivu, Pasivu, Troškove i Prihode za bilancu i početnu bilancu.
  2. Planirati i postaviti tipove računa za Kupce i Dobavljače (preporuča se podjela na Italija, EU i izvan EU), paziti da se označi i Aktiva/Pasiva, i Kupac/Dobavljač.
  3. Preporučuje se predvidjeti i tip za Banke za korištenje putem osnovnih podataka, inače nije moguće upravljati nekim funkcijama kao što je portfelj itd. Ne preporučuje se vršiti bankovne zapise s računom koji nije tip osnovnih podataka banke.
  4. Preporučuje se predvidjeti tip računa za troškove i prihode koji se ispravljaju s odgođenim prihodima i rashodima, te postaviti zastavicu za uslugu uz trošak/prihod.
  5. Potrebno je stvoriti tip za Agente ako se želi aktivirati upravljanje provizijama (zastavica na pasivi i Agent).
  6. Neobavezno je stvoriti tip Konti izvanbilančnih stavki (s zastavicom za izvanbilančne stavke) za upravljanje zapisima izvan bilance.
    

</details>


<details>

  <summary>KONTNI PLAN Click to expand!</summary>
 
 ## Potrebno za računovodstvo i ispis bilance

  1. Osigurati u mreži grupa barem 4 vrste Aktiva, Pasiva, Troškova i Prihoda.
  2. Planirati podgrupe (broj podrazina nije ograničen) i ispuniti polje Priroda grupe.
  3. Definirati u donjoj mreži, za svaku grupu posljednje razine detalja, račune / podračune detalja. PAŽNJA: Za svaku grupu mora postojati barem jedan račun gdje će se zatim unijeti njezini podračuni.
  4. NE unosi račune šifarnika (Kupci, Dobavljači, Agenti i BANKE) ovdje, već samo putem KONTAKATA.
  5. Osigurati sve potrebne račune (Bilanca stanja na kraju i početku godine, Račun dobiti i gubitka na kraju godine, Dobitak i gubitak prethodne godine, Rokovi i akontacije - s posebnim vrstama računa).
  6. Po želji, stvoriti grupu Konti d'ordine za upravljanje izvanbilančnim zapisa
    

</details>


<details>

  <summary>PARAMETRI OPĆEG RAČUNOVODSTVA Click to expand!</summary>
 
 ## Potrebno za računovodstvo

  1. Unesite trenutnu godinu i, ako je potrebno, prethodne godine. Nakon toga, godina će automatski biti stvorena od strane alata za generiranje brojača za novu godinu.
  2. Popunite tri raspona datuma za upravljanje poslovanjem.
  3. Popunite, ako su dostupni, i razloge za zatvaranje i otvaranje računa, ili ih unesite kasnije.
  4. Popunite periodičnost PDV-a.
  5. Unesite povezanost između glava knjige vezane uz klijente i dobavljače, banke i agente te njihove odgovarajuće vrste računa.
  6. Definirajte račune za automatske postupke u drugoj kartici.
 

</details>

<details>

  <summary>GENERALNI RAČUNOVODSTVENI UZROCI Click to expand!</summary>
 
 ## Potrebno za računovodstvo

  1. Predvidjeti uzroke povezane s glavnim vrstama kupoprodajnih računa i povezati ih s odgovarajućim PDV evidencijama (potreban je predložak s općim računima za kupca/dobavljača i troškove/prihode, posebni podračun za PDV na dug i potraživanje). Obavezno obratiti pažnju na vrstu iznosa u redovima.
  2. Predvidjeti i uzroke prijenosa za obrnuti teret i EU.
  3. Predvidjeti uzroke za plaćanja i uplate s zatvaranjem stavki (potrebno i za pojedinačne uplate itd.). Obratiti pažnju na predložak i vrstu poreza u redovima.
  4. Predvidjeti uzroke za faze aktivnog portfelja (izdavanje efekata, prezentacija i akreditacija). Za prezentaciju i akreditaciju nije potreban predložak, dok je za izdavanje potreban predložak Efekti u portfelju kupca.
  5. Predvidjeti uzroke za dobropise s invertiranim predloškom znakova. Za obrnuti teret, invertirati prvu i podijeliti prijenos s opcijom automatskog obrta znakova.
  6. Predvidjeti uzroke za primatelje (s predloškom) i za plaćanje primatelja (bez predloška).
  7. Predvidjeti uzroke za otvaranje i zatvaranje, rate i raspite, amortizacije (bez predloška).
  8. Preporučuje se predvidjeti dodatne uzroke knjiženja i opću uzrok knjiženja bez predloška.
  9. Predvidjeti postavke za slanje automatskih računa SDI i uzrok za kupnju usluga izvan EU bez PDV-a s povezivanjem na automatski račun.
 
    
</details>

### Osnovna sredstva

<details>

  <summary>PARAMETRI DUGOTRAJNE IMOVINE Click to expand!</summary>
 
 ## Potrebno za osnovna sredstva  

  1. Planiranje politike upravljanja numeracijom, bilo jednostranom ili s predznakom  
    
</details>

<details>

  <summary>Tablica OSNOVNA SREDSTVA Click to expand!</summary>
 
 ## Potrebno za računovodstvo i upravljanje osnovnih sredstava

  1. Definirati kategorije i ministarsku stopu amortizacije prema vrsti obavljene aktivnosti.
  2. U kategorije unijeti godišnju granicu amortizacije (obično 516 eura).
  3. Uvesti oznaku Prva godina amortizacije za smanjenje stope u prvoj godini.
  4. Planirati politiku amortizacije inkrementalnih komponenti (preporučuje se izbjegavati promjene tijekom rada).
   
</details>

<details>

  <summary>Tablica PREDKOD OSNOVNIH SREDSTAVA Click to expand!</summary>
 
 ## Opcionalno

  1. Planirati politiku upravljanja numeracijom, jednostavnu ili s predkodom.
 
    

</details>

### Upravljanje primateljima 

<details>

  <summary>Tablica ŠIFRA POREZA Click to expand!</summary>
 
 ## Potrebno za upravljanje F24

  1. Provjeriti postojanje podataka i dodati po potrebi kodove za PDV (6001, 6002.... 6099) i za zadržavanje (1040, 1038....)

   
</details>

<details>

  <summary>Tablica VRSTE ZADRŽAVANJA  Click to expand!</summary>
 
 ## Potrebno za upravljanje primateljima  

  1. Definirati potrebne vrste za primatelje (1040) s 20% zadržavanja, za agente i za paušalne obveznike (0% na 100%).
  2. Povezati uzroke za knjiženje naknade.
  3. Povezati kategoriju agenta u vrstu rezerviranu za agente.
   
</details>

---

## TABLICE RIZNICA 

### Aktivni portfelj   

<details>

  <summary>Tablica STANJA EFEKATA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem  

  1. Potrebno je barem definirati osnovne vrste: Izdano, Predstavljeno SBF, Rit. Accr (Akreditirano) i Rit. Ins (nepodmireno), povezane s odgovarajućom oznakom. 
   
</details>

<details>

  <summary>Tablica NEPLAĆENI STATUSI Click to expand!</summary>
 
 ## Potrebno za upravljanje neplaćenim vezano uz portfelj  

  1. Potrebno je barem definirati vrstu "Nepodmireno" povezanu s odgovarajućom oznakom.
  2. Preporučuje se kodiranje svih vrsta simetrično s prisutnim oznakama. 
  
   
</details>

<details>

  <summary>Tablica TIPOVI EFEKATA Click to expand!</summary>
 
 ##  Potrebno za upravljanje portfeljem  

  1. Definirati barem vrstu "Bankovna uplata"
  2. Povezati numeriranje kao u sljedećoj točki
  3. Povezati račun s plana računa (npr. Aktivni portfelj efekekata) za knjiženje izdavanja.

   
</details>

<details>

  <summary> NUMERACIJA EFEKATA  Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem  

  1. Prevedere la tipologia "Bills numeration"
  2. Konfigurirati detalje kao kod drugih standardnih numeracija.
  3. Preporučuje se godišnja učestalost.

   
</details>

<details>

  <summary> NUMERIRANJE RAZLIČITIH PREZENTACIJA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem

  1. Navedite tipologiju "Bills list numeration"
  2. Konfigurirajte detalj kao i ostale standardne numeratore 
  3. Preporučeno godišnje 

   
</details>

<details>

  <summary> Tablica VRSTE PREZENTACIJE POPIS EFEKATA Click to expand!</summary>
 
 ## Potrebno za upravljanje portfeljem

  1. Definirati barem jednu tipologiju zadane numeracije.
  2. Preporučuje se predvidjeti različite vrste ovisno o banci prezentacije povezivanjem podržanih računa za prezentaciju i posebnih tekućih računa za specifične uplate.
  

   
</details>

### Upravljanje dobavljačkim doznakama

<details>

  <summary> NUMERIRANJE PLAĆANJA DOBAVLJAČIMA Click to expand!</summary>
 
 ## Potrebno za upravljanje odvojenim uplatama

  1. Predvidjeti tipologiju "Bills list numeration"
  2. Konfigurirati detalje kao i ostale standardne numeratore
  3. Preporučuje se godišnja frekvencija

   
</details>

<details>

  <summary> Tablica TIPOVI PLAĆANJA  Click to expand!</summary>
 
 ## Provjera: već upravljano u općim tablicama

  1. Provjeriti postoji li odgovarajući tip (npr. "Uplata") koji će se pozvati

   
</details>

### Avans za fakture

<details>

  <summary> Tablica TIPOVI AVANSA  Click to expand!</summary>
 
 ## Potrebno za upravljanje avansima

  1. Predvidjeti tipologiju za svaku povezanu banku
  2. Povezati numeraciju iz sljedeće točke
  
  
</details>

<details>

  <summary> NUMERACIJA ODVOJENIH AVANSA ZA FAKTURE Click to expand!</summary>
 
 ## Potrebno za upravljanje odvojenim avansima

  1. Predvidjeti tipologiju "Zadano"
  2. Konfigurirati detalje kao i ostale standardne numeratore
  3. Preporučuje se godišnja frekvencija

   
</details>

### Novčani tok

<details>

  <summary> Tablica TIPOVI NOVČANOG TOKA  Click to expand!</summary>
 
 ## Potrebno za upravljanje novčanim tokom

  1. Predvidjeti tipologiju za svaki tip novčanog toka s odgovarajućom oznakom
  2. Preporučuje se omogućiti sve, jer se prilikom pokretanja izračuna odabiru samo oni od interesa, a izbor se pamti.
  
  
</details>

<details>

  <summary> Tablica TIPOVI FINANCIJSKIH RAČUNA Click to expand!</summary>
 
 ## Potrebno za upravljanje novčanim tokom

  1. Unesite redovite tekuće račune.
  2. Nije potrebno unijeti potporne račune za SBF ako se omogući parametar čitanja prilikom pokretanja izračuna.
  
  
</details>

<details>

  <summary> Tablica VRSTE DOSPIJEĆA  Click to expand!</summary>
 
 ## Opcionala za upravljanje izvanbilančnih dospijeća u novčanom toku

  1. Unesite željene vrste (npr. Plaće).
  
  
</details>

Provjerite u različitim tablicama dokumenata (Narudžbenice, otpremnice, RDA itd.) koje vrste želite uključiti u izračun novčanog toka.

## TABLICE PRODAJE

### Ponude

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definirati opće [parametre](/docs/configurations/parameters/sales/offer-parameters) koje ćeš koristiti u ponudama.

</details>

### Narudžbe

<details>

  <summary> Tablica VRSTE NARUDŽBI  Click to expand!</summary>

  Unesite [vrste narudžbi](/docs/configurations/tables/sales/sales-order-types) koje se koriste; obvezni podaci su: *Vrsta*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriteriji za kreiranje različitih vrsta mogu biti različiti, na primjer:        
  - kreiranje vrste NARUDŽBA KUPCA ITALIJA, NARUDŽBA KUPCA EU, NARUDŽBA KUPCA IZVAN EU.       
  - kreiranje vrste prema [Vrsti otpremnice](/docs/configurations/tables/sales/delivery-notes-type) ili [Vrsti fakture](/docs/configurations/tables/sales/invoices-type) koja se kreira.     
  - kreiranje vrste prema skladištu koje se premješta.

</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definirati opće [parametre](/docs/configurations/parameters/sales/sales-orders-parameters) koje ćeš koristiti u narudžbama kupca. 

</details>

### Prodajne otpremnice

<details>

  <summary> Tablica VRSTE OTPREMNICA Click to expand!</summary>

  Unesite [vrste otpremnica](/docs/configurations/tables/sales/delivery-notes-type) koje se koriste; obvezni podaci su: *Vrsta*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriteriji za kreiranje različitih vrsta mogu biti različiti, na primjer:      
  - kreiranje vrste otpremnice KUPCI ITALIJA, KUPCI EU, KUPCI IZVAN EU.       
  - kreiranje vrste na temelju [Vrste fakture](/docs/configurations/tables/sales/invoices-type) koju treba kreirati.    
  - kreiranje vrste na temelju skladišta kojim treba upravljati.
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definirati opće [parametri](/docs/configurations/parameters/sales/dn-parameters) generali da utilizzare nei DDT cliente. 
  
</details>

### Fakture prodaje

<details>

  <summary> Tablica VRSTE FAKTURA Click to expand!</summary>

  Unijeti [vrste faktura](/docs/configurations/tables/sales/invoices-type) koje se koriste; obavezni podaci su: *Vrsta*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriteriji za kreiranje različitih vrsta mogu biti različiti, na primjer:      
  - kreiranje vrste FAKTURA KUPCI ITALIJA, FAKTURA KUPCI EU, FAKTURA KUPCI IZVAN EU.     
  - kreiranje vrste na temelju Prirode fakture (faktura, kreditna nota itd.)  
  - kreiranje vrste na temelju Skladišta kojim treba upravljati.  
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definirati opće [parametre](/docs/configurations/parameters/sales/sales-invoices-parameters) za korištenje u fakturama za kupce.

</details>
  

## TABLICE NABAVE 

### Narudžbe

<details>

  <summary> Tablica TIPOVI NARUDŽBE Click to expand!</summary>

  Unesi [vrste narudžbi](/docs/configurations/tables/purchase/purchase-orders-type) koje se koriste; obavezni podaci su: *Tip*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriteriji za kreiranje različitih vrsta mogu biti različiti, na primjer:      
  - izrada tipologije NARUDŽBA DOBAVLJAČA ITALIJA, NARUDŽBA DOBAVLJAČA EU, NARUDŽBA DOBAVLJAČA IZVAN EU.       
  - izrada tipologije na temelju [Tip otpremnice](/docs/configurations/tables/purchase/purchase-delivery-notes-type) ili [Tip fakture](/docs/configurations/tables/purchase/purchase-invoices-type) koja se treba izraditi.    
  - izrada tipologije na temelju Skladišta koje se treba premjestiti.

</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definirati opće [parametre](/docs/configurations/parameters/purchase/purchase-orders-parameters) koji će se koristiti u narudžbama dobavljača.  

</details>

### Otpremnica Nabave

<details>

  <summary> Tablica TIPOVI OTPREMNICA  Click to expand!</summary>

  Unesi [vrste otpremnica](/docs/configurations/tables/purchase/purchase-delivery-notes-type) koje se koriste; obavezni podaci su: *Tip*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriteriji za kreiranje različitih vrsta mogu biti različiti, na primjer:      
  - izrada tipologije OTPREMNICA DOBAVLJAČA ITALIJA, OTPREMNICA DOBAVLJAČA EU, OTPREMNICA DOBAVLJAČA IZVAN EU.       
  - izrada tipologije na temelju [Tip fakture](/docs/configurations/tables/purchase/purchase-invoices-type) koja se treba izraditi.      
  - izrada tipologije na temelju Skladišta koje se treba premjestiti.
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definirati opće [parametre](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) koji će se koristiti u otpremnicama nabave.  
  
</details>

### Fakture nabave  

<details>

  <summary> Tablica TIPOVI FAKTURA  Click to expand!</summary>

  Unesi [vrste faktura](/docs/configurations/tables/purchase/purchase-invoices-type) koje se koriste; obavezni podaci su: *Tip*, *Opis* i *[Numeracija](/docs/configurations/tables/fluentis-numerations)*.     
  Kriteriji za kreiranje različitih vrsta mogu biti različiti, na primjer:      
  - izrada tipologije FAKTURA DOBAVLJAČA ITALIJA, FAKTURA DOBAVLJAČA EU, FAKTURA DOBAVLJAČA IZVAN EU.     
  - izrada tipologije na temelju Prirode fakture (faktura, nota zaduženja itd.) 
  - izrada tipologije na temelju Skladišta koje se treba premjestiti.
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definirati opće [parametre](/docs/configurations/parameters/purchase/purchase-invoices-parameters) koji će se koristiti u narudžbama dobavljača. 

</details>
  


