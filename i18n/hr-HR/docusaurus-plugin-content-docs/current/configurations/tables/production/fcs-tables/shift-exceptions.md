---
title: Izuzeci u kalendaru
sidebar_position: 7
---

Tablica se nalazi na putanji **Tablice > Proizvodnja > Tablice A.F.C.S. > Izuzeci u kalendaru**.

Podaci iz ove tablice koriste se isključivo u postupku [A.F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).

Ovaj obrazac omogućuje definiranje kalendarskih iznimki za bilo koji resurs koji simulira planer (radni centri, strojevi, radnici, proizvodni resursi).

Između radnih centara i strojeva postoji hijerarhijski odnos. Stoga, ako je radni centar neaktivan u određenom vremenu, pripadajući strojevi automatski će također biti neaktivni.

Svaki resurs ima svoj standardni radni raspored, ali za određene dane moguće je definirati drukčiji radni raspored. Primjerice, blagdani se definiraju kao kalendarske iznimke s praznim radnim rasporedom.

Drugi tipični primjeri primjene praznog radnog rasporeda su održavanje stroja, odsutnost radnika (godišnji odmor ili bolovanje) te održavanje proizvodnih resursa. Izuzeci se mogu koristiti i za ograničena vremenska razdoblja tijekom kojih se radi manje ili više sati nego inače (prekovremeni rad, skraćeno radno vrijeme itd.).

Izuzeci se unose odabirom radnog rasporeda, vremenskog razdoblja tijekom kojeg će iznimka vrijediti te elemenata na koje se iznimka primjenjuje. Za svaku vrstu elemenata moguće je odabrati više elemenata istodobno, primjerice više radnih centara i više strojeva.

**Traženje iznimki u kalendaru**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

**Unos iznimki u kalendaru**

Za unos novih šifri potrebno je kliknuti u prvi prazni redak tablice ili pritisnuti gumb **Novo**.

Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: **Datum**, **Kategorija** i **Radni raspored**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).