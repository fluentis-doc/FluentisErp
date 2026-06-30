---
title: Napredno upravljanje otvorenim stavkama
sidebar_position: 7
---

:::note MENI
**Administracija > Otvorene stavke > Procedure > Napredno upravljanje otvorenim stavkama**

Napomena:  
Za sve funkcionalnosti koje nisu detaljno objašnjene u ovom dokumentu, a odnose se na standardni rad obrazaca, pogledajte: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).

:::

---

Ova procedura omogućava kreiranje avansnih otvorenih stavki koje se naplaćuju ili plaćaju prilikom potvrde porudžbine (ili isporuke), a zatim se fakturišu i knjiže. U pitanju su uglavnom vanbilansne stavke, jer nastaju pre izdavanja fakture.

Komande za upravljanje ovom funkcionalnošću dostupne su u ovom obrascu, kao i na kartici **Sažeci** porudžbine.

:::note NAPOMENA
Primeri na slikama odnose se na prodaju sa jednim avansnim iznosom po porudžbini, ali je upravljanje identično i za nabavku, kao i konceptualno slično za avanse prilikom isporuke.

Ne postoji standardna automatizacija za kreiranje avansnog računovodstvenog knjiženja prilikom potvrde porudžbine niti bilo kog događaja povezanog sa njom ili otpremnicama.

Svaki rok plaćanja iz porudžbine može se proslediti računovodstvu kako bi postojala evidencija da postoji otvorena stavka po porudžbini koju treba naplatiti.

Ovim procesom moguće je upravljati pomoću prilagođenih radnih tokova koji se posebno konfigurišu.

:::

### Kreiranje otvorenih stavki po porudžbini

U zaglavlju je potrebno definisati dve stavke uslova plaćanja: jedna će predstavljati avans, dok će druga sadržati preostali procenat za naplatu.

Na taj način će biti definisan avansni rok plaćanja koji se u računovodstvo prenosi pomoću komande **Kreiranje avansnih otvorenih stavki**.

Klikom na ovu komandu otvara se obrazac u kojem je potrebno uneti još dva podatka: opis koji će biti evidentiran uz ovu otvorenu stavku i tip dokumenta koji će biti povezan sa vanračunovodstvenom stavkom koja se kreira.

Rezultat postupka je kreiranje vanbilansne otvorene stavke sa iznosom i datumom dospeća definisanim na porudžbini. Ova operacija biće vidljiva u odgovarajućem obrascu za pregled.

### Upravljanje prethodno kreiranim otvorenim stavkama

U ovom obrascu, na prvoj kartici **Prodaja**, moguće je kreirati avansne otvorene stavke i za druge porudžbine kupaca, nezavisno od njihovog kreiranja u samoj porudžbini ili iz stavki isporuke koje se nalaze na drugoj kartici.

Na kartici **Napredno upravljanje** moguće je poništiti prethodno kreirani unos.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-form.png)

Ako korisnik u izvornom prodajnom dokumentu izmeni podatke koji zahtevaju ponovni obračun rokova plaćanja, prikazaće se upozorenje sa pitanjem da li želi da poništi avansnu otvorenu stavku (ukoliko ona još nije naplaćena; u suprotnom poništavanje nije moguće).

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message.png)

### Plaćanje avansnih otvorenih stavki

Kada se avansna otvorena stavka kreira na porudžbini (ili isporuci), a zatim se evidentira računovodstveno knjiženje kojim se vrši njena naplata (zatvaranje stavke), sistem će prikazati upozorenje da je potrebno izvršiti avansno fakturisanje.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message2.png)

Potvrdom kreiranja otvara se obrazac **Upravljanje otvorenim stavkama porudžbine**, u kojem je ponovo moguće pristupiti kartici **Napredno upravljanje** radi fakturisanja.

Nakon izbora odgovarajućeg reda aktivira se dugme za kreiranje fakture.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation.png)

Klikom na dugme otvara se dodatni obrazac za unos podataka potrebnih za kreiranje fakture.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation-popup.png)

Podrazumevano se predlažu tekući datum i opis koji će biti upisan u stavku fakture, dok tip fakture, PDV stopu i šifru prometa korisnik određuje prema potrebi.

### Avansno fakturisanje i knjiženje

Nakon potvrde kreiranja otvara se avansna faktura. Tip stavke automatski se postavlja na **tip 6 – Avans**, kako bi se ista stavka kasnije mogla automatski stornirati na završnoj fakturi kojom se zatvara porudžbina.

:::tip NAPOMENA

Nakon knjiženja fakture neće biti kreirana nova otvorena stavka. Umesto toga, prethodno kreirana vanbilansna avansna otvorena stavka biće ponovo iskorišćena (čak i ako je već u statusu **Zatvorena**) i povezana sa računovodstvenim knjiženjima te fakture.

:::