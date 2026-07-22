---
title: Izdavanje planiranih naloga
sidebar_position: 1
---

:::important Čemu služi
Funkcija **Izdavanje planiranih naloga** u sistemu Fluentis omogućava prelazak planiranih naloga u njihove operativne statuse. Nakon generisanja planiranih naloga moguće ih je osloboditi korišćenjem odgovarajućih dugmadi na alatnoj traci.

Postupak zavisi od vrste naloga:

- planirani proizvodni nalozi postaju operativni proizvodni nalozi;
- planirani nalozi nabavke generišu zahteve za nabavku;
- planirani nalozi kooperacije pretvaraju se u operativne naloge kooperacije.
:::

Obrazac omogućava kreiranje:

- *zahteva za nabavku*, koji po potrebi mogu biti automatski odobreni putem odgovarajućeg parametra, u slučaju planiranih naloga nabavke;
- *naloga kooperacije* u slučaju planiranih naloga kooperacije ili kada se u listi faza planiranog proizvodnog naloga nalazi spoljna faza;
- *radnih naloga proizvodnje* u statusu *Lansiran* ili *Izvršni*, u zavisnosti od aktivacije odgovarajućeg parametra, u slučaju planiranih proizvodnih naloga.

Oslobađanjem naloga oni više nisu vidljivi među [Planiranim nalozima](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), pa zbog toga nije moguće ponovo pokrenuti [Planiranje](/docs/planning/ms-master-scheduling/general-schedule) proizvodnog naloga iz kojeg su planirani nalozi eventualno generisani kroz opšte planiranje.

Planirani nalozi generisani ručno ili putem MRP obrade prikazani u tabeli nemaju nikakvu povezanost sa proizvodnim nalozima.

Funkcionalnost je dostupna u tabelama **Planiranih naloga** i **Naloga kooperacije**, gde se prikazuje dodatna kolona.

Nova kolona vizuelno prikazuje (bojama) da li je nalog izvodljiv na osnovu raspoloživosti materijala.

Za prikaz rezultata potrebno je u tabeli odabrati željene naloge i pritisnuti dugme **Preračunaj izvodljivost**.

Pomoću dugmeta **Detalji izvodljivosti** moguće je dobiti detaljnu analizu svakog pojedinačnog potrebnog materijala.

Boje prikaza i aktivacija funkcionalnosti definišu se u **Parametrima potreba za materijalom**.

## Filter

Na ovoj kartici moguće je pregledati listu planiranih naloga koji još nisu oslobođeni i filtrirati ih prema različitim kriterijumima izbora.

Nakon postavljanja željenih filtera dovoljno je kliknuti dugme **Traži** na alatnoj traci kako bi se rezultati prikazali u tabeli rezultata.

### Posebne tipke

> **Puštanje**: ovo dugme postaje aktivno tek kada je u tabeli rezultata odabran barem jedan red za oslobađanje. Pokretanjem ove funkcije sistem izvršava:
>
> - oslobađanje *planiranih radnih naloga proizvodnje* u *lansirane* ili *izvršne proizvodne naloge*, u zavisnosti od postavki definisanih u [Parametrima potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);
> - oslobađanje *planiranih naloga nabavke* u *zahteve za nabavku*, koji mogu biti *odobreni* ili *neodobreni*, u zavisnosti od postavki definisanih u [Parametrima potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);
> - oslobađanje *planiranih naloga kooperacije* u *naloge kooperacije*.

> **Preračunaj izvodljivost**: omogućava prikaz (putem boja) izvodljivosti odabranih planiranih radnih naloga proizvodnje i naloga kooperacije. Boje prikaza i aktivacija funkcionalnosti definišu se u [Parametrima potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters).

> **Detalji izvodljivosti**: omogućava detaljnu analizu svakog potrebnog materijala za odabrani planirani proizvodni nalog ili nalog kooperacije.

> **Otvori pretragu radnih naloga proizvodnje**: otvara pretragu radnih naloga proizvodnje koristeći iste kriterijume filtriranja koji su definisani u ovom obrascu. Na primer, ako su planirani nalozi filtrirani prema proizvodnom nalogu broj 3 iz 2018. godine, pretraga radnih naloga proizvodnje otvoriće se sa istim filterom.

### Posebna polja

