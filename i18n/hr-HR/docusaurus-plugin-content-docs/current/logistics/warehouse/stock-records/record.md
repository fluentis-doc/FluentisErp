---
title: Novi zapis
sidebar_position: 3
---

Ovaj obrazac se otvara:  
- putem putanje **Logistika > Skladište > Evidencija > Nova evidencija**  
ili    
- klikom na gumb **Novo** na obrascu pretraživanje **Evidencija**.

## Automatsko stvaranje evidencija

Evidencije skladišta mogu se automatski stvarati putem *postupaka učitavanja* dostavnica, faktura nabave, primitaka robe, putem postupaka *pražnjenja* otpremnica, fakture prodaje, liste izdavanja robe, liste preuzimanja materijala, primopredajnih lista za rad na osnovu naloga, ili putem *postupaka evidentiranja proizvodnih naloga i povrata rada*. 

## Ručno stvaranje evidencije 

Korisnik također može ručno unijeti evidencije skladišta, postavljajući sve potrebne podatke ovisno o vrsti artikla i vrsti uzroka koje se odluči koristiti.

Prozor za novu evidenciju skladišta sastoji se od 2 kartice: **Evidencija** i **Protustavka**.

:::note NAPOMENA
Kartica **Protustavka** aktivna je samo ako razlog unesen u prvoj kartici ima pridruženi razlog za protustavku u odgovarajućoj tablici *Skladišni razlog*.
:::

Unutar evidencije skladišta mogu se unijeti različiti pokreti skladišta za različite artikle i s različitim vrstama upravljanja.

## Registracija 

Ova kartica sastoji se od zaglavlja i 4 različite mreže, od kojih je prva ona u koju se unose artikli koji se kreću putem evidencije skladišta; ostale 3 mreže koriste se ovisno o tome kako su postavljeni podaci o artiklu i uzrok evidentiranja skladišta unesen u zaglavlje.

### Registracija  – fiksni odjeljak

**Skladište**: predstavlja šifru skladišta na kojem se vrši evidencija;     
**Predložak skladišta**: obvezni podatak za unosenje pokreta skladišta. Odabire se koristeći odgovarajući padajući izbornik, u kojem se nude samo uzroci povezani s odabranim skladištem;    
**Datum registracije**: automatski se nudi trenutni datum i posebno identificira dan kada se vrše pokreti skladišta koji će biti uneseni u odgovarajući prikaz, pa ga je moguće mijenjati postavljanjem, na primjer, prethodnog datuma od trenutnog. Međutim, ovaj datum uvijek mora biti između datuma Početka i Završetka razdoblja unesenih u prvom odjeljku *Početni parametri skladišta*;   
**Broj registracije**: automatski se nudi; to je progresivni broj za skladište koji se svakodnevno vraća na nulu, automatski počinjući s brojem 1. Oba podatka mogu se uređivati od strane korisnika;

:::note NAPOMENA
Nakon unosa prvog artikla u mrežu, datum i broj evidencije postaju samo za čitanje.  
Nakon unosa ovih podataka, korisnik može nastaviti s unosom pokreta u mrežu artikala. Međutim, postoje i drugi podaci zaglavlja koje se mogu popuniti, a to su
:::

**Interni dokument**: u ovom polju korisnik može dodatno specificirati razlog za stvaranje evidencije. Ako je evidencija stvorena automatski iz *evidencije proizvodnje*, u ovom polju će se prikazati uputa o broju evidencije i fazi za koju je evidencija izvršena; u polju datuma **Internog dokumenta** korisnik može odrediti datum dokumenta na temelju kojeg unosi evidenciju. Ako je evidencija stvorena automatski putem *učitavanja* ili *pražnjenja* dokumenta, automatski će se postaviti datum unosa dokumenta.  
Ako je evidencija stvorena automatski iz *evidencije proizvodnje*, u ovom polju će se pojaviti datum stvarnog početka narudžbe za koju je stvorena evidencija proizvodnje.

**Verzija**: putem ovog padajućeg izbornika korisnik može postaviti drugačiju verziju od zadane, automatski ponuđenu postupkom;

