---
title: Upravljanje Widgetom za popuste – pojednostavljeno
sidebar_position: 6
---

Od verzije 706 implementirana je mogućnost unosa popusta izravno u mrežu artikala unutar prodajnih dokumenata.  

Za aktivaciju ove funkcionalnosti potrebno je omogućiti parametar **Omogući Widget Pojednostavljenih Popusta**, koji se nalazi u Parametrima ([Parametri Ponuda](/docs/configurations/parameters/sales/offer-parameters), [Parametri Narudžbi](/docs/configurations/parameters/sales/sales-orders-parameters), [Parametri Otpremnica](/docs/configurations/parameters/sales/dn-parameters), [Parametri Računa](/docs/configurations/parameters/sales/sales-invoices-parameters)) u prodajnom modulu. Također je potrebno definirati vrstu popusta unutar odgovarajuće vrste dokumenta ([Vrsta Ponude](/docs/configurations/tables/sales/sales-offer-type), [Vrsta Narudžbe](/docs/configurations/tables/sales/sales-order-types), [Vrsta Otpremnice](/docs/configurations/tables/sales/delivery-notes-type), [Vrsta Računa](/docs/configurations/tables/sales/invoices-type)).

Jednom kada su ti parametri konfigurirani, popusti se mogu unositi izravno u posvećeni stupac mreže artikala prodajnih dokumenata, nazvan **Popusti artikla**. Unos je moguć korištenjem jednostavne notacije, kao što je "50+10+5": na taj način, u mreži popusta generirat će se tri retka s istom vrstom odabranog popusta, ali s rastućim prioritetom: prvo će se primijeniti popust od 50%, zatim onaj od 10%, a na kraju onaj od 5%, redom. Za unos povećanja, dovoljno je koristiti znak "-" (minus), dok se za primjenu fiksnog popusta koristi simbol "#" nakon broja (na primjer, "5#" označava popust od 5 eura, a ne od 5%).

U mreži artikala dodana je i kolona **Konačni popusti**, koja prikazuje (bez mogućnosti izmjene) konačne popuste primijenjene na artikle, vidljive u tabu *Sažetak* dokumenta.