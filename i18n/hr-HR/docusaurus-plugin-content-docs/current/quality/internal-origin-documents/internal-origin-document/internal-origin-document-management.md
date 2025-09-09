---
title: Dokumenti unutarnjeg podrijetla
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvaliteta > Dokumenti unutarnjeg podrijetla > Novi dokument unutarnjeg podrijetla**, ili se može izvršiti iz **Pretraživanja dokumenata unutarnjeg podrijetla**.   


:::important Čemu služi
Upravljanje dokumentima unutarnjeg podrijetla omogućava: katalogizaciju, upravljanje izdanjima/revizijama te njihovu distribuciju (u papirnatom i elektroničkom formatu) poslovnim funkcijama koje su zainteresirane za pregled tih dokumenata.   

Nekoliko primjera dokumenata unutarnjeg podrijetla koji se mogu katalogizirati:  
> *Priručnik kvalitete*  
> *Politika upravljanja*  
> *Organigram*  
> *Shema procesa*  
> *Operativne upute*  
> *Servisna kartica*   

Informacije o mjestu pohrane originala i mogućnost priloženja njihovih elektroničkih kopija omogućuju njihovu trenutnu pronalažljivost i pregled jednostavnim klikom miša.

Kao standard, dostupna su izvješća:  
> **Naslovna stranica**: kartica koja za svaki *Dokument* prikazuje popis provedenih *Revizija* i *Distribucijsku listu*.  
> **Interni dokument**: pregled dokumenta priloženog u kartici *Prilog* i kreiranog u kartici *Kreiranje dokumenta*.  
> **Dokumenti priloženi dokumentaciji**: pregled dokumenata priloženih u *Upravljanju dokumentacijom*.  
:::


## Tipke za upravljanje


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku spremaju se sve izmijenjene informacije prikazanog *Dokumenta unutarnjeg podrijetla*.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj

Tipka je omogućena samo za članove *Poslovnih funkcija* zaduženih za *provjeru/odobravanje* i *izradu/izdavanje*. 
Moguće je duplicirati prikazani *Dokument* u novi *Dokument*. 
Dovoljno je pritisnuti tipku **Dupliciraj**. Prikazat će se zahtjev za unos:
> **Kategorija**: *Šifra kategorije dokumenta unutarnjeg podrijetla* novog *Dokumenta* (obavezni podatak).  
> **Šifra**: *Šifra* novog *Dokumenta* (obavezni podatak).  
> **Naslov**: *Naslov* novog *Dokumenta* (obavezni podatak).   

*Kategorija* i *Naslov* predlažu se iz izvornog dokumenta; *Šifra* se predlaže ako je uz *Kategoriju* povezana *Automatska kodifikacija*.  
Nakon toga se pritisne tipka **OK** ili tipka **Otkaži** ako se želi nastaviti ili odustati od aktivnosti dupliciranja. 
Novi kreirani *Dokument unutarnjeg podrijetla* imat će *Izdanje* i *Reviziju* postavljene na *Nula* te status *U izradi*.  
Po završetku obrade novi *Dokument unutarnjeg podrijetla* se prikazuje.  


### Stvori novu reviziju

Tipka je omogućena samo za članove *Poslovnih funkcija* zaduženih za *provjeru/odobravanje* i *izradu/izdavanje* te ako je status izvornog dokumenta *Izdano*. Prikazat će se zahtjev za unos:  
> **Razlog revizije**: kratak opis razloga koji je doveo do revizije (obavezni podatak).  
> **Promjena u odlomcima**: opisna bilješka koja se odnosi na broj izmijenjenih odlomaka.  
> **Promjena na stranicama**: opisna bilješka koja se odnosi na broj izmijenjenih stranica.     

