---
title: Neuskladnost
sidebar_position: 2
---


Upravljanje se može pronaći na putanji **Kvaliteta > Nesukladnost > Nova nesukladnost** ili se može izvršiti iz **Pretrage nesukladnosti**.   


:::važno Čemu služi
Nesukladnosti se koriste za identifikaciju i dokumentiranje odstupanja od utvrđenih standarda ili zahtjeva, bilo da se odnose na proizvodnju ili uslugu.
Ovaj proces pomaže osigurati da su proizvodi, usluge ili procesi ispravni i poboljšani kako bi se održala kvaliteta i sigurnost. Također, olakšava usvajanje korektivnih radnji/mjera kako bi se spriječili budući problemi.  
*Nesukladnosti* moraju:
- utvrditi uzroke nesukladnosti;
- utvrditi postoje li ili se mogu pojaviti slične nesukladnosti;
- procijeniti potrebu za djelovanjem kako bi se uklonili uzroci nesukladnosti.  

Sljedeća izvješća su standardno dostupna:
> **Nesukladnost**: Obrazac *Nesukladnosti*;
> **8D Nesukladnost**: obrazac za popunjavanje za 8D upravljanje *Nesukladnostima*.   
:::


## Kontrolne tipke


### ![](/img/neutral/common/save.png) Spremi nesukladnost

Pritiskom na ovaj gumb spremaju se sve izmijenjene informacije o prikazanoj *Nesukladnosti*.   


### ![](/img/neutral/common/new.png) Nova nesukladnost

Pritiskom na ovaj gumb spremaju se sve izmijenjene informacije o prikazanoj *Nesukladnosti* i otvara se novi obrazac stvaranjem novog.  


### ![](/img/neutral/common/execute.png) Valorizacija nesukladnosti

Tipke prilikom pregleda kartice *Zaglavlje*.   
Moguće je kreirati *odobrenje* za *Dobavljača* ili *Kupca* kojem je dodijeljena *Nesukladnost*.   
Tipka je omogućena samo ako je *Nesukladnost* spremljena, odobrena, ako je *Nesukladnost tipa *s kupcem* ili *s dobavljačem* i ako postoji *vrijednost za naplatu*.   
Zahtjev za podatke/potvrda se pojavljuje za:
> **Kupac** ili **Dobavljač**: je primatelj novog *odobrenja* (obavezni podatak), predlaže se *Kupac* ili *Dobavljač* izvorne *Nesukladnosti*.  
> **Vrsta računa**: ovo je *Vrsta dokumenta* novog *odobrenja* (obavezni podatak); predlaže se *Vrsta računa* unesena u *Vrstu nesukladnosti* izvorne *Nesukladnosti*.   
> **Opis**: ovo je opis koji će se koristiti za redak *Trošak* novog *odobrenja* (obavezni podatak); predlaže se opis koji je parametriziran u [Parametrima nesukladnosti](/docs/quality/claims-and-non-compliance/non-compliances/procedures/non-compliance-valorisation), odjel *Reference o nesukladnosti*.   
> **PDV**: je *Vrsta PDV-a* koja će se koristiti za redak *Trošak* novog *odobrenja*.  
> Predlaže se *Vrsta PDV-a* sa sljedećim prioritetima:   
> 1. Ako postoji *Izjava o namjeri*, uzima se u obzir *Vrsta PDV-a* prisutna u dokumentu;
> 2. Ako *Izjava o namjeri* ne postoji, uzima se u obzir *Vrsta PDV-a* povezana s *Dobavljačem* *Nesukladnosti*;
> 3. Ako *Izjava o namjeri* ne postoji i *Vrsta PDV-a* povezana s *Dobavljačem* *Nesukladnosti* nije navedena, uzima se u obzir *Vrsta PDV-a* povezana s *Vrstom nesukladnosti*.  
>
> Zatim se pritisne tipka **U redu** ili **Otkaži** kako bi se odlučilo želi li se nastaviti s postupkom izrade ili ne.
> Nakon što je obrada dovršena, prikazuje se novoizrađeno *odobrenje*.


### ![](/img/neutral/common/corrective.png) Stvaranje korektivne radnje

Tipka prilikom pregleda kartice *Upravljanje nedostacima*.
Tipka je omogućena samo ako je *Nesukladnost* spremljena, odobrena i ako je odabran valjani redak *Nedostatak*.   

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />


## Upravljanje podacima

