---
title: Parametri ulaznih računa
sidebar_position: 4
tags: [fatture di acquisto]
keywords: [fatture di acquisto]
---

Parametri ulaznih računa omogućuju osnovno postavljanje za ispravno upravljanje prema specifičnim zahtjevima svake pojedine tvrtke. 

Prozor se sastoji od gumba i tri različite kartice: *Općenito*, *Učitavanje* i *Analitika*. 

### Općenito

**Upravljanje duplom mjernom jedinicom**: aktiviranjem ove zastavice moguće je upravljati alternativnim mjernim jedinicama na ulaznim računima. One se moraju unijeti za svaki redak artikla u kartici *Podaci*.

**Automatski prijedlog alternativne jedinice mjere**: ova provjera se aktivira samo ako je aktivno *Upravljanje dvostrukim mjernim jedinicama*. Kada se unese artikl koji u svom šifarniku ima alternativnu mjernu jedinicu postavljenu kao zadanu, ta se mjera automatski predlaže kao alternativna mjera artikla, a također se izračunava i alternativna količina koristeći faktor konverzije te mjere.  

**Trošak nula ako nedostaje cjenik**: ako je aktivno, u slučaju da ne postoji važeći cjenik, cijena će se popuniti s vrijednošću nula. Ako ova stavka nije označena, polje će biti popunjeno s posljednjom cijenom artikla, ako je dostupna.

**Vrsta računa**, **Stopa PDV-a**, **Vrsta računa za kupnju**: ovi parametri se koriste kao zadani prilikom izrade računa iz narudžbi.  

**Lotovi i S. B. (Serijski broj) obavezni**: ako je aktivan, prisiljava korisnika da unese lot i serijski broj na razini retka stavke za sve stavke za koje je ovo upravljanje predviđeno. Ako nisu aktivni, lot i serijski broj nisu obvezni podaci. Preporuča se da se ova zastavica uključi ako koristite upravljanje serijskim stavkama. 

**Traži cijenu stavke u svim zadanim cjenicima**: ovaj parametar se koristi za traženje cijena u popisima dobavljača; pretraga se odvija u cjenicima zadanog tipa u bazi dobavljača čak i ako cjenici nisu važeći (važeći cjenici su oni koji imaju početni datum važenja < = današnjeg datuma i imaju krajnji datum važenja tj. nula ili > = današnji datum). 

**Dopusti popuste za stavke promotivnih poklona**: ako je aktivno, dopušta umetanje popusta na besplatne artikle;

**Koristi predmet dobavljača**: ako je aktivno, polje za unos šifre stavke dobavljača također se predlaže u mreži stavke dokumenta. Ako nije aktivirano, ovo polje neće biti vidljivo;

**Provjeri zalihe artikala**: ako je aktivirano, sustav provjerava dostupnost artikala unesenih na račun i obavještava ako je artikl u odlasku, odnosno ako je u [Šifarniku artikla](/docs/erp-home/registers/items/create-new-items/item-registry/generality) zastavica *U odlasku* aktivna.

**Ambalažno računovodstvo**: omogućuje knjiženje, u općem računovodstvu, i redaka s artiklima od materijala za pakiranje, koji se obično upravljaju kako bi se provjerile zalihe [Pakiranja za napraviti](/docs/configurations/tables/logistics/package-to-be-returned).

**Održavanje cijene narudžbe za zagrade**: koristi se za ispunjavanje narudžbi u dostavnici ako se obrađena količina razlikuje (obično djelomično) od naručene količine za koju je unesen popust za cijenu ili količinski okvir. Ako cijena ili popust ne ovisi o isporučenoj količini, već samo o količini u narudžbi, ova zastavica mora biti aktivirana, ako se umjesto toga cijena ili popust u fazama ne smiju umetnuti u dokument o isporuci u slučaju da ispunjenje ne traje mjesto za ukupnu količinu narudžbe zastavica ne smije biti aktivirana.  

**Aktiviraj Kontrolu Kvalitete**: work in progress.

### Utovar

