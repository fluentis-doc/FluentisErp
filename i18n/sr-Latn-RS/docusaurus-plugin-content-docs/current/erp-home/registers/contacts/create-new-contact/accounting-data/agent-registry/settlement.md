---
title: Obračun
sidebar_position: 3
---

U ovom obrascu definišu se opšta podešavanja za obračun i isplatu provizija agenata.

### Šifra poreza po odbitku

Ovo je **obavezno polje** koje omogućava automatski obračun poreza po odbitku na proviziju agenta. Bez popunjenog polja nije moguće automatski evidentirati naknadu prilikom obračuna provizija.

Polje je povezano sa šifarnikom [Tipovi poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types).

### Obračunski period

Određuje učestalost obračuna provizija agenata.

:::note[Napomena]
Ovo polje ima isključivo informativnu funkciju i ne koristi se direktno u postupku obračuna provizija.

Kod metode **izvršeno plaćanje**, prilikom obračuna se uvek uzimaju svi dokumenti do izabranog datuma. Nije moguće obračunavati samo deo provizija prema unapred definisanim obračunskim periodima.

Filteri dostupni u postupku **Automatski obračun provizija** zasnivaju se na datumima porudžbina, otpremnica i faktura, a ne na datumima plaćanja.

Razlog za to je što se dokumenti nakon obračuna ne mogu naknadno menjati, dok se plaćanja mogu unositi ili ispravljati i za već obrađene periode. U suprotnom bi pojedine provizije mogle ostati neobračunate.
:::

### Dokument koji određuje nastanak prava na proviziju

Određuje trenutak u kojem agent stiče pravo na proviziju. Dostupne su sledeće opcije:

- **Potvrđena porudžbina** – provizija nastaje potvrdom porudžbine.
- **Isporuka robe** – provizija nastaje izdavanjem otpremnice.
- **Izdavanje fakture** – provizija nastaje knjiženjem fakture.
- **Dospelost fakture** – provizija nastaje na datum dospeća fakture, nezavisno od naplate.
- **Izvršeno plaćanje** – provizija nastaje proporcionalno izvršenim uplatama kupca. Ako je kupac platio 50% fakture, agent ostvaruje 50% pripadajuće provizije.
- **Potpuno plaćanje** – provizija nastaje tek kada je faktura u potpunosti izmirena.

:::warning[Pažnja]
Ovo podešavanje nije moguće menjati nakon što započne obračun provizija u prodajnom modulu.

Ako je potrebno promeniti način obračuna, potrebno je kreirati novu konfiguraciju i, po potrebi, koristiti postupak **Dodela agenata** za masovno ažuriranje kupaca.
:::

:::note[Napomena]
Opcija **Potpuno plaćanje** dostupna je samo u [postupku obračuna provizija koji se koristi u modulu Administracija](/docs/finance-area/professional-men/procedures/calculate-commissions) i nije dostupna u standardnom obračunu provizija unutar prodajnog modula.
:::

:::note[Napomena]
Postupak upravljanja provizijama u računovodstvu omogućava naknadnu promenu logike obračuna provizija, jer se pravilo nastanka provizije čuva na nivou pojedinačnog dokumenta ili fakture.
:::