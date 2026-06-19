---
title: Obračun
sidebar_position: 3
---

U ovoj formi definiraju se opće postavke za izračun i obračun provizija agenata.

### Šifra poreznog odbitka

Ovo je **obavezno polje** koje omogućuje automatski obračun poreznog odbitka na proviziju agenta. Bez popunjenog polja nije moguće automatski evidentirati naknadu prilikom obračuna provizija.

Polje je povezano sa šifrarnikom [Tipovi odbitka poreza](/docs/configurations/tables/finance/withholding-tax-types).

### Razdoblje obračuna

Određuje učestalost obračuna provizija agenata.

:::note[Napomena]
Ovo polje ima isključivo informativnu funkciju i ne koristi se izravno u postupku izračuna provizija.

Kod metode **plaćanje izvršeno**, prilikom obračuna uvijek se uzimaju svi dokumenti do odabranog datuma. Nije moguće obračunavati samo dio provizija prema unaprijed definiranim obračunskim razdobljima.

Filtri dostupni u postupku **Automatski obračun provizija** temelje se na datumima narudžbi, otpremnica i računa, a ne na datumima plaćanja.

Razlog tome je što se dokumenti nakon obračuna ne mogu naknadno mijenjati, dok se plaćanja mogu unositi ili ispravljati i za već obrađena razdoblja. U suprotnom bi pojedine provizije mogle ostati neobračunate.
:::

### Dokument koji određuje nastanak prava na proviziju

Određuje trenutak u kojem agent stječe pravo na proviziju. Moguće su sljedeće opcije:

- **Potvrđena narudžba** – provizija nastaje potvrdom narudžbe.
- **Isporuka robe** – provizija nastaje izdavanjem otpremnice.
- **Izdavanje računa** – provizija nastaje knjiženjem računa.
- **Dospijeće računa** – provizija nastaje po dospijeću računa, neovisno o naplati.
- **Izvršeno plaćanje** – provizija nastaje proporcionalno izvršenim uplatama kupca. Ako je kupac platio 50 % računa, agent ostvaruje 50 % pripadajuće provizije.
- **Potpuno plaćanje** – provizija nastaje tek kada je račun u cijelosti podmiren.

:::warning[Pažnja]
Ova postavka ne može se mijenjati nakon što započne obračun provizija u prodajnom modulu.

Ako je potrebno promijeniti način obračuna, potrebno je kreirati novu konfiguraciju te, po potrebi, koristiti postupak **Dodjela agenata** za masovno ažuriranje kupaca.
:::

:::note[Napomena]
Opcija **Potpuno plaćanje** dostupna je samo u [postupku obračuna provizija koji se koristi u modulu Administracija](/docs/finance-area/professional-men/procedures/calculate-commissions) te nije dostupna u standardnom obračunu provizija unutar prodajnog modula.
:::

:::note[Napomena]
Postupak upravljanja provizijama u računovodstvu omogućuje naknadnu promjenu logike obračuna provizija jer se pravilo nastanka provizije pohranjuje na razini pojedinog dokumenta ili računa.
:::
