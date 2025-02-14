---
title: Fluentis NSO
sidebar_position: 5
---

## Configurazione

La prima configurazione da fare è inserire il flag Trasmissione Ordini Elettronici in *Home > Tabelle > Impostazioni generali > Configurazione documenti elettronici*.        
Nella tabella Configurazione documenti elettronici è possibile definire per ogni società l’utilizzo 
del ricevimento e della trasmissione degli ordini elettronici con la pubblica amministrazione, 
nella stessa tabella è possibile identificare come devono essere eseguite certe transazioni.        
Tra le tabelle delle impostazioni generali c’è la sezione PEPPOL dove ci sono:
Le tabelle precodificate:
- Tipi ordine cliente standard PEPPOL, contiene i codici dei tipi ordine Ordine e sotto-Ordine definiti nella code list dello Standard PEPPOL
- Codici Unità di misura standard PEPPOL, contiene le Unità di misura definiti nella code 
list dello Standard PEPPOL
- Codici IVA standard PEPPOL, contiene i codici IVA definiti nella code list dello 
Standard PEPPOL
- Codici sconto standard PEPPOL
- Codici spese standard PEPPOL
- Classificazione Articoli standard PEPPOL
- Natura Processi 
- Natura Documenti

## Tabelle da configurare

Le tabelle da configurare sono le seguenti:     

- I tipi ordine Fluentis che corrispondono ai tipi ordine PEPPOL (configurazione tipi 
ordine cliente)
- I codici iva Fluentis che corrispondono ai codici IVA di PEPPOL (configurazione iva) 
- Le unità di misura di Fluentis che corrispondono ai codici unità di misura di PEPPOL 
(configurazione unità di misura) 
- Nella tipi barcode c’è da definire quale tipo barcode identifica l’AIC code, la codifica 
standard o la classificazione articoli 
- Configurazione tipi abbuoni, dove si associano i tipi sconto Fluentis con i codici abbuono 
PEPPOL
- Configurazione tipi spese, dove si associano i tipi spese Fluentis con i codici spesa 
PEPPOL

## Dati delle tabelle Precodificate 

E’ necessario identificare il tipo di ordine, utilizzando i valori della relativa code list prevista 
dallo standard PEPPOL, che include i seguenti due codici: 
- “220”, per gli ordini di acquisto in senso stretto; 
- “227”, per gli ordini di consegna.       

Nei Documenti di tipo: 
- Ordine iniziale e sostitutivo; 
- Ordine di riscontro sostitutivo;        

il codice del tipo di ordine viene indicato nell’elemento “OrderTypeCode”, come mostrato nel 
seguente esempio: 

< cbc:OrderTypeCode>220< /cbc:OrderTypeCode>             

Nei Documenti di tipo:       

- Ordine pre-concordato iniziale e sostitutivo;       

il codice del tipo di ordine viene indicato nel campo “SpecialTerms” dell’elemento 
“DeliveryTerms”, come mostrato nel seguente esempio:        

< cac:DeliveryTerms> < cbc:SpecialTerms>220< /cbc:SpecialTerms> < /cac:DeliveryTerms>
         
Esiste un’ulteriore classificazione dei tipi ordine, non obbligatoria.       
Per il tipo ordine 220 Ordine di acquisto:      
- OF, Ordine di fatturazione per prodotti già consumati 
- OFR, Ordine di fatturazione e reintegro 
Per il tipo ordine 227 Ordine di consegna:      
- CD Conto deposito 
- CV Conto visione 
- CG Comodato gratuito       

Nei Documenti di tipo: 
- Ordine iniziale e sostitutivo; 
- Ordine di riscontro sostitutivo;        

il codice del sotto-tipo di ordine viene indicato nel campo “SpecialTerms” dell’elemento 
“DeliveryTerms”, come mostrato nel seguente esempio:        

< cac:DeliveryTerms> < cbc:SpecialTerms>OFR< /SpecialTerms> < /cac:DeliveryTerms>
     
Nei Documenti di tipo: 
- Ordine pre-concordato iniziale e sostitutivo;         

