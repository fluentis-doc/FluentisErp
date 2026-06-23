---
title: Plaćanja
sidebar_position: 4
---

U ovoj kartici se mogu definisati podrazumevani komercijalni uslovi plaćanja.  

*Posebna dugmad*:
> Obriši banke: za brisanje izabrane rezervne banke. 
> Obriši vrstu plaćanja: brisanje reda načina plaćanja.  

Za sve što ovde nije navedeno o uobičajenim funkcionalnostima navedenog polja možete pristupiti sledećem linku: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).

### Načini plaćanja

Osnovna sekcija polja **Plaćanja** koja služi za postavljanje rokova dospeća plaćanja. Biraju se **Način plaćanja** i **Uslov plaćanja** (oba se nalaze u *Konfiguracija > Tabele > Opšta podešavanja*).

**Iznos**: omogućava obračun dospeća nametanjem navedenog iznosa, dok se ostatkom upravlja redovima sa popunjenim poljem 'Procenat'. Ako je ukupan iznos dokumenta manji od vrednosti polja Iznos (čak i uz prisustvo redova sa popunjenim poljem Procenat), tokom kreiranja dospeća u dokumentu biće prikazana poruka o grešci koja zahteva ispravku postavki jer nisu usklađene.

<u>Pažnja</u>: Ovo polje se retko koristi u praksi, a takođe se koristi i popunjava unutar dokumenata, u obračunu dospeća, automatskim procedurama na sledeći način: kada se, na primer, popunjava više otpremnica u jednom računu, može doći do situacije u kojoj postoje različiti uslovi plaćanja na otpremnicama. Tada se na računu kreiraju redovi plaćanja koliko ima vrsta uslova, grupišući iznose (zbir otpremnica sa tim uslovom) i unoseći tu vrednost u polje *Iznos*, kreira se još jedan, „ostatak“ red gde se, koristeći polje *Procenat*, upravlja sa 100% vrednosti „ostatka“ (eventualno) uz uslov plaćanja definisan u evidenciji. Ova vrednost „ostatka“ obično obuhvata eventualne dodatne iznose koji su direktno povezani sa računom (a samim tim nisu prisutni na otpremnicama) kao što su *troškovi naplate, troškovi prevoza, troškovi taksene marke* itd. Ovo popunjavanje više redova (najmanje dva, jedan za rok DDT-a i jedan "ostatak") desiće se čak i ako je popunjen samo jedan DDT. Ovakav način upravljanja nametnut je parametrom valorizacije DDT-a, u odeljku *Tretman plaćanja na računu* opcijom *Zadrži one sa otpremnica*. Odabirom *Vrati one iz evidencije* svi rokovi će se spojiti sa jedinim uslovom prisutnim u evidenciji. Napomena: na štampi računa biće navedeni svi rokovi obračunati kao što su prikazani na ekranu. Ako želite, možete prilagoditi štampu tako da prikaže samo stvarno korišćeni red (tj. da ne prikaže „dodatni” red ako nije povezan ni sa jednim rokom).

**Procenat**: Omogućava definisanje udela (u procentima) od ukupne vrednosti plaćanja (ili naplate) kojim će se upravljati uslovom plaćanja (kao kombinacijom vrste plaćanja i uslova plaćanja) postavljenim u redu. 

U slučaju procenta manjeg od 100, potrebno je kreirati toliko redova sa procentima koji se sabiraju do 100.

*Primer*:<br />
- 50% Gotovina prilikom izdavanja fakture i 50% Bankovni transfer u roku od 30 dana.<br />
- 50% Gotovina prilikom izdavanja fakture; 25% Bankovni transfer u roku od 30 dana; 25% Bankovni transfer u roku od 60 dana.<br />  

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Pažnja</u>: Ako uslov plaćanja uključuje više od jednog roka dospeća, popuniće se na sledeći način: na primer, 50% gotovine odmah i 50% bankovnog transfera u roku od 30 do 60 dana.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banka**: predstavlja referentnu banku za transakcije.  
- Za šifarnik kupca:
> - ako je vrsta plaćanja uplata putem banke, treba navesti banku kupca;
> - ako je vrsta plaćanja bankovni transfer, treba navesti banku kompanije koja se koristi (kako bi podaci o plaćanju bili dostupni kupcu prilikom štampe dokumenata); 

