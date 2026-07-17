---
title: Sigurnosna zaliha
sidebar_position: 3
---

Izveštaj se nalazi na putanji **Logistika > Skladište > Upravljački izveštaji > Sigurnosna zaliha** i omogućava korisniku jednostavnu pretragu sistema i brzo izdvajanje informacija o artiklima koji će u budućnosti pasti ispod minimalne zalihe. Na taj način moguće je pravovremeno planirati nabavku i obezbediti kontinuiranu raspoloživost artikala.

## Tabele i parametri

Pre pokretanja postupka sigurnosne zalihe preporučuje se provera sledećih podešavanja:

- u *Šifarniku artikala* potrebno je popuniti karticu *Nabavka*, naročito podatke vezane za snabdevanje
- u *MRP parametrima* za artikle koji će se pratiti kroz sigurnosnu zalihu potrebno je postaviti *Politiku upravljanja* na **Zaliha**
- vrednost **Minimalna zaliha** mora biti manja ili jednaka vrednosti **Tačka naručivanja**

## Postupak

Postupak sigurnosne zalihe koristi algoritam zasnovan na prosečnoj dnevnoj potrošnji izračunatoj na kartici *Nabavka* u *Šifarniku artikala*.

Polazi se od trenutnog stanja zalihe i proverava da li će, na osnovu prosečne potrošnje, do izabranog datuma doći do pada ispod minimalne zalihe.

Postupak omogućava izbor:

- **Artikla** (klasa, šifra artikla, opis)
- eventualne **Varijante** za artikle koji koriste upravljanje varijantama
- **Datuma** do kog se želi izvršiti obračun sigurnosne zalihe

Takođe je moguće aktivirati opciju **Automatski kreiraj dokument za dopunu zaliha** za artikle koji će pasti ispod minimalne zalihe.

Ako je ta opcija aktivna, potrebno je dodatno definisati:

- **Tip dokumenta zahteva**
- **Napomenu** koja će biti upisana u zaglavlje zahteva za nabavku

Nakon unosa željenih parametara potrebno je kliknuti **Izvrši** kako bi se pokrenula obrada podataka.

Tabela rezultata prikazuje listu izvršenih obrada sa pripadajućim podacima **Broj** i **Datum obrade**.

Važno je napomenuti da se u ovom postupku, kada se generiše **zahtev za nabavku** i raspoloživa količina je manja od **Nivoa zalihe za ponovno naručivanje**, količina zahteva određuje na sledeći način: ukoliko za artikal nije definisana vrednost **Maksimalne zalihe**, tražena količina biće jednaka vrednosti **Nivo zalihe za ponovno naručivanje – Raspoloživa količina**; dok će, ukoliko je definisana i vrednost **Maksimalne zalihe**, tražena količina biti jednaka vrednosti **Maksimalna zaliha – Raspoloživa količina**.

:::note Napomena
Ako je za artikal način snabdevanja postavljen na **Nabavka**, kreiraće se zahtev za nabavku, ali neće biti kreiran radni nalog.

Ako je za artikal način snabdevanja postavljen na **Proizvodnja** ili **Kooperacija**, sistem će kreirati odgovarajući radni nalog.
:::

Za sve funkcionalnosti koje nisu posebno opisane u ovom dokumentu o zajedničkom radu formi za štampu pogledajte:

[Pregled i štampa](/docs/guide/common/operations-with-data/reports).