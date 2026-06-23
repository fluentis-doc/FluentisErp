---
title: Kontni plan
sidebar_position: 1
---

### Alatna traka:
:::note Dugmad *Ribbon Bara*

| Funkcija | Značenje |
| --- | --- |
| Traži konto | Vrši pretragu konta/podkonta unutar izabrane klase. |
| Novi konto | Postavlja kursor za unos novog konta. |
| Premesti konta | Otvara obrazac za premeštanje konta iz jedne klase u drugu. |
| Otvori šifarnike | Otvara šifarnik povezan sa izabranim podkontom kupca/dobavljača/banke/agenta. |
| Novo grupisanje | Unos nove „matične“ klase u strukturi kontnog plana, nezavisno od izabrane klase. |
| Nova grupa | Unos nove klase. Nije moguće uneti više klasa unutar klase koja već sadrži konto/podkonto. |
| Obriši konto | Služi za brisanje izabranog konta. Brisanje je moguće izvršiti i izborom konta i pritiskom na taster Delete. Nije moguće obrisati podkonto ako je korišćen u sistemu. (U tom slučaju moguće je postaviti datum isteka važenja kako bi postao nevidljiv korisniku.) |
| Obriši grupu | Služi za brisanje izabrane klase. |
| Proširi granu | Funkcija otvara padajući prikaz za izabranu klasu. |
| Sažmi granu | Funkcija zatvara padajući prikaz za izabranu klasu. |
| Novi centar troška | Omogućava unos novog centra troška za izabrani podkonto. |
| Obriši centar troška | Briše označeni centar troška. |
| Novi profitni centar | Omogućava unos novog profitnog centra za izabrani podkonto. |
| Obriši profitni centar | Briše označeni profitni centar. |
| Novi automatski konto | Unos novog automatskog podkonta za izabrani podkonto. |
| Ukloni automatski konto | Briše izabrani automatski podkonto. |

:::

---

### Povezanost sa drugim tabelama

Šifriranje kontnog plana podrazumeva popunjavanje niza tabela: [Tip konta](/docs/configurations/tables/finance/account-types), [Šifarnik kontakata](/docs/erp-home/registers/contacts/registers-management), [Stavke troškova](/docs/configurations/tables/finance/charge-item), Tipovi periodičnosti budžeta, Centri troška, Centri profita, Odeljenja, Ispravke/integracije knjiženja, Knjiženja razlika budžeta, [Automatski predlošci](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates), Tip iznosa.

### Unos strukture kontnog plana

Šifriranje kontnog plana započinje unosom liste klasa u gornjem delu obrasca:

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

Putem dugmadi za unos grupisanja/klasa moguće je dodavati nove nivoe prve hijerarhije ili niže nivoe u odnosu na trenutno izabrani, pri čemu se svakom dodeljuje jedinstvena alfanumerička šifra, opis i tip konta.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image02.png)

**Novo grupisanje**: koristi se isključivo za dodavanje novog **nultog nivoa** (grupa bez nadređene grupe).

**Nova grupa**: služi za unos nove podgrupe unutar izabrane grupe.

**Struktura**: polje koje sistem automatski popunjava kako bi prikazao spoj šifara grupa i grupisanja kojima red pripada;

**Alternativni opis**: omogućava unos dodatnog opisa koji se može koristiti, na primer, u izveštajima bilansa (prilagođavanjem posebnim alatima). Na primer, može se uneti prevod opisa konta.

**Tip grupe**: prihvata tip konta grupe. *Combo box* je povezan sa tabelom Tipovi konta. Preporučuje se popunjavanje tipa konta i za grupe i za grupisanja, kao što je opisano u nastavku u delu za unos podkonta.

### Unos detalja kontnog plana

Kada je odabran najniži nivo grupe, u donjem prikazu će se aktivirati lista konta i podkonta.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

Ova **donja tabela popunjava se direktnim unosom podataka** u redove. Uvek je vidljiv poslednji dostupan red za unos novog zapisa, označen zvezdicom u plavom polju u levom uglu.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)

**PAŽNJA: Struktura kontnog plana zahteva da se za svaki najniži nivo grupe u koji se unose detalji definiše najmanje jedno konto („glavno“) bez podkonta koje služi kao poslednje grupisanje operativnih podkonta. Napominjemo da se samo konta sa podkontima mogu koristiti u knjigovodstvenim knjiženjima.**

Preporučuje se korišćenje uzastopne numeracije sa istim brojem znakova (npr. sva konta sa 4 znaka, svi podkonti sa 3).

**PAŽNJA:** Prilikom unosa podkonta u detalje aktiviran je brojač koji automatski povećava broj podkonta za jedan u odnosu na poslednji uneti u toj grupi; preporučuje se izbegavanje „rupa“ u numeraciji jer ih sistem ni u kom slučaju neće automatski popuniti.

