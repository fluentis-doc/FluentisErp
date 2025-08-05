---
title: Parametri podugovaranja
sidebar_position: 2
tags: [Radni Račun]
---

Kroz ovaj prozor postavljaju se svi parametri koji se odnose na upravljanje podugovaranjem i, točnije, način na koji se moraju provoditi kretanja skladišta izazvana procedurama samog modula.

### Općenito

**Tip otpremnice**  
U ovom odjeljku postavljate vrstu prodajne otpremnice koja mora biti predložena prema zadanim postavkama pri korištenju postupka izrade dostavnice podugovaranja. Ova vrsta otpremnice automatski će koristiti skladište i razlog postavljen u odgovarajućim kombinacijama stavke 'Isporuke materijala podizvođačima' koja se nalazi u prozoru s parametrima podugovaranja. 

**Obavezna šifra operatera**: ako je aktivna, omogućuje vam da odlučite je li potrebno unijeti šifru operatera prilikom unosa otpremnice podugovora.

**Podaci za predložene materijale**: prikazuje 4 različite mogućnosti koje korisnik ima da bi postupak automatski predložio materijale na kartici Materijali za isporuku narudžbe podugovarača.   
Mogućnosti su sljedeće:  
1. *Od zadnje isporuke obavljene istom kooperantu*: posljednja kooperantska narudžba generirana za istog kooperanta i u kojoj se nalazi ista stavka koja se proizvodi;    
2. *Proširenje razine iz strukture sastavnice*: provjeravate sastavnicu artikla umetnutog u karticu Stavke za proizvodnju;;  
3. *Isporuka iste stavke koja se proizvodi*: umetnite istu stavku umetnutu u karticu Predmeti za proizvodnju u karticu Materijali za isporuku;   
4. *Nema materijala*: materijal nije predložen na kartici Materijali za isporuku.  

**Kontroliraj raspoloživot**: ako je aktivno, osigurava da nijedna stavka nije unesena u karticu *Materijali za isporuku* za bilo koju stavku koja se proizvodi.

**Nema materijala u dostavi**: se attivo, fa in modo che nel tab *Materiali da consegnare* non sia inserito alcun articolo per nessun articolo da produrre.

**Raspoloživost materijala**: ako je aktivan, osigurava da postupak također uzima u obzir dostupnost materijala koji će se koristiti tijekom povrata od podugovaranja.  

**Automatski utovar/istovar**: ako je aktivan, omogućuje korisniku da osigura da se izlazna kretanja skladišta dogode automatski čim se otpremnica ispiše. To vam omogućuje da preskočite korak preuzimanja dokumenata isporuke podugovora.

**Blokiraj umetanje dokumenta na državni praznik**: ako je aktivno, sprječava umetanje narudžbe, otpremnice i povrata podugovora na praznične dane. 

**Trošak nula ako nedostaje cjenik**: ako je aktivan, omogućuje umetanje artikla u karticu *Proizvodni artikli* narudžbe podugovarača bez postupka umetanja konačnog troška artikla preuzetog iz njegove baze podataka kao jedinične cijene obrade; stoga se upisuje jedinična cijena jednaka nuli.  

**Provjeri referentnog podizvođača za stavke**: ako je aktivna, omogućuje korisniku da osigura da postupak stvaranja narudžbe za podugovaranje provjerava je li artikal koji se umeće na karticu *Artikli za proizvodnju* ima, kao preferiranog dobavljača, izvođača uključenog u zaglavlje same narudžbe.

**Obvezna raspoloživost**: ako je aktivna, sprječava uključivanje materijala u narudžbe podugovarača u slučaju nedostupnosti na datum bilo koje isporuke podizvođaču.

**Predložena je zadnja cijena rada**: o je aktiviran, omogućuje vam da u nalogu za podugovaranje, u okviru s jediničnom cijenom obrade na kartici *Stavke za proizvodnju*, predložite cijenu zadnje narudžbe za podugovaranje izdane za tu stavku za istog izvođača.

**Valorizacija radnog materijala naspram troška**: omogućuje vam da definirate treba li se valorizacija obrade materijala odvijati po konačnom trošku ili po prosječnom trošku. Stoga je to metoda za odlučivanje treba li materijale koje koriste podizvođači pripisati obradi koristeći konačni trošak ili prosječni trošak među onima koji su uključeni u registar predmeta. Nadalje, moguće je, odabirom oznaka *Lotovi* i/ili *Proizvodnog naloga*, predložiti kao trošak materijala konačni/prosječni/standardni trošak za odgovarajuću seriju i/ili proizvodni nalog na temelju aktiviranih oznaka.

**Verzija**: omogućuje odabir verzije popisa materijala.

**Podaci predloženog materijala u narudžbi podizvođača** sastoje se od 4 druga odjeljka:

1. **Razmotrite raspoloživost iz**: moguće je odlučiti hoćete li ili ne uzeti u obzir dostupnost koja dolazi iz Ugovorenog posla / proizvodnje / nabave / skladišta / prodaje; svaka od ovih oznaka označava želju korisnika da osigura da postupak kreiranja narudžbe za podugovaranje uzima u obzir dostupnost materijala na temelju informacija koje dolaze iz pojedinačnih područja ERP primjene. Na primjer, ako korisnik odabere aktivirati oznaku samo na Kupnji, a ne na Prodaji, to znači da će se uzeti u obzir dostupnost koja dolazi iz narudžbi dobavljača, dostavnica i faktura o kupnji i zahtjeva za kupnju, a ne ona koja dolazi iz narudžbi kupaca, otpremnica i prodajnih računa;

2. **Gotovi proizvodi** (zastavica): omogućuje vam da odaberete, kada ubacujete stavku u karticu *Predmeti za proizvodnju* narudžbe podugovarača, hoćete li uzeti u obzir količine samih stavki na temelju ekonomske serije i/ili eventualno uzeti u obzir višestruke lot;

3. **Materijali**: omogućuje vam da odaberete, kada ubacujete stavku u karticu *Stavke za proizvodnju* podugovaračke narudžbe, želite li uzeti u obzir količine samih stavki na temelju ekonomske serije za materijale koji se isporučuju i/ili eventualno uzeti u obzir i višekratnici serije;

**Regenerirati materijale na ažuriranju stavke**: ako je zastavica aktivirana, svaki put kada se napravi promjena u retku artikla prisutnom na kartici *Stavke za proizvodnju* narudžbe podugovaratelja, postupak ponovno generira informacije koje se odnose na materijale koje treba isporučiti i koristi se umetanje u posljednju karticu samog naloga;;

4. **Skladišta**: omogućuje odabir hoće li se skladišta razmatrati prema vrsti povratne otpremnice ili vrsti otpremnice, umjesto pomoću postavki unesenih u odgovarajućim kombinacijama stavki *Isporuke materijala trećim osobama* i *Povrat proizvoda*.

### Skladišta

**Isporuke materijala za W.I.P. podizvođača**   
U ovom se odjeljku postavlja skladište i povezani razlog koji se mora uzeti u obzir za istovar materijala namijenjenih podizvođačima u slučaju da se koristi upravljanje skladištem W.I.P., što se može aktivirati u [Parametrima proizvodnog naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro). U ovom slučaju, sve podugovaračke narudžbe kreirane putem *Planiranog izdavanja narudžbe* ili izravno iz proizvodnog naloga koristit će ovo skladište i nasumično za istovar materijala unesenih u kartici [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) podugovaračke narudžbe.    

**Dostave materijala podizvođaču**   
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za istovar materijala namijenjenih podizvođačima. Stoga je skladišni skup skladište iz kojeg će se preuzeti materijali umetnuti u karticu [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) podugovaračkog naloga. Oni će se koristiti samo u ručno kreiranim podizvođačkim narudžbama ako je aktivan W.I.P. nije aktivan će se uzeti u obzir u svim slučajevima.     

**Potrošnja  korištenih materijala**  
U ovom odjeljku postavljeno je skladište i povezani razlozi koji se moraju uzeti u obzir za istovar materijala koje su podizvođači upotrijebili. Stoga je skladišni skup skladište iz kojeg će se preuzeti materijali umetnuti u karticu Materijali naloga za povrat podugovaratelja. Molimo poveznicu kada artikl bude kreiran.

**Utovar materijala za podizvođača**  
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za utovar materijala namijenjenih podizvođačima. Stoga je skup skladišta skladište u koje će se utovariti materijali umetnuti u karticu Materijali za isporuku podugovorne narudžbe. Ovi podaci su preuzeti iz drugog razloga umetnutog u tablicu razloga koji odgovara razlogu koji istovaruje materijale namijenjene podizvođačima (tj. razlog postavljen u posebnom kombiniranom okviru odjeljka *Isporuke materijala podizvođačima*).

**Dostave materijala između podizvođača**   
U ovom se odjeljku postavlja skladište i povezani razlog koji se mora uzeti u obzir za premještanje materijala od jednog izvođača do drugog.   

**Povratak W.I.P artikla**  
U ovom se odjeljku postavlja skladište i povezani razlog koji se mora uzeti u obzir za utovar poluproizvoda koje su izradili podizvođači; to će se koristiti u slučaju svih vanjskih faza koje nisu zadnja faza posla ciklus. Stoga je skup skladišta skladište u koje će se utovariti artikli umetnuti u karticu Stavke Naloga za povrat podugovarača.  

**Povrat gotovog artikla**  
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za utovar gotovih proizvoda/poluproizvoda koje su izradili kooperanti. Ovo će se koristiti u slučaju da je vanjska faza zadnja faza proizvodnog ciklusa. Stoga je skup skladišta skladište u koje će se utovariti artikli umetnuti u karticu Stavke Naloga za povrat podugovarača.  

**Materijal vraćen**  
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za povrate utovara. Stoga je skladišni skup skladište u koje će se učitati artikli umetnuti u karticu Materijali zaposlenika povrata podugovarača i s kojim je povezana vraćena količina.

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, gumbi i polja](/docs/guide/common).