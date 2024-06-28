---
title: Carico/Sposta UDC
sidebar_position: 2
---

Questa procedura è utilizzata per la lettura di una unità di carico per poter procedere al *Carico* se l’unità di carico risulta non caricata o allo *Spostamento* se, invece, l’unità di carico risulta già essere caricata.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |

I parametri sono inseriti due volte poiché la form utilizza sia una causale di carico che di scarico.

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
