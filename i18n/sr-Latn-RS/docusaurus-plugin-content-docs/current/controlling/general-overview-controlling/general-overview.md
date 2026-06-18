---
title: Uvod
sidebar_position: 2.0
---

Područje kontrolinga sastoji se od niza modula koji mogu služiti različitim ciljevima.

- Jedan od mogućih ciljeva jeste simulacija finansijskih izveštaja kroz nekoliko automatizovanih koraka korišćenjem modula *Privremena zatvaranja*. Za ovu funkcionalnost nije potrebna posebna konfiguracija u ***FluentisERP-u***. Dovoljno je ući u modul i kreirati novo privremeno zatvaranje konta koje obračunava različite podatke preuzete iz računovodstva. Nakon toga se dodaju različite automatske procedure, uključujući obračun vremenskih razgraničenja, amortizacije, zaliha, ulaznih faktura, kao i eventualne dodatne ručne operacije potrebne za završetak obračuna. Na kraju ostaje samo štampanje dobijenih rezultata, uz mogućnost konsolidacije više preduzeća u jedinstven *intercompany* prikaz korišćenjem procedure *Konsolidacija*.

- Korišćenje ovih podataka može se dodatno proširiti agregiranjem i reklasifikacijom kroz modul *Reklasifikacije*, gde korisnik može koristiti unapred definisane modele dostupne kroz funkciju [***Fast Start***](/docs/guide/fast-start) ili kreirati sopstvene [*modele*](/docs/controlling/reclassifications/create-reclassification-model). U okviru ovog modula dostupni su izveštaji sa reklasifikovanim podacima, kao i moćna funkcija poređenja koja omogućava analizu razlika između različitih sačuvanih reklasifikacija, uključujući i podatke iz prethodnih godina. Korisnik treba samo da uskladi unapred konfigurisane modele sa eventualnim prilagođavanjima kontnog plana u odnosu na početne [***Fast Start***](/docs/guide/fast-start) postavke.

Međutim, do ove tačke sve aktivnosti ostaju na nivou računovodstvenog kontrolinga.

- Sledeći korak predstavlja konfiguracija sistema upravljačkog kontrolinga zasnovanog na višeslojnoj i [*multidimenzionalnoj*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) strukturi [***poslovnih centara***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).

Ovde postoje različite mogućnosti:

    - Može se ostati na definisanju jedne dimenzije analize sa listom centara povezanih isključivo sa računovodstvenim podacima, koristeći samo prethodno pomenute module *Privremenih zatvaranja* i *Reklasifikacija*. U tom slučaju konfiguracija se svodi na tabele *Dimenzije*, *Poslovni centri*, *Tipovi područja* i *Područja*.

    - Alternativno, moguće je integrisati vanračunovodstvene podatke ili podatke iz proizvodnje (*radne sate*, *mašinske sate* i *količine*), tehničku amortizaciju, kao i definisati više dimenzija analize (po poslovnim linijama, projektima ili nalozima). Na taj način moguće je dobiti stvarne tarife proizvodnih centara, račun dobiti i gubitka prema marginalnom doprinosu ili čak *full costing* analizu pojedinačnih prodajnih projekata i naloga. U zavisnosti od složenosti preduzeća i željenih rezultata, u analizu se uključuju i tabele [*nosilaca troškova*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers), veze između poslovnih centara i mašina, radnih grupa, kao i različitih WBS struktura projekata i aktivnosti resursa.

- Na ostvarene rezultate moguće je nadograditi dodatne funkcionalnosti:

    - Upravljanje *budžetom* po centru troška, radi poređenja planiranih i ostvarenih rezultata za određeni period.

    - Simulacije *troškova proizvoda*, koje su standardno povezane sa troškovima definisanim kroz sastavnice proizvoda (BOM).

Područje kontrolinga obuhvata i modul *Plana prodaje*.

U ovom opštem pregledu biće predstavljene logičke smernice za implementaciju ***kompletnog*** sistema kontrolinga.

:::tip Napomena
Nije jednostavno definisati jedinstven i linearan put obuke za ovu oblast, jer različiti korisnici unutar iste kompanije mogu koristiti različite module i funkcionalnosti. Zbog toga su, gde god je potrebno, detaljno opisani različiti ciljevi i načini korišćenja dostupnih procedura.
:::