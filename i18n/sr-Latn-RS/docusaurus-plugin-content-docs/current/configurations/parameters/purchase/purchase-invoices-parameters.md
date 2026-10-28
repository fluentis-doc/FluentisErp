---
title: Parametri ulaznih faktura
sidebar_position: 4
tags: [ulazne fakture]
keywords: [ulazne fakture]
---

Parametri ulaznih faktura omogućavaju definisanje osnovnih podešavanja za pravilno upravljanje ulaznim fakturama, u skladu sa zahtevima pojedinačnog preduzeća.

Prozor se sastoji od dugmadi i tri kartice: *Opšte*, *Ulaz* i *Analitika*.

### Opšte

**Upravljanje dvema mernim jedinicama**: omogućavanjem ove opcije omogućava se upravljanje alternativnim mernim jedinicama u ulaznim fakturama. Alternativne merne jedinice unose se za svaki red artikla na kartici *Podaci*.

**Automatsko predlaganje alternativne merne jedinice**: ova opcija može se omogućiti samo ako je uključena opcija *Upravljanje dvema mernim jedinicama*. Kada se unese artikal za koji je u šifarniku, na kartici *Alternativne merne jedinice*, definisana podrazumevana alternativna merna jedinica, ona se automatski predlaže kao alternativna merna jedinica artikla. Izračunava se i alternativna količina primenom odgovarajućeg faktora konverzije.

**Nulta cena ako ne postoji cenovnik**: ako je opcija omogućena, u slučaju da ne postoji važeći cenovnik, cena se postavlja na nulu. Ako opcija nije označena, u polje se unosi poslednji trošak artikla, ako postoji.

**Vrsta fakture**, **Stopa PDV-a**, **Vrsta fakturisanja**: ovde se definišu podrazumevane vrednosti koje se koriste pri kreiranju faktura iz narudžbina.

**Obavezni lotovi i serijski brojevi (S.N.)**: ako je opcija omogućena, korisnik mora na nivou reda artikla da unese lot i serijski broj za sve artikle za koje je predviđeno takvo upravljanje. Ako opcija nije omogućena, lot i serijski broj nisu obavezni podaci, pa je dokument moguće sačuvati i bez njihovog unosa. Preporučuje se omogućavanje ove opcije ako se koristi upravljanje artiklima prema lotovima.

**Pretraživanje cena artikala u svim podrazumevanim cenovnicima**: ovaj parametar koristi se za pretraživanje cena u dobavljačkim cenovnicima. Pretraživanje se vrši u cenovnicima vrste definisane kao podrazumevane u šifarniku dobavljača, čak i ako cenovnici nisu važeći. Važećim se smatraju cenovnici čiji je datum početka važenja manji ili jednak današnjem datumu, a datum završetka važenja nije naveden ili je veći ili jednak današnjem datumu.

**Dozvoli popuste za besplatne artikle**: ako je opcija omogućena, dozvoljava unos popusta u redove sa besplatnim artiklima.

**Upotreba dobavljačevog artikla**: ako je opcija omogućena, u tabeli artikala dokumenta prikazuje se i polje za unos šifre dobavljačevog artikla. Ako opcija nije omogućena, ovo polje neće biti vidljivo.

**Provera artikala pri kraju zaliha**: ako je opcija omogućena, sistem proverava raspoloživost artikala unetih u fakturu i upozorava ako je neki artikal pri kraju zaliha, odnosno ako je u [šifarniku artikala](/docs/erp-home/registers/items/create-new-item) omogućena opcija *Pri kraju zaliha*.

**Knjiženje ambalaže**: omogućava knjiženje redova sa artiklima vrste ambalaže i u glavnoj knjizi. Takvi artikli obično se vode radi provere stanja [povratne ambalaže](/docs/configurations/tables/logistics/package-to-be-returned).

**Zadrži cene iz narudžbina za količinske razrede**: ova opcija koristi se pri razduženju narudžbina u fakture kada se razdužena količina razlikuje, obično je manja, od naručene količine za koju je definisana cena ili popust prema količinskom razredu. Ako cena ili popust ne zavise od isporučene količine, već samo od naručene količine, ovu opciju treba omogućiti. Ako cena ili popust prema količinskom razredu ne treba da se prenesu u dokument isporuke kada narudžbina nije u potpunosti razdužena, opciju ne treba omogućiti.

