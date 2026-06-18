---
title: Izračun vrednosti kapitala uloženog u buffere
sidebar_position: 4
---

Ova procedura izračunava prosečnu vrednost kapitala uloženog u artikl kojim se upravlja zalihama prema DDMRP logici (buffer).

Izračun se vrši množenjem vrednosti prosečne zalihe buffera, koja se dobija kao zbir crvene zone i polovine zelene zone, sa jediničnim troškom artikla u bufferu.

Važno je naglasiti da se pri obračunu jediničnog troška uzimaju u obzir samo troškovi nabavnih materijala i eksternih usluga prerade, odnosno direktni i varijabilni troškovi, dok se indirektni troškovi, kao što su troškovi rada, amortizacija mašina i slično, ne uključuju.

Osnovna svrha ove procedure jeste da proveri da li odluka o uvođenju ili uklanjanju buffera smanjuje ukupnu vrednost uloženog kapitala.

Ako odluka dovodi do smanjenja ukupne vrednosti kapitala, smatra se opravdanom, dok bi suprotan slučaj trebalo izbegavati.

Ako buffer artikl poseduje sastavnicu (BOM – Bill of Materials), u okviru nje postoji grana koja se proteže sve do nabavnih artikala. Ta grana predstavlja lanac kritičnih komponenti, odnosno lanac koji određuje vrednost razdvojenog vremena nabavke (DLT – Decoupled Lead Time) nadređenog buffera.

Uobičajeno je da uvođenje buffera za jedan od takvih artikala smanjuje DLT vrednost matičnog buffera, što dovodi do smanjenja njegove prosečne zalihe, dok se istovremeno uvodi nova zaliha za novokreirani buffer.

Pošto jedinični trošak raste kako se napreduje kroz hijerarhiju sastavnice, takva intervencija obično dovodi do smanjenja ukupne vrednosti kapitala uloženog u matični i podređeni buffer.

Da bi se ova pretpostavka potvrdila ili opovrgla, potrebno je pokrenuti ovu proceduru.

Za potrebe ovog obračuna koriste se isključivo direktni troškovi, jer se tradicionalni obračun pune cene koštanja sa raspodelom indirektnih troškova preko cost driver-a smatra neadekvatnim i potencijalno pogrešnim za donošenje poslovnih odluka.

Takav obračun pune cene koštanja ima smisla samo za potrebe vrednovanja zaliha prethodne poslovne godine radi ispunjavanja računovodstvenih obaveza u skladu sa GAAP standardima (Generally Accepted Accounting Principles), koji su prihvaćeni na globalnom nivou. Razlog tome je što se tek naknadno mogu precizno utvrditi proizvedene količine, čime se omogućava pouzdan obračun jedinične cene.

Za nabavne artikle koristi se vrednost definisana u poljima troškova unutar šifarnika artikla, pri čemu se može koristiti poslednja, prosečna ili standardna cena, u zavisnosti od izbora korisnika prilikom pokretanja procedure.

Kod artikala proizvedenih putem eksterne proizvodnje, trošak prerade (poslednja, prosečna ili standardna cena, u skladu sa izborom korisnika) dobija se oduzimanjem ukupnog troška komponenti sastavnice od ukupnog troška gotovog proizvoda.

Važno je napomenuti da se izračunate vrednosti zasnivaju na veličinama crvene i zelene zone svakog buffera, definisanim u tabeli DDMRP parametara.

Ukoliko u trenutku pokretanja procedure postoje izuzeci u faktoru korekcije potražnje (Demand Adjustment Factor) ili u zonama za koje je prethodno izvršena procedura ažuriranja zona, procena vrednosti uloženog kapitala uzeće u obzir i te korekcije.

Zbog toga ista procedura može dati različite vrednosti za isti artikl u različitim vremenskim periodima.