---
title: Generiranje proizvodnih naloga
sidebar_position: 1
---

Postupak **Generiranja proizvodnih naloga** omogućuje generiranje proizvodnih naloga iz narudžbi kupaca, pretpregleda i/ili iz stavki ispod razine zaliha.

### Narudžbe kupaca {#sales-orders}

Na ovoj kartici možete filtrirati redove narudžbi kupaca koje želite analizirati pomoću procedure **Generiranja proizvodnih naloga**. 

Da bi se prikazale na ovoj kartici, redovi narudžbi moraju zadovoljavati sljedeće **zahtjeve**:

- artikl koji je predmet reda narudžbe kupca mora imati omogućenu zastavicu *Isključi iz MRP-a* u svojim [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);  
- red ne smije biti ispunjen putem *Picking list*, ili *Otpremnica*, ili *Izlazni račun*;   
- red ne smije biti *Prisilno izvršeno*, stoga mora biti u statusu *Neizvršeno* ili *Djelomično izvršeno*;  
- za taj red još nisu generirani *Nalog proizvodnje*;   
- red mora imati uneseni *Datum spremne robe* u *Narudžbi kupca* unutar kartice *Artikli* iz koje dolazi;    
- narudžba kupca iz koje dolazi red mora biti *Ispisana* i *Potvrđena*.

:::note NAPOMENA
Nedostatak BILO KOJE od ovih uvjeta rezultira nemogućnošću prikazivanja reda narudžbe kupca u rešetki.  
:::

U području filtra gdje je moguće filtrirati samo redove narudžbe koje želite prikazati prema dostupnim filtrima. Nakon što postavite potrebne filtre, klikom na gumb **Traži** prikazat će se u rezultatnoj mreži svi redovi narudžbe koji odgovaraju navedenim filtrima.

*Polja*    

**Tip**: predstavlja tip narudžbe kupca;       
**Broj**: predstavlja broj narudžbe kupca;      
**Godina**: predstavlja godinu narudžbe kupca;     
**Datum narudžbe kupca**: predstavlja datum narudžbe kupca;     
**Broj linije**: predstavlja broj reda narudžbe kupca;     
**Klasa** i **Šifra artikla**: predstavljaju klasu i šifru artikla;               
**Varijanta**: predstavlja varijantu artikla;          
**Datum naloga prodaje**: predstavlja datum naloga prodaje;     
**Količina**: predstavlja količinu reda narudžbe koja još nije ispunjena;   
**Dostupnost**: predstavlja raspoloživu količinu artikla na datum gotovosti robe reda narudžbe;             
**JM**: predstavlja jedinicu mjere;        
**Dostava**: predstavlja datum gotovosti robe reda narudžbe;    
**Vrsta naloga** i **Opis naloga**: predstavljaju šifru i opis tipa naloga;    
**Opis artikla**: predstavlja opis artikla;          
**Opis konta**: predstavlja naziv kupca. 

:::note NAPOMENA 
Stupac **Dostupnost** iznosi nula za sve redove u slučaju da je zastavica *Razmotri dostupnost artikla* prisutna u kartici **Parametri** deaktivirana.  
:::

*Posebni gumbi*  

> **Uzmite u obzir za naloge**: omogućuje premještanje odabranih redova narudžbe u karticu **Sažetak** gdje će biti razmotreni u postupku generiranja proizvodnog naloga.    

> **Generiranje toka**: tipka se omogućava samo ako je u [Parametrima MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) omogućena zastavica *Automatsko generiranje tijeka proizvodnje*. Ovom tipkom moguće je izravno pokrenuti izvršavanje cjelokupnog toka proizvodnje i time  *kreirati* *Proizvodne narudžbe* koji bi se izravno rasporedili, a ovisno o sljedećim zastavicama postavljenim također u [Parametrima MPS](/docs/configurations/parameters/production/mps-parameters), eventualno bi se generirali i *Planirane narudžbe* i *Proizvodni nalog*.


### Predviđanje {#forecast}

U ovoj kartici mogu se filtrirati redovi *Prodajnih Prognoza* ili *Glavnog Plana* ili  **Generiranja proizvodnih naloga**, koristeći filtre za artikl i varijantu.

Redovi *Prodajnih prognoza* koji se mogu prikazati u ovoj kartici moraju ispunjavati sljedeće **uvjete**:

