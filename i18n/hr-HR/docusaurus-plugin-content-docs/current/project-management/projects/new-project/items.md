---
title: Artikli
sidebar_position: 3
---

Retci projekta mogu se unositi kao jednostavna struktura s jednom razinom ili kao višerazinska hijerarhijska struktura, ovisno o konfiguraciji definiranoj u [Vrsti projekta](/docs/configurations/tables/project-management/project-type).

Podaci o retcima projekta podijeljeni su na više kartica, koje se također omogućuju ovisno o konfiguraciji postavljenoj u **Vrsti projekta**.

## Gumbi na alatnoj traci

Retke projekta moguće je dodavati i uređivati pomoću odgovarajućih gumba na alatnoj traci:

**Novi artikl**: dodaje novi redak artikla na kraj popisa postojećih redaka.

**Izbriši artikle**: briše odabrani redak.

Ako projekt koristi **hijerarhijsku (stablastu) strukturu**, dostupni su i sljedeći posebni gumbi:

**Nova podređena stavka**: dodaje novi redak projekta kao podređeni redak odabranog retka.

Ako je odabrani redak vrste **Napomena**, podređeni redak može biti bilo koje vrste retka (**Artikl s klasom**, **Artikl bez klase**, **Napomena**, **Trošak**).
Ako je odabrani redak vrste **Artikl s klasom** ili **Artikl bez klase**, podređeni redak može biti samo vrste **Napomena**.

**Novi stavka iste razine**: dodaje novi redak projekta na istoj hijerarhijskoj razini kao i odabrani redak. Kao i kod gumba **Novi podređeni čvor**, dopuštena vrsta novog retka ovisi o vrsti retka nadređene razine (ako postoji).

**Zamijenite WBS broj**: ponovno numerira sve retke projekta tako da broj projekta postane korijenski dio WBS oznake, a svaka sljedeća razina dobiva odgovarajući redni broj. Primjerice, ako je broj projekta **5**, prvi nivo bit će **5.1**, podnivo **5.1.1** itd.

Za proširenje ili sažimanje cijele hijerarhijske strukture dostupni su sljedeći gumbi:

**Sažmi**: prikazuje samo retke prve razine projekta.

**Proširi**: prikazuje sve retke svih razina projekta.

Odabirom retka i korištenjem gumba **Pomakni WBS** moguće je premjestiti odabrani redak na drugo mjesto u hijerarhiji. Otvorit će se skočni prozor s mogućnostima **Umetni kao čvor iste razine** ili **Umetni kao podređeni čvor**, uz odabir odredišnog retka projekta.
Odabrana opcija mora biti u skladu s pravilima definiranim za vrstu čvora.
U **tablici redaka artikala** retci će biti prikazani kao jednostavna ili višerazinska struktura, ovisno o tome je li u **Vrsti projekta** uključena opcija **Hijerarhijska struktura**.

U slučaju **višerazinske hijerarhijske strukture** primjenjuju se sljedeća ograničenja:
- retci vrste **Artikl s klasom**, **Artikl bez klase** i **Trošak** mogu se nalaziti samo na **posljednjoj razini**
- ili na **međurazini**, ali samo ako su **svi** njihovi podređeni retci vrste **Napomena**.

Drugim riječima:
- retci na **posljednjoj razini** mogu biti bilo koje vrste (**Artikl s klasom**, **Artikl bez klase**, **Napomena**, **Trošak**)
- retci na **međurazini** mogu biti <u>samo</u> vrste **Napomena**, osim u slučaju kada su **svi** podređeni retci također vrste **Napomena**.

## Retci projekta

**Broj linije**: broj retka artikla. U slučaju višerazinske strukture služi isključivo za identifikaciju, a ne za određivanje redoslijeda, koji ovisi o WBS broju i stvarnom položaju retka u hijerarhijskoj strukturi.

**WBS broj**: broj koji označava razinu na kojoj se redak nalazi. Primjerice, WBS broj **41.1.1.2** označava da se redak **.2** nalazi na četvrtoj razini, a njegov nadređeni redak ima WBS broj **41.1.1**.

**Opis artikla**: opis unesen u redak projekta.

**Oporezivi iznos**: ako je redak na posljednjoj razini, odgovara vrijednosti polja **Osnovica** tog retka. Ako je redak na međurazini, odgovara zbroju vrijednosti **Osnovica** svih podređenih redaka.

