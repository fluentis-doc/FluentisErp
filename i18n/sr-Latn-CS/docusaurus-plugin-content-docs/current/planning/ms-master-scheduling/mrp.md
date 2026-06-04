---
title: MRP
sidebar_position: 2
---

**Manufacturing Resourse Planning**

Ovaj postupak omogućuje korisniku analizu pravilne dostupnosti materijala i proizvodnih resursa u skladu s planiranjem proizvodnje. Kroz ovu obradu, operater može dobiti niz preporuka o ranijem nabavu određenih materijala, integraciji potrebnih količina ili otkazivanju nepotrebnih narudžbi kako bi se olakšalo praćenje i upravljanje operacijama. MRP provodi planiranje proizvodnje uzimajući u obzir različite proizvodne ograničenja, dostupne sirovine i poluproizvode te naručene materijale.   
Zahvaljujući ovom postupku, operater može analizirati proizvodnu pokrivenost svake aktivne narudžbe, upravljajući i koordinirajući sve procese uključene u nabavu, proizvodnju i dostavu gotovog proizvoda. Osnovni princip MRP sustava je optimizacija zaliha prema poslovnim potrebama, što rezultira smanjenjem razine zaliha i povećanjem učinkovitosti. Ukratko, putem algoritama ove funkcije, Fluentis MRP je sposoban pratiti raspoloživost svakog materijala u skladištu i njegovu dostupnost na odabranom datumu.

### M.R.P.

Na ovoj kartici prikazuju se rezultati prethodno pokrenute MRP obrade.  

### Radni nalog  

Na ovoj kartici možete filtrirati i odabrati proizvodne naloge koje želite obraditi, kako biste djelovali djelomično na odabrane proizvodne naloge ili globalno na sve proizvodne naloge prisutne u proizvodnji.  

### Parametri

Putem ove kartice podešavaju se svi opći parametri koji se odnose na postupak MRP. Neke postavke prisutne na ovoj kartici preuzimaju se iz prozora [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) i odnose se na određeni artikl.   

**Raspored**:   
> **Vremensko planiranje do**: označava datum završetka rasporeda;      
> **Zastava Materijali**: ako je omogućeno, materijali se uzimaju u obzir pri planiranju;      
> **Zastava Resursi**: ako je omogućeno, resursi se uzimaju u obzir pri planiranju;      
> **Zastava Planiranih narudžbi za nabavu**: ako je omogućeno, planirane narudžbe za nabavu uzimaju se u obzir pri planiranju;      
> **Zastava Planiranih proizvodnih narudžbi**:  ako je omogućeno, planirane proizvodne narudžbe uzimaju se u obzir pri planiranju;      
> **Zastava Planiranih narudžbi za radne naloge**: ako je omogućeno, planirane narudžbe za radne naloge uzimaju se u obzir pri planiranju;     

**Za dokumente bez potrebnih datuma:**    
> **Narudžbe dobavljača i zahtjevi za kupovinu**: možete odlučiti ne uzimati u obzir članke bez predviđenog datuma primitka, ili koristiti ručno uneseni datum kao predviđeni datum isporuke u ovoj sekciji;     
> **Narudžba kupaca**: možete odlučiti ne uzimati u obzir članke bez predviđenog datuma primitka, ili koristiti ručno uneseni datum kao predviđeni datum isporuke u ovoj sekciji;    

**Razmatra dostupnosti koje dolaze iz**:      
> **Acquisti**: ako je aktiviran, omogućuje da dokumenti iz područja *Nabave* moraju biti uzeti u obzir tijekom obrade MRP postupka;     
> **Prodaja**: ako je aktiviran, omogućuje da dokumenti iz područja *Prodaje* moraju biti uzeti u obzir tijekom obrade MRP postupka;      
> **Skladište**: ako je aktiviran, omogućuje da dokumenti iz područja *Skladišta* moraju biti uzeti u obzir tijekom obrade MRP postupka;     
> **Podizvođač**: ako je aktiviran, omogućuje da dokumenti iz područja *Podizvođač* moraju biti uzeti u obzir tijekom obrade MRP postupka;     
> **Planiranje**: ako je aktiviran, omogućuje da dokumenti iz područja *Planiranja* (tj. Proizvodne naloge, Planirane narudžbe za Nabavu, Radne naloge i/ili Proizvodnju) moraju biti uzeti u obzir tijekom obrade MRP postupka;
> **Proizvodnja**: ako je aktivirana, omogućuje da dokumenti iz područja izdane *Proizvodnje* (tj. proizvodni nalozi) moraju biti uzeti u obzir tijekom obrade MRP postupka;      
 
