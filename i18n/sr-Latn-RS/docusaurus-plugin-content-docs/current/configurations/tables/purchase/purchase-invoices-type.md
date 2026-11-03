---
title: Tipovi ulaznih faktura
sidebar_position: 6
---

Ova tabela je ključna za definisanje različitih tipova ulaznih faktura, od kojih svaki ima svoja svojstva. Dostupna je putem menija *Konfiguracija > Tabele > Nabavka > Tipovi ulaznih faktura*.

Dostupna su sledeća polja:

**Šifra/Opis**: obavezna polja za definisanje tipa fakture.

**Numerisanje/Opis**: određuje [Numerisanje](/docs/configurations/tables/fluentis-numerations) povezano sa tipom fakture.

**Tip fakture**: ova vrednost se bira sa spiska i označava tip fakture: faktura, fiskalna faktura, zbirna fiskalna faktura, knjižno odobrenje dobavljača, knjižno zaduženje dobavljača.

**Šablon/Opis šablona**: [Knjigovodstveni šablon](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates) koji se koristi za knjiženje fakture. Ovaj šablon koristiće se ako u šifarniku dobavljača nije definisan šablon za fakturisanje nabavke ili podrazumevani konto protivstavke.

**Tran. šifra**: služi za određivanje šifre grupisanja dokumenata za Intrastat izveštavanje i mora se popuniti u slučaju faktura ili dokumenata o promenama unutar EU.

**Skladište/Opis** i **Skladišni šablon/Opis**: predlažu se prilikom unosa redova fakture sa otpremnicom, a zatim se mogu promeniti. Određuju skladište i šablon prema kojima će roba biti primljena prilikom ulaza u skladište.

**Iz narudžbine**: ako je ova opcija aktivirana, faktura ovog tipa može da razdužuje narudžbine dobavljača.

**Direktna faktura**: ako je ova opcija aktivirana, faktura ovog tipa smatra se direktnom fakturom i u njoj je potrebno popuniti i podatke o prevozu.

**Unutar Zajednice**: ako je ova opcija aktivirana, sistem proverava da li država kupca pripada državi članici EU. Ova oznaka postavlja se samo za tipove faktura za transakcije unutar EU. Ako ne postoji veza između kupca i tipa fakture za transakcije unutar EU, sistem će prikazati poruku upozorenja.

**U statistici**: ako je ova opcija aktivirana, fakture ovog tipa uključuju se u statistiku i biće vidljive u ispisima *Fakturisanje*.

**Kontrola dobavljača**: omogućava aktiviranje kontrole prema kojoj će postupak prilikom odabira subjekta navedenog na fakturi dozvoljavati odabir samo konta tipa dobavljač, a ne konta tipa kupac.

**Grupisanje dospeća plaćanja**: ako je ova opcija aktivirana, prilikom knjiženja fakture stavke će se grupisati, odnosno primeniće se način grupisanja stavki.

**Nesabirana količina artikla narudžbine**: ako je ova opcija aktivirana, prilikom razduživanja redova narudžbine/otpremnice sa delimičnim količinama unutar iste fakture omogućava se prikaz razduženih količina u zasebnim redovima artikala, bez sabiranja količina.

**Poljoprivredni PDV u nabavci**: ako je ova opcija aktivirana, prilikom izrade fakture sistem proverava da li za korišćeni artikal postoji šifra poljoprivrednog PDV-a. Ako ne postoji, koristi se šifra PDV-a definisana na artiklu.

**Šablon obračuna troškova**: povezan je sa upravljanjem fakturama za prijem i mogućnošću automatskog evidentiranja vremenskih razgraničenja za redove troškova čiji raspon datuma obračuna izlazi izvan obračunskog perioda.

**Upravljanje dodatnim podacima matrice**: ako je ova opcija aktivirana, omogućava prikaz dodatne kartice za unos količina za svaku pojedinačnu ćeliju matrice, u slučaju upravljanja artiklima sa matricom. Ako nije aktivirana, kartica i pripadajuća matrica neće se prikazivati.

**Fakture za prijem** i **Storno fakture za prijem**: prikazuju se samo radi povratne kompatibilnosti sa prethodnim verzijama. Zastarele su i više se ne koriste.

**Izveštaji**: omogućava odabir šablona za štampu koji će se koristiti prilikom štampanja fakture. Pomoću polja **Broj kopija** određuje se podrazumevani broj kopija dokumenta koji će biti predložen za štampanje. Štampanje ulaznih faktura zapravo se retko koristi jer fakturu dobavljač već dostavlja, pa je nije potrebno dodatno štampati iz Fluentisa.

**Upravljanje Conai naknadama (recikliranje)**: ova opcija omogućava aktiviranje upravljanja Conai naknadama za svaki tip fakture. Za više pojedinosti o upravljanju naknadama povezanim sa [Conai sistemom](/docs/sales/sales-flow/conai) pogledajte odgovarajuću stranicu dokumentacije.

**Kontrola kvaliteta**: ako je ova opcija aktivirana, tipovi faktura biće vidljivi u obrascu [Uvoz artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) u području *Kvalitet*.

**Osnovna sredstva**: ova opcija omogućava aktiviranje [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za taj tip narudžbine i izbor **Tipa operacije** koja se želi izvršiti. U slučaju nabavke, uvek je reč o operaciji *Izvorni trošak*.