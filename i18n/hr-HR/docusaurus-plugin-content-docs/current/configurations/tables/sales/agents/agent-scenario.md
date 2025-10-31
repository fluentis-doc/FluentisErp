---
title: Scenarij upravljanja agentom – primjeri
sidebar_position: 5
---

Na ovoj stranici prikazani su neki primjeri koji mogu poslužiti kao vodič za definiranje mogućeg scenarija upravljanja agentom.

Ovakav pristup koristan je za razumijevanje povezanosti između različitih funkcionalnosti i za ilustraciju primjera kriterija izračuna provizije.

Slijedit ćemo ovaj redoslijed:

- Definiranje razreda (raspona) provizija  
- Kreiranje šifre agenta i odgovarajuće konfiguracije  
- Povezivanje s kupcima  
- Kreiranje prodajnih dokumenata  
- Naplata računa  
- Provjera obračuna provizija  
- Likvidacija agenata  
- Upravljanje naknadama agenata  
- Uplate doprinosa Enasarco i poreza po odbitku (kratki osvrt)  
- Izrada potvrde o porezu po odbitku (kratki osvrt)

## Definiranje razreda provizija

Jedan od najčešće korištenih kriterija za izračun provizija — i s didaktičkog stajališta zanimljiviji od klasičnih pristupa poput fiksnog postotka ili postotka ovisnog o kupcu — temelji se na *rasponima popusta*.  

Cilj je definirati provizije koje se smanjuju s povećanjem popusta koji agent odobrava kupcu.

Posebnost konfiguracije ovog kriterija, u odnosu na jednostavnije, leži u potrebi prethodnog definiranja tablice raspona popusta koji su povezani s odgovarajućim postocima provizija.

Prvi korak je upravljanje tablicom **Definicija raspona provizija** (potrebno umetnuti poveznicu).

:::important[Važno]
**Obratite pozornost na zaglavlje maske** – preporučuje se da ga uvijek držite vidljivim pomoću ikone *pin* u gornjem desnom kutu. Zaglavlje sadrži ključni filter za upravljanje tablicom: [***raspon popusta***](/docs/configurations/tables/sales/discount-range).

Povezana tablica omogućuje definiranje tipova raspona (kod, opis i povezivanje s unaprijed definiranim kriterijem), ali **u zaglavlju maske potrebno je odabrati raspon popusta** kako bi bilo moguće vidjeti ili uređivati podatke tog raspona.
:::

Odabrani raspon popusta može biti tipa *Jedinstven* (jednostavan) ili se temeljiti na *klasi* artikla, *tipu artikla*, *karakteristici*, *kategoriji robe* kojoj artikl pripada, ili *prodajnom cjeniku* u kojem je artikl definiran. Za svaki od tih kriterija moguće je definirati odgovarajuće detalje.    

Ako ne odaberemo raspon popusta, prikazani podaci bit će dostupni samo za čitanje (sivi, neaktivni).  

U skladu s odabranim rasponom popusta, u zaglavlju će se pojaviti i dodatni (padajući) filter.  

Ako smo, primjerice, definirali raspon popusta prema kategoriji robe te imamo unaprijed definirane kategorije (npr. vijčana roba, alati itd.), tada bismo za svaku kategoriju prikazanu u lijevoj tablici mogli, u desnom panelu, definirati pripadajuće razrede provizija.  

Unosi se šifra i opis, primjerice raspon od nema popusta do 10% možemo označiti šifrom 010, a u opisu ga slobodno definirati kao "od 0 do 10%".
Zatim je potrebno u sljedeća dva polja unijeti postotke koji određuju raspon — u prvo polje unosimo vrijednost 0, a u drugo vrijednost 10.  


:::important[Važno]
Prilikom definiranja raspona potrebno je paziti da **nema preklapanja ni praznina** među vrijednostima.  
Kao što je naznačeno na oznakama polja, raspon vrijedi od vrijednosti **veće ili jednake** određenoj vrijednosti **do** vrijednosti **manje od** sljedeće.
:::

U polje **Vrijednost** unosimo **postotak provizije** koji vrijedi za taj raspon popusta, a u posljednjem stupcu biramo opciju **Postotak**.  
Ako želimo, možemo umjesto toga odabrati *Vrijednost* i unijeti iznos provizije u apsolutnom iznosu.

