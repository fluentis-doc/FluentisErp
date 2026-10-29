---
title: Protok fizičkog kretanja
sidebar_position: 4
---

:::tip Napomena
Ova je tablica namijenjena isključivo tvrtkama koje imaju aktiviran *Kontroling*.
:::

Tijek fizičkih kretanja omogućuje rad s kretanjima unesenima u početnu evidenciju fizičkih kretanja, pri čemu se ona mogu duplicirati ili pretvarati primjenom množitelja ili postotka.

**#### Posebna polja**

- **ŠIFRA** tijeka
- **OPIS** tijeka
- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) na koje se odnosi
- [**CENTAR TVRTKE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) za koji se dohvaćaju količinski podaci koje treba obraditi
- [**DIMENZIJA ODREDIŠNIH CENTARA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) za definiranje dimenzije centara koje treba vrednovati
- **DATUM POČETKA** i **DATUM ZAVRŠETKA** valjanosti pravila
- **VRSTA RASPODJELE** koja se primjenjuje; jedina dostupna mogućnost je *01 Postotak*
- [**IZVORNA MJERNA JEDINICA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) i [**ODREDIŠNA MJERNA JEDINICA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), za eventualne pretvorbe između mjernih jedinica
- **MNOŽITELJ** koji se primjenjuje na izvorne količine

U donju tablicu unosi se popis odredišnih centara koje treba vrednovati, uz popunjavanje sljedećih polja:

- [**CENTAR TVRTKE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) – odredišni centar
- **POSTOTAK** koji se primjenjuje
- **VRIJEDNOST** koja se koristi
- Oznaka **POSTOTAK / VRIJEDNOST**: ako je uključena, postotak se unosi izravno; u suprotnom se može unijeti količina retka u prethodnom polju, na temelju koje će **FluentisERP** izračunati odgovarajući postotak.
- Eventualni **PROJEKT** koji treba vrednovati

:::tip Primjeri
Jedna od mogućih potreba jest dodjela fizičkih količina centru za koji se ne evidentira vrijeme, kako bi se mogla izračunati njegova troškovna stopa na temelju ukupnog broja sati prenesenih iz drugih centara. Primjerice, pomoćni proizvodni centar može primiti ukupne sate drugih centara koji sudjeluju u proizvodnji te na temelju njih odrediti količinu koju će koristiti za izračun vlastite troškovne stope.

Druga je mogućnost dupliciranje fizičkih kretanja iz upravljačke dimenzije u druge dimenzije, kako bi se ti podaci mogli koristiti za primjenu posebnih nositelja troškova.

Treća je mogućnost pretvorba sati zaprimljenih iz proizvodnje u minute, kako bi se izračunala troškovna stopa za drugu mjernu jedinicu bez potrebe za vanjskim ručnim izračunom.

Ako je potrebno duplicirati količinu iz jednog izvornog podatka u dva druga centra, može se primijeniti pravilo koje umnožava izvornu vrijednost, a zatim je raspodjeljuje, primjerice, napola na jedan, a napola na drugi centar.
:::

:::tip Napomena
Obrazac sadrži gumb za dupliciranje odabranog tijeka.
:::