Nakon toga se pritisne tipka **OK** ili tipka **Otkaži** ako se želi nastaviti ili odustati od aktivnosti kreiranja.  
Stvara se novi *Dokument unutarnjeg podrijetla*, sa svim informacijama iz izvornog *Dokumenta*, ali s povećanim indeksom *Revizije* i statusom *U reviziji*. Izvorni *Dokument* ostaje na snazi sa statusom *Izdano*.  
Po završetku obrade novi *Dokument unutarnjeg podrijetla* se prikazuje.  


### Izradi novo izdanje

Tipka je omogućena samo za članove *Poslovnih funkcija* zaduženih za *provjeru/odobravanje* i *izradu/izdavanje* te ako je status izvornog dokumenta *Izdano*. Prikazat će se zahtjev za unos:  
> **Razlog revizije**: kratak opis razloga koji je doveo do revizije (obavezni podatak).  
> **Promjena u odlomcima**: opisna bilješka koja se odnosi na broj izmijenjenih odlomaka.  
> **Promjena na stranicama**: opisna bilješka koja se odnosi na broj izmijenjenih stranica.    

Nakon toga se pritisne tipka **OK** ili tipka **Otkaži** ako se želi nastaviti ili odustati od aktivnosti kreiranja.  
Stvara se novi *Dokument unutarnjeg podrijetla*, sa svim informacijama iz izvornog *Dokumenta*, ali s povećanim indeksom *Izdanja* i statusom *U reviziji*. Izvorni *Dokument* ostaje na snazi sa statusom *Izdano*.  
Po završetku obrade novi *Dokument unutarnjeg podrijetla* se prikazuje.    


### Odobriti

Tipka je omogućena samo za članove *Poslovnih funkcija* zaduženih za *provjeru/odobravanje* te ako je status izvornog dokumenta *U izradi* ili *U reviziji*.  
Nakon zahtjeva za potvrdu obrade i po završetku obrade, *Dokument unutarnjeg podrijetla* prelazi u status *Odobreno*.     


### Izdavanje

Tipka je omogućena samo za članove *Poslovnih funkcija* zaduženih za *izradu/izdavanje* te ako je status izvornog dokumenta *Odobreno*.  
Nakon zahtjeva za potvrdu obrade i po završetku obrade, *Dokument unutarnjeg podrijetla* prelazi u status *Izdano* i automatski se prikazuje pregled ispisa *Naslovna stranica*.    


### ![](/img/neutral/common/bill.png) Distribucija

Tipka pokreće postupak *Distribucije* *Dokumenta*.  
Prikazuje se zahtjev za filtriranje tko će, među primateljima prisutnima u *Distribucijskoj listi*, primiti kopiju *Dokumenta*:  
> **Tip:**  
>> **Papirnata**: distribucija primateljima koji zahtijevaju papirnatu kopiju;  
>> **Elektronička**: distribucija primateljima koji zahtijevaju e-mail.
>
> **Status:**  
>> **Već isporučeno**: distribucija primateljima koji su već primili dokument;  
>> **Još za isporučiti**: distribucija primateljima koji još nisu primili dokument;    
>
> **Primatelj:**  
>> **Interni**: distribucija samo unutarnjem osoblju (*Poslovne funkcije* i/ili *Zaposlenici*);  
>> **Klijenti/Dobavljači**: distribucija *Klijentima/Dobavljačima*.  

Nakon toga se pritisne tipka **OK** ili tipka **Otkaži** ako se želi nastaviti ili odustati od aktivnosti distribucije.   


### Otkaži dokument

Tipka je omogućena samo za članove *Poslovnih funkcija* zaduženih za *izradu/izdavanje* te ako je status izvornog dokumenta *Izdano*.  
Nakon zahtjeva za potvrdu obrade i po završetku obrade, *Dokument unutarnjeg podrijetla* prelazi u status *Poništeno*.     


### Ponovi otkazivanje

Tipka je omogućena samo za članove *Poslovnih funkcija* zaduženih za *izradu/izdavanje* te ako je status izvornog dokumenta *Poništeno*.  
Nakon zahtjeva za potvrdu obrade i po završetku obrade, *Dokument unutarnjeg podrijetla* prelazi u status *Izdano*.     