Prikazani su i podaci **Trošak resursa**, **Trošak materijala** i **Ukupni trošak**, koji predstavljaju zbroj troškova unesenih na odgovarajućim karticama **Resursi** i **Materijali**. Ako redak ima podređene razine, prikazani ukupni iznosi predstavljaju međuzbrojeve svih podređenih redaka.

**Datum početka**: ako je redak na posljednjoj razini, odgovara datumu početka unesenom na kartici **Planiranje usluga**. Ako je redak na međurazini, odgovara <u>najranijem</u> datumu među svim podređenim redcima.

**Datum završetka**: ako je redak na posljednjoj razini, odgovara datumu završetka unesenom na kartici **Planiranje usluga**. Ako je redak na međurazini, odgovara <u>najkasnijem</u> datumu među svim podređenim redcima.

**Dodijeljeni dani**: odgovaraju vrijednosti polja **Količina** retka projekta ako je mjerna jedinica vremenska (dani ili sati). Ako je korištena druga mjerna jedinica, vrijednost se ne uključuje u izračune.

**Procijenjeni dani**: odgovaraju zbroju vrijednosti polja **Količina** na kartici **Resursi** dodijeljenih retku projekta.

**Planirani dani**: odgovaraju vrijednosti polja **Stvarno vrijeme** prikazanog na planiranoj intervenciji nakon unosa planiranog datuma i vremena.

**Izvršeni dani**: odgovaraju zbroju:

- polja **Stvarno vrijeme** na redcima usluga u intervencijama
- polja **Ukupno vrijeme** na prijavama aktivnosti koje **nisu** povezane s uslugama ili intervencijama.

Ako se podaci vode u satima, **pretvorba u dane** provodi se prema sljedećoj logici:
zabilježeni sati u dokumentima / broj sati standardnog radnog dana tvrtke (npr. 8).
Izvršeni dokumenti i dalje se uzimaju u obzir u pokazateljima broja dana kako bi bilo vidljivo što je planirano, a što je stvarno izvršeno.
Desnim klikom na redak i odabirom **Kopiraj element** moguće je kopirati redak projekta zajedno sa svim njegovim sadržajem.
Desnim klikom na drugi redak i odabirom **Zalijepi element** moguće je zalijepiti kopirani redak zajedno sa svim njegovim sadržajem. Sustav će zatražiti odabir želi li se redak umetnuti na istoj razini ili kao podređena razina.

Za premještanje retka na drugo mjesto koristite gumb **Premjesti WBS** na alatnoj traci.

## Kartice s detaljima retka projekta

### Kartica Aktivnost (djelatnost)

Glavna kartica je **Aktivnost (djelatnost)**, koja sadrži osnovne informacije o retku projekta, kao što su vrsta retka, artikl, količina, mjerna jedinica, cijena, vidljivost i ostali podaci.
Detaljno, kartica **Djelatnost** sadrži:

**Red / WBS broj**: prikazuje broj retka i WBS broj. Vrijednosti se postavljaju automatski, ali ih je moguće ručno izmijeniti.

**Vrsta čvora**: određuje je li redak **Korijenski čvor** (*Root Node*), **Čvor aktivnosti** (*Activity Node*) ili **Čvor radnog paketa** (*Work Package Node*).

**Tip linije**: određuje vrstu retka – **Artikl s klasom**, **Artikl bez klase**, **Trošak** ili **Napomena**.

**Artikl**: prikazuje klasu, šifru i opis odabranog artikla.

**Opis**: sadrži opis odabranog artikla, ali ga je moguće slobodno uređivati (dvostrukim klikom otvara se prošireni skočni prozor koji olakšava unos dužeg teksta).

**Vrsta posla**: označava razinu projekta koja još nije uključena u ponudu (vidljiva u ponudama radi razlikovanja od aktivnosti koje su dio ugovora), odnosno predstavlja novi posao kojim voditelj projekta još nije upravljao, a koji je nastao tijekom izvođenja projekta.

**Artikl iz ponude**: ako je redak projekta generiran iz ponude, prikazuje opisnu referencu na ponudu.

**Količina / MJ**: prikazuje količinu retka i mjernu jedinicu odabranog artikla.

U proširivom odjeljku nalaze se:

**Alternativna količina / Alternativna MJ**: prikazuje alternativnu mjernu jedinicu i odgovarajuću alternativnu količinu odabranog artikla.

**Cijena**: prikazuje cijenu retka. Ako je odabran artikl, vrijednost se može automatski predložiti prema standardnim poslovnim pravilima.

U proširivom odjeljku **Cijena** nalaze se:

**Cijena za alternativnu mjernu jedinicu**: oznaka koja pokazuje odnosi li se cijena na alternativnu mjernu jedinicu.

**Ručna cijena**: automatski se uključuje ako je cijena ručno izmijenjena.

**Cjenik**: referentni cjenik predložen prema standardnim poslovnim pravilima.

**Tip raspona**: u slučaju popusta označava cjenovni razred koji se primjenjuje.

**Tablica popusta**: omogućuje konfiguraciju mreže popusta.

**Trošak materijala / Ukupni trošak**: polja se automatski izračunavaju na temelju podataka unesenih na kartici **Materijali**, ako je omogućena. Polje **Ukupni trošak** predstavlja zbroj vrijednosti **Trošak materijala** i **Trošak resursa**. Predložene vrijednosti korisnik može slobodno izmijeniti.

**Trošak resursa**: polje se automatski izračunava na temelju podataka unesenih na kartici **Resursi**, ako je omogućena. Predloženu vrijednost moguće je slobodno izmijeniti.

**PDV**: određuje stopu PDV-a koja će se primijeniti.

**Vrsta prometa prodaje**: određuje vrstu prihoda od prodaje za artikl.

**Nije vidljiva razina**: kada je ova oznaka uključena, razina se više ne prikazuje u hijerarhijskoj strukturi. Za prikaz svih skrivenih razina koristite gumb **Prikaži/Sakrij** na alatnoj traci. Ova se mogućnost najčešće koristi kako određena grana projekta više ne bi bila vidljiva niti dostupna za povezivanje s drugim dokumentima.

**Kategorija aktivnosti**: određuje kategoriju aktivnosti koja će se predlagati u dokumentima područja **Projekti** povezanima s retkom projekta. Kategorije aktivnosti definiraju se u šifarniku [Kategorija](/docs/configurations/tables/project-management/task-category).

### Kartica Planiranje usluge

Kartica **Planiranje usluga** sadrži sljedeće informacije:

**Datum početka / Datum završetka**: označavaju planirane datume aktivnosti.

Ako je predmetni redak korijenski ili međučvor, datumi neće biti dostupni za uređivanje, već će se automatski odrediti prema najranijem i najkasnijem datumu podređenih redaka.

Datumi će se koristiti i za izradu Ganttova dijagrama projekta.

> Datumi će se automatski ažurirati pod sljedećim uvjetima:
>
> - uključena je oznaka **Ponovno izračunaj datum početka i završetka** u tablici [Vrste projekata](/docs/configurations/tables/project-management/project-type)
> - ako mjerna jedinica retka odgovara mjernoj jedinici **Dani** definiranoj u parametrima projekta, promjenom količine retka automatski će se ponovno izračunati datum završetka
> - ako se dodaju novi resursi s datumom prije početka ili nakon završetka aktivnosti, datumi početka i završetka automatski će se ažurirati prema najranijem i najkasnijem datumu na kartici **Resursi**

**Prijelazni datum od / Prijelazni datum do**: označavaju datume prekretnica (*Milestone*).

**Izvršeno (%) / Procijenjeno**: omogućuje unos postotka dovršenosti ili procjene napretka. Ako se redak projekta koristi u dokumentima koji podržavaju prikaz tog postotka (npr. na redcima usluga intervencije), vrijednost u projektu automatski će se ažurirati prema najvećem postotku zabilježenom u tim dokumentima.

**Vrsta zahtjeva za intervenciju**: omogućuje odabir vrste zahtjeva za intervenciju koja će se koristiti prilikom generiranja novih zahtjeva povezanih s retkom projekta.

**Vrsta planirane intervencije**: omogućuje odabir vrste planirane intervencije koja će se koristiti prilikom generiranja novih planiranih intervencija povezanih s retkom projekta.

**Glavna imovina**: omogućuje povezivanje postrojenja koje, primjerice, sadrži informacije vezane uz projekt njegova održavanja.

**Menadžer**: omogućuje odabir resursa projekta.

