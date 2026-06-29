---
title: Novi zapis glavne knjige
sidebar_position: 1
---

Obrazac se otvara putem menija **Administracija > Zapisi glavne knjige > Zapisi > Novi zapis**, klikom na dugme **Novi** koje se nalazi u obrascu **[Pretraga računovodstvenih zapisa](/docs/finance-area/ledger-records/records/search-ledger-records)**.

## *Kako kreirati računovodstveni zapis za nabavku ili prodaju*

<details>

<summary>Klikni za osnovne korake</summary>

1. **Unesite obavezne podatke u zaglavlje**: *Datum knjiženja, ako se razlikuje od današnjeg*, ***Računovodstveni obrazac***, *Konto (kupac ili dobavljač)*, *Broj* i *Datum dokumenta*, *Ukupan iznos knjiženja*.

2. **Unesite podatke o PDV-u**: vrstu PDV-a, konto i stopu PDV-a (ako nisu već predloženi iz evidencije kupca/dobavljača).

3. **Upravljajte datumima *ekonomske/poreske nadležnosti***: po potrebi, naročito za usluge, kako bi se automatski generisala vremenska razgraničenja prihoda i rashoda.

4. **Proverite i po potrebi izmenite odeljak Dnevnik knjiženja**: po potrebi možete promeniti konta ili podeliti trošak ili prihod dodavanjem novih redova.

5. **Proverite odeljak Sažetak**, kako biste bili sigurni da su knjiženja uravnotežena.

6. **Proverite ili upravljajte karticom Dospijeća plaćanja**: ako podaci o kupcu ili dobavljaču nisu prikazani u osnovnim podacima, unesite podatke o vrsti i načinu plaćanja kako biste pravilno upravljali otvorenim stavkama u skladu sa računovodstvenim knjiženjem.

7. **Naplate ili isplate**: obrađuju se putem **kartice Plaćanja**, koja se koristi **najpre** pretragom stavki za zatvaranje pomoću dugmeta **Traži dospijeća plaćanja**, a zatim dvostrukim klikom na stavke koje treba zatvoriti. Na taj način će podaci o kupcima ili dobavljačima biti automatski preneti u odeljak **Dnevnik knjiženja**.

8. **Jednostavna knjiženja**: poput običnih finansijskih *prenosa*, mogu se unositi direktno u odeljak **Dnevnik knjiženja**, bez potrebe za odgovarajućim unosom u gornju tabelu PDV dokumenata.

9. **Ostale specifične sekcije koje nisu obavezne**: u zavisnosti od parametara aktiviranih u računovodstvenom obrascu, prikazaće se dodatne sekcije, kao što su **analitičko računovodstvo**, **Osnovna sredstva**, **Intrastat izveštaji** i provizije za **Agente**, kojima je moguće upravljati.

</details>

Računovodstveni zapis, a samim tim i obrazac za njegov unos, sastoji se od sledećih elemenata:

- **Zaglavlje** (*Header*), odnosno gornji deo obrasca, koje sadrži jedinstvene podatke o knjiženju, kao što su:

    > Datum

    > Broj

    > Ukupno

    > Knjiga PDV-a i referentni broj PDV-a

    > Ostalo

    > **Računovodstveni obrazac**, koji u zavisnosti od svojih podešavanja i parametara aktivira dodatne elemente opisane u nastavku.

    - **Podnožje** (*Footer*) obrasca sadrži opšti opis samog knjiženja, koji se upisuje u Dnevnik knjiženja, zajedno sa nekoliko zbirnih podataka i kontrolom ravnoteže između dugovne i potražne strane.
- Kartica **Zapis** sadrži dve podsekcije: ***Podaci o PDV-u*** (u zavisnosti od računovodstvenog obrasca) i ***Dnevnik knjiženja***, u kojem su prikazana računovodstvena knjiženja.
- Kartica **Dospijeća plaćanja**, ako je aktivirana, služi za otvaranje otvorenih stavki koje se evidentiraju u pregledu dospeća.
- Kartica **Plaćanja**, ako je aktivirana, upravlja zatvaranjem otvorenih stavki.
- Kartica **Analitika**, ako je aktivirana, omogućava upravljanje centrima unutar preduzeća (centri troškova / profitni centri).
- Kartica **Intrastat**, ako je aktivirana, omogućava unos podataka za naknadno automatsko kreiranje Intrastat izveštaja.
- Kartica **Osnovna sredstva**, ako je aktivirana, omogućava upravljanje nabavkom ili prodajom osnovnih sredstava.
- Kartica **Provizije**, ako je aktivirana, omogućava upravljanje kreiranjem i čuvanjem provizija agenata.
- Kartica **Projekti**, ako je aktivirana, omogućava praćenje poslovnih projekata (ugovora).
- Kartica **Grupisanje stavki**, ako je aktivirana, predstavlja poseban način upravljanja otvorenim stavkama.
- Kartica **Parametri** sadrži dodatne informacije o knjiženju.

## **1. Zaglavlje (Header)**

**Datum knjiženja**: prilikom kreiranja novog knjiženja postavlja se na tekući sistemski datum, ali ga je moguće promeniti unapred ili unazad, pod uslovom da je ispoštovan hronološki redosled PDV protokola i eventualno već odštampanih konačnih perioda, odnosno računovodstvenih izveštaja.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Važno je napomenuti da je ovaj datum ključan jer nije potrebno menjati poslovnu godinu.

Na osnovu datuma knjiženja aplikacija pronalazi računovodstvene parametre za odgovarajuću godinu (utvrđujući u koji vremenski raspon poslovna godina pripada), a zatim na osnovu njih preuzima ostale kontrolne raspone datuma (datume ekonomske nadležnosti i datume perioda u stavkama).

Ovaj datum predstavlja osnov za ispis Dnevnika knjiženja i kartice konta.
Ako se unutar postojećeg knjiženja u obradi pritisne dugme za kreiranje *Novog knjiženja*, moguće je putem **parametara unosa** (na traci sa alatkama) podesiti da se ovaj datum automatski prenese i u novo knjiženje.

</details>

**Datum**: predstavlja referentni datum za godišnje računovodstvene izveštaje i **uobičajeno je jednak datumu knjiženja**.

Može se koristiti za knjiženje završnih usklađenja bilansa i odgovarajućih knjiženja za zatvaranje i ponovno otvaranje konta, pri čemu datum knjiženja može biti postavljen u periodu odobravanja i zatvaranja bilansa (na primer april ili jun naredne godine), dok će *datum obračuna* biti postavljen na 31.12. odnosno 01.01.
Ovo omogućava unos knjiženja u period koji je verovatno već konačno odštampan u Dnevniku knjiženja.

:::important[Pažnja]
Ovaj datum **ne može** da se koristi za evidentiranje ulaznih ili izlaznih računa koji se odnose na kraj godine. **Preporučuje se da uvek bude jednak datumu knjiženja**. U računovodstvu postoje izveštaji koji rade prema datumu knjiženja, drugi prema datumu obračuna, dok pojedini omogućavaju filtriranje po oba datuma, pri čemu će rezultati zavisiti od primenjenih filtera.
:::

U **parametrima unosa** moguće je podesiti da se ovaj datum automatski usklađuje sa datumom knjiženja.

**Broj knjiženja**: dodeljuje se u skladu sa podešavanjima tabele **[Numeracija knjiženja](/docs/configurations/tables/finance/posting-ledger-numeration)**.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Jedinstvenost knjiženja uvek se određuje kombinacijom **Datuma knjiženja** i **Broja knjiženja**.
Brojem knjiženja automatski upravlja aplikacija na osnovu podešavanja numeracije (brojača). Prilikom čuvanja knjiženja dodeljuje se odgovarajući konačni broj, uz eventualno popunjavanje praznina u numeraciji za dati datum knjiženja.
Brisanjem knjiženja na određen datum ostaje praznina u numeraciji za taj datum. Taj broj će biti ponovo iskorišćen tek kada se izvrši unos ili izmena nekog drugog knjiženja sa istim datumom.
Kod privremenih knjiženja koristi se negativna numeracija počevši od broja **-1000**, kako bi korisniku bilo jasno da se radi o privremenom knjiženju. Računovodstveni izveštaji i pretrage su podrazumevano podešeni da prikazuju samo konačna knjiženja.

</details>

