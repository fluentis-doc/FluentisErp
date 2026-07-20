---
title: Inventar utovarne jedinice
sidebar_position: 9
---

:::important Čemu služi
Funkcija **Inventar utovarne jedinice** u Fluentis WMS-u omogućuje preciznu inventuru utovarnih jedinica pohranjenih u skladištu.

Operateri mogu očitati skladišnu lokaciju kako bi prikazali utovarne jedinice koje se na njoj nalaze te provesti inventuru njihovog stanja. Na temelju rezultata inventure sustav automatski generira potrebna skladišna knjiženja korekcije radi usklađivanja knjigovodstvenog i stvarnog stanja.
:::

Ova procedura koristi se za provođenje inventure utovarnih jedinica pohranjenih u skladištu.

Nakon očitavanja skladišne lokacije, u tablici se prikazuju sve utovarne jedinice koje se nalaze na toj lokaciji, zajedno sa sljedećim podacima:

> **Utovarna jedinica**: prikazuje broj utovarne jedinice koja se nalazi na odabranoj skladišnoj lokaciji;        
> **Tip**: prikazuje tip utovarne jedinice;     
> **Datum inventara**: prikazuje datum posljednje inventure utovarne jedinice.

Sljedeći korak je očitavanje utovarne jedinice koja se *inventurira*. Ako se očitana utovarna jedinica nalazi među onima prikazanima za odabranu skladišnu lokaciju, polje **Datum inventure** automatski se ažurira na današnji datum.

Ako očitana utovarna jedinica nije pronađena na odabranoj skladišnoj lokaciji, korisniku se prikazuje upozorenje.

Gumb **Obriši sve** omogućuje brisanje svih unesenih podataka iz forme.

Nakon što su očitane sve utovarne jedinice, pritiskom na gumb **Potvrda**, i to samo ako postoje utovarne jedinice koje nisu *inventurirane*, procedura će kreirati skladišna knjiženja izlaza robe za te utovarne jedinice s odabrane skladišne lokacije te skladišna knjiženja ulaza robe na zadanu skladišnu lokaciju definiranu u predlošku skladišnog knjiženja iz tablice [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

**Parametri ulaza/izlaza robe** koje je potrebno definirati u tablici [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |

Parametri su navedeni dva puta jer forma koristi predložak skladišnog knjiženja izlaza robe za uklanjanje utovarne jedinice s početne skladišne lokacije te predložak skladišnog knjiženja ulaza robe za njezin prijenos na odredišnu skladišnu lokaciju.

:::note PAŽNJA
Povezani predložak skladišnog knjiženja ulaza robe mora imati definiranu zadanu skladišnu lokaciju u tablici [Predlošci skladišnih knjiženja](/docs/configurations/tables/logistics/warehouse-templates/).
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).