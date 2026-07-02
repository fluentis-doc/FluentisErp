---
title: Upravljanje obrascem F24
sidebar_position: 2
---

## Automatsko popunjavanje

Prilikom kreiranja novog obrasca **F24**, podaci u zaglavlju automatski se popunjavaju na osnovu podešavanja definisanih u tabeli **[Preduzeće](/docs/configurations/tables/general-settings/company)**.

Period PDV-a i period poreza po odbitku (mesec i godina) podrazumevano se popunjavaju tekućim mesecom, ali ih je moguće promeniti kako bi odgovarali obračunskom periodu za koji se podnosi obrazac.

Kod PDV-a sistem automatski preuzima podatke iz forme **[Uplate PDV-a](/docs/finance-area/declarations/declarations/vat-payment)** u oblasti glavne knjige, gde se čuvaju podaci konačno obračunatog PDV-a. Vrednosti je moguće uneti i ručno.

Ako je potrebno obraditi samo jedan deo obrasca, dovoljno je isprazniti polja perioda za deo koji se ne želi uključiti:

- za obradu samo PDV-a isprazniti period poreza po odbitku
- za obradu samo poreza po odbitku isprazniti period PDV-a.

Nakon čuvanja podataka zaglavlja aktivira se dugme **Predloži vrednosti**, koje automatski popunjava redove prve kartice **Državni budžet (Erario)**.

Preostale sekcije obrasca po potrebi se popunjavaju ručno.

Nakon izbora obveznika, potpisnika i lokacije za čuvanje datoteke moguće je pokrenuti kreiranje elektronske datoteke.

Naziv datoteke generiše se u sledećem formatu:

`PIB preduzeća_Broj obrasca_Datum obrasca.F24`

Ako nedostaju obavezni podaci, sistem prikazuje odgovarajuću poruku i datoteka neće biti kreirana.

Kreiranje datoteke moguće je poništiti odgovarajućom funkcijom.

Pritiskom na dugme **Kreiraj elektronsku datoteku** generiše se datoteka koja se šalje Poreskoj upravi putem odgovarajućih elektronskih kanala (npr. Entratel).

Generisana datoteka se automatski arhivira u dokumentnom sistemu i dostupna je za pregled i preuzimanje putem dugmeta **Dokumenti** na traci sa alatkama.

:::note Napomena
Za kreiranje elektronske datoteke moraju biti konfigurisana dva BizLink konektora:

- **F24** (servis sa autentifikacijom)
- **F24Errors**

Oba konektora moraju biti povezana sa partnerom **AgeEnt**, odgovarajućim tokom (**Flow**) i dokumentom **F24** (odnosno **F24Errors** za drugi konektor).
:::

## Knjiženje

U zaglavlju obrasca moguće je uneti:

- **Bankarske naknade**
- **Bankovni račun za plaćanje**.

Nakon toga moguće je pokrenuti funkciju **Knjiženje**, koja automatski generiše knjiženje:

- isplate sa bankovnog računa
- zatvaranja obaveze za PDV
- zatvaranja obaveze za porez po odbitku.

:::tip Napomena
Konta koja se koriste za automatsko knjiženje određuju se:

- za PDV u **[Parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**
- za porez po odbitku u tabeli **[Tipovi poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types)**.

Konto za porez po odbitku može se promeniti tokom postupka **[Knjiženja isplata naknada](/docs/finance-area/professional-men/accounting/payments-accounting/parameters)**.
:::

| Funkcija | Opis |
| --- | --- |
| Sačuvaj | Čuva trenutno otvoreni obrazac F24. |
| Predloži vrednosti | Preuzima podatke iz obračuna PDV-a i evidentiranih poreza po odbitku. |
| Nova stavka | Postavlja kursor na novi red za unos stavke. |
| Obriši stavku | Briše izabranu stavku iz obrasca. |