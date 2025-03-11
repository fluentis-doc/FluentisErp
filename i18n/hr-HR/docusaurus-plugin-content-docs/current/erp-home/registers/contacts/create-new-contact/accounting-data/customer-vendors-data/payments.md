---
title: Plaćanja
sidebar_position: 4
---

U ovom polju se mogu specificirati zadani komercijalni uvjeti plaćanja.  

*Posebni gumbi*:
> Izbriši banke: za brisanje odabrane rezervne banke. 
> Izbriši način plaćanja: brisanje retka načina plaćanja.  

Za sve što ovdje nije navedeno o uobičajenim funkcionalnostima navedenog polja možete pristupiti sljedećem linku: [Funkcionalnosti, gumbovi i zajednička polja](/docs/guide/common).

### Načini plaćanja

Osnovna sekcija polja **Plaćanja** koja služi za postavljanje dospijeća plaćanja. Odabiru se **Način plaćanja** i **Uvjet plaćanja** (obe se nalaze u *Konfiguracija > Tablice > Opće postavke*).

**Iznos**: omogućuje obračun dospijeća nametanjem navedenog iznosa, ostatak treba upravljati s redovima s popunjenim poljem Postotak. Ako je ukupni iznos dokumenta manji od vrijednosti polja Iznos (čak i uz prisutnost redova s popunjenim poljem Postotak), tijekom stvaranja dospijeća u dokumentu bit će poslanu poruku o pogrešci koja traži ispravak postavki jer nisu usklađene.

<u>Pažnja</u>: Ovo polje rijetko se primjenjuje u praksi, a također se koristi i popunjava unutar dokumenata, u izračunu dospijeća, automatskim postupcima na sljedeći način: kada se, na primjer, popunjavaju više DDT-ova u jednom računu, može doći do situacije u kojoj mogu postojati različiti uvjeti plaćanja u dostavnim listovima. Tada se u računu stvaraju redovi plaćanja koliko ima vrsta uvjeta, grupirajući iznose (zbroj DDT-a s tim uvjetom) i unoseći tu vrijednost u polje *Iznos*, stvara se još jedan, “ostatak” red gdje se, koristeći polje *Postotak*, upravlja s 100% vrijednosti “ostatak” (eventualno) s uvjetom plaćanja određenim u evidenciji. Ova vrijednost “ostatka” obično obuhvaća eventualne dodatne iznose koji su izravno pridruženi računu (a stoga nisu prisutni u dostavnim listovima) kao što su *troškovi naplate, troškovi prijevoza, troškovi žiga* itd. Ovo popunjavanje više redova (barem dva, jedan za rok DDT-a i jedan "ostatak") dogodit će se čak i ako je popunjen samo jedan DDT. Ovaj način upravljanja nametnut je parametrom valorizacije DDT-a, u odjeljku *Tretman plaćanja na računu* opcijom *Održi one na dostavnim listovima*. Odabirom *Vrati one iz evidencije* svi će se rokovi spojiti s jedinim uvjetom prisutnim u evidenciji. Napomena: u ispisu računa bit će navedeni svi rokovi izračunati kao što su prikazani na zaslonu. Ako želite, možete prilagoditi ispis tako da prikaže samo stvarno korišteni red (tj. da ne prikaže “dodatni” red ako ne poveže nijedan rok).

**Postotak**: Omogućuje definiranje udjela (u postotku) od ukupne vrijednosti plaćanja (ili naplate) koji će se upravljati uvjetom plaćanja (kao kombinacija vrste plaćanja i rješenja plaćanja) postavljenim u retku. 

U slučaju postotka manjeg od 100, stoga treba stvoriti toliko redova s postocima koji se zbrajaju do 100.

*Primjer*:<br />
- 50% Gotovina prilikom izdavanja fakture i 50% Bankovni prijenos u roku od 30 dana.<br />
- 50% Gotovina prilikom izdavanja fakture; 25% Bankovni prijenos u roku od 30 dana; 25% Bankovni prijenos u roku od 60 dana.<br />  
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Pažnja</u>: Ako rješenje plaćanja uključuje više od jednog roka dospijeća, popunit će se na sljedeći način: primjerice, 50% gotovine odmah i 50% bankovnog prijenosa u roku od 30 do 60 dana.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banka za podršku**: predstavlja referentnu banku za transakcije.  
- Za šifarnik klijenta:
> - ako je vrsta plaćanja uplata putem banke, treba navesti banku klijenta;
> - ako je vrsta plaćanja bankovni prijenos, treba navesti banku tvrtke u upotrebi (kako bi se imali podaci o plaćanju za klijenta tijekom ispisa dokumenata); 

