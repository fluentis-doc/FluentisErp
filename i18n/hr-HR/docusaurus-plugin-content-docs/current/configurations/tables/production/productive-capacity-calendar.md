---
title: Kalendar proizvodnih kapaciteta
sidebar_position: 3
---

Prozor je prikazan kao tablica unutar koje se nalazi onoliko polja koliko ima dana u mjesecu odabranom u gornjem desnom kutu.

U prvom polju nalaze se **Mjesec** i **Godina** na koje se odnosi prikaz, a mogu se odabrati putem padajućeg izbornika i susjednog polja za unos ili klikom na gumbe **Prethodna/sljedeća godina** i **Prethodni/sljedeći mjesec**.

U nastavku se nalazi niz padajućih izbornika u kojima se odabiru **Radni centar** za koji se želi izraditi kalendar, **Stroj** i **Grupa radnika**.

U svakom polju nalazi se oznaka koja, ako je aktivirana, označava da je određeni dan *neradni dan*.

Označavanje određenog dana kao *neradnog dana* omogućuje korisniku da prilikom generiranja *kalendara proizvodnih kapaciteta* aplikacija automatski generira raspoloživost *proizvodnog resursa* samo za dane koji su u [Tvorničkom kalendaru](/docs/configurations/tables/production/factory-calendar) označeni kao radni dani.

Osim te oznake, u svakom polju prikazuju se i *sati/minute proizvodnog kapaciteta* tog radnog centra za određeni dan.

U donjem popisu *Radnih razdoblja* za prikazani radni centar i mjesec navedene su sljedeće informacije:

> **Dan**: naziv dana u tjednu na koji se odnosi; informacija je samo za čitanje.

> **Datum**: datum na koji se odnosi, u formatu *dan/mjesec/godina*; informacija je samo za čitanje.

> **Neradni dan**: označava je li *Datum* neradni ili radni dan; informacija je samo za čitanje.

> **Vrijeme početka**: početak radnog razdoblja za određeni *Datum*, u formatu *sati:minute*, preuzet iz postavki *Radnog centra*; informacija se može mijenjati. Promjena uzrokuje ponovni izračun proizvodnog kapaciteta za taj dan.

> **Vrijeme završetka**: završetak radnog razdoblja za određeni datum, u formatu *sati:minute*, preuzet iz postavki *Radnog centra*; informacija se može mijenjati. *Vrijeme završetka* ne može biti ranije od *Vremena početka*. Promjena uzrokuje ponovni izračun proizvodnog kapaciteta za taj dan.

> **Broj**: broj resursa (stroj ili radnik), preuzet iz postavki *Radnog centra*; informacija se može mijenjati. Promjena uzrokuje ponovni izračun proizvodnog kapaciteta za taj dan.

> **Vrsta resursa**: vrsta resursa na koju se odnosi navedeni broj; preuzeta je iz postavki *Radnog centra*; informacija je samo za čitanje.

:::important Izračun dnevnog proizvodnog kapaciteta
Dnevni proizvodni kapacitet izračunava se prema sljedećoj formuli:

> Σ ((Vrijeme završetka - Vrijeme početka) * Broj)
:::

Kalendar proizvodnih kapaciteta ima prednost pred Tvorničkim kalendarom.

Nakon što postavite sva polja, dovoljno je kliknuti gumb **Spremi**.

Klikom na gumb **Automatsko generiranje** otvara se novi obrazac u kojem je moguće odrediti godinu za koju će se generirati kalendar te broj sati dnevnog kapaciteta. Taj će se broj sati uzeti u obzir samo za one radne centre za koje nisu definirana odgovarajuća vremena početka i završetka.

Ovim postupkom moguće je generirati kalendare za sve radne centre istodobno. Ako uklonite oznaku **Generiranje kalendara za sve radne centre** i kliknete gumb **Traži**, moći ćete ručno odabrati radne centre za koje želite izraditi kalendar.

Prilikom izrade kalendara moguće je odabrati hoće li se uzeti u obzir postotak iskorištenja definiran u postavkama radnog centra.

*Poseban gumb*:

> **Automatsko generiranje**: otvara prozor u kojem je moguće postaviti različite parametre za generiranje zajedničkog kalendara za više radnih centara, uz jednake parametre za sve mjesece u godini. Nakon unosa parametara zajedničkog kalendara, putem istog gumba moguće je pokrenuti njegovu izradu.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, gumbe i polja, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).