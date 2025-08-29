---
title: Novi Leasing  
sidebar_position: 3
---

Prilikom sklapanja novog ugovora o leasingu potrebno je, osim polja označenih crvenim križićem, prethodno definirati i **Vrstu leasinga**. Ovo polje odnosi se na tablicu **[Vrste leasinga](/docs/finance-area/leasing/search)** (pogledati detalje u dokumentaciji obrasca za pretraživanje) u kojoj jedna ili više vrsta mora biti prethodno definirana.

Pozivanjem vrste leasinga predlažu se relevantni podaci u poljima za stopu PDV-a i konta koji će se koristiti za obračun naknada (dio glavnice), kamate (kamatni dio naknada) i troškova (primjer troškova naplate pojedinačnih naknada).  

![](/img/it-it/finance-area/leasing/new/image01.png)

![](/img/it-it/finance-area/leasing/new/image02.png)

## ZAGLAVLJE:

Polja koja se odnose na:  

**Bankovni konto/podkonto**: odnosi se na banku koja će se koristiti u evidenciji plaćanja naknada;  

**Konto/podkonto davatelja koncesije**: odnosi se na konto dobavljača (leasing društva davatelja) koji će se koristiti u evidenciji u vezi s plaćenim naknadama;  

**Datum ugovora**: zadani prijedlog je današnji datum (promjenjiv) predstavlja datum od kojeg će se računati dani leasinga;  

**Broj**: interni broj ugovora o leasingu;

**Opis**: opis ugovora;  

**Datum isteka roka trajanja**: unese se očekivani datum raskida kako bi se omogućio automatski izračun ukupnih dana ugovora, a time i relevantnih dana za obračun.  

:::danger PAŽNJA  
Ovaj datum, čak i ako ga unese korisnik, normalno bi se trebao podudarati s konačnim datumom amortizacijskog plana, stoga je postavljena kvačica s porukom upozorenja kada se koristi postupak automatskog izračuna amortizacijskog plana. Neusklađenost ovih datuma mogla bi dovesti do netočnog izračuna godišnje odgode naknade (i dijela koji se na nju ne odnosi).  
:::

**Interna diskontna stopa**: omogućuje korištenje navedene stope za automatski izračun amortizacijskog plana leasinga (amortizacija u stalnim ratama). Unese se godišnju stopa koja će automatski izračunati određivanje periodične stope na temelju periodičnosti obroka i trajanja leasinga.

**Vrijednost imovine**: Vrijednost iznajmljene imovine.  

**Vrijednost otkupa**: obično na kraju leasinga postoji plaćanje za stjecanje konačnog vlasništva nad imovinom.  

**Otkup troškova**: Svi dodatni troškovi za otkup.  

**Početna postavka**: Obično u ugovorima o leasingu postoji početna maksimalna naknada.

**Spese istruttoria e pratica**: Accessorie rispetto al maxicanone ed eventualmente previste una tantum all'inizio del contratto.



## POLJA KOJA SE NE MOGU UREĐIVATI (izračunata):

**Preostalo zaduženje**: Vrijednost dobra umanjena za zbroj glavnice plaćenih rata (uzimajući u obzir samo rate za koje je označen flag "Knjigovodstveno evidentirano" u vezi s ratom).  

**Ukupna vrijednost ugovora**: Početna maksimalna naknada + troškovi preliminarne istrage i obrade + zbroj naknada (dio glavnice + dio kamata + troškovi naplate / troškovi rate)  

**Financirani iznos**: Neto vrijednost imovine (minus) početna maksimalna naknada.  


## GLAVNI PREGLED:

U ovom dijelu moguće je ručno unijeti amortizacijski plan leasing naknada (isključujući početnu maxi-naknadu već naznačenu u podacima u zaglavlju). Alternativno, poseban postupak za automatski izračun amortizacijskog plana počevši od osnovnih podataka o leasingu koji su već uneseni u zaglavlju dostupan je na traci vrpce.  

![](/img/it-it/finance-area/leasing/new/image03.png)

