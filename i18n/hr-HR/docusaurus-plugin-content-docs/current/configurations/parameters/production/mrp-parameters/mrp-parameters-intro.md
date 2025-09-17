---
title: Parametri MRP  
sidebar_position: 2
---

Za uređivanje MRP parametara:   
1. otvorite obrazac koji se nalazi na putu **Parametri > Proizvodnja > MRP parametri**. 
2. odaberite članak i dvaput kliknite na red ili upotrijebite gumb **Izmjeni parametre**.

I parametri MRP vengono creati in automatico dal sistema al salvataggio di un nuovo articolo inserito in anagrafica, con dei valori di default che possono essere variati manualmente dall’operatore singolarmente o in maniera massiva tramite il pulsante **Sostituzione parametri** presente nella form di filtro.

## 1. Opći podaci 

Parametri koji se mogu definirati unutar ove kartice su sljedeći:   

**Politika upravljanja**: ovaj kombinirani okvir omogućuje korisniku da odabere hoće li upravljati stavkom na:    
> **Prognoza**:  u ovom slučaju stavkom će se upravljati generiranjem predviđanja prodaje ili umetanjem glavnog plana proizvodnje. Ova se politika upravljanja uzima u obzir i u [Generiranje proizvodnih narudžbi](/docs/planning/mps-master-production-scheduling/job-order-creation) i u [MRP-u](/docs/planning/ms-master-scheduling/mrp).   
> **Zaliha**: u ovom slučaju artiklom će se upravljati na temelju informacija koje se odnose na ponovnu narudžbu i minimalne bodove zaliha unesene u karticu  [Nabava](/docs/erp-home/registers/items/create-new-item) matičnih podataka artikla. To je zato što su to artikli za koje potražnja stiže prekasno u usporedbi s mojom potrebom za nabavom i/ili proizvodnjom i stoga se javlja potreba za upravljanjem tim artiklima na zalihama na takav način da se nastavi s nabavom ili proizvodnjom prije nego što stignu pravo pitanje. Također u ovom slučaju, generiranje naloga za proizvodnju artikla bit će dobiveno upotrebom postupka [Generiranje proizvodnih narudžbi](/docs/planning/mps-master-production-scheduling/job-order-creation) i [MRP-a](/docs/planning/ms-master-scheduling/mrp).   
> **Radni nalog**: koristi se za artikle koji se proizvode po narudžbi, s ciljem zadržavanja sljedivosti tijekom različitih faza njihove proizvodnje. U ovom slučaju, ova vrsta politike upravljanja primjenjuje se tijekom [Generiranja proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation), korištenjem kartice Kupčevi nalozi. Upravo kroz ovakav način upravljanja generiraju se proizvodni nalozi. Moguće ju je voditi i putem [MRP-a](/docs/planning/ms-master-scheduling/mrp) ali samo ako se to izričito specificira putem flag **Uzmi u obzir artikal u obračunu MRP** koji se nalazi na kartici Parametri unutar ovog obrasca.  
Na primjer: generiran je kupčev nalog za 6 komada artikla koji se vodi po principu proizvodnje po narudžbi, a zatim i drugi kupčev nalog za 8 komada istog artikla. Kako bi se osigurala sljedivost proizvodnje i veza između kupčevih naloga i proizvodnih naloga, kreirat će se dvije odvojene proizvodne komese, svaka povezana s odgovarajućim kupčevim nalogom.   
> **Zahtijevi**: u ovom slučaju, radi se o artiklima za koje nije nužno zadržavati sljedivost, pa se različiti zahtjevi iz više izvora mogu grupirati zajedno (pri čemu se gubi veza s komesom). U tom slučaju, artikl se može uzeti u obzir prilikom korištenja postupka [MRP](/docs/planning/ms-master-scheduling/mrp) umjesto postupka **Generalno planiranje**. 
Na primjer: u situaciji sličnoj prethodnoj, s jednim kupčevim nalogom za 6 komada i drugim za 8 komada istog artikla, može se generirati zajednički proizvodni nalog za ukupno 14 komada, pri čemu se gubi veza između naloga i komese, a time i sljedivost.  

