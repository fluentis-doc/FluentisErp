---
title: Fluentis NSO
sidebar_position: 5
---

## Konfiguracija  

Prva konfiguracija koju treba napraviti jest postaviti oznake za slanje elektroničkih narudžbi u: *Home > Tablice > Opće postavke > Konfiguracija elektroničkih dokumenata*.          
U tablici Konfiguracija elektroničkih dokumenata moguće je za svaku tvrtku definirati korištenje primitka i slanja elektroničkih narudžbi prema javnoj upravi, a u istoj tablici moguće je i odrediti kako se trebaju izvršavati određene transakcije.         
Među tablicama općih postavki nalazi se i PEPPOL sekcija, u kojoj se nalaze:  
Predefinirane tablice:  
- Tipovi narudžbi klijenta standard PEPPOL, sadrži kodove tipova narudžbi „Narudžba“ i „Podnarudžba“ definirane u code listi PEPPOL standarda  
- Kodovi jedinica mjere standard PEPPOL, contiene le Unità di misura definiti nella code 
list dello Standard PEPPOL
- Standardni PEPPOL PDV kodovi – sadrži PDV kodove definirane u PEPPOL standardnoj code listi   
- Standardni PEPPOL kodovi za popuste  
- Standardni PEPPOL kodovi za troškove  
- Standardna klasifikacija artikala PEPPOL  
- Vrsta procesa  
- Vrsta dokumenata  

## Tablice za konfiguraciju   

Sljedeće tablice je potrebno konfigurirati:    

- Tipovi narudžbi Fluentis koji odgovaraju PEPPOL tipovima narudžbi (konfiguracija tipova narudžbi kupca)  
- PDV kodovi Fluentis koji odgovaraju PEPPOL PDV kodovima (konfiguracija PDV-a)  
- Jedinice mjere Fluentis koje odgovaraju PEPPOL kodovima jedinica mjere (konfiguracija jedinica mjere)    
- Tipovi barkodova – potrebno je definirati koji tip barkoda identificira AIC kod, standardnu kodifikaciju ili klasifikaciju artikala  
- Konfiguracija tipova popusta – gdje se Fluentis tipovi popusta povezuju s PEPPOL kodovima popusta  
- Konfiguracija tipova troškova – gdje se Fluentis tipovi troškova povezuju s PEPPOL kodovima troškova  

## Dodjela prekodiranih tablica  

Potrebno je identificirati tip narudžbe koristeći vrijednosti iz odgovarajuće code liste predviđene PEPPOL standardom, koja uključuje sljedeća dva koda:  
- “220”, za narudžbe u užem smislu (kupovne narudžbe);   
- “227”, za narudžbe za isporuku.        

U dokumentima tipa:  
- Početna i zamjenska narudžba; 
- Zamjenska potvrda narudžbe;          

kod tipa narudžbe navodi se u elementu “OrderTypeCode”, kao što je prikazano u sljedećem primjeru:  

< cbc:OrderTypeCode>220< /cbc:OrderTypeCode>             

U dokumentima tipa:        

- Početna i zamjenska unaprijed dogovorena narudžba;       

Kod vrste narudžbe navodi se u polju “SpecialTerms” elementa 
“DeliveryTerms”, kako je prikazano u sljedećem primjeru:         

< cac:DeliveryTerms> < cbc:SpecialTerms>220< /cbc:SpecialTerms> < /cac:DeliveryTerms>
         
Postoji dodatna klasifikacija vrsta narudžbi, koja nije obvezna.       
Za vrstu narudžbe 220 Narudžbenica:      
- OF, Narudžba za fakturiranje već potrošenih proizvoda  
- OFR, Narudžba za fakturiranje i obnovu zaliha   
Za vrstu narudžbe 227 Nalog za isporuku:        
- CD Račun pologa
- CV Konto pregleda
- CG Besplatna posudba (kredit)      

U dokumentima tipa:  
- Početna i zamjenska narudžba;
- Zamjenska narudžba za potvrdu;        

šifra podtipa narudžbe se navodi u polju “SpecialTerms” unutar elementa 
“DeliveryTerms”, kako je prikazano u sljedećem primjeru:       

< cac:DeliveryTerms> < cbc:SpecialTerms>OFR< /SpecialTerms> < /cac:DeliveryTerms>
     
U dokumentima tipa:  
- Početna pred-dogovorena narudžba i zamjenska pred-dogovorena narudžba;          

