---
title: Parametri otpremnice
sidebar_position: 3
---

:::tip[FAst Start]
Ova tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako se želi konfigurirati ručno, pogledajte kontrolni popis (check‑listu) na navedenu stranicu.   
:::

Parametri otpremnice omogućuju osnovno podešavanje za ispravno upravljanje dokumentima, u skladu sa specifičnim zahtjevima svake pojedine tvrtke. Prozor se sastoji od četiri kartice: Općenito, Isporuka, Otpis i Analitika.  

### Općenito

**Upravljanje dvostrukom mjernom jedinicom**: ako je aktivno, u redovima otpremnice bit će prikazane dvije kolone: Alternativna JM i Alternativna količina. Na taj način će se moći upravljati dvostrukom jedinicom mjere, pri čemu se kontrole za isporuku uvijek rade prema glavnoj jedinici mjere.   

**Automatski prijedlog alternativne JM**: ovaj flag postaje uređiv samo ako je aktivirana opcija za upravljanje dvostrukom jedinicom mjere, i omogućuje da se u kartici artikala DDT‑a automatski predloži alternativna jedinica mjere navedena u kartici artikla, u posebnoj koloni Alternativna JM. Ako nije aktivna, alternativna JM se neće predlagati.      

**Provjera dostupnosti**: ovaj flag i druge povezane s kontrolom, prikazom i obavezom po područjima, u sadašnjoj verziji nisu podržane.