**Kreiraj zapis s datumom dokumenta**: ako je ova zastavica aktivna, knjiženje u skladištu vrši se s istim datumom kao i datum računa. Ako nije aktivna, to će se izvršiti s *Datumom učitavanja* navedenim u zaglavlju računa, ako je prisutan inače s  *Datumom knjiženja u skladištu* navedenim u postupku [Zaduženje skladišta ulaznim računima](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). Ako se knjiženje vrši unutar računa putem gumba za *Automatsko učitavanje u skladištu* i *Datum učitavanja* nije unesen, tada će se koristiti današnji datum. 

**Prioritet predloška skladišta i istovara**: ako je aktivno, prilikom knjiženja računa u skladište koriste se vrijednosti postavljene u donjim poljima: **Skladište** i **Predložak skladišta**. Ako zastavica nije aktivna, skladište i predložak učitavanja čitaju se iz redaka računa. Ako nisu navedeni, neće biti moguće izvršiti automatsko učitavanje unutar ulaznog računa, ali se može koristiti postupak [Zaduženje skladišta ulaznim računima](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/) odabirom zastavice "*Prihvati kao skladište i predložak slijedeće podatke:*" u kartici *Parametri* i navođenjem *Skladišta* i *Predložak* koji se koriste. 

**Automatski utovar/istovar**: ako je aktivirano, prilikom aktivacije zastavice *Kontrolirana* u zaglavlju dokumenta primit ćete poruku koja podsjeća da je parametar automatskog učitavanja/istovara aktivan i pita želite li nastaviti. Pritiskom na "*Da*" račun će se učitati u skladište, inače će biti moguće učitati ga kasnije pritiskom na gumb *Automatsko učitavanje* u skladištu koji se nalazi u traci s alatima. 

**Upozorenje fiktivne stavke**: provjerava se jesu li tijekom učitavanja u skladište prisutni fiktivni artikli u redovima računa. U slučaju da su prisutni, bit će zatraženo hoćete li ipak izvršiti učitavanje, naravno bez tih artikala, ili potpuno poništiti skladišni pokret. Fiktivni artikl može biti bez osnovnog popisa prvog nivoa ako je u MRP parametrima deklariran s tipom nabave kao kupovina, inače će knjiženje učitavanja dati poruku o grešci ako postoje fiktivni artikli u dokumentu koji se učitava.

### Analitika

U ovoj kartici određujete prioritet s kojim želite dohvatiti mjesto troška (CoC) ili mjesto profita (CdP) u retku dokumenta.

Možete promijeniti prioritete pomoću gumba:  
> **Premjesti gore**       
> **Premjesti dolje**.

*Zadane vrijednosti*: CDC ili CDP se dohvaćaju iz naplaćene vrste ako postoji. Dodatne informacije potražite u tablici [Vrste prometa kupnje](/docs/configurations/tables/purchase/purchase-invoices-type). Ako nije prisutan u fakturiranoj vrsti, sustav će ga potražiti u *Šifarniku dobavljača*. Ako nije prisutan, pretražit će se u *Šifarniku artikla* i potom na razini *Skladišta*.

**Preračun**: ako je aktivan, ova zastavica ponovno izračunava troškovne/profitne centre prema odabranom prioritetu.

**Ocijeni prioritet za svaku dimenziju**: ako je aktivirano, ova oznaka omogućuje procjenu svake prioritetne vrijednosti unesene na vrhu kako bi se utvrdilo postoje li dodatne dimenzije koje još nisu valorizirane. Na primjer, pretpostavimo da imamo u Šifarniku artikla centar troška za dimenziju *Business unit*  i u tipu fakturiranja kupnji dimenziju *Direkcijska*. Ako oznaka nije aktivna, sustav procjenjuje samo CdC prisutan u Šifarniku artikla; ako je oznaka aktivna, nakon što se učita CdC iz Šifarnika artikla, sustav također procjenjuje dimenziju prisutnu u tipu fakturiranja kupnji (u našem primjeru dimenzija *Direkcijska*) i ako se razlikuje od onih koje je već obradio (*Business Unit*), učitava centar i nastavlja s provjerom drugih prioriteta