---
title: Parametri Offerte
sidebar_position: 2
---

I parametri offerte permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società. La finestra si compone di due tab: Generale e Scarico.     

### Generale 

I campi presenti in questa tab sono:      
- **Gestione doppia unità misura**: se attivo, il sistema andrà a gestire l'unità di misura alternativa all'interno del documento.
- **Proposta automatica UM alternativa:** questo flag diventa editabile solo se è stato attivato il flag di gestione della doppia unità di misura e consente di riportare nel tab articoli dell'offerta l'unità di misura alternativa impostata nell'anagrafica articolo, nel apposita colonna 'UM alternativa'; se non attivo, l'unità di misura non viene riproposta.    
- **Ricerca prezzi articoli in tutti i listini predefiniti**: questo flag indica che durante la creazione di un'offerta il prezzo può essere cercato nei listini di default del cliente.       
- **Proponi provvigione per gli articoli omaggio**: con questo flag verranno proposte eventuali provvigioni agente sull'importo di riga anche per le righe articolo di tipo omaggio; altrimenti, l'importo della riga omaggio non concorrà nel calcolo delle provvigioni.           
- **Consentire sconti per gli articoli omaggio**: con questo flag verranno inseriti gli sconti sull'importo di riga anche per le righe articolo di tipo omaggio.      
- **Verifica articoli in esaurimento**: se settato, questo flag avvertirà l'utente con un pop-up di avviso nel caso in cui vengano inseriti in offerta degli articoli che hanno una data di esaurimento settata in anagrafica.     
- **Uso articolo cliente**: se settato, questo flag inserirà, nella griglia articoli dell'offerta, le colonne per il Codice e la Descrizione cliente inseriti in anagrafica articolo, tab Cliente.       
- **Uso barcode**: se settato, questo flag inserirà, nella griglia articoli dell'offerta, la colonna per riportare il barcode dell'articolo.     
- **Codice operatore obbligatorio**: questo flag rende obbligatorio compilare il campo *Operatore* in testata offerta.     
- **Blocca inserimento documento in date festive**: se attivo, il sistema non permette l'inserimento dell'offerta in date festive (sabato, domenica e festività); se non attivo, il sistema non effettua nessun controllo e lascia inserire il documento.     
- **Riferimenti offerta**: se questo flag viene impostato, nel progetto creato da offerta verrà inserito il Riferimento dell'offerta nel titolo del progetto; la composizione di questa nota deve essere inserita nel campo *Descrizione* secondo i parametri descritti nella label.     
- **Costo predefinito materiali offerta**: in questo campo è possibile indicare il *Tipo costo origine* da usare come importo di partenza per il calcolo del ricavo dei *Materiali* di un'[offerta gerarchica](/docs/sales/offers/new-offer/group-items).       
- **Articolo ordine risorse da offerta**: in questo campo è possibile indicare quale articolo codificato associare alle risorse di un'Offerta, per la creazione delle righe dell'Ordine dall'[offerta gerarchica](/docs/sales/offers/new-offer/group-items).      
- **Riferimenti prototipo**: in questa sezione è possibile comporre la nota di riferimento al prototipo associato all'offerta; essa verrà riportata nel campo *Prototipo* del tab *Attività* dell'offerta gerarchica.     
- **Blocca conferma e conversione offerta in ordine se presenti prototipi non codificati**: questo flag impedisce conferma e conversione offerta in ordine se sono associati prototipi non codificati.
