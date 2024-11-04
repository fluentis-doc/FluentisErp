---
title: Sažeci
sidebar_position: 5
---

U Sažecima su prikazane glavne informacije cijelog dokumenta.

## Konačni popusti

Mogu se unijeti samo popusti izraženi u postocima, koji se primjenjuju na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji izračunavaju se i prikazuju na svakom artiklu dokumenta, na *kartici Artikli > kartica Popusti/Cjenici*.


> **Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (prethodno definiranih u Vrstama popusta), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući je li popust izračunat na osnovici ili se primjenjuje kaskadno u odnosu na prethodno primijenjene popuste;       
> **Prioritet**: predstavlja redoslijed primjene popusta; sortiranje se vrši uzlazno;    
> **Kaskada/Iznos**: određuje koristi li se za izračun popusta osnovica (cijena * količina) - (već izračunati popusti) ili (cijena * količina);     
> **Vrijednost**: numerička vrijednost završnog popusta koji treba primijeniti.  


## Konačni troškovi/popusti/doplate

Ovdje se prikazuju troškovi uneseni u Šifarnik  kontakata, u kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

> **Vrsta/Opis**: omogućuje odabir vrste troška (prethodno definirane u tablici Tipovi troškova), dodjeljujući svakoj vrsti postotak troška za primjenu;   
> **Iznos troška**: označava vrijednost troška izraženu u valuti dokumenta;    
> **PDV**: označava stopu PDV-a koja se primjenjuje na unesene troškove;    
> **Postotak/Vrijednost**: označava hoće li se troškovi izračunati kao postotak ili kao unaprijed određeni novčani iznos. Odabirom Iznos troška treba unijeti u odgovarajuće polje;    
> **Postotak**: numerička vrijednost postotka troška.  


## Ostala polja

**Volumen**: prikazuje kumulativni volumen koji proizlazi iz zbroja volumena artikala (vrijednost se preuzima iz kartice *Šifarnik artikla > kartica Težine/Dimenzije*), kada se jedinica mjere volumena artikala podudara s onom navedenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj podatak popunjen;    
**Neto težina**: prikazuje kumulativnu neto težinu koja proizlazi iz zbroja neto težina artikala (vrijednost se preuzima iz kartice *Šifarnik artikla > kartica Težine/Dimenzije*), kada se jedinica mjere težine artikala podudara s onom navedenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj podatak popunjen;    
**Bruto težina**: prikazuje kumulativnu bruto težinu koja proizlazi iz zbroja bruto težina artikala (vrijednost se preuzima iz kartice *Šifarnik artikla > kartica Težine/Dimenzije*), kada se jedinica mjere težine artikala podudara s onom navedenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj podatak popunjen;    
**Paketi**: prikazuje broj komada na temelju podataka unesenih u kartici *Šifarnik artikla > kartica Težine/Dimenzije*, u poljima *Artikli prisutni u jednom pakiranju* ili *Paketi za oblikovanje*. Razmatraju se samo artikli koji imaju ovaj podatak popunjen.   

## Transport

Automatski se predlaže *Vrsta prijevoza prema postavkama* u  *Šifarniku kontakta > kartica  [Isporuka](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (radio button: Pošiljatelj/Primatelj/Prijevoznik), ali podaci se mogu izmijeniti.  

## Sveukupni Dokument

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;
**Zaduženje**: predstavlja iznos eventualnog avansa primljenog za dokument;
**Poklonjeni iznos**: predstavlja iznos artikala koji su poklonjeni, uneseni u kartici *Artikli*;  
**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez završnih popusta;  
**Neto iznos artikala**: *Bruto iznos artikala* – *Ukupni primijenjeni popusti*;  
**Ukupno konačnih popusta**: predstavlja vrijednost završnih popusta izraženih u postocima na bruto iznos artikala;    
**Neto iznos završnih popusta**: *Neto iznos artikala* - *Ukupni završni popusti*;  
**Naknade naplate**: predstavlja zbroj naknada za naplatu unesenih u mreži *Naknade*;    
**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u mrežu *Naknade*;   
**Oporezivo**: *Neto iznos artikala* – *Završni popusti* + *Ukupni nepotvrđeni troškovi* + *Ukupni potvrđeni troškovi*;  
**Porezi**: predstavlja zbroj vrijednosti u pregledima PDV-a;  
**Ukupno**: *Osnovica + PDV*.