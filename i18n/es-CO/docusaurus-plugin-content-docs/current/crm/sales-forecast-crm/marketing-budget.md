---
title: Marketing budget
sidebar_position: 5
---

Con questa funzionalità è possibile creare dei Budget di periodo.        
I dati di testata sono i seguenti:       
**Periodo budget**: in questo campo è necessario inserire il [Periodo](/docs/configurations/tables/crm/sales-forecast/budget-period) da utilizzare come unità di suddivisione dell'anno; in base al periodo selezionato, gli importi inseriti successivamente verranno automaticamente distribuiti nei vari periodi, riportati nella tabella sottostante *Periodi*;      
**Descrizione**: contiene una libera descrizione;      
**Data fine validità**: contiene un'evebtuale data di chiusura del budget;      
**Progetto**: è possibile collegare un progetto.     

Nella griglia è possibile costruire l'albero del budget, servendosi dei bottoni sulla barra degli strumenti. Ogni nodo radice dell'albero conterrà la Somma delle quantità e degli importi dei vari nodi sottostanti. I nodi finali dell'albero sono quelli nei quali è possibile inserire le spese, attraverso i seguenti campi:      
**Tipo spese**: in base alla selezione del [Tipo spesa](/docs/configurations/tables/crm/sales-forecast/expenses-type), sarà possibile inserire una Descrizione, un Conto oppure un Articolo;       
**Unità di misura**: contiene l'unità di misura da usare per la spesa;      
**Quantità totale**: contiene la quantità totale da suddividere nei vari Periodi del budget;       
**Prezzo unitario**: questo campo viene compilato automaticamente con il risultato della divisione tra *Importo totale* e *Quantità totale*:        
**Importo totale**: contiene l'Importo totale da suddividere nei vari Periodi del budget.        
Nella griglia di destra, *Quantità totale* e *Importo totale* vengono suddivisi per il numero di Periodi previsti dal [Periodo budget](/docs/configurations/tables/crm/sales-forecast/budget-period) inserito in testata. In questo modo sarà possibile consultare il Budget per ogni periodo. La griglia *Periodo* è modificabile utilizzando i pulsanti della ribbon bar, nel caso in cui il calendario debba discostarsi dallo standard codificato.                     
