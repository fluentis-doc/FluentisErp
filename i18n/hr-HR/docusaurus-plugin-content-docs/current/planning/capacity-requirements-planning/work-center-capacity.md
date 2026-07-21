---
title: Kapacitet radnog centra
sidebar_position: 2
---

:::important Čemu služi
Funkcionalnost **Kapacitet radnog centra** u Fluentisu pruža jasan i trenutačan pregled opterećenja proizvodnih centara, ističući vršna opterećenja i moguće neučinkovitosti. Putem obrasca organiziranog u četiri cjeline, korisnici mogu filtrirati i pregledavati naloge prema odjelu, datumu ili statusu (*planiran*, *lansiran*, *izvršni*) te jednostavno intervenirati korištenjem funkcije *drag & drop* za premještanje, odgađanje ili izmjenu proizvodnih operacija.     
Grafički prikaz prikazuje maksimalni kapacitet i dnevno opterećenje radnih centara, omogućujući vizualno i interaktivno upravljanje proizvodnim fazama. Posebni gumbi omogućuju izmjenu faza, promjenu datuma i navigaciju kroz vremenske detalje opterećenja, čime se optimizira učinkovitost cjelokupnog proizvodnog procesa.
:::

Korisnik može dobiti trenutačan pregled opterećenja svakog aktivnog radnog centra unutar pojedinih odjela za određeno vremensko razdoblje, što omogućuje brzo prepoznavanje vršnih opterećenja ili proizvodnih neučinkovitosti. 

Jednostavnom funkcijom *drag & drop* korisnik može pomaknuti proizvodnu operaciju unaprijed ili unatrag ili joj promijeniti radni centar, dok se dvostrukim klikom na pojedinu traku kapaciteta mogu detaljno pregledati informacije o radnim nalozima koji opterećuju centar na odabrani datum.

Ako se faza premjesti na dan u kojem je radni centar već u potpunosti zauzet, prikazuje se poruka o pogrešci. U suprotnom, radni dan centra se popunjava bez prekomjerne alokacije, a preostalo vrijeme (premještene faze) raspoređuje se na sljedeće radne dane do maksimalnog kapaciteta tog radnog centra, neovisno o već postojećem opterećenju.

Ovaj obrazac sastoji se od četiri cjeline:

- prva omogućuje filtriranje prema *Odjelu* i/ili *Radnom centru* te prikaz rezultata u tablici ispod;

- u drugoj je moguće filtrirati naloge prema *Datumu početka* i *Datumu završetka* te odabrati prikaz sljedećih vrsta naloga:

> *Planirani*: prikazuje planirane proizvodne naloge;              
> *Pokrenuti*: prikazuje proizvodne naloge u statusu lansiran;                
> *Izvršni*: prikazuje proizvodne naloge u statusu izvršni.          

Također je moguće pregledati sve podatke povezane s radnim centrima odabranima u prvoj cjelini.

- u trećoj cjelini prikazuje se jedan redak za svaku fazu planiranih i/ili proizvodnih naloga koji odgovaraju radnim centrima odabranima u prvoj cjelini, zajedno sa svim povezanim detaljima.

- u četvrtoj cjelini, pod nazivom **Detaljni odabrane faze**, grafički se prikazuju opterećenja radnih centara odabranih u prvoj cjelini.

## Detaljni podaci odabrane faze

U grafičkom prikazu narančasta linija predstavlja maksimalni dnevni proizvodni kapacitet radnog centra, dok plava boja prikazuje opterećenje centra na određeni dan. Crvenom bojom označeno je preopterećenje radnog centra.

Odabirom faze u trećoj cjelini, ona se prikazuje žutom bojom unutar grafičkog prikaza.

Također, korištenjem funkcije *drag & drop* moguće je odabrati fazu iz tablice, povući je u grafički prikaz i ispustiti na željeni datum kako bi se promijenio njezin datum početka, a samim time i datum završetka. Odabirom više alternativnih radnih centara moguće je premještati faze s jednog centra na drugi radi optimizacije proizvodnje.

Dvostrukim klikom na redak u tablici faza korisnik izravno otvara dokument (planirani nalog ili proizvodni nalog) koji sadrži fazu prikazanu u odabranom retku, uz mogućnost izmjene dokumenta ako za to ima odgovarajuća prava. Nakon osvježavanja prikaza, promjene će biti vidljive i u grafičkom prikazu.

Dvostrukim klikom na element grafikona otvara se skočni prozor koji sadrži popis radnih faza koje doprinose prikazanom opterećenju.

*Posebni gumbi*:

> **Promijeni faze**: nakon odabira faze omogućuje njezino *Ažuriranje* promjenom faze, stroja, radnog centra, ukupnog vremena stroja, vremena rada i vremena pripreme. Osim toga, odabirom opcije *Unesi* moguće je dodati novu fazu, a opcijom *Obriši* trajno ukloniti postojeću;            
> **Promjenite datume**: omogućuje promjenu datuma početka odabrane faze;        
> **Aktiviraj obavezno**: aktivira oznaku **Obavezno** unutar svih odabranih naloga;       
> **Deaktiviraj obavezno**: deaktivira oznaku **Obavezno** unutar svih odabranih naloga;         
> **Povećaj zum**: omogućuje detaljniji vremenski prikaz na grafikonu;          
> **Povećaj do prozora**: prikazuje vremenski raspon na grafikonu prema vrijednostima *Datuma početka/završetka* unesenima u filtrima;                    
> **Umanji**: omogućuje manje detaljan vremenski prikaz na grafikonu;              
> **Povećaj-tjedan**: prikazuje vremenski raspon od jednog tjedna na grafikonu, počevši od *Datuma početka*;              
> **Povećaj-2 tjedna**: prikazuje vremenski raspon od dva tjedna na grafikonu, počevši od *Datuma početka*;     
> **Povećaj-mjesec**: prikazuje vremenski raspon od jednog mjeseca na grafikonu, počevši od *Datuma početka*;     
> **Povećaj-po datumu**: prikazuje vremenski raspon definiran poljima *Datum početka* i *Datum završetka*.

Za detalje o zajedničkom funkcioniranju obrazaca pogledajte poveznicu [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).