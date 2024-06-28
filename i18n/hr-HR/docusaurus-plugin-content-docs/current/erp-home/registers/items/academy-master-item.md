---
title: Identifikacija proizvoda i pripadajućih djelova 
sidebar_position: 0
---

:::important **Fluentis Academy**     

Svako proizvodno poduzeće prodaje fizičke proizvode koji se uobičajeno nazivaju gotovim proizvodima. 

Za proizvodnju ovih proizvoda potrebne su sirovine i komponente koje se mogu nabaviti na tržištu.

Jasno je da svako proizvodno poduzeće kao minimum ima potrebu identificirati robu na ulazu i izlazu kako bi upravljalo procesima nabave, prodaje i pripadajuće računovodstvene postupke.

Svaki proizvod jedinstveno se identificira putem artikla, obično alfanumeričkog koda, prema vlastitim logikama kodiranja svakog poduzeća.

Teoretski je uvijek moguće opisati strukturu gotovih proizvoda jednostavno putem osnovne liste na razini koja uključuje sve sirovine i/ili komponente za kupnju.

Vrlo često je međutim ovaj izloženi način predstavljanja previše jednostavan i neefikasan, pa je potrebno kodirati i međuproizvode, nazvane poluproizvodi.

Koju logiku treba primijeniti kako bi se odredilo kada je potrebno kreirati šifru proizvoda za poluproizvod?

Zadan je gotov proizvod, koliko poluproizvoda treba kodirati kako bi se definirala njegova struktura?

S tehničko-inženjerskog gledišta moguće je identificirati mnoge dijelove u gotovom proizvodu, ali s proizvodnog gledišta potreba za kodiranjem može biti vrlo različita.

Općenito, ako se logička komponenta strukture uvijek odmah ponovno koristi nakon stvaranja, nije preporučljivo stvarati šifru artikla (osim u nekim iznimkama koje su objašnjene u nastavku).

Ako trenutak izrade i upotrebe nisu vremenski podudarni, tada postoji potreba za pohranom elementa, stoga ga treba kodirati kako bi se mogli upravljati odgovarajući procesi i bilanciranje na kraju godine.

Stoga, potreba za skladištenjem elementa dovoljan je uvjet za zahtjev za kodiranjem putem šifre artikla.

Razlozi koji dovode do potrebe za skladištenjem komponente tipično su sljedeći:  
- Proizvodnja komponente uključuje značajne troškove postavljanja stroja, pa se postavljaju minimalni proizvodni lotovi kako bi se ograničila postavljanja i povećao omjer između stvarnih sati proizvodnje i dostupnih radnih sati. Stoga su lotovi obično veći od trenutnih potreba, pa će se dio proizvodnje pohraniti radi buduće potrošnje.    
- Neki se dijelovi moraju proizvesti unaprijed u odnosu na potrebe kako bi se mogli isporučiti gotovi proizvodi u roku koji zahtijeva tržište, pa stvarne količine potrebne u trenutku proizvodnje nisu poznate. Stoga se stvara zaloga uoči buduće potrošnje.  
- Neki proizvodni procesi imaju neujednačen prinos, pa je potrebno imati zalihu materijala za upotrebu.  
- Želi se stvoriti zalihu iznad kritičnog resursa (usko grlo) kako bi se izbjegla opasnost od zaustavljanja zbog nedostatka materijala za obradu, jer je stopa proizvodnje tvornice određena upravo uskim grlom
- Želi se odvojiti neke proizvodne procese kako bi se smanjila njihova međusobna ovisnost kada nisu sinkronizirani, kao što je slučaj u kontinuiranoj proizvodnji.  

Ponekad se ipak odlučuje kodirati element, čak i ako se ne skladišti.

To se obično događa iz sljedećih razloga:  
- Članak služi samo kao logičko grupiranje skupine članaka koji se koriste zajedno u drugim proizvodima ili se prodaju kao skupina. 
To omogućava brže i jednostavnije stvaranje osnovnih sastavnica upravljajući samo jednim člankom umjesto skupine članaka koji bi inače morali biti pojedinačno uneseni i upravljani u osnovama sastavnica u kojima se koriste (u literaturi često nazvane kit bill).
- Obično se članak odmah potroši nakon upotrebe, ali potrebno je održavati malu zalihu kao rezervne dijelove za tehničku podršku.
- Radni ciklus sastavljenog članka nije prikaziv putem linearnog niza faza jer ima mrežnu prirodu (tj. s više grana).  
Naime, ogromna većina ERP sustava omogućuje definiranje samo sekvencijalnih radnih ciklusa, pa u slučaju mrežnog ciklusa rada potrebno je unijeti kodove članaka za svaku granu radnog ciklusa.
- Za identifikaciju dijelova proizvoda s logičkog stajališta ili jer postoji potreba za izračunavanjem troškova za dijelove istog.  
- Iz razloga tehničke dokumentacije za popravke i održavanje.  

U slučajevima kada se stvori kod članka, ali se nikada ne posjeduje, članak se identificira kao fantomski ili fiktivni članak. Stoga za njega neće biti moguće izdavati narudžbe ili izvršavati skladišni izračuni, a MRP sustav će izravno razmatrati njegove komponente bez planiranja samog članka s obzirom da ne može imati zalihe ili narudžbe.*

:::