Ako smo odabrali kriterij „Jedinstven popust“, tada u lijevoj tablici neće biti detalja — definiramo samo globalne raspona s pripadajućim postocima.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

U prikazanom primjeru, popust od 35% odgovara proviziji od 3%.  

## Kreiranje šifre agenta i konfiguracija  

Pri kreiranju šifre agenta — ovdje izdvajamo samo najvažnija polja — nakon što se definira [**kriterij obračuna provizija**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) za osnovne faze izrade šifre agenta, nakon što se postavi[**kriterij dospijeća provizija**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement), primjerice po potvrđenoj narudžbi, po izdanom računu ili po izvršenom plaćanju (posljednja je opcija u praksi najčešća jer priznaje proviziju u omjeru s naplaćenim iznosom) — te nakon što se popune ostala polja od fiskalnog i doprinosa značaja, kao što su **kategorija agenta i predujam poreza na dohodak** (ili režim izuzeća), prelazimo na izračun same provizije (vrijednosti provizije) te je povezujemo s prethodno odabranim kriterijem.  

U kartici [**Izravne provizije**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions) nalazi se mreža u kojoj odabiremo kriterij **Raspon popusta**.  

**Obratite pozornost na polje Prioritet** – po zadanim postavkama u šifri agenta postoji kriterij “Anagrafika agenta” s prioritetom 1. Taj kriterij treba ili ukloniti ili mu smanjiti prioritet (npr. na 2), a kriteriju *Raspon popusta* postaviti prioritet 1.  
Na taj način, ako kriterij s rasponom ne pronađe primjenu, koristi se rezervni (osnovni) kriterij iz šifre agenta.

:::danger[Upozorenje]
Za složene kriterije poput *Raspon popusta* potrebno je definirati detalje klikom na **tipku Detalj odabranih postotaka** u traci izbornika.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**U novootvorenoj maski potrebno je ponovno odabrati odgovarajući raspon popusta kako bi se prikazale pripadajuće provizijske razrede.**

Nakon što se pritisne tipka i otvori odgovarajući prozor, prikazat će se rasponi koje su već definirane. Ti se rasponi smatraju standardnima.

Možemo prihvatiti standardne vrijednosti za ovog agenta, bez ikakvih izmjena, ili putem radio gumba ***Provizije*** prebaciti prikaz na **Prilagođene**.  
U tom slučaju stupac **Vrijednost** postaje **izmjenjiv**, te je moguće definirati vrijednosti koje vrijede isključivo za tog agenta.

Također je dostupan radio gumb ***Referentna cijena*** pomoću kojeg se određuje treba li za izračun koristiti cijenu iz šifrarnika artikla ili onu definiranu u retku prodajnog dokumenta.

:::danger[Upozorenje]
Potrebno je definirati i raspon **Datuma valjanosti**, barem polje *Od datuma valjanosti*.
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Povezivanje s kupcima

:::tip[Upozorenje]
**U svakom slučaju**, bez obzira na odabrani kriterij izračuna, **agenta je potrebno povezati s kupcima** za koje će ostvarivati provizije.

Jednom kupcu može biti dodijeljeno više agenata.
:::

Za povezivanje, umjesto otvaranja pojedinačnih kartica kupaca i ručnog unosa agenta u tab [**Agenti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) može se koristiti alat **Dodjela agenata** (*Početna > Kontakti > Dodjela agenata*).

Ovdje je moguće pokrenuti pretragu (s raznim filtrima u zaglavlju) koja prikazuje sve kupce te, prelaskom s retka na redak, vidjeti agente koji su već povezani s pojedinim kupcem.

Ova je procedura vrlo korisna i za održavanje — primjerice, u slučaju prestanka rada jednog agenta i preuzimanja kupaca od strane drugog.

Tipka **Dodaj** u alatnoj traci omogućuje dodavanje novog agenta svim odabranim kupcima.  

Ostale tipke omogućuju uobičajene radnje poput zamjene, brisanja i ažuriranja datuma valjanosti, u slučajevima prijenosa ili prestanka suradnje.

Na ovaj se način može masovno unijeti i postotak provizije za pojedinog kupca, no u našem primjeru koristimo izračun temeljen na *sustavu popusta*.


## Izrada prodajnih dokumenata

Izračun provizije u dokumentima kao što su narudžba, otpremnica i račun odvija se automatski prema ranije definiranim postavkama.  
Vrijednost popusta, koja određuje iznos provizije, može se unositi na različite načine bez utjecaja na točnost izračuna.

