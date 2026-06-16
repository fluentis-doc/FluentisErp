---
title: Uvoz Excel datoteka za vanbilansne evidencije
sidebar_position: 3
---

U meniju **Alati**, unutar grupe **Bizlink**, nalaze se opcije za **uvoz na zahtev**, uključujući i **uvoz Excel datoteka**. Među dostupnim opcijama nalazi se uvoz sa šifrom **OffBalanceRecordsForArea** (*Vanbilansna knjiženja – kontroling*), koji omogućava jednostavan uvoz vanbilansnih evidencija za određeno područje.

Ove evidencije mogu predstavljati, na primer, knjiženja naknada članovima odbora ili knjiženja koja služe za detaljnu razradu budžeta za određeni period.

Dostupna polja za unos:

- **Datum unosa**: obavezno polje, datum koji će biti dodeljen knjiženju.

- **Datum obračuna**: obavezno polje, mora biti isti kao datum unosa.

- **Broj knjiženja**: obavezno polje. Preporučuje se korišćenje većih brojeva kako bi se izbeglo preklapanje sa postojećim knjiženjima (na primer onima koja nastaju automatskim procedurama kao što su obračun amortizacije u kontrolingu ili knjiženje zaliha prilikom privremenih zatvaranja).

- **Predložak knjiženja**: obavezno polje, mora biti povezan sa centrima troškova.

- **Konto i podkonto**: obavezno polje, konto/podkonto koji se dodeljuje transakciji.

- [**Centar troška**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): obavezno polje, poslovni centar koji se dodeljuje knjiženju.

- **Tip – Interni broj – Godina – WBS broj**: opciona polja koja se koriste ukoliko je knjiženje povezano sa projektom.

- **Duguje**: obavezno polje, vrednost može biti 0.

- **Potražuje**: obavezno polje, vrednost može biti 0.

- **Od datuma obračuna**: nije obavezno, ali se preporučuje za ekonomske transakcije.

- **Do datuma obračuna**: nije obavezno, ali se preporučuje za ekonomske transakcije.

- **Organizaciona jedinica (Division)**: nije obavezno. Ako nije navedena, koristi se organizaciona jedinica definisana u parametrima uvoza.

Nakon unosa svih potrebnih podataka moguće je proveriti ispravnost unetih vrednosti pomoću funkcije **Validiraj raspon podataka**, koja služi za proveru nedostajućih ili neispravnih šifara.

Nakon uspešne validacije, uvoz se pokreće klikom na dugme **Uvezi Excel tabelu**, pri čemu će sistem zatražiti unos:

- **Organizacione jedinice**
- **Referentne valute** operacije.