---
title: Područje
sidebar position: 2
---


:::tip Napomena
Tablica je relevantna samo za tvrtke koje imaju aktiviran *Kontroling*.
:::

Podatke za Kontroling uvijek upravljamo kroz područje analize koje identificira vrstu podataka koja se u njemu nalazi: možemo ga zamišljati kao fizičku kutiju, u koju se unose knjigovodstvene vrijednosti i kvantitativni podaci, a svaka kutija može imati svoj vlastiti model obračuna. Jedno područje obuhvaća podatke svih *dimenzija* centara.

#### Specifična polja  
- **Šifra**
- **Opis**
- [**Tip područja**](/docs/configurations/tables/controlling/managerial-accounting/area-type)
- **Narudžba za usklađenje**, nije upravljano


#### TIPOVI PODRUČJA
Tipično ćemo imati 3 područja:  
- *BUDŽET*: područje za budžet za sljedeću godinu;

- *REALIZACIJA*: područje za obračun međugodišnjih zatvaranja;

- *SET PRAVILA*: područje koje ne sadrži vrijednosti, osim eventualno nekih fizičkih mjera. Ovo je područje u kojem su pohranjena *standardna* pravila za cost drivere: ako, primjerice, obrađujem područje realizacije i pokušavam raspodijeliti trošak najma putem cost drivera, Fluentis će koristiti specifični cost driver za realizaciju, a ako ga nema, tražit će vrijednosti iz općih pravila po defaultu, povezanih s područjem *set pravila*.

:::tip Napomena
Možemo slobodno definirati koliko god područja analize želimo. Tipični cilj je simulirati *što se događa* ako promijenim pravila za cost drivere, ili primijeniti različite konfiguracije troškova.

Druga svrha je 'fiksiranje' obračuna Kontrolinga: kao što ćemo objasniti u dijelu o cost driverima, obračuni Kontrolinga brišu i ponovno kreiraju podatke za godinu koja se obrađuje. Ako želimo zadržati povijest, primjerice, prvog *trimestra* kako bismo ga kasnije usporedili s prva tri mjeseca obračuna prvog *polugodišta*, to možemo postići kreiranjem različitih realizacijskih područja.
:::




