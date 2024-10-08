---
title: Izdavanje planiranih naloga
sidebar_position: 1
---

Obrazac omogućuje kreiranje:

- *zahtjeva za nabavu*, eventualno već odobrenih putem odgovarajućeg parametra, u slučaju planiranih narudžbi za nabavu;    
- *radnih naloga* u slučaju planiranih radnih naloga ili ako u listi faza planirane proizvodnje postoji vanjska faza;    
- *proizvodnih naloga*, *lansiranih* ili *izvršnih* ovisno o aktiviranju odgovarajućeg parametra, u slučaju planiranih proizvodnih naloga.  

Objavljivanje naloga rezultira time da oni više nisu vidljivi među [Planirane narudžbe](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) te stoga nije moguće generirati novi [Raspored](/docs/planning/ms-master-scheduling/general-schedule) proizvodnog naloga iz kojeg su planirani nalozi eventualno bili generirani putem općeg rasporeda. Planirani nalozi prisutni u mreži koji su generirani ručno ili putem MRP obrade nemaju nikakvu vezu s proizvodnim nalozima.  

## Filter 

Na ovom obrascu možete pregledati popis planiranih naloga koji još nisu izdani i možete ih filtrirati pomoću različitih kriterija odabira.   

Nakon što postavite sve željene filtre, jednostavno kliknite na gumb **Traži** u *traci izbornika* kako biste prikazali rezultate unutar rezultantne mreže.  

*Posebni gumbi*: 

> **Izdavanje planiranih narudžbi proizvodnji**: ovaj gumb se aktivira samo ako je u filterima postavljen tip narudžbe proizvodnje u polju *Izdavanje planiranih narudžbi za* i ako je u rezultatnoj mreži odabrano barem jedan redak proizvodnog naloga za izdavanje. Klikom na ovu funkciju sustav će izvršiti izdavanje generiranjem lansiranih ili izvršnih proizvodnih naloga, ovisno o postavljenim parametrima unutar [Parametri potrebe za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);  
> **Izdavanje planiranih narudžbi dobavljačima**: ovaj gumb se aktivira samo ako je u filterima postavljen tip narudžbe nabave u polju *Izdavanje planiranih narudžbi za*, i ako je u rezultatnoj mreži odabrano barem jedan redak narudžbe za nabavu za izdavanje. Klikom na ovu funkciju sustav će izvršiti izdavanje generiranjem zahtjeva za nabavu, koji mogu biti odobreni ili neodobreni, ovisno o postavljenim parametrima unutar [Parametri potrebe za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);  
> **Izdavanje planiranih narudžbi podizvođačima**: ovaj gumb se aktivira samo ako je u filterima postavljen tip narudžbe za radne naloge u polju *Izdavanje planiranih narudžbi za* i ako je u rezultatnoj mreži odabrano barem jedan redak radnog naloga za izdavanje. Klikom na ovu funkciju sustav će izvršiti izdavanje generiranjem radnih naloga;   
> **Otvori Pretraživanje narudžbe**: ovaj gumb omogućava otvaranje filtrirane pretrage Proizvodnih Naloga s istim kriterijima koji su korišteni u odjeljku za filtriranje ovog prozora. Na primjer, ako su planirani nalozi filtrirani u ovoj tablici prema broju narudžbe 3 iz 2018. godine, prozor za pretragu proizvodnih naloga bit će otvoren već filtriran za narudžbu 3 iz 2018. godine.  

*Specifična polja*:

**Godina**: označava godinu planiranog naloga;       
**Nalog**: označava broj planiranog naloga;             
**Razina**: označava razinu artikla u osnovnoj strukturi;    
**Godina/Broj/Kod/Opis proizvodnog naloga**: polja će biti prazna ako je planirani nalog generiran ručno ili putem MRP-a;    
**Predviđeni datum početka**: za planirane nabavne ili radne naloge, ovo označava datum kada treba poslati narudžbu dobavljaču koja će se kasnije generirati s izdavanjem samog naloga; za planirane proizvodne naloge, ovo označava predviđeni datum početka prve faze proizvodnje;    
**Procijenjeni krajnji datum**: za planirane nabavne ili radne naloge, ovo označava datum kada se očekuje isporuka i stoga će se poklapati s predviđenim datumom primitka stavke narudžbe od dobavljača koja će se kasnije generirati s izdavanjem naloga; za planirane proizvodne naloge, ovo označava predviđeni datum završetka posljednje faze proizvodnje;    
**Potvrđena količina**: bit će različita od nule samo ako je obrađeno putem MRP-a;   
**Klijent račun, podračun i opis**: označava povezanog klijenta u slučaju proizvodnih naloga;    
**Dobavljač račun, podračun i opis**: označava povezanog dobavljača u slučaju narudžbi nabave i radnih naloga;    
**Godina/Broj/Vrsta barudžbe prodaje**: predstavlja klijentski nalog iz kojeg je generiran radni nalog iz kojeg je bio raspoređen planirani nalog u pitanju.   

Nakon odabira naloge koje želite izdati, za izvršenje **Izdavanje** treba koristiti jedan od gumba u *traci izbornika*, ovisno o vrsti naloga koji se treba izdati: **Izdavanje planiranih narudžbi proizvodnji**, **Izdavanje planiranih narudžbi dobavljačima** ili **Izdavanje planiranih narudžbi podizvođačima**. Ovi gumbi će se aktivirati prema onome što je uneseno u polju **Pusti naloge planirane za**.

