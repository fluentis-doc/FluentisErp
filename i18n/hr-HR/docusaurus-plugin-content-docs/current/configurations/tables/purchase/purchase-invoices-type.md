---
title: Tipovi ulaznih računa
sidebar_position: 6
---

Ova je tablica ključna za definiranje različitih tipova ulaznih računa, od kojih svaka ima svoja svojstva. Dostupna je putem izbornika *Konfiguracija > Tablice > Nabava > Tipovi ulaznih računa*.

Dostupna su sljedeća polja:

**Šifra/Opis**: obvezna polja za definiranje vrste računa.

**Numeriranje/Opis**: određuje [Numeriranje](/docs/configurations/tables/fluentis-numerations) povezano s vrstom računa.

**Vrsta računa**: ova se vrijednost odabire s popisa i označava vrstu računa: račun, fiskalni račun, zbirni fiskalni račun, knjižno odobrenje dobavljača, knjižno zaduženje dobavljača.

**Predložak/Opis predloška**: [računovodstveni predložak](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates) koji se koristi za knjiženje računa. Ovaj će se predložak koristiti ako u šifarniku dobavljača nije definiran predložak za fakturiranje nabave ili zadani konto protustavke.

**Tran. šifra**: služi za određivanje šifre grupiranja dokumenata za Intrastat izvještavanje i mora se popuniti u slučaju računa ili dokumenata o promjenama unutar EU-a.

**Skladište/Opis** i **Skladišni predložak/Opis**: predlažu se prilikom unosa redaka računa s otpremnicom, a zatim se mogu promijeniti. Određuju skladište i predložak prema kojima će se roba zaprimiti prilikom ulaza u skladište.

**Od narudžbe**: ako je ova opcija aktivirana, račun ove vrste može razduživati narudžbe dobavljača.

**Direktni račun**: ako je ova opcija aktivirana, račun ove vrste smatra se izravnim računom te je u njemu potrebno popuniti i podatke o prijevozu.

**Unutar Zajednice**: ako je ova opcija aktivirana, sustav provjerava pripada li država kupca državi članici EU-a. Ova se oznaka postavlja samo za vrste računa za transakcije unutar EU-a. Ako ne postoji poveznica između kupca i vrste računa za transakcije unutar EU-a, sustav će prikazati poruku upozorenja.

**U statistici**: ako je ova opcija aktivirana, računi ove vrste uključuju se u statistiku i bit će vidljivi u ispisima *Fakturiranje*.

**Kontrola dobavljača**: omogućuje aktivaciju kontrole prema kojoj će postupak prilikom odabira subjekta navedenog na računu dopuštati odabir samo konta vrste dobavljač, a ne konta vrste kupac.

**Grupiraj dospijeća plaćanja**: ako je ova opcija aktivirana, prilikom knjiženja računa stavke će se grupirati, odnosno primijenit će se način grupiranja stavki.

**Nezbrojena količina artikla narudžbe**: ako je ova opcija aktivirana, prilikom razduživanja redaka narudžbe/otpremnice s djelomičnim količinama unutar istog računa omogućuje se prikaz razduženih količina u zasebnim recima artikala, bez zbrajanja količina.

**Poljoprivredni PDV u nabavi**: ako je ova opcija aktivirana, prilikom izrade računa sustav provjerava postoji li za korišteni artikl šifra poljoprivrednog PDV-a. Ako ne postoji, koristi se šifra PDV-a definirana na artiklu.

**Predložak ekonomskog obračuna**: povezan je s upravljanjem računima za primanje i mogućnošću automatskog evidentiranja vremenskih razgraničenja za retke troškova čiji raspon datuma obračuna izlazi izvan obračunskog razdoblja.

**Upravljanje dodatnim podacima matrice**: ako je ova opcija aktivirana, omogućuje prikaz dodatne kartice za unos količina za svaku pojedinu ćeliju matrice, u slučaju upravljanja artiklima s matricom. Ako nije aktivirana, kartica i pripadajuća matrica neće se prikazivati.

**Računi za primanje** i **Storno računa za primanje**: prikazuju se samo radi povratne kompatibilnosti s prethodnim verzijama. Zastarjeli su i više se ne koriste.

**Izvještaji**: omogućuje odabir predloška ispisa koji će se koristiti prilikom ispisa računa. Pomoću polja **Broj kopija** određuje se zadani broj kopija dokumenta koji će se predložiti za ispis. Ispis ulaznih računa zapravo se rijetko koristi jer račun zaprima od dobavljača, pa ga nije potrebno dodatno ispisivati iz Fluentisa.

**Upravljanje Conai naknadam (recikliranjem)**: ova opcija omogućuje aktivaciju upravljanja Conai naknadama za svaku vrstu računa. Za više pojedinosti o upravljanju naknadama povezanima s [Conai sustavom](/docs/sales/sales-flow/conai) pogledajte odgovarajuću stranicu dokumentacije.

**Kontrola kvalitete**: ako je ova opcija aktivirana, vrste računa bit će vidljive u obrascu [Uvoz artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) u području *Kvaliteta*.

**Osnovna sredstva**: ova opcija omogućuje aktivaciju [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za tu vrstu narudžbe i odabir **Vrste operacije** koja se želi izvršiti. U slučaju nabave, uvijek je riječ o operaciji *Izvorni trošak*.