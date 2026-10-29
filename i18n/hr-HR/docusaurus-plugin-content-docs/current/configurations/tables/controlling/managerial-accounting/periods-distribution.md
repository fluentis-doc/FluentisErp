---
title: Distribucija razdoblja
sidebar_position: 1
---

Obrazac se nalazi na putanji: **Tablice > Kontroling > Računovodstvo upravljanja > Distribucija razdoblja**

:::tip Napomena
Ova je tablica namijenjena isključivo tvrtkama koje koriste *Kontroling*.
:::

U raspodjeli razdoblja možemo odrediti kako ćemo raspodijeliti mjesece, za svako područje i za svaku godinu. Dostupna su sljedeća polja:

- **ŠIFRA**
- **OPIS**
- oznaka **ZADANO**

:::danger POZOR
U ovu je tablicu obvezno unijeti zapis s ovom oznakom. U suprotnom će ga obrada razdoblja kontrolinga zatražiti.
:::

Ispod se nalazi popis zapisa za svaku unesenu šifru, sa sljedećim poljima:

- referentno [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- **GODINA**
- **RAZDOBLJE**
- **VRIJEDNOST**, odnosno težina pojedinog razdoblja unutar godine

:::tip Primjeri
Godinu možemo podijeliti na dvanaest jednakih dijelova ili na jedanaest dijelova, uz odgovarajuće ponderiranje kolovoza, prosinca i siječnja. Umjesto toga, možemo za svaku godinu dodijeliti stvarni broj predviđenih proizvodnih dana u pojedinom mjesecu.
:::

*Raspodjela razdoblja* povezuje se na dva mjesta:

- U [*Kontnom planu*](/docs/erp-home/registers/accounting/analytic-chart-of-accounts): možemo odrediti da se analitički konto X, za koji je definiran raspon datuma razdoblja na koje se knjiženje odnosi, raspodijeli prema određenoj raspodjeli razdoblja, umjesto prema točnim danima zadanog raspona datuma. To je zadana logika kada raspodjela razdoblja nije definirana.
- U *Knjiženju fizičkih kretanja*, obvezno za *mjerne jedinice* definirane kao *Tijek*, a ne kao *Stanje*.

:::tip Napomena
Obrazac sadrži gumb za dupliciranje odabrane raspodjele. Ta je mogućnost korisna na početku godine za pripremu novog popisa koji će vrijediti za svako novo obračunsko razdoblje.
:::