---
title: Vizualizacija zaliha
sidebar_position: 1
---

Obrazac omogućava operateru jednostavno izvlačenje informacija o zalihama u skladištu radi provere skladišta i usklađenosti između fizičkih i logičkih zaliha.

Pomoću filtera moguće je izvršiti ciljanu pretragu prema parametrima i prikazati rezultate upita u prikazima rezultata. Ti rezultati mogu biti grupisani prema različitim parametrima radi lakšeg čitanja podataka. Iz prozora je takođe moguće brzo uneti neke evidencije o zalihama.

Rezultati pretrage podeljeni su u različite tabele:

## Artikal

Rezultati su grupisani po artiklu i navedene su vrednosti klase, šifre artikla, opisa, dodatnog opisa, varijante (ako postoji), opisa varijante (ako postoji), količine i jedinice mere.

## Skladište

Rezultati su grupisani po skladištu i navedene su, pored vrednosti iz tabele artikala, i vrednosti skladišta i opis skladišta.

## Lokacija

Rezultati su grupisani po lokaciji i navedene su, pored vrednosti iz tabele artikala, i vrednosti lokacije, opis lokacije i stanje lokacije.


## Projekti

Rezultati su grupisani po projektu i navedene su, pored vrednosti iz tabele artikala, i vrednosti broja, godine i opisa projekta artikla.

## Kupac/Dobavljač

Rezultati su grupisani po kupcu/dobavljaču (prisutnim u evidencijama skladišta) i navedene su, pored vrednosti iz tabele artikala, i vrednosti kupca/dobavljača.

## Lot

Ako postoje artikli kojima se upravlja po lotovima, rezultati su grupisani po lotu i navedene su, pored vrednosti iz tabele artikala, i vrednosti skladišta, lotovi i raspoložive količine.

## Radni nalog proizvodnje

Rezultati su grupisani po nalogu za proizvodnju i navedene su, pored vrednosti iz tabele artikala, i vrednosti skladišta, opisa skladišta, lokacije, broja naloga za proizvodnju i godine naloga za proizvodnju.

## Detalji

Ovo je maksimalni nivo detalja rezultata grupisanih za sve prethodne tabele. Navode se vrednosti klase, šifre artikla, opisa artikla, dodatnog opisa artikla, varijante, opisa varijante, opcije, opisa opcije, skladišta, lokacije, broja narudžbine, godine narudžbine, opisa kupca/dobavljača, serije, raspoložive količine, količine zaliha, jedinice mere i statusa lokacije.

### Generisanje zapisa

Na kartici **Detalji** zaliha artikla moguće je koristiti dugme **Generisanje zapisa** kako bi se uneli skladišni zapisi.

*Postupak:*:

- odaberite *Artikal* u prikazu rezultata,
- odaberite *Skladište* u filterima
- postavite prikaz zaliha sa oznakom **Prikaz** *Pozitivne* ili *Negativne* zalihe u zavisnosti od toga da li želite da kreirate zapis za *isporuku* ili *prijem*,  
- pritisnite dugme *Generisanje zapisa*, koje će otvoriti formu *Kretanja* gde je potrebno uneti vrednosti Uzroka, Količine, Datuma evidentiranja i, po potrebi, Lokacije. Uzroci skladišta prisutni u padajućem meniju su tipa Knjiženja ako je označena opcija prikaza Negativnih zaliha i Ispravke ako je označena opcija prikaza *Pozitivnih* zaliha.
- nakon što završite unos polja u formu *Knjiženja*, pritisnite dugme *OK* kako biste se vratili na prikaz zaliha koji će biti ažuriran prema unetom zapisu.

Kada se u obrascu *Kretanje* unese uzrok sa protukontom, on će biti predložen u polju **Šablon prebijanja** sa svojom **Lokacijom**, ako je šifrovan u tabeli uzroka.  
Ako se **Lokacija** izbriše, u zapis će biti uneta ona šifrovana u [Mapi lokacija za artikle](/docs/logistics/warehouse/location/item-location-map), ako postoji, u suprotnom će polje ostati prazno.

### Nuliranje zaliha

Na kartici **Detalji** moguće je masovno poništiti zalihe skladišta. Obično se ova funkcija koristi ako postoje neusaglašeni podaci negativnih zaliha koje želite da poništite.

*Postupak*:
- odaberite *Skladište* u filterima
- postavite prikaz zaliha sa oznakom **Prikaz** *Pozitivne* ili *Negativne* zalihe.  
- na kartici **Detalji** zaliha artikla odaberite sve artikle koje želite da poništite
- pritisnite dugme *Generisanje zapisa*, koje će otvoriti formu *Knjiženja* iz koje možete odabrati uzrok i, bez navođenja količine, pritisnite dugme OK.  
- na taj način primetićete poništavanje zaliha za odabrane artikle.

## Sažetak i dodatne informacije

U ovom dokumentu opisana je funkcionalnost prikaza zaliha u Fluentisu, sa naglaskom na važnost efikasnog upravljanja skladišnim resursima. Opisani su različiti načini grupisanja podataka i postupci za kreiranje skladišnih knjiženja i svođenje zaliha na nulu.

Za dodatne informacije pogledajte odeljke koji se odnose na [Mapu lokacija po artiklu](/docs/logistics/warehouse/location/item-location-map) i upravljanje skladišnim knjiženjima.