il codice del sotto-tipo di ordine viene indicato nel campo “SpecialTerms” dell’elemento 
“DeliveryTerms”, dopo il codice del tipo di ordine, utilizzando il formato dei campi strutturati, 
come mostrato nel seguente esempio:         

< cac:DeliveryTerms> < cbc:SpecialTerms>220#OFR< /SpecialTerms> < /cac:DeliveryTerms>

## Codice Articolo

L’individuazione del prodotto (bene o servizio) all’interno di ciascuna linea d’ordine avviene, oltre 
che attraverso il nome (elemento “Name, che è obbligatorio) e la descrizione (elemento 
“Description”), anche per mezzo dell’utilizzo di codici identificativi. 
In particolare, i tracciati dei predetti Documenti prevedono, primariamente, due tipi di codice: 
- il codice attribuito dal Fornitore (elemento “SellersItemIdentification/ID”); 
- il codice standard, corrispondente all’identificativo assegnato al prodotto da un sistema di 
identificazione univoca (elemento “StandardItemIdentification/ID”) selezionato tra quelli presenti 
nell’apposita code list prevista dallo standard PEPPOL.         

Gli elementi su menzionati non sono obbligatori, tuttavia se ne raccomanda vivamente l’utilizzo.      
Esempio:     

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

Per i beni di largo consumo, si suggerisce di valorizzare l’elemento 
“StandardItemIdentification/ID” con il relativo codice GTIN (corrispondente allo 
“schemeID=”0160” della code list PEPPOL), come mostrato nel precedente esempio.         
Per i prodotti farmaceutici provvisti del codice di Autorizzazione all’Immissione in Commercio 
(AIC) rilasciato dell’Agenzia Italiana del Farmaco (AIFA), l’elemento 
“SellersItemIdentification/ID” deve essere valorizzato sempre con il relativo codice AIC.

## Gruppo Merceologico

Per ciascun prodotto, all’interno della relativa linea d’ordine è possibile specificare uno o più 
codici di classificazione, valorizzando il campo “ItemClassificationCode/ID” dell’elemento 
“CommodityClassification”. 
Il valore da indicare deve essere tratto da un sistema di classificazione univoca selezionato tra 
quelli presenti nell’apposita code list prevista dallo standard PEPPOL, come mostrato 
nell’esempio seguente:       

< cac:OrderLine>        
< cac:LineItem>       
< cac:Item>       
< cac:CommodityClassification>        
< cbc:ItemClassificationCode listVersionID=”19.0501” listID=”STI”>12345678< /cbc:ItemClassificationCode>      
< /cac:CommodityClassification>       
< /cac:Item>       
< /cac:LineItem>      
< /cac:OrderLine>      

Si raccomanda di utilizzare almeno uno dei sistemi di classificazione riportati nella tabella che 
segue, ove applicabili.       

| Codice | Descrizione dello standard di classificazione | Ambito di utilizzo |
| :-- | :-- | :-- |
| STI | Sistema ufficiale europeo di classificazione unico per gli appalti pubblici (CPV - Common Procurement Vocabulaty) | Prodotti e servizi oggetto di appalti pubblici |
| STL | Sistema di classificazione anatomico, terapeutico e chimico (ATC - Anatomical Therapeutic Chemical classification system) | Farmaci |
| STO | Classificazione Nazionale Italiana dei Dispositivi medici (CND) | Dispositivi medici |
| STH | Classificazione commerciale dei prodotti (GPC - Global Product Classification) | Beni di largo consumo |
| IB | Sistema di identificazione internazionale dei libri (ISBN - International Standard Book Number) | Libri |
| ZZZ | Sistema definito manualmente tra le parti | Per i dispositivi medici permette di specificare i valori 'DM1', 'DM2' o 'DM0' (quando non applicabili i primi due) |

In Fluentis questi codici sono da attribuire alla tabella codici Barcode da associare all’articolo.     

## Unità di misura

Nelle linee d’ordine, è necessario indicare la quantità del prodotto specificando un’unità di misura 
tra quelle indicate nell’apposita Code List prevista dallo standard PEPPOL, come mostrato nel 
seguente esempio:     

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