kod podtipa narudžbe navodi se u polju „SpecialTerms” elementa „DeliveryTerms”, nakon koda tipa narudžbe, koristeći format strukturiranih polja, kao što je prikazano u sljedećem primjeru:          

< cac:DeliveryTerms> < cbc:SpecialTerms>220#OFR< /SpecialTerms> < /cac:DeliveryTerms>

## Šifra artikla  

Identifikacija proizvoda (robe ili usluge) unutar svake stavke narudžbe provodi se, osim putem naziva (element „Name”, koji je obvezan) i opisa (element „Description”), također i korištenjem identifikacijskih kodova.  
In particolare, i tracciati dei predetti Konkretno, strukture navedenih dokumenata predviđaju prvenstveno dvije vrste kodova:   
- kod koji dodjeljuje dobavljač (element „SellersItemIdentification/ID”);  
- standardni kod, koji odgovara identifikatoru dodijeljenom proizvodu od strane sustava jedinstvene identifikacije (element „StandardItemIdentification/ID”), odabranog među onima navedenima u odgovarajućoj kodnoj listi predviđenoj standardom PEPPOL.     

Navedeni elementi nisu obvezni, međutim njihova se uporaba snažno preporučuje.
Primjer:      

< cac:OrderLine>          
        < cac:LineItem>        
        < cac:Item>        
            < cbc:Name>Penna stilografica< /cbc:Name>        
            < cbc:Description>Penna stilografica edizione limitata< /cbc:Description>        
            < cac:SellersItemIdentification>           
                < cbc:ID>Stilo24< /cbc:ID>       
            < /cac:SellersItemIdentification>      
            < cac:StandardItemIdentification>      
                < cbc:ID schemeID=”0160”>0K10999746< /ID>       
            < /cac:StandardItemIdentification>       
        < /cac:Item>       
        < /cac:LineItem>      
< /cac:OrderLine>          

Za robu široke potrošnje preporučuje se popunjavanje elementa „StandardItemIdentification/ID” odgovarajućim GTIN kodom (koji odgovara „schemeID = 0160” iz PEPPOL kodne liste), kao što je prikazano u prethodnom primjeru.           
Za farmaceutske proizvode koji imaju kod Odobrenja za stavljanje u promet (AIC), izdan od strane Talijanske agencije za lijekove (AIFA), element „SellersItemIdentification/ID” mora se uvijek popuniti odgovarajućim AIC kodom.  

## Robna skupina

Za svaki proizvod, unutar odgovarajuće stavke narudžbe, moguće je navesti jedan ili više klasifikacijskih kodova, popunjavanjem polja „ItemClassificationCode/ID” elementa „CommodityClassification”.
Vrijednost koju je potrebno navesti mora biti preuzeta iz sustava jedinstvene klasifikacije odabranog među onima navedenima u odgovarajućoj kodnoj listi predviđenoj standardom PEPPOL, kao što je prikazano u sljedećem primjeru:       

< cac:OrderLine>        
< cac:LineItem>       
< cac:Item>       
< cac:CommodityClassification>        
< cbc:ItemClassificationCode listVersionID=”19.0501” listID=”STI”>12345678< /cbc:ItemClassificationCode>      
< /cac:CommodityClassification>       
< /cac:Item>       
< /cac:LineItem>      
< /cac:OrderLine>      

Preporučuje se koristiti barem jedan od sustava klasifikacije navedenih u tablici koja slijedi, tamo gdje je primjenjivo.      

| Kod | Opis klasifikacijskog standarda | Područje primjene |
| :-- | :-- | :-- |
| STI | Službeni europski sustav jedinstvene klasifikacije za javne nabave (CPV - Common Procurement Vocabulary) | Proizvodi i usluge predmet javnih nabava |
| STL | Sistema klasifikacije anatomskih, terapijskih i kemijskih (ATC - Anatomical Therapeutic Chemical classification system) | Lijekovi |
| STO | Talijanska nacionalna klasifikacija medicinskih proizvoda (CND) | Medicinski proizvodi |  
| STH | Trgovačka klasifikacija proizvoda (GPC – Global Product Classification) | Roba široke potrošnje |  
| IB | Međunarodni sustav identifikacije knjiga (ISBN – International Standard Book Number) | Knjige |
| ZZZ | Sustav ručno definiran između strana | Za medicinske proizvode omogućuje navođenje vrijednosti „DM1”, „DM2” ili „DM0” (kada prva dva nisu primjenjiva) |

U Fluentisu se ovi kodovi dodjeljuju u tablici Barcode kodova, koja se zatim povezuje s artiklom.      

