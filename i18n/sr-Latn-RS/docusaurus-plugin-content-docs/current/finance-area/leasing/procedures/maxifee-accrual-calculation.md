---
title: Izračun razgraničenja maksimalne naknade
sidebar_position: 1
---

Ovaj obrazac omogućava pregled prethodno izračunatih razgraničenja te izračun novih godišnjih razgraničenja za maksimalne leasing naknade (*maxicanone*).
Postupak se, jednako kao i knjiženje obračuna razgraničenja u modulu računovodstva, sastoji od dvije faze:
1. izračun razgraničenja,
2. knjiženje izračunatih vrijednosti putem odgovarajuće računovodstvene procedure.

Odabirom funkcije **Novo** otvara se obrazac za unos parametara potrebnih za izračun.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image01.png)

Potrebno je definirati:
- **Računovodstvenu godinu**
- **Vrstu naloga** koja će se koristiti za knjiženje korektivne stavke
- **Datum knjiženja**
- **Datum obračunskog razdoblja**

Iako se odabire vrsta naloga, samu strukturu knjiženja određuje logika postupka.
Nakon spremanja postavki moguće je pokrenuti funkciju **Izračunaj**, kojom se generira prijedlog obračuna. Predložene stavke moguće je potvrditi pojedinačno ili masovno aktiviranjem opcije **Označi sve za potvrdu obračuna**. Nakon potvrde može se nastaviti s knjiženjem obračuna.
Predložene vrijednosti mogu se ručno izmijeniti, primjerice radi korekcije broja dana obračuna ili izračunatih iznosa.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image02.png)

Za svaki leasing preuzimaju se sljedeći podaci:
- **Vrsta leasinga**
- **Datum sklapanja**
- **Broj leasinga**
- **Opis**
- **Datum isteka ugovora**

## Objašnjenje izračunatih polja

**Ukupno dana**

Broj dana između **datuma sklapanja** i **datuma isteka** leasing ugovora.

**Dnevni trošak**

Izračunava se prema formuli:
> Ukupna vrijednost ugovora / Ukupno dana
Ukupna vrijednost ugovora obuhvaća:
- maksimalnu naknadu (*maxicanone*)
- troškove obrade i administracije
- zbroj glavnice, kamata i ostalih troškova svih leasing rata.

**Dani obračuna**

Broj dana između kasnijeg od sljedeća dva datuma:
- datuma sklapanja ugovora ili
- početka poslovne godine,

i datuma knjiženja obračuna maksimalne naknade.

**Trošak obračunskog razdoblja**

Izračunava se prema formuli:
> Dnevni trošak × Dani obračuna

**Plaćeno (knjiženo)**

Predstavlja ukupni iznos evidentiran tijekom poslovne godine:
- knjižene maksimalne naknade (*maxicanone*)
- knjiženih leasing rata (glavnica, kamata i troškovi)
u kojima je aktivirana oznaka **Knjiženo**, a planirani datum dospijeća manji je od datuma knjiženja obračuna maksimalne naknade.
Istodobno se provjerava:
- podudarnost poslovne godine leasing ugovora i godine obračuna
- postojanje računovodstvenih parametara za tu godinu.

**Obračun prethodne godine**

Prikazuje vrijednost obračuna prenesenu iz prethodne poslovne godine.
Kod prve godine evidentiranja leasing ugovora vrijednost ovog polja iznosi **0**.

**Vrijednost obračuna**

Izračunava se prema formuli:
> Plaćeno (knjiženo) + Obračun prethodne godine − Trošak obračunskog razdoblja

**Kontrolirano**

Potrebno je aktivirati ovu oznaku kako bi obračun mogao biti proknjižen, bez obzira na to prihvaća li se automatski izračun ili su vrijednosti prethodno ručno korigirane.
Za masovno potvrđivanje svih predloženih obračuna dostupna je opcija **Označi sve** iznad tablice.

**Knjiženo**

Oznaka se automatski aktivira nakon uspješnog knjiženja obračuna. Istodobno se upisuju i podaci o kreiranom računovodstvenom knjiženju.
Knjiženje obračuna moguće je pokrenuti iz ovog obrasca putem naredbi na traci izbornika ili korištenjem odgovarajuće procedure u modulu računovodstva.

| Funkcija | Značenje |
| --- | --- |
| Traži | Prikazuje prethodno izračunate obračune razgraničenja maksimalnih naknada. |
| Novo | Otvara novi obračun razgraničenja maksimalne naknade. |
| Spremi | Sprema zaglavlje i postavke obračuna. |
| Izračunaj | Izračunava vrijednosti razgraničenja za odabrane leasing ugovore. |
| Knjiženje razgraničenja maksimalne naknade | Pokreće knjiženje potvrđenih obračuna razgraničenja. |

S istog obrasca moguće je izvršiti i poništavanje (vraćanje) prethodno izvršenog knjiženja.

Prethodno izračunat i proknjižen obračun *maxicanone* može se automatski obraditi i tijekom postupka automatskog otvaranja konta, koji se pokreće putem procedure **[Automatsko zatvaranje konta](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**, aktiviranjem opcije **Žiro račun - prilagodba zapisa**.

U tom slučaju Fluentis će automatski izvršiti standardna knjiženja ponovnog otvaranja razgraničenja maksimalne leasing naknade (*maxicanone*), zajedno s ostalim automatskim knjiženjima otvaranja početnih stanja te prijenosa aktivnih i pasivnih vremenskih razgraničenja.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image03.png)