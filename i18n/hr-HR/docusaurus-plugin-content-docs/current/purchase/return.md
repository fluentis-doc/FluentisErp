---
title: Odobrenja
sidebar_position: 9
--- 

Nužno je napomenuti da su od verzije 607, odobrenja su dobila artikle sa negativnom količinom; u slučaju unosa pozitivne količine, pojavit će se skočni prozor za promjenu znaka količine. 
Povratni računi od dobavljača razlikuju se od drugih vrsta računa jer je **Tip računa** (prikazani u tablici [Tipovi nabavnih računa](/docs/configurations/tables/purchase/purchase-invoices-type)) i **Odobrenja dobavljača** (slično će povratna dostavnica imati  **Povratni** tip). 

Izrada povrata dobavljača može se izvršiti ručno ili postupkom.

Ručno stvaranje dobavljačkog Povrata uključuje stvaranje nove prodajne fakture. Tip računa mora imati tip odobrenja dobavljača, a dobavljač mora biti onaj kojem se vrši povrat. Iz podataka o dobavljaču prenose se zadani podaci u dokument, poput Valute, Plaćanja, Cjenika, itd.      
Ostali podaci, poput artikala koji se vraćaju, mogu se slobodno popuniti. Dokument se može spremiti i pregledati.    

Povrat od dobavljača može se također stvoriti putem postupka.   
U ribbon baru [Pretrage nabavnog računa](/docs/purchase/purchase-invoices/search-purchase-invoices) nalazi se gumb **Storno računa** (slično tome, u pretrazi otpremnice nalazi se gumb **Storno**). Ovaj gumb omogućuje stvaranje povrata povezanog s odabranim računom za kupnju. Nakon odabira računa koji treba stornirati i pritiska na gumb, otvara se prozor za **Storniranje dokumenata**, u kojem je potrebno označiti artikle koji se vraćaju i naznačiti [vrstu](/docs/configurations/tables/purchase/purchase-invoices-type) dokumenta koji treba stvoriti (predloženi su samo dokumenti s tip odobrenja dobavljača). Nakon potvrde postupka, stvorit će se račun za storno, vidljiv u Pretrazi računa. Račun se kreira s današnjim datumom i imat će ukupan iznos artikala koje treba stornirati, preuzet iz početnog računa.

Povrat od dobavljača može se koristiti kao i drugi dokumenti, pa se mogu tiskati, knjižiti itd.  
Za povrate je također moguće koristiti različite **Ispise** predviđene modulom, samo ih treba filtrirati prema odabranoj vrsti dokumenta. 