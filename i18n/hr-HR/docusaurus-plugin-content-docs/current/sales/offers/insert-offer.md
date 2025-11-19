---
title: Nova ponuda kupcu
sidebar_position: 3
---

Forma **Nova ponuda** otvara se putem izbornika **Prodaja > Nova ponuda** ili putem tipke **Novo** koja se nalazi u formi [Pretraživanje ponuda](/docs/sales/offers/search-offers).

## **1. Obvezni podaci**     

- **Vrsta ponude za prodaju**: sadrži tip ponude, između onih unesenih u [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type).

- **Broj**: svakom dokumentu dodjeljuje se broj prema numeraciji koju je korisnik odredio u tablici [Numeracija ponuda](/docs/configurations/tables/fluentis-numerations) i prema vrsti dokumenta koja sadrži numeraciju.     

- **Klijent**: unos kupca je moguć korištenjem [pomoći za polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručnim](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom znakova.  

- **CRM kontakt**: ako je ponuda namijenjena leadu koji još nije kupac, moguće je unijeti CRM kontakt umjesto kupca.    

- **Godina**: predlaže se tekuća godina.   

- **Datum**: predlaže se današnji datum.    

- **Verzija**: u ovom polju unosi se broj verzije ponude; ako je nova ponuda, predložena verzija bit će prva.     

#### Neobvezni podaci:

- **Kontaktna prilika**: ako kreirani [Tip ponude](/docs/configurations/tables/sales/sales-offer-type), a povezan tip prilike u tablici Vrste ponuda
, prilikom spremanja ponude automatski će se kreirati prilika za kupca/kontakt. Ta će prilika biti prikazana u ovom polju i korisnik je može uređivati. Ako se u ovo polje ručno unese već postojeća prilika, ona će se ažurirati.         

## **2. Zaglavlje**

Nakon što su uneseni podaci u gornjem dijelu, moguće je nastaviti s unosom podataka zaglavlja:       

- **Valuta**: predlaže se valuta kupca.  

- **Dostava**: predlaže se način [Dostave](/docs/configurations/tables/general-settings/shipments) prema podacima u kartici kupca.       

- **Prodajni cjenik**: predlaže se zadani cjenik iz kartice kupca, zajedno s pripadajućim tipom raspona predviđenim za kupca.  

- **Napomene kupca**: u ovoj sekciji moguće je unijeti Reference kupca, eventualne Početne/Završne napomene; polje *Napomene kupca* prikazuje napomene unesene u [Podatke kartice kupca](/docs/erp-home/registers/contacts/create-new-contact/general).     

- **Datum potvrde ponude**: označava datum kada je ponuda potvrđena i kada je moguće da bude pretvorena u narudžbu.  

- **Očekivani datum isporuke**: datum kada se očekuje da roba bude isporučena; ovaj podatak prenosi se u narudžbu kreiranu iz ponude.     

- **Datum zatvaranja**: označava datum kada je ponuda zatvorena.

- **Datum poništenja**: datum kada će ponuda biti smatrana nevažećom ako nije postala narudžba.

- **Valjanost ponude**: krajnji datum valjanosti ponude; ovo je informativno polje.

#### Specifične tipke   

> **Nova verzija**: generira novu verziju ponude, povećavajući polje *Verzija*. Sljedeće verzije ponude nasljeđuju priložene dokumente.     

> **Zamijeni očekivani datum isporuke u stavkama**: zamjenjuje u svim stavkama artikala očekivani datum isporuke unesen u zaglavlju.        

> **Konverzija**: Omogućuje pretvaranje ponude za prodaju u stvarnu narudžbu.
Da bi proces prošao ispravno, potrebno je konfigurirati željeni tip narudžbe u tablici [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type). Također, da bi ponuda mogla biti uspješno konvertirana, mora imati Datum potvrde u zaglavlju; u suprotnom, sustav će korisnika upozoriti putem pop-up poruke da je potrebno potvrditi ponudu prije nastavka.  
Kada su svi potrebni podaci uneseni, pokretanjem procedure pojavit će se pop-up prozor s sljedećim poljima:       
> - Ako su barem neke stavke ponude već pretvorene u narudžbu, sustav će korisnika pitati želi li stvoriti novu narudžbu koristeći sve stavke ponude ili samo stavke koje još nisu referencirane.             
> - **Stvori/Ažuriraj projekt**: označavanjem ovog polja sustavu se signalizira da osim kreiranja narudžbe treba i stvoriti ili ažurirati projekt. Ako projekt treba biti stvoren, potrebno je označiti opciju *Stvori novi prazan projekt*, *Stvori novi projekt iz ponude* ili **Stvori novi projekt iz ponude i predloška projekta**; u svim slučajevima potrebno je unijeti **[Tip projekta](/docs/configurations/tables/project-management/project-type)** u predviđeno polje. U posljednjem slučaju sustav će tražiti i odabir projekta **Predložak**. Ako projekt već postoji i treba ga ažurirati podacima iz ponude, potrebno je ispuniti polje **Projekt** s projektom koji se ažurira.     
> - **Prenesi materijale/Resurse iz stavki ponude kao stavke narudžbe**: označavanjem ovog polja u narudžbu se unose stavke artikala s resursima i materijalima iz ponude, ako je struktura hijerarhijska.             
Nakon potvrde pop-up prozora, sustav će generirati novu narudžbu kupca koristeći podatke iz ponude. Narudžbu je moguće pregledati i uređivati u odjeljku [Pretraživanje narudžbi kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders). Korisnik će također dobiti pop-up poruku o uspješnoj konverziji, uključujući broj konvertirane ponude i verziju, kao i broj narudžbe kupca generirane konverzijom.
Ako se u ponudi promijene podaci predloženi iz kartice kupca, oni se prenose u narudžbu nastalu konverzijom: Napomene kupca, Dostava, Plaćanja, Popusti, Agent, Odredišta, Prijevoznici.

- **Plaćanja**
- **Popusti**
- **Primatelji**
- **Prijevoznici**
- **Agenti**
- **Dodatni podaci**
- **Informacije o e-mailu**

## **3.a Stavke ponude**

U glavnoj mreži unose se artikli.   

Dostupne su sljedeće kartice:       
- **Popusti**: ova kartica prikazuje cjenik, ako je prisutan, iz kojeg se uzima cijena za odabrani artikl; prikazuje također popuste, bilo iz cjenika ili iz kartice kupca, i omogućuje unos novih popusta. Na kraju, tu je opcija *Ručna cijena*, koja označava da se zadrže ručno unesene cijene (ova opcija se prenosi prilikom konverzije ponude u narudžbu).
- **Agenti**: na ovoj kartici prikazani su agenti kupca s pripadajućim provizijama.     
- **Podaci o artiklu**: sadrži različite informacije o artiklu, poput eventualnih varijanti, skladišta, alternativne jedinice mjere.   
- **Dodatni podaci**
- **Priloženi dokumenti**        

#### Specifične tipke

- **Stvori novi prototip**: ova tipka stvara [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za odabranu stavku artikla; referenca na generiranu ponudu se prikazuje u kartici Podaci o artiklu, polje Ponuda. Prototip je moguće urediti u odgovarajućem modulu.  
- **Poveži prototip**: ovom tipkom moguće je povezati ponudu s već postojećim[Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) otvara se pomoćni prozor (help) u kojem se može odabrati prototip dostupan za taj artikl.  
- **Otvori prototip**: tipka je aktivna ako odabrana stavka artikla ima povezani prototip i omogućuje njegovo otvaranje.     
- **Uvezi iz projekta**: ova funkcija otvara help *Artikli projekta*, u kojem je moguće odabrati artikle iz projekta koje želimo unijeti u ponudu za prodaju. Pop-up se otvara izravno s filtriranjem prema kupcu kojem je ponuda namijenjena, kako bi se prikazali relevantni projekti.   

## **3.b Stavke hijerarhijske ponude**

U slučaju da je Ponuda *hijerarhijskog tipa*, tab Artikli bit će drugačiji.  

U glavnoj mreži unose se artikli koristeći gumbe na alatnoj traci, koji omogućuju stvaranje strukture stabla. Karakteristike artikala moraju biti specificirane u tabu *Aktivnosti*.  

Sada navodimo posebne tabove hijerarhijske ponude.

### 3.b.1 Aktivnosti 

U ovoj kartici potrebno je unijeti karakteristike artikala u mreži artikala. Polja koja su prisutna su:
- **Broj stavke/Nivo**: sadrži broj stavke i WBS te se postavlja automatski, iako ga je moguće slobodno mijenjati.   
- **Tipo Nodo**: indica se la riga è un **Root Node** (nodo principale), un **Activity Node** (relativo alle attività) o un **Work Package Node** (nodo finale di progetto, l’unico che può contenere dei codici articolo codificati).       
- **Tipo riga**: indica la tipologia di articolo tra Codificato, Non codificato, Spese o Note (quest’ultimo di default).            
- **Codice Articolo**: questa sezione riporta Classe, Codice e Descrizione dell’articolo codificato eventualmente selezionato.             
- **Codice Variante**: riporta un'eventuale [Variante](/docs/erp-home/registers/items/create-new-item) dell'articolo.       
- **Descrizione articolo**: questa sezione riporta la Descrizione dell'articolo, se di tipo Nota o Non codificato.    
- **Prototipo**: contiene l'eventuale [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) collegato.          
- **Quantità/UM/Prezzo**: contiene quantità, unità di misura e prezzo dell’articolo selezionato.        
- **Quantità alternativa**: contiene l'eventuale quantità alternativa, con accanto l'Unità di misura alternativa.     
- **UM Prezzo**: se inserito, questo flag indica di moltiplicare il prezzo unitario per la quantità alternativa, per ottenere l'importo.   
- **Listino**: è possibile associare un listino dal quale ottenere il prezzo dell'articolo, con accanto il **Tipo scaglione** da applicare per lo sconto.     
- **Prezzo manuale**: questo flag indica che è stato inserito un prezzo a mano, e che quindi il prezzo di listino non deve essere considerato.          
- **Aggiorna il prezzo dalle risorse**: questo flag, se settato, fa cambiare il campo *Prezzo* inserendo lo stesso importo della colonna *Ricavo* del tab *Risorse*; può essere usato per esempio quando l'importo di riga dipende interamente dal tempo impiegato dalle Risorse.        
- **Aggiorna il prezzo dai materiali**: questo flag, se settato, fa cambiare il campo *Prezzo* inserendo lo stesso importo della colonna *Ricavo* del tab *Materiali*; può essere usato per esempio quando l'importo di riga dipende interamente dai Materiali impiegati.       
- **Aggiorna il prezzo dal prototipo**: questo flag, se settato, fa cambiare il campo *Prezzo* inserendo lo stesso importo della colonna *Prezzo di vendita* del prototipo associato.     
- **Escludi risorse in ordine cliente**: questo flag fa in modo che le Risorse della riga articolo selezionata non vengano riportate nell'Ordine cliente creato con la Conversione dell'offerta.     
- **Escludi materiali in ordine cliente**: questo flag fa in modo che i Materiali della riga articolo selezionata non vengano riportate nell'Ordine cliente creato con la Conversione dell'offerta.     
- **Sconti**: in questa griglia vengono riportati gli sconti previsti per il cliente ed è possibile aggiungerne altri.     
- **Ricavi materiali/Ricavi risorse**: in questi campi vengono riportate le colonne *Ricavo** delle tab Risorse e Materiali; in questo modo è possibile capire direttamente da questa tab l'incidenza degli importi sul Prezzo totale.     
- **IVA**: indica l’IVA da applicare.             
- **Fatturato vendite**: indica il [Fatturato vendite](/docs/configurations/tables/sales/sales-turnover) dell’articolo.                
- **Data prevista consegna/Periodo di prevista consegna**: in questi campi è possibile inserire data/periodo previsti per la consegna dell'articolo selezionato.    

### 3.b.2 Risorse

In questa tab è possibile indicare i Ricavi ottenuti dalle varie Risorse. I campi presenti sono: 
- **Risorsa**: richiede l'inserimento di una [Risorsa](/docs/project-management/registers/employee/new-employee) precodificata che ha svolto l'attività.     
- **Unità di misura**: contiene l'unità di misura da utilizzare per la Risorsa; viene proposta quella di default inserita in anagrafica risorsa, ma si può cambiare.      
- **Quantità/Costo unitario/Costo totale**: per ottenere il Costo totale viene moltiplicata automaticamente la Quantità inserita con il Prezzo unitario.      
- **Percentuale/Valore**: in questi campi è possibile inserire un eventuale ricarico da applicare al Costo totale, in percentuale o valore.     
- **Ricavo**: in questa colonna verrà calcolato automaticamente il Costo totale ricaricato.        
- **Nota**: in questo campo è possibile inserire delle note libere.       
- **Equivalente a tempo pieno**: in questo campo è possibile inserire a quanto corrispondono le giornate/ore della risorsa rispetto all'orario aziendale (ad esempio se una risorsa fa un orario part-time di 4 ore, 1 giornata di questa risorsa deve corrispondere a 0.5 giornate aziendali).     

### 3.b.3 Materiali

In questa tab è possibile indicare i Ricavi ottenuti dall'impiego di Materiali.      
Nelle prime colonne della griglia è possibile inserire un Articolo codificato, Non codificato oppure Note, la sua eventuale Variante e l'iva. Le colonne successive sono:     
- **Quantità/Costo unitario/Costo totale**: per ottenere il Costo totale viene moltiplicata automaticamente la Quantità inserita con il Costo unitario.      
- **Tipo origine costo**: è possibile selezionare l'origine dalla quale popolare la colonna *Costo unitario* tra: Costo ultimo, Costo medio, Costo standard, Listino fornitore netto, Ordine fornitore o Fattura di acquisto; questo campo è parametrizzabile di default nei [Parametri offerta](/docs/configurations/parameters/sales/offer-parameters).    
- **Percentuale/Valore**: in questi campi è possibile inserire un eventuale ricarico da applicare al Costo totale, in percentuale o valore.     
- **Ricavo**: in questa colonna verrà calcolato automaticamente il Costo totale ricaricato.        
- **Descrizione fornitore**: viene proposto il Fornitore preferenziale inserito in anagrafica articolo, ma è possibile modificarlo; se nella colonna *Tipo origine costo* è stato selezionato il listino fornitore, il listino considerato sarà quello valido per questo fornitore; inoltre, questo fornitore sarà l'intestatario della **Richiesta di offerta** generata dalla riga materiale.           
- **Numero/Data richiesta**: contiene l'eventuale **Richiesta di offerta** creata per il Materiale; infatti, quando si è posizionati nel tab *Materiali*, nella barra degli strumenti compare il pulsante *Creazione Richiesta di offerta* che genererà la RDO per il materiale selezionato.    
- **Nota**: in questo campo è possibile inserire delle note libere.   

Le altre tab presenti sono analoghe a quelle dell'offerta non gerarchica.     

#### Pulsanti specifici

> **Crea nuovo prototipo**: questo bottone crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) per la riga articolo selezionata; il riferimento al preventivo generato viene riportato nel tab Dati articolo, campo Preventivo. Sarà possibile modificare il prototipo generato dal relativo modulo.      
> **Associa prototipo**: con questo bottone è possibile associare l'offerta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) già esistente; viene aperto un help nel quale poter scegliere tra i prototipi disponibili per quell'articolo.       
> **Apri prototipo**: questo bottone è abilitato se la riga articolo selezionata ha un Prototipo associato, e permette di aprirlo.       
> **Import da progetto**: questa funzione apre l'help Articolo progetto, nel quale è possibile selezionare gli articoli provenienti da un progetto che vogliamo inserire nell'offerta di vendita. Il pop up si apre direttamente con il filtro sul cliente intestatario dell'offerta, per permettere di visualizzarne i relativi progetti.     
> **Nuovo figlio**: permette di inserire una riga progetto figlia della riga selezionata.        
> **Nuovo fratello**: permette di inserire una riga progetto nello stesso livello della riga selezionata.       
> **Sostituisci il numero WBS**: permette di incorporare al Numero WBS delle righe anche il Numero del progetto.       
> **Implodi**: consente di nascondere le righe dell'albero.       
> **Esplodi**: consente di visualizzare le righe dell'albero.

## **4. Riepiloghi Offerta**

In questa tab possono essere inseriti e sono validi per la totalità del documento:

### 4.1 Sconti finali articoli

import SummariesFinalDiscount from './../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount /> 

### 4.2 Spese/Sconti/maggiorazioni finali 

import SummariesExpenses from './../../import/sections/summaries-expenses.md'

<SummariesExpenses />