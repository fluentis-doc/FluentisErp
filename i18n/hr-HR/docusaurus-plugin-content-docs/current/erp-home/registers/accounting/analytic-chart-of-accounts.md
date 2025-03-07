---
title: Kontni plan
sidebar_position: 1
---

### RIBBON BAR:
:::note Gumbi Ribbon Bar-a

| Funkcija | Značenje |
| --- | --- |
| Pretraga | Izvršava pretraživanje konta/podkonta unutar odabrane klase. |
| Novi konto | Postavi kursor za unos novog podračuna unutar detaljne mreže. |
| Premjesti konta | Otvara obrazac kako bi se konto mogao premjestiti iz jedne klase u drugu. |
| Otvori šifarnik | Otvara šifarnik koji je povezan s odabranim podkontom klijenta/dobavljača/banke/agenta. |
| Novo grupiranje | Unos nove ‘matične' klase u strukturi kontnog plana, neovisno o odabranoj klasi. |
| Nova grupa | Unos klase. Nije moguće unijeti više klasa unutar klase koja već ima konto/podkonto. |
| Izbriši konto | Služi za brisanje odabranog konta. Brisanje je također moguće izvršiti odabirom konta i klikom na tipku delete. Nije moguće izbrisati podkonto ako je korišten u sustavu. (u ovom slučaju, možete postaviti datum završetka valjanosti kako biste ga učinili nevidljivim korisniku.) |
| Izbriši grupu | Služi za brisanje odabrane klase. |
| Proširi grananje | Funkcija otvara padajući izbornik za odabranu klasu. |
| Sažmi grananje | Funkcija zatvara padajući izbornik za odabranu klasu. |
| Novi Centar Troška | Odaberite za unos novog troškovnog centra za odabrani podkonto. |
| Otkaži centar troška | Izbriši označenog troškovnog centra. |
| Nova Troškovna Mjesta | Odaberite za unos novog profitnog centra za odabrani podkonto. |
| Izbriši profitni centar | Izbriši označenog profitnog centra. |
| Novi automatski račun | Unos novog automatskog podkonta za odabrani podkonto |
| Otkaži automatski račun | Izbriši odabrani automatski podkonto |

:::

---

### Povezanost s drugim tablicama
Šifriranje kontnog plana uključuje popunjavanje niza tablica: [Vrsta konta](/docs/configurations/tables/finance/account-types), [Šifarnik kontakata](/docs/erp-home/registers/contacts/registers-management), [Troškovne stavke](/docs/configurations/tables/finance/charge-item), Tipovi periodičnosti proračuna, Troškovna središta, Profitna središta, Odjeli, Ispravci/integracije knjiženja, Knjiženja od razlike u proračunu, [Automatski predlošci](/docs/configurations/tables/finance/ledger-records-templates/ledger-records-templates), Vrsta iznosa.


### Unos strukture kontnog plana

Šifriranje kontnog plana započinje unosom popisa klasa u gornjem dijelu obrasca: 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

Putem gumba za unos klasifikacija/klasa moguće je umetnuti nove prve razine ili razine niže od one odabrane, pripisujući svakoj jedinstveni alfanumerički kod, opis i vrstu konta.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image02.png)

**Novo grupiranje**: adjeluje isključivo kako bi se dodao novi **nulti nivo** (grupa bez nadređenih iznad nje).

**Nova grupa**: djeluje tako da unese novu podgrupu odabrane grupe. 

**Struktura**: polje automatski popunjeno sustavom kako bi predstavljalo konkatenaciju kodova grupa i grupiranja u kojima se redak nalazi;

**Dodatni opis**: omogućuje vam da dodijelite dodatni opis koji se može koristiti, na primjer, u ispisu bilance (prilagođavajući ga posebnim alatima). Na primjer, može se unijeti prijevod opisa konta.

**Tip grupe**: prihvaća tip računa grupe. Combo box povezan je s tablicom Tip računa. Preporučuje se ispunjavanje tipa računa i za grupe i za grupiranje, kao što je opisano u fazi unosa podkonta u nastavku.


### Unos detalja kontnog plana

Kada je odabran najniži nivo grupe, u donjoj mreži će se aktivirati lista konta i podkonta unutar nje.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

Ova **donja mreža popunjava se direktnim unosom podataka** u redove. Uvijek je vidljiv posljednji dostupni red za unos novog unosa, označen zvjezdicom u plavom području u lijevom kutu.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)

**UPOZORENJE: Struktura plana konta zahtijeva da se za svaku najnižu razinu grupe u koju unosimo detalje, unese barem jedan račun ("glavni") bez podkonta koji služi kao posljednje grupiranje operativnih podkonta. Napominjemo da se samo konti s podkontima mogu koristiti u knjigovodstvenim zapisima.**

