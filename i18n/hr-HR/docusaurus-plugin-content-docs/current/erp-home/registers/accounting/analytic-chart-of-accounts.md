---
title: Kontni plan
sidebar_position: 1
---

### Alatna vrpca:
:::note tipke *Ribbon Bara*

| Funkcija | Značenje |
| --- | --- |
| Traži konto | Izvršava pretraživanje konta/podkonta unutar odabrane klase. |
| Novi konto | Postavi kursor za unos novog konta. |
| Premjesti konta | Otvara obrazac kako bi se konto mogao premjestiti iz jedne klase u drugu. |
| Otvori šifarnike | Otvara šifarnik koji je povezan s odabranim podkontom klijenta/dobavljača/banke/agenta. |
| Novo grupiranje | Unos nove ‘matične' klase u strukturi kontnog plana, neovisno o odabranoj klasi. |
| Nova grupa | Unos klase. Nije moguće unijeti više klasa unutar klase koja već ima konto/podkonto. |
| Izbriši konto | Služi za brisanje odabranog konta. Brisanje je također moguće izvršiti odabirom konta i klikom na tipku delete. Nije moguće izbrisati podkonto ako je korišten u sustavu. (u ovom slučaju, možete postaviti datum završetka valjanosti kako biste ga učinili nevidljivim korisniku.) |
| Izbriši grupu | Služi za brisanje odabrane klase. |
| Proširi grananje | Funkcija otvara padajući izbornik za odabranu klasu. |
| Sažmi grananje | Funkcija zatvara padajući izbornik za odabranu klasu. |
| Novi centar troška | Odaberite za unos novog troškovnog centra za odabrani podkonto. |
| Izbriši centar troška | Izbriši označenog troškovnog centra. |
| Nova mjesto za troškove | Odabir za unos novog profitnog centra za odabrani podkonto. |
| Izbriši profitni centar | Izbriši označenog profitnog centra. |
| Novi automatski račun | Unos novog automatskog podkonta za odabrani podkonto |
| Otkaži automatski račun | Izbriši odabrani automatski podkonto |

:::

---

### Povezanost s drugim tablicama
Šifriranje kontnog plana uključuje popunjavanje niza tablica: [Vrsta konta](/docs/configurations/tables/finance/account-types), [Šifarnik kontakata](/docs/erp-home/registers/contacts/registers-management), [Troškovne stavke](/docs/configurations/tables/finance/charge-item), Tipovi periodičnosti proračuna, Centri troška, Centri profita, Odjeli, Ispravci/integracije knjiženja, Knjiženja od razlike u proračunu, [Automatski predlošci](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates), Vrsta iznosa.


### Unos strukture kontnog plana

Šifriranje kontnog plana započinje unosom popisa klasa u gornjem dijelu obrasca: 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

Putem gumba za unos klasifikacija/klasa moguće je umetnuti nove prve razine ili razine niže od one odabrane, pripisujući svakoj jedinstveni alfanumerički kod, opis i vrstu konta.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image02.png)

**Novo grupiranje**: djeluje isključivo kako bi se dodao novi **nulti nivo** (grupa bez nadređenih iznad nje).

**Nova grupa**: djeluje tako da unese novu podgrupu odabrane grupe. 

**Struktura**: polje automatski popunjeno kako bi predstavljalo spoj kodova grupa i grupiranja u kojima se redak nalazi;

**Alternativni opis**: omogućuje da se dodijelit dodatni opis koji se može koristiti, na primjer, u ispisu bilance (prilagođavajući ga posebnim alatima). Na primjer, može se unijeti prijevod opisa konta.

**Vrsta grupe**: prihvaća tip računa grupe. *Combo box* povezan je s tablicom Vrsta računa. Preporučuje se ispunjavanje tipa računa i za grupe i za grupiranje, kao što je opisano u fazi unosa podkonta u nastavku.


### Unos detalja kontnog plana

Kada je odabran najniži nivo grupe, u donjem pregledu će se aktivirati lista konta i podkonta.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

