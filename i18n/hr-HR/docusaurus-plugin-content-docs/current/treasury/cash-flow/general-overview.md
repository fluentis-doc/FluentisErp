---
title: Uvod 
sidebar_position: 1
---

Modul Novčani tijek (Cash Flow) u Fluentis ERP-u je koristan alat za analizu predviđenih poslovnih novčanih tokova.   

Omogućuje precizno praćenje prihoda i izdataka novca, pomažući tvrtkama da zadrže jasnu i ažuriranu sliku o svojoj likvidnosti. Modul se integrira s računovodstvenim i financijskim podacima kako bi pružio preciznu analizu i detaljne prognoze budućih novčanih tokova.  

Modul također uključuje mogućnost ručnog unosa dodatnih rokova koji se ne nalaze u sustavu, poput budućih projekcija plaća zaposlenika, plana otplate već otpisanog duga iz računovodstva i slično. 

**Glavne funkcionalnosti**:

- Automatsko generiranje novčanog tijeka s mogućnošću uključivanja ili isključivanja tipova financijskog tijeka, uz jednostavno upravljanje putem oznake.
- Mogućnost filtriranja po datumima za svaki pojedini tijek.
- Detaljan pregled obrade novčanog tijeka s mogućnošću izvoza podataka u različite formate, uključujući Excel.
- Izvršenje analitičkog izvještaja za čitanje rezultata s naglaskom na kretanje novčanog tijeka na kraju svakog mjeseca.
- Mogućnost pregleda analitičkog izvještaja s grupiranjem po matičnoj banci. 
- Mogućnost definiranja predviđenog datuma za svaki tijek, paralelno s datumom prirodnog dospijeća.

**Popis tablica potrebnih za upravljanje modulom:** 

[Tipovi financijskih konta](/docs/configurations/tables/treasury/cash-flow-module-tables/financial-account-types),  

[Tip tijeka](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types),  

[Tipovi datuma dospijeća](/docs/configurations/tables/treasury/cash-flow-module-tables/due-date-types),  

[Tipovi narudžbe/otpremnice/fakture](/docs/configurations/tables/treasury/cash-flow-module-tables/order-dn-invoice-types)  

[Šifarnik klijenta/dobavljača/agenta](/docs/configurations/tables/treasury/cash-flow-module-tables/customer-vendor-agent-register).

Također, u vezi sa svakom vrstom financijskog tijeka koja se aktivira, potrebno je upravljati unutar odgovarajućih tablica, poput Tipova otpremnica, Tipova narudžbi (kupci i dobavljači) itd., kako bi se odredile specifične vrste dokumenata koje trebaju biti praćene.

Na primjer, obično će se isključiti otpremnice koje nisu u sklopu prodaje, poput računa na skladištu, jer one neće generirati novčani tijek. 

 

 






