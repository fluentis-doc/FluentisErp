---
title: Parametri ulaznih računa
sidebar_position: 4
tags: [ulazni računi]
keywords: [ulazni računi]
---

Parametri ulaznih računa omogućuju definiranje osnovnih postavki za ispravno upravljanje ulaznim računima, u skladu sa zahtjevima pojedine tvrtke.

Prozor se sastoji od gumba i triju kartica: *Općenito*, *Ulaz* i *Analitika*.

### Općenito

**Upravljanje dvjema mjernim jedinicama**: omogućivanjem ove opcije moguće je upravljati alternativnim mjernim jedinicama u ulaznim računima. Alternativne mjerne jedinice unose se za svaki redak artikla na kartici *Podaci*.

**Automatsko predlaganje alternativne mjerne jedinice**: ova se opcija može omogućiti samo ako je uključena opcija *Upravljanje dvjema mjernim jedinicama*. Kada se unese artikl za koji je u šifarniku, na kartici *Alternativne mjerne jedinice*, definirana zadana alternativna mjerna jedinica, ona se automatski predlaže kao alternativna mjerna jedinica artikla. Izračunava se i alternativna količina primjenom pripadajućeg faktora pretvorbe.

**Nulta cijena ako nema cjenika**: ako je opcija omogućena, u slučaju da ne postoji važeći cjenik, cijena se postavlja na nulu. Ako opcija nije označena, u polje se upisuje posljednji trošak artikla, ako postoji.

**Vrsta računa**, **Stopa PDV-a**, **Vrsta fakturiranja**: ovdje se definiraju zadane vrijednosti koje se upotrebljavaju pri izradi računa iz narudžbi.

**Obvezni lotovi i serijski brojevi (S.N.)**: ako je opcija omogućena, korisnik mora na razini retka artikla unijeti lot i serijski broj za sve artikle za koje je predviđeno takvo upravljanje. Ako opcija nije omogućena, lot i serijski broj nisu obvezni podaci pa je dokument moguće spremiti i bez njihova unosa. Preporučuje se omogućiti ovu opciju ako se upotrebljava upravljanje artiklima prema lotovima.

**Pretraživanje cijena artikala u svim zadanim cjenicima**: ovaj se parametar upotrebljava za pretraživanje cijena u dobavljačkim cjenicima. Pretraživanje se provodi u cjenicima vrste definirane kao zadane u šifarniku dobavljača, čak i ako cjenici nisu važeći. Važećima se smatraju cjenici čiji je datum početka valjanosti manji ili jednak današnjem datumu, a datum završetka valjanosti nije naveden ili je veći ili jednak današnjem datumu.

**Dopusti popuste za besplatne artikle**: ako je opcija omogućena, dopušta unos popusta na retke s besplatnim artiklima.

**Upotreba dobavljačeva artikla**: ako je opcija omogućena, u mreži artikala dokumenta prikazuje se i polje za unos šifre artikla dobavljača. Ako opcija nije omogućena, ovo polje neće biti vidljivo.

**Provjera artikala pri kraju zaliha**: ako je opcija omogućena, sustav provjerava raspoloživost artikala unesenih u račun i upozorava ako je neki artikl pri kraju zaliha, odnosno ako je u [šifarniku artikla](/docs/erp-home/registers/items/create-new-item) omogućena opcija *Pri kraju zaliha*.

**Knjiženje ambalaže**: omogućuje knjiženje redaka s artiklima vrste ambalaže i u glavnoj knjizi. Takvi se artikli obično vode radi provjere stanja [povratne ambalaže](/docs/configurations/tables/logistics/package-to-be-returned).

**Zadrži cijene iz narudžbi za količinske razrede**: ova se opcija upotrebljava pri razduženju narudžbi u račune kada se razdužena količina razlikuje, obično je manja, od naručene količine za koju je definirana cijena ili popust prema količinskom razredu. Ako cijena ili popust ne ovise o isporučenoj količini, već samo o naručenoj količini, ovu opciju treba omogućiti. Ako se cijena ili popust prema količinskom razredu ne smiju prenijeti u dokument isporuke kada narudžba nije razdužena u cijelosti, opciju ne treba omogućiti.

**Aktiviranje kontrole kvalitete**: u tijeku izrade.

### Ulaz

