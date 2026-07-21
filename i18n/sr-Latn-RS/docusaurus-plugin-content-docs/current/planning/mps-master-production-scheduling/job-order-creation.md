---
title: Generisanje radnih naloga proizvodnje
sidebar_position: 2
---

Postupak **Generisanje radnih naloga proizvodnje** omogućava generisanje proizvodnih naloga iz narudžbina kupaca, plana prodaje i/ili stanja ispod minimalne zalihe.

### Narudžbine kupaca {#sales-orders}

U ovom tabu moguće je filtrirati stavke narudžbina kupaca koje će analizirati postupak **Generisanje radnih naloga proizvodnje**.

Kako bi se stavke prikazale u ovom tabu, moraju zadovoljavati sledeće **uslove**:

- artikl na stavci narudžbine mora imati aktiviranu oznaku *Generisanje radnih naloga proizvodnje* u svojim [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);
- stavka ne sme biti izvršena putem *Liste za preuzimanje*, *Otpremnice* ili *Izlaznog računa*;
- stavka ne sme biti označena kao *Prinudno izvršena* i mora biti u statusu *Neizvršena* ili *Delimično izvršena*;
- iz te stavke još ne smeju biti generisani *Proizvodni nalozi*;
- stavka mora imati popunjene datume *Datum spremnosti robe* i *Datum isporuke* u *Narudžbini kupca*, na kartici *Artikli*;
- narudžbina kupca iz koje stavka potiče mora biti *Odštampana* i *Potvrđena*.

:::note Napomena
Nepostojanje samo JEDNOG od navedenih uslova onemogućava prikaz stavke narudžbine u tabeli.
:::

U području filtera moguće je filtrirati samo one stavke narudžbina koje se žele prikazati prema zadatim kriterijumima. Nakon postavljanja potrebnih filtera, klikom na dugme **Traži** u tabeli će se prikazati sve stavke koje odgovaraju zadatim kriterijumima.

### Polja

**Tip**: označava vrstu narudžbine kupca;       
**Broj**: označava broj narudžbine kupca;     
**Godina**: označava godinu narudžbine kupca;     
**Datum narudžbine kupca**: označava datum narudžbine kupca;     
**Broj linije**: označava broj reda u narudžbini kupca;        
**Kupac**: označava konto i podkonto kupca na narudžbini;         
**Klasa** i **Šifra artikla**: označavaju klasu i šifru artikla;             
**Varijanta**: označava varijantu artikla;          
**Količina**: označava količinu koja još treba biti izvršena sa stavke narudžbine;   
**Raspoloživost**: označava raspoloživu količinu artikla na datum spremnosti robe sa stavke narudžbine;           
**Jedinica mere**: označava jedinicu mere;        
**Dostava**: označava datum spremnosti robe sa stavke narudžbine;  
**Tip podnaloga** i **Opis naloga**: označavaju šifru i opis vrste naloga povezane sa *vrstom narudžbine kupca*;    
**Opis artikla**: označava opis artikla;          
**Opis konta**: označava naziv kupca.

:::note Napomena
Kolona **Raspoloživost** jednaka je nuli za sve redove ako je oznaka *Uzmi u obzir raspoloživost artikla* na kartici **Parametri** deaktivirana.
:::

### Posebna dugmad

> **Razmotri za radni nalog**: omogućava premeštanje odabranih redova narudžbina na karticu **Sažetak prototipa naloga**, gde ih postupak generisanja proizvodnih naloga može uzeti u obradu.

> **Generisanje toka**: dugme je dostupno samo ako je u [MS parametrima](/docs/configurations/parameters/production/mps-parameters/) aktivirana oznaka *Automatsko generisanje proizvodnog toka*. Ovim dugmetom moguće je direktno pokrenuti ceo proizvodni proces, odnosno *kreiranje* *proizvodnih naloga* koji će odmah biti planirani te, u zavisnosti od dodatnih oznaka postavljenih u [MS parametrima](/docs/configurations/parameters/production/mps-parameters/), mogu automatski generisati i *planirane naloge nabavke, kooperacije i proizvodnje*, uz mogućnost definisanja koji će od njih biti automatski otpušteni.     

Korišćenjem ovog dugmeta moguće je odmah dobiti sve planirane naloge otpuštene, a proizvodne naloge u izvršnom statusu, preskačući tako sve međukorake.

### Sigurnosna zaliha {#safety-stock}

