---
title: Tipovi ulaznih računa
sidebar_position: 6
---

Ova tablica je ključna za definiranje različitih tipova računa za nabavu, svaki sa svojim specifičnostima. Dostupna je putem *Konfiguracija > Tablice > Nabava > Tipovi računa za nabavu*.    

Polja koja su prisutna su:  

**Šifra/Opis**: obavezna polja potrebna za definiranje tipa računa.

**Numerazione/Descrizione**: određuje [Numeraciju](/docs/configurations/tables/fluentis-numerations) koja je povezana s tipom računa.  

**Priroda računa**: ovaj podatak se bira s liste i označava prirodu računa: račun, fiskalni račun, zbirni fiskalni račun, dobavljačka kreditna nota, dobavljačka zadužnica.  

**Predložak/Opis predloška**: [knjigovodstveni predložak](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates) koji se koristi za knjiženje računa. Ovaj predložak će se koristiti ako ne postoji fakturirani promet ili zadani kontni par u evidenciji dobavljača.  

**Tran. šifra**: služi za označavanje šifre grupiranja dokumenata za Intrastat prijavu i treba biti popunjeno u slučajevima računa ili ispravaka iz EU.  

**Skladište/Opis** i **Predložak skladišta/Opis**: predlažu se prilikom unošenja redaka pratećeg računa, gdje se mogu izmijeniti i određuju skladište i predložak kojim će roba biti zavedena prilikom primitka.  

**Iz narudžbe**: ako je aktivirano, račun s ovim tipom može ispuniti narudžbe dobavljača.  

**Neposredni račun**: ako je aktivirano, račun s ovim tipom je neposredan i u računu je potrebno unijeti i podatke o prijevozu.  

**Intrakomunitarni**: ako je aktivirano, sustav provjerava je li država kupca zemlja EU. Ovaj flag se postavlja samo za intrakomunitarne tipove računa. Ako nema veze između kupca i intrakomunitarnog tipa računa, sustav će dati upozorenje.  

**U statistici**: ako je aktivirano, račun s ovim tipom će se prikazivati u statistikama, dakle bit će vidljiv u izvještajima *Promet*.

**Kontrola dobavljača**: služi za aktivaciju kontrole prilikom odabira subjekta računa, gdje se može odabrati samo račun tipa dobavljač, a ne kupac.  

**Grupiranje stavki**: ako je uključeno, pri knjiženju računa stavke će se grupirati koristeći način grupiranja stavki.  

**Izdavanje količine po stavci bez zbrajanja**: ako je uključeno, kod djelomične realizacije stavki narudžbe/otpremnice u istom računu, ovaj flag omogućava prikaz količina po svakoj stavci bez njihovog zbrajanja.  

**Poljoprivredna nabava PDV**: ako je aktivirano, pri kreiranju računa sustav provjerava postoji li za artikl kod poljoprivrednog PDV-a. Ako ne postoji, koristi se PDV kod iz samog artikla.  

**Predložak ekonomske pripadnosti**: vezan je za upravljanje primljenim računima i mogućnost automatskog evidentiranja prijelaza za eventualne stavke troška s datumima pripadnosti izvan obračunskog razdoblja.

**Upravljanje dodatnim matricama**: ako je aktivirano, omogućava prikaz dodatnog taba kod artikala s matricama za unos količina po pojedinoj ćeliji matrice. Ako nije aktivirano, taj tab i matrica nisu vidljivi.  

**Računi za primitak** i **Storniranje računa za primitak**: prikazuju se samo zbog unazadne kompatibilnosti sa starijim verzijama i više se ne koriste.  

**Ispis**: omogućava odabir obrasca ispisa koji će se koristiti pri ispisu računa, a polje **Broj kopija** određuje koliko će se primjeraka predložiti za ispis. Ispis računa za nabavu se u praksi rijetko koristi jer račun dolazi od dobavljača i ne treba dodatni ispis iz Fluentisa.

**Upravljanje Conai**: ovaj flag omogućava aktivaciju upravljanja Conai naknadama za svaki tip računa. Za više detalja o Conai upravljanju troškovima pogledajte posebnu stranicu dokumentacije o [Conai](/docs/sales/sales-flow/conai).

**Kontrola kvalitete**: ako je aktivirano, ovaj flag prikazuje tipove računa u formi [Uvoza artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) unutar područja *Kvaliteta*.

**Upravljanje dugotrajnom imovinom**: ovaj flag omogućava aktivaciju [Upravljanja dugotrajnom imovinom](/docs/finance-area/fixed-assets/general-overview) za taj tip narudžbe, uz izbor **Tipa operacije**, ckoji je kod nabave uvijek *Izvorni trošak*.    