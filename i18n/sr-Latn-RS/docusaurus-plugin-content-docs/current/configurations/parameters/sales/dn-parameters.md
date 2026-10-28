---
title: Parametri otpremnica
sidebar_position: 4
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre nameravate da konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Parametri prodajnih otpremnica omogućavaju definisanje osnovnih podešavanja za njihovo pravilno upravljanje u skladu sa zahtevima pojedinačnog preduzeća. Prozor sa ovim parametrima sastoji se od četiri kartice: Opšte, Razduženje, Izlaz i Analitika.

### Opšte

**Upravljanje dvema mernim jedinicama**: ako je opcija aktivirana, u redovima otpremnice prikazuju se dve kolone, Alternativna merna jedinica i Alternativna količina. Na taj način moguće je upravljati dvema mernim jedinicama, pri čemu se provere razduženja uvek obavljaju prema osnovnoj mernoj jedinici.

**Automatski predlog alternativne merne jedinice**: ovo polje može se uređivati samo ako je aktivirana opcija za upravljanje dvema mernim jedinicama. Omogućava prikaz alternativne merne jedinice definisane u šifarniku artikala, u odgovarajućoj koloni *Alternativna merna jedinica* na kartici artikala otpremnice. Ako opcija nije aktivirana, merna jedinica neće se predlagati.

**Provera raspoloživosti**: ova opcija i ostale povezane opcije za proveru, prikaz i obaveznost, uključujući podešavanja prema oblasti, trenutno nisu implementirane.

