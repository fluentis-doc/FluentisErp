---
title: Ažuriranje disociranog vremena vođenja (DLT)
sidebar_position: 2
---

Ova procedura izračunava dekuplirano vrijeme isporuke (DLT) za sve artikle upravljane buffer-om, bilo da se nalaze u tvornici ili u distribucijskim centrima/hubovima. 

Ovo je vrlo važan parametar za određivanje veličine zone buffer-a, a time i razine zaliha koje su proporcionalne DLT-u. 

Ako distribucijski centar/hub dobiva zalihe iz drugog huba, DLT artikla koji se u njemu skladište jednak je za sve i određen je vremenom isporuke navedenim u tablici logističke strukture, osim ako artikl u parametrima DDMRP-a ne sadrži iznimku za opskrbu. 

Ako distribucijski centar/hub dobiva zalihe iz tvornice, svaki artikl imat će specifičan DLT koji se dobiva zbrajanjem vremena transporta iz tvornice i vremena potrebnog za proizvodnju proizvoda u tvornici. Vrijednost je nula samo za artikle koji su buffer artikli u tvornici. 

Procedura zahtijeva ispravne i ažurirane informacije, stoga tip dijela profila buffer-a mora biti točno postavljen za artikle upravljane buffer-om, a općenito mora biti definirano i vrijeme isporuke za artikle u listi materijala. Za nabavne artikle potrebno je definirati preferiranog dobavljača s pripadajućom oznakom i vremenom isporuke, dok za ostale artikle mora biti definirano vrijeme isporuke u parametrima MRP-a. 

Artikli s nedosljednim ili nepotpunim podacima neće biti uzeti u obzir pri izračunu. Po završetku postupka prikazat će se poruka s popisom utvrđenih nedosljednosti. 

Za sve artikle u tvornici koji imaju definiranu listu materijala, procedura zbraja vremena isporuke svakog artikla unutar liste materijala, pri čemu se izračun zaustavlja kada naiđe na artikl s buffer-om, budući da je takav artikl već dostupan i ne zahtijeva dodatno vrijeme za nabavu. 

Najveći zbroj među različitim ograncima određuje vrijednost DLT-a artikla, odnosno vrijeme potrebno za proizvodnju proizvoda. 

Ovaj se izračun provodi i za proizvode koji u tvornici nisu buffer artikli prema DDMRP-u, budući da oni mogu biti buffer artikli u distribucijskim centrima ili hubovima, pri čemu njihov DLT odgovara vrijednosti DLT-a u tvornici uvećanoj za vrijeme transporta. 

Procedura također određuje kritični put svakog artikla, odnosno identificira sve artikle koji se nalaze na najduljem opskrbnom lancu i time određuju vrijednost DLT-a artikla. 

Ako se želi smanjiti vrijednost DLT-a artikla, potrebno je odabrati artikle na kritičnom putu kao nove artikle s buffer-om, budući da odabir artikala koji nisu na kritičnom putu neće donijeti nikakvu korist. 

Po završetku postupka automatski se pokreće procedura ažuriranja zona.