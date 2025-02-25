
---
title: Cereri de ofertă
sidebar_position: 1
---

## Antet

Câmpurile obligatorii pentru inserarea unei cereri de achiziție sunt următoarele:

- **Tip**: este un câmp obligatoriu. În funcție de [Tipul CdO](/docs/configurations/tables/purchase/purchase-offer-type), vor fi activate anumite funcționalități, cum ar fi *Gestionare mijloace fixe*.
- **Data/An**: în mod implicit este propusă data curentă, dar poate fi modificată manual.
- **Număr**: propus automat în funcție de Tipul CdO ales.
- **Furnizor**: conține registrul contactului de la care se solicită oferta.
- **Versiune**: conține versiunea ofertei; este posibil să creați o nouă versiune cu butonul din ribbon bar **Versiune nouă**.

:::note Important
Dacă documentul este *creat automat* dintr-o CdO, aceste date sunt preluate din *documentul de origine* din care a fost generat.
:::

Inserând **Furnizorul**, toate datele specifice din *Antet* sunt propuse automat, conform datelor setate anterior în [registrul furnizorului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) în câmpurile corespunzătoare pentru adresa sa și în secțiunile:    
>- **Monedă**: secțiune care conține datele [Monedei](/docs/configurations/tables/general-settings/currencies), [Schimbului](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valutei](/docs/guide/common/glossary/glossary-intro#currency-date).     
>- **Expediţie**: secțiune care conține datele [*Expediţie*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Incoterm](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalajului](/docs/guide/common/glossary/glossary-intro#packing), [Ofertei de prețuri](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) implicite și [intervalul său de valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date).   
>- **Țară**: secțiune care conține datele [Țarii](/docs/guide/common/glossary/glossary-intro#country), [Limbii](/docs/guide/common/glossary/glossary-intro#language), [Zonei](/docs/guide/common/glossary/glossary-intro#zone).    
>- **Plăți**: secțiune care conține datele [Plății](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discounturilor*, *Destinației* și *Transportatorului*.    

Toate aceste câmpuri pot fi șterse sau modificate manual de utilizator.

Alte câmpuri opționale sunt:

- **Note**: acest câmp este preluat din registrul furnizorului sau, eventual, din CdA, dar poate fi introdus și manual.             
- **Referința noastră/Referința dvs.**: în aceste câmpuri se indică de obicei o referință internă și o referință a furnizorului pentru document. Dacă este prezent, este preluat din registrul furnizorului, altfel poate fi introdus manual.   
- **Note inițiale/finale**: se pot selecta notele care au fost introduse anterior în tabelul găsit în parcursul *Configurare > Utilitate > Gestionare note codificate*. Pentru aceasta, utilizatorul trebuie să facă dublu click pe câmpul *Note inițiale/finale* pentru a deschide Ajutor note codificate și a selecta datele.
- **Proiect**: folosind ajutorul de câmp, se poate lega documentul de un proiect. Această asociere funcționează doar la nivelul antetului articolului. Proiectul este introdus automat dacă RDO-ul a fost generat dintr-o RDA care îl conține. 
- **Data confirmării ofertei**: permite introducerea datei în care oferta a fost confirmată, dar nu este o informație obligatorie; în procedura de [Creare ordine furnizor din ofertă furnizor](/docs/purchase/offer-request/procedures/order-creation) este posibil să vizualizați și să convertiți RDO-urile neconfirmate, activând indicatorul corespunzător în zona de filtrare.  
- **Data estimată de livrare**: dacă este setată înainte de introducerea articolelor în RDO, va fi reportată și pe liniile individuale ale articolului. În alternativă, este suficient să apăsați butonul *Înlocuiește data estimată de livrare în linii* din ribbon bar pentru a actualiza datele pe liniile articolului.
- **Datè închidere**: în momentul conversiei RDO în ordine de furnizor, este valorificată automat cu data curentă dacă indicatorul corespunzător pentru închiderea ofertelor convertite a fost activat. 
- **Valabilitate ofertè**: permite setarea unei date de expirare pentru cererea de ofertă. 

*Butoane specifice*

> **Substituie data prevăzută pentru livrare din linii**: după ce a fost specificată data estimată de livrare în antet, este posibil să o înlocuiți în masă în liniile articolului deja introduse.

### Pagamenti

Le [Soluzioni di pagamento](/docs/configurations/tables/general-settings/payment-terms) sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.   
Se al [Tipo pagamento](/docs/configurations/tables/general-settings/payment-types) è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

*Pulsante specifico*
> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore> tab Sconti* e non quelli attribuiti alle condizioni di pagamento o a certi articoli. Possono essere modificati/cancellati dall'utente.   

Gli sconti proposti in testata del documento vengono riportati in ogni nuova riga articolo inserita nel documento. Se dopo aver inserito le righe articolo viene inserito un nuovo sconto in testata questo non viene replicato nelle righe articolo già inserite.

*Pulsante specifico*
> **Cancella sconti predefiniti**: utilizzato per cancellare gli sconti selezionati.


### Extra Data

Qui viene proposta l'informazione inserita nell'*Anagrafica del soggetto > tab Extra data*, solo se esistono dati di default.

## Articoli

Per inserire un *Nuovo articolo* nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo articolo** presente nella ribbon bar.

### Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.  
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.  
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino.  
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
> - *Articolo omaggio*: viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

- **Classe/Codice/Descrizione articolo**: si possono inserire manualmente oppure con l'ausilio dell'help di campo il quale proporrà tutti i dati relativi inseriti nell'Anagrafica articolo. Dopo l'inserimento dell'articolo, la sua Descrizione sarà ripresa automaticamente dall'anagrafica. Se l'articolo ha Varianti, sarà possibile selezionare la variante desiderata dal tab Dati articolo.

- **Unità di misura**: viene proposta l'unità di misura principale dell'articolo, ma nel caso in cui nell'anagrafica articolo siano codificate unità di misura alternative l'utente ha la possibilità di sceglierne un'altra.

- **Quantità**: rappresenta la quantità dell'U.M. principale e di default ha il valore 1; può essere modificata manualmente oppure può essere ripresa dal documento considerato per l'evasione.

- **Prezzo**: il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Dati articolo*; lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata. Attraverso il doppio click nel campo Listini l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.   

- **IVA**: è prioritario il dato inserito nel campo IVA dell'Anagrafica contatto. Se questo non è presente, viene proposto il valore presente nell'Anagrafica articolo, ma l'utente ha la possibilità di inserire un'altro dato. 

- **Importo unitario**: viene calcolato in automatico al netto degli sconti.

### Dati non obbligatori

- **Fatturato acquisti**: viene proposto il dato inserito nel tab *Generalità* dell'anagrafica articoli.   

- **Data chiusura**: indica la data di chiusura dell'offerta; viene compilata automaticamente se al momento della [creazione ordine fornitore da offerta fornitore](/docs/purchase/offer-request/procedures/order-creation) viene selezionato il flag di chiusura delle offerte. 

- **Data stimata di consegna**: indica la data prevista per la consegna della merce. Viene proposta in automatico se la *Data prevista consegna*è stata valorizzata nel tab testata.

- **Periodo di prevista consegna**: campo descrittivo libero in cui è possibile indicare il periodo di tempo previsto per la consegna della merce.

### Sconti

- **Tipo scaglione**: riporta lo scaglione di sconto da utilizzare, che viene ripreso dall'anagrafica fornitore oppure dal listino.  

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.   

Nella griglia invece vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione. Gli sconti possono essere ripresi: dall'anagrafica fornitore, dalla soluzione di pagamento assegnata al documento, dal listino, dalla [definizione politiche sconti](/docs/purchase/price-control/definition). Tutti i dati proposti sono modificabili.

*Pulsante specifico*
> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

### Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

>- **Articolo**: visualizza l'articolo selezionato nella griglia superiore.   
>- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.     
>- **Nota**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.
>- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino.    

>- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.
>- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la sua data inizio/fine validità.

>- **Unità di misura/Quantità alternativa**: permette di impostare un'unità di misura alternativa e la relativa quantità per l'articolo selezionato nella griglia.     
>- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale.    

>- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.   
>- **Richiesta di acquisto**: se l'offerta è stato creata da RDA viene riportata la [Richiesta d'acquisto](/docs/purchase/purchase-requests/insert-purchase-request) di riferimento.   


### Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## Riepiloghi

Nelle sezioni di questo tab sono presentate le informazioni principali dell'intero documento.

### Sconti finali articoli

Gli sconti finali applicati a livello di singolo articolo vengono distribuiti (o "spalmati") su ciascuna riga articolo del documento. Questo significa che l'importo dello sconto è suddiviso proporzionalmente tra tutti gli articoli presenti nel documento, e lo sconto relativo sarà visibile nel tab Articoli per ogni singola riga.

- **Tipo/Descrizione sconto**: permette di scegliere le tipologie di sconto (predefiniti in [Tipi sconti](/docs/configurations/tables/general-settings/discount-types)), attribuendo alla tipologia la priorità di applicazione dello sconto e se lo sconto viene calcolato sull'imponibile o in cascata rispetto agli sconti precedentemente applicati.  

- **Priorità**: rappresenta la priorità di applicazione dello sconto; l'ordinamento da applicare avviene in modo crescente.  

- **Cascata/Imponibile**: per definire se il calcolo dello sconto usa come imponibile il (prezzo * quantità) - (sconti già calcolati) oppure (prezzo * quantità).  

- **Valore**: valore numerico dello sconto finale da applicare.  

### Totali documento

- **Importo lordo articoli**: rappresenta la somma dei valori di tutti gli articoli.

- **Acconto**: rappresenta il valore dell'eventuale acconto ricevuto per il documento.

- **Importo omaggio**: rappresenta l'importo degli articoli di tipo omaggio inseriti nel tab *Articoli*.

- **Totale sconti applicati**: rappresenta il valore totale degli sconti applicati sugli articoli, escludendo gli sconti finali.

- **Importo netto articoli**: *Importo lordo articoli* – *Totale sconti applicati*.

- **Sconti finali articoli**: rappresenta il valore degli sconti finali espressi in percentuale sull'importo lordo degli articoli.

- **Importo netto sconti finali**: *Importo netto articoli* - *Totale sconti finali*.

- **Totale articoli spese**: rappresenta il valore delle spese inserite nel tab precedente come articoli di *Tipo spese*.

- **Spese di incasso**: rappresenta la somma delle spese di incasso inserite nella griglia delle *Spese*.

- **Spese bollo**: rappresenta la somma delle spese di bollo inserite nella griglia delle *Spese*.

- **Totale spese/sconti/maggiorazioni**: rappresenta il valore totale delle spese inserite nella griglia *Spese*.

- **Imponibile**: *Importo netto articoli* – *Sconti finali* + *Totale articoli spese* + *Totale spese/sconti/maggiorazioni*.

- **IVA**: rappresenta la somma dei valori contenuti nei riepiloghi IVA.

- **Totale**: *Imponibile* + *IVA*.