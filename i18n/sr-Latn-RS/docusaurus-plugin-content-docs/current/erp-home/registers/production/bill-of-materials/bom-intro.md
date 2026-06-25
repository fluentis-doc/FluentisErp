---
title: Sastavnica materijala
sidebar_position: 0
---

:::important Uvod

Sastavnica predstavlja fizičko-logičku strukturu podataka koja opisuje način na koji je proizvod izrađen.

U pravilu se koristi za proizvode koji se proizvode, a ne za nabavne artikle, pri čemu definiše komponente od kojih se proizvod sastoji i količinu svake pojedinačne komponente potrebne za izradu unaprijed definisane količine gotovog proizvoda (koeficijent utroška komponente).

Pored šifre komponente i količine, koje predstavljaju osnovne informacije, postoje i brojni drugi podaci detaljno opisani u Fluentis online pomoći.

Sastavnica se koristi u sljedeće svrhe:

- planiranje potreba za materijalima (poluproizvodima i sirovinama) i proizvodnim resursima;
- upravljanje skladišnim kretanjima komponenti tokom proizvodnje gotovog proizvoda (na osnovu proizvedene količine gotovog proizvoda moguće je izračunati teorijsku potrošnju svake komponente i izvršiti odgovarajuća skladišna izdavanja);
- izračun planskog troška proizvoda. Struktura proizvoda, zajedno sa troškovima nabavljenih materijala, eksternih usluga i opisom proizvodnog procesa kroz radne cikluse, omogućava izračun teorijskog troška proizvoda. Stvarni trošak razlikuje se za svaki proizvodni nalog i zavisi od stvarnih nabavnih cijena materijala, evidentiranog radnog vremena i stvarno korišćenih resursa;
- opisivanje i dokumentovanje strukture proizvoda.

Ponekad se sastavnica izrađuje i za proizvod koji se ne proizvodi u okviru preduzeća (na primjer nabavni proizvod), isključivo radi prikaza njegove strukture za potrebe održavanja ili popravki.

Za potrebe planiranja, pored fizičkih sastavnica u kojima su i gotov proizvod i njegove komponente stvarni artikli kojima se upravlja kroz nabavku i proizvodnju, koriste se i logičke planske sastavnice. Njihova svrha je pojednostavljenje srednjoročnog i dugoročnog planiranja koje se sprovodi nakon izrade prognoze prodaje. Takvo planiranje se najčešće vrši za porodice proizvoda i zasniva se na vrijednostima, a ne na pojedinačnim šiframa i količinama gotovih proizvoda.

Glavne vrste planskih sastavnica su:

<details>
<summary>Modularne sastavnice</summary>

Ova vrsta sastavnice opisuje module i opcije gotovog proizvoda.

Moduli predstavljaju zajedničke dijelove koji ne zavise od izbora kupca, dok opcije predstavljaju elemente koje kupac može odabrati.

Najčešće se koriste u industrijama u kojima se proizvod može naručiti u različitim konfiguracijama, na primjer u automobilskoj industriji (izbor dodatne opreme, motorizacije i slično).

</details>

<details>
<summary>Sastavnice tipa spremnik (Kit Bill)</summary>

Kod ove vrste sastavnice šifra gotovog proizvoda ne predstavlja stvarni skladišni artikal, već logičko grupisanje njegovih komponenti.

Prednost ovakvog pristupa je mogućnost upravljanja većim brojem komponenti pomoću jedne šifre artikla, kako u planiranju, tako i u skladišnim kretanjima i obračunu troškova proizvoda.

Šifra spremnika zatim se koristi kao komponenta drugih fizičkih ili logičkih sastavnica.

</details>
:::

<details>
<summary>Super sastavnice (Super Bill)</summary>

Ove sastavnice koriste se za predstavljanje porodica gotovih proizvoda koje kao komponente koriste modularne sastavnice i sastavnice zajedničkih dijelova.

Koeficijent utroška dodijeljen svakoj opciji predstavlja vjerovatnoću izbora te opcije u odnosu na ukupan broj prodatih proizvoda određene porodice (na primjer, ako se benzinski motor od 2000 cm³ bira u 23 % slučajeva, njegov koeficijent utroška iznosi 0,23).

Koeficijent utroška dodijeljen sastavnicama zajedničkih dijelova predstavlja količinu potrebnu za proizvodnju jedne jedinice gotovog proizvoda iz te porodice.

</details>

<details>
<summary>Porodične sastavnice (Family Bill)</summary>

Šifra gotovog proizvoda u ovoj vrsti sastavnice predstavlja logički, a ne fizički element i služi za identifikaciju porodice proizvoda navođenjem njenih pojedinačnih članova kada porodica sadrži manji broj proizvoda.

Članovi porodice najčešće predstavljaju različite modele proizvoda.

Na primjer, veliko preduzeće može proizvoditi više porodica proizvoda, kao što su motocikli, putnički automobili, teretna vozila, autobusi, građevinske mašine ili traktori.

U tom slučaju porodicu putničkih automobila čine svi modeli automobila koje preduzeće prodaje, a isto važi i za ostale porodice proizvoda.

Svaki model nalazi se u sastavnici sa koeficijentom utroška koji predstavlja njegov udio u ukupnoj prodaji unutar te porodice proizvoda.

</details>

<details>
<summary>Prosječna sastavnica (Average Bill)</summary>

I u ovom slučaju šifra gotovog proizvoda predstavlja logički, a ne fizički element.

Prosječna sastavnica opisuje prosječnu strukturu proizvoda, slično super sastavnici, ali za razliku od nje njene komponente nisu moduli ili kompleti (logičke komponente), već stvarni artikli kojima se upravlja u skladištu, pri čemu se u većini slučajeva radi o nabavnim komponentama.

Najčešće se koristi za proizvode koji se međusobno razlikuju po fizičkim karakteristikama, kao što su oblik, dimenzije, zapremina ili masa.

</details>

<details>
<summary>Zamišljena sastavnica (Imaginary Bill)</summary>

Ova vrsta sastavnice koristi se u preduzećima koja posluju prema modelu **Engineer to Order (ETO)**, odnosno proizvode veoma složene proizvode sa dugim vremenom izrade koji u trenutku prijema narudžbe još uvijek nisu u potpunosti projektovani (na primjer industrijska postrojenja, velike mašine, brodovi ili avioni).

U takvim slučajevima stvarna sastavnica gotovog proizvoda postaje dostupna tek nakon završetka projektovanja, što je prekasno da bi sistem planiranja mogao pravovremeno izvršavati svoje funkcije.

Zbog toga se u početnoj fazi izrađuje **zamišljena sastavnica**, najčešće kopirana sa sličnog proizvoda proizvedenog u prošlosti. Ona sadrži već poznate komponente, kao i privremene komponente koje se postepeno zamjenjuju konačnim kako projektovanje napreduje.

Takva sastavnica omogućava sistemu planiranja da vrši planiranje materijala, proizvodnih aktivnosti i nabavke u odgovarajućim vremenskim intervalima, uz kontinuirano prilagođavanje plana kako projekat napreduje.

</details>
:::