- godišnja prodajna prognoza mora biti u statusu  *Konsolidirana*;  
- godišnja prodajna prognoza mora biti generirana s važećom *Verzijom*;  
- za prodajne prognoze ne smiju biti još generirane *Naloge proizvodnje*;  
- za redove u *Glavnom planu proizvodnje* koji se mogu prikazati na ovoj kartici, ne smiju biti još generirane *Naloge proizvodnje*.

U području filtra moguće je filtrirati samo redove narudžbi koje želite vidjeti prema unesenim *filterima*.  
**Prikaz varijanti**: omogućuje prikaz varijante ako je zastava aktivna;  
**Mjesec završetka rasporeda**: koristi se za prikazivanje samo prodajnih prognoza koje idu do navedenog datuma;    
**Tip radnog naloga**: predstavlja Tip radnog naloga koji se generira;      
**Tip naloga**: omogućuje postavljanje *Vrste narudžbe prodaje* koje se moraju uzeti u obzir istovremeno s količinama u prodajnim prognozama, tako da postupak stvaranja proizvodne narudžbe generira proizvodnu narudžbu s količinom jednako najvećoj, najmanjoj ili zbroju količina prisutnih za isti članak u retku narudžbe kupca i/ili u prodajnoj prognozi ili glavnom planu.

Kada su postavljeni potrebni filtri, klikom na gumb **Traži** će se prikazati u rezultatnoj mreži sve odgovarajuće redove prognoze.    

*Polja* 

**Klasa**, **Kod** i **Opis artikla**;    
**Varijanta**: prikazuje se ako je odgovarajuća opcija označena ili ako je odabrana u području filtriranja;   
**Godina**: predstavlja godinu prodajne prognoze;  
**Mjesec/Tjedan**: broj mjeseca ili tjedna prodajne prognoze;    
**Datum generiranja narudžbenice**: datum generiranja proizvodne narudžbenice;    
**Datum početka / završetka prognoze**: na primjer, ako je prognoza postavljena za mjesec svibanj, datum početka bit će 01/05, a datum završetka 31/05;     
**Količina**: predstavlja količinu za svaku pojedinu liniju prodajne prognoze;  
**Konto/Podkonto/Opis konta**: predstavlja konto kupca za odgovarajuću liniju prodajne prognoze (ako je dostupan).   

*Poseban gumb*  

> **Razmotri za radni nalog**: omogućuje premještanje odabranih redaka u karticu **Sažetak** gdje će biti razmotreni u postupku generiranja proizvodne narudžbe.  


### Sigurnosna zaliha {#safety-stock}

Putem ove kartice mogu se filtrirati redci artikala koji se upravljaju na zalihama i koje želite analizirati postupkom *Generiranja proizvodnih narudžbi*.   
Jedini **uvjet** koji omogućuje prikazivanje artikla u ovoj mreži je taj da u svojim [MRP parametrima ](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), ima *Tip upravljanja na zalihama*.

U području za filtriranje moguće je filtrirati samo redke narudžbi koje želite prikazati na temelju unesenih *filtera*.  
**Prikaz varijanti**: aktivni zastavica omogućuje prikaz varijante;  
**Tip proizvodne narudžbe**:  omogućuje odabir tipa proizvodne narudžbe koju želite generirati;  
**Ispod točke ponovnog naručivanja do**: predstavlja datum do kojeg ne želite da artikli u mreži budu ispod zaliha.    

Nakon što postavite potrebne filtere, klikom na gumb **Traži** prikazat će se u mreži rezultata svi redci artikala koji odgovaraju navedenim filterima.  

Podaci koji se mogu prikazati unutar mreže su:    
**Klasa**, **Šifra** i **Opis artikla**;    
**Varijanta**: prikazuje se ako je odabrana istoimena zastavica u području za filtriranje; Točka ponovnog naručivanja;   
**Razina zalihe za ponovno naručivanje**, **Minimalne zalihe** i **Dani za ponovno naručivanje**: preuzimaju se iz *Šifarnika artikla* > kartica *Nabava*;   
**Prosječna dnevna potrošnja**: izračunava se tako da se od točke ponovnog naručivanja oduzmu minimalne zalihe i dobiveni rezultat podijeli s brojem dana za ponovno naručivanje;    
**Količina ekonomske proizvodnje lota** i njezini **Višestruki**: preuzimaju se iz [MRP parametara ](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)  artikla;  
**Raspoloživost**: predstavlja dostupnost artikla na dan pokretanja obrade; 
**Početna raspoloživost**: predstavlja raspoloživost artikla na dan kada se pokreće obrada;  
**Konačna raspoloživost**: predstavlja raspoloživost artikla na dan naveden u polju **Ispod točke ponovnog naručivanja na datum** prisutan u području za filtriranje;   
**Minimalna dostupnost**: predstavlja minimalnu dostupnost artikla u vremenskom razdoblju između početne i konačne dostupnosti.   

