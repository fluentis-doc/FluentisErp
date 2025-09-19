---
title: Parametri podugovaranja
sidebar_position: 2
tags: [Radni Račun]
---

Kroz ovaj prozor postavljaju se svi parametri koji se odnose na upravljanje podugovaranjem i, točnije, način na koji se moraju provoditi kretanja skladišta izazvana procedurama samog modula.

## Općenito

#### Podaci navedeni u narudžbama  


> **Regenerirati materijale na ažuriranju stavke**: Ako je flag aktiviran, svaki put kada se izvrši izmjena na retku artikla prisutnom na tabu *Artikli za proizvesti* narudžbe radnog naloga, procedura regenerira informacije vezane uz materijale koji se trebaju isporučiti i upotrijebiti, koje se unose u posljednjem tabu same narudžbe.  
>   
> **Podaci za predložene materijale**: prikazuje 4 različite mogućnosti koje korisnik ima da bi postupak automatski predložio materijale na kartici Materijali za isporuku narudžbe podugovarača.   
> Mogućnosti su sljedeće:  
> 1. *Od zadnje isporuke obavljene istom kooperantu*: posljednja kooperantska narudžba generirana za istog kooperanta i u kojoj se nalazi ista stavka koja se proizvodi.     
> 2. *Proširenje razine iz strukture sastavnice*:  provjeravate sastavnicu artikla umetnutog u karticu Stavke za proizvodnju;       
> 3. *Isporuka iste stavke koja se proizvodi*: umetnite istu stavku umetnutu u karticu Predmeti za proizvodnju u karticu Materijali za isporuku.     
> 4. *Nema materijala*: aterijal nije predložen na kartici Materijali za isporuku.    
> 5. *Iz proizvodnog naloga*: koristi se za narudžbe vanjske obrade generirane putem puštanja planirane narudžbe vanjske obrade ili iz narudžbe proizvodnje s vanjskom fazom.  
>
> **Verzije**: omogućuju odabir verzije popisa materijala.

 #### Razmotrite raspoloživosti iz     

> Ovaj odjeljak omogućuje korisniku da odluči hoće li uzeti u obzir dostupnost materijala iz **Podizvođač** / **Proizvodnja** / **Nabava** / **Skladište** / **Prodaja**; svaki od ovih flagova označava namjeru korisnika da postupak kreiranja narudžbe za kooperaciju uzme u obzir dostupnost materijala na temelju informacija koje dolaze iz pojedinih funkcionalnih područja ERP-a.
Na primjer, ako korisnik odluči aktivirati flag samo za Nabavu, a ne za Prodaju, to znači da će se uzimati u obzir dostupnosti koje dolaze iz narudžbi dobavljačima, otpremnica, ulaznih računa i zahtjeva za nabavom, dok se one koje dolaze iz narudžbi kupaca, otpremnica i izlaznih računa neće uzimati u obzir.

#### Gotovi proizvodi

**Predložena je zadnja cijena rada**: o je aktiviran, omogućuje vam da u nalogu za podugovaranje, u okviru s jediničnom cijenom obrade na kartici *Stavke za proizvodnju*, predložite cijenu zadnje narudžbe za podugovaranje izdane za tu stavku za istog izvođača.
>   
> **Razmotrite količine prema ekonomskom lotu** i **Razmotri višekratnike ekonomskih lotova**: omogućuje odabir, prilikom unosa artikla u tab *Artikli za proizvodnju* narudžbe vanjske obrade, hoće li se uzeti u obzir količine samih artikala na temelju ekonomskog lota, i/ili eventualno uzeti u obzir i višekratnici lota.

**Tip otpremnice**: u ovoj sekciji se postavlja [Tip otpremnice](/docs/configurations/tables/sales/delivery-notes-type) koji se treba predložiti kao zadani prilikom korištenja procedure za kreiranje otpremnice za isporuku materijala kod podizvođača. Ova vrsta otpremnice automatski će koristiti skladište i šifru knjiženja postavljene u odgovarajućim padajućim izbornicima pod stavkom "Isporuke materijala podizvođačima" koja se nalazi u prozoru parametara za podizvođače.

**Zadana mjerna jedinica za volumen**: permette di indicare l'unità di misura da utilizzare di default per i volumi.   

**Zadana mjerna jedinica za težinu**: permette di indicare l'unità di misura da utilizzare di default per i pesi.   

**Valorizacija radnog materijala naspram troška:**: Omogućuje definiranje treba li se vrednovanje obrade materijala vršiti po zadnjoj ili po prosječnoj cijeni. Radi se, dakle, o metodi kojom se određuje hoće li se materijali koje koriste kooperanti pripisivati obradi koristeći zadnju cijenu ili prosječnu cijenu unesenu u šifarniku artikla. Osim toga, moguće je, odabirom flagova **Lotovi** i/ili **Nalog proizvodnje**, predložiti da se kao cijena materijala koristi zadnja/prosječna cijena za odgovarajući lot i/ili proizvodni nalog, ovisno o tome koji su flagovi aktivirani.  

