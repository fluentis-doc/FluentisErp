---
title: Parametri izlaznih računa
sidebar_position: 5
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako želite ručno konfigurirati, pogledajte kontrolni popis na povezanoj stranici.    
:::

Parametri faktura prodaje omogućuju osnovnu postavku za ispravno upravljanje, u skladu sa specifičnim zahtjevima svake pojedine tvrtke. Prozor povezan s ovim parametrima sastoji se od 4 različitih kartica: Općenito, Ispunjenje,Otprema  i Analitika.

### Općenito

**Upravljanje dvostrukom mjernom jedinicom**: ako je aktivno, u redovima računa bit će prikazane dvije kolone Alternativna JM i Alternativna Količina, stoga će biti moguće upravljati dvostrukom jedinicom mjere, uzimajući uvijek u obzir da je to glavna jedinica mjere na kojoj se provode kontrole za ispunjenje.

**Automatski prijedlog alternativne JM**: ovaj se flag može uređivati samo ako je aktivirana opcija upravljanja dvostrukom jedinicom mjere i omogućuje prikaz alternativne jedinice mjere postavljene u kartici artikla na kartici stavki računa u posebnom stupcu 'Alternativna JM'; ako nije aktivna, jedinica mjere se ne predlaže.      

**Provjerite dostupnost**: ovaj flag i ostale vezane za kontrolu, prikaz i obaveznost s obzirom na područje trenutno nisu podržane u ovoj verziji.   

