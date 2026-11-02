---
title: Sigurnosna zaliha
sidebar_position: 3
---

Izveštaj se nalazi na putanji **Logistika > Skladište > Izveštaji upravljanja > Sigurnosna zaliha** i omogućava operateru sprovođenje kontrola radi pravilnog upravljanja zalihama. Konkretno, nakon pravilnog popunjavanja šifarnika artikala, moguće je upitati sistem i pronaći artikle kod kojih će u budućnosti doći do pada zaliha ispod minimalnog nivoa. Osim toga, nakon izvršavanja postupka moguće je automatski i pravovremeno kreirati zahteve za nabavku za artikle kod kojih će doći do pada zaliha ispod minimalnog nivoa.

**Tabele i parametri**

Pre pokretanja postupka izračunavanja artikala ispod minimalne zalihe preporučuje se definisanje niza podešavanja, kako u obliku unapred definisanih tabela tako i pravilnim parametrizovanjem osnovnih algoritama:

- U *šifarniku artikala* potrebno je popuniti karticu *Nabavka*, a posebno podatke za nabavku.
- U *MRP parametrima* artikala kojima se želi upravljati pomoću postupka za artikle ispod minimalne zalihe potrebno je postaviti *politiku upravljanja Zaliha*.
- Minimalna zaliha mora biti manja ili jednaka tački ponovnog naručivanja.

**Izračunavanje**

Izračunavanje artikala ispod minimalne zalihe koristi algoritam koji se zasniva na prosečnoj dnevnoj potrošnji, izračunatoj na kartici *Nabavka* u *šifarniku artikala*.

Polazi se od stanja zaliha u trenutku obrade i proverava se da li će, na osnovu prosečne potrošnje, doći do pada zaliha ispod minimalnog nivoa do zadatog datuma.

    Prosečna dnevna potrošnja = (Tačka ponovnog naručivanja - Minimalna zaliha) / Dani za ponovno naručivanje

    Količina za ponovno naručivanje = Minimalna zaliha + Prosečna potrošnja u periodu − Stanje zaliha

**Postupak**

U postupku je moguće odabrati: **Artikal** (klasa, šifra artikla, opis), eventualnu **Varijantu** (samo za artikle kojima se upravlja po varijantama) i krajnji **Datum** do kojeg se želi izračunati stanje zaliha ispod minimalnog nivoa. Takođe je moguće omogućiti **Automatsko kreiranje zahteva za nabavku** za artikle ispod minimalne zalihe. Ako je ova funkcija aktivirana, potrebno je navesti **Tip** zahteva za dokument i, po želji, **Napomenu** koja će biti uneta u zaglavlje zahteva za nabavku.

Nakon unosa ovih filtera kliknite na dugme **Izvrši** kako biste obradili podatke.

Tabela rezultata izvršavanja prikazuje spisak izvršenih obrada, uz podatke **Broj** i **Datum obrade**.

Važno je napomenuti da se u postupku izračunavanja artikala ispod minimalne zalihe, kada se generiše zahtev za nabavku (RDA), a raspoloživost je manja od tačke ponovnog naručivanja, tražena količina izračunava na sledeći način:

- Ako za artikal nije definisana *maksimalna zaliha*, tražena količina biće jednaka **Tačka ponovnog naručivanja – Raspoloživost**.
- Ako je definisana i *maksimalna zaliha*, tražena količina biće jednaka **Maksimalna zaliha – Raspoloživost**.

:::note Napomena
Treba napomenuti da će se, ako je način nabavke artikla *Nabavka*, kreirati zahtev za nabavku, ali ne i nalog. Ako je način nabavke artikla *Proizvodnja* ili *Podizvođač*, kreiraće se odgovarajući nalog.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca za štampanje, pogledajte sledeću poveznicu: [Pregled i štampanje](/docs/guide/common/operations-with-data/reports).