**Račun**: u ovim 3 polja navedeni su odgovarajući podaci o *Klijentu/Dobavljaču: račun, podračun, naziv firme*.  
Ako je evidencija stvorena automatski putem *učitavanja* ili *pražnjenja* dokumenta, automatski će se postaviti podaci o kupcu ili dobavljaču koji je vlasnik dokumenta.

**Referentni dokument**: u ovom polju korisnik može navesti dokument koji je generirao samu evidenciju.  
Ako je evidencija stvorena automatski putem *učitavanja* ili *pražnjenja* dokumenta, automatski će se postaviti opis parametara dokumenta, koji uključuje i opis vrste dokumenta i njegov broj.
Ako je evidencija stvorena automatski iz *evidencije proizvodnje*, u ovom polju će se prikazati broj narudžbe proizvodnje za koju je stvorena evidencija proizvodnje.

**Projekt**: dvostrukim klikom otvara se *pomoćnik projekata* koji omogućuje povezivanje projekta s cijelom evidencijom koju unosite. To će se zatim replicirati u svakom retku artikla unesenom u mrežu;

**Napomena**: U ovom polju možete unijeti slobodnu napomenu vezanu uz evidenciju skladišta.  
Kao što je već gore navedeno, korisnik može sada preći na unos pokreta u prvu mrežu, onu koja će sadržavati artikle za kretanje.

### Artikli 

U prvom mrežnom prikazu korisnik može unijeti, koristeći *pomoć Artikala*, popis artikala za kretanje.  

**Broj kretanja**: u ovoj koloni se prikazuje progresivni broj kretanja. Uvijek počinje s 1 i jednostavno se resetira kada se otvori druga evidencija skladišta. Ovo polje je samo za čitanje i ne dopušta ručno dobivanje brojeva kretanja u slučaju ručnog brisanja redova kretanja;

**Klasa**: u ovom polju, putem odgovarajućeg padajućeg izbornika, možete odabrati klasu artikla;

**Šifra artikla**: u ovoj koloni možete ručno unijeti šifru ili koristiti pomoć *Artikala*;

**Varijanta**: putem ovog padajućeg izbornika korisnik može odabrati i unijeti jednu od varijanti artikla. Ako artikal nema varijante, padajući izbornik će biti onemogućen;

**Jedinica mjere**: u ovoj koloni se, u samo za čitanje, prikazuje kod upravljanja jedinice mjere artikla;

**Alternativna jedinica mjere**: u ovoj koloni korisnik može odabrati, putem odgovarajućeg padajućeg izbornika, kod jedne od alternativnih jedinica mjere artikla, ako postoje, kako bi se izvršilo kretanje unoseći količinu u odabranoj alternativnoj jedinici mjere. Količina upravljanja će u ovom slučaju biti automatski izračunata na temelju faktora konverzije postavljenog u kartici *Artikla > tablica Alternativne jedinice mjere*;

**Količina kretanja**: u ovoj koloni korisnik mora obvezno unijeti količinu kretanja izraženu u upravnoj jedinici mjere ako je kolona *Alt. J.M.* prazna; u suprotnom, količina bi bila izražena u alternativnoj jedinici mjere unesenoj u koloni *Alt. J.M.* Nakon što korisnik unese šifru artikla i prepozna ga kao valjanu proceduru, količina kretanja će biti automatski unesena kao jednaka 1; tada korisnik može promijeniti tu količinu. Količina kretanja uvijek se mora unijeti u apsolutnoj vrijednosti, jer je točno je li kretanje utovar ili pražnjenje određuje vrsta uzroka korištenog;

**Operativna količina**: u ovoj koloni se, u samo za čitanje, prikazuje količina izražena u upravnoj jedinici mjere artikla. To je isto kao količina kretanja ako je kolona *Alt. J.M.* prazna; inače, kolona postaje promjenjiva, i korisnik mora ručno unijeti upravnu količinu, a zatim će automatski biti izračunata količina kretanja, koja će imati vrijednost jednaku količini upravljanja podijeljenoj ili pomnoženoj (ovisno o postavkama u *Početnim parametrima skladišta*) faktorom konverzije postavljenim u kartici *Artikla > tablica Alternativne jedinice mjere*;

