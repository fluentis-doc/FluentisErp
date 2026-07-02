---
title: Upravljanje obrascem F24
sidebar_position: 2
---

## Automatsko popunjavanje

Prilikom izrade novog obrasca **F24**, podaci u zaglavlju automatski se popunjavaju na temelju postavki definiranih u tablici **[Poduzeće](/docs/configurations/tables/general-settings/company)**.

Razdoblje PDV-a i razdoblje poreza po odbitku (mjesec i godina) prema zadanim se postavkama popunjavaju tekućim mjesecom, ali ih je moguće promijeniti kako bi odgovarali obračunskom razdoblju za koje se podnosi obrazac.

Kod PDV-a sustav automatski preuzima podatke iz forme **[Uplate PDV-a](/docs/finance-area/declarations/declarations/vat-payment)** u području glavne knjige, gdje se pohranjuju podaci konačno obračunanog PDV-a. Vrijednosti je moguće unijeti i ručno.

Ako je potrebno obraditi samo jedan dio obrasca, dovoljno je isprazniti polja razdoblja za dio koji se ne želi uključiti:

- za obradu samo PDV-a isprazniti razdoblje poreza po odbitku
- za obradu samo poreza po odbitku isprazniti razdoblje PDV-a.

Nakon spremanja podataka zaglavlja aktivira se gumb **Predloži vrijednosti**, koji automatski popunjava retke prve kartice **Državni proračun (Erario)**.

Preostale sekcije obrasca potrebno je, prema potrebi, popuniti ručno.

Nakon odabira obveznika, potpisnika i lokacije za spremanje datoteke moguće je pokrenuti izradu elektroničke datoteke.

Naziv datoteke generira se u sljedećem obliku:

`OIB društva_Broj obrasca_Datum obrasca.F24`

Ako nedostaju obvezni podaci, sustav prikazuje odgovarajuću poruku i datoteka se neće izraditi.

Izradu datoteke moguće je poništiti odgovarajućom funkcijom.

Pritiskom na gumb **Izradi elektroničku datoteku** generira se datoteka koja se šalje Poreznoj upravi putem odgovarajućih elektroničkih kanala (npr. Entratel).

Generirana datoteka automatski se arhivira u dokumentnom sustavu te je dostupna za pregled i preuzimanje putem gumba **Dokumenti** na alatnoj traci.

:::note Napomena
Za izradu elektroničke datoteke moraju biti konfigurirana dva BizLink konektora:

- **F24** (servis s autentifikacijom)
- **F24Errors**

Oba konektora moraju biti povezana s partnerom **AgeEnt**, odgovarajućim tijekom (**Flow**) i dokumentom **F24** (odnosno **F24Errors** za drugi konektor).
:::

## Knjiženje

U zaglavlju obrasca moguće je unijeti:

- **Bankovne naknade**
- **Bankovni račun za plaćanje**.

Nakon toga moguće je pokrenuti funkciju **Knjiženje**, koja automatski generira knjiženje:

- isplate s bankovnog računa
- zatvaranja obveze za PDV
- zatvaranja obveze za porez po odbitku.

:::tip Napomena
Konta koja se koriste za automatsko knjiženje određuju se:

- za PDV u **[Parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**
- za porez po odbitku u tablici **[Vrste poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types)**.

Konto za porez po odbitku može se promijeniti tijekom postupka **[Knjiženja plaćanja naknada](/docs/finance-area/professional-men/accounting/payments-accounting/parameters)**.
:::

| Funkcija | Opis |
| --- | --- |
| Spremi | Sprema trenutno otvoreni obrazac F24. |
| Predloži vrijednosti | Preuzima podatke iz obračuna PDV-a i evidentiranih poreza po odbitku. |
| Nova stavka | Postavlja pokazivač na novi redak za unos stavke. |
| Obriši stavku | Briše odabranu stavku iz obrasca. |