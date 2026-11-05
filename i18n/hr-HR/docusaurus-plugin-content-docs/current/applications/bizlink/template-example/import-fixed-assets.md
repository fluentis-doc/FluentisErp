---
title: Uvoz osnovnih sredstava
sidebar_position: 2
---


Excel datoteka (predložak) za uvoz osnovnih sredstava u Administrativnom modulu omogućuje popunjavanje kartica osnovnih sredstava na temelju kategorija osnovnih sredstava koje već moraju biti prisutne u bazi podataka.

**Šifra Kategorije:** mora već postojati u bazi podataka i bit će korišten u uvezenoj kartici osnovnih sredstava;

**Predšifra:** neobavezno, upravljati samo ako je aktiviran *predkod* upisujući *predkod* koji treba koristiti u numeriranju;

**Broj sredstva:** koristite slobodan broj;

**Troškovni centar:** neobavezno, koristi se za dodjelu centra troška na kartici osnovnih sredstava za kasnije kretanje u fazi amortizacije;

**Datum nabave:** obavezno, datum je učitavanja povijesnih troškova;

**Broj dokumenta / Datum računa o nabavi:** neobavezno, korisno za navođenje reference na ulaznom računu;

**Dobavljač:** neobavezno, koristi se za popunjavanje polja dobavljača dobra na kartici osnovnih sredstava, ispuniti s nazivom dobavljača u anketi dobavljača;

**Ukupna vrijednost sredstva:** to je povijesni trošak osnovnih sredstava učitan s datumom u stupcu Datum nabave;

**Ukupna amortizacija:** to je ukupni iznos akumulirane amortizacije u trenutku učitavanja / uvoza kartice osnovnih sredstava. Važno je napomenuti da će se ovaj iznos učitati prema očekivanom za prethodni prijenos osnovnih sredstava (ispunjavajući barem jedan redak amortizacije) i stoga će se koristiti podatak prisutan u sljedećem stupcu **Godina**.

**Postotak amortizacije:** koristi se u slučaju da se želi učitati određeni postotak amortizacije za određeno osnovno sredstavo, ako nije popunjeno, ništa neće biti upisano u odgovarajuće polje, a sljedeće amortizacije bit će izvršene prema postotku pripadajuće kategorije.