**Iznos kretanja**: u ovoj koloni se automatski prikazuje vrijednost *posljednjeg troška, prosječnog troška, standardnog troška* ili *prodajne cijene*, ovisno o postavkama uzroka skladišta korištenog u evidenciji.  

Ako uzrok predloži *Nijedan* kao trošak, postupak će predložiti trošak evidencije kao nulu.    

Ako je kolona *Alt. J.M.* prazna, iznos kretanja uvijek će biti isti kao iznos upravljanja; inače, u ovoj koloni treba unijeti pojedinačnu cijenu artikla na temelju alternativne jedinice mjere unesene u retku kretanja.  

Ako je za trenutnu godinu u *Početnim parametrima skladišta* omogućena opcija *Prikaži skočni prozor stanja u evidencijama*, postupak će prikazati u skočnom prozoru stanje tog artikla u skladištu u kojem se stvara pokretanje, točno u trenutku kada korisnik unosi ili mijenja količinu.   

Ako stanje nije dovoljno i za trenutnu godinu u *Početnim parametrima skladišta* onemogućena je opcija *Dopusti negativno stanje* za to skladište, redak kretanja neće biti spremljen.

**Operativni iznos**: U ovoj koloni se automatski prikazuje vrijednost *posljednjeg troška*, *prosječnog troška*, *standardnog troška* ili *prodajne cijene*, ovisno o postavkama uzroka skladišta korištenog u evidenciji.
Ako uzrok predloži *Nijedan* kao trošak, postupak će predložiti trošak evidencije kao nulu.

Ako je kolona Alt. J.M. prazna, iznos upravljanja uvijek će biti isti kao iznos kretanja; inače, u ovoj koloni, uvijek je samo za čitanje, izračunavat će se pojedinačna cijena kretanja na temelju upravne jedinice mjere, putem sljedeće formule: *Kretanje Iznosa * Količina kretanja / Količina upravljanja*.

**Projekt**: u ovoj koloni korisnik može unijeti, pomoću *pomoći projekata* koja se otvara dvostrukim klikom na žuti polje, prodajni zadatak koji treba povezati s retkom kretanja;

**Ukupan iznos**: u ovoj koloni prikazuje se, ne može se uređivati, ukupni iznos reda kretanja. On se dobiva množenjem upravne količine s upravnim iznosom;

**Opis artikla**: u ovoj koloni prikazuje se opis artikla. On se automatski postavlja čim korisnik unese artikl prepoznat u mreži;

**Opis varijante**: u ovoj koloni prikazuje se opis varijacije artikla. On se automatski postavlja čim korisnik unese kod varijacije artikla prepoznat u mreži;

**Napomene**: u ovom polju korisnik može unijeti slobodnu napomenu koja se odnosi na pojedini redak unosa u skladište;

**Lokacija**: u ovom polju navodi se lokacija s koje će se preuzeti ili na koju će se dodati artikl, ovisno naravno o vrsti skladnog događaja (ulaz / izlaz);

**Neto težina**: prikazuje se ukupna neto težina artikla. Prikazuje se neto težina opisa artikla pomnožena s količinom retka;

**Bruto težina**: prikazuje se ukupna bruto težina artikla. Prikazuje se bruto težina opisa artikla pomnožena s količinom retka;  
Kada korisnik spremi redak kretanja, postupak može ispravno izvršiti spremanje i omogućiti sljedeći redak za unos novog kretanja, ili može zahtijevati od korisnika da dovrši unos putem učitavanja serija i / ili serijskih brojeva u odgovarajuće podređene mreže.

### Lotovi i serijski brojevi 

**Lotovi**

U ovom polju, aktivnom samo ako je korišteni skladišni događaj imao aktiviranu značajku *Upravljanje lotovima* i ako je i artikl označen kao artikl koji se upravlja serijama, korisnik mora obvezno unijeti informacije o seriji ili serijama koje treba kretati.