## Podaci zaglavlja dokumenta

Informacije kojima se upravlja su:   
> **Vrsta nesukladnost**: ovo je *Vrsta* dokumenta (obavezni podatak).
> Prilikom unosa nove *Nesukladnosti* predlaže se *Vrsta nesukladnosti* navedena u *Parametrima nesukladnosti*, odjeljak *nesukladnosti*.
>
> **Godina/Broj/Datum**: ovo su *Godina*, *Broj* i *Datum* *Nesukladnosti* (obavezni podaci).   
> Prilikom unosa nove *Nesukladnosti*:  
> - *Datum* se predlaže kao današnji datum;
> - *Godina* i *Broj* se predlažu na temelju *Datuma* i *Numeriranja* povezanih s *Vrstom nesukladnosti*.  
>
> **Kupac** ili **Dobavljač**: Ovo je referenca na *Kupca* ili *Dobavljača* kojem je *Nesukladnost* upućena (obavezno ako je *Vrsta nesukladnosti* *Dobavljaču* ili *Kupcu*).
> *Kupac* ili *Dobavljač* omogućen je na temelju naznačene *Vrste nesukladnosti*.   
>
> **Funkcija/Područje/Odjel**: Ovo je referenca za *Funkciju/Područje/Odjel* (obavezno ako je *Vrsta nesukladnosti* *Interna*).
> Omogućuje se na temelju naznačene *Vrste nesukladnosti*. 


## Zaglavlje

Upravljane informacije su:
> **Odgovorna osoba**: ovo je *Zaposlenik* odgovoran za *Nesukladnost*.
> Prilikom unosa nove *Nesukladnosti* prikazuje se *Odgovorna osoba* navedena u odjeljku *Parametri nesukladnosti*, *Nesukladnost*. 
>
> **Odgovorna funkcija**: Ovo je *Funkcija tvrtke* odgovorna za *Nesukladnost*.
> Prilikom unosa nove *Nesukladnosti*, predlaže se *Odgovorna funkcija* naznačena u odjeljku *Parametri nesukladnosti*, *Nesukladnost*.  
>
> **Vanjski referent**: slobodne napomene o kontakt osobi *Kupca*, *Dobavljača* ili *Funkcije/Područja/Odjela* primatelja *Nesukladnosti*.   
>
> **Proizvodno mjesto**: je referenca *Proizvodnog mjesta* gdje je pronađena *Nesukladnost*.   
>
> **Razlog**: slobodne napomene o razlogu unosa *Nesukladnosti* (obavezni podatak).   
>
> **Prijedlog rješenja**: napomene u slobodnom obliku o temi.
> Obično se koristi za označavanje predloženog rješenja primatelju *Nesukladnost*.  
>
> **Obaviješteno/Na datum**: ručni unos oznake je li *Nesukladnost* obaviještena primatelju i kojeg datuma.   
>
> **Odgovor dobavljača/interni odgovor**: Slobodne bilješke o temi.
> Obično se koristi za bilježenje bilo kakvog odgovora primatelja *Nesukladnosti* na obavijest. 
>
> **Audit**: proširenje samo za čitanje gdje su vidljive sljedeće informacije:
>> **Datum kreiranja/Ime**: ovo je datum i *A.R.M. korisnik* koji je unio *Nesukladnost*.
>> **Datum zadnje izmjene/Ime**: ovo je datum i *A.R.M. korisnik* koji je napravio posljednju izmjenu *Nesukladnosti*.   
>
> **Odobreno/Datum**: proširenje u koje se mogu unijeti podaci o odobrenju za *Nesukladnost*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može odobriti *Nesukladnost*.
>> **Odobreno**: Označava da je *Nesukladnost* *Odobrena*.   
>> Nakon odobrenja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo na današnji datum i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*
>> **Datum**: ovo je datum na koji je *Nesukladnost* *Odobrena*.   
>> Prilikom unosa datuma automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je zastavica *Odobreno*.   
>> **Ime**: Ovo je *A.R.M. korisnik* koji je odobrio *Nesukladnost*. Ove su informacije samo za čitanje.
>> **Osoba**: Ovo je *Zaposlenik* koji je odobrio *Nesukladnost*. Ove su informacije samo za čitanje.
>> **Funkcija**: Ovo je *Funkcija tvrtke* koja je odobrila *Nesukladnost*. 
>> Omogućeno samo ako je *Nesukladnost* *Odobrena*.   
>
> **Datum zatvaranja/na dan**: proširenje u koje se mogu unijeti podaci o zatvaranju *Nesukladnost*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti *Nesukladnost*.  
>> **Zatvoreno**: označava da je *Nesukladnost* *Zatvorena*.  
>> Nakon zatvaranja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo od današnjeg datuma i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*  
>> **Datum**: datum na koji je *Nesukladnost* *Zatvorena*.   
>> Prilikom unosa datuma automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je oznaka *Zatvoreno*.  
>> **Ime**: je *A.R.M. korisnik* koji je zatvorio *Nesukladnost*. Ova informacija je samo za čitanje.
>> **Osoba**: je *Zaposlenik* koji je zatvorio *Nesukladnost*. Ova informacija je samo za čitanje.
>> **Funkcija**: je *Funkcija tvrtke* koja je zatvorila *Nesukladnost*.   
>> Omogućeno samo ako je *Nesukladnost* *Zatvorena*.
>> **Obavijest o zatvaranju/Datum zatvaranja**: ručni unos oznake je li *Nesukladnost* obaviještena primatelju i kojeg datuma.  


