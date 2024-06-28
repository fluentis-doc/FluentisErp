---
title: Sposta articolo
sidebar_position: 3
---

Questa procedura è utilizzata per creare un movimento di spostamento di un articolo da una specifica ubicazione ad un’altra. 
La lettura della prima ubicazione nella form andrà a popolare il campo relativo all’ubicazione di partenza, mentre la seconda andrà a popolare l’ubicazione di destinazione.     
Le successive letture di ubicazioni andranno a sovrascrivere solo l’ubicazione di destinazione.       
Inoltre, è possibile stampare anche l'etichetta del codice articolo tramite il pulsante **Stampa** o visualizzare l'anteprima direttamente sul terminale con il pulsante **Anteprima**.     
Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.      
Alla conferma viene generato il movimento di magazzino, che in questo caso, oltre alla registrazione principale di scarico, presenta anche la registrazione di contro partita che ha caricato l’articolo nella nuova ubicazione.

:::note Nota
La causale utilizzata dovrà essere una causale di scarico con una causale di carico in contropartita.
:::

**Parametri carico/scarico** da inserire nella tabella [Parametri Magazzino Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Nota
Se nei [Parametri Magazzino Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
