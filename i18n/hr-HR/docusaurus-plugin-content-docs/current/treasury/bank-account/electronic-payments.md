---
title: Elektronička plaćanja
sidebar_position: 2
---

Počevši od verzije *Fluentis2025*, implementirano je upravljanje elektroničkim plaćanjima putem vanjskih pružatelja usluga plaćanja, kao što su PAYPAL ili STRIPE.

Nakon aktivacije ugovora s pružateljem usluge, dobit ćete pristupne ključeve koje je potrebno pohraniti u Fluentisu, kao što je prikazano u nastavku, kako bi se mogle koristiti web-API funkcije za komunikaciju s ugovorenom uslugom.

Za pojedinačna dospijeća računa, kada je način plaćanja kreditnom karticom, moguće je automatski poslati poruku e-pošte koja će sadržavati poveznicu na web-stranicu putem koje kupac može izvršiti plaćanje odgovarajućeg iznosa.

Nakon uspješno ili neuspješno izvršene transakcije, pružatelj usluge automatski će poslati rezultat Fluentisu. U roku od nekoliko dana poduzeću će doznačiti iznos umanjen za provizije.

### Prethodne konfiguracije

**Tablice > Opće postavke > Pružatelj usluga plaćanja**

- **Pružatelj usluga plaćanja:** u ovoj se tablici definira popis pružatelja:
  - CHECKOUT – PSP postavke za Checkout.com
  - STRIPE – PSP postavke za Stripe TEST način rada
  - PAYPAL – PSP postavke za PayPal
  - STRIPE_LIVE – PSP postavke za Stripe

- **Pružatelj usluga plaćanja poduzeća:** u ovoj se tablici konfiguriraju detalji aktivacije pojedinih pružatelja za svako poduzeće prisutno u bazi podataka.

![](/img/it-it/treasury/electronicpayments/img1.png)

Konfiguracijski obrazac koji se otvara klikom na gumb **Novo** ili uređivanjem već postojeće konfiguracije sadrži sljedeća polja:

![](/img/it-it/treasury/electronicpayments/img2.png)

Prvo polje predstavlja poveznicu na pružatelja usluga plaćanja kojeg smo prethodno definirali.

**Aktivno:** konfiguracija je aktivna.

**Zadano:** označava zadanu konfiguraciju.

**Provedena testiranja:** označava testnu konfiguraciju.

**Transformacija e-pošte za primljeno plaćanje:** transformacija koja upravlja izradom poruke e-pošte za primljeno plaćanje (trenutačno se konfigurira putem modula Supervisor).

**Transformacija PDF-a za primljeno plaćanje:** transformacija koja upravlja eventualnim PDF privitkom prethodno navedenoj poruci e-pošte.

Na desnoj strani nalaze se:

**Poduzeće:** odabir poduzeća za koje se postavlja konfiguracija.

**Transformacija e-pošte dokumenta:** transformacija koja upravlja slanjem poveznice kupcu.

**Transformacija PDF-a dokumenta:** transformacija koja upravlja slanjem eventualnog PDF privitka uz poruku e-pošte (npr. PDF računa koji je potrebno platiti).

Na dnu obrasca nalaze se nizovi za povezivanje i posebni ključevi koje je potrebno pohraniti kako bi veza postala operativna.

### Vrste plaćanja

U tablici **Vrste plaćanja** potrebno je povezati vrste plaćanja s odgovarajućim pružateljem usluga plaćanja:

![](/img/it-it/treasury/electronicpayments/img3.png)

### Stavke izbornika

U izborniku **Riznica > Tekući računi > Elektronička plaćanja** nalazi se funkcija za pregled i upravljanje svim tijekovima dospijeća koji se mogu obraditi elektroničkim plaćanjem:

![](/img/it-it/treasury/electronicpayments/img4.png)

Obrazac je podijeljen na kartice koje predstavljaju dokumente iz kojih je moguće preuzeti dospijeća za plaćanje:

- Prodajni računi
- Prodajne otpremnice
- Narudžbe kupaca
- POS
- Otvorene stavke

Posljednja kartica je **Registar elektroničkih plaćanja**, koji prikazuje popis svih izrađenih elektroničkih transakcija i za svaku od njih zapisnik o tijeku obrade:

![](/img/it-it/treasury/electronicpayments/img5.png)

### Postupak rada

Postupak započinje u obrascu **Elektronička plaćanja**, odabirom redaka i promjenom statusa u **Kreirano**:

![](/img/it-it/treasury/electronicpayments/img6.png)

Ovim se prijelazom izrađuje transakcija koja sadržava poveznicu na web-stranicu za plaćanje odgovarajućeg iznosa.

Nakon izrade transakcije moguće je odabrati jednu od dvije opcije (u istom padajućem izborniku za promjenu statusa):

- **Poslano:** izrađuje se i šalje poruka e-pošte s poveznicom kupcu. Adresa e-pošte određuje se transformacijom povezanom s vrstom plaćanja, kao što je prethodno opisano. Zadano se preuzima adresa za dostavu prodajnih računa navedena u šifarniku kupca.

- **Otkazano:** označava da prethodno generirana poveznica više nije valjana.

Primjer poruke e-pošte koju šalje sustav:

![](/img/it-it/treasury/electronicpayments/img7.png)

Pojedine postavke moguće je prilagoditi putem uključenih *transformacija*.

Klikom na poveznicu **View and Pay** otvorit će se web-stranica (na slici je prikazana testna verzija) putem koje kupac može izvršiti plaćanje:

![](/img/it-it/treasury/electronicpayments/img8.png)

Nakon izvršenog plaćanja ili isteka poveznice bez izvršenog plaćanja (prema zadanim postavkama poveznica istječe nakon 5 dana), pružatelj usluge poslat će Fluentisu ažuriranja statusa. Status će se stoga promijeniti u **Plaćeno** ili **Neuspjelo**.

Nakon nekoliko dodatnih dana pružatelj usluge doznačit će poduzeću iznos plaćanja, koji će tada postati raspoloživ u financijskim sredstvima poduzeća.

Dodatna mogućnost dostupna je nakon slanja poveznice, ali prije izvršenja plaćanja: moguće je poslati zahtjev za otkazivanje promjenom statusa u **Otkazano**.

U tom će slučaju Fluentis poslati pružatelju usluge zahtjev za otkazivanje poveznice, a pružatelj će ubrzo odgovoriti potvrdom izvršenog otkazivanja.

Ako je transakcija u statusu *Neuspjelo* (odnosno kupac nije izvršio plaćanje, a transakcija nije otkazana), korisnik može izvršiti još dvije radnje:

- Promijeniti status u **Otkazano**, čime se završavaju sve mogućnosti daljnjeg upravljanja transakcijom.
- Ponovno pokrenuti postupak izrade nove poveznice, koja će imati zaseban tijek obrade.

Klikom na gumb **Registar elektroničkih plaćanja** moguće je otvoriti obrazac s pregledom povijesti pojedinačne transakcije.

Iz tog je obrasca moguće pokrenuti ispis izvještaja koji odgovara privitku poslanom kupcu.

**NAPOMENA:** Nakon što se dospijeća obrade u transakciji, više ih neće biti moguće ponovno izračunati u izvornom dokumentu. Trenutačno nije predviđena mogućnost brisanja poveznice i ponovnog otvaranja dokumenta.

![](/img/it-it/treasury/electronicpayments/img9.png)