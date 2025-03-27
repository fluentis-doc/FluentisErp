---
title: Generalno planiranje
sidebar_position: 1
---

Predstavlja algoritam Master Schedulinga, odnosno planer proizvodnje koji se bavi odabranim radnim nalozima i analizira njihovu *proizvodnu izvedivost* u funkciji njihove strukturne kompozicije.   
Ova vrsta planiranja, koja se može izvršiti s logikama analize *što prije* ili *što kasnije*, omogućuje provjeru potrebe za dodatnim proizvodnim kapacitetom, ističući prekomjernu alokaciju kritičnih radnih centara, dopuštajući operateru da odluči hoće li povećati unutarnji kapacitet, kupiti vanjski kapacitet ili premjestiti opterećenja u vremenu, eventualno prihvaćajući kašnjenja u isporuci.  

Iz jednog ili više odabranih radnih naloga, na temelju parametara planiranja postavljenih u odgovarajućoj kartici, postupak stvara planirane narudžbe za tri predviđene vrste: proizvodnju, nabavu i vanjsku obradu.   

Nakon što su stvoreni, planirane narudžbe će biti vidljive u kartici [Pretraživanje planiranih narudžbi](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Radni nalozi

*Posebni gumbi*:

> **Generalno planiranje**: omogućuje sustavu da rasporedi odabrane narudžbe;  
> **Otvori pretragu planiranih narudžbi**: ovim gumbom otvarate ekran za [Pretraživanje planiranih narudžbi](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders); ako ste prije pritiska na ovaj gumb odabrali redak narudžbe, forma planiranih narudžbi će se otvoriti već filtrirana za tu narudžbu;                 
> **Promijeni procijenjeni datum završetka s predloženim datumom**: ovim gumbom možete promijeniti preporučeni datum, o kojem je bilo riječi u ovom artiklu;    
> **Redoslijed sekvence**: ovom funkcionalnošću možete pristupiti sekvenci narudžbi, unutar koje možete pregledati narudžbe prema njihovom dodijeljenom redoslijedu, uključujući i grafikon.  


*Specifični filtri*:

**Tip radnog naloga**: putem ovog izbornika možete odabrati vrstu narudžbe koju želite prikazati - jednoproizvodne narudžbe, višeproizvodne narudžbe ili obje;  

**Mjesto proizvodnje**: možete pregledati narudžbe prema lokaciji proizvodnje gdje se proizvode, odabirom putem odgovarajućeg izbornika;  

**Kasne/Prošle/Pokrenute/Izvršne**: ove ovi oznake omogućuju odabir želite li prikazati narudžbe koje kasne u odnosu na datum, istekle narudžbe te samo ako je u [Parametri opće planiranja](/docs/planning/ms-master-scheduling/general-schedule) postavljena zastavica za *planiranje pokrenutih ili izvršnih narudžbi*. Inače, ova dva polja neće biti aktivna; kako je objašnjeno u članku o planovima, na kartici narudžbi bit će vidljive samo u stanju nepregledane ili planirane, ali ove prelaze u stanje pokrenute i/ili izvršne ako zastavica nije postavljena, neće se moći vidjeti narudžbe unutar ove kartice.

*Specifična polja u tablici Rezultata*

**Predloženi datum**: kao što je objašnjeno u članku o općim parametrima planiranja, aktiviranjem određene zastavice nazvane [Provjeri zakašnjele dokumente s ATP](/docs/planning/ms-master-scheduling/general-schedule) planer će provesti razmatranje prema kojem, ako je barem jedna od planiranih i generiranih narudžbi kasni u odnosu na predviđeni datum, sustav će obrisati sve stvorene narudžbe i ponovno započeti s općim datumom MS, definiranim uvijek u parametrima i koji se aktivira samo postavljanjem zastavice za provjeru zakašnjelih dokumenata s ATP te će predložiti novi datum za narudžbe upravo u polju *Predloženi datum* koje se nalazi u tablici rezultata.

### Procedura Generalnog planiranja

Nakon što se odaberu narudžbe koje želite rasporediti, aktivirat će se gumb **Generalno planiranje** koji se nalazi na traci s alatkama forme. Klikom na taj gumb, sustav će započeti planiranje odabranih narudžbi.  

Za pregled svih izvršenih rasporeda i pripadajućih proizvodnih naloga za svaku narudžbu, jednostavno se prebacite na karticu **Arhiva**.

:::danger NAPOMENA     
Ručno kreirane narudžbe uvijek se proizvode neovisno o dostupnosti proizvodnog artikla.   
:::   

## Parametri Općeg planiranja  

:::note NAPOMENA
Prije nego što započnete s planiranjem, važno je postaviti parametre unutar ove kartice kako bi se planiranje moglo provesti.   
::: 

**Vremensko planiranje do**: označava datum do kojeg sustav uzima u obzir unesene dokumente; moguće je unijeti zadanu vrijednost u mjesecima u polje **Maksimalni broj mjeseci za planiranje** koje se nalazi u [MS Parametrima](/docs/configurations/parameters/production/mps-parameters);       

**Materijali/Resursi**: putem ovih oznaka odlučuje se hoće li se planirati i materijali i resursi, odnosno struktura proizvoda i radni ciklus. Aktiviranjem oznake *Resursi* u planiranju će se također uzeti u obzir radni centri;  

**Planirane narudžbe na**: putem tri zastavice označava se želi li se sustav generirati sve tri vrste predviđenih naloga, odnosno proizvodnju, nabavu i radni nalog; na taj način ove vrste naloga imat će izravnu vezu s narudžbom; (na primjer, ako nije označena zastavica za Nabavu, ali je zadržana zastavica za Izvršavanje MRP-a, sustav će ipak stvoriti naloge za nabavu, ali ti će biti odvojeni od narudžbe);  

**Generira samo planirane naloge po razinama**: u ovom slučaju označava se razine (1-2...) za koje želite da se generiraju planirani nalozi;  

**Narudžbe dobavljača ili Zahtjevi za nabavom i Narudžbe kupca**:  u ovom slučaju, ako postoje dokumenti u sustavu bez datuma obveze i dostupnosti, možete sustavu reći da uzme u obzir datum koji možete navesti u odgovarajućem polju ili da ne uzima u obzir ovu vrstu dokumenata;  

**Grupiranje planiranih naloga po**: u slučaju rada po narudžbi, u ovom polju treba odabrati opciju *Nema grupiranja*; inače, možete odabrati vrstu grupiranja putem odgovarajuće kombinacije, ali u tom slučaju veza između planiranih naloga i narudžbe bila bi izgubljena;   

**Grupiranje najkasnije ili najranije**: u ovom slučaju možete odabrati hoćete li grupirati naloge prema najkasnijem datumu (što znači prema posljednjem datumu) ili najranijem datumu (što se obično preporučuje), a zatim u sljedećem polju nazvanom **Za period, u danima** navesti broj dana unutar kojih se želi izvršiti grupiranje;  

**Razmatraj količine prema ekonomskom lotu/Razmatraj višestruke ekonomskog lota**: postavljanjem prvog parametra označava se da se prilikom planiranja želi uzeti u obzir ekonomski lot artikla, što aktivira opciju za odlučivanje hoće li se također uzeti u obzir višestruki ekonomski lotovi (obe ove postavke se podešavaju unutar [MRP Parametara](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla);

**Kompaktiraj/odvoji narudžbe**: u ovom slučaju birate želite li da postoji ili ne dan razmaka između završetka proizvodnje narudžbe na 1. razini i narudžbe na sljedećoj razini;  

**Izvršenje MRP-a nakon planiranja i Artikli na zalihama**: ovdje se označava da se želi da sustav analizira sve kodove artikala koji se upravljaju potrebama za ovaj gotovi proizvod. MRP se izvršava na sve artikle u baznoj strukturi ovog artikla koji imaju različite politike upravljanja od onih vezanih uz narudžbu, jer se može željeti provjeriti pokrivenost ili generirati planirane narudžbe bez veze s narudžbom. U ovom slučaju, MRP uzima u obzir parametre navedene u kartici *Opći parametri planiranja*;        

**Planiranje po zoni isporuke**: postavljanjem ove zastavice, sustav će provjeravati kada narudžba treba biti isporučena prema svojoj zoni isporuke i rasporedit će narudžbu tako da bude gotova prije dana isporuke;  

**Provjerite s ATP zakašnjele dokumente**: ako omogućite ovu zastavicu, istovremeno ćete omogućiti i sljedeće polje nazvano **Početak MS-a**, a sustav će izvršiti sljedeći postupak: ako u planiranju generiranih naloga postoji barem jedan koji ima datum početka raniji od današnjeg, odnosno ako kasni u odnosu na proizvodnju ove narudžbe, omogućavanjem ove zastavice sustav će obrisati sve planirane naloge koje je generirao i ponovno započeti od datuma koji operater postavlja u polju **Početak MS-a**, raspoređujući ih što je prije moguće od tog datuma;  

**Automatsko puštanje planiranih naloga**: ako se odlučite omogućiti ovaj parametar, sustav za planiranje će, osim što generira naloge prema planu, automatski ih puštati u realizaciju. Time će planirani proizvodni nalazi postati stvarni proizvodni nalozi, nalozi za nabavu će postati RDA (zahtjevi za nabavom), a nalozi za rad će postati radni nalozi;  

**Planiranje najkasnije ili najranije**: ovim zastavicama se određuje da li će se planiranje izvršavati na temelju najkasnijeg datuma proizvodnje naručenih naloga, što znači da će se planirati na temelju posljednjeg naloga koji se mora rasporediti, ili najranije, što znači da će se planiranje temeljiti na prvom nalogu koji se mora rasporediti;  

**Planiranje pokrenutih ili izvršnih naloga**: po zadanim postavkama, kada se narudžba planira, i dalje se može vidjeti u kartici *Narudžbe*, gdje se može ponovno odabrati i ponovno planirati koliko god puta je potrebno. Međutim, kada se počnu puštati planirani nalozi, narudžbe mijenjaju status s planiranih na pokrenute ili izvršne i više ih nije moguće vidjeti u kartici *Narudžbe*. Da bi se i dalje mogle vidjeti u kartici *Narudžbe* nakon što postanu pokrenute ili izvršne, dovoljno je omogućiti ovu zastavicu, čime se omogućuje njihovo daljnje prikazivanje i mogućnost ponovnog planiranja baš kao i narudžbi u statusu planiranih;  

**Verzija**: planer će rasporediti u verziju koja je postavljena u ovom polju, ako u proizvodnoj narudžbi nije definirana verzija;  

**Razmotri raspoloživost**: ako aktivirate ovu opciju, naznačujete planeru da pri procesu planiranja mora uzeti u obzir dostupnost robe iz skladišta navedenih u donjoj tablici, koja su prethodno definirana u [MS Parametrima](/docs/configurations/parameters/production/mps-parameters);  

**Skladišta**: mreža skladišta se aktivira samo ako je postavljena zastavica **Razmotri dostupnost**, u mreži se prikazuju skladišta koja su unesena u prozor [Izračun raspoloživosti](/docs/erp-home/registers/items/calculate-availability);         

**Uzmite u obzir dostupnost na datum potrebe ili minimalnu u razdoblju**: ove opcije se aktiviraju samo ako je aktivirana opcija **Razmotri raspoloživost**; na datum potrebe znači da će planer morati uzeti u obzir dostupnost u trenutku kada treba proizvesti narudžbu, dok minimalna u razdoblju znači da će planer uzeti u obzir minimalnu dostupnost u razdoblju do datuma postavljenog u parametru Planirati do;

**Razmotrite lotove s stanjem nije raspoloživo**: ova opcija se također aktivira samo ako je aktivirana opcija **Razmotri raspoloživost**. Ako je aktivirana, planer će morati uzeti u obzir serije u nedostupnom stanju na određeni datum;      

**Razmotrite raspoloživost i za prvu razinu**: ova opcija se također aktivira samo ako je aktivirana opcija **Razmotri raspoloživost**; ako je aktivirana, planer će morati uzeti u obzir dostupnost i za prvu razinu (odnosno za artikl prisutan u proizvodnom nalogu);

**Razmotrite negativnu raspoloživost**: ako je aktivirano, planer će morati uzeti u obzir i negativnu dostupnost pri planiranju za artikl prve razine. Ovu opciju je moguće omogućiti samo ako je aktivirana opcija **Razmotrite raspoloživost i za prvu razinu**;      

**Uzmite u obzir dostupnost iz**: ove opcije postaju dostupne samo ako je aktivirana opcija  **Razmotri raspoloživost** i omogućuju vam da naznačite želite li da planer uzme u obzir dostupnost iz nabave, prodaje, skladišta, uslužne proizvodnje i proizvodnje;  

**Obnavljanje minimalne zalihe artikla i obnavljanje točke ponovnog naručivanja artikla**: prva opcija se aktivira samo ako je postavljena druga opcija. Ove dvije opcije ukazuju na to da planer mora predvidjeti obnavljanje točke ponovnog naručivanja određene za taj artikl, a također, ako želite, i obnavljanje minimalne zalihe artikla. Oba podatka unose se prilikom kreiranja artikla u kartici [Nabava](/docs/erp-home/registers/items/create-new-item);

**Razmotrite indeks pokrivanja**: ako je opcija aktivirana, planer će morati uzeti u obzir indeks pokrivenosti koji se postavlja u kartici *Nabava* artikla;  

**Razmotrite alternative materijala**: ako je aktivno, prilikom planiranja proizvodnog naloga, planer će također morati razmotriti alternative materijala ako nema dovoljno dostupnosti za materijal naveden u strukturi. Ova opcija se može omogućiti samo ako je aktivirana opcija **Razmotri raspoloživost**;            

**Razmotrite samo alternativne materijale**: ova opcija se aktivira samo kada je aktiviran flag **Uzmite u obzir i alternative materijala**; ako je ova opcija aktivna, prvo će se provjeriti dostupnost alternativnih komponenti prema njihovom prioritetu. Ako ti materijali nisu dovoljni, onda će se provjeriti dostupnost glavne komponente. Ova opcija se može omogućiti samo ako je aktivirana opcija **Razmotri raspoloživost**;    

:::note NAPOMENA 
Alternativni materijali se unose u karticu **Alternative**, koja se odnosi na glavni materijal, prisutnu u [Sastavnici materijala](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Razmotri alternativne faze**: ako je ovaj flag aktivan, to znači da će planer pri planiranju morati uzeti u obzir i alternativne radne faze. Aktiviranjem ovog flaga aktivira se i sljedeće editabilno polje nazvano **Tolerancija za zauzeće radnog centra %**, gdje se može navesti tolerancija zauzeća radnog centra u postotcima. Ako zauzeće premaši tu toleranciju, planer će morati razmotriti alternativne faze umjesto zadane faze.  

## Praćenje

Na ovoj kartici, aktiviranjem ili deaktiviranjem dostupnih opcija, korisnik ima mogućnost odabira prikaza rezultata planiranja u tablici **Arhiva**.

Može se odlučiti želi li se prikazati koje su **Kalendari** uzeti u obzir (*Proizvodni kalendar* i *kalendar Kapaciteta proizvodnje*); također se može odabrati da se označi ukoliko je u planiranju prisutno više **Artikala bez** *MRP Parametara*, bez *Osnovne strukture* ili *Radnog ciklusa*, bez *preferiranog Dobavljača* (u slučaju narudžbi za nabavu), bez *preferiranog Izvođača* (za narudžbe radnih naloga) i bez naznake minimalne zalihe za sve one artikle koji su upravljani zalihama. Za svaki **Radni nalog** može se odlučiti da se u povijesti prikaže *Broj zakazanih redova* i pojedinosti tih redova, kašnjenje narudžbi i istekli nalozi.

Što se tiče **Planiranih Narudžbi**, možete odabrati hoćete li prikazati u povijesti *Broj Generiranih Narudžbi* i njihove *Detalje*, *kašnjenja* i *istekle* narudžbe, *Alternativne materijale*. Također možete odabrati da vas se obavijesti ako su **Planirane narudžbe bez** *Materijala*, *Radnih faza*, *Dobavljača* (za nabavu) ili *Podizvođača* (za radne naloge).

**Legenda**: aktiviranje zastavica omogućuje primanje obavijesti i detalja o odabranim stavkama.  

## Povijest

Na mreži ove kartice prikazuju se sve sažete informacije o planiranju naloga.  

**Redni broj planiranja**: prikazuje jednostavan redni broj operacije planiranja pokrenute od strane korisnika;  

**Operater**: prikazuje korisnika koji je pokrenuo planiranje;

**Broj pogrešaka**: prikazuje broj pogrešaka zabilježenih tijekom postupka planiran;

**Datum početka**: prikazuje datum i vrijeme početka procesa planiranja;

**Datum završetka**: prikazuje datum i vrijeme završetka procesa planiranja;

**Planirani podaci dolaze iz**: prikazuje točan izvor planiranih podataka;

**Predviđanje**: prikazuje jesu li podaci iz predviđanja prodaje ili iz glavnog plana proizvodnje;

**Razdoblje**: prikazuje vrstu predviđanja, tj. tjedni ili mjesečni;

**Dan**: prikazuje dan u tjednu koji je određen kao dan kada bi trebao biti završen planirani proizvodni nalog izravno iz Definicije MPS-a.

Sve ostale stupce u mreži prikazuju postavke koje su korištene u kartici **Opći parametri** *Planiranja* za odabranu liniju.  

**Rezultat planiranja**

Na temelju odabrane stavke u mreži, u ovoj sekciji će se prikazati detalji koje je korisnik zatražio u kartici **Praćenje**.

U rezultatima planiranja možete vidjeti broj proizvodnog naloga koji je zakazan, broj planiranih narudžbi koje su generirane iz tog naloga i detalje generiranih narudžbi. 

Za detalje o općem radu obrasca, pogledajte link [Značajke, gumbe i zajednička polja](/docs/guide/common).