:::note NAPOMENA
Sljedeće opcije za buffere i toleranciju vremena isporuke kupcu dostupne su samo uz DDMRP.  
:::

> **DDMRP dinamički bufferi**: predviđaju promjene u vremenu za tri karakteristične zone (zelena, žuta, crvena), a time i promjene prosječne zalihe.        
> **DDMRP fiksni bufferi**: koriste fiksne vrijednosti za zone, pa je i prosječna razina zaliha fiksna (koriste se u slučaju ograničenja prostora, ulaganja, sigurnosnih granica itd.).          
> **Buffer min-max DDMRP**: koriste samo crvenu i zelenu zonu.         
>> **Tolerancija vremena isporuke kupcu**: vrijeme isporuke izraženo u danima koje kupci općenito smatraju prihvatljivim. (Opcija se omogućuje tek nakon odabira tipa DDMRP buffera.)        

**Vrsta nabave**: padajući izbornik služi za razlikovanje vrste planiranih naloga koji se generiraju te omogućuje korisniku da odabere treba li način nabave artikla biti:    
> **Nabava**: u ovom slučaju, eksplozija potražnje stvara planirani nalog za kupnju za dotični artikl;    
> **Proizvodnja**: u ovom slučaju, eksplozija potražnje stvara planirani nalog za proizvodnju za dotični artikl;    
> **Podizvođač**: u ovom slučaju, eksplozija potražnje stvara planirani nalog za kooperaciju (podugovaranje) za dotični artikl.  

**Tip izuzimanja**: padajući izbornik omogućuje korisniku da odabere način izdavanja artikla, odnosno kako se želi da materijal bude otpisan (izdan) u proizvodnom području. Moguće je odabrati između:      
> **Automatski**: s ovom postavkom, artikl će biti preuzet tijekom puštanja proizvodnog naloga, odnosno kada nalog prelazi iz statusa Lansiran u Izvršan;    
> **Sa Listom**: s ovom postavkom, artikl će biti preuzet putem generiranja liste za preuzimanje, koja se ručno kreira pomoću procedure unutar područja Proizvodnja > Proizvodni nalozi > Ispisi. U tom slučaju, korisnik ručno odlučuje kada će se materijal otpisati.  
![](/img/it-it/configurations/parameters/production/mrp-parameters/image05.png)  
> **Priručnik**: S ovom postavkom, artikl će biti preuzet samo tijekom prijave proizvodnje razine strukture sastavnice koja je neposredno iznad njega. Preuzimanje će se dogoditi istovremeno s prijavom faze proizvodnje na koju je materijal bio vezan, ili, u nedostatku povezane faze, istovremeno s prijavom posljednje interne faze proizvodnje. Dakle, drugim riječima, kada idem prijaviti "roditelja" iz sastavnice, bit će mi predložene sve količine "djece" koje sam trebao koristiti za proizvodnju tog roditelja i potvrdom tih količina dolazi i do njihovog otpisa. Važno je napomenuti da u slučaju korištenja WIP skladišta, tip preuzimanja Ručni podrazumijeva premještanje dotičnog materijala iz skladišta sirovina u WIP skladište tijekom puštanja proizvodnog naloga, a zatim njegov otpis iz WIP-a tijekom prijave proizvodnje (za objašnjenje WIP skladišta pogledati članak posvećen kartici *Parametri MRP* nazvanoj *Skladišta*).

Osim toga, prisutni su sljedeći obrasci:

**Prioritet nabave**: ovo uređivo polje omogućuje korisniku da postavi vrstu prioriteta koja će se dodijeliti artiklu. Taj prioritet će se koristiti pri kreiranju *zahtjeva za kupnju* tijekom faze [Puštanja planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders/) ukoliko je aktiviran flag **Svojstva nabave iz Parametara MRP artikla**;   

