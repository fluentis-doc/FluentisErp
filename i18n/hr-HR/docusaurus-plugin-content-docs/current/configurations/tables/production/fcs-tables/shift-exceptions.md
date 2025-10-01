---
title: Eccezioni di calendario
sidebar_position: 7
---

La tabella si trova sul percorso **Tabelle > Produzione > Tabelle F.C.S. > Eccezioni di calendario**.

I dati presenti in questa tabella sono utilizzati solamente nella procedura di [Schedulazione F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling). 

Questa form permette di definire le eccezioni di calendario di qualunque risorsa simulata dallo schedulatore (Centri di lavoro, Macchine, Lavoratori, Risorse di produzione).       
Esiste un rapporto gerarchico tra i centri e le macchine, quindi se un centro è inattivo ad un certo orario, le relative macchine saranno automaticamente inattive.         
Ogni risorsa ha un suo turno di lavoro standard, ma in alcune giornate si può indicare un turno di lavoro differente. Per esempio, le festività vanno gestire come eccezioni di calendario con turno di lavoro vuoto.          
Altri tipici usi del turno vuoto sono per la manutenzione di una macchina, le assenze di un lavoratore (ferie o malattia), la manutenzione di risorse produttive. Si possono poi usare le eccezioni per limitati periodi di tempo in cui si lavori meno o più ore del solito (straordinari, cassa integrazione etc.).           
L'inserimento delle eccezioni avviene selezionando il turno di lavoro, il periodo temporale in cui sarà valida l'eccezione, gli elementi a cui applicare l'eccezione (si possono selezionare insieme più elementi per ciascun tipo, per esempio più centri e più macchine).

**Ricerca Eccezioni di calendario**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Eccezioni di calendario**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Data**, **Categoria** e **Turno di lavoro**.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).