---
title: Parametri otpremnice za kupnju
sidebar_position: 3
---

Parametri otpremnica za kupnju omogućuju osnovnu postavku za ispravno upravljanje u skladu sa specifičnim zahtjevima svake pojedine tvrtke.

Prozor se sastoji od gumba i tri različite kartice: *Općenito*, *Utovar* i *Analitika*.

### Općenito

**Upravljanje duplom mjernom jedinicom**: samo ako je ova zastavica aktivirana, sustav može upravljati alternativnom mjernom jedinicom u otpremnici.

**Automatski prijedlog alternativne J.M.**: ako je aktiviran, predlaže se količina koja se odnosi na alternativnu mjernu jedinicu, pod uvjetom da je u matičnim podacima stavke postavljena zadana. Ovu zastavu možete aktivirati samo ako je prethodna zastavica bila aktivirana;

**Trošak nula ako nedostaje cjenik**: ako je aktivan, u nedostatku važećeg cjenika popunjava cijenu s vrijednošću nula. Ako ova stavka nije označena, polje će biti ispunjeno konačnom cijenom stavke, ako postoji;  

**Dopusti otpremnice s istim brojem i kupcem**: ako je aktivno, dopušta umetanje dve dostavnice za istog dobavljača s istim brojem. Preporuča se ostaviti ovu zastavu deaktiviranom kako bi sustav mogao izvršiti provjeru jedinstvenosti;

**Lotovi i S.B. (Serijski broj) obavezni**: ako je aktivno, prisiljava korisnika da unese lot i serijski broj na razini retka stavke za sve stavke za koje je ovo upravljanje predviđeno. Preporučamo aktiviranje ove oznake ako koristite paketno upravljanje stavkama;

**Traži cijenu stavke u svim zadanim cjenicima**: ako je aktivno, cijena artikla unesenog u redoslijed dobavljača bit će pretražena u svim unaprijed definiranim cjenicima kartice dobavljača, uz zadani cjenik. Ako nije aktivno, cijena artikla bit će pretražena samo u zadnjem cjeniku prisutnom na vrhu narudžbe, ali ne i u drugim cjenicima za istog dobavljača s različitim datumima valjanosti.

**Dopusti popuste za promotivne poklone**: ako je aktivno, dopušta umetanje popusta na linije besplatnog tipa dostavnice. 

**Korištenje artikla dobavljača**: ako je aktivno, u tablici artikala otpremnice također se nudi polje za unos šifre artikla dobavljača.

**Provjeri zalihe artikala**: ako je aktivirano, sustav provodi provjeru dostupnosti artikala unesenih u otpremnicu i obavještava ako je artikl u odlasku, odnosno ako je u [Šifarniku artikla](/docs/erp-home/registers/items/create-new-item) aktivna oznaka *U odlasku*.

**Ambalažno računovodstvo**: omogućuje knjiženje, u glavnoj knjizi, i redaka s artiklima prirode ambalaže koji se obično upravljaju kako bi se provjerili inventari [Pakiranja za napraviti](/docs/configurations/tables/logistics/package-to-be-returned).

**Održavajte cijene narudžbe za zagrade**: koristi se u postupku realizacije narudžbi u otpremnici u slučaju kada je isporučena količina različita (obično djelomična) od naručene količine za koju je unesena cijena ili popust po količinskim razredima. Ako cijena ili popust ne ovise o isporučenoj količini nego samo o naručenoj količini, ova oznaka mora biti aktivirana; međutim, ako cijena ili popust po količinskim razredima ne treba biti uneseni u dokument isporuke u slučaju da isporuka ne bude izvršena za cijelu naručenu količinu, oznaka ne smije biti aktivirana.

**Uključi Kontrolu Kvalitete**: work in progress.

**Preračunaj prijevoz**: ako je aktivno, izračunava težinu i volumen iz vrijednosti matičnih podataka stavke na dokumentu, automatski postavljajući vrijednost prijevoza. Ako nije aktivan, trošak prijevoza dostavnice morat će se izračunati ručno jer neće biti ponuđen;  

**DEF U.M. količine**: ako je aktivno, označava zadanu mjernu jedinicu za količinu pri izračunavanju transporta dostavnice;  

