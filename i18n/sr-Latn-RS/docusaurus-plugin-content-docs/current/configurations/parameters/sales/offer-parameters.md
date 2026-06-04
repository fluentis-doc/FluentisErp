---
title: Parametri ponuda
sidebar_position: 2
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

U slučaju ručne konfiguracije, pogledaj kontrolnu listu na povezanom linku.
:::

Parametri ponuda omogućuju osnovne postavke za ispravno upravljanje ponudama, u skladu sa specifičnim zahtjevima svake pojedine tvrtke. Prozor je podijeljen na dvije kartice: Općenito i Otpremanje.     

### Općenito 

Polja prisutna u ovoj kartici su:

**Upravljanje dvostrukom jedinicom mjere**: ako je aktivirano, u redovima ponude bit će prikazane dvije kolone, Alternativna JM i Alternativna količina, što omogućuje upravljanje dvostrukim jedinicama mjere, uzimajući u obzir da se provjere za ispunjenje vrše prema glavnoj jedinici mjere.       

**Automatski prijedlog alternativne JM**: ovaj je parametar dostupan za uređivanje samo ako je aktivirano upravljanje dvostrukom jedinicom mjere i omogućuje da se u tabu artikala ponude automatski prijedloži alternativna jedinica mjere definirana u kartici artikla, u koloni Alternativna JM; ako nije aktiviran, alternativna JM se neće predložiti.      

**Pretraga cijena artikala u svim unaprijed definiranim cjenicima**: prilikom traženja cijene i popusta za artikl u ponudi, sustav slijedi pravila prema postavkama u kartici kupca, u odjeljku Cjenici. Ako je opcija ‘default’ aktivirana za određenu vrstu cjenika, pretraga će se ograničiti samo na tu vrstu. Ako ‘default’ nije aktivan, sustav će pretražiti sve vrste cjenika prema prioritetnom redu. Konkretno, ako je ‘default’ aktivan, sustav prvo traži valjani cjenik za zadanu vrstu; ako nema rezultata, nastavlja s drugim vrstama po prioritetu. Međutim, ako u kartici kupca nema nijedne vrste cjenika postavljene kao ‘default’ nego samo prioriteti, ovaj parametar neće utjecati na pretragu, čak i ako je aktivan.  

**Predloži proviziju za artikle na poklon**: ako je aktivno, agent će dobiti proviziju i za redove artikala označenih kao poklon, kao i za redove standardnih artikala.              

**Dozvoli popuste za artikle na poklon**: ako je aktivno, na redove artikala označenih kao poklon mogu se primijeniti popusti na iznos retka.  

**Provjera artikala pri kraju zaliha**: ako je aktivirano, pojavit će se skočni prozor upozorenja ako se u ponudu unesu artikli koji u svojoj kartici imaju označeno stanje pri kraju i definirani datum isteka.         

**[Omogući widget pojednostavljenih popusta](/docs/sales/sales-flow/discount-widget)**: Omogući pojednostavljeni widget za popuste aktiviranjem ove opcije u sekciji Artikli ne-hijerarhijskih ponuda prikazuju se dvije nove kolone: *Popusti artikla* i *Završni popusti artikla*. Kolona *Popusti artikla* je uređiva i prikazuje automatski primijenjene popuste prema postavkama za kupca, artikl, cjenik ili kategoriju popusta. Korisnik može dodavati, mijenjati ili brisati popuste direktno u ovoj koloni. Za korištenje ovog widgeta potrebno je, osim aktivacije opcije, definirati i vrstu popusta u vrsti ponude.   

**Koristi stavku kupca**: ako je aktivno, u tablici artikala ponude prikazuju se dodatne kolone za Šifru i Opis artikla prema kupcu, preuzete iz kartice artikla u kartici Kupac.      

**Koristi barkod**: ako je aktivno, u tablici artikala ponude prikazuje se kolona za barkod artikla.  

**Obvezna šifra korisnika**: ako je aktivno, polje *Operater* u zaglavlju ponude postaje obavezno za ispunjavanje.  

**Blokiraj unos dokumenta na praznike prema tvorničkom kalendaru**: ako je aktivno, sustav neće dopustiti unos ponude na neradne dane definirane u kalendaru tvornice (provjera se radi prvo prema tvorničkom kalendaru, a zatim prema kalendaru proizvodnih kapaciteta). Ako nije aktivno, nema provjere i dokument se može unijeti.       

**Referenca ponude**: ako je aktivno, u naslov projekta stvorenog iz ponude dodaje se referenca ponude; sadržaj bilješke mora biti unesen u polje *Opis* prema pravilima navedenima u opisu.   

**Zadani trošak materijala ponude**: ovdje se definira *Vrsta izvora troška* koja se koristi kao početna vrijednost za izračun prihoda *Materijala* u [hijerarhijskoj ponudi](/docs/sales/offers/insert-offer).       

**Artikl narudžbe resursa iz ponude**: ovdje se može odabrati artikl koji će se povezati s resursima iz ponude za kreiranje redova narudžbe iz [hijerarhijske ponude](/docs/sales/offers/insert-offer).      

**Reference prototipa**: ovdje se može unijeti bilješka o referenci na prototip povezan s ponudom; bilješka će se prikazati u polju *Prototip* u kartici *Aktivnosti* hijerarhijske ponude.       

**Blokiraj potvrdu i konverziju ponude u narudžbu ukoliko postoje nekodificirani prototipi**: ako je aktivno, onemogućava potvrdu i konverziju ponude u narudžbu dok se ne kodificiraju svi povezani prototipovi.   

### Istovar

Parametri otpremanja koriste se samo za automatski prijedlog skladišta i uzroka otpreme u redovima ne-hijerarhijskih ponuda.  

**Prioritet parametara umetnutih za svaku liniju naloga**: ako je aktivno, skladište i uzrok otpreme uzimaju se iz redova narudžbe, inače se koriste skladište i uzrok definirani u poljima (**Skladište** i **Uzrok otpreme**).     