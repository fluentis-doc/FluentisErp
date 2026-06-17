---
title: Grupe ravnoteže
sidebar_position: 12
---

Obrazac se nalazi na putanji: **Tabele > Controlling > Analitičko računovodstvo > Grupe ravnoteže**.

:::tip NAPOMENA
Ova tabela namijenjena je isključivo preduzećima koja imaju aktiviran *controlling*.
:::

Unutar ove tabele moguće je definisati grupisanja konta koja su korisna za upravljanje izvještavanjem specifičnim za controlling. Neka konta glavne knjige ne koriste se direktno u controllingu, već samo indirektno i naknadno. Grupe usklađenja služe za identifikaciju logičkih grupa kojima se pojedini troškovi dodjeljuju radi usklađenja koje će se provoditi tokom godine ili na kraju obračunskog perioda, kako bi se na odgovarajući način grupisali u obrascu **Kontrolne vrijednosti** i provjerila njihova usklađenost sa računovodstvom na kraju perioda.

[**Specifična polja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/adjustment-groups)

- **ŠIFRA**
- **OPIS**
- **TIP SALDA**: Ovo polje je od ključnog značaja za konta početnih i završnih zaliha, za koja je obavezno definisati dvije posebne kategorije.

:::tip NAPOMENA
Konkretno, **procedura knjiženja** zaliha za potrebe controllinga evidentira, u vanbilansnim zapisima sistema, početne i završne zalihe za svaki pojedinačni obračunski period (mjesec) koji se obrađuje tokom godine.

Kada se zatim u modulu za izvještavanje zatraže iznosi početnih i završnih zaliha za prvo polugodište godine YYYY, **Fluentis ERP mora** znati za koja konta treba uzeti samo podatak o početnom stanju iz januara, a za koja samo završno stanje iz juna.

U suprotnom bi se sabrale zalihe za svih šest mjeseci, i početne i završne, čime bi se potpuno iskrivili rezultati obrade podataka.
:::