---
title: Interni DDMRP nalozi 
sidebar_position: 4
---

Interni DDMRP nalozi su narudžbe koje izdaje jedna lokacija (osim tvornice) prema drugoj lokaciji (uključujući tvornicu) radi isporuke tražene robe. 

Zahtijevajući facility djelovat će kao kupac prema facility koja isporučuje robu, koji će djelovati kao dobavljač.   

Stoga, ove narudžbe imaju dvostruku ulogu: narudžbe za nabavu u lokaciji koja prima robu i narudžbe koje generiraju potrebu u lokaciji koja isporučuje robu. 

Podaci narudžbe uključuju skladište odredišta, što odgovara lokaciji koja treba primiti robu i koja je time traži, te skladište izvora, što odgovara lokaciji koja treba isporučiti robu. 

Planerski sustav generira planirane interne narudžbe nakon izračuna neto protoka (NFP), koje su već popunjene svim potrebnim podacima i mogu se pretvoriti u stvarne narudžbe putem odgovarajuće procedure (eventualno uz izmjene). 

Planirane interne DDMRP narudžbe ne generiraju potrebu u dobavljačkim lokacijama, samo potvrđene narudžbe generiraju potrebu. 

Ova opcija osigurava da DDMRP prijedlozi narudžbi ne stvaraju potrebu u dobavljačkim lokacijama dok ne budu analizirani i pretvoreni u stvarne narudžbe od strane odgovarajućih osoba, prema postupku planiranja na razinama. 

Iz tog razloga, tvornica je logistička jedinica koja se planira posljednja, nakon što su planirane i potvrđene narudžbe logističkih jedinica za distribuciju i prodaju robe. .

Naravno, interne DDMRP narudžbe mogu se ručno kreirati bez ograničenja. 

Datum narudžbe smatra se datumom potrebe (jednako kao datum početka narudžbe proizvodnje), isti za svaki artikl u narudžbi, dok je datum isporuke specifičan za svaki artikl jer može biti različit. 

Naime, ako lokaciju odredišta opskrbljuje druga lokacija koja nije tvornica, vrijeme isporuke artikala na odredište isto je za sve i jednako je lead time-u navedenom u tablici lokacija za lokaciju odredišta (osim ako nisu utvrđene iznimke u tablici parametara DDMRP za neki artikl). 

Ako je, pak, dobavljačka lokacija tvornica, obično će DLT svakog artikla u lokaciji odredištu varirati jer uključuje zbroj vremena transporta od tvornice (koje je isto za sve artikle u buffer-u unutar odredišne jedinice) i DLT artikla u tvornici, što odgovara vremenu potrebnom za njegovu proizvodnju, ako artikl nije buffer u toj tvornici. 

Za svaki artikl u narudžbi vidljive su količine naručene, poslane i primljene. 

Kada vrijeme isporuke nije zanemarivo, tijekom transporta bit će ažurirana količina poslana, ali ne i količina primljena, koja će biti ažurirana tek nakon prijema robe. 

Razlozi za uplatu i povlačenje definirani su u tablici Facilities (logistička struktura). 