**Generiranje proizvodnih narudžbi**: ako je aktivirano, označava da redovi kupčevih naloga koji sadrže ovaj artikl moraju biti prikazani u filteru kartice *Narudžba kupaca* u okviru *Generiranje proizvodnih narudžbi*; također, artikl će se uzeti u obzir i ako je aktivirana opcija *Automatsko generiranje tijeka proizvodnje* koja se nalazi u [Parametrima MS](/docs/configurations/parameters/production/mps-parameters/). Ako je flag deaktiviran, artikl se neće uzimati u obzir ni u jednoj od ove dvije procedure.;

**Isključiti iz planiranja**: ako je aktivirano, 

**Postotak otpada**: omogućuje korisniku da postavi fiksni postotak otpada za artikl. Taj se postotak uvijek primjenjuje kada se artikl unosi u sastavnicu (BOM).  
*Primjer*: ako je navedeno da pri proizvodnji tog materijala uobičajeno dolazi do otpada od 10%, tada će planer ili MRP, prilikom kreiranja planiranog naloga, umjesto za 100 komada generirati nalog za 100 komada plus 10% otpada.  

**Razmotrite podizvođača**: ako je aktivirano, omogućuje korisniku da artikl bude uključen u automatsko popunjavanje kartice *Materijali za isporuku* i kartice *Materijali koji će se koristiti* unutar *Narudžbe podizvođača*;

Postoje i razni flagovi koji se koriste u obradi MRP procedure i to su:

**Razmotrite količine prema ekonomskom lotu**: Ako je aktiviran, flag omogućuje da se za artikl uzme u obzir ekonomska serija (odnosno minimalna količina proizvodnje/nabave), za proizvodnju (postavljena u odjeljku Parametri proizvodnje unutar ovog obrasca, a koji će biti detaljno objašnjen kasnije), ili za nabavu (postavljena u odjeljku Parametri nabave, također unutar ovog obrasca i bit će objašnjena kasnije);  

**Razmotri višekratnike ekonomskih lotova**: ako je aktiviran, flag omogućuje da se za artikl uzme u obzir multiplikator ekonomske serije proizvodnje ili nabave, postavljen u odgovarajućim sekcijama forme koje će biti detaljno objašnjene kasnije;  

**Obnovi minimalnu zalihu stavki**: ako je aktiviran, flag omogućuje da se za artikl nadopuni minimalna zaliha postavljena u njegovoj matičnoj kartici, kartica *Nabava*;

**Nadopuni ROL stavku**: ako je aktiviran, flag omogućuje da se za artikl nadopuni točka ponovnog naručivanja postavljena u njegovoj matičnoj kartici, kartica *Nabava*;

**Uvažava indeks pokrivenosti**: ako je aktiviran, flag omogućuje da se za artikl uzme u obzir indeks pokrivenosti postavljen u njegovoj matičnoj kartici, kartica *Nabava*; indeks pokrivenosti izražava se u tjednima i kada je naveden, znači da se sustavu zadaje da pokrije potrebe za broj tjedana naveden u ovom polju;  

**Razmotrite alternative materijala**: ako je aktiviran, flag omogućuje da se za artikl uzmu u obzir i njegove alternative postavljene u sastavnici, kartica *Alternative* u slučaju da artikl nije dostupan;  

**Razmotri alternativne faze**: ako je aktiviran, flag omogućuje da se za artikl uzmu u obzir, ako je artikl proizvodnog tipa, i alternativne faze postavljene u njegovom radnom ciklusu. U polju *Tolerancija za zauzeće radnog centra (CDL)* moguće je postaviti postotak koji određuje kada se smatra da je moj radni centar zauzet. (Primjer: ako unesem 90%, kada radni centar dosegne 90% zauzeća, program će početi uzimati u obzir alternativne faze postavljene za taj centar). U polju *Tolerancija proizvodnje* moguće je, također u postocima, definirati koliko se više može proizvesti od planirane količine naloga za proizvodnju za taj artikl. Isto vrijedi i za nabavu u polju *Tolerancija nabave*.  

