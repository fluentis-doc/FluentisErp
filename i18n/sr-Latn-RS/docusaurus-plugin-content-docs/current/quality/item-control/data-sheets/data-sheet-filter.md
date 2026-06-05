---
title: Pretraga tehničkih uputstava
sidebar_position: 1
---

Filter se nalazi na putanji **Kvalitet > Kontrola artikala > Tehnička uputstva**.

Tehnička uputstva katalogizuju sve informacije koje opisuju karakteristike povezanih proizvoda kao usklađene sa ugovorom, funkcionalnom specifikacijom ili određenom namenom i mogu biti prilagođena za *Kupca*.

Omogućeno je upravljanje *Revizijama* i sledljivošću između različitih *Tehničkih uputstava*.

Standardno su dostupni sledeći izveštaji:

- *Tehničko uputstvo* (za internu upotrebu)
- *Kartica proizvoda* (za komercijalnu upotrebu)

Filter podataka omogućava unos novih *Tehničkih uputstava* ili pretragu postojećih radi pregleda, izmene ili brisanja.

### ![](/img/neutral/common/search.png) Pretraga tehničkih uputstava

Forma se sastoji od dela za filtriranje i dela sa rezultatima.

Nakon podešavanja željenih filtera potrebno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

### ![](/img/neutral/common/new.png) Unos tehničkih uputstava

Za unos novog *Tehničkog uputstva* potrebno je pritisnuti dugme **Novo**.

### ![](/img/neutral/common/edit.png) Izmeni ili ![](/img/neutral/common/view.png) Prikaži tehnička uputstva

Za otvaranje zapisa potrebno je dvaput kliknuti na željeni red ili, nakon izbora jednog ili više redova, pritisnuti dugme **Izmeni** ili **Prikaži**.

*Specifična dugmad:*

### ![](/img/neutral/common/duplicate.png) Dupliraj karticu

Za dupliranje postojeće *Tehničke kartice* u novu *Tehničku karticu*, potrebno je označiti željenu karticu u tabeli i pritisnuti dugme **Dupliraj karticu**.

Istovremeno je moguće duplirati samo jednu *Tehničku karticu*.

Prikazaće se dijalog za unos sledećih podataka:

> **Vrsta lista**: predstavlja *Vrstu kartice* nove *Tehničke kartice* (obavezno polje).
>
> **Kupac**: predstavlja *Kupca* nove *Tehničke kartice*; predlaže se kupac iz izvorne kartice.
>
> **Nova šifra**: predstavlja *Šifru* nove *Tehničke kartice* (obavezno polje), predloženu na osnovu *Metode kodiranja* povezane sa *Vrste tehničke kartice*.
>
> **Dupliraj sa sledljivošću**: označava da li se želi zadržati veza/sledljivost između izvorne i nove *Tehničke kartice*:
>
> - u izvornoj kartici na kartici *Povezane stavke*;
> - u novoj kartici u sekciji *Izvor podataka kartice* unutar *Podataka zaglavlja*.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste nastavili ili odustali od postupka.

Nova *Tehnička kartica* biće kreirana sa *Revizijom* postavljenom na *0*.

Po završetku postupka prikazuje se nova *Tehnička kartica*.

### ![](/img/neutral/common/execute.png) Kreiraj novu reviziju

Da biste kreirali novu *Reviziju* postojeće *Tehničke kartice*, potrebno je označiti željenu karticu i pritisnuti dugme **Kreiraj novu reviziju**.

Nova *Revizija* može se kreirati samo za jednu *Tehničku karticu* istovremeno.

Kreira se nova *Tehnička kartica* sa svim informacijama iz izvornog dokumenta, ali sa:

- uvećanim indeksom *Revizije*;
- *Datumom početka važenja* postavljenim na tekući datum.

Izvorna *Tehnička kartica* prestaje da važi, a *Datum završetka važenja* automatski se postavlja na tekući datum.

Po završetku postupka prikazuje se nova *Revizija Tehničke kartice*.

### ![](/img/neutral/common/item-web.png) Kreiraj kontrolni plan

Iz *Tehničke kartice* moguće je kreirati *Kontrolni plan*.

Za to je potrebno označiti željenu *Tehničku karticu* i pritisnuti dugme **Kreiraj kontrolni plan**.

Novi *Kontrolni plan* može se kreirati samo za jednu *Tehničku karticu* istovremeno.

Prilikom kreiranja novog *Kontrolnog plana* kopiraju se samo *Svojstva* izvora koja imaju oznaku *Merenja koja treba izvršiti*, dok se ostale relevantne informacije preuzimaju iz *Tehničke kartice*.

Novi plan se kreira sa:

- indeksom *Revizije* postavljenim na *0*;
- *Datumom početka važenja* postavljenim na tekući datum.

Prikazaće se dijalog za unos sledećih podataka:

> **Vrsta kontrolnog plana**: predstavlja *Vrstu kontrolnog plana* novog *Kontrolnog plana* (obavezno polje).
>
> **Broj**: redni broj novog *Kontrolnog plana* (obavezno polje), predložen na osnovu *Numeracije* povezane sa *Vrste kontrolnog plana* i tekućeg datuma.
>
> **Kreiraj održavanje sledljivosti**: označava da li će se zadržati veza/sledljivost između izvorne *Tehničke kartice* i novog *Kontrolnog plana*, u sekciji *Izvor kontrolnog plana* unutar *Podataka zaglavlja*.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste nastavili ili odustali od postupka.

Po završetku postupka prikazuje se novi *Kontrolni plan*.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).