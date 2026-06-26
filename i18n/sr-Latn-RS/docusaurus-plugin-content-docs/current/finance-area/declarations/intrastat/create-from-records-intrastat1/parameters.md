---
title: Parametri
sidebar_position: 3
---

U okviru odeljka **Parametri** procedura prikazuje sve redove unetih transakcija. Konkretno:

- **Status i PDV šifra** preuzimaju se iz šifarnika partnera;
- **Iznos u valuti** prikazuje iznos unet prilikom knjiženja (polje je dostupno samo za Intra2);
- **Broj dokumenta**, **Datum knjiženja** i **Šifra usluge** preuzimaju se iz šifarnika klijenta.

Nakon popunjavanja podataka moguće je pokrenuti kreiranje obrasca. Tom prilikom detalji se prenose u odeljke *bis*, *ter* i *quater*.

Automatsko raspoređivanje u odgovarajući odeljak obrasca zavisi od vrednosti polja **PDV šifra** u PDV prikazu knjiženja:

- ako je postavljena vrednost **Generički**, transakcija će biti preneta u odeljak **bis**;
- ako je postavljena vrednost **Usluga**, transakcija će biti preneta u odeljak **quater**.

Na osnovu ove vrednosti automatski se popunjava polje **BisTer** na kartici *Intrastat* knjiženja, koje određuje u koji odeljak Intrastat obrasca će zapis biti prenet prilikom kreiranja obrasca.

Odeljak **ter** popunjava se takođe preko kartice **Intrastat**, kada se knjiži odobrenje i u PDV prikazu knjiženja aktivira oznaka **Odobrenje za prethodne godine**. Ova oznaka identifikuje ispravke koje se ne odnose na mesec ili tromesečje registracije i zbog toga zahtevaju popunjavanje odeljka **ter**.

Pored ove oznake moguće je uneti i referentni datum računa koji se ispravlja.