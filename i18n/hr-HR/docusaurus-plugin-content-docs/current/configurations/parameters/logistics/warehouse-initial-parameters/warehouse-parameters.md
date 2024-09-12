---
title: Početni parametri skladišta 
sidebar_position: 2
---

U obrascu *Pretraga početnih parametara skladišta* odaberite željeni redak i dvaput kliknite na red ili kliknite na gumb *Novo*. 

**Godina**: predstavlja godinu za koju želite postaviti parametre. 

**Datum zatvaranja zadnje financijske godine**: predstavlja datum na koji je izvršeno zadnje zatvaranje skladišta s povratom stanja (vidi Procjena zaliha). U većini slučajeva odgovara 31.-12. prethodne godine. Sljedećeg dana, dakle obično 1. siječnja, unose se zapisi o skladištu utovara za početnu inventuru, automatski kreirani postupkom *Vrednovanja skladišta*, koristeći razlog utovara *Zaliha*; ovaj razlog mora imati aktiviranu oznaku *Zaliha*.

Za svako skladište prisutno u poduzeću mora postojati jedan i samo jedan razlog utovara za početne zalihe. Zalihe opterećene s razlogom na dan “otvorenja” skladišta predstavljaju *početne zalihe* samog skladišta. Sva kretanja koja slijede nakon ove registracije utovara identificirat će se kao ulazi u skladište ili izlazi iz skladišta, ovisno o tome jesu li utovar ili istovar. 

## Općenito 

**Uređivanje skladišne ​​evidencije povezane s drugim dokumentima**: omogućuje uređivanje skladišne ​​evidencije povezane s otpremnicama, računima o kupnji, otpremnicama, prodajnim fakturama itd. Nedostatak ove oznake znači da se skladišni dokumenti kreirani na temelju nabavnih ili prodajnih dokumenata ne mogu mijenjati. U tom slučaju pojavit će se poruka koja pokazuje da izmjena nije moguća. 

Što se tiče izmjene skladišne ​​evidencije iz dokumenata, napominjemo da je moguće birati hoće li se mijenjati količina, mijenjati cijena, mijenjati oboje ili nijedno. To znači da kada se modificira dokument koji je već evidentiran u skladištu, npr. otpremnica, aplikacija provjerava jesu li zastavica Izmijeni količinu i Zastavica Izmijeni cijene aktivne ili ne; ako je tako, izmjena napravljena u dokumentu također se prenosi u skladišnu evidenciju s kojom je dokument povezan, inače izmjena dokumenta ne utječe na odgovarajuću skladišnu registraciju. Također je moguće aktivirati samo jednu od dvije zastavice. Nadalje, također je moguće aktivirati mogućnost umetanja ili brisanja prometa izravno iz dokumenta umetanjem ili brisanjem pojedinačnih redaka. 

**Dopustite nepotpuni BOM doprinos**:  ako je aktivno, omogućuje vam izmjenu sastavnice pomaka kontraparta; ako je deaktivirano, protukretanje će se automatski kreirati za cijeli troškovnik bez mogućnosti izmjene.

Suprotno kretanje proizlazi iz drugog razloga kretanja povezanog s glavnim, koji djeluje na komponente popisa materijala; na primjer, može se koristiti za upravljanje plaćanjima proizvodnje (istovar komponenti popisa materijala) ili rastavljanje materijala s pokretima skladišta; stoga vam u najjednostavnijoj stvarnosti omogućuje upravljanje utovarom gotovih proizvoda i istovarom komponenti bez korištenja proizvodnog modula. 

**Valoriziraj za skladište**: omogućuje vam da odlučite treba li zatvaranje skladišta uzeti u obzir prosječne troškove (ili zadnje, ili standardne, ovisno o tome koju vrstu troška želite koristiti za zatvaranje skladišta) povezane s pokretima izvršenim tijekom godine na jedinstvenom skladištu. To znači da ako je artikl podvrgnut pokretima u 3 skladišta, na primjer, u slučaju aktivne oznake, imat će 3 različita retka u Povijesti skladišta za godinu za koju se provodi zatvaranje, s vjerojatno 3 prosječna troška i 3 konačni troškovi različiti.   

**Omogući uređivanje stavki računa koji su već korišteni**:  omogućuje izmjenu podataka “Nabavni promet” i “Prodajni promet” artikala koji su već prošli skladišna kretanja. Ako je zastavica onemogućena, ova izmjena je očito spriječena.

**Upravljanje statusom radnog ciklusa kroz tijek rada**: ako je aktivno, status radnog ciklusa može se mijenjati samo putem Workflowa.

**Kontrola odnosa predmeta / dobavljača kroz tijek rada**: ako je aktivna, oznaka Line lock prisutna na kartici **Preferirani dobavljači** u glavnim podacima o stavci može se mijenjati samo putem tijeka rada. 

**Datum početka i datum završetka razdoblja**: omogućuju korisniku definiranje razdoblja unutar kojeg se skladišna evidencija može unositi i/ili mijenjati i/ili brisati. Obično je početni datum razdoblja postavljen na datum neposredno prije posljednjeg datuma zatvaranja skladišta, a kraj tekuće kalendarske godine kao završni datum razdoblja. 

