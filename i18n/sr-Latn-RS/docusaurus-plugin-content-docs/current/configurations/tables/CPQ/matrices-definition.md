---
title: Definisanje matrice
sidebar_position: 3
---

Otvaranjem ove tabele pristupa se interfejsu za pretragu prethodno kodifikovanih definicija matrica, što predstavlja polaznu tačku za kreiranje novih.

Otvaranjem definicije prikazuju se podaci zaglavlja i dve donje kartice.

## Zaglavlje

Podaci zaglavlja su sledeći:

- **Tip**: polje nije aktivno u ovoj verziji.
- **Šifra/Opis**: jedinstveni identifikatori definicije.
- **Poslovni objekat**: sadrži poslovni objekat za koji ova definicija važi.

## Kartica Dimenzije matrice

U ovom odeljku biraju se [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) koji će se koristiti za izradu matrice, kao što su *Veličina* i *Boja*. Za izradu matrice moguće je koristiti Extra Data tabelarnog tipa koji obezbeđuju vrednosti potrebne za popunjavanje matrice.

Na kartici se u mreži sa desne strane, pod nazivom *Vrednosti rezultata*, navode svi važeći Extra Data za poslovni objekat naveden u zaglavlju. Sa ove liste moguće je izabrati Extra Data koji će popuniti matricu i prevući ih u mrežu sa leve strane. Na taj način se, na primer, definiše da će *Veličina* i *Boja* činiti matricu. Koje će vrednosti veličine i boje biti važeće definiše se u tabeli [Instance matrice](/docs/configurations/tables/CPQ/instance-matrices).

U ovoj mreži takođe je moguće odrediti poziciju podataka na X i Y osi.

## Kartica Definicija pomoćne matrice

Kada je za izradu matrice potrebno koristiti više od dva Extra Data, koristi se pomoćna matrica. Ona je podeljena na dve mreže.

Mreža sa leve strane, pod nazivom *Matrice*, sadrži kolone **Šifra** i **Opis**, koje identifikuju različite pomoćne matrice. Preporučuje se dodeljivanje odgovarajuće šifre i opisa kako bi se jasno razlikovali korišćeni Extra Data i olakšala identifikacija referentne kombinacije.

U mreži sa desne strane, pod nazivom *Detalji matrice*, unose se važeći Extra Data za izabranu pomoćnu matricu iz leve mreže. Moguće je izabrati samo one Extra Data koji važe za ovu definiciju i koji su već uneti na prethodnoj kartici.