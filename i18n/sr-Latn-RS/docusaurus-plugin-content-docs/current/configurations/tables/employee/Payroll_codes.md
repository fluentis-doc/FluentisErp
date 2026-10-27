---
title: Kodovi plaća
sidebar_position: 4
---

**#### Specifična polja**

**Šifra / Opis**: šifra i opis koji identifikuju šifru za obračun zarade.

**Intervencija**: oznaka koja se koristi u određenim izvoznim datotekama obračuna zarada za potrebe eksternih sistema koji nisu deo Fluentis-a.

**Eksterno**: ako je omogućeno, sistem proverava podešavanja tipa intervencije povezanog sa izjavom o aktivnostima. Ako je za taj tip intervencije aktivirana oznaka eksterno, ona će automatski biti postavljena na platnoj listi.

**Šifra merne jedinice**: merna jedinica koja se koristi u izvoznim datotekama obračuna zarada za eksterne sisteme.

**Redovno**: ako je omogućeno, koristi se kao podrazumevana šifra za redovne radne sate u slučaju da nisu definisana preciznija podešavanja.

**Konačne vrednosti**: ako je omogućeno, vrednost povezana sa ovom šifrom zarade biće prikazana u odeljku „Vrednosti“ u pregledu platne liste i neće biti uključena u stavke knjiženja.

**Povratak sa putovanja**: ako je omogućeno, sati putovanja uneti sa ovom šifrom sabiraju se sa redovnim satima. Ako ukupan broj sati prelazi 8, sistem automatski unosi red sa količinom 1 u stavke knjiženja, što označava jedno službeno putovanje, nezavisno od stvarnog broja prijavljenih sati putovanja. Ako opcija nije omogućena, sati putovanja evidentiraju se odvojeno, prema stvarno prijavljenim satima. Ova opcija služi za identifikaciju dana službenih putovanja u odeljku „Stavke knjiženja“ u pregledu platne liste.

**Praznik**: ako je omogućeno, koristi se za označavanje prazničnih dana u odeljku „Stavke knjiženja“ u pregledu platne liste, u skladu sa podešavanjima kalendara praznika.

**Prekovremeni rad**: ako je omogućeno, koristi se za označavanje prekovremenih sati u odeljku „Stavke knjiženja“ u pregledu platne liste, u skladu sa definisanim satnicama za zaposlenog.

**Prekovremeni rad tokom praznika i vikenda**: ako je omogućeno, koristi se za označavanje prekovremenih sati odrađenih subotom i nedeljom u odeljku „Stavke knjiženja“ u pregledu platne liste, u skladu sa važećim rasporedima rada.

**Godišnji odmor**: ako je omogućeno, koristi se za označavanje dana godišnjeg odmora u odeljku „Stavke knjiženja“ u pregledu platne liste, na osnovu kategorije aktivnosti iz prijave aktivnosti.

**Odsustvo**: ako je omogućeno, koristi se za označavanje sati odsustva (npr. zbog privatnih obaveza) u odeljku „Stavke knjiženja“ u pregledu platne liste, u skladu sa kategorijom aktivnosti iz prijave aktivnosti.

**ROL**: ako je omogućeno, koristi se za označavanje sati ROL-a u odeljku „Stavke knjiženja“ u pregledu platne liste, na osnovu prijavljenih aktivnosti.

**Smart Working**: ako je omogućeno, koristi se za označavanje dana rada na daljinu u odeljku „Stavke knjiženja“ u pregledu platne liste, u skladu sa aktivnostima označenim kao „Smartworking“. Ova opcija zamenjuje šifru zarade povezanu sa kategorijom aktivnosti.

**Ne izvozi se**: ako je omogućeno, sprečava izvoz ove šifre zarade u datoteke za eksterne sisteme koji nisu deo Fluentis-a.

**Izvozna šifra**: šifra koja se koristi u izvoznim datotekama za sisteme koji nisu deo Fluentis-a.