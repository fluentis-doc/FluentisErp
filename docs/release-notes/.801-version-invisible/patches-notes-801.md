---
title: Patch notes Versione 802
sidebar_position: 1
---

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