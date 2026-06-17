---
title: Vrste područja - Područja
sidebar_position: 5
---

:::tip NAPOMENA
Ova tabela je od značaja samo za kompanije kod kojih je aktiviran *kontroling*.
:::

Podaci kontrolinga se uvek obrađuju kroz analitičko područje koje određuje koju vrstu podataka sadrži. Možemo ga zamisliti kao fizičku kutiju: svaka kutija se popunjava računovodstvenim i kvantitativnim vrednostima, a svaka može imati sopstveni, zaseban model obračuna. Jedno područje obuhvata podatke svih *dimenzija* centara.

[**Specifična polja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)

- **Šifra**
- **Opis**
- [**Vrsta područja**](/docs/configurations/tables/controlling/managerial-accounting/area-type/)
- **Stavka usklađenja** – nije podržana

[**Tipovi područja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)

Uobičajeno postoje tri osnovna područja:

- **Budžet** – sadrži budžet za narednu godinu.
- **Stvarno stanje** – koristi se prilikom obrade međuperiodnih zatvaranja.
- **Skup pravila** – područje koje ne sadrži vrednosti, osim eventualno određenih fizičkih mera. Ovo područje čuva standardna pravila nosilaca troškova. Na primer, ako se obrađuje područje ostvarenih troškova i želi se raspodeliti trošak zakupa pomoću nosilaca troškova, Fluentis će koristiti specifičnog nosioca troškova za ostvarene troškove ukoliko postoji. U suprotnom će koristiti opšta pravila koja su podrazumevano povezana sa područjem *Skup pravila*.

:::tip NAPOMENA
Broj analitičkih područja može se definisati slobodno. Uobičajeni cilj je simulacija efekata promene pravila nosilaca troškova ili primena različitih konfiguracija troškova.

Druga česta primena je „kristalizacija“ obračuna kontrolinga. Pošto obračuni kontrolinga brišu i ponovo generišu podatke za obračunsku godinu, moguće je sačuvati rezultate određenog perioda (na primer prvog tromesečja) radi kasnijeg poređenja sa podacima obrađenim za prvo polugodište. To se postiže kreiranjem dodatnih područja ostvarenih troškova.
:::