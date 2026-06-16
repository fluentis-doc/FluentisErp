---
title: Vrste područja - Područja
sidebar_position: 5
---

:::tip NAPOMENA 
Ova tablica je od interesa samo za tvrtke u kojima je aktiviran *kontroling*.   
:::

Podaci kontrolinga uvijek se upravljaju kroz analitičko područje koje identificira koje vrste podataka sadrži. Možemo to zamisliti kao fizičku kutiju: svaka kutija se puni računovodstvenim i kvantitativnim vrijednostima, a svaka kutija može imati vlastiti, zaseban model izračuna. Jedno područje obuhvaća podatke svih *dimenzija* centara.

[**Specifična polja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)

- **Kod**
- **Opis**
- [**Vrsta područja**](/docs/configurations/tables/controlling/managerial-accounting/area-type/)
- **Uskladna stavka**, nije upravljano

[**TIPOLOGIJE PODRUČJA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)

Obično imamo tri područja:

- *BUDŽET*: sadrži budžet za sljedeću godinu;

- *STVARNO STANJE*: koristi se pri obradi međugodišnjih zatvaranja;

- *SET PRAVILA*: područje koje ne sadrži vrijednosti, osim eventualno nekih fizičkih mjera. Ovo područje pohranjuje standardna pravila nositelja troškova: ako se, na primjer, obrađuje područje ostvarenih troškova i želi raspodijeliti trošak najma pomoću nositelja troškova, Fluentis će koristiti specifičnog nositelja troškova za ostvarene troškove ako ga pronađe; inače će koristiti opća pravila koja su po *defaultu* povezana s područjem set pravila.

:::tip NAPOMENA 
Broj analitičkih područja možemo definirati slobodno. Tipični cilj je simulirati što se događa ako promijenimo pravila nositelja troškova u tvrtki ili primijeniti različite konfiguracije troškova.

Druga primjena je “kristalizacija” kontroling obračuna: kao što će biti objašnjeno kod nositelja troškova, obračuni kontrolinga brišu i ponovno kreiraju podatke za obračunsku godinu. Ako želimo zadržati, primjerice, podatke za prvo tromjesečje kako bismo ih usporedili s prva tri mjeseca obračuna prvog polugodišta, to možemo postići kreiranjem različitih područja ostvarenih troškova.
:::