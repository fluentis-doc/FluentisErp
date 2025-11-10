---
title: Knjiženje izlaznih računa
sidebar_position: 1
---

Postupak se otvara putem izbornika **Prodaja > Izlazni računi > Knjiženje > Knjiženje izlaznih računa**. 

Račun, da bi bio knjižen, mora ispunjavati niz uvjeta: u svom zaglavlju mora imati postavljen flag *Ispisano*, ne smije biti tipa *pro-forma* i tip računa mora sadržavati opći razlog za knjiženje.

### Knjiženje

U gornjem dijelu forme nalaze se filteri pretrage za pronalazak i prikaz računa koji su spremni za knjiženje. 

U donjem dijelu nalaze se parametri upravljanja knjiženjem:  

**Datum knjiženja jednak datumu dokumenta**: ova oznaka nalaže sustavu da svaki račun knjiži s datumom izdavanja.

Ako se oznaka deaktivira, aktivira se polje **Datum knjiženja**, u kojem se može unijeti fiksni datum knjiženja;

**Koristi tečaj iz tablice tečajeva**: ako je uključeno, sustav koristi tečaj iz tablice koji vrijedi na datum knjiženja (ili posljednji prethodni).

Ako oznaka nije aktivna, koristi se *tečaj iz zaglavlja računa.*;

**Ažuriraj tečaj u dokumentu**: dostupno samo ako je prethodna oznaka aktivna; omogućuje ažuriranje tečaja i u samom računu, zamjenjujući postojeći;  

**Razdoblje PDV-a = datum dokumenta**: ako je oznaka uključena, razdoblje PDV-a se izjednačava s datumom računa. Ako se želi koristiti mogućnost odgođenog fakturiranja (do 15. u mjesecu nakon datuma isporuke), oznaka se mora isključiti, kako bi se datum PDV-a preuzeo iz izvornog dokumenta – u skladu s propisima o PDV-u.  

**Koristiti poslovnicu poduzeća za dodjelu odjela**: omogućuje da se, ako je u šifrarniku kupca navedena poslovnica i pridruženi odjel, knjiženje obavi na taj odjel.
Time se olakšava vođenje bilanci po odjelima u situacijama gdje se fakturiranje odvija odvojeno, ali se financijski rezultati konsolidiraju na glavnu poslovnu jedinicu.  

#### Posebne tipke    
> **Pretraži račune**: prikazuje sve ispisane, a još neproknjižene račune.  
> **Proknjiži račune**: pokreće knjiženje odabranih računa prema postavljenim parametrima.   

### Parametri

Ovdje se definiraju opće postavke knjiženja računa.

**Knjiženje poklona**: aktiviranjem ove oznake omogućuje se knjiženje poklon-artikala, otvarajući dodatna povezana polja:

1. Ako račun sadrži poklon, a upravljanje poklonima nije uključeno, sustav će upozoriti korisnika i račun će biti proknjižen bez posebnog knjiženja za poklon-redak (potrebna ručna intervencija).

2. Ako je opcija aktivna, ali nisu navedeni konti, sustav će automatski dodati redak storniranja prihoda koristeći isti konto prodaje kao i za artikl.

3. Ako je uključena oznaka **Zamijeni konto artikla**, koristi se poseban konto za storniranje unaprijed definiran u dodatnom polju.

**Šifra PDV-a za poklone u PDV registru**: popunjavanjem ovog polja (obično šifrom PDV-a koja odgovara slučaju “izvan područja PDV-a” ili “izuzeto...”) automatski će se unijeti redak za storno vrijednosti poklona u PDV registru, u slučajevima kada se ne primjenjuje prijenos PDV-a na klijenta.  

**Konto storna PDV-a**: Koristi se u slučaju kada stavka poklona na računu **nema flag “Naknada PDV-a”**, kojim se označava je li PDV primijenjen na poklon na teret kupca (s flagom) ili nije (bez flaga).  
Ovaj će se iznos evidentirati i stornirati samo ako je unesen *konto storna PDV-a*; bez njega će se postupak morati ručno obraditi u knjigovodstvu.  
U ovom polju prikazuje se i poruka upozorenja korisniku ako postavka nije definirana.

**Raggruppa conti delle righe automatiche**: Kada je flag aktivan, konta automatski unesena u odjeljak glavne knjige (primjerice kod knjiženja poklona gdje se kupac pojavljuje više puta — jednom za ukupni iznos računa, a zatim za storno poklona) bit će grupirana po podkontu, čime se formira sažeta i pregledna knjižna evidencija.

**Podkonto financijskog popusta**: Ovo se polje koristi za evidentiranje financijskog popusta povezanog s dospijećem računa.

#### Posebna tipka  

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za knjiženje poklona.  

Nakon što su računi odabrani (na kartici *Knjiženje*) i parametri postavljeni, računi se mogu proknjižiti pomoću tipke *Knjiženje računa*.

### Prethodne operacije  

Forma prikazuje popis izvršenih knjiženja kako bi ih se moglo pregledati i eventualno poništiti putem odgovarajućih tipki.

Poništavanje je moguće samo ako je razdoblje još uvijek otvoreno za izmjene  
(ispis glavne knjige nije izvršen, PDV registar nije ispisan, periodična likvidacija nije provedena, zatvaranje konta nije izvršeno, a knjižene stavke nisu zatvorene naplatom ili mjenicom).

**Knjiženje računa**: mreža s detaljima izvršenih operacija. Popunjava se nakon pretraživanja i omogućuje odabir operacija na koje se primjenjuju funkcije iz trake izbornika.

