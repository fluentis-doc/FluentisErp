---
title: Ažuriranje prosečne dnevne potrošnje (ADU)
sidebar_position: 1
---

Ova procedura ažurira polje **Prosečna dnevna potrošnja (ADU)** u DDMRP parametrima za svaki artikl kojim se upravlja putem buffer-a.

Ažuriranje se vrši prema metodi definisanoj u DDMRP parametrima artikla, na jedan od sledećih načina:

- 0) Bez ažuriranja
- 1) Aritmetička sredina na osnovu istorijskih podataka (analiziraju se stvarne prethodne potrošnje, pri čemu sve imaju jednaku težinu)
- 2) Ponderisana sredina na osnovu istorijskih podataka (novije potrošnje imaju veću težinu od starijih)
- 3) Aritmetička sredina na osnovu budućih podataka (analizira se tabela prognozirane dnevne potrošnje)
- 4) Aritmetička sredina prošlih i budućih podataka (kombinacija metoda 1 i 3)
- 5) Ponderisana prošlost i aritmetička budućnost (kombinacija metoda 2 i 3)

Period analize definiše se za svaki artikl u DDMRP parametrima putem polja **Dani u prošlosti** i **Dani u budućnosti**.

Kada je reč o analizi istorijskih podataka, preporučuje se korišćenje dovoljno dugog vremenskog perioda kako bi rezultati bili statistički značajni, odnosno perioda koji je višestruko duži od razdvojenog vremena isporuke (**DLT – Decoupled Lead Time**) artikla. U suprotnom, novi obračun može biti previše osetljiv na poslednje promene i odstupanja.

Ako se koristi aritmetička sredina, obračun će biti manje osetljiv na slučajne oscilacije, ali će sporije prepoznavati nove trendove potrošnje.

Ako se koristi ponderisana sredina, obračun će brže prepoznavati nove trendove potrošnje, ali će biti osetljiviji na slučajne oscilacije.

Što se tiče budućih prognoza potrošnje, one moraju biti unesene sa dovoljnim vremenskim horizontom, odnosno najmanje u dužini kumulativnog vremena isporuke (**CLT – Cumulative Lead Time**) artikla, što predstavlja vreme potrebno za njegovu proizvodnju u slučaju potpune odsutnosti zaliha svih sastavnih komponenti.

Iz tog razloga, vrednost parametra **Dani u budućnosti** mora biti najmanje jednaka kumulativnom vremenu isporuke artikla.

Kod izračunavanja proseka na osnovu istorijske potrošnje, potrebno je da u tabeli skladišnih transakcija bude aktivirana oznaka **DDMRP ADU**, kako bi procedura uzimala u obzir samo one transakcije koje predstavljaju povlačenje artikla iz skladišta u kojem se nalazi buffer zaliha.

Ako oznaka **DDMRP** ne postoji u tabeli skladišnih transakcija, to znači da DDMRP opcija nije aktivirana u opštim parametrima sistema.