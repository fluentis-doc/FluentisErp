---
title: Upravljanje prototipovima
sidebar_position: 2
---

Područje **Prototipovi** predstavlja podršku za **ETO (Engineer To Order)** model proizvodnje, karakterističan za preduzeća iz proizvodnog i montažnog sektora koja proizvode proizvode po narudžbini, odnosno izrađuju proizvode prilagođene konkretnom kupcu.

### Integracija sa sastavnicama i proizvodnim ciklusima

Nakon definisanja svih potrebnih komponenti na bilo kojem nivou prototipa, moguće je automatski generisati odgovarajuću **sastavnicu materijala (BOM)** i naknadno analizirati eventualne razlike u odnosu na nju.
Na ovaj način nije potrebno ponovo kreirati strukturu proizvoda u modulu sastavnica nakon što kupac potvrdi ponudu.
Ista funkcionalnost dostupna je i za **proizvodne cikluse**. Nakon definisanja proizvodnih faza u prototipu, potvrdom prototipa moguće je automatski generisati proizvodni ciklus identičan onome definisanom u strukturi prototipa.

Obrazac se sastoji od zaglavlja u kojem se unose sljedeći podaci:
**Vrsta prototipa**: određuje tip prototipa;
**Godina / Broj / Datum**: predstavljaju godinu, broj i datum kreiranja prototipa. Ove vrijednosti sistem automatski popunjava;
**Projekat**: povezuje prototip sa odgovarajućim projektom;
**Opis prototipa**: slobodno polje za unos napomena.

:::note Napomena
Moguće je kreirati prototip za artikal koji nije evidentiran u šifarniku, kao i koristiti komponente koje takođe nisu evidentirane u šifarniku artikala.
:::

Na desnoj strani zaglavlja definiše se nadređeni artikal prototipa.

- **Artikal sa klasom**
  Koristi se kada se prototip kreira za postojeći artikal iz šifarnika. Potrebno je odabrati klasu, šifru, opis, varijantu i mjernu jedinicu artikla.

- **Artikal bez klase**
  Koristi se kada se prototip kreira za artikal koji još nije evidentiran u šifarniku. U tom slučaju ručno se unose opis artikla, po potrebi varijanta, mjerna jedinica i vrsta nabavke.
  Ovi podaci će se kasnije automatski koristiti prilikom generisanja novog artikla.

Prilikom kreiranja novog prototipa oba odjeljka (**Artikal sa klasom** i **Artikal bez klase**) prikazana su otvorena, jer još nije poznato da li će se koristiti postojeći ili novi artikal.
Prilikom otvaranja postojećeg prototipa prikazuje se samo odgovarajući odjeljak:
- ako je prototip povezan sa postojećim artiklom, otvoren je **Artikal sa klasom**;
- ako je povezan sa nekodiranim artiklom, otvoren je **Artikal bez klase**.

U donjem dijelu obrasca nalaze se kartice:
- **Proizvod**
- **Komponente**
- **Troškovi**

## Proizvod

Ova kartica prikazuje informacije o artiklu definisanom u zaglavlju prototipa. Većina podataka dostupna je samo za pregled.

