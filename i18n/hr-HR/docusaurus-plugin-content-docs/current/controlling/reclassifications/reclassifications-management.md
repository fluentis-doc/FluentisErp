---
title: Reklasifikacije
sidebar_position: 4
---

Reklasifikacije su u osnovi primjena podataka iz *privremenog zatvaranja konta* (ili *konsolidacije*) na [*model reklasifikacije*](/docs/controlling/reclassifications/create-reclassification-model).

Prilikom unosa nove reklasifikacije, pri otvaranju obrasca potrebno je postaviti jedinstveni kod od *5* alfanumeričkih znakova, opis reklasifikacije i unijeti model reklasifikacije. U tom trenutku postoji mogućnost pozivanja privremenog zatvaranja konta za korištenje ili korištenja gumba za izradu novog *privremenog zatvaranja konta*. U drugom slučaju otvorit će se obrazac
za izradu zatvaranja, a nakon dovršetka postupka ***FluentisERP*** će automatski dodijeliti novo kreiranje reklasifikaciji koja je u obradi.

:::tip Napomena
Ova je mogućnost primjenjiva u jednostavnijim situacijama, gdje se ne smatra potrebnim primijeniti postupke koji su trenutno isključeni iz automatske obrade privremenog zatvarnja.
:::

U slučaju da je postavljena oznaka ***Konsolidirano***, bit će moguće pozvati šifru Međupoduzetničkog *konsolidiranja* koju treba obraditi u reklasifikaciji.

Za reklasifikacije na temelju modela računovodstva, u zaglavlju reklasifikata dodatno su dostupna polja za povezivanje s prodajnim projektima, troškovnim centrima i profitnim centrima: nakon što se jedno od njih postavi, sustav će ponovno izračunati cijelu strukturu reklasifikata, preuzimajući podatke iz međuzatvaranja povezanih s primijenjenim filtrom.

Zadnje polje u zaglavlju reklasifikacije naziva se **Inkrementalno zatvaranje**. To je u osnovi početna vrijednost na temelju koje će program izračunati razlike za valorizaciju detalja podkonta s tipom salda *Povećanje* (pogledati detaljnu dokumentaciju o vrstama razina podkonta i projekata).

Ispod ovog odjeljka, na lijevoj strani obrasca, prikazat će se struktura [*Modela reklasifikacije*](/docs/controlling/reclassifications/create-reclassification-model) valorizirana podacima iz postavljene završnice/konsolidacije. Odabirom čvora
koji nije tipa *Zbroj podčvorova* ili *Izraz*, ***FluentisERP*** će na desnoj strani prikazati dva obrasca. U gornjem će se prikazati popis salda zatvaranja (ili konsolidacije) koji su u skladu s postavkama razine. U donjem će se prikazati
popis podataka koji su zapravo valorizirali razinu. Pomoću dostupnih gumba na vrpci moguće je izvršiti izravne izmjene u reklasificiranom modelu bez izmjene referentnog modela. Također je dopušten ručni unos podataka donjem obrascu, uz mogućnost dodavanja novih ručnih redaka.

:::tip Napomena
Ako je čvor tipa *Izraz* postavljen na fiksnu vrijednost 0, tada će u reklasificiranom modelu na desnoj strani biti
dostupno polje za ručno postavljanje vrijednosti koja će se koristiti u trenutnoj obradi. 
:::

U obrascu (kao i u pregledu reklasifikacija) dostupno je i ispisivanje reklasificiranog modela. Alternativno, dostupan je i izvještaj ***valorizacije reklasifikacija***, koji omogućuje usporedbu dviju reklasifikacija već pohranjenih u sustavu.

