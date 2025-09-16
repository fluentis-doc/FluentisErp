---
title: Kontrolni planovi
sidebar_position: 2
---

Upravljanje se može pronaći na putanji **Kvaliteta > Kontrole artikala > Kontrolni planovi > Novi plan kontrole** ili se može pokrenuti iz **Pretraživanja planova kontrole**.   


:::important Čemu služi
Kontrolni planovi katalogiziraju sva planirana ispitivanja, provjere, potrebna mjerenja i vrijednosti koje treba dobiti kako bi se osiguralo da materijali i povezani proizvodi budu unutar granica potrebnih svojstava.   
Pomoću kontrolnih planova moge se unaprijed definirati provjere koje će se provoditi tijekom životnog ciklusa artikla: od provjera ulaznih materijala, povrata od podizvođača do provjera tijekom proizvodnog ciklusa artikla: prije, tijekom i nakon stvaranja proizvoda.
ontrolni planovi, poput tehničkih uputstava, mogu se prilagoditi za svakog klijenta i/ili dobavljača. Ovaj dokument također upravlja revizijama i sljedivošću između željenih kontrolnih planova.   
Za svako planirano ispitivanje moguće je naznačiti: provodi li se ispitivanje interno ili ga provode treće strane, kategoriju i mjerni instrument koji će se koristiti, vrste potrebnih vrijednosti (Da/Ne ili Numeričko), nominalnu vrijednost, donju i gornju granicu koje se mogu odrediti kao postotak ili kao apsolutna vrijednost, broj mjerenja koja treba provesti i s kojom učestalošću.   

Neki primjeri mogućih vrsta kontrolnih planova: Provjere prihvatljivosti, Provjere prihvatljivosti za ključne dobavljače, Provjere proizvodnje, Završne inspekcije.   

Dostupno je standardno izvještavanje za **Kontrolne planove**.   
:::


## Tipke za upravljanje


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku spremaju se sve promijenjene informacije prikazanog *Kontrolnoh plana*.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj kontrolni plan

Moguće je duplicirati prikazani Kontrolni plan u novi Kontrolni plan. Jednostavno se pritisne tipka Dupliciraj.
Zatim se prikazuje zahtjev za:
> **Vrsta kontrolnog plana**: to je *Vrsta kontrolnog plana* novog *Kontrolnog plana* (obavezan podatak).   
> Predlaže se *Vrsta kontrolnog plana* izvornog *Kontrolnog plana*.   
> **Broj**: to je redni *Broj* novog *Kontrolnog plana* (obavezan podatak).    
> Predlaže se na temelju *Numeracije* povezane s *Vrstom kontrolnog plana* i današnjim datumom.   
> **Dupliciraj sa sljedivošću**: označava želi li se zadržati veza/sljedivost odredišnog *Kontrolnog plana* u izvornom *Kontrolnom planu*, a posebno u kartici *Povezani kontrolni planovi*.  

Zatim se pritisne tipka **OK** ili tipka **Poništi** ako se želi nastaviti s aktivnošću dupliciranja ili ne.    
Po završetku obrade prikazuje se novi *Kontrolni plan*.   


### ![](/img/neutral/common/execute.png) Stvori novu reviziju

Kako bi se stvorila nova *Revizija* postojećeg *Kontrolnog plana*, potrebno je pritisnuti tipku **Stvori novu reviziju**.   
Stvara se novi *Kontrolni plan*, sa svim informacijama izvornog *Kontrolnog plana*, ali s povećanim indeksom *Revizije* i *Datumom početka valjanosti* jednakim današnjem datumu.
Izvorni *Kontrolni plan* završava svoju valjanost automatskim postavljanjem *Datuma kraja valjanosti* jednakim današnjem datumu.   
Po završetku obrade, prikazuje se nova *Revizija* *Kontrolnog plana*.


### Stvori novu tehničku shemu