**Zadane jedinice mjere za volumen/težinu**: ove jedinice mjere smatraju se zadanim za prikaz u kartici [Prenos](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice kao jedinice mjere volumena i težine; vrijednost se može mijenjati u dokumentima.  

**Pretraživanje cijena artikala u svim unaprijed definiranim cjenicima**: pri traženju cijene i popusta za artikal u računu, sustav slijedi pravila definirana u kartici klijenta, u odjeljku *Cjenici*. Ako je na određenom tipu cjenika označena opcija 'zadano', pretraživanje cijena i popusta ograničit će se samo na tu vrstu cjenika; ako opcija 'zadano' nije aktivna, sustav će pretraživati sve vrste cjenika po prioritetnom redu. Drugim riječima, s aktivnim 'zadano' zastavicom sustav prvo traži cjenik odgovarajuće vrste; ako ne pronađe rezultat, prelazi na druge vrste po prioritetu. Međutim, ako u kartici klijenta nema niti jedne vrste cjenika označene kao 'zadano', već samo prioriteti, ovaj parametar neće utjecati na pretraživanje, čak i ako je aktivan.  

**Predloži proviziju za artikle na poklon**: s ovim flagom provizije za agente bit će ponuđene i za stavke darovane robe, kao što je slučaj i za stavke tipa Kodirani artikal.

**Unos provizija za vrste 6 i 7 (Avans/Storno)**: ako je aktivirano, omogućuje unos i upravljanje provizijama i za stavke vrste 6 i 7 na računima. Za dodatne informacije, pogledajte članak vezan uz [unos računa](/docs/sales/sales-invoices/invoicing/sales-invoice).  

**Dozvoli rabat za stavke promotivnih poklona**: con questo flag saranno calcolati gli sconti anche per gli articoli omaggio e incideranno sui totali.

**Negativne cijene na kreditnim računima**: ako je aktivirano, sustav će upozoriti ako postoje pozitivne cijene unutar kreditnih računa. Ako nije aktivirano, sustav neće vršiti nikakvu provjeru niti će davati upozorenja.  

**Bez troškova naplate na kreditnim računima**: ako je aktivirano, troškovi naplate se neće dodavati na kreditne račune.  

**Provjera prodaje po cijenama serija**: zastarjelo polje, više se ne koristi.

**Maksimalan broj redaka**: maksimalan broj artikala po fakturi, aktivno samo u rumunjskoj verziji.  

**Provjera artikala pri iscrpljenju zaliha**: ovom opcijom se aktivira upravljanje artiklima kojima je zaliha pri kraju; ako je u kartici artikla postavljen datum iscrpljenja i odgovarajući flag, Fluentis će korisnika upozoriti skočnim prozorom kada se artikl unese u dokument.     

**[Omogući widget pojednostavljenih popusta](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odjeljku Artikli prikazat će se dva nova stupca: *Popusti na artikl* i *Završni popusti na artikl*. Stupac *Popusti na artikl* je moguće uređivati i prikazuje popuste koji se automatski primjenjuju na temelju postavki vezanih uz kupca, artikl, cjenik ili kategoriju popusta. Korisnik ima mogućnost unosa, izmjene ili brisanja popusta izravno u ovom stupcu. Za korištenje ovog widgeta potrebno je, osim aktivacije ove opcije, i da u vrsti fakture bude specificirano koju vrstu popusta koristiti.     

**Koristi stavku kupca**: ako je postavljen, ovaj flag će umetnuti, u mrežu artikala računa, kolone za Kod i Opis kupca unesene u kartonu artikla, na kartici Kupac.   

**Koristi barkod**: ako je postavljeno, ovaj flag će umetnuti, u mrežu artikala računa, kolonu za prikaz bar koda artikla.    

**Obvezna šifra korisnika**: ovaj flag čini obaveznim ispunjavanje polja *Operater* u zaglavlju.    

**Blokiraj unos dokumenta na praznike prema tvorničkom kalendaru**: ako je aktivno, sustav ne dopušta unos ponude na praznike (prvo se provjerava Kalendar tvornice tvrtke, a zatim Kalendar proizvodnih kapaciteta); ako nije aktivno, sustav ne provodi nikakvu provjeru i dopušta unos dokumenta.   

**Provjera unutar EU (Intra-CEE)**: ako je ova opcija aktivna i zemlja kupca pripada Europskoj uniji, sustav provjerava da je u [Vrsti računa](/docs/configurations/tables/sales/invoices-type) označena opcija *Intrakomunitarna* te da je u matičnim podacima kupca aktiviran flag *Intrastat*; ako ti uvjeti nisu ispunjeni, prikazat će se poruka o grešci: "Vrsta dokumenta je intrakomunitarna, ali šifra kupca nije označena kao intrakomunitarna".  

**Preračunaj prijevoz**: ova opcija omogućuje da se u kartici [Prenos](/docs/sales/sales-invoices/invoicing/sales-invoice) računa automatski popune ukupne vrijednosti težine, volumena i broja paketa iz redaka dokumenta; ako ova opcija nije aktivna, ta polja neće biti popunjena.       

**Vanjske reference narudžbe**: ova opcija omogućuje da se polja *Naša referenca* i *Vaša referenca* renesu iz redaka narudžbe/otpremnice u retke računa.  

**Održavajte cijene narudžbe za zagrade**: koristi se u ispunjavanju narudžbi na računu u slučaju kada je ispunjena količina različita (obično djelomična) od naručene količine za koju je unesena cijena ili popust po razredima količine. Ako cijena ili popust ne ovise o isporučenoj količini, već samo o količini u narudžbi, ovaj flag treba biti aktiviran; međutim, ako cijena ili popust po razredima ne trebaju biti uneseni u dokument isporuke u slučaju da ispunjenje ne bude za ukupnu količinu narudžbe, flag ne treba biti aktiviran.

**Ambalažno računovodstvo**: ako je aktivno, uzmi u obzir u knjiženju i redove pakiranja.

### Izuzimanje

**Plaćanje**: određuje vrijednost koja će se koristiti za način plaćanja računa kupca u slučaju višestruke obrade prodajnih naloga: Prva narudžba, *Šifarnik* ili *Prva narudžba*. 

**Primatelj**: određuje vrijednost koja se koristi za primatelja narudžbe kupca u slučaju višestrukog ispunjenja prodajne narudžbe: *Prva narudžba, *Šifarnik* ili *Prva narudžba*.

**Ponovno izračunaj CDC/CDP**: u slučaju kada je odabrano generiranje računa iz naloga kupca pomoću odgovarajuće procedure, aktiviranjem ove opcije sustav će ponovno izračunati centre troška i profita na računu, zanemarujući one postavljene na prodajnom nalogu. Ako opcija nije aktivna, sustav neće ponovno izračunati podatke već će zadržati one unesene na nalogu kupca. 

**Prikaz tablice izvršenja:** ako je aktivno, ova opcija omogućuje prikaz u obliku tablice u formi za izvršenje otpremnice prodaje.      

**Prikaz stabla izvršenja:** ako je aktivno, ova opcija omogućuje prikaz u obliku stabla u formi za izvršenje otpremnice prodaje.

**Predložite Lotove**: ako u retku narudžbe nema lotova, prilikom izvršenja traže se dostupni lotovi iz zaliha, pod uvjetom da vrsta preuzimanja *nije Ručno*.

### Istovar

**Kreiraj zapis s datumom dokumenta**: ako je aktivno, registracija skladišta vršit će se s istim datumom kao i faktura, i neće biti potrebno specificirati datum registracije u obrascu za otpremu. Ako nije aktivno, bit će potrebno specificirati datum u obrascu za otpremu fakture;

**Prioritet skladišta i uzroka otpreme na stavkama otpremnice**: Ako je aktivno, skladište i razlog izdavanja robe (knjiženja) preuzimaju se iz redaka fakture.
Ako nije aktivno, koriste se skladište i razlog izdavanja uneseni u sljedeća polja (Skladište i Razlog izdavanja robe);

**Automatski utovar/istovar**: ako je aktivirano, iskrcaj otpremnice će se automatski izvršiti prilikom aktivacije zastavice Ispisano. Ako nije aktivirano, iskrcaj se mora izvršiti pomoću odgovarajuće tipke koja se nalazi na traci izbornika u formi za unos računa (vidi [Unos prodajnih računa](/docs/sales/sales-invoices/invoicing/sales-invoice)) ili putem odgovarajuće procedure;  

**Upozorenje fiktivne stavke**: ako je aktivno, tijekom otpreme računa sustav će provjeriti postoje li lažni artikli, a u slučaju da ih ima, pojavit će se poruka koja će korisniku omogućiti da odabere želi li dovršiti postupak ili ne; u slučaju afirmativnog odgovora, cijeli račun bit će otpremljen, dok u slučaju negativnog odgovora račun NEĆE biti otpremljen.

### Analitika

Ova KARTICA specificira kojim prioritetom se dohvaća Centar troškova (CDC) ili Centar profita (CDP) u retku dokumenta.        
Prioriteti se mogu mijenjati pomoću tipki **Premjesti gore**![](/img/neutral/common/move-up.png) i **Premjesti dole**![](/img/neutral/common/delete-cc.png).     
*Zadane vrijednosti*: CDC ili CDP dohvaćaju se iz vrste fakturiranog, ako je prisutna.      
Za dodatne informacije pogledajte tablicu [Vrsta fakturiranog](/docs/configurations/tables/sales/sales-turnover).      
Ako nije prisutno u *Vrsti fakturiranog* sustav će ga tražiti u *Podacima kupca*. Ako nije ni tamo, tražit će u kartoteci artikla, a potom na razini skladišta.         
Flag **Procijeni prioritet za svaku dimenziju** omogućava da se u dokumentima CDC/CDP grupiraju po dimenziji, u kartici Analitika.