### Referenca dokumenta

Kartica sadrži informacije o dokumentima koji su doveli do upravljanja *Nesukladnosću*. Uključene informacije su:
> **Račun**, **Primka/Otpremnica**, **Prijem robe**, **Povrat od podizvođača**, **Reklamacija**, **Godina/Narudžba/Serija** i **Broj faze/podfaze/deklaracije**:
> Sve su to reference samo za čitanje na izvorni dokument koji je stvorio *Nesukladnost*.
> U standardu, ovo je jedini dokument koji može stvoriti *Nesukladnost* i automatski postavlja referencu i *Reklamaciju*.


### Bilješke

Kartica sadrži opće i specifične bilješke o dokumentu. Sadržane informacije su:
> **Komercijalne bilješke**: slobodne bilješke o temi rezervirane za prodajno osoblje.
> **Tehničke bilješke**: slobodne bilješke obliku o temi rezervirane za tehničko osoblje.
> **Administrativne bilješke**: slobodne bilješke obliku o temi rezervirane za administrativno osoblje.


### Dodatni podaci

Moguće je umetnuti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) općenito za *Nesukladnost*.   


### Ostali troškovi

U ovoj kartici je moguće unijeti i druge troškove uz one koji proizlaze iz troška spornih stavki i troška upravljanja dokumentima.
> **Direktni troškovi**
> Popis troškova koji se izravno mogu pripisati cijeni spornih artikala, pruženoj usluzi i cijeni rada nastalog u upravljanju *Nesukladnošću*. Ovaj popis sadrži informacije o:  
>> **Element troška** i **Opis elementa troška**: moguće je odabrati samo *Element troška* s *Vrst troškova = Izravni trošak*.
>> **Vrsta troškova**: informacije samo za čitanje koje izvještavaju o *Vrsti troškova* povezanim s odabranim *Elementom troška*.
>> **Primjeni na ...**: informacije samo za čitanje koje izvještavaju na koju se komponentu troška primjenjuje *Vrijednost* (ako je izražena kao postotak); moguće dodjele su:   
>>> *Trošak materijala*: zbroj troškova stavke *Neispravnih predmeta* i *Upotrijebljenih materijala*;
>>> *Trošak stroja*, *Trošak rada* i *Trošak obrade*: zbroj troškova obrade *Neispravnih predmeta*;
>>> *Industrijski trošak*: zbroj *Ukupnog obrađenog materijala* i *Ukupnog neobrađenog materijala*.  
>>>   
>> **Postotak / Vrijednost**: informacije samo za čitanje koje određuju metodu izračuna koja će se primijeniti na *Vrijednost* (*Postotak* ili *Fiksna vrijednost*).
>> **Vrijednost**: ovo je *Postotak* koji će se primijeniti ili *Vrijednost* koja će se dodati komponenti troška navedenoj u *Primjeni na ...*.
>> **Napomena**: Napomene u slobodnom obliku.  
>>   
> **Opći troškovi**
> Popis općih troškova koji se ne mogu izravno pripisati *Nesukladnosti* i koji podržavaju cijeli poslovni proces. Ovaj popis sadrži informacije o:   
>> **Element troška** i **Opis elementa troška**: mogu se odabrati samo *Elementi troška* s *Vrsta troškova = Opći trošak*.
>> **Vrsta troškova**: informacije samo za čitanje koje prikazuju *Vrstu troškova* povezanu s odabranim *Elementom troška*.
>> **Postotak / Vrijednost**: informacije samo za čitanje koje prikazuju metode izračuna koje će se primijeniti na *Vrijednost* (*Postotak* ili *Fiksna vrijednost*).
>> **Vrijednost**: Ovo je *Postotak* koji će se primijeniti ili *Vrijednost* koja će se dodati zbroju *Ukupno obrađenog materijala* i *Ukupno neobrađenog materijala*.
>> **Napomena**: Napomene u slobodnom obliku.
>>   
> **Ostali troškovi**
> Popis ostalih troškova. Ovaj popis sadrži informacije o:
>> **Elementu troška** i **Opis elementa troška**: Mogu se odabrati samo *Elementi troška* s *Vrsta troškova = Ostali trošak*.
>> **Vrsta troškova**: informacije samo za čitanje koje prikazuju *Vrstu troškova* povezanu s odabranom *Elementom troška*.
>> **Mjerna jedinica**: ovo je *Mjerna jedinica* koja se koristi za izražavanje informacija o *Količini*.
>> **Količina**: ovo je *Količina* *Elementa troška*.
>> **Jedinična cijena**: Ovo je *Jedinična cijena* *Elementa troška*.
>> **Ukupna cijena**: Informacije samo za čitanje koje prikazuju umnožak *Količine* i *Jedinične cijene*.
>> **Napomena**: Napomene u slobodnom obliku.  


