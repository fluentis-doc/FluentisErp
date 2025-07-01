---
title: Osnovna lista DDMRP  
sidebar_position: 8
---

Ovaj obrazac prikazuje osnovnu listu proizvoda i razlikuje se od obrasca za upravljanje osnovnim listama unutar Fluentis-a jer prikazuje informacije relevantne samo za DDMRP okruženje. Putem ovog obrasca nije moguće mijenjati osnovnu listu. 

Artikli koji se upravljaju kao DDMRP zalihe označeni su simbolom košarice u tri boje, a za njih se prikazuju specifične informacije kao što su ADU, DLT, Crvena zona, Žuta zona, Zelena zona i Kapital u optjecaju. 

Ove vrijednosti vrijede za trenutni dan, kako je prikazano u obrascu za **DDMRP parametre**. Kapital u optjecaju odnosi se na artikl, a ne na zalihe potrebne za proizvodnju proizvoda čiju osnovnu listu prikazuje. Vrijednost je određena potrebom za svim artiklima koji zahtijevaju proizvod na skladištu. Vrijednosti kapitala u optjecaju temelje se na posljednjem izvršenom izračunu. Ako želite ažurirane podatke, potrebno je pokrenuti odgovarajući postupak izračuna.

Putem ovog obrasca mogu se pokrenuti različiti postupci, poput [**izračuna DLT-a (odvojeno vrijeme isporuke)**](/docs/ddmrp/procedures/DLT-calculation), procedura [**Izračun zona**](/docs/ddmrp/procedures/zones-calculation), procedura [**Ažuriranje prosječne dnevne potrošnje (ADU)**](/docs/ddmrp/procedures/ADU-update), procedura [**Izračun vrijednosti zaliha**](/docs/ddmrp/procedures/inventory-value). 

DDMRP prikaz osnovne liste posebno je koristan za simulacije promjena u DLT-u i kapitalu u optjecaju (korisno je koristiti ispis kapitala u optjecaju za značajniju analizu). 

Za određene artikle koji nisu DDMRP zalihe, DLT se i dalje prikazuje. Takvi artikli označeni su crvenom bojom i nalaze se na kritičnoj putanji nekog gotovog proizvoda.  

Razlog tome je što su neki od njih pohranjeni u distribucijskim centrima, pa za izračun DLT-a u distribucijskim centrima treba zbrojiti vrijeme transporta iz tvornice i vrijeme potrebno za proizvodnju proizvoda. 

Za artikle koji nisu gotovi proizvodi, DLT se izračunava jer postupak mora identificirati sve artikle na "kritičnoj putanji" zalihe. 

Postupak identificira sve artikle na kritičnim putovima svih osnovnih listi u sustavu, ne samo za DDMRP artikle.

U DDMRP prikazu osnovne liste artikli na kritičnim putovima označeni su crvenom bojom. Više grana osnovne liste može biti označeno crveno zbog više kritičnih putova ili zbog dijeljenja kritičnih putova s drugim proizvodima. 

Smanjenje vremena isporuke (DLT) moguće je stvaranjem DDMRP zalihe za artikle označene crvenom bojom na kritičnoj putanji. Ovaj prikaz omogućuje korisnicima da lakše razumiju koji artikli na skladištu mogu smanjiti vrijeme isporuke gotovog proizvoda.  

Prikaz kapitala u optjecaju omogućuje analizu kako postavljanje zaliha može istovremeno smanjiti vrijeme isporuke i optimizirati kapital u optjecaju. 

Jedinična cijena za artikle prikazuje se na temelju posljednjeg izračuna kapitala u optjecaju i uključuje samo troškove materijala i vanjske obrte za radne naloge.  

Za artikle koji su radni nalozi, jedinični trošak obrade izračunava se na temelju troškova njihovih "sinova" osnovne liste.e.

Vrijednost kapitala u optjecaju izračunava se množenjem jedinične cijene s prosječnom zalihom (crvena zona + zelena zona / 2). 

Važno je napomenuti da kapital u optjecaju prikazan u osnovnoj listi možda nije točan ako su nakon posljednjeg izračuna promijenjene vrijednosti zona zaliha ili jediničnih troškova.  

Za sigurnu i ažuriranu vrijednost potrebno je pokrenuti postupak izračuna kapitala u optjecaju. 




