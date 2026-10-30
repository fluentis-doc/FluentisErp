---
title: Preduzeće
sidebar_position: 3
---

:::tip[Fast Start]
Na ovu tabelu odnosi se postupak [**Fast Start**](/docs/guide/fast-start).

Ako želite ručno da konfigurišete tabelu, pogledajte kontrolnu listu na povezanoj stranici.
:::

### UVOD

Ova tabela smatra se osnovnom i neophodnom za upravljanje svim ostalim podacima jer omogućava definisanje preduzeća povezanih sa bazom podataka na koju ste povezani.

Moguće je definisati neograničen broj preduzeća koja će istovremeno biti dostupna unutar iste baze podataka.

Nakon unosa, odnosno kreiranja novog preduzeća, potrebno je putem aplikacije ARM podesiti prava vidljivosti za korisnike.

:::note[Napomena]
Postupkom instalacije sistema Fluentis obično se kreira jedno podrazumevano preduzeće, tako da baza podataka nikada nije potpuno prazna.
:::

Uz pojam preduzeća potrebno je odmah objasniti i pojam **DIVIZIJE**.

Za svako preduzeće potrebno je definisati najmanje jednu diviziju (na primer, moguće ju je nazvati *Glavno sedište* ili nekim sličnim nazivom ako ne postoji posebna potreba za definisanjem različitih divizija, uz prethodno razumevanje načina njihovog upravljanja i specifičnosti).

:::tip[INFO]
Pojam divizije može se shvatiti kao odeljenje preduzeća ili njegov poslovni segment koji je dovoljno značajan da ima zaseban ulazni i izlazni poslovni ciklus, odnosno zasebno izdavanje dokumenata, narudžbina, faktura itd.

Iako je računovodstvo jedinstveno na nivou preduzeća, koje sastavlja jedan finansijski izveštaj, moguće ga je jednostavno filtrirati prema divizijama kako bi se izradio izveštaj za pojedinačnu diviziju. Filtriranje prema diviziji moguće je i u različitim formama, na primer prilikom pretraživanja računovodstvenih knjiženja i otvorenih stavki (ponekad je polje za filtriranje u početku „skriveno“ unutar proširivog odeljka). Šifarnici artikala takođe su odvojeni jer se odnose na različita poslovna područja.
:::

---

### UPRAVLJANJE TABELOM

Otvorena forma prikazuje spisak preduzeća koja postoje u bazi podataka.

Radi lakšeg pregleda, u tabeli se prikazuju neka polja iz detalja pojedinačnog preduzeća, koja su opisana u nastavku.

**Za kreiranje novog preduzeća** (za koje će se zatim definisati jedna ili više pripadajućih divizija) **pritisnite dugme _NOVO_**.

:::note[Napomena]
Nakon kreiranja novog preduzeća u ovoj tabeli potrebno je putem aplikacije ARM podesiti prava vidljivosti za pojedine korisnike. Pre toga potrebno je definisati i samo preduzeće u aplikaciji ARM (meni Preduzeća).
:::

### DETALJI ŠIFARNIKA PREDUZEĆA

**Šifra** preduzeća (mora odgovarati šifri definisanoj na portalu ARM).

**Opis**: zvanični naziv preduzeća.

**PDV identifikacioni broj**: po pravilu se unosi bez nacionalnog prefiksa, na primer IT za Italiju.

<details>

<summary>Detalji upravljanja **licencom Fluentis** i provere PDV identifikacionog broja (kliknite za proširenje)</summary>

1. Prilikom **prve instalacije** sistem zahteva unos preduzeća, divizije i valute u bazu podataka. Preduzeće se unosi **bez PDV identifikacionog broja**, zbog čega nije povezano sa licencom i može se bez problema koristiti. Zato je moguće uneti proizvoljan broj preduzeća i divizija **ako nemaju PDV identifikacioni broj**, jer ih sistem za upravljanje licencama ne prepoznaje. Međutim, u takvom okruženju neće biti moguće upravljati fakturama i drugim ključnim poreskim dokumentima.

