---
title: ExtraData Simple
sidebar_position: 1
---

## ExtraData Semplice - Aspetti introduttivi

Tramite l'ExtraData semplice è possibile aggiungere delle nuove proprietà semplici ad un oggetto Fluentis esistente.  
Le proprietà semplici che possono essere aggiunte sono di diverse tipologie:
* Booleani.
* Stringhe.
* Numeri interi, decimali.
* Array.

## Creazione dell'Extradata Semplice

### Testata

Andare in **Home > Utilità > ExtraData > ExtraData** e cliccare sul pulsante **Nuovo** **ExtraData**.

![](/img/en-US/extradata/20250313151835.png)

In questo caso procediamo a crare un ExtraData **semplice** di tipo stringa chiamandolo **Modello**.  

![](/img/en-US/extradata/20250313151723.png)

La form di dettaglio di creazione dell'ExtraData è composta così come segue:

* **Codice**: che identifica l'extradata.
* **Tipo contenuto**: sarà di tipo semplice.
* **Tipo Widget**: definisce le modalità di visualizzazione e selezione per le tipologie Oggetto e Datasource. Per il tipo Simple va lasciato vuoto perché il widget caricato sarà il widget di default del framework associato al tipo di dato.
* **Nome**: deve essere una parola presente nel dizionario altrimenti dovremo aggiungerla.  
* **Tipo di dati**: si tratta della tipologia del dato.
* **Stereotipo**: opzioni aggiuntive sulla formattazione del campo, come testo multilinea o definizione del numero di decimali.
* **Descrizione**: è obbigatorio - descrizione che verrà visualizzata, esattamente come il Name è selezionabile dal dizionario.
* **Validity Start/End**: se vogliamo dare all’extradata una validità temporanea
* **View right / Modify right**: per associare uno specifico diritto che consenta la visualizzazione o la modifica dell'extradata.


Lo stereotipo è attivabile per il *Tipo di dati*: Date (DateTime e Time); Decimal (Currency e Numeric); Double, Float e Long (Numeric); Int (Color, Numeric e Year); Short (Numeric e Year); String (MultiLine).

Lo stereotipo è attivabile per tutti gli oggetti attivati e per singolo oggetto. 

### Attivazioni

La griglia delle attivazioni permette di definire le classi su cui l'ExtraData dovrà essere disponibile.  
La griglia è così composta:
* **Oggetto padre**: è l'oggetto a cui si lega l'ExtraData, nel nostro caso FSItem. Ciascun ExtraData può essere associato a più oggetti.  
* **Proprietà**: si tratta della proprietà dell'oggetto padre in cui verrà caricato l'ExtraData. In questo caso la proprietà ExtraData è presente sull'oggetto FSItem, generata dalla referenza che collega FSItem a FSItemExtraData.  
* **Required**: indica se l'ExtraData èobbligatorio per l'oggetto a cui è associato.
* **To Print**: indicato se l'ExtraData deve essere disponibile per la stampa.
* **Ordinamento**: si tratta dell'ordinmaneto dell'oggetto padre, non ha ripercussioni sul funzionamento, solitamente viene lasciato a 0.
* **Start valid**. **/** **End validity**: se la validità è temporanea, indica inizio e fine del periodo in cui l'ExtraData potrà essere utilizzato.  
* **Stereotype**: la formattazione del campo, cambia a seconda del tipo di dato. Andrebbe a sovrascrivere lo stereotype generale definito per l'extradata se si volesse forzare un comportamento specifico per un particolare oggetto diverso da quello di default.

### Inserimento dell'ExtraData nella form di dettaglio

Una delle principali novità introdotte a partire dalla major-release Fluentis2021 riguarda la possibilità di inserire direttamente nella form di dettaglio il widget che caricherà i contenuto dell'ExtraData.  
In questo caso, poiché L'ExtraData è di tipo semplice, verrà caricato il widget di default del framework associato al tipo di dato.  

Per includere l'ExtraData nella form di dettaglio dell'articolo (FSItem), possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  

![](/img/en-US/extradata/20250313151552.png)

Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente dare drag and drop dal Navigatore Oggetti al Form Navigator.  
Nell'esempio sopracitato è stato riportato L'ExtraData 'Model' nel LayoutGroup che definisce i dati di testata dell'articolo (FSItem).   
L'ExtraData è stato valorizzato con un dato di tipo stringa.   

Per rendere **persistente** la visualizzazione dell'ExtraData nella form di dettaglio dell'articolo è sufficiente creare uno specifico profilo e caricarlo ogni qualvolta ci sia la necessità di visualizzare l'ExtraData.  

![](/img/en-US/extradata/20250313153623.png)


Infine, sempre nella form di dettaglio dell'articolo, è presenta uno specifico tab denominato **Extra data** dove possiamo trovare ciascun ExtraData associato all'articolo.  
![](/img/en-US/extradata/20250313154302.png).  
































<!-- 


1. Aggiungere extradata nella form Fluentis

Per poter aggiungere l'extradata direttamente da uno di questi oggetti, nell'apposita maschera di Fluentis premere tasto dx sulla riga blu (con  ![](/img/neutral/common/filter.png)) e cliccare su **Aggiungi extradata di primo livello**. Questo procedimento va eseguito per ogni extradata che vogliamo aggiungere. Una volta aggiunto uno, potremmo anche **Aggiungere degli extradata figli**.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image04.png) 

Nel menu a tendina come in figura selezionare l'extradata desiderato. È possibile quindi valorizzare l'extradata.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image05.png) 

10. Infine si può inserire la **Propagazione**.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image06.png) 

Nella propagazione va inserita la proprietà esatta in cui se valorizzato lì l'extradata verrà riportato automaticamente nell'oggetto selezionato in **Attivazioni**. C'è la possibilità di inserire più propagazioni.

### Esempio

Prendiamo l'immagine con la propagazione sopra, ossia se nel conto viene valorizzata la profondità (“Propagazione”), inserendo tale conto nella creazione di una nuova fattura, la profondità verrà importata in modo automatico all'interno della sezione extradata della testata della fattura (“Attivazioni”).

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image07.png) 

Nell'immagine sopra si vede come nella sezione Extradata si stia impostando il valore di profondità. Salvare il tutto una volta terminate le modifiche.

Ora creare una nuova fattura e come cliente/fornitore inserire lo stesso dell'immagine vista in precedenza e si nota che in automatico viene importata la profondità.

 ![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image08.png)

Vedi anche [Inserimento Extradata Semplice in Xtrareport](/docs/configurations/utility/extra-data/extradata/insert-extradata-simple-in-xtrareport).

Vedi anche [Nuovo ExtraData Oggetto](/docs/configurations/utility/extra-data/extradata/new-extradata-object).
 -->