**Zaključaj za proizvodnju**: ako je aktivno, flag osigurava da ako se narudžba proizvodnje ovog artikla obrađuje putem Općeg planiranja, pojavi se poruka "Nemoguće planirati, artikal XXXX je blokiran za proizvodnju". U tom slučaju, planiranje se zaustavlja i korisnik mora ponovno pokrenuti proces isključujući narudžbu vezanu za ovaj artikal.  

**Kontrola zahtjeva s generiranjem planiranih naloga**: Ako je aktivan, ovaj flag omogućuje da MRP kreira planirane naloge (naravno, pod uvjetom da je aktiviran i istoimeni flag u kartici Parametri unutar [MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)); dok, ako nije aktivan, MRP će kreirati samo prijedlog planiranih naloga (ali ih neće stvarno kreirati).    

**Referentna sastavnica materijala**: sekcija u kojoj se postavlja, ako je različit od šifre artikla u zaglavlju MRP parametara, artikl/varijanta čija se sastavnica treba uzeti kao referenca za planiranje eventualne proizvodne komese za artikl/varijantu na koji se odnose MRP parametri na kojima se radi. Može se unijeti artikl (uključujući **Klasa**, **Šifra** i **Opis**) i eventualna **varijanta**, dok će se **jedinica mjere** automatski popuniti.  

