---
title: Načini plaćanja
sidebar_position: 7
---
:::tip[FAst Start]
Tablica je obuhvaćena procedurom [**Fast Start**](/docs/guide/fast-start)

Ako želite izvršiti ručnu konfiguraciju, pogledajte kontrolni popis na poveznici iznad.  
:::

Ova tablica sadrži vrste plaćanja koje se koriste u sustavu za upravljanje.  

Omogućuje unos novih zapisa te pretraživanje postojećih radi pregleda, izmjene ili brisanja.  

Za unos novog zapisa kliknite na prvi prazan redak u gornjoj rešetki ili pritisnite tipku **Novo**. 

## Načini plaćanja

**Plaćanje**: alfanumerički identifikacijski kod;

**Opis**: opis vrste plaćanja, koji se uobičajeno prikazuje na raznim ispisima u okviru izlaznih/ulaznih procesa;

**Iznos biljega**: iznos pristojbe (biljega);  

**Postotak popusta pri plaćanju**: Omogućuje povezivanje određene vrste (pozivom iz tablice Vrste popusta) i pripadajućeg postotka popusta s redovima artikala u dokumentu, ovisno o odabranoj vrsti plaćanja.
Na primjer, moguće je definirati popust od 5% u slučaju kada se koristi vrsta plaćanja "Gotovina".

:::note Napomena
Ovaj se popust odnosi na umanjenje osnovice po stavci, zajedno s ostalim popustima koji proizlaze iz cjenika i komercijalnih uvjeta definiranih u matičnim podacima.
:::

**Vrsta financijskog popusta / Vrijednost financijskog popusta:** Povezani su s datumom dospijeća računa, i ne utječu na ukupni iznos dokumenta, već se primjenjuju prilikom evidentiranja naplate.


**Vrsta računa**: Omogućuje definiranje vrste efekta povezanog s plaćanjem ili nekom drugom vrstom naplate. Trenutačno ovo polje ima samo informativnu svrhu i nema povezane automatizacije, osim u slučaju vrste Bankovna mjenica koja identificira odgovarajuću vrstu plaćanja za kasnije kreiranje efekta.

**Intra kod usluge** : Kod plaćanja koji se koristi u Intrastat izvješćima.

**Kod za elektroničke račune** : Identifikacijski kod vrste plaćanja za elektroničke račune i račune prema javnim institucijama (primjeri: MP01, MP02 itd. – pogledati službene upute ministarstva za ispravno popunjavanje elektroničkih računa).

**Država**: Filtar koji omogućuje da se određena vrsta plaćanja prikaže samo onim tvrtkama unutar baze podataka koje imaju naznačenu nacionalnost. (Ovo je korisno jer je tablica zajednička svim tvrtkama unutar iste baze podataka.)

### Jezici

Za svaku vrstu plaćanja odabranu u gornjoj tablici, moguće je definirati opise na više jezika, što omogućuje korištenje za prilagođene ispise.

### Tipi effetti

Za svaku vrstu plaćanja odabranu u gornjoj tablici, moguće je unaprijed definirati vrstu efekta koja će se kreirati iz stavke/dospijeća unutar modula *Portfelj efekata*.

:::danger Upozorenje
Povezivanje vrste plaćanja s efektom omogućuje da se u sučelju za kreiranje efekata prikazuju samo stavke koje su relevantne za određenu vrstu efekta. Na primjer, ispravna postavka bila bi povezivanje vrste plaćanja RiBa s efektom Bankovna mjenica, a vrste plaćanja Mjenica s efektom Mjenica. Na taj način, stavke s vrstom plaćanja Transakcija neće se prikazivati prilikom kreiranja efekata, čime se izbjegava generiranje nedosljednih podataka.
:::

Za sve dodatne informacije koje nisu posebno objašnjene u ovom dokumentu, pogledajte sljedeću poveznicu:[Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).