Preporučuje se pratiti progresivni numerički kriterij s uniformnošću znakova (npr. svi konti s 4 znaka, svi podkonti s 3).

UPOZORENJE: Prilikom unosa podračuna u detalje aktiviran je brojač koji automatski povećava podračun za jedan u odnosu na zadnji uneseni za tu grupu; preporučuje se izbjegavanje "rupa" u numeraciji jer se automatski neće popuniti ni u jednom slučaju.



Postupite redoslijedom dodavanja **vrste konta**, zatim **konta** (bez podkonta ako želite stvoriti novu "matičnu" stavku), a zatim **podkonto** (ako se podkonto unosi prvi put za tu grupu, ručno unesite broj i odredite broj znakova, na primjer 1 ili 01 ili 001, pri sljedećem unosu broj će se automatski povećati)

**Datum unosa**: to je datum stvaranja konta/podkonta;

**Datum posljednje promjene**: to je datum posljednje izmjene koda računa/podračuna, automatski ažuriran od strane sustava;

**Otvaranje plaćanja**: flag koji označava, za račune povezane s evidencijom kupaca i dobavljača, da li se za taj račun upravlja otvaranjem partija. Oznaka se preuzima, i treba je upravljati, unutar evidencije. Moguće je aktivirati oznaku ovdje za račune koji NISU iz evidencije (troškovi, prihodi itd.) kako bi se otvorile partije istovremeno s knjiženjem (rijetko). U tom slučaju, knjigovodstveni uzrok korišten zahtijevat će aktivni parametar za otvaranje partija. U ovom slučaju, aktivna oznaka na računu omogućuje, posebno, provjeru ravnoteže između knjiženja i otvorene stavke. U svakom slučaju, otvaranje partija na računima koji nisu u evidenciji mora se obaviti ručno i ne može se automatski izvršiti.

**Upravljanje poslovnim centrima**: Aktiviranjem ove zastavice bit će moguće upravljati centrima troškova čak i na bilansnim računima (rijetko); primjerice, povećanja za unutarnje radove u okviru ekonomije, itd.

**Datum završetka valjanosti**: služi za **blokiranje korištenja podračuna u novim knjiženjima** (počevši od unesenog datuma), zadržavajući vidljivost prethodno unesenih prometa;

**Drugi opis**: pogledajte Alternativni opis gore;

**Ispravke/Ispravci - aktivni / pasivni - Konto / Podkonto / Opis**: Polja koja omogućuju unos, redom za aktivne i pasivne rate i prelazne račune, specifičnog podračuna na koji će se knjižiti, s prednošću u odnosu na opće podračune za aktivne i pasivne rate i prelazne račune uključene u [parametri knjiženja](/docs/configurations/parameters/finance/accounting-parameters), ispravke i integracije vezane uz podračun troška ili prihoda koji se popunjava. Napomena da za automatsko upravljanje aktivnim i pasivnim rastima i riskontima, račun troška ili prihoda na koji se odnose ispravke mora imati poseban tip konta (npr. "za ispravke") s aktivnom oznakom usluge u tablici [Tip konta](/docs/configurations/tables/finance/account-types).


**Konto / Podkonto / opis Nedostaje Dopuštenje**: Uglavnom upravljano za lokacije izvan Italije gdje postoji potreba knjiženja neprihvatljivog dijela PDV-a na zaseban račun.


**Postotak koji se ne odbija**: Uglavnom upravljano za lokacije izvan Italije gdje postoji potreba knjiženja neprihvatljivog dijela PDV-a na zaseban račun. Povezano polje s prethodnim. Omogućuje definiranje postotka neprihvatljivosti PDV-a izravno na računu umjesto na upotrijebljenom PDV kodu.


**Stavke troškova / Opis**: padajući izbornik povezan s tablicom [Elementi potrošnje](/docs/configurations/tables/finance/charge-item); omogućuje povezivanje s određenim statističkim podacima korisnim u upravljanju kontrolom.

**Varijabilnost**: ovo polje, povezano s mrežama koje se nalaze s desne strane obrasca, *Pridjeljivanje Cdc* e *Varijabilitet Cdc* (potrebne za unos veza između podračuna i poslovnih centara kako bi se automatski raspodijelili knjigovodstveni pokreti na centre) posebno **se mijenja kada je knjigovodstveni pokret povezan s više od jednog poslovnog centra.**.  Kao i istoimeno polje u mreži Varijabilitet Cdc, prihvaća postotnu vrijednost koja **određuje je li trošak fiksan** (varijabilnost 0%) ili potpuno **varijabilan trošak**(varijabilnost 100%)ili djelomično varijabilan (npr. 70%). Pogledajte donju sliku za ispravno popunjavanje.

