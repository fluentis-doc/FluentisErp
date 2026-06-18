---
title: Korekcija zelene zone
sidebar_position: 8
---

Vrednost **zelene zone** automatski izračunava procedura za ažuriranje zona na osnovu vrednosti DDMRP parametara artikla.

Pomoću ove tabele moguće je prisilno postaviti drugačiju vrednost za određene datume.

Sistem za planiranje uzima u obzir eventualne korekcije zona prilikom izračunavanja NFP-a, čak i ako procedura za ažuriranje zona nije pokrenuta.

Uobičajeno je da se za ograničeni vremenski period nametne drugačija vrednost od one dobijene standardnim izračunom, kako bi se promenila veličina izdatih narudžbina.

Ako se vrednost zelene zone poveća, izdavaće se veće narudžbine i ređe će se vršiti naručivanje; ako se smanji, dešava se suprotno.

Tipičan primer odnosi se na proizvodne resurse sa značajnim vremenima pripreme.

Ako proizvodni ciklus artikla na zalihama uključuje obradu na resursu sa značajnim vremenom podešavanja i ako je taj resurs usko grlo, odnosno resurs čije je opterećenje veoma blizu maksimalnog kapaciteta, cilj je smanjiti vreme zastoja zbog podešavanja povećanjem veličine proizvodnih serija.

To se postiže definisanjem minimalne količine za naručivanje u DDMRP parametrima artikla, čime se indirektno određuje i veličina njegove zelene zone.

Ako je ova potreba prisutna samo tokom određenog vremenskog perioda, umesto postavljanja minimalne količine za naručivanje, unosi se izuzetak za zelenu zonu za taj period.

Ovakva situacija je tipična za proizvode sa izraženom sezonskom potražnjom, gde se u periodu koji prethodi vrhuncu sezone formiraju odgovarajuće zalihe privremenim povećanjem zelene zone, čime se povećava produktivnost opterećenog resursa.

Kasnije, kada je resurs manje opterećen i više nije usko grlo, odnosno kada postoji višak proizvodnog kapaciteta, prelazi se na češću proizvodnju manjih količina, dajući prednost fleksibilnosti proizvodnog sistema.

Duže ukupno vreme podešavanja u tom periodu ne predstavlja problem, jer resurs nije potpuno opterećen i postoji raspoloživo slobodno vreme.