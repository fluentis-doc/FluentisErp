---
title: MS Parametri
sidebar_position: 3
tags: [MPS]
---

Kroz ovaj prozor se moraju upravljati svim parametrima koji se tiču upravljanja proizvodnim nalozima i načinom na koji se vode faze koje slijede nakon generiranja samih naloga.

**Metoda generiranja podnaloga**  
U ovom odjeljku, **Vrsta narudžbe** (jedan proizvod / više proizvoda) mora biti postavljena i predložena u postupku **Generiranja proizvodnog naloga**, kartici [Parametri](/docs/planning/mps-master-production-scheduling/job-order-creation).  
Prilikom generiranja narudžbe iz [Stvaranje proizvodnog naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) moguće je izmijeniti ovu postavku, kao i onu koja se odnosi na sljedeću kombinaciju koja se zove Grupiranje po, putem koje je moguće naznačiti kako stavke trebaju biti **Grupiranje za** istog *pojedinačnog proizvoda* ili *Narudžba jednog proizvoda*.

Ako je *Vrsta naloga*:   
- *Mono proizvod*, jedino dopušteno grupiranje je ono prema artiklu: ova vrsta upravljanja omogućuje korisniku da sustav automatski generira niz narudžbi za jedan proizvod, odabirom popisa redova narudžbi kupaca, redova koji dolaze iz predviđanja prodaje ili plana proizvodnje Glavni ili dolazi iz podzaliha, osiguravajući da svaka narudžba koja se generira predstavlja zbroj traženih količina za istu stavku. Datum završetka grupiranog naloga uvijek je isti kao i datum zahtjeva koji je najbliži datumu pokretanja obrade.      
- *Multiproizvod* grupiranje više proizvoda može se izvršiti prema kupcu, prodajnom nalogu, kupcu/narudžbi i omogućiti korisniku da umetne više stavki iz redova kupčeve narudžbe povezanih s istim kupcem, istom prodajnom narudžbom ili istom prodajnom narudžbom od istog kupca.

**Prioritet nabave** bit će zadani kada se generiraju narudžbe.  

**Generiranje naloga**   
U ovom odjeljku korisnik može postaviti s odgovarajućim zastavicama hoće li se narudžba generirati iz *Narudžbi kupaca* ili iz *Predviđanja* (konkretno, tada može odabrati hoće li iz *Predviđanja prodaje*, i/ili iz  *Glavnog plana proizvodnje*).  
Ti se parametri tada mogu mijenjati iz prozora [Generiranje proizvodnog naloga](/docs/planning/mps-master-production-scheduling/job-order-creation).  
U slučaju *Stvaranja proizvodnog naloga iz Predviđanja*, mora se navesti da li je poželjno da se proizvodni nalog generira na tjednoj ili mjesečnoj osnovi.  

**Uzmi raspoloživost iz**   
U ovom odjeljku korisnik može odlučiti postaviti razmatranje raspoloživosti gotovih proizvoda prilikom generiranja proizvodnog naloga iz: *Podizvođač*, *Nabave*, *Prodaje*, *Proizvodnje*, *Skladišta*.

Zatim postoji niz zastava:

**Izračunaj količinu prema pripremnom vremenu stavke**: aktivira se ako ne želite koristiti cikluse obrade za izračun trajanja proizvodnog naloga; u ovom slučaju, za potrebe izračuna trajanja narudžbe, upućuje se na polje vremena proizvodnje koje je prisutno u [MRP Parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)  stavke. 

**Automatsko generiranje naloga iz naloga kupaca**: ako je aktivno, to omogućuje postupku da automatski kreira proizvodni nalog čim se umetne redak naloga kupca. U ovom slučaju, nalog se kreira u stanju *Neispitano*. Općenito se aktivira kada se za planiranje koristi *MRP* postupak umjesto  *Općeg rasporeda*.

**Ažuriraj datum kad će roba biti spremna**: ako je aktivno, kada se promijeni predviđeni datum završetka obrade u nalogu (ručno ili putem procedure), novi datum će se prikazati i u polju *Datum kad je roba spremna* samog naloga, kao i u povezanoj narudžbi kupca. Također, stvorena je i tablica loga pod nazivom **MS_ProductionJobOrderItemReadyGoodsDateLogs** koja prati sve promjene napravljene. Ova tablica može se pregledavati samo putem SQL-a.       

