---
title: Mjesečni planovi prodaje
sidebar_position: 2
---

Dostupno putem izbornika Kontroling > Mjesečni planovi prognoze.

:::note Napomena
Prije nastavka pogledati upute vezane uz [Verzije prodajnih prognoza](/docs/configurations/tables/controlling/forecast/pv-versions). 
:::

Obrazac je podijeljen u tri područja:

- Filter podataka: omogućuje pretraživanje već unesenih prognoza;
- Prijedlog informacija: koristi se za unos ili masovno ažuriranje podataka;
- Donja tablica – popis prognoza: prikazuje postojeće prognoze uz mogućnost izmjene ili dodavanja novih.

Područje filtra omogućuje filtriranje prodajnih prognoza prema: *Verziji, Artiklu, Varijanti, Godini prognoze, Statusu aktivacije* (sve, aktivne ili neaktivne) i *Statusu konsolidacije* (sve, konsolidirane ili nekonsolidirane).

Područje **Informacije koje treba predložiti**, omogućuje, tijekom unosa ili masovnog ažuriranja, predlaganje unaprijed definiranih informacija: Verzije (uzima se u obzir samo pri unosu) i *Mjesečne količine za prijedlog*. Ažuriranje je moguće samo za stavke prognoza koje još nisu konsolidirane.

Donje područje sastoji se od popisa koji sadrži sljedeće informacije:

- **Verzija, Godina, Zadano i Aktivno**: informacije samo za čitanje jer se unose prilikom kreiranja nove prognoze kopiranjem s predložene Verzije;
- **Konsolidirano**: označava je li zapis “validiran” i spreman za uključivanje u Generiranje proizvodnih naloga. Konsolidacija se može izvršiti ručno, redak po redak, ili masovno za sve prognoze određene Verzije pritiskom na gumb Konsolidiraj verziju; vraćanje **konsolidirane verzije** moguće je pritiskom na gumb **Vrati konsolidaciju**;
-	**Klasa, Šifra artikla, Opis artikla, Varijanta i Opis varijante**: informacije artikla prognoze, ne mogu se mijenjati ako je zapis konsolidiran;
-	**Jedinična mjera**: osnovna jedinica mjere pridružena artiklu, nije moguće mijenjati;
-	**Alternativna jedinica mjere**: moguće je izražavati količine u alternativnoj jedinici mjere (ako je definirana) različitoj od osnovne; nije moguće mijenjati ako je zapis konsolidiran;
-	**Mjesečne količine, od siječnja do prosinca**: predviđene mjesečne količine izražene u osnovnoj ili alternativnoj jedinici mjere; količine konsolidiranih prognoza za prethodne godine ili za mjesece tekuće godine prije tekućeg mjeseca više se ne mogu mijenjati;
-	**Ukupna količina**: informacija nije moguće mijenjati jer predstavlja zbroj mjesečnih količina.

**Primjer unosa novih prognoza**

*Dvostrukim klikom miša na pole Šifra artikla u retku za unos otvara se pomoćnik za artikle. Pritiskom na gumb **Traži** (uz mogućnost primjene filtra) odabiremo željene artikle s popisa, npr. deset artikala, i zatim pritiskom na gumb **Odaberi**; artikli se masovno unose u popis prognoza za odabranu Verziju s predloženim količinama.*

**Primjer ažuriranja postojećih, nekonsolidiranih prognoza**

*Odabere se nekoliko redaka postojećih prognoza i pritisne gumb **Predloži količine**; Nakon potvrde poruke (pritiskom na gumb **Da**) i obavijesti “Ažuriranje izvršeno”, odabrani redci će biti ažurirani s novim količinama.*