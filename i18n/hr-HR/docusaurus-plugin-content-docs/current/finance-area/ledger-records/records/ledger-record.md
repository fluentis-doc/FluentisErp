---
title: Novi zapis glavne knjige 
sidebar_position: 1
---
Obrazac se otvara putem izbornika **Administracija > Zapisi glavne knjige > Zapisi > Novi zapis** klikom na tipku **Novi** koji se nalazi u obrascu [Pretraživanje računovodstvenih zapisa](/docs/finance-area/ledger-records/records/search-ledger-records).

## *Kako kreirati računovodstveni zapis za Nabavu ili Prodaju*

<details>
 
<summary>Klikni za osnovne korake</summary>
 
1. **Unesi obavezne podatke u zaglavlje**: *Datum knjiženja, ako je različit od današnjeg*, ***Računovodstveni predložak***, *Konto (kupac ili dobavljač)*, *Broj* i *Datum dokumenta* *Ukupno zapisnika*.  
 
2. **Unesi podatke o PDV-u**: Vrsta PDV-a, konto i stopa PDV-a (ako nisu već predloženi iz evidencije kupca/dobavljača)
 
3. **Upravljanje datumima *ekonomskih/poreznih obveza***: ako je potrebno, osobito za usluge, kako bi se automatski generirali obračuni i odgođeni troškovi ili prihodi.
 
4. **Provjeri i izmijeni odjeljak dnevnika knjiženja**: ako je potrebno, možete promijeniti konta ili podijeliti trošak ili prihod dodajući nove redove.
 
5. **Provjeri odjeljak sažetka** provjeravajući da li su unosi uravnoteženi.
 
6. **Provjeri ili upravljaj karticom Dospijeća plaćanja**: ako podaci o klijentima ili dobavljačima nisu prikazani u osnovnim podacima, unesite podatke vezane uz vrstu i način plaćanja kako biste upravljali otvorenim stavkama na način koji je usklađen s računovodstvenim unosima.

7. **Prihodi ili isplate**: bit će obrađeni putem **kartice Plaćanja** koja će biti korištena **prvo** - pretražujući stavke koje treba zatvoriti pomoću tipke **Traži dospijeća plaćanja** i dvostrukim klikom na stavke koje treba zatvoriti. Na taj će način podaci o klijentima ili dobavljačima koji su plaćeni ili naplaćeni biti automatski uneseni u odjeljak **Dnevnik knjiženja**.

8. **Jednostavni unosi dnevnika**: poput običnih financijskih *transfera* mogu se unijeti zapisi i izravno u odjeljak Dnevnik knjiženja, bez potrebe za odgovarajućim knjiženjem u gornjoj tablici PDV dokumenata.

9. **Ostale specifične sekcije koje nisu obavezne**: ovisno o parametrima aktiviranim u računovodstvenom predlošku, prikazat će se dodatne specifične sekcije, poput **analitičkog računovodstva**, Imovine, **Intrastat izvještaja**, provizija za **Agente** koje je moguće upravljati.
 
</details>


Računovodstveni unos, a samim time i obrazac za njegov unos, sastoji se od sljedećih elemenata:

- **Zaglavlje** ("*Header*" koje odgovara gornjem dijelu obrasca) koje sadrži jedinstvene elemente za knjiženje, kao što su:

    > Datum

    > Broj

    > Ukupno

    > Knjiga računa i referentni broj PDV-a

    > Ostalo
    
    > **Računovodstveni predložak** koji, ovisno o postavkama i parametrima, aktivira dodatne elemente navedene u nastavku.

- **Podnožje** ("*Footer*") obrasca koje sadrži opći opis samog knjiženja, koji se upisuje u Knjigu dnevnika, uz nekoliko ukupnih podataka i kontrolu neravnoteže između sekcija Dugovne i Potražne strane.  
- Kartica **Zapis** koja sadrži dvije pod-sekcije: ***Podaci PDV-a*** (ovisno o predlošku) i ***Dnevnik knjiženja*** u kojoj su prikazana računovodstvena knjiženja.  
- Kartica **Dospijeća plaćanja**, ako je aktivirana, za otvaranje otvorenih stavki koje se evidentiraju u pregledu dospijeća.
- Kartica **Plaćanja**, ako je aktivirana, upravlja zatvaranjem otvorenih stavki.
- Kartica **Analitika**, ako je aktivirana, upravlja poslovima centara unutar tvrtke (centri troškova / profita).  
- Kartica **Intrastat**, ako je aktivirana, omogućuje unos podataka za naknadnu automatsku izradu Intrastat popisa.  
- Kartica **Osnovna sredstva**, ako je aktivirana, omogućuje upravljanje kupnjom ili prodajom dugotrajne imovine/osnovnih sredstava.  
- Kartica **Provizije**, ako je aktivirana, omogućuje upravljanje kreiranjem i pohranjivanjem provizija agenata.  
- Kartica **Projekti**, ako je aktivirana, omogućuje praćenje poslovnih projekata (ugovora).  
- Kartica **Grupiranje stavki**, ako je aktivirana: posebna metoda za upravljanje otvorenim stavkama.  
- Kartica **Parametri** s dodatnim informacijama o knjiženju. 

## **1. Zaglavlje (Header)**

**Datum knjiženja**: prilikom novog knjiženja postavlja se na današnji datum sustava, ali ga je moguće promijeniti unaprijed ili unazad u vremenu, pod uvjetom da je poštovan kronološki redoslijed PDV protokola i eventualni već tiskani konačni periodi, tj. izvještaji iz računovodstva. 

<details>

  <summary>Dodatni detalji (klikni za proširenje)</summary>
  
  Važno je napomenuti da je ovaj datum ključan jer nije potrebno provoditi promjenu poslovne godine: 

Od datuma knjiženja aplikacija traži računovodstvene parametre za referentnu godinu (identificirajući u kojem se rasponu datuma poslovna godina nalazi) i na temelju toga preuzima druge raspone datuma kontrole (datumi ekonomske obveze i datumi perioda u liniji).

Ovaj datum je osnovni za ispis dnevnik knjiženja i izvoda iz računovodstvenih konta.

Ako se pritisne tipka za stvaranje *Novog unosa* unutar postojećeg unosa u obradi, moguće je postaviti, putem **parametara unosa**  (u traci izbornika), da se ovo polje također ponudi u tom novom unosu.

</details>


**Datum**: to je referentni datum za godišnje računovodstveno izvješće: **obično je uvijek jednak datumu knjiženja**. 
Može se koristiti za knjiženje usklađenja bilance i odgovarajuće unose za zatvaranje/otvaranje računa, koji se mogu postaviti kao datum knjiženja u razdobljima odobravanja i zatvaranja bilance (npr. travanj ili lipanj sljedeće godine), ali će biti postavljeni s *datumom obračuna* 31/12 – 01/01. 
Ovo je također kako bi se omogućilo unos u razdoblje koje je vjerojatno već konačno ispisano u Dnevniku knjiženja. 

:::important[Pažnja]
Ovaj datum NE može se koristiti za evidentiranje računa koji se očekuju na kraju godine. **Preporučuje se da ga uvijek ostavite jednakim datumu knjiženja**: u računovodstvu postoje izvještaji koji rade prema datumu knjiženja, drugi prema datumu ekonomske obveze (obračuna), a neki omogućuju korisniku da filtrira prema oba datuma, pri čemu bi se jasno dobili različiti rezultati ovisno o primijenjenim filtrima.  
:::


U **parametrima unosa** moguće je postaviti da ovaj datum bude automatski usklađen s datumom knjiženja;

**Broj knjiženja**: dodjeljuje se prema postavkama tablice [**Numeracija knjiženja**](/docs/configurations/tables/finance/posting-ledger-numeration)

<details>

  <summary>Daljnji detalji (klikni za proširenje)</summary>
  
  Jedinstvenost knjiženja uvijek se određuje kombinacijom *Datum knjiženja* + *Broj knjiženja*. Broj knjiženja automatski se upravlja kroz postupak na temelju postavki numeracije (brojača): posebno, prilikom spremanja dodjeljuje se ispravan konačan broj, eventualno popravljajući prazninu u numeraciji na odgovarajući datum knjiženja. Brisanje knjiženja na datumu X, naime, ostavit će prazninu u numeraciji tog datuma: broj će biti vraćen tek ako se intervenira u unosu/izmjeni jedno od knjiženja na tom datumu. U slučaju privremenog knjiženja, broj će se kretati u negativnom progresu počevši od broja -1000, kako bi korisniku bilo jasno da se radi o knjiženju u tom stanju: izvještaji i računovodstvene pretrage postavljene su da filtriraju samo konačne registracije po zadanim postavkama;

</details>


**Konto nositelja knjiženja**: ovo polje je **obavezno samo za knjiženje PDV-a**, jer je povezano s osnovnim podacima klijenta/dobavljača koji je nositelj dokumenta knjiženja.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

Ovo polje obično se ne popunjava u slučaju knjiženja plaćanja/naplate, jer se obično u istom knjiženju vrši više plaćanja/naplata prema različitim subjektima. U ovoj situaciji, kao filtriranje otvorenih stavki koristi se polje prisutno u kartici *Plaćanja*. 

