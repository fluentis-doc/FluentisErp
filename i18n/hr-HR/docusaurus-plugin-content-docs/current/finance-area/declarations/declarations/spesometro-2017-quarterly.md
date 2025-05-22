---
title: Spesometar 2017. tromjesečni  
sidebar_position: 8
---

Iz ovog obrasca moguće je pretraživati već obrađene i prisutne kvartalne obrade Spesometra u bazi podataka, ili nastaviti s kreiranjem novog Spesometra.

UVOD:

Obaveza Spesometra uvedena je člankom 21. Zakona (DL) od 31. svibnja 2010. godine, br. 78, koji je predvidio elektroničko slanje svih aktivnih i pasivnih transakcija bitnih za PDV (prijenosi i kupnje dobara, pružanje i primanje usluga).
  
Od 2017. godine, dekret 193/2016. uveo je obvezu tromjesečne komunikacije. 

**Dokumenti koji ne ulaze u tromjesečni spesometar**:

- Nisu obavezna izvještavanja o podacima elektroničkih faktura, izdanih i primljenih, koje su prošle kroz Sustav za razmjenu podataka (SdI). U slučaju da sve izdane i primljene fakture ne prođu kroz SdI, porezni obveznik može se ograničiti na elektroničko slanje podataka o drugim fakturama, ili, ako mu je to prikladnije, može poslati podatke o svim fakturama, uključujući i elektroničke;

- Podaci sadržani u dokumentima koji nisu fakture (kao što su podaci sa kartica za gorivo) ne moraju biti izvještavani.

PRELIMINARNE AKTIVNOSTI:

Kako bi se ispravno generirao datoteku (u xml formatu koja se mora prenijeti na odgovarajući portal za razmjenu podataka s Poreznom upravom), potrebno je pripremiti neke osnovne arhive unutar tablica Fluentis-a.

- **[Tipovi dokumenta](/docs/configurations/tables/general-settings/document-types)**

- **[Stopa PDV-a](/docs/configurations/tables/finance/vat-rates)**

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image01.png)

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image02.png)

All'interno delle tabelle di cui sopra è necessario, in particolare, gestire i campi **Šifra javne uprave** (isti oni koji se koriste za elektroničko fakturiranje prema Javnim Upravama – budući da se radi o sličnom sustavu razmjene podataka)

Šifriranje koje treba koristiti objavila je Porezna uprava kao dio tehničke dokumentacije za izradu telematske datoteke, a u nastavku ga prenosimo:  

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image03.png)

OPERATIVNE UPUTE:

**Sve transakcije koje uključuju PDV uključene su u prijavu: ako je potrebno (npr. kartice goriva), mogu se ručno ukloniti iz prijave.**  

Intra-EE fakture automatski se unose na temelju vrste PDV transakcije korištene u poslovnom razlogu, s oznakom dokumenta TD10 (krediti za intra-EE ostaju s oznakom TD04); ako se radi o uslugama, potrebno je ručno ispraviti redak u prijavi.

Stopa PDV koja se koristi u nabavama u mehanizmu obrnutog poreza, od 2021. godine, više se ne šalje s kodom N6 te se stoga više ne popunjava automatski s ovim kodom izuzeća (automatizam ostaje aktivan za prethodne godine); čak iu ovom slučaju, međutim, kod izuzeća dostupan je u postupku za ručne izmjene.

Šifre povezane s dospijećem PDV-a ([I] PDV s trenutnim dospijećem, [D] PDV s odgođenim dospijećem, [S] PDV s podjelom plaćanja – split payment), automatski se dodjeljuju prema vrsti PDV kretanja računovodstvene stavke.

Podaci o odbitku/dedukciji PDV-a koji su navedeni, uvijek označeni kao neobavezni u trasi, nisu obrađeni.


POSTUPAK IZRADE:

**Podaci zaglavlja**:

Potrebno je unijeti godinu i tromjesečje za koje se generira datoteka.  

Ostala polja zaglavlja treba popuniti samo ako obveznik dostave podataka o računima nije isti kao obveznik PDV-a na kojeg se ti podaci odnose.  

NE treba ih popunjavati ako je pošiljatelj:  

- isti kao obveznik PDV-a na kojeg se podaci odnose;  

- u ugovornom odnosu s obveznikom PDV-a na kojeg se podaci odnose;  

- posrednik.  

