---
title: Obračunate provizije
sidebar_position: 2
---

Ovaj ispis predstavlja simulaciju obračuna dospjelih provizija agenta na temelju postavki definiranih na kartici agenta i filtara odabranih u izvještaju.

Kod provizija koje se obračunavaju prema **naplati**, izvještaj prikazuje samo dospjele provizije, bez uključivanja vrijednosti koje su već obuhvaćene automatskim obračunima provizija. Na taj način dobiva se usklađen i vjerodostojan pregled stvarno dospjelih provizija.

Kod provizija koje se obračunavaju prema **fakturiranju**, **isporuci** ili **narudžbi**, pravilnim postavljanjem razdoblja moguće je dobiti potpun izvještaj neovisno o tome je li proveden automatski obračun provizija.

## Ispis obračunatih provizija

- **Datum obračuna** – određuje referentni datum za izračun dospjelih provizija kod obračuna prema naplati.

- **Ispis prema datumu terećenja / agenta** – omogućuje simulaciju stanja provizija na odabrani datum, uključujući i provizije koje su obračunate ili isplaćene nakon tog datuma, a koje se standardno ne prikazuju.

- **Uključi provizije s nultom osnovicom** – omogućuje uključivanje stavki čija je provizija jednaka nuli u ukupnu provizijsku osnovicu.

:::info Provizije prema naplati i zatvaranje stavaka
Ako se provizije obračunavaju prema naplati te dođe do zatvaranja otvorenih stavaka (primjerice prijebojem prethodnih predujmova), potrebno je obratiti pozornost na datum knjiženja zatvaranja.

Sustav za obračun provizija koristi najnoviji datum knjiženja između dokumenata koji su sudjelovali u zatvaranju stavke. Zbog toga pogrešno zatvaranje može dovesti do obračuna provizije u pogrešnom razdoblju.

Posebnu pažnju potrebno je posvetiti situacijama u kojima postoje predujmovi i storna istih iznosa jer nepravilno zatvaranje može uzrokovati netočan datum dospijeća provizije.
:::

:::info Provizije prema naplati i privremena knjiženja
Kod izračuna dospjelih provizija uzimaju se u obzir isključivo knjiženja koja imaju status **konačno knjiženo**.

Sva plaćanja ili naplate evidentirane u privremenom statusu neće biti uključene u obračun provizija.
:::

:::info Provizije prema naplati i bankovne mjenice
Prilikom obračuna provizija uvijek se uzima u obzir datum dospijeća mjenice ili efekta.

To vrijedi i kada je otvorena stavka zatvorena knjiženjem mjenice koja je predana banci na naplatu ili diskont.
:::

:::warning Pažnja
Kod korištenja bankovnih mjenica potrebno je provjeriti postavke u parametrima **Rizik kupca**.

Posebno treba obratiti pažnju na sljedeće parametre:

- **Broj dana nakon dospijeća za potvrde predane banci na naplatu uz klauzulu**
- **Broj dana nakon dospijeća za potvrde predane banci po naplati**

Ako su navedena polja popunjena, sustav će dodati definirani broj dana na datum dospijeća prilikom određivanja datuma dospijeća provizije.

Prilikom inicijalne konfiguracije novog okruženja preporučuje se otvoriti i spremiti postavke **Rizik kupca** barem jednom kako bi svi potrebni parametri bili ispravno inicijalizirani. U suprotnom datum dospijeća efekta možda neće biti pravilno uzet u obzir te će provizija biti obračunata tek pri zatvaranju otvorene stavke.
:::