Putem ove kartice moguće je filtrirati artikle koji se vode po zalihama i koje treba analizirati postupak **Generisanje proizvodnih naloga**.

Jedini **uslov** da bi se artikl prikazao u ovoj tabeli jeste da u svojim [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ima postavljen *Tip upravljanja* na *Zaliha*.

U području filtera moguće je filtrirati samo artikle koje želite prikazati prema zadatim kriterijumima.

**Prikaz varijanti**: aktivna oznaka omogućava prikaz varijante;  
**Vrsta radnog naloga proizvodnje**: omogućava odabir vrste proizvodnog naloga koji će se generisati;  
**Ispod tačke naručivanja na datum**: predstavlja datum do kojeg se želi osigurati da artikli iz tabele ne padnu ispod minimalne zalihe.

Nakon postavljanja potrebnih filtera, klikom na dugme **Traži** u tabeli će se prikazati svi artikli koji odgovaraju zadatim kriterijumima.

U tabeli se mogu prikazati sledeći podaci:

**Klasa**, **Šifra** i **Opis artikla**;  
**Varijanta**: prikazuje se ako je aktivirana istoimena oznaka u području filtera;  
**Tačka naručivanja**, **Minimalna zaliha** i **Dani za ponovno naručivanje**: preuzimaju se iz *Šifarnika artikala* > kartica *Nabavka*;  
**Prosečna dnevna potrošnja**: izračunava se oduzimanjem minimalne zalihe od tačke naručivanja te deljenjem dobijenog rezultata brojem dana naručivanja;  
**Ekonomska serija** i njeni **Višekratnici**: preuzimaju se sa kartice proizvodnje u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla ako je *vrsta nabavke proizvodnja*, dok se u slučaju *vrste nabavke nabavka* preuzimaju od *podrazumevanog dobavljača* sa kartice *Preferirani dobavljači* u *šifarniku artikla*;           
**Zaliha**: prikazuje stanje zalihe artikla na tekući datum;       
**Početna raspoloživost**: predstavlja raspoloživost artikla na dan pokretanja obrade;     
**Krajnja raspoloživost**: predstavlja raspoloživost artikla na datum naveden u polju **Ispod tačke naručivanja na datum** u području filtera;   
**Minimalna raspoloživost**: predstavlja najnižu raspoloživost artikla u periodu između početne i krajnje raspoloživosti.

:::note Napomena
Za dokumente bez definisanog datuma isporuke uzima se u obzir parametar *Ako datum isporuke nije naveden* na kartici **Parametri**.
:::

**Donja tabela** prikazuje detaljan pregled raspoloživosti artikla odabranog u glavnoj tabeli.

:::note Napomena
U prvom redu tabele raspoloživost je jednaka zbiru zalihe i svih dospelih dokumenata (sa datumom pre današnjeg datuma).
:::

### Posebno dugme

> **Razmotri za radni nalog**: omogućava premeštanje odabranih redova na karticu **Sažetak prototipa naloga**, gde ih postupak generisanja proizvodnih naloga može uzeti u obradu.

Na karticu **Sažetak prototipa naloga** biće preneti samo oni redovi za koje postupak proceni da je moguće generisati proizvodni nalog. Za svaki artikl postupak predlaže jedan proizvodni nalog i nastoji da obezbedi da se na datum kada postoji rizik da artikl padne ispod minimalne zalihe, zaliha dopuni proizvodnim nalogom čiji je datum jednak datumu pada ispod minimalne zalihe. Količina tog naloga mora omogućiti pokrivanje potreba sve do datuma navedenog u polju **Ispod tačke naručivanja na datum** u području filtera. Ako su za artikl definisane ekonomske serije proizvodnje ili nabavke te višekratnici, oni će pritom biti poštovani.

### Predviđanje {#forecast}

Na ovoj kartici moguće je filtrirati redove iz *Prognoze prodaje* ili *Glavnog plana proizvodnje* koje će analizirati postupak **Generisanje radnih naloga proizvodnje**, koristeći filtere za artikl i varijantu.

Redovi *Prognoze prodaje* koji se mogu prikazati na ovoj kartici moraju zadovoljavati sledeće **uslove**:

- godišnja prognoza prodaje mora biti u statusu *Konsolidovana*;
- godišnja prognoza prodaje mora biti generisana sa važećom *Verzijom*;
- iz reda prognoze još ne smeju biti generisani *Proizvodni nalozi*;
- iz redova *Glavnog plana proizvodnje* koji se mogu prikazati na ovoj kartici još ne smeju biti generisani *Proizvodni nalozi*.

U području filtera moguće je filtrirati samo redove koje želite prikazati prema zadatim kriterijumima.

**Prikaz varijante**: aktivna oznaka omogućava prikaz varijante;  
**Mesec završetka planiranja**: omogućava prikaz samo onih prognoza prodaje koje završavaju do odabranog datuma;  
**Tip naloga**: označava vrstu proizvodnog naloga koji će se generisati;    
**Vrsta radnog naloga proizvodnje**: tabela omogućava definisanje *Vrsta narudžbina kupaca* koje treba uzeti u obzir zajedno sa količinama iz prognoze prodaje, tako da postupak generisanja proizvodnih naloga može kreirati nalog sa količinom koja odgovara većoj, manjoj ili zbirnoj vrednosti količina za isti artikl iz reda narudžbine kupca i/ili prognoze proizvodnje odnosno glavnog plana.

Nakon postavljanja potrebnih filtera, klikom na dugme **Traži** u tabeli će se prikazati svi redovi prognoze koji odgovaraju zadatim kriterijumima.

### Polja

**Klasa**, **Šifra** i **Opis artikla**;  
**Varijanta**: prikazuje se ako je aktivirana istoimena oznaka u području filtera;  
**Godina**: predstavlja godinu prognoze prodaje;  
**Mesec/Nedelja**: predstavlja broj meseca ili nedelje prognoze prodaje;  
**Procenjeni datum radnog naloga proizvodnje**: predstavlja datum generisanja proizvodnog naloga;  
**Datum početka / završetka predviđanja**: na primer, ako je prognoza definisana za mesec maj, datum početka biće 01.05., a datum završetka 31.05.;   
**Količina**: predstavlja količinu na pojedinačnom redu prognoze;  
**Konto/Podkonto/Opis konta**: predstavlja konto kupca povezan sa redom prognoze prodaje (ako postoji).

### Posebno dugme

> **Razmotri za radni nalog**: omogućava premeštanje odabranih redova na karticu **Sažetak prototipa naloga**, gde ih postupak generisanja proizvodnih naloga može uzeti u obradu.

### Sažetak prototipa naloga

Ova kartica prikazuje redove koji su preneti sa prethodnih kartica i koje je potrebno pretvoriti u proizvodne naloge.

Kartica sadrži:

- odeljak **Predloženi proizvodni nalog**, u kojem korisnik može postaviti **Tip**, **Godinu** i **Broj** proizvodnog naloga kojem će se dodati redovi odabrani na istoj kartici **Sažetak prototipa naloga**;
- tabelu rezultata u kojoj se prikazuju redovi artikala preneseni sa ostalih kartica.

### Polja tabele

**Podaci iz**: označava karticu iz koje red potiče;     
**Klasa**, **Šifra artikla** i **Opis**: označavaju klasu, šifru i opis artikla;             
**Varijanta**: označava varijantu artikla;     
**Količina**: predstavlja količinu naloga koju je predložio sistem;  
**Raspoloživost**: predstavlja raspoloživu količinu artikla na *Datum isporuke*;            
**Datum isporuke**: predstavlja datum završetka predloženog proizvodnog naloga (koji korisnik može ručno izmeniti);                
**Početni datum predviđanja**: predstavlja datum početka prognoze;      
**Tip narudžbine kupca**: predstavlja šifru narudžbine kupca;        
**Broj narudžbine kupca**: predstavlja broj narudžbine kupca;  
**Konto / Podkonto / Opis konta**: predstavljaju konto kupca povezan sa redom prognoze prodaje (ako postoji);      
**Tip naloga** i **Opis naloga**: predstavljaju šifru i opis vrste naloga.       

Nakon odabira željenih redova, korisnik može generisati proizvodne naloge prema kriterijumima definisanim na kartici **Parametri**, koristeći dugme **Automatsko formiranje naloga**. Po završetku obrade postupak prikazuje prozor sa brojevima generisanih naloga, koji korisnik samo treba potvrditi klikom na **OK** i zatvoriti.

### Posebno dugme

> **Automatsko kreiranje radnih naloga**: pokreće postupak generisanja proizvodnih naloga iz odabranih redova.

### Parametri

Putem ove kartice definišu se svi parametri vezani za kreiranje proizvodnih naloga i način na koji će se upravljati sledećim fazama nakon njihovog generisanja. Deo postavki na ovoj kartici preuzima se iz prozora [MPS parametri](/docs/configurations/parameters/production/mps-parameters).

### Metoda generiranja naloga

- **Vrsta naloga** (*Monoproizvodni* / *Multiproizvodni*): predlaže se vrijednost definirana na kartici [MPS parametri](/docs/configurations/parameters/production/mps-parameters). Tijekom generiranja naloga kroz postupak *Generiranje radnih naloga proizvodnje* moguće je promijeniti ovu postavku, kao i onu definiranu u sljedećem polju;
- **Grupiranje proizvoda prema**: polje kojim se definira na koji način artikli mogu biti grupirani unutar istog *Monoproizvodnog* ili *Multiproizvodnog* naloga.

> Ako je vrsta naloga *Monoproizvodni*, jedino dopušteno grupiranje je prema *Artiklu*. Ovakav način rada omogućuje automatsko generiranje više *Monoproizvodnih* naloga na temelju odabranih redaka iz *Narudžbi kupaca*, *Prognoze prodaje*, *Glavnog plana proizvodnje* ili *Zalihe ispod minimalne razine*, pri čemu svaki generirani nalog sadrži zbroj traženih količina za isti artikl. Datum završetka grupiranog naloga uvijek odgovara datumu potrebe koja je najbliža datumu pokretanja obrade.

> Ako je vrsta naloga *Multiproizvodni*, grupiranje se može provoditi prema kupcu ili projektu te omogućuje uključivanje više artikala u isti *Multiproizvodni* nalog, pod uvjetom da potječu iz redaka narudžbi kupaca povezanih s istim kupcem, istim prodajnim nalogom ili istim prodajnim nalogom istog kupca.

### Prioritet nabave

Polje prikazuje prioritet nabave definiran u [MPS parametrima](/docs/configurations/parameters/production/mps-parameters), odabran među prioritetima definiranima u tablici *Prioritet nabave* unutar odjeljka *Opće postavke*.

### Ažuriranje postojećih naloga

Retci odabrani na kartici sažetka dodaju se postojećem nalogu (navedenom u okviru *Predloženi proizvodni nalog* na kartici **Sažetak**) samo ako je na kartici **Parametri** aktivirana oznaka **Ažuriranje postojećih naloga**.

Sustav će automatski predložiti već spremljeni nalog u koji je moguće dodati retke ako već postoji nalog iste vrste i s istim datumom.

Nadalje, putem odgovarajućih oznaka moguće je definirati treba li se nalog generirati iz **Narudžbi kupaca**, iz **Prognoze** (pri čemu se može odabrati **Prognoza prodaje** ili **Glavni plan proizvodnje**) ili iz **Zalihe ispod minimalne razine**. U potonjem slučaju koristi se poseban algoritam opisan u odjeljku posvećenom kartici [Zaliha ispod minimalne razine](#safety-stock).

### Prognoza

Ako je oznaka aktivna, moguće je odabrati način vremenskog generiranja proizvodnih naloga:

> **Mjesečno**: proizvodni nalog generira se u mjesecu u kojem se nalazi datum završetka *Prognoze prodaje* ili u mjesecu u kojem je količina unesena u *Glavni plan proizvodnje*. Korisnik također može definirati dan u mjesecu koji će sustav koristiti kao planirani datum završetka naloga;

> **Tjedno**: generira se jedan proizvodni nalog za svaki tjedan mjeseca u kojem se nalazi datum završetka *Prognoze prodaje* ili mjeseca u kojem je količina unesena u *Glavni plan proizvodnje*. Korisnik može odrediti i dan u tjednu koji će biti postavljen kao planirani datum završetka naloga;

> **Stvarni datumi**: generira se jedan proizvodni nalog za svaki tjedan mjeseca u kojem se nalazi datum završetka *Prognoze prodaje* ili mjeseca u kojem je količina unesena u *Glavni plan proizvodnje*, uz korištenje točnog datuma završetka pojedinog retka *Prognoze prodaje*;

> **Tjedno uzimajući u obzir proizvodne dane zone dostave**: proizvodni nalog generira se uzimajući u obzir dane proizvodnje zone isporuke povezane s kupcem za kojeg je izrađena *Prognoza prodaje*;

> **Grupiranje prognoze po kupcima**: ako je oznaka aktivna, proizvodni nalozi generiraju se grupiranjem redaka prognoze istih kupaca.

### Ako nisu specificirani datumi dostave

Ovaj odjeljak odnosi se isključivo na kartice *Narudžbe kupaca* i *Zaliha ispod minimalne razine* u postupku *Generiranje radnih naloga proizvodnje*.

Korisnik može odabrati kako će se postupak ponašati ako na retku narudžbe kupca koji se obrađuje nije unesen *Datum spremnosti robe*:

- ignorirati redak bez datuma;
- prihvatiti zadani datum kao planirani datum završetka naloga koji će biti generiran;
- prihvatiti zadani datum kao planirani datum početka naloga koji će biti generiran.

U posljednja dva slučaja datum se odabire u odgovarajućim poljima.

### Razmotri raspoloživost artikla

Ako je oznaka aktivna, na svim karticama postupka *Generiranje radnih naloga proizvodnje* prikazuje se raspoloživost artikla na *Planirani datum završetka* proizvodnog naloga koji će biti kreiran. Isto vrijedi i za karticu *Sažetak prototipa naloga*.

Raspoloživost se izračunava prema oznakama aktiviranima u *MPS parametrima* (*Kooperacija*, *Nabava*, *Prodaja*, *Proizvodnja*, *Skladište*).

Prilikom kreiranja naloga sustav će uzeti u obzir raspoloživost te generirati nalog samo za razliku između potrebne i raspoložive količine artikla.

### Skladišta za planiranje naloga

U tablici se prikazuju skladišta definirana u funkciji [Izračun raspoloživosti](/docs/erp-home/registers/items/calculate-availability).

Na kartici *Parametri* moguće ih je samo pregledavati, bez mogućnosti izmjene.

### Mjesto proizvodnje

Ako je definirano, ovo polje omogućuje da postupak generiranja naloga iz narudžbi kupaca uzima u obzir samo potvrđene retke narudžbi kod kojih je skladište preuzimanja povezano s odabranom proizvodnom lokacijom.

### Izračun količine prema ekonomskoj seriji artikla

Ako je oznaka aktivna, postupak generira proizvodni nalog uzimajući u obzir:

- ekonomsku nabavnu seriju definiranu na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item) za zadanog dobavljača, ako je *Vrsta nabave* artikla **Nabava** ili **Kooperacija**;
- ekonomsku proizvodnu seriju definiranu u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), ako je *Vrsta nabave* artikla **Proizvodnja**.