**Prisilno zatvoreno**: omogućuje unos datuma prisilnog zatvaranja retka projekta.

**Prisilno izvršeno**: oznaka koja pokazuje da je redak projekta prisilno zatvoren.

**Kriteriji za izdavanje računa**: omogućuju odabir načina fakturiranja projekta, pri čemu se pojedine aktivnosti mogu izuzeti iz fakturiranja radi naknadne kontrole. Dostupne su sljedeće mogućnosti:

- **Sve aktivnosti**
- **Ugovorene aktivnosti**: fakturirat će se samo količina aktivnosti definirana na kartici **Aktivnost**, dok dodatne aktivnosti koje premašuju ugovorenu količinu neće biti fakturirane.

**Naplativa aktivnost**: oznaka koja određuje je li aktivnost naplativa. Vrijednost se preuzima iz **Kategorije aktivnosti**, ako je definirana na kartici **Aktivnost**, ali ju je moguće ručno promijeniti. Oznaka se prenosi i u dokumente područja **Projekti** koji je podržavaju.

**Aktivnost s dodanom vrijednošću**: oznaka koja određuje predstavlja li aktivnost aktivnost s dodanom vrijednošću. Prenosi se u dokumente područja **Projekti** (npr. **Intervencije** i **Prijave aktivnosti**) te se koristi u statističke svrhe.

**Poveži WBS**: omogućuje povezivanje retka projekta s drugim retkom istog projekta kako bi se početak aktivnosti kontrolirao prema pravilima definiranima u sljedećem polju.

**Vrsta WBS veze**: **završetak–početak**, **početak–početak**, **završetak–završetak** ili **početak–završetak**. Ovisno o odabranoj vrsti veze, dokumenti se mogu povezati s retkom projekta samo ako prethodni redak ispunjava zadani uvjet. Primjerice, ako su retci **1.1** i **1.2** povezani vezom **završetak–početak**, dokumente će biti moguće povezati s retkom **1.2** tek kada redak **1.1** ima **Postotak dovršenosti rada = 100 %**; u protivnom će sustav prikazati poruku o pogrešci.

### Kartica Resursi

Na kartici **Resursi** moguće je dodijeliti resurse odabranom retku projekta:

**Datum unosa**: automatski se popunjava datumom dodavanja resursa na projekt.

**Resurs**: sadrži resurs prethodno definiran u odgovarajućem području [Resursi](/docs/project-management/registers/resources-management/new-resource).

**Centar troška**: automatski se preuzima poslovni centar povezan s resursom, ali ga je moguće promijeniti.

**Jedinica mjere**: određuje mjernu jedinicu za iskazivanje dnevnog vremena resursa.

**Količina**: označava broj dnevnih sati.

**Trošak po jedinice**: označava trošak resursa po jednoj mjernoj jedinici.

:::note[Napomena]
Dodjelom resursa retku projekta u odgovarajuće će se polje automatski predložiti satnica resursa.

Trošak ovisi i o odabranoj mjernoj jedinici:

- ako je mjerna jedinica **sat**, vrijednost ostaje nepromijenjena
- ako je mjerna jedinica **dan** (prema postavkama u **Parametrima projekta**), izvršit će se preračun na temelju radnog vremena definiranog u šifarniku resursa
- ako je odabrana neka druga mjerna jedinica, sustav će pokušati pronaći odgovarajući faktor pretvorbe. Ako faktor ne postoji, prikazat će se poruka:

> **Nije moguće izvršiti pretvorbu jediničnog satnog troška resursa u mjernu jedinicu resursa na projektu. Trošak resursa na projektu nije izračunat.**
:::

:::note[Kriteriji za određivanje specifičnih troškova u retku projekta]
Ako resurs ima različite troškove za prekovremeni rad, rad blagdanima i slične slučajeve, odgovarajući trošak određuje se prema sljedećoj logici:

1. Je li datum početka unesen u retku projekta obuhvaćen kalendarom neradnih dana?
> Ako jest, dodijelit će se vrijednost definirana za **Vrstu troška: Blagdan**. Korisnik će pritom dobiti obavijest sa zahtjevom za potvrdu.

2. Ako datum početka nije obuhvaćen kalendarom neradnih dana, provjerava se mreža predviđenih radnih dana za resurs.
> Ako datum početka nije obuhvaćen ni neradnim ni radnim danima resursa, korisniku će biti ponuđeno ažuriranje troška označenog kao **Zadani trošak za neradni dan**, ako postoji. Ako takav trošak nije definiran, primijenit će se trošak **Prekovremeni rad**.

