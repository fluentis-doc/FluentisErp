---
title: Izdavanje planiranih naloga
sidebar_position: 1
---

:::important Čemu služi
Funkcija **Izdvaanje planiranih naloga** u sustavu Fluentis omogućuje prijelaz planiranih naloga u njihove operativne statuse. Nakon generiranja planiranih naloga moguće ih je osloboditi korištenjem odgovarajućih tipki na alatnoj traci.

Postupak ovisi o vrsti naloga:

- planirani proizvodni nalozi postaju operativni proizvodni nalozi;
- planirani nabavni nalozi generiraju zahtjeve za nabavu;
- planirani nalozi kooperacije pretvaraju se u operativne naloge kooperacije.
:::

Obrazac omogućuje kreiranje:

- *zahtjeva za nabavu*, koji po potrebi mogu biti automatski odobreni putem odgovarajućeg parametra, u slučaju planiranih nabavnih naloga;
- *naloga kooperacije* u slučaju planiranih naloga kooperacije ili kada se u popisu faza planiranog proizvodnog naloga nalazi vanjska faza;
- *radnih naloga proizvodnje* u statusu *Lansiran* ili *Izvršni*, ovisno o aktivaciji odgovarajućeg parametra, u slučaju planiranih proizvodnih naloga.

Oslobađanjem naloga oni više nisu vidljivi među [Planiranim nalozima](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) te zbog toga nije moguće ponovno pokrenuti [Planiranje](/docs/planning/ms-master-scheduling/general-schedule) proizvodnog naloga iz kojeg su planirani nalozi eventualno generirani kroz opće planiranje.

Planirani nalozi generirani ručno ili putem MRP obrade prikazani u tablici nemaju nikakvu povezanost s proizvodnim nalozima.

Funkcionalnost je dostupna u tablicama **Planiranih naloga** i **Naloga kooperacije**, gdje se prikazuje dodatni stupac.

Novi stupac vizualno prikazuje (bojama) je li nalog izvediv na temelju raspoloživosti materijala.

Za prikaz rezultata potrebno je u tablici odabrati željene naloge i pritisnuti tipku **Preračunaj izvedivost**.

Pomoću tipke **Detalji izvedivosti** moguće je dobiti detaljnu analizu svakog pojedinog potrebnog materijala.

Boje prikaza i aktivacija funkcionalnosti definiraju se u **Parametrima potreba materijala**.

## Filtar

Na ovoj kartici moguće je pregledati popis planiranih naloga koji još nisu oslobođeni te ih filtrirati prema različitim kriterijima odabira.

Nakon postavljanja željenih filtara dovoljno je kliknuti tipku **Traži** na alatnoj traci kako bi se rezultati prikazali u tablici rezultata.

### Posebne tipke

> **Puštanje**: ova tipka postaje aktivna tek kada je u tablici rezultata odabran barem jedan redak za oslobađanje. Pokretanjem ove funkcije sustav izvršava:
>
> - oslobađanje *planiranih radnih naloga proizvodnje* u *lansirane* ili *izvršne proizvodne naloge*, ovisno o postavkama definiranim u [Parametrima potreba materijala](/docs/configurations/parameters/production/resource-requirements-parameters);
> - oslobađanje *planiranih nabavnih naloga* u *zahtjeve za nabavu*, koji mogu biti *odobreni* ili *neodobreni*, ovisno o postavkama definiranim u [Parametrima potreba materijala](/docs/configurations/parameters/production/resource-requirements-parameters);
> - oslobađanje *planiranih naloga kooperacije* u *naloge kooperacije*.

> **Preračunaj izvedivost**: omogućuje prikaz (putem boja) izvedivosti odabranih planiranih radnih naloga proizvodnje i naloga kooperacije. Boje prikaza i aktivacija funkcionalnosti definiraju se u [Parametrima potreba materijala](/docs/configurations/parameters/production/resource-requirements-parameters).

> **Detalji izvedivosti**: omogućuje detaljnu analizu svakog potrebnog materijala za odabrani planirani proizvodni nalog ili nalog kooperacije.

> **Otvori pretragu radnih naloga proizvodnje**: otvara pretragu radnih naloga proizvodnje koristeći iste kriterije filtriranja koji su definirani u ovom obrascu. Primjerice, ako su planirani nalozi filtrirani prema proizvodnom nalogu broj 3 iz 2018. godine, pretraga radnih naloga proizvodnje otvorit će se s istim filtrom.

### Posebna polja

