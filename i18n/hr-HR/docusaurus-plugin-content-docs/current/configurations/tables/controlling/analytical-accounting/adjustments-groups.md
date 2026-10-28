---
title: Grupe ravnoteža
sidebar_position: 6
---

Obrazac se nalazi na putanji: **Tablice > Kontroling > Analitičko knjigovodstvo > Grupe ravnoteža**

:::tip Napomena
Ova je tablica namijenjena isključivo tvrtkama koje koriste modul *Kontroling*.
:::

U ovoj je tablici moguće definirati grupe konta koje služe za upravljanje izvještajima specifičnima za kontroling.

Neka se konta ne koriste izravno u kontrolingu, već samo neizravno i naknadno. Grupe ravnoteža služe za definiranje logičkih grupa kojima se dodjeljuju pojedinačni troškovi za ravnoteža koja se provode tijekom godine ili tek na kraju poslovne godine. Na taj se način troškovi mogu odgovarajuće grupirati u obrascu **Kontrolne vrijednosti** te se na kraju razdoblja može provjeriti njihova usklađenost s računovodstvenim podacima.

#### Specifična polja

- **ŠIFRA**
- **OPIS**
- **VRSTA SALDA**: ovo je polje posebno važno za analitička konta početnih i završnih zaliha, za koja je obvezno definirati dvije zasebne kategorije.

:::tip Napomena
Postupak **Knjiženje zaliha** u modulu Kontroling evidentira početne i završne zalihe za svaki pojedini obrađivani mjesec u godini u izvanbilančnim knjiženjima odgovarajućeg područja.

Kada se u modulu Izvještavanje zatraže iznosi početnih i završnih zaliha za prvo polugodište godine YYYY, **FluentisERP** mora znati za koja konta treba dohvatiti samo podatke početnog razdoblja, odnosno siječnja, a za koja samo podatke završnog razdoblja, odnosno lipnja. U suprotnom bi se zbrajali iznosi početnih zaliha za svih šest mjeseci i završnih zaliha za svih šest mjeseci, čime bi se potpuno narušio rezultat obrade!
::: 