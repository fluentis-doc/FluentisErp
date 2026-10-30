---
title: Poduzeće
sidebar_position: 3
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako tablicu želite konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

**### UVOD**

Ova tablica smatra se osnovnom i nužnom za upravljanje svim ostalim podacima jer omogućuje definiranje poduzeća povezanih s bazom podataka na koju ste spojeni.

Moguće je definirati neograničen broj poduzeća koja će istodobno biti dostupna unutar iste baze podataka.

Nakon unosa odnosno stvaranja novog poduzeća potrebno je putem aplikacije ARM postaviti prava vidljivosti za korisnike.

:::note[Napomena]
Postupak instalacije sustava Fluentis uobičajeno stvara jedno zadano poduzeće pa baza podataka nikada nije potpuno prazna.
:::

Uz pojam poduzeća potrebno je odmah objasniti i pojam **DIVIZIJE**.

Za svako poduzeće potrebno je definirati barem jednu diviziju (primjerice, moguće ju je nazvati *Glavno sjedište* ili nekim sličnim nazivom ako ne postoji posebna potreba za definiranjem različitih divizija, uz prethodno razumijevanje načina njihova upravljanja i posebnosti).

:::tip[INFO]
Pojam divizije može se shvatiti kao odjel poduzeća ili njegov poslovni segment koji je dovoljno značajan da ima zaseban ulazni i izlazni poslovni ciklus, odnosno zasebno izdavanje dokumenata, narudžbi, računa itd.

Iako je računovodstvo jedinstveno na razini poduzeća koje sastavlja jedan financijski izvještaj, moguće ga je jednostavno filtrirati prema divizijama kako bi se izradio izvještaj za pojedinu diviziju. Filtriranje prema diviziji moguće je i u različitim obrascima, primjerice prilikom pretraživanja računovodstvenih knjiženja i otvorenih stavki (ponekad je polje za filtriranje u početku "skriveno" unutar proširivog odjeljka). Šifarnici artikala također su odvojeni jer se odnose na različita poslovna područja.
:::

---

**### UPRAVLJANJE TABLICOM**

Otvoreni obrazac prikazuje popis poduzeća koja postoje u bazi podataka.

Radi lakšeg pregleda, u tablici se prikazuju neka polja iz detalja pojedinog poduzeća, koja su opisana u nastavku.

**Za stvaranje novog poduzeća** (za koje će se zatim definirati jedna ili više pripadajućih divizija) **pritisnite gumb _NOVO_**.

:::note[Napomena]
Nakon stvaranja novog poduzeća u ovoj tablici potrebno je putem aplikacije ARM postaviti prava vidljivosti za pojedine korisnike. Prije toga potrebno je definirati i samo poduzeće u aplikaciji ARM (izbornik Poduzeća).
:::

**### DETALJI ŠIFARNIKA PODUZEĆA**

**Šifra** poduzeća (mora odgovarati šifri definiranoj na portalu ARM).

**Opis**: službeni naziv poduzeća.

**PDV identifikacijski broj**: u pravilu se unosi bez nacionalnog prefiksa, primjerice IT za Italiju.

<details>

<summary>Detalji upravljanja **licencom Fluentis** i provjere PDV identifikacijskog broja (kliknite za proširenje)</summary>

1. Prilikom **prve instalacije** sustav traži unos poduzeća, divizije i valute u bazu podataka. Poduzeće se unosi **bez PDV identifikacijskog broja**, zbog čega nije povezano s licencom i može se bez problema koristiti. Stoga je moguće unijeti proizvoljan broj poduzeća i divizija **ako nemaju PDV identifikacijski broj**, jer ih sustav za upravljanje licencama ne prepoznaje. Međutim, u takvom okruženju neće biti moguće upravljati računima i drugim ključnim poreznim dokumentima.

