---
title: Generiranje radnih naloga proizvodnje
sidebar_position: 2
---

Postupak **Generiranje radnih naloga proizvodnje** omogućuje generiranje proizvodnih naloga iz narudžbi kupaca, plana prodaje i/ili stanja ispod minimalne zalihe.

### Narudžbe kupaca {#sales-orders}

U ovom tabu moguće je filtrirati stavke narudžbi kupaca koje će analizirati postupak **Generiranje radnih naloga proizvodnje**.

Kako bi se stavke prikazale u ovom tabu, moraju zadovoljavati sljedeće **uvjete**:

- artikl na stavci narudžbe mora imati aktiviranu oznaku *Generiranje radnih naloga proizvodnje* u svojim [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);
- stavka ne smije biti izvršena putem *Liste za preuzimanje*, *Otpremnice* ili *Izlaznog računa*;
- stavka ne smije biti označena kao *Prisilno izvršena* te mora biti u statusu *Neizvršena* ili *Djelomično izvršena*;
- iz te stavke još ne smiju biti generirani *Proizvodni nalozi*;
- stavka mora imati popunjene datume *Datum spremnosti robe* i *Datum isporuke* u *Narudžbi kupca*, na kartici *Artikli*;
- narudžba kupca iz koje stavka potječe mora biti *Ispisana* i *Potvrđena*.

:::note Napomena
Nepostojanje samo JEDNOG od navedenih uvjeta onemogućuje prikaz stavke narudžbe u tablici.
:::

U području filtera moguće je filtrirati samo one stavke narudžbi koje se žele prikazati prema zadanim kriterijima. Nakon postavljanja potrebnih filtera, klikom na gumb **Traži** u tablici prikazat će se sve stavke koje odgovaraju zadanim kriterijima.

### Polja

**Tip**: označava vrstu narudžbe kupca;       
**Broj**: označava broj narudžbe kupca;     
**Godina**: označava godinu narudžbe kupca;     
**Datum narudžbe kupca**: označava datum narudžbe kupca;     
**Broj linije**: označava broj retka u narudžbi kupca;        
**Kupac**: označava konto i podkonto kupca na narudžbi;         
**Klasa** i **Šifra artikla**: označavaju klasu i šifru artikla;             
**Varijanta**: označava varijantu artikla;          
**Količina**: označava količinu koja još treba biti izvršena sa stavke narudžbe;   
**Raspoloživost**: označava raspoloživu količinu artikla na datum spremnosti robe sa stavke narudžbe;           
**Mjerna jedinica**: označava mjernu jedinicu;        
**Dostava**: označava datum spremnosti robe sa stavke narudžbe;  
**Tip podnaloga** i **Opis naloga**: označavaju šifru i opis vrste naloga povezane s *vrstom narudžbe kupca*;    
**Opis artikla**: označava opis artikla;          
**Opis konta**: označava naziv kupca.

:::note Napomena
Stupac **Raspoloživost** jednak je nuli za sve retke ako je oznaka *Uzmi u obzir raspoloživost artikla* na kartici **Parametri** deaktivirana.
:::

### Posebne tipke

> **Razmotri za radni nalog**: omogućuje premještanje odabranih redaka narudžbi u karticu **Sažetak prototipa naloga**, gdje ih postupak generiranja proizvodnih naloga može uzeti u obradu.

> **Generiranje toka**: gumb je dostupan samo ako je u [MS parametrima](/docs/configurations/parameters/production/mps-parameters/) aktivirana oznaka *Automatsko generiranje proizvodnog toka*. Ovim gumbom moguće je izravno pokrenuti cijeli proizvodni proces, odnosno *stvaranje* *proizvodnih naloga* koji će odmah biti planirani te, ovisno o dodatnim oznakama postavljenima u [MS parametrima](/docs/configurations/parameters/production/mps-parameters/), mogu automatski generirati i *planirane naloge nabave, kooperacije i proizvodnje*, uz mogućnost definiranja koji će se od njih automatski otpustiti.     

Korištenjem ovog gumba moguće je odmah dobiti sve planirane naloge otpuštene, a proizvodne naloge u izvršnom statusu, preskačući tako sve međukorake.

### Sigurnosna zaliha {#safety-stock}

Putem ove kartice moguće je filtrirati artikle koji se vode po zalihi i koje treba analizirati postupak **Generiranje proizvodnih naloga**.

