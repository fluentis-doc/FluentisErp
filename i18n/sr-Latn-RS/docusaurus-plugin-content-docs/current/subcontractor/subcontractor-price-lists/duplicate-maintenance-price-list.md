---
title: Dupliranje i održavanje cenovnika podizvođača
sidebar_position: 2
---

Kroz ovu proceduru moguće je ažurirati, zatvoriti, duplirati, ponovo otvoriti ili menjati popuste postojećih cenovnika.
U obrascu su dostupni filteri pomoću kojih se može precizno pronaći cenovnik koji je potrebno obraditi. Klikom na dugme **Traži** prikazuju se artikli cenovnika prema postavljenim filterima.
Potrebno je označiti jedan ili više artikala koji će biti predmet izmene kako bi se procedura mogla izvršiti.
Pomoću dugmadi **Izmeni** i **Prikaži** na alatnoj traci moguće je otvoriti odabrani cenovnik za uređivanje ili pregled. Treba napomenuti da pregled ne dozvoljava izmene.

### Ažuriranje cenovnika

Klikom na dugme **Ažuriraj** otvara se prozor za unos podataka potrebnih za ažuriranje:

- **Datum početka važenja** i **Datum završetka važenja** moraju biti isti kao u originalnom cenovniku, u suprotnom Fluentis neće moći da izvrši ažuriranje. Ovi datumi mogu se videti direktno u redu artikla.
- **Procenat povećanja**: omogućava unos procenta povećanja koji će biti primenjen na cenu.
- **Zaokruživanja**: ovo polje zamenjuje prethodno, pa je potrebno obrisati sadržaj polja za procenat povećanja pre korišćenja zaokruživanja. Ovde se bira pravilo zaokruživanja koje će biti primenjeno na cenu. Važno je napomenuti da pravila zaokruživanja mogu sadržati i procenat povećanja, zbog čega ovo polje ostaje dostupno za uređivanje.

Nakon definisanja željenih izmena potrebno je kliknuti na **OK** kako bi se procedura izvršila.
Nakon izvršenja, cene odabranih stavki biće promenjene u skladu sa unetim parametrima.

### Zatvaranje cenovnika

Dugme **Zatvori cenovnike** omogućava dodavanje datuma završetka važenja odabranim stavkama cenovnika.
Klikom na dugme otvara se prozor u koji se unosi **Datum završetka važenja**, nakon kojeg artikl više neće biti važeći u cenovniku.

### Kopiranje cenovnika

Klikom na dugme **Kopiraj cenovnike** moguće je kreirati novi cenovnik na osnovu odabrane stavke artikla.
Prilikom pokretanja procedure potrebno je uneti sledeće obavezne podatke:
- Dobavljač
- Datum početka važenja i eventualni datum završetka važenja
- Valuta

Klikom na **OK** generiše se novi cenovnik sa unetim podacima.
Nakon kreiranja, u rezultatima pretrage pojaviće se dodatni red koji predstavlja novokreirani cenovnik.

### Upravljanje popustima

Klikom na dugme **Popusti** na alatnoj traci moguće je upravljati popustima vezanim za odabranu stavku artikla.
Opcija **Obriši prethodne popuste** uklanja sve postojeće popuste za dati artikl u cenovniku.
U tabeli je moguće uneti nove popuste koji će biti dodati postojećem cenovniku za izabrani artikl.
Za unos popusta potrebno je koristiti unapred definisane vrste popusta kako bi aplikacija mogla pravilno prepoznati vrstu popusta i pripadajuća pravila obračuna.
Potrebno je uneti:
- vrstu popusta
- vrednost popusta

### Ponovno otvaranje cenovnika

Dugme **Ponovno otvaranje cenovnika** omogućava ponovno aktiviranje prethodno zatvorenog cenovnika, odnosno cenovnika koji ima definisan datum završetka važenja.
Klikom na ovo dugme uklanja se datum završetka važenja i cenovnik ponovo postaje aktivan.

### Dodatne funkcije

Na traci menija dostupne su i dodatne funkcije:
- štampanje odabranih redova,
- kreiranje korisničkih profila za prilagođavanje prikaza prozora,
- kreiranje aktivnosti koje se mogu dodeliti zaposlenima.