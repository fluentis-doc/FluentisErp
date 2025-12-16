---
title: Scenarij upravljanja agentom – primjeri
sidebar_position: 5
---

Na ovoj stranici prikazujemo nekoliko primjera za sastavljanje mogućeg scenarija upravljanja agentom.

Ova vrsta putanje korisna je za razumijevanje poveznica između različitih funkcionalnosti i za davanje nekoliko primjera kriterija izračuna.

Slijedit ćemo ovu sekvencu:  
- Definiranje provizijskih razreda  
- Kreiranje kartice agenta i odgovarajuća konfiguracija  
- Povezivanje s klijentima
- Kreiranje prodajnih dokumenata
- Naplata faktura  
- Kontrola zaračunavanja provizija  
- Isplata agenata  
- Upravljanje naknadama agenata  
- Uplate Enasarco i porezne zadržavanja (osnovno)  
- Obrada potvrda o poreznim zadržavanjima (osnovno)  

## Definiranje provizijskih razreda

Jedan od najčešće korištenih kriterija za izračun provizija, a s didaktičkog gledišta i najzanimljiviji u odnosu na klasične metode poput fiksnog postotka ili postotka ovisno o klijentu, predstavlja *Razine popusta*.

Cilj je definirati opadajuće provizije kako raste popust koji agent odobrava klijentu.

Posebnost konfiguracije ovog kriterija, u usporedbi s jednostavnijim metodama, leži u potrebi da se unaprijed definiraju razine popusta povezane s pripadajućim postocima provizije.

Prvo stoga upravljamo tablicom **Definiranje provizijskih razreda** (umetnite link).  

:::important[Važno]
**Obratite pažnju na zaglavlje forme**: preporučuje se da bude uvijek vidljivo pomoću tipke za pin u gornjem desnom kutu. Zaglavlje sadrži ključni filter za upravljanje tablicom: [***raspon popusta***](/docs/configurations/tables/sales/discount-range).

Povezana tabela jednostavno omogućuje definiranje tipova koji su omogućeni, određujući kod i opis te se povezuje s unaprijed definiranim kriterijem među onima koji su prisutni, ali **u zaglavlju obrasca u komentaru potrebno je odabrati raspon popusta** kako bi se moglo vidjeti ili upravljati detaljima vezanim uz odabrani raspon.
:::

U vezi s odabranim rasponom popusta, koji može biti tipa *Jedinstveni* (jednostavni), ili prema *klasama* artikla, *tipologiji* artikla ili nekoj njegovoj *karakteristici* (sva polja prisutna u bazi podataka i povezana s artiklom te stoga mogu biti valorizirana), ili prema kategoriji robe kojoj artikal pripada, ili prema cjeniku prodaje u kojem je artikal uključen, možemo definirati detalje.

Ako ne odaberemo nikakav raspon popusta, pretraživanje će proizvesti podatke samo za čitanje (nepromjenjive, u sivoj boji).

Na temelju raspona popusta pojavit će se dodatni specifični filtar (u padajućem izborniku), uvijek u zaglavlju.

U ovom trenutku, ako bismo, na primjer, postavili raspon popusta na kategoriju robe i naravno imali naše kategorije u sustavu (npr. vijčana roba, alati itd.), za svaku od ovih kategorija prikazanih u lijevoj mreži našeg obrasca, mogli bismo definirati, na desnoj ploči, provizijske razrede.

Postupak započinje unosom koda i opisa, na primjer, raspon od nula popusta do 10% možemo kodirati kao 010, a u opisu slobodno definirati "od 0 do 10%". U ovom trenutku u dva sljedeća polja definiramo dvije postotne vrijednosti raspona, u prvom 0, a u drugom 10.

:::important[Važno]
Obratite posebnu pažnju na način definiranja razina, bez ostavljanja praznina, imajući na umu – kao što se vidi iz oznaka – da raspon ide od vrijednost **veće ili jednake** ... do vrijednosti **manje od**...
:::

U sljedećem polju **Vrijednost** definiramo **proviziju** agenta koja se odnosi na postavljeni raspon / interval, a u posljednjem stupcu odabiremo opciju **Postotak**, budući da namjeravamo koristiti postotne provizije, ali bismo također mogli prebaciti na opciju *Vrijednost* i koristiti polje za apsolutnu vrijednost provizije.

