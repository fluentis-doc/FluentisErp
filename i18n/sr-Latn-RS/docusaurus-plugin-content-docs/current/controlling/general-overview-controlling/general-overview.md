---
title: Uvod
sidebar_position: 2.0
---

Područje kontrolinga sastoji se od niza modula koji mogu služiti različitim ciljevima: 

- Jedan od mogućih ciljeva je simulacija računovodstvene bilance kroz nekoliko automatiziranih koraka pomoću modula Privremena zatvaranja. Za to nije potrebna posebna konfiguracija u ***FluentisERP*** : Dovoljno je ući u modul i kreiratic novo privremeno
zatvaranje računa koje izračunava razne podatke preuzimanjem iz računovodstva. Zatim se dodaju različite automatske procedure, uključujući obračun razgraničenja prihoda i rashoda, amortizaciju, zalihe, ulazne fakture te eventualne dodatne ručne operacije
za dovršavanje izračuna. Na kraju, ostaje samo ispis dobivenog izračuna, uz mogućnost konsolidacije više tvrtki u jedinstveni
intercompany prikaz putem postupka *Konsolidacije*.

- Nadalje, korištenje tih podataka može se proširiti agregacijom i rekategorizacijom pomoću modula *Reklasifikacije*, gdje korisnik može iskoristiti unaprijed definirane modele putem funkcije [***Fast start***](/docs/guide/fast-start) ili izraditi vlastite [*modele*](/docs/controlling/reclassifications/create-reclassification-model) Ovdje su dostupni ispisi reklasificiranih podataka te snažna funkcija usporedbe, koja omogućuje analizu razlika između različitih memoriranih reklasificiranih podataka, uključujući one iz prethodnih godina. Korisnik samo treba uskladiti unaprijed konfigurirane modele s eventualnim prilagodbama kontnog plana u odnosu na početne [***Fast start***](/docs/guide/fast-start) postavke.
Međutim, ovdje je još uvijek sve unutar računovodstvene razine kontrolinga.

- Sljedeći korak je konfiguracija sustava Kontrole upravljanja, temeljenog na višerazinskoj i [*multidimenzionalnoj*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) strukturi [***Poslovnih centara***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers). Ovdje postoji više mogućnosti:
    - Može se ograničiti na definiranje jedne dimenzije analize s popisom centara koji su povezani isključivo s računovodstvenim podacima, koristeći isključivo prethodno spomenute module *Privremenog zatvaranja* i *Reklasifikacije*. U ovom slučaju
konfiguracija se svodi na tablice *Dimenzija*, *Centri tvrtke*, *Vrste područja* i *Područja*.
    - Alternativno, moguće je integrirati izvanračunovodstvene podatke ili podatke iz proizvodnje (*sati* i *količine*), tehničke amortizacije te definirati više dimenzija analize (po poslovnoj liniji, projektu/narudžbi). Tako se mogu dobiti stvarne tarife proizvodnih centara, račun dobiti i gubitka prema marginalnom doprinosu, ili čak full costing analiza pojedinih prodajnih projekata/narudžbi.
 Ovisno o složenosti poduzeća i željenim rezultatima, u analizu se uključuju i tablice [*nositelja troškova*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers), veze između poslovnih centara i strojeva, radnih grupa te različitih WBS struktura projekata i aktivnosti resursa.

- Na postignute rezultate moguće je nadograditi dodatne funkcionalnosti:
    - Upravljanje *proračunom* po troškovnom centru, radi usporedbe između predviđenih i stvarnih rezultata za odabrano razdoblje.
    - Simulacije *troška proizvoda*, koje su standardno povezane s troškovima temeljenima na materijalnim specifikacijama proizvoda (BOM).

Područje kontrolinga također uključuje i modul *Plana prodaje*

U ovom općem pregledu bit će prikazane logične smjernice za implementaciju ***cjelovitog*** sustava Kontrolinga.

:::tip Napomena
Nije lako definirati jedinstveni i linearni obrazovni put za ovo područje, jer unutar iste tvrtke različiti korisnici mogu koristiti različite module i opcije. Stoga, gdje je potrebno, detaljno su opisani različiti mogući ciljevi i načini korištenja dostupnih procedura.
:::