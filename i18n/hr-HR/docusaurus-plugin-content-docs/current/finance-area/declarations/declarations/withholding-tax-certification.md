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

**Soggetto che effettua la dichiarazione, pers. fis.**: la combo box, collegata alla tabella Dipendente, permette di inserire il soggetto che firma la dichiarazione (il dato è obbligatorio).

**Codice carica**: inserire tramite la combo box il codice carica del soggetto che firma la dichiarazione (es. rappresentante legale) vedere le istruzioni ministeriali;

**Soggetto che effettua la dichiaraz. pers. giuridica**: in questo campo è possibile inserire i dati anagrafici (ripresi dalle anagrafiche già presenti nel sistema) di una società che presenta la dichiarazione per conto dell'azienda in uso (vedere istruzioni ministeriali);

**Data firma sostituto d'imposta**: è necessario indicare la data della firma della dichiarazione;

**Firma**: attivare sempre il flag che indica che la dichiarazione è firmata e riporta in stampa il nome del soggetto firmatario (vedere campo Soggetto che effettua la dich...)

### GRIGLIA DETTAGLIO

I campi ricalcano i dati presenti nel modello ministeriale e pertanto si rinvia alle istruzioni fiscali l'illustrazione del contenuto.

E' possibile intervenire manualmente modificando i dati che vengono generati automaticamente con la procedura di calcolo, attivabile dalla ribbon bar.![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image03.png)

Per generare il file da trasmettere telematicamente utilizzare il pulsante **Esporta**. Il file verrà memorizzato nel documentale di Fluentis e sarà possibile scaricarne una copia sul proprio pc locale.

![](/img/neutral/common/document-manager.png)

### GRIGLIA INFERIORE 

**Codici AU....** è riservata all'inserimento, per ogni riga della griglia Dettaglio, di informazioni ulteriori richieste in particolari situazioni per le quali si rinvia alle istruzioni ministeriali.

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image05.png)