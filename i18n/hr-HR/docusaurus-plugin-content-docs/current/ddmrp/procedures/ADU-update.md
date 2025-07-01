---
title: Ažuriranje prosječne dnevne potrošnje (ADU) 
sidebar_position: 1
---

Ova procedura ažurira polje **Prosječna dnevna potrošnja** parametara DDMRP za svaki artikl upravljan putem buffer-a. 

Ažuriranje se odvija prema metodi navedenoj u DDMRP parametrima artikla na sljedeće načine: 


  - 0) nema ažuriranja
  - 1) aritmetička sredina prošlih podataka (analiziraju se stvarne prošle potrošnje, a sve potrošnje imaju jednaku težinu)
  - 2) ponderirana sredina prošlih podataka (novije potrošnje imaju veću težinu od starijih)
  - 3) aritmetička sredina budućih podataka (analizira se tablica predviđanja dnevne potrošnje)
  - 4) aritmetička sredina prošlih i budućih podataka (kombinacija metoda 1 i 3) 
  - 5) ponderirana prošlost i aritmetička budućnost (kombinacija metoda 2 i 3)  

Razdoblje analize koje se uzima u obzir definirano je za svaki artikl u DDMRP parametrima putem polja **Dani u prošlosti** i **Dani u budućnosti**.

Što se tiče analiza prošlih podataka, preporučuje se korištenje vremenskog razdoblja dovoljno dugog da bude reprezentativno, odnosno vrijednosti koja je nekoliko puta veća od dekupliranog vremena isporuke (DLT) artikla, jer bi u suprotnom ponovni izračun mogao biti previše osjetljiv na posljednje promjene. 

Ako se odabere aritmetička sredina, izračun će biti manje osjetljiv na slučajne varijacije, ali će s određenim kašnjenjem prepoznati nove trendove potrošnje. 

Ako se odabere ponderirana sredina, izračun će brže prepoznati nove trendove potrošnje, ali će biti osjetljiviji na slučajne varijacije. 

Što se tiče budućih predviđanja potrošnje, ona moraju biti unesena s dovoljnim vremenskim odmakom, odnosno s odmakom najmanje jednakim kumulativnom vremenu isporuke artikla (vremenu potrebnom za njegovu proizvodnju u slučaju potpune odsutnosti zaliha njegovih sastavnih dijelova). 

Iz tog razloga, vrijednost parametra **Dani u budućnosti** mora biti najmanje jednaka kumulativnom vremenu isporuke artikla.

Što se tiče prosjeka koji provjerava potrošnju u prošlosti, treba imati na umu da je u tablici skladišnih transakcija potrebno postaviti oznaku DDMRP ADU, kako bi se procedura usmjerila na one transakcije koje se odnose na povlačenje artikla iz skladišta u kojem je pohranjen. 

Ako u tablici skladišnih transakcija ne postoji oznaka DDMRP, to znači da opcija DDMRP nije omogućena u općim parametrima. 