**Zadane jedinice mjere za volumen/težinu**: ve jedinice mjere se smatraju zadanim UM koje se predlažu u kartici [Prijevoz](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice, kao jedinice mjere za volumen i težinu; podatak je moguće mijenjati unutar dokumenata.  

**Traži cijenu stavke u svim zadanim cjenicima**: Kada se traže cijene i popusti za artikal unutar DDT-a, sustav slijedi pravila temeljena na postavkama konfiguriranim u kartonu kupca, pod sekcijom *Cjenici*. Ako je aktivna opcija 'zadano (default)' za određenu vrstu cjenika, pretraživanje cijena i popusta fokusirat će se samo na tu specifičnu vrstu cjenika; ako flag "zadano (default)" nije aktivan, sustav će proširiti pretraživanje na sve vrste cjenika koji su prisutni, slijedeći redoslijed prioriteta. U praksi, s aktivnim flagom 'zadano (default)', sustav će prvo tražiti važeći cjenik za unaprijed definiranu vrstu; ako ne pronađe rezultate, preći će na provjeru drugih vrsta cjenika u redoslijedu unesenih prioriteta. Međutim, ako u kartonu kupca nije prisutna nijedna vrsta cjenika postavljena kao 'zadano (default)' i postoje samo prioriteti, ovaj parametar neće utjecati na pretraživanje, čak i ako je aktivan.     

**Predloži proviziju za promotivne artikle**: kada je ova opcija aktivirana, agentima će biti predložene provizije i za redove artikala koji su promotivni (besplatni), isto kao i za redove s kodiranim artiklima.    

**Dozvoli rabat za stavke promotivnih poklona**: kada je ova opcija aktivirana, na iznos retka će se primjenjivati popusti čak i za promotivne (besplatne) artikle.  

**Maksimalan broj redaka**: označava maksimalan broj artikala po fakturi; opcija je aktivna samo u rumunjskoj verziji.  

**Provjeri zalihe artikala**: Ako je postavljen, ovaj flag će prikazati obavijesni pop-up u slučaju da se u DDT unesu artikli koji imaju postavljen flag "Na isteku (in Esaurimento)" u kartonu, kao i datum kada artikal ide u istek; ova provjera sprječava prodaju artikala koji se više neće proizvoditi ili dopunjavati.

**[Omogući widget pojednostavljenih popusta](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odjeljku Artikli prikazat će se dva nova stupca: *Popusti na artikl* i *Završni popusti na artikl*. Stupac *Popusti na artikl* moguće uređivati i prikazuje popuste koji se automatski primjenjuju na temelju postavki vezanih uz kupca, artikl, cjenik ili kategoriju popusta. Korisnik ima mogućnost unosa, izmjene ili brisanja popusta izravno u ovom stupcu.

**Koristi stavku kupca**: ako je ovaj flag postavljen, u mreži artikala dokumenta bit će dodani stupci za Šifru i Opis kupca unesen u kartici Artikla, pod karticom Kupac.      

**Koristi barkod**: ako je postavljen, ovaj flag će u mreži artikala dokumenta prikazati stupac za barkod artikla. 

**Obvezna šifra korisnika**: ovaj flag čini obaveznim popunjavanje polja *Operater* u zaglavlju.    

**Blokiraj unos dokumenta na praznike prema tvorničkom kalendaru**: ako je aktivno, sustav ne dopušta unos ponude na prazničnim datumima (prvo se provjerava Kalendar tvornice tvrtke, zatim Kalendar proizvodnih kapaciteta); ako nije aktivno, sustav ne provodi nikakvu provjeru i dopušta unos dokumenta.  

**Preračunaj prijevoz**: ovaj flag osigurava da se u kartici [Prenos](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) dokumenta prikažu ukupne vrijednosti težine, volumena i paketa redaka dokumenta; bez ovog flag-a, ta polja neće biti popunjena.         

**Vanjske reference narudžbe**: ovaj flag omogućuje da se polja *Naša* i *Vaša referenca* prenesu s redaka narudžbe na retke dokumenta.  

**Očuvaj cijene iz narudžbe za cjenovne razrede**: ovaj flag osigurava da se prilikom djelomične realizacije narudžbe u dokumentu zadrži isti cjenovni razred koji je bio u originalnoj narudžbi, bez prepreračunavanja. Na primjer, ako je u narudžbi određena količina od 100 jedinica koja aktivira određeni cjenovni razred, a u dokumentu se realizira samo 20 jedinica, s aktiviranim flag-om dokument će zadržati cijenu povezanu s originalnim cjenovnim razredom, bez promjene na temelju stvarno realizirane količine.

### Izuzimanje

U ovoj kartici su prisutna sljedeća polja:    

**Plaćanje**: specificira vrijednost koja se koristi za plaćanje dokumenta kod višestruke realizacije narudžbi u dokumentu: *Prva narudžba*, *Korisnički podaci* ili *Ručno odabiranje*.

**Primatelj**: specificira vrijednost koja se koristi za primatelja dokumenta kod višestruke realizacije narudžbi u dokumentu: *Prva narudžba*, *Korisnički podaci* ili *Ručno odabiranje*.

**Kontroliraj podudaranje između plaćanja otpremnica i narudžbe**: ako je aktivno, sustav neće omogućiti ispunjenje narudžbi s različitim plaćanjima.

**Preračunaj CDC/CDP**: ako je odabrano generiranje otpremnice iz narudžbe kupca posebnom procedurom, aktiviranjem ovog flag-a sustav će preračunati troškovne i profitne centre ukoliko je otpremnica generirana iz narudžbe, ne uzimajući u obzir one postavljene u prodajnoj narudžbi. Ako flag nije aktivan, sustav neće preračunavati ove podatke, već će zadržati one unesene u narudžbi kupca.

**Prikaz tablice izvršenja**: ako je aktiviran, ovaj flag omogućuje prikaz u obliku tablice u formi za izvršenje prodajnih narudžbi.     

**Prikaz stabla izvršenja**: ako je aktiviran, ovaj flag omogućuje prikaz u obliku stabla u formi za izvršenje prodajnih narudžbi.

**Predložite Lotove**: ovaj flag osigurava da u trenutku ispunjenja, u slučaju da se unese količina koja se razlikuje od one prisutne u izvornom dokumentu, količina serija bude jednaka količini retka u kreiranom dokumentu; to je kako bi se izbjeglo da kreirani dokument ima količinu retka koja se razlikuje od one serija.

### Istovar

**Kreiraj zapis s datumom dokumenta**: ako je aktivirano, knjiženje u skladištu vrši se s istim datumom kao i dokument o isporuci, te neće biti potrebno unositi datum knjiženja u formi za otpremu. Ako nije aktivirano, bit će potrebno unijeti datum u formi za otpremu.

**Prioritet skladišta i razlog otpreme na stavkama otpremnice**: ako je aktivirano, skladište i razlog otpreme se uzimaju iz redaka otpremnice, dok ako nije aktivirano, koristi se skladište i razlog otpreme uneseni u poljima (**Skladište** e **Razlog skladišta**);

**Automatsko knjiženje/otpremanje**: ako je aktivirano, otprema otpremnice će se automatski izvršiti pri aktivaciji zastavice "Ispisano". Ako nije aktivirano, otprema se mora izvršiti ručno pritiskom na odgovarajuće dugme.  

**Upozorenje fiktivne stavke**: ako je aktivirano, tijekom otpreme otpremnice sustav će provjeriti postoje li fiktivni artikli i, ako ih ima, prikazat će poruku koja će korisniku omogućiti da odluči želi li ipak dovršiti postupak ili ne; u slučaju pozitivnog odgovora, cijela otpremnica će biti otpremljena (osim fiktivnih artikala), dok u slučaju negativnog odgovora otpremnica NEĆE biti otpremljena.

:::tip Zapamti
Ako dokument sadrži **fiktivne artikle**, postupak će uzeti u obzir *Tip opskrbe* definiran u MRP parametrima artikla:  
- Artikli tipa *Nabava* neće biti uključeni u skladišno knjiženje.    
- Artikli tipa *Proizvodnja* i *Podizvođač* će se knjižiti u skladištu na prvom nivou strukture materijala.  
:::

### Analitika

Ova KARTICA specificira kojim prioritetom se dohvaća Centar troškova (CDC) ili Centar profita (CDP) u retku otpremnice.        
Prioriteti se mogu mijenjati pomoću tipki **Premjesti gore**![](/img/neutral/common/move-up.png) i **Premjesti dole**![](/img/neutral/common/delete-cc.png).     
*Zadane vrijednosti*: CDC ili CDP dohvaćaju se iz vrste fakturiranog, ako je prisutna.      
Za dodatne informacije pogledajte tablicu [Vrsta fakturiranog](/docs/configurations/tables/sales/sales-turnover).      
Ako nije prisutno u *Vrsti fakturiranog* sustav će ga tražiti u *Podacima kupca*. Ako nije ni tamo, tražit će u kartoteci artikla, a potom na razini skladišta.         
Flag **Procijeni prioritet za svaku dimenziju** omogućava da se u dokumentima CDC/CDP grupiraju po dimenziji, u kartici Analitika.