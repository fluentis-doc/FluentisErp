---
title: Controllo rimesse
sidebar_position: 1
---
La form si trova in Tesoreria > Rischio Cliente > Procedure >Controllo rimesse

La maschera presenta il dettaglio delle registrazioni di incasso rilevate in capo al cliente, all'interno dei range di date e dei filtri inseriti in testata. 

## Come verificare la situazione rimesse di un cliente

1. Espandere, se necessario, la sezione dei filtri per inserire (obbligatorio) il conto del cliente da verificare
2. Utilizzare gli altri filtri per ricercare le registrazioni di incasso interessate
3. Premere il tasto Ricerca e leggere i risultati nella griglia centrale ed i risultati, per la media riferita al cliente nel suo complesso, nella zona in basso della form.

## Come si leggono e si interpretano i risultati

- Le registrazioni di incasso per il cliente selezionato nell'intervallo di date impostato, vengono esposte nell'ordine di data dal primo all'ultimo. Nella form sono rappresentati dal più recente in alto al meno recente in basso e viene riportata la **Data scadenza** presente nella partita aperta che è stata incassata.

- Il calcolo è di tipo **scalare**, quindi le righe vengono confrontate per calcolare le differenze in giorni dalla prima alle righe successive. Vengono calcolati i **Numeri**, ovvero l'importo moltiplicato per il numero di giorni (come avviene negli estratti conto scalari inviati dalle banche e relativi ai conti correnti)

- Viene considerata anche una **Valuta banca**, ovvero nel movimento contabile di incasso potrebbero essere stati aggiunti dei giorni valuta banca tra la disposizione di pagamento da parte del cliente e l'effettivo incasso. Questi giorni valuta sono visibili nella scrittura contabile attivando l'apposito flag *Giorni Banca* nella [causale contabile](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail) e possono essere proposti attraverso [l'anagrafica](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days) (Tab *Giorni Banca*) della banca di incasso, oppure valorizzati manualmente nella registrazione.

Se questa data valuta non viene compilata, di default, viene considerata la data della registrazione contabile dell'incasso, e pertanto il numero dei **Giorni Valuta** aggiunti rispetto alla data dell'incasso sarà pari a zero.

Quindi il campo **Valuta incasso** sarà pari alla data di registrazione, i campi **Giorni Valuta** e **Numeri valuta** saranno pari a zero.

- Il calcolo prevede un conteggio dei **Giorni Scadenza** come confronto tra la prima riga (dove il calcolo sarà sempre zero) e le righe successive. Ad esempio se la prima scadenza cadeva il giorno 9 febbraio e la successiva il giorno 20 febbraio, i giorni scadenza rispetto alla seconda riga sarnano 11. 

- Il calcolo dei **Numeri Scadenza** è dato dal prodotto dei Giorni scadenza per l'importo della rimessa. 


<details>

  <summary>**Gli altri campi della griglia di dettaglio**: Click to expand!</summary>
 
 - **Data / Numero Registrazione**: Ripresi dalla testata della registrazione di incasso della partita cliente
 - **Descrizione causale**: causale contabile utilizzata nella scrittura di incasso
 - **Tipo documento**: ripreso dalla partita aperta che è stata incassata e riferito solitamente al tipo di fattura
 - **Numero documento**: riferito alla fattura che ha aperto la partita incassata
 - **Data Documento**: riferito alla fattura che ha aperto la partita incassata
 - **Divisa**: riferito alla partita incassata
 - **Importo originario in divisa**: riferito alla partita incassata, se diversa dalla divisa della società (cioè se diversa da Euro)
 - **Importo originario in divisa della Società**: riferito alla partita incassata, nella divisa della società (cioè in genere Euro)
 - **Importo residuo in divisa / in divisa della società**: riferito alla partita, nel caso sia parzialmente incassata, (valore espresso nella divisa originaria se diversa dalla divisa della società, cioè se diversa da Euro, oppure in Euro)
 - **Importo rimessa in divisa**: valore dell'incasso avvenuto riferito alla partita incassata, se diversa dalla divisa della società (cioè se diversa da Euro, oppure in Euro)

</details>


### Nella parte bassa della form viene eseguito il calcolo finale dei <u>valori medi</u>.

I dati medi calcolati dalla form sono:

- **Data valuta media di incasso** : calcolata sommando tutti gli importi delle rimesse (cioè degli incassi) visibili nella form e sommando tutti i *numeri Valuta* visibili nella form e facendo il rapporto tra le due somme (Sommatoria Numeri valuta / Sommatoria Importo rimesse) per trovare il **numero di giorni medi valuta.** Infine sommando il numero di giorni medi valuta alla prima data Valuta incasso (cioè la meno recente).

- **Data scadenza media** : calcolata sommando tutti gli importi delle rimesse (cioè degli incassi) visibili nella form e sommando tutti i *numeri Scadenza* visibili nella form e facendo il rapporto tra le due somme (Sommatoria Numeri scadenza / Sommatoria Importo rimesse) per trovare il **numero di giorni medi scadenza.** Infine sommando il numero di giorni medi scadenza alla prima data Scadenza (cioè la meno recente).

:::note[Nota]
in caso di effetti la data valuta è impostata uguale alla data scadenza, indipendentemente dalla data di contabilizzazione dell'effetto.
:::

<details>

  <summary>**Il calcolo della media in pratica**: Click to expand!</summary>
 
 dal rapporto tra somma importi e somma giorni*importi si ottiene un nr. di giorni medi da aggiungere alla prima data per ottenere la data media.

</details>


- **Scostamento** ovvero differenza tra data scadenza media e data valuta media incasso, che rappresenta il ritardo medio nell'incasso tra scadenza e valuta: questo numero di giorni può essere memorizzato, attraverso il pulsante **Aggiorna gg. ritardo**,  in anagrafica cliente nel campo *Giorni medi ritardo*, campo utilizzato nelle simulazioni di cash flow per ottenere la data scadenza prevista del flusso finanziario.

<details>

  <summary>**Gli altri campi calcolai della zona di riepilogo**: Click to expand!</summary>
 
 - **Totale Importo Originario in divisa**: Sommatoria dell'importo in divisa delle partite incassate
 - **Totale Importo Originario in Euro**: controvalore in euro el campo precedente
 - **Totale importo Residuo Divisa**: sommatoria dei valori residui delle partite incassate, se le partite sono state incassate completamente il valore sarà zero, altrimenti sarà utile per le partite parzialmente incassate
 - **Totale importo Residuo Euro**: controvalore in euro el campo precedente
 - **Totale Rimesse divisa**: sommatoria del valore in divisa degli incassi avvenuti
 - **Totale Rimesse Euro**: controvalore in euro el campo precedente
 - **Totale Numeri Valuta**: sommatoria del campo *Numeri Valuta* delle righe della griglia, utilizzato nei calcoli delle medie finali
 - **Totale Numeri Scadenza**: sommatoria del campo *Numeri Scadenza* delle righe della griglia, utilizzato nei calcoli delle medie finali

</details>

La maschera prevede una stampa del dettaglio del calcolo.






