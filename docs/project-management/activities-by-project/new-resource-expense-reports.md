---
title: Nuova nota spese risorse
sidebar_position: 2
---

La nota spese è lo strumento che gestisce l’inserimento e l’approvazione delle spese presenti nei documenti “Interventi” e “Dichiarazioni attività” delle risorse.

Sono considerati 2 tipi di approcci: 
1 - Le note spesa sono generate massivamente per tutte le risorse, tramite specifica procedura. 
E’ presente una procedura dove sono visibili tutte le spese di tutte le risorse. Le spese evidenziano eventuali discordanze rispetto al plafond autorizzato, e sarà il soggetto responsabile a gestire la validazione delle spese. Al termine della validazione, verrà creato un riepilogo per ciascuna risorsa. 

2 - Le note spesa sono gestite singolarmente, creando direttamente la singola nota spese inerente alla risorsa.
La Nota spese viene generata come un nuovo documento, dove indicando il periodo interessato e la risorsa, verrà caricata tutta la lista di spese corrispondente ai criteri indicati. 
La risorsa potrà visionarle, eliminarle, aggiungere allegati, aggiungere altre spese.

## Testata 

Per garantire il corretto funzionamento sono obbligatori i seguenti dati in testata: 

**Tipo nota spese**: tipologia del documento di nota spese da utilizzare 
**Periodo competenza**: indica il periodo di competenza delle spese, che solitamente si identitifica come il mese del cedolino paga in cui verranno gestite le spese.
**Da data / A data**: indica il range di date utilizzate per ricercare ed includere le spese in base alla data spesa, presenti nei vari documenti. Possono essere anche diverse dal periodo di competenza 
**Risorsa**: risorsa intestataria della nota spese. 
**Stato spese**: stato generale di testata della nota spese. Viene assegnato in automatico in funzione dello stato delle singole righe (ovvero se tutte le righe sono approvate, anche la testata lo sarà di conseguenza. Se invece alcune righe non sono approvate altre invece sì, lo stato di testata sarà autorizzato parzialmente)
**Anno**: anno della nota spese
**Data**: data della nota spese
**Numero**: numero della nota spese 
**Descrizione**: eventuale descrizione aggiuntiva

I campi Tipo nota spese e risorsa saranno proposti automaticamente se configurati nei Parametri per progetti - Parametri per operatore.

### Stato testata nota spese 
In base agli stati presenti nelle righe, verrà settato in automatico lo stato in testata.
Al salvataggio: 
se TUTTE le righe spese hanno stato:
-	**Inserito**: 
allora anche lo stato in testata sarà =  Inserito
-	**Autorizzata**: 
allora anche lo stato in testata sarà = Autorizzata
-	**Non Autorizzata**
allora anche lo stato in testata sarà = Non Autorizzata
-	**Parzialmente Autorizzata**
allora anche lo stato in testata sarà = Parzialmente Autorizzata
-	Forzatamente Autorizzata
allora anche lo stato in testata sarà = Forzatamente Autorizzata

Se è presente anche solo 1 riga spesa con “Inserito”, lo stato della testata sarà Inserito
Se le righe spese hanno stato “Autorizzata” oppure “Autorizzata Forzatamente” e nessun altro stato, lo stato della testata sarà Autorizzata Forzatamente.
Se le righe spese hanno una situazione mista di stati, la testata avrà stato “Parzialmente Autorizzata”


## Tab Spese
in questa tab è visualizzato l'elenco dettagliato delle spese che sono state inserite nei singoli documenti, oppure sono state inserite direttamente nella nota spese. 

