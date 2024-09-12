---
title: Sigurnosna zaliha
sidebar_position: 4
---

Ova funkcija se nalazi u putanji **Logistika > Skladište > Upravljanje ispisima > Sigurnosna zaliha** i omogućuje operateru da provjeri stanje zaliha kako bi ih mogao pravilno upravljati. Posebno je moguće, nakon što se odgovarajuće popuni opis artikla, upitati sustav radi pronalaska artikala koji će u budućnosti imati malu zalihu. Također je moguće, nakon izvođenja postupka, automatski generirati narudžbe za nabavu u pravilno vrijeme za artikle koji imaju malu zalihu.

**Tablice i parametri**

Prije izvođenja postupka malih zaliha, preporuča se postavljanje niza prethodno definiranih tablica i ispravna parametrizacija osnovnih algoritama:   
- u *Šifarnik artikla* potrebno je popuniti karticu *Nabava* posebno podatke za nabavu.         
- u *MRP parametrima* za artikle koje želite upravljati s malom zalihom, *politika upravljanja mora biti na način upravljanja zalihama*.        
- minimalna Zaliha mora biti manja ili jednaka Točki ponovnog naručivanja.

**Postupak**

Postupak malih zaliha koristi algoritam koji se temelji na prosječnoj dnevnoj potrošnji izračunatoj iz kartice *Nabava* u *šifarnik artikla*.

Započinje se s trenutnom zalihom u trenutku obrade i provjerava se je li na zatraženom datumu, na temelju prosječne potrošnje, potrebno naručiti artikle s malom zalihom.

(Minimalna zaliha - Točka ponovnog naručivanja) / Dani do ponovnog naručivanja

Postupak omogućuje odabir: **Artikla** (klasa, šifra artikla, opis), moguće **Varijante** samo za artikle koji se upravljaju varijantama, **Datum** za izračunavanje malih zaliha. Također je moguće omogućiti **Automatsko stvaranje zahtjeva za kupnjom**. Ako je ova funkcija omogućena, potrebno je specificirati  **Vrstu** dokumenta narudžbe i, po želji, **Napomenu** za zaglavlje narudžbe za nabavu.

Nakon unosa ovih filtara pritisnite gumb **Izvrši** za obradu podataka.

Mreža rezultata izvođenja prikazuje popis izvedenih obrada specificirajući **Broj** i **Datum obrade**.

:::note NAPOMENA
Važno je napomenuti da u slučaju kada je artikl vrste *Nabava*, bit će stvorena narudžba za nabavu ali ne i narudžba, dok će u slučaju kada je artikl vrste *Proizvodnja* ili *Radni nalog* biti stvorena odgovarajuća narudžba.
:::

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu formi za ispis, pogledajte sljedeći link: [Pregled i ispis](/docs/guide/operations-with-data/reports).