---
title: Predlošci za knjiženje
sidebar_position: 2
---

U predlošcima za knjiženje, unutar kartice *Detalji zapisa*, važno je aktivirati opcije ***Centri troškova*** i ***Projekti***, ukoliko je predviđena dimenzija povezana sa projektima/nalozima. Ove opcije potrebno je uključiti za sve predloške koji unose ekonomske podatke relevantne za controlling, dok nisu potrebne za predloške vezane za otvaranje/zatvaranje konta ili prenos PDV-a kod prenosa poreske obaveze, jer se odnose isključivo na kretanja bilansnih konta.

Još jedna važna opcija nalazi se u kartici *Parametri* i odnosi se na usklađenost zapisa centara, pod nazivom ***Blokiraj zapis ako vrijednost centara nije jednaka računovodstvenim transakcijama***.

Takođe, unutar iste kartice postoji parametar *Automatski preračun centara troškova, profitnih centara i projekata*, koji definiše način rada sistema ***Fluentis ERP*** u slučaju izmjena već sačuvanih knjiženja:

- ako je parametar aktiviran, ***Fluentis ERP*** će automatski preračunati analitičke zapise pri svakoj izmjeni knjigovodstvenih kretanja, primjenjujući unaprijed definisane logike obračuna i brišući eventualne ručne izmjene korisnika.
- ako parametar nije aktiviran, ***Fluentis ERP*** neće mijenjati analitiku, već će omogućiti korisniku ručno usklađivanje. Prilikom snimanja, čak i kada nije predviđeno obavezno usklađivanje, korisnik će dobiti upozorenje o mogućim odstupanjima, ne samo u pogledu iznosa već i usklađenosti vremenskih perioda relevantnih za ekonomsku pripadnost.

:::tip NAPOMENA
*U preduzećima sa aktiviranom opcijom Controlling*, provjera usklađenosti konta povezana je sa opcijom obaveznog usklađivanja koja se može postaviti na nivou [*Dimenzije*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) poslovnih centara. U tom slučaju opcija *Blokiraj zapis ako vrijednost centara nije jednaka računovodstvenim transakcijama* postaje nebitna, jer će se projekti/nalozi valorizovati u analitičkom računovodstvu unutar posebne [*Dimenzije*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) namijenjene evidentiranju direktnih troškova/prihoda projekta.

Suprotno tome, ako *preduzeće nema aktiviran Controlling*, neće postojati dimenzionalna obrada niti integracija projekata u analitici. U tom slučaju aktiviranje usklađivanja poslovnih centara zahtijeva 100% raspodjelu ekonomskih kretanja na poslovne centre, dok će se usklađivanje u sekciji projekata/naloga upravljati posebnom opcijom unutar predloška.
:::