**Tipo spesa**: tipologia della spesa sostenuta
**Data spesa**: data in cui la spesa è stata sostenuta
**Importo**: importo della spesa sostenuta
**Plafond**: importo massimo giornaliero definito in anagrafica risorsa per tipologia di spesa. Se 	plafond = 0 significa che non ci sono limiti di plafond.
**Quota Plafond già usata**: nel caso ci siano altre Note spesa per la stessa risorsa / stessa tipologia spesa / stessa 	data, la quota di plafond va considerata parzialmente erosa spesa (es. 2 interventi 	nello stesso giorno della stessa risorsa dello stesso Tipo Spesa)
**Eccedenza**: quota che supera il plafond. Ottenuta con il seguente calcolo: 
	Eccedenza = Plafond – Importo spesa – quota Plafond già usata
	Vengono considerati solo valori negativi, che quindi superano il plafond. 
**Stato spesa**: indica se la spesa è stata autorizzata/non autorizzata/autorizzata parzialmente/Autorizzata forzatamente
**Data Verifica**: data quando la spesa è stata confermata. 
**Allegati**: indica se sono presenti allegati per la spesa. 
**Tipo Pagamento**: tipologia di pagamento utilizzata per la spesa
**Rimborsabile**: indica se la spesa dovrà essere rimborsata nel cedolino paga. Ad es. se la risorsa 	dispone di carta di credito aziendale, questa voce sarà disabilitata. 
**Cumulativa**: indica se la spesa è una quota di una spesa cumulativa (quindi la risorsa potrebbe 	essere diversa rispetto a quella a cui andrà il rimborso)
**Risorsa**: risorsa per cui è stata sostenuta la spesa
**Note**: note inserite per la spesa in questione. 
**Documento**: indica il documento di riferimento da cui proviene la spesa 
**Modificato manualmente**: nel caso di cambio stato forzato rispetto a quanto proposto, o modifiche dell’importo 	di eccedenza, il flag si abilita in automatico. 

### Stato riga spesa

Ogni riga spesa si trova in uno specifico “Stato”, i valori ammessi sono i seguenti: 
-	**Inserito**
-	**Autorizzata**: stato attribuito se la spesa è configurata in anagrafica risorsa e non supera il plafond. 
-	**Non Autorizzata**: stato attribuito se la spesa NON è configurata in anagrafica risorsa oppure se la spesa eccede per intero il plafond. Il campo Eccedenza avrà il valore uguale alla spesa.
-	**Parzialmente Autorizzata**: stato attribuito se la spesa è configurata in anagrafica risorsa ed eccede solo parzialmente il plafond. Il campo Eccedenza sarà modificabile
-	**Autorizzata Forzatamente**: nel caso la spesa superi il plafond oppure non sia prevista in anagrafica risorsa, ma si decide l’approvazione forzata. Il campo Eccedenza sarà forzato a 0. 
Nel caso di Spesa Parzialmente autorizzata, il campo “Eccedenza” sarà modificabile. 
Questo per permettere di variare la redistribuzione del plafond da utilizzare (ad es. nel caso di più spese dello stesso tipo / stessa risorsa / stesso giorno oppure per aumentare per il plafond per il caso specifico)
Nel caso di Spesa Autorizzata Forzatamente, il campo “Eccedenza” impostato = 0. 

## Tab Allegati
La tab è divisa in 3 aree: 
a sinistra è presente l’elenco spese (come nella prima tab) ma con i soli dati essenziali
al centro è presente l’elenco degli allegati inerenti alla spesa selezionata
a destra è presente l’anteprima dell’allegato selezionato
in alto è presente un flag per filtrare: 
**isualizza spese con giustificativo Richiesto – senza allegato**
Verranno mostrate tutte le spese a cui manca l’allegato e la cui configurazione richiede l’allegato obbligatoriamente.
Da questa videata l’utente avrà la possibilità di aggiungere l’allegato mancante, che verrà poi reso visibile anche nei rispettivi documenti (attività/interventi). Le modalità di inserimento sono le stesse come per altre aree, drag&drop oppure bottone da ribbon bar. 

## Tab Riepiloghi 
Nella tab riepiloghi, sono presenti i totali delle spese inserite, con dettagliati gli importi che verranno rimborsati, oppure gli importi che non verranno rimborsati. 

