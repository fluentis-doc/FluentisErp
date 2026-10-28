---
title: Parametri primki
sidebar_position: 3
---

Parametri primki omogućuju definiranje osnovnih postavki za ispravno upravljanje primkama, u skladu sa zahtjevima pojedine tvrtke.

Prozor se sastoji od gumba i triju kartica: *Općenito*, *Ulaz* i *Analitika*.

### Općenito

**Upravljanje dvjema mjernim jedinicama**: samo ako je ova opcija omogućena, sustav može upravljati alternativnom mjernom jedinicom u primkama.

**Automatsko predlaganje alternativne mjerne jedinice**: ako je opcija omogućena, predlaže se količina izražena u alternativnoj mjernoj jedinici, pod uvjetom da je u šifarniku artikla definirana zadana alternativna mjerna jedinica. Ovu je opciju moguće omogućiti samo ako je omogućena prethodna opcija.

**Nulta cijena ako nema cjenika**: ako je opcija omogućena, u slučaju da ne postoji važeći cjenik, cijena se postavlja na nulu. Ako opcija nije označena, u polje se upisuje posljednji trošak artikla, ako postoji.

**Dopusti primke s istim brojem i dobavljačem**: ako je opcija omogućena, dopušta unos dviju primki s istim brojem za istog dobavljača. Preporučuje se ostaviti ovu opciju onemogućenom kako bi sustav mogao provjeravati jedinstvenost broja dokumenta.

**Obvezni lotovi i serijski brojevi (S.N.)**: ako je opcija omogućena, korisnik mora na razini retka artikla unijeti lot i serijski broj za sve artikle za koje je predviđeno takvo upravljanje. Ako opcija nije omogućena, lot i serijski broj nisu obvezni podaci pa je dokument moguće spremiti i bez njihova unosa. Preporučuje se omogućiti ovu opciju ako se upotrebljava upravljanje artiklima prema lotovima.

**Pretraživanje cijena artikala u svim zadanim cjenicima**: ako je opcija omogućena, cijena artikla unesenog u redak dobavljačke narudžbe traži se u svim zadanim cjenicima definiranima u šifarniku dobavljača, uz zadani cjenik. Ako opcija nije omogućena, cijena artikla traži se samo u zadanom cjeniku navedenom u zaglavlju narudžbe, a ne i u drugim cjenicima istog dobavljača koji imaju različita razdoblja valjanosti.

**Dopusti popuste za besplatne artikle**: ako je opcija omogućena, dopušta unos popusta na retke s besplatnim artiklima.

**Upotreba dobavljačeva artikla**: ako je opcija omogućena, u mreži artikala primke prikazuje se i polje za unos šifre artikla dobavljača.

**Provjera artikala pri kraju zaliha**: ako je opcija omogućena, sustav provjerava raspoloživost artikala unesenih u primku i upozorava ako je neki artikl pri kraju zaliha, odnosno ako je u [šifarniku artikla](/docs/erp-home/registers/items/create-new-item) omogućena opcija *Pri kraju zaliha*.

**Knjiženje ambalaže**: omogućuje knjiženje redaka s artiklima vrste ambalaže i u glavnoj knjizi. Takvi se artikli obično vode radi provjere stanja [povratne ambalaže](/docs/configurations/tables/logistics/package-to-be-returned).

**Zadrži cijene iz narudžbi za količinske razrede**: ova se opcija upotrebljava pri postupku razduženja narudžbi u primke kada se razdužena količina razlikuje, obično je manja, od naručene količine za koju je definirana cijena ili popust prema količinskom razredu. Ako cijena ili popust ne ovise o isporučenoj količini, već samo o naručenoj količini, ovu opciju treba omogućiti. Ako se cijena ili popust prema količinskom razredu ne smiju prenijeti u dokument isporuke kada narudžba nije razdužena u cijelosti, opciju ne treba omogućiti.

**Aktiviranje kontrole kvalitete**: u tijeku izrade.

**Ponovni izračun prijevoza**: ako je opcija omogućena, na temelju podataka iz šifarnika artikala izračunavaju se težina i volumen u dokumentu, a trošak prijevoza automatski se postavlja. Ako opcija nije omogućena, trošak prijevoza za primku potrebno je izračunati ručno jer se neće automatski predložiti.

**Zadana mjerna jedinica volumena**: označava zadanu mjernu jedinicu volumena koja se upotrebljava pri izračunu prijevoza za primku.

**Zadana mjerna jedinica mase**: označava zadanu mjernu jedinicu mase koja se upotrebljava pri izračunu prijevoza za primku.

