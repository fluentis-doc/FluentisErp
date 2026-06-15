---
title: Izmena - Ponovni obračun rizika kupca
sidebar_position: 1
---

Ovaj obrazac služi za pregled trenutnog stanja kupca, dok obrazac **Korišćenje kredita** omogućava čuvanje svakog izvršenog obračuna i pregled istorijskih podataka.

U nastavku je detaljan opis polja koja se prikazuju, a koja su u osnovi ista kao i u obrascu za izloženost kupaca.

U zaglavlju se nalaze parametri obračuna: konto kupca, datum početka obračuna (postavljen prema podrazumevanim parametrima modula za rizik kupaca), referentni datum obračuna (podrazumevano tekući datum), broj dana kašnjenja u naplati (preuzet iz parametara modula) i opcija za uključivanje stavki povezanih sa privremenim računovodstvenim knjiženjima.

Nakon pritiska na dugme **Izračunaj**, prikazuju se sledeće vrednosti:

**Promet 12M**: promet (iz prodajnog ciklusa, odnosno izlaznih faktura) ostvaren u poslednjih 12 meseci pre referentnog datuma;

**Godišnji promet**: promet (iz prodajnog ciklusa, odnosno izlaznih faktura) ostvaren od početka tekuće godine;

U sekciji **Stanje otvorenih stavki** prikazuju se ukupni iznosi duguje/potražuje i saldo otvorenih stavki;

U sekciji **Plaćanja iz privremenih knjiženja** prikazuju se eventualni iznosi plaćanja uneti kroz privremena računovodstvena knjiženja;

U sekciji **Stanje glavne knjige** prikazuju se ukupni iznosi duguje/potražuje i saldo glavne knjige;

**Dospela vrednost / Saldo glavne knjige**: prikazuje ukupne iznose duguje/potražuje iz otvorenih stavki ili salda glavne knjige, kao što je prikazano u prethodnim sekcijama;

**Fakture za knjiženje**: iznosi faktura koje su odštampane, ali još nisu proknjižene;

**Otpremnice za fakturisanje**: iznosi otpremnica koje su odštampane, ali još nisu fakturisane;

**Porudžbine za izvršenje**: iznosi porudžbina koje su odštampane i potvrđene, ali još nisu realizovane;

**Izdati vrednosni papiri**: iznosi vrednosnih papira koji su izdati i proknjiženi, ali još nisu predati na naplatu;

**Vrednosni papiri u naplati**: iznosi vrednosnih papira koji su predati na naplatu, ali imaju datum dospeća (uvećan za broj dana definisan u parametrima obračuna) koji je veći od referentnog datuma;

U sekciji **Nenaplaćeni vrednosni papiri** prikazuju se nenaplaćeni iznosi koji nisu proknjiženi ili, ukoliko je uključena odgovarajuća opcija, i oni koji su već proknjiženi, kako po iznosu tako i po broju stavki.

Na osnovu zbira prethodnih vrednosti izračunava se **Rizik kupca**, koji se poredi sa odobrenim kreditnim limitom i prikazuje eventualno prekoračenje kredita.

Polje **Dospelo** prikazuje iznos otvorenih stavki kojima je istekao rok dospeća i predstavlja dodatni element za procenu finansijskog stanja kupca.

| Funkcija | Značenje |
| --- | --- |
| Sačuvaj | Dugme koje omogućava čuvanje dobijenog rezultata. |
| Izračunaj | Pokreće postupak obračuna ukupne situacije rizika za kupca. |