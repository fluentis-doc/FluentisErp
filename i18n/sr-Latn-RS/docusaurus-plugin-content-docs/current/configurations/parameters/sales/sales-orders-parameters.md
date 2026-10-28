---
title: Parametri narudžbina kupaca
sidebar_position: 3
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre nameravate da konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Parametri narudžbina kupaca omogućavaju definisanje osnovnih podešavanja za njihovo pravilno upravljanje u skladu sa zahtevima pojedinačnog preduzeća. Prozor sa ovim parametrima sastoji se od četiri kartice: Opšte, Razduživanje, Izlaz i Analitika.

### Opšte

**Upravljanje dvema mernim jedinicama**: ako je opcija aktivirana, u redovima narudžbine prikazuju se dve kolone, Alternativna merna jedinica i Alternativna količina. Na taj način moguće je upravljati dvema mernim jedinicama, pri čemu se provere razduživanja uvek obavljaju prema osnovnoj mernoj jedinici.

**Automatski predlog alternativne merne jedinice**: ovo polje može da se uređuje samo ako je aktivirana opcija za upravljanje dvema mernim jedinicama. Omogućava prikaz alternativne merne jedinice definisane u šifarniku artikala, u odgovarajućoj koloni *Alternativna merna jedinica* na kartici artikala narudžbine. Ako opcija nije aktivirana, merna jedinica neće biti predložena.

**Provera raspoloživosti**: ova opcija i ostale povezane opcije za proveru, prikaz i obaveznost unosa, uključujući razmatranje prema području, trenutno nisu podržane.

**Referenca narudžbine**: ako je ova opcija aktivirana, u naslov projekta kreiranog iz narudžbine unosi se referenca narudžbine. Sadržaj napomene potrebno je definisati u polju *Opis*, u skladu sa parametrima navedenim u oznaci polja.

**Pretraživanje cena artikala u svim zadatim cenovnicima**: prilikom pretraživanja cene i popusta za artikal u narudžbini, sistem primenjuje pravila na osnovu podešavanja u šifarniku kupca, u odeljku *Cenovnici*. Ako je opcija *Zadato* aktivirana za određenu vrstu cenovnika, cene i popusti traže se prvenstveno u toj vrsti cenovnika. Ako opcija *Zadato* nije aktivirana, sistem proširuje pretraživanje na sve dostupne vrste cenovnika prema zadatom redosledu prioriteta.

Kada je opcija *Zadato* aktivirana, sistem najpre traži važeći cenovnik zadate vrste. Ako ne pronađe odgovarajuću cenu, proverava ostale vrste cenovnika prema podešenom redosledu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cenovnika nije označena kao *Zadato* i definisani su samo prioriteti, ovaj parametar neće uticati na pretraživanje, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagaće se i za redove sa besplatnim artiklima, isto kao i za redove sa artiklima koji imaju šifru.

**Dozvoli popuste za besplatne artikle**: ako je opcija aktivirana, popusti na iznos reda primenjivaće se i na redove sa besplatnim artiklima.

**Obavezan odnos količine artikla i broja paketa**: ako je opcija aktivirana, korisnik mora da unese količinu koja odgovara broju paketa definisanom na kartici *Težine/Dimenzije* u šifarniku artikala ili njegovom umnošku. Ako količina nije jednaka broju paketa niti njegov umnožak, prikazaće se poruka: „Artikal se ne može prodavati u količini manjoj od broja paketa niti u količini koja nije njegov umnožak.”

**Predlaganje ekonomične količine**: ako je opcija aktivirana i u šifarniku artikala definisana je ekonomična količina za kupca iz dokumenta, prilikom unosa reda narudžbine automatski će se predložiti količina jednaka ekonomičnoj količini.

Ako opcija nije aktivirana, provera se obavlja prilikom potvrde reda. Ako je uneta količina manja od ekonomične količine, prikazaće se poruka: „Količina ne može biti manja od …”.

**Provera artikala sa zalihama na izmaku**: ako je opcija aktivirana, prikazaće se iskačuće upozorenje kada se u narudžbinu unese artikal koji je u šifarniku označen kao artikal sa zalihama na izmaku i za koji je definisan datum od kojeg su zalihe na izmaku. Ovom proverom sprečava se prodaja artikala koji se više neće proizvoditi niti dopunjavati na zalihama.

