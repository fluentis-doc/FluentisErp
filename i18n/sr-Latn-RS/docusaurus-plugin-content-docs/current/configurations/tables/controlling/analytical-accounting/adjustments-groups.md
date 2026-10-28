---
title: Grupe ravnoteža
sidebar_position: 6
---

Obrazac se nalazi na putanji: **Tabele > Kontroling > Analitičko knjigovodstvo > Grupe ravnoteža**

:::tip Napomena
Ova tabela namenjena je isključivo preduzećima koja koriste modul *Kontroling*.
:::

U ovoj tabeli moguće je definisati grupe konta koje služe za upravljanje izveštajima specifičnim za kontroling.

Neka konta ne koriste se direktno u kontrolingu, već samo indirektno i naknadno. Grupe ravnoteža služe za definisanje logičkih grupa kojima se dodeljuju pojedinačni troškovi za ravnoteže koje se sprovode tokom godine ili tek na kraju poslovne godine. Na taj način troškovi se mogu odgovarajuće grupisati u obrascu **Kontrolne vrednosti**, a na kraju perioda može se proveriti njihova usklađenost sa računovodstvenim podacima.

#### Specifična polja

- **ŠIFRA**
- **OPIS**
- **VRSTA SALDA**: ovo polje je posebno važno za analitička konta početnih i završnih zaliha, za koja je obavezno definisati dve zasebne kategorije.

:::tip Napomena
Postupak **Knjiženje zaliha** u modulu Kontroling evidentira početne i završne zalihe za svaki pojedinačni mesec u godini koji se obrađuje, u vanbilansnim knjiženjima odgovarajućeg područja.

Kada se u modulu Izveštavanje zatraže iznosi početnih i završnih zaliha za prvo polugodište godine YYYY, **FluentisERP** mora znati za koja konta treba da preuzme samo podatke početnog perioda, odnosno januara, a za koja samo podatke završnog perioda, odnosno juna. U suprotnom bi se sabirali iznosi početnih zaliha za svih šest meseci i završnih zaliha za svih šest meseci, čime bi se potpuno narušio rezultat obrade!
::: 