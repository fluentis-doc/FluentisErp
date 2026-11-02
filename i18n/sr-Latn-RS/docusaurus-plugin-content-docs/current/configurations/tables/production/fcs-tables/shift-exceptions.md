---
title: Izuzeci u kalendaru
sidebar_position: 7
---

Tabela se nalazi na putanji **Tabele > Proizvodnja > Tabele A.F.C.S. > Izuzeci u kalendaru**.

Podaci iz ove tabele koriste se isključivo u postupku [A.F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).

Ovaj obrazac omogućava definisanje kalendarskih izuzetaka za bilo koji resurs koji planer simulira (radni centri, mašine, radnici, proizvodni resursi).

Između radnih centara i mašina postoji hijerarhijski odnos. Stoga, ako je radni centar neaktivan u određenom periodu, pripadajuće mašine automatski će takođe biti neaktivne.

Svaki resurs ima svoj standardni radni raspored, ali je za određene dane moguće definisati drugačiji radni raspored. Na primer, praznici se definišu kao kalendarski izuzeci sa praznim radnim rasporedom.

Drugi tipični primeri primene praznog radnog rasporeda su održavanje mašine, odsustvo radnika (godišnji odmor ili bolovanje) i održavanje proizvodnih resursa. Izuzeci se mogu koristiti i za ograničene vremenske periode tokom kojih se radi manje ili više sati nego inače (prekovremeni rad, skraćeno radno vreme itd.).

Izuzeci se unose izborom radnog rasporeda, vremenskog perioda tokom kojeg će izuzetak važiti i elemenata na koje se izuzetak primenjuje. Za svaku vrstu elemenata moguće je istovremeno odabrati više elemenata, na primer više radnih centara i više mašina.

**Pretraživanje izuzetaka u kalendaru**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

**Unos izuzetaka u kalendaru**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja zahteva program: **Datum**, **Kategorija** i **Radni raspored**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).