---
title: Ažuriranje vrijednosti Net Flow Position (NFP) 
sidebar_position: 5
---

Ova procedura provodi izračun neto položaja protoka (NFP) za artikl u bufferu-u unutar određene logističke jedinice.   

Za isti artikl vrijednost NFP mijenja se ovisno o logističkoj jedinici u kojoj je pohranjen. Ako je, primjerice, artikl pohranjen u pet logističkih jedinica, imat će pet različitih vrijednosti NFP-a, po jednu za svaku jedinicu.

Izračun se provodi prema sljedećoj formuli, u skladu s teorijskim postavkama:

NFP = On-Hand + On Order - Demand - Demand Spikes

On-hand = označava zalihu u skladištu koje odgovara pojedinačnom retku (u slučaju proizvodnog pogona ovo polje ostaje prazno).  

On order = predstavlja ukupnu preostalu količinu potvrđenih narudžbi. Za distribucijske centre to su narudžbe dobavljačima i interne narudžbe opskrbe, dok se za proizvodni pogon uzimaju u obzir narudžbe dobavljačima, proizvodne narudžbe i narudžbe za vanjsku obradu.  

Demand = je zbroj svih nepodmirenih potreba čiji datum obveze nije nakon današnjeg datuma.  

Za distribucijske centre i čvorišta potražnja proizlazi iz narudžbi kupaca ili potvrđenih internih narudžbi opskrbe (planirane narudžbe se ne uzimaju u obzir). Za proizvodne pogone, uz navedene izvore potražnje, dodaju se i potrebe iz potvrđenih i planiranih proizvodnih naloga te naloga za vanjsku obradu, kao i zahtjevi za nabavu (RDA) i nefakturirane isporuke.   

Demand Spikes = predstavljaju ukupni broj mogućih vrhunaca potražnje u razdoblju koje započinje sutra i traje do sutrašnjeg dana uvećanog za horizont vrhunaca potražnje (OSH), kako je definirano u DDMRP parametrima.  

Rezultat izračuna također uključuje podatake o mogućoj potrebnoj količini za naručivanje. Ako je izračunati NFP manji ili jednak zbroju crvene i žute zone, tada je potrebno izdati narudžbu u količini izračunatoj kao zbroj crvene, žute i zelene zone umanjen za NFP, pri čemu se uzimaju u obzir eventualne iznimke zona na današnji dan.    

Svi elementi korišteni u izračunu pohranjuju se radi jednostavne analize i mogućnosti pregleda podataka iz prošlih razdoblja.  

Za svaki dan pohranjuje se samo jedan izračun. Ako se procedura pokrene više puta unutar istog dana, pohranjuje se samo rezultat posljednje izvršene kalkulacije. Detalji izračuna dostupni su u obliku **Analiza NFP**.




