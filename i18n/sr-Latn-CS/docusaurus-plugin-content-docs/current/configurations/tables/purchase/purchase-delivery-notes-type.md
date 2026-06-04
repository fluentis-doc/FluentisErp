---
title: Tipovi primki
sidebar_position: 5
---

Ova tablica je ključna za definiranje različitih tipova primki za nabavu, svaki sa svojim karakteristikama. Pristupa joj se putem *Konfiguracija > Tablice > Nabava > Tipovi primki*.

Polja su:  

**Šifra/Opis**: obavezna polja za definiranje tipa i opisa primke za nabavu.

**Numeracija/Opis**: obavezno polje za [Numeraciju](/docs/configurations/tables/fluentis-numerations) koju treba povezati s tipom primke.  

**Tip/Opis računa za nabavu**: ovdje se definira [Tip računa](/docs/configurations/tables/purchase/purchase-invoices-type) koji će se kreirati prilikom postupka [Vrijednovanja primke za nabavu](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization). Račun se može napraviti iz primke samo ako je ovo polje popunjeno.

**Priroda primke**: ovdje se unosi priroda primke: isporuka, povrat, na uvid ili povrat na uvid. Vrijednost se bira iz liste.  

**Skladište/Opis skladišta**: skladište dolaska robe koje se automatski postavlja na stavke artikala primke kreirane s ovim tipom.  

**Predložak/Opis predloška**: to je [Predložak](/docs/configurations/tables/logistics/warehouse-templates) za kretanje robe u dolasku koji se automatski postavlja na stavke artikala primki kreiranih s ovim tipom.  

**Kontrola dobavljača**: aktivira kontrolu kojom se prilikom odabira subjekta primke omogućuje odabir samo računa tipa dobavljač, a ne kupac.

**Novčani tok (Cash Flow)**: ako je postavljeno, tip narudžbe utječe na izračun novčanog toka.

**Isporuka količine artikla bez zbrajanja**: ako je postavljeno, prilikom ispunjavanja redaka narudžbe s djelomičnim količinama u istoj primci, ovaj flag omogućuje prikaz količina ispunjenih po stavci bez zbrajanja.

**Poljoprivredna nabava PDV**: ako je aktivno, pri kreiranju primke sustav provjerava postoji li za korišteni artikl šifra poljoprivrednog PDV-a; ako ne postoji, koristi se redovni PDV.

**Upravljanje matricama dodatnih podataka**: ako je aktivno, za artikle s matricom prikazuje se dodatni tab za unos količine po pojedinoj ćeliji matrice.

**Ispis**: moguće je odabrati zadani ispis (za ispis zadane verzije potrebno je prilikom ispisa označiti opciju *Višestruki ispisi*); u sljedećem polju može se definirati **Broj kopija**.    

**Upravljanje Conai**: ovaj flag aktivira upravljanje Conai troškovima za svaki tip primke. Za više detalja o [Conai](/docs/sales/sales-flow/conai) upravljanju, pogledajte odgovarajuću dokumentaciju. 

**Kontrola kvalitete**: tipovi primki s ovim aktiviranim flagom vidljivi su u formi [Uvoz artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) unutar područja *Kvaliteta*.

**Upravljanje imovinom**: ovaj flag omogućuje aktivaciju [Upravljanja imovinom](/docs/finance-area/fixed-assets/general-overview) za taj tip narudžbe te izbor **Tipa operacije** koji će se izvršiti, što će za nabavu biti *Početni trošak*.     