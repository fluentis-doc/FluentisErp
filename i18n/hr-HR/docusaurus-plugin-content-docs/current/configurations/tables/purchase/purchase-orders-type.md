---
title: Vrste narudžbi dobavljača  
sidebar_position: 3
---

Ova tablica je ključna za definiranje različitih vrsta narudžbi dobavljača, svaka sa svojim specifičnostima. Dostupna je putem  *Konfiguracija > Tablice > Nabava > Vrste narudžbi dobavljača*.   

Polja koja su prisutna su:    

**Šifra/Opis**: obavezna polja za definiranje vrste i opisa narudžbe.  

**Numeracija/Opis numeracije**: obavezno polje za odabir [Numeracija](/docs/configurations/tables/fluentis-numerations) koja se povezuje s vrstom narudžbe.  

**Automatska potvrda narudžbe**: ako je uključeno, prilikom kreiranja narudžbe tog *Tipa narudžbe* automatski se upisuje današnji datum u polje *Datum potvrde narudžbe* u zaglavlju narudžbe. 

**Cash Flow**: ako je uključeno, ova vrsta narudžbe sudjeluje u izračunu novčanog toka.  

**Skladište/Opis skladišta**: skladište dolaska robe koje se automatski postavlja u stavke artikala narudžbi tog tipa.  

**Predložak/Opis predloška**: [Predložak](/docs/configurations/tables/logistics/warehouse-templates) za knjigovodstvenu evidenciju ulazne robe koji se automatski postavlja u stavke artikala narudžbi tog tipa.

**Provjera dostupnosti**: ako je uključeno, narudžbe ovog tipa sudjeluju u izračunu dostupnosti i vidljive su u formi [Analiza dostupnosti](/docs/erp-home/registers/items/availability-analysis).

**Poljoprivredna nabava PDV**: ako je aktivno, pri kreiranju narudžbe sustav provjerava postoji li za artikl kod poljoprivrednog PDV-a; ako ne postoji, koristi se standardni PDV kod artikla.

**Upravljanje dodatnim matricama**: ako je aktivirano, omogućava prikaz dodatnog taba za unos količina po pojedinoj ćeliji matrice kod artikala s matricom.

**Ažuriranje cjenika**: omogućuje automatsko ažuriranje cijena u cjenicima na temelju cijena navedenih u narudžbi. Ako nije označeno, moguće je ručno ažurirati vrijednost cjenika u stavkama narudžbe prema navedenoj cijeni.

**Tip otpremnice**: određuje vrstu otpremnice koja će se kreirati prilikom korištenja postupka [Isporuke po narudžbama](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

**Ispis**: u ovom polju može se odabrati zadani obrazac za ispis (napomena: za ispis zadane forme, pri ispisu treba odabrati opciju *Višestruki ispisi*); u sljedećem polju može se unijeti **Broj kopija** za ispis.  

**Kontrola dobavljača**: omogućava kontrolu pri odabiru subjekta narudžbe tako da se mogu odabrati samo računi tipa dobavljač, a ne kupac. 

**Upravljanje dugotrajnom imovinom**: ovaj flag omogućava aktivaciju [Upravljanja dugotrajnom imovinom](/docs/finance-area/fixed-assets/general-overview) za tu vrstu narudžbe i izbor **Tipa operacije** koji se želi provesti.  