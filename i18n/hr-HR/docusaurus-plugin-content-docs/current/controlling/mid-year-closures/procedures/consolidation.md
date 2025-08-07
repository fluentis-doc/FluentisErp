---
title: Konsolidacija
sidebar_position: 1
---

Postupak omogućuje prvo povezivanje privremenih zatvaranja raznih poduzeća prisutnih u bazi podataka, kako bi se stvorio **konsolidirani račun** dobiti i gubitka za grupu koji se može ispisati ili obraditi u reklassificiranom bilanciranju, ali također stvara i knjiženje konsolidacije u kojem će se **eliminirati interkompanijska ekonomska kretanja** te **interkompanijski** dugovi i potraživanja (u intercompany konfiguraciji).

U zaglavlju obrazca moguće je filtrirati raspon datuma za zatvaranja koja se žele uzeti u obzir, ali također i postaviti, opcionalno, društvo matičnog poduzeća od interesa: na ovaj način u tablici obrazca bit će prikazana poduzeća koja nisu postavila matično poduzeće ili ona koja pripadaju odabranom matičnom poduzeću; za svako poduzeće zatim će biti prikazano posljednje
zatvaranje konta stvoreno unutar postavljenog raspona filtriranja (moguće je odabrati privremeno zatvaranje koje se razlikuje od posljednjeg predloženog). Flag 'Označen' će odrediti na koja će se poduzeća izvršiti konsolidacija, dok je u stupcu 'Tečaj' moguće postaviti specifičnu tečajnu stopu koja će se koristiti za konverziju salda koji dolaze od poduzeća s različitim valutama od matičnog poduzeća.

Ispod tablice unose se neki parametri koji će se koristiti: opis koji će biti dodijeljen konsolidaciji, predložak
knjiženja, korisnik (koji je već predložen kao aktivni korisnik) i na kraju oznaka za konverziju podkonta u one matičnog poduzeća.

Unutar tablice poduzeća, redak po redak, moguće je povezati osnovne podatke: iz tih podataka bit će moguće identificirati podkonta kupaca/dobavljača grupe (npr. u poduzeću X pogledat će se jesu li osnovni podaci povezani s poduzećem Y šifrirani kao kupac i/ili dobavljač). Iz knjiženja vezanih uz ova podkonta koje su obuhvaćene zatvaranjima, u novom knjiženju unijet će
se troškovi/prihodi s obrnuto označenim iznosima; za ista podkonta također će se provjeriti otvorene stavke, u trenutku konsolidacije, i saldi će se obrisati i od njih.

:::tip NAPOMENA
U kontnom planu poduzeća koja u tablici imaju matično poduzeće, vidljiva su polja za dodjeljivanje konta/podkonta matičnog poduzeća.
:::

## Postupak

:::important[]
Postupak korak po korak za aktivaciju i izvršenje (pretpostavka da su dva poduzeća)

- U tablic [**poduzeća**](/docs/configurations/tables/general-settings/company) svake od tvrtki koje su u pitanju treba ispuniti polje ***Šifrarnik*** kako bi se povezali s kontaktom koji će označiti samo to poduzeće u konsolidaciji, na primjer, ako se
poduzeće zove Alfa, u njegovoj tablici poduzeća povezujemo kontakt (koji je prethodno stvoren) koji se zove npr. "Alfa d.o.o.". 
- U kontnom planu za svaku od poduzeća bit će stvoren podkonto (putem upravljanja **računovodstvenim podacima** osnovnih podataka) tipa kupac ili dobavljač druge tvrtke u grupi i bit će registrirane međusobne transakcije, na primjer, kupnja od strane
poduzeća 1 i prodaja od strane poduzeća 2 (svako s vlastite točke gledišta). 
- Svaka od poduzeća izvodi privremeno zatvaranje za isti period.
- U postupku *Konsolidacija* odaberu se dva zatvaranja tih dvaju poduzeća za koja će se generirati ispravci u bilješkama za
konsolidaciju koje neutraliziraju troškove i prihode, te međusobna potraživanja i dugove, dok će se kretanja prema vanjskim subjektima agregirati.
:::

## Prethodni

Na kartici Prethodni moguće je izbrisati izvršene postupke konsolidacije.