2. Kada se odluči konfigurirati stvarno poduzeće, postoje dva moguća scenarija:

   a. **Krajnji korisnik**: unosi se poduzeće i PDV identifikacijski broj koji su dostavljeni komercijalnoj podršci i za koje je aktivirana licenca unesena tijekom instalacije. Od tog trenutka svaka promjena naziva/opisa poduzeća i njegova PDV identifikacijskog broja mora se dogovoriti s komercijalnom podrškom, uključujući dodavanje drugih poduzeća. U suprotnom će se to smatrati prijevarnom aktivnošću i licenca će biti blokirana. Moguće je, međutim, stvoriti više kopija istog okruženja (baze podataka), čak i na različitim poslužiteljima (primjerice za razvojna ili testna okruženja), uz zadržavanje istog poduzeća i PDV identifikacijskog broja. Broj korisnika koji se mogu istodobno povezati računa se za sva okruženja zajedno.

   b. **Partner**: partneru se dodjeljuje NFR licenca s unaprijed definiranim brojem korisničkih računa (5 standardnih – 50 VIP). Partner može koristiti licencu za vlastitu internu upotrebu sustava Fluentis, kao i za stvaranje različitih razvojnih/testnih ili demo okruženja. Međutim, licenca uvijek mora biti povezana s poduzećima bez PDV identifikacijskog broja ili s poduzećem i PDV identifikacijskim brojem koji su dostavljeni komercijalnoj podršci. Unos drugog poduzeća i/ili PDV identifikacijskog broja koji Fluentis nije odobrio dovest će do blokiranja licence. Ukupan broj povezanih korisnika računa se za sva okruženja stvorena istom licencom. Nakon ugovaranja suradnje s klijentom potrebno je zatražiti službenu licencu za krajnjeg korisnika koja će se konfigurirati u njegovim okruženjima.

</details>

**Porezni broj poduzeća**: može biti jednak PDV identifikacijskom broju.

**Šifra djelatnosti**: odnosno Ateco šifra glavne djelatnosti poduzeća.

**Država poduzeća**: na temelju ovog polja Fluentis prepoznaje lokalizaciju i porezne postavke koje će se u sustavu prikazivati kao zadane.

**Valuta**: valuta u kojoj se vodi službeno računovodstvo poduzeća.

:::note[Napomena]
Država i valuta poduzeća već su popunjene jer su obvezni podaci koji se postavljaju prilikom instalacije sustava Fluentis. To su ključni podaci koji određuju niz drugih administrativnih i poreznih postavki. Valuta je posebno važna jer se u njoj vodi naše računovodstvo.
:::

**Jezik**: ovo polje nije obvezno, ali je vrlo važno. U njemu se određuje službeni jezik poduzeća. Koristi se kao zadani jezik za ispis dokumenata, kao i za automatsko popunjavanje opisnih tekstova u računovodstvu.

**Povezani šifarnik**: ovo je neobvezno polje koje služi za dvije namjene. Prva je povezivanje s fizičkom osobom u slučaju kada je poduzeće samostalna djelatnost, kako bi se podaci o fizičkoj osobi mogli preuzeti za porezne prijave.

Druga namjena odnosi se na dva poduzeća koja pripadaju istoj grupi i međusobno posluju, odnosno razmjenjuju dokumente unutar grupe (intercompany). Polje omogućuje prijenos podataka iz jednog poduzeća u drugo. Primjerice, moguće je automatski pretvoriti izlazni račun prvog poduzeća u ulazni račun drugog poduzeća. Kako bi se to ostvarilo, drugo poduzeće mora znati u kojem šifarniku treba pronaći dobavljača na kojeg će glasiti dokument.

Ova se postavka koristi i u postupku **Kontroling > Zaključivanja > Međurazdoblja > Konsolidacija**, u kojem sustav eliminira međusobne troškove i prihode, potraživanja i obveze između dvaju poduzeća koja pripadaju istoj grupi, a istodobno objedinjuje troškove i prihode, potraživanja i obveze prema vanjskim subjektima radi izrade konsolidiranog financijskog izvještaja.

