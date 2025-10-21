---
title: Predlošci zapisa skladišta
sidebar_position: 9
---

:::important Čemu služi 
Tablica Predlošci zapisa skladišta u Fluentisu ključna je za upravljanje skladišnim operacijama, omogućujući definiranje i prilagodbu razloga koji se koriste za knjiženje ulaza i izlaza robe. Korisnici jednostavno mogu dodavati nove razloge u tablicu, unoseći obavezne podatke poput skladišta, koda razloga

Jedna od glavnih značajki ove tablice je mogućnost dodjele specifičnih razloga za svako skladište, što daje veliku fleksibilnost u prilagodbi poslovnih procesa. Svaki razlog može biti definiran kao ulazni ili izlazni, što omogućuje precizno upravljanje utjecajem na stanje zaliha.

Osim toga, moguće je konfigurirati različite opcijske parametre, uključujući vidljivost u određenim područjima i definiranje predloženih troškova za knjiženja. Također, može se aktivirati automatsko ažuriranje prosječnih troškova, zadnjih troškova i prodajnih cijena ovisno o izvršenim skladišnim operacijama. Sve ove značajke čine ovu tablicu ključnim dijelom učinkovite kontrole skladišnih procesa i praćenja troškova.  
:::

Kroz ovaj prozor postavljaju se svi razlozi skladišnih knjiženja potrebni za premještanje artikala u i iz različitih skladišta upisanih u posebnu tablicu *Skladišta*.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.  

**Predlošci zapisa skladišta**

Forma se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Pretraži** kako bi se rezultati prikazali u tablici rezultata.  

**Unos predložaka zapisa skladišta**

Za unos novih kodova potrebno je kliknuti u prazni prvi red tablice ili pritisnuti tipku **Novi**.

**Skladište**: u ovom stupcu korisnik treba postaviti, koristeći padajući izbornik koji dohvaća podatke iz tablice *Skladišta*, šifru skladišta za koje se želi unijeti predložak zapisa;

**Predložak**: u ovom stupcu korisnik unosi šifru predloška zapisa skladišta. Maksimalna duljina je 3 alfanumerička znaka. Moguće je kreirati više predložaka s istom šifrom, pod uvjetom da su za različita skladišta; dva predloška s istom šifrom za isto skladište nisu dopuštena;

**Opis**: u ovom stupcu korisnik unosi opis predloška zapisa skladišta, koji može imati maksimalno 80 alfanumeričkih znakova;

**Tip**: u ovom stupcu korisnik unosi *Tip pokreta* koji karakterizira predložak. Može biti *Zadužen*, gdje se količina pokreta u skladištu bilježi kao pozitivna, ili *Istovaren*, gdje se količina bilježi kao negativna;  

**Vidljivo u nabavi**: ako je aktivno, predložak je vidljiv u području nabave;

**Vidljivo u prodaji**: ako je aktivno, predložak je vidljiv u području prodaje;

**Vidljivo u proizvodnji**: ako je aktivno, predložak je vidljiv u području proizvodnje;

**Vidljivo u podizvođaču**: se attivo, rende visibile la causale nell’area conto lavoro;

**Visibile in Logistica**: se attivo, rende visibile la causale nell’area logistica;

**Predloženi trošak**: u ovom stupcu korisnik bira koji se trošak automatski predlaže prilikom ručnog unosa pokreta. Predloženi trošak može biti posljednji trošak, prosječni trošak, prodajna cijena ili standardni trošak artikla. Vrijednosti dolaze iz kartice artikla. Važno je napomenuti da predloženi trošak ima prioritet nad dokumentima; stoga predlošci koji će se koristiti u dokumentima trebaju imati vrijednost "Nijedan" za predloženi trošak kako bi se uzimao trošak iz dokumenta;  

**Ažuriraj prosječni trošak**: svi pokreti izvršeni korištenjem uzroka koji ima ovaj flag aktiviran doprinose izračunu prosječne ponderirane cijene artikla. Treba napomenuti da se flag ne može aktivirati ili deaktivirati nakon što je uzrok već korišten, čak i za samo jedan pokret skladišta. Obično se ovaj flag aktivira samo za pokrete utovara, ali se može aktivirati i za pokrete istovara, kada se želi osigurati da se prosječna ponderirana cijena artikla izračunava uzimajući u obzir i prodajne cijene povezane s istovarima skladišta samog artikla.  
Prosječna cijena u kartonu artikla ažurira se s iznosom pokreta samo ako su aktivni i flagovi *Ažuriraj trošak artikla* i *Porezni interes*;

**Ažuriraj posljednji trošak**: svi pokreti s predloškom koji ima ovaj označivač aktiviran sudjeluju u izračunu posljednjeg troška artikla. Ne može se mijenjati nakon prvog korištenja. Obično se koristi samo za prijeme.   
Posljednji trošak u kartici artikla ažurira se samo ako su aktivni i *Ažuriraj trošak artikla* i *Porezni interes*;    

