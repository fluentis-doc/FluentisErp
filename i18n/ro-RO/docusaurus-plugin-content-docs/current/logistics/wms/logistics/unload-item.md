---
title: Scarico articolo
sidebar_position: 2
---

:::important A cosa serve
La funzione di **scarico articolo** è progettata per facilitare il prelievo degli articoli da un magazzino. Utilizzando il codice a barre, l'operatore può selezionare l’articolo e l’ubicazione da cui effettuare il prelievo, inserire la quantità da scaricare e, se necessario, il lotto specifico. Questa procedura genera il movimento di scarico di magazzino, aggiornando le giacenze e garantendo la corretta registrazione dei flussi di merci.
:::

Questa procedura è utilizzata per creare un movimento di scarico di un articolo da una determinata ubicazione.        
Nel campo **Codice barcode**, l’operatore dovrà solamente leggere il Barcode dell’articolo, poi quello dell’ubicazione da cui vuole scaricarlo.        
Successivamente dovrà solo inserire la quantità da movimentare, ed una volta confermato verrà creato anche il relativo movimento di magazzino.        
Nel caso in cui l'articolo sia gestito a lotti, verrà visualizzato anche il relativo campo in cui andare ad inserire il lotto che dovrà essere scaricato.         
Inoltre, è possibile stampare anche l'etichetta del codice articolo tramite il pulsante **Stampa** o visualizzare l'anteprima direttamente sul terminale con il pulsante **Anteprima**.        
Il pulsante **Pulisci tutto** permette di svuotare la form da tutti i dati inseriti.

:::note Nota
Il *Codice Articolo* e il *Lotto* devono avere l’anagrafica presente su Fluentis.
:::

**Parametri de încărcare/descărcare** care trebuie introduși în tabelul [Parametrii Încărcare/Descărcare pu utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Nota
Dacă în [Parametrii de gestiune Încărcare/Descărcare pe utilizatori](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociată pentru acel utilizator o singură gestiune, aceasta va fi propusă implicit. Dacă sunt asociate mai multe, implicit nu va fi propusă niciuna, iar utilizatorul va putea alege doar una dintre cele introduse.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
