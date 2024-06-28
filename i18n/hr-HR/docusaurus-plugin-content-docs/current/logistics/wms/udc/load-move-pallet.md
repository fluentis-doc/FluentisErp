---
title: Utovar/Premještanje transportne jedinice
sidebar_position: 2
---

Ova procedura koristi se za čitanje jedinice utovara kako bi se nastavilo s *Utovarom* ako jedinica utovara nije već utovarena ili s *Premještanjem* ako je jedinica utovara već utovarena. 

**Parametri utovara/istovara** trebaju biti uneseni u tablicu [Parametri Utovara/Istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |

Parametri su uneseni dva puta jer obrazac koristi i uzrok za utovar i uzrok za istovar.

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).