Se la spesa è stata pagata con carta di credito aziendale (quindi originariamente marcata come da NON rimborsare), l’importo eccedente verrà considerato da addebitare in busta paga.
Se la spesa è stata pagata con mezzi propri (quindi originariamente marcata come da rimborsare), l’importo verrà riconosciuto in busta paga solo per il massimale previsto dal plafond.
Nell’esempio precedente, supponendo che le spese siano tutte da rimborsare e che siano state sostenute con mezzi propri:
-	Verrà riconosciuto in busta paga 60
-	Non verrà riconosciuto in busta paga 125
Nell’esempio precedente, supponendo che le spese NON siano da rimborsare e che siano quindi state sostenute con carta di credito aziendale:
-	Verrà addebitato in busta paga 125
Il restante è stato coperto dalla carta di credito aziendale per 60
Gli importi in dettaglio saranno visibili nella tab totali della Nota spese risorsa generata dalla procedura. 
In questa tab sono mostrati i riepiloghi dei totali: 
-	**Totale spese**: somma totale dei valori del campo “Importo” di ogni riga spesa.  
-	**Totale eccedenze**: somma totale dei valori del campo “Eccedenza” di ogni riga spesa.  
-	**Totale addebitato in cedolino paga**: importo che verrà addebitato in busta paga
-	**Totale non rimborsabile in cedolino paga**: importo delle spese sostenute che non potranno essere riconosciute in busta paga. 
-	**Totale rimborsabile in cedolino paga**: importo delle spese sostenute che verrà riconosciuto in busta paga.
-	**Totale spese non validate**: importo delle spese con stato “inserito”


I totali sono calcolati come segue: 
-	**Totale spese**: somma totale dei valori del campo “Importo” di ogni riga spesa.  

-	**Totale eccedenze**: somma totale dei valori del campo “Eccedenza” di ogni riga spesa

-	vTotale addebitato in cedolino paga**: importo addebitato in busta paga = 
somma dei valori presenti in “Eccedenza” delle righe spese che hanno:
    -   stato “Non autorizzato” oppure “Parzialmente Autorizzato”
    -   NON hanno attivo il flag “Rimborsabile”


-	**Totale non rimborsabile in cedolino paga**: importo non riconosciuto in busta paga = somma dei valori presenti in “Eccedenza” delle righe spese che hanno:
o	stato “Non autorizzato” oppure “Parzialmente Autorizzato”
o	hanno attivo il flag “Rimborsabile”

-	**Totale rimborsabile in cedolino paga **: importo accreditato in busta paga =
somma dei valori presenti in “Importo” al netto dell’importo “Eccedenza” delle righe spese che hanno 
    -   stato “Autorizzato” oppure “Parzialmente Autorizzato”
    -   hanno attivo il flag “Rimborsabile”

-	**Totale spese non validate**: 
somma dei valori presenti in “Importo” che hanno 
    -   Stato “Inserito”


## Funzionalità nella ribbon bar

Nel ribbon bar ci saranno i bottoni per: 
**Carica spese**: ovvero effettuare la ricerca ed inserimento delle spese nella nota spese
**Nuova Spesa**: crea una nuova nota spese 
**Cancella Riga**:  per eliminare le righe di spesa non d’interesse;
**Cambia stato**: per cambiare lo stato massivamente alle righe selezionate (possibile solo per utenti con determinati diritti)
**Evasione spese**: con questo bottone si aprirà un selettore – simile alla procedura di “verifica note spese” che permetterà di ricercare ulteriori spese, ed aggiungerle nella nota spese su cui si sta lavorando;
**Apri intervento**: se presente, permette di aprire il documento da cui proviene la spesa, in questo caso intervento. 
**Apri attività**: se presente, permette di aprire il documento da cui proviene la spesa, in questo caso dichiarazione attività. 







 