### Ulaz

**Izrada knjiženja s datumom dokumenta**: ako je opcija omogućena, skladišno knjiženje izvršava se s istim datumom kao i primka. Ako opcija nije omogućena, knjiženje se izvršava s datumom navedenim u polju *Datum ulaza* u zaglavlju primke, ako je taj datum unesen; u suprotnom se upotrebljava *Datum skladišnog knjiženja* naveden u postupku [Knjiženje primki u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). Ako se knjiženje pokreće izravno iz primke pomoću gumba *Automatski ulaz u skladište*, a polje *Datum ulaza* nije popunjeno, upotrijebit će se današnji datum.

**Prioritet skladišta i predloška ulaza**: ako je opcija omogućena, pri knjiženju primke u skladište upotrebljavaju se vrijednosti definirane u poljima **Skladište** i **Skladišni predložak** u nastavku. Ako opcija nije omogućena, skladište i predložak ulaza preuzimaju se iz redaka primke. Ako ti podaci nisu navedeni u recima primke, automatski ulaz izravno iz primke neće biti moguć. Knjiženje primke ipak se može izvršiti odgovarajućim postupkom (pogledajte [Knjiženje primki u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)). Pritom je na kartici *Parametri* potrebno označiti opciju *Prihvaćanje sljedećih podataka kao skladišta i predloška* te navesti *Skladište* i *Predložak* koji će se upotrebljavati.

**Automatski ulaz/izlaz**: ako je opcija omogućena, pri označavanju polja *Kontrolirano* u zaglavlju dokumenta prikazat će se poruka koja podsjeća da je aktivan parametar automatskog ulaza/izlaza i pita želite li nastaviti. Odabirom odgovora *Da* primka će se proknjižiti u skladište. U suprotnom ju je moguće naknadno proknjižiti pritiskom na gumb *Automatski ulaz u skladište* na vrpci.

**Upozorenje za fiktivne artikle**: ako je opcija omogućena, tijekom ulaza primke provjerava se sadrži li dokument fiktivne artikle. Ako ih sadrži, prikazuje se poruka za potvrdu nastavka postupka. Ako korisnik potvrdi nastavak, cijela će se primka proknjižiti u skladište, osim fiktivnih artikala. Ako korisnik odabere *Ne*, primka se neće proknjižiti.

Fiktivni artikl može biti bez sastavnice prve razine ako je u parametrima MRP-a za njega definirana vrsta nabave *Nabava*. U suprotnom će skladišno knjiženje prikazati poruku o pogrešci ako dokument koji se knjiži sadržava fiktivne artikle.

### Analitika

Na ovoj se kartici određuje prioritet prema kojem se u retku primke dohvaća troškovno mjesto (CdC) ili profitno mjesto (CdP).

Prioriteti se mogu mijenjati pomoću sljedećih gumba na vrpci:

- **Pomakni gore**
- **Pomakni dolje**

*Zadane vrijednosti*: troškovno mjesto ili profitno mjesto najprije se preuzima iz vrste fakturiranja, ako je tamo definirano. Dodatne informacije potražite u tablici [Vrste nabavnog fakturiranja](/docs/configurations/tables/purchase/purchase-invoices-type). Ako podatak nije definiran u vrsti fakturiranja, sustav ga traži u *šifarniku dobavljača*. Ako ga ni tamo nema, traži ga u *šifarniku artikala*, a zatim na razini *skladišta*.

**Ponovni izračun**: ako je opcija omogućena, troškovna i profitna mjesta ponovno se izračunavaju prema odabranom redoslijedu prioriteta.

**Provjera prioriteta za svaku dimenziju**: ako je opcija omogućena, sustav provjerava svaki prioritet definiran u gornjem dijelu kako bi utvrdio postoje li dodatne dimenzije kojima još nije dodijeljena vrijednost.

Primjerice, pretpostavimo da je u šifarniku artikla definirano troškovno mjesto za dimenziju *Poslovna jedinica*, a u vrsti nabavnog fakturiranja dimenzija *Uprava*.

Ako opcija nije omogućena, sustav uzima u obzir samo troškovno mjesto definirano u šifarniku artikla. Ako je opcija omogućena, nakon dohvaćanja troškovnog mjesta iz šifarnika artikla sustav provjerava i dimenziju definiranu u vrsti nabavnog fakturiranja (u ovom primjeru dimenziju *Uprava*). Ako se ona razlikuje od već obrađene dimenzije (*Poslovna jedinica*), učitava pripadajuće mjesto i nastavlja provjeravati ostale prioritete.