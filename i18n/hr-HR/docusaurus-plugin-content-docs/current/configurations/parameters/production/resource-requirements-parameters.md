---
title: Parametri potreba za materijalom
sidebar_position: 7
tags: [Zahtjevi za materijal]
---

Kroz ovaj prozor se postavljaju parametri koji se tiču nekih od osnovnih postavki proizvodnog područja.  

**Prvi dan u tjednu za izračun proizvodnih kapaciteta**: moguće je odlučiti koji dan treba smatrati prvim u tjednu u [Kalendaru proizvodnih kapaciteta](/docs/configurations/tables/production/factory-calendar), a time i u kalendaru radnog centra. Obično se postavlja u ponedjeljak.

**Zadnji planirani nalog umetnut za ovu godinu**: predstavlja zadnji progresivni broj korišten u tekućoj godini za planske naloge.  

**Pusti autorizirani PD**: ako je aktivno, omogućuje vam da osigurate da se zahtjevi za kupnju generirani putem izdavanja planiranih narudžbi za kupnju kreiraju s automatski aktiviranom oznakom 'Ovlašteno'. U suprotnom, korisnik koji mora generirati narudžbe dobavljača iz RDA bit će prisiljen autorizirati sve retke zahtjeva za kupnju prije nego što iz njega može generirati narudžbu. Međutim, moguće je autorizirati samo neke od redaka Zahtjeva za ponudu i zatim nastaviti s generiranjem narudžbi dobavljača počevši samo od ovlaštenih redaka.  

**Boje pozadine**:omogućuju vam postavljanje boje pozadine za različite vrste naloga: Kupnju, Proizvodnju ili Račune za plaćanje, dok odjeljak *Boje teksta* omogućuje postavljanje boje teksta za različite vrste naloga: kasne i/ili istekle.

**Parametri za puštanje planiranih naloga**  
U ovom odjeljku korisnik može postaviti vrstu zahtjeva za kupnju i vrstu naloga za podizvođače (ako je zatvoren i stoga se ne može dalje mijenjati ili otvoren i stoga se može mijenjati) koji se moraju automatski generirati tijekom izdavanja planiranih naloga za nabavu odnosno proizvodnih naloga. 

**Obavezna provjera izvođača u vanjskim fazama**: ako je aktivna, ako podizvođač nije naveden u vanjskoj fazi, to će biti prijavljeno **Bojom teksta za redak narudžbe** navedenom u nastavku. 
**Obavezna kontrola materijala**: omogućuje kontrolu prisutnosti ili odsutnosti materijala na zalihama i ovisno o dostupnosti bit će istaknuti različitim bojama (**Boja pozadine reda narudžbe**: *Potpuna / Djelomična / Nema*); nadalje, također je moguće u **Tipu kontrole** naznačiti treba li to učiniti na zalihi ili na raspoloživosti materijala.  

**Pojednostavljeno upravljanje proizvodnjom**: zastarjelo je i koristi se samo u starim verzijama.   

**Otpustite izvršne proizvodne narudžbe**; ako je aktivan, omogućuje vam da osigurate da su proizvodni nalozi generirani otpuštanjem planiranih proizvodnih naloga već kreirani u stanju “Izvršni“ i stoga ne zahtijevaju daljnji postupak Otpuštanja.

**Prikaži stablo naloga**: ako je aktivan, omogućuje vam pregled, u donjem dijelu obrasca za *Pretraživanje planirane narudžbe*, stabla koje povezuje elemente proizvodnog naloga, na temelju veza sastavnica materijala uključenih u raspored tog narudžba.

**Zadrži poveznicu između naloga i podnaloga**: ako je aktivna, dopušta, također iskorištavanjem neposredno sljedećih oznaka, odlučivanje da će, ako je datum planirane narudžbe ručno izmijenjen, postupak implementirati posljedičnu izmjenu i na planirane narudžbe neposredno uz onaj koji ima početnu promjenu odmah.  

**Broj dana za izračun raspoloživosti**: pokazuje koliko daleko treba ići za procjenu izračuna dostupnosti, ne uzimajući u obzir narudžbe i potrebe koje prelaze taj datum.  

**Datum predaje materijala u fazi istovara materijala**:

**Dani unaprijed za predavanje materijala**: naznačena vrijednost omogućuje da se dostupnost materijala pomakne za taj broj dana u odnosu na početak obrade (i u planiranim proizvodnim nalozima i u proizvodnim nalozima), kako bi se omogućilo logistici da donese materijal na vrijeme u proizvodnji. Ovo se uzima u obzir sljedećim postupcima: svi rasporedi "što je prije moguće", "najkasnije", "konačnim kapacitetom", "MRP", "Završetak podataka o narudžbi" u planiranim i proizvodnim nalozima, " Ponovno izračunavanje početka datum", kako u planiranim nalozima tako iu proizvodnim nalozima, svi CRP postupci ("Gantt", "Kapacitet radnog centra" i "Slijed faza") koji djeluju na promjenu datuma početka ili završetka faze naloga.
 
**Skladišta za raspoređivanje naloga**  
Mreža je jednostavan prikaz popisa skladišta čiju dostupnost je potrebno provjeriti. Ovaj popis postavljen je u obliku koji se zove *Izračun dostupnosti* koji se nalazi u Pomoćnim programima sustava upravljanja.

**Parametri Ganttogram**
Omogućuju unos zadanih parametara za upravljanje Ganttovim obrascem (*Vrsta Ganttove simulacije* i *Vrsta simulacije snimke*).

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, gumbi i polja](/docs/guide/common).