**Podrazumevana merna jedinica za zapreminu/težinu**: ove merne jedinice uzimaju se kao podrazumevane vrednosti koje se predlažu na kartici [Prevoz](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice za zapreminu i težinu. Podatak je moguće izmeniti u dokumentima.

**Pretraživanje cena artikala u svim podrazumevanim cenovnicima**: prilikom pretraživanja cene i popusta za artikal u otpremnici, sistem primenjuje pravila na osnovu podešavanja u šifarniku kupca, u odeljku *Cenovnici*. Ako je opcija *Podrazumevano* aktivirana za određenu vrstu cenovnika, cene i popusti traže se prvenstveno u toj vrsti cenovnika. Ako opcija *Podrazumevano* nije aktivirana, sistem proširuje pretragu na sve dostupne vrste cenovnika prema utvrđenom redosledu prioriteta.

Kada je opcija *Podrazumevano* aktivirana, sistem najpre traži važeći cenovnik podrazumevane vrste. Ako ne pronađe odgovarajuću cenu, proverava ostale vrste cenovnika prema podešenom redosledu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cenovnika nije označena kao *Podrazumevano*, a definisani su samo prioriteti, ovaj parametar neće uticati na pretragu, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagaće se i za redove sa besplatnim artiklima, isto kao i za redove sa artiklima sa šifrom.

**Dozvoli popuste za besplatne artikle**: ako je opcija aktivirana, popusti na iznos reda primenjivaće se i na redove sa besplatnim artiklima.

**Maksimalan broj redova**: maksimalan broj artikala po fakturi. Ova opcija aktivna je samo u rumunskoj verziji.

**Provera artikala na izmaku zaliha**: ako je opcija aktivirana, prikazuje se iskačuće upozorenje kada se u otpremnicu unese artikal za koji je u šifarniku artikala aktivirana oznaka *Na izmaku zaliha* i definisan datum od kojeg je artikal na izmaku zaliha. Ova provera sprečava prodaju artikala koji se više neće proizvoditi ili obnavljati na zalihama.

**[Omogući pojednostavljeni widget za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odeljku *Artikli* prikazuju se dve nove kolone: *Popusti artikla* i *Konačni popusti artikla*. Kolona *Popusti artikla* može se uređivati i prikazuje popuste koji se automatski primenjuju na osnovu podešavanja za kupca, artikal, cenovnik ili kategoriju popusta. Korisnik može direktno u toj koloni da unosi, menja ili briše popuste. Da bi se koristio ovaj widget, osim aktiviranja ove opcije, potrebno je u vrsti otpremnice odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tabelu artikala otpremnice dodaju se kolone za šifru i opis artikla kod kupca, definisani u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tabelu artikala otpremnice dodaje se kolona za prikaz barkoda artikla.

**Obavezna šifra operatera**: ovom opcijom određuje se da li je obavezno popuniti polje *Operater* u zaglavlju dokumenta.

**Blokiraj unos dokumenta neradnim danima prema fabričkom kalendaru**: ako je opcija aktivirana, sistem ne dozvoljava unos ponude neradnim danima. Najpre se proverava fabrički kalendar preduzeća, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sistem ne vrši proveru i dozvoljava unos dokumenta.

**Ponovni obračun prevoza**: ovom opcijom omogućava se prenos ukupnih vrednosti težine, zapremine i broja paketa iz redova dokumenta na karticu [Prevoz](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice. Ako opcija nije aktivirana, ova polja neće biti popunjena.

**Spoljne reference narudžbine**: ovom opcijom omogućava se prenos polja *Naša referenca* i *Vaša referenca* iz redova narudžbine u redove otpremnice.

**Zadrži cene iz narudžbine kupca za količinske razrede**: ova opcija obezbeđuje da se tokom delimičnog razduženja narudžbine u otpremnici zadrži isti količinski razred cene koji je primenjen u izvornoj narudžbini, bez ponovnog obračuna. Na primer, ako je u narudžbini navedena količina od 100 jedinica koja aktivira određeni količinski razred cene, a u otpremnici se razduži samo 20 jedinica, aktiviranjem ove opcije otpremnica će zadržati cenu iz izvornog količinskog razreda, bez njene izmene prema stvarno razduženoj količini.

### Razduženje

Na ovoj kartici nalaze se sledeća polja:

**Plaćanje**: određuje vrednost koja se koristi za plaćanje na otpremnici kupca u slučaju višestrukog razduženja narudžbina u otpremnicu: *Prva narudžbina*, *Šifarnik* ili *Ručni izbor*.

**Primalac**: određuje vrednost koja se koristi za primaoca na otpremnici kupca u slučaju višestrukog razduženja narudžbina u otpremnicu: *Prva narudžbina*, *Šifarnik* ili *Ručni izbor*.

**Provera usklađenosti plaćanja otpremnice i narudžbine**: ako je opcija aktivirana, sistem neće dozvoliti razduženje narudžbina sa različitim načinima plaćanja.

**Ponovni obračun troškovnog/profitnog mesta (CDC/CDP)**: ako je otpremnica kreirana iz narudžbine kupca putem odgovarajućeg postupka, aktiviranjem ove opcije sistem će ponovo obračunati troškovna i profitna mesta, ne uzimajući u obzir vrednosti postavljene u prodajnoj narudžbini. Ako opcija nije aktivirana, sistem neće ponovo obračunavati te podatke, već će zadržati vrednosti unete u narudžbini kupca.

**Prikaz tabele razduženja**: ako je opcija aktivirana, omogućava prikaz u obliku tabele u obrascu za razduženje prodajnih narudžbina.

**Prikaz stabla razduženja**: ako je opcija aktivirana, omogućava prikaz u obliku stabla u obrascu za razduženje prodajnih narudžbina.

**Predlaganje lotova**: ovom opcijom obezbeđuje se da se tokom razduženja, ako se uneta količina za razduženje razlikuje od količine u izvornom dokumentu, količina lotova uskladi sa količinom reda u kreiranom dokumentu. Time se sprečava da se količina reda u kreiranom dokumentu razlikuje od količine lotova.

### Izlaz

**Kreiraj knjiženje sa datumom dokumenta**: ako je opcija aktivirana, skladišno knjiženje kreira se sa datumom *prevoza* navedenim na kartici *Prevoz* otpremnice, ako je taj datum unet. U suprotnom se koristi datum otpremnice.

Ako opcija nije aktivirana, skladišno knjiženje se uvek kreira sa tekućim datumom.

**Prioritet skladišta i šablona izlaza u redovima artikala otpremnice**: ako je opcija aktivirana, skladište i šablon izlaza preuzimaju se iz redova otpremnice. Ako opcija nije aktivirana, koriste se skladište i šablon navedeni u sledećim poljima (**Skladište** i **Skladišni šablon**).

**Automatski ulaz/izlaz**: ako je opcija aktivirana, izlazno skladišno knjiženje otpremnice izvršava se automatski pri aktiviranju oznake *Odštampano*. Ako opcija nije aktivirana, izlaz je potrebno izvršiti odgovarajućim dugmetom.

**Upozorenje za fiktivne artikle**: ako je opcija aktivirana, tokom skladišnog izlaza otpremnice sistem proverava postoje li fiktivni artikli. Ako ih pronađe, prikazuje se poruka koja korisniku omogućava da izabere da li želi da nastavi postupak. Ako korisnik potvrdi nastavak, cela otpremnica biće razdužena iz skladišta, osim fiktivnih artikala. Ako korisnik odbije, skladišni izlaz otpremnice neće biti izvršen.

:::tip Zapamtite
Ako dokument sadrži **fiktivne artikle**, postupak će uzeti u obzir *vrstu nabavke* definisanu u MRP parametrima artikla:

- Artikli vrste *Nabavka* neće biti uključeni u skladišno knjiženje.
- Artikli vrste *Proizvodnja* ili *Podizvođač* evidentiraće se u skladištu na osnovu prvog nivoa sastavnice.
:::

### Analitika

Na ovoj kartici određuje se redosled prioriteta za preuzimanje troškovnog mesta (CDC) ili profitnog mesta (CDP) u redu otpremnice.

Prioriteti se mogu menjati pomoću dugmadi **Pomeri nagore** ![](/img/neutral/common/move-up.png) i **Pomeri nadole** ![](/img/neutral/common/delete-cc.png).

*Podrazumevane vrednosti*: troškovno ili profitno mesto preuzima se iz vrste fakturisanja, ako je tamo definisano.

Za više informacija pogledajte tabelu [Vrste fakturisanja](/docs/configurations/tables/sales/sales-turnover).

Ako vrednost nije definisana u *vrsti fakturisanja*, sistem je traži u *šifarniku kupca*. Ako nije definisana ni tamo, traži je u šifarniku artikala, a zatim na nivou skladišta.

Opcija **Proveri prioritet svake dimenzije** omogućava grupisanje troškovnih i profitnih mesta prema dimenzijama u dokumentima na kartici *Analitika*.