### Vrijednosti

U karticu se mogu unijeti podaci koji se odnose na dugovne i potražne dokumente za *Nesukladnost*, nastale troškove, one koji će se naplatiti i troškove koje je *Dobavljač/Kupac* priznao. Prisutni podaci su: 
> **Valuta**, **Tečaj** i **Datum valute**: Ovo je *Valuta* *Dobavljača* ili *Kupca* u kojoj su navedene sve vrijednosti dokumenta, odgovarajući tečaj prema *Valuti* *Tvrtke* i *Datum valute*.
> **Valorizirano** i **Referenca dokumenta zaduženja**: Informacije samo za čitanje koje pokazuju je li *Nesukladnost* procijenjena i referenca na generirano *odobrenje*.  
> **Referenca dokumenta odobrenja**: ovo je referenca na *odobrenje* primljeno od *dobavljača* ili *kupca*.
> **Napomene na dokumentu o odobrenju**: Slobodne bilješke o temi.   
>   
> **Ukupno neobrađeni materijal**: informacija samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*, zatražen *Automatski ukupni ponovni izračun*; predlaže se zbroj komponente troška stavke neprerađenih *Neispravnih stavki* i *korištenih materijala*.
>   
> **Ukupno obrađeni materijal**: informacija samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*, zatražen *Automatski ponovni izračun ukupnih iznosa*; predlaže se zbroj komponente troškova obrade prerađenih *Neispravnih stavki*. 
>   
> **Ukupni izravni troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Direktni troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni opći troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Ostali troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni ostali troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Ostali troškovi* na kartici *Ostali troškovi*.   
>   
> **Troškovi upravljanja**: je *Trošak upravljanja* preuzet iz *Troška upravljanja* prisutnog u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*; vrijednost se može promijeniti. 
>   
> **Ukupno nesukladnosti**: informacija samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*, zatražen *Automatski ponovni izračun ukupnih iznosa*; u tom slučaju, ukupan iznos se preračunava kao zbroj: *Ukupnog neobrađenog materijala*, *Ukupnog obrađenog materijala*, *Ukupnih izravnih troškova*, *Ukupnih općih troškova*, *Ukupnih ostalih troškova* i *Troškova upravljanja*; ako nije zatražen *Automatski ponovni izračun ukupnih iznosa*, vrijednost se mora unijeti ručno.  
>   
> **Vrijednost koja se naplaćuje**: je *Vrijednost za naplatu* *Kupcu* ili *Dobavljaču*; ako je *Automatski ukupni ponovni izračun* zatražen u *Parametrima reklamacija i neusklađenosti* za godinu datuma dokumenta, odjel *Nesukladnosti*, vrijednost se predlaže kao jednaka *Ukupnom iznosu nesukladnosti* i naknadno se može izmijeniti.    
>   
> **Prepoznata vrijednost**: ovo je vrijednost koju prepoznaje *Kupac* ili *Dobavljač*; vrijednost se može unijeti ručno. 


