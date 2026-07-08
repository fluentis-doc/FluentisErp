---
title: "Kreiranje lota iz lota i kreiranje lota iz lota sa zamenom artikla"
sidebar_position: 5
sidebar_label: "Kreiranje lota"
description: "Vodič za kreiranje lotova u sistemu Fluentis iz postojećeg lota ili sa zamenom artikla."
schema: "TechArticle"
tags: ["ERP", "Fluentis", "skladište", "lotovi"]
keywords: ["kreiranje lota", "upravljanje zalihama", "Fluentis", "zamena artikla"]
---

# Kreiranje lota iz lota i kreiranje lota iz lota sa zamenom artikla

## Kreiranje lota iz lota

:::important Čemu služi
Postupak kreiranja lota iz lota u sistemu Fluentis važna je funkcionalnost koja omogućava kreiranje novog lota iz postojećeg lota istog artikla. Ovaj postupak je važan za efikasno upravljanje skladištem i pravovremeno odgovaranje na potrebe proizvodnje i logistike.

Primena ovog postupka ne samo da pojednostavljuje kretanje lotova već pomaže i u održavanju precizne sledljivosti unutar sistema, osiguravajući ispunjavanje zahteva kvaliteta i usklađenosti sa propisima.
:::

Ova forma omogućava kreiranje novog lota istog artikla iz postojećeg lota.  
Forma se sastoji od 3 zasebna odeljka:

- **Filtriranje**: omogućava filtriranje željenih podataka, a klikom na dugme **Traži** na *traci menija* podaci se prikazuju u donjoj mreži.
- **Mreža rezultata**: sadrži sve informacije o traženom lotu.
- **Podaci o novom lotu**: u ovom odeljku, ispod mreže rezultata, nalaze se podaci o novom lotu.

### Podaci o novom lotu koji se kreira

- **Početna količina odredišnog lota**: označava početnu količinu odredišnog lota.
- **Broj pakovanja odredišnog lota**: označava broj pakovanja odredišnog lota.
- **Predložak izlaza izvornog lota**: označava predložak izlaza kojim će se izvršiti izlaz izvornog lota.
- **Predložak ulaza odredišnog lota**: označava predložak ulaza kojim će se izvršiti ulaz odredišnog lota.
- **Lokacija odredišnog lota**: označava lokaciju na koju će se primiti odredišni lot.

:::note Pažnja
Skladišni predlošci koji se mogu koristiti u ovom postupku samo su oni koji imaju aktiviranu oznaku **Kreiraj lot iz lota** u tabeli [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates/). Za aktiviranje ove oznake potrebno je kreirati predložak **Izlaza** sa aktiviranim oznakama **Upravljanje lotovima** i **Dopuni početnu količinu**, deaktiviranom oznakom **Sastavnica** i mora imati **protivstavku** tipa **Ulaz**.
:::

### Koraci za kreiranje novog lota

1. Postavite sve željene filtere.
2. Kliknite na dugme **Traži** na *traci menija* kako biste prikazali rezultate u mreži.
3. Odaberite željeni lot.
4. Unesite podatke o novom lotu u donjem delu forme.
5. Pritisnite dugme **Kreiranje lota** kako biste kreirali novi lot za isti artikal.

## Kreiranje lota iz lota sa zamenom artikla

:::important Čemu služi
Kreiranje lota iz lota sa zamenom artikla je napredni postupak u sistemu Fluentis koji omogućava kreiranje novog lota za drugi artikal, polazeći od izvornog lota. Ova funkcionalnost je posebno korisna u upravljanju zalihama kada je potrebno preneti količinu sa jednog artikla na drugi, uz zadržavanje detaljne evidencije lotova.  
Ovim postupkom preduzeća mogu optimizovati skladišne tokove i povećati operativnu efikasnost, osiguravajući pritom sledljivost i ispravno evidentiranje svih kretanja u sistemu.
:::

Ova forma omogućava kreiranje novog lota sa novim artiklom iz postojećeg lota sa drugim artiklom.  
Forma se sastoji od 3 zasebna odeljka:

- **Filtriranje**: omogućava filtriranje željenih podataka, a klikom na dugme **Traži** na *traci menija* podaci se prikazuju u donjoj mreži.
- **Mreža rezultata**: sadrži sve informacije o traženom lotu.
- **Podaci o novom lotu**: u ovom odeljku, ispod mreže rezultata, nalaze se podaci o novom lotu.

### Podaci o novom lotu koji se kreira

- **Artikal odredišnog lota**: omogućava unos klase, šifre i opisa odredišnog artikla.
- **Varijanta artikla**: omogućava unos varijante odredišnog artikla.
- **Početna količina odredišnog lota**: označava početnu količinu odredišnog lota.
- **Broj pakovanja odredišnog lota**: označava broj pakovanja odredišnog lota.
- **Predložak izlaza izvornog lota**: označava predložak izlaza kojim će se izvršiti izlaz izvornog lota.
- **Predložak ulaza odredišnog lota**: označava predložak ulaza kojim će se izvršiti ulaz odredišnog lota.
- **Lokacija odredišnog lota**: označava lokaciju na koju će se primiti odredišni lot.

:::note Pažnja
Skladišni predlošci koji se mogu koristiti u ovom postupku samo su oni koji imaju aktiviranu oznaku **Kreiraj lot iz lota** u tabeli [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates/).  
Za aktiviranje ove oznake potrebno je kreirati predložak **Izlaza** sa aktiviranim oznakama **Upravljanje lotovima** i **Dopuni početnu količinu**, deaktiviranom oznakom **Sastavnica** i mora imati **protivstavku** tipa **Ulaz**.
:::

### Koraci za kreiranje novog lota sa zamenom artikla

1. Postavite sve željene filtere.
2. Kliknite na dugme **Traži** na *traci menija* kako biste prikazali rezultate u mreži.
3. Odaberite željeni lot.
4. Unesite podatke o novom lotu u donjem delu forme.
5. Pritisnite dugme **Kreiranje lota** kako biste kreirali novi lot za novi artikal.

## Sažetak i dodatne informacije

U ovom dokumentu opisani su postupci *Kreiranje lota iz lota* i *Kreiranje lota iz lota sa zamenom artikla* u sistemu Fluentis ERP.

Za dodatne informacije pogledajte sledeće vodiče:

- [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates/)
- [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common)