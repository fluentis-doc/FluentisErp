---
title: Novo automatsko zatvaranja
sidebar_position: 2
---

Postupak automatskog zatvaranja konta upravlja zatvaranjem bilance i naknadnim ponovnim otvaranjem: radi se samo o računovodstvenom zapisu, bez ikakvog utjecaja na stranu knjiženja.  

Obrazac se sastoji od niza kartica i zajedničkog područja zaglavlja u kojem se unose glavni podaci, poput datuma zatvaranja i opisa. 

## Obavezna polja  

Nakon pokretanja novog zatvaranja, prilikom otvaranja obrasca, automatski se predlažu datum zatvaranja (današnji datum) i broj verzije (redni broj), iako su ta polja i dalje moguća za uređivanje.

Potrebno je unijeti opis i **ispuniti obavezna polja prisutna na kartici Parametri prije nego što se nastavi sa spremanjem** zatvaranja.

Spremanje je potrebno kako bi se omogućili naredbe prisutne na alatnoj traci za obradu izračuna, **Vrati vrijednosti podkonta**, i evidentiranje, te za, **Kreiranje registracije za zatvaranje konta**.

### Parametri

U kartici 'Parametri' potrebno je unijeti:

- podatke za filtriranje računovodstvenih stavki koje će biti predmet zatvaranja računa; **datumi knjiženja i datumi obračuna** određuju koje će se stavke uključiti u računovodstveni saldo. Posebno će datumi obračuna biti vezani za razdoblje financijskog izvještaja (1/1/….-31/12/….), dok bi polje 'do datuma knjiženja' moglo biti pomaknuto u sljedeću poslovnu godinu kako bi se uključile ispravke: **preporuča se jednostavno ne postavljati filter za datume knjiženja**.

- šifre podkonta, vrstu temeljnice koja će se koristiti te datum knjiženja i datum obračuna računovodstvenih zapisa zatvaranja glavne knjige; ti podaci (osim datuma knjiženja) automatski se prenose ako su uneseni unutar **[računovodstvenih parametara](/docs/configurations/parameters/finance/accounting-parameters)** (kartica ‘Računi');

- (opcionalno) mogućnost istodobnog upravljanja ponovnim otvaranjem konta umjesto da se njime upravlja odvojeno **[odgovarajućom naredbom](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new)**. 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab/image01.png)

**Godina knjiženja**: poziva odgovarajuću godinu iz **[računovodstvenih parametara](/docs/configurations/parameters/finance/accounting-parameters)**, služi za upravljanje ponovnim otvaranjem stavki prilagodbe, koje se aktivira na dnu obrasca s flagom **Žiro račun – prilagodba zapisa**: si tratta di gestire, in coda alla riapertura conti, i movimenti di riattribuzione dei risconti e dei ratei (a patto che questi siano già stati elaborati con la procedura **[Scritture di assestamento](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**) ai costi/ricavi relativi (i risconti saranno registrati alla stessa data dell'apertura conti, i ratei invece alla data della registrazione del documento d'origine).

Flag **Upravljanje saldom** (zatvaranje i ponovno otvaranje) **za knjiženje valute**: ako je aktivirana, program unosi redak za svaku valutu zapisa određenog podkonta, pri čemu jasno održava ispravan ukupni iznos u valuti tvrtke. Ova mogućnost je potrebna kako bi se osigurala točnost početnih salda u ispisu 'Izvod računa u valuti'.
 
UPOZORENJE: Prije pokretanja izračuna, potrebno je provjeriti postavke tablice **[Vrste konta](/docs/configurations/tables/finance/account-types)**: posebno vrste računa za kupce, dobavljače, agente i banke, osim što moraju imati oznaku u odgovarajućim stupcima, moraju imati i drugu oznaku u jednom od prva dva stupca, koja se odnose na imovinu i obveze.

Nakon toga je moguće započeti s **Povrati vrijednost podkonta** pomoću odgovarajuće tipke, kako bi program izračunao saldo svakog podkonta i prikazao podatke u karticama ‘Dobit i gubitak’ te ‘Imovinski’. Kada su rezultati sigurni, moguće je prijeći na posljednju fazu postupka: vraćajući se na karticu parametri, možemo kliknuti tipku Kreiraj zapis za zatvaranje konta, koji će stvoriti odgovarajuća računovodstvena knjiženja i postaviti flag na **Knjiženo**.

:::NAPOMENA
Ako je flag **Žiro račun – prilagodba zapisa** aktivirana, pri pokretanju naredbe **Povrati vrijednost podkonta**, postat će vidljiva dodatna kartica **[Ponovno otvaranje stavki prilagodbe](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**.
:::
 
#### Specifične tipke
> **Spremi**: tipka za spremanje zaglavlja zatvaranja konta, koji se može aktivirati nakon unosa opisa.  
> **Povrati vrijednost podkonta**: tipka za izračun salda svakog podkonta od strane programa i prikaz relevantnih podataka u karticama ‘dobit i gubitak’ te ‘imovinski’.
> **Kreiraj zapis za zatvaranje konta**: tipka za kreiranje knjiženja zatvaranja konta.  
> **Povrati knjiženje**: tipka za poništavanje i vraćanje knjiženja zatvaranja računa.

### Dobit i gubitak

U kartici Dobit i gubitak bit će sažeti negativni i pozitivni elementi prihoda, s prikazom rezultata poslovanja i mogućnošću filtriranja konta prisutnih u sekcijama. Pozitivni elementi prihoda i negativni elementi prihoda se mogu filtrirati putem polja Detaljni konto troška, Detaljni konto prihoda i tipke za pretraživanje smještenih na traci s alatima (vidi tablicu u nastavku).

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/profit-and-loss-tab/image01.png)

#### Specifične tipke 
> **Pretraživanje pozitivnih elemenata prihoda – podkonto**: tipka za pretraživanje željenih konta prihoda unutar zatvaranja. 
> **Pretraživanje pozitivnih elemenata prihoda – podkonto**: tipka za pretraživanje željenih konta troškova unutar zatvaranja.  

### Imovinski

U kartici **Imovinski** bit će sažeti elementi aktive i pasive s prikazom rezultata poslovanja i mogućnošću filtriranja (na sličan način kao u kartici **[Dobit i gubitak](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**) računa prisutnih u dvjema donjim sekcijama putem odgovarajućih polja i tipki za pretraživanje smještenih na traci s alatima (vidi tablicu u nastavku).

#### Specifične tipke  
> **Pretraživanje aktive imovine**: tipka za pretraživanje željenih konta aktive unutar zatvaranja.
> **Pretraživanje pasivne imovine**: tipka za pretraživanje željenih konta pasive unutar zatvaranja.

### Zapis

Knjiženja (koja se mogu pregledati dvostrukim klikom) su sljedeća:

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image01.png)

#### U prvom prikazu:

- prvo knjiženje zatvara prihode,

- drugo knjiženje zatvara troškove,

- treće knjiženje bilježi dobitak ili gubitak zatvaranjem konta.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image02.png)

