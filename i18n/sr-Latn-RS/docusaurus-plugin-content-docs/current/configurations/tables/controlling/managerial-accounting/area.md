---
title: Područja
sidebar_position: 2
---

:::tip Napomena
Ova tabela je relevantna samo za preduzeća u kojima je aktivirana oznaka *Kontroling*.
:::

Podaci kontrolinga uvek se obrađuju u okviru povezanog područja analize, koje određuje vrstu podataka koje ono sadrži. Područje možemo zamisliti kao fizičku kutiju u koju se unose računovodstvene vrednosti i količinski podaci. Svako područje može imati sopstveni, zaseban model obračuna. Područje obuhvata podatke svih *dimenzija* centara.

#### Posebna polja

- **Šifra**
- **Opis**
- [**Tip područja**](/docs/configurations/tables/controlling/managerial-accounting/area-type)
- **Projekat balansiranja** – ne koristi se.

#### VRSTE PODRUČJA

Uobičajeno postoje tri područja:

- *BUDŽET*: sadrži budžet za sledeću godinu.

- *OSTVARENO*: koristi se pri obradi međuperiodnih zaključivanja.

- *SKUP PRAVILA*: područje koje ne sadrži vrednosti, osim eventualno pojedinih fizičkih mera. U njemu se čuvaju standardna pravila pokretača troška (*Cost driver*). Na primer, ako obrađujemo područje ostvarenih vrednosti i želimo da raspodelimo trošak zakupa pomoću pokretača troška, Fluentis će upotrebiti pokretač posebno definisan za ostvarene vrednosti, ako postoji. U suprotnom će potražiti opšta pravila koja važe kao podrazumevana i povezana su sa područjem *Skup pravila*.

:::tip Napomena
Moguće je slobodno definisati proizvoljan broj područja analize. Uobičajeni cilj je simuliranje scenarija *šta ako*, odnosno provera šta se dešava ako se promene pravila pokretača troška u preduzeću ili primena različitih konfiguracija troškova.

Druga mogućnost je „zamrzavanje” rezultata obrade kontrolinga. Kao što će biti objašnjeno u delu o pokretačima troška, obrade kontrolinga brišu i ponovo kreiraju podatke za godinu koja se obrađuje. Ako, na primer, želimo da sačuvamo rezultate prvog *tromesečja* kako bismo ih kasnije uporedili sa rezultatima prva tri meseca obrade prvog *polugodišta*, to možemo postići kreiranjem zasebnih područja ostvarenih vrednosti.
:::