---
title: Protok fizičkog kretanja
sidebar_position: 4
---

:::tip Napomena
Ova tabela namenjena je isključivo preduzećima koja imaju aktiviran *Kontroling*.
:::

Tok fizičkih kretanja omogućava rad sa kretanjima unetim u početnu evidenciju fizičkih kretanja, pri čemu se ona mogu duplirati ili pretvarati primenom množioca ili procenta.

#### Posebna polja

- **ŠIFRA** toka
- **OPIS** toka
- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) na koje se odnosi
- [**CENTAR PREDUZEĆA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) za koji se preuzimaju količinski podaci koje treba obraditi
- [**DIMENZIJA ODREDIŠNIH CENTARA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) za definisanje dimenzije centara koje treba vrednovati
- **DATUM POČETKA** i **DATUM ZAVRŠETKA** važenja pravila
- **VRSTA RASPODELE** koja se primenjuje; jedina dostupna opcija je *01 Procenat*
- [**IZVORNA MERNA JEDINICA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) i [**ODREDIŠNA MERNA JEDINICA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), za eventualne konverzije između mernih jedinica
- **MNOŽILAC** koji se primenjuje na izvorne količine

U donju tabelu unosi se lista odredišnih centara koje treba vrednovati, uz popunjavanje sledećih polja:

- [**CENTAR PREDUZEĆA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) – odredišni centar
- **PROCENAT** koji se primenjuje
- **VREDNOST** koja se koristi
- Oznaka **PROCENAT / VREDNOST**: ako je uključena, procenat se unosi direktno; u suprotnom se može uneti količina reda u prethodnom polju, na osnovu koje će **FluentisERP** izračunati odgovarajući procenat.
- Eventualni **PROJEKAT** koji treba vrednovati

:::tip Primeri
Jedna od mogućih potreba jeste dodela fizičkih količina centru za koji se ne evidentira vreme, kako bi se mogla izračunati njegova stopa troškova na osnovu ukupnog broja sati prenetih iz drugih centara. Na primer, pomoćni proizvodni centar može da primi ukupne sate drugih centara koji učestvuju u proizvodnji i da na osnovu njih odredi količinu koju će koristiti za izračunavanje sopstvene stope troškova.

Druga mogućnost je dupliranje fizičkih kretanja iz upravljačke dimenzije u druge dimenzije, kako bi se ti podaci mogli koristiti za primenu posebnih nosilaca troškova.

Treća mogućnost je konverzija sati preuzetih iz proizvodnje u minute, kako bi se izračunala stopa troškova za drugu mernu jedinicu bez potrebe za spoljnim ručnim izračunavanjem.

Ako je potrebno duplirati količinu iz jednog izvornog podatka u dva druga centra, može se primeniti pravilo koje množi izvornu vrednost, a zatim je raspodeljuje, na primer, napola na jedan, a napola na drugi centar.
:::

:::tip Napomena
Obrazac sadrži dugme za dupliranje izabranog toka.
:::