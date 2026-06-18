---
title: Reklasifikacije
sidebar_position: 4
---

Reklasifikacije predstavljaju primenu podataka iz *privremenog zatvaranja konta* (ili *konsolidacije*) na [*model reklasifikacije*](/docs/controlling/reclassifications/create-reclassification-model).

Prilikom unosa nove reklasifikacije, po otvaranju obrasca potrebno je definisati jedinstvenu šifru od *5* alfanumeričkih karaktera, opis reklasifikacije i izabrati model reklasifikacije. Nakon toga moguće je odabrati postojeće privremeno zatvaranje koje će se koristiti ili pokrenuti kreiranje novog *privremenog zatvaranja konta* pomoću odgovarajućeg dugmeta. U tom slučaju otvoriće se obrazac za kreiranje zatvaranja, a po završetku postupka ***FluentisERP*** će automatski povezati novokreirano zatvaranje sa reklasifikacijom koja se obrađuje.

:::tip NAPOMENA
Ova mogućnost je pogodna za jednostavnije situacije u kojima nije potrebno primeniti procedure koje trenutno nisu uključene u automatsku obradu privremenog zatvaranja.
:::

Ako je aktivirana opcija ***Konsolidovano***, moguće je odabrati *intercompany konsolidaciju* koja će biti korišćena u reklasifikaciji.

Kod reklasifikacija zasnovanih na računovodstvenim modelima, u zaglavlju su dodatno dostupna polja za povezivanje sa prodajnim projektima, centrima troškova i profitnim centrima. Nakon postavljanja bilo kog od ovih filtera, sistem će ponovo izračunati kompletnu strukturu reklasifikacije koristeći podatke iz privremenih zatvaranja koji odgovaraju primenjenom filteru.

Poslednje polje u zaglavlju reklasifikacije naziva se **Inkrementalno zatvaranje**. Ono predstavlja početnu vrednost na osnovu koje program izračunava razlike za vrednovanje detalja podkonta sa tipom salda *Povećanje* (pogledati detaljnu dokumentaciju o vrstama nivoa podkonta i projekata).

U donjem delu obrasca, sa leve strane, prikazuje se struktura [*modela reklasifikacije*](/docs/controlling/reclassifications/create-reclassification-model) vrednovana podacima iz izabranog zatvaranja ili konsolidacije. Kada se odabere čvor koji nije tipa *Zbir podređenih čvorova* niti *Izraz*, ***FluentisERP*** će sa desne strane prikazati dva pregleda.

U gornjem pregledu prikazuje se lista salda zatvaranja (ili konsolidacije) koja odgovaraju postavkama izabranog nivoa.

U donjem pregledu prikazuju se podaci koji su stvarno vrednovali izabrani nivo. Putem dostupnih opcija na alatnoj traci moguće je vršiti direktne izmene u reklasifikovanom modelu bez izmene izvornog modela reklasifikacije. Takođe je dozvoljen ručni unos podataka u donji pregled, uključujući dodavanje novih ručnih redova.

:::tip NAPOMENA
Ako je čvor tipa *Izraz* postavljen na fiksnu vrednost 0, u reklasifikovanom modelu biće dostupno polje za ručni unos vrednosti koja će se koristiti samo u trenutnoj obradi.
:::

Iz samog obrasca, kao i iz pregleda reklasifikacija, moguće je štampati reklasifikovani model. Pored toga, dostupan je i izveštaj ***Vrednovanje reklasifikacija***, koji omogućava poređenje dve reklasifikacije prethodno sačuvane u sistemu.