Za detalje pogledajte postupak [**definicije popusta**](/docs/sales/price-control/definition/) u području *Prodaje*.

**Napomena:** U zaglavlju prodajnih dokumenata prikazuje se agent ili agenti koji su pridruženi, ali za provjeru iznosa izračunate provizije (već od samog dokumenta) potrebno je prijeći na karticu [**Artikli**](/docs/sales/sales-invoices/invoicing/sales-invoice) 

## Naplata računa

U našem primjeru postavili smo da se provizija stječe **nakon izvršene uplate**, stoga se, kako bi bilo moguće izvršiti isplatu provizije (nakon provjere njenog dospijeća), uzima u obzir **knjiženje zatvaranja otvorene stavke** koja je nastala [knjiženjem](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) prodajnog računa.    

**Napomena:** Podsjećamo da se u slučaju naplate putem bankovne priznanice uzima stvarni datum **dospijeća efekta**, datum koji se može uvećati prema parametru prisutnom u modulu [Rizik kupca](/docs/configurations/parameters/treasury/customer-risk-parameters).
(Broj dana nakon dospijeća za efekte predane na inkaso uz zadržavanje prava – Broj dana nakon dospijeća za efekte predane na inkaso nakon naplate)  

## Provjera dospijeća provizija  

Za provjeru dospijeća provizija, a time i mogućnosti njihove isplate te očekivanih rezultata — uzimajući u obzir kriterij prema kojem se provizija stječe tek nakon uplate (što ovu provjeru čini važnom) — možemo koristiti izvještaj [**Dospjele provizije**](/docs/sales/agents/reports/accrued-commissions).

Ovaj izvještaj omogućuje prikaz preliminarnog pregleda iznosa koji je dospio te vrijednosti isplate koju ćemo generirati i zatim isplatiti kroz pretvaranje u naknadu primatelju (agent je u ovom kontekstu primatelj s obzirom na obračun predujma poreza).    