Kao što znamo, registracija skladišta može biti ulazna ili izlazna; ovisno o 2 različita slučaja, mreža lotova ima različite upotrebe i postavke.

> *1° slučaj: Registracija ulaza*

Kada korisnik spremi redak kretanja, postupak ostavlja redak u ažuriranju, pozivajući korisnika da se premjesti u mrežu Serije i navede pojedinosti o serijama koje treba dodati.

Stupci prisutni u mreži su sljedeći:

**Tip šifre serije**: u ovom se stupcu unosi tip koda serije unesen u opis artikla;

**Tip serije**: u ovom se stupcu opcionalno može unijeti od strane korisnika Tip serije, putem odgovarajuće padajuće liste, koja crpi iz tablice s istim imenom. Ipak, to je podatak koji nije obavezan

**Broj serije**: u ovom se stupcu unosi kod serije koju treba dodati, konstruiran prema pravilima postavljenim u *Početnim postavkama skladišta* povezanim s unesenim tipom *koda lota*. Polje je žute boje jer bi korisnik mogao odlučiti izvršiti novi ulaz serije koja već postoji u bazi podataka; u tom slučaju dvostrukim klikom na žuto polje korisnik bi, putem odgovarajuće *pomoći lota*, mogao odabrati seriju koju treba dodati, filtrirajući je među serijama upravljanim do tog trenutka u bazi podataka i u tvrtki u kojoj radi;

**Šifra serije dobavljača**: u ovom se stupcu ručno unosi kod serije dobavljača, obično naziv koji dobavljač dodjeljuje seriji. Ovo je polje koje se ne može automatski generirati tijekom operacija ulaska i nije obavezno. U slučaju unosa koda serije putem pomoći serija, ovaj stupac automatski bi bio popunjen *kodom lota* dobavljača povezanog s odabranom serijom;

**Datum početka**: u ovom polju prikazuje se isti datum kao i datum registracije skladišta, koji korisnik može uređivati. U slučaju unosa koda serije putem pomoći serija, ovaj bi se stupac automatski popunio datumom početka odabrane serije;

**Datum dospijeća**: u ovom polju prikazuje se datum isteka lota, koji korisnik može urediti, a koji se izračunava, polazeći od datuma početka i dodajući dane valjanosti lota unesene u kartici *Lotovi/SN* opisa artikla. U slučaju unosa šifre lota putem pomoći lota, ovaj bi se stupac automatski popunio datumom isteka odabranog lota;

**Količina**: u ovom polju se prikazuje količina koju korisnik želi dodijeliti unesenom lotu. U slučaju automatskog stvaranja lota pritiskom na gumb 'Auto', količina se automatski popunjava s količinom sadržanom u retku kretanja; međutim, korisnik je može urediti, smanjiti je, i zatim pritisnuti 'Auto' na sljedećem retku: na taj način bi se stvorio novi lot, sličnih karakteristika kao i prethodni lot, ali s drugačijom šifrom Lota;

**Lot koji se može prodavati (lot za prodaju)**: ako je aktivno, označava da je lot dostupan za preuzimanje u dokumentima prodaje, proizvodnje ili zapisima skladišta. To praktično omogućuje korisniku da odredi mogućnost preuzimanja ili nekorištenja lota, kao alternativu složenijem i detaljnijem upravljanju stanjem lota. Dakle, u slučaju automatskog punjenja lota, zastavica je automatski aktivirana, iako korisnik već u ovom trenutku može odlučiti deaktivirati je, čime bi lot bio već nedostupan;

**Napomena**: u ovom polju korisnik može unijeti napomenu o lotu koji se učitava. U slučaju unosa šifre Lota putem *Pomoći za Lote*, ovaj stupac bi se automatski ispunio napomenom povezanom s odabranim lotom;

Nakon što korisnik dovrši unos lotova u prikaz Loti, osiguravajući da je količina retka kretanja jednaka zbroju količina učitanih lotova, korisnik može spremiti redak kretanja bez primanja poruka o pogrešci od postupka.

