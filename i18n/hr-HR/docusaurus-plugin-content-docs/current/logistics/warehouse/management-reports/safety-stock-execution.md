---
title: Sigurnosna zaliha
sidebar_position: 3
---

Izvještaj se nalazi na putanji **Logistika > Skladište > Upravljački izvještaji > Sigurnosna zaliha** i omogućuje korisniku jednostavno pretraživanje sustava te brzo izdvajanje informacija o artiklima koji će u budućnosti pasti ispod minimalne zalihe. Na taj je način moguće pravovremeno planirati nabavu i osigurati kontinuiranu raspoloživost artikala.

**Tablice i parametri**

Prije pokretanja postupka sigurnosne zalihe preporučuje se provjeriti sljedeće postavke:

- u *Šifarniku artikala* potrebno je popuniti karticu *Nabava*, posebno podatke vezane uz opskrbu
- u *MRP parametrima* za artikle koji će se pratiti kroz sigurnosnu zalihu potrebno je postaviti *Politiku upravljanja* na **Zaliha**
- vrijednost **Minimalna zaliha** mora biti manja ili jednaka vrijednosti **Točka naručivanja**

**Postupak**

Postupak sigurnosne zalihe koristi algoritam koji se temelji na prosječnoj dnevnoj potrošnji izračunatoj na kartici *Nabava* u *Šifarniku artikala*.

Polazi se od trenutnog stanja zalihe te se provjerava hoće li, na temelju prosječne potrošnje, do odabranog datuma doći do pada ispod minimalne zalihe.

Postupak omogućuje odabir:

- **Artikla** (klasa, šifra artikla, opis)
- eventualne **Varijante** za artikle koji koriste upravljanje varijantama
- **Datuma** do kojeg se želi izračunati sigurnosna zaliha

Također je moguće aktivirati opciju **Automatski izradi dokument za nadopunu zaliha** za artikle koji će pasti ispod minimalne zalihe.

Ako je ta opcija aktivna, potrebno je dodatno odrediti:

- **Tip dokumenta zahtjeva**
- **Napomenu** koja će se upisati u zaglavlje zahtjeva za nabavu

Nakon unosa željenih parametara potrebno je kliknuti **Izvrši** kako bi se pokrenula obrada podataka.

Tablica rezultata prikazuje popis izvršenih obrada s pripadajućim podacima **Broj** i **Datum obrade**.

Važno je napomenuti da se u ovom postupku, kada se generira **zahtjev za nabavu** i raspoloživa količina je manja od **Razine zalihe za ponovno naručivanje**, količina zahtjeva određuje na sljedeći način: ako za artikl nije postavljena vrijednost **Maksimalne zalihe**, tražena količina bit će jednaka vrijednosti **Razina zalihe za ponovno naručivanje – Raspoloživa količina**; dok će, ako je definirana i vrijednost **Maksimalne zalihe**, tražena količina biti jednaka vrijednosti **Maksimalna zaliha – Raspoloživa količina**.

:::note Napomena
Ako je za artikl način opskrbe postavljen na **Nabava**, kreirat će se zahtjev za nabavu, ali neće biti kreiran radni nalog.

Ako je za artikl način opskrbe postavljen na **Proizvodnja** ili **Kooperacija**, sustav će kreirati odgovarajući radni nalog.
:::

Za sve funkcionalnosti koje nisu posebno opisane u ovom dokumentu o zajedničkom radu obrazaca za ispis pogledajte:

[Pregled i ispis](/docs/guide/common/operations-with-data/reports).