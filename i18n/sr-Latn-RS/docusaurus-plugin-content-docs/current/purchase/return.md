---
title: Odobrenja
sidebar_position: 9
--- 

Potrebno je napomenuti da od verzije 607 odobrenja podržavaju artikle sa negativnom količinom; u slučaju unosa pozitivne količine pojaviće se iskačući prozor za promenu znaka količine.

Povratni računi dobavljača razlikuju se od drugih tipova računa po tome što je **Tip računa** (prikazan u tabeli [Tipovi nabavnih računa](/docs/configurations/tables/purchase/purchase-invoices-type)) postavljen na **Odobrenje dobavljača** (na isti način i povratnica ima tip **Povratni**).

Kreiranje povrata dobavljaču može se izvršiti ručno ili korišćenjem procedure.

Ručno kreiranje povrata dobavljaču podrazumeva kreiranje novog ulaznog računa. Tip računa mora biti postavljen na **Odobrenje dobavljača**, a dobavljač mora biti onaj kome se vrši povrat. Iz podataka o dobavljaču automatski se preuzimaju podrazumevani podaci u dokument, kao što su valuta, plaćanje, cenovnik itd.

Ostali podaci, poput artikala koji se vraćaju, mogu se slobodno popuniti. Dokument se zatim može sačuvati i pregledati.

Povrat dobavljaču može se kreirati i korišćenjem procedure.

Na alatnoj traci u [Pretrazi nabavnih računa](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) nalazi se dugme **Storno računa** (na isti način, u pretrazi otpremnica nalazi se dugme **Storno**). Ovo dugme omogućava kreiranje povrata povezanog sa izabranim nabavnim računom. Nakon izbora računa koji treba stornirati i klika na dugme, otvara se prozor **Storniranje dokumenata**, u kojem je potrebno označiti artikle koji se vraćaju i navesti [tip](/docs/configurations/tables/purchase/purchase-invoices-type) dokumenta koji treba kreirati (predlažu se samo dokumenti sa tipom **Odobrenje dobavljača**). Nakon potvrde procedure kreiraće se storno račun, vidljiv u pretrazi računa. Račun se kreira sa današnjim datumom i sadržaće ukupan iznos artikala koji se storniraju, preuzet sa originalnog računa.

Povrat dobavljaču može se koristiti kao i ostali dokumenti, pa ga je moguće štampati, knjižiti itd.

Za povrate je takođe moguće koristiti različite **Štampe** predviđene modulom, uz filtriranje prema izabranom tipu dokumenta.