- Za šifarnik dobavljača:
> - ako je vrsta plaćanja bankovni transfer, treba navesti banku dobavljača;
> - ako je vrsta plaćanja uplata putem banke, treba navesti banku kompanije.

Polje se popunjava pomoću padajućeg menija (**Banka**) povezanog sa tabelom *Banka*. 

Unutar ove tabele moguće je uneti kako banke kompanije tako i banke poslovnih partnera (kupaca ili dobavljača). Takođe je moguće uneti redove sa kompletnim IBAN i/ili SWIFT kodom (preporučljivo za banke kompanije) i redove samo sa kompletnim ABI i CAB kodom (preporučljivo za banke poslovnih partnera gde IBAN i SWIFT mogu biti navedeni u poljima mreže prisutne u šifarniku).

Ako je red u tabeli Banka potpuno popunjen IBAN-om i/ili SWIFT-om, kao i ABI-jem i CAB-om, pozivanjem tog reda putem padajućeg menija podaci će biti prikazani u tabeli u šifarniku, u suprotnom će biti prikazani samo ABI i CAB, ali će uvek biti moguće dodati nedostajuće podatke direktno u tabelu. To se preporučuje za banke poslovnih partnera kako bi se izbeglo kreiranje prevelikog broja redova u tabeli Banka koji se koriste samo za jednog kupca ili dobavljača. Preporučljivo je navesti samo podatke o bankarskoj filijali (ABI i CAB) gde različiti kupci ili dobavljači mogu imati tekući račun.

Prilikom unosa banke takođe se može koristiti dvostruki klik u poljima ABI/CAB kako bi se otvorila pomoć za pretraživanje među nacionalnim bankarskim filijalama, iz kojih se može odabrati odgovarajuća i kreirati šifra u šifarniku koju je zatim potrebno dopuniti podacima o tekućem računu, CIN-u, IBAN-u i SWIFT-u.

**Naziv banke**: polje povezano sa prethodnim poljem.

**Šifra banke**: šifra koja se NE koristi u Italiji. Za strane lokalizacije može sadržati alternativni bankarski kod umesto ABI/CAB sistema.

### Banka

U tabelu se mogu unositi banke za poslovanje. 

Među njima, ona koja je označena kao **Podrazumevana** (opcijom istog naziva) može se koristiti kao banka korisnika za plaćanja dobavljačima u modulu *Plaćanja dobavljačima*.

U tom slučaju, banka unesena u ovoj tabeli biće postavljena na nalogu za plaćanje, zamenjujući onu koja se nalazi u knjigovodstvenom knjiženju (poslednja definisana, u knjiženju, ručno ili putem podataka unetih na kartici Tipovi plaćanja u gornjoj tabeli) i povezana sa otvorenom stavkom.

*Napomena*: Da bi se aktivirala zamena navedene banke, potrebno je omogućiti opciju *Nametni pomoćnu banku* koja se nalazi u *Šifarnik dobavljača > [Parametri plaćanja dobavljačima](/docs/configurations/parameters/treasury/vendor-payments-parameters)*.

Ako je opcija aktivirana u obrascu *Parametri plaćanja dobavljačima*, ali nisu unesene banke sa aktiviranom opcijom **Podrazumevano** u tabeli, zadržaće se banka navedena u knjiženju putem podataka unetih u matičnim podacima u gornjoj tabeli *Tipovi plaćanja* (ili ručno izmenjena u knjiženju).

Na ovaj način mogu se uneti alternativne banke (uvek za poslovnog partnera). Još jedan primer može biti kupac koji plaća putem bankovnog transfera (i stoga je u tabeli Tipovi plaćanja navedena banka kompanije), ali se želi uneti i banka za slučaj plaćanja odobrenja.

Unos banke može se izvršiti dvostrukim klikom u polja ABI/CAB kako bi se otvorila pretraga među nacionalnim bankarskim filijalama, iz koje se može odabrati odgovarajuća i kreirati šifra u matičnim podacima koja se zatim dopunjava podacima o tekućem računu, CIN-u, IBAN-u i SWIFT-u.

