---
title: Proizvodni resursi 
sidebar_position: 3
---

:::important Čemu služi
Proizvodni resursi u MES sustavu Fluentis omogućuju upravljanje svim parametrima potrebnim za planiranje i optimizaciju proizvodnih operacija. Kroz intuitivno sučelje, korisnici mogu uvesti različite vrste resursa, uključujući artikle, strojeve, zaposlenike, radne centre i mjerila.  

Osim toga, moguće je prilagoditi izgled i ponašanje radnog centra, prilagođavajući sustav specifičnim potrebama poduzeća, na jednostavan, brz i potpuno autonoman način.

Ova funkcionalnost ne samo da pojednostavljuje upravljanje proizvodnim resursima, već omogućuje i jednostavno kopiranje unaprijed definiranih postavki s postojećih resursa, osiguravajući da podaci budu uvijek ažurirani i dosljedni.  
:::

Kroz ovaj prozor se podešavaju svi parametri koji se odnose na upravljanje proizvodnim resursima unutar MES-a.   

*Poseban gumb*:  

> **Uvoz**: omogućuje uvoz sljedećih vrsta resursa u tablicu **Proizvodni resursi**: *Artikl*, *Stroj*, *Zaposlenik*, *Radni centar* i *Mjerni instrument*; moguće je uvesti više resursa odjednom jednostavno odabirom putem skočnog prozora za *Uvoz*.
Ako u tablici već postoje zapisi i operater odabere jedan s određenom vrstom resursa, pritiskom na dugme Uvoz postupak će već filtrirati prema istoj vrsti resursa. Također će kopirati sve postavke unesene za odabrani resurs (tj. onaj već prisutan u mreži resursa) u nove zapise resursa unesene putem postupka uvoza.  

### Proizvodni resursi 

Obrazac se sastoji od prvog mrežnog prikaza koji sadrži podatke o unesenim resursima, uključujući:        
**Kod**: označava kod proizvodnog resursa;        
**Opis**: opisuje kod proizvodnog resursa;        
**Vrsta resursa**: označava vrstu resursa među: *Zaposlenik*, *Artikl*, *Stroj*, *Mjerni instrument* i *Radni centar*;         
**Stroj**: označava kod stroja povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Stroj*;       
**Opis stroja**: opisuje stroj povezan s resursom; omogućeno je samo ako je *Vrsta resursa* *Stroj*;     
**Radni centar**: označava kod radnog centra povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Radni centar*;      
**Opis radnog centra**: opisuje radni centar povezan s resursom; omogućeno je samo ako je *Vrsta resursa* *Radni centar*;     
**Zaposlenik**: označava kod zaposlenika povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Zaposlenik*;     
**Prezime**: označava prezime zaposlenika povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Zaposlenik*;     
**Ime**: označava ime zaposlenika povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Zaposlenik*;     
**Klasa**: označava klasu artikla povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Mjerni instrument*;       
**Kod artikla**: označava kod artikla povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Mjerni instrument*;       
**Opis artikla**: opisuje artikl povezan s resursom; omogućeno je samo ako je *Vrsta resursa*  *Mjerni instrument*;       
**Alat za mjerenje**: označava kod artikla alata povezanog s resursom; omogućeno je samo ako je *Vrsta resursa* *Mjerni instrument*;        
**Sekunde osvježavanja**: označava broj sekundi osvježavanja MES formi, npr. za osvježavanje podataka u kartici *Analiza* ili automatsko osvježavanje vremena rada.    

Svaki resurs unesen u gornju mrežu povezan je sa svim informacijama prisutnim u donjim karticama.   

## Općenito

Na ovoj kartici se nalazi niz informacija koje utječu na ponašanje pojedinog proizvodnog resursa tijekom Izjava o proizvodnji. 

