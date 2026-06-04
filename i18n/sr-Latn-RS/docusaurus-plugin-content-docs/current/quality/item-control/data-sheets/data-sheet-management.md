---
title: Tehnička uputstva
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvaliteta > Kontrola artikla > Tehnička uputstva > Novo tehničko uputstvo** ili se može izvršiti putem **Pretrage tehničkih uputstava**.   


:::important Čemu služi
Tehnička uputstva katalogiziraju sve informacije koje opisuju karakteristike proizvoda kao prikladne za ugovor, funkcionalnu specifikaciju ili određenu namjenu.  
Tehnička uputstva mogu se prilagoditi za pojedinog Klijenta.  
Upravljaju se revizijama i praćenjem povezanosti između željenih tehničkih uputstava.  

Standardno su dostupna izvješća:  
> **Tehnička uputstva**: obrazac s popisom *Svojstava* i pridruženih *Normi i zakona* (za internu upotrebu).  
> **Kartica proizvoda**: obrazac s podacima o *Proizvodu* i njegovim *Svojstvima* (za komercijalnu upotrebu).  
:::


## Tipke za upravljanje


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku spremaju se sve izmijenjene informacije prikazanog *Tehničkog uputstva*.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj karticu

Moguće je duplicirati prikazana *Tehnička uputstva* u novu *Tehničku uputstvu*. Dovoljno je pritisnuti gumb **Dupliciraj**.  
Prikazuje se zahtjev za unos:  
> **Vrsta liste**: je *Vrsta upute* novog *Tehničkog uputstva* (obavezno polje), predlaže se *Vrsta uputstva* iz izvornog dokumenta.  
> **Kupac**: je *Klijent* novog *Tehničkog uputstva*, predlaže se klijent iz izvornog dokumenta.  
> **Dodatni podaci**: popis dodatnih podataka predviđenih od strane navedene *Vrste uputstva*.  
> **Nova šifra**: je *Šifra* novog *Tehničkog uputstva* (obavezno polje), predlaže se prema *Metodi kodiranja* povezanoj s *Vrstom tehničkog uputstva*.  
> **Dupliciraj sa sljedivošću**: označava želi li se zadržati relacija/praćenje u izvornim *Tehničkim uputstvima* (kartica *Povezane stvari* u izvornom dokumentu) i u ciljnoj *Tehničkoj uputi* (u proširenju *Izvor podataka s kartica* u zaglavlju dokumenta). 

*Vrsta liste* i *Kupac* predlažu se iz izvornog dokumenta; *Šifra* se predlaže ako je za *Vrstu uputstva* povezana *Metoda kodiranja*.  
Nakon toga pritisnuti gumb **OK** ili gumb **Otkaži** ako se želi nastaviti s dupliciranjem ili odustati.  
Novo *Tehničko uputstvo* koja se kreira imat će *Reviziju* jednaku *Nula*.  
Po završetku obrade novo *Tehničko uputstvo* će se prikazati.  


### ![](/img/neutral/common/execute.png) Stvori novu reviziju

Da bi se kreirala nova *Revizija* postojeće *Tehničke kartice*, potrebno je kliknuti u priakzu na *Tehničku karticu* iz koje se želi kreirati nova *Revizija* i pritisnuti tipku **Stvori novu reviziju**. Može se kreirati nova *Revizija* samo za jednu *Tehničku karticu* odjednom.  
Kreira se nova *Tehnička kartica*, sa svim informacijama iz izvornog dokumenta, ali s povećanim indeksom *Revizije* i *Datumom početka važenja* postavljenim na današnji datum.  
Izvorna *Tehnička kartica* završava svoje važenje, a *Datum završetka važenja* se postavlja na današnji datum.  
Po završetku obrade, nova *Revizija* *Tehničke kartice* se prikazuje.   


### ![](/img/neutral/common/item-web.png) Izradi kontrolni plan

Iz *Tehničke kartice* moguće je kreirati *Kontrolni plan*; za to je potrebno kliknuti u prikazu na *Tehničku karticu* iz koje se želi kreirati kontrolni plan i pritisnuti tipku **Izradi kontrolni plan**. Novi *Kontrolni plan* može se kreirati samo za jednu *Tehničku karticu* odjednom.  
Kreira se novi *Kontrolni plan*, kopiraju se samo *Svojstva* izvora s indikatorom *Mjerenja koja se trebaju provesti*, dok sve ostale informacije iz *Tehničke kartice* ostaju, ali s indeksom *Revizije* postavljenim na *nula* i *Datumom početka važenja* postavljenim na današnji datum. Prikazat će se upit za:  
> **Tip kontrolnog plana**: je *Vrsta kontrolnog plana* novog *Kontrolnog plana* (obavezno polje).  
> **Broj**: je progresivni broj novog *Kontrolnog plana* (obavezno polje), predlaže se na temelju *Numeracije* povezane s *Vrsta kontrolnog plana* i današnjim datumom.  
> **Stvara održavanje sljedivosti**: označava hoće li se zadržati veza/praćenje izvornog *Tehničke kartice* u *Kontrolnom planu* odredišta (u expanderu *Izvor Kontrolnog plana* u *podacima zaglavlja*).    