**Polja adrese**: odnose se na adresu registriranog sjedišta.

**PDV ured**: u ovo se polje unosi grad u kojem se nalazi nadležni PDV ured poduzeća.

**Ured REA / Broj upisa u REA-u**: oznaka pokrajine i broj upisa u registar trgovačkih društava (potrebno za elektroničko fakturiranje).

**Upisani kapital / Uplaćeni kapital**: tekstualni podaci koji se odnose na vrijednosti stanja kapitala poduzeća (potrebni za elektroničko fakturiranje).

Za elektroničko fakturiranje potrebno je popuniti i polja **Članovi poduzeća** i **Status**, kojim se određuje je li poduzeće u postupku likvidacije.

**Pravni oblik**: u ovo se polje unosi šifra koja identificira vrstu poduzeća. Tablica je fiksna i unaprijed definirana.

**Porezni režim**: u ovo se polje unosi porezni režim u kojem poduzeće posluje. Tablica je fiksna i unaprijed definirana.

:::tip[PDV grupa]
Na popis dostupnih poreznih režima dodana je šifra 61 – PDV GRUPA. Odabirom ove stavke, ako poduzeće pripada PDV grupi te stoga ima vlastiti porezni broj, ali koristi PDV identifikacijski broj matičnog poduzeća, prilikom izvoza XML datoteke izlaznog računa bit će navedeni i PDV identifikacijski broj i porezni broj. Naime, SDI provjerava oba polja, a ne samo PDV identifikacijski broj, ako poduzeće navede da pripada PDV grupi.

Kod XML datoteka ulaznih računa ovom se postavkom provjerava PDV identifikacijski broj, a ako u bazi podataka postoji više poduzeća s istim PDV identifikacijskim brojem, provjerava se i porezni broj.
:::

**Broj decimala za polja količina**: određuje broj decimalnih mjesta koja će se prikazivati u ispisima za polja količina u dokumentima.

Zastavica **Prikaži simbol valute** određuje hoće li se simbol valute (i polja čija je vrijednost nula) prikazivati u obrascima za pregled računovodstvenih knjiženja.

Zastavica **Upravljanje kontrolingom** omogućuje aktiviranje naprednih postupaka, odnosno cjelokupnog skupa funkcionalnosti područja kontrolinga za poduzeće koje se uređuje.

**Matično poduzeće grupe**: polje se koristi u postupku modula Kontroling **Glavna konsolidacija**. Ovim se postupkom provodi posebna konsolidacija podataka na razini matičnog poduzeća.

Nakon unosa matičnog poduzeća, u kontnom planu odabranog poduzeća postaje vidljivo i polje za povezivanje s odgovarajućim kontima u kontnom planu glavnog poduzeća.

Tijekom konsolidacije računovodstveno knjiženje ovisnog poduzeća prenijet će se na konto navedeno za matično poduzeće.

Podatak koji se obrađuje u ovom postupku jest podatak iz modula Kontroling, koji su već obradili odgovarajući nositelji troškova, a ne podatak iz glavne knjige.

Samo će se računovodstveni dio podataka preslikati na odgovarajuće šifre, dok će se kretanje centra troška (centra tvrtke) prenijeti bez izmjena. Preduvjet za prijenos jest da šifra centra tvrtke bude jednaka u matičnom i ovisnom poduzeću.

**#### Donji odjeljak**

U donjem dijelu prozora nalaze se tri proširiva odjeljka s dodatnim podacima. Riječ je o neobveznim podacima koji ne moraju biti uneseni, barem ne u početnoj fazi:

U odjeljku **EDI** (Electronic Data Interchange) moguće je navesti određene podatke o poduzeću koji se koriste u elektroničkoj razmjeni podataka.