**Izrada knjiženja s datumom dokumenta**: ako je ova opcija omogućena, skladišno knjiženje izvršava se s istim datumom kao i račun. Ako opcija nije omogućena, knjiženje se izvršava s datumom navedenim u polju *Datum ulaza* u zaglavlju računa, ako je taj datum unesen; u suprotnom se upotrebljava *Datum skladišnog knjiženja* naveden u postupku [Ulaz ulaznih računa u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). Ako se knjiženje pokreće izravno iz računa pomoću gumba *Automatski ulaz u skladište*, a polje *Datum ulaza* nije popunjeno, upotrijebit će se današnji datum.

**Prioritet skladišta i predloška ulaza**: ako je opcija omogućena, pri knjiženju računa u skladište upotrebljavaju se vrijednosti definirane u poljima **Skladište** i **Skladišni predložak** u nastavku. Ako opcija nije omogućena, skladište i predložak ulaza preuzimaju se iz redaka računa. Ako ti podaci nisu navedeni, automatski ulaz izravno iz ulaznog računa neće biti moguć. Umjesto toga može se upotrijebiti postupak [Ulaz ulaznih računa u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). Na kartici *Parametri* potrebno je označiti opciju *Prihvaćanje sljedećih podataka kao skladišta i predloška* te navesti *Skladište* i *Predložak* koji će se upotrebljavati.

**Automatski ulaz/izlaz**: ako je opcija omogućena, pri označavanju polja *Kontrolirano* u zaglavlju dokumenta prikazat će se poruka koja podsjeća da je aktivan parametar automatskog ulaza/izlaza i pita želite li nastaviti. Odabirom odgovora *Da* račun će se proknjižiti u skladište. U suprotnom ga je moguće naknadno proknjižiti pritiskom na gumb *Automatski ulaz u skladište* na vrpci.

**Upozorenje za fiktivne artikle**: provjerava sadrže li retci računa fiktivne artikle tijekom ulaza u skladište. Ako ih sadrže, sustav će pitati treba li ipak izvršiti ulaz, izostavljajući te artikle, ili potpuno odustati od skladišnog kretanja.

Fiktivni artikl može biti bez sastavnice prve razine ako je u parametrima MRP-a za njega definirana vrsta nabave *Nabava*. U suprotnom će skladišno knjiženje prikazati poruku o pogrešci ako dokument koji se knjiži sadržava fiktivne artikle.

### Analitika

Na ovoj se kartici određuje prioritet prema kojem se u retku dokumenta dohvaća troškovno mjesto (CdC) ili profitno mjesto (CdP).

Prioriteti se mogu mijenjati pomoću sljedećih gumba na vrpci:

- **Pomakni gore**
- **Pomakni dolje**

*Zadane vrijednosti*: troškovno mjesto ili profitno mjesto preuzima se iz vrste fakturiranja, ako je tamo definirano. Dodatne informacije potražite u tablici [Vrste nabavnog fakturiranja](/docs/configurations/tables/purchase/purchase-invoices-type). Ako podatak nije definiran u vrsti fakturiranja, sustav ga traži u *šifarniku dobavljača*. Ako ga ni tamo nema, traži ga u *šifarniku artikala*, a zatim na razini *skladišta*.

**Ponovni izračun**: ako je opcija omogućena, troškovna i profitna mjesta ponovno se izračunavaju prema odabranom redoslijedu prioriteta.

**Provjera prioriteta za svaku dimenziju**: ako je opcija omogućena, sustav provjerava svaki prioritet definiran u gornjem dijelu kako bi utvrdio postoje li dodatne dimenzije kojima još nije dodijeljena vrijednost.

Primjerice, pretpostavimo da je u šifarniku artikla definirano troškovno mjesto za dimenziju *Poslovna jedinica*, a u vrsti nabavnog fakturiranja dimenzija *Uprava*.

Ako opcija nije omogućena, sustav uzima u obzir samo troškovno mjesto definirano u šifarniku artikla. Ako je opcija omogućena, nakon dohvaćanja troškovnog mjesta iz šifarnika artikla sustav provjerava i dimenziju definiranu u vrsti nabavnog fakturiranja (u ovom primjeru dimenziju *Uprava*). Ako se ona razlikuje od već obrađene dimenzije (*Poslovna jedinica*), učitava pripadajuće mjesto i nastavlja provjeravati ostale prioritete.