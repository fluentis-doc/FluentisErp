---
title: Novi nalog kupca  
sidebar_position: 2
---

Forma **Kreiraj narudžbu kupca** otvara se putem puta **Prodaja > Narudžbe kupaca > Nova narudžba** ili putem tipke koja se nalazi u formi [Pretraga narudžbi kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## *Kako kreirati narudžbu kupca*

## **1. Obavezni podaci**

Kako bi se nastavilo s kreiranjem narudžbe kupca, korisnik mora unijeti **obavezna** polja:  

- **Vrsta narudžbe**: zadano u  Konfiguracija > Tablice > Prodaja > [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types); za detaljno razumijevanje različitih mogućnosti konfiguracije pogledaj pripadajuću dokumentaciju. Za unos narudžbe potrebno je da vrsta narudžbe ima definiranu tipologiju numeracije, što je obavezan podatak. Ovisno o konfiguraciji vrste narudžbe, mogu se otvoriti različiti scenariji prilikom unosa narudžbe kupca — primjerice automatsko kreiranje projekta, upravljanje cijenama s PDV-om, upravljanje matricama itd.     
- **Broj**: svakom se dokumentu dodjeljuje broj prema numeraciji definiranoj u tablici [Numeracija narudžbi kupaca](/docs/configurations/tables/fluentis-numerations)  i prema vrsti dokumenta koja sadrži numeraciju. Numeracija povezana s vrstom narudžbe obično ima automatsku progresiju temeljenu na datumu i broju, s funkcijom „oporavka” koja pokriva eventualne praznine u slijedu (npr. zbog brisanja dokumenata). Ovo ponašanje reguliraju dva specifična flag-a u tablici numeracije. Ako korisnik želi ručno unijeti broj, može isključiti flag progresije datum-broj i flag oporavka brojeva. Također mora uključiti flag vanjske numeracije, čime se sustavu signalizira da će se numeracija unositi ručno.  
- **Kupac**: pomoću [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravnim unosom](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).   Nakon unosa kupca, automatski se popunjavaju, ako su definirani u registru, sljedeća polja: valuta, država, jezik, zona, isporuka, cjenik i eventualni popusti, plaćanja, popusti, troškovi, agenti, odredište, prijevoznici, dodatni podaci.                 
- **Datum narudžbe**: označava datum kreiranja narudžbe. Ovaj datum je važan za izračun rokova i eventualnih uvjeta plaćanja. Predlaže se današnji datum, ali se može izmijeniti; ako numeracija predviđa progresiju po datumu i broju, a korisnik unese datum u prošlosti, Fluentis će provjeriti dostupnost brojeva za taj datum i upozoriti ako ih nema.        
- **Vrsta zadržavanja**: ovo se polje vidi samo ako kupac koristi zadržavanje (ritenutu), odnosno ako je u njegovoj kartici označen istoimeni flag i vrsta zadržavanja u kartici [fiskalne informacije](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information). Zadržavanje je porezno zadržavanje primjenjivo na isplate za profesionalne usluge. Za ispravno funkcioniranje, u tablici vrsta zadržavanja mora biti ispravno definiran kod za elektroničko fakturiranje. Dokument automatski primjenjuje zadržavanje na redove gdje je to moguće i automatski računa iznos zadržavanja.  

Forma sadrži niz kartica.

## **2. Zaglavlje**

Nakon što su odabrani obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  ili pomoću [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Zapamti
Ako se dokument *kreira automatski*, ti se podaci preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.
:::


### 2.1 Podaci o kupcu

Unosom **Kupca**, automatski se *predlažu* svi specifični podaci u kartici **Zaglavlje**, prema podacima prethodno definiranim u [registru kupaca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *sekcijama*:  
- **Valuta**: sadrži [valutu](/docs/guide/common/glossary/glossary-intro#currency), [tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: sadrži [državu](/docs/guide/common/glossary/glossary-intro#country), [jezik](/docs/guide/common/glossary/glossary-intro#language), [zonu](/docs/guide/common/glossary/glossary-intro#zone).
- **Isporuka**: sadrži [način isporuke](/docs/guide/common/glossary/glossary-intro#shipment), [prijevoz](/docs/guide/common/glossary/glossary-intro#carriage), [pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [cjenik prodaje](/docs/guide/common/glossary/glossary-intro#sales-price-list) i [vrijedi do](/docs/guide/common/glossary/glossary-intro#validity-date)
- Ostala polja koja se predlažu s izborom kupca, ali su izmjenjiva: [Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primatelj](/docs/guide/common/glossary/glossary-intro#recipient).

### 2.2 Neobavezni podaci zaglavlja

- **Datum isporuke**: datum predviđene isporuke robe.  
- **Datum spremnosti robe**: datum kada će roba biti spremna; mora biti manji ili jednak prethodnom datumu.      
- **Potvrđeno**: ovaj flag označava da je narudžba potvrđena i može se izvršiti; pored njega se nalazi **Datum potvrde**. Ovaj je uvjet obavezan ako se narudžba treba obraditi u kasnijim dokumentima (poput otpremnice ili računa), kao i za planiranje proizvodnje.        
- **Ispisano**: aktivira se kada se narudžba ispiše i označava da je dokument ispisan; flag je važan i za omogućavanje prijenosa narudžbe u druge dokumente.       
- **Arhivirano**: označava da se dokument treba arhivirati.     
- **Otkazano**: aktivni flag otkazuje narudžbu; status narudžbe prelazi u „prisilno izvršeno“, jer narudžba više ne smije biti prenosiva u druge dokumente.      
- **Jedinstveni kod projekta/CIG**: ako je u [fiskalnim informacijama](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) kupca omogućeno upravljanje CIG i CUP, ovdje se mogu unijeti ti podaci.    
- **Bilješke kupca**: preuzimaju se iz registra kupca, ali ih se može ručno unijeti.   
- **Naša referenca/Vaša referenca**: obično se koristi za unos interne i kupčeve reference; ako je narudžba generirana automatski, ova polja se popunjavaju podacima iz izvornog dokumenta (ako postoji samo jedan).       
- **Početne bilješke**: mogu se odabrati iz tablice *Konfiguracija > Alati > Upravljanje kodiranim bilješkama* pomoću dvostrukog klika i odabira kroz pomoć, ili se mogu unijeti ručno.         
- **Operater**: omogućuje unos korisnika koji kreira dokument. Zaposlenici su definirani u tablici *Home > Zaposlenici*; ovo polje postaje obavezno ako je tako definirano u [Parametrima](/docs/configurations/parameters/sales/sales-orders-parameters) dokumenta.         
- **Status izvršenja**: kada se narudžba realizira kroz dokumente poput otpremnice ili računa, status automatski prelazi iz *Neizvršeno* u *Djelomično izvršeno* ili *Izvršeno*. Korisnik može prisilno označiti narudžbu kao izvršenu; tada se bilježi i datum izvršenja.         

:::note
Ako se aktivira stanje *Prisilno izvršeno*, prikazuje se poruka:  
„Prisilno izvršenje retka uzrokuje automatsko brisanje eventualnih planiranih narudžbi povezanih s projektima u statusu ‘planirano’ te njihovo označavanje kao izvršeno. Projekti u statusu ‘pokrenuto’ ili ‘izvršno’ neće biti izmijenjeni.”
:::

- **Početak valjanosti**: datum od kojeg počinje izračun rokova plaćanja.   

#### Specifične tipke     
> **Izvršenje iz projekta**: pokreće postupak kreiranja narudžbe iz projekta.            
> **Zamijeni predviđeni datum isporuke u redovima**: omogućuje masovnu zamjenu datuma u redovima artikala nakon što je datum unesen u zaglavlju.             
> **Zamijeni agenta u redovima**: otvara prozor za unos agenta koji će se primijeniti na sve redove artikala.             
> **Zamijeni agenta u redovima**: otvara prozor za unos agenta koji će se primijeniti na sve redove artikala.               
> **Pomoć za primatelje/odredišta**: otvara pomoć za izbor primatelja/odredišta povezanih s kupcem.    

U zaglavlju su zatim dostupne neke dodatne kartice koje slijede u nastavku.     

### 2.3 Plaćanja

**Rješenja plaćanja** automatski se preuzimaju iz *Kartice kupca > kartica Plaćanja* i korisnik ih može mijenjati ili brisati.

Ako je **Vrsta plaćanja** povezana s financijskim popustom, taj se popust uzima u obzir samo u računovodstvenom smislu, tj. u rokovima dospijeća, ali ne u ukupnom iznosu dokumenta.

Specifična tipka u ovoj kartici je **Obriši plaćanja**, kojom se brišu označeni redovi plaćanja.

### 2.4 Popusti

Predlažu se samo unaprijed definirani popusti preuzeti iz *Kartice kupca > kartica Popusti*, a ne oni koji se odnose na uvjete plaćanja ili određene artikle. Korisnik ih može mijenjati ili brisati.  
  
Popusti definirani u zaglavlju dokumenta automatski se primjenjuju na svaki novi red artikla koji se doda u dokument.  

Ako se popust doda nakon što su redovi artikala već uneseni, neće se primijeniti retroaktivno.

:::important Zapamti
Za upravljanje popustima na iznos potrebno je aktivirati u bazi podatka parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odgovarajuće društvo.  
Ako ovaj parametar nije aktivan, popusti na iznos pretvaraju se u popuste po kaskadi.
:::

Specifična tipka u ovoj kartici je **Obriši popuste**, kojom se brišu označeni redovi popusta.


### 2.5 Agenti

Ovdje se navodi šifra agenta i njegova provizija za svaki red artikla. Predlažu se šifra i postotak definirani u *Kartici kupca > kartica Agenti*.  

Ako provizija nije povezana s kupcem u njegovoj kartici, agent se ipak mora unijeti, ali s provizijom NULL, jer ako bi bila 0, to bi značilo da je agent povezan, ali ne prima proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi će se podaci, naravno, prenijeti jednako kao i u narudžbi kupca.

Ista će se sekcija prikazati za svaki red artikla u odgovarajućoj kartici Agenti.

Specifična tipka ove forme je **Obriši agente**, koja omogućuje brisanje odabranih agenata.

### 2.6 Odredište

Ovdje se predlažu informacije unesene u *Kartici kupca > kartica Isporuke*, ali samo ako postoje zadani podaci. Padajući izbornik nudi sve primatelje, odredišta i prijevoznike definirane u registru kupca.  

Adrese isporuke (primatelj/odredište i prijevoznik) mogu se unijeti i samo opisno, bez prethodnog unosa među kontakte.  

Ako u registru nije definiran ovaj zadani podatak, kao primatelj i odredište predlaže se adresa unesena u osnovne podatke kupca.  

### 2.7 Prijevoznici

U sekciji **Prijevoznici** predlažu se podaci uneseni u kartici [Isporuka](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) u registru kupca. Posebno se predlaže subjekt na čiji će teret biti prijevoz — pošiljatelj, primatelj ili prijevoznik.
Ovisno o odabiru, prikazuju se različita polja:    
- Ako je prijevoz na teret **pošiljatelja**, moguće je unijeti registarsku oznaku vozila, datum i vrijeme početka prijevoza, a automatski se predlaže adresa društva.    
- Ako je prijevoz na teret **primatelja**, moguće je unijeti registarsku oznaku vozila, datum i vrijeme početka prijevoza, s prijedlogom adrese odredišta.    
- Ako je prijevoz na teret **prijevoznika**, dostupna su polja: računovodstveni subjekt prijevoznika, registarska oznaka, datum i vrijeme prijevoza.  


### 2.8 Dodatni podaci

Ovdje se nudi informacija unesena u *Kartica subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

### 2.9 Zajednički nositelji

Ova je kartica aktivna samo ako je u kartici kupca, kartica [fiskalne informacije](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).   Upravljanje suvlasnicima omogućuje da više osoba zajednički budu nositelji narudžbe.  
Suvlasnici moraju biti uneseni u alternativne adrese u registru, s adresom koja je [tipa](/docs/configurations/tables/general-settings/address-types) *suvlasnik*. Na taj se način pojavljuju u ovoj kartici, gdje je potrebno ručno unijeti postotke raspodjele troškova.

## **3.a Grupirani artikli**

Ova je kartica aktivna i vidljiva samo za one [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types) koje imaju postavljen flag *Upravljanje matricama dodatnih podataka* i odgovarajuću *konfiguraciju*. Ova kartica omogućuje generiranje varijanti artikla za različite kombinacije valjanih atributa, koje će se zatim prenijeti u sljedeću karticu *Artikli*. Za sva polja koja nisu objašnjena na ovoj stranici, možeš se pozvati na dokumentaciju kartice *Artikli*.     
Unosom [artikla koji se vodi kroz matricu](/docs/erp-home/registers/items/create-new-item) u mrežu artikala, u kartici *Matrice* prikazat će se matrica povezana s registracijom artikla. U ćelijama matrice moguće je unijeti naručene količine za svaku kombinaciju; moguće je popunjavati samo one ćelije koje imaju valjanu kombinaciju u registru.       
Nakon što su unesene količine za sve kombinacije, potrebno je kliknuti tipku na alatnoj traci *Potvrdi vrijednosti matrice* kako bi se generirale varijante prema svim mogućim kombinacijama.  
Svaka varijanta popunit će jedan red u sljedećoj kartici *Artikli*, s pripadajućom količinom.

## **3.b Artikli**

U ovoj se kartici unose svi artikli s pripadajućim podacima.

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz upotrebu [helpa na polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili mogu biti predloženi iz povezanih procedura.

Za unos **novog artikla** u mrežu dovoljno je pozicionirati se na redak i popuniti različite podatke ili koristiti tipku **Novi** koja se nalazi na traci izbornika.

U nastavku su objašnjena *obavezna* polja prisutna u glavnoj mreži:  
- **Redak**: ovo polje sadrži broj retka i automatski se popunjava progresivno prilikom unosa podataka u redak.  

- **Vrsta retka**: omogućuje odabir, putem padajućeg izbornika, artikala s različitim karakteristikama:  
>- *Kodirani artikal*: artikli koji su kodirani u registru i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.   
>- *Nekodirani artikal*: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu.    
>- *Artikal troškova*: artikli (kodirani ili nekodirani) koji se zasebno prikazuju u sažecima dokumenata; ako je artikal troška kodiran i od fiskalnog značaja, bit će evidentiran u skladištu, dok ako nije kodiran ili nije fiskalno relevantan, neće se evidentirati u skladištu.    
>- *Artikal bilješke*: opisne bilješke koje se prikazuju u ispisu dokumenta; ne utječu na računovodstvo ni na skladište.    
>- *Artikal poklon*: poklon-artikal se tretira kao kodirani ili nekodirani artikal s računovodstvenog i skladišnog aspekta, ali se kao poklon iskazuje zasebno u sažecima dokumenta; ovisno o flagu *Rivalsa IVA*, iznos PDV-a za poklon može biti obračunat na teret subjekta ili ne.

:::note[NAPOMENA]
Ako se započne izravno unosom artikla, njegova klasa, šifra i vrsta retka — *Kodirani artikal* — unose se automatski.
:::

**Klasa/Šifra/Opis artikla**: se ogu unijeti  [ručno ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz upotrebu  [helpa u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koji će prikazati sve unesene podatke u *Šifarniku artikla*.

Nakon unosa artikla, njegov *Opis* bit će automatski preuzet iz šifarnika. Ako artikl ima *Varijante*, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: predlaže se glavna mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.

**Količina**: predstavlja količinu glavne mjerne jedinice i kao zadanu vrijednost ima 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izuzimanje (na primjer iz narudžbe dobavljača)..

**Cijena**: Cijena se preuzima iz cjenika unesenog u karticu kontakta; cjenik referentnog artikla prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako je u kartici subjekta povezano više cjenika u nizu. (vidi [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) ), isti dokument može sadržavati artikle iz različitih cjenika.

Kroz dvostruki klik u polju **Cjenici** (kartica *Popusti/Cjenici*) Korisnik ima mogućnost odabrati preuzimanje koje nije zadano, a iz kojeg se želi preuzeti cijena unesenog artikla.

:::note[NOTA]
Ako cjenik nije dostupan, predloženi podatak bit će **prodajna cijena** preuzeta iz *Kartice artikla > kartica [Troškovi](/docs/erp-home/registers/items/create-new-item)* ili će se izračunati na temelju postavki parametara dokumenta. Ako ni taj podatak nije dostupan, prikazat će se cijena 0.
:::

- **Osnovica**: ovo polje sadrži jediničnu cijenu pomnoženu s količinom, umanjenu za popuste.  

- **Popusti na artikl**: sadrži popuste koji vrijede za artikl, a koji potječu iz zaglavlja, iz cjenika ili su uneseni ručno.  

- **Završni popusti na artikl**: sadrži završne popuste na artikl unesene u sažecima dokumenta, a koji se raspoređuju na sve artikle.  

**PDV**: *prioritetan* je podatak unesen u polje Šifra PDV-a u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrijednost koja je se nalazi u'*Šifarniku artikla*, no korisnik ima mogućnost unijeti i neki drugi podatak. Ovo polje je obavezno.

#### Neobavezna polja

- **Barkod / Artikl kupca i Opis artikla kupca**: ovi se podaci preuzimaju iz informacija unesenih u *Kartici artikla*; za upravljanje barkodovima potrebno je aktivirati njihovo korištenje u [Parametrima narudžbe kupca](/docs/configurations/parameters/sales/sales-orders-parameters). Ovaj stupac omogućuje predlaganje artikla pretragom po njegovom barkodu. Budući da je barkod jedinstven, nakon što se unese barkod definiran u kartici artikla, sustav će automatski predložiti odgovarajući artikl.

- **Prihod od prodaje**: predlaže se podatak unesen u *Kartici artikla > kartica Opći podaci*; ako se ne može preuzeti automatski, potrebno ga je ručno odabrati između ponuđenih opcija u padajućem izborniku.  
U protivnom, izostanak ovog podatka može uzrokovati pogreške prilikom knjiženja računa koji će se generirati iz narudžbe, ako u *Kartici kupca > Računovodstveni podaci > kartica Administrativna* nije postavljena vrijednost u polju *Zadani prihod konta suprotnosti*.  

- **Prisilno realizirano**: ako je aktivno, ovaj **flag** označava da je red artikla prisilno realiziran — primjerice, zato što kupac više ne želi taj artikl ili jer je proizvedena i otpremljena količina manja od naručene, a ostatak se više neće proizvoditi, pa se količina zatvara prisilnim realiziranjem.   

:::note[NAPOMENA]
Ako se koristi proizvodnja, kada se ovaj *flag* aktivira, prikazuje se poruka koja upozorava korisnika: „Prisilno realiziranje retka uzrokuje automatsko brisanje eventualnih planiranih narudžbi povezanih s nalozima u statusu *planirano* te realizaciju naloga u statusu *planirano* i *neobrađeno*.“ Dokumenti generirani na temelju naloga u statusu *pokrenuto* ili *izvršno* neće biti izmijenjeni.    
:::

- **Datum spremnosti robe i Datum isporuke**: ti datumi označuju datum kada će materijal biti spreman (dakle kada će proizvodnja biti dovršena) i datum kada se planira isporuka materijala; *Datum spremnosti robe* mora biti manji ili jednak Datumu isporuke.

U odjeljku Artikli nalaze se sljedeće tipke na traci izbornika:

> **Struktura proizvoda**: omogućuje otvaranje strukture proizvoda odabranog artikla kako bi se mogli pregledati detalji. (Za više informacija o ovoj temi pogledaj članak Stablo strukture proizvoda i upravljanje strukturama).  
> **Raspakiraj prvi nivo strukture**: omogućuje dodavanje u narudžbu kupca materijala (sirovina i poluproizvoda) koji se nalaze u strukturi proizvoda artikla; u narudžbu će se tako prenijeti komponente prvog nivoa gotovog proizvoda. Ova se opcija često koristi za proizvode tipa Kit (koji se sastoje od više dijelova).    
> **Ažuriranje cjenika**: omogućuje ažuriranje cijene artikla u postojećem cjeniku (spremi dokument da bi se omogućile ove tipke) ili stvaranje novog cjenika s artiklom i odabranom cijenom.          
> **Podijeli količinu u više isporuka**: omogućuje podjelu količine jedne stavke artikla na više redaka prema datumima isporuke. Nakon odabira retka i klika na tipku, otvorit će se obrazac **Različite isporuke**, u kojem će biti prikazani *Datum spremnosti robe*, *Datum isporuke* i *Količina* stavke. U sljedećem retku treba navesti *Datum spremnosti robe* (koji bi trebao biti isti), *Datum isporuke* (koji će biti drugačiji) i *Količinu* koja će se otpremiti tog datuma. Zatim je potrebno ažurirati prvi redak s preostalom količinom, tako da zbroj količina iz oba retka odgovara početnoj količini prije podjele. Potvrdi operaciju tipkom *OK*.  
> Pakiranje: omogućuje kreiranje jedne logističke jedinice iz odabranog retka. Redak mora biti artikl koji je kodificiran i spremljen u dokumentu. Korisnik mora imati odgovarajuća prava unutar [Parametara utovara/istovara](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) za učitavanje palete. Osim toga, artikl mora biti upravljan putem logističkih jedinica, te će se – na temelju postavki Tipa logističke jedinice unesenih u šifrarnik artikla, karticu [Pakiranje](/docs/erp-home/registers/items/create-new-item), logistička jedinica kreirati u skladu s definiranim kriterijima.

Sada analizirajmo kartice koje se nalaze ispod tablice s artiklima.

### 3.b.1 Popusti / Cjenici

Ova kartica kao prvo polje prikazuje eventualni **Cjenik** koji vrijedi za kupca i povezan je s artiklom; ako nije unaprijed postavljen, polje se može ručno popuniti kako bi se cijena artikla preuzela iz određenog cjenika.  
Uz podatke o dodijeljenom cjeniku nalazi se i polje **Vrsta razreda**: ono označava razred popusta koji će se koristiti, a preuzima se iz šifrarnika kupca ili samog cjenika.  
**Flag** *Ručno unešena cijena* omogućuje ručno mijenjanje cijene i popusta te njihovo zadržavanje u dokumentima koji se kreiraju iz dokumenta u kojem je promjena izvršena.  

U tablici se prikazuju svi popusti povezani s artiklom, svaki sa svojom osnovom izračuna i načinom dodjele.  
Popusti se mogu preuzeti iz: šifrarnika kupca, dodijeljenog načina plaćanja dokumenta, cjenika ili poveznice cjenik–kupac.  
Svi prikazani podaci mogu se uređivati.  

Iz ove tablice moguće je koristiti tipku **Izbriši popuste** na traci izbornika.   

### 3.b.2 Podaci o artiklu

U ovoj se kartici prikazuju ili unose dodatne informacije vezane uz artikl.  

**Varijante**: Ako odabrani artikal ima varijante, bit će potrebno odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante je koristan za artikle s ovom posebnom konfiguracijom koji mogu imati cijenu različitu od standardno postavljene. Kao rezultat, cijena artikla s varijantama može biti drugačija od cijene artikla bez varijanti. To može eventualno zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Alternativna JM**: u ovim poljima bit će prikazana količina u alternativnoj mjernoj jedinici u slučaju da je u *šifarniku artikla* ovaj podatak prisutan na kartici **Alternativne mjerne jedinice** (uzima se ona koja ima aktiviranu oznaku **Zadano**) i ako su u parametrima dokumenta aktivirane oznake: **Upravljanje dvostrukom mjernom jedinicom** i **Automatski prijedlog alternativne mjerne jedinice**.

**Alternativna količina**: predložena vrijednost za alternativnu mjernu jedinicu, izračunata množenjem ili dijeljenjem *upravljane količine* (one u glavnoj mjernoj jedinice) sa *faktorom pretvorbe* podešenim u *Šifarnik artikala > kartica Alternativne mjerne jedinice*.

- **Skladište / opis / razlog**: u ta se polja unosi skladište iz kojeg se materijal otprema, zajedno s odgovarajućim razlogom otpreme. Ti su podaci potrebni za otpis robe prilikom izdavanja otpremnice ili računa. Podaci se definiraju u tablici [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types).

- **Projekt**: projekt povezan s dokumentom; u slučaju narudžbe kupca može se dodijeliti pomoću postupka *Evidencija iz projekta* ili putem pomoći polja (*help*).  

- **Povrat PDV-a**: ako je označeno, PDV na poklon-artikl uračunava se u ukupan iznos dokumenta.  

- **Ponuda**: prikazuje referencu na ponudu kupca ako je narudžba kreirana iz [Ponude](/docs/sales/offers/search-offers).

- **Marka**: označava marku artikla, preuzetu iz njegove šifrarnice ili iz cjenika artikla;  

- **Bilješke**: omogućuju unos napomena za svaki artikl koje će se automatski prikazivati u svim povezanim dokumentima.   

### 3.b.3 Agenti

**Trgovački predstavnik**: trgovački predstavnik povezan s odgovarajućom provizijom za odabrani artikal; podatak odgovara onome što je prisutno u *Zaglavlje> kartica Trgovački predstavnik*. Postotak se može promijeniti.

*Posebna tipka*

> **Izbriši Trgovačkog predstavnika**: omogućuje brisanje trgovačkog predstavnika povezanog s artiklom.

### 3.b.4 Serije i serijski brojevi

U obje mreže mogu se unijeti serije i serijski brojevi koji se trebaju preuzeti iz skladišta i koji su povezani s artiklom u *Kartici artikla > kartica [Serije i Serijski brojevi](/docs/erp-home/registers/items/create-new-item)* ili se mogu unijeti ručno.  

Ova operacija ovisi o prisutnosti serija i serijskih brojeva u skladištu.  

Ako artikl ne predviđa upravljanje Serijama/Serijskim brojevima, ova kartica bit će onemogućena.   

#### Specifične tipke

**Izbriši lot**: Omogućuje brisanje odabranog retka lota.
**Izbriši serijski broj**: omogućuje brisanje odabranog retka serijskog broja.

### 3.b.5 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na kojima su distribuirane vrijednosti artikala.

Ovi podaci mogu se unijeti ručno ili *automatski* (u slučaju da su centri troškova/profita prethodno uneseni u *šifarnik kontakta*, *šifarnik artikla* ili u *kontni plan*).

### 3.b.6 Dodatni podaci

Donosi se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću unosa novih dodatnih podataka koji su korisni samo za predmetni dokument, uz mogućnost putem odgovarajuće oznake odabrati koje dodatne podatke ispisati.

### 3.b.7 Dokumenti u privitku

Prikazuje se detalj eventualnog **Priloženog dokumenta** (naziv, tip dokumenta, eventualne napomene, naš/vaša referenca). Za upute o tome kako priložiti dokument, upućujemo na članak [Priloži dokumente](/docs/guide/common/operations-with-data/attach-documents).

### 3.b.8 Matrici 

Ova kartica prikazuje se isključivo za [Tipove narudžbi](/docs/configurations/tables/sales/sales-order-types) koji imaju *flag* za upravljanje matricama Extra Data.    

### 3.b.9 Sekcija vrijednosti  

Donji desni dio prikazuje sažetak troškova koji formiraju konačnu cijenu odabranog artikla u mreži artikala.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u retku**: Cijena artikla * Količina artikla

**Ukupno rabat**: zbroj popusta na artikl, uključujući i konačne popuste;

**Osnovica**: Bruto osnovica - Popusti;

**Porez**: Iznos * stopa PDV-a artikla; 

**Ukupno**: Iznos + Porez.

Polje **Stanje** na vrhu ove sekcije prikazuje situaciju artikla u eventualnom proizvodnom ciklusu i automatski se ažurira prema stanju povezane narudžbe.  
Artikl može imati sljedeća stanja:    
- *Unesen* kada je artikl unesen;    
- *Potvrđen* kada je narudžba potvrđena, s pripadajućim *flagovima* i datumom u zaglavlju;    
- *U proizvodnji* kada je narudžba generirana kroz postupak [Generiranje proizvodnih narudžbi](/docs/planning/ms-master-scheduling/general-schedule) ili automatski ako tip narudžbe to predviđa;   
- *Proizveden* ako je povezana narudžba u statusu izvršeno;    
- *Otkazano* ako je artikl izvršen prisilno.     

## **4. Sažeci**

U različitim sekcijama ove kartice prikazuju se glavni podaci cijelog dokumenta i neke specifične tipke.    

### 4.1 Konačni popusti  

Mogu se unijeti samo popusti, izraženi u postotku, koji će se primijeniti na ukupni iznos dokumenta.

Popusti uneseni u ovom odjeljku izračunavaju se i prikazuju na svakom artiklu dokumenta, u *kartica Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućava odabir tipologije popusta (predefinirane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), dodijeljujući tipologiji prioritet primjene popusta i hoće li se popust obračunavati na osnovicu ili kaskadno u odnosu na već prethodno primijenjene popuste.
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed koji se primjenjuje odvija se na rastući način. 
**Kaskadni/Osnovni**: za definirati da li izračun popusta koristi kao osnovu (cijena * količina) - (već obračunati popusti) ili (cijena * količina).  
**Vrijednost**: numerička vrijednost popusta koji treba primijeniti.  


### 4.2  Sažetak provizija agenata

U ovoj mreži sažimaju se ukupne provizije koje je agent ostvario za ovu narudžbu, u slučaju da postoji povezani agent.  
Prikazat će se agent i vrijednost ostvarene provizije.  

### 4.3 Konačni troškovi/popusti/povećanja

Ovdje su troškovi uneseni u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na korišteni dokument.

**Tip/Opis**: omogućuje odabir tipa troškova (predefiniranih u *Tipovima troška*), dodjeljujući tipu postotak troška koji se treba primijeniti. 
**Postotak/Vrijednost**: polje koje identificira hoće li se troškovi izračunati s postotkom ili s unaprijed definiranim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troškova. 

### 4.4 Sažeci PDV-a

Prikazuje se sažetak PDV-a dokumenta za svaki PDV kod.  

### 4.5  Riepilogo scadenze    

U ovoj mreži prikazuju se dospijeća izračunata na temelju odabranih načina plaćanja.    

### 4.6 Ostala polja

**Završne napomene**: polje je opisno i može ga ispuniti korisnik, uz pomoć *Help note kodificiranih*. Mogu se unijeti dodatne napomene za klijenta, primjerice vezano uz dostavu, koje će se zatim prikazati na ispisu Potvrde narudžbe na kraju ispisa.  
  
### 4.7  Ukupno dokumenta  

U desnom dijelu ove kartice mogu se pregledati sažeci dokumenta:          

**Bruto iznos artikala**: predstavlja zbroj vrijednosti svih artikala;

**Predujam**: predstavlja vrijednost eventualnog primljenog predujma;

**Iznos poklona**: predstavlja iznos artikala tipa poklon unesenih u karticu *Articoli*.

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost popusta primijenjenih na artikle, ali bez konačnih popusta. 

**Neto iznos artikala**: *Bruto iznos artikala* – *Ukupni primijenjeni popusti*; 

**Ukupni konačni rabati**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala; 

**Ukupno s neto finalnim rabatima**: *Neto iznos artikala* - *Ukupni konačni rabati*;

**Nedokumentirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikle *Tip trošak*; 

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mreži *Naknade*; 

**Troškovi ovjere**: predstavlja zbroj troškova ovjere unesenih u mreži *Naknade*;

**Dokumentirani troškovi**: predstavlja vrijednost troškova unesenih u mreži *Naknade*; 

**Osnovica**: *Neto iznos artikala* – *Konačni rabati* + *Ukupno nedokumentirani troškovi* + *Ukupno dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;

**Ukupno**: *Osnovica* + *PDV*.

## **5. Povezani dokumenti**

U ovoj kartici moguće je pregledati priložene dokumente.  
Za pridruživanje dokumenata moguće je postupiti na dva načina:    
- korištenjem tipke na alatnoj traci **Dokumenti**, gdje se može odabrati hoće li se priložiti dokument već kodificiran u Fluentisu ili stvoriti novi dokument za pridruživanje;        
- korištenjem desnog klika unutar mreže i odabirom *Priloži datoteku*, što vodi u kreiranje novog dokumenta za pridruživanje. 