U odjeljku **Troškovi biljega** unose se iznos troška biljega i prag iznosa nakon kojeg je obvezno njegovo iskazivanje na računu, broj odobrenja za virtualni biljeg i pokrajina nadležnog financijskog ureda. Napominjemo da se u tablici poduzeća unosi minimalna vrijednost transakcija oslobođenih PDV-a nakon koje se na račun dodaje trošak biljega. Međutim, taj trošak potrebno je definirati i u tablici Vrste troškova te ga unijeti u šifarnik kupca. Samo će se na taj način trošak biljega automatski dodati ako je iznos na računu oslobođen PDV-a.

**Proširivi odjeljak Ri.Ba.**: sadrži identifikacijske podatke poduzeća za elektronički bankovni sustav: SIA šifru (5 alfanumeričkih znakova) i CUC šifru (8 znakova) za SEPA-u.

**### Tablica divizija, zadana banka i logotip**

Na desnoj strani obrasca nalaze se tri tablice.

U prvoj su prikazane divizije definirane za poduzeće. Važno je zapamtiti da svako poduzeće u programu mora imati barem jednu diviziju, čak i ako ona, kao što je često slučaj, odgovara jedinom poslovnom sjedištu. Često se preimenuje u Divizija 1 ili, još bolje, jednostavno u Sjedište. Za svaku diviziju moguće je definirati provodi li se kontroling na tjednoj ili mjesečnoj razini.

U drugoj tablici moguće je navesti banke preko kojih poduzeće posluje te jednu od njih označiti kao zadanu banku. Ovaj podatak nema posebnu praktičnu važnost. Mogao bi se koristiti u prilagođenim izvještajima za ispis radi prikaza referentne banke. U standardnim postupcima koristi se samo u izvještaju za ispis [**opomena za plaćanje**](/docs/finance-area/maturity-values/reports/dunning-letters) koji se šalju kupcima, kako bi se navela banka putem koje je moguće izvršiti uplatu.

Posljednji dio odnosi se na logotip poduzeća. Zadani logotip (postavljen putem gumba **Promijeni zadani logotip** na vrpci) automatski se koristi u dokumentima ulaznog i izlaznog poslovnog ciklusa.

Prije toga potrebno je uvesti jednu ili više slika koje će se koristiti kao logotipi putem gumba **Uvoz slika**.

---

**### GUMB OPĆE POSTAVKE (ZA POKRETANJE POSTUPKA FAST START)**

Ovaj gumb u tek instaliranoj bazi podataka ili u poduzeću dodanom u postojeću bazu stvara niz zadanih osnovnih podataka. Primjerice, stvara kontni plan i osnovne postavke PDV registara, računovodstvenih predložaka te vrsta dokumenata kao što su narudžbe, otpremnice, računi itd.

Ova je funkcionalnost vrlo korisna prilikom definiranja strategije pokretanja novog poduzeća i pripadajućeg postavljanja softvera. U određenim slučajevima može biti praktičnije započeti sa zadanim postavkama i zatim ih prilagoditi stvarnim potrebama, primjerice izmjenom kontnog plana, računovodstvenih predložaka i drugih zadanih tablica, nego sve stvarati od početka. Na taj se način softver može u potpunosti osposobiti za rad u kraćem vremenu.

:::tip[Više informacija]
Za detaljnije informacije pogledajte [**ovdje**](/docs/guide/fast-start).
:::

**### PODACI POTREBNI ZA ELEKTRONIČKO FAKTURIRANJE**

:::tip[PAŽNJA]

Preporučuje se potpuno popuniti sve podatke u šifarniku poduzeća. Ovom prilikom posebno ističemo polja potrebna za izradu elektroničkih računa:

- Prije svega, PDV identifikacijski broj i porezni broj.
- Šifra primatelja i PEC adresa nisu obvezna polja te služe isključivo za pohranu vlastitih podataka.
- Ako želite unijeti telefonski broj i broj faksa, preporučuje se da ne koristite kosu crtu za odvajanje pozivnog broja kako biste izbjegli moguće probleme prilikom formalnih provjera u sustavu za razmjenu podataka zbog neprepoznatih znakova.
- U polja povezana s uredom REA potrebno je unijeti oznaku pokrajine u prvo polje, a broj u drugo.
- Potrebno je popuniti i polja Članovi poduzeća i Status, kojim se određuje je li poduzeće u postupku likvidacije.
- Potrebno je unijeti i upisani i uplaćeni kapital. Pritom nemojte koristiti točku za razdvajanje tisućica, a decimalna mjesta odvojite točkom, a ne zarezom, također zbog formalnih provjera sustava SDI.
- Pravni oblik i porezni režim.

:::

**### POSTAVKE ZA PODUZEĆA KOJA PRIPADAJU PDV GRUPI**

:::tip[Informacije: PDV grupa]
Uvođenjem ove zakonske odredbe omogućeno je povezanim poduzećima koja imaju zajedničke financijske, ekonomske i organizacijske interese osnivanje jedinstvene grupe koja se prema poreznim tijelima smatra jednim poreznim obveznikom, isključivo za potrebe PDV-a. Grupa stoga ima jedan zajednički PDV identifikacijski broj.

Poduzeća koja pripadaju grupi izdavat će račune za transakcije s trećim osobama koristeći zajednički PDV identifikacijski broj grupe. S druge strane, isporuke dobara i usluge između poduzeća unutar grupe ne ulaze u osnovicu za obračun PDV-a.

Slijedom toga, sve transakcije koje izvrši jedno od poduzeća u grupi smatraju se transakcijama cijele grupe. Račune i ostale dokumente izdaje predstavnik grupe ili pojedini članovi, pri čemu se uz PDV identifikacijski broj grupe navodi i porezni broj poduzeća koje je izvršilo transakciju.
:::

Ako jedno ili više poduzeća u bazi podataka pripada PDV grupi, u ovoj je tablici potrebno popuniti polja **PDV IDENTIFIKACIJSKI BROJ** (PDV identifikacijskim brojem grupe) i **POREZNI BROJ** (posebnim poreznim brojem poduzeća koje pripada grupi).

Važno je postaviti i **PRAVNI OBLIK**, koji mora biti **61 – PDV grupa**.

**### NOVA KARTICA PDV GRUPE**

U ovoj se kartici unose postavke PDV grupe koju čini jedno ili više poduzeća prisutnih u bazi podataka.

**Razdoblje / Godina početka** i **Razdoblje / Godina završetka**: određuju razdoblje valjanosti postavke i trajanje statusa PDV grupe.

**Je li matično poduzeće grupe**: aktivirajte ovu opciju ako je poduzeće koje koristite matično poduzeće, odnosno poduzeće koje ostalim članovima dodjeljuje svoj PDV identifikacijski broj.

**Padajući izbornik Matično poduzeće**: služi za povezivanje poduzeća koje koristite s matičnim poduzećem koje već postoji u istoj bazi podataka.

**Šifarnik matičnog poduzeća**: služi za odabir vanjskog matičnog poduzeća, odnosno poduzeća koje nije definirano u istoj bazi podataka kao poduzeće. Primjerice, može se raditi o poduzeću koje se vodi u drugom softveru pa ga je potrebno unijeti samo kao kontakt u šifarnik kako bi se mogli dohvatiti podaci poput PDV identifikacijskog broja itd.

**NAPOMENA: U postupku obrade LiPe (tromjesečne prijave obračuna PDV-a) postoji zastavica kojom se omogućuje način rada za PDV grupu u samoj prijavi.**

---

**### VIDEO VODIČI**

:::important[Pogledajte i]
[**VIDEO VODIČI O OPĆIM TABLICAMA**](/docs/video/finance/intro)
:::