Ako bismo odabrali kriterij popusta **Jedinstveno**, ne bismo imali nikakve detalje s lijeve strane i izravno bismo prešli na definiranje razreda s valjanim postotnim rasponima.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

U slici, 35% popusta odgovara proviziji od 3%.

## Kreiranje kartice agenta i odgovarajuća konfiguracija

Prilikom kreiranja kartice agenta, u primjeru ćemo prikazati samo najvažnija polja, uz napomenu da se za osnovne korake kreiranja kartice može konzultirati **odgovarajuće stranice**. Nakon što postavimo **kriterij obračuna provizije**, , npr. po potvrđenoj narudžbi, izdanoj fakturi ili izvršenoj uplati (najčešće korišteno jer priznaje proviziju proporcionalno naplaćenom iznosu), te popunimo ostala polja od interesa za porez i socijalno osiguranje, poput **kategorije agenta i poreznog zadržavanja** (ili režima oslobođenja), prelazimo na izračun provizije (vrijednost provizije) i povezujemo je s odabranim kriterijem.  

U kartici [**Direktne provizije**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions) osim polja za fiksnu naknadu i opći postotak provizije za tog agenta, s desne strane nalazi se tablica u kojoj se odabire kriterij **Razine popusta**.

**Obratite pažnju na polje Prioritet** također zbog toga što se prema zadanim postavkama kartica inicijalizira s kriterijem *Kartica agenta* i prioritetom 1. Moramo ukloniti ovaj kriterij, ili još bolje, postaviti ga s nižim prioritetom, na primjer 2, a s prioritetom 1 našu *Rasponi popusta*. Na taj način, ako se specifični kriterij koji nas zanima ne primijeni u konkretnom slučaju, imat ćemo preostali kriterij koji će dodijeliti postotak upisan u kartici agenta u susjednom polju o kojem smo govorili.

:::danger[Pažnja]
S kriterijem "složenim" poput *Razine popusta* i drugih, **potrebno je definirati detalje pritiskom na tipku *Detalj odabranih postotaka na traci izbornika***.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**U otvorenom obrascu potrebno je ponovno odabrati referentni raspon popusta kako bi se prikazale provizijske kategorije.**

Svrha pritiskanja tipke i otvaranja ove forme je da vidimo učitane razine koje smo već definirali. Te se razine stoga smatraju standardnima.  

Stoga možemo prihvatiti standard za ovog agenta, i stoga ne napraviti nikakve izmjene, ili, putem odgovarajuće radio tipke ***Provizije***, prebaciti čitanje na **Prilagođene**. Tako postaje kolona **Vrijednost** **mogućnost izmjene** i možemo definirati valjane vrijednosti samo za tog agenta.

Također imamo radio tipku ***Referentna cijena*** kojom se definira hoće li referentna cijena za izračun biti cijena iz kartice artikla ili specifična cijena definirana u retku prodajnog dokumenta.

:::danger[Pažnja]
Podsjetimo se definirati i raspon **Datuma valjanosti**, barem polje Od datuma valjanosti.  
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Povezivanje s klijentima

:::tip[Pažnja]
**U svakom slučaju**, bez obzira na odabrani kriterij izračuna, **agenta je potrebno povezati s klijentima** za koje će se obračunavati provizija.

Svakom klijentu može biti povezan više agenata.  
:::

Za povezivanje, umjesto otvaranja pojedinačnih kartica klijenata i unošenja agenta u kartici [**Agenti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) na raspolaganju nam je alat u formi **Dodjela agenata** (Home > Kontakti > Dodjela agenata).  

Ovdje je moguće pokrenuti pretraživanje (opremljeno raznim filtrima u zaglavlju) koje prikazuje sve kupce, a pri prelasku s jednog retka na drugi prikazuje, za svakog kupca, agente koji su eventualno već povezani.

Postupak je osobito koristan i za održavanje, npr. u slučajevima prestanka rada jednog agenta i dolaska drugog.

Tipka **Dodaj**, na traci izbornika, omogućuje nam da dodamo novog agenta svim odabranim klijentima.

Ostale tipke nam intuitivno omogućuju druge operacije kao što su zamjena, brisanje, ažuriranje datuma valjanosti itd. u prethodno navedenim slučajevima zamjena i prestanka itd.  

Također je moguće unijeti, na ovaj masovni način, postotak provizije koji se odnosi na pojedinog kupca, ali to nije slučaj u našem primjeru gdje razmatramo na temelju popusta.