- Za šifarnik dobavljača:
> - ako je vrsta plaćanja bankovni prijenos, treba navesti banku dobavljača;
> - ako je vrsta plaćanja uplata putem banke, treba navesti banku tvrtke.

Polje se popunjava pomoću padajućeg izbornika (**Banka**) povezanog s tablicom *Banka za podršku*. 
Unutar ove tablice moguće je unijeti kako banke tvrtke tako i banke suprotnih strana (kupca ili dobavljača). Također je moguće unijeti redove sa kompletnim IBAN i/ili SWIFT kodom (preporučljivo za banke tvrtke) i redove samo s kompletnim ABI i CAB kodom (preporučljivo za banke suprotnih strana gdje IBAN i SWIFT mogu biti navedeni u poljima mreže prisutne u šifarniku).

Ako je redak u tablici Banka za podršku potpuno ispunjen IBAN-om i/ili SWIFT-om, kao i ABI-jem i CAB-om, pozivajući taj redak putem combobox-a podaci će biti prikazani u grid u anagrafici, inače će biti prikazani samo ABI i CAB, ali će uvijek biti moguće dodati nedostajuće podatke izravno u mrežu. To se preporučuje za banke suprotnih strana kako bi se izbjeglo kodiranje previše redaka u tablici Banka za podršku koji se koriste samo za jednog kupca ili dobavljača. Preporučljivo je navesti samo podatke o bankovnom odjelu (ABI i CAB) gdje različiti klijenti ili dobavljači mogu imati tekući račun.

Pri unosu banke također možete koristiti dvostruki klik u poljima ABI/CAB kako biste otvorili pomoć za pretraživanje među nacionalnim bankovnim agencijama, iz kojih možete odabrati odgovarajuću i stvoriti kod u šifarnik koji se treba dopuniti podacima o tekućem računu, CIN-u, IBAN-u, SWIFT-u.

**Naziv Banke**: polje povezano s prethodnim poljem.

**Šifra banke**: kod koji se NE koristi u Italiji. Za strane lokalizacije može prihvatiti alternativni bankarski kod umjesto ABI CAB sustava.

### Banka za podršku

U grid možete unijeti banke za podršku. 

Među njima, ona postavljena kao **Zadana** (s flagom istog imena) može se koristiti kao korisnička banka za plaćanja dobavljača u modulu *Plaćanja dobavljača*.

U ovom slučaju, unesena banka u ovoj grid bit će postavljena u odobrenje uplatnice, zamjenjujući onu koja se nalazi u knjigovodstvenom zapisu (posljednje definirana, u knjigovodstvenom zapisu, ručno ili putem podataka unesenih u kartici Tipovi plaćanja u gornjoj grid) i povezana s otvorenim stavkom.

*Napomena*: Da biste aktivirali zamjenu gornje banke za podršku, potrebno je omogućiti opciju *Nametni banku za podršku* prisutna u *Šifarnik dobavljača > [Parametri Plaćanja Dobavljača](/docs/configurations/parameters/treasury/vendor-payments-parameters)*.

Ako je flag aktiviran u obrascu *Parametri plaćanja dobavljača*, ali nisu unesene banke s aktiviranim flagom zadane u grid, zadržat će se banka navedena u knjiženju putem podataka unesenih u glavnim podacima u gornjoj grid *Tipovi plaćanja* (ili ručno promijenjena u knjiženju).

Na taj način možete unijeti alternative banaka (uvijek za suprotnu stranu). Još jedan primjer može biti klijent koji plaća putem bankovnog transfera (i stoga se unosi u mrežu Tipovi Plaćanja banka naše tvrtke), ali želite unijeti njegovu banku za potporu u slučaju plaćanja kreditnih nota.

Unos banke može se izvršiti dvostrukim klikom u polja ABI/CAB kako bi se otvorila help pretraga među nacionalnim bankarskim agencijama, iz koje možete odabrati odgovarajuću i stvoriti kod u osnovnim podacima koji se zatim popunjava podacima o tekućem računu, CIN-u, IBAN-u, SWIFT-u.