**Izvodljivost materijala**: sadrži vizuelni prikaz (putem boja) izvodljivosti naloga na osnovu raspoloživosti materijala. Za prikaz rezultata potrebno je odabrati željene naloge u tabeli i pritisnuti dugme **Preračunaj izvodljivost**. Pomoću dugmeta **Detalji izvodljivosti** moguće je dobiti detaljnu analizu svakog potrebnog materijala. Boje prikaza i aktivacija funkcionalnosti definišu se u [Parametrima potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters).
**Godina**: označava godinu planiranog naloga.
**Nalog**: označava broj planiranog naloga.
**Nivo**: označava nivo artikla obuhvaćenog nalogom unutar sastavnice.
**Godina/Broj/Šifra/Opis naloga**: ova polja ostaju prazna ako je planirani nalog generisan ručno ili putem MRP-a.
**Planirani datum početka**:
- kod planiranih naloga nabavke i naloga kooperacije predstavlja datum kada dobavljaču mora biti poslata narudžbina koja će biti generisana oslobađanjem naloga;
- kod planiranih radnih naloga proizvodnje predstavlja planirani datum početka prve radne faze u tehnološkom postupku artikla.
**Planirani datum završetka**:
- kod planiranih naloga nabavke i naloga kooperacije predstavlja datum kada isporuka mora biti zaprimljena i podudara se sa planiranim datumom prijema na stavci narudžbine dobavljača koja će biti generisana oslobađanjem naloga;
- kod planiranih radnih naloga proizvodnje predstavlja planirani datum završetka poslednje radne faze u tehnološkom postupku artikla.
**Potvrđena količina**: različita je od nule samo ako je obrada izvršena putem MRP-a.
**Kupac – konto, podkonto i naziv**: prikazuje povezanog kupca u slučaju radnih naloga proizvodnje.
**Dobavljač – konto, podkonto i naziv**: prikazuje povezanog dobavljača u slučaju naloga nabavke i naloga kooperacije.
**Godina/Broj/Vrsta narudžbe kupca**: predstavlja narudžbu kupca iz koje je generisan proizvodni nalog na osnovu kojeg je planiran predmetni nalog.

Nakon što su identifikovani nalozi koje je potrebno osloboditi, postupak **Puštanja** pokreće se korišćenjem odgovarajućeg dugmeta na alatnoj traci, u zavisnosti od vrste naloga:

- **Oslobađanje planiranih radnih naloga proizvodnje**
- **Oslobađanje planiranih naloga nabavke**
- **Oslobađanje planiranih naloga podizvođača**

Navedena dugmad postaju aktivna u zavisnosti od vrednosti odabrane u polju **Pusti naloge planirane za**.

Takođe je moguće otvoriti **Prikaz detalja planiranog naloga** dvostrukim klikom na red željenog planiranog naloga u tabeli pre samog oslobađanja.

## Parametri

Na ovoj kartici moguće je definisati i sačuvati parametre koji se koriste za oslobađanje planiranih naloga.

### Proizvodni nalozi

U ovom odeljku moguće je:

- aktiviranjem oznake **Generisanje naloga podizvođača iz eksternih operacija** odrediti da se, ako se u listi faza planiranog proizvodnog naloga koji se oslobađa nalazi eksterna faza, automatski generiše odgovarajući nalog kooperacije za tu eksternu fazu. Ova oznaka se u pravilu ostavlja aktivnom;

- aktivirati opciju **Izdavanje izvršnih radnih naloga proizvodnje**. Ako je aktivna, *proizvodni nalozi* generisani oslobađanjem *planiranih proizvodnih naloga* kreiraju se direktno u statusu *Izvršni* te nije potrebno sprovoditi dodatni postupak oslobađanja.

### Zahtevi za nabavku

U ovom odeljku moguće je:

- putem odgovarajuće padajuće liste definisati **Vrstu zahteva za nabavku** koja će biti generisana oslobađanjem planiranih naloga nabavke. U ovom polju automatski se predlaže vrsta zahteva za nabavku definisana u [Parametrima potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters), u odeljku za oslobađanje planiranih naloga;

- aktiviranjem oznake **Prioritet nabavke iz MRP parametara artikla** omogućiti da se *zahtevi za nabavku* kreiraju sa prioritetom definisanim u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) pojedinačnog artikla. Ako oznaka nije aktivna, zahtevi za nabavku kreiraju se sa prioritetom definisanim na proizvodnom nalogu sa kojim su povezani;

- aktivirati opciju **Izdavanje odobrenih zahteva za nabavku**. Ako je aktivna, zahtevi za nabavku generisani oslobađanjem planiranih naloga nabavke automatski se kreiraju sa aktiviranom oznakom *Odobreno*. U suprotnom, korisnik koji generiše narudžbine dobavljačima iz zahteva za nabavku mora prethodno odobriti sve redove zahteva. Moguće je odobriti samo pojedinačne redove zahteva i generisati narudžbine dobavljačima samo za odobrene redove;

