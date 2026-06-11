---
title: Kopiranje i održavanje prodajnih cjenika
sidebar_position: 6
---

Obrazac se otvara putem putanje *Prodaja > Cjenici prodaje > Procedure > Kopiranje i održavanje Prodajnih Cjenika*.
           
U dijelu filtra možete odabrati prikaz:           
- **Sve** vrste cjenika,         
- samo **Opće** cjenike ili           
- samo **Personalizirane cjenike za kupca**.        
       
Ovisno o odabiru, desno se aktivira pretraga po **Vrstu cjenika** ili po **Kupcu**.

Ako je filtru za *Datum početka valjanosti* unesen, aplikacija prikazuje artikle cjenika koji su važeći na uneseni datum. Inače, bit će prikazani svi artikli, uključujući i one iz cjenika koji više nisu važeći.

Moguće je filtrirati i po: Datumu završetka važenja, valuti, artiklu, barkodu artikla ili samo po artiklima koji su bili promijenjeni, tj. povezani s dokumentima od određenog datuma.
   
### Tablica artikala

Nakon odabira željenih filtera i pokretanja pretrage, tablica će prikazati sve artikle koji odgovaraju zadanim kriterijima.

Dostupni stupci su:

- **Vrsta cjenika**: prikazuje vrstu cjenika te pripadajući opis ako je riječ o općem cjeniku.

- **Kupac / Podkonto / Opis**: prikazuje vlasnika cjenika ako se radi o personaliziranom cjeniku.

- **Klasa / Šifra / Opis artikla**: identifikacijski podaci artikla iz cjenika.

- **Šifra diviza**: prikazuje valutu cjenika.

- **Šifra jedinice mjere**: prikazuje jedinicu mjere definiranu u cjeniku.

- **Cijena**: prikazuje cijenu artikla definiranu u cjeniku.

- **Popust**: prikazuje eventualni popust definiran u cjeniku (samo fiksni popusti).

- **Neto cijena**: prikazuje cijenu umanjenu za definirane popuste.

- **Od važećeg dana**: prikazuje datum početka važenja cjenika.

- **Do važećeg dana**: prikazuje eventualni datum završetka važenja cjenika.

- **Datum zadnjeg transportnog dokumenta**: prikazuje datum posljednje otpremnice (DDT) koja sadrži navedeni artikl i cjenik.

### Alatna traka

Na alatnoj traci dostupne su sljedeće funkcije:

- **Ažuriraj**: otvara prozor za ažuriranje cijene artikla u cjeniku. Potrebno je definirati:

  1. **Datum početka valjanosti** redaka cjenika koje treba ažurirati (po želji se može definirati i **Datum završetka važenja**).

  2. **Zaokruživanja**, koje određuje pravila zaokruživanja cijena i popusta.

  3. **Postotak povećanja**, pri čemu se umjesto pravila zaokruživanja ručno unosi postotak promjene.

  4. Klik na **OK** za izvršavanje ažuriranja.

:::note Napomena
Ako nije definiran **Datum početka valjanosti**, ažuriranje neće biti izvršeno.
:::

- **Zatvori cjenike**: otvara obrazac kojim se za odabrane retke cjenika postavlja **Datum završetka valjanosti**. Datum završetka mora biti veći od najnovijeg datuma posljednjeg dokumenta koji koristi taj cjenik kako bi se cjenik mogao zatvoriti (isteći).

- **Kopiraj cjenike**: omogućuje kreiranje novih redaka cjenika na temelju odabranih redaka. Moguće ih je dodati u novi ili postojeći cjenik. Prilikom kreiranja novog cjenika mogu se definirati:
  - **Opći** ili **Personalizirani** cjenik
  - **Vrsta cjenika**
  - **Datum početka valjanosti**
  - **Valuta**

  Također je moguće uključiti opciju **Drži iste datume kao u izvornom cjeniku** ako se želi kreirati novi cjenik s istim razdobljem važenja.

- **Popusti**: otvara prozor za dodjelu popusta odabranim redcima. Popusti se mogu dodati postojećima ili ih zamijeniti aktiviranjem opcije **Izbriši prethodne rabate**.

- **Ponovno otvaranje cjenika**: ako se koristi na redcima koji imaju definiran **Datum završetka valjanosti**, ti će se redci vratiti u cjenik bez datuma završetka važenja te će ponovno postati aktivni.