Ova **donja tablica popunjava se direktnim unosom podataka** u redove. Uvijek je vidljiv posljednji dostupni red za unos novog unosa, označen zvjezdicom u plavom području u lijevom kutu.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)

**UPOZORENJE: Struktura plana konta zahtijeva da se za svaku najnižu razinu grupe u koju se unose detalji, unese barem jedan račun ("glavni") bez podkonta koji služi kao posljednje grupiranje operativnih podkonta. Napominjemo da se samo konta s podkontima mogu koristiti u knjigovodstvenim zapisima.**

Preporučuje se pratiti progresivni numerički kriterij s uniformnošću znakova (npr. sva konta s 4 znaka, sva podkonta s 3).

UPOZORENJE: Prilikom unosa podkonta u detalje aktiviran je brojač koji automatski povećava podkonto za jedan u odnosu na zadnji uneseni za tu grupu; preporučuje se izbjegavanje "rupa" u numeraciji jer se automatski neće popuniti ni u jednom slučaju.



Postupiti redoslijedom dodavanja **vrste konta**, zatim **konta** (bez podkonta ako želite stvoriti novu "matičnu" stavku), a zatim **podkonto** (ako se podkonto unosi prvi put za tu grupu, ručno unesite broj i odredite broj znakova, na primjer 1 ili 01 ili 001, pri sljedećem unosu broj će se automatski povećati)

**Datum unosa**: to je datum stvaranja konta/podkonta;

**Datum zadnje promjene**: to je datum posljednje izmjene koda konta/podkonta, automatski ažuriran od strane sustava;

**Stvori otvorene stavke**: opcija koja označava, za račune povezane s evidencijom kupaca i dobavljača, da li se za taj račun upravlja otvaranjem partija. Oznaka se preuzima, i treba je upravljati, unutar evidencije. Moguće je aktivirati oznaku ovdje za račune koji NISU iz evidencije (troškovi, prihodi itd.) kako bi se otvorile partije istovremeno s knjiženjem (rijetko). U tom slučaju, knjigovodstveni uzrok korišten zahtijevat će aktivni parametar za otvaranje partija. U ovom slučaju, aktivna oznaka na računu omogućuje, posebno, provjeru ravnoteže između knjiženja i otvorene stavke. U svakom slučaju, otvaranje partija na računima koji nisu u evidenciji mora se obaviti ručno i ne može se automatski izvršiti.

**Omogući korporativne centre**: Aktiviranjem ove opcije bit će moguće upravljati centrima troškova čak i na bilančnim računima (rijetko); primjerice, povećanja za unutarnje radove u okviru ekonomije, itd.

**Datum kraja valjanosti**: služi za **blokiranje korištenja konta u novim knjiženjima** (počevši od unesenog datuma), zadržavajući vidljivost prethodno unesenih prometa;

**Drugi opis**: pogledajte Alternativni opis gore;

**Ispravke/Ispravci - aktivni / pasivni - Konto / Podkonto / Opis**: Polja koja omogućuju unos, redom za aktivne i pasivne i prelazne račune, specifičnog konta na koji će se knjižiti, s prednošću u odnosu na opća konta za aktivne i pasivne i prelazne račune uključene u [parametri knjiženja](/docs/configurations/parameters/finance/accounting-parameters), ispravke i integracije vezane uz konto troška ili prihoda koji se popunjava. Napomena - za automatsko upravljanje aktivnim i pasivnim obračunatim prihodima i rashodima te razgraničenim troškovima i prihodima, račun troška ili prihoda na koji se odnose ispravke mora imati poseban tip konta (npr. "za ispravke") s aktivnom oznakom usluge u tablici [Tip konta](/docs/configurations/tables/finance/account-types).


**Konto / Podkonto / Odgode**: Uglavnom upravljano za lokacije izvan Italije gdje postoji potreba knjiženja neprihvatljivog dijela PDV-a na zaseban račun.