**Korisnik**: opcija omogućava čitanje polja Pravni naziv korisnika.

**Naziv kompanije korisnika**: podaci o matičnim podacima ako su plaćanja namenjena trećoj strani (na primer, finansijskoj kompaniji unutar grupe).

### Mesec izuzet iz dospeća

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image07.png)

U ovoj tabeli može se postaviti automatski mehanizam koji odlaže sva dospeća koja se odnose na jedan ili više meseci (dodavanjem više redova) i pomera ih na određeni dan.

**Izuzeti mesec**: mesec za koji se žele odložiti dospeća 

**Dan**: dan na koji se žele pomeriti odložena dospeća 

**Mesec**: mesec u koji se žele pomeriti odložena dospeća 

*Primer*: popunjavanjem kao na slici, sva dospeća u avgustu biće odložena do 5. septembra.

Dodavanjem reda za Decembar - 7. januar, dospeća za decembar biće odložena do 7. januara.

### Donji odeljak 

Tipologija obračuna stavke omogućava definisanje da li će osnova za obračun stavke biti samo oporezivi iznos dokumenta (na primer, za dobavljače van EU ili one koji se računovodstveno tretiraju prema reverse charge principu, gde se PDV koji se integriše u dokument ne obrađuje na nivou rasporeda) ili oporezivi iznos + PDV (što je podrazumevana logika čak i ako u ovom polju nije ništa navedeno).

**Koristi dospeća**: opcija se automatski predlaže i obavezna je za automatsko upravljanje otvorenim stavkama. 

U konfiguracionim parametrima knjiženja moguće je definisati kontrolu kako bi se osiguralo da postoji podudarnost između salda glavne knjige i salda otvorenih stavki;

**Vrsta obračuna**: padajući meni koji omogućava izbor između dve alternativne metode: oporezivi iznos + PDV ili samo oporezivi iznos. Način samo oporezivog iznosa preporučuje se, na primer, za dobavljače van EU ili one koji se računovodstveno tretiraju prema sistemu *reverse charge*, ili za kupce koji podležu PDV režimu *split payment*.

**Grupisanje dospeća plaćanja**: trenutno nije podržano; omogućava grupisanje stavki koje u istom knjiženju imaju isti datum dospeća (na primer, u slučaju izuzetog meseca);

**Grupisanje dospeća na računima**: omogućava grupisanje više otvorenih stavki, odnosno dospeća, u jedan instrument naplate. Stavke će biti grupisane ako imaju isti datum dospeća i istu banku za poravnanje.

**Grupisanje odobrenja na računima**: omogućava poništavanje pri kreiranju instrumenata naplate, čak i za odobrenja koja imaju vrstu plaćanja za upravljanje takvim naplatama. Ako opcija nije aktivna, otvorene stavke povezane sa odobrenjima neće biti prikazane u obrascu za pretragu stavki u postupku [kreiranja naplate iz stavki](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values).

Gore navedeni parametar mora biti povezan sa opcijom **Grupiši odobrenja prema datumu dospeća** koja se nalazi u [Parametri portfolija vrednosnih papira](/docs/configurations/parameters/treasury/bills-portfolio-parameters)

Ako je aktivirana opcija za grupisanje po datumu dospeća, stavka (ili stavke) povezane sa odobrenjem i odgovarajućim načinom plaćanja za izdavanje naplate biće grupisane (poništavajući aktivne stavke) samo ako imaju isti datum dospeća kao i odabrane stavke za izdavanje naplate. Suprotno tome, ako je opcija isključena, odobrenje će biti grupisano poništavanjem dospele stavke na prvi raspoloživi datum (pod uslovom da je oznaka *Grupiši odobrenja na računima* u matičnim podacima aktivna).

**Kontrola izloženosti**: aktiviranjem ove opcije ovaj subjekt postaje vidljiv u zbirnim obrascima [Izloženost kupaca](/docs/treasury/customer-risk/procedures/customer-statement).