## Upravljanje nedostacima

Ovdje je popis pronađenih nedostataka koji će biti prijavljeni primatelju dokumenta i sastoji se od sljedećih informacija:
> **Redoslijed**: ovo je *Redoslijed* u kojem su prikazani nedostaci; prikazuje se progresivni slijed s mogućnošću promjene. 
>  
> **Ustanovljeni kvarovi**
>> **Šifra**: ovo je šifra za *Pronađeni nedostatak*; mogu se unijeti samo aktivni *Nedostaci* obuhvaćeni vrstom *Nesukladnosti* dokumenta.
>> **Opis**: ove informacije samo za čitanje opisuju *Pronađeni nedostatak*.
>> **Napomene**: slobodno definirane napomene o *Pronađenom nedostatku*. 
>  
> **Navodni uzrok**
>> **Šifra**: ovo je šifra *Pretpostavljenog uzroka* koji je generirao nedostatak; za vrstu *Nesukladnosti* dokumenta mogu se unijeti samo pretpostavljeni, aktivni i očekivani *Uzroci*; nakon analize *Neispravnih stavki*, *Pretpostavljeni uzrok* može, ali i ne mora biti potvrđen kao *Stvarni uzrok*.
>> **Opis**: ove informacije samo za čitanje opisuju *Pretpostavljeni uzrok*.
>> **Napomene**: slobodne bilješke o *Pretpostavljenom uzroku*.   
>  
> **Faza otkrivanja**
>> **Šifra**: ovo je Šifra *Faze otkrivanja* procesa u kojem je otkriven nedostatak; mogu se unijeti samo aktivne *Faze otkrivanja*.
>> **Opis**: ove informacije samo za čitanje opisuju *Fazu otkrivanja*.
>> **Napomene**: slobodne bilješke o *Fazi otkrivanja*.  
>  
> **Ozbiljnost**
>> **Šifra**: ovo je šifra za *Stupanj ozbiljnosti* dodijeljen nedostatku; mogu se unijeti samo aktivni *Stupnjevi ozbiljnosti*.
>> **Opis**: ove informacije samo za čitanje opisuju *Stupanj ozbiljnosti*.
>  
> **Zatvaranje nedostatka**
> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti upravljanje određenim *Nedostatkom*.
> Zatvaranje svih *Nedostataka* ne zatvara automatski *Nesukladnost*.  
>> **Zatvoren**: označava da je upravljanje određenim *Nedostatkom* dovršeno; operater ga mora ručno unijeti.
>> Nakon zatvaranja, automatski se prikazuje sljedeće: *Datum zatvaranja*, predložen kao današnji datum i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao povezani *A.R.M. korisnik* i *Zaposlenik* povezan s *A.R.M. korisnikom* (*Ime* i *Osoba* su informacije prisutne u proširenju *Podaci o zatvaranju nedostatka* na kartici *Podaci o nedostatku*).   
>> **Datum zatvaranja**: ovo je datum na koji je određeni *Nedostatak* dovršen.
>> Kada se unese datum, oznaka *Zatvoren* se automatski postavlja.  
>  
> **Referenca korektivne radnje**
>> **Vrsta**, **Godina** i **Broj**: Ovo su reference samo za čitanje na *Korektivnu radnju* povezanu s retkom *Nedostatka* i generiranu pomoću gumba **Stvori korektivnu radnju**. 
>   
> **Napomena**: besplatne bilješke na određenom retku *Nedostatka*.   


### Dati difetto

Sono le informazioni aggiuntive alla riga *Difetto* selezionato. Le informazioni gestite sono:   
> **Causa effettiva**: è la causa effettiva che ha generato la difettosità; è possibile inserire solamente le *Cause*, effettive, attive e previste dalla tipologia di *Non conformità* del documento.   
> **Note causa effettiva**: annotazioni libere sulla *Causa effettiva*.   
> **Soluzione proposta**: è il suggerimento di soluzione tecnica/commerciale/amministrativa da adottare; è possibile inserire solamente le *Soluzioni* attive.   
> **Note soluzione proposta**: annotazioni libere sulla *Soluzione proposta*.   
> **Decisione intrapresa**: è la decisione tecnica/commerciale/amministrativa effettuata per la risoluzione del difetto; è possibile inserire solamente le *Decisioni* attive.   
> **Note decisione intrapresa**: annotazioni libere sulla *Decisione intrapresa*.   
> **Risposta Fornitore/Interna**: annotazioni libere sull'argomento. Solitamente utilizzato per registrare un'eventuale risposta data dal destinatario della *Non conformità* relativa al *Difetto*.   
> **Dati chiusura difetto**: expander dove è possibile inserire le informazioni di chiusura del *Difetto*:   
> **Nome**: è l'*Utente A.R.M.* che ha chiuso il *Difetto*. L'informazione è di sola lettura.   
> **Persona**: è il *Dipendente* che ha chiuso il *Difetto*. L'informazione è di sola lettura.   
> **Funzione**: è la *Funzione aziendale* che ha chiuso il *Difetto*.   