Ako se pritisne tipka za stvaranje *Novog unosa* iz postojećeg unosa, moguće je postaviti **parametre unosa** tako da se ovo polje također ponudi u tom novom unosu. Računovodstveni predložak može, na kraju, uključivati **[kontrolu dosljednosti](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** između vrste računa unesenog u ovom polju i onoga što je predviđeno u predlošku; 

</details>


**Predložak**: ovo polje je **obavezno**: svako knjiženje temelji se na predlošku koji regulira karakteristike i funkcionalnost knjiženja.

Ovo polje više nije moguće mijenjati nakon što je knjiženje spremljeno (naravno, bit će blokirana i druga polja u slučaju da je Knjiga PDV-a ili Dnevnik knjiženja već ispisan kao konačan ili ako je izvršeno automatsko zatvaranje računa): u slučaju da je predložak pogrešan, potrebno je obrisati i ponovno unijeti knjiženje s ispravnom šifrom predloška. 

Ako se pritisne tipka za stvaranje novog unosa iz postojećeg unosa, moguće je postaviti **parametre unosa**t ako da se ovo polje također ponudi u tom novom unosu;

**PDV (knjiga)**: preuzima se iz odabranog računovodstvenog predloška i nije moguće ručno mijenjati: 

**Referentni broj PDV-a**: ovo je numeričko polje koje automatski upravlja postupak za svaki zapis: prilikom otvaranja obrasca bit će predložen *maksimalni protokol + 1* za postavljeni zapis, a zatim će prilikom spremanja biti/ne biti potvrđeno, ovisno o tome jesu li već izvršene druge radnje spremanja za taj zapis ili postoje PDV zapisi koji se moraju ponovo obraditi.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

Obnova protokola (zapisivanja) mijenja se ovisno o tome je li u predlošku postavljena blokada za spremanje s *nenumeričkom numeracijom* (radi se o kontroli dosljednosti između datuma knjiženja i referentnog broj PDV-a). Kada je blokada aktivna, bit će obnovljen slobodan protokol samo ako je datum knjiženja dosljedan, dok bez blokade bit će predložen i broj koji nije važeći za taj datum, uz odgovarajuće poruke upozorenja korisniku.

Polje za  (broj) bit će onemogućeno u slučaju privremenog knjiženja;

</details>


**Vrsta dokumenta**: predlaže se od strane postupka na temelju vrijednosti postavljene u računovodstvenim predlošcima: može se mijenjati, ali to je obično izmjena koja nije potrebna (tipično se koristi za označavanje dokumenata u PDV registracijama, primjerice FV = Fakture za prodaju ili FA = Fakture za kupovinu, dok će svi ostali poslovni događaji uvijek imati dokument tipa GEN = Generički);

**Datum dokumenta**: ovo je polje obavezno ili ne, ovisno o **[postavkama računovodstvenih predložaka](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, vaj datum ne može biti kasniji od datuma registracije i mora biti unutar vremenskog okvira valjanosti koji se odnosi na  **[razdoblje za vježbu za referentnu godinu](/docs/configurations/parameters/finance/accounting-parameters)** registracije. Ako se pritisne tipka za stvaranje *novog zapisa* iz postojećeg unosa, moguće je postaviti **parametre unosa** tako da se ovo polje također ponudi u tom novom unosu;

<a id="campo_progetto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Broj dokumenta**: U ovo polje unosi se broj fakture za računovodstvene unose PDV-a.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

Radi se o alfanumeričkom polju duljine 20 znakova. Ovisno o postavkama računovodstvenog predloška, sustav može onemogućiti unos dokumenta s istom kombinacijom broja, godine (preuzete iz datuma dokumenta), vrste dokumenta (polje Vrsta dokumenta) i podkonta unesenog u zaglavlju knjiženja. Ova je kontrola prema zadanim postavkama uključena za sve računovodstvene predloške, ali ju je moguće deaktivirati. Ako su broj, godina i podkonto jednaki, ali je vrsta dokumenta različita, sustav neće blokirati unos, već će korisniku prikazati upozorenje.
Isto upozorenje prikazuje se i kada se isti podatak već nalazi u privremenom knjiženju.

</details>

**Polje Projekt**: aktivno je samo ako računovodstveni predložak predviđa upravljanje projektima: ovaj projekt je referentni za cijelo knjiženje, ali će biti moguće ponovno dodijeliti vrijednosti unutar kartice **Projekt** istog knjiženja.

:::danger PAŽNJA
Kartica Projekti je aktivna samo kada je unutar opće evidencije tvrtke (Konfiguracija > Tablice > Opće postavke > Tvrtka) opcija **Upravljanje Kontrolingom deaktiviran**. To znači da **nije** aktivan modul za upravljanje kontrolingom u **potpunom** načinu rada.    
Ako je opcija **Upravljanje Kontrolingom** **aktivna**, upravljanje projektom odvijat će se na drugačiji način, odnosno bit će potrebno dodijeliti projekt kroz posebni centar troška koji ima kao [**dimenziju**](/docs/configurations/tables/controlling/analytical-accounting/dimension) (pogledajte dokumentaciju za kontroling područje) onu koja je prikladna za upravljanje projektima.  
:::

**Valuta**: predložena kao prioritet na temelju nositelja (*konta*) knjiženja, alternativno iz valute tvrtke: može se ipak mijenjati od slučaja do slučaja. Nakon što je knjiženje spremljeno, polje više nije moguće mijenjati;

**Datum tečaja**: to je referentni datum za tečaj, kako je uneseno u tablicu tečajeva valuta: postupak čita iz ove tablice najnoviji uneseni datum s odgovarajućim tečajem u odnosu na ovo polje.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

U *parametrima unosa* ovaj datum može biti postavljen kao datum knjiženja (zadano) ili kao datum dokumenta.   
Predviđen je korisnički parametar za upozorenje kada nije postavljen tečaj na datum knjiženja (i stoga se koristi prethodni tečaj);

</details>

**Izravna promjena**: to je vrijednost tečaja kako je unesena u tablicu tečajeva valuta: istovremeno se prikazuju i direktni tečaj (onaj koji se obično koristi u tečajevima valuta), te inverzni tečaj. 

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

Korištenje obrnutog tečaja proizlazi iz činjenice da je postupak zadržao logiku iz vremena obračuna u talijanskim lirama, kada se tečaj izražavao prema načelu „neizvjesno za sigurno” (incerto per certo), odnosno kao broj lira za jednu jedinicu strane valute. Uvođenjem eura primjenjuje se suprotno načelo, „sigurno za neizvjesno” (certo per incerto), pri kojem se iskazuje koliko se jedinica strane valute dobiva za 1 euro. Korisnik može ručno izmijeniti ovu vrijednost. To je uobičajen slučaj kod računovodstvenih predložaka za plaćanja i naplate u stranoj valuti, jer tečaj koji primjenjuje banka u pravilu nije jednak službenom deviznom tečaju.

</details>

**Ukupno valuta / Ukupno dokument**: to su polja međusobno povezana putem tečaja, stoga će u knjiženjima u eurima biti svejedno unijeti iznos u jednom ili drugom polju.
U knjiženju u strani valuti, obično se unosi vrijednost u polje Ukupno valuta, a protuvrijednost u eurima se automatski izračunava.

<details>

  <summary>Daljnji detalji (Click to expand)</summary>

**[Računovodstveni predložak](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** može predvidjeti da se ovi podaci ažuriraju automatski prilikom promjene podataka unesenih u tablicu PDV-a, samo za povećanje ili i za smanjenje. Spremanje knjiženja može biti blokirano ako ovaj iznos nije jednak podacima iz knjige PDV-a;

</details>

**Ukupni porez**: polje prikazano na dnu tablice PDV-a, za prikaz ukupnog iznosa, koje se automatski ažurira od strane postupka, ne treba ga unositi ručno.

### Podnožje (Footer)

Na dnu obrasca, u kartici *Dnevnih knjiženja*, nalazi se **opis promjene** računovodstvenog knjiženja: radi se o napomeni koja se može postaviti unutar računovodstvenog predloška pomoću numeričkih parametarskih kodova (1) (2) … (10) 


<details>

  <summary>Daljnji detalji (Click to expand)</summary>

i kodovi (8) i (9) koriste se samo u detaljnim opisima konta u odjeljku knjige računa. Dvostrukim klikom na polje moguće je otvoriti pretragu unutar kodiranih napomena (postupak dostupan unutar Alata: ručna izmjena ovog opisa bit će eventualno *resetirana* na potvrdu korisnika nakon što se izmijeni bilo koje polje koje se automatski upravlja u napomenama).  

Na dnu obrasca, otvaranjem proširivog odjeljka (expander), nalaze se dodatna polja za sažetak podataka PDV-a i knjiženja: posebnu pažnju zaslužuju polja namijenjena za prikaz neravnoteže knjiženja, što je obično onemogućeno (ali se može omogućiti u postavkama korištenog predloška).  

</details>

**Nije u ravnoteži dugovno/potražno** služi kao kontrola usklađenosti kako bi se omogućilo spremanje knjiženja.

<details>

  <summary>Dodatni detalji (kliknite za proširenje)</summary>

Osim ako kontrola nije onemogućena unutar parametara predloška, što toplo preporučujemo da izbjegavate osim u iznimnim slučajevima.  

Vrijednost neravnoteže bit će ponuđena kao iznos u novim računovodstvenim stavkama koje će biti ručno unesene u knjiženju kako bi se automatski uravnotežila.  


</details>


#### Specifične tipke na traci s izbornika 

> **Parametri umetanja**: otvara parametre za unos zapisa. 

- *Datum obračuna*: prikazuje se u tablici knjige PDV-a  i automatski se prenosi u tablicu Dnevnika knjiženja. Može se predlagati na jedan od sljedećih načina:
Dnevno – polja Od datuma i Do datuma postavljaju se na datum knjiženja. Kraj poslovne godine – polje Do datuma postavlja se na 31.12. tekuće godine. Bez vrijednosti – za konta vrste Usluge, polje ostaje prazno ako je korišten *protukonto* vrste 'Za razgraničenje', odnosno konto koji se koristi pri izračunu završnih knjiženja. Na taj se način korisnika prisiljava da ručno definira razdoblje na koje se knjiženje odnosi.

- *Upozori ako valuta nije u ravnoteži*: provjerava jesu li u Dnevniku knjiženja uravnoteženi i iznosi u stupcu Iznos u valuti. Iako je iznos prikazan u jednom stupcu, sustav poznaje duguje/potražuje stranu svakog knjiženja.

- *Upozori na datum tečaja*: budući da se u knjiženju automatski predlaže posljednji tečaj unesen u tablicu Tečajevi valuta, sustav provjerava odgovara li datum tog tečaja datumu knjiženja.

- *Podkonto* (bez grupiranja/Zadnje umetnuto): određuje podkonto nositelja knjiženja koji se predlaže u zaglavlju knjiženja. Opcija Posljednje korišteni automatski predlaže podkonto korišten u posljednjem unosu.

 > **Tipke za ponovno izračunavanje**: ažuriraju vrijednosti s osvježavanjem / ponovnim izračunom 
    - PDV
    - Dnevnik knjiženja
    - Centri troška (ako se nalazite na kartici Analitički)
    - Dospijeća (ako se nalazite na kartici Dospijeća plaćanja)

## **2. Zapis**

### 2.1  Podaci o PDV-u dokumenta 
Ova sekcija dostupna je samo za PDV knjiženja, odnosno kada je u računovodstvenom predlošku definirana knjiga PDV-a i odgovarajuća vrsta PDV transakcije.

U slučaju **ručnog unosa** novog knjiženja, odjeljak se može ispuniti na nekoliko načina:   

- >*Šifarnik klijenta/dobavljača/agenta koji je nositelj knjiženja nema unaprijed postavljen podkonto kontrole niti standardnu PDV stopu*: u ovom slučaju korisnik odabire **vrstu PDV-a** (pogledajte detalje u nastavku), kao i **podkonto** za stavku i odgovarajuću **PDV stopu**. Nakon što se ovo postavi, aplikacija će automatski raspodijeliti ukupni iznos dokumenta/knjiženja unesen u zaglavlje na odgovarajuće stavke. Korisnik može mijenjati ove vrijednosti i unositi nove stavke prema istoj logici. Predloženi iznos bit će izračunat na temelju razlike koja nedostaje za pokriće ukupnog iznosa knjiženja;  
- >*Šifarnik klijenta/dobavljača/agenta sadrži unaprijed postavljen podkonto kontrole i/ili PDV stopu*: nakon unosa  **vrste PDV-a** aplikacija predlaže unaprijed postavljeni podkonto i/ili PDV stopu, iznosi se unose kao u prethodnom slučaju raspodjelom ukupnog iznosa dokumenta/knjiženja, a korisnik ih može ručno mijenjati. Sljedeći unos ponovno predlaže podkonto/PDV stopu prema šifarniku i iznos koji nedostaje za pokriće ukupnog iznosa knjiženja;    
- >*Šifarnik klijenta/dobavljača (nije obuhvaćeno za agente) sadrži popis podkonta kontrole, bez unaprijed postavljenog podkonta kontrole, ali ima unaprijed postavljenu PDV stopu*: u ovom slučaju aplikacija će izravno prikazati u odjeljku PDV popis unaprijed postavljenih podkonta, svaki s pripadajućom PDV stopom ili s unaprijed postavljenom PDV stopom iz šifarnika, a korisnik će morati ručno unijeti iznose stavku po stavku. U ovom slučaju, ručno dodavanje nove stavke neće predložiti podkonto, već samo PDV stopu, raspodijelit će iznos koji nedostaje do pokrića ukupnog iznosa dokumenta/knjiženja.  

**Vrsta PDV-a**: to je interna fiksna tablica sustava i sadrži sljedeće vrijednosti:   
> - **Roba**: to je **standardni** tip PDV transakcije, dovoljan u gotovo svim slučajevima. Ova vrsta stavke smatra se u nekim PDV procedurama kao transakcija robe;
> - **Usluga**: specifičan tip transakcije za označavanje da stavka proizlazi iz nabave/prodaje usluga, što je važno u nekim PDV procedurama (npr. za **INTRASTAT** izvještaje).   
> - **Namijenjeno za preprodaju**: koristi se za nabave koje čine osnovu za izračun postotaka koji se primjenjuju pri raspodjeli prihoda (npr. za supermarkete ili ljekarne: ovi maloprodajni objekti ne primjenjuju PDV na svaku stavku pojedinačno, već im je omogućeno da naprave ukupnu sumu prodaja na kraju razdoblja i podijele iznose prema udjelu kupljenih artikala u tom razdoblju);    
> - **Zaokruživanja**: radi se o zaokruživanju koja nisu predmet PDV-a, tipično za npr. telefonske račune. Korisnost ove oznake je minimalna, ali podkonto koji odgovara bit će unesen prema logici gore prikazanoj;    
> - **Prodaja PDV 74Ter**: specifičan tip transakcije za putničke agencije, za koje datum obračuna PDV-a kasni 30 dana u odnosu na datum transakcije (ako se prodaja vrši danas, PDV će biti plaćen u obračunu za sljedeći mjesec). Na tim stavkama primjenjuje se PDV upravljanje prema 74Ter s periodičnim obračunom PDV-a;    
> - **Preprodaja**: odnosi se na prodaje na koje će aplikacija primijeniti izračun raspodjele prihoda;     
> - **Poljoprivredna transakcija**: specifičan tip transakcije za tvrtke podložne poljoprivrednom režimu, koristi se za isključivanje iz tog režima (postavljenog u računovodstvenoj šifri) za specifičnu stavku;    


**% ne priznati**: preuzima se iz PDV stope unesene na stavci. Ručno nametanje se ne preporučuje, ispravna radnja je promijeniti PDV stopu; određuje izračun stupca (porez) *neoporezivog*. 

**Porez**: može se ručno unijeti u odnosu na izračun koji provodi aplikacija: može se dogoditi da dokument pri kupnji ima zaokruživanje koje nije ispravno obrađeno, korisnik mora registrirati dokument onako kako ga je primio.  

**Ukupno valuta / Ukupno**: to su izračunati, a ne pohranjeni podaci na razini baze podataka;  

**Od datuma obračuna/Do datuma obračuna**: to su datumi **ekonomske obveze**, koji su ključni za automatske **izračune** **ispravaka i dopuna** u bilanci. Na temelju tih podataka bit će izračunati razmjerni troškovi i prihodi.  

<details>

  <summary>**PRIMJER** Klikni za proširenje!</summary>
 
Danas je 31/03/godine X. 

Ako knjiženje troška prikazuje datume obračuna od 31.03.X do 31.03.X+1, na datum 31.12.X, pri pokretanju postupaka usklađivanja, izračunat će se aktivni odgođeni trošak za dio troška koji pripada razdoblju od 01.01.X+1 do 31.03.X+1.  

Ako knjiženje troška izvršena 31.01.X prikazuje datume obračuna od 31.01.X-1 do 31.01.X, pri pokretanju postupaka usklađivanja na datum 31.12.X-1 izračunat će se pasivni obračun troška za dio troška koji pripada razdoblju od 31.01.X-1 do 31.12.X-1.  

</details>

Ovaj raspon datuma može se automatski upravljati, ovisno o ***Parametrima umetanja***, ima 3 alternativna načina: 

- >*Kraj obračunskog razdoblja* gdje će početni datum biti predložen na temelju datuma dokumenta, a krajnji datum kao datum kraja poslovne godine.  
- >*Dnevno* gdje će oba datuma biti postavljena na temelju datuma dokumenta;
- >*Bez datuma za tip konta usluga* (preporučena opcija), aplikacija neće predložiti nijedan datum za konta koji u vrsti konta imaju označenu opciju *usluga*, ali će korisnik biti obavezan ručno unijeti ispravan raspon datuma (za ostale vrste konta, predložit će isti datum dokumenta za oba datuma).

:::important[Pažnja]
Kako bi se automatski izračunali obračuni i odgođeni troškovi putem postupka usklađivanja, potrebno je da vrsta konta korištena za konta koja su predmet ispravaka bude definirana u tablici **[Vrste konta](/docs/configurations/tables/finance/account-types)** s označenom opcijom Usluga.

Primjer vrsta konta koje imaju označenu opciju usluga u tablici Vrste konta (u standardnim bazama podataka) su "Troškovi za ispraviti" i "Prihodi za ispraviti".

Odgovarajuća vrsta konta dodjeljuje se predmetnom kontu izravno u kontnom planu. 
:::

**Mjesec**: to je **referentno razdoblje PDV-a za knjiženje**, dobiveno na temelju vrste obračuna i datuma obračuna PDV-a. Polje koje se zapravo koristi u obračunu je, međutim, datum obračuna PDV-a; 
 
**Datum obračuna PDV-a**: polje se predlaže prema postavkama predloška, obično kao datum knjiženja nabave i datum dokumenta za prodaje (ako je transakcija prodaja 74Ter, tada je datum dokumenta + 30 dana). Ovo je  **referentni datum za ispis periodičnog obračuna PDV-a**; 
 
**Obračun u gornjoj/donjoj vrijednosti**: ovaj datum koristi se kao referenca za obračun sudjelovanja knjiženja u izračunu *plafona*/limita; predlaže se kao datum dokumenta za sve PDV stope koje predviđaju upravljanje *plafonom PDV-a*; 

**Napomena o promjeni iz prethodnih godina**: polje je aktivno samo za knjiženja s vrstom dokumenta koja uključuje označenu opciju *Napomena o promjeni*. Služi za označavanje da je stavka odobrenja vezana uz prethodne godine u odnosu na godinu dokumenta.  
  
**Referentni datum obavijesti o izmjeni**:  polje je aktivno samo za knjiženja s vrstom dokumenta koja uključuje označenu opciju *Napomena o promjeni*. Služi za označavanje referentnog datuma ispravljene fakture;   

**Podjela**: polje je vidljivo samo ako predložak predviđa upravljanje podjelama. U tom slučaju bit će moguće podijeliti isto PDV knjiženje na više poslovnih podjela.  

#### Dodatne napomene:  
- nije moguće spremiti **PDV stavke s osnovicom 0** osim ako predložak to dopušta (opcija *dopusti konta s vrijednošću 0*); 
 
- **Zaokruživanje PDV-a** upravlja stavku po stavku, dok propisi nalažu da se izračun treba napraviti na osnovici koja grupira sve stavke s istom PDV stopom: stoga je moguće da dođe do razlike koja je uzrokovana isključivo upravljanjem zaokruživanjima (ovo se odnosi samo na ručni unos knjiženja: automatske računovodstvene obrade iz nabave i prodaja već pravilno izračunavaju).  
 
    Jednom kad se razlika detektira, rješenja su:  
        1. ručno urediti PDV stavke  
        2. pritisnuti tipku za ponovni izračun poreza koji se nalazi u zaglavlju i automatski uskladiti posljednju stavku svake PDV stope.

### 2.2 Dnevnik knjiženja 

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Svaki zapis knjiženja **mora obavezno imati stavke u ovom odjeljku** kako bi se podaci spremili.  

- > U slučaju **Podaci PDV-a** ovaj dio se **izračunava**, na temelju logike ***tipova iznosa***, prema podacima unesenim u stavke prethodne **PDV tablice**; 

- > U slučaju knjiženja **plaćanja/naplate**, iznosi **ovise o iznosima plaćanja unesenim u karticu ***Plaćanja***; 

- > U **ostalim slučajevima**, stavke i iznosi bit će uglavnom **ručno** upravljani od strane korisnika.  

:::note[Napomena]
Predložak može ponuditi popis unaprijed postavljenih konta: korisnik će u tom slučaju morati unositi iznos stavku po stavku samo u odgovarajuću sekciju Duguje / Potražuje.   

Pri spremanju, ako predložak ne dopušta spremanje konta s nulom, prazne stavke bit će automatski izbrisane;  

Ovaj način korištenja tipičan je, na primjer, za obračun plaća zaposlenika, gdje predložak nudi sva moguće potrebna podkonta, ali se iz njih koristi samo nekoliko prema potrebama u svakom pojedinom slučaju.  
:::

<details>

  <summary>Dodatni detalji (kliknite za proširenje)</summary>
 
- U slučaju jednostavnog knjiženja ‘duguje/potražuje' moguće je podesiti specifičan predložak koji već predviđa podkonta koji će se koristiti s tipom iznosa Tot. Doc./Registracija, kako bi korisnik jednostavno upisao iznos u polja ukupnih iznosa na zaglavlju, a postupak će ih rasporediti u duguje/potražuje prema predlošku;
  
- Svaki novi ručni unos stavki pokrit će eventualni manjak prisutan u knjiženju: podsjeća se da neuravnotežena knjiženja ne mogu biti spremljena, osim ako nije omogućen odgovarajući predložak (postavka).

</details>

#### Specifična polja u pregledu Dnevnika knjiženja 

**Valuta**: može sadržavati detalje o valuti (datum promjene, vrijednost promjene i iznos valute): iznos valute uvijek treba unositi u apsolutnom iznosu (znak dugovanja/kredita u društvenoj valuti također definira njen znak); polja u valuti i u valuti poduzeća mogu biti odvojena jedno od drugog, ne računajući iznose pri potvrdi koji su izvršeni u izmjenama tih istih iznosa;    
**Od datuma/mjeseca obračuna**: ovaj raspon datuma, kao što je već spomenuto za sekciju PDV-a, ključan je za upravljanje knjiženjima korekcija i za bilance. Upućuje se na specifične napomene koje su unesene gore;  
**Podjela**: može biti prisutna ako je postavljena u predlošku, može se koristiti za podjelu istog knjiženja na više podjela;  
**Detaljni opis** (nije preporučljivo postaviti kao zadani unos za sve): može biti prisutan ako je postavljen u predlošku, također može biti djelomično automatski upravljan u predlošku s napomenama (1) – (2) … itd. kao i za opći opis. Posebno je zanimljivo upravljanje kodovima (8)-(9) u vezi s redovima klijenata / dobavljača za zatvaranje računovodstvenih stavki;  
**Datum valute banke**: Polje se može automatizirati prema broju dana definiranom u matičnim podacima banaka, za svaki računovodstveni predložak koji se na njih odnosi.
**Br. stavke**: Polje može biti automatizirano u odnosu na broj dana postavljen na svakoj banci u šifarniku banaka za svaki predloške koji je povezan s njom;  
**Referenca ručnih stavki**: može biti prisutna, ako je postavljena u predlošku, može se koristiti za ručno povezivanje računovodstvenih stavki bez korištenja upravljanja otvorenim stavkama;  
**Podkonto**: može biti prisutan, ako je postavljen u predlošku, ne preporučuje se ručno korištenje. Automatsko upravljanje u knjiženjima PDV-a predviđa da se za redove klijenata/dobavljača dodijeli konto troška/prihoda veće vrijednosti, dok će za redove troška/prihoda/PDV-a konto klijenta/dobavljača.  

#### Daljnje napomene

Korisnik može ručno *prisiliti* unose u dnevniku knjiženja: obično se preporučuje usklađivanje podataka počevši izravno od PDV-a. Svaka prisilna izmjena može se poništiti pritiskom na gumb za ponovni izračun knjige dnevnika.  
U predlošku knjiženja, posebno za sve predloške povezane s PDV-om, za redak s *Tot. Doc./registracija* unosi se opći račun klijenata/dobavljača, koji će se svaki put zamijeniti s kontom nositelja registracije: ova zamjena bit će izvršena samo ako su u **[parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**, u odjeljku popis računa klijenata/dobavljača, odobreni (tj. uneseni u mrežu) tipovi konta povezani s glavnim računom koji mora odgovarati onome koji je prisutan u predlošku knjiženja.  

## 3. Dospijeća plaćanja

Kartica je prisutna **samo ako predložak ima označenu opciju 'Otvaranje plaćanja'**.  

### 3.1 Vrsta Dospijeća plaćanja

Posvećeno je upravljanju podacima za izračunavanje povezane otvorene stavke i prati uvjete plaćanja. Za ručno knjiženje vrste PDV-a, pregled će biti popunjen zadanim podacima koji su uneseni unutar osnovne evidencije kupca/dobavljača/agenta dodijeljenog kao podkonto nositelja knjiženja. Za druge vrste knjiženja (na primjer, za unaprijed plaćene iznose, moguće je definirati predložak koji otvara dospijeće, ili suprotno, da je zatvori jer dokument još nije evidentiran): u ovom slučaju upravljanje ovom sekcijom postaje ručno, pa korisnik može unijeti osnovne podatke o vrsti plaćanja, načinu plaćanja i referentnom kontu, s 100% unesenim u polje 'Postotak'.

Za ovu sekciju treba napomenuti da:
- otvorena stavka se može kreirati i na kontima koji nisu u osnovnoj evidenciji i koji nemaju postavljenu opciju "Otvaranje plaćanja" u kontnom planu (ova opcija se odnosi samo na kontrolu da podaci iz dnevnika i stavke odgovaraju za konta koji imaju tu postavku);  
- Bankovni podaci obično se unose iz osnovne evidencije ili iz dokumenta koji je knjižen u području nabave/prodaje/primatelja, ali ih je moguće ručno postaviti odabirom drugog bankovnog računa pomoću pomoći *abi/cab* (dvostruki klik na polje). Banka povezana u ovoj sekciji bit će obično korištena za plaćanje dobavljaču kao banka korisnika plaćanja, osim ako nije postavljena opcija '**[Nametni banku za plaćanje prisutnu u šifarniku dobavljača](/docs/configurations/parameters/treasury/vendor-payments-parameters)**';  
- Obično se unosi polje '**Postotak**'. Značenje polja 'Iznos/Porez' je sljedeće: u polje '**Iznos**' može se unijeti fiksni iznos koji će se koristiti za kombinaciju vrste plaćanja/izvršenje plaćanja u otvorenoj stavci; polje' **Porez**' omogućava definiranje, od ovog iznosa, koliko se odnosi na PDV (ovo je korisno u slučaju kada izvršenje plaćanja predviđa različite postotke osnovice/poreza među različitim ratama, kako bi se dobio ispravan izračun). Moguće je unijeti kombinaciju iznos/postotak.  

**Grupiranje stavaka**: opcija, koja nije aktivan, preuzeta je iz šifarnika klijenta/dobavljača: u suštini nema praktičnu primjenu, jer je vrlo rijetko da dvije stavke imaju isti tip plaćanja i isti datum dospijeća unutar istog dokumenta;

- Ispod se nalaze neka polja za sažetak situacije klijenta/dobavljača: iznos odobrenog limita u modulu Rizik klijenta, vrijednost izloženosti dobivena prema situaciji otvorenih stavki (bez uzimanja u obzir registraciju u upotrebi) i računovodstveni saldo (uključujući i registraciju u upotrebi);  

- u slučaju knjiženja koje proizlazi iz **knjiženja nepodmirenih iznosa**, gornji pregled NEMA nikakvu važnost za izračun stavki ispod. Tipičan je primjer kada su na matičnim podacima definirane otvorene stavke za Ri.Ba. (bankovne doznake), dok se nenaplaćena potraživanja obrađuju kao BB, pri čemu se nove Ri.Ba. doznake ne smiju automatski ponovno izdavati. U tom se slučaju podaci iz gornje tablice koriste isključivo ako su potrebni podaci o banci za plaćanje.

### 3.2 Dospijeća plaćanja
*
Prikazuje popis stavki izračunanih prema postavkama u gornjoj sekciji: korisnik može *forsirati* vrstu plaćanja, datum dospijeća i iznose različitih rata (pazeći da se poštuju ukupni iznosi). Tablica otvorenih stavki NE dopušta ručno unošenje nove rate. 

U slučaju da predložak predviđa i otvaranje stavki, i zatvaranje putem kompenzacije, te je također aktivirana opcija 'Obavijest', pri spremanju knjiženja korisniku će biti prikazana obavijest o prisutnosti stavki koje se mogu kompenzirati.

**Opis**: označava stanje stavke (otvorena, djelomično otvorena, zatvorena);  
**Konto/podkonto/opis**: konto račun kupca ili dobavljača na koji se odnosi stavka;  
**Plaćanje**: tip plaćanja (bankovni prijenos, gotovina itd.);  
**Dospjelost**: datum dospijeća izračunat prema uvjetima plaćanja iz gornjeg pregleda ili ručno postavljen;    
**Šifra dokumenata**: šifra dokumenta koji je generirao stavku (na primjer FA = račun za nabavu, FV = račun za prodaju);     
**Datum dokumenta**: datum dokumenta (na primjer, račun za kupovinu) koji je generirao stavku;  
**Broj dokumenta**: broj dokumenta koji je generirao stavku;  
**Valuta**: valuta u kojoj je denominirana stavka (npr. EUR = Euro);  
**Tečaj**: tečaj koji je odredio vrijednost u valuti i protuvrijednost u eurima stavke;    
**Datum valute**: datum referentnog tečaja;   
**Iznos u valuti**: jednak iznosu u eurima ako je tečaj 1; 
**Saldo Dugovanje / Potraživanje**: Otvorena stavka ima svoju stranu knjiženja (duguje ili potražuje), jednako kao i računovodstveno knjiženje iz kojeg je nastala. Otvorena stavka na strani 'duguje' predstavlja naše potraživanje, dok otvorena stavka na strani 'potražuje' predstavlja našu obvezu (primjerice, po zaprimljenom računu dobavljača ili po knjižnom odobrenju izdanom kupcu).

Također je moguće blokirati plaćanje stavke (Flag **Nije plativo**): postupak će pohraniti datum i korisnika koji je blokirao plaćanje s eventualnom objašnjenjem (**Početak blokiranja, Korisnik, Napomena**) kao i datum i korisnik koji otključava (**Korisnik otključavanja, Kraj blokiranja**), za obje operacije su predviđena specifična korisnička prava u ARM-u.

**Broj / godina otvorene stavke*: automatski dodijeljeni za identifikaciju otvorene stavke;  
*Status dospijeća plaćanja*: *combo box* povezan s tablicom definiranom od strane korisnika, omogućuje klasifikaciju računovodstvenih stavaka od trenutka njihove kreacije;  
*Napomene* (stavke): slobodne napomene koje se također mogu automatski generirati u postavkama predloška s detaljnim opisom konta onako kako su unesene u računovodstvo.  
*Trgovački predstavnik*: u ovom polju je moguće povezati odgovarajućeg agenta za otvorenu stavku: to se automatski popunjava na temelju agenta unesenog u račun prodaje prilikom knjiženja (u slučaju da su prisutni više agenata, bit će dodijeljen onaj s višim provizijama).  
*Datum Ref / Br. Ref*: Polja preuzeta iz datuma dokumenta i broja dokumenta u računovodstvenoj evidenciji (ako su prisutni, inače preuzeta iz datuma/broja knjiženja), omogućuju grupiranje i filtriranje stavaka koje se odnose na isti dokument (na primjer, odobrenje koje se odnosi na račun, radi prikazivanja svih stavki zajedno).  
*Cig* i *Cup*: preuzeti iz računa prodaje, ali se također mogu ručno unijeti (putem *combo boxa*). Pogledajte **[dokumentaciju o poljima na računu](/docs/sales/sales-invoices/invoicing/sales-invoice).**  
**Referentni modeli** i **Referentni broj**: polja koja se u Italiji u pravilu ne koriste, ali su karakteristična za Hrvatsku. Prilikom izdavanja računa poduzeće svakom dospijeću dodjeljuje model i poziv na broj, koje kupac zatim navodi prilikom plaćanja, a banka ih prenosi u promet po računu. Na taj je način iz bankovnog izvoda moguće jednostavno utvrditi na koje se dospijeće odnosi izvršena uplata. Ova polja predviđena su i kao priprema za buduću implementaciju funkcionalnosti uvoza bankovnih izvoda, pri kojoj će se koristiti za automatsko povezivanje uplata s otvorenim stavkama.
**Prosječno kašnjenje dana plaćanja**: Italija: preuzima vrijednost dana kašnjenja iz osnovnih podataka o kupcu, ali se može promijeniti i ručno. Može se koristiti u simulaciji novčanog toka (*cash flow*).

#### Specifične tipke
> **Izbriši dospijeća plaćanja**: omogućuje brisanje stavke koja je automatski stvorena na temelju tipa plaćanja unesenog.
> **Izbriši iz ekranske tablice plaćanja**: omogućuje brisanje izvršenja plaćanja, koje automatski predlaže osnovni podaci ili je ručno uneseno.  
> **Ponovno izračunaj dospijeća plaćanja**: dopušta ponovno izračunavanje ručno uređene stavke.  
> **Grupiranje dospijeća plaćanja**: omogućuje grupiranje stavki u prisutnosti više stavki s istim datumom dospijeća.

## **4. Plaćanja** 

Kartica ‘Plaćanja' **je prisutna samo ako predložak ima postavljenu oznaku ‘Zatvaranje stavki'**. Omogućuje prikaz otvorenih stavki za nastavak s plaćanjima/prijemima uz zatvaranje otvorenih stavki ili za kompenzacije.

:::tip Info
Kartica je podijeljena u dva osnovna pregleda. Prva, gornja, služi za pretraživanje otvorenih računa kako bi ih zatvorili, a druga, donja, sadržavat će rezultat postupka zatvaranja (odnosno uplate).
:::

### Ispravna konfiguracija interakcije između Otvaranja, Zatvaranja i Kompenzacije Stavki  

- Tipično, svi zapisnici tipa PDV-a imaju opciju 'otvaranje stavki' i mogu također imati opciju zatvaranja + kompenzacija stavki; 

- predlošci za plaćanja i naplate uvijek predviđaju zatvaranje otvorenih stavaka, ali nikada nemaju aktiviranu oznaku kompenzacije. Po potrebi mogu imati aktiviranu oznaku otvaranja otvorenih stavaka kako bi se omogućila obrada predujmova odnosno plaćanja unaprijed. U tom slučaju, budući da ne postoji otvorena stavka koja bi se zatvorila, sustav će automatski otvoriti novu otvorenu stavku suprotnog predznaka, čime će se zadržati usklađenost s odgovarajućim računovodstvenim knjiženjem. Podešavanja u **[parametrima](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** predloška knjigovodstvenog zapisa). 

:::tip PAŽNJA
Razlika između plaćanja stavki i kompenzacije stavki:  
Kompenzacija, u knjigovodstvenoj terminologiji, može se shvatiti i kao kompenzacija stavki (davanje/prihod) istog konta (npr. odobrenje) ali i kao kompenzacija kupac/dobavljač (npr. kompenziram dug prema kontu dobavljača s potraživanjem prema kontu kupca koji pripada istom šifarniku).  
U ovoj formi kompenzacija je usko povezana sa stanjem otvorenih stavki koje pripadaju istom podkontu. 
U ovom obliku, kompenzacija je usko povezana sa situacijom stavki koje pripadaju istom podkontu.
Kompenzacija kupac/dobavljač može se jednostavno upravljati izvršavanjem **plaćanja** stavki (jednostavno zatvaranje) "ukriženo" (i davanje i prihod - na primjer, putem bilance) čime se "kompenziraju" na saldo u knjigovodstvu.  
Alternativno, moguće je koristiti dvije specifičnije i fleksibilnije procedure: [**Kompenzacija stavki**](/docs/finance-area/maturity-values/procedures/maturity-compensation) ili [**Brza kompenzacija**](/docs/finance-area/maturity-values/procedures/fast-compensation)
:::

Ako je u zaglavlju zapisa unesen konto nositelja, on će biti prikazan kao filter za pretragu u početnim poljima obrasca za plaćanja:

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Za sve zapise PDV-a, aplikacija će ovdje prikazati stavke samo za kupca/dobavljača unesenog u zaglavlju, kako bi se nastavila kompenzacija fakture/odobrenja; 

U slučaju zapisa plaćanja/prihoda (posebno za više kupaca ili dobavljača), polje u zaglavlju obično će biti prazno, a korisnik će biti taj koji će ispuniti filter prema potrebama. 

Posebno treba istaknuti polje podkonta **Banka**: nije riječ o filteru, već se automatski popunjava s kontom plaćanja unesenim u **[šifarnik](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** kupca/dobavljača nositelja zapisa, a odatle ažurira knjigovodstveni zapis u polju koje predviđa vrstu iznosa ‘Tot. Doc./zapis’.

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

</details>

(ako **[knjigovodstveni parametri](/docs/configurations/parameters/finance/accounting-parameters)**, u popisu konta kupaca/dobavljača, omogućuju zamjenu, odnosno mora postojati povezanost između vrste konta banaka i odgovarajućeg glavnog konta u kontnom planu kako bi zamjena mogla biti izvršena).

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

</details>

### Izvršenje zatvaranja stavke  

:::tip KAKO ZATVORITI STAVKU  
Nakon što se u prvom okviru pronađe stavka (ili stavke) koje treba platiti, moguće ih je odabrati i 'platiti' putem **dvostrukog klika** na pojedinačni redak, ili korištenjem tipke **Kreiraj plaćanje**.
:::

U slučaju da predložak uključuje kompenzaciju stavki, bit će aktivnu tipku i za **Kompenzaciju** stavki (a dvostruki klik imat će isto značenje).   

Druga korisna tipka u ovom odjeljku je **Kreiraj plaćanje - dodatne opcije**: 

<details>

  <summary>Kliknite za prikaz primjera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

</details>

Otvorit će se dodatna forma za postavljanje iznosa plaćanja s eventualnim iznosom odobrenja, zajedno s odgovarajućim kontom za knjigovodstveno evidentiranje.  

:::note NAPOMENA  
U ovoj formi vezanoj za naredbu *dodatnih opcija plaćanja* (samo ovdje) moguće je postaviti stanje **Obavezno zatvorena** za stavku (putem odgovarajuće opcije): korištenje ovog stanja nije preporučeno jer nije rezultat normalnog stvaranja plaćanja koje zatvara stavku, već prisiljava stanje, a može biti korisno za poravnavanje razlika i pogrešaka koje se više ne mogu uočiti normalnom korekcijom.   
Sličan rezultat može se postići stvaranjem ručnog plaćanja i prisiljavanjem iznosa.
Nije dopušteno prisiliti plaćanje s iznosom većim od preostalog iznosa stavke.  
:::

U popis plaćanja mogu se unijeti napomene za isto: ove napomene mogu se automatski povezati, u predlošku, s općim opisom knjiženja (flag *opis u dnevniku i plaćanjima*, nije preporučeno).  

Ako će plaćanje biti upravljano, prema **[postavkama predloška](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, po povijesnoj tečajnoj vrijednosti stavke, neće biti automatski evidentirana nikakva razlika u tečaju, već će se ona upravljati ručno u knjigovodstvu: ova opcija također olakšava, a posebno je korisno, upravljanje ravnotežom između otvorenih stavki i knjigovodstvenog salda.  

Suprotno, ako opcija nije aktivna, protuvrijednost u eurima bit će izračunata prema tečaju na datum knjiženja (i u ovom slučaju, ako je ispravno postavljeno **[u predlošku](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** - pogledajte vrstu iznosa dobitak/gubitak, razlike u tečaju - i **[u valutama](/docs/configurations/tables/general-settings/currencies)**, procedura će automatski valorizirati konta za dobitak/gubitak razlike u tečaju, valuta po valuta).  

Pomoću tipke **Proširi/Skupi** može se prikazati samo jedan od dva pregleda (pretraga stavki ili plaćanja).  

Na dnu će biti prikazana polja za ukupne iznose odabranih stavki.  

Na temelju plaćanja koja su stvarno unesena i postavki predloška, aplikacija će ažurirati redak s vrstom iznosa ‘Tot. Doc./zapis’ (na primjer, pridružen kontu plaćanja na banci) s ukupnim iznosom evidentiranih plaćanja, dok će za svako plaćanje unijeti redak ili grupirati plaćanja za davanje i prihode, valuta po valuta, svakog konta kupca/dobavljača koji je plaćen/prihvaćen.

#### Specifične tipke   
> **Parametri umetanja**: poziva parametre unosa za prvu bilješku.   
> **Traži dospijeća plaćanja**: omogućava pretragu stavki za plaćanje/prihod.    
> **Izbriši plaćanja**: omogućava brisanje prethodno odabranih plaćanja.    
> **Kreiraj plaćanje**: omogućava kreiranje plaćanja za odabranu stavku.  
> **Kompenzacija**: omogućava izvršenje kompenzacije stavki ako je predviđeno u knjigovodstvenom predlošku.  
> **Kreiraj plaćanje-dodatne opcije**: omogućava upravljanje plaćanjem s eventualnim iznosima odobrenja i odgovarajućim kontom za knjigovodstveno evidentiranje.  
> **Proširi/smanji**: omogućava smanjenje prikaza samo na stavke ili plaćanja, i obrnuto, ili proširivanje na obje.  

## **5. Analitika**

Ovo je posvećeno upravljanju centrom troška/profita (poslovnim centrima), i prisutno je samo ako predložak ima barem jednu od dvije oznake za upravljanje centrima troška / centrima profita.  

:::danger PAŽNJA
Upravljanje centrima troška / profita bit će različito ovisno o tome jesu li aktivirane ili nisu **napredne funkcionalnosti za kontroling** unutar tablice [**Tvrtka**](/docs/configurations/tables/general-settings/company).

Ove funkcionalnosti, nedavno razvijene, omogućuju naprednije i fleksibilnije upravljanje kontrolingom (na primjer, omogućujući višedimenzionalnu analizu poslovnih centara i analize bilo kojeg centra jedan prema drugom) u odnosu na standardni skup funkcionalnosti, koji je ipak i dalje dostupan ako se odluči ne aktivirati **flag UPRAVLJANJE KONTROLINGOM** unutar gore spomenute tablice.  
:::

Ovisno o postavkama predloška, bit će prisutan jedan, drugi ili oba odjeljka (u potonjem slučaju s dvije opcije: u slučaju ‘odvojeno upravljanje cdc/cdp’, oba će biti potrebno popuniti istovremeno, inače će procedura dodijeliti iznos samo jednom od odjeljaka, troškovi će ići na centre troška, a prihodi na centre profita).  

Ako se koriste napredne funkcije za kontroling, iako je moguće aktivirati i cdc i cdp u knjigovodstvenom predlošku, valorizacija tih potonjih postaje nepotrebna jer će se valorizirati samo cdc (koji preuzimaju novu definiciju poslovnih centara). Poslovni centri mogu prihvatiti i pozitivne komponente (profita) i negativne komponente (troška) te se mogu fleksibilno prebacivati jedan na drugi prema logikama predviđenim u modulu, u skladu s novim skupom funkcionalnosti.  

Ako je u knjigovodstvenom predlošku aktivirana i opcija **Upravljanje vozilom** bit će prisutan i pregled za valorizaciju troškova/prihoda na poslovnim vozilima (ispod glavne tablice centara troška).
Pozivajući vozilo putem odgovarajućeg *combo boxa*, bit će moguće dodijeliti i detaljne podatke o istom. 

### POLJA PRISUTNA U GLAVNOM PREGLEDU

Ako su aktivirane napredne funkcionalnosti za kontroling, bit će prisutna struktura slična pivot tablici koja grupira, konto po konto, dodjele knjigovodstvenih transakcija centrima prema dimenziji analize. Naime, prema gore spomenutim naprednim metodologijama, poslovni centri moraju biti dodijeljeni nekoj dimenziji analize, stvarajući tako podskupove funkcionalne za različite moguće konfiguracije u razvoju analitičkog računovodstva.  

Isti konto koji prima knjigovodstveni trošak može, dakle, biti istovremeno dodijeljen više centara koji se odnose na različite dimenzije (i stoga "grupe").  

Unutar iste dimenzije, transakcija može biti podijeljena (na primjer, 50%) na dva centra.  

<details>

  <summary>Kliknite za prikaz slike</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

</details>

**Konto / Podkonto / Opis**: polja za unos knjigovodstvenog konta koji se dodjeljuje centru. Podaci će biti automatski uneseni ako postoji definirana povezanost u kontnom plamu ili u šifarniku (pogledajte u nastavku).  

**Projekt**: Ako je u knjigovodstvenom predlošku omogućena oznaka za projekte, ovo polje omogućava dodjeljivanje zapisa nekom projektu. *Widget* se odnosi na tablicu Projekti (Upravljanje projektima > Projekti > Projekti).

:::danger PAŽNJA:
Ako su aktivirane napredne funkcije za kontroling, projekt se može dodijeliti samo ako je povezan s poslovnim centrom koji je povezan s dimenzijom tipa "Nalog/projekt" ili dimenzijama za koje je aktiviran flag **Omogućiti narudžbu**.  

Ta dimenzija (koja se može imenovati po želji, iako se preporučuje jasno ime, poput "Narudžbe" ili "Projekti") povezuje se s ispravnom vrstom putem flaga prisutnog u tablici **Dimenzije** (Konfiguracija > Tablice > Kontroling > Analitičko računovodstvo > Dimenzija). 
:::

**Centri troška / Opis centara troška**:  polja za unos (putem kombinirane kutije postavljene na polje Centri troška) centra na koji se dodjeljuje trošak (ili profit). *Combo box* odnosi se na tablicu **[Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** (Konfiguracija > Tablice > Kontroling > Analitičko računovodstvo > Poslovni centri).    
**Valuta**: vrijednost preuzeta iz podataka knjigovodstvenog zapisa, specificira valutu (koja zatim prikazuje protuvrijednost u eurima) zapisa koja se dodjeljuje.  
**Datum valute**: Datum promjene između valute i eura (preuzet iz zapisa).  
**Tečaj**: Vrijednost tečaja između valute i eura (preuzeta iz zapisa).   
**Iznos u valuti**:  Iznos u valuti zapisa (preuzet iz zapisa u slučaju potpune dodjele zapisa na jedan centar ili definiran putem postotka dodjele u planu konta ili šifarniku); vrijednost može biti ručno promijenjena kako bi se definirala dodjela centrima prema želji u slučaju raspodjele troška na više centara. Polje se prikazuje u jednom odjeljku i zatim se unosi u odjeljak dugovanja ili potraživanja u eurima prema shemi knjigovodstvenog predloška ili knjiženja, ali može biti i prisilno (ručno) postavljeno.  

**Iznos Dugovanja / Iznos Potraživanja**:  Iznos u eurima zapisa (preuzet iz zapisa u slučaju potpune dodjele zapisa na jedan centar ili definiran putem postotka dodjele u planu konta ili šifarniku); vrijednost može biti ručno promijenjena kako bi se definirala dodjela centrima prema želji u slučaju raspodjele troška na više centara.  

**Od datuma obračuna / Do datuma obračuna**: Preuzeti iz zapisa (mogu biti prisilno postavljeni). Omogućuju ispravke prema obračunu (odgođeni prihodi i rashodi) i za zapise centara.  

**Opis Detalja**: Preuzet iz istoimenog polja u redovima knjigovodstvenog zapisa.  

#### Unos podataka u odjeljke cdc/cdp može biti automatiziran na dva načina:  

- kroz dodjelu centara u kontnom planu, na konta troška/prihoda, valorizirajući postotak dodjele vrijednosti svakog konta na jedan ili više centara. Za više detalja pogledajte **[Kontni plan](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**. 

- u šifarnicima klijenata/dobavljača, (također u postotku), u slučaju u kojem su sva konta unesena u knjiženje na ime subjekta bit će valorizirani na isti način i dodijeljeni centru navedenom u šifarniku.   

Prioritet valorizacije između pravila postavljenog u planu konta i onog definiranog u šifarniku postavlja se unutar **[parametara općeg računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**.

Dozvoljene su ručne izmjene izračunanih iznosa, kao i izravno unositi ručne redove: u drugom slučaju, postupak će automatski predložiti iznose za pokrivanje, konto po konto, ukupnog iznosa zapisa u računovodstvu, prikazujući isti raspon datuma obračuna. Važno je naglasiti da postupci ispravke i integracije također uključuju ispravak transakcija dodijeljenih centru troška/profita.  

Pri spremanju knjiženja, aplikacija će prikazati obrazac s detaljima razlika u valorizaciji, eventualno blokirajući spremanje ako je to postavljeno u korištenom predlošku.  

#### Specifične tipke  
> **Izbriši odabrane centre troška**: omogućuje brisanje odabranih centara troška.   
> **Izbriši odabrane centre profita**: omogućuje brisanje odabranih centara profita.   
> **Proširi/smanji**: omogućuje smanjenje prikaza samo na dio centara troška ili profita, i obrnuto, ili proširenje na oba.   

## **6. Projekti**

Kartica **Projekti** prisutna je samo ako je u predlošku postavljena opcija *Projekti*.

:::danger PAŽNJA:
ako su aktivirane napredne funkcije za kontroling (flag *Upravljanje kontrolingom* nu tablici Tvrtka), projekt se može dodijeliti samo povezivanjem s poslovnim centrom koji je, zauzvrat, dodijeljen dimenziji tipa Narudžba. 

**Ako su aktivirane napredne funkcije za kontroling, kartica u komentarima NEĆE biti vidljiva**. 

Umjesto toga, vidljivo će biti polje u zaglavlju knjiženja za dodjelu Projekta cijelom knjiženju umjesto pojedinačnim stavkama zapisa.  
:::
 
Na ovoj kartici bit će dodijeljeni različiti ekonomski podaci iz knjiženja za različite projekte: automatski će svi biti dodijeljeni projektu unesenom u zaglavlje, ali korisnik može ručno podijeliti iznose na različite projekte izravno u ovoj sekciji.  

Pri ručnom unosu iznosa, softver će automatski dodijeliti preostalu vrijednost kako bi se uskladio računovodstveni zapis. Predviđeni su kontrolni mehanizmi za usklađivanje iznosa s općim računovodstvom i mogućnost blokiranja spremanja registracije u slučaju razlika (pogledajte '** [parametri](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**' predloška).

## 7. Osnovna sredstva 

Tablica Osnovna sredstva posvećena je upravljanju dugotrajnom imovinom/osnovnim sredstvima: koristi se za evidentiranje nabave, povećanja, prodaje i uništenja imovine.  

PAŽNJA: Ova tablica je vidljiva samo ako predložak koji se koristi ima aktiviranu opciju '**Osnovna sredstva**'. Osim toga, preporučuje se postaviti, također u predlošku (kartica **[Detalji](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**), **Tip operacije** koju (operaciju) treba izvršiti putem padajućeg izbornika pored prethodno navedene oznake (nabava, rashodovanje, uništenje itd.).

Stoga je preporučljivo kreirati različite predloške namijenjene dugotrajnoj imovini, prilagođene izvršavanju različitih mogućih operacija.

### Gornja tablica  

Ova tablica posvećena je kodiranju/šifriranju novog kupljenog sredstva ili odabiru postojećeg sredstva za evidentiranje nove operacije. **Za unos novog sredstva** dovoljno je popuniti novi redak, **za odabir postojećeg sredstva** potrebno je koristiti tipku **Odaberi postojeće osnovno sredstvo** u traci izbornika kako bi se pozvala već postojeća kartica sredstva i integrirala u novu operaciju.

#### POSTUPAK ZA UNOS:

- Odaberite **Kategoriju osnovnog sredstva** putem padajućeg izbornika (koji je povezan s tablicom '**[kategorija osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-category)**'),    
- odaberite **Vrstu posjedovanja** (normalno će biti predloženo 'Imovina u vlasništvu' prema zadanim postavkama), (**Opis**: polje za unos dodatnih slobodnih napomena)   
- Dodijelite eventualnu **Predšifru/šifru** (ako želite omogućiti takvo numeriranje jer nije moguće imati dvije kartice osnovnog sredstva s istim brojem, osim ako ne koristite predšifru koja omogućuje dodjelu nove numeracije povezane s njim) - padajući izbornik je povezan s tablicom '**[Prekod/šifra osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-precode)**'  
- Potvrdite automatski dodijeljenu numeraciju za karticu osnovnog sredstva ili postavite željeni broj (također putem kombinacije s predšifrom)
- Unesite '**Opis osnovnog sredstva**' (koji će biti prikazan u kartici osnovnog sredstva i koristiti se u svim izvještajima modula, kao što su knjiga osnovnih sredstava i ispisi kartica).   

Svi ovi podaci bit će automatski preuzeti iz postojećeg osnovnog sredstva u slučaju dodatne operacije.  

- Unesite **Iznos** (imovina koja odgovara cijeni operacije, tj. osnovici plus eventualni nedospjeli PDV u slučaju nabave, ili prodajna cijena u slučaju potpune ili djelomične prodaje);

- Unesite **stopu PDV-a** putem odgovarajućeg padajućeg izbornika.  

Polje **% ne priznati**. koje se odnosi na postotak nepriznatosti PDV-a obično se automatski popunjava i ovisi o odabranom PDV kodu prema postavkama u tablici **[Stopa i metode PDV-a](/docs/configurations/tables/finance/vat-rates)**, stoga se ne preporučuje ručna promjena.  

**Stanje**: polje koje se automatski postavlja, inicijalno, prilikom nabave postavlja se na 'nije amortizirano', kasnije, ovisno o nakupljenim amortizacijama, stanje će biti 'djelomično amortizirano' ili 'potpuno amortizirano'. Vrijednost se može ručno postaviti putem padajućeg izbornika povezanog s fiksnom tablicom.  
**Vrsta operacije**: predložena na temelju postavke konta. Tipično, u slučaju nabave ili povećanja, vrsta operacije je 'izvorni trošak', dok će za prodaju biti 'Djelomična prodaja' ili 'Potpuna prodaja';    
**Konto / Podkonto / Opis**: podaci se preuzimaju iz kategorije osnovnog sredstva (ako su uneseni u tablicu **[Kategorija osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-category)**);  
**Datum početka amortizacije**: automatski se predlaže na temelju datuma knjiženja. Od tog datuma provjerava se godina u kojoj osnovno sredstvo može početi biti amortizirano;     
**Datum završetka amortizacije**: nije uneseno (ali vizualizacija u knjizi osnovnih sredstava ovisi i o ovom polju);    
**Početak / kraj jamstva**:  informativno polje koje se odnosi na valjanost jamstva.    
**Iskorišten**: označava osnovna sredstva koja su kupljena kao rabljena (za ta osnovna sredstva primjenjuje se 100% postotak amortizacije u prvoj godini, a predviđena amortizacija primjenjuje se samo za jednu godinu).   
**U upotrebi**: (preporučeno kao zadano pri spremanju) označava da je osnovno sredstvo stvarno u upotrebi. Bez ovog oznaka, osnovno sredstvo ne može biti amortizirano.     
**U održavanju**: označava da osnovno sredstvo treba biti uključeno u izračun održavanja.

**Napomene**: polje za bilješke, koje se ne prikazuje u standardnim izvještajima (može se dodati personaliziranjem izvještaja).  

**Porezna statistika**: omogućuje upravljanje donjom tablicom "Upravljanje podacima predmeta" kako bi se koristila za poreznu amortizaciju.  

**Fiktivna tvrtka**: koristi se za označavanje osnovnih sredstava koja treba uzeti u obzir u izvještajima o osnovnim sredstvima koji spadaju u porezne kategorije. 

**Vrste odbitaka**: omogućuje postavljanje poreznog odbitka za amortizaciju osnovnog sredstva. *Combo box* je povezan s tablicom **[Vrste odbitaka](/docs/configurations/tables/finance/deductibility-types)**.

**Jedinice mjere**: padajući izbornik koji omogućuje odabir mjerne jedinice (šifre) za količinu (npr, kg, kom); **Opis** odabrane jedinice prikazan je u susjednom polju;

**Postotak**: polje vidljivo samo ako je unutar obrasca **[Parametri Osnovnih Sredstava](/docs/configurations/parameters/finance/fixed-assets-parameters)**  aktivirana opcija 'Postotak po pojedinom Osnovnom Sredstvu'. Omogućuje definiranje specifičnog postotka amortizacije za unos osnovnog sredstva, koji će imati prioritet u odnosu na onaj definiran unutar odgovarajuće kategorije osnovnih sredstava. Polje je prikazano unutar obrasca osnovnog sredstva.  

**Vrsta porezne amortizacije**: omogućuje odabir vrste amortizacije koja će se primijeniti; **Opis** je prikazan u susjednom polju; padajući izbornik je povezan s tablicom **[Vrste Objektivne Amortizacije](/docs/configurations/tables/finance/objective-amortization-types)** (Vrsta Amortizacije).

**Pri spremanju retka mogu se pojaviti, ovisno o slučaju, različite poruke**:

- „Dugotrajna imovina ima vrijednost manju od ___. Želite li obračunati 100 % amortizacije?” – kategorija dugotrajne imovine ima definiranu vrijednost u polju Granica za jednokratnu amortizaciju, a vrijednost novounesene dugotrajne imovine niža je od tog praga (primjerice, imovina vrijednosti manje od 516 €), za koju porezni propisi dopuštaju jednokratno priznavanje cijelog iznosa kao troška, odnosno 100 %-tnu amortizaciju u godini nabave. Odabirom opcije Da sustav će postaviti obračun amortizacije na 100 % u prvoj godini tako što će ažurirati odgovarajuću oznaku u zaglavlju matičnih podataka dugotrajne imovine, čime će se takva imovina posebno obrađivati u automatskom postupku obračuna amortizacije.

- „Želite li djelomično otuđenje povezati s postojećom imovinskom transakcijom?” – ova se poruka prikazuje kada se koristi računovodstveni predložak za djelomičnu prodaju, a kategorija dugotrajne imovine nema aktiviranu oznaku inkrementalno. U tom slučaju sustav pita želi li se iznos djelomičnog otuđenja povezati s određenom imovinskom transakcijom dugotrajne imovine. Primjerice, kod dugotrajne imovine koja nije inkrementalna (pri čemu se naknadna ulaganja vode kao zasebne komponente), svaka se pojedina imovinska transakcija amortizira zasebno, s vlastitim vijekom trajanja. Zato djelomično otuđenje ukupne dugotrajne imovine u praksi može predstavljati potpunu prodaju jedne od njezinih komponenti (npr. računalo je naknadno nadograđeno skenerom, a kasnije se prodaje samo skener).

**Odabirom Da (Yes)** prikazat će se pomoć (pop up) za pretragu koje **komponente** osnovnog sredstva želite prodati, omogućujući odabir putem tipki *Traži* i *Odaberi*  

Posebno, napominjemo da su različite komponente lako prepoznatljive jer se odnose, unutar pomoći, na polje **Progresivni broj** (*Progresivno*.) kao i unutar kartice osnovnog sredstva.  

### Tablice (dolje)

Sadržaj se odnosi na odabrani gornji redak.  

#### IMOVINSKE OPERACIJE:   

(dodaje se novi redak za svaku operaciju učitanu u gornjoj tablici).  

**Datum operacije**: Datum kada se zabilježi kretanje u knjizi osnovnih sredstava;  

**Progresivan**: Progresivni broj retka operacije;  

**Izvorni trošak**: Polje se popunjava samo operacijama koje koriste tip operacije "izvorni trošak" s vrijednošću nabave (odgovara osnovnoj cijeni + eventualni neodbitni PDV);  

**Količina**: Odnosi se na količinu robe koju treba unijeti;  

**Porez koji se NE može odbiti**: Sadrži vrijednost eventualnog neodbitnog PDV-a, koja se pribraja nabavnoj vrijednosti radi utvrđivanja početne knjigovodstvene vrijednosti (povijesnog troška) dugotrajne imovine. Vrijednost se automatski popunjava na temelju iznosa unesenog u polje Iznos u gornjoj tablici, u skladu s PDV šifrom odabranom u susjednom polju, ako ona predviđa neodbitni PDV.

**Iznos koji se ne može amortizirati**: Ako je u odgovarajućoj kategoriji osnovnog sredstva uneseno polje "Postotak amortiziranosti", polje će se automatski popuniti; iznos se oduzima od iznosa za izračun amortizacije, npr. Postotak amortizacije = 50%, Trošak povijesti 30.000;  

Amortizacija 30.000 - 15.000 = 15.000 x 3%; Amortizacija će se izračunavati dok fond ne dosegne 15.000;

**Ostatak koji se ne može amortizirati**: ručno upravljan, s obzirom na prethodni primjer polje će prikazivati amortizaciju 30.000 * 3%, ali dok fond ne dosegne 15.000;

**Već amortiziran**: Vrijednost je vidljiva samo ako je izračunata amortizacija, ali još nije knjižena (nakon knjiženja, iznos će se zbrojiti u "Knjižnu vrijednost" i u fond);  

**Zbirna linearna amortizacija**: polja prihvaćaju, ovisno o vrsti amortizacije (Obično, predviđeno, usporeno ili ostatak), zbir obračunatih rata amortizacije;  

**Zbirna financijska amortizacija**: popunjava se ako je aktivirana oznaka 'Fiskalni' u kategoriji osnovnog sredstva, ili može biti aktivirana na razini pojedinog retka u kartici "Amortizacija";

**Otuđenje**: prihvaća prodajnu vrijednost imovine i automatski se popunjava putem polja 'Iznos' u gornjoj tablici ako je Tip Transakcije 'Otuđenje'. Na temelju ove vrijednosti i vrijednosti kapitalne dobitke ili gubitka, ažurirat će se povijesna vrijednost imovine koja se treba ispisati iz knjige imovine;;

**Djelomično otuđenje**: prihvaća prodajnu vrijednost imovine i automatski se popunjava putem polja 'Iznos' u gornjoj tablici ako je Tip Transakcije 'Djelomično otuđenje'. Na temelju ove vrijednosti i vrijednosti kapitalne dobitke ili gubitka, ažurirat će se povijesna vrijednost imovine koja se treba ispisati iz knjige imovine;  

**Kapitalna dobit**: prihvaća vrijednost kapitalne dobiti od prodaje imovine i sudjeluje u izračunu povijesne vrijednosti prodane imovine;

**Reinvestirana dobit**: nije aktivno;

**Revalorizacija**: povećava povijesni trošak u skladu sa zakonom o revalorizaciji; 

**Otpis vrijednosti**: prihvaća vrijednost kapitalnog gubitka od prodaje imovine i sudjeluje u izračunu povijesne vrijednosti prodane imovine.  

**Uništenje**: obično se popunjava s nulom (umjesto polja 'Poravnanje' ili 'Parcijalno poravnanje'), može se dodijeliti vrijednost za posebne slučajeve (na primjer, vrijednost otpisanog otpada);  

**Otuđeni izvorni trošak**: povijesna vrijednost koja se prodaje u okviru operacije s vrstom operacije 'Otuđenje' ili 'Djelomično (parcijalno) otuđenje' izračunava se na temelju podataka unesenih u polja otuđenje, djelomično otuđenje, (ili uništenje), Kapitalna dobit i Kapitalni gubitak. Polje 'Knjigovodstvena vrijednost' bit će, paralelno, ispravljeno negativno za iznos koji je određen na temelju izvorne vrijednosti prodane imovine umanjene za linearni amortizacijski fond.  

**PDV**: nije aktivno u Italiji;

**Usklađivanje**: nije aktivno u Italiji;

**Vrijednost u eurima**: protuvrijednost u eurima ako je vrijednost izražena u drugoj valuti ili ako je valuta društva različita od eura;

**Podkonto**: konto dobavljača (kupovina) ili kupca (prodaja) na razini retka koji se odnosi na pojedini sastavni dio (mogu biti kupljeni ili prodani različitim subjektima);  

**Datum dok./Br. dok./PDV broj**: reference na račun za nabavu ili prodaju koji odgovara retku zapisa;  

**Napomene**: slobodne napomene po retku;  

**Napredak prodaje**: u slučaju djelomičnog otuđenja prikazuje redni broj odabrane stavke za prodaju odgovarajućeg sastavnog dijela;  

**Ispisano**: aktivira se ako je konačno ispisana knjiga imovine za dotičnu stavku.  

#### EKONOMSKE OPERACIJE:

(uglavnom se ne koristi), služi za povezivanje s karticom imovine troška koji se ne kapitalizira (jer nije dugoročni).  

Podaci sadržani u ovoj kartici popunjavaju se ako u gornjoj tablici bude unesena stavka s Tipom transakcije 'Ekonomski poslovi'.  

Polja su slična onima u kartici Imovinske transakcije. 

#### AMORTIZACIJE:

Obično se ne koristi unutar računovodstvenog zapisa, jer se amortizacija lakše upravlja putem odgovarajuće automatske procedure unutar knjiženja usklađenja, ili, za pojedinu imovinu, unutar kartice imovine (u odgovarajućoj tablici koja replicira polja prisutna u komentiranoj kartici).  

U slučaju da se želi, unutar zapisivanja početnog unosa, izvršiti amortizacija (što se odnosi na karticu imovine, računovodstveni dio bit će upravljan u kartici Zapis), potrebno je pozvati postojeći imovinski predmet za amortizaciju putem tipke **Odaberi postojeće osnovno sredstvo** koji će prikazati odgovarajući redak u gornjoj tablici, osigurati da je vrsta operacije *Obično amortiziranje*, ako već nije predviđeno u postavkama predloška, unijeti u polje **Iznos** vrijednost godišnje amortizacije koju treba zabilježiti, zatim u kartici *Amortizacije* označiti godinu amortizacije (polje **Godina**) i ručno ispuniti obavezna polja u tablici:  

**Progresivan**: omogućuje odabir putem padajućeg izbornika reda kartice imovine za amortizaciju (jedini redak ako nema dodatnih komponenti ili povećanja imovine);

**Godina**: Potvrditi godinu amortizacije;

**Vrsta amortizacije**: Obično, predviđeno, usporeno ili ostatak  

**Konto / podkonto / opis kvote amortizacije**: obično se automatski poziva prema kategoriji imovine reda učitanog u gornjoj tablici;  

**Konto / podkonto / opis fonda amortizacije**: obično se automatski poziva prema kategoriji imovine reda učitanog u gornjoj tablici;

**Osnovica**: vrijednost imovine (povijesna) na temelju koje se izračunava amortizacija primjenom **Postotka** (ili stope amortizacije);

**Dani posjeda**: na temelju kojih se izračunava amortizacija ako su u postavkama odgovarajuće kategorije imovine odabrani dani (s odgovarajućom tipkom);  

**Trošak**: rezultat izračuna osnovica * postotak * dani posjedovanja / 365 (može se ručno podesiti).  

**Knjiženo**: opcija "Knjiženo", dodjeljuje knjiženju status Knjiženo i sprečava njezino brisanje; bez ove tipke kasnija amortizacija neće moći biti obrađena.

**Fiskalni**: opcija označava amortizaciju za porezne svrhe i povećava porezni fond u odgovarajućem polju, odvojenom računovodstvenog.

**Amortizacija odbitna / Amortizacija neodbitna**: polja se automatski popunjavaju s odbitnim i neodbitnim iznosima amortizacije, ako je u **[kategoriji imovine](/docs/configurations/tables/finance/fixed-asset-category)** postavljeno polje 'vrsta odbitka', i zauzvrat povezano s tablicom **[Vrste odbitaka](/docs/configurations/tables/finance/deductibility-types** gdje se definira postotak odbitka. Inače se mogu ručno popuniti.

U kartici Imovinske operacije vrsta operacije 'Obično' amortiziranje već će ažurirati redak knjige imovine koji povećava fond amortizacije i smanjuje neto računovodstvenu vrijednost imovine za isti iznos.  

#### UPRAVLJANJE PODACIMA PREDMETA:

Ova kartica omogućuje upravljanje podacima korisnim za tehničku (izvanračunovodstvenu ili poreznu) amortizaciju, koji se mogu obrađivati paralelno s računovodstvenom amortizacijom.  

Prvo, unutar tablice **[Kategorije imovine](/docs/configurations/tables/finance/fixed-asset-category)** mora biti aktivirana odgovarajuća opcija za prijem podataka unutar kartice imovine.  

Nakon unosa računovodstvenog knjiženja, primjerice nabave dugotrajne imovine, podaci potrebni za obračun tehničke odnosno porezne amortizacije automatski se prenose u ovu karticu. Ti se podaci po potrebi mogu naknadno mijenjati, neovisno o službenim podacima koji se koriste za računovodstveno evidentiranje imovine. 

Polja u ovoj kartici zapravo repliciraju ona koja se nalaze u kartici "Imovinske operacije". Kartica "Amortizacije", s druge strane, koristi se isključivo za računovodstvene upise, tako da se upravljanje tehničkim (izvanračunovodstvenim) amortizacijama može izvršiti samo ulaskom u karticu imovine (Administracija > Osnovna sredstva > Osnovna sredstva > dvostruki klik za ulazak).  

#### CENTRI TROŠKOVA - PROJEKTI  

Ova kartica (**vidljiva samo kada NISU aktivirane napredne funkcije za Kontroling**) upravljana opcijom *Upravljanje kontrolingom* u tablici poduzeća, rezervirana je za unos centra troška / profita i projekta  koji se povezuju s karticom imovine koja će biti kreirana s računovodstvenim zapisom koji se unosi.  

Konkretnije, centar koji će biti povezan s karticom imovine uz zapis (a koji se može unijeti i ručno izravno u karticu, u kartici 'Detalji' iste) predstavlja iznimku, specifičnu za tu imovinu, u odnosu na podatke unesene u kategoriju imovine kojoj pripada kartica unesena u tablici Kategorije imovine.

**Uneseni centar troška bit će vrednovan u trenutku izračuna (od strane automatskog postupka) amortizacije.**

:::tip NAPOMENA:
Ako su aktivirane napredne funkcije za kontroling, upravljanje centrom poduzeća i projektom na koji će se povezati kvote amortizacije bit će definirano u posebnoj kartici **Amortizacija za kontroling** unutar kartice imovine. 
:::

**Cdc**: padajući izbornik potreban za odabir centra, povezan s tablicom **[Centri poduzeća;](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)**

**Opis**: Opis odabranog centra putem prethodnog polja;

**Postotak**: postotak dodijeljen centru unesenom u redak koji se koristi (na primjer, ako je cijeli trošak dodijeljen tom centru, unosi se 100%, ako se trošak za amortizacijsku kvotu dijeli na dva centra, unose se dva retka, svaki s podjelom od 50%).  

**Pregled rezerviran za unos projekta** ne ažurira se i ne povezuje s poljem 'Projekt' u zaglavlju zapisa i/ili kartici 'Projekti' (koji su posvećeni upravljanju običnim operativnim troškovima, a ne dugoročnim troškovima). Naime, ta tablica je posvećena, kao i za centre poduzeća, za označavanje projekta koji će biti unesen u karticu imovine i na koji će se dodijeliti kvote amortizacije.

**Projekti**: *widget* za unos projekta (dvostruki klik otvara pomoć za pretragu, ili početak pisanja u polje aktivira brzu pretragu); polje je povezano s tablicom Projekti.  

**Postotak**: postotak dodijeljen projektu unesenom u redak koji se koristi (na primjer, ako je cijeli trošak dodijeljen tom projektu, unosi se 100%, ako se trošak za amortizacijsku kvotu dijeli na dva projekta, unose se dva retka, svaki s podjelom od 50%).  

## POSTUPAK ZA PRODAJU IMOVINE

- Unesite računovodstveni predložak odgovarajuće konfiguriran i ispravnu vrstu transakcije, primjerice 'potpuno otuđenje'.
- Ispunite zaglavlje knjiženja na uobičajen način unosom kupca, podataka o računu i ukupnog iznosa.
- Na kartici Osnovna sredstva upotrijebite naredbu 'Odaberi postojeće osnovno sredstvo' kako biste otvorili zapis sredstva koje se prodaje.
- U gornjoj tablici u polje Iznos unesite osnovicu prodajne vrijednosti ugovorene s kupcem. Ako se imovina daruje ili uništava, unesite vrijednost 0.
- U donjoj tablici sustav automatski stornira iznos akumulirane amortizacije, a na temelju razlike automatski izračunava i popunjava polje kapitalni dobitak ili gubitak.

Ako je računovodstveni predložak ispravno konfiguriran (preporučuje se korištenje standardnog predloška), računovodstvena sekcija bit će automatski popunjena svim potrebnim PDV i računovodstvenim podacima, uključujući: otpis nabavne (povijesne) vrijednosti dugotrajne imovine, storniranje akumulirane amortizacije, evidentiranje kapitalnog dobitka ili gubitka.

## OSTALO

U slučaju djelomičnog otuđenja (uvijek za inkrementalnu dugotrajnu imovinu, odnosno za djelomično otuđenje koje nije povezano s postojećom imovinskom transakcijom kod neinkrementalne dugotrajne imovine), korisnik mora dopuniti redak djelomične transakcije iznosima storniranja akumulirane amortizacije (s negativnim predznakom) te unijeti odgovarajući kapitalni dobitak ili gubitak. Iste je iznose potrebno unijeti i na kartici Knjiženje radi evidentiranja u glavnoj knjizi.

U svim ostalim slučajevima aplikacija će automatski ažurirati karticu dugotrajne imovine, evidentirati transakciju u PDV sekciji knjiženja te na temelju tih podataka ažurirati računovodstveno knjiženje. Kod otuđenja, ako su podkonta za kapitalni dobitak i kapitalni gubitak definirana i u računovodstvenom predlošku i u parametrima računovodstva, sustav će automatski dodati i retke potrebne za evidentiranje prodaje, uključujući: storniranje ukupne nabavne vrijednosti dugotrajne imovine, jedan ili više redaka za storniranje akumulirane amortizacije, evidentiranje kapitalnog dobitka ili gubitka, ovisno o razlici.

**Dodatne funkcionalnosti kartice dugotrajne imovine**:

Prilikom unosa nove dugotrajne imovine moguće ju je automatski podijeliti na više zasebnih zapisa.
To je korisno kada se jednom nabavom stječe više istovjetnih sredstava, primjerice pet jednakih računala. Umjesto ručnog unosa pet zasebnih zapisa, korisnik može unijeti jednu dugotrajnu imovinu za ukupnu vrijednost, a zatim je pomoću odgovarajuće naredbe automatski podijeliti na pet jednakih zapisa.
Druga je mogućnost evidentirati cijelu nabavu kao jednu dugotrajnu imovinu koja predstavlja skup od pet sredstava. Iako takav pristup pojednostavljuje vođenje registra dugotrajne imovine, kasnije može otežati upravljanje prodajom pojedinih sredstava, jer će se svaka pojedinačna prodaja morati evidentirati kao djelomično otuđenje.
Moguće je i obrisati redak dugotrajne imovine unesen u gornjoj mreži. U tom slučaju sustav će zatražiti potvrdu želi li korisnik obrisati i matične podatke dugotrajne imovine, pri čemu je zadana opcija Ne. Ista se poruka prikazuje i prilikom zatvaranja knjiženja bez spremanja.
Preporučuje se posebna pažnja pri odgovoru na ovu poruku kako u bazi podataka ne bi ostali prazni zapisi dugotrajne imovine.

#### Specifične tipke
> **Odaberi postojeće osnovno sredstvo**: omogućuje odabir već postojećeg osnovnog sredstva i unos novog zapisa u okviru njega.    
> **Izbriši osnovno sredstvo**: omogućuje brisanje odabranog osnovnog sredstva.  
> **Izbriši odabrane podatke iz ekranske tablice tipa amortizacije**: omogućuje brisanje odabranog retka unutar tablice (donje) koja se nalazi u kartici Amortizacije.  

## **8. Parametri**

Kartica **Parametri** uvijek je prisutna u računovodstvenoj evidenciji i sadrži niz informacija i parametara koji su korisni, ali nisu nužni za unos zapisnika.  

**Status zapisa**: *definitivno* ili *privremeno* za računovodstveni zapis u upotrebi: zapis s statusom ‘definitivno’ i dalje će biti moguće mijenjati (osim u predlošku i referentnoj valuti) sve dok ne bude definitivno ispisana obavezna fiskalna knjiga ili dok ne bude korištena u automatskom zatvaranju računa. Korištenje statusa ‘privremeno’ (koji uklanja i onemogućava porezne zapise te numerira zapis negativno počevši od -1000) može se koristiti za evidentiranje računa za plaćanje unaprijed ili drugih vrsta periodičnih transakcija s budućim manifestacijama (poput odgođenih naknada). Ulazak u zapis i ponovno postavljanje statusa definitivan automatski će ponovno dodijeliti broj zapisa i važeći porezni protokol za postavljeni datum zapisivanja (uzimajući u obzir njegovu progresivnost). Podsjećamo da postoji postupak za upravljanje privremenim zapisima koji omogućava masovno prebacivanje skupine odabranih privremenih zapisa u status definitivan.

Sljedeće opcije proizlaze iz računovodstvenog predloška:  

**Grupiraj knjiga PDV-a** (preporučuje se ostaviti uvijek aktivnim) grupira/ne grupira u dnevniku redove PDV-a koji se odnose na isti konto;  

**Automatsko preračunavanje centara troškova, prihoda i projekata**: može biti od interesa za neke vrste ručnih zapisa, kod kojih je korisnik obično vezan za ručno upravljanje karticama centara troškova/projekata (cdp/cdc): ostavljanjem opcije uključenom, aplikacija će uvijek resetirati te kartice svaki put kada se izmijeni izvorni podatak u knjizi dnevnika, što može dovesti do gubitka svih ručnih unosa koji su prethodno napravljeni. Ovaj automatizam, čak i ako opcija nije uključena, i dalje će se primijeniti prilikom unosa zapisa: odnosi se na ulazak u izmjenu istog.

**Na crnoj listi**: (ZASTARJELO) omogućuje upravljanje posebnim slučajem nabava izvan EU (s poslovnim razlogom koji nije podliježe PDV-u) koji treba biti sažet u izjavi o transakcijama s zemljama s povlaštenim poreznim režimom, povezujući trenutni zapis s PDV-om iz carinskog dokumenta iz kojeg se preuzimaju podaci za prijavu.  

**Datum / Broj povezane registracije**: Koristilo se za prijavu transakcija s dobavljačima koji su na crnoj listi, povezujući Dokument o dostavi robe s registracijom dobavljača na crnoj listi kako bi se preuzeli podaci za prijavu.

**Datum / Broj povezanog na odobrenje**: zastarjeli podatak; u prodaji, kada se kreira odobrenje, može se unijeti koja se faktura odnosi na dokument:    

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/parameters-tab/image02.png)

Na slici: polje za unos reference računa unutar odobrenja.

Kada se knjiži odobrenje, Fluentis pokušava identificirati knjižene povezanu s tim računom kako bi automatski ispunio ovu povezanost i na razini računovodstva (ako unosite odobrenje ručno, tada možete također ručno postaviti ova polja). Koristilo se za *spesometar* (prije 2017. godine), kada je postojao limit od 3000 eura, kako bi se ispravile obavijesti o kreditiranju iz računa i ne prijavljivale transakcije. Danas više nije u upotrebi.

**AUDIT TRAIL**:

Sekcija posvećena sustavu za praćenje aktivnosti korisnika i provjeru izmjena podataka integriranog u poslovni sustav "Audit Trail".  

**Datum kreiranja / Ime**: prikazuje datum i ime korisnika koji je kreirao trenutno knjiženje;  

**Datum posljednje izmjene / Ime**: prikazuje datum posljednje izmjene i ime korisnika koji je izmijenio trenutno knjiženje;  

**Datum validacije / Ime**: prikazuje datum i ime korisnika koji je validirao trenutno knjiženje. Polje mora biti aktivirano promjenom stanja (koje se mora konfigurirati kada je potrebno), a koje će postaviti korisnika i datum validacije. Kada je polje ispunjeno promjenom stanja, registracija može biti označena kao nepodložna daljnjim izmjenama.
  
**Partnerov račun**: (ZASTARJELO) polje za unos (putem *widget*a za pretraživanje računa) konta koji je već šifriran u bazi podataka; korisno za pohranu, na primjer, imena stranog dobavljača u dokumentu (primki) za carinske postupke, koji se obično unosi s referencom na bazu podataka s generičkim podacima za subjekt "carina" (to je zbog izmjena u zakonodavstvu vezanim uz *spesometar* prema kojem od 2018. godine nije bilo dopušteno prosljeđivanje podataka carine koja često nema porezne reference i koristila se umjesto OIB-a generički unos XX-99999999, gdje XX označava međunarodni ISO kod države subjekta).  

**Donja tablica** prikazuje eventualno automatsko knjiženje povezano s trenutnim: svaki put kad se prva knjiženje izmijeni, sustav će nastaviti usklađivati drugu prema logici automatskih uzoraka.  

## 9. Grupiranje stavki

Upravljanje grupiranjem stavki omogućuje kreiranje, u fazi otvaranja stavki ili naknadno, grupa stavki (grupa je neka vrsta spremnika unutar kojeg se, vizualno, nalaze pojedinačne stavke).

Tim grupama moguće je zatim upravljati spajanjem ili razdvajanjem otvorenih stavki. Tako je u fazi plaćanja moguće fleksibilno povezati samo plaćanje s grupama i pripadajućim detaljnim otvorenim stavkama.

Ovaj tip upravljanja, očito specifičan, pogoduje onima koji rade u sektorima poput velike distribucije ili maloprodaje, ili bilo kome tko upravlja velikim brojem malih iznosa i visokim brojem stavki, gdje je povezanost između izdanih ili zaprimljenih faktura i njihovih povezanih uplata podložna velikoj fleksibilnosti, te manje stroga u usporedbi s uobičajenom operativom.

Ova funkcionalnost, kada je postavljena, ne može se koristiti zajedno s uobičajenim upravljanjem stavkama i uplatama: odabir između jednog ili drugog načina upravljanja mora biti napravljen unaprijed, pri postavljanju uzoraka računovodstvenih transakcija, s jasno definiranim karakteristikama ove vrste upravljanja.

**UPRAVLJANJE PREDLOŠKOM I REZULTAT U ZAPISU**:

Predložak za otvaranje dospijeća plaćanja (na primjer za "Izdavanje fakture" ili "Faktura dobavljača"); aktivirati uobičajene opcije za otvaranje dospijeća plaćanja (i eventualno za zatvaranje i kompenzaciju), dodajući oznaku Kreiraj grupu.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image01.png)

U zapisivanju poslovnog događaja, uz ovako modificirani predložak, prilikom unosa zapisa neće biti primjetnih razlika, a grupa dospijeća plaćanja neće biti vidljiva, no ona će biti kreirana s istim referencama kao i dospijeće plaćanja koje je u njoj sadržano.  

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image02.png)

Za izvršavanje izmjena na grupi, kao što je spajanje drugih dospijeća plaćanja ili raspodjela dospijeća plaćanja, potrebno je raditi unutar ekrana **[Raspodjela dospijeća plaćanja](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping)**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image03.png)

Ovdje će korisnik moći kreirati, za ova dospijeća plaćanja, jednu ili više novih grupa dospijeća plaćanja (koje će preuzeti broj i datum prema broju i datumu dokumenta dospijeća plaćanja koja ih stvara). Upravljanje ovim operacijama vrši se korištenjem izbornika koji se pojavljuje desnim klikom miša na svako dospijeće plaćanja. 

Označi: za selektiranje više dospijeća plaćanja/grupa

Kreiraj novu grupu: za kreiranje novih grupa;  

Razgrupiraj: za odvajanje dospijeća plaćanja iz grupe

Nadoknada: za kreiranje nadoknada i za zatvaranje grupe,

Detalji: za prikazivanje detalja pojedinačnog dospijeća plaćanja;  

Podijeli dospijeće plaćanja: za podjelu dospijeća plaćanja unutar grupe.

Vizualizacija grupa odvija se prema odabranom podkontu u gornjoj tablici.  

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image04.png)   ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image05.png)

Pomoću *drag and drop* metode, dospijeća plaćanja se mogu premještati iz jedne grupe u drugu.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image06.png)

NAPOMENA:

U slučaju automatskog knjiženja faktura iz modula nabave ili prodaje, u tablicama **Vrste faktura** (U **[nabavi](/docs/configurations/tables/purchase/purchase-invoices-type)** i **[prodaji](/docs/configurations/tables/sales/invoices-type)**) postoji slična opcija za automatsko knjiženje faktura.

Predložak za zatvaranje dospijeća plaćanja: (na primjer, "Plaćanje gotovinom") aktivirati opciju ‘Grupiraj dospijeća plaćanja' koja prikazuje karticu **Plaćanja grupa**.

Obavezno je odabrati odgovarajući tip plaćanja u padajućem izborniku. 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image07.png)

U ovom trenutku, operativni postupak za korisnika u zapisima uplata/isplata značajno se razlikuje od uobičajene obrade dospijeća plaćanja: korisnik će započeti unos u kartici **[Zapisi](/docs/finance-area/ledger-records/records/ledger-record)**, izravno unoseći iznos za uplatu/isplatu (popunjavanjem sekcija prve bilješke), a aplikacija će automatski stvoriti dospijeće plaćanja na temelju dugovanja/plaćanja, koje korisnik može kasnije ručno dodijeliti (ako želi) određenoj grupi u kartici 'Plaćanja grupe'.  

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image08.png)

Aplikacija će generirati odgovarajuće međusobne uplate za svako od tih dospijeća plaćanja, te se koristi samo izvještaji i maske za prikazivanje/upravljanje grupama kako bi se osigurao jasan pregled duga. Kada saldo grupe postane 0, grupa će automatski preći u status 'zatvoreno'.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image09.png)

**NAPOMENA: Za vizualizaciju grupiranja, odaberite red u gornjoj tablici**

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image10.png)

Izravno u kartici **Plaćanja grupa** korisnik može izvršiti daljnje izmjene kao što su de-grupiranje ili stvaranje novih grupa.

### VIDEO TUTORIJALI

:::important Pogledajte također
[**VIDEO TUTORIJALI O ZAPISIMA**](/docs/video/finance/intro)
:::