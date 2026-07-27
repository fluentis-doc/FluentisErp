---
title: Ažuriranje cijene projekta
sidebar_position: 3
---

Procedura **Ažuriranja cijene projekta** u redovima projekta, zahtjevima za intervencijom, planiranim intervencijama i intervencijama prema postavljenim parametrima u donjem dijelu obrasca.

Za više detalja o zajedničkim dijelovima obrazaca, pogledajte link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

## Procedura  

1. Postavite željene **filtre** u odjeljku filtara i pritisnite gumb **Traži** u glavnom izborniku;  
2. Odaberite redove za ažuriranje u rezultatima tablice;  
Odabir se može napraviti ručno u tablici rezultata ili korištenjem gumba **Označi sve** ili **Odznači sve** u izborniku trake;  
3. Postavite **ažuriraj cijenu i cjenik** i **PDV** u odjeljku **Cijena/PDV** u donjem dijelu prozora;  
4. Pritisnite **Procesuiraj cijene** kako biste pregledali promjene koje će se pojaviti u stupcu **Nova cijena** i **PDV-u**. Ako se koristi cjenik za ažuriranje cijene, informacije o cjeniku bit će vidljive u stupcima **Cjenik prodaje** i **Datum cjenika**..

:::note Napomena
Promjene u ovoj fazi primjenjuju se samo na pregled, još nisu stvarne u dokumentima.
:::

5. Definirajte u odjeljku parametara **dokumente** na koje želite primijeniti promjene i **opcije** povezane s WBS-ovima koje treba ažurirati;  
6. Pritisnite **Ažuriraj** kako biste stvarno primijenili promjene u dokumentima.

## Cijena/PDV

**Forsiraj cijenu**: koristi se ova opcija ako želite ručno navesti novu cijenu;

**Ažuriraj cjenik i cijenu prema posljednjem važećem cjeniku**: ako je označeno, koristit će se posljednji valjani cjenik za određivanje nove cijene;

**Ažuriraj cijenu i cjenik s cjenikom**: ako je označeno, koristit će se cjenik unesen naknadno kako bi se odredila nova cijena;

**Forsiraj PDV**: ručno navesti kôd PDV-a koji će se koristiti za odabrane retke, koji će se zatim upisati u stupac PDV tablice rezultata;

**Ažuriraj PDV iz šifarnika kupaca**: PDV kod određuje se vrijednošću unesenom u evidenciji klijenta.

## Opcije

**Dupliciraj redak WBS-a za ažuriranje**: ako je označeno, redci WBS-a koji se ažuriraju dupliciraju u projektu;

**Storno dana dodijeljenih u dupliciranoj WBS**: ako je označeno, dani dodijeljeni dupliciranom WBS-u bit će poništeni iz prethodnog WBS-a.
  
## Dokumenti

**Ažuriranje cijene projekata, zahtjeva za intervenciju i planiranih intervencija povezanih s WBS-om koji još nisu dovršeni**
: kada se redovi projekta ažuriraju, dokumenti zahtjeva i planiranih intervencija koji još nisu izvršeni automatski se ažuriraju;

**Ažuriranje povezanih aktivnosti na WBS-u za koje nije izdan račun**: u ovom slučaju bit će ažurirani podaci o redu usluge i podaci povezane stavke u kartici Planiranje fakturiranja.

