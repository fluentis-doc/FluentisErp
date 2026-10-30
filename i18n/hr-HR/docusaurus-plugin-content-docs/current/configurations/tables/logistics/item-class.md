---
title: Klase artikala
sidebar_position: 12
---

:::important Čemu služi
Klasa artikla u Fluentisu ključan je element za učinkovito upravljanje artiklima. Omogućuje grupiranje srodnih artikala, čime se olakšava njihovo praćenje i omogućuju detaljne analize.

Svaki se artikl jedinstveno identificira kombinacijom klase, unaprijed definirane vrijednosti predšifre i alfanumeričke šifre. U nekim slučajevima klasu artikla moguće je konfigurirati tako da automatski generira i šifru i opis artikala koji pripadaju toj klasi, čime se olakšavaju postupci šifriranja.

Osim toga, klase artikala moguće je prilagoditi operativnim potrebama. Takav pristup osigurava veću učinkovitost u klasifikaciji i upravljanju proizvodima.
:::

Tablica se nalazi na putanji **Tablice > Logistika > Klase artikala**.

Tablica omogućuje upravljanje šifriranjem različitih klasa artikala radi njihova grupiranja.

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

**Pretraživanje klasa artikala**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici s rezultatima.

**Unos klasa artikala**

Za unos novih šifri potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

#### Posebna polja

> **Šifra**: Označava šifru klase artikala.
> **Opis**: Označava opis klase artikala.
> **Promjena klase**: Ako je ova opcija aktivna, omogućuje promjenu klase artikla čak i ako je artikl već imao evidentirana kretanja.
> **Grupa proizvoda**: Označava šifru grupe proizvoda kojoj pripada klasa artikla.
> **Opis grupe proizvoda**: Označava opis grupe proizvoda kojoj pripada klasa artikla.
*Na desnoj strani obrasca nalaze se još tri kartice:*

- **Kodifikator artikla**: Omogućuje usmjeravanje operatera pri šifriranju novog artikla za odabranu klasu artikla. Moguće je definirati pravila šifriranja pomoću sljedećih polja:

  > **Sortiraj**: Označava redoslijed pojedine komponente šifre.
  > **Tip**: Označava vrstu podatka koja će se koristiti u šifriranju.
  > **ExtraData**: Označava šifru dodatnih podataka (Extra Data) koja se koristi pri šifriranju.
  > **Koristi u šifri**: Ako je ova opcija aktivna, element će se koristiti u šifri artikla.
  > **Koristi u opisu**: Ako je ova opcija aktivna, element će se koristiti u opisu artikla.
  > **Svojstvo šifre**: Označava svojstvo poslovnog objekta.
  > **Opis svojstva**: Označava opis svojstva poslovnog objekta.
  > **Duljina**: Označava duljinu komponente šifre.
  > **Separatr**: Označava znak koji će se koristiti kao razdjelnik.
  > **Znak za progresivno popunjavanje**: Označava znak kojim će se popunjavati redni broj.
  > **Početna vrijednost rednog broja**: Označava početnu vrijednost rednog broja pri šifriranju.
  > **Fiksna vrijednost**: Označava fiksnu vrijednost koja će se unijeti u šifru.
  > **Prijenos (propagacija)**: Označava je li omogućen prijenos podatka.
  > **Obvezno**: Označava je li unos podatka obvezan.

- **Extra Data**: Omogućuje upravljanje dodatnim podacima povezanima s tom klasom artikla.

  *Za funkcionalnosti dostupne u okviru Extra Data pogledajte članak Extra Data.*

- **Opis na različitim jezicima**: Omogućuje unos prijevoda opisa klase artikla na drugi jezik.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).