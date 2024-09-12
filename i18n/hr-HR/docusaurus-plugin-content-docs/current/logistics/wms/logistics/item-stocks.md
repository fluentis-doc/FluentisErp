---
title: Zalihe artikla
sidebar_position: 5
---

Ova procedura koristi se za prikazivanje stanja zaliha određenog artikla. Obrazac prikazuje mrežu koja mijenja svoje stupce na temelju unesenih filtera za pretraživanje

Stupci koji se odnose na stanje zaliha su tri:  
- *Stanje zaliha (Upr.)* - (upravljačko)
- *Stanje zaliha*  
- *Stanje zaliha (FK)* - (FK = Faktor konverzije)

U slučaju korištenja **UM Def. WMS** (prisutno u kartici  [Alternativne mjernih jedinica u šifarniku artikla](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um)), prvi stupac bit će ispunjen glavnom jedinicom mjere artikla, drugi će biti popunjen sa stanjem zaliha izraženim u alternativnoj jedinici mjere artikla i dobivenim zbrajanjem svih pokreta, dok će treći biti izračunat iz stanja zaliha izraženog u alternativnoj jedinici mjere, ali s faktorom konverzije.   
Ako nije omogućena opcija **UM Def. WMS** stupci *Stanje zaliha* i *Stanje zaliha (FK)* neće biti popunjeni.

**Parametri utovara/istovara** trebaju se unijeti u tablicu [Parametri punjenja/pražnjenja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Ovaj parametar treba unijeti samo ako želite filtrirati zalihe za specifično skladište (polje može ostati prazno), inače, ako se ne unese, bit će prikazane zalihe svih skladišta.

:::note Napomena
Ako je u [Parametri utovara/istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika povezan samo jedno skladište, ono će se predložiti kao zadano. U suprotnom, ako ih je povezano više, nijedno neće biti predloženo kao zadano, a korisnik će moći birati samo među onima koji su uneseni.
:::

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).