**Automatsko generiranje tijeka proizvodnje**: ako je aktivno, korisnik može odlučiti aktivirati oznaku **Zakazivanje**,  koja vam omogućuje da vidite već zakazane proizvodne naloge čim ih generira **Generacija proizvodnih naloga**. Aktiviranje zastavice za *Planiranje* tada vam omogućuje da aktivirate zastavicu za **Puštanje**, koji omogućuje odlučivanje hoće li nakon automatskog rasporeda planirani narudžbe za nabavu, proizvodnju i/ili račun rada također biti automatski otpušteni. U tom slučaju, za planirane narudžbe proizvodnje može se aktivirati i oznaka **Otpuštanje izvršnih OP**, koja omogućuje izravno generiranje izvršnih narudžbi proizvodnje, čime se preskoči i postupak otpuštanja narudžbi proizvodnje.    

**Otpusti izvršne proizvodne naloge**        
koja vam omogućuje izravno generiranje izvršnih proizvodnih naloga, čime također preskačete postupak Otpuštanja proizvodnih naloga.    

> **Troškovi posla**: omogućuje označavanje vrste troška koja će se koristiti za obračun materijalnih troškova između troška * Zadnjeg, Srednjeg* i *Standardnog*;      
> **Vrsta troška**: omogućuje vam da naznačite vrstu troška koji će se koristiti za obračun troškova sirovina između *krajnjih*, *prosječnih* i *standardnih troškova*;      
> **Vrsta marže**: omogućuje vam da označite vrstu marže između *Troška* (vrijednosti) i *Postotka*; u susjedno polje možete unijeti odgovarajuću vrijednost;      
> **Trošak lota**: aktiviranjem ove zastavice, postupak će vrednovati cijenu materijala na temelju odabrane vrste cijene uzimajući u obzir vrijednosti samo te određene serije;  
> **Trošak narudžbe proizvodnje**: aktiviranjem ove zastavice, procedura će vrednovati trošak materijala na temelju odabrane vrste troška, uzimajući u obzir samo vrijednosti te specifične narudžbe.   

:::note BILJEŠKA
Ako su aktivirani i **Trošak serije** i **Trošak naloga**, postupak će vrednovati trošak materijala na temelju odabrane vrste troška uzimajući u obzir vrijednosti samo te određene narudžbe i za taj određeni lot.
::: 

**Skladišta za raspoređivanje podnaloga**   
Ova mreža je jednostavan prikaz popisa skladišta na kojima je potrebno provjeriti dostupnost prilikom generiranja proizvodnog naloga. Ovaj je popis postavljen u obliku koji se zove *Izračun dostupnosti* koji se nalazi u *Početna stranica > Artikli >  [Izračun dostupnosti](/docs/erp-home/registers/items/calculate-availability)*.

**Zadnji datum vremenskog planiranja**   
Ovaj odjeljak sadrži neke sažete podatke posljednjeg rasporeda (početni datum i vrijeme, broj generiranih pogrešaka, završni datum i vrijeme, progresivni broj rasporeda).  

**Predloženi zakazani parametri**: omogućuje vam da definirate koje parametre želite predložiti za raspored, može ponovno predložiti parametre zadnjeg izvršenog rasporeda ili predložiti parametre koje za raspored koristi pojedinačni operater.  

**Dani za sljedeći raspored**: označava broj dana koji će se koristiti za povećanje početnog datuma raspoređivanja konačnog kapaciteta (polje *Od datuma*), na kartici *Parametri raspoređivanja konačnog kapaciteta* obrasca za *Raspoređivanje konačnog kapaciteta*.

**Maksimalan broj mjeseci za planiranje**: označava broj mjeseci koji se dodaju današnjem datumu kako bi se odredio krajnji datum rasporeda *Raspored do danas* u parametrima *Općeg rasporeda*.        

**Maksimalni broj mjeseci za izračun raspoloživosti građe**: moguće je definirati vremenski horizont za izračun raspoloživosti, odnosno upisuje se broj mjeseci u kojima će se dokumenti razmatrati; međutim, dokumenti datirani nakon mjeseci koji su uzeti u obzir neće se uzeti u obzir u rasporedu.     

**Prvi dan u tjednu vizualiziran u kalendara tvornice**: omogućuje vam da unesete dan koji želite da se pojavi kao prvi dan radnog tjedna u  [Tvorničkom kalendaru](/docs/configurations/tables/production/factory-calendar). Obično se ubacuje u ponedjeljak.  

**Boja podnaloga**   
U ovoj sekciji moguće je postaviti boje pozadine i teksta proizvodnih naloga na temelju njihovog statusa (nije ispitano, lansirano... itd.).  

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, gumbi i polja](/docs/guide/common).