2. Kada se odluči da se konfiguriše stvarno preduzeće, postoje dva moguća scenarija:

   a. **Krajnji korisnik**: unosi se preduzeće i PDV identifikacioni broj koji su dostavljeni komercijalnoj podršci i za koje je aktivirana licenca uneta tokom instalacije. Od tog trenutka svaka promena naziva/opisa preduzeća i njegovog PDV identifikacionog broja mora se dogovoriti sa komercijalnom podrškom, uključujući dodavanje drugih preduzeća. U suprotnom će se to smatrati prevarnom aktivnošću i licenca će biti blokirana. Međutim, moguće je kreirati više kopija istog okruženja (baza podataka), čak i na različitim serverima (na primer za razvojna ili testna okruženja), uz zadržavanje istog preduzeća i PDV identifikacionog broja. Broj korisnika koji se mogu istovremeno povezati računa se za sva okruženja zajedno.

   b. **Partner**: partneru se dodeljuje NFR licenca sa unapred definisanim brojem korisničkih naloga (5 standardnih – 50 VIP). Partner može koristiti licencu za sopstvenu internu upotrebu sistema Fluentis, kao i za kreiranje različitih razvojnih/testnih ili demo okruženja. Međutim, licenca uvek mora biti povezana sa preduzećima bez PDV identifikacionog broja ili sa preduzećem i PDV identifikacionim brojem koji su dostavljeni komercijalnoj podršci. Unos drugog preduzeća i/ili PDV identifikacionog broja koji Fluentis nije odobrio dovešće do blokiranja licence. Ukupan broj povezanih korisnika računa se za sva okruženja kreirana istom licencom. Nakon ugovaranja saradnje sa klijentom potrebno je zatražiti zvaničnu licencu za krajnjeg korisnika koja će se konfigurisati u njegovim okruženjima.

</details>

**Poreski broj preduzeća**: može biti jednak PDV identifikacionom broju.

**Šifra delatnosti**: odnosno Ateco šifra glavne delatnosti preduzeća.

**Država preduzeća**: na osnovu ovog polja Fluentis prepoznaje lokalizaciju i poreska podešavanja koja će se u sistemu prikazivati kao podrazumevana.

**Valuta**: valuta u kojoj se vodi zvanično računovodstvo preduzeća.

:::note[Napomena]
Država i valuta preduzeća već su popunjene jer su obavezni podaci koji se podešavaju prilikom instalacije sistema Fluentis. To su ključni podaci koji određuju niz drugih administrativnih i poreskih podešavanja. Valuta je posebno važna jer se u njoj vodi naše računovodstvo.
:::

**Jezik**: ovo polje nije obavezno, ali je veoma važno. U njemu se određuje zvanični jezik preduzeća. Koristi se kao podrazumevani jezik za štampanje dokumenata, kao i za automatsko popunjavanje opisnih tekstova u računovodstvu.

**Povezani šifarnik**: ovo je neobavezno polje koje služi za dve namene. Prva je povezivanje sa fizičkim licem u slučaju kada je preduzeće samostalna delatnost, kako bi se podaci o fizičkom licu mogli preuzeti za poreske prijave.

Druga namena odnosi se na dva preduzeća koja pripadaju istoj grupi i međusobno posluju, odnosno razmenjuju dokumente unutar grupe (intercompany). Polje omogućava prenos podataka iz jednog preduzeća u drugo. Na primer, moguće je automatski pretvoriti izlaznu fakturu prvog preduzeća u ulaznu fakturu drugog preduzeća. Da bi se to ostvarilo, drugo preduzeće mora znati u kojem šifarniku treba da pronađe dobavljača na kojeg će glasiti dokument.