## Upravljanje podacima


### Podaci zaglavlja

Informacije koje se mogu upravljati su:  
> **Kategorija dokumenta**: *Kategorija dokumenta unutarnjeg podrijetla* *Dokumenta* (obavezni podatak).  
> Unošenjem kategorije, informacije o Lokaciji, Poslovnim funkcijama za provjeru/odobravanje i izradu/izdavanje, *Distribucijskoj listi* i podaci o *Pristupu dopuštenim funkcijama* nasljeđuju se u *Dokument* i naknadno se mogu mijenjati.  
>
> **Šifra**: je *Šifra* *Dokumenta* (obavezni podatak); ako je u pripadajućoj Kategoriji postavljen način automatskog kodiranja, šifra se predlaže s mogućnošću izmjene, inače se može unijeti ručno, ali samo ako je dokument u statusu *U izradi*, inače je informacija samo za čitanje.    
>
> **Izdanje/Revizija**: označava Izdanje i Reviziju *Dokumenta*. Informacije su samo za čitanje.  
Informacije su moguće mijenjati ako je dokument u statusu *U izradi*, inače su samo za čitanje; mogu se automatski mijenjati putem tipki *Kreiraj novo izdanje* i *Kreiraj novu reviziju*, koje povećavaju prethodnu vrijednost *Izdanja* i *Revizije* za jednu jedinicu.   
>
> **Naslov**: *Naslov* *Dokumenta* (obavezni podatak).    
>
> **Status dokumenta**: označava *Status* *Dokumenta* i prikazuje trenutačni status *Dokumenta*. Informacija je samo za čitanje.  
> Statusi dokumenta su unaprijed definirane vrijednosti u sustavu koje identificiraju različite faze upravljanja *Dokumentom unutarnjeg podrijetla*.  
> Unaprijed definirane vrijednosti su:  
> - **U izradi**: postavljeno prilikom kreiranja novog dokumenta;  
> - **Odobreno**: postavljeno prilikom *provjere/odobravanja* dokumenta u statusu *U izradi* ili *U reviziji*;  
> - **Izdano**: postavljeno prilikom *izrade/izdavanja* dokumenta u statusu *Odobreno* ili prilikom *ponovnog vraćanja poništenog* dokumenta;  
> - **U reviziji**: postavljeno prilikom *kreiranja novog izdanja/revizije* dokumenta u statusu *Izdano*;  
> - **Zastarjelo**: postavljeno za dokument u statusu *Izdano*, koji je izvor zahtjeva za *kreiranje novog izdanja/revizije*, prilikom njegove *izdaje*;  
> - **Poništeno**: postavljeno prilikom *poništavanja* dokumenta u statusu *Izdano*.    
>
> **Od datuma**: datum kada je *Dokument* preuzeo trenutačni *Status*. Informacija je samo za čitanje.  
> **Od korisnika**: *ARM korisnik* koji je promijenio *Status* *Dokumenta*. Informacija je samo za čitanje.   
>
> **Informacije o reviziji**: proširivi odjeljak gdje je moguće pregledati/unijeti:   
>
>> **Datum kreiranja/Kreirao**: datum kreiranja i *ARM korisnik* koji je kreirao dokument. Informacija je samo za čitanje.  
>> **Datum odobrenja/Odobrio**: datum odobrenja i *ARM korisnik* koji je *odobrio* dokument. Informacija je samo za čitanje.  
>> **Datum izdavanja/Izdano od**: datum izdavanja i *ARM korisnik* koji je *izdao* dokument. Informacija je samo za čitanje.     
>>
>> **Razlog revizije**: kratki opis razloga koji je doveo do revizije.  
>> Informacija se može mijenjati ako je *Status* dokumenta *U izradi* ili *U reviziji*.    
>>
>> **Izmjene na paragrafima**: opisna napomena o broju paragrafskih izmjena u odnosu na prethodno *izdanje/reviziju*.  
>> Informacija se može mijenjati ako je *Status* dokumenta *U izradi* ili *U reviziji*.    
>>
>> **Izmjene na stranicama**: opisna napomena o broju izmijenjenih stranica u odnosu na prethodno *izdanje/reviziju*.  
>> Informacija se može mijenjati ako je *Status* dokumenta *U izradi* ili *U reviziji*.     
>>
>> **Datum poništavanja/Poništio**: datum poništavanja i *ARM korisnik* koji je *poništio* dokument. Informacija je samo za čitanje.     
>
> **Informacije o lokaciji**: proširivi odjeljak gdje je moguće pregledati/unijeti:   
>
>> **Arhiva**: fizičko *Skladište* gdje se dokument uobičajeno pohranjuje (primjer: Tehnički ured, Uprava, ...).  
>> Podatak se nasljeđuje iz *Kategorije dokumenta unutarnjeg podrijetla* i može se mijenjati.     
>>
>> **Lokacija**: fizička *Lokacija* gdje se dokument uobičajeno pohranjuje (primjer: Ormar, Polica, Ladica, ...).  
>> Podatak se nasljeđuje iz *Kategorije dokumenta unutarnjeg podrijetla* i može se mijenjati.    
>>
>> **Opisna lokacija**: fizička *Lokacija* koja se koristi ako *Arhiva* i/ili *Lokacija* nisu kodirani.  
>> Podatak se nasljeđuje iz *Kategorije dokumenta unutarnjeg podrijetla* i može se mijenjati.   
>
> **Funkcija provjere/odobrenja**: *Funkcija u tvrtki* odgovorna za provjeru/odobrenje dokumenta.  
>> Podatak se nasljeđuje iz *Kategorije dokumenta unutarnjeg podrijetla* i može se mijenjati.    
>
> **Funkcija izrade/izdavanja**: *Funkcija u tvrtki* odgovorna za izradu/izdavanje dokumenta.  
>> Podatak se nasljeđuje iz *Kategorije dokumenta unutarnjeg podrijetla* i može se mijenjati.     
>
> **Bilješke**: slobodne napomene.


