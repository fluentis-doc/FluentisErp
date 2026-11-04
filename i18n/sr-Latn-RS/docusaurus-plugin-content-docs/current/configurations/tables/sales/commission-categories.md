---
title: Kategorije provizija
sidebar_position: 3
---

U ovom obrascu definišu se kategorije provizija, odnosno svojevrsni „dodatni podaci” za definisanje kriterijuma prema kojima se određuju procenti provizije.

Moguće je definisati objekat poslovnog sloja i njegovo svojstvo, koje služi kao parametar za određivanje vrednosti, a u donjoj tabeli navesti uslov filtera za važenje.

Primer:

**Objekat** -> FSSalesOrder

**Putanja svojstva** -> SalesOrderTypeCode (šifra tipa prodajnog naloga)

U donjoj tabeli potrebno je navesti **Vrednost** *OCIT* (na primer, radi ograničavanja važenja na tip naloga sa šifrom *OCIT*, odnosno italijanski nalog).

Uobičajeno je konfigurisati više slučajeva koji odgovaraju različitim vrednostima odabranog svojstva, na primer *OCIT*, *OCUE* itd., kako bi se procenti razlikovali u zavisnosti od tipa naloga, na primer italijanskog ili evropskog.

Mogući su i složeniji slučajevi sa različitim kombinacijama vrednosti i svojstava objekta.

:::note[Napomena]
Ova konfiguracija utiče na poseban način popunjavanja tabele za definisanje prioriteta i kriterijuma obračuna provizije, koja se nalazi na kartici *Izravne provizije* u šifarniku agenata.

Potrebno je više puta uneti isti kriterijum (na primer, prema artiklu ili kategoriji) i svaki put povezati odgovarajuću kategoriju provizije koja u ovom slučaju **služi kao filter**.

Dakle, red sa kriterijumom koji dohvaća kategoriju ili artikal, a koji je povezan sa detaljima samog kriterijuma (putem dugmeta **Detalji odabranih procenata** u istom obrascu), sadrži pojedinačne provizije za svaki artikal ili kategoriju i važi samo kada je tip naloga *OCIT*.

Potrebno je definisati sve detalje u novom redu, povezati ga sa kategorijom provizije *OCUE* i primenjivati ga samo na tu kombinaciju.
:::

:::danger[Upozorenje]
Popunjavanje ovog obrasca ima nekoliko posebnosti:

- Obrazac se sastoji od tabele *Master* (gornja tabela) i tabele *Detail* (donja tabela), koja zavisi od prve. Nakon popunjavanja reda u tabeli *Master*, tabela *Detail* ostaje u privremenom stanju u kojem nije moguće unositi podatke ili se prikazuju četiri kolone sa oznakom *Vrednost*. Zapravo je reč o četiri alternativna tipa podataka (tekst, datum, true/false itd.), od kojih se **može upotrebiti samo jedan**, u zavisnosti od svojstva odabranog u tabeli *Master*. Zato je **nakon popunjavanja reda u tabeli Master potrebno ponovo kliknuti na dugme Traži na traci sa alatkama, a zatim ponovo izabrati red mišem** kako bi se omogućilo popunjavanje tabele *Detail*.

- Prilikom popunjavanja reda u tabeli *Master*, nakon unosa proizvoljne šifre i opisa kategorije provizije, preporučuje se upotreba vidžeta za pretraživanje koji predlaže nazive Fluentis objekata. Na primer, unosom `FSSales...` prikazaće se objekti kao što su `FSSalesOrder` ili `FSSalesInvoice`.

- Nakon izbora odgovarajućeg Fluentis objekta potrebno je navesti **svojstvo** koje određuje vrednost detalja (koji se unosi u tabelu *Detail*) koju je potrebno dohvatiti. **Preporučuje se dvostruki klik kako bi se otvorio iskačući prozor za pretraživanje**, koji prikazuje svojstva i sve kolekcije povezane sa odabranim objektom. Na taj način je mnogo jednostavnije definisati odgovarajuće svojstvo.
::: 