---
title: Vizualizacija zaliha
sidebar_position: 1
---

Obrazac omogućuje operateru jednostavno izvlačenje informacija o zalihi u skladištu radi provjere skladišta i usklađenosti između fizičke i logičke zalihe.

Kroz filtre je moguće napraviti ciljanu pretragu prema parametrima i prikazati rezultate upita u prikazima rezultata. Ti rezultati mogu biti grupirani prema različitim parametrima radi lakšeg čitanja podataka. Iz prozora je također moguće brzo unijeti neke evidencije o zalihi.

Rezultati pretrage podijeljeni su u različite tablice:

## Artikl

Rezultati su grupirani po artiklu i specificirani su vrijednosti klase, šifre artikla, opis, dodatni opis, varijanta (ako postoji), opis varijante (ako postoji), količina i jedinica mjere.

## Skladište

Rezultati su grupirani po skladištu i specificirane su, osim vrijednosti tablice artikla, i vrijednosti skladišta i opis skladišta.

## Lokacija

Rezultati su grupirani po lokaciji i specificirani su, osim vrijednosti tablice artikla, i vrijednosti lokacije, opis lokacije i stanje lokacije.


## Projekti

Rezultati su grupirani po projektu i specificirani su, osim vrijednosti tablice artikla, i vrijednosti broja, godine i opisa projekta artikla.

## Kupac/Dobavljač

Rezultati su grupirani po kupcu/dobavljaču (prisutni u evidencijama skladišta) i specificirani su, osim vrijednosti tablice artikla, i vrijednosti kupca/dobavljača.

## Lot

Ako postoje artikli upravljani lotovima, rezultati su grupirani po lota i specificirani su, osim vrijednosti tablice artikla, i vrijednosti skladišta, lotovi i raspoložive količine.

## Radni nalog proizvodnje

Rezultati su grupirani po nalogu za proizvodnju i specificirani su, osim vrijednosti tablice artikla, i vrijednosti skladišta, opisa skladišta, lokacije, broja naloga za proizvodnju i godine naloga za proizvodnju.

## Detalji

To je maksimalni detalj rezultata grupiran za sve prethodne tablice. Specificiraju se vrijednosti klase, šifre artikla, opisa artikla, dodatnog opisa artikla, varijante, opisa varijante, opcije, opisa opcije, skladišta, lokacije, broja narudžbe, godine narudžbe, opisa kupca/dobavljača, serije, raspoložive količine, količine zaliha, jedinice mjere i status lokacije.

### Generiranje zapisa

Na kartici **Detalji** zaliha artikla moguće je koristiti gumb **Generiranje zapisa** kako bi se unijeli zapisi skladišta.

*Postupak:*:

- odaberite *Artikl* na prikazu rezultata,
- odaberite *Skladište* u filterima
- postavite prikaz zaliha s oznakom **Prikaza** *Pozitivne* ili *Negativne* zalihe ovisno o tome želite li stvoriti zapis za *isporuku* ili *primanje*,  
- pritisnite gumb *Generiranje zapisa*, koji će otvoriti formu *Pomicanja* gdje je potrebno unijeti vrijednosti Uzroka, Količine, Datum evidentiranja i po potrebi Lokaciju. Uzroci skladišta prisutni u padajućem izborniku su tipa Knjiženja ako je označena opcija prikaza Negativnih zaliha i Ispravljanja ako je označena opcija prikaza *Pozitivnih* zaliha.
- nakon što završite unos polja u formu *Knjiženja*, pritisnite gumb *OK* kako biste se vratili na prikaz zaliha koji će biti ažuriran prema unesenom zapisu.

Kada se u obrascu *Kretanje* unese razlog s protukontom, on će biti predložen u polju **Predložak prijeboja** sa svojom **Lokacijom**, ako je kodificiran u tablici razloga.  
Ako se **Lokacija** izbriše, u zapis će biti unesen ona kodificirana u [Mapi lokacija za artikle](/docs/logistics/warehouse/location/item-location-map), ako postoji, inače će polje ostati prazno.

### Nuliranje zaliha

Na kartici **Detalji** moguće je masovno poništiti zalihe skladišta. Obično se ova funkcija koristi ako postoje neusklađeni podaci negativnih zaliha koje želite poništiti.

*Postupak*:
- odaberite *Skladište* u filterima
- postavite prikaz zaliha s oznakom **Prikaza** *Pozitivne* ili *Negativne* zalihe.  
- na kartici **Detalji** zaliha artikla odaberite sve artikle koje želite poništiti
- pritisnite gumb *Generiranje zapisa*, koji će otvoriti formu *Knjiženja* iz koje možete odabrati uzrok i, bez navođenja količine, pritisnite gumb OK.  
- na taj način primijetit ćete poništenje zaliha za odabrane artikle.