**Put datoteke:** omogućuje određivanje lokalne putanje za spremanje datoteke koja će se slati elektroničkim putem. Datoteka će se svejedno spremiti u dokumentacijski sustav Fluentis te će biti moguće preuzeti njezinu kopiju na lokalno računalo.  

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image04.png)

**Podaci o računima**:

Pritisnite tipku **Izračunaj** nella ribbon bar per riprendere i dati iva del trimestre, che saranno suddivisi nella sezione delle fatture emesse e in quelle ricevute.

U ovoj fazi, sustav će provjeriti postoje li više dokumenata nego što je ministarstvo predvidjelo da se mogu unijeti u svaku datoteku (1000 kupaca i 1000 faktura za svakog za izdanja, 1000 dobavljača i 1000 faktura za svakog za primitke).

U slučaju da se taj limit prekorači, Fluentis će obavijestiti korisnika da će biti potrebno kreirati još jednu izjavu za unosi preostale dokumente (može se poslati N datoteka). 

Osim toga, naziv datoteke već će biti kodificiran prema predviđenoj nomenklaturi (polja Naziv datoteke i Broj uzastopnosti).

Polje “Identifikator datoteke” služi za pohranu u sustavu potvrde koju će telematički sustav ministarstva vratiti: nakon što se to polje pohrani, odjeljak više neće biti moguće uređivati.

Budući da je moguće naznačiti do 1000 dokumenata za svaku stranu, redovi su numerirani uzastopno po redu poreznog broja strane, bez obzira na to što je protokoliranje izvornih PDV registara bez značaja.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image05.png)


**SEKCIJA DTE / DTR (izdani / primljeni računi)**

Podaci koji se šalju za sekciju DTE i klijente su sljedeći (od 2018.): 

Kod države PDV broja (uredljiv u tablici)

PDV broj (ili alternativno OIB) (PDV broj uredljiv u tablici)

Referentni podračun (i povezani podaci) mogu se uređivati u tablici


Za svaki dokument, treba navesti:

Kod vrste dokumenta (preuzet iz tablice Vrste dokumenata, ali uredljiv u tablici)  

Datum i broj prodajnog dokumenta (uredljivo u tablici) 


U donjoj tablici prikazani su PDV podaci za registraciju, trebaju se unijeti:  

Osnovica

Iznos PDV-a

Postotak PDV-a 

Kod izuzeća (obavezno ako nema PDV-a)


U ovoj sekciji podaci su detaljni, u datoteci će biti grupirani prema postotku/kodu izuzeća.  


**ISPRAVCI/OPROSTA**

U slučaju da je potrebno poslati ispravak za već poslan dokument, potrebno je kreirati novu izjavu: nije dopušteno unositi, u jedan datoteka, više od jednog ispravka ili poništenja (tj. ispravak DTE u njegovom datoteci, ispravak DTR u njegovom datoteci, poništenje u odjeljku ANN), pa će biti potrebno stvoriti N izjava.

Za kreiranje ispravka već poslane registracije, dovoljno je stvoriti novu izjavu i koristiti tipku ‘Ručno unošenje ispravka' kako biste pretražili već poslane registracije za navedenu kvartal.

 ![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image06.png)

Jednom kada se odabere iz ove pretrage, Fluentis će prikazati redak u prijavi, popunjavajući istovremeno polje identifikatora datoteke i redni broj unutar prijave:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image07.png)

Moguće je ručno unijeti i/ili modificirati ove podatke. Sekcija za otkazivanje sadrži samo podatke o identifikacijskom datoteci i broj koji treba otkazati, kako je u nastavku istaknuto:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image08.png)


**KREIRANJE DATOTEKE**

Jednom kada je kvartalna izjava završena, bit će moguće nastaviti s izradom datoteke putem tipke **Kreiraj datoteku**

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image09.png)

Jednom kada se operacija završi, datoteke će biti priložene samoj izjavi i bit će dostupne za preuzimanje iz dokumentacije, kao što je prikazano na slici ispod.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image10.png)


**GREŠKE U PRAĆENJU**

Datoteke prikazane kao privitak s imenom ‘...Errors' koriste se u svrhu interne kontrole i označavaju moguće greške u podacima prisutnim u izjavama (nedostajuće porezne identifikacijske brojeve itd.).

PAŽNJA: datoteke koje sadrže pogreške predstavljaju okvirnu indikaciju i NE zamjenjuju službenu proceduru kontrole Agencije za prihode, ta se procedura slobodno može preuzeti s internetske stranice Agencije za prihode. U tu svrhu pogledajte privitak uz ovaj članak.