Iz *Kontrolnog plana* moguće je stvoriti *Tehničko uputstvo*; kako bi se to učinilo, potrebno je pritisnuti tipku **Stvori novu Tehničku shemu**.    
Stvara se novo *Tehničko uputstvo*, sa svim informacijama izvornog *Kontrolnog plana*, ali s indeksom *Revizije* jednakim *nuli* i s *Datumom početka valjanosti* jednakim današnjem datumu. Prikazat će se zahtjev za:   
> **Vrsta lista**: to je *Vrsta uputstva* novog *Tehničkog uputstva* (obavezan podatak).   
> **Kupac**: to je *Klijent* novog *Tehničkog uputstva*, predlaže se račun *Klijenta* izvornog *Kontrolnog plana* (samo ako je *Vrste korisničkog računa*).   
> **Nova šifra**: to je *Šifra* novog *Tehničkog uputstva* (obavezan podatak), predlaže se na temelju onoga što je predviđeno *Metodom šifriranja* povezanom s *Vrstom tehničkog uputstva*.   
> **Rev.**: to je indeks *Revizije* novog *Tehničkog uputstva* (obavezan podatak), predlaže se na *nulu*.   
> **Stvara održavanje sljedivosti**: označava želi li se zadržati veza/sljedivost, u odredišnom *Tehničkom uputstvu*, u izvornom *Kontrolnom planu* i posebno u kartici *Povezana uputstva*.   

Zatim se pritisne tipka **OK** ili tipka **Poništi** ako se želi nastaviti s aktivnošću stvaranja ili ne.   
Po završetku obrade, novo *Tehničko uputstvo* se prikazuje.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj test

U kontekstu kartice *Planirani testovi* tipka je omogućena samo ako je s popisa *Planiranih testova* odabran samo jedan redak *Testa*.   
Sve informacije izvornog *Planiranog testa* dupliciraju se u novi *Planirani test* dodan u *Slijedu* već postojećim *Planiranim testovima*.   


## Upravljani podaci


### Podaci zaglavlja

Informacije kojima se može upravljati su:   
> **Vrsta**: to je *Vrsta kontrolnog plana* (obavezan podatak).   
> Pri ručnom unosu novog *Kontrolnog plana*, predlaže se *Vrsta kontrolnog plana* naznačena u proširenju (*expander*) *Kontrolni planovi* kartice *Općenito* koja se nalazi u *Parametrima kontrole artikala*.   
>
> **Godina/Broj**: to su *Godina* i *Broj* *Kontrolnog plana* (obavezni podaci).   
> Pri unosu novog *Kontrolnog plana*, *Godina* i *Broj* se predlažu na temelju današnjeg datuma i *Numeracije* povezane s *Vrstom kontrolnog plana*.   
>
> **Rev.**: to je Revizija *Kontrolnog plana* (obavezan podatak).   
Podatak se može mijenjati ako se stvara novi *Kontrolni plan*, inače je samo za čitanje; može se mijenjati na način vođen sustavom pomoću tipke *Stvori novu reviziju* koja povećava prethodnu vrijednost *Revizije* za jednu jedinicu.      
>
> **Opis**: to je opis *Kontrolnog plana*.   
> **Za kupca/dobavljača**: to je naziv tvrtke *Klijenta* ili *Dobavljača*. *Planirani testovi* su prilagođeni za *Klijenta* ili *Dobavljača* i *Povezane artikle*.   
> **Napomene klijenta/dobavljača**: slobodne napomene za klijenta/dobavljača.   
>
> **Specifikacija klijenta**: proširenje (expander) gdje je moguće unijeti:     
>
>> **Određeni datum**: to je datum specifikacije primljene od klijenta.   
>> **Referenca**: slobodne napomene o referenci na specifikaciju primljenu od klijenta koja zahtijeva posebne kontrole koje treba izvršiti za *Povezane artikle*.   
>> **Rok**: to je datum kraja valjanosti specifikacije primljene od klijenta.   
>> **Bilješke**: slobodne napomene vezane uz specifikaciju primljenu od klijenta.   
>
> **Datum zahtjeva/Zahtjev od**: samo reference o tome kojeg je datuma i koja je osoba zatražila izradu *Kontrolnog plana*.   
>
> **Valjanost: Početak/Kraj**: to su datumi početka i kraja valjanosti *Kontrolnog plana*.   
> Datumima se automatski upravlja pri stvaranju nove *Revizije* *Kontrolnog plana*.   
>
> **Odgovorna osoba**: to je *Zaposlenik* odgovoran za *Kontrolni plan*.   
> Pri ručnom unosu novog *Kontrolnog plana* predlaže se *Odgovorna osoba* naznačena u proširenju (*expander*) *Kontrolni planovi* kartice *Općenito* koja se nalazi u *Parametrima kontrole artikala*.     
>
> **Napomene**: slobodne napomene.   
>
> **Podrijetlo plana kontrole**: proširenje (expander) gdje je moguće unijeti:    
>
>> **Tehnička kartica**: sadrži reference izvornog *Tehničkog uputstva* (*Vrsta uputstva*, *Šifra* i *Revizija*).   
>> **Kontrolni plan**: sadrži reference izvornog *Kontrolnog plana* (*Vrsta plana*, *Godina*, *Broj* i *Revizija*).   
>> **Razlog za reviziju**: kratak opis razloga koji je doveo do revizije.   
>> Podatak se može mijenjati ako je *Kontrolni plan* još uvijek na snazi.  