## Izrada prodajnih dokumenata

Izračun provizije u dokumentima kao što su narudžba, otpremnica i faktura (navodi se u koracima kreiranja sljedećeg dokumenta iz prethodnog) odvija se automatski na temelju postavki definiranih iznad. Vrijednost popusta koja određuje iznos provizije može se ostvariti na različite načine, a da to ne predstavlja problem za izračun provizije.

Upućuje se na postupke [**definiranja popusta**](/docs/sales/price-control/definition/) u području Prodaje.  

Napomena: u zaglavlju prodajnih dokumenata ističe se agent ili agenti povezani, ali za provjeru vrijednosti izračunate provizije (već od samog dokumenta) potrebno je preći na kartici [**Artikli**](/docs/sales/sales-invoices/invoicing/sales-invoice) 

## Naplata faktura

U našem primjeru postavili smo dospijeće na temelju **Izvršeno plaćanje**, stoga u svrhu mogućnosti pristupanja likvidaciji provizije, nakon provjere njezina dospijeća, **relevantna je knjigovodstvena evidencija zatvaranja otvorene stavke** (ili više njih) **otvorenih stavki** koje su nastale [knjiženjem](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) izlazne fakture.

Napomena: podsjeća se da se u slučaju naplate putem bankovne doznake / mjenice uzima u obzir stvarni datum **dospijeća** instrumenta, datum koji može biti produžen prema parametru definiranom u modulu [Rizik kupca](/docs/configurations/parameters/treasury/customer-risk-parameters).
(Broj dana nakon dospijeća za instrumente predane uz naplatu uz rezervu – broj dana nakon dospijeća za instrumente predane nakon naplate).

## Kontrola dospijeća provizija

Za provjeru dospijeća provizija, a time i mogućnosti njihove isplate te očekivanih rezultata, uzimajući u obzir odabrani kriterij stvarne naplate (što ovu provjeru čini posebno važnom), možemo koristiti referentni ispis [**Dospjele provizije**](/docs/sales/agents/reports/accrued-commissions).

Naime, taj ispis omogućuje pregledno prikazivanje iznosa koji su dospjeli te vrijednosti isplate koju ćemo generirati i potom isplatiti kroz pretvorbu u naknadu primatelju (agent je sam po sebi primatelj naknade u odnosu na predujmove poreza po odbitku).

