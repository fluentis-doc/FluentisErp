---
title: Vrijednost odabira definicije matrice
sidebar_position: 3
---

Otvaranjem ove tablice pristupa se sučelju za pretraživanje prethodno kodificiranih definicija matrica, što je polazna točka za kreiranje novih.
Otvaranjem definicije prikazuju se podaci zaglavlja i dvije donje kartice.        

## Zaglavlje

Podaci zaglavlja su sljedeći:
- **Tip**: polje nije aktivno u ovoj verziji. 
- **Šifra/Opis**: jedinstveni identifikatori definicije.
- **Poslovni objekt**: sadrži poslovni objekt za koji je ova definicija valjana.    

## Kartica Dimenzija matrice

U ovoj sekciji odabiru se [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) koji će se koristiti za izradu matrice, kao što su *Veličina* i *Boja*. Za izgradnju matrice moguće je koristiti Extra Data tabličnog tipa koji daju vrijednosti potrebne za popunjavanje matrice. U kartici, u mreži s desne strane pod nazivom *Vrijednosti rezultata*, navedeni su svi valjani Extra Data za poslovni objekt specificiran u zaglavlju. Iz ovog popisa moguće je odabrati Extra Data koji će popuniti matricu i povući ih u mrežu s lijeve strane. Na taj se način specificira, primjerice, da će *Veličina* i *Boja* činiti matricu. Koje vrijednosti veličine i boje bit će valjane, definirat ćemo u tablici [Matrice instance](/docs/configurations/tables/CPQ/instance-matrices).         
U ovoj mreži također je moguće odrediti poziciju podataka na X i Y osi. 

## Kartica Definicija pomoćne matrice

Kada je potrebno koristiti više od dva Extra Data za izradu matrice, koristi se pomoćna matrica. Ona je podijeljena u dvije mreže.         
Mreža s lijeve strane, nazvana *Matrice*, sadrži stupce **Šifra** i **Opis**, koji identificiraju različite pomoćne matrice. Preporučuje se dodijeliti odgovarajuću šifru i opis kako bi se jasno razlikovali korišteni Extra Data i olakšala identifikacija referentne kombinacije.
U mreži s desne strane, nazvanoj *Detalji matrice*, unose se valjani Extra Data za odabranu pomoćnu matricu u mreži s lijeve strane. Mogu se odabrati samo oni Extra Data koji su valjani za ovu definiciju i koji su već uneseni u prethodnoj kartici.