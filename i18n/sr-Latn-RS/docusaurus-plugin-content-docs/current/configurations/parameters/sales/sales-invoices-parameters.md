---
title: Parametri izlaznih faktura
sidebar_position: 5
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre nameravate da konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Parametri izlaznih faktura omogućavaju definisanje osnovnih podešavanja za njihovo pravilno upravljanje u skladu sa zahtevima pojedinačnog preduzeća. Prozor sa ovim parametrima sastoji se od četiri kartice: Opšte, Razduživanje, Izlaz i Analitika.

### Opšte

**Upravljanje dvema mernim jedinicama**: ako je opcija aktivirana, u redovima fakture prikazuju se dve kolone, Alternativna merna jedinica i Alternativna količina. Na taj način moguće je upravljati dvema mernim jedinicama, pri čemu se provere razduživanja uvek obavljaju prema osnovnoj mernoj jedinici.

**Automatski predlog alternativne merne jedinice**: ovo polje može da se uređuje samo ako je aktivirana opcija za upravljanje dvema mernim jedinicama. Omogućava prikaz alternativne merne jedinice definisane u šifarniku artikala, u odgovarajućoj koloni *Alternativna merna jedinica* na kartici artikala fakture. Ako opcija nije aktivirana, merna jedinica neće biti predložena.

**Provera raspoloživosti**: ova opcija i ostale povezane opcije za proveru, prikaz i obaveznost unosa, uključujući razmatranje prema području, trenutno nisu podržane.

