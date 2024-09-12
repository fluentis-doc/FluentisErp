---
title: Izravne provizije
sidebar_position: 4
---

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions/image01.png)

Ovaj prozor je ključan za definiranje kriterija određivanja postotaka provizija.

Prva dva polja omogućuju definiranje **općeg postotka** i **fiksnog iznosa**: lopći postotak će se koristiti samo ako u odjeljku s desne strane, gdje se definiraju po prioritetu kriteriji valorizacije, postoji tipologija ‘1 -  Šifarnik o agentu'.

Popis mogućih opcija (odabir iz padajućeg izbornika) je sljedeći:

**Šifarnik o agentu**: prema postotku navedenom u samom šifarniku agenta;

**Šifarnik o klijentu**: prema postotku koji agent ima u šifarniku klijenta;

**Zona za korisnike**: prema zoni povezanoj s kupcem;

**Cjenik klijenta**: prema primijenjenim cjenicima za kupce (opći cjenici i/ili prilagođeni cjenici);

**Klasa**: prema razredu prodanog artikla;

**Artikl**: za svaki pojedini artikl definira se postotak agenta u upotrebi;

**Cjenik-Klase**: prema kombinaciji razreda artikla u raznim cjenicima;

**Cjenik-Klasa-Artikl**: prema kombinaciji pojedinog artikla u raznim cjenicima;

**Vrsta Artikla**: prema vrsti artikla;

**Kartica Klijent-Klasa**: odnosi se na kombinaciju klase artikla za svaku anagrafsku klijentsku evidenciju;

**Kartica Klijent-Klasa-Artikl**: odnosi se na kombinaciju klase artikla za svakog klijenta;

**Rasponi popusta**: prema vrsti raspona popusta (Konfiguracija > Tablice > Prodaja > Rasponi rabata), odnosno povezivanjem provizije s popustima koje sam agent primjenjuje na kupca. S druge strane, rasponi popusta mogu ovisiti o razredima artikala, cjenicima, vrsti artikla, karakteristici artikla, robnoj kategoriji ili mogu biti struktura fiksnih pragova.

Logika određivanja provizije koja će se primijeniti stoga ovisi o prioritetima povezanim s tipovima koje želite koristiti: ako su, na primjer, prisutni s prioritetima 1, 2, 3 tipovi ‘6 – članak', ‘4 – cjenik kupca' i ‘1 – šifarnik o agentu' sustav će procijeniti, prilikom unosa članka, je li taj članak na popisu članaka za koje agent ima postavljenu postotak provizije (ako je među njima, uzima se taj postotak provizije), ako nije među njima, sustav će provjeriti ima li redak cijenu koja proizlazi iz određenog popisa (npr. promotivni popis) na kojem agent ima definiranu proviziju (ako je među njima, uzima se taj postotak provizije), ako nije među njima, koristit će se fiksni postotak iz šifarnika agenta.

Za neke od ovih opcija potrebno je pritisnuti gumb **Detalj označenog postotka** kako biste otvorili prozor za definiranje kombinacija koje vrijede za samog agenta. U tim prozorima, koji ovise o vrsti početnih postavki (npr. ako se radi o artiklima, bit će polje za definiranje artikla, ako se radi o cjenicima, bit će polje za cjenik itd.), važno je definirati raspon datuma valjanosti ovih postavki: za isti artikl, primjerice, moglo bi postojati više postotaka provizije s različitim rasponima datuma valjanosti.

Posebno je važno objasniti provizionalni detalj definiran za *Raspon popusta*: za ove, naime, važno je definirati koji će se *Raspon popusta* (kako je definiran u tablici) primijeniti na agenta i hoće li provizije biti one standardno unesene u ovom ili prilagođeni postotak za agenta na rasponima popusta definiranim za taj raspon; drugo, bitno je reći je li izračun stvarnog primijenjenog popusta definiran u odnosu na cijenu artikla u šifarniku, ili prema odnosu bruto-neto cijene pojedine linije artikla (u kojem slučaju neće biti moguće automatizirati provizije agenata prilikom stvaranja dokumenata izravno na neto cijenama).

Dodatna opća napomena u vezi s popisima: povezani su s određenim popisima, ne s vrstama popisa. Drugim riječima, ako se u modulu prodajnih popisa stvori novi popis iste vrste kao prethodni, ali s novim datumom početka valjanosti, taj se popis mora ponovno povezati s agentom i njegovim postotcima provizije.


**Kategorija Provizije**: različitim kriterijima obračuna provizije također je povezana moguća Kategorija provizije. Kategorije se definiraju u odgovarajućoj tablici. Svaka kategorija ima za cilj povezivanje određenog kriterija s karakteristikom dokumenta (na primjer, kriterij je osobni podaci o agentu s čitanjem vrijednosti opće provizije, ali prema vrsti narudžbe - postavljanje u tablici [**Kategorije provizija**](/docs/configurations/tables/sales/commission-categories) kriterija čitanja na temelju objekta FSSalesOrder.TypeCode, na primjer, Code = OCIT. Drugim riječima, čitanje provizije događa se samo kada je narudžba klijenta vrste OCIT = Narudžba Italija). 

Ako se uvjet (ili višestruki alternativni uvjeti) ne zadovolji, prelazi se na kriterij u rešetki s idućim prioritetom (ako je definiran). 

Na kraju obrasca postoji još jedno dugme koje omogućuje unos postavki drugog agenta, odabranog iz help za agente koja se otvara, u trenutno aktivnog agenta.

*Posebni gumbi*:
> **Spremi trgovačkog predstavnika**: za spremanje promjena na agentu.  
> **Izbriši proviziju**: za brisanje odabranih detalja provizije.