## Jedinica mjere  

U stavkama narudžbe potrebno je navesti količinu proizvoda, pri čemu se mora odabrati jedinica mjere s popisa predviđenog u odgovarajućoj Code List prema PEPPOL standardu, kao što je prikazano u sljedećem primjeru:   

< cac:OrderLine> 
< cac:LineItem> 
< cbc:Quantity unitCode=”C62”>3< /cbc:Quantity> 
< /cac:LineItem> 
< /cac:OrderLine>          

Nella tabella che segue, si riportano i codici delle unità di misura che si raccomanda di utilizzare, 
ove applicabili (per maggiori dettagli si rinvia alle Linee guida).         

| Codice | Unità di misura | Ambito di utilizzo |
| :-: | :-- | :-: |
| C62 | Unità di prodotto (bene o servizio) | Quantità |
| PR | Paio | Quantità |
| XBK | Pacchetto, scatola: confezionamento primario che contiene più unità del medesimo articolo | Confezionamento |
| DZP | Confezionamento standard contenente dodici pezzi di un medesimo articolo | Confezionamento |
| KT | Equipaggiamento (kit): confezionamento primario che contiene più unità di articoli diversi ma utilizzabili congiuntamente | Confezionamento |
| XBX | Pacco, imballaggio (box): confezionamento secondario che contiene più confezioni primarie | Confezionamento |
| XOB | Bancale (pallet): piattaforma o scatola aperta, solitamente in legno, su cui vengono trattenute le merci per facilità di movimentazione meccanica durante il trasporto e lo stoccaggio | Confezionamento |
| MTR | Metro | Lunghezza |
| CMT | Centimetro | Lunghezza |
| MMT | Millimetro | Lunghezza |
| MTK | Metro quadrato | Superficie |
| CMK | Centrimetro quadrato | Superficie |
| MTQ | Metro cubo | Volume |
| CMQ | Centimetro cubo | Volume |
| MMQ | Millimetro cubo | Volume |
| LTR | Litro | Capacità |
| MLT | Millilitro | Capacità |
| GRM | Grammo | Peso |
| HGM | Ettogrammo | Peso |
| KGM | Chilogrammo | Peso |
| MGM | Milligrammo | Peso |
| MC | Microgrammo | Peso |
| HUR | Ora | Tempo |
| DAY | Giorno | Tempo |
| MON | Mese | Tempo |
| ANN | Anno | Tempo |
| E40 | Giorno di lavoro | Lavoro |
| KWH | Kilowattora | Elettricità |
| BQL | Becquerei | Radioattività |
| 4N | Mega-Becquerei | Radioattività |
| GBQ | Giga-Becquerei | Radioattività |
| CUR | Curie | Radioattività |
| MCU | Millicurie | Radioattività |

## Destinazione merce

L'ID indica il codice attribuito al luogo in cui deve essere eseguita la fornitura. Questo codice va 
sempre riportato se il luogo di consegna è un indirizzo istituzionale del Cliente a cui è stato 
associato un identificativo univoco reso disponibile al Fornitore.          

Sono da valorizzare in modo appropriato i diversi campi dell’elemento “DeliveryLocation” 
(inclusi quelli non obbligatori, ove ciò contribuisca a specificarne l’esatta individuazione), come 
mostrato nel seguente esempio, riferito a un Documento di tipo Ordine o Ordine di riscontro. 
L’indicazione del luogo di consegna è previsto solo con riferimento all’intero Documento.        

Allo scopo di agevolare la fornitura dei beni presso le sedi istituzionali delle amministrazioni 
pubbliche, è opportuno che i rispettivi punti di consegna sia codificato in maniera univoca. Con 
specifico riguardo agli enti del SSN, si segnala che da settembre 2019 sarà disponibile il sito web 
(http://www.puntidiconsegna-nso.it/) in cui sarà possibile pubblicare l’elenco dei propri codici 
identificativi dei punti di consegna istituzionali. Nello specifico, si raccomanda agli Enti di creare 
i codici dei punti di consegna istituzionali anteponendo il proprio codice fiscale al codice interno 
del punto di consegna, definito liberamente, separati dal carattere “-“ (trattino d’unione o segno 
meno), senza interposizione di spazi. Il formato del codice sarà quindi: Codice Fiscale-ID interno 
punto di consegna Per esempio, nel caso di Ente con Codice Fiscale “123456788901” e magazzino 
“acdg45”, il Codice Ship-To da inserire nell'ordine sarà "123456788901-acdg45” (v. Paragrafo 
3.3.3.6). Si suggerisce di contenere la lunghezza di questo codice entro i 20 caratteri complessivi 
(“-“ incluso).         

