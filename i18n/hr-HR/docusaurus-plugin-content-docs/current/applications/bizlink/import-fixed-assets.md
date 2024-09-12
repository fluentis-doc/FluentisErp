---
title: Uvoz imovine
sidebar_position: 2
---


Excel datoteka (predložak) za uvoz imovine u Administrativnom modulu omogućuje popunjavanje kartica imovine na temelju kategorija imovine koje već moraju biti prisutne u bazi podataka.

**Šifra Kategorije:** mora već postojati u bazi podataka i bit će korišten u uvezenoj kartici imovine;

**Predšifra:** neobavezno, upravljati samo ako je aktiviran prekod upisujući prekod koji treba koristiti u numeriranju;

**Broj sredstva:** koristite slobodan broj;

**Troškovni centar:** neobavezno, koristi se za dodjelu troškovnog centra na kartici imovine za kasnije kretanje u fazi amortizacije;

**Datum nabave:** obavezno, datum je učitavanja povijesnih troškova;

**Broj dokumenta / Datum računa o nabavi:** neobavezno, korisno za navođenje reference na račun o kupovini;

**Dobavljač kupnje:** neobavezno, koristi se za popunjavanje polja dobavljača dobra na kartici imovine, ispuniti s nazivom dobavljača u anketi dobavljača;

**Ukupna vrijednost sredstva:** to je povijesni trošak imovine učitan s datumom u stupcu Datum nabave;

**Ukupna amortizacija:** to je ukupni iznos akumulirane amortizacije u trenutku učitavanja / uvoza kartice imovine. Važno je napomenuti da će se ovaj iznos učitati prema očekivanom za prethodni prijenos imovine (ispunjavajući barem jedan redak amortizacije) i stoga će se koristiti podatak prisutan u sljedećem stupcu **Godina**.

**Postotak amortizacije:** koristi se u slučaju da se želi učitati određeni postotak amortizacije za određenu imovinu, ako nije popunjeno, ništa neće biti upisano u odgovarajuće polje, a sljedeće amortizacije bit će izvršene prema postotku pripadajuće kategorije.