---
title: Direktne provizije
sidebar_position: 4
---

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions/image01.png)

Ovaj obrazac je ključan za definisanje kriterijuma za određivanje procenata provizije.

Prva dva polja omogućavaju definisanje **opšteg procenta** i **fiksnog iznosa**. Opšti procenat će se koristiti samo ako u sekciji sa desne strane, gde se po prioritetu definišu kriterijumi obračuna, postoji tipologija **„1 - Šifarnik agenta“**.

Lista mogućih opcija (izbor iz padajućeg menija) je sledeća:

**Šifarnik agenta**: prema procentu navedenom u samom šifarniku agenta;

**Šifarnik kupca**: prema procentu koji agent ima definisan u šifarniku kupca;

**Zona kupca**: prema zoni povezanoj sa kupcem;

**Cenovnik kupca**: prema cenovnicima primenjenim na kupca (opšti i/ili prilagođeni cenovnici);

**Klasa artikla**: prema klasi prodatog artikla;

**Artikal**: za svaki pojedinačni artikal definiše se procenat provizije agenta;

**Cenovnik-Klasa**: prema kombinaciji klase artikla i cenovnika;

**Cenovnik-Klasa-Artikal**: prema kombinaciji pojedinačnog artikla i cenovnika;

**Vrsta artikla**: prema vrsti artikla;

**Kupac-Klasa**: odnosi se na kombinaciju klase artikla za svakog kupca;

**Kupac-Klasa-Artikal**: odnosi se na kombinaciju klase artikla i konkretnog kupca;

**Rasponi popusta**: prema vrsti raspona popusta (*Konfiguracija > Tabele > Prodaja > Rasponi rabata*), odnosno povezivanjem provizije sa popustima koje agent primenjuje kupcu. Rasponi popusta mogu zavisiti od klase artikla, cenovnika, vrste artikla, karakteristike artikla, robne kategorije ili mogu biti definisani kao struktura fiksnih pragova.

Logika određivanja provizije koja će se primeniti zavisi od prioriteta povezanih sa tipovima koje želite da koristite. Na primer, ako su definisani prioriteti 1, 2 i 3 za tipove **„6 – Artikal“**, **„4 – Cenovnik kupca“** i **„1 – Šifarnik agenta“**, sistem će prilikom unosa artikla proveriti da li se taj artikal nalazi na listi artikala za koje agent ima definisan procenat provizije. Ako postoji, koristiće se taj procenat. Ako ne postoji, sistem proverava da li red koristi cenu iz određenog cenovnika za koji agent ima definisanu proviziju. Ako postoji, koristiće se taj procenat. U suprotnom, koristiće se opšti procenat definisan u šifarniku agenta.

Za neke od ovih opcija potrebno je kliknuti na dugme **Detalj označenog procenta** kako bi se otvorio prozor za definisanje kombinacija koje važe za konkretnog agenta. U tim prozorima, koji zavise od vrste podešavanja (npr. za artikle postoji polje za izbor artikla, za cenovnike polje za izbor cenovnika itd.), važno je definisati period važenja ovih podešavanja. Za isti artikal može postojati više procenata provizije sa različitim periodima važenja.

Posebno je važno objasniti detalje vezane za **Raspon popusta**. Za njih je potrebno definisati koji će se *Raspon popusta* (kako je definisan u tabeli) primenjivati na agenta i da li će se koristiti standardne provizije definisane u rasponu ili prilagođeni procenat za tog agenta. Takođe je važno odrediti da li se obračun stvarno primenjenog popusta vrši u odnosu na cenu artikla iz šifarnika ili prema odnosu bruto-neto cene na pojedinačnoj stavci artikla. U drugom slučaju neće biti moguće automatizovati obračun provizija prilikom kreiranja dokumenata direktno sa neto cenama.

Dodatna napomena vezana za cenovnike: oni su povezani sa konkretnim cenovnicima, a ne sa vrstama cenovnika. To znači da, ukoliko se kreira novi cenovnik iste vrste kao postojeći, ali sa novim datumom početka važenja, taj cenovnik mora ponovo biti povezan sa agentom i njegovim procentima provizije.

**Kategorija provizije**: različitim kriterijumima obračuna provizije može biti pridružena i određena kategorija provizije. Kategorije se definišu u odgovarajućoj tabeli. Njihova svrha je povezivanje određenog kriterijuma sa karakteristikama dokumenta (na primer, kriterijum je šifarnik agenta sa čitanjem opšte provizije, ali samo za određenu vrstu porudžbine – podešavanje se definiše u tabeli [**Kategorije provizija**](/docs/configurations/tables/sales/commission-categories) korišćenjem kriterijuma zasnovanog na objektu *FSSalesOrder.TypeCode*, npr. *Code = OCIT*).

Drugim rečima, provizija će biti obračunata samo kada je porudžbina kupca tipa **OCIT = Narudžbina Italija**.

Ako uslov (ili više alternativnih uslova) nije ispunjen, sistem prelazi na sledeći kriterijum u tabeli prema definisanom prioritetu.

Na kraju obrasca nalazi se i dugme koje omogućava kopiranje podešavanja drugog agenta, izabranog putem pomoći za agente, u trenutno otvorenog agenta.

### Posebna dugmad

> **Sačuvaj trgovačkog predstavnika**: čuva izmene na agentu.  
> **Obriši proviziju**: briše izabrane detalje provizije.