---
title: Uvoz osnovnih sredstava
sidebar_position: 2
---

Excel datoteka (šablon) za uvoz osnovnih sredstava u Administrativni modul omogućava popunjavanje kartica osnovnih sredstava na osnovu kategorija osnovnih sredstava koje već moraju postojati u bazi podataka.

**Šifra kategorije:** mora već postojati u bazi podataka i biće korišćena u uvezenoj kartici osnovnih sredstava.

**Predšifra:** opciono, koristi se samo ako je aktivirano *predšifriranje*, unosom *predšifre* koja treba da se koristi u numerisanju.

**Broj sredstva:** koristite slobodan broj.

**Centar troška:** opciono, koristi se za dodelu centra troška na kartici osnovnih sredstava radi kasnijeg prenosa u fazi amortizacije.

**Datum nabavke:** obavezno, predstavlja datum učitavanja istorijskih troškova.

**Broj dokumenta / Datum nabavne fakture:** opciono, korisno za navođenje reference na ulaznu fakturu.

**Dobavljač:** opciono, koristi se za popunjavanje polja dobavljača sredstva na kartici osnovnih sredstava. Unesite naziv dobavljača iz šifarnika dobavljača.

**Ukupna vrednost sredstva:** predstavlja istorijski trošak osnovnog sredstva učitan sa datumom navedenim u koloni Datum nabavke.

**Ukupna amortizacija:** predstavlja ukupan iznos akumulirane amortizacije u trenutku učitavanja/uvoza kartice osnovnih sredstava. Važno je napomenuti da će ovaj iznos biti učitan na način predviđen za prethodni prenos osnovnih sredstava (popunjavanjem najmanje jednog reda amortizacije), pa će se koristiti podatak naveden u sledećoj koloni **Godina**.

**Procenat amortizacije:** koristi se ako se želi učitati određeni procenat amortizacije za pojedinačno osnovno sredstvo. Ako polje nije popunjeno, odgovarajuće polje ostaće prazno, a naredne amortizacije obračunavaće se prema procentu koji pripada odgovarajućoj kategoriji.