**Postotak koji se ne odbija**: Uglavnom upravljano za lokacije izvan Italije gdje postoji potreba knjiženja neprihvatljivog dijela PDV-a na zaseban račun. Povezano polje s prethodnim. Omogućuje definiranje postotka neprihvatljivosti PDV-a izravno na računu umjesto na upotrijebljenom PDV kodu.


**Unos troškova / Opis**: padajući izbornik povezan s tablicom [Elementi potrošnje](/docs/configurations/tables/finance/charge-item); omogućuje povezivanje s određenim statističkim podacima korisnim u upravljanju kontrolom.

**Varijabilnost**: ovo polje, povezano s mrežama koje se nalaze s desne strane obrasca, *Dodjela Cdc* i *Varijabilnost Cdc* (potrebne za unos veza između konta i poslovnih centara kako bi se automatski raspodijelili knjigovodstveni pokreti na centre) posebno **se mijenja kada je knjigovodstveni pokret povezan s više od jednog poslovnog centra.**.  Kao i istoimeno polje u tablici Varijabilitet Cdc, prihvaća postotnu vrijednost koja **određuje je li trošak fiksan** (varijabilnost 0%) ili potpuno **varijabilan trošak** (varijabilnost 100%) ili djelomično varijabilan (npr. 70%). Pogledati donju sliku za ispravno popunjavanje.

BILJEŠKA: Ne treba ih zamijeniti s poljem Postotak (prisutnim u tablici Atribucija Cdc) koje služi za označavanje postotka knjigovodstvenog pokreta koji treba dodati tom centru (primjerice, trošak podijeljen između dva centra podjednako ili 50% ili 70% i 30%).

Polje **Varijabilnost** prisutno u glavnoj tablici u komentaru ima prioritet u odnosu na ono prisutno u grid *Variabilnost Cdc*. Iz tog razloga, ako je samo popunjeno polje u glavnoj tablici, podatak će se koristiti za oba (ili sva) povezana centra s odabranim računom. 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png)

**Ne koristi se u kontrolingu**: opcija korisna samo ako su aktivne napredne funkcije za kontroling u tabeli poduzeća, omogućuje isključivanje (ako je omogućeno) knjigovodstvenih prometa prisutnih za odabrani račun iz posebnih obrada kontrolinga (kao što su npr. obrade na temelju nositelja troškova, formule i tehničke amortizacije specifične za kontroling). Na taj način bit će moguće ručno upravljati putem specifičnih funkcija kontrolinga.

Primjer: ako se žele koristiti specifične amortizacije definirane unutar funkcija samog kontrolinga umjesto polaska od knjigovodstvenih podataka. Drugi primjer: želi se ručno evidentirati trošak nadzornog odbora, dodjeljujući ga ručno funkcijama kontrolinga kako biste upravljali proračunima i izvješćima, umjesto čekanja na evidentiranje pripadajućeg troška u računovodstvu (tipično retroaktivno i stoga ne pravodobno).

Bilješka: knjigovodstveni će se pokret i dalje uključivati u polugodišnje zatvaranje knjiga (Kontroling > Privremena zatvaranja).

**Metodologija** opisana gore određuje potrebu za periodičnim izvršavanjem **prilagodbe** kako bi se uskladili knjigovodstveni pokreti (koji utječu na bilancu) s pokazateljima upravljačkog računovodstva (specifičnim za kontroling). Takve prilagodbe bit će prikazani u posebnim izvještajima kontrolinga putem određenih prilagodbi (s pozitivnim ili negativnim oznakama, ovisno o situaciji) koje jasno ukazuju na usklađivanje ukupnih iznosa u bilanci s ukupnim iznosima u upravljačkom računovodstvu (koji proizlaze iz ručno upravljanih pokreta ili pokreta koji nisu generirani iz knjigovodstvenih podataka).

Sljedeća dva polja služe za ovu radnju:

**Vrijeme uravnoteženja**: padajući izbornik omogućuje odabir hoće li gore navedeni obračun biti godišnji, polugodišnji ili onemogućen (odabirom nitko)