:::note NAPOMENA
Za dokumente bez datuma isporuke uzima se u obzir parametar *Ako nisu specificirani datumi dostave* na kartici Parametri.
:::

*Donja mreža* prikazuje detalje o dostupnosti artikla odabranog u glavnoj mreži.  

:::note NAPOMENA
U prvom retku mreže, dostupnost je određena zbrojem zaliha i svih dospjelih dokumenata (s datumom prije današnjeg dana).  
:::

*Posebni gumbi*  

> **Razmotri za radni nalog**: omogućuje premještanje odabranih redaka u karticu **Sažetak** gdje će biti razmatrani u postupku generiranja proizvodne narudžbe.   

Samo redci za koje postupak smatra da se može stvoriti proizvodna narudžba bit će preneseni u karticu *Sažetak*. Postupak za svaki artikl predlaže proizvodnu narudžbu i nastoji osigurati da se na dan kada artikl može pasti ispod minimalne razine zaliha, obnovi putem proizvodne narudžbe s istim datumom kao datum ispod kojeg se ne želi da artikl padne ispod zaliha.  Količina ove narudžbe treba omogućiti opstanak do datuma **Ispod točke ponovnog naručivanja** navedenog u području za filtriranje: naravno, ako artikl ima ekonomske serije proizvodnje ili kupovine i njihove višekratnike, oni se poštuju.  

### Sažetak

Ova kartica prikazuje redove koji su premješteni iz prethodnih kartica i koji se trebaju pretvoriti u proizvodne narudžbe.

Kartica sadrži:  
- sekciju **Predloženi proizvodni nalog** u kojoj korisnik može postaviti **Vrstu**, **Godinu** i **Broj** proizvodne narudžbe kojoj trebaju biti dodani odabrani redci u istoj kartici **Sažetak**. 
- rezultatnu mrežu gdje će biti prikazani redci artikala koji su premješteni iz drugih kartica.  

*Polja u mreži*:  

**Podaci iz**: predstavlja karticu iz koje je redak došao;      
**Klasa**, **Šifra artikla** i **Opis**: predstavljaju klasu, šifru i opis artikla;              
**Varijanta**: predstavlja varijantu artikla;     
**Količina**: predstavlja količinu proizvodne narudžbe predložene postupkom;  
**Dostupnost**: predstavlja dostupnu količinu artikla na *Datum isporuke*;            
**Datum isporuke**: predstavlja datum završetka predložene proizvodne narudžbe (koji korisnik može ručno mijenjati);                  
**Datum početka prognoze**: predstavlja datum početka prognoze;      
**Kod vrste**: predstavlja kod klijentske narudžbe;          
**Broj narudžbe kupca**: predstavlja broj klijentske narudžbe;  
**Konto/Podkonto/Opis konta**: predstavljaju račun klijenta vezan uz liniju prodajne prognoze (ako postoji);      
**Vrsta narudžbe** i **Opis narudžbe**: predstavljaju kod i opis vrste narudžbe.       

Nakon što korisnik odabere željene retke, ima mogućnost stvaranja proizvodnih narudžbi prema postavljenim kriterijima u kartici **Parametri**, koristeći gumb **Automatsko kreiranje radnih naloga**. Nakon završetka procesa, procedura prikazuje prozor u kojem su navedeni brojevi generiranih narudžbi, a korisnik samo treba kliknuti na OK i zatvoriti prozor.  

*Specifičan gumb*   
> **Automatsko kreiranje radnih naloga**: poziva postupak koji generira proizvodne narudžbe iz odabranih redaka.   

### Parametri

Putem ove kartice podešavaju se svi parametri koji se odnose na upravljanje stvaranjem proizvodnih narudžbi i na način kako treba upravljati fazama nakon generiranja samih narudžbi. Neke postavke prisutne na ovoj kartici preuzimaju se iz prozora [Parametri MPS](/docs/configurations/parameters/production/mps-parameters).

