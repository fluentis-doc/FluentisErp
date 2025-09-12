---
title: Context Panel
sidebar_position: 4
---


I pannelli contestuali c.d. **Context Panel**, permettono una visualizzazione immediata di informazioni di sintesi circa un determinato oggetto di business di Fluentis.  

La costruzione di un pannello contestuale (context panel) prevede alcuni step di parametrizzazione, più nello specifico:
1.  eventuale creazione della dashboard (nel caso il context panel si basi su dashboard).
2.  creazione del **context panel** dalla relativa form. 
3.  parametrizzazione del **context panel** e definizione dei relativi legami.

Per aprire la form relativa ai **Context Panel**, da **Arm** > **Platform** > **Context Panel**

La form dei pannelli contestuali è articolata così come segue:  

### Ribbon menu
Il Ribbon menu contiene i controlli per integrire con la form:
* Search: per cercare i context panel già definiti in Fluentis. 
* New: per creare un nuovo context panel.
* Edit: per modificare un context panel già esistente.
* View: per visualizzare in modalità read-only un context panel già esistente.
* Remove: per rimuove ExtraData già presenti in Fluentis.  

### Corpo Centrale
Il corpo centrale si compone di una griglia con i seguenti campi:
* Business Object: obbligatorio - indica l'oggetto su cui si basa il pannello contestuale.
* Localized Code: facoltativo - indica una descrizione localizzata.
* Name: Nome.
* Form: facoltativo - indica la form su cui si basa il pannello contestule.
* Dashboard: facoltativo - indica la dashboard su cui si basa il pannello contestuale.
* Report: facoltativo - indica il report su cui si basa in pannello contestuale.

## Form di dettaglio

La form di dettaglio si compone di n. 3 parti:

### Ribbon menu
Il Ribbon menu contiene esclusivamente il pulsante **Save**, utilizzato per il salvataggio della configurazione.   

### Testata
Il tab relativo alla testata si compone dei seguenit input/campi:
* Business Object: obbligatorio - si tratta dell'oggetto di business su cui si basa il pannello contestuale.
* Localized Code: facoltativo - descrizione localizzata.
* Name: obbligatorio - descrizione
* Right: 
* Type:
* Dashboard:
* Definition:
* Shot in Context Menu:
* Show in Contextual Panel:
* Image:
* Arm Form Context:
* Order:
* Default binding definition:


### Tab dei Bindings

***da completare.***


# Esempio applicativo
Vogliamo creare un **pannello contestuale** che ci mostra la **percentuale d'ammortamento** del cespite che selezioniamo
La **percentuale d'ammortamento** viene calcolata come rapporto percentuale tra il fondo ammortamento ed il costo storico del cespite.  

Per raggiungere questo risultato dobbiamo:
1. Creare, tramite il **FluentisQueryStudio**, la SQL Query che ci consentirà di recuperare i dati dei cespiti dal database di Fluentis MSSQL.
2. Creare il datasource che sarà basato sulla query di cui al punto che precede.
3. definire un parametro nel datasource che servirà come filtro di WHERE per la query in base al cespite selezionato.
4. creaiamo la dashboard che sarà basata sul datasource creato al punto n. 2.
5. creare la parametrizzazione in Arm per il pannello contestuale.
6. aprire la form dei cespiti (Fixed Assets).
---
1. Per l'utilizzo di **FluentisQueryStudio** si rimanda all'apposita documentazione dedicata.  

```SQL
SELECT * FROM Fluentis.FI_FixedAssets WHERE FIFA_Id = @ID
```
dove, ```@ID``` è un parametro che definiamo successivamente a livello di **DataSource**.  

2. Creiamo il datasource basato sulla query di cui al punto precedente; per la creazione di DataSource si rimanda all'apposita documentazione.   


Trasciniamo nel tab ***Visible property*** le proprietà di nostro interesse quali: **Id**, **Description**, **Code**, **TotalAmount**, **TotalDepreciation**, **NetAmount**.  

1. Definiamo, attraverso il tab **parameters**,  un parametro nel datasource appena creato.


1. Da Fluentis, procediamo a creare la dashboard; per tutti i dettagli relativi alle dashboard si rimanda all'apposita documentazione dedicata.  

2. Da Arm, creiamo la parametrizzazione per il **context panel**.  


3. Procediamo a selezionare un record dalla form dei cespiti; verrà quindi mostrata sul pannello contestuale la percentuale di ammortamento del cespite.  