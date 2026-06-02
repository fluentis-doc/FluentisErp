---
title: Unos narudžbi dobavljača
sidebar_position: 1
---

Ovaj obrazac otvara se putem:    
-  putanje **Nabava > Narudžba dobavljačima > Nova narudžba**  
ili putem  
-  gumba **Novo** koji se nalazi u formi [Pretraživanje narudžbe od dobavljača](/docs/purchase/purchase-orders/insert-purchase-orders/search-purchase-orders).
 
## **1. Obavezni podaci**

Da bi se kreirala narudžba, korisnik mora unijeti obavezna polja:

**Vrsta narudžbe**: predefinirana u *Konfiguracija > Tablice > Nabava > Vrste narudžbi od dobavljača*.  
Ovo polje određuje raspon numeriranja dokumenta koji se unosi i automatski predlaže broj narudžbe od dobavljača na temelju datuma unosa i posljednjeg unesenog broja. Osim toga, ako je u *Vrsti narudžbe* postavljena zastava [Autoizvršenje](/docs/configurations/tables/purchase/purchase-orders-type) datum potvrde narudžbe će biti predložen kao jednak datumu unosa narudžbe;  
**Godina**: automatski se unosi trenutna godina, ali se može ručno mijenjati uvijek poštujući pravilo progresije između datuma i broja;    
**Broj**: automatski se predlaže prema vrsti, ali se može ručno mijenjati uvijek poštujući pravilo progresije između datuma i broja;  
**Datum unosa**: automatski se predlaže trenutni datum, ali se može ručno mijenjati uvijek poštujući pravilo progresije između datuma i broja;  
**Dobavljač**: korištenjem [polja za pomoć](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili[izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka.

## **2. Zaglavlje**

Nakon odabira obaveznih podataka u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) pomoću  [polja za pomoć](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, prema odabranim postupcima, aplikacija *automatski* popunjava određena polja.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generiran.
:::

### 2.1 Podaci dobavljača

Unosom **Dobavljača** automatski se *predlažu* svi specifični podaci s kartice **Zaglavlje**, prema podacima postavljenim prethodno u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Pošiljke**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski okvir važenja](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Plaćanja**: odjeljak koji sadrži podatke o plaćanjima, popustima, odredištu isporuke i prijevozniku.

### 2.2 Drugi opcionalni podaci

- **Traženi datum isporuke** i **Datum isporuke** – ako se postave prije unosa stavki u narudžbu, automatski će se prenijeti na sve stavke dokumenta. Naknadno je moguće ažurirati datume na stavkama korištenjem funkcije **Zamijeni planirani datum isporuke u stavkama** na alatnoj traci.

- **Datum potvrde naloga** – za vrste narudžbi koje nemaju uključenu opciju automatske potvrde, u ovo se polje upisuje datum potvrde narudžbe. Za realizaciju narudžbe dobavljača potrebno je unijeti datum potvrde.

- **Primjeni iz** – datum koji se koristi kao osnova za izračun rokova dospijeća plaćanja.

- **Bilješke dobavljača** – polje se automatski popunjava podacima iz kartice dobavljača, ali ga je moguće i ručno izmijeniti.

- **Naša/Vaša referenca** – u ova polja obično se unose interna referenca i referenca dobavljača za dokument. Ako su podaci definirani na kartici dobavljača, automatski se preuzimaju, a po potrebi ih je moguće ručno izmijeniti.

  Ako je narudžba kreirana postupkom **Realizacija po projektu**, u polja *Napomene dobavljaču* i *Naša/Vaša referenca* automatski se prenose podaci iz nabavne komese. Ovaj prijenos moguć je samo kada je narudžba kreirana na temelju jednog izvornog dokumenta.

- **Početne bilješka naloga** – moguće je odabrati unaprijed definirane napomene unesene u šifrarnik **Konfiguracija > Pomoćni podaci > Upravljanje predlošcima napomena**. Odabir se vrši putem pomoći za unos (Help) na polju *Početne napomene*.

- **Projekt** – dokument je moguće povezati s projektom korištenjem pomoći za unos. Povezivanje se odnosi na zaglavlje dokumenta. Ako je narudžba kreirana iz dokumenta koji već sadrži projekt (primjerice zahtjev za nabavu), projekt se automatski prenosi.

- **Nalog proizvodnje** – dokument je moguće povezati s proizvodnom komesom korištenjem pomoći za unos. Ako je narudžba nastala iz planiranih nabavnih naloga, komesa se predlaže automatski.

- **Država, jezik i zona** – podaci se automatski preuzimaju iz kartice dobavljača, ali ih je moguće ručno promijeniti.

- **Operater** – definira korisnika koji je izradio dokument. Ako je u parametrima narudžbi dobavljača uključena opcija **Obavezan operater**, unos ovog podatka bit će obvezan za spremanje dokumenta. Operateri moraju prethodno biti evidentirani u šifrarniku zaposlenika.

- **Prijevoznik** – podatak se preuzima iz kartice dobavljača ako je definiran, a može se i ručno unijeti.

- **Prodajni cjenik** – ako je na kartici dobavljača definiran zadani cjenik, on će se automatski predložiti zajedno s pripadajućim razdobljem važenja.

- **Ažuriranje cjenika** – kada je opcija uključena, nabavni cjenik automatski se ažurira prilikom spremanja dokumenta prema podacima sa stavki. Postavku je moguće mijenjati i na razini pojedine stavke.

- **Prodajna mjesta** – koristi se u procesima vezanim uz distribucijske lance i nalazi se u području logistike. Ako je narudžba nastala prijenosom robe između prodajnih mjesta unutar iste organizacije, ovdje će biti prikazano prodajno mjesto s kojeg roba dolazi.

- **Status izvršenja** – kada se narudžba djelomično ili potpuno realizira putem primke (DDT-a) ili ulaznog računa, status se automatski mijenja iz **Nije izvršeno** u **Djelomično izvršeno** ili **Izvršeno**. Moguće je prisilno označiti narudžbu kao realiziranu i kada nije u potpunosti obrađena. U tom slučaju sprema se datum realizacije u polje *Datum realizacije*.

**Status narudžbe**: kada se kreira, nema aktivnih zastava, ali se kasnije može promijeniti u:    
> **Ispisano**: kada se isprinta kao konačna;    
> **Autorizirano**: kada korisnik odobri, nema utjecaja na poslovne procese, ali se vrednuje u Mobilnoj Aplikaciji;    
> **Povijesno**: kada korisnik pohrani dokument;  
> **Poništen**: kada korisnik želi otkazati dokument umjesto brisanja, automatski se postavlja status evidentirano na svim njegovim redovima.

:::NAPOMENE
Zastave se mogu ukloniti postupkom poništenja operacije.
:::

#### Posebni gumbi

> **Izvršenje projekta**: pokreće postupak za kreiranje dobavljačke narudžbe iz nabavnog projekta (naloga). Opcija postaje dostupna nakon unosa dobavljača i vrste dobavljačke narudžbe. Da bi se nabavni projekt mogao preuzeti, mora biti ispisan i potvrđen.

> **Zamijeni planirani datum isporuke u stavkama**: omogućuje, nakon definiranja polja Traženi datum isporuke i/ili Datum isporuke u zaglavlju narudžbe, masovnu zamjenu tih datuma u svim već unesenim stavkama artikala.
 
### 2.3 Plaćanja

**Plaćanja** automatski su preuzeta iz *Šifarnik dobavljača > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

Ako je s **Vrstom plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u datumima dospijeća dokumenta, a ne u ukupnom iznosu dokumenta.

Ako dokument potječe iz narudžbenice, vrste plaćanja mogu se preuzeti iz prvog dokumenta, iz šifarnika dobavljača ili se mogu vidjeti u formi dokumenata za obradu, a korisnik odabire željeni tip plaćanja.

#### Posebno dugme

> **Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja.


### 2.4 Popusti

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnik klijenta > kartica Popusti* i oni koji su dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

Popusti predloženi u zaglavlju dokumenta ponovno se prikazuju u svakom novom unosu stavke u dokument.

Ako se nakon unosa stavki u dokument unese novi popust u zaglavlju, to se ne replicira u već unesenim stavkama dokumenta.

#### Posebno dugme

> **Izbriši zadane rabate**: koristi se za brisanje odabranih redaka popusta.

### 2.5 Odredište

Ovdje se predstavljaju informacije unesene u *Šifarnik dobavljača > kartica Isporuke*, samo ako postoje zadane informacije. Padajući izbornik nudi sve primatelje, odredišta i prijevoznike unesene u šifarnik dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti i samo opisno, bez prethodnog unosa među kontaktima.

### 2.6 Prijevoznik

U ovom polju moguće je unijeti prijevoznika koji će izvršiti isporuku narudžbe. Ako je prijevoznik definiran u Matičnim podacima dobavljača > kartica Isporuke, može se odabrati iz padajućeg izbornika u drugom stupcu.

Alternativno, dvostrukim klikom na treći stupac (Prijevoznik) moguće je odabrati jedan od kontakata društva.

Po potrebi se mogu unijeti i dodatni podaci, kao što su registarska oznaka vozila prijevoznika te datum i vrijeme prijevoza.


### 2.7 Dodatni podaci

Ovdje se predstavljaju informacije unesene u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadane informacije.

### 2.8 Izvršenje projekta (naloga)

Postupak izuzimanja radnog naloga za nabavu  omogućava djelomično ili potpuno izvršavanje narudžbe. Ponuđene su sve narudžbe koje još nisu izvršene, koje nisu prisilno izvršene ili koje su djelomično izvršene.

Da bi se nabavni nalog mogao preuzeti, mora biti ispisan i mora imati upisan datum potvrde.

Prije pokretanja preuzimanja potrebno je u zaglavlju dokumenta unijeti vrstu narudžbe koja se želi kreirati te dobavljača. Nakon toga, klikom na gumb „Izvršenje projekta” otvara se obrazac u kojem je moguće filtrirati projekte povezane s dobavljačem odabranim na dokumentu.

:::warning Važno
Ako je u parametrima nabavnih naloga uključena opcija **Obavezna realizacija**, prilikom kreiranja nove narudžbe dobavljača automatski se otvara obrazac **Realizacija po nalogu** te nije moguće ručno dodavati stavke u narudžbu dok se ne realizira barem jedna stavka iz nabavne komese.
Ako je uključena opcija **Obavezna realizacija stavki iz naloga**, nije dopušteno dodavanje drugih stavki u narudžbu osim onih koje su preuzete realizacijom komese.
:::

U području filtra moguće je odabrati prikaz podataka u obliku:

- **Tabličnog prikaza (Grid)**
- **Strukture hijerarhije**
- Oba prikaza istovremeno

> **Strukture hijerarhije** omogućuje pregledniji prikaz narudžbi i pripadajućih stavki te olakšava masovni odabir artikala unutar komese.

> **Tablični prikaz (Grid)** omogućuje veću prilagodbu obrasca dodavanjem polja iz *Object Navigatora*. U ovom prikazu masovni odabir stavki izvodi se pomoću prečaca na tipkovnici ili korištenjem funkcije **Aktiviraj/Deaktiviraj samo odabrane retke** na alatnoj traci.

Nakon postavljanja željenih filtara potrebno je kliknuti na gumb **Traži**, nakon čega će se u donjem dijelu prikazati sve potvrđene, a još uvijek nerealizirane ili djelomično realizirane nabavni nalozi.

:::note Napomena
Postupak preuzima sve podatke definirane na nabavnom nalogu. Zbog toga će se na narudžbu prenijeti i svi uvjeti nabave definirani na nalogu, čak i ako su u međuvremenu promijenjeni.
:::

U rezultatima pretrage korisnik može:

- Označiti sve ili samo pojedine predložene stavke. Dovoljno je uključiti oznaku na početku retka stavke. Količina za realizaciju automatski će biti postavljena na preostalu količinu.

- Odabrati samo dio količine pojedine stavke. U tom slučaju potrebno je ručno izmijeniti polje **Količina za izvršenje**.

Za završetak postupka potrebno je kliknuti na gumb **Izvršenje**, čime će se svi odabrani podaci s nabavne komese prenijeti u narudžbu dobavljača.

#### Posebni gumbi*

> **Traži**: omogućuje pretraživanje narudžbenica za kupovinu;   
> **Izvršenje**: omogućuje prijenos odabranih stavki/narudžbenica;   
> **Označi/Odznači sve**: omogućuje odabir/poništavanje odabira svih stavki iz popisa;  
> **Aktiviraj/Deaktiviraj samo odabrane retke**: posebno korisno kod preuzimanja putem tabličnog prikaza (grida); omogućuje aktiviranje ili deaktiviranje oznaka (flagova) na svim odabranim recima.

*Postupak ukratko*:  

Za dobavljača i sve druge filtre unesene u odjeljku Filter (**1**), u mreži će se prikazati redak za svaku narudžbu koja je ispisana, potvrđena, a još nije izvršena, ili je djelomično izvršena.

:::note NAPOMENA
Postupak preuzima sve podatke prisutne u narudžbenici i kao rezultat toga primjenjuju se uvjeti kupnje prisutni u narudžbenici, čak i ako su se od tada promijenili.
::: 

![](/img/it-it/purchase/purchase-orders/insert-purchase-orders/header-procedures/image08.png)

Koristite gumbe (**2**) za proširenje ![](/img/neutral/common/minus.png) / stvaranje ![](/img/neutral/common/plus.png) željenih narudžbenica.

Koristite oznake (**3**) za odabir ![](/img/neutral/common/check.png) / poništavanje odabira ![](/img/it-it/purchase/purchase-orders/insert-purchase-orders/header-procedures/image12.png) pojedinačne stavke ili cijele narudžbenice.

## 3. Artikli

U ovoj kartici unose se svi artikli s pripadajućim podacima.

Za pojedinosti o zajedničkom funkcioniranju obrazaca pogledajte sljedeći link [Značajke, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose **ručno**, uz **pomoć polja** za pomoć ili ih mogu predložiti povezane procedure.

### 3.1 Obavezni podaci

**Red**: ovo polje popunit će se automatski i postupno unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih artikla iz okvira za odabir.

> **Artikl sa šifrom**: to su artikli kodirani u šifarniku i mogu se knjižiti u analitičkom računovodstvu i registrirati u skladištu.    
> **Artikl bez šifre**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.    
> **Trošak**: to su kodirani ili nekodirani artikli koji su posebno sažeti u sažecima dokumenata; ako je artikl troškova kodiran i od interesa za poreze, bit će pomican u skladištu, ako nije kodiran ili nije od interesa za poreze, neće se pomicati u skladištu.    
> **Artikl - bilješke**: to su opisne napomene koje se prikazuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.    

:::note NAPOMENA
Ako se izravno krene s unosom artikla, njegova klasa, kod i vrsta retka - Kodirani artikl unose se automatski.
:::

**Klasa/Artikl/Opis artikla**: mogu se unijeti **ručno** ili uz **pomoć polja** za pomoć koje će predložiti sve povezane informacije unesene u Šifarnik artikla.

Nakon unosa artikla, njegov će opis automatski biti preuzet iz evidencije. Ako artikl ima *Varijante*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*. 

**Jedinica mjere**: automatski se predlaže glavna jedinica mjere artikla, ali korisnik može odabrati drugu jedinicu mjere.

**Varijante**: ako odabrani artikl ima varijacije, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Stoga cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izvršenje (npr. iz narudžbenice).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakata; referentni cjenik za sam artikl prikazan je na kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u šifarniku subjekta povezani više cjenika u kaskadi (vidi **Šifarnik klijenta**), isti dokument može sadržavati artikle iz različitih cjenika. 

Dvoklikom u polje **Cjenici** (kartica *Popusti/Cjenici*) korisnik ima mogućnost odabira drugačije ponude od zadane, iz koje će se preuzeti cijena unesenog artikla.

Ako nema cjenika, predloženi podatak može se preuzeti iz *posljednje nabavne cijene* unesene u šifarnik artikla, ako u [Postavkama narudžbenica dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) nije postavljeno da se *Trošak postavlja na nulu u odsutnosti cjenika*.

**PDV**: prioritet ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *Šifarnik artikla*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.

**Iznos**: automatski se izračunava nakon primjene svih popusta, odnosno prikazuje neto iznos stavke.

**Ukupni popust**: prikazuje ukupan iznos popusta definiranih na kartici Popusti/Cjenici za pojedini redak artikla.


#### Opcionalni podaci

**Vrsta prometa nabave**: predloženi podatak je onaj unesen u kartici 'Generalno' u šifarniku artikla. Ako to nije dostupno, neće biti predložen nikakav podatak. Međutim, prilikom evidentiranja računa, uzet će se u obzir vrijednost unesena u polju 'Trošak/Primitak prema zadanim postavkama' u šifarnik kontakta.

**Alternativna mjerna jedinica**: predložena je mjerna jedinica koja se nalazi u kartici Alternativne mjernih jedinica u šifarnik artikla s postavljenom opcijom 'Zadano'. Prijedlog će se pojaviti samo ako je u [Postavkama narudžbenica dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) aktivirana opcija 'Upravljanje dvostrukim jedinicama mjerama'. Ova polja prikazuju količinu u alternativnoj mjeri ako je podatak dostupan u kartici **Alternativne mjerne jedinice u podacima artikla** (koristi se ona koja ima postavljenu zastavu za **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljanje dvostrukim mjerama i Automatski prijedlog alternativne mjere**.

**Alternativna količina**: predložena je vrijednost koja se odnosi na alternativnu mjeru, a izračunava se množenjem ili dijeljenjem upraviteljske količine (koja se odnosi na glavnu jedinicu mjere) s faktorom pretvorbe postavljenim u kartici Alternativne mjernih jedinica u šifarnik artikla.

**Zahtijevani datum dostave**: datum koji označava željeni datum isporuke za artikla;

**Šifra/Opis artikla dobavljača**: u ovom dijelu moguće je unijeti šifru i opis koje dobavljač koristi za identifikaciju artikla. Ovi se podaci automatski predlažu ako je u matičnim podacima artikla (kartica Preferirani dobavljači) povezan odgovarajući artikl dobavljača.

:::note NAPOMENA
Za narudžbe generirane iz zahtjeva za nabavu (RDA), datum isporuke određuje se na sljedeći način:
- ako je u RDA-u definiran Zahtijevani datum dostave, taj se datum prenosi na narudžbu;
- ako Zahtijevani datum dostave nije naveden, koristi se traženi datum iz RDA-a.
:::

#### Specifični gumbi

> **Podijeli količinu u više datuma dostave**: koristi se za podjelu reda narudžbenice u više redova prema traženom datumu isporuke. Ovaj postupak otvorit će novi obrazac u kojem ćete morati unijeti novi datum isporuke i predviđenu količinu za taj datum.    
> **Pakiranje**: postaje dostupno nakon spremanja narudžbe te omogućuje kreiranje UDC-a (jedinice za rukovanje teretom) na temelju odabranog retka. Odabrani redak mora sadržavati artikl koji je šifriran i spremljen u dokumentu. Korisnik mora imati odgovarajuća prava definirana u Parametrima skladišnog ulaza/izlaza za kreiranje paleta. Osim toga, artikl mora biti podešen za upravljanje putem UDC-a. UDC će se kreirati prema pravilima definiranim za Vrstu UDC-a u matičnim podacima artikla, na kartici Pakiranje.
> **Ažuriraj cjenike**:
- Gumb „Ažuriraj trenutni cjenik” omogućuje ažuriranje cijena u trenutno važećem cjeniku za svaki odabrani redak artikla.
- Gumb „Kreiraj novi cjenik s novim razdobljem važenja” otvara prozor u kojem je potrebno unijeti datume važenja novog cjenika. Novi cjenik sadržavat će samo odabrane retke te će biti povezan s dobavljačem navedenim na narudžbi.  


### 3.3 Popusti/Cjenici  

**Vrijednosti kataloga**: nudi se katalog iz kojeg je preuzet artikl, s datumom početka/završetka važenja te s posebnim uvjetima (npr. raspon popusta) dodijeljenim artiklu u katalogu;

**Popusti**: nudi se svi popusti povezani s artiklom, svaki s vlastitom osnovom izračuna i dodjelom.         
**Cjenik koji će biti ažuriran**: ako je ova zastava aktivna, odgovarajući katalog kupnje automatski se ažurira informacijama o artiklu prilikom spremanja.

#### Poseban gumb

> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.

### 3.4 Podaci o artiklu  

Unutar ovog kartice navode/se unose dodatne informacije o artiklu.

**Projekt**: predstavlja projekt povezan s dokumentom. Može se unijeti i pomoću odgovarajuće pomoći za projekte.

**Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i njegovu varijantu;

**Zahtjev za kupnju**: ako je narudžbenica stvorena iz zahtjeva, prikazat će se referentni zahtjev;

**Napomene**: napomene vezane uz redak artikla, mogu se unijeti i pomoću pomoći za bilješke. Bit će navedene u svim dokumentima generiranim iz ovog.

**Marka**: predstavlja marku artikla, preuzetu iz njegovog šifarnika ili iz kataloga artikla.
 
#### Varijante

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** šifarnika artikla ili se mogu unijeti ručno.
Prilika je za upravljanje varijantama artikla na različit način od onoga što je ponuđeno na retku artikla.
Primjerice, na svakom retku artikla moguće je unijeti ukupnu količinu; zatim, u istoj kartici, mogu se odrediti različite količine za više varijanti odabranog artikla, čak i za varijantu i atribut, odnosno upravljanje veličinom/bojom.
Ova operacija je moguća samo ako su sve varijante artikla jednake cijene kao i standardna konfiguracija artikla. 


#### Poseban gumb

> **Otkaži**: omogućuje brisanje odabranog retka varijante.

### 3.5 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na koje su raspodijeljene vrijednosti artikla.

Ovi podaci se mogu unositi ručno ili automatski (u slučaju da su troškovni/profitni centri prethodno uneseni u šifarnik subjekta, šifarnik artikla ili u plan konta).


### 3.6 Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz mogućnost, putem odgovarajuće oznake, odabira koje dodatne podatke isprintati.


### 3.7 Dokumenti u privitku

Prikazuje pojedinosti o mogućem **Dokumenti u privitku** (naziv, vrsta dokumenta, eventualne napomene, naš/vaša referenca). Upute o tome kako priložiti dokument potražite u artiklu *Priloži dokumente*.


### 3.8 Odjeljak s vrijednostima

Odjeljak prikazuje sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikla.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: Cijena artikla* Količina artikla;

**Ukupno rabat**: zbroj popusta artikla, uključujući i konačne popuste;

**Osnovica**: Iznos bez popusta - Popusti;

**Porez**: Osnovica * stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim sekcijama ovog taba prikazane su glavne informacije cijelog dokumenta i neki specifični gumbi.

### 4.1 Konačni rabati

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupan iznos dokumenta.

Uneseni popusti u ovoj sekciji izračunavaju se i prikazuju za svaki artikl u dokumentu, u kartici *Artikli > kartici Popusti/Cjenici*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definirane u **Vrstama popusta**), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući ima li se popust računati na osnovicu ili kaskadno u odnosu na prethodno primijenjene popuste. 

**Prioritet**: predstavlja prioritet primjene popusta; redoslijed primjene je uzlazan. 

**Kaskada/Iznos**: za definiranje koristi li se osnovica za izračun popusta (cijena x količina) - (već izračunati popusti) ili (cijena x količina). 

**Vrijednost**: numerička vrijednost završnog popusta koji se primjenjuje.


### 4.2 Troškovi 

Prikazani su troškovi uneseni u šifarnik kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrsta troškova (unaprijed definirane u Vrstama troškova), dodjeljujući svakoj vrsti postotak troška za primjenu.   
**Postotak/Vrijednost**: polje koje označava hoće li se troškovi izračunavati postotkom ili unaprijed određenim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troška.


### 4.3 Sažetak PDV-a

Prikazuje se PDV rezime dokumenta za svaki PDV kod.

### 4.4 Druga polja

**Završne napomene**: Ovo je opisno polje koje korisnik može popuniti i uz pomoć *pomoći kodiranih napomena*.

### 4.6 Svi iznosi dokumenta 

**Iznos stavki bez popusta**: Predstavlja zbir vrijednosti svih artikla.  
**Zaduženje**: Predstavlja iznos eventualne uplate na račun dokumenta.    
**Poklonjeni iznos**: Predstavlja iznos poklon artikla unesenih u kartici *Artikli*.  
**Ukupni primjenjeni rabati**: Predstavlja ukupnu vrijednost popusta primijenjenih na artikle, ali bez konačnih popusta.  
**Neto iznos artikala**: Bruto iznos artikla – Ukupni primijenjeni popusti.  
**Ukupno konačnih rabata**: Predstavlja vrijednost konačnih popusta izraženih u postocima na bruto iznos artikla.  
**Neto iznos konačnih rabata**: *Neto iznos artikla - Ukupni konačni popusti*.  
**Neregistrirani troškovi**: Predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli *Tipa troškovi*.  
**Troškovi naplate**: Predstavlja zbroj unesenih troškova naplate u mreži *Troškovi*.  
**Trošak ovjere**: Predstavlja zbroj unesenih troškova marke u mreži Troškovi.  
**Trošak dokumentacije**: Predstavlja vrijednost troškova unesenih u mreži *Troškovi*.  
**Osnovica**: *Neto iznos artikla – Završni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*.  
**Porez**: Predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a.  
**Ukupno**: *Osnovica + PDV*.  