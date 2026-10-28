---
title: Parametri ponuda
sidebar_position: 2
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Parametri ponuda omogućuju definiranje osnovnih postavki za njihovo pravilno upravljanje u skladu sa zahtjevima pojedine tvrtke. Prozor se sastoji od dviju kartica: Općenito i Izlaz.

### Općenito

Polja na ovoj kartici su:

**Upravljanje dvjema mjernim jedinicama**: ako je opcija aktivirana, u redcima ponude prikazuju se dva stupca, Alternativna mjerna jedinica i Alternativna količina. Na taj je način moguće upravljati dvjema mjernim jedinicama, pri čemu se provjere razduživanja uvijek provode prema osnovnoj mjernoj jedinici.

**Automatski prijedlog alternativne mjerne jedinice**: ovo se polje može uređivati samo ako je aktivirana opcija za upravljanje dvjema mjernim jedinicama. Omogućuje prikaz alternativne mjerne jedinice definirane u šifarniku artikala, u odgovarajućem stupcu *Alternativna mjerna jedinica* na kartici artikala ponude. Ako opcija nije aktivirana, mjerna jedinica neće se predlagati.

**Pretraživanje cijena artikala u svim zadanim cjenicima**: prilikom pretraživanja cijene i popusta za artikl u ponudi sustav primjenjuje pravila na temelju postavki u šifarniku kupca, u odjeljku *Cjenici*. Ako je opcija *Zadano* aktivirana za određenu vrstu cjenika, cijene i popusti traže se prvenstveno u toj vrsti cjenika. Ako opcija *Zadano* nije aktivirana, sustav proširuje pretraživanje na sve dostupne vrste cjenika prema zadanom redoslijedu prioriteta.

Kada je opcija *Zadano* aktivirana, sustav najprije traži važeći cjenik zadane vrste. Ako ne pronađe odgovarajuću cijenu, provjerava ostale vrste cjenika prema postavljenom redoslijedu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cjenika nije označena kao *Zadano* i definirani su samo prioriteti, ovaj parametar neće utjecati na pretraživanje, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagat će se i za retke s besplatnim artiklima, jednako kao i za retke s artiklima sa šifrom.

**Dopusti popuste za besplatne artikle**: ako je opcija aktivirana, popusti na iznos retka primjenjivat će se i na retke s besplatnim artiklima.

**Provjera artikala na izmaku zaliha**: ako je opcija aktivirana, prikazuje se skočno upozorenje kada se u ponudu unese artikl za koji je u šifarniku artikala aktivirana oznaka *Na izmaku zaliha* i definiran datum od kojeg je artikl na izmaku zaliha.

**[Omogući pojednostavljeni widget za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odjeljku *Artikli* nehijerarhijskih ponuda prikazuju se dva nova stupca: *Popusti artikla* i *Konačni popusti artikla*. Stupac *Popusti artikla* može se uređivati i prikazuje popuste koji se automatski primjenjuju na temelju postavki za kupca, artikl, cjenik ili kategoriju popusta. Korisnik može izravno u tom stupcu unositi, mijenjati ili brisati popuste. Za korištenje ovog widgeta, osim aktiviranja ove opcije, potrebno je u vrsti ponude odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tablicu artikala ponude dodaju se stupci za šifru i opis artikla kod kupca, definirani u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tablicu artikala ponude dodaje se stupac za prikaz barkoda artikla.

**Obvezna šifra operatera**: ovom se opcijom određuje je li obvezno popuniti polje *Operater* u zaglavlju ponude.

**Blokiraj unos dokumenta na neradne dane prema tvorničkom kalendaru**: ako je opcija aktivirana, sustav ne dopušta unos ponude na neradne dane. Najprije se provjerava tvornički kalendar, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sustav ne provodi provjeru i dopušta unos dokumenta.

**Reference ponude**: ako je ova opcija aktivirana, u projektu kreiranom iz ponude u naslov projekta unosi se referenca ponude. Sadržaj ove napomene potrebno je definirati u polju *Opis*, u skladu s parametrima navedenima u oznaci polja.

**Zadani trošak materijala ponude**: u ovom polju moguće je navesti *vrstu izvornog troška* koja će se koristiti kao početni iznos za izračun prihoda od *materijala* u [hijerarhijskoj ponudi](/docs/sales/offers/insert-offer).

**Artikl za narudžbu resursa iz ponude**: u ovom polju moguće je navesti artikl sa šifrom koji će se povezati s resursima ponude radi kreiranja redaka narudžbe iz [hijerarhijske ponude](/docs/sales/offers/insert-offer).

**Reference prototipa**: u ovom je odjeljku moguće sastaviti napomenu s referencom na prototip povezan s ponudom. Napomena će se prikazati u polju *Prototip* na kartici *Aktivnosti* hijerarhijske ponude.

**Blokiraj potvrdu i pretvaranje ponude u narudžbu ako postoje prototipovi bez šifre**: ova opcija onemogućuje potvrdu ponude i njezino pretvaranje u narudžbu ako su povezani prototipovi bez šifre.

### Izlaz

Parametri izlaza koriste se samo za predlaganje skladišta i predloška izlaza u redcima nehijerarhijskih ponuda.

**Prioritet parametara definiranih za svaki redak narudžbe**: ako je opcija aktivirana, skladište i predložak izlaza preuzimaju se iz redaka narudžbe. Ako opcija nije aktivirana, koriste se skladište i predložak navedeni u sljedećim poljima (**Skladište** i **Skladišni predložak**).