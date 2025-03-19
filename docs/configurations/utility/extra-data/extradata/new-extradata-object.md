---
title: Extradata Object
sidebar_position: 2
---

## ExtraData Basato su oggetto - Aspetti introduttivi

Tramite l'ExtraData basato su oggetto è possibile legare una proprietà rappresentata da un oggetto standard o custom con un oggetto di Fluentis.   
*Per spiegare meglio questo concetto utilizziamo un esempio pratico dove leghiamo l'oggetto **FSColor** che rappresenta un set di **colori**, con l'oggetto Standard di Fluentis **FSItem (Articolo)***.  


## Creazione Extradata Basato su oggetto 
Andare in **Home > Utilità > ExtraData > ExtraData** e cliccare sul pulsante **Nuovo** **ExtraData**.

![](/img/en-US/extradata/20250313151835.png)

### Testata

Procediamo a creare l'**ExtraData** basato sull'oggetto **FSColor** chiamandolo **Color**.

![](/img/en-US/extradata/20250313165106.png)

* **Code:** obbligatorio - codice.
* **Content Type:** obbligatorio - permette di selezionare il widget di visualizzazione dell'ExtraData, sono disponibili tre opzioni:
  * **Combobox**: si tratta di un menu a tendina che mostra i valori per codice/descrizione.
  * **Autocomplete Code**: che permette di scrivere il codice che andrà ad autocompletarsi filtrando I record disponibili.​
  * **Autocomplete Description**: che permette di scrivere la descrizione che andrà ad autocompletarsi filtrando I record disponibili.
* **Widget Type:**
* **Business Object:** obbligatorio - permette di selezionare l'oggetto su cui dovrà essere creato l'extradata ad esempio FSColor per permettere di creare un extradata basato sulla tabella codici colore. 

### Attivazioni

Procediammo a legare l'**ExtraData** all'oggetto di business **FSItem** (Articolo).  

![](/img/en-US/extradata/20250313170414.png)

Vale esattamente quanto illustrato nell'introduzione agli ExtraData.  

### Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'articolo interessato, per includere l'ExtraData nella form di dettaglio dell'articolo (FSItem), possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  

![](/img/en-US/extradata/20250313172149.png)

Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente fare drag and drop dal Navigatore Oggetti al Form Navigator.  
Nell'esempio è stato riportato L'ExtraData 'Color' nel LayoutGroup che definisce i dati di testata dell'articolo (FSItem).   
L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà esattamente i valori di **codice** e **descrizione** salvati sulla corrispondente tabella lato MSSQL.

![](/img/en-US/extradata/20250313172543.png)  