**Korisnik**: flag omogućuje čitanje polja Pravno ime korisnika.

**Naziv tvrtke korisnika**: unesite podatke o osnovnim podacima ako su plaćanja namijenjena trećoj strani (na primjer, financijskom društvu unutar grupe).

### Mjesec izuzet iz dospjelosti

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image07.png)

U ovoj grid možete postaviti automatski mehanizam koji odgađa sva dospijeća koja se odnose na jedan ili više mjeseci (dodajući više redova) i odgađa ih do određenog dana.

**Mjesec izuzet**: Mjesec za koji želite odgoditi dospijeća 

**Dan**: Dan na koji želite premjestiti odgođena dospijeća 

**Mjesec**: Mjesec u koji želite premjestiti odgođena dospijeća 

*Primjer*: popunjavanjem kao na slici, sva dospijeća u kolovozu bit će odgođena do 5. rujna.

Uz dodavanje retka za Prosinac - 7. Siječnja, dospijeća za prosinac bit će odgođena do 7. siječnja.

### Donji odjeljak 

Tipologija izračuna stavke omogućuje definiranje hoće li osnova za izračun stavke biti samo oporezivi iznos dokumenta (na primjer, za dobavljače izvan EU-a ili one koji se računovodstveno tretiraju prema obrnutom porezu, gdje se PDV koji se integrira u dokument ne obrađuje na razini rasporeda) ili oporezivi iznos + PDV (što je zadana logika čak i ako u ovom polju nije ništa navedeno).

**Koristi otvorene stavke**: flag se automatski predlaže i obavezna je za automatsko upravljanje otvorenim stavkama. 

U konfiguracijskim parametrima knjiženja moguće je definirati kontrolu kako bi se osiguralo da postoji podudarnost između salda knjigovodstva i salda otvorenih stavki;

**Vrsta obračuna**: padajući izbornik koji omogućuje odabir između dvije alternativne metode: oporezivi iznos + PDV ili samo oporezivi iznos. Način samo oporezivog iznosa preporučuje se, na primjer, za dobavljače izvan EU-a ili one koji se računovodstveno tretiraju prema "reverse charge" ili za klijente koji su podložni porezu na dodanu vrijednost "split payment".

**Grupiranje dospijeća plaćanja**: trenutačno nije podržano; omogućuje grupiranje stavki koje u istom knjiženju imaju isti datum dospijeća (na primjer, u slučaju isključenja mjeseca);

**Grupiranje dospijeća u učinke**: omogućuje grupiranje više stavki/dospijeća u jedan učinak iz modula portfelja učinaka (bit će grupirane u slučaju istog datuma dospijeća i iste banke za podršku);

**Grupiranje dobropisa u učinke**: omogućuje poništavanje u stvaranju efekata, čak i za dobropise koji imaju vrstu plaćanja za upravljanje učincima. Ako flag nije aktiviran, otvorene stavke povezane s dobropisima neće se prikazati u obrascu pretrage stavki za postupak [stvaranja efekata iz stavki](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values).

Gornji parametar mora biti povezan s flagom **Grupirajte dobropise prema datumu dospijeća** koja se nalazi u [Parametri popisa vrijednosnih papira](/docs/configurations/parameters/treasury/bills-portfolio-parameters) 

Ako je aktiviran flag za grupiranje po datumu dospijeća, stavka (ili stavke) vezane uz dobropis s odgovarajućim načinom plaćanja za izdavanje efekata bit će grupirane (poništavajući aktivne stavke) samo ako imaju isti datum dospijeća kao i odabrane stavke za izdavanje efekta. Suprotno tome, ako je flag isključen, dobropis će biti grupiran poništavanjem dospijele stavke na prvi dostupni datum (pod uvjetom, naravno, da je zastava *Grupiraj note kredita u efektima* u osnovnim podacima aktivna).

**Kontrola izloženosti**: aktiviranjem ovog flaga ovaj subjekt će postati vidljiv u sažetim obrascima  [Izloženosti kupaca](/docs/treasury/customer-risk/procedures/customer-statement).

