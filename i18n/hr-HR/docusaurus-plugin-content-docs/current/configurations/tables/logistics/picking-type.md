---
title: Vrste Pickinga
sidebar_position: 34
---

:::important Čemu služi
Tablica Vrste Pickinga u Fluentisu omogućuje šifriranje i definiranje različitih vrsta Pickinga koje se mogu koristiti prilikom kreiranja lista za preuzimanje. Korisnici mogu unositi nove zapise, mijenjati postojeće ili ih brisati prema operativnim potrebama.

Svaka vrsta Pickinga može se povezati s određenim parametrima, uključujući jedinstvenu alfanumeričku šifru, numeriranje dokumenata i predloške skladišnih kretanja. Također je moguće odrediti vrstu računa ili otpremnice koja će se koristiti te upravljati postavkama kao što su početni status Pickinga i prioritet skladišnih lokacija. Ova fleksibilnost omogućuje poduzećima prilagodbu sustava vlastitim potrebama, čime se povećava učinkovitost skladišnih operacija i optimizira upravljanje tokovima materijala.
:::

Tablica se nalazi na putanji **Tablice > Logistika > Vrste Pickinga**.

U ovoj je tablici moguće definirati različite vrste Pickinga koje će se koristiti prilikom kreiranja [novog Pickinga](/docs/logistics/picking/picking-management).

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

**Pretraživanje vrsta Pickinga**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici s rezultatima.

**Unos vrsta Pickinga**

Za unos novih šifri potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

**Vrsta/Opis**: Jedinstvena alfanumerička šifra i opis *vrste Pickinga*.

**Numeriranje**: U ovo polje potrebno je unijeti odgovarajuću šifru numeriranja. Za više informacija pogledajte članak [Numeriranja u Fluentisu](/docs/configurations/tables/fluentis-numerations).

**Numeriranje liste za preuzimanje**: Označava numeriranje koje će se koristiti za UDC liste kreirane ovom vrstom Pickinga.

**Razduživanje – vrsta računa**: U ovom polju potrebno je definirati *vrstu računa* koja će se predložiti prilikom kreiranja računa iz Pickinga putem odgovarajućeg postupka.

**Razduživanje – vrsta otpremnice**: U ovom polju potrebno je definirati *vrstu otpremnice* koja će se predložiti prilikom kreiranja otpremnice iz Pickinga putem odgovarajućeg postupka.

**Vrsta POS-a**: *Vrsta POS-a* koja će se koristiti prilikom kreiranja POS-a iz Pickinga.

**Početni status**: Označava zadani *status* s kojim se kreira Picking.

**Skladište/Opis skladišta**: U ovo polje unosi se skladište za evidentiranje kretanja robe, koje će se automatski predložiti na stavkama artikala unesenima u Picking.

**Predložak/Opis predloška**: U ovom se polju navodi predložak skladišnog kretanja robe sadržane u Pickingu koji pripada ovoj vrsti.

**Bez razduživanja**: Prilikom razduživanja narudžbe u Pickingu ne mijenja se status razduženja narudžbe.

**Količine artikala kod razduživanja ne zbrajaju se**: Ako je ova opcija aktivna, prilikom kreiranja Pickinga iz drugog dokumenta količine razduženih stavki artikala neće se zbrajati.

**Prijenos**: Ako je ova opcija aktivna, označava da je riječ o Pickingu za prijenos između internih skladišta.

**Lista za preuzimanje materijala**: Vrste Pickinga s aktivnom ovom opcijom bit će vidljive u funkcionalnosti *Lista za preuzimanje materijala*.

:::note Napomena
Za vrste Pickinga koje će se koristiti u *Listama za preuzimanje materijala*, odnosno za one kod kojih je aktivna opcija *Lista za preuzimanje materijala*, potrebno je unijeti skladišni predložak koji ima i protustavku.
:::

**Kontrola raspoloživosti Pickinga**: Deaktiviranjem ove opcije odgovarajući Pickinzi isključuju se iz *Analize raspoloživosti*.

**Kontrola raspoloživosti potvrde**: Aktiviranjem ove opcije potvrde u Pickingu uzimaju se u obzir kao rezervacija u *Analizi raspoloživosti*.

**Vidljivo u WMS-u**: Deaktiviranjem ove opcije odgovarajući Pickinzi neće biti vidljivi u obrascima WMS-a.

**Obvezna utovarna jedinica**: Vrste Pickinga kod kojih je ova opcija deaktivirana neće se moći koristiti za preuzimanje utovarnih jedinica te će biti vidljive u obrascu [Potvrda Pickinga](/docs/logistics/wms/sales/check-row-management) u WMS-u. Nasuprot tome, vrste Pickinga kod kojih je ova opcija aktivna prikazivat će se u funkcionalnosti [Upravljanje potvrdom](/docs/logistics/wms/sales/check-row-management) u WMS-u.

**Dopušteno prekomjerno razduživanje**: Ako je ova opcija aktivna, omogućuje prekomjerno razduživanje količine navedene u Pickingu. Može se koristiti u funkcionalnostima [Upravljanje potvrdom](/docs/logistics/wms/sales/check-row-management) i [Potvrda Pickinga](/docs/logistics/wms/sales/check-row-management) u WMS-u. Ako opcija nije aktivna, pri pokušaju evidentiranja količine veće od navedene prikazuje se poruka upozorenja koja onemogućuje nastavak postupka.

**Ispis**: Označava naziv zadanog izvješća povezanog s Pickingom.

**Broj kopija**: Označava zadani broj kopija za ispis.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).