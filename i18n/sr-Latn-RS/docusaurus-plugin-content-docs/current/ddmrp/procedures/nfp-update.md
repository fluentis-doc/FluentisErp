---
title: Ažuriranje vrednosti Net Flow Position (NFP)
sidebar_position: 5
---

Ova procedura vrši izračun neto pozicije toka (NFP – Net Flow Position) za buffer artikl unutar određene logističke jedinice.

Za isti artikl, vrednost NFP-a menja se u zavisnosti od logističke jedinice u kojoj se nalazi. Na primer, ako se artikl skladišti u pet logističkih jedinica, imaće pet različitih NFP vrednosti, po jednu za svaku jedinicu.

Izračun se vrši prema sledećoj formuli, u skladu sa teorijskim postavkama:

**NFP = On-Hand + On Order - Demand - Demand Spikes**

**On-Hand** = predstavlja zalihu u skladištu koje odgovara konkretnom zapisu (u slučaju proizvodnog pogona ovo polje ostaje prazno).

**On Order** = predstavlja ukupnu preostalu količinu potvrđenih narudžbina. Za distributivne centre to su narudžbine prema dobavljačima i interne narudžbine za dopunu zaliha, dok se za proizvodni pogon uzimaju u obzir narudžbine prema dobavljačima, proizvodni nalozi i nalozi za eksternu obradu.

**Demand** = predstavlja zbir svih neizvršenih potreba čiji datum dospeća nije nakon današnjeg datuma.

Za distributivne centre i hubove, potražnja proizlazi iz narudžbina kupaca ili potvrđenih internih narudžbina za dopunu zaliha (planirane narudžbine se ne uzimaju u obzir). Za proizvodne pogone, pored navedenih izvora potražnje, uključuju se i potrebe iz potvrđenih i planiranih proizvodnih naloga i naloga za eksternu obradu, kao i zahtevi za nabavku (RDA) i neobračunate isporuke.

**Demand Spikes** = predstavljaju ukupan broj mogućih vrhova potražnje u periodu koji počinje sutra i traje do datuma dobijenog dodavanjem horizonta vrhova potražnje (OSH), definisanog u DDMRP parametrima.

Rezultat izračuna uključuje i podatak o eventualnoj količini koju je potrebno naručiti. Ako je izračunati NFP manji ili jednak zbiru crvene i žute zone, potrebno je izdati narudžbinu u količini koja se izračunava kao zbir crvene, žute i zelene zone umanjen za NFP, pri čemu se uzimaju u obzir eventualni izuzeci zona važeći na tekući dan.

Svi elementi korišćeni u izračunu čuvaju se radi lakše analize i mogućnosti pregleda podataka iz prethodnih perioda.

Za svaki dan čuva se samo jedan obračun. Ako se procedura pokrene više puta tokom istog dana, sačuvaće se samo rezultat poslednjeg izvršenog izračuna.

Detalji obračuna dostupni su kroz funkcionalnost **Analiza NFP-a**.