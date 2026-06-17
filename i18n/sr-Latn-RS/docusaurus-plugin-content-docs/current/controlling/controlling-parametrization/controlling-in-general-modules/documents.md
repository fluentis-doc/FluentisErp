---
title: Dokumenti nabavke i prodaje
sidebar_position: 20
---

Unutar različitih poslovnih dokumenata dostupna su, u osnovi, dva elementa od interesa za valorizaciju u *Controllingu*: veze sa *Projektima* i detalji valorizacije kartice *Analitika* za svaki evidentirani artikal.

Što se tiče *Projekata*, u zaglavlju dokumenta moguće je povezati referentni projekat koji će se koristiti za automatsku valorizaciju svih artikala unutar istog dokumenta. Ako se referenca u zaglavlju promeni nakon što su artikli već dodati, ***Fluentis ERP*** će zatražiti potvrdu za zamenu reference u svim detaljima. Takođe je omogućena ručna izmena projektne reference na pojedinačnoj stavci artikla putem posebnog polja za povezivanje.

Što se tiče kartice *Analitika*, u delu ispod artikala omogućena je slobodna raspodela vrednosti stavke na više centara preduzeća. ***Fluentis ERP*** automatski dodeljuje podatke centrima prema prioritetnim pravilima i dostupnim konfiguracijama, ali korisnik uvek može izvršiti ručne izmene. Ako je u preduzeću aktiviran *Controlling*, ova analitička kartica ima iste karakteristike višedimenzionalnog i projektnog upravljanja kao i analitička kartica knjigovodstvenih evidencija. Pošto dokument i stavke artikala već mogu biti povezani sa *Projektom*, analitička sekcija automatski valorizuje odgovarajuću dimenziju *Projekti* unutar centara preduzeća.

:::tip NAPOMENA
Pošto analitička kartica predstavlja izvor podataka za valorizaciju dimenzije *Projekti* i ujedno je potpuno prilagodljiva, čak i kada je stavka artikla povezana sa jednim *Projektom*, korisnik može unutar analitike raspodeliti vrednost na više *Projekata* bez potrebe za dupliranjem stavki artikala u dokumentu.
:::