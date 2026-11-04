---
title: Kategorije provizija
sidebar_position: 3
---

U ovom obrascu definiraju se kategorije provizija, odnosno svojevrsni „dodatni podaci” za definiranje kriterija prema kojima se određuju postotci provizije.

Moguće je definirati objekt poslovnog sloja i njegovo svojstvo, koje služi kao parametar za određivanje vrijednosti, a u donjoj tablici specificirati uvjet filtra za valjanost.

Primjer:

**Objekt** -> FSSalesOrder

**Putanja svojstva** -> SalesOrderTypeCode (šifra vrste prodajnog naloga)

U donjoj tablici potrebno je navesti **Vrijednost** *OCIT* (primjerice, za ograničavanje valjanosti na vrstu naloga sa šifrom *OCIT*, odnosno talijanski nalog).

Uobičajeno je konfigurirati više slučajeva koji odgovaraju različitim vrijednostima odabranog svojstva, primjerice *OCIT*, *OCUE* itd., kako bi se postotci razlikovali ovisno o vrsti naloga, primjerice talijanskom ili europskom.

Mogući su i složeniji slučajevi s različitim kombinacijama vrijednosti i svojstava objekta.

:::note[Napomena]
Ova konfiguracija utječe na poseban način popunjavanja tablice za definiranje prioriteta i kriterija izračuna provizije, koja se nalazi na kartici *Izravne provizije* u šifarniku agenata.

Potrebno je više puta unijeti isti kriterij (primjerice, prema artiklu ili kategoriji) te svaki put povezati odgovarajuću kategoriju provizije koja u ovom slučaju **služi kao filtar**.

Dakle, redak s kriterijem koji dohvaća kategoriju ili artikl, a koji je povezan s detaljima samog kriterija (putem gumba **Detalji odabranih postotaka** u istom obrascu), sadrži pojedinačne provizije za svaki artikl ili kategoriju i vrijedi samo kada je vrsta naloga *OCIT*.

Potrebno je definirati sve detalje u novom retku, povezati ga s kategorijom provizije *OCUE* te ga primjenjivati samo na tu kombinaciju.
:::

:::danger[Upozorenje]
Popunjavanje ovog obrasca ima nekoliko posebnosti:

- Obrazac se sastoji od tablice *Master* (gornja tablica) i tablice *Detail* (donja tablica), koja ovisi o prvoj. Nakon popunjavanja retka u tablici *Master*, tablica *Detail* ostaje u privremenom stanju u kojem nije moguće unositi podatke ili se prikazuju četiri stupca s oznakom *Vrijednost*. Zapravo je riječ o četiri alternativne vrste podataka (tekst, datum, true/false itd.), od kojih se **može upotrijebiti samo jedna**, ovisno o svojstvu odabranom u tablici *Master*. Stoga je **nakon popunjavanja retka u tablici Master potrebno ponovno pritisnuti gumb Traži na alatnoj traci, a zatim ponovno odabrati redak mišem** kako bi se omogućilo popunjavanje tablice *Detail*.

- Prilikom popunjavanja retka u tablici *Master*, nakon unosa proizvoljne šifre i opisa kategorije provizije, preporučuje se upotrijebiti widget za pretraživanje koji predlaže nazive Fluentis objekata. Primjerice, upisivanjem `FSSales...` prikazat će se objekti kao što su `FSSalesOrder` ili `FSSalesInvoice`.

- Nakon odabira odgovarajućeg Fluentis objekta potrebno je navesti **svojstvo** koje određuje vrijednost detalja (koji se unosi u tablicu *Detail*) koju je potrebno dohvatiti. **Preporučuje se dvostruki klik kako bi se otvorio skočni prozor za pretraživanje**, koji prikazuje svojstva i sve kolekcije povezane s odabranim objektom. Na taj je način mnogo jednostavnije definirati odgovarajuće svojstvo.
:::