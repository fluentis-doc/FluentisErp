---
title: Kopiranje i održavanje nabavnih cenovnika
sidebar_position: 3
---

Ova procedura omogućava ažuriranje cenovnika dobavljača.

### Dostupni filteri

Rezultate je moguće filtrirati prema: *Datumu početka/kraja važenja*, *Valuti*, *Artiklu*, *Barkodu* artikla ili samo prema artiklima koji su *prometovani*, odnosno povezani sa dokumentima od određenog datuma nadalje.

Ako je zadat filter *Datum početka važenja*, aplikacija prikazuje samo artikle iz cenovnika koji važe na uneti datum. U suprotnom, prikazaće se svi artikli, uključujući i one iz cenovnika koji više nisu važeći.

### Tabela artikala

Nakon izbora željenih filtera, klikom na *Traži* tabela će biti popunjena svim artiklima koji ispunjavaju zadate kriterijume. Kolone tabele su:

- **Konto/Podkonto/Opis**: prikazuje nosioca cenovnika ako je personalizovan.
- **Klasa/Šifra/Opis artikla**: identifikacioni podaci artikla iz cenovnika.
- **Valuta**: valuta cenovnika.
- **Jedinica mere**: preuzeta iz cenovnika.
- **Cena**: cena artikla navedena u cenovniku.
- **Popust**: eventualni popust naveden u cenovniku (samo fiksni popust).
- **Neto cena**: u ovoj koloni prikazuje se *Cena* bez *Popusta*.
- **Od datuma važenja**: datum od kojeg cenovnik važi.
- **Do datuma važenja**: eventualni datum isteka važenja.
- **Datum poslednjeg dokumenta**: datum najnovije otpremnice koja sadrži taj artikal i cenovnik.
- **Količina**: količina na koju se odnosi cena.
- **Varijanta/Opis varijante**: prikazuje šifru i opis varijante, ako postoji.
- **Kretanje**: aktivna oznaka znači da su za taj artikal i cenovnik evidentirani skladišni prometi.

### Alatna traka

Dostupna dugmad na alatnoj traci su:

- **Ažuriraj**: otvara iskačući prozor za nastavak ažuriranja cene artikla u cenovniku; potrebno je navesti:
1. **Datum početka važenja** redova cenovnika koji se ažuriraju (po želji se može uneti i **Datum kraja važenja**, nije obavezno)
2. **Zaokruživanje** koje sadrži pravila za promenu cena i popusta u cenovniku, ili
3. **Procenat povećanja**, uklanjanjem šifre zaokruživanja i ručnim unosom procenta (ili vrednosti).
4. **OK** za izvršavanje ažuriranja.

:::important Zapamti
Ako nije naveden *Datum početka važenja*, ažuriranje neće dati rezultate i neće biti izvršeno.
:::

- **Zatvori**: otvara iskačući prozor u kojem se unosi *Datum kraja važenja* za izabrane stavke cenovnika; *Datum kraja važenja* mora biti kasniji od najnovijeg datuma poslednjeg dokumenta koji se odnosi na stavke cenovnika koje treba zatvoriti (isteći).
- **Kopiraj cenovnike**: otvara iskačući prozor i za izabrane stavke cenovnika kreira ili dodaje nove stavke u novi ili postojeći cenovnik; moguće je za izabrane stavke kreirati novi cenovnik definisanjem *Dobavljača*, koji može biti različit od onog u izvornom cenovniku, *Datuma važenja od* i *Valute*; aktiviranjem oznake *Zadrži iste datume kao u izvornom cenovniku* kreira se cenovnik za drugog dobavljača, ali sa istim datumima važenja.
- **Popusti**: otvara iskačući prozor za dodelu *Popusta* izabranim redovima, njihovim dodavanjem postojećima ili zamenom korišćenjem opcije *Obriši prethodne rabate*.
- **Ponovno otvaranje cenovnika**: koristi se kako bi se redovi cenovnika sa *Datumom kraja važenja* ponovo prikazali u cenovniku *bez* datuma isteka važenja.