**[Omogući pojednostavljeni vidžet za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odeljku *Artikli* prikazuju se dve nove kolone: *Popusti artikla* i *Konačni popusti artikla*. Kolona *Popusti artikla* može da se uređuje i prikazuje popuste koji se automatski primenjuju na osnovu podešavanja za kupca, artikal, cenovnik ili kategoriju popusta. Korisnik može direktno u toj koloni da unosi, menja ili briše popuste. Da bi se koristio ovaj vidžet, pored aktiviranja ove opcije, potrebno je u vrsti narudžbine odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tabelu artikala narudžbine dodaju se kolone za šifru i opis artikla kod kupca, definisane u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tabelu artikala narudžbine dodaje se kolona za prikaz barkoda artikla.

**Dozvoli izmenu naloga za proizvodnju iz povezane narudžbine**: ako je opcija aktivirana, omogućava izmenu naloga za proizvodnju povezanog sa narudžbinom.

**Obavezna šifra operatera**: ovom opcijom određuje se da li je obavezno popuniti polje *Operater* u zaglavlju narudžbine.

**Blokiraj unos dokumenta neradnim danima prema fabričkom kalendaru**: ako je opcija aktivirana, sistem ne dozvoljava unos narudžbine neradnim danima. Najpre se proverava fabrički kalendar preduzeća, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sistem ne obavlja proveru i dozvoljava unos dokumenta.

**Upotreba konfiguratora matrica**: ovim parametrom aktivira se upravljanje matricama.

**Rastavljanje sastavnice**: ako je opcija aktivirana, prilikom unosa artikla on će biti zamenjen komponentama prvog nivoa njegove sastavnice, ako ona postoji. Umesto artikla „Gotov proizvod”, narudžbina će sadržati komponente njegove sastavnice.

**Predlaganje komercijalnih podataka za ručno rastavljenu sastavnicu**: ako je opcija aktivirana, za komponente prvog nivoa unete pomoću opcije „Rastavljanje sastavnice” predlagaće se cene iz cenovnika, popusti i provizije, kao i za artikle sa šifrom.

**Upravljanje verzijama sastavnice**: ako je opcija aktivirana, na kartici *Artikli* omogućava se prikaz kolone *Verzija sastavnice*, u kojoj je moguće odabrati verziju različitu od automatski odabrane zadate verzije.

**Ne grupiši redove prilikom unosa iz sastavnice**: ako je opcija aktivirana, komponente prvog nivoa sastavnice unose se u zasebne redove čak i ako imaju istu šifru materijala.

### Razduživanje

Na ovoj kartici dostupna su sledeća polja:

**Plaćanje**: određuje vrednost koja se koristi za plaćanje narudžbina kupaca prilikom višestrukog razduživanja projekata u narudžbine. Dostupne su opcije: *Prva narudžbina*, *Šifarnik* ili *Ručni izbor*.

**Primalac**: određuje vrednost koja se koristi za primaoca narudžbine prilikom višestrukog razduživanja projekata u narudžbine. Dostupne su opcije: *Prva narudžbina*, *Šifarnik* ili *Ručni izbor*.

**Grupisanje prema vrsti i načinu plaćanja**: određuje da li će se narudžbine grupisati prema vrsti i načinu plaćanja prilikom razduživanja putem obrasca za pretraživanje narudžbina, pomoću dugmadi na traci sa alatkama *Razduživanje otpremnicama* ili *Razduživanje fakturama*.

**Grupisanje prema odredištu**: određuje da li će se narudžbine grupisati prema primaocu i odredištu prilikom razduživanja putem obrasca za pretraživanje narudžbina, pomoću dugmadi na traci sa alatkama *Razduživanje otpremnicama* ili *Razduživanje fakturama*.

**Prikaz mreže za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje narudžbina kupaca omogućava se prikaz u obliku mreže.

**Prikaz stabla za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje narudžbina kupaca omogućava se prikaz u obliku stabla.

### Izlaz

**Prioritet parametara definisanih za svaki red narudžbine**: ako je opcija aktivirana, skladište i šablon izlaza preuzimaju se iz redova narudžbine. Ako opcija nije aktivirana, koriste se skladište i šablon navedeni u sledećim poljima (*Skladište* i *Skladišni šablon*).

### Analitika

Ova kartica određuje prioritet prema kojem se preuzima centar troška (CDC) ili centar prihoda (CDP) u redu narudžbine.

Prioritete je moguće menjati pomoću dugmadi **Pomeri nagore** ![](/img/neutral/common/move-up.png) i **Pomeri nadole** ![](/img/neutral/common/delete-cc.png).

*Zadate vrednosti*: centar troška (CDC) ili centar prihoda (CDP) preuzima se iz vrste fakturisanja, ako je tamo definisan.

Više informacija potražite u tabeli [Vrsta fakturisanja](/docs/configurations/tables/sales/sales-turnover).

Ako centar troška (CDC) ili centar prihoda (CDP) nije definisan u *vrsti fakturisanja*, sistem ga traži u *šifarniku kupca*. Ako tamo nije definisan, traži ga u šifarniku artikala, a zatim na nivou skladišta.

Opcija **Uvažavanje prioriteta svake dimenzije** omogućava grupisanje centara troška (CDC) i centara prihoda (CDP) prema dimenziji na kartici *Analitika* u dokumentima.