---
title: Previsioni di vendita mensili
sidebar_position: 2
---

Le possiamo eseguire dal menu area Controlling > Previsioni di vendita mensili.

:::note Nota
Prima di procedere vedasi quando indicato in merito alle [Versioni delle previsioni di vendita](/docs/configurations/tables/controlling/forecast/pv-versions). 
:::

La form è composta da 3 aree:

- l’area di filtro dati (quella superiore): per la ricerca delle previsioni già inserite;

- l’area intermedia: per la proposta di informazioni durante un inserimento/aggiornamento massivo;

- l’area inferiore: è un elenco dove visualizzare e modificare le previsioni già inserite con la possibilità di inserirne di nuove.

L’area di filtro permette di filtrare le Previsioni di vendita per: *Versione, Articolo, Variante, Anno previsione, Attive* (tutte, attive o non attive) e *Consolidate* (tutte, consolidate e non consolidate).

L’area intermedia, denominata **Informazioni da proporre**, permette, durante l’inserimento o aggiornamento massivo, di proporre le informazioni predefinite: *Versione* (considerata solo durante l’inserimento) e *Quantità mensili da proporre*. L’aggiornamento è possibile solamente per le righe di previsioni non ancora consolidate.

L’area inferiore è composta da un elenco contenente le informazioni di:

- **Versione, Anno, Predefinita e Attiva**: sono informazioni di sola lettura in quanto inserite all’atto di inserimento di una nuova previsione copiandole dalla Versione da proporre;

- **Consolidata**: indica se la riga è stata “validata” ed è pronta per essere considerata nella Generazione delle commesse di produzione; il consolidamento può essere effettuato manualmente, riga per riga, oppure massivamente per tutte le previsioni di una determinata Versione premendo il pulsante **Consolida versione**; il ripristino di una versione consolidata può essere effettuato premendo il pulsante **Ripristina consolidamento**;

-	**Classe, Codice articolo, Descrizione articolo, Variante e Descrizione variante**: sono le informazioni oggetto della previsione, non modificabili se la riga è stata consolidata;

-	**Unità di misura**: è l’ Unità di misura principale associata all’articolo e non è modificabile;

-	**Unità di misura alternativa**: posso esprimere le Quantità in un’ Unità di misura alternativa (se indicata) diversa da quella principale; questa non è modificabile se la riga è stata consolidata;

-	**Quantità mensili, da Gennaio a Dicembre**: sono le quantità di previsione mensili espresse in Unità di misura principale dell’articolo o Unità di misura alternativa (se indicata); le quantità di una previsione consolidata di anni precedenti all’anno in corso o dell’anno in corso e mesi precedenti a quello in corso non sono più modificabili;

-	**Quantità totale**: informazione non editabile in quanto è la somma delle Quantità mensili.

**Esempio di inserimento nuove previsioni**

*Effettuiamo un doppio click del mouse sulla cella Codice articolo della riga di inserimento; viene visualizzato l’help degli articoli; premiamo il pulsante **Ricerca** applicando o meno un filtro, selezioniamo una decina di articoli visualizzati nell’elenco e premiamo il pulsante **Seleziona**; gli articoli selezionati verranno inseriti massivamente nell’elenco delle previsioni per la Versione e le Quantità proposte.*

**Esempio di aggiornamento previsioni già esistenti e non consolidate**

*Selezioniamo alcune righe di previsioni già inserite e premiamo il pulsante **Proponi quantità**; previo messaggio di conferma (premeremo il pulsante **Si**) e avviso di “Aggiornamento effettuato”, troveremo le righe, precedentemente selezionate, tutte con le nuove quantità.*