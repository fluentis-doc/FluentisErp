---
title: Parametri narudžbina dobavljača
sidebar_position: 2
---

Parametri narudžbina dobavljača omogućavaju definisanje osnovnih podešavanja za pravilno upravljanje narudžbinama dobavljača u skladu sa zahtevima pojedinačnog preduzeća.

Prozor se sastoji od dugmadi i tri kartice: **Opšte**, **Ulaz** i **Analitika**.

### Opšte

**Upravljanje dvema mernim jedinicama**: samo ako je opcija aktivirana, sistem može da upravlja alternativnom mernom jedinicom u narudžbini dobavljača.

**Automatski predlog alternativne merne jedinice**: ako je opcija aktivirana, predlaže se količina izražena u alternativnoj mernoj jedinici, pod uslovom da je ona postavljena kao podrazumevana u šifarniku artikala. Ovu opciju moguće je aktivirati samo ako je aktivirana prethodna opcija.

**Nulta cena ako ne postoji cenovnik**: ako je opcija aktivirana, a ne postoji važeći cenovnik, cena se postavlja na nulu. Ako ova opcija nije označena, u polje se unosi poslednja nabavna cena artikla, ako postoji.

**Blokiraj unos dokumenta neradnim danima**: ako je opcija aktivirana, sistem ne dozvoljava unos narudžbine neradnim danima (subotom, nedeljom i praznicima). Ako nije aktivirana, sistem ne vrši nikakvu proveru i dozvoljava unos narudžbine.

**Predloži marku uz prioritet cenovnika dobavljača/narudžbine kupca**: više se ne koristi.

**Dozvoli izmenu PDV-a**: ako je opcija aktivirana, prilikom [automatskog kreiranja narudžbina iz zahteva za nabavku](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) predlaže se šifra PDV-a iz šifarnika dobavljača.

**Obavezna šifra operatera**: ako je opcija aktivirana, potrebno je navesti šifru operatera u zaglavlju, ispod polja *Država*. U suprotnom nije moguće sačuvati narudžbinu. Ako opcija nije aktivirana, ovaj podatak nije obavezan.

**Pretraživanje cena artikala u svim podrazumevanim cenovnicima**: ako je opcija aktivirana, cena artikla unetog u red narudžbine dobavljača traži se u svim podrazumevanim cenovnicima iz šifarnika dobavljača, kao i u podrazumevanom cenovniku. Ako opcija nije aktivirana, cena artikla traži se samo u podrazumevanom cenovniku navedenom u zaglavlju narudžbine, ali ne i u drugim cenovnicima istog dobavljača koji imaju različite periode važenja.

**Upotreba dobavljačkog artikla**: ako je opcija aktivirana, u tabeli artikala narudžbine dobavljača prikazuje se i polje za unos i pretraživanje šifre artikla kod dobavljača. Ako opcija nije aktivirana, ovo polje nije vidljivo.

**Provera artikala na izmaku zaliha**: ako je opcija aktivirana, sistem proverava raspoloživost artikala u redovima narudžbine i upozorava ako je neki artikal na izmaku zaliha, odnosno ako je u [šifarniku artikala](/docs/erp-home/registers/items/create-new-item) aktivirana opcija *Na izmaku zaliha*.

**Knjiženje ambalaže**: omogućava knjiženje redova sa artiklima vrste ambalaže u glavnoj knjizi. Takvi artikli se obično vode radi provere stanja zaliha [povratne ambalaže](/docs/configurations/tables/logistics/package-to-be-returned).

### Ulaz

Na ovoj kartici definišu se parametri koji se koriste za [ulaz robe](/docs/purchase/goods-reception/procedures/good-receipt-load).

**Kreiraj knjiženje sa datumom dokumenta**: ako je opcija aktivirana, skladišno knjiženje obavlja se sa istim datumom kao i narudžbina, pa nije potrebno navesti datum knjiženja u obrascu za ulaz. Ako opcija nije aktivirana, datum je potrebno navesti u obrascu za ulaz.

**Prioritet skladišta i šablona ulaza**: ako je opcija aktivirana, skladišni ulaz obavlja se korišćenjem **skladišta** i **šablona** definisanih na ovoj kartici. Ako opcija nije aktivirana, koriste se skladište i šablon definisani u redovima primke, ako su navedeni; u suprotnom se primenjuju parametri postavljeni u postupku ulaza robe.

### Analitika

Na ovoj kartici određuje se redosled prioriteta za preuzimanje troškovnog mesta (CdC) ili profitnog mesta (CdP) u redu dokumenta.

Prioriteti se mogu menjati pomoću sledeće dugmadi na traci sa alatkama:

- **Pomeri nagore**
- **Pomeri nadole**

*Podrazumevane vrednosti*: troškovno ili profitno mesto preuzima se iz vrste fakturisanja, ako je tamo definisano. Za više informacija pogledajte tabelu [Vrste nabavnog fakturisanja](/docs/configurations/tables/purchase/purchase-invoices-type). Ako podatak nije definisan u vrsti fakturisanja, sistem ga traži u *šifarniku dobavljača*. Ako ga nema ni tamo, traži ga u *šifarniku artikala*, a zatim na nivou *skladišta*.

**Ponovni obračun**: ako je ova opcija aktivirana, troškovna i profitna mesta ponovo se izračunavaju prema izabranom redosledu prioriteta.

**Obavezno troškovno/prihodno mesto**: ako je ova opcija aktivirana, obavezno je dodeliti troškovna i profitna mesta.

**Proveri prioritet za svaku dimenziju**: ako je ova opcija aktivirana, sistem proverava svaki prioritet naveden u gornjem delu kako bi utvrdio postoje li dodatne dimenzije kojima još nisu dodeljene vrednosti.

Na primer, pretpostavimo da je u šifarniku artikala definisano troškovno mesto za dimenziju *Poslovna jedinica*, a u vrsti nabavnog fakturisanja dimenzija *Uprava*.

Ako opcija nije aktivirana, sistem uzima u obzir samo troškovno mesto definisano u šifarniku artikala. Ako je opcija aktivirana, nakon preuzimanja troškovnog mesta iz šifarnika artikala sistem proverava i dimenziju definisanu u vrsti nabavnog fakturisanja (u ovom primeru dimenziju *Uprava*). Ako se ona razlikuje od već obrađene dimenzije (*Poslovna jedinica*), sistem dodaje odgovarajuće troškovno mesto i nastavlja da proverava ostale prioritete.