Podaci u donjim mrežama, **Računi** i **Računovodstveni zapis**, odgovaraju odabranoj operaciji u gornjoj mreži.  
Dvostruki klik u odjeljku računa ili zapisa omogućuje prikaz određenog računa ili odgovarajućeg knjiženja.

#### Posebne tipke 
> **Pretraži knjiženja**: pretražuje popis izvršenih knjiženja.   
> **Pregled knjiženja**: prikazuje ispis knjiženja prije pohrane.   
> **Vrati knjiženje**: ovom tipkom briše se cijelo knjiženje i svi povezani računi.    
> **Vrati račun**: tipka vraća samo odabrani račun.  

#### Poruke o pogreškama

Ove pogreške mogu nastati zbog nepravilnog unosa podataka od strane korisnika, tj. zbog nedostatka obaveznih informacija,  
ili zbog pogrešnih konfiguracija i postavki parametara ili osnovnih podataka.

Pogreške u konfiguraciji ili nedostaci u osnovnim podacima najčešće se odnose na okruženja u kojima nije pokrenut postupak Fast Start.

:::note[Poruka]
Račun broj ... tip ... godina ... od AAA d.o.o. ne može biti proknjižen jer **ne postoji konto protustavke**.
:::

Protustavka u kontekstu prodajnog ili ulaznog računa predstavlja konto koji prima prihod ili trošak.   
Općenito gledano, knjiženje računa u glavnoj knjizi temelji se na tri osnovna elementa,  
koje možemo provjeriti otvaranjem [**predloška knjiženja**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) kojim pokušavamo proknjižiti taj račun.    
Da bismo prije svega provjerili koji je to predlozak, potrebno je otvoriti tablicu [**vrste računa**](/docs/configurations/tables/sales/invoices-type) u kojoj je degfinirana veza između vrste računa i predloška knjiženja. Tri osnovna elementa su: kupac ili dobavljač, PDV te trošak ili prihod. Ako nedostaje bilo koji od tih elemenata, knjiženje se ne može ispravno provesti.

Unutar predloška knjiženja, koji je ručno kreiran ili izmijenjen u odnosu na standard generiran putem *Fast Start*-a,  
može se steći pogrešan dojam da je konto prihoda definiran kao fiksan,  
budući da su uneseni i konto i podkonto.  
Na prvi pogled, čini se da bi program trebao jednostavno koristiti taj konto  
i zamijeniti opći konto kupca s podkontom preuzetim iz zaglavlja računa.

Međutim, budući da je postavljen kriterij čitanja oporezivi podkonto, program u svakom slučaju traži podatak za zamjenu — najprije u samom računu,  
a zatim u šifarniku kupca.

Dakle, da bi se problem riješio, potrebno je u računu definirati konto prihoda od prodaje, koji može biti povezan izravno s kodiranim artiklom. Alternativno, može se unijeti zadani konto u šifarnik kupca. Na taj način automatsko knjiženje može pravilno funkcionirati.

Napomena: kriterij čitanja *Ukupno oporezivo* u predlošku knjiženja neće raditi,  
jer pokušava čitati iz PDV mreže u kojoj nedostaje obavezni podatak — konto protustavke.  
Zbog toga knjiženje s fiksnim podkontom nije podržano;  
uvijek je potrebno upravljati prihodima i troškovima kroz šifarnike kupaca i dobavljača.

:::note[Poruka]
Račun s brojem ... tip ... godina ... tvrtke AAA d.o.o. ne može biti knjižen jer je **knjiženje uravnoteženo**.
:::

Iako se na prvi pogled čini očitim da ova poruka znači zabranu spremanja knjiženja  
u kojem ukupni dug ne odgovara ukupnom potraživanju (prema postavkama u predlošku knjiženja),  
mogući uzrok može biti i pogrešna konfiguracija samog predloška —  
primjerice, ako u računovodstvenoj shemi nedostaje redak koji se odnosi na PDV.  
U tom slučaju, ako račun sadrži PDV i ako je već izvršeno razdvajanje oporezivog dijela,  
sustav neće moći stvoriti knjiženje u glavnoj knjizi koje bi bilo uravnoteženo,  
pa će se generirati greška.

Napomena: ova blokada ovisi o parametru, ali se strogo ne preporučuje njezino isključivanje  
radi prihvaćanja neuravnoteženih knjiženja, osim u iznimnim ili privremenim slučajevima  
kada se želi testirati rezultat (koji će biti netočan).

:::note[Poruka]
Račun s brojem ... tip ... godina ... tvrtke AAA d.o.o. ne može biti knjižen jer **u glavnoj knjizi postoji 1 redak s kontom bez podkonta**.  
:::

Ova poruka (koja se teže tumači) znači da program ne može spremiti knjiženje  
ako nije definiran detaljni podkonto.

Među raznim razlozima zbog kojih se ovo može dogoditi, a koji su povezani s tim da predložak knjiženja definira glavne kontne grupe (bez detaljnog podkonta), uključujući i kupce i dobavljače, može se raditi o tome da u [**parametrima računovodstva**](/docs/configurations/parameters/finance/accounting-parameters) nedostaje veza između tipa konta (npr. novododana kategorija) i pripadajuće glavne grupe. Odsutni parametar sprječava izvođenje automatizma koji dovršava knjiženje.

:::note[Poruka]
Račun s brojem ... tip ... godina ... tvrtke AAA d.o.o. ne može biti knjižen jer **vrijednost otvorenih stavaka ne odgovara knjiženju**.
:::

Ova poruka obično ukazuje na to da u računu nedostaju definirani uvjeti plaćanja,  
pa se stavka ne može otvoriti, što uzrokuje razliku i blokadu procesa.

Mogućnost blokiranja knjiženja ovisi o parametru unutar predloška knjiženja.

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>