BILJEŠKA: Ne treba ih zamijeniti s poljem Postotak (prisutnim u mreži Pridjeljivanje Cdc) koje služi za označavanje postotka knjigovodstvenog pokreta koji treba pridijeliti tom centru (primjerice, trošak podijeljen između dva centra podjednako ili 50% ili 70% i 30%).

Polje **Varijabilnost** prisutno u glavnoj mreži u komentaru ima prioritet u odnosu na ono prisutno u grid *Variabilnost Cdc*. Iz tog razloga, ako je samo popunjeno polje u glavnoj mreži, podatak će se koristiti za oba (ili sva) povezana centra s odabranim računom. 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png)

**Ne koristi se u kontrolingu**: flag, korisna samo ako su aktivne napredne funkcije za kontroling u tabeli poduzeća, omogućuje isključivanje (ako je omogućeno) knjigovodstvenih prometa prisutnih za odabrani račun iz posebnih obrada kontrolinga (kao što su npr. reversioni na temelju troškovnih pokretača, formule i tehničke amortizacije specifične za kontroling). Na taj način bit će moguće ručno upravljati putem specifičnih funkcija kontrolinga.

Primjer: ako želite koristiti specifične amortizacije definirane unutar funkcija samog kontrolinga umjesto polaska od knjigovodstvenih podataka. Drugi primjer: želite ručno evidentirati trošak nadzornog odbora, dodjeljujući ga ručno funkcijama kontrolinga kako biste upravljali proračunima i izvješćima, umjesto čekanja na evidentiranje pripadajućeg troška u računovodstvu (tipično retroaktivno i stoga ne pravodobno).

Bilješka: knjigovodstveni će se pokret i dalje uključivati u polugodišnje zatvaranje knjiga (Kontroling >Privremena zatvaranja).

**Metodologija** opisana gore određuje potrebu za periodičnim izvršavanjem **prilagodbe** kako bi se uskladili knjigovodstveni pokreti (koji utječu na bilancu) s pokazateljima upravljačkog računovodstva (specifičnim za kontroling). Takve prilagodbe bit će prikazani u posebnim izvještajima kontrolinga putem određenih prilagodbi (s pozitivnim ili negativnim oznakama, ovisno o situaciji) koje jasno ukazuju na usklađivanje ukupnih iznosa u bilanci s ukupnim iznosima u upravljačkom računovodstvu (koji proizlaze iz ručno upravljanih pokreta ili pokreta koji nisu generirani iz knjigovodstvenih podataka).

Sljedeća dva polja služe za ovu radnju:

**Vrijeme uravnoteženja**: padajući izbornik omogućuje odabir hoće li gore navedeni obračun biti godišnji, polugodišnji ili onemogućen (odabirom nitko)

**Tipovi izjednačavanja**: padajući izbornik omogućuje odabir između dvije različite metodologije obračuna:

**Reproporcija upravljanja**: pokreće se od knjigovodstvenog zapisa i ponovno ga preraspodjeljuje (ubacujući ispravke) koristeći logiku analitičkog računovodstva (odnosno dodjeljivanje centrima tvrtke) radi upravljanja razlikom;

**Analitičke razlike**: polazi od upravljanja računovodstvom (kontrolingom) i usklađuje ga s knjigovodstvenim podacima, unoseći ispravke s pozitivnim ili negativnim predznakom.

**Postoci varijacije / opis**: padajući izbornik, povezan s tablicom [Postoci valorizacije](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), omogućuje definiranje postotaka (unaprijed definiranih i kategoriziranih unutar povezane tablice) za svaki podračun. Ti postoci se primjenjuju u raznim obradama kontrolinga, kao što su planiranje proračuna na temelju prethodne godine, primjenom povećanja ili smanjenja.

**Distribucija razdoblja / Opis**: padajući izbornik, povezan s tablicom [Distribucija razdoblja](/docs/configurations/tables/controlling/managerial-accounting/periods-distribution), omogućuje dodjelu, svakom podračunu, specifične logike raspodjele knjigovodstvenog prometa na pojedinačna razdoblja tijekom obrade polugodišnjih zatvaranja.

**Grupe izravnavanja / Opis**: padajući izbornik je povezan s tablicom [Grupe izravnavanja](/docs/configurations/tables/controlling/analytical-accounting/adjustments-groups), unutar koje je moguće kodirati grupiranja računa korisna za upravljanje specifičnim izvještajima za kontroling. Polje nema drugu operativnu vrijednost i ne generira dodatne automatizme.

**Vanjski opis 1 / 2 / 3**: dodatna polja za prihvat alternativnih opisa (na primjer, na drugom jeziku). Mogu se, na primjer, naknadno unijeti tijekom prilagodbe ispisa bilance.

### UMETANJE POVEZANOSTI IZMEĐU PODRAČUNA -  POSLOVNIH CENTARA 

