---
title: Istovar artikla
sidebar_position: 2
---

Ova procedura koristi se za stvaranje pokreta istovara određenog artikla s određene lokacije.        
U polju **Barkod** moguće je pročitati artikal i lokaciju s koje artikal treba biti istovaren.     
Također, moguće je ispisati naljepnicu s kodom artikla pomoću gumba *Ispis*.

:::note Napomena
*Šifra artikla* i *Lota* moraju biti prisutni u Fluentisu.
:::

**Parametri utovara/istovara** trebaju se unijeti u tablicu [Parametri punjenja/pražnjenja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Napomena
Ako je u [Parametri utovara/istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika povezan samo jedno skladište, ono će se predložiti kao zadano. U suprotnom, ako ih je povezano više, nijedno neće biti predloženo kao zadano, a korisnik će moći birati samo među onima koji su uneseni.
:::

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).