#### U drugom prikazu: 

- četvrto knjiženje zatvara obveze,

- peto knjiženje zatvara aktivu (uključujući račune dobiti ili gubitka);  

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image03.png)

#### U trećem prikazu: 

prikazana su tri knjiženja za otvaranje: 

- prvo otvara obveze, 

- drugo otvara aktivu, 

- treće prenosi račun dobiti/gubitka tekuće godine na dobit/gubitak prethodne godine.

:::note NAPOMENA

Eventualne pogreške koje se otkriju kasnije mogu se riješiti na sljedeće načine:  

- moguće je izravno izbrisati izvršeno zatvaranje konta i, na zahtjev programa, izbrisati i povezana knjiženja kako bi se postupak započeo ispočetka; 

- kao alternativa, dostupna je tipka za *vraćanje unazad* **Povrati knjiženje** (u kartici Parametri). 
:::

Postoje specifične korisničke dozvole za knjiženje i poništavanje.  

:::danger PAŽNJA  
Zatvaranje konta blokirat će knjiženja unutar postavljenog raspona datuma i, osim toga, neće biti moguće unositi knjiženja unutar tog raspona datuma.   

**Izvanbilačna konta** nikada nisu predmet zatvaranja i ponovnog otvaranja računa u ovom postupku.  
::: 

### Ponovno otvaranje stavki prilagodbe

U ovom obrascu vidljiv je rezultat opcije automatskog prijenosa stavki usklađenja nakon knjiženja ponovnog otvaranja konta. S ovom opcijom, aplikacija će evidentirati storno usklađenja na datum ponovnog otvaranja, **dok će prijenos obračuna izvršiti na izvorni datum zapisa samog usklađenja.** 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image01.png)

Dvostrukim klikom na redke moguće je prikazati detalje izvršenih knjiženja.  

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image02.png)

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image03.png)

:::tip INFO  
Generiranje knjiženja za ponovno otvaranje stavki usklađenja (obračuni aktive i pasive) na datum izvornog knjiženja ispravka je nužno radi usporedbe s jednostavnim otvaranjem na 1.1., kako bi se pravilno upravljalo i proračunima zatvaranja za razdoblja unutar godine uz Fluentis.   

Na primjer, ako se 15.4.2023. knjižio trošak s obračunskim razdobljem od 01.11.2022. do 31.03.2023., tada će se knjižiti obračun pasive na 31.12. za 2 mjeseca. Ako se ispravka (poništavanje) knjiži na 01.01., rezultat ovisi o tome kako su filtrirani i upravljani obračuni/pretplate za zatvaranje unutar godine, te postoji rizik da će se prikazati samo poništavanje troškova (tj. ponovno otvaranje obračuna) i ne račun na trošak u izvještaju za razdoblje. 

S druge strane, ako se poništavanje knjiži na isti dan kao i račun, bez obzira na daljnje filtriranje za izvlačenje salda za zatvaranje unutar godine, dva knjiženja će "putovati zajedno", osiguravajući očekivani učinak (u ovom slučaju neutralan utjecaj na bilancu jer je trošak već bio prebačen na prethodnu poslovnu godinu).
:::