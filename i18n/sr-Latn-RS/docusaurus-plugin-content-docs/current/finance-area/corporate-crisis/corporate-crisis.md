---
title: Funkcionalnosti provere krize preduzeća
sidebar_position: 1
---

:::important[Uvod]
Propisi o krizi preduzeća, uvedeni Zakonskom uredbom br. 14/2019 (Kodeks o krizi preduzeća i insolventnosti), imaju za cilj sprečavanje nastanka insolventnosti primenom alata za rano praćenje finansijskih poteškoća.

Preduzeća su dužna da uspostave odgovarajuće organizacione, administrativne i računovodstvene sisteme koji omogućavaju pravovremeno prepoznavanje znakova privredne, imovinske ili finansijske neravnoteže.

Među alatima predviđenim propisima nalaze se **specifični pokazatelji**, kao što su DSCR (Debt Service Coverage Ratio), provera kontinuiteta poslovanja i analiza održivosti duga. Neispunjavanje ovih obaveza može dovesti do odgovornosti uprave.

U okviru **Fluentis ERP-a** dostupne su funkcionalnosti namenjene kontroli pokazatelja krize, koje preduzeću pomažu u ispunjavanju zahteva važećih propisa.

U nastavku su detaljno opisane dostupne funkcionalnosti za ispunjavanje navedenih obaveza.
:::

## 1. Pristup funkcionalnosti

Upravljanje krizom preduzeća moguće je korišćenjem Fluentis rešenja **Corporate Performance Monitor (CPM)**.

![](/img/it-it/finance-area/corporate-crisis/1.png)

CPM je namenjen praćenju poslovnih performansi, kao i izradi pokazatelja i KPI-jeva. Takođe se koristi za fleksibilnije upravljanje pokazateljima krize.

## 2. Funkcionalnosti CPM-a

Modul CPM sadrži odeljak posvećen proveri krize preduzeća, koji je podeljen na četiri kartice.

![](/img/it-it/finance-area/corporate-crisis/2.png)

Svaka kartica prikazuje obračun kontrola propisanih važećim zakonodavstvom.
Na prvoj kartici, **Provere eksternih institucija**, sprovode se kontrole institucija kao što su **Poreska uprava** i **INPS**, koje prate:

- kašnjenja u plaćanju PDV-a;
- kašnjenja u plaćanju doprinosa za socijalno osiguranje i poreskih obaveza zaposlenih.

Konkretno, pragovi koji aktiviraju upozorenja su:
- **PDV**: minimalni dug od 100.000 € → moguća insolventnost;
- **Ostali poreski dugovi**: više od 1.000.000 € uz kašnjenje duže od 90 dana → upozorenje;
- **Doprinosi za socijalno osiguranje**: više od 50.000 € uz kašnjenje duže od 180 dana → upozorenje.

Navedeni pragovi mogu se konfigurisati u internim tabelama sistema.
Na drugoj kartici, **Provera neto kapitala i DSCR-a**, proveravaju se:
- **Ukupan neto kapital**: ako je negativan, pretpostavlja se stanje krize;
- **DSCR (Debt Service Coverage Ratio)**: ako je manji od 1, pretpostavlja se stanje krize.

Na trećoj kartici, **Sektorski pokazatelji**, proverava se pet sektorskih pokazatelja čije očekivane vrednosti zavise od privrednog sektora kojem preduzeće pripada. Ako su prekoračeni svi propisani pragovi, ponovo se pretpostavlja stanje krize.
Poslednja kartica namenjena je obračunu **prilagođenih pokazatelja**, na osnovu kojih svako preduzeće može sprovoditi sopstvene specifične analize i procene.

## 3. Izvori podataka

Podaci koji se koriste za provere potiču iz:
- **specifičnih** konfiguracionih **tabela**
- automatskih obračuna putem **SQL** upita
- konfiguracija povezanih sa **kontnim planom**
- **dospelih plaćanja**

Pre svega, u tabeli **Preduzeće** potrebno je definisati **privredni sektor** kojem preduzeće pripada: **Kartica Administrativne postavke > Polje Privredni sektor za krizu preduzeća**.
Zatim je u **kontnom planu** potrebno **dodeliti vrste konta za krizu preduzeća** (fiksna tabela) putem polja **Kriza preduzeća**, koje se nalazi u mreži **Konta** (detalji kontnog plana).

