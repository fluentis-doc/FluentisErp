---
title: Upravljanje lokacijama
sidebar_position: 1
---

:::important Čemu služi

Upravljanje skladišnim lokacijama u Fluentis ERP-u predstavlja ključni element za optimizaciju skladišnih procesa. Ovaj modul omogućava organizaciju skladišnih lokacija unutar skladišta prema hijerarhijskoj strukturi koja se može jednostavno prilagoditi poslovnim potrebama.

Svaka skladišna lokacija može se definisati prema različitim parametrima, uključujući vrstu lokacije (npr. zona, nivo, regal ili sekcija) i njene fizičke karakteristike kao što su širina, visina i nosivost.

Korišćenjem stabla skladišnih lokacija operateri mogu kreirati nove grane hijerarhije i pregledati sadržaj pojedinačne lokacije, uključujući informacije o artiklima i raspoloživim količinama na zalihama.

Dodatno, kartica sa atributima skladišne lokacije omogućava napredno prilagođavanje definisanjem specifičnih zahteva i karakteristika pojedinačne lokacije.

Efikasno upravljanje skladišnim lokacijama ne samo da poboljšava kontrolu zaliha već i podržava svakodnevne logističke procese, omogućavajući brže, preglednije i efikasnije upravljanje skladištem.

:::

Ova forma omogućava operateru kreiranje i upravljanje stablom skladišnih lokacija.

Kroz filtere je moguće ciljano pretraživati prema parametrima i prikazati rezultate upita u tabelama. Ti rezultati mogu biti grupisani prema različitim parametrima radi lakšeg pregleda podataka. Jedini obavezni parametar filtera jeste skladište.

Rezultati pretrage podeljeni su u dve sekcije: prva sekcija sadrži informacije o lokacijama u skladištu, dok druga sekcija sadrži detalje o artiklima i atributima povezanim sa odabranom lokacijom.

*Informacije o prvoj sekciji prozora su:*

Informacije prikazane u prvom delu prozora uključuju:

- **Skladišna lokacija**: označava skladišnu lokaciju.
- **Šifra**: šifra skladišne lokacije.
- **Opis**: opis skladišne lokacije.
- **Vrsta lokacije**: šifra vrste skladišne lokacije.
- **Opis vrste lokacije**: opis vrste skladišne lokacije.
- **Status lokacije**: šifra statusa skladišne lokacije.
- **Opis statusa lokacije**: opis statusa skladišne lokacije.
- **Grupna lokacija**: označava da je u pitanju grupna skladišna lokacija.

U drugom delu prozora, na kartici **Karakteristike lokacije**, moguće je definisati dodatne podatke vezane za skladišnu lokaciju.

- **Širina**: širina skladišne lokacije.
- **Visina**: visina skladišne lokacije.
- **Dubina**: dubina skladišne lokacije.
- **Kapacitet**: maksimalna nosivost skladišne lokacije.
- **Prioritet**: prioritet skladišne lokacije.
- **Broj nivoa**: maksimalan broj slojeva koje je moguće uskladištiti na lokaciji.
- **Tip utovarne jedinice**: vrsta utovarne jedinice koja se može smestiti na lokaciju.
- **Broj utovarnih jedinica**: maksimalan broj utovarnih jedinica koje je moguće smestiti na lokaciju.
- **Minimalna zaliha**: minimalna količina zalihe za tu skladišnu lokaciju.
- **Maksimalna zaliha**: maksimalna količina zalihe za tu skladišnu lokaciju.

Dodatno, u proširivom odeljku **Parametri** moguće je aktivirati sledeće oznake vezane za pojedinačnu skladišnu lokaciju:

- **Mono artikal**: ako je aktivno, skladišna lokacija ne sme istovremeno sadržati više različitih artikala.
- **Mono lot**: ako je aktivno, skladišna lokacija ne sme istovremeno sadržati više različitih lotova.
- **Aktivno**: ako je aktivno, skladišna lokacija može sadržati robu. Neaktivne lokacije mogu, na primer, služiti samo za grupisanje drugih skladišnih lokacija.
- **Blokirano**: ako je aktivno, roba uskladištena na toj lokaciji nije dostupna za korišćenje i zaliha će biti prikazana kao nedostupna.
- **Rezervisano**: ako je aktivno, označava da je skladišna lokacija tipa *Rezervisana*.
- **Od zalihe**: ako je aktivno, označava da je skladišna lokacija tipa *Od zalihe*.
- **Za preuzimanje**: ako je aktivno, označava da je skladišna lokacija tipa *Za preuzimanje*.
- **Zastarelo**: ako je aktivno, označava da skladišna lokacija više nije u upotrebi i da se ne bi trebalo koristiti.

:::note PAŽNJA

Osim oznaka **Aktivna** i **Blokirana**, svi ostali parametri imaju isključivo informativnu ulogu. Eventualne kontrole vezane za njih potrebno je implementirati kroz prilagođavanja sistema.

:::

Na kartici **Artikli** moguće je pregledati sve artikle trenutno uskladištene na odabranoj skladišnoj lokaciji.

### Specifični dugmići

> **Traži**: pokreće pretragu podataka.  
> **Obriši lokaciju**: briše odabranu skladišnu lokaciju.  
> **Umetni podređenu lokaciju**: dugme je dostupno nakon pretrage i omogućava dodavanje nove podređene skladišne lokacije ispod odabrane lokacije.  
> **Umetni nadređenu lokaciju**: dugme je dostupno nakon pretrage i omogućava dodavanje nove nadređene skladišne lokacije iznad odabrane lokacije.  
> **Kopiraj karakteristike**: dugme je dostupno nakon pretrage i omogućava kopiranje atributa na druge skladišne lokacije.

Za sve funkcionalnosti koje nisu posebno opisane u ovom dokumentu pogledajte dokumentaciju:

[Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).