### Oggetti reclamati   

E' l'elenco degli *Oggetti reclamati* associabili al *Difetto riscontrato* selezionato e si compone delle seguenti informazioni:   
> **Oggetto**   
>> **Bar code**: può essere utilizzato per aggiungere o sostituire l'Articolo, Lotto, Numero seriale e Unità di carico.   
>> Per tutte le informazioni su come codificare i barcode consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Classe**: è la *Classe articolo* reclamato.   
>> **Codice articolo**: è il codice dell'*Articolo* reclamato.   
>> **Descrizione articolo**: è la descrizione dell'*Articolo* reclamato.   
>> **Variante**: è la codice variante dell'*Articolo* reclamato.   
>> **Lotto**: è il codice del *Lotto* interno dell'*Articolo* reclamato.   
>> **Unità di carico**: è l'*Unità di carico* di origine che conteneva l'Articolo* reclamato.   
>> L'inserimento di una *Unità di carico* comporta l'automatico inserimento di tutte le righe di dettaglio *Articolo* presenti in essa.   
>> Se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Raggruppamento dati U.D.C.*, le righe con *Articoli* uguali verranno riportate in un'unica riga con le quantità sommate.   
>> **Numero seriale**:  è il *Numero seriale* dell'*Articolo* reclamato.   
>> **Unità di carico da rendere**: è l'*Unità di carico* che contiene l'Articolo* reclamato da rendere.   
>  
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* dell'*Articolo* reclamato.   
>> **Ricevuta**: è la quantità di *Articolo* ricevuta; il valore deve essere inserito manualmente.   
>> **Contestata**: è la quantità di *Articolo* che si vuole contestare; il valore deve essere inserito manualmente.   
>> **Non rilavorata**: è la quantità di *Articolo* contestata e non rilavorata; il valore deve essere inserito manualmente.   
>> **Rilavorata**: è la quantità di *Articolo* contestata e rilavorata; il valore deve essere inserito manualmente.   
>> **Resa**: è la quantità di *Articolo* resa; il valore deve essere inserito manualmente.   
>  
> **Quantità alternativa**   
>> Le colonne di questo gruppo sono visualizzate solamente se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stata richiesta la *Proposta U.M. alternativa*.   
>> **Unità di misura**: è l'*Unità di misura alternativa* dell'*Articolo* reclamato.   
>> **Unità di misura prezzo**: indica se il *Costo unitario del materiale* è riferito all'*Unità di misura alternativa*.   
>> **Ricevuta**: è la quantità di *Articolo* ricevuta espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Contestata**: è la quantità di *Articolo* che si vuole contestare espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Non rilavorata**: è la quantità di *Articolo* contestata e non rilavorata espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Rilavorata**: è la quantità di *Articolo* contestata e rilavorata espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Resa**: è la quantità di *Articolo* resa espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>
> **Costo unitario**   
>> **Materiale**: è il *Costo unitario* dell'*Articolo*; il valore deve essere inserito manualmente.   
>> **Lavorazione**: è il *Costo unitario* della *Lavorazione*; viene proposto pari alla tariffa associata ai *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*; il valore può essere variato.   
>  
> **Ore**   
>> **Lavorate**: sono le ore e i minuti lavorati per la riparazione dell'*Oggetto* non conforme; il valore deve essere inserito manualmente.   

#### Dati oggetto

