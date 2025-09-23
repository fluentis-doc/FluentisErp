---
title: Parametri ordini clienti
sidebar_position: 2
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako želite ručno konfigurirati, pogledajte kontrolni popis na povezanoj stranici.   
:::

Parametri faktura prodaje omogućuju osnovnu postavku za ispravno upravljanje, u skladu sa specifičnim zahtjevima svake pojedine tvrtke. Prozor povezan s ovim parametrima sastoji se od 4 različitih kartica: Općenito, Ispunjenje,Otprema  i Analitika. 

### Općenito

**Upravljanje dvostrukom mjernom jedinicom**: ako je aktivno, u redovima narudžbe bit će prikazane dvije kolone Alternativna JM i Alternativna Količina, stoga će biti moguće upravljati dvostrukom jedinicom mjere, uzimajući uvijek u obzir da je to glavna jedinica mjere na kojoj se provode kontrole za ispunjenje.    

**Proposta automatica UM alternativa**: ovaj flag postaje uređiv samo ako je aktiviran flag za upravljanje dvostrukom jedinicom mjere i omogućuje prikaz alternativne jedinice mjere postavljene u kartonu artikla u odgovarajućem stupcu 'UM alternativa'; ako nije aktivno, jedinica mjere se ne predlaže.     

**Provjerite dostupnost**: ovaj flag i ostali povezani s kontrolom, vizualizacijom i obveznošću s obzirom na područje, u trenutnoj verziji nisu upravljani.     

**Referenca naloga**: ako je ovaj flag postavljen, u projektu kreiranom iz narudžbe bit će umetnut Referenca na narudžbu u naslov projekta; sastav napomene mora biti specificiran u polju *Opis* prema parametrima opisanim u oznaci.

**Ricerca prezzi articoli in tutti i listini predefiniti**: prilikom traženja cijene i popusta za artikl unutar narudžbe, sustav slijedi pravila temeljena na postavkama u evidenciji kupca, u sekciji *Cjenici*. Ako je za određenu vrstu cjenika aktivirana opcija 'zadano', pretraživanje cijena i popusta vršit će se samo za tu specifičnu vrstu cjenika; ako zastavica "zadano" nije aktivna, sustav će proširiti pretraživanje na sve vrste cjenika, prateći redoslijed prioriteta. U praksi, sa zastavicom 'zadano' aktiviranom, sustav će prvo tražiti cjenik važeći za zadanu vrstu; ako nema rezultata, nastavit će s ostalim vrstama cjenika prema unesenom prioritetu. Međutim, ako u evidenciji kupca ne postoji nijedna vrsta cjenika postavljena kao 'zadano', a postoje samo prioriteti, ovaj parametar neće utjecati na pretraživanje, čak i ako je aktivan.

**Proponi provvigione per gli articoli omaggio**: S ovim flagom bit će predložene provizije za agente i za stavke artikala tipa poklon, kao što je slučaj za stavke tipa Katalogizirani artikl.   

**Dozvoli rabat za stavke promotivnih poklona**: S ovim flag-om bit će uneseni popusti na iznos stavke i za redove artikala tipa poklon.  

**Obvezni omjer između kutija i količine**: ako je flag postavljen, korisnik je prisiljen unijeti količinu koja odgovara ili je višekratnik broja paketa definiranog u kartici *Težine/Dimenzije* u kartici artikla; ako količina nije broj paketa ili njegov višekratnik, pojavljuje se poruka: “Artikal se ne može prodavati u količini manjoj ili koja nije višekratnik.      

**Predloži ekonomski lot**: ako je flag postavljen, kao količina će se predložiti ekonomska serija, a ako je količina manja od ekonomske serije, pojavit će se poruka “Količina ne može biti manja od …”.       

**Provjeri zalihe artikala**: ako je postavljen, ovaj flag će prikazati iskačuću obavijest u slučaju da se u narudžbu unesu artikli koji su u kartonu postavili flag "Na isteku" i datum kada artikal ide u istek; ova provjera sprječava prodaju artikala koji se više neće proizvoditi ili dopunjavati.     