**Obavezan operator**: ako je aktiviran, prisiljava operatera da unese resurs tipa zaposlenik u polje *Resurs* u glavnom obrascu izjava o proizvodnji prije nego što može nastaviti s ostalim aktivnostima. Ovo će biti zaposlenik koji će biti naveden kao operater koji daje izjavu;         
**Obavezna lozinka**: ako je aktiviran, prisiljava operatera da unese lozinku kako bi mogao nastaviti; tražene lozinke su sljedeće: lozinka prisutna u obrascu [Zaposlenika](/docs/project-management/registers/employee/new-employee/) a ako nije prisutna, traži se lozinka sustava. Ako nisu obje prisutne, traži se da unesete jednu.  
:::note NAPOMENA  
Obavezni operator: ako su oba polja, **Obavezni operator** i **Obavezna lozinka**, aktivirana, operater će prvo morati unijeti zaposlenika, a zatim, na zahtjev postupka, lozinku.  
:::
**Obavezni tim**: ako je aktiviran, omogućava kontrolu koja prisiljava operatera da unese barem jednog člana tima prije nastavka s aktivnostima izjava;       
**Dozvoli preklapanje faza**: ako je aktivirano, omogućava deklaraciju faza narudžbe proizvodnje bez pridržavanja predviđenog redoslijeda navedenog u ciklusu. Ako nije aktivirano, nije dopušteno preklapanje faza ili deklaracija faza bez pridržavanja ciklusa;      
**Omogući višefazno upravljanje**: ako je aktivirano, omogućava mogućnost deklariranja više faza istovremeno;      
**Maksimalni broj faza**: omogućuje da se navede maksimalan broj faza koje je moguće istovremeno deklarirati;      
**Ručni unos vremena**: ako je aktivirano, omogućuje operateru ručni unos radnog vremena;       
**Predloženo vrijeme**: ako je aktivirano, omogućuje automatski prijedlog radnog vremena;        
**Metoda raspodjele vremena**: označava način na koji se vrijeme raspoređuje ako se istovremeno deklarira više radnih faza. Aktivne metode su: *Sekvencijalno* - vrijeme se raspoređuje prema planiranom ili redoslijedu unosa, *Proporcionalno* - vrijeme se raspoređuje proporcionalno prema količini proizvedenoj u deklaraciji i količinama koje treba proizvesti za pojedine faze;        
**Metoda raspodjele količine**: označava način na koji se količina raspoređuje ako se istovremeno deklarira više radnih faza. Aktivne metode su: *Sekvencijalno* - količina se raspoređuje prema planiranom ili redoslijedu unosa, *Proporcionalno* - količina se raspoređuje proporcionalno prema količini proizvedenoj u deklaraciji i količinama koje treba proizvesti za pojedine faze; *Ručno* - omogućuje ručno unijeti količine proizvedene za svaku pojedinu fazu;           
**Obavezna je ručna deklaracija materijala**: ako je aktivirano zajedno s **Obaveza ručnog unosa materijala** u [Parametrima MRP-a](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) za artikl, omogućava da se artikl predloži s nultom količinom u kartici *Materijali* u izjavama o proizvodnji i korisnik je obvezan ručno unijeti vrijednost prije nastavka;      
**Obvezni radni list**: ako je aktiviran, omogućava kontrolu koja sprječava operatera da doda fazu koja još nema označenu "Definitivni ispis". Ova značajka "Definitivni ispis" može se omogućiti putem postupka ispisa [Radnog Lista](/docs/production/pp-production-in-progress/reports/worksheet);    
**Obavezno ispisivanje naljepnica**: ako je aktivirano, omogućava kontrolu koja prisiljava operatera da ispise sve naljepnice prije nastavka s aktivnostima izjava;      
**Obavezna greška ako je navedena količina odbijena**: ako je aktivirano, omogućava kontrolu koja prisiljava operatera da unese vrstu greške ako unese količinu odbačenu;    
**Automatsko snimanje**: ako je aktiviran, omogućava automatsko stvaranje zapisa u skladištu nakon potvrde izjava. 

### *Upravljanje dokumentima*     
**Vrsta izvora dokumenta za isključenje**: ova tablica je povezana s karticom *Dokumenti i Radni nalozi* u Fluentis MES-u i omogućava definiranje koje vrste dokumenata treba isključiti. Na taj način, datoteke povezane s tim vrstama dokumenata neće biti prikazane na kartici *Dokumenti i Radni nalozi*.     
Vrste dokumenata koje se mogu isključiti su:   
> *Nijedna*: nijedna vrsta dokumenata nije isključena;     
> *Artikl*: svi dokumenti (datoteke, slike, ...) povezani s artiklom neće biti prikazani na kartici *Dokumenti i Radni nalozi*;      
> *Narudžba klijenta*: svi dokumenti (datoteke, slike, ...) povezani s narudžbom klijenta neće biti prikazani na kartici  *Dokumenti i Radni nalozi*;      
> *Narudžba proizvodnje*: svi dokumenti (datoteke, slike, ...) povezani s narudžbom proizvodnje neće biti prikazani na kartici *Dokumenti i Radni nalozi*;   
> *Ordine di produzione*: tutti i documenti (file, immagini,...) legati all'ordine di produzione non saranno visualizzati nel tab *Documenti e Istruzioni operative*;
> *Faza narudžbe proizvodnje*: svi dokumenti (datoteke, slike, ...) povezani s pojedinom fazom narudžbe proizvodnje (unutar kartice *Povezani dokumenti* za fazu) neće biti prikazani na kartici *Dokumenti i Radni nalozi*.          

