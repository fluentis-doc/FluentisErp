---
title: Kapacitet radnog centra
sidebar_position: 2
---

:::important Čemu služi
Funkcionalnost **Kapacitet radnog centra** u Fluentisu pruža jasan i trenutni pregled opterećenja proizvodnih centara, ističući vršna opterećenja i moguće neefikasnosti. Putem obrasca organizovanog u četiri celine, korisnici mogu filtrirati i pregledati naloge prema odeljenju, datumu ili statusu (*planiran*, *lansiran*, *izvršni*) te jednostavno intervenisati korišćenjem funkcije *drag & drop* za premeštanje, odlaganje ili izmenu proizvodnih operacija.     
Grafički prikaz prikazuje maksimalni kapacitet i dnevno opterećenje radnih centara, omogućavajući vizuelno i interaktivno upravljanje proizvodnim fazama. Posebna dugmad omogućavaju izmenu faza, promenu datuma i navigaciju kroz vremenske detalje opterećenja, čime se optimizuje efikasnost celokupnog proizvodnog procesa.
:::

Korisnik može dobiti trenutni pregled opterećenja svakog aktivnog radnog centra unutar pojedinih odeljenja za određeni vremenski period, što omogućava brzo prepoznavanje vršnih opterećenja ili proizvodnih neefikasnosti.

Jednostavnom funkcijom *drag & drop* korisnik može pomeriti proizvodnu operaciju unapred ili unazad ili joj promeniti radni centar, dok se dvostrukim klikom na pojedinu traku kapaciteta mogu detaljno pregledati informacije o radnim nalozima koji opterećuju centar na odabrani datum.

Ako se faza premesti na dan u kojem je radni centar već u potpunosti zauzet, prikazuje se poruka o grešci. U suprotnom, radni dan centra se popunjava bez prekomerne alokacije, a preostalo vreme (premeštene faze) raspoređuje se na sledeće radne dane do maksimalnog kapaciteta tog radnog centra, nezavisno od već postojećeg opterećenja.

Ovaj obrazac sastoji se od četiri celine:

- prva omogućava filtriranje prema *Odeljenju* i/ili *Radnom centru* te prikaz rezultata u tabeli ispod;

- u drugoj je moguće filtrirati naloge prema *Datumu početka* i *Datumu završetka* te odabrati prikaz sledećih vrsta naloga:

> *Planirani*: prikazuje planirane proizvodne naloge;              
> *Pokrenuti*: prikazuje proizvodne naloge u statusu lansiran;                
> *Izvršni*: prikazuje proizvodne naloge u statusu izvršni.          

Takođe je moguće pregledati sve podatke povezane sa radnim centrima odabranim u prvoj celini.

- u trećoj celini prikazuje se jedan red za svaku fazu planiranih i/ili proizvodnih naloga koji odgovaraju radnim centrima odabranim u prvoj celini, zajedno sa svim povezanim detaljima.

- u četvrtoj celini, pod nazivom **Detalji odabrane faze**, grafički se prikazuju opterećenja radnih centara odabranih u prvoj celini.

## Detalji odabrane faze

U grafičkom prikazu narandžasta linija predstavlja maksimalni dnevni proizvodni kapacitet radnog centra, dok plava boja prikazuje opterećenje centra na određeni dan. Crvenom bojom označeno je preopterećenje radnog centra.

Odabirom faze u trećoj celini, ona se prikazuje žutom bojom unutar grafičkog prikaza.

Takođe, korišćenjem funkcije *drag & drop* moguće je odabrati fazu iz tabele, prevući je u grafički prikaz i ispustiti na željeni datum kako bi se promenio njen datum početka, a samim tim i datum završetka. Odabirom više alternativnih radnih centara moguće je premeštati faze sa jednog centra na drugi radi optimizacije proizvodnje.

Dvostrukim klikom na red u tabeli faza korisnik direktno otvara dokument (planirani nalog ili proizvodni nalog) koji sadrži fazu prikazanu u odabranom redu, uz mogućnost izmene dokumenta ako za to ima odgovarajuća prava. Nakon osvežavanja prikaza, promene će biti vidljive i u grafičkom prikazu.

Dvostrukim klikom na element grafikona otvara se iskačući prozor koji sadrži listu radnih faza koje doprinose prikazanom opterećenju.

*Posebna dugmad*:

> **Promeni faze**: nakon odabira faze omogućava njeno *Ažuriranje* promenom faze, mašine, radnog centra, ukupnog vremena mašine, vremena rada i vremena pripreme. Osim toga, odabirom opcije *Unesi* moguće je dodati novu fazu, a opcijom *Obriši* trajno ukloniti postojeću;            
> **Promeni datume**: omogućava promenu datuma početka odabrane faze;        
> **Aktiviraj obavezno**: aktivira oznaku **Obavezno** unutar svih odabranih naloga;       
> **Deaktiviraj obavezno**: deaktivira oznaku **Obavezno** unutar svih odabranih naloga;         
> **Uvećaj zum**: omogućava detaljniji vremenski prikaz na grafikonu;          
> **Uvećaj do prozora**: prikazuje vremenski raspon na grafikonu prema vrednostima *Datuma početka/završetka* unetim u filterima;                    
> **Umanji**: omogućava manje detaljan vremenski prikaz na grafikonu;              
> **Uvećaj-sedmica**: prikazuje vremenski raspon od jedne sedmice na grafikonu, počevši od *Datuma početka*;              
> **Uvećaj-2 sedmice**: prikazuje vremenski raspon od dve sedmice na grafikonu, počevši od *Datuma početka*;     
> **Uvećaj-mesec**: prikazuje vremenski raspon od jednog meseca na grafikonu, počevši od *Datuma početka*;     
> **Uvećaj-po datumu**: prikazuje vremenski raspon definisan poljima *Datum početka* i *Datum završetka*.

Za detalje o zajedničkom funkcionisanju obrazaca pogledajte poveznicu [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).