> *2° slučaj: Registracija pražnjenja*

Kada korisnik spremi redak kretanja, postupak ostavlja redak u ažuriranju, pozivajući korisnika da se premjesti u mrežu Lotti i navede pojedinosti o lotovima koji se trebaju prazniti.

Stupci prisutni u mreži su sljedeći:

**Broj serije**: u ovom stupcu dvostrukim klikom na žuti polje korisnik ima mogućnost, putem odgovarajuće *pomoći za lote*, odabrati lot za pražnjenje filtriranjem među dostupnim lotovima u skladištu registracije;

**Šifra dobavljača Lota**: ovaj stupac automatski se popunjava s šifrom *dobavljača* povezanim s odabranim *lotom*;

**Datum početka**: u ovom polju prikazuje se datum početka odabranog lota;

**Datum isteka**: u ovom polju prikazuje se datum isteka odabranog lota;

**Količina**: u ovom polju prikazuje se količina koja se želi pražniti od odabranog lota. Ona je editabilna od strane korisnika, koji može odlučiti smanjiti je, i zatim pretražiti pomoću loto-a na donjem retku;

**Lokacija**: u ovom polju prikazuje se lokacija na kojoj je odabran lot učitan. Nakon što korisnik dovrši unos lotova koji se prazni u prikazu *lotova*, osiguravajući da je količina retka kretanja jednaka zbroju količina pražnjenih lotova, korisnik može spremiti redak kretanja bez primanja poruka o pogrešci od postupka.

**Serijski broj**

U ovoj mreži, aktivna samo ako je korištena skladišna stavka označena zastavicom *Upravljanje lotovima* i ako je artikl također označen kao artikl koji se upravlja serijskim brojevima, korisnik mora obvezno unijeti informacije povezane s serijskim brojevima koje treba kretati.

Kao što znamo, evidentiranje u skladištu može biti učitavanje ili pražnjenje; ovisno o 2 različita slučaja, mreža Numeričkih Serijskih brojeva ima različite upotrebe i postavke.

> *1°  slučaj: Evidentiranje učitavanja*

Kada korisnik spremi redak kretanja, postupak ostavlja redak u "update", pozivajući korisnika da se premjesti u mrežu Numeričkih Serijskih brojeva i da navede pojedinosti o serijskim brojevima koje treba učitati.

Stupci prisutni u mreži su sljedeći:

**Vrsta serijskog broja**: u ovom stupcu automatski se upisuje tip serijskog broja unesenog u članku. Međutim, može ga urediti korisnik.

**Serijski broj**: u ovom stupcu korisnik unosi serijski broj koji treba učitati, konstruiran prema pravilima postavljenim u *Početnim parametrima skladišta* povezanim s tipom serijskog broja unesenim. Međutim, korisnik ga može urediti.

**Serijski broj kupca**: označava serijski broj koji koristi klijent;

**Serijski broj dobavljača**: označava serijski broj koji koristi dobavljač;

**Datum početka**: označava datum početka valjanosti serijskog broja; 

**Datum dospijeća**: označava datum isteka serijskog broja; 

**Datum posljednje izmjene**: označava datum posljednje izmjene;

**Otkazano**: označava da se serijski broj nalazi u poništenom stanju;

**Prisično zatvoreno**: označava da je serijski broj prisilno zatvoren;

**Lot**: označava broj lota koji odgovara tom serijskom broju.

Nakon što korisnik dovrši unos serija u mrežu *Numeričkih Serijskih brojeva*, osiguravajući da je količina reda kretanja jednaka broju unesenih serijskih brojeva u mrežu, korisnik može spremiti redak kretanja bez primanja poruka o pogrešci od postupka.

> *2° slučaj: Evidentiranje pražnjenja*

Kada korisnik spremi redak kretanja, postupak ostavlja redak u "update", pozivajući korisnika da se premjesti u mrežu Numeričkih Serijskih brojeva i navede pojedinosti o serijskim brojevima koje treba prazniti.