### Privitak

Moguće je priložiti *Dokument* koji se kataloži pomoću 'drag'n'drop'; prikazuje se pregled.  
Ovaj prilog nije uključen u Fluentis Dokumente.  
U informacijama *Naziv priloga* i *Tip priloga* sustav prepoznaje naziv fizičke datoteke i ekstenziju.  
Ako nisu prepoznati, mogu se unijeti ručno.


### Stvaranje dokumenta

To je jednostavan *word editor* koji se koristi za izradu *Dokumenta* izravno u ovom modulu.  
Mogu se postaviti: tip slova, veličina, stilovi, boje teksta i pozadine te druge osnovne formate teksta.


### Distribucijska lista

U ovom se popisu mogu povezati: *Funkcije u tvrtki*, *Zaposlenici*, *Klijenti/Dobavljači* i *Kontakti* koji uobičajeno primaju kopiju *Dokumenta* te se mogu navesti uobičajene metode primanja dokumenta.  
Prilikom kreiranja *Dokumenta*, *Distribucijska lista* se nasljeđuje iz *Kategorije dokumenta unutarnjeg podrijetla* i informacije se mogu mijenjati.  
Popis se sastoji od sljedećih informacija:   
> **Grupa**   
>> **Kod**: je kod *ARM uloge* primatelja.   
>> **Opis**: je opis *ARM uloge* primatelja.    
>
> **Korisnik**   
>> **Kod**: je kod *ARM korisnika* primatelja.   
>> **Opis**: je opis *ARM korisnika* primatelja.     
>
> **Funkcija tvrtke**   
>> **Kod**: je kod *Funkcije tvrtke* primatelja.   
>> **Opis**: je opis *Funkcije tvrtke* primatelja.   
>
> **Zaposlenik**   
>> **Kod**: je kod *zaposlenika* primatelja.   
>> **Prezime**: je prezime *zaposlenika* primatelja.   
>> **Ime**: je ime *zaposlenika* primatelja.    
>
> **Kupac/Dobavljač**   
>> **Opis**: je naziv tvrtke *Kupca/Dobavljača* primatelja.    
>
> **Kontakt**   
>> **Šifra**: je šifra *Kontakta* primatelja.   
>> **Opis**: je opis *Kontakta* primatelja.  
>
> **Drugi primatelj**   
>> **Opis**: je slobodan opis primatelja koji nije kodiran.    
>
> **Podaci za dostavu**   
>> **Papirnata kopija**: označava da primatelj prilikom distribucije želi primiti kopiju dokumenta u *papirnatom obliku* ili u privitku putem *e-maila*.   
>> **Metoda dostave**: označava uobičajenu metodu dostave *Dokumenta*.   
>> **Email**: označava adresu e-pošte primatelja, ako nije kodirana u njegovom kartonu.   
>> **Dostavljeno**: označava da je dostava izvršena; automatski se postavlja prilikom distribucije dokumenta i naknadno se može mijenjati.   
>> **Datum dostave**: prikazuje datum dostave dokumenta; automatski se ažurira prilikom distribucije i može se naknadno mijenjati.   
>> **Broj kopija**: označava broj papirnatih kopija koje primatelj želi primiti.   
>> **Napomene**: slobodne bilješke.    


