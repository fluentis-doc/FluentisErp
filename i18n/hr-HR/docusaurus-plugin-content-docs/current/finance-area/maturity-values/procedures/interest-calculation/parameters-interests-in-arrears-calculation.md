---
title: Parametri za izračun zateznih kamata
sidebar_position: 3
---

U obrascu se nalazi lista zastavica/flagova za odabir tipova stavki za koje će se nastaviti s obračunom kamata, te filter polje za šifre konta/podkonta. Ispod toga se mora postaviti vrsta zadane stope koja će se primijeniti i oznake koje vode logiku izračuna:

**Izračunaj zatvorene dospjele vrijednosti za period**: postupak će provjeriti stavke koje su postale zatvorene unutar zadanog datumskog raspona i samo za njih će izračunati vrijednost kamata, dakle za djelomična plaćanja, kamata se neće računati;

**Izračunaj plaćanja perioda**: postupak će identificirati plaćanja zabilježena unutar datumskog raspona i na tim će iznosima izračunati vrijednost relativnih kamata: ova je postavka preporučena.

Ako nije unesena oznaka, izračun će procijeniti kamatu koja se odnosi na dane kašnjenja prisutne u rasponu postavljenih datuma.

**Vrsta dokumenta** i **način plaćanja**: ovo su daljnji filtri za prepoznavanje stavki na kojima treba izvršiti obračun kamata.

Omogućeno je i definiranje vrste stope koja se koristi u izračunu kamata:

- Izračunavanje samo za kupce s ugovorom;

- Izračunavanje za kupce s ugovorima, a za ostale prema stopi zadanoj u ovom obrascu;

- Izračun za sve prema prema stopi zadanoj u ovom obrascu. 

Flag **Isključi izdane račune**, već postavljena prema zadanim postavkama, omogućuje izuzimanje iz kamata stavke plaćenih računa: ova je postavka korisna, posebno za vrste stopa na koje je također postavljen izračun s popustom, budući da se zatvaranje računa kupca obično radi izravno kada se izda bankovna potvrda/zadužnica.  

Postupak izračuna započinje tipkom  **Izračun kamata** na traci izbornika. 