**Dani kašnjenja**: su statistički podaci izračunati u modulu upravljanja **klijentskim rizikom** (postupak [**kontrola doznake**](/docs/treasury/customer-risk/procedures/remittances-check) ) i koriste se u projekcijama novčanih tokova;/cash flow predstavljaju **prosjek dana kašnjenja u plaćanjima od strane klijenata** ne samo na trenutnim dospjelim stavkama, već i na povijesnim. Izračun uključuje ponderirani prosjek iznosa stavke. Naime, izračun se temelji na obradi "kreditnih brojeva" (kao u izvatku iz banke). Unutar obrasca za **kontrolu doznake** (na traci s alatima na vrhu) nalazi se naredba **Ažuriraj dane kašnjenja** koja unosi rezultat izračuna u polje Dani kašnjenja u evidenciji klijenata.

**Odobreni iznos kreditnog limita**: odnosi se na iznos odobrenog kreditnog limita koji je dodijeljen klijentu. Za ispravno upravljanje ovom funkcionalnošću, također je potrebno upravljati flag **Kredit** u tablicama koje se odnose na vrste dokumenata u ciklusu prodaje (Vrsta računa; Vrste otpremnica; Vrste Narudžbi kupaca) a koja uključuje ili isključuje tip dokumenta u pitanju iz kontrole prekoračenja odobrenog limita.

**Vrsta kreditnog limita**: moguće je definirati da li je kupac podložan samo jednom ‘**praćenje kreditnog limita**' (tj. dobit će samo jedno obavijestno upozorenje o prekoračenju fida) ili **blokada dokumenta i praćenje dozvoljenog kreditnog limita** pri čemu će dokument koji prelazi dobni kredit biti blokiran i morat će biti odobren unutar modula Rizik kupca (procedura [Upravljanje zaključavanjem](/docs/treasury/customer-risk/procedures/lock-manager). U slučaju višesocijalne baze podataka, postoji mogućnost postavljanja **grupnog monitora** ili **blokiranje grupe**, procjenjujući tako ukupnu situaciju subjekta u odnosu na sve tvrtke upravljane u bazi podataka i zatim zbrajanjem iznosa dokumenata (preporučuje se postavljanje jednake i aktivne iznose fida za sve tvrtke).**Blokada / grupni nadzor kupca** provjerava za grupu tvrtki i stoga pregledava polje matičnog podračuna (čita dozvoljeni minus glavnog poduzeća). Uvijek zbraja vrijednosti svih tvrtki u grupi na fido matične tvrtke. Ignorira vrijednost odobrenog minusa zapisanu u podacima o podružnicama.

U modulu kreditni Rizik postoji postupak za [upravljanje dozvolama](/docs/treasury/customer-risk/credit-management) koji omogućuje pregled popisa postavljenih dozvola za sve klijentske kodove, bez potrebe ulaska u pojedinačni unos;

**Osigurani kreditni limit**: ovo je jednostavno informativno polje o iznosu koji pokriva osiguranje, ne utječe na izračune rizika;

**Zabilježi kredit**: poslovne napomene o odobrenom kreditnom limitu.

**Datum kreditne revizije**: polje koje ukazuje na datum revidiranja poslovnog sporazuma s klijentom u vezi s odobrenim kreditnim limitom.

**Tip opomene**: vrsta opomene za plaćanje prema klijentu koja će se generirati u postupku automatskog stvaranja opomena. 

Padajući izbornik je povezan s tablicom Tip opomene (Početna stranica > Tabele > Administracija); podaci o klijentu koji se koristi bit će povezani s jednim od mogućih tipova opomene.

*Primjer*: mogu se stvoriti standardni tip opomene i poseban tip opomene, na primjer za povijesne ili posebno važne klijente, s različitim tekstom (možda "blažim").

**Datum ugovora**: datum ugovora o obračuna zateznih kamata za kašnjenje plaćanja;

**Vrsta kamatne stope**: to je vrsta zakasninske kamatne stope koja se primjenjuje na subjekt na temelju dogovora.;

Padajući izbornik je povezan s tablicom [Tipovi poreznih stopa](/docs/configurations/tables/finance/rate-types) u Konfiguraciji > Tabele > Administracija.

**Širenje**: povećanje stope kamate u odnosu na standardnu stopu za tu vrstu.

**Razina odobrenja**: referira se na [**tablicu povezanu**](/docs/configurations/tables/finance/authorization-levels/) s padajućim izbornikom.