Postupiti sledećim redosledom: dodati **Tip konta**, zatim **Konto** (bez podkonta ako želite da kreirate novu „matičnu“ stavku), a potom **Podkonto** (ako se podkonto unosi prvi put za tu grupu, ručno unesite broj i definišite broj znakova, na primer 1 ili 01 ili 001; pri sledećem unosu broj će se automatski povećati).

**Datum unosa**: datum kreiranja konta/podkonta;

**Datum poslednje izmene**: datum poslednje izmene šifre konta/podkonta, koji sistem automatski ažurira;

**Kreiraj otvorene stavke**: opcija koja označava da li se za konto povezan sa evidencijom kupaca i dobavljača upravlja otvaranjem otvorenih stavki. Oznaka se preuzima i održava unutar registra. Moguće je aktivirati ovu opciju i za konta koja nisu deo registra (troškovi, prihodi itd.) kako bi se otvorene stavke kreirale prilikom knjiženja (retko korišćen slučaj). U tom slučaju korišćeni knjigovodstveni nalog mora imati aktivan parametar za otvaranje stavki. Aktivna oznaka na kontu omogućava proveru usklađenosti između knjiženja i otvorene stavke. U svakom slučaju, otvaranje stavki za konta koja nisu deo registra mora se obaviti ručno i ne može biti automatsko.

**Omogući poslovne centre**: aktiviranjem ove opcije omogućava se upravljanje centrima troškova i na bilančnim kontima (retko korišćeno); na primer kod kapitalizacije internih radova.

**Datum isteka važenja**: koristi se za **blokiranje korišćenja konta u novim knjiženjima** (počev od unetog datuma), uz zadržavanje vidljivosti prethodno unetih prometa;

**Drugi opis**: pogledati **Alternativni opis** iznad;

**Razgraničenja/Obračuni – aktivni / pasivni – Konto / Podkonto / Opis**: polja koja omogućavaju unos posebnog konta za aktivna i pasivna razgraničenja i obračune, sa prioritetom u odnosu na opšta konta definisana u parametrima knjiženja. Koriste se za automatsko upravljanje obračunatim i razgraničenim prihodima i rashodima. Konto troška ili prihoda na koji se odnose mora imati odgovarajući tip konta (npr. „za razgraničenja“) sa aktivnom servisnom oznakom u tabeli **Tip konta**.

**Konto / Podkonto / Odloženi PDV**: uglavnom se koristi za lokalizacije van Italije gde postoji potreba za knjiženjem neodbitnog dela PDV-a na poseban konto.

**Procenat neodbitnog PDV-a**: polje povezano sa prethodnim. Omogućava definisanje procenta neodbitnog PDV-a direktno na kontu umesto na PDV šifri.

**Stavka troška / Opis**: padajuća lista povezana sa tabelom **Stavke troškova**; omogućava povezivanje sa statističkim podacima korisnim za kontroling.

**Varijabilnost**: ovo polje, povezano sa tabelama *Dodela centra troška* i *Varijabilnost centra troška* (koje služe za povezivanje konta sa poslovnim centrima radi automatske raspodele knjigovodstvenih prometa), posebno se koristi kada je knjigovodstveni promet povezan sa više poslovnih centara. Kao i istoimeno polje u tabeli *Varijabilnost centra troška*, prihvata procentualnu vrednost koja određuje da li je trošak **fiksan** (varijabilnost 0%), **potpuno varijabilan** (varijabilnost 100%) ili **delimično varijabilan** (npr. 70%). Pogledati sliku ispod za pravilno popunjavanje.

BILJEŠKA: Ne treba ih mešati sa poljem **Procenat** (koje se nalazi u tabeli Dodela CDC) koje služi za određivanje procenta knjigovodstvenog prometa koji treba dodeliti tom centru (na primer, trošak podeljen između dva centra u odnosu 50% i 50% ili 70% i 30%).

Polje **Varijabilnost** prisutno u glavnoj tabeli ima prioritet u odnosu na istoimeno polje u tabeli *Varijabilnost CDC*. Iz tog razloga, ako je popunjeno samo polje u glavnoj tabeli, ta vrednost će se koristiti za oba (ili sva) poslovna centra povezana sa izabranim kontom.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png)

**Ne koristi se u kontrolingu**: opcija korisna samo ako su u tabeli preduzeća aktivirane napredne funkcije kontrolinga. Omogućava isključivanje (ako je aktivirana) knjigovodstvenih prometa evidentiranih na izabranom kontu iz posebnih obrada kontrolinga (kao što su obračuni po nosiocima troškova, formule i tehničke amortizacije specifične za kontroling). Na taj način moguće je ručno upravljati tim podacima kroz posebne funkcije kontrolinga.

