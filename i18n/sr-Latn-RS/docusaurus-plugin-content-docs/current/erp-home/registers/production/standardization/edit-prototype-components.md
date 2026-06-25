---
title: Uređivanje komponenti prototipa
sidebar_position: 4
---

Ovaj obrazac omogućava masovno uređivanje prethodno kreiranih prototipova korištenjem tri različite procedure, u zavisnosti od vrste izmjene koju želite izvršiti: **Zamjena/Izmjena**, **Dodavanje** i **Brisanje**.

### Zamjena i izmjena

Odabirom opcije **Zamijeni/Izmijeni** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti komponentu u područje filtera.

Filter omogućava pretragu samo jednog artikla. Kao kriterij pretrage nije moguće koristiti samo klasu artikla niti samo dio njegove šifre ili opisa.

Nakon definisanja kriterija pretrage i klika na dugme **Traži** na *Ribbon* traci, sistem prikazuje sve prototipove koji sadrže komponentu unesenu u filteru, odnosno izvršava pretragu svih prototipova u kojima se komponenta koristi.

U tabeli rezultata prikazuju se klasa, šifra, opis i varijanta prototipa, verzija sastavnice, početak i kraj perioda važenja za roditeljski artikal i komponentu, kao i količina komponente i njena mjerna jedinica u okviru veze prototip–komponenta.

Odaberite jedan ili više prototipova na kojima želite izvršiti postupak **Zamjene/Izmjene** (višestruki odabir moguć je kombinacijom **CTRL + klik**).

U donjem dijelu obrasca odaberite novu komponentu koja će zamijeniti komponentu definisanu u filteru.

Prilikom odabira nove komponente moguće je koristiti **Pomoć pri izboru artikla** te unijeti **klasu**, **šifru**, **opis** i, po potrebi, **varijantu**. Obavezno je definisati **količinu** (fiksnu ili varijabilnu), a po potrebi i **količinu otpada**, **početak i kraj važenja**, **prioritet** i **napomene**.

Aktiviranjem opcije **Alternative** moguće je odlučiti da li će se zajedno s komponentom prenijeti i njene alternative.

Po potrebi se mogu uključiti i opcije **Dozvoljeno kretanje** i **Fiktivni nivo**. Za detaljan opis ovih polja pogledajte dokument [Upravljanje sastavnicama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).

Istom procedurom moguće je odabrati i istu komponentu koja je navedena u filteru. U tom slučaju neće doći do zamjene komponente, već samo do izmjene njenih postojećih parametara u odabranim prototipovima.

Nakon unosa svih podataka kliknite na dugme **Izvrši** kako biste pokrenuli postupak **Zamjene/Izmjene**.

### Dodavanje

Odabirom opcije **Dodavanje** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je u području filtera odabrati prototip u koji želite dodati novu komponentu.

Za razliku od postupka zamjene, ovdje nije potrebno ograničiti pretragu na jedan artikal. Kao kriterij pretrage moguće je koristiti samo klasu artikla ili dio njegove šifre odnosno opisa (filteri su isti kao kod postupka **Zamjena/Izmjena**).

Nakon definisanja kriterija pretrage i klika na dugme **Traži**, sistem prikazuje sve prototipove koji odgovaraju zadanim uslovima.

U tabeli rezultata prikazuju se klasa, šifra, opis i varijanta prototipa zajedno sa svim njegovim komponentama.

Odaberite jedan ili više prototipova (kombinacijom **CTRL + klik**) u koje želite dodati novu komponentu.

U donjem dijelu obrasca odaberite komponentu koju želite dodati. Za odabir možete koristiti **Pomoć pri izboru artikla**, pri čemu je potrebno unijeti **klasu**, **šifru**, **opis** i, po potrebi, **varijantu**. Obavezno je definisati **količinu** (fiksnu ili varijabilnu), a po potrebi i **početak i kraj važenja**, **prioritet** i **napomene**.

Opcijom **Alternative** moguće je prenijeti i alternative povezane s novom komponentom.

Po potrebi se mogu aktivirati i opcije **Dozvoljeno kretanje** i **Fiktivni nivo**. Za detaljnije informacije pogledajte dokument [Upravljanje sastavnicama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).

Nakon unosa svih podataka kliknite na dugme **Izvrši** kako biste pokrenuli postupak **Dodavanja**.

### Brisanje

Odabirom opcije **Obriši** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je odabrati komponentu koju želite ukloniti iz prototipova.

Nakon klika na dugme **Traži**, sistem prikazuje sve prototipove koji sadrže odabranu komponentu.

Tabela rezultata prikazuje klasu, šifru, opis i varijantu prototipa, početak i kraj važenja veze između komponente i prototipa, količinu komponente i njenu mjernu jedinicu.

Odaberite jedan ili više prototipova iz kojih želite ukloniti komponentu.

Kod ove procedure donji dio obrasca nije dostupan za unos podataka.

Nakon odabira željenih prototipova kliknite na dugme **Izvrši** kako biste pokrenuli postupak **Brisanja**.

### Specifično dugme

> **Izvrši**: pokreće proceduru odabranu u polju **Vrsta upravljanja** (*Zamjena/Izmjena*, *Dodavanje* ili *Brisanje*).

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte dokument [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).