**Tipovi bilanciranja**: padajući izbornik omogućuje odabir između dvije različite metodologije obračuna:

**Postoci varijacije / opis**: padajući izbornik, povezan s tablicom [Postoci valorizacije](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), omogućuje definiranje postotaka (unaprijed definiranih i kategoriziranih unutar povezane tablice) za svaki konto. Ti postoci se primjenjuju u raznim obradama kontrolinga, kao što su planiranje proračuna na temelju prethodne godine, primjenom povećanja ili smanjenja.

**Distribucija razdoblja / Opis**: padajući izbornik, povezan s tablicom [Distribucija razdoblja](/docs/configurations/tables/controlling/managerial-accounting/periods-distribution), omogućuje dodjelu, svakom kontu, specifične logike raspodjele knjigovodstvenog prometa na pojedinačna razdoblja tijekom obrade polugodišnjih zatvaranja.

**Grupe ravnoteža / Opis**: padajući izbornik je povezan s tablicom [Grupe izravnavanja](/docs/configurations/tables/controlling/analytical-accounting/adjustments-groups), unutar koje je moguće kodirati grupiranja računa korisna za upravljanje specifičnim izvještajima za kontroling. Polje nema drugu operativnu vrijednost i ne generira dodatne automatizme.

**Vanjski opis 1 / 2 / 3**: dodatna polja za prihvat alternativnih opisa (na primjer, na drugom jeziku). Mogu se, na primjer, naknadno unijeti tijekom prilagodbe ispisa bilance.

### UMETANJE POVEZANOSTI IZMEĐU KONTA -  POSLOVNIH CENTARA 

Povezivanje se vrši jednostavnim odabirom odgovarajućeg podkonta i unosom popisa CDC/CDP (centara troškova/profita) u dvije za to predviđene tablice. Moguće je povezati raspodjelu na različite poslovne jedinice, no u praksi se polje poslovne jedinice najčešće ne popunjava. Ne postoji nikakva kontrola koja provjerava je li zbroj unesenih postotaka jednak 100 %.

BILJEŠKA: Aktiviranjem naprednih funkcija za kontroling u tabeli [tvrtke](/docs/configurations/tables/general-settings/company), primjenjivat će se nova logika rada u kojoj centri profita više nemaju ključnu ulogu. Umjesto njih koriste se centri troškova (CDC), u njihovoj ulozi poslovnih centara, na koje se raspoređuju pozitivne i negativne stavke. Na temelju tih podataka moguće je provoditi napredne analize, poput preraspodjela i usporedbi, radi utvrđivanja marži i drugih pokazatelja poslovne uspješnosti.

Iz tog razloga, tablica **centara dobiti** (zadržana radi korištenja standardnih logika) premještena je u karticu **Ostalo** (vezano uz tablicu Atribucija CDC).

Također treba imati na umu da postoje dodatna mjesta na kojima se definiraju centri troškova/profita: matični podaci kupaca, dobavljača i agenata, matični podaci artikala, skladišta te dugotrajna imovina (osnovna sredstva). Prioritet popunjavanja tih vrijednosti u pravilu se definira u parametrima upravljanja pojedinog modula.

### Tablica pridruživanja CDC 

**Broj**: Progresivni broj retka;

**Centar troška / Opis**: padajući izbornik povezan s tablicom **Centri Tvrtke**, potreban za pozivanje željenog centra;

**Postotak %**: unesite postotak pridruživanja knjigovodstvenog prometa centru navedenom u retku. Na primjer, unosom vrijednosti 100, knjigovodstveni promet bit će pridružen ovom centru za 100%, unosom 50 bit će pridružen 50%, a preostali iznos bit će (eventualno) dodijeljen drugim centrima navedenim u recima ispod.

**Odjel / Opis**: veza se može unijeti, po mogućnosti, razlikujući po pojedinoj diviziji.

**Datum početka valjanosti**: označava datum od kojeg je automatsko pripisivanje knjiženja centru aktivno.

**Datum kraja valjanosti**: označava datum završetka važenja nakon kojeg automatsko pripisivanje knjiženja centru više neće imati učinka.

