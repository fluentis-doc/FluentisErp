---
title: Premjesti stavku
sidebar_position: 3
---

Ova procedura koristi se za stvaranje pokreta premještanja određenog artikla s jedne specifične lokacije na drugu. Čitanje prve lokacije u obrascu popunit će polje za polazišnu lokaciju, dok će drugo čitanje popuniti odredišnu lokaciju. Naknadna čitanja lokacija zamijenit će samo odredišnu lokaciju.
Također, moguće je ispisati naljepnicu s kodom artikla pomoću gumba *Ispis*.    

:::note NAPOMENA
Korišten uzrok mora biti uzrok istovara s uzrokom punjenja kao kompenzacijom.
:::

**Parametri utovara/istovara** trebaju se unijeti u tablicu [Parametri punjenja/pražnjenja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Napomena
Ako je u [Parametri utovara/istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika povezan samo jedno skladište, ono će se predložiti kao zadano. U suprotnom, ako ih je povezano više, nijedno neće biti predloženo kao zadano, a korisnik će moći birati samo među onima koji su uneseni.
:::

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).