**Datum**: datum koji se upisuje je onaj predviđen za istek naknade, koristit će se za predlaganje u administraciji (računovodstvu) u kojoj se bilježi primitak računa za naknadu od tvrtke davatelja;  

**Glavnica**: predstavlja glavnicu rate i bit će obračunata na kontu definiranom u tablici Vrste leasinga; 

**Kamatna stopa**: predstavlja komponentu kamate koja se odnosi na ratu i obračunat će se na posebnom kontu definiranom u tablici Vrste leasinga;  

**Trošak rate**: na primjer, predstavlja iznos koji se naplaćuje kao troškovi naplate i također će se obračunati na posebnom kontu definiranom u tablici Vrste leasinga;  

**Ukupan iznos**: ne može se uređivati, izračunava zbroj komponenti rate; 

**Knjiženo**: flag se aktivira kada se provodi obračun naknade i utječe kako na izračun preostalog duga tako i na izračun odgode maksi-naknade;

**Broj/datum unosa**: navode se reference knjiženja generirane postupkom obračuna naknada.



## POSTUPCI KOJI SE MOGU AKTIVIRATI IZ TRAKE IZBORNIKA:

### Knjigovodstveni postupci 

koji se mogu aktivirati iz obrasca leasinga isti su kao oni dostupni s popisa postupaka administracije (računovodstva) koji se odnose na modul Leasing.  

Razlika se sastoji u činjenici da se s ove pozicije može raditi samo na konkretnom leasingu koji, dok u slučaju računovodstvenih postupaka modula, u odgovarajućem obrascu, sve najamnine koje još treba platiti bit će moguće pretraživati i odabrati leasing prisutan u bazi podataka. 

Knjiženje maxicanona vrši se samo jednom (također nakon i neovisno o knjiženju kanona).

Za obračun naknada moguće je odabrati ratu koja se obračunava i, nakon potvrde za nastavak, tražit će se ispunjenje u dijaloškom okviru s brojem dokumenta i datumom dokumenta u koji ćete unijeti reference na primljeni račun za dospjele naknade.  

Predložak knjiženja koji će se koristiti definiran je u tablici Vrste leasinga, ali je shema knjiženja fiksna i vođena logikom postupka. 

Oba postupka također se mogu povratiti s ove pozicije uobičajenom logikom vraćanja knjiženja.  

### Izračunajte plan amortizacije 

Pritiskom na ovu tipku postupak će na temelju glavnih polja zaglavlja, tj. datuma uvjeta, broja obroka/rata, vrijednosti imovine, kamatne stope izračunati amortizacijski plan metodom stalnih obroka/rata.

:::tip PAŽNJA:
ne uzima u obzir maksimalnu naknadu koja se mora smatrati dodatnim početnom predujmom (često jednaka jednoj ili dvije naknade u smislu vrijednosti).  
:::

Otvara se obrazac u koji se upisuje (ponovno ako se razlikuje od onog koji je već umetnut u zaglavlju) **datum prve rate**, broj **mjeseci odstupanja** između jedne rate i druge (što određuje periodičnost rate, npr. 1 = mjesečno, 2 = dvomjesečno, 3 = tromjesečno itd...).   

**Trošak rate**: ad esempio spese di incasso ecc... che vengono aggiunte per ogni rata nell'apposita colonna del dettaglio. 

Ova se tipka također može koristiti za ponovni izračun i ažuriranje amortizacijskog plana, pod uvjetom da naknade još nisu obračunate.  

**Promjena datuma vrednovanja**: koristi se za promjenu samo datuma naknada i/ili relativne periodičnosti bez ponovnog izračunavanja cijelog plana (gdje su se također mogle izvršiti ručne promjene vrijednosti). Traži se samo datum i periodičnost prvog najma.  

**Ažuriraj troškove rate**: koristi se za promjenu provizije (primjer troškova naplate rate) na svim linijama bez ponovnog izračuna cijelog plana ili potrebe za ručnim ažuriranjem svih linija (uvijek je moguće). U dijalogu se traži samo nova vrijednost obročne provizije (Instalment cost).  