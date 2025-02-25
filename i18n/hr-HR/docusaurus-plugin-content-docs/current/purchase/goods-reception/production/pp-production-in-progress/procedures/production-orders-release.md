---
title: Izdavanje proizvodnih naloga
sidebar_position: 2
---

:::important Čemu služi   
Postupak **Izdavanja proizvodnih naloga** u Fluentisu omogućuje učinkovito upravljanje prijelazom naloga iz stanja *Pokrenuto* u *Aktivno*. Kroz intuitivno sučelje moguće je filtrirati i odabrati naloge koje treba izdati, pri čemu se automatski generiraju odgovarajući skladišni pokreti za automatsko preuzimanje materijala. Osim toga, ovaj postupak omogućuje vraćanje već izdanih naloga, čime se jamči značajna operativna fleksibilnost u proizvodnom procesu.  
:::

Ovaj obrazac omogućuje promjenu statusa proizvodnih narudžbi i istovremeno kreiranje odgovarajućih skladišnih pomaka za sve artikle koji u  [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla imaju *Tip uzimanja* postavljen na vrijednost **Automatski**.

## Filter

U ovoj kartici moguće je pregledati popis planiranih narudžbi koje još nisu izdane te ih je moguće filtrirati kroz niz kriterija odabira.    

Nakon postavljanja željenih filtera, dovoljno je kliknuti na gumb  **Traži** na *traci izbornika* kako bi se rezultati prikazali unutar mreže rezultata.   

Nakon što su odabrane narudžbe koje se žele izdati, potrebno je koristiti gumb **Izdavanje naloga** na traci izbornika*. Ovaj postupak omogućuje promjenu statusa narudžbi iz *Lansirano* u *Izvršno*i istovremeno kreira skladišne pomake za sve materijale koji imaju *Vrsta uzimanja* postavljen na Vrijednost **Automatski** [MRP Parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla.

## Povrat

U ovoj kartici moguće je izvršiti postupak vraćanja koji omogućuje poništavanje izdavanja proizvodne narudžbe, vraćajući situaciju na stanje prije samog izdavanja, vraćajući status proizvodne narudžbe na *Lansirano* i uklanjajući odgovarajuće skladišne pomake. 

Nakon postavljanja željenih filtera, dovoljno je kliknuti na gumb **Traži** na *traci izbornika* kako bi se rezultati prikazali unutar mreže rezultata. 

Odabirom jedne od redaka u mreži rezultata, prikazat će se odgovarajući skladišni pomaci u donjoj mreži.   

Za pokretanje vraćanja, odaberite jednu ili više narudžbi i kliknite gumb  **Povrat**. 

Vraćanje proizvodne narudžbe moguće je samo ako se generirana narudžba nalazi u statusu *Izvršno* i još nisu započete odgovarajuće proizvodne izjave; ako je narudžba već *Izvršena* vraćanje nije moguće, osim ako se ne započne postupak unatrag počevši od povratka registracije proizvodnih izjava. 

Nakon izvršenja ove procedure, vraćene narudžbe ponovno će biti vidljive u kartici  **Filter** gdje će biti moguće ponovno izdavanje.  

Za detalje o zajedničkom funkcioniranju obrazaca pogledajte link [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).