---
title: Nova Planirana Intervencija
sidebar_position: 1
---


Na ovoj formi moguće je unijeti novu **Planiranu Intervenciju**. 
Podaci koji se trebaju unijeti su:

**Vrsta planiranja**: sadrži tipologiju intervencije, konfiguriranu tablici [Vrsta planiranja](/docs/configurations/tables/project-management/planned-type/);

**Broj/Datum**: sadrži broj i datum planirane intervencije;

**Kupac**: sadrži klijenta kojem je intervencija namijenjena;

**Kontakt**: sadrži eventualni *Kontakt* kojem je intervencija namijenjena;

**Kategorija aktivnosti**: sadrži kategoriju aktivnosti;

**Projekt**: sadrži povezani [Projekt](/docs/project-management/projects/search-projects-intro/) s intervencijom;

**Tiketi/Ozbiljnost Tiketa**: eventualni referentni tiket s pripadajućim stupnjem ozbiljnosti;

**SLA**: to je Ugovor o Razini Usluge;

**Status**: sadrži status intervencije, između Planirano, Potvrđeno, Zatvoreno ili Otkazano;

**Potvrdi datum**: sadrži datum potvrde intervencije.

 

Zatim postoje različite kartice u koje možete unijeti dodatne informacije o planiranoj intervenciji.

**Kartica Resursa**
Na ovoj kartici moguće je unijeti **Resurs** koji će izvršiti planiranu intervenciju. Podaci za unos su:
**Resurs**: sadrži Resurs;
**Zaposlenik**: sadrži povezani račun Zaposlenika, 
**Od planiranog datuma**: sadrži datum i vrijeme početka intervencije;
**Vrijeme početka pauze**: sadrži vrijeme početka pauze;
**Vrijeme završetka pauze**: sadrži vrijeme završetka pauze;
**Do planiranog datuma**: sadrži datum i vrijeme završetka intervencije,
**Efektivno vrijeme**: sadrži stvarno potrebno vrijeme, izračunato prema prethodnim poljima;
**Opis**: obavezno polje u kojem se opisuje intervencija i eventualne napomene za resursu.
Zatim postoje neki flagovi koji reguliraju obveznost **Tehničara**, **Datuma** i označavaju li se aktivnosti naplativim ili ne.

![](/img/hr-HR/project-management/planned-intervention/resource.png)

**Kartica Prijedlog Rješenja**
Na ovoj kartici nalaze se dva opisna atributa sa slobodnim upisom: **Rješenje** i **Napomena**.

**Kartica Procjena**
Na ovoj kartici moguće je unijeti procjenu planirane intervencije putem sljedećih podataka: 
**Mjerna jedinica**: sadrži MJ koju treba koristiti za kvantificiranje intervencije; 
**Prodajni cjenik**: moguće je povezati [Cjenik](/docs/sales/sales-price-list/insert-sales-price-list/) prodaje iz kojeg treba uzeti informacije;
**Količina**: moguće je izravno popuniti u ovoj kartici stvarno vrijeme, koje će se pojaviti u odgovarajućem polju na kartici Resursa; 
**Neto jedinična cijena**: sadrži jediničnu cijenu prema MJ; 
**Ukupni iznos**: to je polje izračunato prema prethodno unesenim podacima; 
**Valuta**: označava valutu koju treba koristiti. 

![](/img/it-it/project-management/planned-intervention/stima.png)

**Kartica Povezanog dokumenta**
Na ovoj kartici moguće je pregledavati i dodavati priloge koji će se spremiti u modulu Fluentis Dokumenti. Da biste dodali datoteku, dovoljno je koristiti drag and drop, odnosno odabrati datoteku s trenutnog mjesta i ispustiti je unutar prikaza. 
Zatim će se otvoriti sljedeća kartica:

![](/img/it-it/project-management/planned-intervention/document.png)

U polju **Vrsta dokumenta** na vrhu obrasca moguće je odabrati vrstu dokumenta koja se trenutno učitava odabirom iz dostupnih. 
Zatim pritiskom na gumb **Primijeni**, ta će vrijednost biti prenesena u odgovarajuće polje na svim datotekama koje se tada učitavaju. **Ime** i **Vrsta datoteke** automatski se dobivaju iz postupka. 
Pritiskom na U redu, program će datoteku spremiti u Fluentis Dokumenti.

**Kartica Dodatnih Podataka** 
Na ovoj kartici moguće je unijeti eventualne Dodatne Podatke; za više informacija treba podesiti odjeljak [Dodatni Podaci](/docs/configurations/utility/extra-data/extradata/search-extradata/).

