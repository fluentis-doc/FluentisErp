---
title: Grupe ravnoteže
sidebar_position: 6
---

Formu možete pronaći na putanji: **Tablice > Kontroling > Analitičko knjigovodstvo > Grupe ravnoteže**

:::tip Napomena
Ova tablica je isključivo za upotrebu tvrtki koje su postavile *Kontroling*
:::

Unutar ove tablice moguće je kodirati grupiranja računa koja su korisna za upravljanje izvještavanjem specifičnim za kcontroling.
Neki računi se u početku ne koriste izravno u kontrolingu, već samo neizravno i naknadno: grupe usklađenja služe za identificiranje logičkih grupa kojima se dodjeljuju pojedini troškovi za usklađenja koja ćemo provoditi tijekom godine ili tek na kraju poslovne godine, kako bi se mogli prikladno grupirati u obrascu **Kontrolne vrijednosti** i provjeriti njihova usklađenost s knjigovodstvom na kraju razdoblja.

#### Specifična polja: 
- **ŠIFRA**
- **OPIS**
- **VRSTA SALDA**: ovo je od ključne važnosti za podračune početnih/završnih zaliha, za koje je obavezno definirati dvije specifične kategorije.

:::tip Napomena
Posebno, procedura **Zaliha Računovodstva** za Kontroling unosi u izvanračunske zapise područja početne i završne zalihe za svaki pojedini period (mjesec) koji se obrađuje tijekom godine. Kada se potom u modulu Izvještavanja zatraže iznosi početnih i završnih zaliha za prvo polugodište godine YYYY, **FluentisERP** **mora** znati za koje račune čitati samo podatke početnog razdoblja u siječnju, a za koje samo podatke završnog razdoblja u lipnju, inače bi se dobile sume 6 mjeseci početnih i 6 mjeseci završnih zaliha, što bi potpuno kompromitiralo obradu!
:::