Jedini **uvjet** da bi se artikl prikazao u ovoj tablici jest da u svojim [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ima postavljen *Tip upravljanja* na *Zaliha*.

U području filtera moguće je filtrirati samo artikle koje želite prikazati prema zadanim kriterijima.

**Prikaz varijanti**: aktivna oznaka omogućuje prikaz varijante;  
**Vrsta radnog naloga proizvodnje**: omogućuje odabir vrste proizvodnog naloga koji će se generirati;  
**Ispod točke naručivanja na datum**: predstavlja datum do kojeg se želi osigurati da artikli iz tablice ne padnu ispod minimalne zalihe.

Nakon postavljanja potrebnih filtera, klikom na gumb **Traži** u tablici prikazat će se svi artikli koji odgovaraju zadanim kriterijima.

U tablici se mogu prikazati sljedeći podaci:

**Klasa**, **Šifra** i **Opis artikla**;  
**Varijanta**: prikazuje se ako je aktivirana istoimena oznaka u području filtera;  
**Točka narudžbe**, **Minimalna zaliha** i **Dani za ponovno naručivanje**: preuzimaju se iz *Šifarnika artikala* > kartica *Nabava*;  
**Prosječna dnevna potrošnja**: izračunava se oduzimanjem minimalne zalihe od točke naručivanja te dijeljenjem dobivenog rezultata s brojem dana naručivanja;  
**Ekonomski lot** i njezini **Višekratnici**: preuzimaju se s kartice proizvodnje u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla ako je *vrsta nabave proizvodnja*, dok se u slučaju *vrste nabave nabava* preuzimaju od *zadanog dobavljača* s kartice *Preferirani dobavljači* u *šifarniku artikla*;           
**Zaliha**: prikazuje stanje zalihe artikla na tekući datum;       
**Početna dostupnost**: predstavlja raspoloživost artikla na dan pokretanja obrade;     
**Završna raspoloživost**: predstavlja raspoloživost artikla na datum naveden u polju **Ispod točke naručivanja na datum** u području filtera;   
**Minimalna dostupnost**: predstavlja najnižu raspoloživost artikla u razdoblju između početne i završne raspoloživosti.

:::note Napomena
Za dokumente bez definiranog datuma isporuke uzima se u obzir parametar *Ako datum isporuke nije naveden* na kartici **Parametri**.
:::

**Donja tablica** prikazuje detaljan pregled raspoloživosti artikla odabranog u glavnoj tablici.

:::note Napomena
U prvom retku tablice raspoloživost je jednaka zbroju zalihe i svih dospjelih dokumenata (s datumom prije današnjeg datuma).
:::

### Posebna tipka

> **Razmotri za radni nalog**: omogućuje premještanje odabranih redaka u karticu **Sažetak prototipa naloga**, gdje ih postupak generiranja proizvodnih naloga može uzeti u obradu.

U karticu **Sažetak prototipa naloga** prenijet će se samo oni retci za koje postupak procijeni da je moguće generirati proizvodni nalog. Za svaki artikl postupak predlaže jedan proizvodni nalog te nastoji osigurati da se na datum kada postoji rizik da artikl padne ispod minimalne zalihe, zaliha nadopuni proizvodnim nalogom čiji je datum jednak datumu pada ispod minimalne zalihe. Količina tog naloga mora omogućiti pokrivanje potreba sve do datuma navedenog u polju **Ispod točke naručivanja na datum** u području filtera. Ako su za artikl definirane ekonomske serije proizvodnje ili nabave te višekratnici, oni će se pritom poštovati.

### Predviđanje {#forecast}

U ovoj kartici moguće je filtrirati retke iz *Prognoze prodaje* ili *Glavnog plana proizvodnje* koje će analizirati postupak **Generiranje radnih naloga proizvodnje**, koristeći filtere za artikl i varijantu.

Retci *Prognoze prodaje* koji se mogu prikazati u ovoj kartici moraju zadovoljavati sljedeće **uvjete**:

- godišnja prognoza prodaje mora biti u statusu *Konsolidirana*;
- godišnja prognoza prodaje mora biti generirana s važećom *Verzijom*;
- iz retka prognoze još ne smiju biti generirani *Proizvodni nalozi*;
- iz redaka *Glavnog plana proizvodnje* koji se mogu prikazati u ovoj kartici još ne smiju biti generirani *Proizvodni nalozi*.

U području filtera moguće je filtrirati samo retke koje želite prikazati prema zadanim kriterijima.

**Prikaz varijante**: aktivna oznaka omogućuje prikaz varijante;  
**Mjesec završetka planiranja**: omogućuje prikaz samo onih prognoza prodaje koje završavaju do odabranog datuma;  
**Tip naloga**: označava vrstu proizvodnog naloga koji će se generirati;    
**Vrsta radnog naloga proizvodnje**: tablica omogućuje definiranje *Vrsta narudžbi kupaca* koje treba uzeti u obzir zajedno s količinama iz prognoze prodaje, tako da postupak generiranja proizvodnih naloga može stvoriti nalog s količinom koja odgovara većoj, manjoj ili zbrojenoj vrijednosti količina za isti artikl iz retka narudžbe kupca i/ili prognoze proizvodnje odnosno glavnog plana.

Nakon postavljanja potrebnih filtera, klikom na gumb **Traži** u tablici prikazat će se svi retci prognoze koji odgovaraju zadanim kriterijima.

### Polja

**Klasa**, **Šifra** i **Opis artikla**;  
**Varijanta**: prikazuje se ako je aktivirana istoimena oznaka u području filtera;  
**Godina**: predstavlja godinu prognoze prodaje;  
**Mjesec/Tjedan**: predstavlja broj mjeseca ili tjedna prognoze prodaje;  
**Procijenjeni datum radnog naloga proizvodnje**: predstavlja datum generiranja proizvodnog naloga;  
**Datum početka / završetka predviđanja**: primjerice, ako je prognoza definirana za mjesec svibanj, datum početka bit će 01.05., a datum završetka 31.05.;   
**Količina**: predstavlja količinu na pojedinom retku prognoze;  
**Konto/Podkonto/Opis konta**: predstavlja konto kupca povezan s retkom prognoze prodaje (ako postoji).

### Posebna tipka

> **Razmotri za radni nalog**: omogućuje premještanje odabranih redaka u karticu **Sažetak prototipa naloga**, gdje ih postupak generiranja proizvodnih naloga može uzeti u obradu.

### Sažetak prototipa naloga

Ova kartica prikazuje retke koji su preneseni iz prethodnih kartica i koje je potrebno pretvoriti u proizvodne naloge.

Kartica sadrži:

- odjeljak **Predloženi nalog proizvodnje**, u kojem korisnik može postaviti **Tip**, **Godinu** i **Broj** proizvodnog naloga kojem će se dodati retci odabrani na istoj kartici **Sažetak prototipa naloga**;
- tablicu rezultata u kojoj se prikazuju retci artikala preneseni iz ostalih kartica.

### Polja tablice

**Podaci iz**: označava karticu iz koje redak potječe;     
**Klasa**, **Šifra artikla** i **Opis**: označavaju klasu, šifru i opis artikla;             
**Varijanta**: označava varijantu artikla;     
**Količina**: predstavlja količinu naloga koju je predložio sustav;
**Raspoloživost**: predstavlja raspoloživu količinu artikla na *Datum isporuke*;            
**Datum dostave**: predstavlja datum završetka predloženog proizvodnog naloga (koji korisnik može ručno izmijeniti);                
**Početni datum predviđanja**: predstavlja datum početka prognoze;      
**Tip narudžbe kupca**: predstavlja šifru narudžbe kupca;        
**Broj narudžbe kupca**: predstavlja broj narudžbe kupca;  
**Konto / Podkonto / Opis konta**: predstavljaju konto kupca povezan s retkom prognoze prodaje (ako postoji);      
**Tip naloga** i **Opis naloga**: predstavljaju šifru i opis vrste naloga.       

Nakon odabira željenih redaka, korisnik može generirati proizvodne naloge prema kriterijima definiranima na kartici **Parametri**, koristeći gumb **Automatsko formiranje naloga**. Po završetku obrade postupak prikazuje prozor s brojevima generiranih naloga, koji korisnik samo treba potvrditi klikom na **OK** i zatvoriti.

### Posebna tipka

> **Automatsko kreiranje radnih naloga**: pokreće postupak generiranja proizvodnih naloga iz odabranih redaka.

### Parametri

Putem ove kartice definiraju se svi parametri vezani uz stvaranje proizvodnih naloga i način na koji će se upravljati sljedećim fazama nakon njihovog generiranja. Dio postavki na ovoj kartici preuzima se iz prozora [MPS parametri](/docs/configurations/parameters/production/mps-parameters).

### Metoda generiranja naloga

- **Vrsta naloga** (*Monoproizvod* / *Multiproizvod*): predlaže se vrijednost definirana na kartici [MPS parametri](/docs/configurations/parameters/production/mps-parameters). Tijekom generiranja naloga kroz postupak *Generiranje proizvodnih naloga* moguće je promijeniti ovu postavku, kao i onu definiranu u sljedećem polju;
- **Grupiranje proizvoda prema**: polje kojim se definira na koji način artikli mogu biti grupirani unutar istog *Monoproizvodnog* ili *Multiproizvodnog* naloga.

> Ako je vrsta naloga *Monoproizvod*, jedino dopušteno grupiranje je prema *Artiklu*. Ovakav način rada omogućuje automatsko generiranje više *Monoproizvodnih* naloga na temelju odabranih redaka iz *Narudžbi kupaca*, *Prognoza prodaje*, *Glavnog plana proizvodnje* ili *Zalihe ispod minimalne razine*, pri čemu svaki generirani nalog sadrži zbroj traženih količina za isti artikl. Datum završetka grupiranog naloga uvijek odgovara datumu potrebe koja je najbliža datumu pokretanja obrade.

> Ako je vrsta naloga *Multiproizvod*, grupiranje se može provoditi prema kupcu ili projektu te omogućuje uključivanje više artikala u isti *Multiproizvodni* nalog, pod uvjetom da potječu iz redaka narudžbi kupaca povezanih s istim kupcem, istim prodajnim nalogom ili istim prodajnim nalogom istog kupca.

### Prioritet nabave (dolazak)

Polje prikazuje prioritet nabave definiran u [MPS parametrima](/docs/configurations/parameters/production/mps-parameters), odabran među prioritetima definiranim u tablici *Prioritet nabave* unutar sekcije *Opće postavke*.

### Ažuriranje postojećih naloga

Retci odabrani na kartici sa sažetkom dodaju se postojećem nalogu (navedenom u okviru *Predloženi proizvodni nalog* na kartici **Sažetak**) samo ako je na kartici **Parametri** aktivirana oznaka **Ažuriranje postojećih naloga**.

Sustav će automatski predložiti već spremljeni nalog u koji je moguće dodati retke, ako već postoji nalog iste vrste i s istim datumom.

Nadalje, putem odgovarajućih oznaka moguće je definirati treba li se nalog generirati iz **Narudžbi kupaca**, iz **Prognoze** (pri čemu se može odabrati **Prognoza prodaje** ili **Glavni plan proizvodnje**) ili iz **Zalihe ispod minimalne razine**. U potonjem slučaju koristi se poseban algoritam opisan u odjeljku posvećenom kartici [Zaliha ispod minimalne razine](#safety-stock).

### Predviđanje

Ako je oznaka aktivna, moguće je odabrati način vremenskog generiranja proizvodnih naloga:

> **Mjesečno**: proizvodni nalog generira se u mjesecu u kojem se nalazi datum završetka Prognoze prodaje ili u mjesecu u kojem je količina unesena u Glavni plan proizvodnje. Korisnik također može definirati dan u mjesecu koji će sustav koristiti kao planirani datum završetka naloga;

> **Tjedno**: generira se jedan proizvodni nalog za svaki tjedan mjeseca u kojem se nalazi datum završetka Prognoze prodaje ili mjeseca u kojem je količina unesena u Glavni plan proizvodnje. Korisnik može odrediti i dan u tjednu koji će biti postavljen kao planirani datum završetka naloga;

> **Stvarni datumi**: generira se jedan proizvodni nalog za svaki tjedan mjeseca u kojem se nalazi datum završetka *Prognoze prodaje* ili mjeseca u kojem je količina unesena u *Glavni plan proizvodnje*, uz korištenje točnog datuma završetka pojedinog retka *Prognoze prodaje*;

> **Tjedno uzimajući u obzir proizvodne dane zone dostave**: proizvodni nalog generira se uzimajući u obzir dane proizvodnje zone isporuke povezane s kupcem za kojeg je izrađena *Prognoza prodaje*;

> **Grupiranje predviđanja po kupcima**: ako je oznaka aktivna, proizvodni nalozi generiraju se grupiranjem redaka prognoze istih kupaca.

### Ako nisu specificirani datumi dostave

Ovaj odjeljak odnosi se isključivo na kartice *Narudžbe kupaca* i *Zaliha ispod minimalne razine* u postupku *Generiranje proizvodnih naloga*.

Korisnik može odabrati kako će se postupak ponašati ako na retku narudžbe kupca koji se obrađuje nije unesen *Datum spremnosti robe*:

- ignorirati redak bez datuma;
- prihvatiti datum kao planirani datum dostave koji će biti generiran;
- prihvatiti datum kao planirani datum početka koji će biti generiran.

U posljednja dva slučaja datum se odabire u odgovarajućim poljima.

### Razmotrite raspoloživost stavke

Ako je oznaka aktivna, na svim karticama postupka *Generiranje proizvodnih naloga* prikazuje se raspoloživost artikla na *Planirani datum završetka* proizvodnog naloga koji će biti kreiran. Isto vrijedi i za karticu *Sažetak predložaka naloga*.

Raspoloživost se izračunava prema oznakama aktiviranima u *MPS parametrima* (Kooperacija, Nabava, Prodaja, Proizvodnja, Skladište).

Prilikom kreiranja naloga sustav će uzeti u obzir raspoloživost te generirati nalog samo za razliku između potražnje i raspoložive količine artikla.

### Skladišta za planiranje naloga

U tablici se prikazuju skladišta definirana u funkciji [Izračun raspoloživosti](/docs/erp-home/registers/items/calculate-availability).

Na kartici *Parametri* moguće ih je samo pregledavati, bez izmjena.

### Mjesto proizvodnje

Ako je definirana, ova informacija omogućuje da postupak generiranja naloga iz narudžbi kupaca uzima u obzir samo potvrđene retke narudžbi kod kojih je skladište preuzimanja povezano s odabranom proizvodnom lokacijom.

### Izračun količine prema ekonomičnoj količini narudžbe stavke

Ako je oznaka aktivna, postupak generira proizvodni nalog uzimajući u obzir:

- ekonomičnu nabavnu seriju definiranu na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item) za zadanog dobavljača, ako je *Vrsta opskrbe* artikla **Nabava** ili **Kooperacija**;
- ekonomičnu proizvodnu seriju definiranu u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), ako je *Vrsta opskrbe* artikla **Proizvodnja**.