Ostali izvještaji iz modula korisni su za detaljniji uvid u iznose koji su teoretski dugovani, ali još nisu dospjeli, kao što je izvještaj [**Platne liste agenata**](//docs/sales/agents/reports/agents-payslip).

## Likvidacija agenata

Postupak [**Automatskog kreiranja likvidacije provizija**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) omogućuje izračun i označavanje kao likvidiranih svih provizija koje će biti uključene.  

Od tog trenutka te provizije više neće biti vidljive u ispisa [**Dospjele provizije**](/docs/sales/agents/reports/accrued-commissions), koji će i dalje prikazivati eventualne ostatke — primjerice, u slučaju djelomičnih uplata otvorenih stavki ili djelomičnih uplata povezanih računa.      
Ti se ostaci mogu kasnije likvidirati i uključiti u sljedeću likvidaciju, kada se odgovarajuće stavke zatvore putem knjiženja naplate.  
Podsjetimo da naš primjer koristi kriterij „plaćanja izvršenog“ (proporcionalno prema naplati), ali moguće su i druge metode, poput jednostavnog izdavanja računa (koje bi odmah činilo provizije dospjelima) ili strožih kriterija poput **potpune uplate** (dostupno samo ako se provizije vode putem [**administrativnog modula**](/docs/finance-area/maturity-values/maturity-values/commissions)).

:::note[Napomena]
Kod metode *plaćanja izvršenog* odabir provizija za likvidaciju uvijek se odnosi na „sve do određenog datuma“.  
Nije moguće selektirati samo provizije dospjele u određenom vremenskom rasponu, niti postoji poveznica s poljem „učestalost likvidacije“ u kartici agenta.

Rasponi filtera u postupku odnose se na datume narudžbi / otpremnica / računa, a ne na **datume plaćanja**.  

To je potrebno jer, dok za dokumente nije moguće naknadno dodavati ili mijenjati stavke u već likvidiranim razdobljima, kod plaćanja je to drukčije: moguće je unijeti plaćanje s datumom unosa u već zatvorenom razdoblju (npr. zbog neusklađenih banaka ili pogreške u starom knjiženju).  
U suprotnom bi se ti podaci 
:::

Budući da se u lijevoj tablici za odabir agenata vidi kriterij dospijeća (kao podsjetnik), ako se želi raditi likvidacija provizija u odnosu na određeno razdoblje izdavanja dokumenata, uz drugačije kriterije od onog „plaćanja izvršenog“ (vidi napomenu gore), mogu se koristiti filteri po datumima dokumenata s desne strane obrasca.  

Nakon što se odaberu agenti (pojedinačno ili grupno, ovisno o kriterijima dospijeća i potrebama filtriranja), potrebno je u donjem desnom dijelu unijeti opis likvidacije.  
Datum se automatski predlaže kao današnji i nema utjecaj na filtriranje podataka — on samo označava datum izrade likvidacije.  
Obavezno je, međutim, unijeti mjesec i godinu likvidacije, jer su ti podaci potrebni za izračun minimalnog i maksimalnog doprinosa Enasarco fonda.

Važno je paziti na ispravno upisivanje razdoblja jer, primjerice, ako se u određenom tromjesečju agentu ne pronađu likvidirane provizije (zbog pogrešno unesenog razdoblja), softver će svejedno evidentirati likvidaciju koja sadrži samo doprinose na teret poduzeća — koje je i dalje potrebno uplatiti.

Nakon pokretanja izračuna, sustav prikazuje poruku potvrde ili upozorenje za agente za koje nisu pronađene provizije za likvidaciju.  

Na kraju, ako se žele provesti dodatne provjere, moguće je [**otvoriti likvidaciju**](/docs/sales/agents/agent-settlement/insert-settlement) dvostrukim klikom nakon što je [**pretražite**](/docs/sales/agents/agent-settlement/search-agent-settlement).

Unutar likvidacije moguće je dobiti popis računa uključenih u obračun — to se radi prelaskom na karticu **Računi** i klikom na tipku **Pretraga** u traci izbornika.  

Rezultati se prikazuju u dvije donje tabele: prva prikazuje račune (na razini zaglavlja), a druga detalje stavki računa s pripadajućim provizijama.

:::danger[Upozorenje]
Prikazani iznosi predstavljaju **teoretski izračunate provizije** na pojedinim stavkama računa, ali nisu nužno dospjele u likvidaciji, ukupni iznos može se razlikovati jer su pojedine stavke samo djelomično naplaćene.

U slučaju djelomične uplate računa, gdje se ostatak podmiruje kasnije, prva likvidacija (koja uključuje prvu uplatu) prikazat će u detalju cjelokupni iznos provizije, dok će likvidacija koja uključuje preostali dio imati vidljiv račun u gornjoj tablici, ali će donja tablica ostati prazna.

Planirano je dodavanje dodatnog polja koje će pokazivati iznos stvarno uključen u likvidaciju.
:::



## Upravljanje isplatama agenata

Unutar likvidacije već su uneseni podaci o porezu po odbitku te doprinosima koji su na teret agenta (koje treba zadržati i uplatiti u njegovo ime) i na teret poduzeća (Enasarco doprinos).

U ovoj fazi, koristeći odgovarajući postupak, iz likvidacije se [**kreira naknada**](/docs/sales/agents/procedures/create-professional-man-commission).

Tako kreirana naknada automatski će biti dostupna u administrativnom modulu [**Naknade primatelja**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Uplate Enasarco i porez po odbitku

Automatskim unosom u modul primatelja putem kreirane naknade omogućuje se i [**upravljanje plaćanjima**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), bez obzira na to je li agent izdao račun ili se radi o profakturi.  
Sustav automatski vodi obvezu prema državi za [**uplatu poreza po odbitku**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

Poseban postupak za [**knjiženje Enasarco doprinosa**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) (bilo na teret poduzeća, bilo na teret agenta) automatski stvara knjiženje troška i obveze.  
Fizičko plaćanje i njegovo knjiženje potrebno je izvršiti ručno.

## Obrada potvrda o porezu po odbitku

Postupak završava [**obradom potvrde o porezu po odbitku**](/docs/finance-area/declarations/declarations/withholding-tax-certification) obračunatom agentu.

U ovoj fazi nalazimo se u administrativnom modulu — radi se o poreznoj obvezi, pa ovdje navodimo samo kratak pregled.  
Ovaj korak ilustrira kako su prodajno područje i administracija povezani: agent, osim obračuna provizija, podliježe i obračunu poreza po odbitku te se zbog toga uključuje u sustav upravljanja profesionalnim primateljima.