**Zadata merna jedinica za zapreminu/težinu**: ove merne jedinice koriste se kao zadate vrednosti koje se predlažu na kartici [Prevoz](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice, kao merne jedinice za zapreminu i težinu. Podaci mogu da se menjaju u dokumentima.

**Pretraživanje cena artikala u svim zadatim cenovnicima**: prilikom pretraživanja cene i popusta za artikal na fakturi, sistem primenjuje pravila na osnovu podešavanja u šifarniku kupca, u odeljku *Cenovnici*. Ako je opcija *Zadato* aktivirana za određenu vrstu cenovnika, cene i popusti traže se prvenstveno u toj vrsti cenovnika. Ako opcija *Zadato* nije aktivirana, sistem proširuje pretraživanje na sve dostupne vrste cenovnika prema zadatom redosledu prioriteta.

Kada je opcija *Zadato* aktivirana, sistem najpre traži važeći cenovnik zadate vrste. Ako ne pronađe odgovarajuću cenu, proverava ostale vrste cenovnika prema podešenom redosledu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cenovnika nije označena kao *Zadato* i definisani su samo prioriteti, ovaj parametar neće uticati na pretraživanje, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagaće se i za redove sa besplatnim artiklima, isto kao i za redove sa artiklima koji imaju šifru.

**Unos provizija za vrste redova 6 i 7 (avans/storno)**: ako je opcija aktivirana, omogućava unos i upravljanje provizijama i za vrste redova 6 i 7 na fakturama. Više informacija potražite u članku o [unosu faktura](/docs/sales/sales-invoices/invoicing/sales-invoice).

**Dozvoli popuste za besplatne artikle**: ako je opcija aktivirana, popusti će se obračunavati i za besplatne artikle i uticati na ukupne iznose.

**Negativne cene na odobrenjima**: ako je opcija aktivirana, sistem će prikazati upozorenje ako se na odobrenju pojave pozitivne cene. Ako opcija nije aktivirana, sistem neće obavljati proveru niti prikazivati upozorenje.

**Bez troškova naplate na odobrenjima**: ako je opcija aktivirana, troškovi naplate neće se obračunavati na odobrenjima.

**Provera prodajnih cena lotova**: zastarelo polje koje se više ne koristi.

**Maksimalan broj redova**: maksimalan broj artikala na fakturi. Ova opcija aktivna je samo u rumunskoj verziji.

**Provera artikala sa zalihama na izmaku**: ovom opcijom aktivira se upravljanje artiklima sa zalihama na izmaku. Ako je u šifarniku artikala definisan datum isteka raspoloživosti i aktivirana odgovarajuća oznaka, Fluentis će prikazati iskačuće upozorenje kada se takav artikal unese u dokument.

**[Omogući pojednostavljeni vidžet za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odeljku *Artikli* prikazuju se dve nove kolone: *Popusti artikla* i *Konačni popusti artikla*. Kolona *Popusti artikla* može da se uređuje i prikazuje popuste koji se automatski primenjuju na osnovu podešavanja za kupca, artikal, cenovnik ili kategoriju popusta. Korisnik može direktno u toj koloni da unosi, menja ili briše popuste. Da bi se koristio ovaj vidžet, pored aktiviranja ove opcije, potrebno je u vrsti fakture odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tabelu artikala fakture dodaju se kolone za šifru i opis artikla kod kupca, definisane u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tabelu artikala fakture dodaje se kolona za prikaz barkoda artikla.

**Obavezna šifra operatera**: ovom opcijom određuje se da li je obavezno popuniti polje *Operater* u zaglavlju fakture.

**Blokiraj unos dokumenta neradnim danima prema fabričkom kalendaru**: ako je opcija aktivirana, sistem ne dozvoljava unos fakture neradnim danima. Najpre se proverava fabrički kalendar preduzeća, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sistem ne obavlja proveru i dozvoljava unos dokumenta.

**Provera unutar EU**: ako je opcija aktivirana i država kupca pripada Evropskoj uniji, sistem proverava da li je u [vrsti fakture](/docs/configurations/tables/sales/invoices-type) aktivirana oznaka *Unutar Zajednice* i da li je u šifarniku kupca aktivirana oznaka *Intrastat*. Ako ovi uslovi nisu ispunjeni, prikazaće se poruka o grešci: „Vrsta dokumenta je unutar Zajednice, ali kupac nije označen kao subjekt unutar Zajednice”.

**Ponovni obračun prevoza**: ovom opcijom omogućava se prenos ukupnih vrednosti težine, zapremine i broja paketa iz redova dokumenta na karticu [Prevoz](/docs/sales/sales-invoices/invoicing/sales-invoice) fakture. Ako opcija nije aktivirana, ova polja neće biti popunjena.

**Spoljne reference narudžbine**: ovom opcijom omogućava se prenos polja *Naša referenca* i *Vaša referenca* iz redova narudžbine/otpremnice u redove fakture.

**Zadrži cene iz narudžbina za količinske razrede**: ova opcija koristi se prilikom razduživanja narudžbina u fakture kada se razdužena količina razlikuje, najčešće je manja, od naručene količine za koju je definisana cena ili popust prema količinskom razredu. Ako cena ili popust ne zavise od isporučene količine, već samo od naručene količine, ovu opciju treba aktivirati. Ako cena ili popust prema količinskom razredu ne treba da se prenesu u dokument isporuke kada nije razdužena ukupna količina narudžbine, opciju ne treba aktivirati.

**Knjiženje ambalaže**: ako je opcija aktivirana, u knjiženje se uključuju i redovi ambalaže.

### Razduživanje

**Plaćanje**: određuje vrednost koja se koristi za plaćanje izlazne fakture prilikom višestrukog razduživanja prodajnih naloga. Dostupne su opcije: *Prva narudžbina*, *Šifarnik* ili *Ručni izbor*.

**Primalac**: određuje vrednost koja se koristi za primaoca prodajne narudžbine prilikom višestrukog razduživanja prodajnih naloga. Dostupne su opcije: *Prva narudžbina*, *Šifarnik* ili *Ručni izbor*.

**Ponovni obračun troškovnog mesta/profitnog mesta (CDC/CDP)**: ako je faktura kreirana iz prodajne narudžbine pomoću odgovarajućeg postupka, aktiviranjem ove opcije sistem će ponovo obračunati troškovna i profitna mesta na fakturi, ne uzimajući u obzir vrednosti definisane u prodajnoj narudžbini. Ako opcija nije aktivirana, sistem neće ponovo obračunavati ove podatke, već će zadržati vrednosti unete u prodajnoj narudžbini.

**Prikaz mreže za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje prodajnih otpremnica omogućava se prikaz u obliku mreže.

**Prikaz stabla za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje prodajnih otpremnica omogućava se prikaz u obliku stabla.

**Predlaganje lotova**: ako u redu narudžbine nisu navedeni lotovi, prilikom razduživanja tražiće se raspoloživi lotovi na zalihama, pod uslovom da vrsta preuzimanja nije podešena na *Ručno*.

### Izlaz

**Kreiraj knjiženje sa datumom dokumenta**: ako je opcija aktivirana, skladišno knjiženje izvršava se sa istim datumom kao i faktura, pa nije potrebno navoditi datum knjiženja u obrascu za izlaz. Ako opcija nije aktivirana, datum je potrebno navesti u obrascu za izlaz fakture.

**Prioritet skladišta i šablona izlaza u redovima artikala otpremnica**: ako je opcija aktivirana, skladište i šablon izlaza preuzimaju se iz redova fakture. Ako opcija nije aktivirana, koriste se skladište i šablon navedeni u sledećim poljima (*Skladište* i *Skladišni šablon*).

**Automatski ulaz/izlaz**: ako je opcija aktivirana, izlazno skladišno knjiženje otpremnice izvršiće se automatski nakon aktiviranja oznake *Odštampano*. Ako opcija nije aktivirana, izlaz je potrebno izvršiti pomoću odgovarajućeg dugmeta na traci sa alatkama obrasca za unos fakture (pogledajte [Unos izlaznih faktura](/docs/sales/sales-invoices/invoicing/sales-invoice)) ili putem odgovarajućeg postupka.

**Upozorenje za fiktivne artikle**: ako je opcija aktivirana, prilikom izlaznog skladišnog knjiženja fakture sistem proverava da li postoje fiktivni artikli. Ako ih pronađe, prikazaće se poruka koja korisniku omogućava da odabere da li želi da nastavi postupak. Ako korisnik potvrdi nastavak, cela faktura biće razdužena, osim fiktivnih artikala. Ako korisnik odbije, faktura neće biti razdužena.

### Analitika

Ova kartica određuje prioritet prema kojem se preuzima centar troška (CDC) ili centar prihoda (CDP) u redu dokumenta.

Prioritete je moguće menjati pomoću dugmadi **Pomeri nagore** ![](/img/neutral/common/move-up.png) i **Pomeri nadole** ![](/img/neutral/common/delete-cc.png).

*Zadate vrednosti*: CDC ili CDP preuzima se iz vrste fakturisanja, ako je tamo definisan. Više informacija potražite u tabeli [Vrsta fakturisanja](/docs/configurations/tables/sales/sales-turnover).

Ako CDC ili CDP nije definisan u vrsti fakturisanja, sistem ga traži u šifarniku kupca. Ako tamo nije definisan, traži ga u šifarniku artikala, a zatim na nivou skladišta.

Opcija **Uvažavanje prioriteta svake dimenzije** omogućava grupisanje CDC-ova/CDP-ova prema dimenziji na kartici *Analitika* u dokumentima.