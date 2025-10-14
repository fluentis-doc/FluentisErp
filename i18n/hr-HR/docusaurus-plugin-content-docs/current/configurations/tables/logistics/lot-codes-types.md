---
title: Vrsta šifre lota
sidebar_position: 26
---

:::important Čemu služi
Tablica Tip šifre serije u sustavu Fluentis predstavlja ključno sredstvo za prilagodbu i upravljanje šiframa serija koje se koriste u logistici i praćenju proizvoda. Ova tablica omogućuje definiranje različitih vrsta šifri serija prema specifičnim poslovnim potrebama, s ciljem optimizacije upravljanja materijalima i osiguravanja točne identifikacije serija.

U okviru tablice moguće je unositi nove šifre serija, uz navođenje identifikacijskog koda i pripadajućeg opisa. Također je moguće konfigurirati parametre poput početne vrijednosti numeričkog brojača i upravljanja slovnim znakovima, čime se omogućuje veća fleksibilnost u sastavljanju šifre serije. Važno je napomenuti da svaki tip šifre mora biti povezan s artiklom u šifrarniku, kako bi se prilikom automatskog generiranja serijskog broja primijenila pravila definirana u ovoj tablici.

Ova konfiguracija ne samo da olakšava kontrolu i sljedivost, već je ključna i u kontekstu upravljanja s više skladišta, gdje je praćenje zaliha od presudne važnosti. Korisnici mogu detaljno definirati karakteristike, povezanosti i brojače serija kroz različite sekcije tablice, što doprinosi učinkovitijem i preciznijem upravljanju materijalima unutar poduzeća.  
:::

:::

Tablica se nalazi na putu **Tablice > Logistika > Tip šifre serije**.

U ovoj tablici moguće je kodirati *Tipove šifre serije* prilagođavajući ih specifičnim zahtjevima.  

### Pretraživanje šifri serije   

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što postavite željene filtere, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u prikazu rezultata.

### Unos šifri serije  

Za unos novih kodova potrebno je kliknuti na prvi prazan redak u mreži ili pritisnuti tipku **Novo**. 

Potrebno je unijeti **Šifru** i **Opis** tipa šifre serije, te po potrebi uključiti flag **Popuni vrijednost brojača**  kako bi se popunile praznine u numeraciji. Zatim treba unijeti početnu vrijednost numeričkog brojača u polje **Početna vrijednost brojača** te početnu slovnu vrijednost u polje **Početna vrijednost znaka**. Prva vrijednost predstavlja **početni brojčani brojač**, dok je druga početna vrijednost za **slovne znakove**.

**Tip šifre serije** zatim mora biti povezan s *šifranikom artikla*  u pripadajućem istoimenom polju unutar kartice [Serije i serijski brojevi](/docs/erp-home/registers/items/create-new-item),  kako bi se prilikom automatskog generiranja šifre serije za predmetni artikl primijenila ovdje definirana pravila.
 
Ispod glavne tablice nalaze se tri kartice:      
- **Detalji tipa šifre serije**
- **Detalji tipa šifre serije – definicija brojača**  
- **Detalji tipa šifre serije – definicija brojača**    

### Detalji tipa šifre serije

U tablici *Zadani kod*, nalaze se sve vrijednosti koje je moguće koristiti za sastavljanje šifre serije koju kreiramo. Konkretno, to su:  

> *Klasa*: prikazuje klasu artikla;       
> *Šifra artikla*: prikazuje šifru artikla;        
> *Karakteristika*: prikazuje karakteristiku iz šifrarnika artikla;       
> *Kategorija proizvoda*: prikazuje robnu kategoriju artikla;    
> *Tip artikla*: prikazuje tip artikla;      
> *Varijanta*: prikazuje varijantu artikla;     
> *Brojčani brojač*: numerički brojač;           
> *Slovni znakovi*: To je brojač slovnog tipa, za razliku od *Progresivnog broj* koji je numerički;          
> *Dan unosa*: dan datuma unosa;       
> *Mjesec unosa*: mjesec datuma unosa;       
> *Godina unosa*: godina datuma unosa;    
> *Dan isteka*: dan datuma isteka;     
> *Mjesec isteka*: mjesec datuma isteka;    
> *Godina isteka*: godina datuma isteka;    
> *Tip serije*: prikazuje tip serije artikla;      
> *Poveznica godina-slovo*: vrijednost iz tablice [Poveznica godina - slovo](/docs/configurations/tables/general-settings/year-letter-association);    
> *Poveznica mjesec-slov*: vrijednost iz tablice [Poveznica mjesec-slov](/docs/configurations/tables/general-settings/month-letter-association);    
> *Nadimak dobavljača*: nadimak iz šifarnika dobavljača;          
> *Broj otpremnice*: broj otpremnice ulazne narudžbe;    
> *Broj računa*: broj računa ulazne narudžbe;    
> *Dobavljačeva serija*: broj serije dobavljača.    

Svaka od ovih vrijednosti, ovisno o potrebi, može se prenijeti u tablicu *Detalji tipa šifre serije* pomoću pripadajućih tipki u traci izbornika. 
Za svaku dodanu stavku moguće je definirati *Duljinu* i *Znak za popunjavanje*.

#### Posebne tipke 
> **Premjesti: Zadano -> Detalji**:  omogućuje dodavanje odabrane stavke iz tablice *Zadani kod* u *Detalje tipa šifre serije*. Tipka se aktivira samo kada je označen redak u tablici *Zadani kod* unutar kartice *Detalji tipa šifre serije*;         
> **Premjesti: Detalji -> Zadano**: omogućuje uklanjanje stavke iz tablice *Detalji tipa šifre serije* i vraćanje u *Zadani kod*. Tipka se aktivira samo kada je označen redak u kartici *Detalji tipa šifre serije*.              

#### Detalji tipa šifre serije – definicija brojača 

U ovoj kartici moguće je definirati koje stavke iz *Zadanog koda* čine osnovu šifre serije – tj. dio koda koji ostaje fiksan dok se brojač mijenja.  
Nije moguće odabrati stavke *Brojčani brojač* i *Slovni znakovi*, jer su to promjenjive vrijednosti.

#### Posebne tipke  
> **Premjesti: Zadano -> Definicija brojača**: dodaje stavku iz *Zadanog koda* u karticu *Definicija brojača*. Tipka se aktivira tek nakon što označite redak u kartici *Detalji tipa šifre serije – definicija brojača*;          
> **Premjesti: Definicija brojača -> Zadano**: uklanja stavku iz kartice *Definicija brojača* i vraća je u *Zadani kod*. Tipka se aktivira nakon označavanja retka u istoj kartici.
---  

#### Detalji tipa šifre serije – vrijednosti ključnih brojača 

U ovoj kartici prikazane su sve zadnje korištene vrijednosti brojača povezane s pojedinom osnovom šifre serije.  

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcioniranju formi, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).  