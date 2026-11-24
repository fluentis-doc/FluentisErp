---
title: Kreiranje prodajnih cenovnika
sidebar_position: 3
---

Ovaj postupak omogućava kreiranje novih prodajnih cenovnika na osnovu artikala iz postojećih dokumenata.

U gornjem delu obrasca nalaze se filteri za pretraživanje **Izvornih podataka**. Moguće je izabrati jednu od sledećih opcija: Prodajni cenovnik, Nabavni cenovnik, Šifarnik artikala, Nabavna otpremnica, Nabavne fakture ili Narudžbine dobavljača. Proširivanjem opcije **Pretraga dokumenta** moguće je dodatno filtrirati podatke i potražiti određeni cenovnik. Za prikaz rezultata kliknite na **Pretraga cenovnika**.

:::note Pažnja
Polje **Zaokruživanja**, koje se nalazi u donjem delu obrasca, obavezno je. Da bi podaci mogli da se prikažu i da bi se moglo nastaviti sa kreiranjem cenovnika, potrebno je izabrati jedno od prethodno definisanih [zaokruživanja](/docs/sales/sales-price-list/procedures/rounding) u odgovarajućem obrascu.
:::

U prvoj tabeli prikazaće se dokumenti koji odgovaraju kriterijumima pretrage. Izborom reda u donjoj tabeli prikazaće se artikli iz izabranog dokumenta.

Pogledajmo kolone:

- **Klasa/Šifra/Opis artikla**: identifikacioni podaci artikla, nakon kojih slede **Varijanta**, **Količina**, **JM** i **Marka**.
- **Ne razmatrati**: artikli za koje je ova opcija označena neće biti izmenjeni u novom cenovniku.
- **Prethodni trošak**: prikazuje trošak iz poslednjeg dokumenta izabranog tipa u izvornim podacima.
- **Cena**: označava početnu cenu navedenu u izvornom dokumentu.
- **Cena sa PDV-om**: prikazuje početnu cenu sa uključenim PDV-om.
- **Cena bez zaokruživanja**: prikazuje cenu nakon primene povećanja ili smanjenja određenog za novi cenovnik.
- **Cena sa PDV-om bez zaokruživanja**: cena sa uključenim PDV-om, pre zaokruživanja.
- **Maska**: prikazuje masku koja se primenjuje na pojedinačni artikal.
- **Zaokružena cena**: prikazuje cenu iz polja *Cena bez zaokruživanja*, zaokruženu prema definisanoj *Maski*.
- **Zaokružena cena sa PDV-om**: prikazuje cenu iz polja *Cena sa PDV-om bez zaokruživanja*, zaokruženu prema definisanoj *Maski*.
- **Aktuelna cena u cenovniku**: ako je u odeljku *Cenovnik koji se kreira* (u donjem delu obrasca) izabrana opcija **Dodaj označene podatke u postojeći cenovnik**, u ovoj koloni prikazaće se cena artikla u izabranom cenovniku, ako postoji.

U donjem delu obrasca potrebno je uneti obavezne podatke za *Cenovnik koji se kreira*: tip cenovnika (opšti ili personalizovani), tip ili kupca, u zavisnosti od izabranog tipa cenovnika, datum početka važenja (po potrebi i datum završetka važenja), valutu, zaokruživanja koja će se primeniti, kao i sledeće oznake:

- **Cena sa PDV-om**: označava da će se kreirati cenovnik sa cenama koje već uključuju PDV.
- **Minimalni cenovnik**: informativna oznaka koja označava kreiranje cenovnika minimalnih cena za terensku prodaju.

Ovi podaci mogu se uneti ručno ili automatski, klikom na dugme **Dodaj označene podatke u postojeći cenovnik**. U tom slučaju otvara se iskačući prozor u kojem je moguće izabrati cenovnik iz kojeg će se preuzeti matični podaci.

Ovim postupkom artikli će se prilikom pokretanja postupka dodati u postojeći cenovnik, umesto da se kreira novi. Ako neki artikli već postoje u izabranom cenovniku, korisnik će moći da izabere da li želi da zadrži postojeće cene ili da ih ažurira.

Kreiranje cenovnika pokreće se pomoću dugmadi na traci menija:

- **Kreiraj sve artikle**: cenovnik se kreira sa svim artiklima iz dokumenta izabranog u prvoj tabeli.
- **Kreiraj označene artikle**: cenovnik se kreira samo sa artiklima izabranim u drugoj tabeli.

Nakon kreiranja novog cenovnika Fluentis će pitati da li želite da ga otvorite.

Na traci menija nalaze se i dodatna dugmad za upravljanje maskama:

- **Ažuriraj maske**: ažurira masku povezanu sa pojedinačnim artiklom u njegovom šifarniku, za trenutno označeni artikal.
- **Ponovo preuzmi (vrati) masku iz opsega**: ako se promeni polje *Zaokruživanja* u odeljku *Cenovnik koji se kreira*, ovim dugmetom ponovo se izračunava maska u drugoj tabeli i predlaže maska izabranog zaokruživanja.
- **Uključi/isključi oznaku Ne razmatrati**: aktivira ili deaktivira oznaku *Ne razmatrati* za označene artikle.