**Napomena artikla**: prikazuje napomene unesene na kartici [Napomene](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala.
**Težine**: prikazuju se mjerna jedinica težine te bruto, neto i specifična težina artikla.
**Zalihe po skladištima**: prikazuje stanje zaliha artikla po svim skladištima.
**Troškovi**: prikazuju se posljednji, prosječni, standardni i standardni trošak za narednu godinu, kao i prodajna cijena artikla.
**Prodajni cjenovnici**: prikazuju svi prodajni cjenovnici u kojima se nalazi predmetni artikal.
**Napomena**: jedino polje na ovoj kartici koje je moguće uređivati. Koristi se za unos slobodne napomene vezane za prototip.

### Komponente

Na kartici **Komponente** moguće je kreirati, uređivati i pregledati strukturu sastavnice prototipa.
Pomoću odgovarajućih dugmadi na komandnoj traci moguće je dodavati ili uklanjati pojedinačne komponente iz strukture. Isto je moguće uraditi i putem opcija dostupnih desnim klikom miša na komponentu u strukturi. Dodatno, komponente je moguće premještati unutar strukture metodom **prevuci i pusti (drag & drop)**.
Putem dugmeta **Uvezi** moguće je uvesti postojeću sastavnicu materijala, pri čemu se uvezena struktura dodaje ispod odabrane komponente.
Na kartici **Opšte** prikazuje se odabrani nadređeni artikal sa pripadajućom klasom, šifrom i opisom. U sekciji **Podaci nadređenog artikla** moguće je definisati varijantu, verziju, količinu nadređenog artikla, mjernu jedinicu i označiti da li se radi o fiktivnom artiklu.

Na kraju je moguće odabrati vrijednost polja **Izvoz BOM-a** (dugme **Izvezi**) između opcija:
- **Zadrži sastavnicu** – zadržava postojeću komponentu u sastavnici;
- **Nova sastavnica** – zamjenjuje postojeću komponentu novom sastavnicom.

Ove postavke mogu se definisati i za nadređeni artikal i za pojedinačne komponente, a primjenjuju se prilikom izvoza novokreirane sastavnice iz prototipa.
Komponentama se može upravljati kao kodiranim ili nekodiranim artiklima.

- **Komponenta sa klasom**
  Koristi se kada se u prototip dodaje već postojeći artikal iz šifarnika. Potrebno je navesti klasu, šifru, opis, varijantu i mjernu jedinicu.

- **Komponenta bez klase**
  Koristi se kada se u prototip dodaje artikal koji nije evidentiran u šifarniku. U tom slučaju ručno se unose opis artikla, po potrebi varijanta, mjerna jedinica i vrsta nabavke.
  Ovi podaci će kasnije biti iskorišteni za automatsko kreiranje odgovarajućeg artikla.

U okviru **Podaci o komponenti** moguće je definisati:

> **Količina**: određuje količinu komponente potrebnu za proizvodnju definisane **Količine nadređenog artikla**;
> **Alternativna mjerna jedinica**: određuje alternativnu mjernu jedinicu komponente;
> **Vrsta troška materijala**: podrazumijevano se preuzima iz [Parametara prototipa](/docs/configurations/parameters/logistics/item-prototypes-parameters/), ali se može ručno promijeniti za svaku komponentu. Ako je definisan dobavljač, sistem prvo provjerava postoji li cjenovnik za tog dobavljača i koristi pronađenu cijenu bez obzira na odabranu vrstu troška materijala. Dakle, cijena iz dobavljačkog cjenovnika uvijek ima prioritet;
> **Dobavljač**: određuje dobavljača komponente. Automatski se predlaže preferirani dobavljač definisan na artiklu, ali ga je moguće promijeniti. Ako komponenta nije kodirana, uneseni dobavljač će prilikom kreiranja artikla postati njegov podrazumijevani preferirani dobavljač;
> **Trošak materijala**: prikazuje trošak materijala prema odabranoj **Vrsti troška materijala**;
> **Trošak rada**: prikazuje zbir troškova rada i mašina za komponentu;
> **Trošak komponente**: predstavlja ukupan trošak komponente, odnosno zbir troška materijala i troška rada;
> **Napomena**: omogućava unos slobodne napomene za komponentu.

Ako je odabrani element u strukturi poluproizvod, na kartici **Komponente** prikazuju se njegove komponente prvog nivoa.
Na karticama **Dodatni podaci – Prototip** i **Dodatni podaci – Komponenta** moguće je unositi dodatne podatke za nadređeni artikal i komponentu. Više informacija nalazi se u dokumentaciji [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).

U donjem dijelu obrasca nalazi se kartica **Ciklus**, na kojoj se definišu proizvodne faze za pojedine elemente strukture, zajedno sa pripadajućim vremenima pripreme, vremenima rada i troškovima. Moguće je i ručno unijeti vrijednost u polje **Ručna cijena faze**, koja ima prioritet prilikom obračuna troškova i zamjenjuje cijenu izračunatu na osnovu vremena rada i centara troškova. Kartica **Ciklus** dostupna je samo za artikle kod kojih je u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) kao **Vrsta nabavke** odabrano **Proizvodnja** ili **Radni nalog**.
Na kartici **Faze razduženja** definiše se proizvodna faza u kojoj će odgovarajuća komponenta biti razdužena iz skladišta.

*Izvoz proizvodnog ciklusa je trenutno u fazi razvoja.*

*Posebna dugmad*:

> **Parametri prototipa artikla**: omogućava otvaranje parametara prototipova radi pregleda njihovih postavki;
> **Preračun troškova**: omogućava ponovno izračunavanje troškova prototipa na osnovu svih njegovih komponenti;
> **Šifarnik artikala**: otvara šifarnik artikala povezan sa odabranim elementom;
> **MRP parametri**: otvara MRP parametre povezane sa odabranim elementom;
> **Kodiranje artikala**: omogućava kreiranje (kodiranje) artikala koji još nisu evidentirani u šifarniku;
> **Sastavnica materijala**: otvara sastavnicu materijala povezanu sa odabranim elementom;
> **Proizvodni ciklus**: otvara proizvodni ciklus povezan sa odabranim elementom;
> **Uporedi**: omogućava poređenje komponenti prikazanih na kartici **Komponente** sa komponentama postojećim u sastavnici materijala, pri čemu se ističu zajedničke komponente;
> **Uvezi**: omogućava povezivanje odabrane komponente sa prethodno definisanom sastavnicom materijala, koju je zatim moguće uređivati;
> **Izvezi**: kreira ili ažurira sastavnicu materijala iz prototipa. Funkcioniše zajedno sa opcijom **Izvoz BOM-a** na kartici **Opšte**, u sekciji **Komponenta**;
> **Dodaj komponentu**: omogućava dodavanje nove komponente odabranom elementu;
> **Obriši komponentu**: omogućava brisanje komponente odabranog elementa;
> **Proširi sve**: otvara kompletnu strukturu sastavnice;
> **Kopiraj**: kopira odabrani element unutar strukture sastavnice;
> **Isijeci**: uklanja odabrani element iz strukture i smješta ga u međuspremnik;
> **Nalijepi**: umeće prethodno kopirani ili isječeni element u strukturu sastavnice.

### Troškovi

Na kartici **Troškovi** prikazuju se obračuni troškova prototipa za internu upotrebu, za određenog kupca ili za konkretnu ponudu kupca. Na taj način moguće je imati više različitih obračuna istog prototipa.
Svi obračuni dijele zajedničke podatke sa kartice **Komponente**, dok se mogu razlikovati u parametrima koji utiču na obračun cijene, počevši od industrijskog troška.
Prototip se može povezati sa ponudom kupcu direktno iz dokumenta ponude pomoću dugmadi **Kreiraj novi prototip** i **Poveži prototip**.
Takođe je moguće evidentirati:
- **Direktne troškove**
- **Opšte troškove**
- **Ostale troškove**
koji će biti uključeni u konačni obračun cijene.

Sve stavke ovih kategorija definišu se u tabeli [Elementi troška](/docs/configurations/tables/general-settings/cost-elements/), gdje se putem polja **Vrsta troška** određuje kojoj kategoriji pripadaju.
Na ovoj kartici dostupna su sljedeća polja:
**Trošak sata rada**: omogućava ručni unos cijene radnog sata koja utiče samo na komponente koje imaju definisane proizvodne faze;
**Trošak materijala**: ukupan trošak materijala izračunat na osnovu strukture sastavnice;
**Trošak rada**: ukupan trošak radne snage izračunat iz sastavnice;
**Trošak mašina**: ukupan trošak rada mašina izračunat iz sastavnice;
**Ručni trošak**: nije podržan u standardnoj verziji sistema;
**Industrijski trošak**: zbir troška materijala, troška rada i troška mašina;
**Ukupni direktni troškovi**: zbir svih troškova unesenih u sekciji **Direktni troškovi**;
**Industrijski trošak + direktni troškovi**: zbir industrijskog troška i direktnih troškova;
**Marža**: omogućava unos procentualne ili fiksne marže. Vrijednost povećava **Industrijski trošak** ili **Ukupne troškove**, u zavisnosti od postavke **Obračun prodajne cijene sa maržom** definisane u [Parametrima prototipa](/docs/configurations/parameters/logistics/item-prototypes-parameters/), gdje može biti odabrana opcija **Direktni troškovi** ili **Ukupni troškovi**;
**Ukupan trošak sa maržom**: zbir **Industrijskog troška + Direktnih troškova** uvećan za maržu;
**Ukupni opšti troškovi**: zbir svih troškova unesenih u sekciji **Opšti troškovi**;
**Ukupni ostali troškovi**: zbir svih troškova unesenih u sekciji **Ostali troškovi**;
**Korekcija**: omogućava unos korekcije prodajne cijene;
**Zaokruživanje**: omogućava definisanje zaokruživanja naviše ili naniže, kao i nivoa zaokruživanja;
**Prodajna cijena**: konačna prodajna cijena dobijena sabiranjem **Industrijskog troška + Direktnih troškova**, **Opštih troškova**, **Ostalih troškova**, **Korekcije** i efekta **Zaokruživanja**.

Ako je u [Parametrima prototipa](/docs/configurations/parameters/logistics/item-prototypes-parameters/) aktivirana opcija **Nova prodajna cijena**, ovo polje se automatski izračunava i nije ga moguće ručno mijenjati. U suprotnom, vrijednost se može ručno unositi.
**Proizvodna serija**: određuje veličinu proizvodne serije koja utiče na raspodjelu troškova rada i mašina, kao i na jedinični trošak pripreme;
**Ukupno za proizvodnu seriju**: ukupna prodajna cijena izračunata za definisanu proizvodnu seriju;
**Odstupanje od cjenovnika**: prikazuje odstupanje u odnosu na prodajni cjenovnik;
**Vrsta prodajnog cjenovnika**: određuje vrstu prodajnog cjenovnika;
**Važi do**: određuje datum do kojeg je prodajni cjenovnik važeći.

