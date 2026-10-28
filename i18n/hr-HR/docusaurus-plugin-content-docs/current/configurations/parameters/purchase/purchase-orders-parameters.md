---
title: Parametri narudžbi dobavljača
sidebar_position: 2
---

Parametri narudžbi dobavljača omogućuju definiranje osnovnih postavki za pravilno upravljanje narudžbama dobavljača u skladu sa zahtjevima pojedine tvrtke.

Prozor se sastoji od gumba i triju kartica: **Općenito**, **Ulaz** i **Analitika**.

### Općenito

**Upravljanje dvjema mjernim jedinicama**: samo ako je opcija aktivirana, sustav može upravljati alternativnom mjernom jedinicom u narudžbi dobavljača.

**Automatski prijedlog alternativne mjerne jedinice**: ako je opcija aktivirana, predlaže se količina izražena u alternativnoj mjernoj jedinici, pod uvjetom da je ona postavljena kao zadana u šifarniku artikala. Ovu je opciju moguće aktivirati samo ako je aktivirana prethodna opcija.

**Nulta cijena ako nema cjenika**: ako je opcija aktivirana, u slučaju da ne postoji važeći cjenik, cijena se postavlja na nulu. Ako ova opcija nije označena, u polje se upisuje posljednja nabavna cijena artikla, ako postoji.

**Blokiraj unos dokumenta na neradne dane**: ako je opcija aktivirana, sustav ne dopušta unos narudžbe na neradne dane (subotom, nedjeljom i blagdanima). Ako nije aktivirana, sustav ne provodi nikakvu provjeru i dopušta unos narudžbe.

**Predloži marku uz prioritet cjenika dobavljača/narudžbe kupca**: više se ne koristi.

**Dopusti izmjenu PDV-a**: ako je opcija aktivirana, prilikom [automatskog kreiranja narudžbi iz zahtjeva za nabavu](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) predlaže se šifra PDV-a iz šifarnika dobavljača.

**Obvezna šifra operatera**: ako je opcija aktivirana, potrebno je navesti šifru operatera u zaglavlju, ispod polja *Država*. U suprotnom nije moguće spremiti narudžbu. Ako opcija nije aktivirana, ovaj je podatak neobvezan.

**Pretraživanje cijena artikala u svim zadanim cjenicima**: ako je opcija aktivirana, cijena artikla unesenog u redak narudžbe dobavljača traži se u svim zadanim cjenicima iz šifarnika dobavljača, kao i u zadanom cjeniku. Ako opcija nije aktivirana, cijena artikla traži se samo u zadanom cjeniku navedenom u zaglavlju narudžbe, ali ne i u drugim cjenicima istog dobavljača koji imaju različita razdoblja valjanosti.

**Upotreba dobavljačkog artikla**: ako je opcija aktivirana, u tablici artikala narudžbe dobavljača prikazuje se i polje za unos i pretraživanje šifre artikla kod dobavljača. Ako opcija nije aktivirana, ovo polje nije vidljivo.

**Provjera artikala na izmaku zaliha**: ako je opcija aktivirana, sustav provjerava raspoloživost artikala u redcima narudžbe i upozorava ako je neki artikl na izmaku zaliha, odnosno ako je u [šifarniku artikala](/docs/erp-home/registers/items/create-new-item) aktivirana opcija *Na izmaku zaliha*.

**Knjiženje ambalaže**: omogućuje knjiženje redaka s artiklima vrste ambalaže u glavnoj knjizi. Takvi se artikli obično vode radi provjere stanja zaliha [povratne ambalaže](/docs/configurations/tables/logistics/package-to-be-returned).

### Ulaz

Na ovoj se kartici definiraju parametri koji se koriste za [ulaz robe](/docs/purchase/goods-reception/procedures/good-receipt-load).

**Kreiraj knjiženje s datumom dokumenta**: ako je opcija aktivirana, skladišno knjiženje provodi se s istim datumom kao i narudžba, pa nije potrebno navesti datum knjiženja u obrascu za ulaz. Ako opcija nije aktivirana, datum je potrebno navesti u obrascu za ulaz.

**Prioritet skladišta i predloška ulaza**: ako je opcija aktivirana, skladišni ulaz provodi se korištenjem **skladišta** i **predloška** definiranih na ovoj kartici. Ako opcija nije aktivirana, koriste se skladište i predložak definirani u redcima primke, ako su navedeni; u suprotnom primjenjuju se parametri postavljeni u postupku ulaza robe.

### Analitika

Na ovoj se kartici određuje redoslijed prioriteta za dohvat mjesta troška (CdC) ili mjesta dobiti (CdP) u retku dokumenta.

Prioriteti se mogu mijenjati pomoću sljedećih gumba na alatnoj traci:

- **Pomakni gore**
- **Pomakni dolje**

*Zadane vrijednosti*: mjesto troška ili mjesto dobiti preuzima se iz vrste fakturiranja, ako je ondje definirano. Za više informacija pogledajte tablicu [Vrste fakturiranja nabave](/docs/configurations/tables/purchase/purchase-invoices-type). Ako nije definirano u vrsti fakturiranja, sustav ga traži u *šifarniku dobavljača*. Ako ga ni ondje nema, traži ga u *šifarniku artikala*, a zatim na razini *skladišta*.

**Ponovni izračun**: ako je ova opcija aktivirana, mjesta troška i dobiti ponovno se izračunavaju prema odabranom redoslijedu prioriteta.

**Obvezno mjesto troška/prihoda**: ako je ova opcija aktivirana, obvezno je dodijeliti mjesta troška i dobiti.

**Procijeni prioritet za svaku dimenziju**: ako je ova opcija aktivirana, sustav provjerava svaki prioritet naveden u gornjem dijelu kako bi utvrdio postoje li dodatne dimenzije kojima još nisu dodijeljene vrijednosti. Primjerice, pretpostavimo da je u šifarniku artikala definirano mjesto troška za dimenziju *Poslovna jedinica*, a u vrsti fakturiranja nabave dimenzija *Uprava*. Ako opcija nije aktivirana, sustav uzima u obzir samo mjesto troška definirano u šifarniku artikala. Ako je opcija aktivirana, nakon preuzimanja mjesta troška iz šifarnika artikala sustav provjerava i dimenziju definiranu u vrsti fakturiranja nabave (u ovom primjeru dimenziju *Uprava*). Ako se ona razlikuje od već obrađene dimenzije (*Poslovna jedinica*), sustav dodaje odgovarajuće mjesto troška i nastavlja provjeravati ostale prioritete.