**[Omogući widget pojednostavljenih popusta](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ovog flaga u odjeljku Artikli prikazuju se dvije nove kolone: *Popusti artikla* i *Konačni popusti*. Kolona *Popusti artikla* èje uređiva i prikazuje popuste koji se automatski primjenjuju na temelju postavki vezanih za kupca, artikl, cjenik ili kategoriju popusta. Korisnik može direktno unositi, mijenjati ili brisati popuste u toj koloni. Za korištenje ovog widgeta potrebno je, osim aktiviranja flaga, u tipu narudžbe specificirati koji tip popusta koristiti.  

**Koristi stavku kupca**: ako je postavljeno, ovaj flag će umetnuti, u mrežu artikala narudžbe, kolone za Kod i Opis kupca unesene u kartonu artikla, na kartici Kupac. 

**Koristi barkod**: ako je aktivirano, ovaj flag će umetnuti, u mrežu artikala narudžbe, kolonu za prikaz barkoda artikla.

**Dozvoli izmjenu proizvodne narudžbe povezane s narudžbom kupca**: ako je aktivno, omogućuje izmjenu povezanog proizvodnog naloga za narudžbu.

**Obvezna šifra korisnika**: ovaj flag čini obaveznim popunjavanje polja *Operater* u zaglavlju.  

**Blokiraj unos dokumenta na praznike prema tvorničkom kalendaru**: ako je aktivno, sustav ne dopušta unos ponude na praznike (prvo se provjerava Kalendar tvornice tvrtke, a zatim Kalendar proizvodnih kapaciteta); ako nije aktivno, sustav ne provodi nikakvu provjeru i dopušta unos dokumenta.

**Utilizzo il configuratore matrici**: ovaj parametar aktivira upravljanje matricama.     

**Proširi sastavnicu materijala**: ako je aktivno, u trenutku unosa artikla, on će biti zamijenjen prvim nivoom njegove liste materijala, ako postoji; tako da umjesto artikla “gotov proizvod” narudžba će biti popunjena listom materijala ovog artikla.   

**Predloži komercijalne podatke za ručno razdvojenu strukturu proizvoda**: ako je flag aktiviran, označava da će za komponente prvog nivoa unesene pomoću flag-a “Razdvoji strukturu proizvoda” biti ponuđene liste cijena, popusti i provizije kao i za kodirane artikle.     

**Upravljanje verzijom strukture proizvoda**: ako je flag aktiviran, omogućuje u kartici artikala stupac Verzija strukture proizvoda za izbor verzije različite od one koja se automatski koristi kao zadana.    

**Ne grupiraj redove prilikom unosa iz strukture proizvoda**: ako je flag aktiviran, omogućuje unošenje komponenti prvog nivoa strukture u različite retke čak i ako imaju isti šifru materijala.        

### Izuzimanje

U ovoj kartici su prisutna sljedeća polja:     

**Plaćanje**: određuje vrijednost koja se koristi za plaćanje narudžbe kupca u slučaju višestrukog ispunjenja projekata u Narudžbi: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Primatelj**: određuje vrijednost koja se koristi za primatelja narudžbe kupca u slučaju višestrukog ispunjenja projekata u Narudžbi: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Grupiranje po vrsti i rješenju plaćanja**: specificira da će narudžbe kupaca biti grupirane po vrsti i rješenju plaćanja prilikom ispunjenja iz obrasca za pretraživanje Narudžbi s tipkama Izvršenje otpremnice/primke ili Izvršenje računa.

**Grupiranje po odredištu**: specificira da će narudžbe kupaca biti grupirane prema primatelju i odredištu prilikom ispunjenja iz obrasca za pretraživanje Narudžbi s tipkama Izvršenje otpremnice/primke ili Izvršenje računa.

**Prikaz mreže ispunjenja**: ako je aktivno, flag omogućuje način prikaza u mreži u obrascu za ispunjenje prodajnih narudžbi.

**Prikaz stabla ispunjenja**: ako je aktivno, flag omogućuje način prikaza u obliku stabla u obrascu za ispunjenje prodajnih narudžbi.

### Istovar

**Prioritet parametara unesenih za svaku liniju narudžbe**: ako je aktivno, skladište i uzrok otpisa čitaju se iz redaka narudžbe, dok ako nije aktivno, koristit će se skladište i uzrok uneseni u sljedećim poljima (*Skladište* i *Razlog skladišta*).

### Analitika

Ova KARTICA specificira kojim prioritetom se dohvaća Centar troškova (CDC) ili Centar profita (CDP) u retku dokumenta.        
Prioriteti se mogu mijenjati pomoću tipki **Premjesti gore**![](/img/neutral/common/move-up.png) i **Premjesti dole**![](/img/neutral/common/delete-cc.png).     
*Zadane vrijednosti*: CDC ili CDP dohvaćaju se iz vrste fakturiranog, ako je prisutna.      
Za dodatne informacije pogledajte tablicu [Vrsta fakturiranog](/docs/configurations/tables/sales/sales-turnover).      
Ako nije prisutno u *Vrsti fakturiranog* sustav će ga tražiti u *Podacima kupca*. Ako nije ni tamo, tražit će u kartoteci artikla, a potom na razini skladišta.         
Flag **Procijeni prioritet za svaku dimenziju** omogućava da se u dokumentima CDC/CDP grupiraju po dimenziji, u kartici Analitika.