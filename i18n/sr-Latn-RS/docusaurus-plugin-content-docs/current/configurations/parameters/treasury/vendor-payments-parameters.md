---
title: Parametri plaćanja dobavljačima
sidebar_position: 3
---

Parametri modula **Plaćanja dobavljačima** nalaze se na putanji **Parametri > Riznica (Trezor)**.

U parametrima modula Plaćanja dobavljačima moguće je unapred definisati podrazumevane vrednosti koje će se predlagati u postupcima modula.

- **Putanja za kreiranje datoteka**: podešavanje podrazumevane fascikle za kreiranje elektronske datoteke za domaće bankarske transfere. Preporučuje se kreiranje zajedničke mrežne fascikle na serveru kako bi joj se moglo pristupiti sa svih radnih stanica koje koriste ovaj postupak.

  **PAŽNJA:** polje je obavezno, ali **FluentisERP** koristi integrisani sistem za upravljanje dokumentacijom za čuvanje XML datoteke sa podacima o platnim nalozima. Datoteka se zato može preuzeti direktno iz obrasca platnog naloga.

- **ABI aplikacionog centra**: zastarelo polje.

- **Upotreba istorijskog kursa**: ako su otvorene stavke u stranoj valuti, ovom opcijom protivvrednost u valuti preduzeća obračunava se prema istorijskom kursu otvorene stavke, bez evidentiranja kursnih razlika.

- **Obavezna upotreba banke navedene u šifarniku dobavljača**: ako je opcija aktivirana, koristi se banka navedena u šifarniku dobavljača (tabela *Banka za plaćanje*) umesto banke definisane u računovodstvenom knjiženju i povezane sa otvorenom stavkom putem tabele *Vrste plaćanja* u šifarniku. Ovaj parametar vidljiv je u postupku *Automatsko kreiranje plaćanja dobavljačima* i može se zasebno deaktivirati pri svakom pokretanju postupka. Nije vidljiv prilikom kreiranja novog platnog naloga putem opcije *Plaćanja dobavljačima > Kreiraj plaćanje dobavljaču*, pa se u tom slučaju podešavanjem mora upravljati iz ovog odeljka.

- **Knjiženje iz modula Plaćanja dobavljačima**: podrazumevano omogućava knjiženje operacije iz modula Plaćanja dobavljačima i isključuje zatvaranje otvorene stavke iz platnog naloga prilikom računovodstvenog knjiženja.

- **Upravljanje IBAN referencama**: određuje da li je unos IBAN-a obavezan. Ako IBAN nedostaje za neko plaćanje u platnom nalogu, datoteka za elektronsko plaćanje neće biti kreirana.

- **Vrste plaćanja za obaveštenja o primljenim nalozima**: prilikom uvoza obaveštenja o dolaznim pasivnim Ri.Ba. nalozima potrebno je navesti podrazumevanu vrstu plaćanja koja će biti dodeljena kreiranom platnom nalogu.

- **Zadati nivo usluge**: padajući meni omogućava izbor vrste usluge za bankarske transfere sa unapred definisanog spiska, na primer *Instantno*, *PagoPA* ili *Hitno*. Izabrana vrednost prenosi se u zaglavlje platnog naloga, gde je naknadno moguće izmeniti.