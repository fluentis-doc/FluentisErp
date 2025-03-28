---
title: Upravljanje likvidnošću
sidebar_position: 6
---

Korisnost ove procedure je u pružanju jednostavnog i brzog pregleda bankovne situacije kako bi se provjerila raspoloživost za svaki bankovni račun i eventualno premjestila/odgodila obveza ili promijenila banka.  


### Načini rada: 

Postoje dvije moguće metode: sa ili bez povezivanja s novčanim tokom.

Putem novčanog tijeka također je moguće uzeti u obzir podatke preuzete iz bilance, kako bi se produžilo razdoblje analize izvan onog u računovodstvenim zapisima glavnih knjiga.

Ako se ne koristi novčani tijek, očitavat će se samo računovodstvena stanja i poslovne knjige.

:::danger PAŽNJA
Ono što korisnik vidi prilikom otvaranja obrasca je zadnja spremljena situacija, onakvom kakvom se upravljalo prošli put. Promjene koje se naprave u vrijednostima ili podacima, ako se potvrde novim spremanjem, arhivirat će početnu situaciju i pohraniti nove podatke, koji će se ponovno predložiti ponovnim otvaranjem obrasca kasnije. Prethodna izvršena obrada pohranjuje se u bazi podataka, ali trenutno još nije moguće pregledati prethodne verzije.
:::


### Specifična logika novčanog toka
Ukoliko već postoji izračunati novčani tijek i po prvi puta se otvori obrazac Upravljanja likvidnošću, korisnik može odabrati novčani tijek iz kojeg će dobiti obrađene podatke.

Nakon odabira novčanog tijek, Fluentis će uzeti salda financijskih računa kako bi ih umetnuo u gornji pregled.


**PAŽNJA: potrebno je otvoriti proširenje *Dostupne likvidnosti* kako bi se vidio popis bankovnih računa, s vrijednostima zapisa i upotrebama u portfelju.**

![](/img/it-it/finance-area/maturity-values/cash-management-1.png)

Sve ostale vrijednosti bit će preuzete s bočne ploče *Novčani tijek*,  se pretražuje pomoću tipke ***Pretraga novčanog toka***, odabirom linija i njihovim dodavanjem pomoću tipke ***Stvoriti iz novčanog toka***.

![](/img/it-it/finance-area/maturity-values/cash-management-2.png)

![](/img/it-it/finance-area/maturity-values/cash-management-3.png)

Korisnik može stvoriti novi novčani tijek pomoću tikpe ***Izračunajte novčani tok***, čime se stvara nova simulacija sa spremljenim zadanim parametrima (slično onome što se događa kada se kreiraju podaci za izvoz u drugi softver za riznicu kao što je DocFinance i obrada je ista kao i za *automatsko kreiranje novčanog tijeka*). 

U ovom slučaju, nakon završetka obrade, Fluentis će pitati ako je potrebno ažurirati podatke ili ne u *Upravljanje likvidnošću*. 

Alternativno, korisnik također može stvoriti novu simulaciju iz novčanog tijeka i zatim ponovno otvoriti proceduru za upravljanje likvidnošću: u ovom slučaju, kada se otvori *Upravljanje likvidnošću*, pojavit će se poruka s pitanjem treba li ažurirati podatke s onima iz novog novčani tijeka ili ne.

U oba slučaja, ako se podaci ne ažuriraju, ništa se neće dogoditi, ako se ažuriraju, Fluentis će provjeriti promjene u prethodnim redcima, kako bi ažurirao vrijednosti. Podaci o likvidnosti ažurirat će se s novima, a što se tiče podudaranja i drugih tokova, Fluentis provjerava postoji li taj red još uvijek, kako bi izbrisao zapis ako podudaranje više ne postoji ili će ažurirati vrijednosti (ako se promijenio ostatak ili datum isteka).

One postavke koje je korisnik prethodno napravio ručno (na primjer u polju 'iznos za koji treba platiti' ili na očekivani datum) ne prepisuju se novim podacima kako se ti podaci ne bi izgubili.

Nakon što se to učini, korisnik će moći pročitati nove zapise predviđanja s ploče novčanog tijeka i dodati ih trenutnom upravljanju.

### Specifična logika kad nema novčanog tijeka 
U ovom slučaju ništa se ne događa kada seotvori obrazac. 
Korisnik ima pristup tipki ***Ažuriraj stavku*** koji omogućuje da se usklade zapisi simulacije (donji prikaz) s obzirom na trenutnu situaciju dospijeća. Ako je dospijeće zatvoreno, bit će eliminirano iz upravljanja, inače će se ažurirati s novim preostalim ili novim datumima.