**Def. U.M. težine**: ako je aktivno, označava zadanu mjernu jedinicu za težinu pri izračunavanju transporta dostavnice. 

### Utovar

**Kreirajte registraciju s datumom dokumenta**: Ako je aktivirano, registracija u skladištu se vrši s istim datumom kao otpremnica. Ako nije aktivirano, registracija se vrši s *datumom utovara* navedenim u zaglavlju otpremnice, ako je prisutan; inače, koristi se *datum registracije* u skladištu naveden u postupku [Zaduženje skladišta Primkom](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). Ako se registracija vrši unutar otpremnice putem gumba *Automatski utovar* u skladištu, a *Datum utovara* nije unesen, koristit će se današnji datum.

**Prioritet predloška skladišta i istovara**: ako je aktivirano, prilikom registracije otpremnice u skladištu koriste se vrijednosti postavljene u donjim poljima: **Skladište** i **Predložak skladišta**. Ako oznaka nije aktivna, skladište i razlog utovara se čitaju iz redaka otpremnice. Ako nisu prisutni u redovima otpremnice, neće biti moguće izvršiti automatski utovar unutar otpremnice za kupnju, ali će biti moguće registrirati otpremnicu putem posebnog postupka (vidi [Zaduženje skladišta Primkom](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)) odabirom u kartici *Parametri* oznake  "*Prihvatiti kao skladište i predložak sljedeće podatke:*" i označavanjem *Skladišta* i *Predložak* koji se koriste. 

**Automatski utovar/istovar**: Ako je aktivirano, prilikom aktivacije oznake *Kontrolirano* u zaglavlju dokumenta prikazat će se poruka koja podsjeća da je parametar automatskog utovara/istovara aktivan i pita želi li se nastaviti. Ako se pritisne "*Da*" otpremnica će biti učitana u skladište, inače će biti moguće učitati je kasnije pritiskom na gumb *Automatski utovar u skladištu* koji se nalazi u traci s alatima.

**Upozorenje fiktivne stavke**: ako je aktivno, tijekom učitavanja provjerava se postoje li fiktivne stavke. Ako su prisutni, daje se poruka za dovršetak postupka; ako je odgovor potvrdan, cijela dostavnica će biti učitana (osim očito izmišljenih artikala). Ako odgovorite negativno, dostavnica se neće učitati. Fiktivna stavka može biti bez popisa materijala prve razine ako je u MRP parametrima deklarirana s vrstom nabave nabave, inače će registracija utovara dati poruku o pogrešci ako postoje fiktivne stavke u dokumentu koji se učitava.

### Analitika

U ovoj kartici određujete prioritet s kojim želite dohvatiti mjesto troška ili mjesto profita u retku dostavnice.

Možete promijeniti prioritete pomoću gumba:  

> **Premjesti gore**       
> **Premjesti dolje**.

*Zadane vrijednosti*: CDC ili CDP se dohvaćaju iz naplaćene vrste ako postoji. Dodatne informacije potražite u tablici [Vrste prometa kupnje](/docs/configurations/tables/purchase/purchase-invoices-type). Ako nije prisutan u fakturiranoj vrsti, sustav će ga potražiti u *Šifarniku dobavljača*. Ako nije prisutan, pretražit će se u *Šifarniku artikla* i potom na razini *Skladišta*.

**Preračun**: ako je aktivno, ponovno izračunava troškovne/profitne centre prema odabranom prioritetu.

**Ocijeni prioritet za svaku dimenziju**: ako je aktivirano, ova oznaka omogućuje procjenu svake prioritetne vrijednosti unesene na vrhu kako bi se utvrdilo postoje li dodatne dimenzije koje još nisu valorizirane. Na primjer, pretpostavimo da imamo u Šifarniku artikla centar troška za dimenziju *Business unit* i u Tipu fakturiranja kupnji dimenziju *Direkcijska*. Ako oznaka nije aktivna, sustav procjenjuje samo CdC prisutan u Šifarniku artikla; ako je oznaka aktivna, nakon što se učita CdC iz Šifarnika artikla, sustav također procjenjuje dimenziju prisutnu u Tipu fakturiranja kupnji (u našem primjeru dimenzija *Direkcijska*) i ako se razlikuje od onih koje je već obradio (*Business Unit*), učitava centar i nastavlja s provjerom drugih prioriteta.