Moguće je također **Pregledati detalje planiranog naloga** u mreži jednostavnim dvostrukim klikom miša na redak planiranog naloga koji želite pregledati, prije nego što nastavite s izdavanjem.   

## Parametri 

Na ovom obrascu možete postaviti i spremiti parametre potrebne za izdavanje planiranih naloga.  

### Proizvodni nalozi  

U ovoj sekciji možete, aktiviranjem opcije **Generiranje naloga podizvođača iz eksternih operacija**, odlučiti da se, ako u listi faza planiranog proizvodnog naloga koji se izdaje postoji vanjska faza, automatski generira radni nalog za vanjsku fazu. Obično se ova opcija ostavlja aktiviranom.  

### Zahtjevi za nabavu   

U ovoj sekciji možete:

- postaviti, putem odgovarajućeg padajućeg izbornika, **Vrstu zahtjeva za nabavu** koji će se generirati prilikom izdavanja planiranih narudžbi za nabavu. U ovom padajućem izborniku automatski se predlaže vrsta zahtjeva za nabavu već postavljena u [Parametri potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters) u sekciji Parametri za izdavanje planiranih narudžbi;      
- aktiviranjem opcije **Karakteristike opskrbe iz MRP parametara artikla**postupak će stvarati *zahtjeve za nabavu* s prioritetom navedenim u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) pojedinog članka; ako nije aktiviran, *zahtjevi za nabavu* će se stvarati s prioritetom postavljenim u narudžbi s kojom su povezani;        
- omogućavanjem opcije **Zaokruži zahtjev za kupnju**, postupak izdavanja planiranih narudžbi za nabavu zaokruživat će količinu u gornji cijeli broj zahtjeva za kupnju koji se generira, ako postoje količine s decimalama;   
- odlučivanje o metodi grupiranja: aktiviranjem opcije **Grupiranje najranije**, postupak izdavanja će grupirati planirane narudžbe za kupnju koje su generirane za isti artikal. U polju **Za period u danima** postavlja se broj dana u rasponu unutar kojeg se može izvršiti grupiranje, uzimajući u obzir predviđene datume primitka artikala, odnosno datume završetka planirane narudžbe za kupnju;    
- odlučivanje što učiniti ako dobavljač nije naveden u planiranoj narudžbi za nabavu:  **Prihvatiti narudžbe bez dobavljača**, **Preskočiti narudžbe bez dobavljača** ili **Prihvatiti određenog dobavljača** navedenog u odgovarajućim poljima.

### Nalozi podizvođača  

U ovoj sekciji možete:

- postaviti, putem padajućeg izbornika **Vrste narudžbe** i polja **Godina**, da li radni nalog koji se treba generirati treba biti *Zatvoren* ili *Otvoren* i koji godine mora biti;  
- odlučiti o načinu grupiranja: aktiviranjem zastave **Grupiraj naloge istog podizvođača**, procedura izdavanja će grupirati planirane radne naloge, unoseći u isti radni nalog predmete koji moraju biti obrađeni istim podugovarateljem;     
- odlučiti, u slučaju da podugovaratelj nije naveden u planiranom radnom nalogu **Prihvati naloge bez dobavljača**, **Ostavi naloge bez podizvođača** ili **Prihvati kao podizvođač ovaj račun** naveden u odgovarajućim poljima.

*Gumb specifičan*:  
> **Spremi promjene**: omogućuje vam spremanje parametara onako kako su postavljeni.  

### Povrat

Na ovom obrascu možete izvršiti postupak povrata planiranog naloga koji omogućava poništenje prethodno izdanog naloga, vraćajući situaciju na stanje prije izdavanja.  

Na ovom obrascu prikazuju se planirani nalozi iste specifikacije kao što je navedeno u polju **Izdavanje planiranih naloga** za kartice **Filter**.

Nakon što postavite sve željene filtere, jednostavno kliknite gumb  **Traži** u *traci izbornika* da biste prikazali rezultate unutar rezultirajuće mreže.    

Kada je odabrani redak u rezultirajućoj mreži, prikazat će se u jednoj od tri donje kartice: **Proizvodni nalog**, **Zahtjevi za nabavu** ili **Radni nalozi**, dokument generiran iz izdanja odabranog planiranog naloga.  

Za pokretanje povratka, odaberite jedan ili više naloga i kliknite gumb **Povrati naloge**. 

*Uvjeti za postupak povratka*:

**Za planirani proizvodni nalog**: samo ako je generirani nalog u statusu *Lansiran*; ko je nalog u statusu *Izvršno* potrebno je izvršiti povratak izdavanja proizvodnog naloga, dok se nalog koji je već *Izvršen* više ne može povratiti, osim ako se ne krene unazad od prijave proizvodne evidencije;    
**Za kupnju planiranog naloga**: samo ako je generirani redak zahtjeva za nabavu u statusu *Ne izvršeno*; ako je redak zahtjeva za nabavu već izvršen stvaranjem narudžbe dobavljača, potrebno je krenuti unazad od dokumenta nabavke do kojeg se već stiglo;     
**Za podugovarani planirani nalog**: samo ako generirani redak radnog naloga nije još izvršen ili ako nije generiran otpremni dokument za materijal koji se odnosi na taj redak radnog naloga.  

Izvršavanjem ovog postupka, povratni nalozi bit će ponovno vidljivi u kartici **Filter** gdje je moguće ponovno izvršiti izdanje.

Za detalje o uobičajenom funkcioniranju obrazaca obratite se na poveznicu [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).