---
title: Patch notes Versione 802
sidebar_position: 1
---

### Patch 801.0021 - 11/09/2025

> - Add common libraries for Json on Script editor 
> - BI - fix algorithm call from query based SWITCHBOARD (TT03876/25) 
> - CO - modificato algoritmo di creazione della chiusura da private a virtual. (#TT03923/25) 
> - FI - importazione da DocFinance, se la partita da chiudere è legata ad un compenso professionista con partite gestite al netto ora Fluentis aggiunge automaticamente la registrazione che valorizza il debito della ritenuta (#TT03211/25). 
> - FI - Optimization of CalculateCustomerRiskOnDemand2 ( TT03855/25) 
> - FI - revisione gestione arrotondamenti sui movimenti dei centri di costo in contabilizzazione fattture di acquisto in valuta, revisione gestione natura articolo, sconti al lordo (#TT03742/25, #TT03840/25, #TT03845/25) 
> - FI - Risolto errore nella procedura di Creazione partita d’anticipo. (#TT03779/25) 
> - SCM - Corretta la proposta dei prezzi negli Ordini di Conto Lavoro rilasciati dalla Produzione, nei casi in cui il listino preveda prezzi diversi per fase di lavorazione. (#TT03418/25) 
> - SCM - Corretto errore nella generazione della Stampa Scadenziario Ordini fornitori. (#TT03881/25) 
> - SCM - Fatture di Acquisto: abilitato l’inserimento di Extra data nelle fatture già contabilizzate. (#TT03564/25) 
> - SCM: Il numero de lotto è stato modificato dopo aver inserito manualmente il valore nella bolla di consegna TT03872/25. 
> - WM - Corretto bug nell’import webapi degli articoli di magazzino nel caso in cui venisse importato anche il barcode della variante. (#TT03765/25) 
> - WM - Ora, i valori nella colonna "Stato Documento" della griglia di dettaglio dell'analisi analisi disponibilità vengono visualizzati correttamente. (#TT02367/25) 
> - WM - Prototipi: Nel calcolo del costo dei componenti vengono ora considerati anche eventuali prezzi per quantità definiti nel listino del fornitore preferenziale. Per i dettagli fare riferimento alla documentazione. (#TT03843/24) 
> - WMS - Ricevimento merci: migliorata la proposta di magazzino e causale in fase di creazione DDT (vedasi la documentazione in linea per i dettagli). (#TT03240/25)  
In fase di creazione del DDT, il magazzino e la causale verranno proposti nel seguente modo: 
- Se il magazzino riportato nell'ordine di acquisto è uno dei magazzini presenti nei [Parametri Carico/Scarico per utente] per quell’utente, la procedura lo propone.           
- Se il magazzino riportato nell’ordine di acquisto non è uno dei magazzini presenti nei [Parametri Carico/Scarico per utente] per quell’utente, la procedura lascia vuoti sia il campo del magazzino sia quello della causale di magazzino. In questo caso l’utente deve inserirli manualmente per poter proseguire, e quando prova a inserirli la procedura mostra un messaggio di conferma prima di poter proseguire: se clicca SÌ, può inserire uno dei magazzini presenti nei [Parametri Carico/Scarico per utente] per quell’utente; altrimenti se clicca NO, i campi magazzino e tipologia magazzino rimangono vuoti.       
- Se nell’ordine di acquisto non è specificato il magazzino e nei [Parametri Carico/Scarico per utente] per quell’utente è presente un solo magazzino, la procedura proporrà automaticamente quel magazzino e la relativa causale; mentre, se nei [Parametri Carico/Scarico per utente]per quell’utente sono presenti più magazzini, la procedura lascia vuoti sia il campo magazzino sia il campo della causale, e quando l’utente potrà scegliere tra quelli presenti nei parametri senza senza la necessità di mostrare alcun messaggio.  

### Patch 801.0020 - 04/09/2025

> - FI - contabilizzazione fatture di vendita per autofatture servizi esteri, revisione gestione “conto partner” nella causale automatica di giro (#TT03556/25) 
> - FI - F2021/2023 - Bug Extension - Fonderie Palmieri - change primary key ( TT03726/25) 
> - FI - revisione allineamento dati analitica/partite al cambiamento del progetto in testata registrazione contabile. (#TT02577/24) 
> - FI - revisione creazione registrazioni contabili da file Sdi (#TT03573/25) 
> - FI - tab analitica nelle registrazioni contabili, corretto caso in cui l'associazione al progetto salvava il riferimento solo alla testata e non alle righe progetto (#TT03591/25) 
> - PR - creazione manuale movimenti ordini clienti/fornitori nel cash flow, ottimizzazione procedura. Quando le righe da inserire sono più di 100, Fluentis segnala che è necessario salvare direttamente il cash flow. Modifications in help subcontractor of cash flow can have an impact on profiles. (#TT01803/24) 
> - SCM - Creazione automatica Ordini da Ordini clienti: se nei parametri della procedura è attivo il flag "Esplosione livello da struttura distinta" l’ordine di acquisto generato conterrà il primo livello della distinta base dell’articolo presente nell’ordine cliente. Le quantità dei componenti saranno calcolate sulla base della quantità confermata in fase di generazione del prototipo, applicando i coefficienti di impiego indicati nella distinta base. (#TT02802/25) 
> - SD - Associazione Tipi Listini di Vendita: premendo Nuovo si aprirà la form di inserimento di una nuova associazione. Modifications in both Filter and Object forms can have an impact on profiles (rif.ticket 3101/25)   
> - WM - Corretto bug che in alcune form (es. filtro distinta base) generava un errore nel caso in cui l’utente usasse apri form su uno degli elementi dopo aver cliccato il + sul filtro. (#TT03495/25) 