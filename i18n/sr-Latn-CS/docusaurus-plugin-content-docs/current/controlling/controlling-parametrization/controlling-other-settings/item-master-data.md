---
title: Šifarnik artikala
sidebar_position: 5
--- 

Unutar artikla, u kartici **ADMINISTRACIJA**, postoji mogućnost dodjele [***CENTARA TROŠKA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).

Poduzeća koja **nemaju** aktiviran kontroling imat će dostupno samo jedno polje za povezivanje s jednim centrom, dok će se za ona s **aktiviranim** kontrolingom omogućiti tablica u kojoj se može dodijeliti više centara, čak i različitih dimenzija, replicirajući logiku već opisanu u *Kontnom planu* (što znači da se može ostaviti prazno polje za centar i aktivirati samo određena dimenzija za dodjelu).

:::tip NAPOMENA
Centar profita je vidljiv, ali u poduzećima s aktiviranim *kontrolingom* preporučuje se zamjena centara profita specifičnom dimenzijom koja će se koristiti za dodjelu u centrima poduzeća.
:::

Za postupak ***Knjiženja zaliha*** unutar simulacija bilance u modulu ***Privremeno zatvaranje***, ključno je svakom artiklu (koji je relevantan za vrednovanje skladišta) dodijeliti odgovarajuću ***Fiskalnu kategoriju***. Na temelju te tablice ***FluentisERP*** preuzima odgovarajuća podkonta koji će se koristiti za vrednovanje početnih i završnih zaliha. 