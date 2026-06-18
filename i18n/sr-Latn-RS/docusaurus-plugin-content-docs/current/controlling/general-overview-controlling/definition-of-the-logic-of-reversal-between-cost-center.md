---
title: Definicija nosilaca troškova (Cost Driver)
sidebar_position: 2.3
---

![](/img/it-it/controlling/definition-logic.png)

Treći korak, nakon definisanja [***poslovnih centara***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) i njihovog povezivanja sa kontnim planom (ili, šire posmatrano, sa različitim evidencijama dostupnim u sistemu), jeste analiza i definisanje odnosa između proizvodnih/pomoćnih i opštih centara, kao i određivanje logičkog redosleda njihove primene kroz kaskadni model prenosa troškova.

Da bi bilo moguće definisati [***nosioce troškova (Cost Driver)***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers), najpre je potrebno definisati analitička [***područja***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) (i odgovarajuće [***Tipove područja***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)) koja će se koristiti u kontrolingu.

Obavezno je prvo kreirati Tip i područje *Skup pravila*, koje će sadržati sva standardna pravila prenosa između centara, a zatim i Tip i područje *Stvarni podaci*, koje će se popunjavati podacima na kraju perioda iz računovodstvenih vrednosti ili iz količina (*radni sati*, *mašinski sati*, kao i *proizvedene količine*) iz proizvodnje ili projekata.

Takođe je moguće definisati područje *Budžet*, kao i druga alternativna područja koja se mogu koristiti za testiranje različitih pravila raspodele u odnosu na zvanična pravila definisana u području *Skup pravila*.

:::tip NAPOMENA
Potreba za definisanjem *nosilaca troškova* usko je povezana sa korišćenjem upravljačkog računovodstva u kontrolingu.

Postoji pojednostavljena verzija nosilaca troškova za prenos između centara, sa jednim nivoom raspodele, fiksnim godišnjim procentom i bez povezivanja sa *područjima*, koja je dostupna i preduzećima bez aktiviranog kontrolinga.

Međutim, korišćenje pune verzije omogućava postizanje istog rezultata uz minimalan dodatni napor, uz prednost da ostavlja prostor za postepeno povećavanje složenosti modela analize.
:::

Jednostavan primer može pomoći u razumevanju logike definisanja ***nosilaca troškova***.

Pretpostavimo da je preduzeće definisalo dva proizvodna centra — *Centar za struganje* i *Centar za zavarivanje* — kao i jedan pomoćni centar — *Centar za održavanje*. Cilj je obračun satnice troškova za proizvodne centre, uključujući raspodelu troškova pomoćnog centra.

Pomoćni centar nosi direktne troškove, kao što su troškovi zaposlenih koji rade u njemu, ali i deo opštih troškova, na primer zakup hale u kojoj se nalaze svi centri. Satnice proizvodnih centara zatim se koriste za vrednovanje troškova na projektima ili proizvodnim nalozima.

U ovom slučaju polazna tačka je trošak zakupa, koji se računovodstveno knjiži 100% na generički virtuelni centar. Taj trošak se zatim povezuje sa nosiocem troškova (ciklus obračuna 1), kako bi se raspodelio na:

- Centar za struganje
- Centar za zavarivanje
- Centar za održavanje

Raspodela se može vršiti, na primer, prema kvadratnim metrima koje zauzima svaki centar, koristeći podatke iz ***evidencije fizičkih kretanja u kontrolingu***.

Nakon toga, Centar za održavanje, koji je već opterećen direktnim troškovima (npr. zaradama zaposlenih) i indirektnim troškovima zakupa, dalje se raspodeljuje putem drugog nosioca troškova (ciklus obračuna 2) na Centar za struganje i Centar za zavarivanje.

Kriterijum raspodele može biti broj mašinskih sati evidentiranih tokom proizvodnje, pri čemu se centri povezuju sa odgovarajućim mašinama.

Na kraju, za Centar za struganje i Centar za zavarivanje, na koje su preneti i direktni i indirektni troškovi, izračunava se satnica troška za obračunski period:

> Ukupan trošak centra ÷ Ukupan broj proizvodnih sati

Dobijeni trošak po satu zatim se, putem trećeg nosioca troškova (ciklus obračuna 3), raspoređuje na sate utrošene na pojedinačnim projektima ili proizvodnim nalozima tokom posmatranog perioda.

Što je struktura centara složenija i što je veći broj analitičkih [***dimenzija***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) koje je potrebno pratiti, to postaje značajnije pravilno definisanje nosilaca troškova i redosleda njihovih obračunskih ciklusa.