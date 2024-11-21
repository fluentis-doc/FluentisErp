---
title: Dokumenti iz inostranstva na izlazu 
sidebar_position: 5
---
:::tip[Nota]
**Ispunjenje prošlo** u pogledu nabavki od trenutne dostave na sdi [**autofaktura **](/docs/finance-area/e-invoice/auto-invoice/auto-invoice-generation).
Što se tiče prodaja, trenutno se direktno šalju fakture (vidi ispod)
:::


Regulativa je predviđala slanje podataka Agenciji za prihode o operacijama prenosa dobara/usluga koje su EFFETTUATE i RICEVUTE od subjekata koji nisu identificirani/ne rezidenti na teritoriji države.

- Za **IZDANE** dokumente moguće je koristiti istu šemu predviđenu za italijanske elektronske fakture; alternativno, mogu se poslati sa šemom predviđenom za strane nabavne dokumente o kojima je reč u sledećoj tački.

- Za slanje dokumenata nabavke od stranih dobavljača na SdI predviđena je **[posebna šema](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign)**.

Digitalni potpis je obavezan za oba tipa datoteka.

Slanje ovih datoteka na SdI upravlja se u Fluentisu kroz operacije promene statusa dokumenata.

Dokument XML se zatim prenosi na SdI koji ga provjerava i preuzima, a zatim šalje obavijesti o eventualnom odbacivanju zbog neusklađenosti datoteke ili o uspješnom preuzimanju.

**Iz ovog obrasca moguće je pojedinačno upravljati svakim dokumentom ili masovno za više dokumenata istovremeno, mijenjajući status za slanje na SDI, prateći istu shemu kao i za talijanske fakture.**

U obrascu Dokumenti nabavke iz inozemstva na izlazu prikazani su svi dokumenti proizvedeni iz Knjigovodstvenih evidencija i povezani s ovom vrstom događaja. Obrazac je podijeljen na gornji dio u kojem su prikazani filteri za selekciju obrađenih datoteka, među kojima se nalaze:

 - Od datuma/ Do datuma prijema:
 - Od datuma/ Do datuma prijema kupca:

U tablici rezultata prikazani su podaci koji se odnose na obrađene ili datoteke koje treba obraditi.

 - **Status SdI**: sadrži opis statusa dokumenta, prikazujući kako internu upravu Fluentisa, tako i stanje prikazano iz Fluentis Business Hub-a i preuzeto direktno od SdI.
 - **Naziv datoteke SdI**: naziv datoteke koja se kreira u trenutku kada dokument prijeđe u stanje GENERIRANO; u izvornom formatu ili nakon potpisa digitalnim potpisom, predstavlja datoteku računa koja se šalje na SdI.
 - **Sdi Id**: jedinstveni identifikator koji SdI dodeljuje dokumentu u trenutku prijema.
 - **Datum posljednjeg događaja**: datum posljednje promjene stanja na datoteci, bilo ručno ili kao rezultat napredovanja obrade na SdI.

Na traci izbornika prikazane su funkcije za upravljanje dokumentom ili odabranim dokumentima. 

- Gumb ![](/img/neutral/common/view.png) **Prikaži** omogućuje pregled dokumenta, gdje je moguće pregledati događaje povezane s generiranom XML datotekom, izvršiti njezino preuzimanje ili promijeniti njezino stanje:  

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)

- Gumb ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png)  **Preuzmi privitak** izvršava preuzimanje odabrane datoteke u odabranu mapu na datotečnom sustavu.

- Gumb ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **Otvorite dokument** izvršava preuzimanje odabrane datoteke u odabranu mapu na datotečnom sustavu.  