Stupci prisutni u mreži su sljedeći:

**Serijski broj**: u ovom stupcu korisnik mora unijeti, dvostrukim klikom na žuto polje, serijske brojeve koje treba prazniti, koristeći odgovarajuću *pomoć za serijske brojeve*;

**Datum unosa**: označava datum unosa serijskog broja;

**Serijski broj klijenta**: označava serijski broj koji koristi klijent;

**Serijski broj dobavljača**: označava serijski broj koji koristi dobavljač;

**Datum posljednje izmjene**: označava datum posljednje izmjene;

**Datum početka**: označava datum početka valjanosti serijskog broja;

**Otkazano**: označava da se serijski broj nalazi u poništenom stanju;

**Lot**: označava broj lota koji odgovara tom serijskom broju.

Nakon što korisnik dovrši unos serija koje treba prazniti u mrežu *Numeričkih Serijskih brojeva*, osiguravajući da je količina reda kretanja jednaka broju unesenih serijskih brojeva u mrežu, korisnik može spremiti redak kretanja bez primanja poruka o pogrešci od postupka.

### Centri troškova

U ovoj tablici korisnik može povezati jedan ili više centara troškova s retkom kretanja, dodjeljujući tako različite količine kretanja različitim centrima troškova.

Tablica se sastoji od stupca u kojem se nalazi polje žute boje, na koje korisnik može dvostruko kliknuti kako bi otvorio *Pomoć za Centre troškova*, putem kojeg može unijeti centar troškova u red tablice, zatim popuniti red s količinom koja se odnosi na taj centar troškova. Ako zbroj unesenih količina u redovima tablice centara troškova nije jednak upravljanom količinom retka kretanja, postupak daje upozorenje i sprječava spremanje kretanja.

### Dodatni podaci

Poziva se na dokumentaciju vezanu uz [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Protustavka

Ova je kartica identičan kartici *Registracija*, ali je aktivan samo ako je u kartici *Registracija* postavljena izdana uprava skladišta i kontrastavka. Kontrolovni računi postavljaju se u slučaju kada se želi upravljati dvostrukim kretanjem skladišta jednim zapisom. Stoga je moguće u tablici upravljanja skladištem postaviti kretanje skladišta kao kontropartitu za isporuku i obratno. 

U tablici *Protustavke* prikazuju se točno svi podaci postavljeni unutar kartice *Registracija*, s mogućnošću korisnika da mijenja samo neke od zaglavlja: unutarnji dokument, referentni dokument, prodajni nalog. 

Podaci retka kretanja moraju biti identični između oba taba; ista stvar vrijedi i za tablice Lotova, Serijskih brojeva, Varijanti i Centara troškova pojedinačnog kretanja. Samo je polje lokacije uređivo unutar taba kontrastavka.

Postoji **poseban** slučaj u kojem je u kartici *Registracija* unesen jedan proizvod, a u tabu *Protustavka* uneseni drugi proizvodi: to se događa samo kada su kretanja protustavki povezana s glavnim kretanjem omogućena postavkama *Osnovne strukture*, zastava koja omogućuje korisniku da unese proizvod u karticu *Registracija* (tako korištenjem kretanja opterećenja) i vidi njegovu osnovnu strukturu unesenu u kartici *Protustavka*, unutar kojeg će stoga biti prisutno kretanje istovara. Obrnuto je također moguće upravljati.

**Posebna** situacija koja zahtijeva upravljanje kretanjima s povezanim kontropartitama odnosi se na *automatsko pražnjenje dokumenta za dostavu posla*, koje vrši pražnjenje materijala koji se dostavljaju izvana iz skladišta sirovina (ili poluproizvoda, ovisno o slučaju) s neposrednim i trenutnim opterećenjem skladišta vanjskom tvrtkom s istim materijalima koji će onda biti korišteni za proizvodnju onoga što je traženo putem naloga za rad.

Za sve što nije pojedinosti navedene u ovom dokumentu o uobičajenom radu formi, obratite se sljedećoj vezi  [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).