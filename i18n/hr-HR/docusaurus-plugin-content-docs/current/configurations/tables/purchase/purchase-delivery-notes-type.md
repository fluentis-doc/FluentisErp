---
title: Tipovi primki
sidebar_position: 5
---

Ova je tablica ključna za definiranje različitih vrsta primki, od kojih svaka ima svoja svojstva. Dostupna je putem izbornika *Konfiguracija > Tablice > Nabava > Tipovi primki*.

Dostupna su sljedeća polja:

**Tip/Opis**: obvezna polja za definiranje vrste i opisa primke.

**Numeracija/Opis**: obvezno polje za odabir [Numeriranja](/docs/configurations/tables/fluentis-numerations) koje će se povezati s vrstom otpremnice.

**Tip računa (ulaznog)/Opis**: u ovom polju potrebno je definirati [Vrstu ulaznog računa](/docs/configurations/tables/purchase/purchase-invoices-type) koja će se izraditi prilikom korištenja postupka [Valorizacija primki](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization). Račun je moguće izraditi iz otpremnice samo ako je ovo polje popunjeno.

**Vrsta otpremnice**: u ovom polju potrebno je odabrati vrstu otpremnice: isporuka, povrat, davanje na pregled ili povrat robe dane na pregled. Vrijednost se odabire s popisa.

**Skladište/Opis skladišta**: skladište u koje se zaprima roba, a koje se automatski postavlja na retke artikala otpremnica izrađenih s ovom vrstom.

**Predložak/Opis predloška**: [Predložak](/docs/configurations/tables/logistics/warehouse-templates) skladišnog kretanja za zaprimljenu robu, koji se automatski postavlja na retke artikala otpremnica izrađenih s ovom vrstom.

**Kontrola dobavljača**: omogućuje aktivaciju kontrole prema kojoj će postupak prilikom odabira subjekta navedenog u zaglavlju otpremnice dopuštati odabir samo konta vrste dobavljač, a ne konta vrste kupac.

**Novčani tijek (Cash flow)**: ako je ova opcija aktivirana, vrsta narudžbe uključuje se u izračun novčanog toka.

**Nezbrojena količina artikala narudžbe**: ako je ova opcija aktivirana, prilikom razduživanja redaka narudžbe s djelomičnim količinama unutar iste otpremnice omogućuje se prikaz razduženih količina narudžbe u zasebnim recima artikala, bez zbrajanja količina.

**Poljoprivredni PDV u nabavi**: ako je ova opcija aktivirana, prilikom izrade otpremnice sustav provjerava postoji li za korišteni artikl šifra poljoprivrednog PDV-a. Ako ne postoji, koristi se uobičajena šifra PDV-a.

**Upravljanje dodatnim podacima matrice**: ako je ova opcija aktivirana, omogućuje prikaz dodatne kartice za unos količina za svaku pojedinu ćeliju matrice, u slučaju upravljanja artiklima s matricom.

**Izvještaji**: u ovom polju moguće je odabrati zadani ispis (napominjemo da je za ispis zadanog izvještaja prilikom ispisa potrebno odabrati opciju *Višestruki ispisi*). U sljedećem polju moguće je navesti **Broj kopija** za ispis.

**Upravljanje Conai naknadama (recikliranje)**: ova opcija omogućuje aktivaciju upravljanja Conai naknadama za svaku vrstu otpremnice. Za više pojedinosti o upravljanju naknadama povezanima s [Conai sustavom](/docs/sales/sales-flow/conai) pogledajte odgovarajuću stranicu dokumentacije.

**Kontrola kvalitete**: vrste otpremnica za koje je ova opcija aktivirana vidljive su u obrascu [Uvoz artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) u području *Kvaliteta*.

**Osnovna sredstva**: ova opcija omogućuje aktivaciju [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za tu vrstu narudžbe i odabir **Vrste operacije** koja se želi izvršiti. U slučaju nabave, riječ je o operaciji *Izvorni trošak*.