**Parametri proizvodnje** sekcija je aktivna ako je politika upravljanja artiklom Proizvodnja. U njoj se mogu postaviti sljedeća polja:  
> **Lead Time**: u ovom polju korisnik koji ne koristi proizvodne cikluse može postaviti proizvodni lead time za dotični artikl, vrijeme izraženo u radnim danima, računato prema tvorničkom kalendaru i koje se ne mijenja ovisno o količini za proizvodnju;  
> **Fiksno pripremno vrijeme**: u ovom polju korisnik može odlučiti da želi uzeti u obzir fiksnu vrijednost lead timea, a ne onu koja se računa na temelju proizvodnih ciklusa (dakle, sustav neće uzeti u obzir lead time postavljen u proizvodnom ciklusu, već će uzeti ovu vrijednost), unosom vrijednosti u radnim danima i aktiviranjem ove opcije putem flag-a.
Ako je flag aktivan, izračunato vrijeme bit će suma vrijednosti **Fiksnog Lead Timea** (unesene pored flag-a) plus vrijednost **Lead time analize** koja se nalazi u kartici [Kvaliteta](/docs/erp-home/registers/items/create-new-item) u *Registar stavki*, te u tom slučaju vrijeme za faze se ne uzima u obzir, a datum početka se ponovno računa na temelju *Tvornički kalendar*. Ako flag nije aktivan, datum početka se računa uzimajući u obzir faze, alternativne faze i *Kalendar radnih centara*;     
> **Ekonomski lot**: u ovom polju korisnik može postaviti ekonomsku seriju proizvodnje artikla, koja će se uzimati u obzir u postupcima Definicije MPS-a i Općeg rasporeda (samo ako je aktivan flag 'Uzimaj količine prema ekonomskoj seriji' objašnjen ranije);    
> **Limitni dani planiranja**: u rasporedu/planiranju će se uzeti u obzir samo narudžbe, obaveze i potrebe unutar ovog razdoblja, sve što prelazi to razdoblje neće se uzeti u obzir;  
> **Višestruko**: u ovom polju korisnik može postaviti višestruke ekonomske serije proizvodnje artikla, koji će se uzimati u obzir u postupcima [Generiranje proizvodnih narudžbi](/docs/planning/mps-master-production-scheduling/job-order-creation) i Općeg planiranja (samo ako je aktivan flag 'Uzimaj količine prema višestruke ekonomske serije' objašnjen ranije);     
> **Dani grupiranja**: u ovom polju korisnik određuje vremenski period tijekom kojeg procedura grupira eventualne planirane naloge. Ako je npr. ovaj parametar postavljen na 5 za određeni artikl, bit će grupirani svi planirani nalozi čiji je datum unutar intervala od 5 radnih dana (prema fabričkom kalendaru);  
> **Dani tolerancije ranijeg/kašnijeg izvršenja**: to su dani koje MRP tolerira kao raniji ili kasniji pomak dokumenta bez da predloži stvarni pomak, iskorištavajući eventualni višak bez novih prijedloga. Zbog toga, ako npr. artikl ima vrijednosti Dani tolerancije ranijeg izvršenja = 2 i Dani tolerancije kašnjenja = 5, znači da ako MRP detektira potrebu za ranijim ili kasnijim pomakom dokumenta za taj artikl, to neće biti prijavljeno korisniku kao zahtjev za pomak ako je pomak unutar 2 dana prije (za raniji pomak) ili unutar 5 dana poslije (za kasniji pomak). Korisniku će samo biti prijavljeno da je potreba zadovoljena odgovarajućim dokumentom. U suštini, za *Dane tolerancije predujmova* MRP provjerava unaprijed (za zadani broj dana) postoje li zalihe koje pokrivaju potrebe ranijih datuma, dok za *Dane tolerancije zaostataka* MRP provjerava unazad (za zadani broj dana) postoje li zalihe koje pokrivaju potrebe kasnijih datuma;      
> **Tolerancija u danima/postotku od lead timea**: određuje vremenski period u kojem se može izvršiti raniji ili kasniji pomak (izvan tog ograničenja MRP predlaže uklanjanje dokumenta) i do kada se može komunicirati eventualni višak artikla. Može se izraziti u danima ili postotku od lead timea. Primjerice, ako je za artikl definirana tolerancija od 90 dana, dokumenti vezani za taj artikl mogu se pomaknuti najviše za 90 dana unaprijed ili unazad; ako se potreba premaši, MRP će predložiti uklanjanje dokumenta i stvaranje novog na datumu kada je potreba detektirana. Također, višak dostupnosti za taj artikl može biti dostupan najviše 90 dana.  
Ako je ovaj parametar aktivan, MRP će izmijeniti datume sljedećih vrsta dokumenata: planirani nalozi (ako nisu fiksni), proizvodni nalozi (samo oni bez izvještaja), zahtjevi za nabavu, nalozi za posao na ugovoru (ako flag 'Već ispisano' nije aktivan), narudžbe dobavljaču (ako nisu potvrđene), pomičući ih unaprijed ili unazad za maksimalni zadani broj dana;     
> **Obavezno ručno unošenje materijala**: koristi se u Fluentis MES-u. Ako je aktivan, zajedno s flag-om **Obavezno unošenje količine materijala** prisutnim u tablici [Resursi proizvodnje](/docs/production/mes/production-resources) MES-a, osigurava da se u kartici *Materijali* Fluentis MES-a artikl prikaže s količinom nula i da korisnik mora ručno unijeti vrijednost prije nastavka rada;       
 
**Čitaj popise/rute**: u ovom dijelu korisnik može postaviti **verziju** strukture i proizvodnog ciklusa koju MRP procedura treba koristiti za dotični artikl; kao i **broj ciklusa** definiran kao zadani za artikl;  

**Uzimanje u obzir dostupnosti iz**: ovdje korisnik može odabrati koja se poslovna područja i njihovi dokumenti trebaju uzeti u obzir tijekom izvođenja MRP procedure. Područja su Nabava, Prodaja, Skladište (i ovdje se može odlučiti hoće li se uzimati u obzir zalihe lotova u statusu nedostupnosti aktiviranjem odgovarajućeg flag-a), Posao na ugovoru, Planiranje (dakle Proizvodni nalozi, Planirani nalozi nabave, Posao na ugovoru i/ili Proizvodnja), Proizvodnja u tijeku (dakle Proizvodni nalozi);  

