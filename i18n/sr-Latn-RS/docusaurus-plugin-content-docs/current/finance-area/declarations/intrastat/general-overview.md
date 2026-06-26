---
title: Uvod
sidebar_position: 1
---

Modul **Intrastat** namenjen je izradi statističkih Intrastat izveštaja. Omogućava ručno vođenje podataka, kao i automatsko preuzimanje podataka iz ulaznih i izlaznih faktura u modulima nabavke i prodaje, kao i iz računovodstvenih knjiženja.

Knjiženjem odgovarajućih faktura, uz pravilno podešavanje (konkretno, aktiviranjem **Intrastat** opcije u **šablonima knjiženja**), moguće je automatski kreirati Intrastat prijave iz računovodstvenih evidencija, kako za robu, tako i za usluge.

Osnovna podešavanja odnose se na **matične podatke** i **vrste dokumenata** u nabavci i prodaji.

**Neophodno je da dokumenti budu pravilno podešeni i da je poslovni partner u šifarniku označen kao Intrastat subjekt.**

Radi što veće automatizacije potrebno je u matičnim podacima artikala definisati nomenklaturne šifre za svaki artikl, kao i odgovarajuće faktore konverzije kako bi se automatski izračunavale vrednosti alternativnih jedinica mere. Takođe je preporučljivo da u dokumentima budu popunjeni podaci o načinu prevoza i uslovima isporuke.

Korišćenje modula podrazumeva kreiranje nove **Intrastat1** prijave (prodaja) ili **Intrastat2** prijave (nabavka). Podaci se mogu popuniti preuzimanjem iz ulaznih ili izlaznih faktura, iz računovodstvenih knjiženja ili ručnim unosom u odgovarajuće odeljke.

Nakon popunjavanja podataka moguće je odštampati obrazac ili izvršiti elektronsko slanje generisanjem odgovarajuće datoteke.

**Spisak obaveznih tabela za korišćenje modula:**

- **Početna stranica > Tabele > Administracija**
- **Početna stranica > Tabele > Opšta podešavanja** (za definisanje odgovarajućih Intrastat podešavanja)

- [Vrste Intrastat transakcija](/docs/configurations/tables/finance/nature-of-intrastat-transaction)
- [Numeracija Intrastat prijava](/docs/configurations/tables/fluentis-numerations)
- [Šifre nomenklature](/docs/configurations/tables/finance/nomenclature-codes)
- [Pariteti isporuke](/docs/configurations/tables/general-settings/carriages)
- [Načini isporuke](/docs/configurations/tables/general-settings/shipments)