Ostali ispisi modula korisni su za detaljniju provjeru iznosa koji su teorijski dospjeli, ali ne nužno i stvarno dospjeli, kao što su [**Platne liste agenata**](//docs/sales/agents/reports/agents-payslip).

## Obračun agenata

Postupak [**Automatsko kreiranje obračuna provizija**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) omogućuje izračun te smatra provizije uključenima u postupak obračunatima i isplaćenima.  

Od tog trenutka te provizije više neće biti vidljive pri ispisu [**Dospjele provizije**](/docs/sales/agents/reports/accrued-commissions) koji će i dalje prikazivati eventualne preostale iznose, primjerice u slučaju djelomičnih plaćanja otvorenih stavki ili djelomičnih plaćanja pripadajućih faktura.

Ti preostali iznosi bit će jasno podobni za isplatu te će biti uključeni u sljedeći obračun u trenutku kada se odgovarajuće stavke zatvore putem računovodstvene evidencije naplate. Podsjećamo da naš primjer predviđa kriterij ostvarenog plaćanja (razmjerno u odnosu na naplate), dok su mogući i drugačiji kriteriji, poput samog izdavanja fakture, što bi značilo da provizije odmah dospijevaju, ili još restriktivniji kriteriji poput **potpune naplate** (dostupno samo ako se provizije upravljaju putem [**administrativnog modula**](/docs/finance-area/maturity-values/maturity-values/commissions)).

:::note[Napomena]
Kod metode *ostvarenog plaćanja* odabir provizija za obračun uvijek će obuhvaćati *sve iznose do određenog datuma*, nije moguće odabrati ono što je dospjelo unutar određenog vremenskog raspona, niti postoji poveznica s poljem periodičnosti obračuna koje se nalazi u kartici agenta.

Rasponi filtra prisutni u samoj proceduri odnose se na datume narudžbi/otpremnica/faktura, a ne na razinu datuma **plaćanja**. 

To je potrebno jer dok za dokumente ne postoji način da se dodaju novi ili izmjene u već obrađenim razdobljima, situacija je drugačija za uplate: ništa ne sprječava da se kreira uplata s datumom registracije u već zatvorenom razdoblju u obračunu provizija agenata (možda zato što banke nisu usklađene ili je došlo do greške u staroj registraciji), stoga bi se podatak "izgubio" u sljedećim izračunima.
:::

Budući da je u lijevom dijelu mreže za odabir agenata vidljiv kriterij dospijeća (informativno), u slučaju potrebe za obračunom provizija u odnosu na određeno referentno razdoblje izdanih dokumenata, uz primjenu kriterija različitih od ostvarenog plaćanja (vidi napomenu iznad), moguće je koristiti filtre po datumima dokumenata koji se nalaze u desnom dijelu obrasca.  

Nakon odabira agenata, uključujući i grupni odabir u skladu s mogućim različitim kriterijima dospijeća i time potrebama filtriranja dokumenata, potrebno je u donjem desnom dijelu unijeti opis obračuna. Datum se predlaže kao današnji i nema utjecaja na filtriranje podataka; on isključivo označava datum obrade obračuna. Na kraju je potrebno ispuniti mjesec i godinu na koje se obračun odnosi, u svrhu izračuna minimalne i maksimalne osnovice za doprinos Enasarco.

Važno je obratiti pažnju na ispravno popunjavanje razdoblja jer, primjerice (u slučaju pogrešnog unosa), ako u određenom tromjesečju ne budu pronađene obračunate provizije za agenta (npr. zato što su pogrešno pripisane sljedećem razdoblju), softver će ipak evidentirati obračun koji se sastoji samo od doprinosa na teret tvrtke, a koji se moraju uplatiti.

Pokretanjem izračuna softver vraća poruku potvrde ili upozorenje za agente za koje nisu pronađene provizije za obračun.

Na kraju, ako se žele izvršiti provjere, moguće je [**otvoriti obračun**](/docs/sales/agents/agent-settlement/insert-settlement) dvostrukim klikom nakon što je prethodno [**pronađen**](/docs/sales/agents/agent-settlement/search-agent-settlement).

Unutar obračuna moguće je dobiti popis faktura uključenih u obračun provizija. Za to se prebacite na karticu **Fakture** i pritisnite tipku **Pretraži** u vrpci.

Rezultat se prikazuje u dvije donje mreže: prva prikazuje fakture koje su uzete u obzir (na razini zaglavlja dokumenata), dok druga prikazuje detalj stavki fakture s pripadajućim provizijama.

**PAŽNJA: radi se o iznosu provizija izračunatih na pojedinačne stavke fakture, ne nužno i dospjelih u obračunu, pa se ukupna vrijednost može razlikovati ako su dijelom naplaćene.**

## Upravljanje naknadama agenata

Unutar obračuna već su uneseni podaci o predujmu poreza (ritenuta d’acconto) i udjelima koje snosi agent (koje se zadržavaju i uplaćuju u njegovo ime) te doprinosu Enasarco na teret nalogodavca.

U ovom trenutku, koristeći odgovarajući postupak, iz obračuna [**kreiramo naknadu**](/docs/sales/agents/procedures/create-professional-man-commission).

Automatski kreirana naknada može se pronaći u modulu administracije [**Naknade primatelja**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Uplate Enasarco i predujmovi poreza

Automatsko unošenje u modul primatelja putem naknade omogućuje i [**upravljanje plaćanjem**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), bilo da je agent izdao fakturu ili proformu, te automatski evidentira obvezu prema poreznoj upravi za [**uplatu predujma poreza**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

Poseban postupak za [**knjiženje doprinosa Enasarco**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) koji se treba uplatiti (i na teret tvrtke i zadržane dijelove agenta) generira računovodstvenu evidenciju koja evidentira trošak i obvezu; stvarna uplata i pripadajuće knjiženje moraju se izvršiti ručno.

## Obrada potvrde o predujmu poreza

Postupak se završava [**zradom potvrde o predujmu poreza**](/docs/finance-area/declarations/declarations/withholding-tax-certification) koja se odnosi na agenta.

Nalazimo se u administrativnom modulu i radi se o fiskalnoj obvezi, stoga se detalji ne navode. Ova napomena je korisna kako bi se razumjela povezanost prodajnog i administrativnog područja: agent, osim što zahtijeva izračun provizija, podložan je predujmovima poreza i stoga se uključuje u upravljanje naknadama profesionalaca primatelja.