### Pristup funkcijama

U ovom se popisu mogu unijeti *Poslovne funkcije* kojima se dodjeljuju prava pristupa *Dokumentu*.   
Ako se u ovu tablicu ne unesu redovi, pristup je dopušten svima.   
Prilikom kreiranja *Dokumenta*, popis *Poslovnih funkcija* nasljeđuje se iz *Kategorije internog dokumenta* i informacije se mogu mijenjati.   
Popis se sastoji od sljedećih informacija:   
> **Funkcija**: kod *Poslovne funkcije*.   
> **Opis funkcije**: opis *Poslovne funkcije*.   
> **Bilješke**: slobodne bilješke.   


### Dodatni podaci
Moguće je umetnuti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *Dokument unutarnjeg podrijetla*.   


### Prethodne Edicije/Revizije
U ovom popisu moguće je pregledati povijest *Prethodnih Edicija/Revizija* *Dokumenta* u upravljanju.   
Dva puta klikom miša na željeni red moguće je otvoriti upravljanje *Revizijom* odabranog *Dokumenta*.   
Popis se sastoji od sljedećih informacija:   
> **Kategorija**: *Kategorija internog dokumenta*.   
> **Kod**: kod *Dokumenta*.   
> **Edicija**: Edicija *Dokumenta*.   
> **Revizija**: Revizija *Dokumenta*.   
> **Naslov**: *Naslov* *Dokumenta*.   
> **Stanje**: *Stanje* *Dokumenta*.   
> **Od datuma**: datum kada je *Dokument* preuzeo trenutno *Stanje*.   
> **Referenca paragrafa**: referenca na brojeve paragrafa izmijenjenih u odnosu na prethodnu *ediciu/reviziju*.   
> **Referenca stranica**: referenca na brojeve stranica izmijenjenih u odnosu na prethodnu *ediciu/reviziju*.   
> **Funkcija provjere/odobrenja**: *Poslovna funkcija* odgovorna za provjeru/odobrenje.   
> **Funkcija izrade/izdavanja**: *Poslovna funkcija* odgovorna za izradu/izdavanje.  


:::tip Tijek stanja dokumenta   
![primjer](/img/it-it/quality/internal-origin-document/internal-origin-document-status-work-flow.png)
:::


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).