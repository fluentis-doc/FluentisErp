---
title: Novi zapis glavne knjige 
sidebar_position: 1
---
Obrazac se otvara putem izbornikan **Administracija > Računovodstveni zapisi > Zapisi > Novi zapis** klikom na tipku **Novi** koji se nalazi u obrascu [Pretraživanje računovodstvenih zapisa](/docs/finance-area/ledger-records/records/search-ledger-records).

## *Kako kreirati računovodstveni zapis za Kupnju ili Prodaju*

<details>
 
<summary>Clicca per i passaggi fondamentali</summary>
 
1. **Unesi obavezne podatke u zaglavlje**: *Datum registracije, ako je različit od današnjeg*, ***Računovodstveni predložak***, *Konto (kupac ili dobavljač)*, *Broj* i *Datum dokumenta* *Ukupno zapisnika*.  
 
2. **Unesi podatke o PDV-u**: Tip PDV-a, Konto kontropartije i stopa PDV-a (ako nisu već predloženi iz evidencije kupca/dobavljača)
 
3. **Upravljanje datumima ekonomske obveze**: ako je potrebno, osobito za usluge, kako bi se automatski generirali obračuni i odgođeni troškovi ili prihodi.
 
4. **Provjeri i izmijeni odjeljak Knjige dnevnika**: ako je potrebno, možete promijeniti račune ili podijeliti trošak ili prihod dodajući nove redove.
 
5. **Provjeri odjeljak Sumarni pregledi** provjeravajući da li su unosi uravnoteženi.
 
6. **Provjeri ili upravljaj karticom Otvorene stavke**: ako podaci o klijentima ili dobavljačima nisu prikazani u osnovnim podacima, unesite podatke vezane uz vrstu i način plačanja kako biste upravljali otvorenim stavkama na način koji je usklađen s računovodstvenim unosima.

7. **Prihodi ili isplate**: bit će obrađeni putem **kartice Plačanja** koja će biti korištena **prvo**, pretražujući stavke koje treba zatvoriti pomoću tipke Pretraži stavke i dvostrukim klikom na stavke koje treba zatvoriti. Na taj će način podaci o klijentima ili dobavljačima koji su plaćeni ili naplaćeni biti automatski uneseni u odjeljak Knjiga dnevnika.

8. **Jednostavni unosi dnevnika**: poput međufinancijskih transfera mogu se unijeti izravno u odjeljak Knjiga dnevnika, bez potrebe za odgovarajućim knjiženjem za kretanje na IVA mreži.

9. **Ostale specifične sekcije koje nisu obavezne**: ovisno o parametrima aktiviranim u računovodstvenoj šabloni, prikazat će se dodatne specifične sekcije, poput **analitičkog računovodstva**, Imovine, **Intrastat izvještaja**, provizija za **Agente** koje je moguće upravljati.
 
</details>


Računovodstveni unos, a samim time i obrazac za njegov unos, sastoji se od sljedećih elemenata:

- **Zaglavlje** ("*Header*" koje odgovara gornjem dijelu obrasca) koje sadrži jedinstvene elemente za registraciju, kao što su:

    > Datum

    > Broj

    > Ukupno

    > PDV registar i broj protokola

    > Ostalo
    
    > **Računovodstveni predložak** koji, ovisno o postavkama i parametrima, aktivira dodatne elemente navedene u nastavku.

- **Podnožje** ("*Footer*") obrasca koje sadrži opći opis same registracije, koji se upisuje u Knjigu dnevnika, uz nekoliko ukupnih podataka i kontrolu neravnoteže između sekcija Dugovne i Potražne strane.  
- Kartica **Registracija** koja sadrži dvije pod-sekcije: ***PDV*** (ovisno o predlošku) i ***Knjiga dnevnika*** s računovodstvenim poslovicama.  
- Kartica **Partije**, ako je aktivirana, za otvaranje otvorenih stavki koje hrane registar dospjela plaćanja. 
- Kartica **Plačanja**, ako je aktivirana, koja upravlja zatvaranjem otvorenih stavki.
- Kartica **Analitika**, ako je aktivirana, koja upravlja poslovima centara unutar tvrtke (centri troškova / profita).  
- Kartica **Intrastat**, ako je aktivirana, koja omogućuje unos podataka za naknadnu automatsku izradu Intrastat popisa.  
- Kartica **Imovina**, ako je aktivirana, koja omogućuje upravljanje kupnjom ili prodajom imovine.  
- Kartica **Provizije**, ako je aktivirana, koja omogućuje upravljanje kreiranjem i pohranjivanjem provizija agenata.  
- Kartica **Projekti**, ako je aktivirana, koja omogućuje praćenje poslovnih projekata (ugovora).  
- Kartica **Grupiranje stavki**, se attivata: ako je aktivirana: posebna metoda za upravljanje otvorenim stavkama.  
- Kartica **Parametri** s dodatnim informacijama o registraciji. 

## **1. Zaglavlje (Header)**

**Datum registracije**: prilikom nove registracije postavlja se na današnji datum sustava, ali ga je moguće promijeniti unaprijed ili unazad u vremenu, pod uvjetom da je poštovan kronološki redoslijed IVA protokola i eventualni već tiskani definitivi periodi.  

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>
  
  Važno je napomenuti da je ovaj datum ključan jer nije potrebno provoditi promjenu poslovne godine: 

Od datuma registracije aplikacija traži računovodstvene parametre za referentnu godinu (identificirajući u kojem se rasponu datuma poslovna godina nalazi) i na temelju toga preuzima druge rasponne datume kontrole (datumi ekonomske obveze i datumi perioda u liniji).

Ovaj datum je osnovni za tiskanje knjige dnevnika i izvoda iz računovodstvenih konta.

Ako se pritisne tipka za stvaranje *Novog unosa*  unutar postojećeg unosa u obradi, moguće je postaviti, putem **parametara unosa**  (u traci izbornika), da se ovo polje također ponudi u tom novom unosu.

</details>


**Datum ekonomske obveze**: to je referentni datum za godišnje računovodstveno izvješće: **obično je uvijek jednak datumu registracije**. 
Može se koristiti za knjiženje usklađenja bilance i odgovarajuće unose za zatvaranje/otvaranje računa, koji se mogu postaviti kao datum registracije u razdobljima odobravanja i zatvaranja bilance (npr. travanj ili lipanj sljedeće godine), ali će biti postavljeni s *datumom ekonomske obveze* 31/12 – 01/01. 
Ovo je također kako bi se omogućilo unos u razdoblje koje je vjerojatno već definitivno tiskano u Knjizi dnevnika. 

:::important[Pažnja]
Ovaj datum NE može se koristiti za evidentiranje računa koji se očekuju na kraju godine. **Preporučuje se da ga uvijek ostavite jednakim datumu registracije**: u računovodstvu postoje izvještaji koji rade prema datumu registracije, drugi prema datumu ekonomske obveze, a neki omogućuju korisniku da filtrira prema oba datuma, pri čemu bi se jasno dobili različiti rezultati ovisno o primijenjenim filtrima.  
:::


U **parametrima unosa** moguće je postaviti da ovaj datum bude automatski usklađen s datumom registracije;

**Broj registracije**: dodjeljuje se prema postavkama tablice [**Numeracija registracija**](/docs/configurations/tables/finance/posting-ledger-numeration)

<details>

  <summary>Daljnji detalji (Click to expand)</summary>
  
  Jedinstvenost registracije uvijek se određuje kombinacijom *Datuma registracije* + *Broja registracije*. Broj registracije automatski se upravlja kroz postupak na temelju postavki numeratora (brojača): posebno, prilikom spremanja dodjeljuje se ispravan konačan broj, eventualno popravljajući prazninu u numeraciji na odgovarajući datum registracije. Brisanje registracije na datumu X, naime, ostavit će prazninu u numeraciji tog datuma: broj će biti vraćen tek ako se intervenira u unosu/izmjeni jedne od registracija na tom datumu. U slučaju privremene registracije, broj će se kretati u negativnom progresu počevši od broja -1000, kako bi korisniku bilo jasno da se radi o registraciji u tom stanju: izvještaji i računovodstvene pretrage postavljene su da filtriraju samo konačne registracije po zadanim postavkama;

</details>


**Podračun nositelja registracije**: ovo polje je **obavezno samo za registracije PDV-a**, jer je povezano s osnovnim podacima klijenta/dobavljača koji je nositelj registriranog dokumenta.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

Ovo polje obično se ne popunjava u slučaju registracija plaćanja/naplate, jer se obično u istoj registraciji vrši više plaćanja/naplata prema različitim subjektima. U ovoj situaciji, kao filtriranje otvorenih stavki koristi se polje prisutno u kartici *Plačanja*. 