**Tip detaljnog grafikona analize**

Omogućava prikaz sintetičkog ili analitičkog kružnog grafikona koji prikazuje strukturu troškova prototipa.

*Posebna dugmad*:
> **Ažuriraj prodajni cjenovnik**: omogućava ažuriranje cijene artikla u odgovarajućem prodajnom cjenovniku;
> **Ažuriraj ponude**: nakon promjene **Prodajne cijene** prototipa povezanog sa ponudom, omogućava ažuriranje cijene u samoj ponudi;
> **Osvježi kupce**: omogućava kreiranje nove stavke valorizacije za prototip povezan sa odabranim kupcem.

### Način obračuna troškova

Za svaku komponentu prikazuju se jedinični troškovi, dok se u strukturi sastavnice prototipa prikazuju i jedinični i ukupni troškovi materijala i operacija, izračunati prema količini nadređenog artikla za svaku komponentu.

Za nabavne artikle troškovi operacija se ne obračunavaju, dok se troškovi materijala preuzimaju prema postavkama prototipa (skladišni troškovi, cijene iz cjenovnika ili najpovoljnija cijena iz cjenovnika).

Trošak se traži u cjenovniku prema datumu važenja prototipa, a ako datum važenja nije definisan koristi se tekući datum.

Prilikom pretrage cjenovnika koristi se mjerna jedinica upotrebe, uključujući slučajeve kada je definisana kao alternativna mjerna jedinica artikla. Ako se pronađe cijena izražena u drugoj mjernoj jedinici, primjenjuje se faktor konverzije alternativne mjerne jedinice kako bi se izračunao trošak materijala.

Trošak materijala komponente moguće je unijeti i ručno. Nakon toga sistem ponovo izračunava trošak materijala prototipa na osnovu nove vrijednosti. Međutim, pokretanjem funkcije **Preračun troškova** sa komandne trake, trošak će ponovo biti izračunat prema pravilima definisanim u parametrima.

Za kooperantske artikle troškovi materijala preuzimaju se od njihovih komponenti, dok se troškovi operacija preuzimaju iz proizvodnih faza ili, ako one nisu definisane, iz kooperantskog cjenovnika.

Za proizvodne artikle troškovi materijala takođe se preuzimaju od komponenti, dok se troškovi operacija preuzimaju iz proizvodnih faza.
Prilikom obračuna troškova operacija primjenjuje se sljedeći redoslijed prioriteta:
- ako je na fazi definisan ručni trošak, koristi se ta vrijednost;
- u suprotnom se provjerava postoji li ručno definisan satni trošak na kartici **Troškovi**;
- ako ni on nije definisan, trošak se preuzima iz centra troška grupe radnika odnosno mašina.

Kod troškova pripreme (setupa), ako je definisano samo vrijeme pripreme, ono se smatra ukupnim vremenom koje uključuje rad mašina i radnika, pa se kompletan trošak obračunava kao trošak rada prema prethodno navedenom redoslijedu prioriteta.

Ako je potrebno odvojeno obračunati trošak pripreme mašine i trošak pripreme radnika, potrebno je definisati:
- grupu radnika radi preuzimanja troška iz njenog centra troška;
- mašinu za pripremu radi preuzimanja troška iz njenog centra troška.

Ako ovi podaci nisu definisani, vremena pripreme radnika i mašine neće biti uključena u obračun troškova, čak i kada su unesena.

Trošak svake komponente u sastavnici prototipa obuhvata njene vlastite troškove materijala i operacija, kao i troškove svih njenih podkomponenti. Isto pravilo važi i za ukupan trošak prototipa.
Vrijednost **Proizvodne serije** definisana na kartici **Troškovi** koristi se isključivo za obračun jediničnog troška pripreme, koji se dodaje industrijskom trošku prototipa. Promjenom veličine proizvodne serije povećavaju se ili smanjuju troškovi rada i mašina prikazani na kartici **Troškovi**.
Funkcija **Preračun troškova** ponovo izračunava sve troškove, pri čemu za nabavne artikle koristi podatke definisane u parametrima (skladišni troškovi, cijene iz cjenovnika ili najpovoljnije cijene iz cjenovnika), a za troškove operacija podatke definisane u proizvodnim fazama.