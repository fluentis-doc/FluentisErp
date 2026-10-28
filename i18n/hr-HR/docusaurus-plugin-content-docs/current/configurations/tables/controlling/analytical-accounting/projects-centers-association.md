---
title: Povezivanje centara i projekata/naloga
sidebar_position: 1
---

Obrazac se nalazi na putanji: **Tablice > Kontroling > Analitičko računovodstvo > Povezivanje centara/projekata**

:::tip Napomena
Ova je tablica namijenjena isključivo tvrtkama koje imaju aktiviran *Kontroling*.
:::

Kada tvrtka proizvodi prema projektu/nalogu, analiza ostvarenih vrijednosti može biti usmjerena na dva načina:

- pojedinačno, na određeni projekt/nalog, osobito kada projekti/nalozi nemaju zajednička obilježja;
- na grupu projekata/naloga izrađenih tijekom određenog razdoblja, kada ti projekti/nalozi imaju obilježja na temelju kojih se mogu svrstati u istu kategoriju.

U drugom je slučaju ova tablica ključna jer omogućuje povezivanje centara tvrtke iz dimenzije *Projekti/Nalozi* s određenim obilježjem projekata/naloga. Na taj je način moguće vrednovati ukupne podatke prema tim *centrima projekta/naloga*, bez potrebe za analizom svakog pojedinačnog posla.

:::tip Napomena
Ako tvrtka nema potrebu za analizom na široj razini, konfiguriranje ove tablice može se preskočiti te se može koristiti samo jedan *centar projekta/naloga*, označen oznakom *Zadani centar za projekte*. Više pojedinosti dostupno je u tablici [**_CENTRI TROŠKA_**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).
:::

Dostupna konfiguracijska polja su:

- **_ŠIFRA_** povezivanja

:::tip Napomena
**_FluentisERP_** obrađuje povezivanja prema redoslijedu šifri. Kada se odabere projekt X, sustav najprije provjerava omogućuje li prvo povezivanje određivanje centra koji treba dodijeliti retku. Ako se centar ne može odrediti, provjerava se drugo povezivanje i tako dalje, sve do prvog valjanog podudaranja.
:::

- **_OPIS_** povezivanja
- **_VRSTA_** povezivanja, odnosno objekt unutar kojeg se traži razlikovno obilježje
- **_SVOJSTVO_** koje treba uzeti u obzir, a koje ovisi o odabiru u prethodnom polju.

Dostupne opcije za ova posljednja dva polja su:

- *Projekt*
  - *Vrsta projekta*
  - *Godina projekta*
  - *Zona projekta*
  - *Država projekta*

- *Kupac*
  - *Vrsta konta*
  - *Konto kupca*
  - *Zona kupca*
  - *Država kupca*
  - *Administrativna kategorija*
  - *Komercijalna kategorija*
  - *Stavka troška*

- *Artikl*
  - *Klasa*
  - *Robna kategorija*
  - *Mjerna jedinica*
  - *Porezna kategorija*
  - *Obilježje*
  - *Vrsta artikla*

Ovisno o odabiru, u donjoj će se mreži omogućiti povezivanje centra s odgovarajućim odabranim elementom.

:::danger UPOZORENJE
Definiranje povezivanja koje se odnosi na *artikle* zahtijeva sljedeće:

- unutar svakog projekta mora postojati barem jedan redak s artiklom koji ima definiranu šifru;
- redak nabave ili prodaje, odnosno općenito redak analitičkog računovodstva koji se knjiži kao izravni trošak ili prihod projekta/naloga, mora biti povezan s retkom artikla koji ima definiranu šifru unutar projekta. U suprotnom **_FluentisERP_** neće moći primijeniti ovo povezivanje te će pokušati pronaći sljedeće povezivanje.

Primjerice, ako bi svaki projekt bio obilježen gotovim proizvodom za prodaju koji pripada različitoj *klasi*, vjerojatno bi bilo jednostavnije upravljati različitim *vrstama projekta* za svaku klasu nego zahtijevati unos artikla u pojedinačni projekt i njegov odabir u svakom povezanom dokumentu.
:::