**Izvedivost materijala**: sadrži vizualni prikaz (putem boja) izvedivosti naloga na temelju raspoloživosti materijala. Za prikaz rezultata potrebno je odabrati željene naloge u tablici i pritisnuti tipku **Preračunaj izvedivost**. Pomoću tipke **Detalji izvedivosti** moguće je dobiti detaljnu analizu svakog potrebnog materijala. Boje prikaza i aktivacija funkcionalnosti definiraju se u [Parametrima potreba materijala](/docs/configurations/parameters/production/resource-requirements-parameters).
**Godina**: označava godinu planiranog naloga.
**Narudžba**: označava broj planiranog naloga.
**Razina**: označava razinu artikla obuhvaćenog nalogom unutar sastavnice.
**Godina/Broj/Šifra/Opis narudžbe**: ova polja ostaju prazna ako je planirani nalog generiran ručno ili putem MRP-a.
**Planirani datum početka**:
- kod planiranih nabavnih naloga i naloga kooperacije predstavlja datum kada se dobavljaču mora poslati narudžba koja će biti generirana oslobađanjem naloga;
- kod planiranih radnih naloga proizvodnje predstavlja planirani datum početka prve radne faze u tehnološkom postupku artikla.
**Planirani datum završetka**:
- kod planiranih nabavnih naloga i naloga kooperacije predstavlja datum kada isporuka mora biti zaprimljena te se podudara s planiranim datumom primitka na retku narudžbe dobavljača koja će biti generirana oslobađanjem naloga;
- kod planiranih radnih naloga proizvodnje predstavlja planirani datum završetka posljednje radne faze u tehnološkom postupku artikla.
**Potvrđena količina**: različita je od nule samo ako je obrada izvršena putem MRP-a.
**Kupac – konto, podkonto i naziv**: prikazuje povezanog kupca u slučaju radnih naloga proizvodnje.
**Dobavljač – konto, podkonto i naziv**: prikazuje povezanog dobavljača u slučaju nabavnih naloga i naloga kooperacije.
**Godina/Broj/Vrsta narudžbe kupca**: predstavlja narudžbu kupca iz koje je generiran proizvodni nalog na temelju kojeg je planiran predmetni nalog.

Nakon što su identificirani nalozi koje je potrebno osloboditi, postupak **Puštanja** pokreće se korištenjem odgovarajuće tipke na alatnoj traci, ovisno o vrsti naloga:

- **Oslobađanje planiranih radnih naloga proizvodnje**
- **Oslobađanje planiranih nabavnih naloga**
- **Oslobađanje planiranih naloga podizvođača**

Navedene tipke postaju aktivne ovisno o vrijednosti odabranoj u polju **Pusti naloge planirane za**.

Također je moguće otvoriti **Prikaz detalja planiranog naloga** dvostrukim klikom na redak željenog planiranog naloga u tablici prije samog oslobađanja.

## Parametri

Na ovoj kartici moguće je definirati i spremiti parametre koji se koriste za oslobađanje planiranih naloga.

### Proizvodni nalozi

U ovom odjeljku moguće je:

- aktiviranjem oznake **Generiranje naloga podizvođača iz eksternih operacija** odrediti da se, ako se u popisu faza planiranog proizvodnog naloga koji se oslobađa nalazi vanjska faza, automatski generira odgovarajući nalog kooperacije za tu vanjsku fazu. Ova se oznaka u pravilu ostavlja aktivnom;

- aktivirati opciju **Izdavanje izvršnih radnih naloga proizvodnje**. Ako je aktivna, *proizvodni nalozi* generirani oslobađanjem *planiranih proizvodnih naloga* stvaraju se izravno u statusu *Izvršni* te nije potrebno provoditi dodatni postupak oslobađanja.

### Zahtjevi za nabavom

U ovom odjeljku moguće je:

- putem odgovarajućeg padajućeg izbornika definirati **Vrstu zahtjeva za nabavu** koja će se generirati oslobađanjem planiranih nabavnih naloga. U ovom polju automatski se predlaže vrsta zahtjeva za nabavu definirana u [Parametrima potreba materijala](/docs/configurations/parameters/production/resource-requirements-parameters), u odjeljku za oslobađanje planiranih naloga;

- aktiviranjem oznake **Prioritet nabavke iz MRP parametara stavke** omogućiti da se *zahtjevi za nabavu* kreiraju s prioritetom definiranim u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) pojedinog artikla. Ako oznaka nije aktivna, zahtjevi za nabavu kreiraju se s prioritetom definiranim na proizvodnom nalogu s kojim su povezani;

- aktivirati opciju **Izdavanje odobrenih zahtjeva za nabavu**. Ako je aktivna, zahtjevi za nabavu generirani oslobađanjem planiranih nabavnih naloga automatski se kreiraju s aktiviranom oznakom *Odobreno*. U suprotnom, korisnik koji generira narudžbe dobavljačima iz zahtjeva za nabavu mora prethodno odobriti sve retke zahtjeva. Moguće je odobriti samo pojedine retke zahtjeva i generirati narudžbe dobavljačima samo za odobrene retke;

