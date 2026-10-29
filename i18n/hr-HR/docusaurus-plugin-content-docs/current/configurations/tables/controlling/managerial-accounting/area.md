---
title: Područja
sidebar_position: 2
---

:::tip Napomena
Ova je tablica relevantna samo za tvrtke u kojima je aktivna oznaka *Kontroling*.
:::

Podaci kontrolinga uvijek se obrađuju unutar povezanog područja analize, koje određuje vrstu podataka sadržanih u njemu. Područje možemo zamisliti kao fizičku kutiju u koju se unose računovodstvene vrijednosti i količinski podaci. Svako područje može imati vlastiti, zaseban model izračuna. Područje obuhvaća podatke svih *dimenzija* centara.

**#### Posebna polja**

- **Šifra**
- **Opis**
- [**Tip područja**](/docs/configurations/tables/controlling/managerial-accounting/area-type)
- **Projekt balansiranja** – ne koristi se.

**#### VRSTE PODRUČJA**

Uobičajeno postoje tri područja:

- *PRORAČUN*: sadrži proračun za sljedeću godinu.

- *OSTVARENO*: koristi se pri obradi međurazdobnih zaključivanja.

- *SKUP PRAVILA*: područje koje ne sadrži vrijednosti, osim eventualno pojedinih fizičkih mjera. U njemu se pohranjuju standardna pravila pokretača troška (*Cost driver*). Primjerice, ako obrađujemo područje ostvarenih vrijednosti i želimo raspodijeliti trošak najma pomoću pokretača troška, Fluentis će upotrijebiti pokretač posebno definiran za ostvarene vrijednosti, ako postoji. U suprotnom će potražiti opća pravila koja vrijede kao zadana, povezana s područjem *Skup pravila*.

:::tip Napomena
Moguće je slobodno definirati proizvoljan broj područja analize. Uobičajeni je cilj simulirati *što ako* scenarije, odnosno provjeriti što se događa ako se promijene pravila pokretača troška u tvrtki, ili primijeniti različite konfiguracije troškova.

Druga je mogućnost „zamrznuti” rezultate obrade kontrolinga. Kao što će biti objašnjeno u dijelu o pokretačima troška, obrade kontrolinga brišu i ponovno stvaraju podatke za godinu koja se obrađuje. Ako, primjerice, želimo sačuvati rezultate prvog *tromjesečja* kako bismo ih poslije usporedili s prva tri mjeseca rezultata obrade prvog *polugodišta*, to možemo postići stvaranjem zasebnih područja ostvarenih vrijednosti.
:::