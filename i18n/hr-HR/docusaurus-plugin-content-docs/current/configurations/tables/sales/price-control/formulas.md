---
title: Formule di aggiornamento politiche prezzi/sconti
sidebar_position: 4
---

In questa maschera è possibile agganciare le regole tra i documenti di acquisto e vendita, in modo da modificare il prezzo degli articoli in automatico quando il fornitore invia il nuovo catalogo.     
Nella prima griglia sono presenti **Codice** e **Descrizione** delle formule.      
Nella seconda griglia invece sono presenti i documenti di origine, i documenti di destinazione e le formule. E' possibile applicare fino a 5 operazioni per una stessa riga. Vengono considerate solo le colonne con contenuto, quelle lasciate vuote non saranno aggiornate nè prese in considerazione come fonte della modifica. L'utente, quindi, deve compilare solo le colonne di suo interesse per origine, destinazione, operando e valore operando. Analizziamo le colonne della seconda griglia.      
**Destinazione tipo listino di vendita**: contiene il Tipo listino di vendita destinatario della modifica, quando verrà applicata la formula presente in questa riga;        
**Conto/sottoconto/descrizione destinazione listino di vendita**: contiene il listino personalizzato destinatario della modifica;          
**Destinazione tipo listino fornitori**: contiene il Tipo listino fornitori destinatario della modifica;       
**Conto/Sottoconto/Descrizione destinazione listino fornitore**: contiene il listino personalizzato di acquisto destinatario della modifica;          
**Origine tipo listino di vendita**: contiene la tipologia di listino di vendita di origine, al quale verrà applicato l'Operando;      
**Conto/sottoconto/descrizione origine cliente**:  contiene il listino personalizzato da considerare come origine;       
**Origine tipo listino fornitore**: contiene il tipo listino fornitore di origine;         
**Conto/sottoconto/descrizione origine fornitore**: contiene il listino personalizzato di origine;         
**Costo origine magazzino**: questo campo va compilato se si vuole considerare come origine costo medio, ultimo o standard dell'articolo;        
**Operando N**: al documento considerato come Origine verrà applicata l'operazione selezionata in questa combo box tra +, -, *, / o %;          
**Valore N**: in questo campo è possibile inserire un valore manuale da applicare in base all'operando selezionato;       
**Valore Proprietà N**: in questo campo è possibile inserire un campo da sommare/sottrarre ecc. in base all'operando selezionato; questo campo esclude quello precedente: la somma/sottrazione/divisione ecc. può infatti esssere di un valore manuale oppure di un valore di un altro campo; facendo doppio click in questo campo, viene aperto il Navigatore oggetti dal quale selezionare la proprietà da considerare come fatture dell'operazione; le ultime due righe del Navigatore oggetti sono i flag **AddedValue** e **AddedPercentage**, che servono per riportare questi valori dal listino fornitore;           
**Ripresa sconto**: questo flag riporta nel documento di destinazione gli sconti del Listino selezionato;      
**Ripresa sconto da fornitore preferenziale**: questo flag riprende lo sconto dal listino del fornitore preferenziale di default.