### Upravljanje lotovima i serijskim brojevima 

**Upravljanje lotovima i serijskim brojevima**: omogućuje vam da odlučite treba li dopustiti kretanje skladišta u lotovima i/ili serijskim brojevima. Ako je ova oznaka onemogućena, sve druge oznake prisutne u bazi podataka koje upravljaju opcijama koje se odnose na lotove i serijske brojeve su neučinkovite. 

**Obvezni lotovi i SN**: ako je aktiviran, prisiljava korisnika da u sve kupoprodajne dokumente unese lot artikla koji je umetnut u sam dokument, pod uvjetom da se artikl vodi u lotovima ili serijskim brojevima.

**Upravljanje statusom serije kroz tijek rada**: ako je aktivno, oznake **Status lota**, **Prodajna serija** i **Zatvoreno** prisutne u registru lotova mogu se mijenjati samo putem tijeka rada. Ista stvar vrijedi i za oznake **Otkazano**, **Prisilno** **Zatvoreno** i **Rezervirano** prisutne u bazi podataka serijskih brojeva. 

**Koristi barkod kretanja**: ako je aktivan, stupac **Barkod** se prikazuje u linijama kretanja skladišta. 


## Parametri zatvaranja 

U ovoj kartici moguće je odlučiti za koja se zatvaranja **Skladišta** moraju izvršiti prema **Varijanti**, prema **Lokaciji**, prema  **Serijskom broju serije**, prema **Prodajnim nalozima** i prema **kupcu/dobavljaču**. U praksi, aktiviranjem jedne od ovih zastavica odlučujete da se početna registracija inventarnog opterećenja koju provodi postupak automatske *Valorizacije skladišta* mora kreirati uzimajući u obzir izvršenu postavku. 

*Za svako skladište moguće je omogućiti sljedeće upravljanje*:	

**Varijante**: ako je aktivna, zatvaranje i ponovno pokretanje zaliha će uzeti u obzir varijante;	

**Lokacije**: ako je aktivan, zatvaranje i nastavak zaliha će uzeti u obzir loka;	

**Lotovi i serijski broj**: ako je aktivno, zatvaranje i nastavak zaliha će uzeti u obzir lotove i serijski broj;	

**Radni nalozi**: ako je aktivan, zatvaranje i nastavak zaliha će uzeti u obzir prodajne naloge (projekte);	

**Kupac/dobavljač**: ako je aktivan, zatvaranje i nastavak zaliha će uzeti u obzir kupca/dobavljača.

*Primjer*
U *Podizvođačkom skladištu*, zastavica na stupcu *Kupac/Dobavljač* obično se drži aktiviranom, budući da je korisno za postupak stvaranja registracije utovarnog skladišta za početni inventar na podugovornom skladištu za svakog podizvođača; u skladištima u kojima se skladišti i premješta roba koja se vodi u serijama preporuča se aktiviranje zastavice *Lot i Serijski broj*, kao i u skladištima u kojima se skladišti i premješta roba koja se vodi u varijantama preporuča se aktiviranje odgovarajuće oznake. 


## Parametri inventara

U ovoj kartici moguće je odlučiti za koja se skladišta mogu voditi *Negativne zalihe*.

**Kalkulacija zaliha za stavku, skladište**: skladišne ​​zalihe, a time i prikaz zaliha mogu se vidjeti na temelju ovdje definiranih parametara; stoga je moguće dobiti precizan izračun zaliha po *Varijanti*, po *Lokaciji*, po *Lotu*, po *Narudžbi* ili po *Kupcu/dobavljaču* ovisno o aktivnim oznakama.

**Dopusti negativne zalihe**:  omogućuje vam da imate inventar artikla ispod nule. Ako zastavica nije aktivirana, sustav uvijek sprječava spremanje skladišne ​​evidencije ili operacije istovara koje bi poslale zalihu bilo kojeg artikla na nulu. Treba imati na umu da ako se predmetom upravlja u lotovima ili serijskim brojevima, aktiviranje ove zastavice ne znači imati mogućnost slanja ispod nule, budući da se artikl kojim se upravlja u lotovima ili serijskim brojevima nikada ne može istovariti ako zaliha lota ili serijski broj koji želite preuzeti ne postoji.

*Za svako skladište moguće je omogućiti sljedeće upravljanje*:	

**Negativna zaliha**: dopušta negativne zalihe u tom skladištu (samo ako je također aktivna zastavica *Dopusti negativne zalihe* u *Općim parametrima*);

**Lokacija inventara**: znači provjera inventara i za lokaciju navedenu u kretanju (ako inventar za tu lokaciju nije dovoljan, kretanje se ne kreira);

**Inventura radnih naloga**: podrazumijeva provjeru zaliha i za prodajnu narudžbu (projekt) navedenu u pokretu (ako zaliha za tu narudžbu nije dovoljna, kretanje se ne kreira);

**Inventura kupca/dobavljača**: znači provjera zaliha i za kupca/dobavljača navedenog u registraciji (ako zaliha za tog kupca/dobavljača nije dovoljna, kretanje se ne kreira. Može se koristiti za skladišta trećih strana).

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, gumbi i polja](/docs/guide/common).