**Konto nosioca knjiženja**: ovo polje je **obavezno samo za PDV knjiženja**, jer je povezano sa matičnim podacima kupca ili dobavljača koji je nosilac dokumenta knjiženja.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Ovo polje se uobičajeno ne popunjava kod knjiženja uplata ili isplata, jer se u istom knjiženju najčešće evidentira više uplata ili isplata prema različitim subjektima. U tom slučaju za filtriranje otvorenih stavki koristi se polje koje se nalazi na kartici *Plaćanja*.
Ako se pritisne dugme za kreiranje *Novog knjiženja* iz postojećeg knjiženja, moguće je u **parametrima unosa** podesiti da se i ovo polje automatski prenese u novo knjiženje.
Računovodstveni obrazac može, na kraju, uključivati **[kontrolu doslednosti](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** između vrste konta unete u ovo polje i vrste konta definisane u samom obrascu.

</details>

**Računovodstveni obrazac**: ovo polje je **obavezno**. Svako knjiženje zasniva se na računovodstvenom obrascu koji određuje njegove karakteristike i funkcionalnost.

Nakon što je knjiženje sačuvano, ovo polje više nije moguće menjati (isto važi i za druga polja ukoliko je Knjiga PDV-a ili Dnevnik knjiženja već konačno odštampan ili je izvršeno automatsko zatvaranje konta). Ako je izabran pogrešan računovodstveni obrazac, potrebno je obrisati knjiženje i ponovo ga uneti sa ispravnim obrascem.

Ako se pritisne dugme za kreiranje novog knjiženja iz postojećeg, moguće je u **parametrima unosa** podesiti da se i ovo polje automatski prenese u novo knjiženje.

**PDV (knjiga)**: preuzima se iz odabranog računovodstvenog obrasca i nije ga moguće ručno menjati.

**Referentni broj PDV-a**: ovo je numeričko polje kojim aplikacija automatski upravlja za svako knjiženje. Prilikom otvaranja obrasca biće predložen *najveći postojeći protokol + 1* za izabranu knjigu, a prilikom čuvanja biće potvrđen ili korigovan u zavisnosti od toga da li su u međuvremenu sačuvana druga knjiženja ili postoje PDV zapisi koje je potrebno ponovo numerisati.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Način dodele PDV protokola zavisi od toga da li je u računovodstvenom obrascu aktivirana kontrola *numeričke doslednosti* (kontrola usklađenosti između datuma knjiženja i referentnog broja PDV-a). Ako je kontrola aktivna, slobodan broj protokola biće dodeljen samo ako odgovara datumu knjiženja. Ako nije aktivna, može biti predložen i broj koji nije hronološki ispravan za taj datum, uz odgovarajuće upozorenje korisniku.
Polje za broj protokola biće onemogućeno kod privremenih knjiženja.

</details>

**Vrsta dokumenta**: postupak je automatski predlaže na osnovu vrednosti definisane u računovodstvenom obrascu. Može se promeniti, ali to u praksi retko kada bude potrebno. Najčešće se koristi za označavanje dokumenata u PDV evidencijama, na primer **FV** = izlazna faktura ili **FA** = ulazna faktura, dok će ostali poslovni događaji uglavnom imati tip dokumenta **GEN** = generički.

**Datum dokumenta**: ovo polje može biti obavezno ili ne, u zavisnosti od **[podešavanja računovodstvenog obrasca](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**. Datum dokumenta ne može biti kasniji od datuma knjiženja i mora se nalaziti unutar perioda važenja **[poslovne godine definisane u računovodstvenim parametrima](/docs/configurations/parameters/finance/accounting-parameters)**.

Ako se pritisne dugme za kreiranje *Novog knjiženja* iz postojećeg, moguće je u **parametrima unosa** podesiti da se i ovo polje automatski prenese u novo knjiženje.

<a id="campo_progetto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a>

**Broj dokumenta**: u ovo polje unosi se broj fakture kod PDV računovodstvenih knjiženja.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Radi se o alfanumeričkom polju dužine do 20 znakova. U zavisnosti od podešavanja računovodstvenog obrasca, sistem može onemogućiti unos dokumenta sa istom kombinacijom broja dokumenta, godine (preuzete iz datuma dokumenta), vrste dokumenta (polje **Vrsta dokumenta**) i podkonta unetog u zaglavlju knjiženja. Ova kontrola je podrazumevano aktivna za sve računovodstvene obrasce, ali se može isključiti. Ako su broj dokumenta, godina i podkonto isti, ali je vrsta dokumenta različita, sistem neće blokirati unos, već će korisniku prikazati upozorenje. Isto upozorenje prikazuje se i ako se isti podatak već nalazi u privremenom knjiženju.

</details>

**Polje Projekat**: aktivno je samo ako računovodstveni obrazac predviđa upravljanje projektima. Ovaj projekat predstavlja referentni projekat za celo knjiženje, ali će biti moguće ponovo dodeliti vrednosti unutar kartice **Projekti** istog knjiženja.

:::danger PAŽNJA
Kartica **Projekti** je aktivna samo kada je u opštim podacima preduzeća (Konfiguracija > Tabele > Opšta podešavanja > Preduzeće) opcija **Upravljanje kontrolingom** deaktivirana. To znači da modul **Kontroling** nije aktivan u **punom** režimu rada.

Ako je opcija **Upravljanje kontrolingom** aktivna, upravljanje projektima vrši se na drugačiji način, odnosno projekat se dodeljuje preko posebnog centra troškova koji kao **[dimenziju](/docs/configurations/tables/controlling/analytical-accounting/dimension)** (pogledati dokumentaciju modula Kontroling) ima odgovarajuću dimenziju za upravljanje projektima.
:::

**Valuta**: prioritetno se predlaže na osnovu nosioca (*konta*) knjiženja, odnosno, ako nije definisana, koristi se valuta preduzeća. Po potrebi se može promeniti za svako pojedinačno knjiženje. Nakon što je knjiženje sačuvano, ovo polje više nije moguće menjati.

**Datum kursa**: predstavlja referentni datum kursa definisanog u tabeli deviznih kurseva. Aplikacija iz te tabele preuzima poslednji evidentirani kurs koji odgovara ovom datumu.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

U *parametrima unosa* ovaj datum može biti postavljen kao datum knjiženja (podrazumevana vrednost) ili kao datum dokumenta.
Postoji korisnički parametar koji prikazuje upozorenje ukoliko za datum knjiženja nije definisan kurs, pa se zbog toga koristi prethodno evidentirani kurs.

</details>

**Direktan kurs**: predstavlja vrednost kursa preuzetu iz tabele deviznih kurseva. Istovremeno se prikazuju i direktan kurs (koji se standardno koristi u tabelama kurseva) i inverzni kurs.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Korišćenje inverznog kursa zadržano je zbog kompatibilnosti sa logikom iz perioda kada se računovodstvo vodilo u italijanskim lirama, kada se kurs izražavao po principu *„neizvesno za sigurno“* (*incerto per certo*), odnosno kao broj lira za jednu jedinicu strane valute. Uvođenjem evra primenjuje se suprotan princip, *„sigurno za neizvesno“* (*certo per incerto*), pri kojem se iskazuje koliko jedinica strane valute odgovara jednom evru. Korisnik može ručno promeniti ovu vrednost. To je uobičajeno kod računovodstvenih obrazaca za uplate i isplate u stranoj valuti, jer kurs koji primenjuje banka najčešće nije isti kao zvanični devizni kurs.

</details>

**Ukupno u valuti / Ukupno dokumenta**: ova polja su međusobno povezana preko kursa, pa je kod knjiženja u evrima svejedno da li će iznos biti unet u jedno ili drugo polje.

Kod knjiženja u stranoj valuti uobičajeno se unosi vrednost u polje **Ukupno u valuti**, dok se protivvrednost u evrima automatski izračunava.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

**[Računovodstveni obrazac](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** može predvideti automatsko ažuriranje ovih podataka prilikom izmene podataka unetih u tabelu PDV-a, bilo samo u slučaju povećanja ili i kod smanjenja iznosa.
Čuvanje knjiženja može biti blokirano ukoliko ovaj iznos nije usklađen sa podacima iz PDV evidencije.

</details>

**Ukupan porez**: polje koje se nalazi na dnu tabele PDV-a i prikazuje ukupan iznos poreza. Automatski ga ažurira aplikacija i ne unosi se ručno.

### Podnožje (Footer)

Na dnu obrasca, u kartici *Dnevnik knjiženja*, nalazi se **opis promene** računovodstvenog knjiženja. Radi se o napomeni koja se može definisati u računovodstvenom obrascu korišćenjem numeričkih parametarskih kodova (1), (2), … (10).

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Kodovi **(8)** i **(9)** koriste se isključivo u detaljnim opisima konta u odeljku knjige računa. Dvostrukim klikom na polje moguće je otvoriti pretragu unutar kodiranih napomena (funkcionalnost dostupna u okviru **Alata**). Ručna izmena ovog opisa biće automatski *poništena* prilikom potvrde ukoliko se izmeni bilo koje polje koje se automatski koristi u napomenama.

Na dnu obrasca, otvaranjem proširivog odeljka (*expander*), nalaze se dodatna polja sa sažetim podacima o PDV-u i knjiženju. Posebnu pažnju treba obratiti na polja namenjena prikazu eventualne neravnoteže knjiženja, koja su podrazumevano onemogućena (ali se mogu omogućiti u podešavanjima korišćenog računovodstvenog obrasca).

</details>

**Nije u ravnoteži dugovno/potražno** služi kao kontrola usklađenosti kako bi se omogućilo čuvanje knjiženja.

<details>

<summary>Dodatni detalji (klikni za proširenje)</summary>

Osim ako kontrola nije onemogućena u parametrima računovodstvenog obrasca, što se preporučuje izbegavati osim u izuzetnim slučajevima.

Vrednost neravnoteže biće predložena kao iznos u novim računovodstvenim stavkama koje će se ručno uneti u knjiženje kako bi se ono automatski uravnotežilo.

</details>

#### Specifična dugmad na traci sa alatkama

> **Parametri unosa**: otvara parametre za unos knjiženja.

- *Datum obračuna*: prikazuje se u tabeli PDV evidencije i automatski se prenosi u tabelu Dnevnika knjiženja. Može biti predložen na jedan od sledećih načina:
  - **Dnevno** – polja **Od datuma** i **Do datuma** postavljaju se na datum knjiženja.
  - **Kraj poslovne godine** – polje **Do datuma** postavlja se na 31.12. tekuće godine.
  - **Bez vrednosti** – za konta tipa **Usluga**, polje ostaje prazno ukoliko je korišćen *protukonto* tipa **Za razgraničenje**, odnosno konto koji se koristi pri obračunu završnih knjiženja. Na taj način korisnik je obavezan da ručno definiše period na koji se knjiženje odnosi.

- *Upozori ako valuta nije u ravnoteži*: proverava da li su u Dnevniku knjiženja usklađeni i iznosi u koloni **Iznos u valuti**. Iako je iznos prikazan u jednoj koloni, sistem zna kojoj strani (duguje/potražuje) pripada svako knjiženje.

- *Upozori na datum kursa*: pošto se u knjiženju automatski predlaže poslednji kurs unet u tabelu **Kursevi valuta**, sistem proverava da li datum tog kursa odgovara datumu knjiženja.

- *Podkonto* (**Bez grupisanja / Poslednje korišćeni**): određuje podkonto nosioca knjiženja koji će biti predložen u zaglavlju knjiženja. Opcija **Poslednje korišćeni** automatski predlaže podkonto korišćen u prethodnom unosu.

> **Dugmad za ponovno izračunavanje**: ažuriraju vrednosti ponovnim obračunom:
> - PDV
> - Dnevnik knjiženja
> - Centri troškova (ako se nalazite na kartici **Analitika**)
> - Dospela plaćanja (ako se nalazite na kartici **Dospela plaćanja**)

## **2. Knjiženje**

### 2.1 Podaci o PDV-u dokumenta

Ovaj odeljak dostupan je samo za PDV knjiženja, odnosno kada su u računovodstvenom obrascu definisani PDV evidencija i odgovarajuća vrsta PDV transakcije.
Kod **ručnog unosa** novog knjiženja, ovaj odeljak može se popuniti na nekoliko načina:

- > *Šifarnik kupca/dobavljača/agenta koji je nosilac knjiženja nema unapred definisan kontrolni podkonto niti podrazumevanu PDV stopu*: u tom slučaju korisnik bira **vrstu PDV-a** (pogledati detalje u nastavku), **podkonto** stavke i odgovarajuću **PDV stopu**. Nakon toga aplikacija automatski raspoređuje ukupan iznos dokumenta odnosno knjiženja unet u zaglavlju na odgovarajuće stavke. Korisnik može menjati ove vrednosti i dodavati nove stavke po istoj logici. Predloženi iznos računa se kao preostali iznos potreban da se pokrije ukupan iznos knjiženja.
- > *Šifarnik kupca/dobavljača/agenta sadrži unapred definisan kontrolni podkonto i/ili PDV stopu*: nakon unosa **vrste PDV-a**, aplikacija predlaže odgovarajući kontrolni podkonto i/ili PDV stopu. Iznosi se raspoređuju kao u prethodnom slučaju, pri čemu ih korisnik može ručno menjati. Svaki sledeći unos ponovo predlaže podkonto i PDV stopu iz šifarnika, zajedno sa preostalim iznosom potrebnim za pokriće ukupnog iznosa dokumenta odnosno knjiženja.
- > *Šifarnik kupca/dobavljača (ne odnosi se na agente) sadrži listu kontrolnih podkonta, bez unapred definisanog kontrolnog podkonta, ali sa unapred definisanom PDV stopom*: u tom slučaju aplikacija u odeljku **PDV** odmah prikazuje listu unapred definisanih podkonta, svaki sa pripadajućom PDV stopom ili sa podrazumevanom PDV stopom iz šifarnika. Korisnik zatim ručno unosi iznose za svaku stavku. Kod ručnog dodavanja nove stavke aplikacija neće predložiti podkonto, već samo PDV stopu, a automatski će raspodeliti preostali iznos do ukupne vrednosti dokumenta odnosno knjiženja.

**Vrsta PDV-a**: ovo je interna fiksna tabela sistema i sadrži sledeće vrednosti:

> - **Roba**: predstavlja **standardnu** vrstu PDV transakcije i dovoljna je u gotovo svim slučajevima. Ova vrsta stavke u pojedinim PDV procedurama tretira se kao promet robe.
> - **Usluga**: posebna vrsta transakcije kojom se označava da stavka potiče iz nabavke ili prodaje usluga, što je važno u određenim PDV procedurama (npr. za **INTRASTAT** izveštaje).
> - **Namenjeno za preprodaju**: koristi se za nabavke koje predstavljaju osnov za obračun procenata koji se primenjuju pri raspodeli prihoda (na primer u supermarketima ili apotekama, gde se PDV ne obračunava po svakoj pojedinačnoj stavci, već se na kraju perioda ukupna prodaja raspodeljuje prema udelu nabavljenih artikala).
> - **Zaokruživanja**: odnosi se na zaokruživanja koja nisu predmet PDV-a, tipično kod telefonskih računa. Praktična primena ove oznake je ograničena, ali će odgovarajući podkonto biti popunjen prema prethodno opisanoj logici.
> - **Prodaja PDV 74Ter**: posebna vrsta transakcije namenjena turističkim agencijama, kod kojih datum PDV obračuna kasni 30 dana u odnosu na datum transakcije (ako je prodaja izvršena danas, PDV će biti obračunat u narednom poreskom periodu). Na ovim stavkama primenjuje se obračun PDV-a prema režimu 74Ter.
> - **Preprodaja**: odnosi se na prodaje za koje aplikacija primenjuje obračun raspodele prihoda.
> - **Poljoprivredna transakcija**: posebna vrsta transakcije za preduzeća koja posluju u okviru poljoprivrednog poreskog režima i koristi se za isključivanje pojedinačne stavke iz tog režima definisanog u računovodstvenom obrascu.

**% nepriznato**: preuzima se iz PDV stope definisane na stavci. Ručno menjanje ove vrednosti se ne preporučuje – ispravno je promeniti odgovarajuću PDV stopu. Ova vrednost određuje obračun kolone *Nepriznati porez*.

**Porez**: može se ručno korigovati u odnosu na automatski obračun aplikacije. Ovo je korisno kada ulazni dokument sadrži zaokruživanja koja nisu identično obračunata, pa korisnik mora evidentirati dokument onako kako je primljen.

**Ukupno valuta / Ukupno**: predstavljaju izračunate vrednosti koje se ne čuvaju u bazi podataka.

**Od datuma obračuna / Do datuma obračuna**: predstavljaju datume **ekonomske pripadnosti**, koji su ključni za automatski obračun **vremenskih razgraničenja i obračunatih prihoda i rashoda**. Na osnovu ovih datuma sistem izračunava proporcionalni deo troškova i prihoda.

<details>

<summary>**PRIMER** (klikni za proširenje)</summary>

Današnji datum je **31.03. godine X**.

Ako knjiženje troška sadrži period obračuna od **31.03.X** do **31.03.X+1**, tada će prilikom pokretanja procedure usklađenja na datum **31.12.X** biti obračunat **aktivni vremenski razgraničeni trošak** za deo troška koji pripada periodu od **01.01.X+1** do **31.03.X+1**.

Ako je trošak knjižen **31.01.X**, a period obračuna traje od **31.01.X-1** do **31.01.X**, tada će se prilikom pokretanja procedure usklađenja na datum **31.12.X-1** obračunati **pasivno obračunati trošak** za deo troška koji pripada periodu od **31.01.X-1** do **31.12.X-1**.

</details>

Ovim periodom moguće je upravljati automatski, u zavisnosti od **Parametara unosa**, na jedan od sledeća tri načina:

- > *Kraj obračunskog perioda* – početni datum predlaže se na osnovu datuma dokumenta, dok se završni datum automatski postavlja na kraj poslovne godine.
- > *Dnevno* – oba datuma postavljaju se na datum dokumenta.
- > *Bez datuma za tip konta Usluga* (preporučena opcija) – aplikacija neće predložiti datume za konta čiji tip konta ima uključenu opciju **Usluga**, već će korisnik morati ručno da unese odgovarajući period. Za ostale tipove konta predložiće isti datum dokumenta za oba polja.

:::important[Pažnja]

Da bi se putem procedure usklađenja automatski obračunavali vremenska razgraničenja i obračunati prihodi/rashodi, potrebno je da tip konta koji se koristi za konta koja podležu usklađenju bude definisan u tabeli **[Vrste konta](/docs/configurations/tables/finance/account-types)** sa uključenom opcijom **Usluga**.
Primeri tipova konta koji u standardnim bazama imaju uključenu opciju **Usluga** su **"Troškovi za razgraničenje"** i **"Prihodi za razgraničenje"**.
Odgovarajući tip konta dodeljuje se konkretnom kontu direktno u kontnom planu.

:::

**Mesec**: predstavlja **referentni PDV period knjiženja**, koji se određuje na osnovu vrste obračuna i datuma PDV obračuna. Međutim, stvarno polje koje se koristi u obračunu jeste **Datum obračuna PDV-a**.
**Datum obračuna PDV-a**: vrednost se predlaže prema podešavanjima računovodstvenog obrasca – najčešće je to datum knjiženja kod nabavki, odnosno datum dokumenta kod prodaje (kod transakcija tipa **Prodaja 74Ter** koristi se datum dokumenta + 30 dana). Ovo predstavlja **referentni datum za periodični obračun PDV-a**.
**Obračun po gornjoj/donjoj vrednosti**: ovaj datum koristi se kao referentni datum za obračun učešća knjiženja u obračunu *plafona* (limita). Podrazumevano se predlaže datum dokumenta za sve PDV stope koje podržavaju upravljanje *PDV plafonom*.
**Napomena o izmeni iz prethodnih godina**: ovo polje je aktivno samo za knjiženja čiji tip dokumenta ima uključenu opciju *Napomena o izmeni*. Koristi se za označavanje da se knjižno odobrenje odnosi na prethodne godine u odnosu na godinu dokumenta.
**Referentni datum obaveštenja o izmeni**: ovo polje je aktivno samo za knjiženja čiji tip dokumenta ima uključenu opciju *Napomena o izmeni*. Koristi se za evidentiranje referentnog datuma ispravljene fakture.
**Podela**: polje je vidljivo samo ako računovodstveni obrazac podržava upravljanje podelama. U tom slučaju moguće je isto PDV knjiženje raspodeliti na više poslovnih jedinica.

#### Dodatne napomene

- nije moguće sačuvati **PDV stavke sa osnovicom 0**, osim ako računovodstveni obrazac to dozvoljava (opcija *Dozvoli konta sa vrednošću 0*);

- **Zaokruživanje PDV-a** obrađuje se po svakoj pojedinačnoj stavci, dok propisi zahtevaju da se obračun izvrši na zbirnoj osnovici svih stavki sa istom PDV stopom. Zbog toga može doći do razlika izazvanih isključivo načinom zaokruživanja (ovo važi samo za ručni unos knjiženja; automatska knjiženja iz nabavke i prodaje već pravilno obračunavaju PDV).
Kada se utvrdi razlika, moguće je:
1. ručno izmeniti PDV stavke;
2. pritisnuti dugme za ponovni obračun PDV-a u zaglavlju obrasca kako bi aplikacija automatski uskladila poslednju stavku za svaku PDV stopu.

### 2.2 Dnevnik knjiženja

<details>

<summary>Kliknite za prikaz primera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Svako knjiženje **obavezno mora sadržati stavke u ovom odeljku** kako bi moglo biti sačuvano.
- > U slučaju **PDV podataka**, ovaj deo se **automatski obračunava** na osnovu logike ***tipova iznosa*** i podataka unetih u prethodnu **PDV tabelu**;
- > U slučaju knjiženja **plaćanja/naplate**, iznosi **zavise od iznosa plaćanja unetih na kartici *Plaćanja***;
- > U **svim ostalim slučajevima**, stavkama i iznosima uglavnom **ručno upravlja korisnik**.

:::note[Napomena]

Računovodstveni obrazac može ponuditi listu unapred definisanih konta. U tom slučaju korisnik unosi samo iznose u odgovarajuća polja **Duguje** ili **Potražuje**.
Prilikom čuvanja knjiženja, ukoliko obrazac ne dozvoljava čuvanje konta sa nulom, prazne stavke biće automatski obrisane.
Ovakav način rada tipičan je, na primer, za obračun zarada zaposlenih, gde obrazac sadrži sva potencijalno potrebna podkonta, ali se u konkretnom obračunu koriste samo ona koja su zaista potrebna.

:::

<details>

<summary>Dodatni detalji (kliknite za proširenje)</summary>

- Kod jednostavnih knjiženja tipa **duguje/potražuje** moguće je definisati poseban računovodstveni obrazac koji već sadrži podkonta koja će se koristiti sa tipom iznosa **Ukupno dokumenta / Knjiženje**, tako da korisnik samo unese ukupan iznos u zaglavlju, a aplikacija ga automatski rasporedi na duguje i potražuje prema definisanom obrascu.
- Svaka nova ručno dodata stavka automatski će pokriti eventualnu razliku u knjiženju. Podsećamo da neuravnotežena knjiženja nije moguće sačuvati, osim ako to nije izričito dozvoljeno odgovarajućim podešavanjem računovodstvenog obrasca.

</details>

#### Specifična polja u pregledu Dnevnika knjiženja

**Valuta**: može sadržati podatke o valuti (datum kursa, vrednost kursa i iznos u valuti). Iznos u valuti uvek se unosi kao apsolutna vrednost (strana duguje/potražuje u valuti društva određuje i znak iznosa u valuti). Polja u stranoj valuti i u valuti društva mogu biti međusobno nezavisna i ne moraju se automatski preračunavati prilikom izmene ovih vrednosti.
**Od datuma / Do datuma obračuna**: ovaj period obračuna, kao što je već opisano u odeljku PDV-a, od ključnog je značaja za upravljanje vremenskim razgraničenjima i izradu bilansa. Pogledati prethodno navedene napomene.
**Podela**: može biti dostupna ako je omogućena u računovodstvenom obrascu i koristi se za raspodelu istog knjiženja na više poslovnih jedinica.
**Detaljan opis** *(ne preporučuje se kao podrazumevani unos za sva knjiženja)*: može biti dostupan ako je definisan u računovodstvenom obrascu, a može se delimično automatski popunjavati pomoću kodova napomena **(1)**, **(2)** itd., na isti način kao i opšti opis. Posebno je korisno upravljanje kodovima **(8)** i **(9)** za redove kupaca i dobavljača radi zatvaranja otvorenih stavki.
**Datum valute banke**: polje se može automatski popunjavati na osnovu broja dana definisanog u šifarniku banaka za svaki računovodstveni obrazac koji koristi bankovne račune.
**Broj stavke**: polje se može automatski popunjavati na osnovu broja dana definisanog u šifarniku banaka za svaki računovodstveni obrazac povezan sa tom bankom.
**Referenca ručnih stavki**: može biti dostupna ako je omogućena u računovodstvenom obrascu i koristi se za ručno povezivanje računovodstvenih stavki bez korišćenja sistema otvorenih stavki.
**Podkonto**: može biti dostupan ako je definisan u računovodstvenom obrascu, ali se njegova ručna upotreba ne preporučuje. Kod PDV knjiženja aplikacija automatski dodeljuje konto troška/prihoda najveće vrednosti redovima kupaca i dobavljača, dok redovima troškova, prihoda i PDV-a dodeljuje konto kupca ili dobavljača.

#### Dodatne napomene

Korisnik može ručno *forsirati* izmene u Dnevniku knjiženja. Međutim, preporučuje se da se izmene vrše polazeći od PDV stavki, kako bi sistem automatski uskladio odgovarajuća knjiženja. Svaka ručna izmena može se poništiti pritiskom na dugme za ponovni obračun Dnevnika knjiženja.
U računovodstvenom obrascu, naročito kod svih obrazaca koji se odnose na PDV, za red sa tipom iznosa **Ukupno dokumenta / Knjiženje** navodi se opšti konto kupaca ili dobavljača. Prilikom knjiženja ovaj konto će automatski biti zamenjen kontom nosioca knjiženja, ali samo ako su u **[Parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**, u odeljku sa listom konta kupaca i dobavljača, definisani odgovarajući tipovi konta koji pripadaju glavnom kontu korišćenom u računovodstvenom obrascu.

## 3. Dospela plaćanja

Kartica je dostupna **samo ako računovodstveni obrazac ima uključenu opciju „Otvaranje plaćanja“**.

### 3.1 Vrsta dospelog plaćanja

Ovaj odeljak namenjen je upravljanju podacima potrebnim za obračun odgovarajuće otvorene stavke i prati definisane uslove plaćanja.
Kod ručnog unosa PDV knjiženja pregled će biti automatski popunjen podrazumevanim podacima iz šifarnika kupca, dobavljača ili agenta koji je definisan kao podkonto nosioca knjiženja.
Kod drugih vrsta knjiženja (na primer kod avansa), moguće je definisati računovodstveni obrazac koji otvara ili zatvara otvorenu stavku i tada korisnik ručno unosi podatke o vrsti plaćanja, načinu plaćanja i referentnom kontu, pri čemu se u polju **Procenat** unosi vrednost **100%**.

Za ovaj odeljak važno je napomenuti sledeće:
- otvorena stavka može biti kreirana i za konta koja nisu deo šifarnika i nemaju uključenu opciju **Otvaranje plaćanja** u kontnom planu (ta opcija služi samo za kontrolu usklađenosti podataka između Dnevnika knjiženja i otvorenih stavki kod konta za koja je uključena);
- podaci o banci se najčešće preuzimaju iz šifarnika ili iz dokumenta evidentiranog u modulu nabavke, prodaje ili primanja, ali ih je moguće ručno promeniti izborom druge banke pomoću pomoći **ABI/CAB** (dvostruki klik na polje). Banka definisana u ovom odeljku koristiće se kao banka za izvršenje plaćanja dobavljaču, osim ako nije uključena opcija **[Nametni banku za plaćanje iz šifarnika dobavljača](/docs/configurations/parameters/treasury/vendor-payments-parameters)**;
- uobičajeno se popunjava polje **Procenat**. Značenje polja **Iznos** i **Porez** je sledeće:
  - u polje **Iznos** može se uneti fiksni iznos koji će biti korišćen za odgovarajuću kombinaciju vrste i načina plaćanja otvorene stavke;
  - polje **Porez** omogućava da se od tog iznosa odredi deo koji se odnosi na PDV. Ovo je korisno kada uslovi plaćanja predviđaju različite raspodele osnovice i PDV-a po ratama. Moguće je koristiti kombinaciju iznosa i procenta.

**Grupisanje stavki**: ova opcija je podrazumevano isključena i preuzima se iz šifarnika kupca ili dobavljača. U praksi se retko koristi, jer je veoma neuobičajeno da dve stavke u istom dokumentu imaju isti način plaćanja i isti datum dospeća.
Ispod pregleda nalaze se informativna polja koja prikazuju:
- odobreni kreditni limit iz modula Upravljanje rizikom kupaca;
- trenutnu izloženost na osnovu otvorenih stavki (bez tekućeg knjiženja);
- računovodstveni saldo, koji uključuje i knjiženje koje je trenutno u obradi.

Kod knjiženja koja nastaju iz **evidentiranja nenaplaćenih potraživanja**, gornji pregled nema značaj za obračun stavki prikazanih ispod. Tipičan primer su situacije kada su u šifarniku definisane otvorene stavke za **Ri.Ba.** (bankarske doznake), dok se nenaplaćena potraživanja obrađuju kao **BB**, pri čemu se nove Ri.Ba. doznake ne smeju automatski ponovo izdavati. U tom slučaju podaci iz gornjeg pregleda koriste se isključivo ukoliko su potrebni podaci o banci za plaćanje.

### 3.2 Dospela plaćanja

Prikazuje listu stavki obračunatih prema podešavanjima iz gornjeg odeljka. Korisnik može *ručno izmeniti* vrstu plaćanja, datum dospeća i iznose pojedinačnih rata, vodeći računa da zbir ostane usklađen sa ukupnim iznosom. Tabela otvorenih stavki **ne dozvoljava ručno dodavanje nove rate**.
Ako računovodstveni obrazac podržava i otvaranje i zatvaranje stavki putem kompenzacije, a uključena je i opcija **Obaveštenje**, prilikom čuvanja knjiženja korisnik će biti obavešten o postojanju stavki koje se mogu međusobno kompenzovati.

**Opis**: označava status stavke (otvorena, delimično otvorena ili zatvorena).
**Konto / Podkonto / Opis**: konto kupca ili dobavljača na koji se stavka odnosi.
**Plaćanje**: vrsta plaćanja (bankovni prenos, gotovina itd.).
**Dospelost**: datum dospeća izračunat prema uslovima plaćanja iz gornjeg pregleda ili ručno definisan.
**Šifra dokumenta**: šifra dokumenta koji je kreirao stavku (npr. FA = ulazna faktura, FV = izlazna faktura).
**Datum dokumenta**: datum dokumenta koji je generisao otvorenu stavku.
**Broj dokumenta**: broj dokumenta koji je generisao otvorenu stavku.
**Valuta**: valuta u kojoj je stavka evidentirana (npr. EUR).
**Kurs**: kurs po kojem je izračunata protivvrednost u evrima.
**Datum kursa**: datum kursa korišćenog za preračun.
**Iznos u valuti**: jednak iznosu u evrima kada je kurs jednak 1.
**Saldo duguje / potražuje**: otvorena stavka, kao i računovodstveno knjiženje iz kojeg je nastala, ima svoju stranu knjiženja. Stavka na strani **duguje** predstavlja naše potraživanje, dok stavka na strani **potražuje** predstavlja našu obavezu (na primer po ulaznoj fakturi dobavljača ili po knjižnom odobrenju izdatom kupcu).

Takođe je moguće blokirati plaćanje stavke (opcija **Nije plativo**). Sistem će sačuvati datum i korisnika koji je blokirao plaćanje, zajedno sa eventualnim obrazloženjem (**Početak blokade, Korisnik, Napomena**), kao i datum i korisnika koji je izvršio deblokadu (**Korisnik deblokade, Kraj blokade**). Za obe operacije predviđena su posebna korisnička prava u ARM-u.
**Broj / godina otvorene stavke**: automatski dodeljeni identifikatori otvorene stavke.
**Status dospelog plaćanja**: *combo box* povezan sa korisnički definisanom tabelom koji omogućava klasifikaciju računovodstvenih stavki od trenutka njihovog kreiranja.
**Napomene** (stavke): slobodne napomene koje se mogu automatski generisati na osnovu podešavanja računovodstvenog obrasca, koristeći detaljan opis konta unet u računovodstveno knjiženje.
**Trgovački predstavnik**: u ovom polju moguće je povezati odgovarajućeg agenta sa otvorenom stavkom. Polje se automatski popunjava na osnovu agenta unetog na izlaznom računu prilikom knjiženja (ako postoji više agenata, biće dodeljen onaj sa najvećom provizijom).
**Datum ref. / Broj ref.**: polja preuzeta iz datuma i broja dokumenta računovodstvenog knjiženja (ako postoje, u suprotnom iz datuma i broja knjiženja). Omogućavaju grupisanje i filtriranje stavki koje se odnose na isti dokument (na primer knjižno odobrenje povezano sa računom).
**CIG** i **CUP**: preuzimaju se sa izlaznog računa, ali ih je moguće uneti i ručno (putem *combo box*-a). Pogledajte **[dokumentaciju o poljima na računu](/docs/sales/sales-invoices/invoicing/sales-invoice)**.
**Model** i **Poziv na broj**: polja koja se u Italiji uglavnom ne koriste, ali su karakteristična za Hrvatsku. Prilikom izdavanja računa, preduzeće svakom dospeću dodeljuje model i poziv na broj, koje kupac navodi prilikom plaćanja, a banka ih prenosi kroz promet po računu. Na taj način se iz bankovnog izvoda može jednostavno utvrditi na koje se dospeće odnosi izvršena uplata. Ova polja su predviđena i kao priprema za buduću implementaciju funkcionalnosti uvoza bankovnih izvoda, pri čemu će služiti za automatsko povezivanje uplata sa otvorenim stavkama.
**Prosečno kašnjenje u danima plaćanja**: Italija – preuzima vrednost broja dana kašnjenja iz šifarnika kupca, ali se može promeniti i ručno. Koristi se u simulaciji novčanog toka (*cash flow*).

#### Specifična dugmad

> **Obriši dospela plaćanja**: omogućava brisanje stavke koja je automatski kreirana na osnovu definisanog načina plaćanja.
> **Obriši iz tabele plaćanja**: omogućava brisanje izvršenja plaćanja koje je automatski predloženo iz šifarnika ili ručno uneto.
> **Ponovo izračunaj dospela plaćanja**: omogućava ponovno izračunavanje ručno izmenjene stavke.
> **Grupiši dospela plaćanja**: omogućava grupisanje stavki kada postoji više stavki sa istim datumom dospeća.

## **4. Plaćanja**

Kartica **Plaćanja** dostupna je **samo ako računovodstveni obrazac ima uključenu opciju „Zatvaranje stavki“**. Omogućava pregled otvorenih stavki radi evidentiranja uplata ili isplata, zatvaranja otvorenih stavki ili njihove kompenzacije.

:::tip Info
Kartica je podeljena na dva osnovna pregleda. Gornji služi za pretragu otvorenih stavki koje treba zatvoriti, dok donji prikazuje rezultat postupka zatvaranja, odnosno evidentiranih uplata ili isplata.
:::

### Ispravna konfiguracija interakcije između otvaranja, zatvaranja i kompenzacije stavki

- Uobičajeno, svi računovodstveni obrasci za PDV imaju uključenu opciju **Otvaranje stavki**, a mogu imati i opciju **Zatvaranje + Kompenzacija stavki**.
- Obrasci za plaćanja i naplate uvek imaju uključenu opciju **Zatvaranje otvorenih stavki**, ali nikada opciju **Kompenzacija**. Po potrebi mogu imati uključenu i opciju **Otvaranje otvorenih stavki**, kako bi omogućili evidentiranje avansa ili unapred izvršenih plaćanja. U tom slučaju, pošto ne postoji otvorena stavka koja bi se zatvorila, sistem automatski otvara novu otvorenu stavku suprotnog predznaka, čime održava usklađenost sa odgovarajućim računovodstvenim knjiženjem. Podešavanje se vrši u **[parametrima računovodstvenog obrasca](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**.

:::tip PAŽNJA
**Razlika između plaćanja stavki i kompenzacije stavki**

Kompenzacija se u računovodstvenoj terminologiji može odnositi na:
- kompenzaciju stavki istog konta (na primer račun i knjižno odobrenje);
- kompenzaciju između kupca i dobavljača (na primer prebijanje obaveze prema dobavljaču sa potraživanjem prema kupcu koji pripada istom poslovnom partneru).

U ovom obrascu kompenzacija je isključivo povezana sa otvorenim stavkama koje pripadaju istom podkontu. Kompenzacija između kupca i dobavljača može se jednostavno sprovesti izvršavanjem **plaćanja** stavki, odnosno njihovim ukrštenim zatvaranjem (dugovanje i potraživanje, na primer putem salda), čime se postiže kompenzacija u glavnoj knjizi.

Alternativno, mogu se koristiti dve specijalizovane i fleksibilnije procedure:
- [**Kompenzacija stavki**](/docs/finance-area/maturity-values/procedures/maturity-compensation)
- [**Brza kompenzacija**](/docs/finance-area/maturity-values/procedures/fast-compensation)
:::

Ako je u zaglavlju knjiženja unet konto nosioca knjiženja, on će automatski biti postavljen kao filter za pretragu u početnim poljima obrasca za plaćanja.

<details>

<summary>Kliknite za prikaz primera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Za sva PDV knjiženja, aplikacija će u ovom delu prikazati samo stavke za kupca/dobavljača unetog u zaglavlju, kako bi se omogućila kompenzacija računa i knjižnog odobrenja.
Kod knjiženja plaćanja ili naplate (posebno kada se radi o više kupaca ili dobavljača), polje u zaglavlju će uobičajeno biti prazno, a korisnik će prema potrebi uneti odgovarajući filter.
Posebno treba istaći polje podkonta **Banka**: ono nije filter, već se automatski popunjava kontom za plaćanje definisanim u **[šifarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** kupca/dobavljača koji je nosilac knjiženja. Na osnovu toga sistem ažurira računovodstveno knjiženje u polju koje koristi vrstu iznosa **„Tot. Doc./knjiženje“**.

<details>

<summary>Kliknite za prikaz primera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

</details>

(Ovo će biti moguće samo ako **[parametri računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**, u listi konta kupaca/dobavljača, dozvoljavaju zamenu, odnosno mora postojati veza između vrste konta banaka i odgovarajućeg glavnog konta u kontnom planu kako bi zamena mogla da se izvrši.)

<details>

<summary>Kliknite za prikaz primera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

</details>

### Izvršavanje zatvaranja stavke

:::tip KAKO ZATVORITI STAVKU
Nakon što se u prvom prikazu pronađe stavka (ili više stavki) koje treba platiti, moguće ih je odabrati i izvršiti plaćanje **dvostrukim klikom** na pojedinačni red ili korišćenjem dugmeta **Kreiraj plaćanje**.
:::

Ako računovodstveni obrazac podržava kompenzaciju stavki, biće aktivno i dugme **Kompenzacija** (dvostruki klik će imati isto značenje).
Još jedno korisno dugme u ovom delu je **Kreiraj plaćanje – dodatne opcije**.

<details>

<summary>Kliknite za prikaz primera</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

</details>

Otvoriće se dodatni obrazac za definisanje iznosa plaćanja, sa eventualnim iznosom odobrenja i odgovarajućim kontom za računovodstveno knjiženje.

:::note NAPOMENA
U ovom obrascu, koji se otvara putem komande **Dodatne opcije plaćanja** (isključivo ovde), moguće je postaviti status **Obavezno zatvorena** za stavku (putem odgovarajuće opcije). Korišćenje ovog statusa se ne preporučuje, jer nije rezultat standardnog procesa plaćanja kojim se zatvara otvorena stavka, već predstavlja prisilno postavljanje statusa. Može biti korisno samo za usklađivanje razlika i ispravku grešaka koje više nije moguće otkloniti uobičajenim korekcijama.

Sličan rezultat može se postići kreiranjem ručnog plaćanja i ručnim definisanjem iznosa.

Nije dozvoljeno evidentirati plaćanje u iznosu većem od preostalog iznosa otvorene stavke.
:::

U listu plaćanja moguće je uneti napomene. One se, prema podešavanjima obrasca, mogu automatski povezati sa opštim opisom knjiženja (opcija **Opis u dnevniku i plaćanjima**), mada se takva praksa ne preporučuje.

Ako se, prema **[podešavanjima računovodstvenog obrasca](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, plaćanje vodi po istorijskom kursu otvorene stavke, kursna razlika neće biti automatski evidentirana, već će se knjižiti ručno. Ovakav način rada olakšava održavanje usklađenosti između otvorenih stavki i knjigovodstvenog salda.

Ako ova opcija nije aktivna, protivvrednost u evrima biće izračunata prema kursu na datum knjiženja. U tom slučaju, ukoliko su odgovarajuća podešavanja ispravno definisana u **[računovodstvenom obrascu](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** (vrste iznosa za dobitak/gubitak od kursnih razlika) i u **[šifarniku valuta](/docs/configurations/tables/general-settings/currencies)**, sistem će automatski knjižiti dobitke ili gubitke od kursnih razlika za svaku valutu posebno.

Pomoću dugmeta **Proširi/Smanji** moguće je prikazati samo jedan od dva pregleda (pretragu stavki ili pregled plaćanja).

Na dnu obrasca prikazuju se ukupni iznosi odabranih stavki.

Na osnovu stvarno evidentiranih plaćanja i podešavanja računovodstvenog obrasca, aplikacija će ažurirati red sa vrstom iznosa **„Tot. Doc./knjiženje“** (na primer konto banke za plaćanje) ukupnim iznosom evidentiranih plaćanja. Za svako plaćanje sistem će kreirati novi red ili grupisati plaćanja po duguje/potražuje strani, po valutama i za svaki konto kupca ili dobavljača koji je plaćen odnosno naplaćen.

#### Specifična dugmad

> **Parametri unosa**: otvara parametre unosa računovodstvenog knjiženja.
> **Pretraži dospela plaćanja**: omogućava pretragu stavki za plaćanje ili naplatu.
> **Obriši plaćanja**: omogućava brisanje prethodno odabranih plaćanja.
> **Kreiraj plaćanje**: kreira plaćanje za odabranu stavku.
> **Kompenzacija**: izvršava kompenzaciju otvorenih stavki ako je omogućena u računovodstvenom obrascu.
> **Kreiraj plaćanje – dodatne opcije**: omogućava evidentiranje plaćanja sa eventualnim iznosima odobrenja i odgovarajućim kontom za knjiženje.
> **Proširi/Smanji**: omogućava prikaz samo stavki ili samo plaćanja, odnosno oba pregleda istovremeno.

## **5. Analitika**

Ovaj odeljak namenjen je upravljanju centrima troškova i profitnim centrima (poslovnim centrima) i dostupan je samo ako računovodstveni obrazac ima uključenu najmanje jednu od opcija za upravljanje centrima troškova ili profitnim centrima.

:::danger PAŽNJA
Način upravljanja centrima troškova i profitnim centrima zavisi od toga da li su u tabeli **[Kompanija](/docs/configurations/tables/general-settings/company)** aktivirane **napredne funkcionalnosti kontrolinga**.

Ove funkcionalnosti omogućavaju naprednije i fleksibilnije upravljanje kontrolingom, kao što su višedimenzionalna analiza poslovnih centara i međusobna analiza različitih centara. Standardni način rada ostaje dostupan ukoliko nije aktivirana opcija **UPRAVLJANJE KONTROLINGOM** u navedenoj tabeli.
:::

U zavisnosti od podešavanja računovodstvenog obrasca, biće prikazan jedan, drugi ili oba odeljka. U slučaju **odvojenog upravljanja centrima troškova i profitnim centrima**, oba odeljka moraju biti popunjena. U suprotnom, sistem će automatski raspodeliti iznose tako da se troškovi evidentiraju u centrima troškova, a prihodi u profitnim centrima.
Ako se koriste napredne funkcionalnosti kontrolinga, iako je moguće aktivirati upravljanje i centrima troškova i profitnim centrima u računovodstvenom obrascu, unos profitnih centara postaje nepotreban, jer će se koristiti samo centri troškova, koji u novom konceptu predstavljaju poslovne centre.
Poslovni centri mogu sadržati i pozitivne (prihodi) i negativne (troškovi) vrednosti, a moguće ih je fleksibilno raspoređivati između različitih dimenzija u skladu sa pravilima definisanim u modulu kontrolinga.
Ako je u računovodstvenom obrascu aktivirana i opcija **Upravljanje vozilima**, biće prikazan dodatni pregled za raspodelu troškova i prihoda po službenim vozilima (ispod glavne tabele centara troškova).
Izborom vozila putem odgovarajućeg *combo box*-a moguće je uneti i detaljne podatke o izabranom vozilu.

### POLJA U GLAVNOM PREGLEDU

Ako su aktivirane napredne funkcionalnosti kontrolinga, biće prikazana struktura slična pivot tabeli koja grupiše, konto po konto, raspodelu računovodstvenih transakcija na poslovne centre prema dimenziji analize.

Prema naprednim metodologijama kontrolinga, poslovni centri moraju biti povezani sa određenom dimenzijom analize, čime se formiraju podskupovi namenjeni različitim konfiguracijama analitičkog računovodstva.

Isti konto na koji se knjiži trošak može istovremeno biti raspoređen na više poslovnih centara koji pripadaju različitim dimenzijama (odnosno grupama).

Unutar iste dimenzije moguće je raspodeliti transakciju, na primer 50%, na dva različita centra.

<details>

<summary>Kliknite za prikaz slike</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

</details>

**Konto / Podkonto / Opis**: polja za unos računovodstvenog konta koje se raspoređuje na poslovni centar. Podaci će biti automatski popunjeni ako je odgovarajuća veza definisana u kontnom planu ili u šifarniku (pogledajte objašnjenje u nastavku).

**Projekat**: ako je u računovodstvenom obrascu omogućeno upravljanje projektima, ovo polje omogućava povezivanje knjiženja sa projektom. *Widget* koristi tabelu **Projekti** (*Upravljanje projektima > Projekti > Projekti*).

:::danger PAŽNJA
Ako su aktivirane napredne funkcionalnosti kontrolinga, projekat se može dodeliti samo ako je povezan sa poslovnim centrom koji pripada dimenziji tipa **Nalog/Projekat** ili dimenziji kod koje je uključena opcija **Omogući nalog**.

Ova dimenzija (koja može imati proizvoljan naziv, mada se preporučuju nazivi poput **Nalozi** ili **Projekti**) povezuje se sa odgovarajućim tipom putem opcije definisane u tabeli **Dimenzije** (*Konfiguracija > Tabele > Kontroling > Analitičko računovodstvo > Dimenzije*).
:::

**Centar troškova / Opis centra troškova**: polja za izbor (putem *combo box*-a) poslovnog centra kojem se dodeljuje trošak ili prihod. *Combo box* koristi tabelu **[Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** (*Konfiguracija > Tabele > Kontroling > Analitičko računovodstvo > Poslovni centri*).

**Valuta**: vrednost preuzeta iz računovodstvenog knjiženja koja označava valutu transakcije čija se protivvrednost prikazuje u evrima.
**Datum kursa**: datum kursa između strane valute i evra (preuzet iz knjiženja).
**Kurs**: vrednost kursa između strane valute i evra (preuzeta iz knjiženja).
**Iznos u valuti**: iznos transakcije u stranoj valuti (preuzet iz knjiženja u slučaju potpune raspodele na jedan centar ili izračunat prema procentu raspodele definisanom u kontnom planu ili šifarniku). Vrednost se može ručno promeniti radi raspodele troška ili prihoda na više centara. Polje se prikazuje kao jedinstvena vrednost, dok se knjiženje u evrima evidentira na duguje ili potražuje stranu prema računovodstvenom obrascu ili samom knjiženju. Po potrebi se može ručno korigovati.
**Iznos duguje / Iznos potražuje**: iznos u evrima preuzet iz knjiženja (ili obračunat prema procentu raspodele definisanom u kontnom planu ili šifarniku). Može se ručno izmeniti radi željene raspodele na više poslovnih centara.
**Od datuma obračuna / Do datuma obračuna**: preuzimaju se iz knjiženja (ali ih je moguće ručno promeniti). Koriste se za obračunska razgraničenja i za knjiženja poslovnih centara.
**Opis detalja**: preuzima se iz istoimenog polja u stavkama računovodstvenog knjiženja.

#### Unos podataka u odeljke centara troškova/profitnih centara može biti automatizovan na dva načina

- definisanjem poslovnih centara u kontnom planu za konta troškova i prihoda, uz određivanje procenta raspodele svakog konta na jedan ili više centara. Više informacija nalazi se u dokumentaciji **[Kontni plan](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**.
- definisanjem poslovnih centara u šifarniku kupaca i dobavljača (takođe procentualno). U tom slučaju sva konta evidentirana za tog poslovnog partnera biće raspoređena prema pravilima definisanim u šifarniku.

Prioritet između pravila definisanih u kontnom planu i onih iz šifarnika određuje se u **[parametrima opšteg računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**.
Dozvoljene su ručne izmene automatski izračunatih iznosa, kao i ručno dodavanje novih redova. U tom slučaju sistem će automatski predložiti preostale iznose potrebne da se, konto po konto, dostigne ukupan iznos računovodstvenog knjiženja, uz preuzimanje istog perioda obračuna.
Važno je naglasiti da postupci obračunskih razgraničenja i usklađenja obuhvataju i korekciju transakcija raspoređenih na centre troškova ili profitne centre.
Prilikom čuvanja knjiženja, aplikacija će prikazati obrazac sa detaljima eventualnih razlika u raspodeli i, ukoliko je tako definisano u korišćenom računovodstvenom obrascu, može blokirati čuvanje knjiženja.

#### Specifična dugmad

> **Obriši izabrane centre troškova**: briše odabrane centre troškova.
> **Obriši izabrane profitne centre**: briše odabrane profitne centre.
> **Proširi/Smanji**: omogućava prikaz samo centara troškova ili samo profitnih centara, odnosno oba pregleda istovremeno.

## **6. Projekti**

Kartica **Projekti** dostupna je samo ako je u računovodstvenom obrascu uključena opcija **Projekti**.

:::danger PAŽNJA
Ako su aktivirane napredne funkcionalnosti kontrolinga (opcija **Upravljanje kontrolingom** u tabeli **Preduzeće**), projekat se može dodeliti isključivo preko poslovnog centra koji je povezan sa dimenzijom tipa **Nalog**.

**Kada su aktivirane napredne funkcionalnosti kontrolinga, kartica Projekti neće biti prikazana.**

Umesto nje, u zaglavlju knjiženja biće dostupno polje za dodelu projekta celom knjiženju, umesto pojedinačnim stavkama knjiženja.
:::

Na ovoj kartici raspoređuju se različiti finansijski podaci iz knjiženja na različite projekte. Sve stavke će automatski biti dodeljene projektu unetom u zaglavlju, ali korisnik može ručno raspodeliti iznose na više projekata direktno u ovoj sekciji.
Prilikom ručnog unosa iznosa, aplikacija će automatski raspodeliti preostalu vrednost kako bi se računovodstveno knjiženje uskladilo. Predviđene su kontrole usklađenosti sa glavnom knjigom, kao i mogućnost blokiranja čuvanja knjiženja u slučaju razlika (pogledajte **[Parametre](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** računovodstvenog obrasca).

## **7. Osnovna sredstva**

Kartica **Osnovna sredstva** namenjena je upravljanju dugotrajnom imovinom. Koristi se za evidentiranje nabavke, povećanja vrednosti, prodaje i rashodovanja osnovnih sredstava.

:::danger PAŽNJA
Ova kartica je vidljiva samo ako računovodstveni obrazac ima aktiviranu opciju **Osnovna sredstva**.
Pored toga, preporučuje se da se u obrascu, na kartici **[Detalji](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, unapred definiše **Tip operacije** (nabavka, rashodovanje, prodaja i sl.) putem odgovarajuće padajuće liste.

Preporučuje se kreiranje posebnih računovodstvenih obrazaca za svaku vrstu operacije nad osnovnim sredstvima.
:::

### Gornja tabela

Ova tabela služi za unos novog osnovnog sredstva ili izbor postojećeg sredstva radi evidentiranja nove operacije.

- **Za unos novog osnovnog sredstva** dovoljno je popuniti novi red.
- **Za izbor postojećeg osnovnog sredstva** potrebno je koristiti dugme **Odaberi postojeće osnovno sredstvo** na alatnoj traci, čime se otvara postojeća kartica sredstva i povezuje sa novom operacijom.

#### POSTUPAK UNOSA

- Izabrati **Kategoriju osnovnog sredstva** putem padajuće liste (povezane sa tabelom **[Kategorije osnovnih sredstava](/docs/configurations/tables/finance/fixed-asset-category)**).
- Izabrati **Vrstu vlasništva** (podrazumevano se predlaže **Sopstvena imovina**).
- Po potrebi uneti **Opis**.
- Dodeliti **Prefiks/Šifru** ukoliko se koristi takav način numeracije. Pošto nije moguće imati dve kartice osnovnog sredstva sa istim brojem, prefiks omogućava korišćenje zasebne numeracije. Padajuća lista povezana je sa tabelom **[Prefiksi osnovnih sredstava](/docs/configurations/tables/finance/fixed-asset-precode)**.
- Potvrditi automatski dodeljeni broj kartice osnovnog sredstva ili ručno uneti željeni broj (uz eventualni prefiks).
- Uneti **Opis osnovnog sredstva**, koji će biti prikazan na kartici sredstva i korišćen u svim izveštajima modula (knjiga osnovnih sredstava, kartice i dr.).

Svi navedeni podaci automatski se preuzimaju sa postojeće kartice osnovnog sredstva kada se evidentira nova operacija nad tim sredstvom.
- Uneti **Iznos**, koji predstavlja vrednost operacije (nabavna vrednost uvećana za eventualni nepriznati PDV kod nabavke ili prodajna vrednost kod potpune ili delimične prodaje).
- Izabrati **PDV stopu** putem odgovarajuće padajuće liste.

Polje **% nepriznatog PDV-a** uobičajeno se automatski popunjava prema izabranom PDV kodu i postavkama iz tabele **[PDV stope i načini obračuna](/docs/configurations/tables/finance/vat-rates)**, zbog čega se ne preporučuje njegova ručna izmena.

**Status**: automatski se postavlja. Kod nabavke osnovno sredstvo dobija status **Neamortizovano**, a nakon obračuna amortizacije status prelazi u **Delimično amortizovano** ili **Potpuno amortizovano**. Status se po potrebi može promeniti ručno putem padajuće liste.
**Tip operacije**: predlaže se na osnovu podešavanja konta. Kod nabavke ili povećanja vrednosti najčešće je **Nabavna vrednost**, dok se kod prodaje predlaže **Delimična prodaja** ili **Potpuna prodaja**.
**Konto / Podkonto / Opis**: preuzimaju se iz izabrane **[Kategorije osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-category)** ukoliko su tamo definisani.
**Datum početka amortizacije**: automatski se predlaže prema datumu knjiženja i određuje godinu od koje osnovno sredstvo može ući u obračun amortizacije.
**Datum završetka amortizacije**: podrazumevano nije popunjen, ali utiče na prikaz u knjizi osnovnih sredstava.
**Početak / kraj garancije**: informativna polja koja označavaju period važenja garancije.
**Polovno**: označava da je osnovno sredstvo nabavljeno kao polovno. Za takva sredstva u prvoj godini primenjuje se stopa amortizacije od 100%, a predviđena amortizacija obračunava se samo tokom jedne godine.
**U upotrebi**: (preporučuje se da bude uključeno prilikom čuvanja) označava da je osnovno sredstvo stavljeno u upotrebu. Bez ove oznake nije moguće obračunati amortizaciju.
**Na održavanju**: označava da osnovno sredstvo treba uključiti u obračun troškova održavanja.

**Napomene**: polje za unos beleški koje se ne prikazuje u standardnim izveštajima (može se dodati prilagođavanjem izveštaja).

**Poreska statistika**: omogućava upravljanje donjom tabelom **Upravljanje podacima sredstva** radi korišćenja u poreskoj amortizaciji.

**Fiktivno preduzeće**: koristi se za označavanje osnovnih sredstava koja treba uključiti u izveštaje o osnovnim sredstvima koja pripadaju poreskim kategorijama.

**Vrsta odbitka**: omogućava definisanje poreskog odbitka za amortizaciju osnovnog sredstva. *Combo box* povezan je sa tabelom **[Vrste odbitaka](/docs/configurations/tables/finance/deductibility-types)**.

**Jedinica mere**: padajuća lista za izbor jedinice mere (npr. kg, kom). **Opis** izabrane jedinice prikazuje se u susednom polju.
**Procenat**: polje je vidljivo samo ako je u obrascu **[Parametri osnovnih sredstava](/docs/configurations/parameters/finance/fixed-assets-parameters)** aktivirana opcija **Procenat po pojedinačnom osnovnom sredstvu**. Omogućava definisanje posebne stope amortizacije za konkretno osnovno sredstvo, koja ima prioritet u odnosu na stopu definisanu u kategoriji osnovnog sredstva. Polje se prikazuje u obrascu osnovnog sredstva.
**Vrsta poreske amortizacije**: omogućava izbor vrste amortizacije koja će se primenjivati. **Opis** se prikazuje u susednom polju. *Combo box* povezan je sa tabelom **[Vrste objektivne amortizacije](/docs/configurations/tables/finance/objective-amortization-types)**.
**Prilikom čuvanja reda mogu se pojaviti različite poruke, u zavisnosti od situacije:**

- **„Osnovno sredstvo ima vrednost manju od ___. Da li želite da obračunate 100% amortizacije?”** – kategorija osnovnog sredstva ima definisanu vrednost u polju **Granica za jednokratnu amortizaciju**, a vrednost novounetog osnovnog sredstva manja je od tog praga (na primer, sredstva čija je vrednost manja od 516 €), za koja poreski propisi dozvoljavaju jednokratno priznavanje celokupnog iznosa kao troška, odnosno 100% amortizaciju u godini nabavke. Izborom opcije **Da** sistem će podesiti obračun amortizacije na 100% u prvoj godini tako što će ažurirati odgovarajuću oznaku u zaglavlju matičnih podataka osnovnog sredstva, čime će se takvo sredstvo posebno obrađivati u automatskom postupku obračuna amortizacije.
- **„Da li želite da delimično otuđenje povežete sa postojećom operacijom osnovnog sredstva?”** – ova poruka se prikazuje kada se koristi računovodstveni obrazac za delimičnu prodaju, a kategorija osnovnog sredstva nema aktiviranu opciju **inkrementalno**. U tom slučaju sistem pita da li iznos delimičnog otuđenja treba povezati sa određenom operacijom osnovnog sredstva. Na primer, kod osnovnog sredstva koje nije inkrementalno (gde se naknadna ulaganja vode kao zasebne komponente), svaka pojedinačna operacija amortizuje se zasebno, sa sopstvenim vekom trajanja. Zbog toga delimično otuđenje ukupnog osnovnog sredstva može u praksi predstavljati potpunu prodaju jedne njegove komponente (na primer, računar je naknadno nadograđen skenerom, a kasnije se prodaje samo skener).

**Izborom opcije Da (Yes)** prikazaće se pomoćni prozor (*pop-up*) za pretragu **komponente** osnovnog sredstva koju želite da prodate, sa mogućnošću izbora pomoću dugmadi **Traži** i **Odaberi**.

Različite komponente lako se prepoznaju po polju **Redni broj** (*Progresivno*), kako u ovom pomoćnom prozoru tako i na kartici osnovnog sredstva.

### Donje tabele

Sadržaj se odnosi na red izabran u gornjoj tabeli.

#### OPERACIJE NAD OSNOVNIM SREDSTVIMA

(Za svaku operaciju učitanu u gornjoj tabeli dodaje se novi red.)
**Datum operacije**: datum evidentiranja promene u knjizi osnovnih sredstava.
**Redni broj**: redni broj operacije.
**Nabavna vrednost**: polje se popunjava samo kod operacija koje koriste tip operacije **Nabavna vrednost**, i sadrži vrednost nabavke (osnovica uvećana za eventualni nepriznati PDV).
**Količina**: odnosi se na količinu koja se evidentira.
**Neodbitni PDV**: sadrži eventualni iznos nepriznatog PDV-a koji se dodaje nabavnoj vrednosti radi utvrđivanja početne knjigovodstvene vrednosti (istorijskog troška) osnovnog sredstva. Vrednost se automatski popunjava na osnovu iznosa unetog u polje **Iznos** u gornjoj tabeli, u skladu sa izabranom PDV stopom, ukoliko ona predviđa nepriznati PDV.
**Neamortizujući iznos**: ako je u odgovarajućoj kategoriji osnovnog sredstva definisano polje **Procenat amortizacije**, ovo polje će se automatski popuniti. Taj iznos se oduzima od osnovice za obračun amortizacije.

Primer:
- Procenat amortizacije = 50%
- Istorijski trošak = 30.000

Obračun amortizacije:
30.000 − 15.000 = 15.000 × 3%
Amortizacija će se obračunavati sve dok akumulirana amortizacija ne dostigne iznos od 15.000.

**Neamortizovani ostatak**: unosi se ručno. U skladu sa prethodnim primerom, polje će prikazivati obračun amortizacije **30.000 × 3%**, sve dok akumulirana amortizacija ne dostigne iznos od **15.000**.

**Već amortizovano**: vrednost je vidljiva samo ako je amortizacija obračunata, ali još nije proknjižena. Nakon knjiženja, iznos će biti uključen u **Knjigovodstvenu vrednost** i u amortizacioni fond.

**Kumulativna linearna amortizacija**: u ova polja se, u zavisnosti od vrste amortizacije (redovna, anticipirana, usporena ili ostatak), upisuje zbir obračunatih rata amortizacije.

**Kumulativna poreska amortizacija**: popunjava se ako je u kategoriji osnovnog sredstva aktivirana opcija **Poreska**, ili se može aktivirati na nivou pojedinačnog reda na kartici **Amortizacija**.

**Otuđenje**: sadrži prodajnu vrednost osnovnog sredstva i automatski se popunjava iz polja **Iznos** u gornjoj tabeli kada je tip operacije **Otuđenje**. Na osnovu ove vrednosti i iznosa kapitalnog dobitka ili gubitka ažurira se istorijska vrednost osnovnog sredstva koja će biti ispisana iz knjige osnovnih sredstava.

**Delimično otuđenje**: sadrži prodajnu vrednost osnovnog sredstva i automatski se popunjava iz polja **Iznos** u gornjoj tabeli kada je tip operacije **Delimično otuđenje**. Na osnovu ove vrednosti i iznosa kapitalnog dobitka ili gubitka ažurira se istorijska vrednost osnovnog sredstva koja će biti ispisana iz knjige osnovnih sredstava.

**Kapitalni dobitak**: sadrži iznos kapitalnog dobitka ostvarenog prodajom osnovnog sredstva i učestvuje u obračunu istorijske vrednosti prodatog sredstva.

**Reinvestirana dobit**: nije aktivno.

**Revalorizacija**: povećava istorijsku vrednost osnovnog sredstva u skladu sa zakonom o revalorizaciji.

**Kapitalni gubitak**: sadrži iznos kapitalnog gubitka nastalog prodajom osnovnog sredstva i učestvuje u obračunu istorijske vrednosti prodatog sredstva.

**Rashodovanje**: uobičajeno se popunjava vrednošću **0** (umesto polja **Otuđenje** ili **Delimično otuđenje**), ali se po potrebi može uneti određena vrednost za posebne slučajeve (na primer, vrednost otpadnog materijala).

**Otpisana nabavna vrednost**: istorijska vrednost koja se otpisuje u okviru operacije tipa **Otuđenje** ili **Delimično otuđenje** izračunava se na osnovu vrednosti unetih u polja **Otuđenje**, **Delimično otuđenje** (ili **Rashodovanje**), **Kapitalni dobitak** i **Kapitalni gubitak**. Polje **Knjigovodstvena vrednost** će istovremeno biti umanjeno za iznos koji odgovara istorijskoj vrednosti prodatog sredstva umanjenoj za akumulirani fond linearne amortizacije.

**PDV**: nije aktivno u Italiji.

**Usklađivanje**: nije aktivno u Italiji.

**Vrednost u evrima**: protivvrednost u evrima ako je iznos iskazan u drugoj valuti ili ako je valuta društva različita od evra.

**Podkonto**: konto dobavljača (kod nabavke) ili kupca (kod prodaje) na nivou pojedinačne stavke, koja se odnosi na određenu komponentu osnovnog sredstva (komponente mogu biti kupljene ili prodate različitim subjektima).

**Datum dokumenta / Broj dokumenta / PDV broj**: reference na ulazni ili izlazni račun koji odgovara konkretnom redu evidencije.

**Napomene**: slobodne napomene po pojedinačnom redu.

**Redni broj prodaje**: kod delimičnog otuđenja prikazuje redni broj izabrane stavke za prodaju odgovarajuće komponente osnovnog sredstva.

**Odštampano**: aktivira se kada je knjiga osnovnih sredstava konačno odštampana za odgovarajuću stavku.

#### EKONOMSKE OPERACIJE

(Uglavnom se ne koristi.) Služi za povezivanje sa karticom osnovnog sredstva troškova koji se ne kapitalizuju, odnosno koji ne predstavljaju dugotrajnu imovinu.

Podaci na ovoj kartici popunjavaju se kada se u gornjoj tabeli unese stavka sa tipom transakcije **Ekonomske operacije**.

Polja su slična onima na kartici **Operacije nad osnovnim sredstvima**.

#### AMORTIZACIJA

Ova kartica se u okviru računovodstvenog knjiženja uglavnom ne koristi, jer se amortizacija jednostavnije obrađuje putem odgovarajuće automatske procedure u okviru završnih knjiženja ili, za pojedinačno osnovno sredstvo, direktno na kartici osnovnog sredstva (u odgovarajućoj tabeli koja sadrži ista polja kao i ova kartica).

Ukoliko se prilikom unosa osnovnog sredstva želi odmah evidentirati i amortizacija (dok će se računovodstveni deo voditi na kartici **Knjiženje**), potrebno je:
- pozvati postojeće osnovno sredstvo pomoću dugmeta **Odaberi postojeće osnovno sredstvo**;
- proveriti da li je tip operacije **Redovna amortizacija** (ukoliko već nije definisan računovodstvenim obrascem);
- u polje **Iznos** uneti vrednost godišnje amortizacije koju treba evidentirati;
- na kartici **Amortizacija** odabrati godinu amortizacije (polje **Godina**) i ručno popuniti obavezna polja.

**Redni broj**: omogućava izbor reda kartice osnovnog sredstva putem padajuće liste (jedan red ukoliko nema dodatnih komponenti ili povećanja vrednosti sredstva).
**Godina**: potvrđuje godinu amortizacije.
**Vrsta amortizacije**: redovna, anticipirana, usporena ili ostatak.
**Konto / Podkonto / Opis troška amortizacije**: uobičajeno se automatski preuzima iz kategorije osnovnog sredstva učitanog u gornjoj tabeli.
**Konto / Podkonto / Opis fonda amortizacije**: takođe se automatski preuzima iz kategorije osnovnog sredstva učitanog u gornjoj tabeli.
**Osnovica**: istorijska vrednost osnovnog sredstva na osnovu koje se obračunava amortizacija primenom definisanog **Procenta** (stope amortizacije).
**Dani korišćenja**: koriste se za obračun amortizacije ako je u odgovarajućoj kategoriji osnovnog sredstva aktiviran obračun prema broju dana (putem odgovarajuće opcije).
**Trošak**: rezultat obračuna:

> osnovica × procenat × broj dana / 365

Po potrebi se može ručno izmeniti.
**Proknjiženo**: aktiviranjem ove opcije amortizacija dobija status **Proknjiženo**, čime se sprečava njeno brisanje. Bez ove oznake naknadni obračun amortizacije neće biti moguć.
**Poreska**: označava da se radi o poreskoj amortizaciji i povećava poreski amortizacioni fond, odvojeno od računovodstvenog.
**Poreski priznati / Poreski nepriznati iznos amortizacije**: ova polja automatski se popunjavaju ukoliko je u **[Kategoriji osnovnog sredstva](/docs/configurations/tables/finance/fixed-asset-category)** definisana **Vrsta odbitka**, koja je povezana sa tabelom **[Vrste odbitaka](/docs/configurations/tables/finance/deductibility-types)** u kojoj je definisan procenat poreske priznatosti. U suprotnom ih je moguće popuniti ručno.

Na kartici **Operacije nad osnovnim sredstvima**, tip operacije **Redovna amortizacija** automatski ažurira odgovarajući red u knjizi osnovnih sredstava tako što povećava fond amortizacije i za isti iznos umanjuje neto knjigovodstvenu vrednost sredstva.

#### UPRAVLJANJE PODACIMA SREDSTVA

Ova kartica služi za upravljanje podacima potrebnim za tehničku (vanračunovodstvenu ili poresku) amortizaciju, koja se može voditi paralelno sa računovodstvenom amortizacijom.
Najpre je potrebno da u tabeli **[Kategorije osnovnih sredstava](/docs/configurations/tables/finance/fixed-asset-category)** bude aktivirana odgovarajuća opcija koja omogućava unos ovih podataka na kartici osnovnog sredstva. Nakon evidentiranja računovodstvenog knjiženja, na primer nabavke osnovnog sredstva, svi podaci potrebni za obračun tehničke odnosno poreske amortizacije automatski se prenose na ovu karticu. Po potrebi ih je moguće naknadno menjati, nezavisno od zvaničnih računovodstvenih podataka koji se koriste za evidentiranje osnovnog sredstva. Polja na ovoj kartici praktično odgovaraju poljima sa kartice **Operacije nad osnovnim sredstvima**.
Kartica **Amortizacija**, s druge strane, koristi se isključivo za računovodstvene amortizacije, tako da se upravljanje tehničkim (vanračunovodstvenim) amortizacijama može obavljati samo direktnim ulaskom u karticu osnovnog sredstva (**Administracija > Osnovna sredstva > Osnovna sredstva > dvostruki klik na sredstvo**).

#### CENTRI TROŠKOVA – PROJEKTI

Ova kartica (**vidljiva samo kada NISU aktivirane napredne funkcionalnosti Kontrolinga**) dostupna je kada u tabeli **Preduzeće** nije aktivirana opcija **Upravljanje kontrolingom**.
Kartica je namenjena unosu centra troška / centra profita i projekta koji će biti povezani sa karticom osnovnog sredstva kreiranom kroz računovodstveno knjiženje.
Konkretno, centar koji će biti povezan sa karticom osnovnog sredstva (a koji se može uneti i ručno direktno na kartici osnovnog sredstva, na kartici **Detalji**) predstavlja izuzetak specifičan za to osnovno sredstvo u odnosu na podatke definisane u kategoriji osnovnog sredstva kojoj ono pripada.

**Uneti centar troška koristiće se prilikom automatskog obračuna amortizacije.**

:::tip NAPOMENA
Ako su aktivirane napredne funkcionalnosti Kontrolinga, upravljanje poslovnim centrom i projektom na koje će biti raspoređene amortizacione kvote definiše se na posebnoj kartici **Amortizacija za kontroling** unutar kartice osnovnog sredstva.
:::

**Centar troška**: padajuća lista za izbor poslovnog centra, povezana sa tabelom **[Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)**.
**Opis**: opis poslovnog centra izabranog u prethodnom polju.
**Procenat**: procenat raspodele dodeljen poslovnom centru unetom u red. Na primer, ukoliko se celokupan trošak raspoređuje na jedan centar, unosi se 100%. Ako se amortizaciona kvota deli između dva centra, unose se dva reda sa po 50%.
**Sekcija namenjena unosu projekta** ne ažurira se niti je povezana sa poljem **Projekat** u zaglavlju knjiženja i/ili karticom **Projekti**, koji služe za upravljanje redovnim operativnim troškovima, a ne dugoročnim troškovima.
Ova tabela namenjena je, kao i kod poslovnih centara, određivanju projekta koji će biti povezan sa karticom osnovnog sredstva i na koji će biti raspoređene amortizacione kvote.
**Projekat**: *widget* za izbor projekta (dvostruki klik otvara pomoć za pretragu, dok unos teksta aktivira brzu pretragu). Polje je povezano sa tabelom Projekti.
**Procenat**: procenat raspodele dodeljen projektu unetom u red. Na primer, ako se celokupan trošak raspoređuje na jedan projekat, unosi se 100%. Ako se amortizaciona kvota deli između dva projekta, unose se dva reda sa po 50%.

## POSTUPAK ZA PRODAJU OSNOVNOG SREDSTVA

- Unesite odgovarajući računovodstveni obrazac koji je pravilno konfigurisan i odgovarajuću vrstu operacije, na primer **Potpuno otuđenje**.
- Popunite zaglavlje knjiženja na uobičajen način unosom kupca, podataka o fakturi i ukupnog iznosa.
- Na kartici **Osnovna sredstva** koristite komandu **Odaberi postojeće osnovno sredstvo** kako biste otvorili karticu sredstva koje se prodaje.
- U gornjoj tabeli u polje **Iznos** unesite osnovicu prodajne vrednosti ugovorene sa kupcem. Ukoliko se osnovno sredstvo poklanja ili rashoduje, unesite vrednost **0**.
- U donjoj tabeli sistem automatski stornira akumuliranu amortizaciju i, na osnovu razlike, automatski obračunava i popunjava kapitalni dobitak ili kapitalni gubitak.

Ako je računovodstveni obrazac pravilno konfigurisan (preporučuje se korišćenje standardnog obrasca), računovodstveni deo će biti automatski popunjen svim potrebnim PDV i računovodstvenim podacima, uključujući:
- otpis nabavne (istorijske) vrednosti osnovnog sredstva,
- storniranje akumulirane amortizacije,
- evidentiranje kapitalnog dobitka ili kapitalnog gubitka.

## OSTALO

U slučaju delimičnog otuđenja (uvek kod inkrementalnog osnovnog sredstva ili kod delimičnog otuđenja koje nije povezano sa postojećom imovinskom operacijom kod neinkrementalnog osnovnog sredstva), korisnik mora dopuniti red delimične operacije iznosima storniranja akumulirane amortizacije (sa negativnim predznakom) i uneti odgovarajući kapitalni dobitak ili kapitalni gubitak. Iste iznose potrebno je uneti i na kartici **Knjiženje** radi evidentiranja u glavnoj knjizi.
U svim ostalim slučajevima aplikacija će automatski ažurirati karticu osnovnog sredstva, evidentirati transakciju u PDV sekciji knjiženja i na osnovu tih podataka ažurirati računovodstveno knjiženje. Kod otuđenja, ukoliko su podkonta za kapitalni dobitak i kapitalni gubitak definisana i u računovodstvenom obrascu i u parametrima računovodstva, sistem će automatski dodati i potrebne redove za evidentiranje prodaje, uključujući:
- storniranje ukupne nabavne vrednosti osnovnog sredstva,
- jedan ili više redova za storniranje akumulirane amortizacije,
- evidentiranje kapitalnog dobitka ili kapitalnog gubitka, u zavisnosti od ostvarene razlike.

**Dodatne funkcionalnosti kartice Osnovna sredstva**

Prilikom unosa novog osnovnog sredstva moguće ga je automatski podeliti na više zasebnih kartica.
To je korisno kada se jednom nabavkom stiče više istovetnih sredstava, na primer pet istih računara. Umesto ručnog unosa pet zasebnih kartica, korisnik može uneti jedno osnovno sredstvo ukupne vrednosti, a zatim ga odgovarajućom komandom automatski podeliti na pet jednakih kartica.
Druga mogućnost je evidentiranje cele nabavke kao jednog osnovnog sredstva koje predstavlja skup od pet sredstava. Iako ovakav pristup pojednostavljuje vođenje registra osnovnih sredstava, kasnije može otežati prodaju pojedinačnih sredstava, jer će svaka pojedinačna prodaja morati da se evidentira kao delimično otuđenje.
Takođe je moguće obrisati red osnovnog sredstva unet u gornjoj tabeli. U tom slučaju sistem će tražiti potvrdu da li korisnik želi da obriše i matične podatke osnovnog sredstva, pri čemu je podrazumevana opcija **Ne**. Ista poruka prikazuje se i prilikom zatvaranja knjiženja bez čuvanja podataka.
Preporučuje se poseban oprez prilikom odgovora na ovu poruku kako u bazi podataka ne bi ostale prazne kartice osnovnih sredstava.

#### Specifična dugmad

> **Odaberi postojeće osnovno sredstvo**: omogućava izbor već postojećeg osnovnog sredstva i evidentiranje nove operacije nad njim.  
> **Obriši osnovno sredstvo**: omogućava brisanje izabranog osnovnog sredstva.  
> **Obriši izabrane podatke iz tabele tipa amortizacije**: omogućava brisanje izabranog reda u donjoj tabeli kartice **Amortizacija**.

## **8. Parametri**

Kartica **Parametri** uvek je prisutna u računovodstvenom knjiženju i sadrži niz informacija i parametara koji su korisni, ali nisu obavezni za unos knjiženja.
**Status knjiženja**: može biti **konačno** ili **privremeno**.
Knjiženje sa statusom **konačno** može se menjati (osim računovodstvenog obrasca i referentne valute) sve dok nije izvršen konačan ispis zakonom propisanih poslovnih knjiga ili dok nije uključeno u automatsko zatvaranje računa.
Status **privremeno** (koji isključuje poreska knjiženja i numeriše knjiženje negativnim brojevima počev od **-1000**) može se koristiti za evidentiranje avansnih računa ili drugih periodičnih transakcija čiji će se finansijski efekti ostvariti u budućnosti (na primer obračunatih troškova).
Otvaranjem knjiženja i promenom statusa u **konačno**, sistem će automatski dodeliti novi broj knjiženja i odgovarajući PDV protokol važeći za izabrani datum knjiženja, uz poštovanje numeričkog redosleda.
Podsećamo da postoji posebna procedura za upravljanje privremenim knjiženjima koja omogućava masovni prelazak više izabranih privremenih knjiženja u status **konačno**.

Sljedeće opcije preuzimaju se iz računovodstvenog obrasca:

**Grupiši PDV knjigu** (preporučuje se da uvek bude uključena): grupiše ili ne grupiše u dnevniku redove PDV-a koji se odnose na isto konto.

**Automatski ponovni obračun centara troškova, prihoda i projekata**: može biti korisna kod određenih vrsta ručnih knjiženja, kod kojih korisnik ručno upravlja karticama centara troškova/projekata (CDC/CDP). Ako je opcija uključena, aplikacija će svaki put kada se izmeni izvorni podatak u dnevniku automatski resetovati ove kartice, što može dovesti do gubitka svih prethodno unetih ručnih podataka.

Ovaj automatizam će se, čak i kada opcija nije uključena, primenjivati prilikom prvog unosa knjiženja. Opcija se odnosi isključivo na naknadne izmene postojećeg knjiženja.

**Crna lista**: (**ZASTARELO**) omogućava upravljanje posebnim slučajevima nabavke iz zemalja van EU (sa poslovnim razlogom koji ne podleže PDV-u), koje je nekada bilo potrebno uključiti u prijavu transakcija sa državama sa povlašćenim poreskim režimom povezivanjem tekućeg knjiženja sa PDV evidencijom carinskog dokumenta iz kojeg su se preuzimali podaci za prijavu.

**Datum / Broj povezane registracije**: korišćeno je za prijavu transakcija sa dobavljačima sa crne liste povezivanjem carinskog dokumenta sa registracijom dobavljača kako bi se preuzeli podaci za prijavu.

**Datum / Broj povezane knjižne odobrenja**: zastareli podatak. Kod prodaje, prilikom kreiranja knjižnog odobrenja, moguće je navesti na koju se fakturu odnosi.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/parameters-tab/image02.png)

Na slici: polje za unos reference fakture u knjižnom odobrenju.

Prilikom knjiženja knjižnog odobrenja, Fluentis pokušava da pronađe odgovarajuće knjiženje fakture i automatski popuni ovu vezu i na računovodstvenom nivou (ukoliko se knjižno odobrenje unosi ručno, ova polja mogu se popuniti i ručno).

Ova funkcionalnost korišćena je za **Spesometro** (pre 2017. godine), kada je postojao limit od 3.000 evra, kako bi se knjižna odobrenja povezala sa odgovarajućim fakturama i izbeglo dvostruko prijavljivanje transakcija. Danas se više ne koristi.

**AUDIT TRAIL**

Sekcija namenjena sistemu za praćenje aktivnosti korisnika i kontroli izmena podataka, integrisanom u informacioni sistem **Audit Trail**.

**Datum kreiranja / Korisnik**: prikazuje datum i korisnika koji je kreirao tekuće knjiženje.

**Datum poslednje izmene / Korisnik**: prikazuje datum i korisnika koji je poslednji izmenio knjiženje.

**Datum validacije / Korisnik**: prikazuje datum i korisnika koji je validirao knjiženje. Polje se popunjava promenom statusa (koji mora biti odgovarajuće konfigurisan), pri čemu se evidentiraju korisnik i datum validacije. Kada je ovo polje popunjeno, knjiženje se može označiti kao zaštićeno od daljih izmena.

**Partnerov konto**: (**ZASTARELO**) polje za izbor konta već šifrovanog u bazi podataka putem *widget*-a za pretragu. Koristilo se, na primer, za čuvanje podataka o stranom dobavljaču na carinskim dokumentima, koji su se knjižili preko generičkog partnera „Carina". Razlog je bio promena propisa vezanih za **Spesometro**, po kojima od 2018. godine više nije bilo dozvoljeno slanje podataka carinskih organa koji često nisu posedovali poreski identifikacioni broj, pa se umesto PIB-a koristila generička oznaka **XX-99999999**, gde **XX** predstavlja ISO oznaku države.

**Donja tabela** prikazuje eventualna automatski generisana knjiženja povezana sa tekućim knjiženjem. Svakom izmenom osnovnog knjiženja sistem će automatski ažurirati povezana knjiženja prema pravilima definisanim u automatskim obrascima.

## 9. Grupisanje stavki

Funkcionalnost grupisanja stavki omogućava kreiranje grupa otvorenih stavki prilikom njihovog nastanka ili naknadno. Grupa predstavlja svojevrsni kontejner u kojem se vizuelno nalaze pojedinačne otvorene stavke.
Nakon toga moguće je upravljati ovim grupama spajanjem ili razdvajanjem otvorenih stavki. Tokom procesa plaćanja moguće je fleksibilno povezivati plaćanja sa grupama i svim pripadajućim detaljnim otvorenim stavkama.
Ovakav način rada namenjen je prvenstveno korisnicima iz oblasti veleprodaje, maloprodaje i sličnih delatnosti, odnosno svima koji upravljaju velikim brojem otvorenih stavki malih iznosa, gde veza između izdatih ili primljenih faktura i njihovih uplata zahteva veću fleksibilnost nego u standardnom načinu rada.
Kada je ova funkcionalnost aktivirana, ne može se koristiti zajedno sa standardnim načinom upravljanja otvorenim stavkama i plaćanjima.
Izbor između ova dva načina rada mora biti donet unapred, prilikom konfiguracije računovodstvenih obrazaca, u skladu sa potrebama poslovnog procesa.

### UPRAVLJANJE OBRASCEM I REZULTAT U KNJIŽENJU

Kod računovodstvenog obrasca za otvaranje dospeća plaćanja (na primer za **Izlaznu fakturu** ili **Ulaznu fakturu dobavljača**) potrebno je aktivirati standardne opcije za otvaranje dospeća plaćanja (po potrebi i zatvaranje i kompenzaciju), uz uključivanje opcije **Kreiraj grupu**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image01.png)

Prilikom knjiženja poslovnog događaja korišćenjem ovako podešenog obrasca neće biti vidljivih razlika tokom unosa, niti će grupa dospeća plaćanja biti prikazana korisniku. Međutim, sistem će automatski kreirati grupu sa istim referencama kao i dospeće plaćanja koje ona sadrži.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image02.png)

Za izmene grupe, kao što su dodavanje novih dospeća plaćanja ili njihova raspodela, potrebno je koristiti ekran **[Grupisanje dospeća plaćanja](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping)**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image03.png)

Na ovom ekranu korisnik može za izabrana dospeća plaćanja kreirati jednu ili više novih grupa. Nove grupe automatski preuzimaju broj i datum dokumenta dospeća plaćanja iz kojeg su nastale.
Upravljanje grupama vrši se pomoću kontekstnog menija koji se otvara desnim klikom miša na pojedinačno dospeće plaćanja.
- **Označi**: omogućava izbor više dospeća plaćanja ili grupa.
- **Kreiraj novu grupu**: kreira novu grupu dospeća plaćanja.
- **Razgrupiši**: uklanja dospeće plaćanja iz grupe.
- **Kompenzacija**: kreira kompenzaciju i zatvara grupu.
- **Detalji**: prikazuje detalje pojedinačnog dospeća plaćanja.
- **Podeli dospeće plaćanja**: deli dospeće plaćanja unutar grupe.

Prikaz grupa vrši se prema podkontu izabranom u gornjoj tabeli.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image04.png)
![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image05.png)

Pomoću metode **drag and drop** dospeća plaćanja mogu se premeštati iz jedne grupe u drugu.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image06.png)

### NAPOMENA

Kod automatskog knjiženja faktura iz modula Nabavka ili Prodaja, u tabelama **Vrste faktura** (u **[Nabavci](/docs/configurations/tables/purchase/purchase-invoices-type)** i **[Prodaji](/docs/configurations/tables/sales/invoices-type)**) postoji odgovarajuća opcija za automatsko grupisanje dospeća plaćanja prilikom knjiženja faktura.
Kod obrasca za zatvaranje dospeća plaćanja (na primer **Plaćanje gotovinom**) potrebno je aktivirati opciju **Grupiši dospeća plaćanja**, čime će biti prikazana kartica **Plaćanja grupa**.
Obavezno je izabrati odgovarajući tip plaćanja iz padajuće liste.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image07.png)

U ovom trenutku operativni postupak za korisnika kod knjiženja uplata/isplata značajno se razlikuje od standardnog načina obrade dospeća plaćanja.
Korisnik započinje unos na kartici **[Knjiženje](/docs/finance-area/ledger-records/records/ledger-record)** tako što direktno unosi iznos uplate ili isplate (popunjavanjem sekcija dnevnika knjiženja).
Aplikacija će zatim automatski kreirati odgovarajuće dospeće plaćanja na osnovu dugovanja ili potraživanja, koje korisnik kasnije može, po želji, ručno dodeliti određenoj grupi na kartici **Plaćanja grupa**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image08.png)

Aplikacija će za svako od ovih dospeća plaćanja automatski generisati odgovarajuće međusobne uplate. Za pregled i upravljanje grupama koriste se isključivo odgovarajući pregledi i procedure, kako bi se korisniku omogućio jasan uvid u stanje duga.
Kada saldo grupe dostigne vrednost **0**, grupa će automatski dobiti status **Zatvoreno**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image09.png)

> **NAPOMENA:** Za prikaz grupisanja potrebno je odabrati odgovarajući red u gornjoj tabeli.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image10.png)

Direktno na kartici **Plaćanja grupa** korisnik može izvršiti dodatne operacije, kao što su:
- razgrupisavanje dospeća plaćanja,
- kreiranje novih grupa.

### VIDEO TUTORIJALI

:::important Pogledajte i
[**VIDEO TUTORIJALI O KNJIŽENJIMA**](/docs/video/finance/intro)
:::
