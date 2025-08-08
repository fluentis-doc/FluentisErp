---
title: Gestione Previsioni di vendita
sidebar_position: 2
---

Questa funzione è raggiungibile da **Sales Forecast > Gestione previsioni di vendita**. Da qui è possibile visualizzare tutte le Previsioni di vendita già codificate e crearne di nuove. Analizziamo le caratteristiche di una Nuova Previsione di vendita.       
         
La testata è composta dai seguenti campi:       
**Tipo previsione di vendita**: questo dato è estratto dalla tabella [Tipo previsione di vendita](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) e assume un ruolo cruciale nell'indicare a Fluentis nei quali periodi è necessario suddividere la previsione di vendita. Attraverso l'associazione con il [Tipo periodo](/docs/configurations/tables/crm/sales-forecast/period-type) presente in questa tabella, Fluentis è in grado di determinare se la previsione deve essere suddivisa su base annuale, mensile, o in altre modalità specificate;         
**Descrizione**: questo campo contiene una descrizione libera;      
**Anno/Data/Numero**: questi campi vengono compilati automaticamente in base alla Numerazione associata e alla Data ordierna.     

Nella prima griglia è consentito inserire le righe relative alla previsione di vendita. Utilizzando i pulsanti presenti nella barra degli strumenti, è possibile costruire una struttura ad albero, ad esempio, per suddivisione geografica. Inizialmente, si parte dal primo gruppo e successivamente si dettaglia la struttura secondo i livelli di suddivisione desiderati. Gli importi della seconda griglia possono essere compilati solo a livello di Dettaglio, ovvero dopo aver inserito l'ultimo livello dell'albero. Una volta inserito quest'ultimo livello, la seconda griglia si popolerà automaticamente, suddividendo le date in base al [Tipo periodo](/docs/configurations/tables/crm/sales-forecast/period-type) impostato. Quindi, sarà possibile popolare le Quantità e gli Importi dei vari periodi nella seconda griglia, permettendo così a Fluentis di  calcolare i totali e riportarli nella prima griglia.

Nella prima griglia, alcuni campi sono attivi se si inserisce un Gruppo, altri se si inserisce un Dettaglio, con gli appositi bottoni della barra degli strumenti.     
Analizziamo i campi che si possono compilare se la riga è un Gruppo/Nodo:       
**Progressivo gruppo**: ad ogni Gruppo viene assegnato un numero progressivo;      
**Descrizione gruppo**: è possibile inserire una libera descrizione per ogni Gruppo;       
**Zona**: ogni Gruppo può essere associato ad una Zona diversa;       
**Operatore assegnato**: è necessario indicare l'Operatore responsabile della Previsione di vendita in questa Zona;       
**Agente**: è possibile indicare un Agente responsabile delle vendite in questa Zona;      
**Nota**: è un campo di note libero.        
Analizziamo i campi che si possono inserire se la riga è un Dettaglio:         
**Famiglia prodotti**: questo campo contiene la Famiglia articolo per la quale si sta creando la Previsione, con la relativa **Descrizione**; solo le [Classi articolo](/docs/configurations/tables/logistics/item-class) che hanno associata questa Famiglia prodotto verranno considerate per le statistiche;          
**Unità di Misura**: viene proposta la UM della Famiglia;      
**Nota Dettaglio**: è un campo di note libero.         
Sono presenti poi dei campi calcolati:     
**Quantità Totale**: viene riportata la somma delle Quantità Periodo della seconda griglia;     
**Importo Totale**: viene riportata la somma degli Importo Periodo della seconda griglia;    
**Prezzo Medio Unitario**: viene inserito il risultato dell'operazione *Quantità totale*/*Importo totale*.     

Nella seconda griglia, viene riportato il *Dettaglio* del [Tipo Periodo](/docs/configurations/tables/crm/sales-forecast/period-type) associato al [Tipo previsione di vendita](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) selezionato. Inoltre, sarà possibile indicare una **Quantità** ed un **Importo** di periodo per ogni riga. Questi dati, sommati, andranno a formare l'**Importo totale**  e la **Quantità Totale** della prima griglia. 