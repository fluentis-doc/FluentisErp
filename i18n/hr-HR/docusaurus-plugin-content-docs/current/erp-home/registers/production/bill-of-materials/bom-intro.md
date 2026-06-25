---
title: Sastavnica materijala
sidebar_position: 0
---

:::important Uvod

Sastavnica je fizičko-logička struktura podataka koja opisuje kako je proizvod izrađen.  

U pravilu se koristi za proizvode koji se proizvode, a ne za nabavne artikle, pri čemu definira komponente od kojih se sastavljeni proizvod sastoji te količinu svake pojedine komponente potrebnu za izradu unaprijed definirane količine gotovog proizvoda (koeficijent utroška komponente).  

Osim šifre komponente i količine, koje predstavljaju osnovne informacije, postoje i brojni drugi podaci koji su detaljno opisani u Fluentis online pomoći.

Sastavnica služi za sljedeće svrhe:

- planiranje potreba za materijalima (poluproizvodima i sirovinama) te proizvodnim resursima;
- upravljanje skladišnim kretanjima komponenti tijekom proizvodnje sastavljenog proizvoda (na temelju proizvedene količine gotovog proizvoda moguće je izračunati teorijsku potrošnju svake komponente i izvršiti odgovarajuća skladišna izdavanja);
- izračun planskog troška proizvoda. Struktura proizvoda, zajedno s troškovima nabavljenih materijala, vanjskih usluga i opisom proizvodnog procesa kroz radne cikluse, omogućuje izračun teorijskog troška proizvoda. Stvarni trošak razlikuje se za svaki proizvodni nalog i ovisi o stvaravnim nabavnim cijenama materijala, evidentiranom vremenu rada i stvarno korištenim resursima;
- opisivanje i dokumentiranje strukture proizvoda.

Ponekad se sastavnica izrađuje i za proizvod koji se ne proizvodi unutar poduzeća (primjerice nabavni proizvod), isključivo radi prikaza njegove strukture za potrebe održavanja ili popravaka.

Za potrebe planiranja, osim fizičkih sastavnica u kojima su i sastavljeni proizvod i njegove komponente stvarni artikli kojima se upravlja kroz nabavu i proizvodnju, koriste se i logičke sastavnice za planiranje. Njihova je svrha pojednostaviti srednjoročno i dugoročno planiranje koje se provodi nakon izrade prognoze prodaje. Takvo se planiranje najčešće provodi za obitelji proizvoda te se temelji na vrijednostima, a ne na pojedinačnim šiframa i količinama gotovih proizvoda.

Glavne vrste planskih sastavnica su:

<details>
<summary>Modularne sastavnice</summary>

Ova vrsta sastavnice opisuje module i opcije gotovog proizvoda.

Moduli predstavljaju zajedničke dijelove koji ne ovise o izboru kupca, dok opcije predstavljaju elemente koje kupac može odabrati.

Najčešće se koriste u industrijama u kojima se proizvod može naručiti u različitim konfiguracijama, primjerice u automobilskoj industriji (odabir dodatne opreme, motorizacije i sl.).

</details>

<details>
<summary>Sastavnice tipa spremnik (Kit Bill)</summary>

Kod ove vrste sastavnice šifra sastavljenog proizvoda ne predstavlja stvarni skladišni artikl, nego logičko grupiranje njegovih komponenti.

Prednost ovakvog pristupa je mogućnost upravljanja većim brojem komponenti pomoću jedne šifre artikla, kako u planiranju, tako i u skladišnim kretanjima i izračunu troškova proizvoda.

Šifra spremnika zatim se koristi kao komponenta drugih fizičkih ili logičkih sastavnica.

</details>

<details>
<summary>Super sastavnice (Super Bill)</summary>

Ove sastavnice koriste se za predstavljanje obitelji gotovih proizvoda koje kao komponente koriste modularne sastavnice i sastavnice zajedničkih dijelova.
Koeficijent utroška dodijeljen svakoj opciji predstavlja vjerojatnost odabira te opcije u odnosu na ukupan broj prodanih proizvoda iz određene obitelji (primjerice, ako se benzinski motor od 2000 cm³ odabire u 23 % slučajeva, njegov koeficijent utroška iznosi 0,23).
Koeficijent utroška dodijeljen sastavnicama zajedničkih dijelova predstavlja količinu potrebnu za proizvodnju jedne jedinice gotovog proizvoda iz te obitelji.

</details>

<details>
<summary>Obiteljske sastavnice (Family Bill)</summary>

Šifra sastavljenog proizvoda u ovoj vrsti sastavnice predstavlja logički, a ne fizički element te služi za identifikaciju obitelji proizvoda navođenjem njezinih pojedinačnih članova, kada obitelj sadrži manji broj članova.
Članovi obitelji najčešće predstavljaju različite modele proizvoda.
Primjerice, veliko poduzeće može proizvoditi više obitelji proizvoda, kao što su motocikli, osobni automobili, teretna vozila, autobusi, građevinski strojevi ili traktori.
U tom slučaju obitelj osobnih automobila sastoji se od svih modela automobila koje poduzeće prodaje, a isto vrijedi i za ostale obitelji proizvoda.
Svaki model nalazi se u sastavnici s koeficijentom utroška koji predstavlja njegov udio u ukupnoj prodaji unutar te obitelji proizvoda.

</details>

<details>
<summary>Prosječna sastavnica (Average Bill)</summary>

I u ovom slučaju šifra sastavljenog proizvoda predstavlja logički, a ne fizički element.
Prosječna sastavnica opisuje prosječnu strukturu proizvoda, slično super sastavnici, ali za razliku od nje njezine komponente nisu moduli ili kompleti (logičke komponente), nego stvarni artikli kojima se upravlja u skladištu, a u većini slučajeva riječ je o nabavnim komponentama.
Najčešće se koristi za proizvode koji se međusobno razlikuju po fizičkim karakteristikama, kao što su oblik, dimenzije, volumen ili masa.

</details>

<details>
<summary>Zamišljena sastavnica (Imaginary Bill)</summary>

Ova vrsta sastavnice koristi se u poduzećima koja rade prema modelu **Engineer to Order (ETO)**, odnosno proizvode vrlo složene proizvode s dugim vremenom izrade koji u trenutku zaprimanja narudžbe još nisu potpuno projektirani (primjerice industrijska postrojenja, veliki strojevi, brodovi ili zrakoplovi).
U takvim slučajevima stvarna sastavnica gotovog proizvoda postaje dostupna tek nakon završetka projektiranja, što je prekasno da bi sustav planiranja mogao pravodobno izvršavati svoje funkcije.
Zbog toga se u početnoj fazi izrađuje **zamišljena sastavnica**, najčešće kopirana sa sličnog proizvoda proizvedenog u prošlosti. Ona sadrži već poznate komponente te privremene komponente koje se postupno zamjenjuju konačnima kako projektiranje napreduje.
Takva sastavnica omogućuje sustavu planiranja provođenje planiranja materijala, proizvodnih aktivnosti i nabave u odgovarajućim vremenskim intervalima te kontinuirano prilagođavanje plana kako se projekt razvija.

</details>
:::