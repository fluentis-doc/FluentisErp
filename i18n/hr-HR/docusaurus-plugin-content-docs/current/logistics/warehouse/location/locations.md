---
title: Upravljanje lokacijama
sidebar_position: 1
---

:::important Čemu služi

Upravljanje skladišnim lokacijama u Fluentis ERP-u predstavlja ključan element za optimizaciju skladišnih procesa. Ovaj modul omogućuje organizaciju skladišnih lokacija unutar skladišta prema hijerarhijskoj strukturi koja se može jednostavno prilagoditi poslovnim potrebama.

Svaka skladišna lokacija može se definirati prema različitim parametrima, uključujući vrstu lokacije (npr. zona, razina, regal ili sekcija) te njezine fizičke karakteristike kao što su širina, visina i nosivost.

Korištenjem stabla skladišnih lokacija operateri mogu kreirati nove grane hijerarhije te pregledavati sadržaj pojedine lokacije, uključujući informacije o artiklima i raspoloživim količinama na zalihi.

Dodatno, kartica s atributima skladišne lokacije omogućuje naprednu prilagodbu definiranjem specifičnih zahtjeva i karakteristika pojedine lokacije.

Učinkovito upravljanje skladišnim lokacijama ne samo da poboljšava kontrolu zaliha, već i podržava svakodnevne logističke procese, omogućujući brže, preglednije i učinkovitije upravljanje skladištem.

:::

Ova forma omogućuje operateru stvaranje i upravljanje stablom skladišnih lokacija.

Kroz filtre je moguće ciljano pretraživati prema parametrima i prikazati rezultate upita u tablicama. Ti rezultati mogu biti grupirani prema različitim parametrima radi lakšeg čitanja podataka. Jedini obavezni parametar filtra je onaj za skladište.

Rezultati pretraživanja podijeljeni su u dvije sekcije: prva sekcija sadrži informacije o lokacijama u skladištu, dok u drugoj sekciji nalazi detalji o artiklima i atributima povezanim s odabranom lokacijom.

*Informacije o prvoj sekciji prozora su:*

Informacije prikazane u prvom dijelu prozora uključuju:

- **Skladišna lokacija**: označava skladišnu lokaciju.
- **Šifra**: šifra skladišne lokacije.
- **Opis**: opis skladišne lokacije.
- **Vrsta lokacije**: šifra vrste skladišne lokacije.
- **Opis vrste lokacije**: opis vrste skladišne lokacije.
- **Status lokacije**: šifra statusa skladišne lokacije.
- **Opis statusa lokacije**: opis statusa skladišne lokacije.
- **Grupna lokacija**: označava da se radi o grupnoj skladišnoj lokaciji.

U drugom dijelu prozora, na kartici **Karakteristike lokacije**, moguće je definirati dodatne podatke vezane uz skladišnu lokaciju.

- **Širina**: širina skladišne lokacije.
- **Visina**: visina skladišne lokacije.
- **Dubina**: dubina skladišne lokacije.
- **Kapacitet**: maksimalna nosivost skladišne lokacije.
- **Prioritet**: prioritet skladišne lokacije.
- **Broj razina**: maksimalan broj slojeva koji je moguće uskladištiti na lokaciji.
- **Tip utovarne jedinice**: vrsta utovarne jedinice koja se može smjestiti na lokaciju.
- **Broj utovarne jedinice**: maksimalan broj utovarnih jedinica koje je moguće smjestiti na lokaciju.
- **Minimalna zaliha**: minimalna količina zalihe za tu skladišnu lokaciju.
- **Maksimalna zaliha**: maksimalna količina zalihe za tu skladišnu lokaciju.

Dodatno, u proširivom odjeljku **Parametri** moguće je aktivirati sljedeće oznake vezane uz pojedinu skladišnu lokaciju:

- **Mono artikl**: ako je aktivno, skladišna lokacija ne smije istovremeno sadržavati više različitih artikala.
- **Mono lot**: ako je aktivno, skladišna lokacija ne smije istovremeno sadržavati više različitih serija.
- **Aktivno**: ako je aktivno, skladišna lokacija može sadržavati robu. Neaktivne lokacije mogu, primjerice, služiti samo za grupiranje drugih skladišnih lokacija.
- **Blokirano**: ako je aktivno, roba pohranjena na toj skladišnoj lokaciji nije dostupna za korištenje te će se zaliha prikazivati kao nedostupna.
- **Rezervirano**: ako je aktivno, označava da je skladišna lokacija tipa *Rezervirana*.
- **Od zalihe**: ako je aktivno, označava da je skladišna lokacija tipa *Od zaliha*.
- **Za preuzimanje**: ako je aktivno, označava da je skladišna lokacija tipa *Za preuzimanje*.
- **Zastario**: ako je aktivno, označava da skladišna lokacija više nije u uporabi te se ne bi trebala koristiti.

:::note PAŽNJA

Osim oznaka **Aktivna** i **Blokirana**, svi ostali parametri imaju isključivo informativnu ulogu. Eventualne kontrole vezane uz njih potrebno je implementirati kroz prilagodbe sustava.

:::

Na kartici **Artikli** moguće je pregledati sve artikle trenutno pohranjene na odabranoj skladišnoj lokaciji.

### Posebni gumbi

> **Traži**: pokreće pretraživanje podataka.  
> **Izbriši lokaciju**: briše odabranu skladišnu lokaciju.  
> **Umetni podređenu lokaciju**: gumb je dostupan nakon pretraživanja te omogućuje dodavanje nove podređene skladišne lokacije ispod odabrane lokacije.  
> **Umetni nadređenu lokaciju**: gumb je dostupan nakon pretraživanja te omogućuje dodavanje nove nadređene skladišne lokacije iznad odabrane lokacije.  
> **Kopiraj karakteristike**: gumb je dostupan nakon pretraživanja te omogućuje kopiranje atributa na druge skladišne lokacije.

Za sve funkcionalnosti koje nisu posebno opisane u ovom dokumentu pogledajte dokumentaciju:

[Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).