**Dani kašnjenja**: predstavljaju statistički podatak izračunat u modulu upravljanja **kreditnim rizikom kupaca** (postupak [**kontrola doznaka**](/docs/treasury/customer-risk/procedures/remittances-check)) i koriste se u projekcijama novčanih tokova; predstavljaju **prosek dana kašnjenja u plaćanju od strane kupaca**, ne samo za trenutne dospele stavke, već i za istorijske. Obračun uključuje ponderisani prosek iznosa stavke. Naime, izračun se zasniva na obradi „kreditnih brojeva“ (kao kod bankovnog izvoda). U obrascu za **kontrolu doznaka** (na alatnoj traci na vrhu) nalazi se komanda **Ažuriraj dane kašnjenja** koja upisuje rezultat obračuna u polje Dani kašnjenja u evidenciji kupaca.

**Odobreni kreditni limit**: odnosi se na iznos odobrenog kreditnog limita dodeljenog kupcu. Za pravilno upravljanje ovom funkcionalnošću potrebno je upravljati i opcijom **Kredit** u tabelama koje se odnose na vrste dokumenata u prodajnom ciklusu (Vrsta računa, Vrste otpremnica, Vrste narudžbina kupaca), kojom se uključuje ili isključuje određeni tip dokumenta iz kontrole prekoračenja kreditnog limita.

**Vrsta kreditnog limita**: moguće je definisati da li kupac podleže samo **praćenju kreditnog limita** (odnosno dobija samo upozorenje o prekoračenju limita) ili **blokadi dokumenta i praćenju kreditnog limita**, pri čemu će dokument koji prekoračuje limit biti blokiran i moraće biti odobren u modulu Rizik kupca (procedura [Upravljanje blokadama](/docs/treasury/customer-risk/procedures/lock-manager)).

U slučaju *multicompany* instalacije postoji mogućnost postavljanja **grupnog nadzora** ili **grupne blokade**, pri čemu se procenjuje ukupna situacija subjekta u odnosu na sve kompanije kojima se upravlja u bazi podataka i sabiraju iznosi dokumenata (preporučuje se postavljanje jednakih i aktivnih kreditnih limita za sve kompanije).

**Grupna blokada / grupni nadzor kupca** proverava stanje za grupu kompanija i zato pregledava polje matičnog konta (čita odobreni kredit glavne kompanije). Uvek sabira vrednosti svih kompanija u grupi na kredit matične kompanije. Ignoriše vrednost odobrenog kredita upisanu u podacima povezanih društava.

U modulu Kreditni rizik postoji postupak za [upravljanje odobrenjima](/docs/treasury/customer-risk/credit-management) koji omogućava pregled liste postavljenih odobrenja za sve šifre kupaca bez potrebe za ulaskom u pojedinačne matične podatke.

**Kredit osiguran**: informativno polje o iznosu pokrivenom osiguranjem; ne utiče na obračune rizika.

**Napomena o kreditu**: poslovne napomene vezane za odobreni kreditni limit.

**Datum revizije kredita**: polje koje označava datum revizije poslovnog sporazuma sa kupcem u vezi sa odobrenim kreditnim limitom.

**Tip opomene**: vrsta opomene za plaćanje prema kupcu koja će se generisati u postupku automatskog kreiranja opomena.

Padajući meni povezan je sa tabelom Tip opomene (*Konfiguracija > Tabele > Administracija*); podaci kupca biće povezani sa jednim od mogućih tipova opomene.

*Primer*: mogu se kreirati standardni tip opomene i poseban tip opomene, na primer za dugogodišnje ili posebno važne kupce, sa drugačijim tekstom (možda „blažim“).

**Datum ugovora**: datum ugovora o obračunu zatezne kamate zbog kašnjenja u plaćanju.

**Vrsta kamatne stope**: vrsta zakonske kamatne stope koja se primenjuje na subjekt prema dogovoru.

Padajući meni povezan je sa tabelom [Tipovi kamatnih stopa](/docs/configurations/tables/finance/rate-types) u *Konfiguracija > Tabele > Administracija*.

**Marža (Spread)**: povećanje kamatne stope u odnosu na standardnu stopu za tu vrstu.

**Nivo odobrenja**: odnosi se na [**povezanu tabelu**](/docs/configurations/tables/finance/authorization-levels/) povezanu sa padajućim menijem.