### Opća logika
#### Prikaz na vrhu
Korisnik može dohvatiti željena stanja konta iz bočne ploče *Zapis* kako bi se uključila među dostupna sredstva. Ova ploča prikazuje *Prikaz računa*, s redovima pojedinosti različitih kretanja: : odabirom retka i pritiskom na tipku ***Kreiranje iz zapisa*** Fluentis će uzeti konto i umetnuti redak sa <u>stanjem do danas</u>, <u>**a ne s iznosom određenog odabranog kretanja**</u>.
Također je moguće ručno unijeti evidenciju dostupnosti ili prebrisati valutu i/ili iznos u eurima.

:::note OSTALA MREŽNA POLJA

**Globalna kreditna linija**: : to je glavna postavka bankovnog registra

**Kreditna linija predujma**: ovo je postavka predujma bankovnog registra

**Linija kredita SBF**: ovo je SBF postavka bankovnog registra

**Saldo predujmova**: predstavlja 'Stanje predujmova na fakturi', to je ukupni iznos predstavljen u obrascu za *predujmove i naplate* (s datumom dospijeća većim od 'danas')

**Saldo SBF**: predstavlja 'Stanje predočenih računa', ukupan broj računa prikazanih u portfelju (s datumom isteka duljim od 'danas')

**Ostatak za predujmove**: predstavlja 'Preostali iznos za predujmove', razliku dviju prethodnih vrijednosti koje se odnose na predujmove na fakturi

**Ostatak za SBF**: predstavlja, razliku između dvije prethodne vrijednosti koje se odnose na učinke. 

**Dostupna likvidnost**: zbroj iznosa knjigovodstvenog stanja + predočeni računi 

**Progresivna likvidnost**: to je progresivna linija prethodne vrijednosti. Vrijednost posljednjeg retka je ono što se vidi u zaglavlju proširenja.
:::

#### Donji prikaz
U donji prikaz mogu se ručno umetnuti novi redovi, čak i bez povezivanja računa (na primjer za otkrivanje neračunovodstvenih troškova/prihoda kao što su plaće ili PDV koji treba platiti). 

Polja koja se mogu uređivati su ona za *očekivani datum*, *redni broj*, *novčani iznos koji treba platiti*, flag *Isključeno* i *Sakrij*. 

Linije postaju crvene kada polje Progresivan postane negativno.  

![](/img/it-it/finance-area/maturity-values/cash-management-4.png)

**Predviđeni datum** je *očekivani datum* prisutan u dospijeću (ili je postavljen na jednak današnji dan ako je niži). Izmjena vrijednosti u ovom prikazu ovog obrasca ažurira očekivani datum unutar povezanog dospijeća (prilikom spremanja).

Ako linija dolazi iz novčanog tijeka, uzet će se od očekivanog datuma u liniji novčanog tijeka (ili danas ako je ranije).

**Datum dospijeća** je službeni datum dospijeća (ili tijeka novca). 

**Redni broj** je onaj koji postavlja retke u nalogu za plaćanje. Može se promijeniti upisivanjem nove vrijednosti ručno ili neizravno pomoću tipke **Promjenite predviđeni datum**. Ova tipka premješta odabrano dospijeće nakon onih koje već postoje na postavljeni datum, mijenjajući njihov broj na višu vrijednost.

**Konto/podkonto** se može uređivati u redovima koji su ručno uneseni, ne onima koji dolaze iz stavki/tokova.

**Bilješka** se popunjava s nazivom tvrtke kupca/dobavljača, inače će se ručno upisivati opis vanračunskog tijeka. Iznosi se ne mogu mijenjati ako su vezani uz stavke koje stižu iz financijskih stavki/tokova.  

Krajnje desno polje ***računa*** je bankovni račun podrške (preuzeto iz dospijeća ili iz toka novca).

Flag **Isključeno** isključuje redak iz izračuna, a ostavlja ga vidljivim.

Flag **Sakrij** također automatski postavlja flag *sakrij *, služi za ne brojanje retka i za njegovo sakrivanje  (putem filter flag-a u zaglavlju **Isključi skrivene**, uklanjanjem tog flag-a retci ponovno postaju vidljivi)

Krajnja desna polja povezana su s [**Razinom autorizacije**](/docs/configurations/tables/finance/authorization-levels/) (**datum autorizacije, ime, opis, šifra, opis i napomena o autorizaciji**).

### Ostale mogućnosti:
- filter prema **bankovnom računu** (u zaglavlju), pruža dostupnost pregleda te banke u gornjem prikazu;

- tipka **Promijeni banku** za masovnu promjenu referentne banke odabranih redaka; 

- tipka **Autorizirajte dospijeće** , za nastavak autorizacije (dostupno ako korisnik može dati autorizaciju odabranom redu, (prema njegovoj već dosegnutoj [**razini autorizacije**](/docs/configurations/tables/finance/authorization-levels/) già raggiunto));

- tipka **Kreiraj plaćanje** omogućuje kreiranje liste modula *Plaćanja dobavljaču*, ako su odabrani redovi plativi.
