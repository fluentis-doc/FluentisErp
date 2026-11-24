---
title: Izrada prodajnih cjenika
sidebar_position: 3
---

Ovaj postupak omogućuje izradu novih prodajnih cjenika na temelju artikala iz postojećih dokumenata.

U gornjem dijelu obrasca nalaze se filtri za pretraživanje **Izvornih podataka**. Moguće je odabrati jednu od sljedećih opcija: Prodajni cjenik, Nabavni cjenik, Šifarnik artikala, Nabavna otpremnica, Nabavni računi ili Narudžbe dobavljača. Proširivanjem opcije **Pretraga dokumenta** moguće je dodatno filtrirati podatke i potražiti određeni cjenik. Za prikaz rezultata kliknite **Pretraga cjenika**.

:::note Pažnja
Polje **Zaokruživanja**, koje se nalazi u donjem dijelu obrasca, obavezno je. Kako bi se podaci mogli prikazati i kako bi se moglo nastaviti s izradom cjenika, potrebno je odabrati jedno od prethodno definiranih [zaokruživanja](/docs/sales/sales-price-list/procedures/rounding) u odgovarajućem obrascu.
:::

U prvoj tablici prikazat će se dokumenti koji odgovaraju kriterijima pretraživanja. Odabirom retka u donjoj tablici prikazat će se artikli iz odabranog dokumenta.

Pogledajmo stupce:

- **Klasa/Šifra/Opis artikla**: identifikacijski podaci artikla, nakon kojih slijede **Varijanta**, **Količina**, **JM** i **Marka**.
- **Ne razmatrati**: artikli za koje je ova opcija označena neće se mijenjati u novom cjeniku.
- **Prethodni trošak**: prikazuje trošak iz posljednjeg dokumenta odabrane vrste u izvornim podacima.
- **Cijena**: označava početnu cijenu koja je bila navedena u izvornom dokumentu.
- **Cijena s PDV-om**: prikazuje početnu cijenu s uključenim PDV-om.
- **Nezaokružena cijena**: prikazuje cijenu nakon primjene povećanja ili smanjenja određenog za novi cjenik.
- **Nezaokružena cijena s PDV-om**: cijena s uključenim PDV-om, prije zaokruživanja.
- **Maska**: prikazuje masku koja se primjenjuje na pojedini artikl.
- **Zaokružena cijena**: prikazuje cijenu iz polja *Cijena bez zaokruživanja*, zaokruženu prema definiranoj *Maski*.
- **Zaokružena cijena s PDV-om**: prikazuje cijenu iz polja *Cijena s PDV-om bez zaokruživanja*, zaokruženu prema definiranoj *Maski*.
- **Aktualna cijena u cjeniku**: ako je u odjeljku *Cjenik koji se izrađuje* (u donjem dijelu obrasca) odabrana opcija **Dodaj označene podatke na postojeći cjenik**, u ovom će se stupcu prikazati cijena artikla u odabranom cjeniku, ako postoji.

U donjem dijelu obrasca potrebno je unijeti obvezne podatke za *Cjenik koji se izrađuje*: vrstu cjenika (opći ili personalizirani), vrstu ili kupca, ovisno o odabranoj vrsti cjenika, datum početka valjanosti (po potrebi i datum završetka valjanosti), valutu, zaokruživanja koja će se primijeniti te sljedeće oznake:

- **Cijena s PDV-om**: označava da će se izraditi cjenik s cijenama koje već uključuju PDV.
- **Minimalni cjenik**: informativna oznaka koja označava izradu cjenika minimalnih cijena za terensku prodaju.

Ovi se podaci mogu unijeti ručno ili automatski, klikom na gumb **Dodaj označene podatke na postojeći cjenik**. U tom se slučaju otvara skočni prozor u kojem je moguće odabrati cjenik iz kojeg će se preuzeti matični podaci.

Ovim postupkom artikli će se prilikom pokretanja postupka dodati u postojeći cjenik, umjesto da se izradi novi. Ako neki artikli već postoje u odabranom cjeniku, korisnik će moći odabrati želi li zadržati postojeće cijene ili ih ažurirati.

Izrada cjenika pokreće se pomoću gumba na vrpci izbornika:

- **Kreiraj sve artikle**: cjenik se izrađuje sa svim artiklima iz dokumenta odabranog u prvoj tablici.
- **Kreiraj označene artikle**: cjenik se izrađuje samo s artiklima odabranima u drugoj tablici.

Nakon izrade novog cjenika Fluentis će pitati želite li ga otvoriti.

Na vrpci izbornika nalaze se i dodatni gumbi za upravljanje maskama:

- **Ažuriraj maske**: ažurira masku povezanu s pojedinim artiklom u njegovu šifarniku, za trenutno označeni artikl.
- **Ponovno preuzmi (povrati) masku iz raspona**: ako se promijeni polje *Zaokruživanja* u odjeljku *Cjenik koji se izrađuje*, ovim se gumbom ponovno izračunava maska u drugoj tablici i predlaže maska odabranog zaokruživanja.
- **Uključi/isključi oznaku Ne razmatrati**: aktivira ili deaktivira oznaku *Ne razmatrati* za označene artikle.