3. Ako datum početka pripada redovnom radnom danu, provjerava se:
> pripada li glavnoj smjeni.
>> Ako je glavna smjena označena kao **noćna**, korisniku će biti ponuđeno ažuriranje noćnim troškom. U suprotnom će se primijeniti trošak definiran u zaglavlju resursa.

4. Ako datum ne pripada glavnoj smjeni, provjerava se pripada li alternativnoj smjeni.
> Ako alternativna smjena ima definiran poseban trošak, primijenit će se ta vrijednost.
>> Ako je alternativna smjena označena kao **noćna**, korisniku će biti ponuđeno ažuriranje noćnim troškom. U suprotnom će se primijeniti trošak definiran u zaglavlju resursa.
:::

Datum se predlaže na temelju **Datuma početka**, ako je unesen na kartici **Planiranje usluge**. Ako već postoji redak **Resursi** s istim datumom, predložit će se prvi sljedeći slobodan datum. Vrijeme se automatski preuzima prema glavnoj smjeni definiranoj u šifarniku resursa.

**Datum početka**: sadrži datum na koji će resurs biti raspoređen, zajedno s vremenom početka rada.

**Vrijeme početka pauze**: sadrži datum i vrijeme početka pauze, ako postoje.

**Vrijeme kraja pauze**: sadrži datum i vrijeme završetka pauze, ako postoje.

**Datum završetka**: sadrži datum na koji će resurs biti raspoređen, zajedno s vremenom završetka rada.

**Efektivno vrijeme**: polje koje se automatski izračunava na temelju vremena unesenih u prethodnim poljima.

**Bilješka**: omogućuje unos dodatnih napomena.

**Vrsta zahtjeva za intervenciju**: omogućuje odabir povezane **vrste zahtjeva za intervenciju**, zajedno s njezinim svojstvima, kao što su opis i broj.

Svaki redak ove mreže ulazi u izračun **Predviđenih dana** retka projekta, koji su prikazani u mreži redaka projekta.
Gumb na alatnoj traci ![](/img/it-it/project-management/projects/resources-navigator.png) **Navigator resursa** omogućuje provjeru raspoloživosti različitih resursa i rezervaciju termina. Otvara se zaseban prozor, a rezervirani datumi prenose se na karticu **Resursi** te utječu na izračun troškova projekta.
Pomoću gumba ![](/img/neutral/common/new-visit-report.png) **Kreiranje zahtjeva za intervenciju** moguće je, nakon odabira resursa, izravno kreirati zahtjev za intervenciju povezan s projektom ili izvršiti njegovo vraćanje pomoću gumba **Poništi zahtjev za intervenciju**.

### Kartica Materijali

Na kartici **Materijali** navode se materijali potrebni za realizaciju projekta zajedno s pripadajućim podacima o artiklu s klasom. Trošak tih materijala ulazi u vrijednost polja **Trošak materijala** retka projekta.
Trošak se predlaže prema postavci definiranoj u polju **Vrsta troška**, čija se zadana vrijednost određuje u parametrima projekta. Ako je odabrana opcija **Posljednji trošak** ili **Prosječni trošak**, kao referentni datum koristi se datum projekta.
Na ovom je zaslonu također moguće izravno kreirati **Zahtjev za nabavu (RDA)** za materijale pomoću gumba **Kreiranje RDA** na alatnoj traci.
Ako je projekt generiran iz predloška, svi postojeći podaci automatski će se preuzeti iz predloška.

### Kartica Podaci

Na kartici **Podaci** dostupna su sljedeća polja:

**Tip porijekla Trošak / prihod**: u tablici se iz **Vrste projekta** automatski predlažu šifre troškova ili prihoda koje će se koristiti za izračun **Stanja napretka radova (SAL)**. Vrijednosti je moguće ručno izmijeniti.

**Procijenjeni datum isporuke**: planirani datum isporuke. Trenutačno se popunjava ako je redak generiran iz ponude ili narudžbe kupca.

**Nomenklatura**: odnosi se na Intrastat nomenklaturu. Trenutačno se popunjava ako je redak generiran iz ponude ili narudžbe kupca.