#### Izuzimanje  

> **Prikaz mreže za isporuku**: ako je flag aktivan, u procedurama ispunjenja narudžbi kroz DDT isporuke ili povrat, bit će prikazana mreža za isporuku.
> 
> **Prikaz stabla izvršenja**: ako je flag aktivan, u procedurama ispunjenja narudžbi kroz DDT isporuke ili povrat, bit će prikazana hijerarhijska struktura. Ova dva flaga mogu biti aktivirana istovremeno.   

**Obvezna šifra korisnika**: Ako je flag aktivan, određuje treba li pri unosu DDT isporuke za kooperaciju obavezno unijeti šifru operatera.  

**Automatski prijedlog serijskog broja za vraćeni artikl ako je također zabilježen kao potrošeni materijal**: u povratima iz kooperacije, ako je flag aktivan, sustav automatski predlaže serijski broj za artikl.  

**Provjera dostupnosti**: ako je flag aktivan, omogućuje odlučiti hoće li procedura provjeravati dostupnost na temelju flagova postavljenih u odjeljku *Uzimanje u obzir dostupnosti iz*.  

**Obvezna raspoloživost**: ako je flag aktivan, sprječava unos materijala u naloge za kooperaciju ako nema dostupnosti na datum moguće isporuke kooperantu.  

**Nema materijala u dostavi**: ako je aktivno, osigurava da u tabu *Materijali za isporuku* nije unesen nijedan artikal za nijedan artikal koji treba proizvesti.

**Automatski utovar/istovar**: ako je aktivno, omogućuje korisniku da automatski izvrši izlazne skladišne pokrete čim se otisne DDT za isporuku. To omogućuje preskočiti korak otpreme DDT-a za isporuku vanjske obrade.

**Registracija zaliha s datumom dokumenta**: 
Za registraciju **Otpremnica**, ako je ovaj flag aktivan, koristi se *Datum transporta* (prisutan u kartici *Sažeci* > *Primatelj*), ako je postavljen, inače se uzima u obzir datum kreiranja dokumenta prisutan u zaglavlju. Ako flag nije aktivan, otprema unutar dokumenta uvijek se vrši s trenutnim datumom.  
Za registraciju **Povrata vanjske obrade**: ako je flag aktivan, uvijek se koristi *Datum povrata* prisutan u zaglavlju; ako nije aktivan, registracija unutar dokumenta vrši se s *Datumom dokumenta* prisutnim u zaglavlju.

**Blokiraj umetanje dokumenata na državni praznik**: ako je aktivno, sprječava unos narudžbe, DDT-a i povrata vanjske obrade na praznične datume.

**Provjeri referentnog podizvođača za stavke**: ako je aktivno, omogućuje korisniku da postavi proceduru za kreiranje narudžbi vanjske obrade da provjeri ima li artikal koji se unosi u karticu *Artikala za proizvodnju*, kao preferiranog dobavljača, vanjskog izvođača unesenog u zaglavlje same narudžbe.

**Lotti e numeri serali obbligatori**: ako je aktivno, obvezuje korisnika da unese u sve dokumente seriju artikla unesenog u samom dokumentu, pod uvjetom da se artikal upravlja po serijama ili serijskim brojevima.

**Preračunaj prijevoz**: ovaj flag osigurava da se na tabu **Prenos** DDT prikazuju ukupne težine, volumeni i paketi redaka dokumenta; bez ovog flag-a, polja neće biti popunjena.

**Provjeri zalihe artikala**: ako je flag aktivan, sustav provjerava dostupnost artikala u redovima narudžbe i upozorava ako je artikl pri isteku zaliha, to jest, ako je u [šifarniku artikla](/docs/erp-home/registers/items/create-new-item) aktiviran flag  *Pri isteku*.  

**Aktiviraj kontrolu kvalitete**: u pripremi.  

**Upravljanje dvostrukom jedinicom mjere**: samo ako je flag aktivan, sustav može upravljati alternativnom jedinicom mjere u dokumentima za kooperaciju.  

**Automatski prijedlog alternativne jedinice mjere**: ako je flag aktivan, sustav automatski predlaže količinu prema alternativnoj jedinici mjere, pod uvjetom da je u šifarniku artikla postavljena kao zadana. Ovaj flag moguće je aktivirati samo ako je prethodni flag također aktivan.  

**Uzimanje u obzir skladišta prema tipu DDT povrata**: omogućuje odabir hoće li se skladišta uzimati u obzir prema tipu DDT povrata ili prema tipu DDT isporuke, umjesto da se koriste postavke iz izbornika *Isporuke materijala kooperantima* i *Povrat proizvoda*.

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

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, tipke i polja](/docs/guide/common).