Moguće vrste su:
- **ADE-VAT** – obično se dodeljuje kontu koje evidentira mesečni saldo PDV-a. Za to konto potrebno je voditi otvorene stavke kako bi se mogao utvrditi neizmireni dug.
- **ADE-OTHER** – na sličan način dodeljuje se kontima koja evidentiraju ostale poreske obaveze, takođe uz vođenje otvorenih stavki.
- **INPS** – dodeljuje se obavezama za doprinose za socijalno osiguranje, takođe uz vođenje otvorenih stavki.
- **LIQ** – dodeljuje se **kontnim grupama** (glavnim kontima) koje sadrže detalje kupaca i dobavljača, iz kojih se putem novčanog toka određuju podaci o raspoloživoj likvidnosti.
- **FIN** – dodeljuje se kontima (ili kontnim grupama) iz kojih se putem novčanog toka dobijaju podaci o finansijskim obavezama, odnosno budućim ratama kredita i lizinga.
- **RIS** – dodeljuje se analitičkim kontima rezervi za pokriće.
- **MON** – dodeljuje se analitičkim kontima (ili kontima) nemonetarnih troškova i prihoda.

Obračuni koji se standardno izvršavaju preuzimaju iznose:
- direktno iz računovodstvenih otvorenih stavki
- iz podataka obrađenih u poslednjem obračunu novčanog toka
- iz salda konta povezanih sa određenim čvorovima **standardnog modela reklasifikacije IV direktive**.

U ovom slučaju model služi isključivo za identifikaciju konta koja treba koristiti za pojedine varijable. Iznosi se čitaju direktno iz glavne knjige, bez potrebe za međuperiodnim zatvaranjem ili reklasifikacijom.

## 4. Upravljanje krizom

Trenutno sistem sprovodi samo **proveru pokazatelja**, ali ne upravlja kompletnim operativnim procesom krize.
Moguće je konfigurisati automatska upozorenja u slučaju prekoračenja zadatih pragova pomoću zakazanih zadataka u **Supervisoru**.

## 5. Ciljne vrednosti i privredni sektori

Svaki privredni sektor ima svoje unapred definisane **ciljne vrednosti**.
Ove vrednosti su sačuvane ili u internim, korisniku nedostupnim tabelama (za provere eksternih institucija) ili u obrascu **Targeting**, gde standardni sektorski pokazatelji nisu izmenjivi jer imaju status *standard*. Korisnik može menjati samo ciljne vrednosti sopstvenih prilagođenih pokazatelja.

## 6. Deskriptori i formule

Osim provera eksternih institucija, koje se obračunavaju u izvornom programskom kodu, svaki drugi pokazatelj povezan je sa **deskriptorom** (pogledajte istoimeni obrazac u glavnom meniju CPM-a), koji definiše njegovu formulu obračuna, na primer:

- **Pokazatelj održivosti finansijskih troškova**: obračunava se kao **Finansijski troškovi / Prihodi**, a sačuvan je u deskriptoru **03.01** sa formulom **[RIC-OneriFin]/[RIC-Fatturato]**.
- **Pokazatelj adekvatnosti kapitala**: obračunava se kao **Neto kapital / Ukupan dug**, a sačuvan je u deskriptoru **03.02** sa formulom **[RIC-PatNetto]/[RIC-DebTot]**.

![](/img/it-it/finance-area/corporate-crisis/5.png)

Formule se zasnivaju na **varijablama** koje se u formuli navode pomoću njihovih oznaka unutar uglastih zagrada.

Svaka **varijabla** (pogledajte istoimeni obrazac u glavnom meniju CPM-a) poziva sopstveni SQL upit.

![](/img/it-it/finance-area/corporate-crisis/6.png)

SQL upiti na kojima se zasnivaju standardne varijable deo su standardnog sistema i korisnik ih ne može menjati. Međutim, na osnovu ponuđenih upita moguće je izraditi sopstvene prilagođene verzije koje odgovaraju specifičnostima računovodstvenog sistema pojedinačne implementacije.

## 7. Repozitorijum

Sistem u obrascu **Repozitorijum** čuva rezultate svih izvršenih obračuna, stvarajući istorijsku bazu podataka pogodnu za analize i kontrolne table.
Svaka obrada povezana je sa određenim datumom, pri čemu svaki pokazatelj može imati samo jedan rezultat za svaki dan.

![](/img/it-it/finance-area/corporate-crisis/7.png)