**Ažuriraj prodajnu cijenu**: ne može se mijenjati nakon prvog korištenja. Koristi se uglavnom za otpremu. Prodajna cijena u kartici artikla ažurira se samo ako je aktivan označivač *Ažuriraj trošak artikla*;     

**Ažuriraj trošak artikla**: kada se unosi pokret skladišta koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Ažuriraj trošak artikla**ažuriraju se prosječni trošak, posljednji trošak i/ili prodajna cijena u kartici artikla, ovisno o tome koji su od sljedećih flagova aktivirani: *Aggiorna costo medio*, *Aggiorna costo ultimo* e *Aggiorna prezzo di vendita*.      

**Porezni interes**: kada se unosi skladišni pokret koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Porezni interes** sam pokret se uključuje u skladišni dnevnik te u izračun posljednjeg i prosječnog troška, kao i u valorizirani inventar po količini – pod uvjetom da i artikl koji se koristi ima aktiviran flag *Porezni interes* u kartici *Općenito*;

**Točka narudžbe**: kada se unosi skladišni pokret koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Točka narudžbe** taj pokret se uzima u obzir prilikom obrade u postupku izračuna točke narudžbe;       

**Upravljanje serijama**: kada se unosi skladišni pokret koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Upravljanje serijama** pokret omogućuje unos serije u odgovarajuću tablicu registracije skladišta za artikl koji se vodi po serijama.
Isti princip vrijedi i za upravljanje **Serijskim brojevima**;

**Integracija početne količine**: koristi se isključivo uz upravljanje serijama; omogućuje povećanje količine serije već unešene prethodnim pokretom, zadržavajući isti broj serije.  

**Kreiraj seriju iz serije**: ako je flag aktivan, omogućuje da se ta skladišna predložena zapisa prikaže kao predložak unutar procedure Kreiranje serije iz serije, kojom se omogućuje zamjena jedne serije drugom; program tada automatski kreira pokret za izlaz iz jedne serije i ulaz u drugu seriju istog artikla.
Dostupna je i dodatna procedura Kreiranje serije iz serije uz promjenu artikla, kojom je moguće iz jedne serije određenog artikla preći na drugu seriju drugog artikla.
Da bi se ovaj flag mogao aktivirati, predložak mora biti tipa **Istovar** a aktivni moraju biti i sljedeći flagovi: **Upravljanje serijama**, **Integracija početne količine**. Također, flag **Sastavnica materijala** e smije biti aktivna, a u polju **Predložak protupokreta za ulaz** mora biti postavljen odgovarajući predložak.;

**Nedostupne serije**: kada se unosi skladišni pokret koristeći predložak koji ima aktivan flag *Nedostupne serije* moguće je obaviti izlaz i iz serija koje se nalaze u statusu "nedostupno";

**Kreiraj serijske brojeve (S/N)**: ako je flag aktivan, omogućuje se upravljanje serijskim brojevima te njihovo automatsko generiranje pri unosu pokreta;  

**Obavezan dokument**: kada se unosi skladišni pokret koristeći predložak koji ima aktiviran flag **Obavezan dokument** obavezno je unijeti podatak u polje *Referentni dokument* unutar registracije skladišta – u suprotnom nije moguće nastaviti s unosom.;

**Obavezan konto**: kada se unosi promet skladišta koristeći u zaglavlju dokumenta predložak koji ima uključenu opciju **Obavezan račun** obavezno je potrebno popuniti polje *Kupac/Dobavljač*.  Ova se opcija najčešće koristi za evidenciju potrošnje ili isporuke materijala kod vanjskih suradnji (rada po narudžbi za treće strane). Bez unosa tog podatka, nije moguće nastaviti s unosom.

**Sastavnica materijala**: kada se unosi promet skladišta koristeći u zaglavlju dokumenta predložak koji ima uključenu opciju receptura, prilikom spremanja stavke ne knjiži se odabrani gotovi proizvod, već se automatski knjiže njegovi sastavni dijelovi prvog stupnja, definirani u recepturi. Ova se funkcionalnost često koristi kod izdatnica za razduženje komponenti proizvoda koji je prethodno zaprimljen kroz glavni predložak.

**Fizička inventura**: opcija **fizička inventura** omogućuje određivanje koji se predlošci skladišnog prometa mogu odabrati u [Parametri inventurnih razlika](/docs/configurations/parameters/logistics/stock-difference) kao predlošci koji će se koristiti pri izračunu razlika utvrđenih tijekom fizičke inventure. Skladišni zapisi koje će sustav automatski generirati putem postupka *Obrada razlika inventure* imat će u zaglavlju upravo ovakve predloške;  

**Protu-skladište**: u ovom stupcu korisnik može unijeti šifru **protu-skladišta**, odabirom iz pripadajuće padajuće liste povezane s tablicom *Skladišta*. Riječ je o skladištu koje treba biti prikazano na kartici *Protustavka* unutar zapisa skladišnog prometa;  

**Predložak za protu-knjiženje**: u ovom stupcu korisnik može unijeti šifru **predloška za protu-knjiženje**. To omogućuje da se prilikom unosa skladišnog prometa putem glavnog predloška automatski generira i promet suprotnog predznaka. Na primjer, predložak za protu-knjiženje koristi se za prijenose između različitih skladišta ili za premještanja unutar različitih lokacija u istom skladištu.;

