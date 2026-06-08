---
title: Obračunate provizije
sidebar_position: 2
---

Ovaj izveštaj predstavlja simulaciju obračuna dospelih provizija agenta na osnovu podešavanja definisanih na kartici agenta i filtera izabranih u izveštaju.

Kod provizija koje se obračunavaju prema **naplati**, izveštaj prikazuje samo dospele provizije, bez uključivanja vrednosti koje su već obuhvaćene automatskim obračunima provizija. Na taj način dobija se usklađen i verodostojan pregled stvarno dospelih provizija.

Kod provizija koje se obračunavaju prema **fakturisanju**, **isporuci** ili **narudžbini**, pravilnim podešavanjem perioda moguće je dobiti kompletan izveštaj nezavisno od toga da li je izvršen automatski obračun provizija.

## Ispis obračunatih provizija

- **Datum obračuna** – određuje referentni datum za obračun dospelih provizija kod obračuna prema naplati.

- **Ispis prema datumu terećenja / agenta** – omogućava simulaciju stanja provizija na izabrani datum, uključujući i provizije koje su obračunate ili isplaćene nakon tog datuma, a koje se standardno ne prikazuju.

- **Uključi provizije sa nultom osnovicom** – omogućava uključivanje stavki čija je provizija jednaka nuli u ukupnu osnovicu za obračun provizije.

:::info Provizije prema naplati i zatvaranje stavki

Ako se provizije obračunavaju prema naplati i dođe do zatvaranja otvorenih stavki (na primer prebijanjem prethodnih avansa), potrebno je obratiti pažnju na datum knjiženja zatvaranja.

Sistem za obračun provizija koristi najnoviji datum knjiženja između dokumenata koji su učestvovali u zatvaranju stavke. Zbog toga nepravilno zatvaranje može dovesti do obračuna provizije u pogrešnom periodu.

Posebnu pažnju treba posvetiti situacijama u kojima postoje avansi i storna istih iznosa, jer nepravilno zatvaranje može uzrokovati netačan datum dospeća provizije.
:::

:::info Provizije prema naplati i privremena knjiženja

Prilikom obračuna dospelih provizija uzimaju se u obzir isključivo knjiženja sa statusom **konačno knjiženo**.

Sve uplate ili naplate evidentirane u privremenom statusu neće biti uključene u obračun provizija.
:::

:::info Provizije prema naplati i bankarske menice

Prilikom obračuna provizija uvek se uzima u obzir datum dospeća menice ili efekta.

Ovo važi i kada je otvorena stavka zatvorena knjiženjem menice koja je predata banci na naplatu ili diskont.
:::

:::warning Pažnja

Kod korišćenja bankarskih menica potrebno je proveriti podešavanja u parametrima **Rizik kupca**.

Posebnu pažnju treba obratiti na sledeće parametre:

- **Broj dana nakon dospeća za potvrde predate banci na naplatu uz klauzulu**
- **Broj dana nakon dospeća za potvrde predate banci po naplati**

Ako su navedena polja popunjena, sistem će dodati definisani broj dana na datum dospeća prilikom određivanja datuma dospeća provizije.

Prilikom inicijalne konfiguracije novog okruženja preporučuje se otvoriti i sačuvati podešavanja **Rizik kupca** najmanje jednom kako bi svi potrebni parametri bili pravilno inicijalizovani. U suprotnom, datum dospeća efekta možda neće biti pravilno uzet u obzir i provizija će biti obračunata tek prilikom zatvaranja otvorene stavke.
:::