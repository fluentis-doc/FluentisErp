---
title: Formule
sidebar position: 3
--- 

:::tip Napomena
Ova je tablica namijenjena isključivo tvrtkama koje su aktivirale funkcionalnost *Kontrolinga*.
:::

U Formulama izračuna možemo definirati način automatskog kreiranja izvanknjižnih zapisa područja na temelju određenih izvorišnih vrijednosti. Općenito, cilj je automatizirati – makar i približno – neke zapise koji bi u računovodstvu bili evidentirani naknadno ili bi bilo previše zahtjevno unositi ih ručno za svaki period kao izvanknjižne zapise područja.

:::tip Primjer
Primjerice, možemo automatski obračunati troškove bonusa za postignute rezultate, koje možda evidentiramo na kraju godine primjenom 3% na prihod od prodaje rezervnih dijelova u Italiji, koristeći formulu koja primjenjuje taj postotak na saldo relevantnog konta povezanog s troškovnim centrom prodajnih prihoda, te taj trošak dodijeliti odjelu Komercijale.

Također, moguće je primijeniti formule na količine evidentirane u određenim mjernim jedinicama, ako se, primjerice, pretpostavlja da određeni troškovi nastaju po komadu.
:::

Za unos nove *Formule*, iz tražilice se pritisne gumb *Novo* kako bi se otvorio obrazac za upravljanje, koji sadrži sljedeća polja:  
- **DATUM POČETKA** i **DATUM ZAVRŠETKA** valjanosti pravila

- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) primjene pravila

- **KONTO ODREDIŠTA**, tj. podračun koji će se koristiti za automatsko knjiženje u analitici izvanknjižnog zapisa područja

- [**CENTAR ODREDIŠTA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), odnosno centar koji se koristi u toj stavci

- [**CENTAR IZVORA UM**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), opcionalno, koji služi kao filtracijski centar za fizičke pokrete kada formula uključuje količine upravljane jedinicom mjere

- **CENTAR IZVORA KONTA**(/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), opcionalno, koji služi kao filtracijski centar za vrijednosti podračuna uključenih u formulu

Ispod se nalaze dvije tablice: lijevo popis konta plana konta, a desno dostupne [*jedinice mjere*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units).
Na dnu obrasca nalazi se odjeljak s formulom, koja se može uređivati povlačenjem entiteta (konta i/ili JM) koje želimo uključiti u samu formulu.

:::tip Primjer
Formula bi mogla biti, na primjer, "40001-004-Ricavi di Vendita ricambi ITA"*0.03
:::

:::tip Napomena
U tražilici je dostupan gumb za dupliciranje odabrane formule.
:::