**Ostatci**: ovim se označavanjem korisniku omogućuje da za svaki skladišni prostor odredi točno jedan predložak koji će se koristiti u postupku *Vrednovanja skladišta* prilikom zatvaranja skladišta, kako bi se stvorili zapisi ulaza za početno stanje zaliha. Da bi se pokreti napravljeni s tim predloškom uzeli u obzir u izvještaju [Inventura s količinskim vrednovanjem](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity), potrebno je da budu aktivirane opcije  **Porezni značaj** i, prema potrebi **Ažuriranje posljednje cijene** te **Ažuriranje prosječne cijene**. Također, da bi zališni promet imao pridruženu vrijednost, u polje **Predložena cijena** mora biti unesen odgovarajući iznos.       

**Vrsta operativnog dokumenta**: koristi se u inozemnim lokalizacijama poput Rumunjske i Hrvatske, gdje se skladišni pokreti moraju evidentirati i u financijskom knjigovodstvu;      

**Knjigovodstveni predložak**: koristi se u inozemnim lokalizacijama poput Rumunjske i Hrvatske, gdje se skladišni pokreti moraju evidentirati i u financijskom knjigovodstvu. Ovaj predložak služi za odabir unaprijed definiranih modela glavne knjige koji omogućuju evidentiranje skladišnih pokreta u glavnoj knjizi za svako skladište, kao i odgovarajući model skladišnog pokreta, ovisno o vrsti i prethodno definiranim postavkama;             

**Vrsta knjigovodstvenog predloška**: koristi se u inozemnim lokalizacijama poput Rumunjske i Hrvatske, gdje se skladišni pokreti moraju evidentirati i u financijskom knjigovodstvu;    

**Lokacija**: u ovom stupcu korisnik može unijeti zadanu lokaciju, koristeći *Pomoć za lokacije*, koja se otvara dvostrukim klikom na samo polje. Ta će lokacija biti predložena u zapisima o ulazu ili izlazu iz skladišta, ako nije prethodno postavljena kroz proceduru koja kreira promet. Postavljanje zadane lokacije najčešće se koristi kod predložaka za ulaz robe, dok se za izlaz koristi stvarna lokacija na kojoj se artikl nalazi u trenutku izdavanja. Stoga lokacija unesena u dokumentu ima prednost nad onom definiranom u skladišnom predlošku;

**Indeks obrtaja**: ako je ova opcija aktivna, zapisi skladišnog prometa kreirani ovim predloškom bit će uključeni u postupak izračuna **indeksa obrtaja** skladišta (Ispis);

**Alternative**: ova se opcija aktivira zajedno s opcijom *Sastavnica materijala*. Kada su obje opcije uključene, i ako neki od sastavnih artikala nije dostupan u dovoljnoj količini za izdavanje, sustav provjerava postoji li zamjenski artikl (definiran u recepturi) s dovoljnim količinama, kako bi se upotrijebio umjesto glavnog artikla;

**Kombinirani zamjenski artikli**: ova se opcija aktivira zajedno s opcijom *Sastavnica materijala*; kada je aktivna, sustav može istovremeno povući više različitih zamjenskih artikala sve dok se ne postigne potrebna ukupna količina. Ova opcija usko je povezana s opcijom *Zamjenski artikli*;

**Uključi pokrete s nulom**: aktiviranjem ove opcije korisnik može odrediti koji skladišni pokreti s količinom jednakom nuli trebaju biti uključeni u izračun ponderirane prosječne cijene artikala. Ovo je jedini predložak koji omogućuje unos pokreta s količinom nula. U pravilu se koristi uz predloške koji imaju aktiviranu opciju *Ažuriranje prosječne cijene*;

**Sljedivost**: Kada je ova opcija aktivna, označava da će skladišni pokreti generirani tim predloškom biti korišteni za [Sljedivost serija/lotova](/docs/logistics/lots-serial-numbers/lots-register); ova funkcionalnost omogućuje praćenje korištenih materijala u određenom gotovom proizvodu ili, obrnuto, identificiranje gotovih proizvoda u kojima je određeni materijal upotrijebljen.

**Otpad**: ako je ova opcija aktivna, predložak postaje vidljiv za definiranje otpada u formi *Dodatna povlačenja za proizvodnju* te na kartici *Otpad* unutar [Izjava o proizvodnji](/docs/production/pp-production-in-progress/signals/sisgnals/);	

**Ispravak logističke jedinice**: ako je ova opcija aktivna, predložak je vidljiv za unos ispravki vezanih uz logističke jedinice.;      

**D.D.M.R.P. ADU**:  Ako je ova opcija aktivna, označava da se predložak koristi za prepoznavanje svih skladišnih pokreta koji su relevantni za izračun ADU-a (*Average Daily Use*) artikla. Ova je opcija vidljiva samo ako je aktiviran DDMRP izbornik..        

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).