- aktiviranjem oznake **Zaokruži zahteve za nabavku** omogućiti da postupak oslobađanja planiranog naloga nabavke zaokruži količinu u redu generisanog zahteva za nabavku na prvi veći ceo broj, ukoliko količina sadrži decimalna mesta;

- definisati način grupisanja. Aktiviranjem oznake **Grupisanje najranije** postupak oslobađanja grupiše planirane naloge nabavke za isti artikl. U polju **Za dana** definiše se broj dana unutar kojeg je grupisanje dozvoljeno, uzimajući u obzir planirane datume prijema artikala, odnosno planirane datume završetka planiranih naloga nabavke;

- odrediti postupanje kada planirani nalog nabavke nema definisanog dobavljača:
  - **Prihvati naloge bez dobavljača**
  - **Ostavi naloge bez dobavljača**
  - **Koristi sledeći konto kao dobavljača**, definisan u odgovarajućim poljima.

  ### Nalozi podizvođača

U ovom odeljku moguće je:

- pomoću polja **Tip naloga** i **Godina** definisati da li generisani nalog kooperacije/podizvođača treba da bude tipa *Zatvoreni* ili *Otvoreni* i kojoj godini pripada;

- definisati način grupisanja. Aktiviranjem oznake **Grupiši naloge istog podizvođača** postupak oslobađanja grupiše planirane naloge kooperacije/podizvođača i u isti nalog kooperacije uključuje artikle koje treba obraditi isti kooperant;

- aktivirati oznaku **Uzimaj u obzir fiksnu količinu iz sastavnice**. Ako artikl koji se proizvodi u sastavnici ima definisanu fiksnu količinu, tokom oslobađanja kreiraće se nalog kooperacije sa onoliko redova koliko zahteva fiksna količina, isto kao kod proizvodnih naloga. Ako oznaka nije aktivna, generisaće se jedan red sa ukupnom količinom;

- odrediti postupanje kada planirani nalog kooperacije nema definisanog kooperanta:
  - **Ostavi naloge bez kooperanta**
  - **Koristi sledeći konto kao podizvođača**, definisan u odgovarajućim poljima.

### Posebno dugme

> **Sačuvaj izvršene izmene**: omogućava čuvanje trenutno definisanih parametara.

### Vrati u prethodno stanje

Na ovoj kartici moguće je pokrenuti postupak vraćanja planiranog naloga, kojim se poništava prethodno izvršeno oslobađanje i stanje vraća na ono koje je postojalo pre samog oslobađanja.

Prikazuju se planirani nalozi iste vrste koja je definisana u polju **Pusti naloge planirane za** na kartici **Filter**.

Nakon definisanja željenih kriterijuma filtriranja dovoljno je kliknuti na dugme **Traži** u *Ribbon Baru* kako bi se rezultati prikazali u tabeli rezultata.

Odabirom jednog reda u tabeli rezultata, na jednoj od tri donje kartice — **Radni nalozi proizvodnje**, **Zahtevi za nabavku** ili **Nalozi podizvođača** — prikazuje se dokument koji je nastao oslobađanjem odabranog planiranog naloga.

Za pokretanje postupka vraćanja potrebno je odabrati jedan ili više naloga i kliknuti na dugme **Vrati naloge**.

### Uslovi za postupak vraćanja

Za **planirani radni nalog proizvodnje**:
- samo ako se generisani proizvodni nalog nalazi u statusu *Pokrenut*;
- ako je proizvodni nalog u statusu *Izvršni*, potrebno je prvo izvršiti vraćanje oslobađanja proizvodnog naloga;
- ako je nalog već u statusu *Izvršen*, više nije moguće vratiti planirani nalog, osim ako se postupak ne vrati unazad počevši od poništavanja evidentiranja proizvodne prijave.

Za **planirani nalog nabavke**:
- samo ako se generisani red zahteva za nabavku nalazi u statusu *Neizvršen*;
- ako je red zahteva za nabavku već izvršen kreiranjem narudžbine dobavljaču, potrebno je postupak vraćanja sprovesti unazad, počevši od dokumenta nabavke koji je već generisan.

Za **planirani nalog podizvođača**:
- samo ako red generisanog naloga podizvođača još nije izvršen;
- odnosno ako za materijal povezan sa tim redom naloga kooperacije još nije generisan otpremni dokument.

Nakon izvršavanja ovog postupka vraćeni nalozi ponovo će biti vidljivi na kartici **Filter**, gde će biti moguće ponovo sprovesti njihovo oslobađanje.

Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte stranicu [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).