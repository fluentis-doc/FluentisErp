---
title: Tipovi pickinga
sidebar_position: 34
---

:::important Čemu služi
Tabela Tipovi pickinga u Fluentisu omogućava šifriranje i definisanje različitih tipova pickinga koji se mogu koristiti prilikom kreiranja lista za preuzimanje. Korisnici mogu unositi nove zapise, menjati postojeće ili ih brisati u skladu sa operativnim potrebama.

Svaki tip pickinga može se povezati sa određenim parametrima, uključujući jedinstvenu alfanumeričku šifru, numerisanje dokumenata i šablone skladišnih kretanja. Takođe je moguće odrediti tip fakture ili otpremnice koji će se koristiti, kao i upravljati podešavanjima kao što su početni status pickinga i prioritet skladišnih lokacija. Ova fleksibilnost omogućava preduzećima da prilagode sistem sopstvenim potrebama, čime se povećava efikasnost skladišnih operacija i optimizuje upravljanje tokovima materijala.
:::

Tabela se nalazi na putanji **Tabele > Logistika > Tipovi pickinga**.

U ovoj tabeli moguće je definisati različite tipove pickinga koji će se koristiti prilikom kreiranja [novog pickinga](/docs/logistics/picking/picking-management).

Omogućava unos novih zapisa ili pretraživanje postojećih radi pregleda, izmene ili brisanja.

**Pretraživanje tipova pickinga**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos tipova pickinga**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

**Tip/Opis**: Jedinstvena alfanumerička šifra i opis *tipa pickinga*.

**Numerisanje**: U ovo polje potrebno je uneti odgovarajuću šifru numerisanja. Za više informacija pogledajte članak [Numerisanja u Fluentisu](/docs/configurations/tables/fluentis-numerations).

**Numerisanje liste za preuzimanje**: Označava numerisanje koje će se koristiti za UDC liste kreirane ovim tipom pickinga.

**Razduživanje – tip fakture**: U ovom polju potrebno je definisati *tip fakture* koji će biti predložen prilikom kreiranja fakture iz pickinga putem odgovarajućeg postupka.

**Razduživanje – tip otpremnice**: U ovom polju potrebno je definisati *tip otpremnice* koji će biti predložen prilikom kreiranja otpremnice iz pickinga putem odgovarajućeg postupka.

**Tip POS-a**: *Tip POS-a* koji će se koristiti prilikom kreiranja POS-a iz pickinga.

**Početni status**: Označava podrazumevani *status* sa kojim se kreira picking.

**Skladište/Opis skladišta**: U ovo polje unosi se skladište za evidentiranje kretanja robe, koje će automatski biti predloženo na stavkama artikala unetim u picking.

**Šablon/Opis šablona**: U ovom polju navodi se šablon skladišnog kretanja robe sadržane u pickingu koji pripada ovom tipu.

**Bez razduživanja**: Prilikom razduživanja narudžbine u pickingu ne menja se status razduženja narudžbine.

**Količine artikala kod razduživanja se ne sabiraju**: Ako je ova opcija aktivna, prilikom kreiranja pickinga iz drugog dokumenta količine razduženih stavki artikala neće se sabirati.

**Prenos**: Ako je ova opcija aktivna, označava da je reč o pickingu za prenos između internih skladišta.

**Lista za preuzimanje materijala**: Tipovi pickinga sa aktivnom ovom opcijom biće vidljivi u funkcionalnosti *Lista za preuzimanje materijala*.

:::note Napomena
Za tipove pickinga koji će se koristiti u *listama za preuzimanje materijala*, odnosno za one kod kojih je aktivna opcija *Lista za preuzimanje materijala*, potrebno je uneti skladišni šablon koji ima i protivstavku.
:::

**Kontrola raspoloživosti pickinga**: Deaktiviranjem ove opcije odgovarajući pickinzi isključuju se iz *Analize raspoloživosti*.

**Kontrola raspoloživosti potvrde**: Aktiviranjem ove opcije potvrde u pickingu uzimaju se u obzir kao rezervacija u *Analizi raspoloživosti*.

**Vidljivo u WMS-u**: Deaktiviranjem ove opcije odgovarajući pickinzi neće biti vidljivi u WMS obrascima.

**Obavezna utovarna jedinica**: Tipovi pickinga kod kojih je ova opcija deaktivirana neće moći da se koriste za preuzimanje utovarnih jedinica i biće vidljivi u obrascu [Potvrda pickinga](/docs/logistics/wms/sales/check-row-management) u WMS-u. Nasuprot tome, tipovi pickinga kod kojih je ova opcija aktivna prikazivaće se u funkcionalnosti [Upravljanje potvrdom](/docs/logistics/wms/sales/check-row-management) u WMS-u.

**Dozvoljeno prekomerno razduživanje**: Ako je ova opcija aktivna, omogućava prekomerno razduživanje količine navedene u pickingu. Može se koristiti u funkcionalnostima [Upravljanje potvrdom](/docs/logistics/wms/sales/check-row-management) i [Potvrda pickinga](/docs/logistics/wms/sales/check-row-management) u WMS-u. Ako opcija nije aktivna, pri pokušaju evidentiranja količine veće od navedene prikazuje se poruka upozorenja koja onemogućava nastavak postupka.

**Štampa**: Označava naziv podrazumevanog izveštaja povezanog sa pickingom.

**Broj kopija**: Označava podrazumevani broj kopija za štampanje.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).