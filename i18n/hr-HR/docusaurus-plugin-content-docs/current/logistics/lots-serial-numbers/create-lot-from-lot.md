---
title: "Kreiranje lota iz lota i kreiranje lota iz lota sa zamjenom artikla"
sidebar_position: 5
sidebar_label: "Kreiranje lota"
description: "Vodič za kreiranje lotova u sustavu Fluentis iz postojećeg lota ili sa zamjenom artikla."
schema: "TechArticle"
tags: ["ERP", "Fluentis", "skladište", "lotovi"]
keywords: ["kreiranje lota", "upravljanje zalihama", "Fluentis", "zamjena artikla"]
---

# Kreiranje lota iz lota i kreiranje lota iz lota sa zamjenom artikla

## Kreiranje lota iz lota

:::important Čemu služi
Postupak kreiranja lota iz lota u sustavu Fluentis važna je funkcionalnost koja omogućuje kreiranje novog lota iz postojećeg lota istog artikla. Ovaj je postupak važan za učinkovito upravljanje skladištem i pravodobno odgovaranje na potrebe proizvodnje i logistike.

Primjena ovog postupka ne samo da pojednostavljuje kretanje lotova već pomaže i u održavanju precizne sljedivosti unutar sustava, osiguravajući ispunjavanje zahtjeva kvalitete i usklađenosti s propisima.
:::

Ova forma omogućuje kreiranje novog lota istog artikla iz postojećeg lota.  
Forma se sastoji od 3 zasebne sekcije:

- **Filtriranje**: omogućuje filtriranje željenih podataka, a klikom na gumb **Traži** na *traci izbornika* podaci se prikazuju u donjoj mreži.
- **Mreža rezultata**: sadrži sve informacije o traženom lotu.
- **Podaci o novom lotu**: u ovoj se sekciji, ispod mreže rezultata, nalaze podaci o novom lotu.

### Podaci o novom lotu koji se kreira

- **Početna količina odredišnog lota**: označava početnu količinu odredišnog lota.
- **Broj pakiranja odredišnog lota**: označava broj pakiranja odredišnog lota.
- **Predložak izlaza izvornog lota**: označava predložak izlaza kojim će se izvršiti izlaz izvornog lota.
- **Predložak ulaza odredišnog lota**: označava predložak ulaza kojim će se izvršiti ulaz odredišnog lota.
- **Lokacija odredišnog lota**: označava lokaciju na koju će se zaprimiti odredišni lot.

:::note Pažnja
Skladišni predlošci koji se mogu koristiti u ovom postupku samo su oni koji imaju aktiviranu oznaku **Kreiraj lot iz lota** u tablici [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates/). Za aktiviranje ove oznake potrebno je kreirati predložak **Izlaza** s aktiviranim oznakama **Upravljanje lotovima** i **Dopuni početnu količinu**, deaktiviranom oznakom **Sastavnica** te mora imati **protustavku** tipa **Ulaz**.
:::

### Koraci za kreiranje novog lota

1. Postavite sve željene filtre.
2. Kliknite gumb **Traži** na *traci izbornika* kako biste prikazali rezultate u mreži.
3. Odaberite željeni lot.
4. Unesite podatke o novom lotu u donjem dijelu forme.
5. Pritisnite gumb **Kreiranje lota** kako biste kreirali novi lot za isti artikl.

## Kreiranje lota iz lota sa zamjenom artikla

:::important Čemu služi
Kreiranje lota iz lota sa zamjenom artikla napredni je postupak u sustavu Fluentis koji omogućuje kreiranje novog lota za drugi artikl, polazeći od izvornog lota. Ova je funkcionalnost posebno korisna u upravljanju zalihama kada je potrebno prenijeti količinu s jednog artikla na drugi, uz zadržavanje detaljne evidencije lotova.  
Ovim postupkom poduzeća mogu optimizirati skladišne tokove i povećati operativnu učinkovitost, osiguravajući pritom sljedivost i ispravno evidentiranje svih kretanja u sustavu.
:::

Ova forma omogućuje kreiranje novog lota s novim artiklom iz postojećeg lota s drugim artiklom.  
Forma se sastoji od 3 zasebne sekcije:

- **Filtriranje**: omogućuje filtriranje željenih podataka, a klikom na gumb **Traži** na *traci izbornika* podaci se prikazuju u donjoj mreži.
- **Mreža rezultata**: sadrži sve informacije o traženom lotu.
- **Podaci o novom lotu**: u ovoj se sekciji, ispod mreže rezultata, nalaze podaci o novom lotu.

### Podaci o novom lotu koji se kreira

- **Artikl odredišnog lota**: omogućuje unos klase, šifre i opisa odredišnog artikla.
- **Varijanta artikla**: omogućuje unos varijante odredišnog artikla.
- **Početna količina odredišnog lota**: označava početnu količinu odredišnog lota.
- **Broj pakiranja odredišnog lota**: označava broj pakiranja odredišnog lota.
- **Predložak izlaza izvornog lota**: označava predložak izlaza kojim će se izvršiti izlaz izvornog lota.
- **Predložak ulaza odredišnog lota**: označava predložak ulaza kojim će se izvršiti ulaz odredišnog lota.
- **Lokacija odredišnog lota**: označava lokaciju na koju će se zaprimiti odredišni lot.

:::note Pažnja
Skladišni predlošci koji se mogu koristiti u ovom postupku samo su oni koji imaju aktiviranu oznaku **Kreiraj lot iz lota** u tablici [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates/).  
Za aktiviranje ove oznake potrebno je kreirati predložak **Izlaza** s aktiviranim oznakama **Upravljanje lotovima** i **Dopuni početnu količinu**, deaktiviranom oznakom **Sastavnica** te mora imati **protustavku** tipa **Ulaz**.
:::

### Koraci za kreiranje novog lota sa zamjenom artikla

1. Postavite sve željene filtre.
2. Kliknite gumb **Traži** na *traci izbornika* kako biste prikazali rezultate u mreži.
3. Odaberite željeni lot.
4. Unesite podatke o novom lotu u donjem dijelu forme.
5. Pritisnite gumb **Kreiranje lota** kako biste kreirali novi lot za novi artikl.

## Sažetak i dodatne informacije

U ovom su dokumentu opisani postupci *Kreiranje lota iz lota* i *Kreiranje lota iz lota sa zamjenom artikla* u sustavu Fluentis ERP.

Za dodatne informacije pogledajte sljedeće vodiče:

- [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates/)
- [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common)