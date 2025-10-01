---
title: Creazione listini avanzata
sidebar_position: 4
---

La procedura **Creazione listini avanzata** permette di creare nuovi listini, con l'applicazione di una *Formula*, partendo dagli articoli presenti in listini esistenti. 
Condizione necessaria per far comparire gli articoli in questa griglia, è l'esistenza di una [**Formula di aggiornamento politiche prezzi sconti**](/docs/sales/price-control/formulas) che abbia un listino di destinazione ed un listino di origine; l'articolo, inoltre, deve far parte del listino di origine.
A partire dagli articoli del listino di origine, Fluentis applicherà la formula e creerà il listino di destinazione.

La griglia di ricerca è di sola lettura e presenta i seguenti campi:       
**Classe, Articolo, Descrizione articolo**: in questi campi viene riportato l'articolo di listino;       
**Formule di calcolo**: in questo campo è presente la Formula codificata nella relativa tabella;       
**Origine tipo listino di vendita**: contiene la tipologia di listino di vendita di origine, che contiene l'articolo, al quale verrà applicata la formula;      
**Conto/sottoconto/descrizione origine cliente**: contiene il listino personalizzato da considerare come origine, a cui appartiene l'articolo;       
**Origine tipo listino fornitore**: contiene il tipo listino fornitore di origine;       
**Conto/sottoconto/descrizione origine fornitore**: contiene il listino personalizzato di origine;      
**Destinazione tipo listino di vendita**: contiene il Tipo listino di vendita destinatario della modifica, quando verrà applicata la formula presente in questa riga;
**Conto/sottoconto/descrizione destinazione listino di vendita**: contiene il listino personalizzato da creare, destinatario della modifica;
**Destinazione tipo listino fornitori**: contiene il Tipo listino fornitori destinatario della modifica;
**Conto/Sottoconto/Descrizione destinazione listino fornitore**: contiene il listino personalizzato di acquisto destinatario della modifica;       
**Da/A Data validità**: riporta le date di validità del listino di appartenenza.     
**Prezzo nuovo**: in questo campo viene calcolato il prezzo del nuovo listino, ottenuto dal prezzo precedente a cui è stata applicata la formula;       
**Prezzo precedente**: in questo campo viene riportato il prezzo di listino di origine;        
**Variazione**: in questo campo viene inserita la variazione in valore;       
**%Variazione**: in questo campo viene inserita la variazione in percentuale.        

Nella sezione in basso, invece, è possibile inserire alcuni dati per il nuovo listino:        
**Data inizio validitià**: viene proposta la data odierna, modificabile;       
**Data fine validità**: non viene proposta nessuna data, ma è possibile inserire una data fine validità per il listino;       
**Valuta**: viene proposta la divisa della società, modificabile;       
[**Arrotondamenti**](/docs/sales/sales-price-list/procedures/rounding): è possibile inserire un determinato **Mask** da applicare a un range di valori per la gestione dei decimali.         

Per avviare la procedura, selezionare le righe articolo nella griglia, e cliccare **Creazione listino** nella barra degli strumenti.