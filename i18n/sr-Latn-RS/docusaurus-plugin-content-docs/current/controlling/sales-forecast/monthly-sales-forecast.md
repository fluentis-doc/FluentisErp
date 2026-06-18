---
title: Mesečni planovi prodaje
sidebar_position: 2
---

Dostupno putem menija Kontroling > Mesečni planovi prognoze.

:::note Napomena
Pre nastavka pogledati uputstvo vezano za [Verzije prodajnih prognoza](/docs/configurations/tables/controlling/forecast/pv-versions).
:::

Forma je podeljena na tri područja:

- Filter podataka: omogućava pretragu već unetih prognoza;
- Predlog informacija: koristi se za unos ili masovno ažuriranje podataka;
- Donja tabela – lista prognoza: prikazuje postojeće prognoze uz mogućnost izmene ili dodavanja novih.

Područje filtera omogućava filtriranje prodajnih prognoza prema: *Verziji, Artiklu, Varijanti, Godini prognoze, Statusu aktivacije* (sve, aktivne ili neaktivne) i *Statusu konsolidacije* (sve, konsolidovane ili nekonsolidovane).

Područje **Informacije za predlog** omogućava, tokom unosa ili masovnog ažuriranja, predlaganje unapred definisanih informacija: Verzije (uzima se u obzir samo prilikom unosa) i *Mesečnih količina za predlog*. Ažuriranje je moguće samo za stavke prognoza koje još nisu konsolidovane.

Donje područje sastoji se od liste koja sadrži sledeće informacije:

- **Verzija, Godina, Podrazumevano i Aktivno**: informacije samo za čitanje jer se unose prilikom kreiranja nove prognoze kopiranjem iz predložene Verzije;
- **Konsolidovano**: označava da li je zapis „validiran“ i spreman za uključivanje u Generisanje proizvodnih naloga. Konsolidacija se može izvršiti ručno, red po red, ili masovno za sve prognoze određene Verzije pritiskom na dugme **Konsoliduj verziju**; poništavanje **konsolidovane verzije** moguće je pritiskom na dugme **Vrati konsolidaciju**;
- **Klasa, Šifra artikla, Opis artikla, Varijanta i Opis varijante**: informacije o artiklu prognoze, ne mogu se menjati ako je zapis konsolidovan;
- **Jedinica mere**: osnovna jedinica mere dodeljena artiklu, nije je moguće menjati;
- **Alternativna jedinica mere**: količine je moguće izražavati u alternativnoj jedinici mere (ako je definisana), različitoj od osnovne; nije je moguće menjati ako je zapis konsolidovan;
- **Mesečne količine, od januara do decembra**: predviđene mesečne količine izražene u osnovnoj ili alternativnoj jedinici mere; količine konsolidovanih prognoza za prethodne godine ili za mesece tekuće godine pre tekućeg meseca više nije moguće menjati;
- **Ukupna količina**: informacija se ne može menjati jer predstavlja zbir mesečnih količina.

**Primer unosa novih prognoza**

*Dvostrukim klikom miša na polje Šifra artikla u redu za unos otvara se pomoćnik za artikle. Pritiskom na dugme **Traži** (uz mogućnost primene filtera) biraju se željeni artikli sa liste, na primer deset artikala, a zatim pritiskom na dugme **Odaberi** artikli se masovno unose u listu prognoza za izabranu Verziju sa predloženim količinama.*

**Primer ažuriranja postojećih, nekonsolidovanih prognoza**

*Odabere se nekoliko redova postojećih prognoza i pritisne dugme **Predloži količine**. Nakon potvrde poruke (pritiskom na dugme **Da**) i obaveštenja „Ažuriranje izvršeno“, izabrani redovi će biti ažurirani novim količinama.*