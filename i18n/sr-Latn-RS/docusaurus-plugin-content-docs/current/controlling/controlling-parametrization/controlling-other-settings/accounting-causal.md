---
title: Predlošci za knjiženje 
sidebar_position: 2
---

U predlošcima za knjiženje, unutar kartice *Detalji zapisa*, važno je aktivirati flag ***Centri troška*** i ***Projekti***, ako je predviđena dimenzija vezana uz projekte/naloge. Ove oznake potrebno je uključiti za sve predloške koji unose ekonomske podatke relevantne za kontroling, dok nisu potrebne za predloške vezane uz otvaranje/zatvaranje konta ili prijenos PDV-a kod prijenosa porezne obveze, budući da se one odnose isključivo na pokrete bilančnih konta.

Još jedna važna oznaka nalazi se u kartici *Parametri* i odnosi se na ravnotežu zapisa centara, pod nazivom ***Blokiraj zapis ako vrijednost centara nije jednaka računovodstvenim transakcijama***.

Također, unutar iste kartice postoji parametar *Automatsko preračunavanje centara troškova, profitnih centara i projekata*. koji definira način rada sustava ***FluentisERP***  u slučaju izmjena već spremljenih knjiženja:   
- ako je parametar aktiviran ***FluentisERP*** će automatski preračunati analitičke zapise kod svake izmjene knjigovodstvenih pokreta, primjenjujući unaprijed definirane kalkulacijske logike te brišući eventualne ručne izmjene korisnika.
- ako parametar nije aktiviran ***FluentisERP*** neće mijenjati analitiku, već će omogućiti ručno usklađivanje korisniku. Pri spremanju, čak i ako nije predviđeno obavezno poravnavanje, korisnik će primiti upozorenje o mogućim odstupanjima, ne samo u pogledu iznosa, već i usklađenosti vremenskih razdoblja relevantnih za ekonomsku kompetenciju.  

:::tip NAPOMENA 
*U poduzećima s aktiviranom oznakom Kontroling*, test poravnanja konta povezan je s flagom obaveznog poravnanja, koje se može postaviti na razini [*Dimenzije*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) poslovnih centara. U ovom slučaju, flag *Blokiraj zapis ako vrijednost centara*, nije jednaka računovodstvenim transakcijama postaje nebitna, jer će se projekti/nalozi vrednovati u analitičkom računovodstvu unutar posebne [*Dimenzije*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) namijenjene vrednovanju direktnih troškova/prihoda projekta.  
Suprotno tome, ako *društvo nema aktiviran Kontroling*, neće biti ni dimenzijske obrade niti integracije projekata u analitici. U tom slučaju, aktivacija poravnanja poslovnih centara zahtijevat će 100% raspodjelu ekonomskih pokreta na poslovne centre, dok će se poravnanje u sekciji projekata/naloga upravljati zasebnim flagom unutar predloška. 
:::