### Izračun količine prema višekratnicima artikla

Ako je oznaka aktivna, postupak generira proizvodni nalog uzimajući u obzir i višekratnike ekonomske serije:

- nabavne serije definirane kod zadanog dobavljača za artikle vrste nabave **Nabava** ili **Kooperacija**;
- proizvodne serije definirane u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) za artikle vrste nabave **Proizvodnja**.

Ovu oznaku moguće je aktivirati samo ako je aktivirana prethodna opcija za izračun količine prema ekonomskoj seriji.

### Obnovi minimalnu zalihu artikla

Ako je oznaka aktivna, sustav će za artikl koji se obrađuje u postupku *Generiranje radnih naloga proizvodnje* nadopuniti minimalnu zalihu definiranu u *Šifarniku artikala > kartica Nabava*.

### Obnovi točku ponovnog naručivanja artikla

Ako je oznaka aktivna, sustav će za artikl koji se obrađuje u postupku *Generiranje radnih naloga proizvodnje* nadopuniti točku ponovnog naručivanja definiranu u *Šifarniku artikala > kartica Nabava*.

### Isključi zakašnjele naloge

Ako je oznaka aktivna, postupak generiranja proizvodnog naloga neće uzimati u obzir količine iz redaka narudžbi kupaca čiji je *Datum spremnosti robe* stariji od trenutnog datuma prilikom izračuna raspoloživosti artikla.

Nakon definiranja parametara moguće je nastaviti s kreiranjem naloga na karticama [Narudžbe kupaca](#sales-orders), [Prognoza](#forecast) i [Zaliha ispod minimalne razine](#safety-stock).

### Posebna tipka

> **Automatsko kreiranje radnih naloga**: pokreće postupak generiranja proizvodnih naloga iz odabranih redaka.

Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte stranicu [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).