### Izračun količine prema višekratnicima stavki

Ako je oznaka aktivna, postupak generira proizvodni nalog uzimajući u obzir i višekratnike ekonomične serije:

- nabavne serije definirane kod zadanog dobavljača za artikle vrste opskrbe **Nabava** ili **Kooperacija**;
- proizvodne serije definirane u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) za artikle vrste opskrbe **Proizvodnja**.

Ovu oznaku moguće je aktivirati samo ako je aktivirana prethodna opcija za izračun količine prema ekonomičnoj seriji.

### Obnovi minimalnu zalihe stavki

Ako je oznaka aktivna, sustav će za artikl koji se obrađuje u postupku *Generiranje proizvodnih naloga* nadopuniti minimalnu zalihu definiranu u *Šifarniku artikala > kartica Opskrba*.

### Nadopuna točke ponovnog naručivanja artikla

Ako je oznaka aktivna, sustav će za artikl koji se obrađuje u postupku *Generiranje proizvodnih naloga* nadopuniti točku ponovne narudžbe definiranu u *Šifarniku artikala > kartica Opskrba*.

### Isključi odgođene naloge

Ako je oznaka aktivna, postupak generiranja proizvodnog naloga neće uzimati u obzir količine iz redaka narudžbi kupaca čiji je *Datum spremnosti robe* stariji od trenutnog datuma prilikom izračuna raspoloživosti artikla.

Nakon definiranja parametara moguće je nastaviti s kreiranjem naloga na karticama [Narudžbe kupaca](#sales-orders), [Prognoza](#forecast) i [Zaliha ispod minimalne razine](#safety-stock).

### Posebna tipka

> **Automatsko kreiranje radnih naloga**: pokreće postupak generiranja proizvodnih naloga iz odabranih redaka.

Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte stranicu [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).