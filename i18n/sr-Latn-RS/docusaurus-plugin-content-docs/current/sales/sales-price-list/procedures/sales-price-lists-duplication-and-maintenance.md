---
title: Kopiranje i održavanje prodajnih cenovnika
sidebar_position: 6
---

Obrazac se otvara putem putanje *Prodaja > Prodajni cenovnici > Procedure > Kopiranje i održavanje prodajnih cenovnika*.
           
U delu filtera možete odabrati prikaz:           
- **Svih** vrsta cenovnika,         
- samo **Opštih** cenovnika ili           
- samo **Personalizovanih cenovnika za kupca**.        
       
U zavisnosti od izbora, desno se aktivira pretraga po **Vrsti cenovnika** ili po **Kupcu**.

Ako je u filteru za *Datum početka važenja* unet datum, aplikacija prikazuje artikle cenovnika koji važe na uneti datum. U suprotnom, biće prikazani svi artikli, uključujući i one iz cenovnika koji više nisu važeći.

Moguće je filtrirati i po: Datumu završetka važenja, valuti, artiklu, barkodu artikla ili samo po artiklima koji su bili promenjeni, odnosno povezani sa dokumentima od određenog datuma.
   
### Tabela artikala

Nakon odabira željenih filtera i pokretanja pretrage, tabela će prikazati sve artikle koji odgovaraju zadatim kriterijumima.

Dostupne kolone su:

- **Vrsta cenovnika**: prikazuje vrstu cenovnika i pripadajući opis ako je u pitanju opšti cenovnik.

- **Kupac / Podkonto / Opis**: prikazuje vlasnika cenovnika ako je u pitanju personalizovani cenovnik.

- **Klasa / Šifra / Opis artikla**: identifikacioni podaci artikla iz cenovnika.

- **Šifra valute**: prikazuje valutu cenovnika.

- **Šifra jedinice mere**: prikazuje jedinicu mere definisanu u cenovniku.

- **Cena**: prikazuje cenu artikla definisanu u cenovniku.

- **Popust**: prikazuje eventualni popust definisan u cenovniku (samo fiksni popusti).

- **Neto cena**: prikazuje cenu umanjenu za definisane popuste.

- **Važi od**: prikazuje datum početka važenja cenovnika.

- **Važi do**: prikazuje eventualni datum završetka važenja cenovnika.

- **Datum poslednjeg transportnog dokumenta**: prikazuje datum poslednje otpremnice (DDT) koja sadrži navedeni artikl i cenovnik.

### Alatna traka

Na alatnoj traci dostupne su sledeće funkcije:

- **Ažuriraj**: otvara prozor za ažuriranje cene artikla u cenovniku. Potrebno je definisati:

  1. **Datum početka važenja** redova cenovnika koje treba ažurirati (po želji se može definisati i **Datum završetka važenja**).

  2. **Zaokruživanja**, koja određuju pravila zaokruživanja cena i popusta.

  3. **Procenat povećanja**, pri čemu se umesto pravila zaokruživanja ručno unosi procenat promene.

  4. Klik na **OK** za izvršavanje ažuriranja.

:::note Napomena
Ako nije definisan **Datum početka važenja**, ažuriranje neće biti izvršeno.
:::

- **Zatvori cenovnike**: otvara obrazac kojim se za odabrane redove cenovnika postavlja **Datum završetka važenja**. Datum završetka mora biti veći od najnovijeg datuma poslednjeg dokumenta koji koristi taj cenovnik kako bi cenovnik mogao biti zatvoren (isteći).

- **Kopiraj cenovnike**: omogućava kreiranje novih redova cenovnika na osnovu odabranih redova. Moguće ih je dodati u novi ili postojeći cenovnik. Prilikom kreiranja novog cenovnika mogu se definisati:
  - **Opšti** ili **Personalizovani** cenovnik
  - **Vrsta cenovnika**
  - **Datum početka važenja**
  - **Valuta**

  Takođe je moguće uključiti opciju **Zadrži iste datume kao u izvornom cenovniku** ako se želi kreirati novi cenovnik sa istim periodom važenja.

- **Popusti**: otvara prozor za dodelu popusta odabranim redovima. Popusti se mogu dodati postojećima ili ih zameniti aktiviranjem opcije **Obriši prethodne rabate**.

- **Ponovno otvaranje cenovnika**: ako se koristi na redovima koji imaju definisan **Datum završetka važenja**, ti redovi će biti vraćeni u cenovnik bez datuma završetka važenja i ponovo će postati aktivni.