### *Kontrole kvalitete*
Ova kartica sadrži niz kontrola povezanih s karticom *Kontrola kvalitete* u Fluentis MES-u.      
**Vrsta kontrole za razmatranje**: ovo je vrsta dokumenta za kontrolu artikala u kojem će se pohraniti prikupljeni podaci;        
**Detalj artikla za razmatranje**: ovo je maksimalni detalj artikla koji se razmatra za izvođenje testova (Nijedan, Lot, S.B., Transportna jedinica).;     
**Faza se može zaključati**: ako je prva neusaglašenost ili prosječna neusaglašenost u prikupljenim vrijednostima, sama faza i sljedeće faze bit će blokirane dok ih ne odblokira ovlašteni operater. U tom slučaju, koristi se **Predložak zastoja bloka faze** naznačena u odjeljku posvećenom predlošcima suspendiranja.          

### *Predložak prekida*       
**Predlošci zastoja koje treba isključiti**: u ovoj tablici možete navesti sve predloške obustave koje želite isključiti unutar Fluentis MES-a.  
**Predložak sugeriranog zastoja**: označava zadani predložak obustave koji će se koristiti u slučaju da operater stvori obustavu bez navođenja razloga obustave u odgovarajućem polju u kartici *Proizvodnja* u Fluentis MES-u. 

**Automatski prekid**: ako je omogućeno, dopušta aktiviranje automatskih prekida izjava prema rasporedima naznačenim u radnom centru;          
**Predložak prekida noćne stanke**: označava predložak obustave koji se koristi za stvaranje obustave tijekom noćne pauze;        
**Predložak prekida stanke za ručak**: označava predložak obustave koji se koristi za stvaranje obustave tijekom pauze za ručak;        
**Predložak zastoja bloka faze**: označava razlog obustave koji se koristi za blokiranje faza u slučaju nesukladnosti u kontrolama kvalitete.        

## Layout

*Specifični gumbi*:  

> **Kompletan layout**: omogućuje aktiviranje kompletnog rasporeda sučelja MES jednim klikom;             
> **Minimalni layout**: omogućuje aktiviranje minimalnog rasporeda sučelja MES jednim klikom;                 

U ovoj kartici nalaze se razne informacije koje utječu na raspored resursa proizvodnje tijekom Izjava o proizvodnji.     

**Redoslijed tabulatora**       
Ovaj dio omogućuje definiranje vidljivosti kartica, kao i promjenu njihovog redoslijeda;    

**Ne prikazuj**        
Ovaj dio omogućuje skrivanje raznih nepotrebnih informacija unutar Fluentis MES-a.

### **Općenito**
> *Grupa*: ako je aktivno, skriva informacije vezane uz grupu;       
> *Redoslijed*: ako je aktivno, skriva informacije vezane uz redoslijed;     
> *Podfaza*: ako je aktivno, skriva informacije vezane uz podfazu;     
> *Radni centar*: ako je aktivno, skriva informacije vezane uz radni centar;     
> *Stroj*: ako je aktivno, skriva informacije vezane uz stroj;       
> *Radna grupa*: ako je aktivno, skriva informacije vezane radnu grupu;       
> *Očekivani datumi*: ako je aktivno, skriva informacije vezane uz predviđene datume;      
> *Varijante*: ako je aktivno, skriva informacije vezane uz varijantu;     
> *Proizvodni nalog*: ako je aktivno, skriva informacije vezane uz proizvodni nalog;    
> *Podnalog*: ako je aktivno, skriva informacije vezane uz podnalog;     
> *Projekt*: ako je aktivno, skriva informacije vezane uz projekt;      
> *Lotovi*: ako je aktivno, skriva informacije vezane uz upravljanje serijama;      
> *Serijski broj*: ako je aktivno, skriva informacije vezane uz upravljanje serijskim brojevima;      
> *Transportna jedinica*: ako je aktivno, skriva informacije vezane uz upravljanje Transportne jedinice.   
  