### Atributi kontrolnog plana
Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *Kontrolni plan*.   
Naslijeđuju se iz *Dodatnih podataka* (*Extra data*) povezanih s *Vrstom kontrolnog plana*.   


### Planiran test
Sadrži *Planirane testove* artikala ili *Atributa artikla* *Kontrolnog plana*.   
Popis se sastoji od sljedećih informacija:   
> **Redoslijed**: to je slijed provedbe *Planiranih testova*.   
> **Vrsta testa**: to je šifra *Planiranog testa*.   
> **Opis tipa testa**: to je opis *Planiranog testa*. Podatak je samo za čitanje.   
> **Opis**: to je opis *Planiranog testa* koji se može popuniti.   
> **Referenca standardnog kontrolnog plana**: to je opisno polje koje sadrži reference na globalno priznate kodove testova.   
> **Interni test**: označava prikuplja li se *Test* interno ili u vanjskom laboratoriju.   
> **Vanjski laboratorij**: to je naziv tvrtke *Dobavljača* koji će izvršiti test. Podatak je samo za čitanje ako je naveden *Interni test*.   
> **Kategorija mjernog instrumenta**: to je *Kategorija mjernog instrumenta* koji se koristi za bilježenje *Vrijednosti* izraženih u *Testu*.   
> **Alat za mjerenje**: to je *Mjerni instrument* koji se koristi za bilježenje *Vrijednosti* izraženih u *Testu*.   
> **Jedinica mjere**: to je *Mjerna jedinica* kojom se izražavaju *Nominalna vrijednost* te *Minimalna i maksimalna granica*, ako su izražene u vrijednosti, a ne u postotku.   
> **Vrsta vrijednosti**: to je *Vrsta vrijednosti* kojom se izražava *Nominalna vrijednost*; moguće *Vrste vrijednosti* su: *Brojčano*, *Da/Ne* ili *Tekst*.   
> **Vrsta limita**: omogućena ako je *Vrsta vrijednosti* *Brojčana*, to je *Vrsta granice* koja će upravljati omogućavanjem *Granica* i vrijednosti *Tolerancije*.   
> **Nominalna vrijednost**: to je očekivana teorijska vrijednost *Planiranog testa*.   
> **Minimalno ograničenje**: minimalna dopuštena granica u odnosu na *Nominalnu vrijednost*.   
> **L.min.(tol-)**: to je granica negativne tolerancije na minimalnoj granici.   
> **L.min.(tol+)**: to je granica pozitivne tolerancije na minimalnoj granici.   
> **Maksimalno ograničenje**: maksimalna dopuštena granica u odnosu na *Nominalnu vrijednost*.   
> **L.max.(tol-)**: to je granica negativne tolerancije na maksimalnoj granici.   
> **L.max.(tol+)**: to je granica pozitivne tolerancije na maksimalnoj granici.   
> **%**: označava jesu li *Minimalna granica* i *Maksimalna granica* izražene u postotku.   
> **Vrsta kontrole testa**: to je *Vrsta kontrole* koja se provodi na *Planiranom testu*.   
> **Učestalost**: slobodne napomene vezane uz učestalost uzorkovanja.   
> **Broj detekcija**: to je minimalni broj predloženih mjerenja vrijednosti koje treba provesti.   
> **Datum početka valjanosti**: to je datum početka valjanosti *Planiranog testa*.   
> **Datum kraja valjanosti**: to je datum kraja valjanosti *Planiranog testa*.   
> **Ispisano**: označava mogu li se informacije ispisati u izvješću: *Kontrolni plan*.   
> **Napomene**: slobodne napomene.   
> **Opis kategorije mjernog instrumenta**: to je *Opis kategorije mjernog instrumenta* koji se koristi. Podatak je samo za čitanje.   
> **Opis mjernog instrumenta**: to je *Opis mjernog instrumenta* koji se koristi. Podatak je samo za čitanje.   


#### Planirani testni atributi
Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) općenito za *Planirani test*.   
Nasljeđuju se od *Atributa vrste testa* koji se nalaze u *Vrstama testova*.   


#### Planirane testne konfiguracije
Sadrži [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) potrebne operaterima za pripremu svih potrebnih instrumenata kako bi se mogao započeti određeni test. Mogu se smatrati potrebnim konfiguracijama, operativnim informacijama koje prethode izvršenju testa.   
Nasljeđuju se iz *Parametara konfiguracije testa i mjernog instrumenta* koji se nalaze u *Vrstama testova*.   


