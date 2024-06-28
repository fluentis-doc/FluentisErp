---
title: Carico/Sposta UDC Multiplo
sidebar_position: 3
---

Questa procedura è utilizzata per la lettura di una o più unità di carico per poter procedere al *Carico* massivo se le unità di carico risultano non caricate o allo *Spostamento* se le unità di carico risulta già essere caricate.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

I parametri sono inseriti due volte poiché la form utilizza sia una causale di carico che di scarico.

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