### **Proizvedeni artikli**
> *Skladište za odlaganje*: ako je aktivno, skriva informacije vezane uz skladište za prijenos proizvedenih artikala u kartici *Proizvodnja*;      
> *Predložak odlaganja*: ako je aktivno, skriva informacije vezane uz predložak prijenosa proizvedenih artikala u kartici  *Proizvodnja*;    
> *Lokacija plaćanja*: ako je aktivno, skriva informacije vezane uz lokaciju prijenosa proizvedenih artikala u kartici  *Proizvodnja*;    
> *Skladište za odlaganje otpada*: ako je aktivno, skriva informacije vezane uz skladište za prijenos otpada proizvedenih artikala u kartici *Proizvodnja*;     
> *Predložak odlaganja otpada*: ako je aktivno, skriva informacije vezane uz prdložak prijenosa otpada proizvedenih artikala u kartici *Proizvodnja*;     
> *Lokacija plaćanja otpada*: ako je aktivno, skriva informacije vezane uz lokaciju prijenosa otpada proizvedenih artikala u kartici *Proizvodnja*;     
> *Alternativna količina*: ko je aktivno, skriva informacije vezane uz upravljanje alternativnom količinom.  

### **Materijali**
> *Skladište za izuzimanje*: ako je aktivno, skriva informacije vezane uz skladište za preuzimanje materijala u kartici *Materijali*;    
> *Predložak za picking*: ako je aktivno, skriva informacije vezane uz prdložak preuzimanja materijala u kartici *Materijali*;    
> *Skladište za odlaganje otpada*: ako je aktivno, skriva informacije vezane uz skladište za preuzimanje otpada materijala u kartici  *Materijali*;    
> *Predložak odlaganja otpada*: ako je aktivno, skriva informacije vezane uz prdložak preuzimanja otpada materijala u kartici *Materijali*;    

### **Kontrola kvalitete**

> **Redoslijed**: ako je aktivno, skriva informacije vezane uz sekvencu u kartici *Kontrola kvalitete*;     
> **Vrsta testa**: ako je aktivno, skriva informacije vezane uz vrstu ispitivanja u kartici *Kontrola kvalitete*;     
> **Mjerni instrumenti**: ako je aktivno, skriva informacije vezane uz Kategoriju mjerila i Mjerila u kartici *Kontrola kvalitete*;      
> **Granice tolerancije**: ako je aktivno, skriva informacije vezane uz Granice tolerancije (L.min.(tol-), L.min.(tol+), L.max.(tol-) i L.max.(tol+)) u kartici  *Kontrola kvalitete*;     
> **Vrsta kontrole i Učestalost**: ako je aktivno, skriva informacije vezane uz Vrstu kontrole ispitivanja i Učestalost u kartici *Kontrola kvalitete*;        
> **Skladište**: ako je aktivno, skriva informacije vezane uz skladište u kartici *Kontrola kvalitete*;         
> **Predložak**: ako je aktivno, skriva informacije vezane uz razlog skladištenja za neispravne artikle u kartici *Kontrola kvalitete*.        

### **Ostalo**

*Proizvodnja*
> *Tijek rada stroja*: ako je aktivno, skriva informacije vezane uz stroj u kartici *Proizvodnja*;    
> *Nedostatak*: ako je aktivno, skriva informacije vezane uz nedostatak u kartici  *Proizvodnja*;    
> *Predložak prekida*: ako je aktivno, skriva informacije vezane uz razlog obustave u kartici  *Proizvodnja*;       

*Tim*
> *Operateri koji više nisu aktivni*: ako je aktivno, skriva mrežu vezanu uz *Popis operatera koji više nisu aktivni* u kartici  *Tim*;    

*Bilješke*
> *Popis bilješki*: ako je aktivno, skriva mrežu vezanu uz *Dokumente priložene uz izvještaj odabrane faze* u kartici  *Dokumenti i Operativne upute* u kartici *Bilješke*;    

*Analiza*      
> *OEE*: ako je aktivno, skriva OEE grafikone u kartici *Analiza*;    
> *Grafike*: ako je aktivno, skriva stupčaste grafike  (*Analiza količine*, *Analiza vremena*) u kartici *Analiza*;    
> *Tablice*: ako je aktivno, skriva tablice (*Vrijednosti količine*, *Vrijednosti vremena*) u kartici *Analiza*.      

*Dodatni podaci*
> *Popis dodatnih podataka*: ako je aktivno, skriva mrežu vezanu uz *Popis dodatnih podataka  (odaberite fazu)* u kartici  *Dodatni podaci*;     

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcioniranju obrazaca, pogledajte sljedeći link  [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).




