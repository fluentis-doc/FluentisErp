---
title: Kompenzacija dospjelih plaćanja
sidebar_position: 2
---

:::note Put
**Administracija > Dospijeća plaćanja>Procedure > Kompenazcija dospjelih plaćanja**

Napomena:
Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom funkcioniranju obrazaca, molimo se obratite sljedećoj poveznici:[Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).

:::

---

Ovaj postupak, sličan *Brzoj kompenzaciji* predstavlja obrazac za pretraživanje u kojem je također moguće pretraživati i pregledavati dospijeća plaćnja.

Za izvođenje kompenzacije potrebno je pritisnuti tipku **Novo** za nastavak.

Prvo obavezno polje koje treba postaviti je **Tip kompenzacije** iz padajućeg izbornika.

Moguće je konfigurirati specifično numeriranje i druge parametre koji su potrebni kada se kompenzacija ne odnosi samo na otvorene stavke, već i na računovodstvena stanja. 
Dakle, obavezno je odabrati jedan od tri mogućih tipova kompenzacija iz padajućeg izbornika:
- Računi - knjižna odobrenja  
- Kupac - dobavljač: (tipologija koja obično dovodi do kompenzacije računovodstvenih stanja)  
- Zatvaranje uplata: koristi se za zatvaranje otvorenih stavki u glavnoj knjizi s potvrdama ili avansnim plaćanjima.


Parametri koji se postavljaju su oni iz predloška knjiženja koji će se koristiti u računovodstvenom unosu automatski generiranom kompenzacijom i svim kontima koji će se koristiti za generiranje dugovanja ili potraživanja.

I ovdje postoje "ladice" tj. (bočne kartice/tabovi) u kojima se također prikazuju dospijeća i nakon odabira (dvostrukim klikom ili određenom tipkom na traci izbornika) prebacuju se na glavne prikaze i zatim se može još lakše raditi s kompenzacijama.

PAŽNJA, operacija se finalizira kada se proknjiži. Gumb za knjiženje (koji će djelovati samo na zatvaranje otvorenih stavki ako vrsta kompenzacije ne predviđa računovodstveni dio) aktivira se kada se vrijednosti otvorenih stavki za kompenzaciju podudaraju. Stoga, ako vrijednost (ili preostali iznos) otvorenih stavki koje se kompenziraju nije jednaka, potrebno je izmijeniti vrijednost stavke u stupcu Iznos. Na taj će način otvorena stavka biti zatvorena kompenzacijom samo za taj iznos (primjerice, stavka od 2.000 bit će kompenzirana samo za 1.000, što je vrijednost stavke suprotnog predznaka), dok će ostatak ostati otvoren. Provjerite da polje Razlika, pri dnu forme, bude jednako nuli.

Pritiskom na gumb za knjiženje (uz mogućnost vraćanja/promjene) u sljedećoj kartici (Knjiženje) generirat će se plaćanja za zatvaranje otvorenih stavki i, ako vrsta kompenzacije to predviđa, računovodstvena knjiženja kompenzacije.