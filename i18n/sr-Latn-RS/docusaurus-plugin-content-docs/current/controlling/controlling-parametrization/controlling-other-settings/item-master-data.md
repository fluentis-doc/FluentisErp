---
title: Šifarnik artikala
sidebar_position: 5
---

Unutar artikla, na kartici **ADMINISTRACIJA**, postoji mogućnost dodjele [***CENTARA TROŠKOVA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).

Preduzeća koja **nemaju** aktiviran controlling imaće dostupno samo jedno polje za povezivanje sa jednim centrom, dok će za ona sa **aktiviranim** controllingom biti dostupna tabela u kojoj je moguće dodijeliti više centara, čak i različitih dimenzija, replicirajući logiku već opisanu u *Kontnom planu* (što znači da je moguće ostaviti prazno polje za centar i aktivirati samo određenu dimenziju za dodjelu).

:::tip NAPOMENA
Profitni centar je vidljiv, ali se u preduzećima sa aktiviranim *controllingom* preporučuje zamjena profitnih centara posebnom dimenzijom koja će se koristiti za dodjelu unutar centara preduzeća.
:::

Za postupak ***Knjiženja zaliha*** unutar simulacija bilansa u modulu ***Privremeno zatvaranje***, ključno je svakom artiklu (koji je relevantan za vrednovanje zaliha) dodijeliti odgovarajuću ***Fiskalnu kategoriju***. Na osnovu te tabele ***Fluentis ERP*** preuzima odgovarajuća podkonta koja će se koristiti za vrednovanje početnih i završnih zaliha.