In Fluentis la Destinazione Merce viene riconosciuta tramite il questo codice ID e viene ricercata 
come destinazione codificata nel cliente attribuendo al nomignolo del contatto in Fluentis gli ultimi 
7 caratteri del codice che segue il – del punto di consegna NSO.

## PEPPOL Ordini clienti

In applicazioni Bizlink c’è la form PEPPOL Ordini Clienti per visualizzare tutti i messaggi in 
entrata da NSO e in uscita per NSO.         
Dopo aver selezionato la riga di un ordine, premendo il tasto “Visualizza” sulla ribbon bar viene 
aperta un’ulteriore form **Registro dei documenti SDI**.       
All’interno di questa form vengono mostrati alcuni dati riferiti al file NSO dell’ordine, quali lo 
stato del documento, i file collegati e il contenuto del file.
È possibile visualizzare il contenuto dell’ordine. È possibile inoltre visualizzare le eventuali notifiche dello SDI.           
Premendo sul pulsante **Scarica allegato** è possibile scaricare l’allegato selezionato nella 
griglia “Allegati”, mentre premendo “Scarica il contenuto del registro” è possibile scaricare il 
file selezionato nella griglia **Registro dei documenti SDI**, la quale contiene il file xml 
dell’ordine e tutti i file ad esso collegati, come quello delle notifiche.       
Premendo il pulsante della ribbon bar **Apri documento** è possibile visualizzare il contenuto 
dell’ordine Peppol, nel caso in cui sia almeno nello stato “Inserito”, direttamente in Fluentis, 
mediante l’apertura della form “Ordini cliente”.         
Premendo il pulsante **Registro del documenti SDI** nella form “Ordini Cliente” verrà aperta la 
form “Registro dei documenti SDI”, analogamente a quanto accade premendo il pulsante 
“Visualizza” nella ribbon bar della form *PEPPOL ordini clienti*.       
Premendo sul pulsante **Scarica allegato** nella ribbon bar della form *PEPPOL Ordini Clienti* 
verrà scaricato, in una cartella indicata dall’utente, il file Xml dell’ordine selezionato.        
Premendo sul pulsante **Modifica dati XML** dopo aver selezionato un ordine con stato SDI “In 
errore”, viene aperta la form di modifica dei dati del file importato.           
In questa form sarà possibile correggere eventuali dati errati sull’ordine ricevuto, quali righe con 
prezzo a 0, codici articoli non interpretabili automaticamente, unità di misura, in modo di 
indicare dati obbligatori mancanti.         
Nella griglia **Registro Ordini NSO** vengono visualizzate diverse informazioni. Vediamo le 
principali:          
- Stato SDI: è lo stato di avanzamento in cui si trova l’ordine PEPPOL (vedi la parte 
relativa agli stati dell’ordine)
- Tipo: è la tipologia dell’ordine PEPPOL e può assumere i seguenti valori
> - 220 = Ordine di acquisto (ordine ricevuto dal fornitore)
> - 227 = Ordine di consegna
> - PRE = Ordine Pre-concordato
- Numero(Id): è il numero dell’ordine, che con data cliente e endpointCliente identifica 
univocamente l’ordine
- Data Cliente: è la data dell’ordine, che con numero(I) e EndpointCliente identifica 
univocamente l’ordine
- Endpointcliente: può indicare o il codice ufficio del cliente o la partita IVA del 
fornitore che ha inviato l’ordine, e con Numero(Id) e Data Cliente identifica 
univocamente l’ordine
- Tipo processo: indica la tipologia di processo di cui fa parte l’ordine e può assumere 3 
valori:
> - Ordinazione semplice
> - Ordinazione completa
> - Ordinazione pre-concordata
- Tipo documento: indica l’ultima tipologia di documento o notifica legata all’ordine
- Tripletta: è il riferimento all’ordine a cui fa riferimento l’ordine corrente, la tripleta è 
composta da : Identificativo del documento, data di emissione del documento e 
identificativo del soggetto emittente
- Nome file NSO: indica il nome del file Xml dell’ordine PEPPOL
- NSO data ricev.: indica al data di ricevimento dell’ordine da parte del cliente o 
dell’invio dell’ordine pre-concordato
- NSO ultimo evento: indica la data dell’ultima modifica di stato subita dall’ordine
