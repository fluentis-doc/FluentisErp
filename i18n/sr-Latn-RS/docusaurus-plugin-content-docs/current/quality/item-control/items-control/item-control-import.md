---
title: Uvoz artikala za kontrolu
sidebar_position: 2
---

Procedura uvoza nalazi se na putanji **Kvalitet > Kontrola artikla > Kontrola artikla > Uvoz artikala za kontrolu**.

:::important Čemu služi
Ovo upravljanje omogućava kreiranje novih *Kontrola artikla* uvozom *Artikala* za kontrolu iz predviđenih *Vrsta dokumenata*:

> - *Prijem robe*
> - *Primke*
> - *Ulazni računi*
> - *Prijave proizvodnje*
> - *Faze proizvodnog naloga*
> - *Povrati od kooperanata*
> - *Rukovanje teretom*

Uvezeni artikli se zatim povezuju sa odgovarajućim *Kontrolnim planom* kako bi se putem vizuelnih pregleda ili korišćenjem *Mernih instrumenata* proverila njihova usklađenost.
:::

Forma je podeljena na:

- oblast filtera za izbor *Vrste dokumenta* iz koje se uvoze *Artikli* za kontrolu;
- oblast sa više kartica, po jedna za svaku *Vrstu dokumenta*, pri čemu svaka kartica sadrži tabelu sa rezultatima pretrage.

## Specifična dugmad

### ![](/img/neutral/common/search.png) Pretraga dokumenata za uvoz

Oblast filtera i kartica sa rezultatima menjaju se u zavisnosti od izabrane *Vrste dokumenta*.

Nakon podešavanja željenih filtera potrebno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

U zavisnosti od izabrane *Vrste dokumenta* prikazuju se:

- za *Prijem robe*, *Primke*, *Ulazne račune* i *Povrate od kooperanata* samo kodirani redovi artikala;
- za *Prijave proizvodnje* samo redovi sa proizvedenim i/ili odbačenim količinama;
- za *Faze proizvodnog naloga* i *Rukovanje teretom* svi redovi dokumenta.

### Potvrda redova dokumenta za uvoz

Omogućeno je kada je odabran najmanje jedan red iz tabele rezultata i definisana *Vrsta kontrole* koju treba kreirati.

Nakon izbora željenih redova potrebno je kliknuti na dugme **Potvrda** kako bi se povezali odgovarajući *Kontrolni planovi* i kreirale *Kontrole artikla*.

Po završetku operacije sistem postavlja pitanje da li želite da nastavite sa aktivnostima uvoza ili da otvorite upravo kreirane *Kontrole artikla*.

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />

## Upravljanje uvozom artikala za kontrolu

### Oblast filtera

Oblast se sastoji od:

- fiksnog dela koji sadrži filtere za pretragu opštih informacija;
- promenljivog dela koji zavisi od izabrane *Vrste dokumenta* i prikazuje se u proširenju *Artikal*.

Filteri za pretragu opštih informacija su:

> **Vrsta dokumenta**: *Vrsta dokumenta* u kojoj se pretražuju podaci.
>
> Prilikom pokretanja procedure predlaže se *Vrsta dokumenta* označena kao *Podrazumevana* u listi *Vrste dokumenata za uvoz* na kartici *Kontrole artikala* u okviru *Parametara kontrole artikala*.
>
> Ako nije definisana podrazumevana vrednost, predlaže se *Primka*.
>
> Promena ovog podatka automatski menja promenljivi deo filtera i prikazanu karticu.
>
> **Detalj artikla**: vrsta detalja koji se koristi za kontrolu artikla za izabranu vrstu dokumenta.
>
> Dostupne sistemske vrednosti su:
>
> - *bez grupisanja* – red artikla neće koristiti dodatne detalje;
> - *Lot* – koristi se *Lot* kao detalj;
> - *S.N.* – koristi se *Serijski broj* kao detalj;
> - *Jedinica utovara* – koristi se *Jedinica utovara* kao detalj.
>
> Prilikom pokretanja procedure predlaže se vrednost definisana u listi *Vrste dokumenata za uvoz* u okviru *Parametara kontrole artikala*.
>
> **Vrsta kontrole**: šifra *Vrste kontrole* koja će biti povezana sa kreiranim *Kontrolama artikla*.
>
> Predlaže se vrednost definisana u listi *Vrste dokumenata za uvoz* u okviru *Parametara kontrole artikala*.
>
> **Proširenje Detalj**
>
>> **Još nije razmatrano**: prikazuju se samo redovi dokumenta koji još nisu bili obuhvaćeni prethodnim uvozima.
>>
>> **Već razmatrano**: prikazuju se i redovi koji su već bili obrađeni u prethodnim uvozima, što se najčešće koristi za dodatne kontrole.
>
> **Barkod**: kod koji omogućava identifikaciju:
>
> - *Artikla*;
> - *Jedinice utovara*;
> - *Lota*;
> - *Serijskog broja*.
>
> **Proširenje Artikal**
>
>> **Jedinica utovara**: formatirani kod *Jedinice utovara*.
>>
>> **Lot**: šifra *Lota*.
>>
>> **Serijski broj**: šifra *Serijskog broja*.

### Oblast rezultata

Nalazi se na svakoj kartici i predstavlja tabelu sa rezultatima *Pretrage* izvršene na osnovu definisanih filtera.

Informacije prikazane u tabeli zavise od izabrane *Vrste dokumenta*.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).