Primer: ako se žele koristiti posebni obračuni amortizacije definisani unutar samog kontrolinga, umesto da se polazi od knjigovodstvenih podataka. Drugi primer: želi se ručno evidentirati trošak nadzornog odbora i ručno ga rasporediti kroz funkcije kontrolinga radi budžetiranja i izveštavanja, umesto čekanja na knjiženje odgovarajućeg troška u finansijskom računovodstvu (što je često retroaktivno i samim tim neblagovremeno).

Napomena: knjigovodstveni promet će se i dalje uključivati u polugodišnje zatvaranje knjiga (**Kontroling > Privremena zatvaranja**).

**Metodologija** opisana iznad podrazumeva potrebu za periodičnim izvršavanjem **usklađivanja** između knjigovodstvenih prometa (koji utiču na bilans) i pokazatelja upravljačkog računovodstva (specifičnih za kontroling). Takva usklađivanja prikazuju se u posebnim izveštajima kontrolinga putem posebnih korekcija (sa pozitivnim ili negativnim predznakom, u zavisnosti od situacije), koje jasno pokazuju usklađenje ukupnih iznosa iz bilansa sa ukupnim iznosima upravljačkog računovodstva (nastalim iz ručno unetih ili neknjigovodstvenih prometa).

Sledeća dva polja služe upravo za ovu svrhu:

**Period usklađivanja**: padajuća lista omogućava izbor da li će se gore opisano usklađivanje vršiti godišnje, polugodišnje ili biti onemogućeno (izborom opcije *Nijedan*).

**Tip usklađivanja**: padajuća lista omogućava izbor između dve različite metodologije usklađivanja.

**Procenti varijacije / Opis**: padajuća lista povezana sa tabelom [Procenti valorizacije](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), omogućava definisanje procenata (prethodno definisanih i kategorizovanih u povezanoj tabeli) za svaki konto. Ovi procenti se koriste u različitim procesima kontrolinga, kao što je planiranje budžeta na osnovu prethodne godine uz primenu povećanja ili smanjenja.

**Raspodela perioda / Opis**: padajuća lista povezana sa tabelom [Raspodela perioda](/docs/configurations/tables/controlling/managerial-accounting/periods-distribution), omogućava dodeljivanje specifične logike raspodele knjigovodstvenih prometa po pojedinačnim periodima tokom obrade polugodišnjih zatvaranja.

**Grupe usklađivanja / Opis**: padajuća lista povezana je sa tabelom [Grupe usklađivanja](/docs/configurations/tables/controlling/analytical-accounting/adjustments-groups), u kojoj je moguće definisati grupisanja konta korisna za izradu specifičnih kontroling izveštaja. Polje nema drugu operativnu funkciju niti generiše dodatne automatizme.

**Spoljni opis 1 / 2 / 3**: dodatna polja za unos alternativnih opisa (na primer na drugim jezicima). Mogu se koristiti prilikom prilagođavanja izveštaja bilansa.

### UNOS POVEZANOSTI IZMEĐU KONTA I POSLOVNIH CENTARA

Povezivanje se vrši jednostavnim izborom odgovarajućeg podkonta i unosom liste CDC/CDP (centara troškova/profitnih centara) u dve za to predviđene tabele. Moguće je povezati raspodelu na različite poslovne jedinice, mada se u praksi polje poslovne jedinice najčešće ne popunjava. Ne postoji kontrola koja proverava da li zbir unetih procenata iznosi 100%.

BILJEŠKA: Aktiviranjem naprednih funkcija kontrolinga u tabeli [Preduzeće](/docs/configurations/tables/general-settings/company), primenjuje se nova logika rada u kojoj profitni centri više nemaju centralnu ulogu. Umesto njih koriste se centri troškova (CDC) kao poslovni centri na koje se raspoređuju pozitivne i negativne stavke. Na osnovu tih podataka moguće je sprovoditi napredne analize, preraspodele i poređenja radi utvrđivanja marži i drugih pokazatelja poslovne uspešnosti.

Iz tog razloga tabela **Profitni centri** (zadržana radi kompatibilnosti sa standardnim logikama) premeštena je na karticu **Ostalo** (povezanu sa tabelom Dodela CDC).

Takođe treba imati u vidu da postoje i druga mesta na kojima se definišu centri troškova/profita: matični podaci kupaca, dobavljača i agenata, matični podaci artikala, skladišta i osnovnih sredstava. Prioritet popunjavanja ovih vrednosti definiše se parametrima upravljanja odgovarajućeg modula.

### Tabela dodele CDC

**Broj**: redni broj stavke;

