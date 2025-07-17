---
title: Troškovi radnih centara
sidebar_position: 3
---

U ovoj formi moguće je unijeti fiksne troškve radnih centara (putem gumba **Novo**), koji nisu izračunati pomoću omjera definiranih između rezultata modela reklasifikacije i rezultata centra troška.

Te će troškovi zatim koristiti nositelji troškova (posebno distribucijski kriterij *Povrat na proizvodnju po standardnoj tarifi*) za vrednovanje zapisa i rezultata centara koji se tipično temelje na fizičkim veličinama, a ne na ekonomskim podacima.

Za šifriranje fiksnih troškova potrebno je unijeti:
-[***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize (npr. Konačni obračun ili Proračun) 
-[***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) a na koji se trošak odnosi (obično centar koji se vrednuje prema fizičkim veličinama)
- ***Šifru*** tarife
- ***Opis*** tarife.

U donjoj tablici zatim se unose detalji tarife:
- Referentna ***godina*** 
- Raspon ***perioda od – do*** 
- ***Fiksna vrijednost*** troška
- ***Varijabilna vrijednost*** troška

Omjer fiksne i varijabilne komponente odnosi se na raspodjelu podataka kontrolinga na fiksne i varijabilne troškove. Ova se raspodjela definira već u kontnom planu, putem polja **Varijabilnost** i tablice **Varijabilnost centara troškova**.


:::tip DODATNE INFORMACIJE
Na temelju postotka varijabilnosti, svaki ekonomski pokret preuzet iz privremenog zatvaranja perioda dijeli se na fiksni i/ili varijabilni dio. Pokret može biti 100% fiksan, 100% varijabilan, ili primjerice 40% fiksan i 60% varijabilan. Troškovi će stoga odvojeno vrednovati fiksnu i varijabilnu komponentu troška.
:::
