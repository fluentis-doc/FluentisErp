---
title: Parametri plaćanja dobavljačima
sidebar_position: 3
---

Parametri modula **Plaćanja dobavljačima** nalaze se na putanji **Parametri > Riznica**.

U parametrima modula Plaćanja dobavljačima moguće je unaprijed definirati zadane vrijednosti koje će se predlagati u postupcima modula.

- **Putanja za kreiranje datoteka**: postavljanje zadane mape za kreiranje elektroničke datoteke za domaće bankovne transfere. Preporučuje se kreiranje zajedničke mrežne mape na poslužitelju kako bi joj se moglo pristupiti sa svih radnih stanica koje koriste postupak.

  **POZOR:** polje je obvezno, ali **FluentisERP** koristi integrirani sustav za upravljanje dokumentacijom za pohranu XML datoteke s podacima o platnim nalozima. Datoteka se stoga može preuzeti izravno iz obrasca platnog naloga.

- **ABI aplikacijskog centra**: zastarjelo polje.

- **Upotreba povijesnog tečaja**: ako su otvorene stavke u stranoj valuti, ovom se opcijom protuvrijednost u valuti tvrtke obračunava prema povijesnom tečaju otvorene stavke, bez evidentiranja tečajnih razlika.

- **Obvezno korištenje banke navedene u šifarniku dobavljača**: ako je opcija aktivirana, koristi se banka navedena u šifarniku dobavljača (tablica *Banka za plaćanje*) umjesto banke definirane u računovodstvenom knjiženju i povezane s otvorenom stavkom putem tablice *Vrste plaćanja* u šifarniku. Ovaj je parametar vidljiv u postupku *Automatsko kreiranje plaćanja dobavljačima* i može se zasebno deaktivirati pri svakom pokretanju postupka. Nije vidljiv pri kreiranju novog platnog naloga putem opcije *Plaćanja dobavljačima > Kreiraj plaćanje dobavljaču*, pa se u tom slučaju postavka mora upravljati iz ovog odjeljka.

- **Knjiženje iz modula Plaćanja dobavljačima**: prema zadanim postavkama omogućuje knjiženje operacije iz modula Plaćanja dobavljačima i isključuje zatvaranje otvorene stavke iz platnog naloga prilikom računovodstvenog knjiženja.

- **Upravljanje IBAN referencama**: određuje obveznost unosa IBAN-a. Ako IBAN nedostaje za neko plaćanje u platnom nalogu, datoteka za elektroničko plaćanje neće se kreirati.

- **Vrste plaćanja za obavijesti o primljenim nalozima**: prilikom uvoza obavijesti o dolaznim pasivnim Ri.Ba. nalozima potrebno je navesti zadanu vrstu plaćanja koja će se dodijeliti kreiranom platnom nalogu.

- **Zadana razina usluge**: padajući izbornik omogućuje odabir vrste usluge za bankovne transfere s unaprijed definiranog popisa, primjerice *Instantno*, *PagoPA* ili *Hitno*. Odabrana se vrijednost prenosi u zaglavlje platnog naloga, gdje ju je moguće naknadno izmijeniti.