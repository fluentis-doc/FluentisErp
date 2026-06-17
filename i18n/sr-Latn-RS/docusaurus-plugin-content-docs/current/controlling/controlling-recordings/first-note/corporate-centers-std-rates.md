---
title: Troškovi radnih centara
sidebar_position: 3
---

U ovoj formi moguće je uneti fiksne troškove radnih centara (putem dugmeta **Novo**) koji nisu izračunati pomoću odnosa definisanih između rezultata modela reklasifikacije i rezultata centra troška.

Ove troškove zatim koriste nosioci troškova (posebno kriterijum raspodele *Povrat na proizvodnju po standardnoj tarifi*) za vrednovanje knjiženja i rezultata centara koji se najčešće zasnivaju na fizičkim veličinama, a ne na ekonomskim podacima.

Za definisanje fiksnih troškova potrebno je uneti:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize (npr. Stvarno stanje ili Budžet)
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) na koji se trošak odnosi (najčešće centar koji se vrednuje prema fizičkim veličinama)
- ***Šifru*** tarife
- ***Opis*** tarife

U donjoj tabeli unose se detalji tarife:

- Referentna ***godina***
- Raspon ***perioda od – do***
- ***Fiksna vrednost*** troška
- ***Varijabilna vrednost*** troška

Odnos između fiksne i varijabilne komponente odnosi se na raspodelu podataka kontrolinga na fiksne i varijabilne troškove. Ova raspodela definiše se već u kontnom planu, putem polja **Varijabilnost** i tabele **Varijabilnost centara troškova**.

:::tip DODATNE INFORMACIJE
Na osnovu procenta varijabilnosti, svako ekonomsko knjiženje preuzeto iz privremenog zatvaranja perioda deli se na fiksni i/ili varijabilni deo. Knjiženje može biti 100% fiksno, 100% varijabilno ili, na primer, 40% fiksno i 60% varijabilno. Troškovi će se zato odvojeno vrednovati kroz fiksnu i varijabilnu komponentu.
:::