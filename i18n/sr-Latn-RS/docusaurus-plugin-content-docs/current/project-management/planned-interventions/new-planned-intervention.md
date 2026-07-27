---
title: Nova planirana intervencija
sidebar_position: 1
---

Na ovoj formi moguće je uneti novu **Planiranu intervenciju**.  
Podaci koje treba uneti su:

**Vrsta planiranja**: sadrži tipologiju intervencije, konfigurisanu u tabeli [Vrsta planiranja](/docs/configurations/tables/project-management/planned-type/);
**Broj/Datum**: sadrži broj i datum planirane intervencije;
**Kupac**: sadrži klijenta kojem je intervencija namenjena;
**Kontakt**: sadrži eventualni *Kontakt* kojem je intervencija namenjena;
**Kategorija aktivnosti**: sadrži kategoriju aktivnosti;
**Projekat**: sadrži povezani [Projekat](/docs/project-management/projects/search-projects-intro/) sa intervencijom;
**Tiketi/ozbiljnost tiketa**: eventualni referentni tiket sa pripadajućim stepenom ozbiljnosti;
**SLA**: predstavlja Ugovor o nivou usluge;
**Status**: sadrži status intervencije, između Planirano, Potvrđeno, Zatvoreno ili Otkazano;
**Potvrdi datum**: sadrži datum potvrde intervencije.

Zatim postoje različite kartice u koje možete uneti dodatne informacije o planiranoj intervenciji.

**Kartica Resursi**

Na ovoj kartici moguće je uneti **Resurs** koji će izvršiti planiranu intervenciju. Podaci za unos su:

**Resurs**: sadrži Resurs;
**Zaposleni**: sadrži povezani konto Zaposlenog;
**Od planiranog datuma**: sadrži datum i vreme početka intervencije;
**Vreme početka pauze**: sadrži vreme početka pauze;
**Vreme završetka pauze**: sadrži vreme završetka pauze;
**Do planiranog datuma**: sadrži datum i vreme završetka intervencije;
**Efektivno vreme**: sadrži stvarno potrebno vreme, obračunato prema prethodnim poljima;
**Opis**: obavezno polje u kojem se opisuje intervencija i eventualne napomene za resurs.

Zatim postoje neke opcije koje regulišu obaveznost **Tehničara**, **Datuma** i označavaju da li se aktivnosti smatraju naplativim ili ne.

![](/img/hr-HR/project-management/planned-intervention/resource.png)

**Kartica Predlog rešenja**

Na ovoj kartici nalaze se dva opisna atributa sa slobodnim unosom: **Rešenje** i **Beleška**.

**Kartica Procena**

Na ovoj kartici moguće je uneti procenu planirane intervencije putem sledećih podataka:

**Jedinica mere**: sadrži JM koju treba koristiti za kvantifikaciju intervencije;

**Prodajni cenovnik**: moguće je povezati [Cenovnik](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) prodaje iz kojeg treba preuzeti informacije;

**Količina**: moguće je direktno popuniti na ovoj kartici stvarno vreme, koje će se pojaviti u odgovarajućem polju na kartici Resursi;

**Neto jedinična cena**: sadrži jediničnu cenu prema JM;

**Ukupan iznos**: polje koje se obračunava na osnovu prethodno unetih podataka;

**Valuta**: označava valutu koju treba koristiti.

Prilikom izbora projekta automatski se predlažu sledeće vrednosti:

- Prodajni cenovnik
- Tiket
- Opis
- Kategorija aktivnosti
- Naplativo
- Aktivnost sa dodatom vrednošću
- Artikal (ako već nije unet)
- Jedinica mere (ako već nije uneta)
- Jedinična neto cena

Jedinična neto cena ažurira se vrednošću definisanom na projektu ako je artikal već prisutan na planiranoj intervenciji i podudara se sa artiklom definisanim na projektu.

Ako artikal nije prisutan na planiranoj intervenciji i preuzme se sa projekta, jedinična neto cena takođe će se ažurirati vrednošću definisanom na projektu.

![](/img/it-it/project-management/planned-intervention/stima.png)

**Kartica Povezani dokument**

Na ovoj kartici moguće je pregledati i dodavati priloge koji će biti sačuvani u modulu Fluentis Dokumenti. Da biste dodali datoteku, dovoljno je koristiti **drag & drop**, odnosno izabrati datoteku sa trenutne lokacije i prevući je u prikaz.
Zatim će se otvoriti sledeća kartica:

![](/img/it-it/project-management/planned-intervention/document.png)

U polju **Vrsta dokumenta** na vrhu obrasca moguće je izabrati vrstu dokumenta koja se trenutno učitava izborom jedne od dostupnih.
Zatim pritiskom na dugme **Primeni**, ta vrednost će biti preneta u odgovarajuće polje na svim datotekama koje se tada učitavaju. **Ime** i **Vrsta datoteke** automatski se dobijaju iz postupka.

Pritiskom na **U redu**, program će sačuvati datoteku u Fluentis Dokumenti.

**Kartica Dodatni podaci**

Na ovoj kartici moguće je uneti eventualne Dodatne podatke; za više informacija pogledajte odeljak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata/).