**Metoda generiranja podnaloga**:  
- **Vrsta narudžbenice** (Jedan proizvod / Više proizvoda): ponovno se primjenjuju podaci postavljeni u kartici [Parametri MPS.](/docs/configurations/parameters/production/mps-parameters)  Prilikom generiranja narudžbe iz *Proizvodne narudžbe* moguće je ipak izmijeniti ovu postavku unutar ovog prozora, kao i postavku u sljedećoj kombinaciji;  
- **Grupiranje proizvoda za**: kombinacija preko koje možete naznačiti kako se eventualno moraju grupirati članci unutar iste narudžbe *Jedan proizvod* ili *Više proizvoda*.  

> Ako je vrsta narudžbe *Monoproizvod*, jedino dopušteno grupiranje je po *Artiklu*; ovaj način omogućuje korisniku da sustav automatski generira niz  *Monoproizvodnih*, narudžbi, odabirom liste redova *klijentskih Narudžbi*, redova iz  *Prodajnih prognoza* ili *Glavnog Plana proizvodnje* ili redova koji dolaze iz područja *Sigurnosnih zaliha* tako da svaka generirana narudžba prikazuje zbroj količina potrebnih za isti artikl. Datum završetka grupirane narudžbe uvijek je jednak najbližem potrebom prema datumu pokretanja obrade.    
> Ako je vrsta narudžbe *Multiproizvod* grupiranje može biti po klijentu ili projektu i omogućuje korisniku da u istu *Multiproizvodnu* narudžbu unese više artikala iz redova klijentskih narudžbi povezanih s istim klijentom, istom prodajnom narudžbom ili istom prodajnom narudžbom istog klijenta.  

**Prioritet nabave**: ova kombinacija prikazuje prioritet opskrbe koji je bio postavljen u [MPS Parametrima](/docs/configurations/parameters/production/mps-parameters) odabirući prioritet iz kodiranih opcija unutar tablice *Prioritet opskrbe* koja se nalazi u sekciji *Opće postavke* tablica.

**Ažuriraj postojeće podnaloge**: odabrane narudžbe u sažetnom tabu dodaju se postojećoj narudžbi (označenoj u polju *Predložena proizvodna narudžba **sažetne** kartice), samo ako je omogućena opcija **Ažuriraj postojeće podnaloge** u tablici parametara. Automatski će biti predložena već spremljena narudžba u koju se mogu dodati retci, ako već postoji narudžba istog tipa i datuma.         

Nakon toga, putem odgovarajućih oznaka, može se naznačiti treba li narudžba biti generirana iz **Klijentskih narudžbi** ili iz **Prognostičkog plana** (i u slučaju prognostičkog plana, da li iz **Plana prodaje** ili iz **Minimalnih zaliha**), ili, konačno, iz **Sigurnosnih zaliha**. U ovom posljednjem slučaju koristi se poseban algoritam objašnjen u odjeljku posvećenom kartici [Sigurnosnih zaliha](#safety-stock).

**Predviđanje**: ako je oznaka aktivna, tada se može odlučiti u kojem vremenskom modu trebaju biti generirane proizvodne narudžbe, između sljedećih opcija:    
> **Mjesečno**: U ovom slučaju, proizvodna narudžba će biti generirana u mjesecu kada završava datum Prognoze prodaje ili kada je količina unesena u Glavni plan proizvodnje. Korisnik također može postaviti dan u mjesecu kada procedura automatskog stvaranja narudžbe treba postaviti očekivani datum završetka narudžbe;    
> **Tjedno**: u ovom slučaju bit će generirana proizvodna narudžba za svaki tjedan u mjesecu kada završava datum Prognoze prodaje ili kada je količina unesena u Glavni plan proizvodnje. Korisnik također može postaviti dan u tjednu kada procedura automatskog stvaranja narudžbe treba postaviti očekivani datum završetka narudžbe;  
> **Stvarni**: u ovom slučaju bit će generirana proizvodna narudžba za svaki tjedan u mjesecu kada završava datum pojedinačne linije *Prognoze prodaje* ili kada je količina unesena u *Glavni plan proizvodnje*, uz točno uzimanje u obzir datuma završetka pojedinačne linije *Prognoze prodaje*;  
> **Tjedno uzimajući u obzir radne dane zone isporuke**: u ovom slučaju bit će generirana proizvodna narudžba uzimajući u obzir radne dane zone isporuke povezane s klijentom za kojeg je stvorena *Prognoza prodaje*;  
> **Grupiranje predviđanja po kupcima**: ova oznaka omogućuje generiranje proizvodnih narudžbi grupiranjem linija prognoze istih klijenata. 

**Ako nisu specificirani datumi dostave** ova sekcija se odnosi isključivo na karticu *Klijentskih narudžbi* i karticu *Sigurnosne zalihe* u *Generiranju proizvodnih narudžbi*. Ovdje korisnik može odlučiti hoće li, u slučaju nedostatka *Datuma gotovog proizvoda* u retku klijentske narudžbe koji se mora analizirati postupkom, taj redak bez datuma biti ignoriran ili će se prihvatiti određeni datum kao očekivani datum završetka generirane narudžbe, ili će se prihvatiti određeni datum kao očekivani datum početka generirane narudžbe (u ovim posljednja dva slučaja, datumi se biraju u odgovarajućim kombinacijama).  

**Razmotrite raspoloživost stavke**: ova oznaka omogućava, ako je aktivirana, da se u svim karticama *Generiranja proizvodnih narudžbi* prikaže dostupnost artikla na *Datum očekivanog završetka* proizvodne narudžbe koja će biti stvorena. Isti postupak vrijedi i za karticu *Sažetak*. Dostupnost se uzima u obzir na temelju aktiviranih oznaka u *MPS parametrima* (Radni nalog, Nabava, Prodaja, Proizvodnja, Skladište). U ovom slučaju, prilikom stvaranja narudžbe, procedura će uzeti u obzir dostupnost i stvoriti narudžbu za razliku između potražnje i dostupnosti tog artikla.

**Skladište protustavke**: u mreži se prikazuju skladišta koja su unesena u prozor  [Izračun raspoloživosti](/docs/erp-home/registers/items/calculate-availability). Iz ove kartice *Parametri* mogu se samo pregledavati, ali ne mogu se mijenjati.  

**Proizvodno mjesto**: ova informacija, ako je navedena, koristi se kako bi procedura generiranja narudžbe iz klijentskog naloga uzimala u obzir samo potvrđene retke klijentskog naloga, gdje je planirano skladište za izdavanje povezano s tim proizvodnim mjestom.

**Izračun količine prema ekonomskom lotu**: ako je ovaj flag aktiviran, procedura će generirati proizvodnu narudžbu uzimajući u obzir ekonomski lot nabave unesen u kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors) za zadani dobavljač, ako se analizirani artikl u *Generaciji proizvodnih narudžbi* ima *Tip nabave*: *Nabava* ili *Radni nalog*, također će uzeti u obzir ekonomski lot proizvodnje unesen u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ako je artikl predmet narudžbe ima *Tip nabave* 'Proizvodnja'.       