Ovo podešavanje koristi se i u postupku **Kontroling > Zaključivanja > Međuperiodi > Konsolidacija**, u kojem sistem eliminiše međusobne troškove i prihode, potraživanja i obaveze između dva preduzeća koja pripadaju istoj grupi, a istovremeno objedinjuje troškove i prihode, potraživanja i obaveze prema eksternim subjektima radi izrade konsolidovanog finansijskog izveštaja.

**Polja adrese**: odnose se na adresu registrovanog sedišta.

**PDV ispostava**: u ovo polje unosi se grad u kojem se nalazi nadležna PDV ispostava preduzeća.

**REA ispostava / Broj upisa u REA**: oznaka pokrajine i broj upisa u registar privrednih društava (potrebno za elektronsko fakturisanje).

**Upisani kapital / Uplaćeni kapital**: tekstualni podaci koji se odnose na vrednosti stanja kapitala preduzeća (potrebni za elektronsko fakturisanje).

Za elektronsko fakturisanje potrebno je popuniti i polja **Članovi preduzeća** i **Status**, kojim se određuje da li je preduzeće u postupku likvidacije.

**Pravni oblik**: u ovo polje unosi se šifra koja identifikuje tip preduzeća. Tabela je fiksna i unapred definisana.

**Poreski režim**: u ovo polje unosi se poreski režim u kojem preduzeće posluje. Tabela je fiksna i unapred definisana.

:::tip[PDV grupa]
Na spisak dostupnih poreskih režima dodata je šifra 61 – PDV GRUPA. Izborom ove stavke, ako preduzeće pripada PDV grupi i stoga ima sopstveni poreski broj, ali koristi PDV identifikacioni broj matičnog preduzeća, prilikom izvoza XML datoteke izlazne fakture biće navedeni i PDV identifikacioni broj i poreski broj. Naime, SDI proverava oba polja, a ne samo PDV identifikacioni broj, ako preduzeće navede da pripada PDV grupi.

Kod XML datoteka ulaznih faktura ovim podešavanjem proverava se PDV identifikacioni broj, a ako u bazi podataka postoji više preduzeća sa istim PDV identifikacionim brojem, proverava se i poreski broj.
:::

**Broj decimala za polja količina**: određuje broj decimalnih mesta koja će se prikazivati u ispisima za polja količina u dokumentima.

Oznaka **Prikaži simbol valute** određuje da li će se simbol valute (i polja čija je vrednost nula) prikazivati u formama za pregled računovodstvenih knjiženja.

Oznaka **Upravljanje kontrolingom** omogućava aktiviranje naprednih postupaka, odnosno celokupnog skupa funkcionalnosti oblasti kontrolinga za preduzeće koje se uređuje.

**Matično preduzeće grupe**: polje se koristi u postupku modula Kontroling **Glavna konsolidacija**. Ovim postupkom sprovodi se posebna konsolidacija podataka na nivou matičnog preduzeća.

Nakon unosa matičnog preduzeća, u kontnom planu odabranog preduzeća postaje vidljivo i polje za povezivanje sa odgovarajućim kontima u kontnom planu glavnog preduzeća.

Tokom konsolidacije računovodstveno knjiženje zavisnog preduzeća biće preneto na konto navedeno za matično preduzeće.

Podatak koji se obrađuje u ovom postupku jeste podatak iz modula Kontroling, koji su već obradili odgovarajući nosioci troškova, a ne podatak iz glavne knjige.

Samo će se računovodstveni deo podataka preslikati na odgovarajuće šifre, dok će se kretanje centra troška (centra preduzeća) preneti bez izmena. Preduslov za prenos jeste da šifra centra preduzeća bude jednaka u matičnom i zavisnom preduzeću.

#### Donji odeljak

U donjem delu prozora nalaze se tri proširiva odeljka sa dodatnim podacima. Reč je o neobaveznim podacima koje nije potrebno unositi, barem ne u početnoj fazi:

U odeljku **EDI** (Electronic Data Interchange) moguće je navesti određene podatke o preduzeću koji se koriste u elektronskoj razmeni podataka.