Sono le informazioni aggiuntive alla riga dell'*Oggetto reclamato* selezionato. Le informazioni gestite sono:   
> **Progetto**: è il riferimento al *Progetto* del *Difetto* specifico*.   
> **Note articolo**: annotazioni libere sull'*Articolo* del *Difetto* specifico*.   
> **Note lotto**: annotazioni libere sul *Lotto* del *Difetto* specifico*.   
> **Note unità di carico**: annotazioni libere sulla *Unità di carico* riga del *Difetto* specifico*.   
> **Note**: annotazioni libere sulla riga del *Difetto* specifico*.   
> **Centro di lavoro**: è il *Centro di lavoro* con il quale vengono effettuate le lavorazioni di riparazione dell'*Oggetto* non conforme.   
> La scelta del *Centro di lavoro* proporrà, nel *Costo unitario lavorazione*, la tariffa da applicare al tempo dedicato alla lavorazione.   
> La tariffa proposta è la somma delle tariffe dei *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*.   
> **Totale materiale non rilavorato**: informazione di sola lettura, viene proposto il valore del prodotto tra la *Quantità non rilavorata" e il *Costo unitario materiale* dell'*Oggetto difettoso* selezionato.   
> **Totale materiale rilavorato**: informazione di sola lettura, viene proposto il valore del prodotto tra la *Quantità rilavorata" e il *Costo unitario lavorazione* sommato al prodotto tra le *Ore lavorate* e la somme delle tariffe associate ai *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*.   
> **Totale difetto**: informazione di sola lettura, è la somma di *Totale materiale non rilavorato* e *Totale materiale rilavorato*.   


#### Extra data   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Oggetto reclamato* selezionato.   


#### Documenti allegati   

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Oggetto reclamato* selezionato.   


### Materiali utilizzati   

In questo elenco è possibile indicare i materiali che sono stati utilizzati per porre rimedio al *Difetto* selezionato.   
L'elenco si compone delle seguenti informazioni:   
>   
> **Articolo**   
>> **Classe**: è la *Classe articolo*.   
>> **Codice**: è il codice dell'*Articolo*.   
>> **Descrizione**: è la descrizione dell'*Articolo*.   
>> **Variante**: è la codice variante dell'*Articolo*.   
>> **Lotto**: è il codice del lotto interno utilizzato.   
>> **Numero seriale**:  è il numero seriale utilizzato.   
>   
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* dell'*Articolo*.   
>> **Quantità consumata**: è la quantità di *Articolo* utilizzata per porre rimedio al *Difetto* selezionato.   
>   
> **Valore**   
>> **Costo unitario**: è il costo unitario dell'*Articolo*; il valore deve essere inserito manualmente.   
>> **Costo totale**:  viene proposto come rapporto tra *Quantità consumata* e *Costo unitario*; il costo può essere variato.   
>
> **Note**: annotazioni libere.   


### Soggetti coinvolti   

Nel tabulatore sono contenute le indicazioni sulle *Funzioni aziendali* e/o *Dipendenti* che prenderanno parte alla gestione del *Difetto" selezionato.   
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la *Sequenza* di visualizzazione dei "Soggetti coinvolti*; viene proposto un progressivo con la possibilità di essere variato.   
>
> **Funzione aziendale**   
>> **Codice**: è il codice della *Funziona aziendale* coinvolta.   
>> **Descrizione**: è la descrizione della *Funziona aziendale* coinvolta.   
>   
> **Dipendente**   
>> **Codice**: è il codice del *Dipendente* coinvolto.   
>> **Descrizione**: è il cognome e nome del *Dipendente* coinvolto.   
>   
> **Gestione coinvolgimento**   
>> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto coinvolto, non sia *Funziona aziendale* o *Dipendente*.   
>> **Motivo del coinvolgimento**: annotazioni libere sull'argomento   
>> **Data scadenza**: è la data entro la quale il soggetto coinvolto deve completare le attività inerenti al motivo del suo coinvolgimento.   
>> **Risposta**: annotazioni libere sull'argomento.   
>> **Chiuso**: indica che il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* della *Non conformità* o la *Funzione aziendale* o il *Dipendente* coinvolto possono chiudere il coinvolgimento.   
>> All'atto della chiusura viene automaticamente proposta la *Data chiusura*, proposta alla data odierna e può essere variata.   
>> **Data chiusura**: è la data in cui il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* della *Non conformità* o la *Funzione aziendale* o il *Dipendente* coinvolto possono inserire o variare questa data.   
>> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso*.   
>
> **Nota**: annotazioni libere.   


### Extra data   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Difetto* selezionato.   


### Documenti allegati   

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Difetto* selezionato.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   