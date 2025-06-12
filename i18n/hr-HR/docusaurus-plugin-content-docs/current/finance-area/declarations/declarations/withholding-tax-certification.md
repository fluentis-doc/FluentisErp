---
title: Elektronička potvrda o obustavljenom porezu
sidebar_position: 2
---

Iz ovog obrasca moguće je upravljati Jedinstvenim certifikatom odbitaka po osnovi ugovora prema korisnicima generirajući datoteku za slanje putem interneta.

:::danger **PAŽNJA**:
 Za ispravnu obradu podataka od strane aplikacije, važno je da su i primici isplatnih korisnika, kao i **pripadajuća plaćanja**, evidentirani putem funkcionalnosti modula za isplatne korisnike, kako bi se mogao ispravno izračunati dug po osnovi poreza po odbitku.
:::

Struktura obrasca, malo drugačija od ostatka aplikacije, predviđa izlaganje postojećih komunikacija i njihovih detalja sve u jednom prozoru.

Tipka **Traži**, prisutan u traci izbornika, omogućuje pretraživanje već unesenih komunikacija koje će biti prikazane u gornjoj mreži Rezultat.

Odabirom komunikacije bit će vidljiv pregled pripadajućih detalja u središnjoj mreži Detalji. 

Dvojnim klikom na izjavu moguće je ući u njezinu izmjenu.

Tipka **Novi** će umetnuti novu izjavu.

### UPRAVLJANJE MATIČNIM PODACIMA:

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image01.png)

Unutar sekcije koja se odnosi na kontakt podatke nalaze se (otvorite expander) polja za podatke o primatelju (datum i mjesto rođenja). Ovi podaci bit će uneseni u jedinstvenu potvrdu. Također je potrebno ispuniti dva polja vezana uz **Ime** i **Prezime** jer jedinstveno polje "Naziv društva" nije relevantno za porezni obrazac.

### UNOS PODATAKA ZAGLAVLJA:

**Godina**: automatski predložen kao tekuća godina;

**OIB obveznog subjekta**: unesite OIB poduzeća (poreznog obveznika). Taj podatak bit će uključen u elektronički zapis i u zaglavlje ispisa poreznog obrasca.

**OIB posrednika**: se ci si avvale di un intermediario abilitato per l'invio della dichiarazione (Caf, Commercialista ecc...) indicare qui il relativo codice fiscale.

**Broj upisa CAF-a**: polje omogućuje unos broja registracije u registar CAF-a posrednika ovlaštenog za elektroničko slanje.o;

**Datum upotrebe otpreme**:  polje za unos datuma kada je ovlašteni posrednik preuzeo obvezu elektroničkog podnošenja prijave;

**Naziv datoteke**: potrebno je navesti naziv elektroničke datoteke koja će biti generirana;

**Putanja datoteke**: potrebno je navesti lokalnu putanju za spremanje datoteke koja će se slati elektroničkim putem. Dokument će također biti pohranjen u sustavu za upravljanje dokumentima unutar Fluentisa i bit će dostupan iz komentirane forme putem pripadajuće tipke ![](/img/neutral/common/document-manager.png);

**Vrsta slanja**: u ovom polju, putem padajućeg izbornika, potrebno je odabrati radi li se o redovnom slanju, zamjenskom slanju ili poništenju (vidi upute Ministarstva). Ovo polje treba koristiti u kombinaciji s flagovima **Otkazivanje** i **Zamjena** koji automatski ažuriraju odgovarajuća polja unutar poreznog obrasca.  

**Skup / Detaljan**: ovo polje specificira hoće li jedinstvena potvrda koja će biti obrađena biti detaljna (prikazat će podatke odvojeno za svaki pojedinačni iznos isplaćen svakom primatelju) ili agregirana (prikazat će agregirane i ukupne podatke za svakog pojedinačnog primatelja). Pogledajte upute ministarstva.

**Osoba koja podnosi izjavu, fizička osoba**: padajući izbornik, povezan s tablicom Zaposlenik, omogućuje unos osobe koja potpisuje izjavu (ovaj podatak je obavezan). 

**Šifra funkcije**: unesite putem padajućeg izbornika šifru funkcije osobe koja potpisuje izjavu (npr. zakonski zastupnik); pogledati službene upute ministarstva;

**Osoba koja daje izjavu, pravna osoba**: u ovom polju moguće je unijeti podatke o pravnoj osobi (preuzeti iz postojećih podataka u sustavu) koja podnosi izjavu u ime poduzeća koje je trenutno u upotrebi (vidjeti upute ministarstva);

**Datum potpisa zamjenika obveznika poreza**: potrebno je unijeti datum potpisa izjave.;

**Potpis**: uvijek aktivirati flag koji označava da je izjava potpisana i da se na ispisu prikazuje ime osobe koja je potpisala (vidi polje Osoba koja daje izjavu...)

### DETALJNA TABLICA

Polja odgovaraju podacima navedenima u službenom obrascu ministarstva, te se za objašnjenja sadržaja upućuje na porezne upute.  

Moguće je ručno intervenirati i izmijeniti podatke koji se automatski generiraju pomoću postupka izračuna, koji se može pokrenuti putem trake izbornika.![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image03.png)

Za generiranje datoteke za elektroničko slanje koristi se tipku **Izvezi**. Datoteka će biti pohranjena u dokument menadžeru Fluentis sustava, a moguće ju je i preuzeti na lokalno računalo.

![](/img/neutral/common/document-manager.png)

### DONJA TABLICA  

**AU kodovi....** namijenjeni su unosu dodatnih informacija za svaki redak u detaljnoj tablici, koje su potrebne u posebnim slučajevima. Za više informacija potrebno je konzultirati službene upute ministarstva.  

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image05.png)