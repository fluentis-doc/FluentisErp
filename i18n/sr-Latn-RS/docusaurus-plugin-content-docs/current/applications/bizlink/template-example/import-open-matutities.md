---
title: Uvoz otvorenih stavki
sidebar_position: 2
---

Excel datoteka (šablon) za uvoz otvorenih stavki u Administrativni modul zahteva popunjavanje obe kartice:

**Parametri BizLinka:**

Polja za popunjavanje (ne popunjavaju se automatski):

- Stavka ili plaćanje: 0 = otvorena stavka; 1 = plaćanje (zatvara stavke). U slučaju nedoumica pogledajte dokumentaciju Administrativnog modula.
- U plaćanju: oznaka koja pokazuje da li je stavka već uključena u transakciju uplate dobavljača. Obično se postavlja na 0 za standardne otvorene stavke.
- ID statusa stavki: podrazumevano postaviti na 1.

**Kartica Podaci:**

**KUPAC / DOBAVLJAČ**

- Konto / podkonto: unesite konto i podkonto kupca ili dobavljača koji već postoje u Fluentisu (OBAVEZNO).

**REFERENCE DOKUMENTA**

- Tip dokumenta: npr. FA za ulaznu fakturu, FV za prodajnu fakturu. Koristite već postojeću šifrovanu vrednost u Fluentisu.
- Broj / Datum fakture: opciono. U slučaju opšte stavke možete ga izostaviti tako što ćete kao tip dokumenta označiti GEN.

**PODACI O PLAĆANJU**

- Tip plaćanja: mora već postojati u Fluentisu (pogledajte postojeće šifre tipova plaćanja) – OBAVEZNO.
- Datum dospeća: datum dospeća stavke – OBAVEZNO.
- Konto / podkonto banke: banka povezana sa poslovnim partnerom (opciono).

**PODACI O STAVKAMA**

- Preostalo (Duguje / Potražuje): podatak o preostalom otvorenom iznosu. Ako stavka nije delimično plaćena, odgovara protivvrednosti.  
  PODATAK JE IZRAŽEN U VALUTI NAVEDENOJ U ODGOVARAJUĆOJ KOLONI. OBAVEZNO je popuniti polje Duguje ili Potražuje (u zavisnosti od znaka stavke) i uvek uneti vrednost 0,00 u susednu kolonu. (Ako unesete Duguje, npr. 100,00, unesite 0,00 u Potražuje.) OBAVEZNO.
- Protivvrednost (Duguje / Potražuje): vrednost stavke u valuti preduzeća (npr. evrima). OBAVEZNO je popuniti polje Duguje ili Potražuje (u zavisnosti od znaka stavke) i uvek uneti vrednost 0,00 u susednu kolonu. (Ako unesete Duguje, npr. 100,00, unesite 0,00 u Potražuje.) OBAVEZNO.
- Valuta: unesite šifru koja već postoji u Fluentisu (npr. EUR za evro, USD za američki dolar) – OBAVEZNO.
- Blokada: oznaka koja pokazuje da li je stavka blokirana i nije plativa (1) ili je slobodna (0). OBAVEZNO.
- Napomene: opciono polje za unos napomena o stavci.

**PODACI O KNJIŽENJU**

Datum i broj knjiženja povezanog sa poslovnim partnerom. Odeljak je opcion.

PAŽNJA: Ako je knjiženje uneto, ono mora već postojati u Fluentisu i biće pronađeno tokom uvoza. Ako ne bude pronađeno, uvoz će vratiti grešku.

---

Proverite da li su šifre valuta (tabela valuta) popunjene za sve valute (ponekad nedostaje šifra za evro).

**PAŽNJA**: proverite da li numeratori poslovnih partnera obuhvataju i prethodne godine ako Excel tabela sadrži stavke sa datumom dospeća iz prethodnih godina. U suprotnom će doći do greške. Razlog je to što novi sistem obično ima numeratore koji počinju od tekuće godine.