---
title: Ispravak artikla
sidebar_position: 4
---

Ova procedura koristi se za retifikaciju određenog artikla. Obrazac prikazuje mrežu koja mijenja svoje stupce na temelju unesenih filtera za pretraživanje. Obrazac ne dopušta masovne retifikacije, stoga su promjene onemogućene ako je mreža popunjena s više rezultata. Promjena količine može se izvršiti putem gumba u donjem dijelu ili izravno mijenjanjem vrijednosti u mreži.

**Parametri utovara/istovara** trebaju se unijeti u tablicu [Parametri punjenja/pražnjenja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

Ovi parametri su uneseni dva puta jer obrazac koristi i uzrok utovara i uzrok istovara.

:::note Napomena
Ako je u [Parametri utovara/istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika povezan samo jedno skladište, ono će se predložiti kao zadano. U suprotnom, ako ih je povezano više, nijedno neće biti predloženo kao zadano, a korisnik će moći birati samo među onima koji su uneseni.
:::

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).
