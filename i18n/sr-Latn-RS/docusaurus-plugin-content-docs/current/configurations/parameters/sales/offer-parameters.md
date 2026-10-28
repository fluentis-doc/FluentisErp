---
title: Parametri ponuda
sidebar_position: 2
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre nameravate da konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Parametri ponuda omogućavaju definisanje osnovnih podešavanja za njihovo pravilno upravljanje u skladu sa zahtevima pojedinačnog preduzeća. Prozor se sastoji od dve kartice: Opšte i Izlaz.

### Opšte

Polja na ovoj kartici su:

**Upravljanje dvema mernim jedinicama**: ako je opcija aktivirana, u redovima ponude prikazuju se dve kolone, Alternativna merna jedinica i Alternativna količina. Na taj način moguće je upravljati dvema mernim jedinicama, pri čemu se provere razduživanja uvek obavljaju prema osnovnoj mernoj jedinici.

**Automatski predlog alternativne merne jedinice**: ovo polje može da se uređuje samo ako je aktivirana opcija za upravljanje dvema mernim jedinicama. Omogućava prikaz alternativne merne jedinice definisane u šifarniku artikala, u odgovarajućoj koloni *Alternativna merna jedinica* na kartici artikala ponude. Ako opcija nije aktivirana, merna jedinica neće biti predložena.

**Pretraživanje cena artikala u svim zadatim cenovnicima**: prilikom pretraživanja cene i popusta za artikal u ponudi, sistem primenjuje pravila na osnovu podešavanja u šifarniku kupca, u odeljku *Cenovnici*. Ako je opcija *Zadato* aktivirana za određenu vrstu cenovnika, cene i popusti traže se prvenstveno u toj vrsti cenovnika. Ako opcija *Zadato* nije aktivirana, sistem proširuje pretraživanje na sve dostupne vrste cenovnika prema zadatom redosledu prioriteta.

Kada je opcija *Zadato* aktivirana, sistem najpre traži važeći cenovnik zadate vrste. Ako ne pronađe odgovarajuću cenu, proverava ostale vrste cenovnika prema podešenom redosledu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cenovnika nije označena kao *Zadato* i definisani su samo prioriteti, ovaj parametar neće uticati na pretraživanje, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagaće se i za redove sa besplatnim artiklima, isto kao i za redove sa artiklima koji imaju šifru.

**Dozvoli popuste za besplatne artikle**: ako je opcija aktivirana, popusti na iznos reda primenjivaće se i na redove sa besplatnim artiklima.

**Provera artikala sa zalihama na izmaku**: ako je opcija aktivirana, prikazuje se iskačuće upozorenje kada se u ponudu unese artikal za koji je u šifarniku artikala aktivirana oznaka *Zalihe na izmaku* i definisan datum od kojeg su zalihe artikla na izmaku.

**[Omogući pojednostavljeni vidžet za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odeljku *Artikli* nehijerarhijskih ponuda prikazuju se dve nove kolone: *Popusti artikla* i *Konačni popusti artikla*. Kolona *Popusti artikla* može da se uređuje i prikazuje popuste koji se automatski primenjuju na osnovu podešavanja za kupca, artikal, cenovnik ili kategoriju popusta. Korisnik može direktno u toj koloni da unosi, menja ili briše popuste. Da bi se koristio ovaj vidžet, pored aktiviranja ove opcije, potrebno je u vrsti ponude odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tabelu artikala ponude dodaju se kolone za šifru i opis artikla kod kupca, definisane u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tabelu artikala ponude dodaje se kolona za prikaz barkoda artikla.

**Obavezna šifra operatera**: ovom opcijom određuje se da li je obavezno popuniti polje *Operater* u zaglavlju ponude.

**Blokiraj unos dokumenta neradnim danima prema fabričkom kalendaru**: ako je opcija aktivirana, sistem ne dozvoljava unos ponude neradnim danima. Najpre se proverava fabrički kalendar, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sistem ne obavlja proveru i dozvoljava unos dokumenta.

**Reference ponude**: ako je ova opcija aktivirana, u projektu kreiranom iz ponude u naslov projekta unosi se referenca ponude. Sadržaj ove napomene potrebno je definisati u polju *Opis*, u skladu sa parametrima navedenim u oznaci polja.

**Zadati trošak materijala ponude**: u ovom polju moguće je navesti *vrstu izvornog troška* koja će se koristiti kao početni iznos za izračunavanje prihoda od *materijala* u [hijerarhijskoj ponudi](/docs/sales/offers/insert-offer).

**Artikal za narudžbinu resursa iz ponude**: u ovom polju moguće je navesti artikal sa šifrom koji će se povezati sa resursima ponude radi kreiranja redova narudžbine iz [hijerarhijske ponude](/docs/sales/offers/insert-offer).

**Reference prototipa**: u ovom odeljku moguće je sastaviti napomenu sa referencom na prototip povezan sa ponudom. Napomena će se prikazati u polju *Prototip* na kartici *Aktivnosti* hijerarhijske ponude.

**Blokiraj potvrdu i pretvaranje ponude u narudžbinu ako postoje prototipovi bez šifre**: ova opcija onemogućava potvrdu ponude i njeno pretvaranje u narudžbinu ako su povezani prototipovi bez šifre.

### Izlaz

Parametri izlaza koriste se samo za predlaganje skladišta i šablona izlaza u redovima nehijerarhijskih ponuda.

**Prioritet parametara definisanih za svaki red narudžbine**: ako je opcija aktivirana, skladište i šablon izlaza preuzimaju se iz redova narudžbine. Ako opcija nije aktivirana, koriste se skladište i šablon navedeni u sledećim poljima (**Skladište** i **Skladišni šablon**).