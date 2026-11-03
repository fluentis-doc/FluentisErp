---
title: Tipovi primki
sidebar_position: 5
---

Ova tabela je ključna za definisanje različitih tipova primki, od kojih svaki ima svoja svojstva. Dostupna je putem menija *Konfiguracija > Tabele > Nabavka > Tipovi primki*.

Dostupna su sledeća polja:

**Tip/Opis**: obavezna polja za definisanje tipa i opisa primke.

**Numerisanje/Opis**: obavezno polje za izbor [Numerisanja](/docs/configurations/tables/fluentis-numerations) koje će biti povezano sa tipom otpremnice.

**Tip ulazne fakture/Opis**: u ovom polju potrebno je definisati [Tip ulazne fakture](/docs/configurations/tables/purchase/purchase-invoices-type) koja će se izraditi prilikom korišćenja postupka [Valorizacija primki](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization). Fakturu je moguće izraditi iz otpremnice samo ako je ovo polje popunjeno.

**Tip otpremnice**: u ovom polju potrebno je odabrati tip otpremnice: isporuka, povrat, davanje na pregled ili povrat robe date na pregled. Vrednost se bira sa spiska.

**Skladište/Opis skladišta**: skladište u koje se prima roba, a koje se automatski postavlja na redove artikala otpremnica izrađenih sa ovim tipom.

**Šablon/Opis šablona**: [Šablon](/docs/configurations/tables/logistics/warehouse-templates) skladišnog kretanja za primljenu robu, koji se automatski postavlja na redove artikala otpremnica izrađenih sa ovim tipom.

**Kontrola dobavljača**: omogućava aktiviranje kontrole prema kojoj će postupak prilikom odabira subjekta navedenog u zaglavlju otpremnice dozvoljavati odabir samo konta tipa dobavljač, a ne konta tipa kupac.

**Novčani tok (Cash flow)**: ako je ova opcija aktivirana, tip narudžbine uključuje se u obračun novčanog toka.

**Nesabirana količina artikala narudžbine**: ako je ova opcija aktivirana, prilikom razduživanja redova narudžbine sa delimičnim količinama unutar iste otpremnice omogućava se prikaz razduženih količina narudžbine u zasebnim redovima artikala, bez sabiranja količina.

**Poljoprivredni PDV u nabavci**: ako je ova opcija aktivirana, prilikom izrade otpremnice sistem proverava da li za korišćeni artikal postoji šifra poljoprivrednog PDV-a. Ako ne postoji, koristi se uobičajena šifra PDV-a.

**Upravljanje dodatnim podacima matrice**: ako je ova opcija aktivirana, omogućava prikaz dodatne kartice za unos količina za svaku pojedinačnu ćeliju matrice, u slučaju upravljanja artiklima sa matricom.

**Izveštaji**: u ovom polju moguće je odabrati podrazumevanu štampu (napominjemo da je za štampanje podrazumevanog izveštaja prilikom štampanja potrebno odabrati opciju *Višestruke štampe*). U sledećem polju moguće je navesti **Broj kopija** za štampanje.

**Upravljanje Conai naknadama (recikliranje)**: ova opcija omogućava aktiviranje upravljanja Conai naknadama za svaki tip otpremnice. Za više pojedinosti o upravljanju naknadama povezanim sa [Conai sistemom](/docs/sales/sales-flow/conai) pogledajte odgovarajuću stranicu dokumentacije.

**Kontrola kvaliteta**: tipovi otpremnica za koje je ova opcija aktivirana vidljivi su u obrascu [Uvoz artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) u području *Kvalitet*.

**Osnovna sredstva**: ova opcija omogućava aktiviranje [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za taj tip narudžbine i izbor **Tipa operacije** koja se želi izvršiti. U slučaju nabavke, reč je o operaciji *Izvorni trošak*.