**Dimenzija / Opis**: padajući izbornik potreban je za dodjelu odgovarajuće analitičke dimenzije poslovnom centru koji se unosi (ovaj koncept je uveden i dostupan samo aktiviranjem naprednih funkcija kontrolinga iz tablice poduzeća).

**Kategorija troška / Opis**: padajući izbornik, povezan s tablicom **Kategorije centara tvrtke** omogućava povezivanje svake **Dimenzije** analize kontrolinga s kategorijom koja je zauzvrat povezana s različitim poslovnim centrima (budući da je kategorija obavezno polje u kodiranju svakog poslovnog centra). Na ovaj način, prilikom unosa knjigovodstvenog prometa, operateru se omogućuje odabir niza predefiniranih poslovnih centara. Ovo se može učiniti kao alternativa strogoj definiciji centra povezanog s računom (moguće je aktiviranjem parametra "Ograničenje računa/centra" unutar šifarnika dimenzije).

### Tablica Automatskih podkonta (tab Ostali)

U ovoj mreži moguće je definirati, za svaki podkonto koji će biti korišten u računovodstvenom knjiženju unesenom putem računovodstvenog predloška s pridruženim drugim automatskim predloškom, specifičan podkonto koji će se koristiti u knjiženju povezanom s tim drugim automatskim predloškom.

Na taj način moguće je dinamički mijenjati podkonta koja koristi drugi predložak, ovisno o podkontu koji zamjenjuje generički konto (obično definiran u predlošku glavnog knjiženja) u trenutku kreiranja računovodstvenog knjiženja putem programskih automatizama.

Osim šifre podkonta, potrebno je unijeti i vrstu iznosa te stranu knjiženja (duguje ili potražuje) (pogledati dokumentaciju za upravljanje računovodstvenim predlošcima).

:::note Bilješka

Najvažniji dio logike funkcioniranja uključuje:

- da se podkonto koristi u odjeljku PDV-a unosa;

- da se knjiženje temelji na računovodstvenom predlošku koji uključuje automatski predložak;

- pod tim uvjetima ERP će u automatsko knjiženje dodati automatska podkonta povezana s odabranim podkontima;

- vrijednosti tih podkonta obračunavat će se prema vrsti iznosa definiranoj u sekciji „automatska podkonta”, ali primijenjenoj na izvorni PDV redak.
:::


:::tip[Prijedlog automatskog usklađivanja modela reklasifikacije pri unosu novog konta]

Omogućavanjem općeg parametra **"FS-CO-AskModelAssignmentOnNewAccount"** unutar grupe **Controlling**  
(*Konfiguracija > Parametri > Opći parametri > Business Layer Settings > Business Areas > Controlling*),

prilikom dodavanja novog konta ili podkonta u kontni plan Fluentisa prikazuje se skočni prozor u kojem je moguće odabrati postojeće konto/podkonto sličnog tipa. Sustav će zatim automatski dodati novo konto u iste modele reklasifikacije u kojima se nalazi odabrano referentno konto.

### Primjer

Ako se kreira novi podkonto za određenu uslugu, moguće je upisati šifru druge usluge koja je već uključena u modele reklasifikacije. Na taj način novo će konto biti automatski uključeno u iste pozicije modela, bez potrebe za ručnim usklađivanjem.

### Dostupne opcije

- **Onemogući prijedlog** (*Disabilita prova*)  
  Postavlja parametar na vrijednost *false* te se prijedlog automatskog usklađivanja više neće prikazivati.

- **Da** (*Sì*)  
  Izvršava automatsko usklađivanje.

- **Ne** (*No*)  
  Ne izvršava usklađivanje, ali funkcionalnost ostaje aktivna te će se prijedlog ponovno prikazivati pri sljedećem unosu novog konta.

:::

---

### Dodatni podaci: 
upućuje na dokumentaciju vezanu uz [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata)

---

### VIDEO TUTORIALI

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q_0azlCYnIQ" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>