Veza se uspostavlja jednostavno odabirom odgovarajućeg podračuna i unošenjem popisa CDC/CDP u dvije odvojene mreže: moguće je povezati vrednovanje na različite poslovne divizije, ali obično se polje divizije ne popunjava. Nema kontrole da li je zbroj unesenih postotaka jednak 100%.

BILJEŠKA: Aktiviranjem naprednih funkcija za kontroling u tabeli [tvrtke](/docs/configurations/tables/general-settings/company) , radit ćemo prema novim logikama u kojima više nije relevantna upotreba centara dobiti, već se koriste CDC (u njihovom nazivu poslovnih Centara) na koje će se dodijeliti negativni ili pozitivni dijelovi kako bi se zatim proveli napredni postupci, poput reverzija i usporedbi, kako bi se odredili marže itd.

Iz tog razloga, mreža **centara dobiti** (zadržana radi korištenja standardnih logika) premještena je u karticu **Ostalo** (vezano uz grid Pripisivanje CDC).

Također valja napomenuti da postoje dodatne točke kodiranja Troškova / Dobiti: podaci o klijentima/dobavljačima/agentima, podaci o artiklima, skladišta, imovina. Prioritet valorizacije obično se definira u upravljačkim parametrima pojedinog modula.

### Tabilica pridruživanja CDC 

**Broj**: Progresivni broj retka;

**Cdc / Opis**: padajući izbornik povezan s tablicom **Centri Tvrtke**, potreban za pozivanje željenog centra;

**Postotak %**: unesite postotak pridruživanja knjigovodstvenog prometa centru navedenom u retku. Na primjer, unosom vrijednosti 100, knjigovodstveni promet bit će pridružen ovom centru za 100%, unosom 50 bit će pridružen 50%, a preostali iznos bit će (eventualno) dodijeljen drugim centrima navedenim u recima ispod.

**Podjela / Opis**: veza se može unijeti, po mogućnosti, razlikujući po pojedinoj diviziji.

**Datum početka valjanosti**: označava datum od kojeg je automatsko pripisivanje pokreta centru aktivno.

**Datum završetka valjanosti**: označava datum završetka važenja nakon kojeg automatsko pripisivanje pokreta centru više neće imati učinka.

**Veličina / Opis**: padajući izbornik potreban je za dodjelu odgovarajuće analitičke dimenzije poslovnom centru koji se unosi (ovaj koncept je uveden i dostupan samo aktiviranjem naprednih funkcija kontrolinga iz tablice poduzeća).

**Kategorija mjesta troška / Opis**: padajući izbornik,, povezana s tablicom **Kategorije centara tvrtke** omogućava povezivanje svake **Dimenzije** analize kontrolinga s kategorijom koja je zauzvrat povezana s različitim poslovnim centrima (budući da je kategorija obavezno polje u kodiranju svakog poslovnog centra). Na ovaj način, prilikom unosa knjigovodstvenog prometa, operateru se omogućuje odabir niza predefiniranih poslovnih centara. Ovo se može učiniti kao alternativa strogoj definiciji centra povezanog s računom (moguće je aktiviranjem parametra "Ograničenje račun / centar" unutar dimenzije).

### Tablica Automatskih podračuna

U ovoj tablici moguće je unijeti, za svaki podračun koji će biti pozvan u knjiženju unesenom kroz knjižnu uzrokovanu imajući drugu automatsku uzrokovanu knjižnu uzrokovanu, specifičan podračun koji će se koristiti u knjiženju povezanoj s drugom automatskom uzrokovanom knjižnom uzrokom.

Na ovaj način moguće je "dinamički" mijenjati podračune koji se koriste u drugom uzroku, ovisno o podračunu koji zamjenjuje općeniti račun (obično unesen u predložak glavnog uzroka) u trenutku stvaranja knjiženja zahvaljujući automatizmima programa.

Potrebno je unijeti, osim koda podračuna, i tip iznosa te odjeljak dugovati ili potraživati (vidjeti dokumentaciju o upravljanju računskim uzrocima).

:::note Bilješka

Najvažniji dio logike funkcioniranja uključuje:

- da se podkonto koristi u odjeljku PDV-a unosa;

- da unos bude temeljen na uzroku koji uključuje automatski uzrok;

- u ovim uvjetima ERP će dodati automatski unos, povezane automatske podkonte koji su povezani s podkontima;

- valorizacija ovih podkonta koristit će tip iznosa odjeljka 'automatski podkonti', ali primjenjujući ga na izvornu PDV liniju.
:::


**Primjer upotrebe može biti evidentiranje podkonta za koje treba valorizirati u dugovima/potraživanjima računa izvan bilance.**

---

### Dodatni podaci: 
upućuje na dokumentaciju vezanu uz [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata)

---

### VIDEO TUTORIALI

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q_0azlCYnIQ" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>