**Bilješka**: opće polje za unos napomena.

**Marka**: moguće je povezati marku ako je ta funkcionalnost omogućena u šifarniku [Marke](/docs/configurations/tables/logistics/brands).

**Projekt / Godina**: omogućuje povezivanje retka projekta s drugim retkom projekta.

**CRM kontakt**: omogućuje povezivanje retka projekta s [CRM kontaktom](/docs/crm/home-crm/contacts/new-contact).

**Tiket**: omogućuje povezivanje retka projekta s Ticketom.

**Razina usluge (SLA)**: omogućuje odabir razine usluge.

**Isključi WBS iz SAL izračuna**: ako je uključeno, redak projekta i **SVI** dokumenti povezani s tim retkom bit će isključeni iz postupka izračuna **Stanja napretka radova (SAL)**, neovisno o konfiguriranim šiframa troškova ili prihoda.

**Centar troška**: omogućuje povezivanje retka projekta s poslovnim centrom, koji će se prenositi u sve dokumente koji podržavaju ovu informaciju.

### Kartica Napredak

Na kartici **Napredak** prikazani su redci stvarno utrošenog vremena evidentiranog u proizvodnji ili na intervencijama.
Vrijednosti se preuzimaju obradom koja se pokreće pomoću gumba **Izrada napretka projekta**.
Obrada napretka izračunava retke na kartici **Napredak** izvođenjem sljedećih koraka:

- briše sve zapise stvarno utrošenog vremena projekta koji nisu ručno izmijenjeni
- pretražuje prijave iz proizvodnje koje:
  - imaju fazu proizvodnog naloga povezanu s trenutačnim projektom
  - povezane su s retkom projekta

Za svaki pronađeni redak koji još nije povezan s retkom **Napretka**, kreira se novi redak na kartici **Napredak**.
Za ručno izmijenjene zapise redak se ne briše, već se ažurira vrijednost polja vremena.
Ista obrada izvršava se i za retke usluga na intervencijama te za prijave aktivnosti.
Na kraju se ažurira polje **Postotak dovršenosti rada** na kartici **Planiranje usluge** za retke projekta koji:

- imaju vrstu čvora **2 – Work Package Node**
- imaju ukupan zbroj vremena na kartici **Napredak** jednak **0**.

### Kartica Agenti

Na kartici **Agenti (trgovački predstavnici)** moguće je odrediti **Glavnog agenta** i ostale agente povezane s retkom projekta.

### Kartica Fakturiranje

Na kartici **Fakturiranje** moguće je definirati rate za fakturiranje projekta koje će se koristiti u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).

Ako je na kartici **Planiranje usluga** popunjeno polje **Prisilno zatvoreno**, rate se neće prikazivati u postupku kreiranja izlaznih računa.

**Prioritet**: određuje redoslijed rata.

**Dan**: označava dan na koji se rata odnosi i koristi se kao kriterij pretraživanja u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).

**Mjesec**: označava mjesec na koji se rata odnosi i koristi se kao kriterij pretraživanja u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).

**Godina**: označava godinu na koju se rata odnosi i koristi se kao kriterij pretraživanja u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).

**Postotak**: postotak koji se koristi za izračun cijene koja će biti prenesena na račun. Primjerice, ako je cijena retka projekta **100**, a postotak postavljen na **30**, na računu će biti prikazana cijena **30**.

**Vrijednost**: umjesto postotka moguće je unijeti izravnu vrijednost cijene koja će biti prenesena na račun. Primjerice, ako je cijena retka projekta **100**, moguće je unijeti dva retka s vrijednošću **50**. Na računu će tada biti prikazana cijena **50**.

Može se popuniti **samo jedno** od polja **Postotak** ili **Vrijednost**, nikada oba istovremeno. Također, sustav ne provjerava odgovara li zbroj pojedinačnih rata ukupnom iznosu definiranom na retku projekta.
Vrijednost i postotak odnose se **isključivo na polje Cijena**, a ne na polje **Količina**.
Količina će stoga uvijek ostati jednaka količini definiranoj na retku projekta.

### Kartica Dodatni podaci

Na kartici **Dodatni podaci** moguće je unijeti **Dodatne** podatke za redak projekta.

### Kartica Dokumenti u privitku

Na kartici **Dokumenti u privitku** moguće je dodati privitke za redak projekta.