---
title: Pretraga narudžbi
sidebar_position: 1
---

Obrazac se otvara putem **Prodaja > Narudžba kupaca > Narudžba kupaca**.

Omogućuje pretraživanje svih dokumenata radi pregleda, uređivanja, brisanja ili unosa novog dokumenta; prozor se sastoji od područja za filtriranje i prikaza rezultata.

Nakon postavljanja svih željenih filtara, dovoljno je kliknuti na gumb **Traži** u *gornjem izborniku* kako biste vidjeli rezultate unutar prikaza rezultata.

Za otvaranje pojedinosti o dokumentu, dovoljno je odabrati ga i dvaput kliknuti mišem, ili kliknuti na gumb **Izmijeni** (omogućuje ulazak u pojedinosti i uređivanje) ili na gumb **Prikaži**
(omogućuje ulazak u pojedinosti, ali bez mogućnosti uređivanja).

*Vidi također*:  
[Zajedničke funkcionalnosti, gumbe i polja](/docs/guide/common)              
Dodavanje novih polja u obrasce pretraživanja  

Iz ove forme također možete kreirati novu narudžbu pritiskom na gumb **Novo**.

#### Posebni gumbi

> **Dupliciraj narudžbe**: gumb za dupliciranje narudžbe. Omogućuje stvaranje kopije dokumenta, zadržavajući sve uvjete izvornog dokumenta, ali s trenutačnim podacima. Koristi se za česte unos narudžbi istom klijentu. Klikom na gumb, pojavit će se skočni prozor gdje ćete trebati specificirati vrstu narudžbe koju želite generirati i potvrditi operaciju pritiskom na gumb  **OK**.    
> **Svojstva**: gumb koji omogućuje otvaranje obrasca **Status izvršenja** unutar kojeg se može vidjeti stanje izvršenja različitih redaka artikala. Za svaki redak vidjet će se **Naručena količinu**, **Potvrđena količinu** (proizvedenu) i eventualnu **Preostala količinu**. Ako je redak već izvršen, odabirom i postavljanjem parametara u odjeljku Područja možete vidjeti povezani dokument izvršenja (Dostavnica ili račun).

#### Specifični postupci  
> [Izvršenje otpremnice/primke](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn): postupak omogućuje izradu otpremnice izravno iz jednog ili više narudžbi kupaca; kako bi se koristio ovaj postupak, moraju se postaviti parametri unutar tablice [Tipovi narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types). Otpremnicu se može izraditi automatski samo ako je narudžba ispisana i potvrđena. Kada se pritisne gumb izvršenja, sustav će izraditi otpremnicu (koju možete pregledati i urediti na prozoru [Pretraživanje otpremnica prodaje](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) ) i narudžba će automatski promijeniti svoje stanje u Izvršeno, djelomično izvršeno ili prisilno izvršeno.  
> [Izvršenje računa](/docs/sales/sales-invoices/invoicing/sales-invoice): postupak omogućuje izradu računa izravno iz jednog ili više narudžbi kupaca; kako bi se koristio ovaj postupak, moraju se postaviti parametri unutar tablice [Tipovi narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types). Račun možete izraditi automatski samo ako je narudžba ispisana i potvrđena. Kada se pritisne gumb izvršenja, sustav će izraditi račun (koji se može pregledati i urediti na prozoru [Pretraživanje izlaznih računa](/docs/sales/sales-invoices/invoicing/search-sales-invoices) ) i narudžba će automatski promijeniti svoje stanje u Izvršeno, djelomično izvršeno ili prisilno izvršeno.   
> [Kreiraj narudžbe](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): postupak omogućuje izradu narudžbe dobavljača iz jedne ili više narudžbi kupaca postavljanjem odgovarajućih parametara u tablici [Tipovi narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types). Kada se pokrene postupak, stvorena narudžba dobavljača može se pregledati i urediti na zaslonu [Traži narudžbe dobavljaču](/docs/purchase/purchase-orders/insert-purchase-orders/search-purchase-orders).  

#### Dodatne funkcije

- **Alati > Preračunaj provizije agenata**: omogućuje ponovni izračun provizija agenata povezanih s odabranim dokumentom. Ova se funkcija preporučuje kada su nakon kreiranja dokumenta izmijenjeni cijene ili postoci provizija.

- **Alati > Ažuriraj cijene**: otvara obrazac parametara za ažuriranje cijena. Moguće je odabrati hoće li se cijene preuzimati iz cjenika važećih na datum dokumenta ili iz cjenika važećih na planirani datum isporuke artikla. Dodatni parametri omogućuju određivanje hoće li se ažurirati samo neizvršene stavke ili i djelomično izvršene stavke te treba li ponovno izračunati cijene samo za retke bez oznake **Ručna cijena**. Prilikom ponovnog izračuna sustav uzima u obzir sve popuste i odabranu rabatnu ljestvicu za pojedini redak. Ako dokument koji prima podatke iz procedure ima definiran cjenik u zaglavlju, taj će cjenik uvijek imati prioritet.

:::tip Zapamti
Prilikom kreiranja otpremnica (DDT) ili računa pomoću funkcija **Izvršenje otpremnie** i **Izvršenje računa**, podaci i napomene uneseni u zaglavlje dokumenta (npr. **Naša/Vaša referenca**, **Početne napomene** i slično) preuzimaju se iz prve izvršene narudžbe.
:::