- aktiviranjem oznake **Zaokruži zahtjeve za nabavom** omogućiti da postupak oslobađanja planiranog nabavnog naloga zaokruži količinu u retku generiranog zahtjeva za nabavu na prvi veći cijeli broj, ako količina sadrži decimalna mjesta;

- definirati način grupiranja. Aktiviranjem oznake **Grupiranje najranije** postupak oslobađanja grupira planirane nabavne naloge za isti artikl. U polju **Za dane** definira se broj dana unutar kojeg je grupiranje dopušteno, uzimajući u obzir planirane datume primitka artikala, odnosno planirane datume završetka planiranih nabavnih naloga;

- odrediti postupanje kada planirani nabavni nalog nema definiranog dobavljača:
  - **Prihvati naloge bez dobavljača**
  - **Ostavi naloge bez dobavljača**
  - **Koristi sljedeći konto kao dobavljača**, definiran u odgovarajućim poljima.

### Nalozi podizvođača

U ovom odjeljku moguće je:

- pomoću polja **Tip naloga** i **Godina** definirati treba li generirani nalog kooperacije/podizvođača biti tipa *Zatvoreni* ili *Otvoreni* te kojoj godini pripada;

- definirati način grupiranja. Aktiviranjem oznake **Grupiraj naloge istog podizvođača:** postupak oslobađanja grupira planirane naloge kooperacije/podizvođača te u isti nalog kooperacije uključuje artikle koje treba obraditi isti kooperant;

- aktivirati oznaku **Uzimaj u obzir fiksnu količinu iz troškovnika**. Ako artikl koji se proizvodi u sastavnici ima definiranu fiksnu količinu, tijekom oslobađanja kreirat će se nalog kooperacije s onoliko redaka koliko zahtijeva fiksna količina, jednako kao kod proizvodnih naloga. Ako oznaka nije aktivna, generirat će se jedan redak s ukupnom količinom;

- odrediti postupanje kada planirani nalog kooperacije nema definiranog kooperanta:
  - **Ostavi naloge bez kooperanta**
  - **Koristi sljedeći konto kao podizvođača:**, definiran u odgovarajućim poljima.

### Posebna tipka

> **Spremi izvršene promjene**: omogućuje spremanje trenutno definiranih parametara.

### Povrati u prethodno stanje

Na ovoj kartici moguće je pokrenuti postupak vraćanja planiranog naloga, kojim se poništava prethodno izvršeno oslobađanje te se stanje vraća na ono koje je postojalo prije samog oslobađanja.

Prikazuju se planirani nalozi iste vrste koja je definirana u polju **Pusti naloge planirane za** na kartici **Filter**.

Nakon definiranja željenih kriterija filtriranja dovoljno je kliknuti na tipku **Traži** u *Ribbon Baru* kako bi se rezultati prikazali u tablici rezultata.

Odabirom jednog retka u tablici rezultata, u jednoj od triju donjih kartica — **Radni nalozi proizvodnje**, **Zahtjevi za nabavu** ili **Nalozi podizvođača** — prikazuje se dokument koji je nastao oslobađanjem odabranog planiranog naloga.

Za pokretanje postupka vraćanja potrebno je odabrati jedan ili više naloga te kliknuti na tipku **Povrati naloge**.

### Uvjeti za postupak vraćanja

Za **planirani radni nalog proizvodnje**:
- samo ako se generirani proizvodni nalog nalazi u statusu *Pokrenut*;
- ako je proizvodni nalog u statusu *Izvršni*, potrebno je prvo izvršiti vraćanje oslobađanja proizvodnog naloga;
- ako je nalog već u statusu *Izvršen*, više nije moguće vratiti planirani nalog, osim ako se postupak ne vrati unatrag počevši od poništavanja evidentiranja proizvodne prijave.

Za **planirani nabavni nalog**:
- samo ako se generirani redak zahtjeva za nabavu nalazi u statusu *Neizvršen*;
- ako je redak zahtjeva za nabavu već izvršen kreiranjem narudžbe dobavljaču, potrebno je postupak vraćanja provesti unatrag, počevši od nabavnog dokumenta koji je već generiran.

Za **planirani nalog podizvođača**:
- samo ako redak generiranog naloga podizvođača još nije izvršen;
- odnosno ako za materijal povezan s tim retkom naloga kooperacije još nije generiran otpremni dokument.

Nakon izvršavanja ovog postupka vraćeni nalozi ponovno će biti vidljivi na kartici **Filter**, gdje će biti moguće ponovno provesti njihovo oslobađanje.

Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte stranicu [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).