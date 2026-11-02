---
title: Kalendar proizvodnih kapaciteta
sidebar_position: 3
---

Prozor je prikazan kao tabela unutar koje se nalazi onoliko polja koliko ima dana u mesecu odabranom u gornjem desnom uglu.

U prvom polju nalaze se **Mесец** i **Godina** na koje se odnosi prikaz, a mogu se odabrati putem padajućeg menija i susednog polja za unos ili klikom na dugmad **Prethodna/sledeća godina** i **Prethodni/sledeći mesec**.

U nastavku se nalazi niz padajućih menija u kojima se biraju **Radni centar** za koji se želi izraditi kalendar, **Mašina** i **Grupa radnika**.

U svakom polju nalazi se oznaka koja, ako je aktivirana, označava da je određeni dan *neradni dan*.

Označavanje određenog dana kao *neradnog dana* omogućava korisniku da prilikom generisanja *kalendara proizvodnih kapaciteta* aplikacija automatski generiše raspoloživost *proizvodnog resursa* samo za dane koji su u [Fabričkom kalendaru](/docs/configurations/tables/production/factory-calendar) označeni kao radni dani.

Osim te oznake, u svakom polju prikazuju se i *sati/minuti proizvodnog kapaciteta* tog radnog centra za određeni dan.

U donjem spisku *Radnih perioda* za prikazani radni centar i mesec navedene su sledeće informacije:

> **Dan**: naziv dana u nedelji na koji se odnosi; informacija je samo za čitanje.

> **Datum**: datum na koji se odnosi, u formatu *dan/mesec/godina*; informacija je samo za čitanje.

> **Neradni dan**: označava da li je *Datum* neradni ili radni dan; informacija je samo za čitanje.

> **Vreme početka**: početak radnog perioda za određeni *Datum*, u formatu *sati:minute*, preuzet iz podešavanja *Radnog centra*; informacija se može menjati. Promena uzrokuje ponovni obračun proizvodnog kapaciteta za taj dan.

> **Vreme završetka**: završetak radnog perioda za određeni datum, u formatu *sati:minute*, preuzet iz podešavanja *Radnog centra*; informacija se može menjati. *Vreme završetka* ne može biti ranije od *Vremena početka*. Promena uzrokuje ponovni obračun proizvodnog kapaciteta za taj dan.

> **Broj**: broj resursa (mašina ili radnik), preuzet iz podešavanja *Radnog centra*; informacija se može menjati. Promena uzrokuje ponovni obračun proizvodnog kapaciteta za taj dan.

> **Tip resursa**: tip resursa na koji se odnosi navedeni broj; preuzet je iz podešavanja *Radnog centra*; informacija je samo za čitanje.

:::important Obračun dnevnog proizvodnog kapaciteta
Dnevni proizvodni kapacitet izračunava se prema sledećoj formuli:

> Σ ((Vreme završetka - Vreme početka) * Broj)
:::

Kalendar proizvodnih kapaciteta ima prednost u odnosu na Fabrički kalendar.

Nakon što podesite sva polja, dovoljno je kliknuti na dugme **Sačuvaj**.

Klikom na dugme **Automatsko generisanje** otvara se novi obrazac u kojem je moguće odrediti godinu za koju će se generisati kalendar i broj sati dnevnog kapaciteta. Taj broj sati uzeće se u obzir samo za one radne centre za koje nisu definisana odgovarajuća vremena početka i završetka.

Ovim postupkom moguće je generisati kalendare za sve radne centre istovremeno. Ako uklonite oznaku **Generisanje kalendara za sve radne centre** i kliknete na dugme **Traži**, moći ćete ručno da odaberete radne centre za koje želite da izradite kalendar.

Prilikom izrade kalendara moguće je odabrati da li će se uzeti u obzir procenat iskorišćenosti definisan u podešavanjima radnog centra.

*Posebno dugme*:

> **Automatsko generisanje**: otvara prozor u kojem je moguće podesiti različite parametre za generisanje zajedničkog kalendara za više radnih centara, uz jednake parametre za sve mesece u godini. Nakon unosa parametara zajedničkog kalendara, putem istog dugmeta moguće je pokrenuti njegovu izradu.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, dugmad i polja, pogledajte sledeću poveznicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).