**Razmotrite alternative materijala**: *U RAZVOJU*    
**Razmotrite i alternativne faze**: *U RAZVOJU* 

**Čitaj popise/rute**:   
> **Verzija**: označava zadani broj verzije koji se uzima u obzir za strukturu / ciklus;    

**Razmotrite količine prema ekonomskom lotu**: ako je aktivirano, omogućuje da se za artikl uzme u obzir ekonomska serija (minimalna količina) za proizvodnju ili kupovinu;     
**Razmotri višekratnike ekonomskih lotova**: ako je aktivirano, omogućuje da se za artikl uzme u obzir višekratnik ekonomske serije za proizvodnju ili kupovinu;     
**Ponovno uspostavljanje minimalne zalihe za artikl**: ako je aktivirano, omogućuje da se za artikl ponovno uspostavi minimalna zalihama postavljena u njegovom matičnom kartici, u tablici *Nabava*;     
**Obnova točke ponovnog naručivanja za artikl**: ako je aktivirano, omogućuje da se za artikl ponovno uspostavi točka ponovnog naručivanja postavljena u njegovom matičnom kartici, u tablici *Nabava*; *U RAZVOJU*        
**Razmotriti indeks pokrivenosti**: ako je aktivirano, omogućuje da se za artikl uzme u obzir indeks pokrivenosti postavljen u njegovom šifarniku, u kartici *Nabava*; indeks pokrivenosti se izražava u tjednima i kada je naveden, znači da se sustavu nalaže pokriti potrebe za navedeni broj tjedana u ovom polju;     
**Nema prijedloga**: ako je aktivno, MRP neće predlagati radnje povećanja, smanjenja, brisanja, prethodnog ili naknadnog pomaka na već stvorenim planiranim narudžbama;     
**Razmotri prošlost**: ako je aktivno, za dokumente s datumom predviđene isporuke u prošlosti u odnosu na trenutni datum (danas), uzima u obzir dostupnost i u prošlosti; ako nije aktivno, svi dokumenti s datumom predviđene isporuke u prošlosti (u odnosu na danas) bit će razmatrani s datumom predviđene isporuke danas;         
**Razlikuj potvrđeni zahtijev za proizvodnju**: ako je aktivno, MRP se izvršava dvaput. Prvo izvršavanje uzima u obzir samo potrebe proizašle iz izvršnih dokumenata (područja: SCM - Nabava, SCS - Kontrola rada i MES - Proizvodnja), generirajući planirane narudžbe po potrebi i valorizirajući polje "potvrđena količina" (prisutno u upravo stvorenoj planiranoj narudžbi). Ovo prvo izvršavanje generira dokumente koji su strogo potrebni za zadovoljenje potražnje iz najhitnijih izvršnih dokumenata. Drugo izvršavanje uzima u obzir potrebe proizašle iz svih dokumenata uključujući i proizvodne naloga; ovo drugo izvršavanje generira nedostajuće dokumente bez optimizacije s onima generiranim u prvom izvršavanju kako bi se omogućila zasebna potvrda/izdavanje istih;         
**Razmotri stavke bez podnaloga**: ako je aktivno, tokom obrade MRP procedure razmatraju se svi članci sa politikom upravljanja prognozama i potrebama (osim arhiviranih i/ili fiktivnih) i s politikom upravljanja narudžbama samo ako je aktiviran flag *Nalog proizvodnje* u MRP parametrima članka, čak i ako nemaju određenu narudžbu;       
**Kontrola zahtjeva s generiranjem planiranih naloga**: omogućuje odabir generiranja planiranih narudžbi ili ne. Ako nije aktivno, MRP će samo predložiti stvaranje planiranih narudžbi. Napomena da planirane narudžbe koje stvara MRP nemaju reference na narudžbe;      
**Stavke kojih ima na zalihi**: obuhvaćaju sve artikle koji imaju politiku upravljanja "Na zalihi" u MRP parametrima članka. Također, u MRP parametrima barem jedan od parametara minimalne zalihe i točke naručivanja mora biti postavljen;      
**Tolerancija za zauzeće Radnog centra**: koristi se u generiranju zauzeća za faze planiranih narudžbi proizvodnje kako bi se definiralo kada MRP treba koristiti alternativnu radnu fazu.     

### Arhiva

Na ovoj kartici možete filtrirati i pregledati popis pokrenutih MRP procedura, s naznakom korisnika i vremena kada su izvršene.    