Nakon toga se pritisne tipka **OK** ili tipku **Otkaži** ako se želi nastaviti s aktivnošću kreiranja ili odustati.  
Po završetku obrade, novi *Kontrolni plan* bit će prikazan.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj test

Kontekstualno uz karticu *Svojstva*, gumb je omogućen samo ako je iz popisa *Svojstva* odabrana samo jedna stavka *Svojstva*.  
Sve informacije iz izvornog *Svojstva* dupliciraju se u novo *Svojstvo* koje se dodaje na kraj *Sekvence* postojećih *Svojstava*.


## Upravljanje podacima


### Podaci zaglavlja

Upravlja se informacijama:  
> **Vrsta lsite**: to je *Vrsta tehničke kartice* (obavezno polje).  
> Prilikom ručnog unosa nove *Tehničke kartice* predlaže se *Vrsta tehničke kartice* navedena u prošitenju *Tehničke kartice* u kartici *Općenito* prisutnoj u *Parametrima kontrole artikala*.   
>
> **Šifra**: to je *Šifra* *Tehničke kartice* (obavezno polje).  
> Predlaže se u skladu s *Metodom kodiranja* pridruženom *Vrsti tehničke kartice*.   
>
> **Revizija**: to je Revizija *Tehničke kartice* (obavezno polje).  
Informacija se može mijenjati ako se kreira nova *Tehnička kartica*, inače je samo za čitanje; može se promijeniti na kontrolirani način pomoću gumba *Kreiraj novu reviziju* koji povećava prethodnu vrijednost *Revizije* za jednu jedinicu.  
>
> **Opis**: to je opis *Tehničke kartice*.  
> **Trgovački naziv**: to je komercijalni opis *Tehničke kartice*.  
> **Kupac**: to je naziv *Klijenta*. *Svojstva* su prilagođena za *Klijenta*/*Povezane artikle*.  
> **Datum zahtjeva/Zahtjev od**: samo podaci o datumu i osobi koja je zatražila kreiranje *Tehničke kartice*.  
>
> **Vrijednost: Početak/Kraj**: to su datumi početka i završetka valjanosti *Tehničke kartice*.  
> Datumi se automatski upravljaju prilikom kreiranja nove *Revizije* *Tehničke kartice*.
>
> **Odgovorna osoba**: to je *Zaposlenik* odgovoran za *Tehničku karticu*.  
> Prilikom ručnog unosa nove *Tehničke kartice*, predlaže se *Odgovorna osoba* navedena u expanderu *Tehničke kartice* na kartici *Općenito* unutar *Parametara kontrole artikala*.  
>
> **Izvor podataka s kartica**: prošitenje gdje je moguće unijeti:  
>
>> **Tip/Izvorni list/Rev.**: sadrži reference na *Izvorna tehnička kartica* (*Tip kartice*, *Kod* i *Revizija*).  
>> **Razlog za reviziju**: kratki opis razloga koji je doveo do revizije.  
>> Informacija se može mijenjati ako je *Tehnička kartica* još uvijek važeća. 
>
> **Napomene**: slobodne napomene.   


### Atributi svojstva
Moguće je umetnuti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaku *Tehničku karticu*.   
Naslijeđuju se iz *Atributa tehničke kartice* povezanih s *Tipom tehničke kartice*.   


### Svojstva
Sadrži *Svojstva* *Artikala* ili *Atributa artikla* tehničke kartice.
Popis se sastoji od sljedećih informacija:   
> **Redoslijed**: redoslijed prikaza/važnosti *Svojstva*.   
> **Vrsta testa**: šifra *Svojstva*.   
> **Opis tipa testa**: opis *Svojstva*. Informacija je samo za čitanje.   
> **Opis**: opis *Svojstva*, može se uređivati.   
> **Referenca standardnog plana kontrole**: opisno polje koje sadrži reference globalno priznatih kodifikacija ispitivanja.   
> **Alat za mjerenje**: *Kategorija mjernog instrumenta* koja se koristi za očitanje *Vrijednosti* u *Svojstvu*.   
> **Test za otkrivanje**: označava je li *Svojstvo* *Ispitivanje za evidentirati*.   
Prilikom kreiranja *Plana kontrole* iz *Tehničke kartice*, *Svojstvo* će se kopirati u *Ispitivanja za evidentirati*.   
> **Jedinica mjere**: *Jedinica mjere* kojom se izražava *Nominalna vrijednost* i *Minimalna i maksimalna granica* ako su izražene u vrijednosti, a ne u postotku.   
> **Vrsta vrijednosti**: *Vrsta vrijednosti* kojom se izražava *Nominalna vrijednost*; mogući *Tipovi vrijednosti* su: *Numerički*, *Da/Ne* ili *Tekst*.   
> **Vrsta limita**: omogućen ako je *Tip vrijednosti* *Numerički*, određuje *Vrstu granice* koji upravlja omogućavanjem *Granica* i vrijednosti *Tolerancije*.   
> **Nominalna vrijednost**: očekivana teorijska vrijednost *Svojstva*.   
> **Minimalno ograničenje**: minimalna dopuštena granica u odnosu na *Nominalnu vrijednost*.   
> **L.min.(toll-)**: negativna tolerancija minimalne granice.   
> **L.min.(toll+)**: pozitivna tolerancija minimalne granice.   
> **Maksimalno ograničenje**: maksimalna dopuštena granica u odnosu na *Nominalnu vrijednost*.   
> **L.max.(toll-)**: negativna tolerancija maksimalne granice.   
> **L.max.(toll+)**: pozitivna tolerancija maksimalne granice.   
> **%**: označava jesu li *Minimalna* i *Maksimalna granica* izražene u postotku.   
> **Datum početka valjanosti**: datum početka valjanosti *Svojstva*.   
> **Datum završetka valjanosti**: datum završetka valjanosti *Svojstva*.   
> **Ispisivo**: označava jesu li informacije ispisive u izvještajima: *Tehnička kartica* i *Kartica proizvoda*.   
> **Napomene**: slobodne bilješke.

Limiti pozitivne i negativne tolerancije na minimalne i maksimalne granice obično su informacije dobivene od pogreške *Mjernog instrumenta* korištenog za očitanje vrijednosti. U ovoj verziji mogu se unositi samo ručno od strane operatera.  


### Norme i Zakoni
Sadrži reference na *Norme* i/ili *zakone* primjenjive na *Svojstva* tehničke kartice.
Popis se sastoji od sljedećih informacija:
> **Tip**: je *Tip norme i zakona* pridružen navedenoj *Normi i Zakonu*. Informacija je samo za čitanje.
> **Šifra**: je *Norma i Zakon*.
> **Opis**: je opis navedene *Norme i Zakona*. Informacija je samo za čitanje.
> **Napomene**: slobodne napomene.  


### Kupci
Sadrži *Klijente* i *Krajnje klijente* (Kontakte) zainteresirane za *Artikle* sa sličnim *Svojstvima*, navedene u dva odgovarajuća popisa.
Popis se sastoji od sljedećih informacija:
> **Kupac**: je naziv *Klijenta*.
> **Krajnji kupac**: je šifra i opis *Krajnjeg klijenta*.
> **Napomene**: slobodne napomene.  


### Povezane stvari
Sadrži *Artikle* sa sličnim karakteristikama, navedene u popisu *Svojstava*.
Popis se sastoji od sljedećih informacija:
> **Klasa**: je klasa *Artikla*.
> **Šifra artikla**: je šifra *Artikla*.
> **Opis stavke**: je opis *Artikla*.
> **Varijanta**: je šifra *Varijante artikla*.
> **Opis varijante**: je opis *Varijante artikla*. Informacija je samo za čitanje.
> **Vrsta izjave**: je *Vrsta izjave* (odricanje od odgovornosti) koja će biti predložena u izvještaju *Tehnička kartica proizvoda*.
> **Napomene**: slobodne napomene. 


### Svojstva stavke
Kao alternativu popisu *Povezanih artikala*, moguće je unijeti karakteristike. (u formatu [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata)) za koje su *Svojstva* *Tehničke kartice* valjana.   


### Povezane sheme
U ovom popisu moguće je pregledati *Tehničke kartice* duplicirane s praćenjem izvora iz prikazane *Kartice*.  
Dvostrukim klikom miša na željeni redak moguće je otvoriti upravljanje odabranom *Tehničkom karticom*.  


### Pregled
U ovom popisu moguće je pregledati povijest *Revizija* prethodnih prikazanoj *Tehničkoj kartici*.  
Dvostrukim klikom miša na željeni redak moguće je otvoriti upravljanje odabranom *Tehničkom karticom*.   


### Povezani dokumenti
U ovom popisu moguće je unijeti i pregledati eventualne privitke; moguće je pregledati njihov pregled (preview).   


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).   