**Razmotrite lotove s stanjem *nije raspoloživo**: kao što je objašnjeno u kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) u kartici artikla, lotovi imaju status (dostupno, nedostupno, u karanteni itd.). Ako se aktivira ovaj flag (koji postaje editabilan samo ako se odluči uzimati dostupnost iz Skladišta), sustav će također uzimati u obzir lotove s statusom nedostupnosti;  

**Uključi artikl u MRP izračun**: ovaj flag postaje editabilan samo ako je politika upravljanja 'po nalogu'. Aktiviranjem ovog flag-a, artikli s politikom upravljanja po nalogu, koji se inače analiziraju samo u [Generiranje proizvodnih narudžbi](/docs/planning/mps-master-production-scheduling/job-order-creation), moći će se analizirati i kroz MRP.

**Isključi negativne zalihe**: ako je ovaj flag aktivan, omogućuje da se ne uzimaju u obzir artikli s negativnim zalihama;

<details>
<summary> Sljedeća polja koriste se samo u proceduri [F.C.S raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Odabrana količina**: Preuzimanja iz skladišta izvršavaju se samo kada je dostupna količina barem jednaka ovoj vrijednosti (osim ako je količina za preuzimanje manja od definirane serije preuzimanja). Na primjer, ako je vrijednost postavljena na 50, preuzimanja će se izvršiti samo ako je u skladištu dostupno barem 50 komada ili ako je količina za preuzimanje manja od 50. Ako je vrijednost 0, ne dolazi do preklapanja između narudžbe koja isporučuje artikl i narudžbe koja ga traži (preuzimanje se vrši tek kada je cijela tražena količina dostupna u skladištu). U praksi se vrijednost 0 koristi kada se želi zabraniti preklapanje (što može produžiti rokove isporuke, ali smanjuje rizik od propuštenih termina između narudžbi, pa je plan proizvodnje stabilniji i s većom vjerojatnošću da će se izvršiti bez izmjena). Vrijednost 1 koristi se za maksimalno preklapanje (što omogućuje najbolje moguće rokove isporuke, ali smanjuje vjerojatnost da će se plan izvršiti točno kako je simuliran i povećava mogućnost manje učinkovitog korištenja proizvodnih kapaciteta).

**Količina zalihe**: Prenos u skladište vrši se samo kada je dostupna količina veća ili jednaka ovoj vrijednosti (osim ako preostala količina za skladištenje nije manja). Ako je vrijednost ovog polja 0, narudžba koja isporučuje ovaj artikal prenijet će svoju količinu u skladište u jednom trenutku; parcijalni prijenosi nisu dopušteni. Za narudžbe kupovine i podugovaranja, ova se vrijednost smatra kao da je 0, bez obzira na svoju stvarnu vrijednost.  
Na primjer, razmotrite narudžbu za proizvodnju od 100 komada.  
Ako je serija prijenosa jednaka 0, izvršit će se jedan prijenos od 100 komada u skladište, kada narudžba dostigne 100% napretka, tako da će tih 100 komada biti dostupno tek nakon završetka narudžbe (nema preklapanja narudžbi proizvodnje).  
Na primjer, ako je serija inventara jednaka 25, neće se izvršiti prijenos u skladište dok proizvedena i neprenijeta količina ne dostigne 25. Ako bi količina narudžbe bila 60, imali bismo dva prijenosa po 25 i jedan prijenos za 10 (preklapanje parcijalnih narudžbi). Ako je serija prijenosa jednaka 1, doći će do maksimalnog mogućeg preklapanja, budući da će svaki pojedinačni proizvedeni dio odmah biti prenesen u skladište i bit će dostupan za narudžbe koje zahtijevaju ovaj artikal (to ima smisla ako je količina za proizvodnju mala, inače bismo imali mnogo prijenosa u skladište).

</details>

**Upravljanje prognozom**: padajući izbornik omogućava odabir načina na koji će se generirati proizvodni nalogi iz [Generiranje proizvodnih narudžbi](/docs/planning/mps-master-production-scheduling/job-order-creation) u slučaju generiranja na temelju prognoze. Mogućnosti su sljedeće: Veći od narudžbi kupaca i prodajnih prognoza; Uvijek prodajna prognoza; Manji od narudžbi kupaca i prodajnih prognoza; Uvijek narudžbe kupaca; Zbroj narudžbi kupaca i prodajnih prognoza. Preporučuje se korištenje opcije 'veći od narudžbi i prognoza' jer, ako smo prema prognozi planirali proizvesti 100 komada materijala, a do datuma početka proizvodnje primimo narudžbe za 200 komada, ovaj način upravljanja prognozom će generirati nalog za 200 komada, a ne nalog za 100 komada prema prognozi plus 200 komada prema narudžbama. To je zato što su u tih 200 komada uključene i početne prognoze koje su u stvarnosti premašene.

**Parametri nabave/podizvođača**: ovaj odjeljak je aktivan ako je politika upravljanja artiklom postavljena na 'Nabava' ili 'Podizvođač'. Ovdje se mogu pregledavati i eventualno mijenjati podaci uneseni u kartici *Preferencijalni dobavljači* unutar *Registar stavki* (vrijeme isporuke, vrijeme nabave, ukupno vrijeme nabave, minimalna količina za kupnju, višestruki iznosi minimalne količine).

## 2. Skladišta

U ovoj kartici korisnik ima mogućnost odlučiti da za određeni artikal kretanje artikala putem procedura povezanih s područjem proizvodnje ne smije biti izvršeno prema postavkama *Parametara narudžbi proizvodnje*, već prema prilagođenim postavkama samog artikla.
 
*Primjer*: ako se u padajućem izborniku *Skladište* i padajućem izborniku *Predložak* u odjeljku **Sirovi materijal** postavi skladište i povod različiti od onih postavljenih u istom odjeljku [Parametara naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro),znači da kada se taj artikal uzima za proizvodnju putem liste za preuzimanje, izdavanja narudžbi za proizvodnju ili registracije izvještaja o proizvodnji, trebat će ga uzeti iz skladišta ovdje postavljenog i koristeći uzrok ovdje postavljen, umjesto putem vrijednosti postavljenih u *Parametrima narudžbi za proizvodnju*, koji imaju opću važnost za sve artikle, osim za one za koje je korisnik postavio različite vrijednosti u ovom tabu *Skladišta* u *Parametrima MRP*.

U ovoj kartici stoga će se moći postaviti skladišta vezana uz *Sirovine*, *Poluproizvode*, *Gotove proizvode* i eventualne *Otpade* s pripadajućim uzrocima punjenja i pražnjenja.

Da biste postavili jedno od ovih skladišta, dovoljno je odabrati putem odgovarajućih kombiniranih okvira skladište i uzroke (precodificirani u odgovarajućim tablicama *Skladišta* i *Predlošci*).

Također postoje skladišta *W.I.P.* koja se aktiviraju odabirom opcije *W.I.P* i nastavkom odabira unutar kombiniranih okvira za skladišta i uzroke, kao i za opća skladišta.

:::note VAŽNO
Ista skladišta se nalaze prikazana, u potpuno identičnom sučelju, i unutar [Parametara naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro) gdje su detaljno objašnjene sve logike korištenja.  
:::

Za sve ostalo što nije detaljno opisano u ovom dokumentu vezano uz općenito funkcioniranje formi, pogledajte sljedeći link[Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).  