#### Funkcije detekcije i odobravanja
To je dodjela prava koja navodi tko može bilježiti i/ili odobriti vrijednosti testa.   
Nasljeđuju se iz *Funkcija bilježenja i odobravanja* koje se nalaze u *Vrstama testova*.   
Popis se sastoji od sljedećih informacija:   
> **Funkcija**: to je šifra *Poslovne funkcije*.   
> **Opis funkcije**: to je opis *Poslovne funkcije*.   
> **Vrsta aktivnosti**: to je pravo dodijeljeno *Poslovnoj funkciji* tijekom aktivnosti bilježenja i/ili odobrenja testa. Moguće vrijednosti su:   
> - *Može bilježiti* - *Poslovna funkcija* ima dozvole samo za bilježenje vrijednosti;   
> - *Može odobriti* - *Poslovna funkcija* ima dozvole samo za odobrenje testa;   
> - *Može bilježiti i odobriti* - *Poslovna funkcija* ima dozvole za bilježenje vrijednosti i odobrenje testa.      
>
> Ostale *Poslovne funkcije* koje nisu navedene nemaju nikakvo pravo na bilježenje vrijednosti i odobrenje testa.   
> Ako nisu specificirane *Poslovne funkcije*, svi će operateri moći bilježiti vrijednosti i odobravati test.   
>
> **Napomene**: slobodne napomene.   


#### Dokumenti u privitku
Na ovom popisu moguće je unijeti i pregledati eventualne priloge; moguće je prikazati pretpregled.   


### Kupci/dobavljači
Sadrži *Klijente*, *Krajnje klijente* i *Dobavljače* za koje se trebaju izvršiti *Planirani testovi* na *Povezanim artiklima*.   
Popis se sastoji od sljedećih informacija:   
> **Kupac/Dobavljač**: to je naziv tvrtke *Klijenta* ili *Dobavljača*.   
> **Krajnji kupac**: to je šifra i opis *Krajnjeg klijenta*.   
> **Određeni datum**: to je datum specifikacije primljene od klijenta.   
> **Reference specifikacije**: slobodne napomene o referenci na specifikaciju primljenu od klijenta koja zahtijeva posebne kontrole koje treba izvršiti za *Povezane artikle*.   
> **Posebna bilješka**: slobodne napomene vezane uz specifikaciju primljenu od klijenta.   
> **Napomene**: slobodne napomene.   


### Povezani artikli (stvari)
Sadrži *Artikle* sa sličnim karakteristikama koji su navedeni u popisu *Planiranih testova*.   
Popis se sastoji od sljedećih informacija:   
> **Klasa**: to je klasa *Artikla*.   
> **Šifra artikla**: to je šifra *Artikla*.   
> **Opis**: to je opis *Artikla*.   
> **Varijanta**: to je šifra *Varijante artikla*.   
> **Opis varijante**: to je opis *Varijante artikla*. Podatak je samo za čitanje.   
> **Dobavljač**: to je naziv tvrtke *Dobavljača* koji isporučuje *Artikl* za koji će se aktivirati *Planirani testovi*.   
> **Napomene**: slobodne napomene.      


### Karakteristike artikla
Kao alternativa popisu *Povezanih artikala* moguće je unijeti karakteristike (u formatu [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata)) za koje *Planirani testovi* *Kontrolnog plana* vrijede.   


### Povezane sheme
Na ovom popisu moguće je vidjeti *Tehnička uputstva* stvorena sa sljedivošću iz prikazanog *Kontrolnog plana*.   
Dvostrukim klikom miša na željeni redak, moguće je izvršiti upravljanje odabranim *Tehničkim uputstvom*.   


### Srodni planovi kontrole
Na ovom popisu moguće je vidjeti *Kontrolne planove* duplicirane sa sljedivošću iz prikazanog *Kontrolnog plana*.   
Dvostrukim klikom miša na željeni redak, moguće je izvršiti upravljanje odabranim *Kontrolnim planom*.   


### Pregled
Na ovom popisu moguće je vidjeti povijest *Revizija* koje prethode prikazanom *Kontrolnom planu*.   
Dvostrukim klikom miša na željeni redak, moguće je izvršiti upravljanje odabranim *Kontrolnim planom*.   


### Povezani dokumenti
Na ovom popisu moguće je unijeti i pregledati eventualne priloge; moguće je prikazati pretpregled.   


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).   