**Centar troška / Opis**: padajuća lista povezana sa tabelom **Centri preduzeća**, koja omogućava izbor željenog centra;

**Procenat %**: unosi se procenat dodele knjigovodstvenog prometa centru navedenom u redu. Na primer, unosom vrednosti 100 promet će biti dodeljen tom centru u celosti, dok će unos 50 dodeliti 50% tom centru, a ostatak će biti raspodeljen na druge centre navedene u narednim redovima.

**Odeljenje / Opis**: veza se po potrebi može definisati i po pojedinačnom odeljenju.

**Datum početka važenja**: označava datum od kojeg je automatsko dodeljivanje knjiženja centru aktivno.

**Datum isteka važenja**: označava datum nakon kojeg automatsko dodeljivanje knjiženja centru više neće biti primenjivano.

**Dimenzija / Opis**: padajuća lista koja omogućava dodelu odgovarajuće analitičke dimenzije poslovnom centru koji se unosi (ovaj koncept je dostupan samo uz aktivirane napredne funkcije kontrolinga u tabeli preduzeća).

**Kategorija troška / Opis**: padajuća lista povezana sa tabelom **Kategorije centara preduzeća**, omogućava povezivanje svake **Dimenzije** kontroling analize sa kategorijom koja je zatim povezana sa različitim poslovnim centrima (pošto je kategorija obavezno polje pri definisanju svakog poslovnog centra). Na taj način, prilikom unosa knjigovodstvenog prometa, operateru se omogućava izbor između unapred definisanih poslovnih centara. Ovo može predstavljati alternativu strogo definisanom povezivanju centra sa kontom (što je moguće aktiviranjem parametra „Ograničenje konto/centar“ u šifarniku dimenzije).

### Tabela automatskih podkonta (kartica Ostalo)

U ovoj mreži moguće je definisati, za svaki podkonto koji će biti korišćen u računovodstvenom knjiženju unetom putem računovodstvenog šablona sa pridruženim drugim automatskim šablonom, specifičan podkonto koji će se koristiti u knjiženju povezanom sa tim drugim automatskim šablonom.

Na taj način moguće je dinamički menjati podkonta koja koristi drugi šablon, u zavisnosti od podkonta koji zamenjuje generički konto (obično definisan u šablonu glavnog knjiženja) u trenutku kreiranja računovodstvenog knjiženja putem programskih automatizama.

Pored šifre podkonta, potrebno je uneti i vrstu iznosa, kao i stranu knjiženja (duguje ili potražuje) (pogledati dokumentaciju za upravljanje računovodstvenim šablonima).

:::note Napomena

Najvažniji deo logike funkcionisanja podrazumeva:

- da se podkonto koristi u PDV sekciji unosa;

- da se knjiženje zasniva na računovodstvenom šablonu koji uključuje automatski šablon;

- pod tim uslovima ERP će u automatsko knjiženje dodati automatska podkonta povezana sa izabranim podkontima;

- vrednosti tih podkonta obračunavaće se prema vrsti iznosa definisanoj u sekciji „automatska podkonta“, ali primenjenoj na izvorni PDV red.
:::

:::tip[Predlog automatskog usklađivanja modela reklasifikacije prilikom unosa novog konta]

Aktiviranjem opšteg parametra **"FS-CO-AskModelAssignmentOnNewAccount"** unutar grupe **Controlling**  
(*Konfiguracija > Parametri > Opšti parametri > Business Layer Settings > Business Areas > Controlling*),

prilikom dodavanja novog konta ili podkonta u kontni plan Fluentisa prikazuje se iskačući prozor u kojem je moguće odabrati postojeće konto/podkonto sličnog tipa. Sistem će zatim automatski dodati novo konto u iste modele reklasifikacije u kojima se nalazi izabrano referentno konto.

### Primer

Ako se kreira novi podkonto za određenu uslugu, moguće je uneti šifru druge usluge koja je već uključena u modele reklasifikacije. Na taj način novo konto će automatski biti uključeno u iste pozicije modela, bez potrebe za ručnim usklađivanjem.

### Dostupne opcije

- **Onemogući predlog** (*Disabilita prova*)  
  Postavlja parametar na vrednost *false* i predlog za automatsko usklađivanje više se neće prikazivati.

- **Da** (*Sì*)  
  Izvršava automatsko usklađivanje.

- **Ne** (*No*)  
  Ne izvršava usklađivanje, ali funkcionalnost ostaje aktivna i predlog će se ponovo prikazati prilikom sledećeg unosa novog konta.

:::

---

### Dodatni podaci

Upućuje na dokumentaciju vezanu za [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata)

---

### VIDEO TUTORIJALI

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q_0azlCYnIQ" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>