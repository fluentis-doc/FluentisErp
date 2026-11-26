---
title: Sigurnosna zaliha
sidebar_position: 3
---

Ispis se nalazi na putanji **Logistika > Skladište > Izvještaji upravljanja > Sigurnosna zaliha** i omogućuje operateru provođenje kontrola radi pravilnog upravljanja zalihama. Konkretno, nakon što se pravilno popuni šifarnik artikala, moguće je upitati sustav i pronaći artikle kod kojih će u budućnosti doći do pada zaliha ispod minimalne razine. Osim toga, nakon izvršavanja postupka moguće je automatski i pravodobno kreirati zahtjeve za nabavu za artikle kod kojih će doći do pada zaliha ispod minimalne razine.

**Tablice i parametri**

Prije pokretanja postupka izračuna artikala ispod minimalne zalihe preporučuje se definirati niz postavki, kako u obliku unaprijed definiranih tablica tako i pravilnim parametriziranjem osnovnih algoritama:

- U *šifarniku artikala* potrebno je popuniti karticu *Nabava*, a posebno podatke za nabavu.
- U *MRP parametrima* artikala kojima se želi upravljati pomoću postupka za artikle ispod minimalne zalihe potrebno je postaviti *politiku upravljanja Zaliha*.
- Minimalna zaliha mora biti manja ili jednaka točki ponovnog naručivanja.

Osim toga, potrebno je uzeti u obzir sljedeće:

- Ako minimalna ili maksimalna zaliha nije definirana na artiklu, preuzima se iz zaliha po lokacijama.
- Artikli kod kojih su i minimalna zaliha i točka ponovnog naručivanja jednake nuli, kao i artikli kod kojih je maksimalna zaliha definirana, ali je manja od minimalne zalihe, ne uzimaju se u obzir prilikom izračuna.
- Preporučuje se da broj dana za ponovno naručivanje bude veći od nule. Ako je vrijednost nula, prosječna potrošnja iznosi nula, pa se artikl predlaže samo ako je raspoloživa količina već manja od točke ponovnog naručivanja.

**Izračun**

Izračun artikala ispod minimalne zalihe koristi algoritam koji se temelji na prosječnoj dnevnoj potrošnji, izračunatoj na kartici *Nabava* u *šifarniku artikala*.

Polazi se od stanja zaliha u trenutku obrade te se provjerava hoće li, na temelju prosječne potrošnje, doći do pada zaliha ispod minimalne razine do zadanog datuma.

Broj dana odnosi se na radne dane prema poslovnom kalendaru, a izračun počinje od današnjeg datuma.

Artikl se smatra artiklom ispod minimalne zalihe ako se na traženi datum predviđeno stanje zaliha spusti ispod točke ponovnog naručivanja. Pritom se uzimaju u obzir i predviđena kretanja prije tog datuma (primjerice, zaprimanje narudžbi).

    Prosječna dnevna potrošnja = (Točka ponovnog naručivanja - Minimalna zaliha) / Dani za ponovno naručivanje

    Količina za ponovno naručivanje = Točka ponovnog naručivanja + Prosječna potrošnja u razdoblju − Stanje zaliha

**Postupak**

U postupku je moguće odabrati: **Artikl** (klasa, šifra artikla, opis), eventualnu **Varijantu** (samo za artikle kojima se upravlja po varijantama) te krajnji **Datum** do kojeg se želi izračunati stanje zaliha ispod minimalne razine. Također je moguće omogućiti **Automatsko kreiranje zahtjeva za nabavu** za artikle ispod minimalne zalihe. Ako je ova funkcija aktivirana, potrebno je navesti **Vrstu** zahtjeva za dokument te, po želji, **Napomenu** koja će se unijeti u zaglavlje zahtjeva za nabavu.

Nakon unosa ovih filtara pritisnite gumb **Izvrši** kako biste obradili podatke.

Tablica rezultata izvršavanja prikazuje popis provedenih obrada, uz podatke **Broj** i **Datum obrade**.

Važno je napomenuti da se u postupku izračuna artikala ispod minimalne zalihe, prilikom generiranja zahtjeva za nabavu (RDA), ako je raspoloživa količina manja od točke ponovnog naručivanja, tražena količina određuje na sljedeći način:

- Ako za artikl nije definirana **maksimalna zaliha**, tražena količina iznosi **Točka ponovnog naručivanja + Prosječna potrošnja u razdoblju – Raspoloživa količina**.
- Ako je definirana i **maksimalna zaliha**, tražena količina iznosi **Maksimalna zaliha – Minimalna zaliha** (ili **Ekonomska količina narudžbe**, ako je veća od maksimalne zalihe).

Ako su definirani, poštuju se ekonomska količina narudžbe i višekratnik pri određivanju tražene količine. Ako jedna količina nije dovoljna za pokrivanje potreba do traženog datuma, za isti artikl generira se više redaka.

:::note Napomena
Treba napomenuti da će se, ako je način nabave artikla *Nabava*, kreirati zahtjev za nabavu, ali ne i nalog. Ako je način nabave artikla *Proizvodnja* ili *Podizvođač*, kreirat će se odgovarajući nalog.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca za ispis, pogledajte sljedeću poveznicu: [Pregled i ispis](/docs/guide/common/operations-with-data/reports).