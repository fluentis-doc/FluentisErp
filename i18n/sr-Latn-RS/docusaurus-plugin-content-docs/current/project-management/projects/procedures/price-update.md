---
title: Ažuriranje cene projekta
sidebar_position: 3
---

Procedura **Ažuriranja cene projekta** u redovima projekta, zahtevima za intervenciju, planiranim intervencijama i intervencijama prema podešenim parametrima u donjem delu obrasca.

Za više detalja o zajedničkim delovima obrazaca pogledajte link [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).

## Procedura

1. Podesite željene **filtere** u odeljku filtera i pritisnite dugme **Traži** u glavnom meniju;
2. Izaberite redove za ažuriranje u rezultatima tabele;  
Izbor se može izvršiti ručno u tabeli rezultata ili korišćenjem dugmadi **Označi sve** ili **Poništi izbor svih** na alatnoj traci;
3. Podesite **ažuriraj cenu i cenovnik** i **PDV** u odeljku **Cena/PDV** u donjem delu prozora;
4. Pritisnite **Obradi cene** kako biste pregledali promene koje će biti prikazane u kolonama **Nova cena** i **PDV**. Ako se za ažuriranje cene koristi cenovnik, informacije o cenovniku biće vidljive u kolonama **Cenovnik prodaje** i **Datum cenovnika**.

:::note Napomena
Promene u ovoj fazi primenjuju se samo na pregled i još nisu stvarno primenjene u dokumentima.
:::

5. Definišite u odeljku parametara **dokumente** na koje želite da primenite promene i **opcije** povezane sa WBS-ovima koje treba ažurirati;
6. Pritisnite **Ažuriraj** kako biste stvarno primenili promene u dokumentima.

## Cena/PDV

**Forsiraj cenu**: koristi se ova opcija ako želite ručno da navedete novu cenu;

**Ažuriraj cenovnik i cenu prema poslednjem važećem cenovniku**: ako je označeno, koristiće se poslednji važeći cenovnik za određivanje nove cene;

**Ažuriraj cenu i cenovnik iz cenovnika**: ako je označeno, koristiće se naknadno uneti cenovnik za određivanje nove cene;

**Forsiraj PDV**: ručno navedite PDV šifru koja će se koristiti za izabrane redove, a koja će zatim biti upisana u kolonu PDV u tabeli rezultata;

**Ažuriraj PDV iz šifarnika kupaca**: PDV šifra određuje se vrednošću unetom u šifarnik kupca.

## Opcije

**Dupliraj red WBS-a za ažuriranje**: ako je označeno, redovi WBS-a koji se ažuriraju dupliraju se u projektu;

**Storno dana dodeljenih u dupliranom WBS-u**: ako je označeno, dani dodeljeni dupliranom WBS-u biće poništeni iz prethodnog WBS-a.

## Dokumenti

**Ažuriranje cene projekata, zahteva za intervenciju i planiranih intervencija povezanih sa WBS-om koji još nisu završeni**
: kada se redovi projekta ažuriraju, dokumenti zahteva i planiranih intervencija koji još nisu izvršeni automatski se ažuriraju;

**Ažuriranje povezanih aktivnosti na WBS-u za koje nije izdat račun**: u ovom slučaju biće ažurirani podaci o redu usluge i podaci povezane stavke na kartici Planiranje fakturisanja.