U odeljku **Troškovi takse** unose se iznos troška takse i prag iznosa nakon kojeg je obavezno njeno iskazivanje na fakturi, broj odobrenja za virtuelnu taksu i pokrajina nadležne finansijske ispostave. Napominjemo da se u tabeli preduzeća unosi minimalna vrednost transakcija oslobođenih PDV-a nakon koje se na fakturu dodaje trošak takse. Međutim, taj trošak potrebno je definisati i u tabeli Tipovi troškova, kao i uneti ga u šifarnik kupca. Samo će se na taj način trošak takse automatski dodati ako je iznos na fakturi oslobođen PDV-a.

**Proširivi odeljak Ri.Ba.**: sadrži identifikacione podatke preduzeća za elektronski bankarski sistem: SIA šifru (5 alfanumeričkih znakova) i CUC šifru (8 znakova) za SEPA-u.

### Tabela divizija, podrazumevana banka i logotip

Na desnoj strani forme nalaze se tri tabele.

U prvoj su prikazane divizije definisane za preduzeće. Važno je zapamtiti da svako preduzeće u programu mora imati najmanje jednu diviziju, čak i ako ona, kao što je često slučaj, odgovara jedinom poslovnom sedištu. Često se preimenuje u Divizija 1 ili, još bolje, jednostavno u Sedište. Za svaku diviziju moguće je definisati da li se kontroling sprovodi na nedeljnom ili mesečnom nivou.

U drugoj tabeli moguće je navesti banke preko kojih preduzeće posluje i jednu od njih označiti kao podrazumevanu banku. Ovaj podatak nema poseban praktični značaj. Mogao bi se koristiti u prilagođenim izveštajima za štampanje radi prikaza referentne banke. U standardnim postupcima koristi se samo u izveštaju za štampanje [**opomena za plaćanje**](/docs/finance-area/maturity-values/reports/dunning-letters) koji se šalju kupcima, kako bi se navela banka preko koje je moguće izvršiti uplatu.

Poslednji deo odnosi se na logotip preduzeća. Podrazumevani logotip (postavljen putem dugmeta **Promeni podrazumevani logotip** na traci) automatski se koristi u dokumentima ulaznog i izlaznog poslovnog ciklusa.

Pre toga je potrebno uvesti jednu ili više slika koje će se koristiti kao logotipi putem dugmeta **Uvoz slika**.

---

### DUGME OPŠTA PODEŠAVANJA (ZA POKRETANJE POSTUPKA FAST START)

Ovo dugme u tek instaliranoj bazi podataka ili u preduzeću dodatom u postojeću bazu kreira niz podrazumevanih osnovnih podataka. Na primer, kreira kontni plan i osnovna podešavanja PDV registara, računovodstvenih šablona i tipova dokumenata kao što su narudžbine, otpremnice, fakture itd.

Ova funkcionalnost je veoma korisna prilikom definisanja strategije pokretanja novog preduzeća i odgovarajućeg podešavanja softvera. U određenim slučajevima može biti praktičnije početi sa podrazumevanim podešavanjima, a zatim ih prilagoditi stvarnim potrebama, na primer izmenom kontnog plana, računovodstvenih šablona i drugih podrazumevanih tabela, nego sve kreirati od početka. Na taj način softver se može u potpunosti osposobiti za rad za kraće vreme.

:::tip[Više informacija]
Za detaljnije informacije pogledajte [**ovde**](/docs/guide/fast-start).
:::

### PODACI POTREBNI ZA ELEKTRONSKO FAKTURISANJE

:::tip[PAŽNJA]

Preporučuje se da se svi podaci u šifarniku preduzeća popune u potpunosti. Ovom prilikom posebno ističemo polja potrebna za izradu elektronskih faktura:

- Pre svega, PDV identifikacioni broj i poreski broj.
- Šifra primaoca i PEC adresa nisu obavezna polja i služe isključivo za čuvanje sopstvenih podataka.
- Ako želite da unesete telefonski broj i broj faksa, preporučuje se da ne koristite kosu crtu za odvajanje pozivnog broja kako biste izbegli moguće probleme prilikom formalnih provera u sistemu za razmenu podataka zbog neprepoznatih znakova.
- U polja povezana sa REA ispostavom potrebno je uneti oznaku pokrajine u prvo polje, a broj u drugo.
- Potrebno je popuniti i polja Članovi preduzeća i Status, kojim se određuje da li je preduzeće u postupku likvidacije.
- Potrebno je uneti i upisani i uplaćeni kapital. Pritom nemojte koristiti tačku za razdvajanje hiljada, a decimalna mesta odvojite tačkom, a ne zarezom, takođe zbog formalnih provera sistema SDI.
- Pravni oblik i poreski režim.

:::

### PODEŠAVANJA ZA PREDUZEĆA KOJA PRIPADAJU PDV GRUPI

:::tip[Informacije: PDV grupa]
Uvođenjem ove zakonske odredbe omogućeno je povezanim preduzećima koja imaju zajedničke finansijske, ekonomske i organizacione interese da osnuju jedinstvenu grupu koja se prema poreskim organima smatra jednim poreskim obveznikom, isključivo za potrebe PDV-a. Grupa stoga ima jedan zajednički PDV identifikacioni broj.

Preduzeća koja pripadaju grupi izdavaće fakture za transakcije sa trećim licima koristeći zajednički PDV identifikacioni broj grupe. S druge strane, isporuke dobara i usluge između preduzeća unutar grupe ne ulaze u osnovicu za obračun PDV-a.

U skladu s tim, sve transakcije koje izvrši jedno od preduzeća u grupi smatraju se transakcijama cele grupe. Fakture i ostale dokumente izdaje predstavnik grupe ili pojedinačni članovi, pri čemu se uz PDV identifikacioni broj grupe navodi i poreski broj preduzeća koje je izvršilo transakciju.
:::

Ako jedno ili više preduzeća u bazi podataka pripada PDV grupi, u ovoj tabeli potrebno je popuniti polja **PDV IDENTIFIKACIONI BROJ** (PDV identifikacionim brojem grupe) i **PORESKI BROJ** (posebnim poreskim brojem preduzeća koje pripada grupi).

Važno je postaviti i **PRAVNI OBLIK**, koji mora biti **61 – PDV grupa**.

### NOVA KARTICA PDV GRUPE

U ovoj kartici unose se podešavanja PDV grupe koju čini jedno ili više preduzeća prisutnih u bazi podataka.

**Period / Godina početka** i **Period / Godina završetka**: određuju period važenja podešavanja i trajanje statusa PDV grupe.

**Da li je matično preduzeće grupe**: aktivirajte ovu opciju ako je preduzeće koje koristite matično preduzeće, odnosno preduzeće koje ostalim članovima dodeljuje svoj PDV identifikacioni broj.

**Padajući meni Matično preduzeće**: služi za povezivanje preduzeća koje koristite sa matičnim preduzećem koje već postoji u istoj bazi podataka.

**Šifarnik matičnog preduzeća**: služi za izbor eksternog matičnog preduzeća, odnosno preduzeća koje nije definisano u istoj bazi podataka kao preduzeće. Na primer, može se raditi o preduzeću koje se vodi u drugom softveru, pa ga je potrebno uneti samo kao kontakt u šifarnik kako bi se mogli preuzeti podaci poput PDV identifikacionog broja itd.

**NAPOMENA: U postupku obrade LiPe (tromesečne prijave obračuna PDV-a) postoji oznaka kojom se omogućava način rada za PDV grupu u samoj prijavi.**

---

### VIDEO-UPUTSTVA

:::important[Pogledajte i]
[**VIDEO-UPUTSTVA O OPŠTIM TABELAMA**](/docs/video/finance/intro)
:::