Ako se pritisne tipka za stvaranje *Novog unosa* iz postojećeg unosa, moguće je postaviti **parametre unosa** tako da se ovo polje također ponudi u tom novom unosu. Računovodstveni obrazac može, na kraju, uključivati **[kontrolu dosljednosti](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** između vrste računa unesenog u ovom polju i onoga što je predviđeno u predlošku; 

</details>


**Predložak**: ovo polje je **obavezno**: svaka registracija temelji se na predlošku koji regulira njezine karakteristike i funkcionalnost.

Ovo polje više nije moguće mijenjati nakon što je registracija spremljena (naravno, bit će blokirana i druga polja u slučaju da je PDV registar ili knjiga dnevnika već tiskana kao konačna ili ako je izvršeno automatsko zatvaranje računa): u slučaju da je predložak pogrešan, potrebno je obrisati i ponovno unijeti registraciju s ispravnim kodom. 

Ako se pritisne tipka za stvaranje novog unosa iz postojećeg unosa, moguće je postaviti **parametre unosa**tako da se ovo polje također ponudi u tom novom unosu;

**PDV registar**: preuzima se iz odabranog računovodstvenog predloška i nije moguće ručno mijenjati: 

**PDV protokol**: ovo je numeričko polje koje automatski upravlja postupak za svaki registar: prilikom otvaranja obrasca bit će predložen *maksimalni protokol + 1* za postavljeni registar, a zatim će prilikom spremanja biti potvrđeno ili ne, ovisno o tome jesu li već izvršene druge spremanja za taj registar ili postoje PDV protokoli koji se moraju povući.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

Obnova protokola mijenja se ovisno o tome je li u predlošku postavljen blokada za spremanje s nenumeričkom numeracijom (radi se o kontroli dosljednosti između datuma registracije i broja protokola). Kada je blokada aktivna, bit će obnovljen slobodan protokol samo ako je datum registracije dosljedan, dok bez blokade bit će predložen i protokol koji nije važeći za taj datum, uz odgovarajuće poruke upozorenja korisniku.

Polje za protokol bit će onemogućeno u slučaju privremene registracije;

</details>


**Vrsta dokumenta**: predlaže se od strane postupka na temelju vrijednosti postavljene u računovodstvenim predlošcima: može se mijenjati, ali to je obično izmjena koja nije potrebna (tipično se koristi za označavanje dokumenata u PDV registracijama, primjerice FV = Fakture za prodaju ili FA = Fakture za kupovinu, dok će svi ostali poslovni događaji uvijek imati dokument tipa GEN = Generički);

**Datum dokumenta**: ovo je polje obavezno ili ne, ovisno o **[postavkama računovodstvenih predložaka](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, vaj datum ne može biti kasniji od datuma registracije i mora biti unutar vremenskog okvira valjanosti koji se odnosi na  **[razdoblje za vježbu za referentnu godinu](/docs/configurations/parameters/finance/accounting-parameters)** registracije. Ako se pritisne tipka za stvaranje *Nuova registrazione* iz postojećeg unosa, moguće je postaviti **parametre unosa** tako da se ovo polje također ponudi u tom novom unosu;

<a id="campo_progetto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Broj dokumenta**: U ovo polje unosi se broj fakture za računovodstvene unose PDV-a.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

To je alfanumeričko polje od 20 znakova: ovisno o postavkama predloška, unos istog broja/godine (uzet iz datuma dokumenta) / vrste (polje vrste dokumenta) za isti kod unesen u polje podračun u zaglavlju registracije bit će blokiran (ova blokada je zadana za svaki računovodstveni predložak, ali se može onemogućiti). Ako su broj/godina/podračun isti, ali je vrsta različita, korisniku će biti prikazana jednostavna poruka upozorenja. Na isti način, poruka upozorenja bit će prikazana i ako se isti referentni broj spremi u privremenoj registraciji;

</details>

**Polje Projekt** (bivša komanda): aktivno je samo ako računovodstveni predložak predviđa upravljanje projektima (bivša opcija 'Komanda'): ovaj projekt je referentni za cijelu registraciju, ali će biti moguće ponovno dodijeliti vrijednosti unutar kartice **Projekt** iste registracije.

:::danger PAŽNJA
kartica Projekti je aktivna samo kada je unutar opće evidencije tvrtke (Konfiguracija > Tablice > Opće postavke > Tvrtka) flag **Upravljanje Kontrolingom deaktiviran**. To znači da **nije** aktivan modul za upravljanje kontrolom u **potpunom** načinu rada.    
Ako je flag **Upravljanje Kontrolingom** **aktivan** upravljanje projektom (ili komandom, prema prethodnoj terminologiji) odvijat će se na drugačiji način, odnosno bit će potrebno dodijeliti projekt (komandu) kroz posebni centar troška (danas poslovni centar) koji ima kao [**dimenziju**](/docs/configurations/tables/controlling/analytical-accounting/dimension) (pogledajte dokumentaciju za kontroling područje) onu koja je prikladna za upravljanje komandama.  
:::

**Valuta**: predložena kao prioritet iz opisa vlasnika registracije, alternativno iz valute tvrtke: može se ipak mijenjati od slučaja do slučaja. Nakon što je registracija spremljena, polje više nije moguće mijenjati;

**Datum tečaja**: to je referentni datum za tečaj, kako je uneseno u tablicu tečajeva valuta: postupak čita iz ove tablice najnoviji uneseni datum s odgovarajućim tečajem u odnosu na ovo polje.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

U *parametrima unosa* ovaj datum može biti postavljen kao datum registracije (zadano) ili kao datum dokumenta.   
Predviđen je korisnički parametar za upozorenje kada nije postavljen tečaj na datum registracije (i stoga se koristi prethodni tečaj);

</details>

**Direktni tečaj / Inverzni tečaj**: to je vrijednost tečaja kako je unesena u tablicu tečajeva valuta: istovremeno se prikazuju i direktni tečaj (onaj koji se obično koristi u tečajevima valuta), te inverzni tečaj. 

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

Korištenje inverznog tečaja proizlazi iz činjenice da je postupak zadržao logiku *neizvjesno za izvjesno* koja potiče iz upravljanja lirama – koliko lira za jednu jedinicu druge valute – dok euro ima tečajeve *izvjesno za neizvjesno* – s 1 eurom koliko jedinica druge valute mogu dobiti. Ovu vrijednost korisnik može ručno postaviti (tipičan slučaj: računovodstveni predlošci za plaćanje/naplatu u valuti, vrijednost tečaja koji primjenjuje banka nikada neće biti službeni međunarodni tečaj);

</details>

**Ukupno valuta / Ukupno dokumento**: to su polja međusobno povezana putem tečaja, stoga će u registracijama u eurima biti svejedno unijeti iznos u jednom ili drugom polju.
U registraciji u strani valuti, obično se unosi vrijednost u polje Ukupno u valuti, a protuvrijednost u eurima se automatski izračunava.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

**[Računovodstveni predložak](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates#13-parametri)** može predvidjeti da se ovi podaci ažuriraju automatski prilikom promjene podataka unesenih u tablicu PDV-a, samo za povećanje ili i za smanjenje. Spremanje registracije može biti blokirano ako ovaj iznos nije jednak podacima PDV-a registracije;

</details>

**Ukupni porez**: polje prikazano na dnu tablice PDV-a, za prikaz ukupnog iznosa, koje se automatski ažurira od strane postupka, ne treba ga unositi ručno.

### Podnožje (Footer)

Na dnu obrasca, u kartici *Registracija*, nalazi se **opis transakcije** računovodstvene registracije: radi se o napomeni koja se može postaviti unutar računovodstvenog predloška pomoću numeričkih parametarskih kodova (1) (2) … (10) 


<details>

  <summary>Daljnji detalji (Click to expand)</summary>

i kodovi (8) i (9) koriste se samo u detaljnim opisima podračuna u odjeljku knjige računa. Dvostrukim klikom na polje moguće je otvoriti pretragu unutar kodiranih napomena (postupak dostupan unutar Alata: ručna izmjena ovog opisa bit će eventualno resetirana na potvrdu korisnika nakon što se izmijeni bilo koje polje koje se automatski upravlja u napomenama).  

Na dnu obrasca, otvaranjem proširivog odjeljka (expander), nalaze se dodatna polja za sažetak podataka PDV-a i registracije: posebnu pažnju zaslužuju polja namijenjena za prikaz neravnoteže registracije, što je obično onemogućeno (ali se može omogućiti u postavkama korištenog predloška).  

</details>

**Neravnoteža dug/početak** služi kao kontrola usklađenosti kako bi se omogućilo spremanje registracije.

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

Osim ako kontrola nije onemogućena unutar parametara kontnog predloška, što toplo preporučujemo da izbjegavate osim u iznimnim slučajevima.  

Vrijednost neravnoteže bit će ponuđena kao iznos u novim računovodstvenim stavkama koje će biti ručno unesene u registraciju kako bi se automatski uravnotežila.  


</details>


#### Specifične tipke na traci s izbornika 

> **Parametri za unos**: otvara parametre za unos prve bilješke. 

- *Data kompetencije ekonomske*: prisutna u mreži registra PDV-a i automatski prenesena u onu u Knjizi dnevnika, može biti predložena kao dnevna (jednaka datumu registracije za "od datum" i "do datum"), kraj godine ("do datum" bit će postavljen na 31/12/XXXX), i nijedna za račune tipa usluge (bit će ostavljeno prazno ako je račun protivstranke tipa "ispraviti" ili koristan za obračun prilagodbe, kako bi se obvezalo korisnika da definira raspon datuma);    
- *Obavijesti o neskladnosti u valuti*: provjerava je li i stupac "Iznos u valuti" u Knjizi dnevnika usklađen (iako je prikazan u jednoj koloni, program poznaje sekciju kretanja);   
- Obavijesti o datumu tečaja: budući da je tečaj automatski predložen u registraciji kao posljednji uneseni tečaj u tablici "tečajevi valuta", provjerava da datum tečaja u tablici "tečajevi valuta" bude isti kao datum registracije;  
- *Podračun (Nema / Posljednji uneseni)*: odnosi se na podračun vlasnika registracije unesen u zaglavlju. 

 > **Tipke za ponovno izračunavanje**:  žuriraju vrijednosti s osvježavanjem / ponovnim izračunom 
    - PDV
    - Knjiga prometa
    - Trošni centri (ako se nalazite na kartici Analitički)
    - Stavke (ako se nalazite na kartici Stavke)

## **2. Zapis**

### 2.1  Podaci o PDV-u dokumenta 
Ovaj odjeljak je prisutan **samo za registracije PDV-a** (kada je u računovodstvenoj šifri postavljen **PDV registar** i odgovarajući tip PDV transakcije).

U slučaju **ručnog unosa** nove registracije, odjeljak se može ispuniti na nekoliko načina:   

- >*Šifarnik klijenta/dobavljača/agenta koji je nositelj registracije nema unaprijed postavljen podračun kontrole niti standardnu PDV stopu*: u ovom slučaju korisnik odabire **vrstu PDV-a** (pogledajte detalje u nastavku), kao i **podračun** kontrole za stavku i odgovarajuću **PDV stopu**. Nakon što se ovo postavi, aplikacija će automatski raspodijeliti ukupni iznos dokumenta/registracije unesen u zaglavlje na odgovarajuće stavke. Korisnik može mijenjati ove vrijednosti i unositi nove stavke prema istoj logici. Predloženi iznos bit će izračunat na temelju razlike koja nedostaje za pokriće ukupnog iznosa registracije;  
- >*Šifarnik klijenta/dobavljača/agenta sadrži unaprijed postavljen podračun kontrole i/ili PDV stopu*: nakon unosa  **vrste PDV-a** aplikacija predlaže unaprijed postavljeni podračun kontrole i/ili PDV stopu, iznosi se unose kao u prethodnom slučaju raspodjelom ukupnog iznosa dokumenta/registracije, a korisnik ih može ručno mijenjati. Sljedeći unos ponovno predlaže podračun/PDV stopu prema šifarniku i iznos koji nedostaje za pokriće ukupnog iznosa registracije;    
- >*Šifarnik klijenta/dobavljača (nije obuhvaćeno za agente) sadrži popis podračuna kontrole, bez unaprijed postavljenog podračuna kontrole, ali ima unaprijed postavljenu PDV stopu*: u ovom slučaju aplikacija će izravno prikazati u odjeljku PDV popis unaprijed postavljenih podračuna kontrole, svaki s pripadajućom PDV stopom ili s unaprijed postavljenom PDV stopom iz šifarnika, a korisnik će morati ručno unijeti iznose stavku po stavku. U ovom slučaju, ručno dodavanje nove stavke neće predložiti podračun kontrole, već samo PDV stopu, raspodijelit će iznos koji nedostaje do pokrića ukupnog iznosa dokumenta/registracije.  

**Vrsta PDV-a**: to je interna fiksna tablica sustava i sadrži sljedeće vrijednosti:   
> - **Opća**: to je **standardni** tip PDV transakcije, dovoljan u gotovo svim slučajevima. Ova vrsta stavke smatra se u nekim PDV procedurama kao transakcija robe;    
> - **Namijenjeno za preprodaju**: koristi se za kupnje koje čine osnovu za izračun postotaka koji se primjenjuju pri raspodjeli prihoda (npr. za supermarkete ili ljekarne: ovi maloprodajni objekti ne primjenjuju PDV na svaku stavku pojedinačno, već im je omogućeno da naprave ukupnu sumu prodaja na kraju razdoblja i podijele iznose prema udjelu kupljenih artikala u tom razdoblju);    
> - **Zaokruživanja**: radi se o zaokruživanju koja nisu predmet PDV-a, tipično za npr. telefonske račune. Korisnost ove oznake je minimalna, ali podračun koji odgovara bit će unesen prema logici gore prikazanoj;    
> - **Prodaja PDV 74Ter**: specifičan tip transakcije za putničke agencije, za koje datum obračuna PDV-a kasni 30 dana u odnosu na datum transakcije (ako se prodaja vrši danas, PDV će biti plaćen u obračunu za sljedeći mjesec). Na tim stavkama primjenjuje se PDV upravljanje prema 74Ter s periodičnim obračunom PDV-a;    
> - **Preprodaja**: odnosi se na prodaje na koje će aplikacija primijeniti izračun raspodjele prihoda;     
> - **Ne poljoprivredna transakcija**: specifičan tip transakcije za tvrtke podložne poljoprivrednom režimu, koristi se za isključivanje iz tog režima (postavljenog u računovodstvenoj šifri) za specifičnu stavku;    
> - **Usluga**: specifičan tip transakcije za označavanje da stavka proizlazi iz kupnje/prodaje usluga, što je važno u nekim PDV procedurama (npr. za **INTRASTAT** izvještaje).

**% Neoporezivost**: reuzima se iz PDV stope unesene na stavci. Ručno nametanje se ne preporučuje, ispravna radnja je promijeniti PDV stopu; određuje izračun stupca (porez) *neoporezivog*. 

**Porez**: može se ručno unijeti u odnosu na izračun koji provodi aplikacija: može se dogoditi da dokument pri kupnji ima zaokruživanje koje nije ispravno obrađeno, korisnik mora registrirati dokument onako kako ga je primio.  

**Ukupno valuta / ukupno**: to su izračunati, a ne pohranjeni podaci na razini baze podataka;  

**Od datum obračuna/Do datum obračuna**: to su datumi **ekonomske obveze**, koji su ključni za automatske **izračune** **ispravki i dopuna** u bilanci, kako za međufinancijsku bilancu, tako i za računovodstvenu bilancu. Na temelju tih podataka bit će izračunati razmjerni troškovi i prihodi.  

<details>

  <summary>**PRIMJER** Click to expand!</summary>
 
Danas je 31/03/godine X. 

Ako registracija troška prikazuje datume obračuna od 31.03.X do 31.03.X+1, na datum 31.12.X, pri pokretanju postupaka usklađivanja, izračunat će se aktivni odgođeni trošak za dio troška koji pripada razdoblju od 01.01.X+1 do 31.03.X+1.  

Ako registracija troška izvršena 31.01.X prikazuje datume obračuna od 31.01.X-1 do 31.01.X, pri pokretanju postupaka usklađivanja na datum 31.12.X-1 izračunat će se pasivni obračun troška za dio troška koji pripada razdoblju od 31.01.X-1 do 31.12.X-1.  

</details>

Ovaj raspon datuma može se automatski upravljati, ovisno o ***Parametrima unosa***, ina 3 alternativna načina: 

- >*Kraj poslovne godine* gdje će početni datum biti predložen na temelju datuma dokumenta, a krajnji datum kao datum kraja poslovne godine.  
- >*Dnevno* gdje će oba datuma biti postavljena na temelju datuma dokumenta;
- >*Bez datuma za tip konta usluga* (preporučena opcija), aplikacija neće predložiti nijedan datum za ekonomske podračune koji u vrsti konta imaju označen flag *usluga*  ali će korisnik biti obavezan ručno unijeti ispravan raspon datuma (za ostale vrste konta, predložit će isti datum dokumenta za oba datuma).

:::important[Pažnja]
Kako bi se automatski izračunali obračuni i odgođeni troškovi putem postupka usklađivanja, potrebno je da vrsta konta korištena za konta koja su predmet ispravki bude definirana u tablici **[Vrste konta](/docs/configurations/tables/finance/account-types)** s označenim flagom Usluga.

Primjer vrsta konta koje imaju označen flag usluga u tablici Vrste konta (u standardnim bazama podataka) su "Troškovi za ispraviti" i "Prihodi za ispraviti".

Odgovarajuća vrsta konta dodjeljuje se predmetnom podračunu izravno u planu konta. 
:::

**Mjesec**: to je **referentno razdoblje PDV-a za registraciju**, dobiveno na temelju vrste obračuna i datuma obračuna PDV-a. Polje koje se zapravo koristi u obračunu je, međutim, datum obračuna PDV-a; 
 
**Datum obračuna PDV-a**: polje se predlaže prema postavkama računovodstvene šifre, obično kao datum registracije za kupnje i datum dokumenta za prodaje (ako je transakcija prodaja 74Ter, tada je datum dokumenta + 30 dana). Ovo je  **referentni datum za tiskanje periodičnog obračuna PDV-a**; 
 
**Obračun plafona**: ovaj datum koristi se kao referenca za obračun sudjelovanja registracije u izračunu plafona; predlaže se kao datum dokumenta za sve PDV stope koje predviđaju upravljanje plafonom PDV-a; 

**Napomena o promjeni iz prethodnih godina**: polje je aktivno samo za registracije s vrstom dokumenta koja uključuje označeni flag *Napomena o promjeni*. Služi za označavanje da je stavka kreditnog nota vezana uz prethodne godine u odnosu na godinu dokumenta.  
  
**Datum referencije napomene o promjeni**:  polje je aktivno samo za registracije s vrstom dokumenta koja uključuje označeni flag *Napomena o promjeni*. Služi za označavanje referentnog datuma ispravljene fakture;   

**Podjela**: polje je vidljivo samo ako računovodstvena šifra predviđa upravljanje podjelama. U tom slučaju bit će moguće podijeliti istu PDV registraciju na više poslovnih podjela.  

#### Dodatne napomene:  
- nije moguće spremiti **PDV stavke s osnovicom 0** osim ako računovodstvena šifra to dopušta (flag *dopušti podračune s vrijednošću 0*); 
 
- **Zaokruživanje PDV-a**  upravlja se stavku po stavku, dok propisi nalažu da se izračun treba napraviti na osnovici koja grupira sve stavke s istom PDV stopom: stoga je moguće da dođe do razlike koja je uzrokovana isključivo upravljanjem zaokruživanjima (ovo se odnosi samo na ručno unos registracije: automatske računovodstvene obrade iz kupnji i prodaja već pravilno izračunavaju).  
 
    Jednom kad se razlika detektira, rješenja su:  
        1. ručno forciranje PDV stavke  
        2. pritisnuti tipku za ponovni izračun poreza koji se nalazi u zaglavlju i automatski uskladiti posljednju stavku svake PDV stope.

### 2.2 Dnevnik knjiženja 

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Svaki zapis opće knjigovodstvene evidencije **mora obavezno imati stavke u ovom odjeljku** kako bi bila spremljena.  

- > U slučaju **PDV registracija** ovaj dio se **izračunava**, na temelju logike ***tipova iznosa***, prema podacima unesenim u stavke prethodne **PDV tablice**; 

- > U slučaju registracija **plačanja/naplate**, iznosi **ovise o iznosima plaćanja unesenim u karticu ***Pagamenti***; 

- > U **ostalim slučajevima**, stavke i iznosi bit će uglavnom **ručno** upravljani od strane korisnika.  

:::note[Napomena]
Predložak može ponuditi popis unaprijed postavljenih podračuna: korisnik će u tom slučaju morati unositi iznos stavku po stavku samo u odgovarajuću sekciju Duguje / Potražuje.   

Pri spremanju, ako predložak ne dopušta spremanje podračuna s nulom, prazne stavke bit će automatski izbrisane;  

Ovaj način korištenja tipičan je, na primjer, za obračun plaća zaposlenika, gdje predložak računovodstvene šifre nudi sve moguće korisne podračune, ali se iz njih koristi samo nekoliko prema potrebama u svakom pojedinom slučaju.  
:::

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>
 
- U slučaju jednostavne registracije ‘duguje/potražuje' moguće je kodirati specifičan predložak koji već predviđa podračune koji će se koristiti s tipom iznosa Tot. Doc./Registracija, kako bi korisnik jednostavno upisao iznos u polja ukupnih iznosa na zaglavlju, a postupak će ih rasporediti u duguje/potražuje prema predlošku;
  
- Svaki novi ručni unos stavki pokrit će eventualni manjak prisutan u registraciji: podsjeća se da nesbilansirane registracije ne mogu biti spremljene, osim ako nije omogućena odgovarajući predložak.

</details>

#### Specifična polja u mreži Dnevnik knjiženja 

**Valuta**: može sadržavati detalje o valuti (datum promjene, vrijednost promjene i iznos valute): iznos valute uvijek treba unositi u apsolutnom iznosu (znak dugovanja/kredita u društvenoj valuti također definira njen znak); polja u valuti i u društvenoj valuti mogu biti odvojena jedno od drugog, ne računajući iznose pri potvrdi koji su izvršeni u izmjenama tih istih iznosa;    
**Od datuma/mjeseca zaostataka**: ovaj raspon datuma, kao što je već spomenuto za sekciju PDV-a, ključan je za upravljanje knjiženjima korekcija i za međufinancijske i računovodstvene bilance. Upućuje se na specifične napomene koje su unesene gore;  
**Podjela**: može biti prisutna ako je postavljena u predlošku, može se koristiti za podjelu iste registracije na više podjela;  
**Opis detalja** (nije preporučljivo postaviti kao zadani unos za sve): može biti prisutan ako je postavljen u predlošku, također može biti djelomično automatski upravljan u predlošku s napomenama (1) – (2) … itd. kao i za opći opis. Posebno je zanimljivo upravljanje kodovima (8)-(9) u vezi s redovima klijenata / dobavljača za zatvaranje računovodstvenih stavki;  
**Datum valute banke**: Il campo può essere automatizzato rispetto al numero di giorni impostato, su ogni anagrafica banche, per ogni causale contabile che le riguarda;  
**Br. stavke**: Polje može biti automatizirano u odnosu na broj dana postavljen na svakoj banci u šifarniku banaka za svaki predloške koji je povezan s njom;  
**Referenca ručnih stavki**: može biti prisutna, ako je postavljena u predlošku, može se koristiti za ručno povezivanje računovodstvenih stavki bez korištenja upravljanja otvorenim stavkama;  
**Podračun kontrole**: može biti prisutan, ako je postavljen u predlošku, ne preporučuje se ručno korištenje. Automatsko upravljanje u registracijama PDV-a predviđa da se za redove klijenata/dobavljača dodijeli podračun troška/prihoda veće vrijednosti, dok će za redove troška/prihoda/PDV-a kontropartija biti podračun klijenta/dobavljača.  

#### Daljnje napomene

Korisnik može ručno prisiliti unose u knjizi dnevnika: obično se preporučuje usklađivanje podataka počevši izravno od PDV-a. Svaka prisilna izmjena može se poništiti pritiskom na gumb za ponovni izračun knjige dnevnika.  
U predlošku knjiženja, posebno za sve predloške povezane s PDV-om, za redak s *Tot. Doc./registracija* unosi se opći račun klijenata/dobavljača, koji će se svaki put zamijeniti s podračunom nositelja registracije: ova zamjena bit će izvršena samo ako su u **[parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**, u odjeljku popis računa klijenata/dobavljača, odobreni (tj. uneseni u mrežu) tipovi podračuna povezani s glavnim računom koji mora odgovarati onome koji je prisutan u predlošku knjiženja.  

## 3. Dospijeća plaćanja

Kartica je prisutna **samo ako predložak ima označen flag 'Otvaranje plaćanja'**.  

### 3.1 Vrsta Dospijeća plaćanja

Posvećeno je upravljanju podacima za izračunavanje povezane partije i prati uvjete plaćanja. Za ručno knjiženje vrste IVA, mreža će biti popunjena zadanim podacima koji su uneseni unutar osnovne evidencije kupca/dobavljača/agenta dodijeljenog kao podračun nositelja knjiženja. Za druge vrste knjiženja (na primjer, za unaprijed plaćene iznose, moguće je definirati predložak koji otvara partiju, u suprotnom smjeru, umjesto da je zatvori jer dokument još nije evidentiran): u ovom slučaju upravljanje ovom sekcijom postaje ručno, pa korisnik može unijeti osnovne podatke o vrsti plaćanja, načinu plaćanja i referentnom podračunu, s 100% unesenim u polje 'Postotak'.

Za ovu sekciju treba napomenuti da:
- Stavka se može kreirati i na podračunima koji nisu u osnovnoj evidenciji i koji nemaju postavljen flag "Otvaranje plaćanja" u planu računa (ovaj flag se odnosi samo na kontrolu da podaci iz dnevnika i stavke odgovaraju za podračune koji imaju postavku);  
- Bankovni podaci obično se unose iz osnovne evidencije ili iz dokumenta koji je knjižen u području nabave/prodaje/primatelja, ali ih je moguće ručno postaviti odabirom drugog bankovnog računa pomoću pomoći abi/cab (dvostruki klik na polje). Banka povezana u ovoj sekciji bit će obično korištena za plaćanje dobavljaču kao banka korisnika plaćanja, osim ako nije postavljen flag '**[Nametni banku za plaćanje prisutnu u šifarniku dobavljača](/docs/configurations/parameters/treasury/vendor-payments-parameters)**';  
- Obično se unosi polje '**Postotak**'. Značenje polja 'Iznos/Porez' je sljedeće: u polje '**Iznos**' može se unijeti fiksni iznos koji će se koristiti za kombinaciju vrste plačanja/riješenje plačanja u upravljanoj stavci; polje' **Porez**' omogućava definiranje, od ovog iznosa, koliko se odnosi na PDV (ovo je korisno u slučaju kada rješenje plačanja predviđa različite postotke osnovice/poreza među različitim ratama, kako bi se dobio ispravan izračun). Moguće je unijeti kombinaciju iznos/postotak.  

**Grupiraj stavke**: flag, koji nije aktivan, preuzet je iz šifarnika klijenta/dobavljača: u suštini nema praktičnu primjenu, jer je vrlo rijetko da dvije stavke imaju isti tip plaćanja i isti datum dospijeća unutar istog dokumenta;

- Ispod se nalaze neka polja za sažetak situacije klijenta/dobavljača: iznos odobrenog limita u modulu Rizik klijenta, vrijednost izloženosti dobivena prema situaciji otvorenih stavki (bez uzimanja u obzir registraciju u upotrebi) i računovodstveni saldo (uključujući i registraciju u upotrebi);  

- u slučaju registracije koja proizlazi iz **knjiženja nepodmirenih iznosa**, gornja mreža NEMA nikakvu važnost za izračun stavki ispod (tipično, šifarnik predviđa stavke za RB, ali nepodmireni iznosi se tretiraju kao BB i ne trebaju se automatski ponovno izdavati druge ribe): čita se jedino ako je potrebno podatak o bankovnim podlogama.  

### 3.2 Dospijeća plaćanja

Prikazuje popis stavki izračunanih prema postavkama u gornjoj sekciji: korisnik može forsirati vrstu plačanja, datum dospjela i iznose različitih rata (pazeći da se poštuju ukupni iznosi). Mreža stavki NE dopušta ručno unošenje nove rate. 

U slučaju da predložak predviđa i otvaranje stavki, i zatvaranje putem kompenzacije, te je također aktiviran flag 'Obavijest', pri spremanju registracije korisniku će biti prikazana obavijest o prisutnosti stavki koje se mogu kompenzirati.

**Opis**: označava stanje stavke (otvorena, djelomično otvorena, zatvorena);  
**Konto/podkonto/opis**: suprotnosni račun kupca ili dobavljača na koji se odnosi stavka;  
**Plaćanje**: tip plačanja (bankovni prijenos, gotovina itd.);  
**Rok**: datum dospijeća izračunat prema uvjetima plačanja iz gornje mreže ili ručno postavljen;    
**Kod dokumenata**: kod dokumenta koji je generirao stavku (na primjer FA = račun za kupovinu, FV = račun za prodaju);     
**Datum dokumenta**: datum dokumenta (na primjer, račun za kupovinu) koji je generirao stavku;  
**Broj dokumenta**: broj dokumenta koji je generirao stavku;  
**Valuta**: valuta u kojoj je denominirana stavka (npr. EUR = Euro);  
**Tečaj**: tečaj koji je odredio vrijednost u valuti i protuvrijednost u eurima stavke;    
**Datum valute**: datum referentnog tečaja;   
**Iznos u valuti**: jednak iznosu u eurima ako je tečaj 1; 
**Iznos Dugovanje / Potraživanje**: stavka ima znak (ili sekciju, kako se to može reći) kao i računovodstveni pokret koji ju je generirao. Stavka sa znakom dugovanja bit će stavka u našem korist, dok će stavka sa znakom potraživanja biti stavka u dugovanju (na primjer, naspram računa koji je zaprimio dobavljač ili kreditne bilješke izdate kupcu); 

Također je moguće blokirati plaćanje stavke (Flag **Nije Plaćivo**): postupak će pohraniti datum i korisnika koji je blokirao plaćanje s eventualnom objašnjenjem (**Početak Bloka, Korisnik Bloka, Napomene Bloka**) kao i datum i korisnik koji otključava (**Korisnik Otključavanja, Kraj Bloka**), za obje operacije su predviđena specifična korisnička prava u ARM-u.

**Broj / godina partije*: automatski dodijeljeni za identifikaciju partije;  
*Pozicija dospjele vrijednosti*: kombinirana kutija povezana s slobodnom tablicom definiranom od strane korisnika, omogućuje klasifikaciju računovodstvenih partija od trenutka njihove kreacije;  
*Napomene* (od partije): slobodne napomene koje se također mogu automatski povezati u računovodstvene uzroke s detaljnim opisom podračuna onako kako su unesene u računovodstvo.  
*Agent*: u ovom polju je moguće povezati odgovarajućeg agenta za partiju: to se automatski popunjava na temelju agenta unesenog u račun prodaje prilikom knjiženja (u slučaju da su prisutni više agenata, bit će dodijeljen onaj s višim provizijama).  
*Datum Ref / Br. Ref*: Polja preuzeta iz datuma dokumenta i broja dokumenta u računovodstvenoj evidenciji (ako su prisutni, inače preuzeta iz datuma/broja knjiženja), omogućuju grupiranje i filtriranje partija/namire koje se odnose na isti dokument (na primjer, kreditna nota koja se odnosi na račun, radi prikazivanja svih stavki zajedno).  
*Cig* i *Cup*: preuzeti iz računa prodaje, ali se također mogu ručno unijeti (putem kombinirane kutije). Pogledajte **[dokumentaciju o poljima na računu](/docs/sales/sales-invoices/invoicing/sales-invoice).**  
**Referentni modeli** i **Referentni broj**: polja koja se obično ne koriste u Italiji, tipična za Hrvatsku (gdje kada tvrtka izdaje račun na svakom dospjeću povezuje tip/kod identifikacije rate, koji kupac zatim navodi u uplati, a banka ga navodi u pokretu naplate: iz bankovnog izvatka, stoga se lako može pratiti zatvorena rata. Polja predstavljaju referencu i za buduću implementaciju uvoza bankovnih pokreta).
**Srednja zadrška dana plaćanja**: Neposjećeno u Italiji: preuzima vrijednost dana kašnjenja iz osnovnih podataka o kupcu, ali se može promijeniti i ručno. Može se koristiti u simulaciji novčanog toka (cash flow).

#### Specifične tipke
> **Izbriši dospijeća plaćanja**: omogućuje brisanje partije koja je automatski stvorena na temelju tipa plaćanja unesenog.
> **Izbriši iz ekranske tablice plaćanja**: omogućuje brisanje rješenja plaćanja, koje automatski predlaže osnovni podaci ili je ručno uneseno.  
> **Ponovno izračunaj dospijeća plaćanja**: dopušta ponovno izračunavanje ručno prisiljene partije.  
> **Grupiranje dospijeća plaćanja**: omogućuje grupiranje stavki u prisutnosti više stavki s istim datumom dospijeća.

## **4. Plaćanja** 

Kartica ‘Plaćanja' **je prisutna samo ako uzrok ima oznaku ‘Zatvaranje stavki' postavljenu**. Omogućuje prikaz otvorenih stavki za nastavak s plaćanjima/prijemima uz zatvaranje otvorenih stavki ili za kompenzacije.

:::tip Info
Kartica je podijeljena u dvije osnovne mreže, prva, gornja, služi za pretraživanje otvorenih računa kako bi ih zatvorili, a druga, donja, sadržavat će rezultat postupka zatvaranja (odnosno rezultantne uplate).
:::

### Ispravna konfiguracija interakcije između Otvaranja, Zatvaranja i Kompenzacije Stavki  

- Tipično, svi zapisnici tipa PDV-a imaju flag 'otvaranje stavki' i mogu također imati flag zatvaranja + kompenzacija stavki; 

- Predlošci za **plaćanje/prihod**, s druge strane, uvijek uključuju zatvaranje stavki **bez ikada označenog flaga za kompenzaciju**, a eventualno mogu imati flag za otvaranje stavki kako bi upravljali slučajevima unaprijed plaćenih iznosa (u tom slučaju, ako nema zatvaranja stavke, bit će otvorena stavka suprotnog znaka čime će se održati ravnoteža u knjigovodstvenom unosu - ravnoteža koja može biti obavezna putem **[parametara](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** predloška knjigovodstvenog zapisa). 

:::tip PAŽNJA
Razlika između plaćanja stavki i kompenzacije stavki:  
Kompenzacija, u knjigovodstvenoj terminologiji, može se shvatiti i kao kompenzacija stavki (davanje/prihod) istog podračuna (npr. faktura s kreditnom nota) ali i kao kompenzacija kupac/dobavljač (npr. kompenziram dug prema podračunu dobavljača s potraživanjem prema podračunu kupca koji pripada istom šifarniku).  
In questa form la compensazione è strettamente collegata alla situazione di partite facenti capo allo stesso sottoconto.  
U ovom obliku, kompenzacija je usko povezana sa situacijom stavki koje pripadaju istom podračunu.
Kompenzacija kupac/dobavljač može se jednostavno upravljati izvršavanjem **plaćanja** stavki (jednostavno zatvaranje) "ukriženo" (i davanje i prihod - na primjer, putem međubilance) čime se "kompenziraju" na saldo u knjigovodstvu.  
Alternativno, moguće je koristiti dvije specifičnije i fleksibilnije procedure: [**Kompenzacija stavki**](/docs/finance-area/maturity-values/procedures/maturity-compensation) ili [**Brza kompenzacija**](/docs/finance-area/maturity-values/procedures/fast-compensation)
:::

Ako je u zaglavlju zapisa unesen podračun nositelja, on će biti prikazan kao filter za pretragu u početnim poljima obrasca za plaćanja:

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Za sve zapise PDV-a, aplikacija će ovdje prikazati stavke samo za kupca/dobavljača unesenog u zaglavlju, kako bi se nastavila kompenzacija fakture/kreditne note; 

U slučaju zapisa plaćanja/prihoda (posebno za više kupaca ili dobavljača), polje u zaglavlju obično će biti prazno, a korisnik će biti taj koji će ispuniti filter prema potrebama. 

Da segnalare, in particolare, il campo del sottoconto **Banka**: nije riječ o filteru, već se automatski popunjava s podračunom plaćanja unesenim u **[šifarnik](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)**  kupca/dobavljača nositelja zapisa, a odatle ažurira knjigovodstveni zapis u polju koje predviđa vrstu iznosa ‘Tot. Doc./zapis’.

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

</details>

(ako **[knjigovodstveni parametri](/docs/configurations/parameters/finance/accounting-parameters)**, u popisu računa kupaca/dobavljača, omogućuju zamjenu, odnosno mora postojati povezanost između vrste računa banaka i odgovarajućeg glavnog računa u planu računa kako bi zamjena mogla biti izvršena).

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

</details>

### Izvršenje zatvaranja stavke  

:::tip KAKO ZATVORITI STAVKU  
Nakon što se u prvom okviru pronađe stavka (ili stavke) koje treba platiti, moguće ih je odabrati i platiti putem **dvostrukog klika** na pojedinačni redak, ili korištenjem tipke **Kreiraj plaćanja**.
:::

U slučaju da predložak uključuje kompenzaciju stavki, bit će aktivnu tipku za **Kompenzaciju stavki** (a dvostruki klik imat će isto značenje).   

Druga koristana tipka u ovom odjeljku je **Kreiraj proširena plaćanja**: 

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

</details>

Otvorit će se srednja maska za postavljanje iznosa plaćanja s eventualnim iznosom popusta, zajedno s odgovarajućim podračunom za knjigovodstveno evidentiranje.  

:::note NAPOMENA  
U ovoj maski vezanoj za naredbu *Proširena plaćanja* (samo ovdje) moguće je postaviti stanje **Obavezno zatvorena** za stavku (putem odgovarajućeg flaga): korištenje ovog stanja nije preporučeno jer nije rezultat normalnog stvaranja plaćanja koje zatvara stavku, već prisiljava stanje, a može biti korisno za poravnavanje razlika i pogrešaka koje se više ne mogu uočiti normalnom korekcijom.   
Sličan rezultat može se postići stvaranjem ručnog plaćanja i prisiljavanjem iznosa.
Nije dopušteno prisiliti plaćanje s iznosom većim od preostalog iznosa stavke.  
:::

U popis plaćanja mogu se unijeti napomene za isto: ove napomene mogu se automatski povezati, u predlošku, s općim opisom knjigovodstvene registracije (flag *opis u dnevniku i plaćanjima*, nije preporučeno).  

Ako će plaćanje biti upravljano, prema **[postavkama predloška](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, po povijesnoj tečajnoj vrijednosti stavke, neće biti automatski evidentirana nikakva razlika u tečaju, već će se ona upravljati ručno u knjigovodstvu: ova opcija također olakšava, a posebno je korisno, upravljanje ravnotežom između otvorenih stavki i knjigovodstvenog salda.  

Suprotno, ako opcija nije aktivna, protuvrijednost u eurima bit će izračunata prema tečaju na datum registracije (i u ovom slučaju, ako je ispravno postavljeno **[u predlošku](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** - pogledajte vrstu iznosa Korist/Izgub. razlike u tečaju - i **[u valutama](/docs/configurations/tables/general-settings/currencies)**, procedura će automatski valorizirati podračune za korist/gubitak razlike u tečaju, valuta po valuta).  

Pomoću tipke **Proširi/smanji** može se prikazati samo jedna od dvije mreže (pretraga stavki ili plaćanja).  

Na dnu će biti prikazana polja za ukupne iznose odabranih stavki.  

Na temelju plaćanja koja su stvarno unesena i postavki predloška, aplikacija će ažurirati redak s vrstom iznosa ‘Tot. Doc./zapis’ (na primjer, pridružen podračunu plaćanja na banci) s ukupnim iznosom evidentiranih plaćanja, dok će za svako plaćanje unijeti redak ili grupirati plaćanja za davanje i prihode, valuta po valuta, svakog podračuna kupca/dobavljača koji je plaćen/prihvaćen.

#### Specifični tipka   
> **Parametri unosa**: poziva parametre unosa za prvu bilješku.   
> **Pretraga stavki**: omogućava pretragu stavki za plaćanje/prihod.    
> **Izbriši plaćanja**: omogućava brisanje prethodno odabranih plaćanja.    
> **Kreiraj plaćanja**: omogućava kreiranje plaćanja za odabranu stavku.  
> **Kompenzacija**: omogućava izvršenje kompenzacije stavki ako je predviđeno u knjigovodstvenom predlošku.  
> **Kreiraj proširena plaćanja**: omogućava upravljanje plaćanjem/prihodom s eventualnim iznosima popusta i odgovarajućim podračunom za knjigovodstveno evidentiranje.  
> **Proširi/smanji**: omogućava smanjenje prikaza samo na stavke ili plaćanja, i obrnuto, ili proširivanje na obje.  

## **5. Analitika**

Ona je posvećena upravljanju centrom troška/profita (danas poslovnim centrima), i prisutna je samo ako predložak ima barem jednu od dvije oznake za upravljanje centrima troška / centrima profita.  

:::danger PAŽNJA
Upravljanje centrima troška / profita (danas poslovnim centrima) bit će različito ovisno o tome jesu li aktivirane ili nisu **napredne funkcionalnosti za kontrolu upravljanja** unutar tablice [**Tvrtka**](/docs/configurations/tables/general-settings/company).

Ove funkcionalnosti, nedavno razvijene, omogućuju naprednije i fleksibilnije upravljanje kontrolingom (na primjer, omogućujući višedimenzionalnu analizu poslovnih centara i reverzije bilo kojeg centra jedan prema drugom) u odnosu na standardni skup funkcionalnosti, koji je ipak i dalje dostupan ako se odluči ne aktivirati **flag GESTIJA KONTROLINGA** unutar gore spomenute tablice.  
:::

Ovisno o postavkama predloška, bit će prisutan jedan, drugi ili oba odjeljka (u potonjem slučaju s dvije opcije: u slučaju ‘odvojeno upravljanje cdc/cdp’, oba će biti potrebno popuniti istovremeno, inače će procedura dodijeliti iznos samo jednom od odjeljaka, troškovi će ići na centre troška, a prihodi na centre profita).  

Ako se koriste napredne funkcije za kontroling, iako je moguće aktivirati i cdc i cdp u knjigovodstvenom predlošku, valorizacija tih potonjih postaje nepotrebna jer će se valorizirati samo cdc (koji preuzimaju novu definiciju poslovnih centara). Poslovni centri mogu prihvatiti i pozitivne komponente (profita) i negativne komponente (troška) te se mogu fleksibilno prebacivati jedan na drugi prema logikama predviđenim u modulu, u skladu s novim skupom funkcionalnosti.  

Ako je u knjigovodstvenom predlošku aktivirana i opcija **Upravljanje vozilom** bit će prisutna i mreža za valorizaciju troškova/prihoda na poslovnim vozilima (ispod glavne mreže centara troška).
Pozivajući vozilo putem odgovarajuće kombinirane kutije, bit će moguće dodijeliti i detaljne podatke o njemu. 

### POLJA PRISUTNA U GLAVNOJ MREŽI

Ako su aktivirane napredne funkcionalnosti za kontroling, bit će prisutna struktura slična pivot tablici koja grupira, podračun po podračun, dodijele knjigovodstvenih transakcija centrima prema dimenziji analize. Naime, prema gore spomenutim naprednim metodologijama, poslovni centri moraju biti dodijeljeni nekoj dimenziji analize, stvarajući tako podskupove funkcionalne za različite moguće konfiguracije u razvoju analitičkog računovodstva.  

Isti podračun koji prima knjigovodstveni trošak može, dakle, biti istovremeno dodijeljen više centara koji se odnose na različite dimenzije (i stoga "grupe").  

Unutar iste dimenzije, transakcija može biti podijeljena (na primjer, 50%) na dva centra.  

<details>

  <summary>Kliknite za prikaz slike</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

</details>

**Konto / Podkonto / Opis**: polja za unos knjigovodstvenog podračuna koji se dodjeljuje centru. Podaci će biti automatski uneseni ako postoji definisana povezanost u planu konta ili u šifrarniku (pogledajte u nastavku).  

**Projekt**: Ako je u knjigovodstvenom predlošku omogućena oznaka za projekte (bivše Naručnice), ovo polje omogućava dodjeljivanje transakcije nekom projektu. Widget se odnosi na tablicu Projekti (Upravljanje projektima > Projekti > Projekti).

:::danger PAŽNJA:
Ako su aktivirane napredne funkcije za kontroling, projekt se može dodijeliti samo ako je povezan s poslovnim centrom koji je povezan s dimenzijom tipa "Naručnica" ili dimenzijama za koje je aktiviran flag **Omogućiti narudžbu**.  

Ta dimenzija (koja se može imenovati po želji, iako se preporučuje jasno ime, poput "Narudžbe" ili "Projekti") povezuje se s ispravnom vrstom putem flasa prisutnog u tablici **Dimenzije** (Konfiguracija > Tablice > Kontroling > Analitičko računovodstvo > Dimenzija). 
:::

**Centri troška / Opis centara troška**:  polja za unos (putem kombinirane kutije postavljene na polje Centri troška) centra na koji se dodjeljuje trošak (ili profit). Kombinirana kutija odnosi se na tablicu **[Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** (Konfiguracija > Tablice > Kontroling > Analitičko računovodstvo > Poslovni centri).    
**Valuta**: vrijednost preuzeta iz podataka knjigovodstvene transakcije, specificira valutu (koja zatim prikazuje protuvrijednost u eurima) transakcije koja se dodjeljuje.  
**Datum valute**: Datum promjene između valute i eura (preuzet iz knjigovodstvene transakcije).  
**Tečaj**: Vrijednost tečaja između valute i eura (preuzeta iz knjigovodstvene transakcije).   
**Iznos u valuti**:  Iznos u valuti transakcije (preuzet iz knjigovodstvene transakcije u slučaju potpune dodjele transakcije na jedan centar ili definiran putem postotka dodjele u planu konta ili šifrarniku); vrijednost može biti ručno promijenjena kako bi se definirala dodjela centrima prema želji u slučaju raspodjele troška na više centara. Polje se prikazuje u jednom odjeljku i zatim se unosi u odjeljak dugovanja ili potraživanja u euro transakciji prema shemi knjigovodstvenog predloška ili registracije (Tablica Registracija), ali može biti i prisilno postavljeno.  

**Iznos Dugovanja / Iznos Potraživanja**:  Iznos u eurima transakcije (preuzet iz knjigovodstvene transakcije u slučaju potpune dodjele transakcije na jedan centar ili definiran putem postotka dodjele u planu konta ili šifrarniku); vrijednost može biti ručno promijenjena kako bi se definirala dodjela centrima prema želji u slučaju raspodjele troška na više centara.  

**Da Data Competenza / A Data Competenza**: Preuzeti iz knjigovodstvene transakcije (mogu biti prisilno postavljeni). Omogućuju ispravke prema ekonomskoj kompetenciji (odgođeni prihodi i rashodi) i za transakcije centara.  

**Opis Detalja**: Preuzet iz istoimenog polja u redovima knjigovodstvene transakcije.  

#### Unos podataka u odjeljke cdc/cdp može biti automatiziran na dva načina:  

- kroz dodjelu centara u planu konta, na podračune troška/prihoda, valorizirajući postotak dodjele vrijednosti svakog računa na jedan ili više centara. Za više detalja pogledajte **[Plan konta](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**. 

- u šifarnicima klijenata/ dobavljača, (također u postotku), u kojem slučaju svi ekonomski podračuni uneseni u registraciju na ime subjekta bit će valorizirani na isti način i dodijeljeni centru navedenom u šifrarniku.   

Prioritet valorizacije između pravila postavljenog u planu konta i onog definiranog u šifrarniku postavlja se unutar **[parametara općeg računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**.

Dozvoljene su ručne izmjene izračunatih iznosa, kao i izravno unositi ručne redove: u drugom slučaju, postupak će automatski predložiti iznose za pokrivanje, podračun po podračun, ukupnog iznosa pomaknutog u računovodstvu, prikazujući isti raspon datuma kompetencije. Važno je naglasiti da postupci ispravke i integracije također uključuju ispravak transakcija dodijeljenih centru troška/profita.  

Pri spremanju registracije, aplikacija će prikazati obrazac s detaljima razlika u valorizaciji, eventualno blokirajući spremanje ako je to postavljeno u korištenoj uzorku.  

#### Specifične tipke  
> **Izbriši odabrane centre troška**: omogućuje brisanje odabranih centara troška.   
> **Izbriši odabrane centre profita**: omogućuje brisanje odabranih centara profita.   
> **Proširi/smanji**: omogućuje smanjenje prikaza samo na dio centara troška ili profita, i obrnuto, ili proširenje na oba.   

## **6. Projekti**

Kartica **Projekti** prisutna je samo ako je u uzorku postavljen flag *Projekti*.

:::danger PAŽNJA:
ako su aktivirane napredne funkcije za kontroling (flag *Upravljanje kontrolingom* nu tablici Tvrtka), projekt se može dodijeliti samo povezivanjem s poslovnim centrom koji je, zauzvrat, dodijeljen dimenziji tipa Narudžba. 

**Ako su aktivirane napredne funkcije za kontroling, kartica u komentarima NEĆE biti vidljiva**. 

Umjesto toga, vidljivo će biti polje u zaglavlju registracije za dodjelu Projekta (bivša Narudžba) cijeloj registraciji umjesto pojedinačnim stavkama transakcije.  
:::
 
Na ovoj kartici bit će dodijeljeni različiti ekonomski podaci iz računovodstvene registracije za različite projekte (narudžbe prodaje): automatski će svi biti dodijeljeni narudžbi unesenu u zaglavlje, ali korisnik može ručno podijeliti iznose na različite projekte izravno u ovoj sekciji.  

Pri ručnom unosu iznosa, softver će automatski dodijeliti preostalu vrijednost kako bi se uskladio računovodstveni pokret. Predviđeni su kontrolni mehanizmi za usklađivanje iznosa s općim računovodstvom i mogućnost blokiranja spremanja registracije u slučaju razlika (pogledajte '** [parametri](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**' predloška).

## 7. Osnovna sredstva 

Tablica Osnovna sredstva posvećena je upravljanju dugotrajnom imovinom: koristi se za evidentiranje kupnje, povećanja, prodaje i uništenja imovine.  

PAŽNJA: Ova tablica je vidljiva samo ako predložak koji se koristi ima aktiviran flag '**cespiti**' attivo. Inoltre è opportuno impostare, sempre nella causale (tab **[Dettaglio registrazione](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**), il **tipo di operazione** da compiere, tramite la combo box accanto al flag di cui sopra (acquisizione, dismissione, distruzione ecc...). Pertanto sarà opportuno creare diverse causali dedicate ai cespiti ed adatte a compiere le diverse operazioni possibili. 

### Gornja tablica  

Ova tablica posvećena je kodiranju novog kupljenog sredstva ili odabiru postojećeg sredstva za evidentiranje nove operacije. **Za unos novog sredstva** dovoljno je popuniti novi redak, **za odabir postojećeg sredstva**potrebno je koristiti tipku **Odaberi postojeća osnovna sredstva** u traci izbornika kako bi se pozvala već postojeća kartica sredstva i integrirala u novu operaciju.

#### POSTUPAK ZA UNOS:

- Odaberite **Kategoriju osnovnog sredstva** putem padajućeg izbornika (koji je povezan s tablicom '**[kategorija osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-category)**'),    
- odaberite **Vrstu vlasništva** (normalno će biti predloženo 'osnovno sredstvo u vlasništvu' prema zadanim postavkama), (**Napomene o vlasništvu**: polje za unos dodatnih slobodnih napomena)   
- Dodijelite eventualni **Prekod**  (ako želite omogućiti numeriranje unutar ovog precode-a, jer nije moguće imati dvije kartice osnovnog sredstva s istim brojem, osim ako ne koristite prekod koji omogućuje dodjelu nove numeracije povezane s njim) - padajući izbornik je povezan s tablicom '**[Prekod osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-precode)**'  
- Potvrdite automatski dodijeljenu numeraciju za karticu osnovnog sredstva ili postavite željeni broj (također putem kombinacije s prekodom)
- Unesite '**Opis osnovnog sredstva**' (koji će biti prikazan u kartici osnovnog sredstva i koristiti se u svim izvještajima modula, kao što su knjiga osnovnih sredstava i ispisi kartica).   

Svi ovi podaci bit će automatski preuzeti iz postojećeg osnovnog sredstva u slučaju dodatne operacije.  

- Unesite **Iznos** (imovina koja odgovara cijeni operacije, tj. osnovici plus eventualni nedospjeli PDV u slučaju kupnje, ili prodajna cijena u slučaju potpune ili djelomične prodaje);

- Unesite **stopu PDV-a** putem odgovarajućeg padajućeg izbornika.  

Polje **% nedospjeli**. koje se odnosi na postotak nedospjelosti PDV-a obično se automatski popunjava i ovisi o odabranom PDV kodu prema postavkama u tablici **[Stopa i metode PDV-a](/docs/configurations/tables/finance/vat-rates)**, stoga se ne preporučuje ručna promjena.  

**Stanje**: polje koje se automatski postavlja, inicijalno, prilikom kupnje postavlja se na 'nije amortizirano', kasnije, ovisno o nakupljenim amortizacijama, stanje će biti 'djelomično amortizirano' ili 'potpuno amortizirano'. Vrijednost se može ručno postaviti putem padajućeg izbornika povezanog s fiksnom tablicom.  
**Vrsta operacije**: predložena na temelju postavke kontne šifre. Tipično, u slučaju kupnje ili povećanja, vrsta operacije je 'izvorni trošak', dok će za prodaju biti 'Djelomična prodaja' ili 'Potpuna prodaja';    
**Konto / Podkonto / Opis**: podaci se preuzimaju iz kategorije osnovnog sredstva (ako su uneseni u tablicu **[Kategorija osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-category)**);  
**Datum početka aktivnosti**: automatski se predlaže na temelju datuma registracije. Od tog datuma provjerava se godina u kojoj osnovno sredstvo može početi biti amortizirano;     
**Datum završetka aktivnosti**: nije uneseno (ali vizualizacija u knjizi osnovnih sredstava ovisi i o ovom polju);    
**Početak / kraj jamstva**:  informativno polje koje se odnosi na valjanost jamstva.    
**Korišteno**: označava osnovna sredstva koja su kupljena kao rabljena (za ta osnovna sredstva primjenjuje se 100% postotak amortizacije u prvoj godini, a unaprijed amortizacija primjenjuje se samo za jednu godinu).   
**U upotrebi**: (preporučeno kao zadano pri spremanju) označava da je osnovno sredstvo stvarno u upotrebi. Bez ovog oznaka, osnovno sredstvo ne može biti amortizirano.     
**Održavanje**: označava da osnovno sredstvo treba biti uključeno u izračun održavanja.

**Napomene**: polje za bilješke, koje se ne prikazuje u standardnim izvještajima (može se dodati personaliziranjem izvještaja).  

**Porezne statistike**: omogućuje upravljanje donjom tablicom "Objektivni podaci osnovnog sredstva" kako bi se koristila za poreznu amortizaciju.  

**Lažna društva**: koristi se za označavanje osnovnih sredstava koja treba uzeti u obzir u izvještajima o osnovnim sredstvima koji spadaju u ove porezne kategorije, 

**Vrsta odbitka**: omogućuje postavljanje poreznog odbitka za amortizaciju osnovnog sredstva. Kombinirani okvir je povezan s tablicom **[Vrste odbitaka](/docs/configurations/tables/finance/deductibility-types)**.

**J.M.**: combo box che permette di selezionare l'unità di misura (codice) per la quantità (es. Kg, Pezzi...); la **Opis** odabrane jedinice prikazan je u susjednom polju;

**Postotak**: polje vidljivo samo ako je unutar obrasca **[Parametri Osnovnih Sredstava](/docs/configurations/parameters/finance/fixed-assets-parameters)**  aktiviran flag 'Postotak po pojedinom Osnovnom Sredstvu'. Omogućuje definiranje specifičnog postotka amortizacije za unos osnovnog sredstva, koji će imati prioritet u odnosu na onaj definiran unutar odgovarajuće kategorije osnovnih sredstava. Polje je prikazano unutar obrasca osnovnog sredstva.  

**Vrsta Amortizacije**: kombinirani okvir koji omogućuje odabir vrste (koda) objektivne amortizacije (tehnička i ekstra-knjigovodstvena amortizacija) koja će se primijeniti; **Opis** odabranog koda prikazan je u susjednom polju; kombinirani okvir je povezan s tablicom **[Vrste Objektivne Amortizacije](/docs/configurations/tables/finance/objective-amortization-types)** (Vrsta Amortizacije).

**Pri spremanju retka mogu se pojaviti, ovisno o slučaju, različite poruke**:

- "Osnovno sredstvo ima vrijednost manju od ___. Želite li ga amortizirati 100%?": Kategorija osnovnog sredstva postavila je vrijednost u polju ‘ukupni limit amortizacije’ i unesena vrijednost za novo osnovno sredstvo je manja. Ovo je slučaj za osnovna sredstva čija je vrijednost manja od 516 € (stari milijun lira), koja prema poreznim propisima mogu biti odmah amortizirana u 100% iznosu u godini nabave. Odabirom opcije Da (Yes) izvršit će se amortizacija od 100% u prvoj godini, ažurirajući flag u zaglavlju kartice osnovnog sredstva kako bi se specifično obradila u automatskom postupku amortizacije;  

- "Želite li povezati parcijalnu prodaju s postojećom imovinskom operacijom?": Causala je za parcijalnu prodaju, a kategorija osnovnog sredstva nema flag ‘incrementalno’: U ovom slučaju, prikazat će se poruka za dodelu iznosa prodaje na specifičnu imovinsku operaciju osnovnog sredstva. Na primjer, za osnovno sredstvo ‘neincrementalno’ svaka pojedina operacija se upravlja na razini amortizacija s vlastitim vijekom trajanja: parcijalna prodaja (u odnosu na cijelo osnovno sredstvo) zapravo može biti tretirana kao potpuno prodana pojedinačna operacija (na primjer: imam računalo, povećavam ga skenerom, a zatim prodajem samo skener).  

**Odabirom Da (Yes)** prikazat će se pomoć (popup) za pretragu koje **komponente** osnovnog sredstva želite prodati, omogućujući odabir putem tipki *Pretraga* i *Odaberi*  

Posebno, napominjemo da su različite komponente lako prepoznatljive jer se odnose, unutar pomoći, na polje **Progresivni broj** (*Progrg*.) kao i unutar kartice osnovnog sredstva.  

### Tablice niže 

Sadržaj se odnosi na odabrani gornji redak.  

#### IMOVINSKE OPERACIJE:   

(dodaje se novi redak za svaku operaciju učitanu u gornjoj mreži).  

**Datum Operacije**: Datum kada se zabilježi kretanje u knjizi osnovnih sredstava;  

**Progr**: Progresivni broj retka operacije;  

**Izvorni trošak**: Polje se popunjava samo operacijama koje koriste tip operacije "izvorni trošak" s vrijednošću nabave (odgovara osnovnoj cijeni + eventualni neoduzeti PDV);  

**Količina**: Odnosi se na količinu robe koju treba unijeti;  

**Neoduzeti porez**: Sadrži vrijednost eventualnog neoduzetog PDV-a, koji se dodaje na trošak kako bi se odredila početna knjigovodstvena vrijednost (početni trošak). Vrijednost se automatski popunjava na temelju vrijednosti unesene u polje "Iznos" u gornjoj mreži u vezi s odabranim PDV kodom u susjednom polju (ako se predviđa neoduzimanje);

**Neamortizabilni iznos**: Ako je u odgovarajućoj kategoriji osnovnog sredstva uneseno polje "Postotak amortizabilnosti", polje će se automatski popuniti; iznos se oduzima od iznosa za izračun amortizacije, npr. Postotak amortizacije = 50%, Trošak povijesti 30.000;  

Amortizacija 30.000 - 15.000 = 15.000 x 3%; Amortizacija će se izračunavati dok fond ne dosegne 15.000;

**Preostali neamortizabilni iznos**: ručno upravljan, s obzirom na prethodni primjer polje će prikazivati amortizaciju 30.000 * 3%, ali dok fond ne dosegne 15.000;

**Već amortizirano**: Vrijednost je vidljiva samo ako je izračunata amortizacija, ali još nije knjižena (nakon knjiženja, iznos će se zbrojiti u "Knjižovodstvenu vrijednost" i u fond);  

**Fondo za administrativnu obradu (redovno) / Anticipirano  / Anticipirano**: polja prihvaćaju, ovisno o vrsti amortizacije (obična, anticipirana ili usporena), zbir obračunatih rata amortizacije;  

**Fondo za poreznu administraciju**: popunjava se ako je aktiviran oznaka 'Fiskalni' u kategoriji osnovnog sredstva, ili može biti aktivirana na razini pojedinog retka u kartici "Amortizacija";

**Alienacija**: prihvaća prodajnu vrijednost imovine i automatski se popunjava putem polja 'Iznos' u gornjoj tablici ako je Tip Transakcije 'Alienacija'. Na temelju ove vrijednosti i vrijednosti kapitalne dobitke ili gubitka, ažurirat će se povijesna vrijednost imovine koja se treba ispisati iz knjige imovine;;

**Parcijalna alienacija**: prihvaća prodajnu vrijednost imovine i automatski se popunjava putem polja 'Iznos' u gornjoj tablici ako je Tip Transakcije 'Parcijalna alienacija'. Na temelju ove vrijednosti i vrijednosti kapitalne dobitke ili gubitka, ažurirat će se povijesna vrijednost imovine koja se treba ispisati iz knjige imovine;  

**Kapitalna dobit**: prihvaća vrijednost kapitalne dobiti od prodaje imovine i sudjeluje u izračunu povijesne vrijednosti prodane imovine;

**Kapitalna dobit reinvestirana**: nije aktivno;

**Revalorizacija**: povećava povijesni trošak u skladu sa zakonom o revalorizaciji; 

**Kapitalni gubitak**: prihvaća vrijednost kapitalnog gubitka od prodaje imovine i sudjeluje u izračunu povijesne vrijednosti prodane imovine.  

**Uništenje**: obično se popunjava s nulom (umjesto polja 'Alienacija' ili 'Parcijalna alienacija'), može se dodijeliti vrijednost za posebne slučajeve (na primjer, vrijednost otpisanog otpada);  

**Izvorni trošak prodane imovine**: povijesna vrijednost koja se prodaje u okviru operacije s Tipom transakcije 'Alienacija' ili 'Parcijalna alienacija' izračunava se na temelju podataka unesenih u polja Alienacija, Parcijalna alienacija, (ili Uništenje), Kapitalna dobit i Kapitalni gubitak. Polje Knjigovodstvena vrijednost bit će, paralelno, ispravljeno negativno za iznos koji je određen na temelju izvorne vrijednosti prodane imovine umanjene za akumulirani amortizacijski fond.  

**PDV**: nije aktivno u Italiji;

**Usklađivanje**: nije aktivno u Italiji;

**Vrijednost u eurima**: protuvrijednost u eurima ako je vrijednost izražena u drugoj valuti ili ako je valuta društva različita od eura;

**Podkonto**: podračun dobavljača (kupovina) ili kupca (prodaja) na razini retka koji se odnosi na pojedini sastavni dio (mogu biti kupljeni ili prodani različitim subjektima);  

**Datum dok./Br. dok./PDV broj**: reference na račun za kupovinu ili prodaju koji odgovara retku transakcije;  

**Napomene**: slobodne napomene po retku;  

**Progr. prodaje**: u slučaju parcijalne alienacije prikazuje redni broj odabrane stavke za prodaju odgovarajućeg sastavnog dijela;  

**Ispisano**: aktivira se ako je konačno ispisana knjiga imovine za dotičnu stavku.  

#### EKONOMSKI POSLOVI:

(uglavnom se ne koristi), služi za povezivanje s karticom imovine troška koji se ne kapitalizira (jer nije dugoročni).  

Podaci sadržani u ovoj kartici popunjavaju se ako u gornjoj tablici bude unesena stavka s Tipom transakcije 'Ekonomski poslovi'.  

Polja su slična onima u kartici Imovinske transakcije. 

#### AMORTIZACIJE:

Obično se ne koristi unutar računovodstvenog zapisivanja, jer se amortizacija lakše upravlja putem odgovarajuće automatske procedure unutar knjiženja usklađenja, ili, za pojedinu imovinu, unutar kartice imovine (u odgovarajućoj tablici koja replicira polja prisutna u komentiranoj kartici).  

U slučaju da se želi, unutar zapisivanja početnog unosa, izvršiti amortizacija (što se odnosi na karticu imovine, računovodstveni dio bit će upravljan u kartici Zapis), potrebno je pozvati postojeći imovinski predmet za amortizaciju putem tipke **Odaberi postojeći imovinski predmet** koji će prikazati odgovarajući redak u gornjoj tablici, osigurati da je Tip transakcije *Obično amortiziranje*, ako već nije predviđeno u postavkama predloška, unijeti u polje **Iznos**vrijednost godišnje amortizacije koju treba zabilježiti, zatim u kartici *Amortizacije* označiti godinu amortizacije (polje **Godina**) i ručno ispuniti obavezna polja u tablici:  

**Progressivno**: omogućuje odabir putem kombiniranog okvira reda kartice imovine za amortizaciju (jedini redak ako nema dodatnih komponenti ili povećanja imovine);

**Godina**: Potvrditi godinu amortizacije;

**Tip amortizacije**: Obično, unaprijed, ili dekelerirano;  

**Konto / podkonto / opis kvote amortizacije**: obično se automatski poziva prema kategoriji imovine reda učitanog u gornjoj tablici;  

**Konto / podkonto / opis fonda amortizacije**: obično se automatski poziva prema kategoriji imovine reda učitanog u gornjoj tablici;

**Osnovica**: vrijednost imovine (povijesna) na temelju koje se izračunava amortizacija primjenom **Postotka** (ili stope amortizacije);

**Dani posjedovanja**: na temelju kojih se izračunava amortizacija ako su u postavkama odgovarajuće kategorije imovine odabrani dani (s odgovarajućom tipkom);  

**Trošak**: rezultat izračuna osnovica * postotak * dani posjedovanja / 365 (može se ručno podesiti).  

**Računovodstveno**: flag "kontabilizirano", dodjeljuje registraciji status kontabilizirane i sprečava njezino prebrisivanje; bez ove tipke kasnija amortizacija neće moći biti obrađena.

**Porezno**: flag označava amortizaciju za porezne svrhe i povećava porezni fond u odgovarajućem polju, odvojenom od civilnog / računovodstvenog.

**Amortizacija odbitna / Amortizacija neodbitna**: polja se automatski popunjavaju s odbitnim i neodbitnim iznosima amortizacije, ako je u **[kategoriji imovine](/docs/configurations/tables/finance/fixed-asset-category)** postavljeno polje Tip odbitnosti, i zauzvrat povezano s tablicom **[Vrste odbitnosti](/docs/configurations/tables/finance/deductibility-types)**  gdje se definira postotak odbitnosti. Inače se mogu ručno popuniti.

U kartici Imovinske transakcije tip transakcije Obično amortiziranje već će ažurirati redak knjige imovine koji povećava fond amortizacije i smanjuje neto računovodstvenu vrijednost imovine za isti iznos.  

#### UPRAVLJANJE PODACIMA OBNOVLJIVIH IMOVINSKIH PREDMETA:

Ova kartica omogućuje upravljanje podacima korisnim za tehničku (izvanračunovodstvenu ili poreznu) amortizaciju, koji se mogu obrađivati paralelno s računovodstvenom amortizacijom.  

Prvo, unutar tablice **[Kategorije imovine](/docs/configurations/tables/finance/fixed-asset-category)** mora biti aktivirana odgovarajuća tipka za prijem podataka unutar kartice imovine.  

Zatim, unoseći računovodstveni zapis koji se odnosi, na primjer, na kupnju imovine, podaci će se automatski prikazati u ovoj kartici (koji se zatim mogu neovisno mijenjati od službenih računovodstvenih podataka) korisni za tehničke amortizacije.  

Polja u ovoj kartici zapravo repliciraju ona koja se nalaze u kartici "Imovinske transakcije". Kartica "Amortizacije", s druge strane, koristi se isključivo za računovodstvene / civilne upise, tako da se upravljanje tehničkim (izvanračunovodstvenim) amortizacijama može izvršiti samo ulaskom u karticu imovine (Administracija > Imovina > Imovina > dvostruki klik za ulazak).  

#### CENTRI TROŠKOVA - PROJEKTI  

Ova kartica (**vidljiva samo kada NISU aktivirane napredne funkcije za Kontroling**) upravljane flagom *Upravljanje kontrolingom * u tablici Društvo, rezervirana je za unos centra troška / profita (danas centar poduzeća) i projekta (danas Projekt) koji se povezuju s karticom imovine koja će biti kreirana s računovodstvenim zapisom koji se unosi.  

Konkretnije, centar koji će biti povezan s karticom imovine uz zapis (a koji se može unijeti i ručno izravno u karticu, u kartici 'Detalji' iste) predstavlja iznimku, specifičnu za tu imovinu, u odnosu na podatke unesene u kategoriju imovine kojoj pripada kartica unesena u tablici Kategorije imovine.

**Uneseni centar troška bit će vrednovan u trenutku izračuna (od strane automatskog postupka) amortizacije.**

:::tip NAPOMENA:
Ako su aktivirane napredne funkcije za kontroling, upravljanje centrom poduzeća i projektom na koji će se povezati kvote amortizacije bit će definirano u posebnoj kartici **Amortizacija za controling** unutar kartice imovine. 
:::

**Cdc**: kombinirani okvir potreban za odabir centra, povezan s tablicom **[Centri poduzeća;](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)**

**Opis**: Opis odabranog centra putem prethodnog polja;

**Postotak**: postotak dodijeljen centru unesenom u redak koji se koristi (na primjer, ako je cijeli trošak dodijeljen tom centru, unosi se 100%, ako se trošak za amortizacijsku kvotu dijeli na dva centra, unose se dva retka, svaki s podjelom od 50%).  

**Mreža rezervirana za unos projekta** ne ažurira se i ne povezuje s poljem 'Projekt' u zaglavlju zapisa i/ili kartici 'Projekti' (koji su posvećeni upravljanju običnim operativnim troškovima, a ne dugoročnim troškovima). Naime, taj grid je posvećen, kao i za centre poduzeća, za označavanje projekta koji će biti unesen u karticu imovine i na koji će se dodijeliti kvote amortizacije.

**Projekti**: widget za unos projekta (dvostruki klik otvara pomoć za pretragu, ili početak pisanja u polje aktivira brzu pretragu); polje je povezano s tablicom Projekti.  

**Postotak**: postotak dodijeljen projektu unesenom u redak koji se koristi (na primjer, ako je cijeli trošak dodijeljen tom projektu, unosi se 100%, ako se trošak za amortizacijsku kvotu dijeli na dva projekta, unose se dva retka, svaki s podjelom od 50%).  

## POSTUPAK ZA PRODAJU IMOVINE

- Unesite odgovarajući računovodstveni uzrok pravilno konfiguriran s funkcijom Imovina i ispravnim tipom transakcije, na primjer, potpuna prodaja.  
- Ispunite zaglavlje zapisa kao i obično s podacima o kupcu i fakturi, uključujući ukupni iznos.  
- U kartici Imovina koristite naredbu **odaberi postojeći imovinski predmet** kako biste pozvali karticu prodane imovine.  
- U gornjoj tablici unesite u polje **Iznos** osnovicu od vrijednosti prodaje dogovorenu s kupcem (unesite nulu ako je imovina darovana ili uništena).  
- U donjoj tablici vrijednost akumuliranog fonda amortizacije automatski će biti stornirana i, razlika, automatski će ispuniti polje za plusvalenciju ili minusvalenciju.
- Ako je predložak pravilno konfiguriran (preporučuje se standardni uzrok), računovodstvena sekcija bit će ispravno popunjena podacima o PDV-u i računovodstvenim podacima, uključujući storniranje povijesnog troška, fonda amortizacije i evidentiranje plus/minusvalencije.

## DRUGO

U slučaju parcijalne prodaje (uvijek za imovinu ‘povećanu' ili u slučaju parcijalne prodaje koja nije povezana za nepovećanu imovinu), korisnik mora dopuniti redak parcijalne transakcije sa storniranim iznosima fondova (s negativnim predznakom) i odrediti odgovarajući minusvalenciju ili plusvalenciju: ti će se iznosi zatim morati unijeti i unutar kartice ‘zapis’ za opću računovodstvenu evidenciju. U drugim slučajevima, aplikacija će ispravno ažurirati karticu imovine, unijeti transakciju i unutar sekcije PDV-a zapisa, te ažurirati odgovarajući zapis. U slučaju prodaje, posebno, ako su podkonti za minusvalenciju i plusvalenciju kodirani kako unutar uzroka tako i u računovodstvenim parametrima, bit će dodani i odgovarajući redovi za prodajnu transakciju (jedan red za storniranje ukupne aktive, jedan ili više redova za storniranje amortizacijskih fondova i razlika za minusvalenciju/plusvalenciju).  

Dodatne operacije koje se mogu aktivirati u kartici imovine: prilikom unosa novog imovinskog predmeta moguće je podijeliti ga u N različitih kartica. Naime, može biti slučaj da je kupnja povezana s više identičnih imovinskih predmeta, kao što je 5 jednakih računala: korisnik, umjesto da ručno unosi 5 imovinskih predmeta, može unijeti jedan za ukupnu vrijednost, a zatim ga automatski podijeliti u 5 jednakih dijelova pomoću odgovarajuće tipke (dodatni izbor mogao bi biti stvaranje jedne kartice imovine koja se sastoji od 5 imovinskih predmeta: ovo, s jedne strane, pojednostavljuje situaciju u knjizi imovine, no s druge strane stvara određene poteškoće u upravljanju prodajama imovine jer će se morati ručno upravljati kao parcijalne prodaje).

Moguće je obrisati uneseni redak imovine u gornjoj tablici: u tom će slučaju biti prikazan poruka za potvrdu brisanja i anagrafske kartice imovine, čiji je zadani odgovor ‘Ne’ (poruka se također prikazuje prilikom zatvaranja zapisa bez spremanja). Preporučuje se posebna pažnja prilikom obrade poruke kako se ne bi ostavile prazne kartice imovine unutar baze podataka.

#### Specifične tipke
> **Odaberi postojeći imovinski predmet**: omogućuje odabir već postojećeg imovinskog predmeta i unos nove transakcije u okviru njega.    
> **Izbriši imovinski predmet**: omogućuje brisanje odabranog imovinskog predmeta.  
> **Izbriši odabrane podatke iz tablice vrste amortizacije**: omogućuje brisanje odabranog retka unutar tablice (donje) koja se nalazi u kartici Amortizacije.  

## **8. Parametri**

Kartica **Parametri** uvijek je prisutna u računovodstvenoj evidenciji i sadrži niz informacija i parametara koji su korisni, ali nisu nužni za unos zapisnika.  

**Status zapisivanja**: *definitivno* ili *privremeno* za računovodstveni zapis u upotrebi: zapis s statusom ‘definitivno’ i dalje će biti moguće mijenjati (osim u uzroku i referentnoj valuti) sve dok ne bude definitivno ispisana obavezna fiskalna knjiga ili dok ne bude korištena u automatskom zatvaranju računa. Korištenje statusa ‘privremeno’ (koji uklanja i onemogućava porezni protokol te numerira zapis negativno počevši od -1000) može se koristiti za evidentiranje računa za plaćanje unaprijed ili drugih vrsta periodičnih transakcija s budućim manifestacijama (poput odgođenih naknada). Ulazak u zapis i ponovno postavljanje statusa definitivan automatski će ponovno dodijeliti broj zapisa i važeći porezni protokol za postavljeni datum zapisivanja (uzimajući u obzir njegovu progresivnost). Podsjećamo da postoji postupak za upravljanje privremenim zapisima koji omogućava masovno prebacivanje skupine odabranih privremenih zapisa u status definitivan.

Sljedeći flagovi proizlaze iz računovodstvenog uzroka:  

**Grupiraj zapisivanje PDV-A** (preporuča se ostaviti uvijek aktivnim) grupira ili ne u dnevniku redove IVA koji se odnose na isti kontni podračun;  

**Automatsko izračunavanje centara troškova, prihoda i projekata**:  može biti od interesa za neke vrste ručnih zapisa, kod kojih je korisnik obično vezan za ručno upravljanje karticama centara troškova/projekata (cdp/cdc): ostavljanjem flag-a uključenim, aplikacija će uvijek resetirati te kartice svaki put kada se izmijeni izvorni podatak u knjizi dnevnika, što može dovesti do gubitka svih ručnih unosa koji su prethodno napravljeni. Ovaj automatizam, čak i ako flag nije uključen, i dalje će se primijeniti prilikom unosa zapisa: odnosi se na ulazak u izmjenu istog.

**Na crnoj listi**: (ZASTARJENO) omogućuje upravljanje posebnim slučajem nabava izvan EU (s poslovnim razlogom koji nije podliježe PDV-u) koji treba biti sažet u izjavi o transakcijama s zemljama s povlaštenim poreznim režimom, povezujući trenutni zapis s PDV-om iz carinskog DDT-a iz kojeg se preuzimaju podaci za prijavu.  

**Datum / Broj povezane registracije**: Koristilo se za prijavu transakcija s dobavljačima koji su na crnoj listi, povezujući Dokument o dostavi robe s registracijom dobavljača na crnoj listi kako bi se preuzeli podaci za prijavu.

**Datum / Broj povezane kreditne note**: zastarjeli podatak; u prodaji, kada se kreira kreditna nota, može se unijeti koja se faktura odnosi na dokument:    

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/parameters-tab/image02.png)

Na slici: polje za unos reference računa unutar obavijesti o kreditiranju.

Kada se knjiži obavijest o kreditiranju, Fluentis pokušava identificirati registraciju povezanu s tim računom kako bi automatski ispunio ovu povezanost i na razini računovodstva (ako unosite obavijest o kreditiranju ručno, tada možete također ručno postaviti ova polja). Koristilo se za spesometar (prije 2017. godine), kada je postojao limit od 3000 eura, kako bi se ispravile obavijesti o kreditiranju iz računa i ne prijavljivale transakcije. Danas više nije u upotrebi.

**AUDIT TRAIL**:

Sekcija posvećena sustavu za praćenje aktivnosti korisnika i provjeru izmjena podataka integriranog u poslovni sustav "Audit Trail".  

**Datum kreiranja / Ime**: prikazuje datum i ime korisnika koji je kreirao trenutnu računovodstvenu registraciju;  

**Datum posljednje izmjene / Ime**: prikazuje datum posljednje izmjene i ime korisnika koji je izmijenio trenutnu računovodstvenu registraciju;  

**Datum validacije / Ime**: prikazuje datum i ime korisnika koji je validirao trenutnu računovodstvenu registraciju. Polje mora biti aktivirano promjenom stanja (koje se mora konfigurirati kada je potrebno), a koje će postaviti korisnika i datum validacije. Kada je polje ispunjeno promjenom stanja, registracija može biti označena kao nepodložna daljnjim izmjenama.
  
**Partnerov račun**: (ZASTARJELO) polje za unos (putem widgeta za pretraživanje računa) podračuna koji je već kodificiran u bazi podataka; korisno za pohranu, na primjer, imena stranog dobavljača u DDT (dobavnici) za carinske postupke, koji se obično unosi s referencom na bazu podataka s generičkim podacima za subjekt "carina" (to je zbog izmjena u zakonodavstvu vezanim uz spesometar prema kojem od 2018. godine nije bilo dopušteno prosljeđivanje podataka carine koja često nema porezne reference i koristila se umjesto OIB-a generički unos XX-99999999, gdje XX označava međunarodni ISO kod države subjekta).  

**Donja tablica** prikazuje eventualnu automatsku registraciju povezanu s trenutnom: svaki put kad se prva registracija izmijeni, sustav će nastaviti usklađivati drugu prema logici automatskih uzoraka.  

## 9. Grupiranje stavki

Upravljanje grupiranjem stavki omogućuje kreiranje, u fazi otvaranja stavki ili naknadno, grupa stavki (grupa je neka vrsta spremnika unutar kojeg se, vizualno, nalaze pojedinačne stavke).

Te grupe mogu biti potom manipulirane agregiranjem ili disaggregiranjem stavki. Tako, u fazi plaćanja, moguće je fleksibilno dodijeliti samo plaćanje na temelju grupa i njihovih povezanih detaljnih stavki.

Ovaj tip upravljanja, očito specifičan, pogoduje onima koji rade u sektorima poput velike distribucije ili maloprodaje, ili bilo kome tko upravlja velikim brojem malih iznosa i visokim brojem stavki, gdje je povezanost između izdanih ili zaprimljenih faktura i njihovih povezanih uplata podložna velikoj fleksibilnosti, te manje stroga u usporedbi s uobičajenom operativom.

Ova funkcionalnost, kada je postavljena, ne može se koristiti zajedno s uobičajenim upravljanjem stavkama i uplatama: odabir između jednog ili drugog načina upravljanja mora biti napravljen unaprijed, pri postavljanju uzoraka računovodstvenih transakcija, s jasno definiranim karakteristikama ove vrste upravljanja.

**UPRAVLJANJE PREDLOŠKOM I REZULTAT U ZAPISU**:

Predložak za otvaranje dospijeća plaćanja (na primjer za "Izdavanje fakture" ili "Faktura dobavljača"): aktivirati uobičajene oznake za otvaranje dospijeća plaćanja (i eventualno za zatvaranje i kompenzaciju), dodajući oznaku Kreiraj grupu.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image01.png)

U zapisivanju poslovnog događaja, uz ovako modificirani predložak, prilikom unosa zapisa neće biti primjetnih razlika, a grupa dospijeća plaćanja neće biti vidljiva, no ona će biti kreirana s istim referencama kao i dospijeće plaćanja koje je u njoj sadržano.  

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image02.png)

Za izvršavanje izmjena na grupi, kao što je spajanje drugih dospijeća plaćanja ili raspodjela dospijeća plaćanja, potrebno je raditi unutar ekrana **[Raspodjela dospijeća plaćanja](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping)**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image03.png)

Ovdje će korisnik moći kreirati, za ova dospijeća plaćanja, jednu ili više novih grupa dospijeća plaćanja (koje će preuzeti broj i datum prema broju i datumu dokumenta dospijeća plaćanja koja ih stvara). Upravljanje ovim operacijama vrši se korištenjem kontekstualnog izbornika koji se pojavljuje desnim klikom miša na svako dospijeće plaćanja. 

mark: za selektiranje više dospijeća plaćanja/grupa

kreiraj novu grupu: za kreiranje novih grupa;  

de-grupiraj: za odvajanje dospijeća plaćanja iz grupe

nadoknada:  za kreiranje nadoknada i za zatvaranje grupe,

detalji: za prikazivanje detalja pojedinačnog dospijeća plaćanja;  

podijeli dospijeće plaćanja: za podjelu dospijeća plaćanja unutar grupe.

Vizualizacija grupa odvija se prema odabranom podkontu u gornjoj tablici.  

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image04.png)   ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image05.png)

Pomoću drag and drop metode, dospijeća plaćanja se mogu premještati iz jedne grupe u drugu.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image06.png)

NAPOMENA:

U slučaju automatskog knjiženja faktura iz modula nabave ili prodaje, u tablicama **Vrste faktura** (U **[nabavi](/docs/configurations/tables/purchase/purchase-invoices-type)** i **[prodaji](/docs/configurations/tables/sales/invoices-type)**) postoji sličan flag za automatsko knjiženje faktura.

Predložak za zatvaranje dospijeća plaćanja: (na primjer, "Plačanje gotovinom") aktivirati flag ‘Grupiraj dospijeća plaćanja' che rende visibile la scheda **Plaćanja grupa**.

Obavezno je odabrati odgovarajući tip plaćanja u padajućem izborniku. 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image07.png)

U ovom trenutku, operativni postupak za korisnika u zapisima uplata/isplata značajno se razlikuje od uobičajene obrade dospijeća plaćanja: korisnik će započeti unos u kartici **[Zapisi](/docs/finance-area/ledger-records/records/ledger-record)**, izravno unoseći iznos za uplatu/isplatu (popunjavanjem sekcija prve bilješke), a aplikacija će automatski stvoriti dospijeće plaćanja na temelju dugovanja/plaćanja, koje korisnik može kasnije ručno dodijeliti (ako želi) određenoj grupi u kartici 'Plaćanja grupe'.  

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image08.png)

Aplikacija će generirati odgovarajuće međusobne uplate za svako od tih dospijeća plaćanja, te se koristi samo izvještaji i maske za prikazivanje/ upravljanje grupama kako bi se osigurao jasan pregled duga. Kada saldo grupe postane 0, grupa će automatski preći u status 'zatvoreno'.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image09.png)

**NAPOMENA: Za vizualizaciju grupiranja, odaberite red u gornjoj tablici**

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image10.png)

Izravno u kartici **Plaćanja grupa** korisnik može izvršiti daljnje izmjene kao što su de-grupiranje ili stvaranje novih grupa.

### VIDEO TUTORIALI

:::important Pogledajte također
[**VIDEO TUTORIALI O ZAPISIMA**](/docs/video/finance/intro)
:::