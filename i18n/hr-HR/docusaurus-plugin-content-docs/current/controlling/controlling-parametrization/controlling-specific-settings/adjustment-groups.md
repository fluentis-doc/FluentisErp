---
title: Grupe ravnoteže
sidebar_position: 12
---

Obrazac se nalazi na putanji: **Tablice > Kontroling > Analitičko računovodstvo > Grupe ravnoteže.**

:::tip NAPOMENA 
Ova tablica je za isključivu upotrebu tvrtki koje su postavile *kontrolinga*.   
:::

Unutar ove tablice moguće je kodirati grupiranja računa koja su korisna za upravljanje izvještavanjem specifičnim za kontroling. Neki konti glavne knjige ne koriste se izravno od strane kontrolinga, nego samo neizravno i naknadno. Grupe za usklađivanje služe stoga za identificiranje logičkih skupina kojima se pojedini troškovi dodjeljuju radi usklađivanja koje ćemo provoditi unutar godine ili tek na kraju obračunskog razdoblja, kako bismo ih prikladno grupirali u obrascu **Kontrolnih vrijednosti** i provjerili njihovu usklađenost s računovodstvom na kraju razdoblja.

### Specifična polja

- **ŠIFRA**
- **OPIS**
- **TIP SALDA**: Ovo je od temeljne važnosti za podračune početnih i završnih zaliha, za koje je obvezno definirati dvije specifične kategorije.

:::tip NAPOMENA 
Konkretno, **postupak knjiženja** zaliha za potrebe kontrolinga evidentira, u izvanknjižnim zapisima sustava, početne i završne zalihe za svaki pojedini obračunski period (mjesec) koji se obrađuje tijekom godine. Kada se zatim u modulu za izvještavanje zatraže iznosi početnih i završnih zaliha za prvo polugodište godine YYYY, **FluentisERP mora** znati za koje račune treba uzeti samo podatak o početnom stanju iz siječnja, a za koje samo završno stanje iz lipnja. U suprotnom bi se zbrojile zalihe za svih šest mjeseci, i početne i završne, čime bi se potpuno iskrivila obrada podataka!  
:::