---
title: Sastavnica materijala
sidebar_position: 0
---

:::important **Fluentis Academy**     

Sastavnica materijala je skup podataka fizičko-logičke prirode koji opisuje kako je proizvod strukturiran.           
Obično se koristi samo za proizvode u proizvodnji, a ne za nabavu, navodeći komponente koje čine sastavni proizvod i potrebnu količinu svake od njih kako bi se stvorila unaprijed određena količina sastavnog proizvoda (koeficijent korištenja komponente).          
Osim osnovnih informacija koje predstavljaju kod komponente i količinu, postoji još mnogo drugih informacija koje će biti objašnjene u Fluentisovoj online pomoći.

Sastavnica materijala koristi se u sljedeće svrhe:

- Planiranje potreba za materijalima (polufabrikatima i sirovinama) i proizvodnim resursima.  

- Upravljanje skladišnim kretanjima komponenata tijekom stvaranja sastava (znajući stvarnu količinu sastava, moguće je izračunati teoretski potrošenu količinu svake komponente i stoga obaviti odgovarajuće isporuke iz skladišta).  

- Izračun troškova za proračun sastava; naime, struktura proizvoda zajedno s troškovima nabavljenih ili vanjskih obradaka i opisom procesa obrade putem radnih ciklusa omogućuje izračun teorijskog troška proizvoda. 
Stvarni trošak varira za svaku proizvodnu narudžbu ovisno o stvarnoj vrijednosti nabavljenih materijala, predviđenim vremenima obrade i stvarno korištenim resursima.  

- Opisivanje i dokumentiranje strukture proizvoda.  

Ponekad se baza sastavnica stvara za proizvod koji se ne proizvodi unutar tvrtke (na primjer, kupljeni proizvod), samo radi predstavljanja strukture u svrhu održavanja ili popravka.  


Što se tiče planiranja, osim fizičkih sastavnica u kojima su i sastavljeni proizvod i komponente stvarni proizvodi koji se upravljaju na skladištu putem procesa nabave i proizvodnje, koriste se i tzv. logičke sastavnice planiranja. Njihova svrha je pojednostaviti proces srednjoročnog i dugoročnog planiranja kao aktivnost nakon prodajne prognoze koja se izrađuje ne za pojedinačne kodove gotovih proizvoda, već za obitelji proizvoda, obično po vrijednosti, a ne po količini.

Glavni tipovi planiranih računa su sljedeći:

<details>
<summary> Modularne Razrade </summary>

Ovaj tip razrade opisuje module i opcije završnog proizvoda. 
Moduli su zajednički dijelovi koji ne ovise o odabiru kupaca, dok se opcije biraju prema želji kupaca. Ovo je često korišteno u okruženjima gdje proizvod može biti naručen s više opcija prema želji kupca, kao što je to slučaj u automobilskoj industriji (izbor dodataka, vrste motora itd).

</details>

<details>
<summary> Popis Kontejnera (kit bill) </summary>

U ovom slučaju, kod sastava ne odgovara stvarnom proizvodu koji se upravlja u skladištu, već predstavlja logičko grupiranje njegovih dijelova. 
Prednost je u tome što se s jednim kodom artikla upravlja s mnogo njih, kako u fazi planiranja, tako i u skladišnom poslovanju te proračunu proizvoda. 
Kod kontejnera stoga se koristi kao komponenta drugih razrada, bilo fizičkih ili logičkih.

</details>

<details>
<summary> Popis Super (super bill) </summary>

Ove razrade koriste se za predstavljanje obitelji završenih proizvoda koji koriste modularne razrade i razrade zajedničkih dijelova kao komponente. 
Koeficijent uporabe dodijeljen svakoj opciji predstavlja vjerojatnost naručivanja te opcije u ukupnom broju prodanih jedinica obitelji završenih proizvoda (primjerice, ako se motorizacija od 2000 ccm benzina odabere u 23% slučajeva, koeficijent uporabe za tu opciju bit će 0,23). 
Koeficijent uporabe dodijeljen svakoj razradi zajedničkih dijelova predstavlja količinu potrebnu za izradu jedne jedinice završenog proizvoda te skupine.

</details>

<details>
<summary> Obiteljski Popis (family bill) </summary>

Kod sastavljenog proizvoda ove sastavnice je logički element, a ne fizički, koji služi za identificiranje obitelji proizvoda označavajući pojedinačne članove kada broj članova obitelji nije velik. 
Često su članovi obitelji "modeli" koji je čine. 
Zamislimo, na primjer, veliku tvrtku koja proizvodi različite obitelji proizvoda poput motocikala, automobila, teških prijevoznih sredstava, autobusa, strojeva za zemljane radove, traktora itd. 
U ovom primjeru obitelj automobila sastoji se od različitih modela automobila koje tvrtka prodaje, i tako dalje za druge obitelji. 
Svaki "model" bit će prisutan u popisu s koeficijentom upotrebe koji predstavlja postotak prodaje tog modela u ukupnom broju obitelji proizvoda.

</details>

<details>
<summary> Srednji Popis (average bill) </summary>

I u ovom slučaju, kod sastavljenog proizvoda je logički, a ne fizički. Predstavlja prosječnu strukturu proizvoda slično kao što to radi i super razrada, ali za razliku od potonje, njezini dijelovi nisu moduli ili kompleti (tj. logički dijelovi), već stvarni artikli koji se stvarno upravljaju u skladištu i u većini slučajeva samo komponente za kupnju. Koristi se posebno kada se gotovi proizvodi razlikuju po fizičkim karakteristikama poput oblika, veličine, volumena, težine itd.

</details>

<details>
<summary> Imaginarni Popis (imaginary bill) </summary>

Ovo je vrsta razrade koja se koristi u tvrtkama koje rade na narudžbi tipa Engineer to Order, gdje se proizvode vrlo složeni proizvodi s dugim vremenima izrade koji još nisu inženjerski projektirani u trenutku narudžbe klijenta (industrijski postrojenja, velike strojeve, brodovi, zrakoplovi itd.). 
U ovom slučaju, distinta gotovog proizvoda bit će dostupna tek na kraju cijelog procesa dizajniranja, pa je stoga prekasno dopustiti sustavu planiranja da obavlja svoje djelovanje. 
Iz tog razloga inicijalno se stvara "imaginarna" osnovna razrada kopirana sličnog proizvoda koji je bio izrađen u prošlosti i koji sadrži već poznate dijelove i privremene dijelove koji će se zamijeniti konačnim kako dizajn napreduje. 
Ova razrada ipak omogućava obradu sustava planiranja i raspored aktivnosti i nabave u odgovarajućem vremenu te ponovno planiranje aktivnosti kako narudžba napreduje

</details>
:::