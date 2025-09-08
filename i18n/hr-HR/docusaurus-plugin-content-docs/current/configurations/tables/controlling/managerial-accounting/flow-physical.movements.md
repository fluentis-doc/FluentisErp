---
title: Protok fizičkog kretanja
sidebar position: 4
---

:::tip Napomena
Tablica je relevantna samo za tvrtke koje imaju aktiviran *Kontroling*.
:::

Tijek fizičkih kretanja omogućava interakciju s kretanjima unesenim u početnu bilješku fizičkih kretanja, omogućavajući njihovu replikaciju ili konverziju primjenom multiplikatora ili postotka.

#### Specifična polja

- **ŠIFRA** tijeka

- **OPIS** tijeka

- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) na koje se odnosi

- [**PROIZVODNI CENTAR**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) za koji se traže kvantitativni podaci

- [**DIMENZIJA ODREDIŠNIH CENTARA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) za definiranje dimenzije centara koje treba valorizirati

- **DATUM POČETKA** i **DATUM ZAVRŠETKA** valjanosti pravila

- **TIP RASPODJELE** koji se primjenjuje, može biti samo *01 Postotak*

- [**JEDINICA MJERE IZVORA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) i[**JEDINICA MJERE ODREDIŠTA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), za eventualne konverzije između JM

- **MULTIPLIKATOR** koji se primjenjuje na količine izvora

U donjoj mreži unosimo listu odredišnih centara za valorizaciju, popunjavajući sljedeća polja:
- [**PROIZVODNI CENTAR**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)  odredišnog centra

- **POSTOTAK** koji se primjenjuje

- **VRIJEDNOST** koja se koristi

- **POSTOTAK / VRIJEDNOST**: ako je označeno, postotak se unosi izravno, inače se može unijeti količina (prethodno polje) koju **FluentisERP** koristi za izračun relativnog postotka

- eventualni **PROJEKT** koji se valorizira

:::tip Primjeri
 Prva potreba može biti dodjeljivanje fizičkih količina centru za koji se ne evidentiraju sati, kako bi se mogla izračunati njegova tarifa troška derivirana iz ukupnih sati repliciranih od drugih centara. Primjerice, pomoćni proizvodni centar može primiti ukupne sate drugih centara korištenih u proizvodnji za izračun svoje tarife.
 
 Druga potreba može biti repliciranje fizičkih kretanja dimenzije upravljanja u druge dimenzije, radi primjene specifičnih cost drivera.
 
 Treća potreba može biti konverzija sati iz proizvodnje u minute za izračun tarife u drugoj jedinici mjere, bez ručnog vanjskog preračunavanja.
 
 Ako iz jednog izvora trebamo duplicirati količinu u dva druga centra, može se primijeniti pravilo koje množi početnu vrijednost i zatim raspoređuje polovicu u jedan, a polovicu u drugi centar.
:::

:::tip Napomena
U obrascu postoji gumb za dupliciranje odabranog tijeka.
:::