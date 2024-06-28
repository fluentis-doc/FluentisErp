---
title: Učitaj/pomakni više transportnih jedinica
sidebar_position: 3
---

Koristi se za čitanje jedne ili više jedinica utovara kako bi se nastavilo s masovnim *utovarom* ako jedinice utovara nisu već utovarene ili s *premještanjem* ako su jedinice utovara već utovarene.

**Parametri utovara/istovara** trebaju biti uneseni u tablicu [Parametri Utovara/Istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

Parametri su uneseni dva puta jer obrazac koristi i uzrok za utovar i uzrok za istovar.

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).