**Aktiviranje kontrole kvaliteta**: u fazi izrade.

### Ulaz

**Kreiranje knjiženja sa datumom dokumenta**: ako je ova opcija omogućena, skladišno knjiženje izvršava se sa istim datumom kao i faktura. Ako opcija nije omogućena, knjiženje se izvršava sa datumom navedenim u polju *Datum ulaza* u zaglavlju fakture, ako je taj datum unet; u suprotnom se koristi *Datum skladišnog knjiženja* naveden u postupku [Ulaz ulaznih faktura u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). Ako se knjiženje pokreće direktno iz fakture pomoću dugmeta *Automatski ulaz u skladište*, a polje *Datum ulaza* nije popunjeno, koristiće se današnji datum.

**Prioritet skladišta i šablona ulaza**: ako je opcija omogućena, pri knjiženju fakture u skladište koriste se vrednosti definisane u poljima **Skladište** i **Skladišni šablon** u nastavku. Ako opcija nije omogućena, skladište i šablon ulaza preuzimaju se iz redova fakture. Ako ti podaci nisu navedeni, automatski ulaz direktno iz ulazne fakture neće biti moguć. Umesto toga može se koristiti postupak [Ulaz ulaznih faktura u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). Na kartici *Parametri* potrebno je označiti opciju *Prihvatanje sledećih podataka kao skladišta i šablona* i navesti *Skladište* i *Šablon* koji će se koristiti.

**Automatski ulaz/izlaz**: ako je opcija omogućena, pri označavanju polja *Kontrolisano* u zaglavlju dokumenta prikazaće se poruka koja podseća da je aktivan parametar automatskog ulaza/izlaza i pita da li želite da nastavite. Izborom odgovora *Da* faktura će biti proknjižena u skladište. U suprotnom je moguće naknadno je proknjižiti pritiskom na dugme *Automatski ulaz u skladište* na traci.

**Upozorenje za fiktivne artikle**: proverava da li redovi fakture sadrže fiktivne artikle prilikom ulaza u skladište. Ako ih sadrže, sistem će pitati da li ipak treba izvršiti ulaz, izostavljajući te artikle, ili potpuno odustati od skladišnog kretanja.

Fiktivni artikal može biti bez sastavnice prvog nivoa ako je u parametrima MRP-a za njega definisana vrsta nabavke *Nabavka*. U suprotnom će skladišno knjiženje prikazati poruku o grešci ako dokument koji se knjiži sadrži fiktivne artikle.

### Analitika

Na ovoj kartici određuje se prioritet prema kojem se u redu dokumenta preuzima troškovno mesto (CdC) ili profitno mesto (CdP).

Prioriteti se mogu menjati pomoću sledeće dugmadi na traci:

- **Pomeri nagore**
- **Pomeri nadole**

*Podrazumevane vrednosti*: troškovno ili profitno mesto preuzima se iz vrste fakturisanja, ako je tamo definisano. Dodatne informacije potražite u tabeli [Vrste nabavnog fakturisanja](/docs/configurations/tables/purchase/purchase-invoices-type). Ako podatak nije definisan u vrsti fakturisanja, sistem ga traži u *šifarniku dobavljača*. Ako ga nema ni tamo, traži ga u *šifarniku artikala*, a zatim na nivou *skladišta*.

**Ponovni obračun**: ako je opcija omogućena, troškovna i profitna mesta ponovo se izračunavaju prema izabranom redosledu prioriteta.

**Provera prioriteta za svaku dimenziju**: ako je opcija omogućena, sistem proverava svaki prioritet definisan u gornjem delu kako bi utvrdio postoje li dodatne dimenzije kojima još nije dodeljena vrednost.

Na primer, pretpostavimo da je u šifarniku artikla definisano troškovno mesto za dimenziju *Poslovna jedinica*, a u vrsti nabavnog fakturisanja dimenzija *Uprava*.

Ako opcija nije omogućena, sistem uzima u obzir samo troškovno mesto definisano u šifarniku artikla. Ako je opcija omogućena, nakon preuzimanja troškovnog mesta iz šifarnika artikla sistem proverava i dimenziju definisanu u vrsti nabavnog fakturisanja (u ovom primeru dimenziju *Uprava*). Ako se ona razlikuje od već obrađene dimenzije (*Poslovna jedinica*), učitava odgovarajuće mesto i nastavlja da proverava ostale prioritete.