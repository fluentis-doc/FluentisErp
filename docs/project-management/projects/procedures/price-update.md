---
title: Aggiornamento prezzi progetto
sidebar_position: 3
---

La procedura Aggiorna prezzi **aggiorna il prezzo, il listino prezzi di riferimento e il codice iva** nelle righe progetto, le richieste intervento, gli interventi pianificati e gli interventi in base ai parametri impostati nella parte inferiore della form.

Per più i dettagli sulle parti comuni delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

## Procedura  

1. Impostatare i **filtri** desiderati  nella sezione filtri e premere il pulsante **Ricerca** nel menu principale;  
2. Selezionare nella tabella dei risultati le righe da aggiornare;  
La selezione può essere fatta manualmente nella tabella dei risultati o usando i pulsanti **Seleziona tutto** o **Deseleziona tutto** nella barra del menu;  
3. Impostare il **prezzo, il listino prezzi** e il **codice iva** aggiornati nella sezione **Prezzo/iva** nella parte inferiore della finestra;  
4. Premere **Elabora prezzi** per visualizzare l’anteprima delle modifiche che compariranno nella colonna **Nuovo prezzo** e **Iva**. Nel caso in cui sia stato utilizzato un listino per aggiornare il prezzo, le informazioni relative al listino compariranno nelle colonne** Listino di vendita** e **Data listino**.

:::note Note
Le modifiche in questa fase sono solo applicate all’anteprima, non sono ancora effettive nei documenti.
:::

5. Definire nella sezioni dei parametri i **documenti** per i quali si vuole applicare le modifiche e le **opzioni** relative alle wbs da aggiornare;  
6. Premere **Aggiorna** per rendere effettive le modifiche nei documenti.
  
## Prezzo/iva

**Forza prezzo**: utilizzare quest'opzione se si desidera indicare il nuovo prezzo manualmente;

**Aggiorna prezzo e listino con ultimo listino**: se selezionato verrà usato l’ultimo listino valido per determinare il nuovo prezzo;

**Aggiorna prezzo e listino con listino**: se selezionato verrà usato il listino inserito in seguito per determinare il nuovo prezzo;

**Forza iva**: indicare manualmente il codice iva da utilizare per le righe selezionate, verrà inserito nella colonna IVA della tabella dei risultati;

**Aggiorna codice IVA da anagrafica cliente**: il codice IVA viene determinato dal valore inserito nell’anagrafica cliente.
  
## Opzioni

**Duplica riga WBS da aggiornare**: se selezionato le righe wbs da aggiornare vengono duplicate nel progetto;

**Storna giorni assegnati nella wbs duplicata**: se selezionato le giornate assegnate alla wbs duplicata vengono stornate dalla wbs precedente.
  
## Documenti

**Aggiorna righe di progetti, richieste intervento e interventi pianificati collegati alla WBS non ancora evasi**: quando vengono aggiornati le righe di progetto, i documenti di richiesta e intervento pianificato non ancora evasi vengono automaticamente aggiornati;

**Aggiorna interventi collegati alla WBS non ancora fatturati**: in questo caso, verranno aggiornati dati della riga di servizio e i dati della riga collegata nel tab **Piano di fatturazione**.
