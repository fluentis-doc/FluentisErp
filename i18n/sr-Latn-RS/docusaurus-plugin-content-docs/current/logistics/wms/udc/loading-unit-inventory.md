---
title: Inventura utovarne jedinice
sidebar_position: 9
---

:::important Čemu služi
Funkcija **Inventura utovarne jedinice** u Fluentis WMS-u omogućava preciznu inventuru utovarnih jedinica uskladištenih u skladištu.

Operateri mogu očitati skladišnu lokaciju kako bi prikazali utovarne jedinice koje se na njoj nalaze te sprovesti inventuru njihovog stanja. Na osnovu rezultata inventure sistem automatski generiše potrebna skladišna knjiženja korekcije radi usklađivanja knjigovodstvenog i stvarnog stanja.
:::

Ova procedura koristi se za sprovođenje inventure utovarnih jedinica uskladištenih u skladištu.

Nakon očitavanja skladišne lokacije, u tabeli se prikazuju sve utovarne jedinice koje se nalaze na toj lokaciji, zajedno sa sledećim podacima:

> **Utovarna jedinica**: prikazuje broj utovarne jedinice koja se nalazi na odabranoj skladišnoj lokaciji;  
> **Tip**: prikazuje tip utovarne jedinice;  
> **Datum inventure**: prikazuje datum poslednje inventure utovarne jedinice.

Sledeći korak je očitavanje utovarne jedinice koja se *inventuriše*. Ako se očitana utovarna jedinica nalazi među onima prikazanim za odabranu skladišnu lokaciju, polje **Datum inventure** automatski se ažurira na tekući datum.

Ako očitana utovarna jedinica nije pronađena na odabranoj skladišnoj lokaciji, korisniku se prikazuje upozorenje.

Dugme **Obriši sve** omogućava brisanje svih unesenih podataka iz forme.

Nakon što su očitane sve utovarne jedinice, pritiskom na dugme **Potvrda**, i to samo ako postoje utovarne jedinice koje nisu *inventurisane*, procedura će kreirati skladišna knjiženja izlaza robe za te utovarne jedinice sa odabrane skladišne lokacije te skladišna knjiženja ulaza robe na podrazumevanu skladišnu lokaciju definisanu u predlošku skladišnog knjiženja iz tabele [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |

Parametri su navedeni dva puta zato što forma koristi predložak skladišnog knjiženja izlaza robe za uklanjanje utovarne jedinice sa početne skladišne lokacije te predložak skladišnog knjiženja ulaza robe za njen prenos na odredišnu skladišnu lokaciju.

:::note PAŽNJA
Povezani predložak skladišnog knjiženja ulaza robe mora imati definisanu podrazumevanu skladišnu lokaciju u tabeli [Predlošci skladišnih knjiženja](/docs/configurations/tables/logistics/warehouse-templates/).
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).