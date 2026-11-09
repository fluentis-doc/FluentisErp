---
title: Elektronska plaćanja
sidebar_position: 2
---

Počevši od verzije *Fluentis2025*, implementirano je upravljanje elektronskim plaćanjima putem eksternih pružalaca usluga plaćanja, kao što su PAYPAL ili STRIPE.

Nakon aktivacije ugovora sa pružaocem usluge, dobićete pristupne ključeve koje je potrebno sačuvati u Fluentisu, kao što je prikazano u nastavku, kako bi se mogle koristiti funkcije web API-ja za komunikaciju sa ugovorenom uslugom.

Za pojedinačna dospeća faktura, kada je način plaćanja kreditnom karticom, moguće je automatski poslati poruku e-pošte koja će sadržati vezu ka veb-stranici putem koje kupac može da izvrši plaćanje odgovarajućeg iznosa.

Nakon uspešno ili neuspešno izvršene transakcije, pružalac usluge automatski će poslati rezultat Fluentisu. U roku od nekoliko dana preduzeću će doznačiti iznos umanjen za provizije.

### Prethodna podešavanja

**Tabele > Opšta podešavanja > Pružalac usluga plaćanja**

- **Pružalac usluga plaćanja:** u ovoj tabeli definiše se lista pružalaca:
  - CHECKOUT – PSP podešavanja za Checkout.com
  - STRIPE – PSP podešavanja za Stripe TEST režim rada
  - PAYPAL – PSP podešavanja za PayPal
  - STRIPE_LIVE – PSP podešavanja za Stripe

- **Pružalac usluga plaćanja preduzeća:** u ovoj tabeli konfigurišu se detalji aktivacije pojedinačnih pružalaca za svako preduzeće prisutno u bazi podataka.

![](/img/it-it/treasury/electronicpayments/img1.png)

Obrazac za konfiguraciju, koji se otvara klikom na dugme **Novo** ili izmenom već postojeće konfiguracije, sadrži sledeća polja:

![](/img/it-it/treasury/electronicpayments/img2.png)

Prvo polje predstavlja vezu ka pružaocu usluga plaćanja kojeg smo prethodno definisali.

**Aktivno:** konfiguracija je aktivna.

**Podrazumevano:** označava podrazumevanu konfiguraciju.

**Sprovedena testiranja:** označava testnu konfiguraciju.

**Transformacija e-pošte za primljeno plaćanje:** transformacija koja upravlja izradom poruke e-pošte za primljeno plaćanje (trenutno se konfiguriše putem modula Supervisor).

**Transformacija PDF-a za primljeno plaćanje:** transformacija koja upravlja eventualnim PDF prilogom prethodno navedenoj poruci e-pošte.

Na desnoj strani nalaze se:

**Preduzeće:** izbor preduzeća za koje se podešava konfiguracija.

**Transformacija e-pošte dokumenta:** transformacija koja upravlja slanjem veze kupcu.

**Transformacija PDF-a dokumenta:** transformacija koja upravlja slanjem eventualnog PDF priloga uz poruku e-pošte (npr. PDF fakture koju je potrebno platiti).

Na dnu obrasca nalaze se nizovi za povezivanje i posebni ključevi koje je potrebno sačuvati kako bi veza postala operativna.

### Tipovi plaćanja

U tabeli **Tipovi plaćanja** potrebno je povezati tipove plaćanja sa odgovarajućim pružaocem usluga plaćanja:

![](/img/it-it/treasury/electronicpayments/img3.png)

### Stavke menija

U meniju **Riznica > Tekući računi > Elektronska plaćanja** nalazi se funkcija za pregled i upravljanje svim tokovima dospeća koji se mogu obraditi elektronskim plaćanjem:

![](/img/it-it/treasury/electronicpayments/img4.png)

Obrazac je podeljen na kartice koje predstavljaju dokumente iz kojih je moguće preuzeti dospeća za plaćanje:

- Prodajne fakture
- Prodajne otpremnice
- Narudžbine kupaca
- POS
- Otvorene stavke

Poslednja kartica je **Registar elektronskih plaćanja**, koji prikazuje listu svih izrađenih elektronskih transakcija i za svaku od njih zapisnik o toku obrade:

![](/img/it-it/treasury/electronicpayments/img5.png)

### Postupak rada

Postupak započinje u obrascu **Elektronska plaćanja**, izborom redova i promenom statusa u **Kreirano**:

![](/img/it-it/treasury/electronicpayments/img6.png)

Ovim prelazom kreira se transakcija koja sadrži vezu ka veb-stranici za plaćanje odgovarajućeg iznosa.

Nakon kreiranja transakcije moguće je izabrati jednu od dve opcije (u istom padajućem meniju za promenu statusa):

- **Poslato:** kreira se i šalje poruka e-pošte sa vezom kupcu. Adresa e-pošte određuje se transformacijom povezanom sa tipom plaćanja, kao što je prethodno opisano. Podrazumevano se preuzima adresa za isporuku prodajnih faktura navedena u šifarniku kupca.

- **Otkazano:** označava da prethodno generisana veza više nije važeća.

Primer poruke e-pošte koju šalje sistem:

![](/img/it-it/treasury/electronicpayments/img7.png)

Pojedina podešavanja moguće je prilagoditi pomoću uključenih *transformacija*.

Klikom na vezu **View and Pay** otvoriće se veb-stranica (na slici je prikazana testna verzija) putem koje kupac može da izvrši plaćanje:

![](/img/it-it/treasury/electronicpayments/img8.png)

Nakon izvršenog plaćanja ili isteka veze bez izvršenog plaćanja (podrazumevano, veza ističe nakon 5 dana), pružalac usluge poslaće Fluentisu ažuriranja statusa. Status će se stoga promeniti u **Plaćeno** ili **Neuspešno**.

Nakon nekoliko dodatnih dana pružalac usluge doznačiće preduzeću iznos plaćanja, koji će tada postati raspoloživ u finansijskim sredstvima preduzeća.

Dodatna mogućnost dostupna je nakon slanja veze, ali pre izvršenja plaćanja: moguće je poslati zahtev za otkazivanje promenom statusa u **Otkazano**.

U tom slučaju Fluentis će poslati pružaocu usluge zahtev za otkazivanje veze, a pružalac će ubrzo odgovoriti potvrdom izvršenog otkazivanja.

Ako je transakcija u statusu *Neuspešno* (odnosno kupac nije izvršio plaćanje, a transakcija nije otkazana), korisnik može da izvrši još dve radnje:

- Promeni status u **Otkazano**, čime se završavaju sve mogućnosti daljeg upravljanja transakcijom.
- Ponovo pokrene postupak kreiranja nove veze, koja će imati zaseban tok obrade.

Klikom na dugme **Registar elektronskih plaćanja** moguće je otvoriti obrazac sa pregledom istorije pojedinačne transakcije.

Iz tog obrasca moguće je pokrenuti štampanje izveštaja koji odgovara prilogu poslatom kupcu.

**NAPOMENA:** Nakon što se dospeća obrade u transakciji, više ih neće biti moguće ponovo izračunati u izvornom dokumentu. Trenutno nije predviđena mogućnost brisanja veze i ponovnog otvaranja dokumenta.

![](/img/it-it/treasury/electronicpayments/img9.png)