**Izračun količine prema višekratnicima artikla**: ako je ovaj flag aktiviran, procedura će generirati proizvodnu narudžbu uzimajući u obzir i višekratnike ekonomskog lota nabave unesene u kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors) na odabranom dobavljaču kao zadani za artikle ako artikl koji je predmet narudžbe ima kao *Tip nabave* *Nabava* ili *Podizvođač*,  višekratnici ekonomične količine proizvodnje unesenih u [MRP Parametre](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)  ako analizirani artikl u *Generiranju proizvodnih narudžbi* ima kao *Tip nabave*: *Proizvodnja*. Naravno, ovaj flag može biti aktiviran samo ako je aktiviran i flag naveden u prethodnom odlomku.              

**Obnovi minimalnu zalihu stavki**:  ako je ovaj flag aktiviran, korisnik može omogućiti da se za analizirani artikl u *Generiranju proizvodnih narudžbi*obnovi minimalna zaliha unesena u *Šifarnik artikla > kartica Nabava*.    

**Obnova točke ponovnog naručivanja artikla**: ako je ovaj flag aktiviran, korisnik može omogućiti da se za analizirani artikl u *Generiranju proizvodnih narudžbi* obnovi točka ponovnog naručivanja unesena u *Šifarnik artikla > kartica Nabava*.

**Isključi odgođene naloge**: ako je ovaj flag aktiviran, korisnik može omogućiti da procedura generiranja proizvodne narudžbe izuzme iz izračuna dostupnosti analiziranog artikla količine koje dolaze iz redova klijentskih narudžbi čiji je *Datum gotove robe* prije trenutnog datuma.  

Nakon što su postavljeni parametri, možete nastaviti s kreiranjem narudžbi u njihovim odgovarajućim karticama za [Narudžbe kupca](#sales-orders), [Prognoze](#forecast) i [Minimalne zalihe](#safety-stock).

*Poseban gumb*  
> **Automatsko kreiranje radnih naloga**: poziva postupak koji generira proizvodne narudžbe iz odabranih redaka.

Za detalje o uobičajenom radu s formama, pogledajte link [Značajke, gumbe i zajednička polja](/docs/guide/common).
