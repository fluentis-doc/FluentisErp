---
title: Uvoz Šifarnika Podataka  
sidebar_position: 1
---



U ovom članku bit će objašnjeno kako **uvesti kontakte** (klijente ili dobavljače)  u **Fluentis** putem korištenja **proračunske tablice**.

Ovaj uvoz je moguć zahvaljujući korištenju **BizLink Parameters** jer će svaki put kada se procesira redak, oni biti pozvani.


### Kako otvoriti uvoz putem proračunske tablice:  

Kliknite na **Alati** (obično se nalazi na desnoj strani Fluentisa).

Kliknite na odjeljak **BizLink**

Kliknite na **Uvoz na zahtjev > Šifarnik> Uvoz klijenata/dobavljača** kao što je prikazano na slici ispod.  

![](/img/it-it/applications/bizlink/import-contacts-registry/image03.png) 


### Odjeljak Podaci 

U ovom odjeljku unijet ćemo podatke koji će kasnije postati trajni putem spremanja u **Fluentis** bazu podataka.

Sada je na zaslonu prikazana elektronička tablica za uvoz.  

![](/img/it-it/applications/bizlink/import-contacts-registry/image04.png) 

Od ovog trenutka možemo odabrati nekoliko pristupa:  

 1. Uvesti već popunjenu elektroničku tablicu, **File > Open**.
 2. Dodati različite stupce kopiranjem i lijepljenjem iz pohranjenog popisa našeg računala.
 3. Spremiti ovu datoteku (**File > Spremi**) na naše računalo, a zatim dodati različite podatke i ponovno je uvesti u **Fluentis** (vidi točku 1). Ovo bi moglo biti vrlo korisno za predaju predloška elektroničke tablice za uvoz koji će se ispuniti za buduće popise koje će nam dostaviti dobavljači.  
 4. Ručno dodati polja.  

**PAŽNJA**: ako imamo elektroničku tablicu spremljenu na našem računalu, ona mora slijediti shemu tablice prikazane na slici iznad. Drugim riječima, isti redoslijed stupaca, vrsta podataka itd. Ti detalji detaljno su objašnjeni u sljedećem odjeljku.


### Unos polja  

Prilikom unosa polja potrebno je uzeti u obzir mnoge stvari, uključujući tip, maksimalnu duljinu, obavezno polje itd...

Opće smjernice:  

-        Ako je polje označeno crvenom bojom, to je obavezno polje.  

-        Ako je naziv ćelije istaknut zelenom bojom, to je **odjeljak**

-        Ako je naziv ćelije istaknut žutom bojom, to je **polje**

-        Polje: označava je li unos obavezan ili ne.  

-        Tip: označava tip polja.  

-        Formatiranje Excela: označava preporučeno formatiranje Excela kako bi se izbjegle pogrešne unose, pogledajte korisne Savjete i upozorenja na kraju.

-        Duljina: označava ima li polje ograničenje na broj znakova. 

-        Opis: kratki opis polja. 

*Primjer*: stvarni primjer onoga što možete upisati u to polje.

-        Tablica/mapping stupac: ako je dostupan, označava mapiranje odgovarajućeg polja u bazi podataka, za više informacija pogledajte korisne Savjete i upozorenja na kraju.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image05.png)

 

**Opći podaci**:

Šifra:

-        Polje: obvezno

-        Tip: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 6 znakova  

-        Opis: referentni kod kupca/dobavljača  

*Primjer*: TEGOL

-         Tablica/mapping stupac: select MBAN_Nomignolo from MB_Anagr

Naziv tvrtke:  

-        Polje: obvezno

-        Tip: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: naziv tvrtke kupca/dobavljača  

*Primjer*: TEGOLA CANADESE spa

-         Tablica/mapping stupac: select MBAN_RagSoc from MB_Anagr

Kupac/Dobavljač:

-        Polje: obvezno

-        Tip: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 1 znak  

-        Opis: Označava da li unosimo kupca ili dobavljača. Dvije oznake koje predstavljaju kupca i dobavljača specificirane su u parametrima.

*Primjer*: “C” odgovara dobavljaču, ”F” odgovara kupcu

**Pažnja**: jedini način za unos kontakta koji je i kupac i dobavljač je da ga prvo unesete kao kupca, a zatim kao dobavljača.

Račun:

-        Polje: nije obvezno

-        Tip: niz znakova

-        Opis: račun dobavljača, glavna knjiga dobavljača

*Primjer*: “15200” codgovara Kupcima Italije

-         Tablica/mapping stupac: select MBPC_Conto from MB_PiaCon

Podračun:

-        Polje: nije obvezno

-        Tip: niz znakova

-        Opis: podračun dobavljača, malo glavne knjige dobavljača  

*Primjer*: ako se prenesu računi s praznim sustavom, može se koristiti kodiranje poput 01; 02; 03 oppure 001; 002; 003

-         Tablica/mapping stupac: select BPC_SottoConto from MB_PiaCon

Dospijeća plaćanja (true/false):

-        Polje: obvezno

-        Tip: niz znakova

-        Excel formatiranje: tekst

-       Maksimalna duljina: 200 znakova  

-        Opis: zastava otvorenih stavki

*Primjer*: dovoljno je jednostavno napisati “true” i čim promijenite ćeliju, automatski će napisati  “TRUE” u sredini ćelije ili “FALSE” ovisno o slučaju 

Adresa:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: adresa sjedišta kupca/dobavljača  

*Primjer*: Ulica Bez prsti sa tastature 7 

-         Tablica/mapping stupac: select MBAN_Indirizzo from MB_Anagr

Općina:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: grad sjedišta kupca/dobavljača

*Primjer*: Cordignano

-         Tablica/mapping stupac: select MBAN_Comune from MB_Anagr

Poštanski broj:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 5 znakova

-        Opis: poštanski broj sjedišta kupca/dobavljača

*Primjer*: 31016

-         Tablica/mapping stupac: select MBAN_CAP from MB_Anagr

Županija:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 200 znakova 

-        Opis: županija sjedišta kupca/dobavljača  

*Primjer*: “TV” odgovara Trevisu

-         Tablica/mapping stupac: select MBAN_Provincia from MB_Anagr

Država:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 200 znakova

-        Opis: država sjedišta kupca/dobavljača

*Primjer*: “IT” odgovara Italiji

-         Tablica/mapping stupac: select MBNZ_CodIso from MB_Nazioni

Jezik:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 200 znakova

-        Opis: jezik koji koristi kupac/dobavljač

*Primjer*: “IT” odgovara talijanskom  

-         Tablica/mapping stupac: select MBAN_RagSoc from MB_Anagr

Telefon:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 200 znakova  

-        Opis: telefon kupca/dobavljača

*Primjer*: 0438-123456

-         Tablica/mapping stupac: select MBAN_Telefono from MB_Anagr

E-mail:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 200 znakova

-        Opis: glavna e-mail adresa kupca/dobavljača

*Primjer*: info@mycompany.com

-         Tablica/mapping stupac: select MBAN_Email from MB_Anagr

Napomena:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 200 znakova

-        Opis: dodatne napomene

*Primjer*:

-         Tablica/mapping stupac: select MBAN_Note from MB_Anagr

![](/img/it-it/applications/bizlink/import-contacts-registry/image06.png) 

**Fiskalni podaci**:

Porezni broj:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: porezni identifikacijski broj kupca/dobavljača


*Primjer*: IT01720550936

-         Tablica/mapping stupac: select MBAN_CodFiscale from MB_Anagr

ISO šifra:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 50 znakova  

-        Opis:

*Primjer*: “IT” odgovara Italiji

-        Tablica/mapping stupac: select MBAN_CodIso from MB_Anagr

OIB broj:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 200 znakova

-        Opis: porezni identifikacijski broj kupca/dobavljača


*Primjer*: 28207227700

-         Tablica/mapping stupac: select MBAN_PartitaIva from MB_Anagr

![](/img/it-it/applications/bizlink/import-contacts-registry/image07.png) 

**Plaćanja**:

Tip plaćanja:

-        Polje: obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: vrsta plaćanja koju koristi kupac/dobavljač


*Primjer*: “04” odgovara bankovnom transferu

-        Tablica/mapping stupac: select MBTP_Pagamento from MB_TipoPag

Modeli Plaćanja:

-        Polje: obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: rok plaćanja za kupca/dobavljača

*Primjer*: “60 GG DF” znači unutar 60 dana od datuma računa, “u dostavi” plaćanje prilikom dostave robe

-         Tablica/mapping stupac: select * from MB_SolPag

ABI:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 5

-        Opis: identifikacija banke na koju se odnosi račun kupca/dobavljača. To je dio IBAN-a


*Primjer*: 01234

CAB:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 5

-        Opis: označava podružnicu odgovarajuće banke (ABI) kupca/dobavljača. To je dio IBAN-a

*Primjer*: 12345

IBAN:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 27 znakova

-        Opis: Kod koji se koristi u transakcijama između različitih bankovnih računa i koji sadrži 
identifikaciju zemlje, banke i broja tekućeg računa.


*Primjer*: IT66C010050338 2000000218020     

SWIFT:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: 11 znakova

-        Opis: Identifikacijski brojevi koji omogućuju sustavima da odmah shvate koja je primateljska banka i koja je pošiljateljska, njihovo ime i mjesto odakle operiraju. Potreban je za međunarodne uplate. Sastoji se od 8 znakova + 3 opcionalna.


*Primjer*: “UNCRITMM” odgovara SWIFT-u UniCredit-a

Zona:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: Zona definirana na početku IBAN-a

*Primjer*: “IT” Odgovara Italiji  
  
 ![](/img/it-it/applications/bizlink/import-contacts-registry/image08.png)

**Agenti**:

Agent:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: Ako postoji agent (prisutan u evidenciji 
agenata), može biti povezan s klijentom.

*Primjer*:

-        Tablica/mapping stupac: select * from MB_Agenti

Provizije:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis: Provizija agenta, ako je različita od one unesene u evidenciju agenata, postoji maska u kojoj se može odrediti koja ima veći prioritet od druge.


*Primjer*:

-        Tablica/mapping stupac: select * from MB_AgentiZone

![](/img/it-it/applications/bizlink/import-contacts-registry/image09.png) 

**Cjenici**:

Cjenik:

-        Polje: nije obavezno

-        Tip: niz znakova

-        Excel format: tekst

-        Maksimalna duljina: /

-        Opis:

*Primjer*:

Popust 1:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel format: broj, decimalna pozicija = 2

-        Maksimalna duljina: /

-        Opis: Vrijednost popusta  

*Primjer*: 550

Popust 2:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel format: broj, decimalna pozicija = 2

-        Maksimalna duljina: /

-        Opis: Vrijednost popusta

*Primjer*: 5%

 
### BizLink Parameters

Ovi parametri služe za obradu unesenih redaka u sekciji Podaci. Kako se može primijetiti s slike, neka polja već su unaprijed popunjena, ali ništa nas ne sprječava da ih mijenjamo.

![](/img/it-it/applications/bizlink/import-contacts-registry/image10.png) 

 BizLink Spreadsheet:

-        Polje: ne unositi

Jezik:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: ISO kod jezika  

*Primjer*: “it-IT” predstavlja talijanski jezik, “en-US predstavlja engleski jezik u Americi.

Tvrtka:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Polje je prethodno popunjeno jer uzima vrijednosti već unutar Fluentisa, koje možemo vidjeti u gornjem lijevom kutu.


*Primjer*: “1” odgovara demo tvrtki

-         Tablica/mapping stupac: Select MBSC_Code from MB_Soc

Odjel:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Kao i za tvrtku, prethodno je popunjeno

*Primjer*: “1” odgovara glavnom sjedištu, “2” sjedištu u Milanu  

-         Tablica/mapping stupac: select MBDP_Code from MB_Dep

Identifikacijski broj klijenta:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Bilo koje slovo koje unesemo u parametre koji će se zatim odnositi na polje klijenta/dobavljača. Radi jednostavnosti, preporučuje se “C”

*Primjer*: “C” odgovara klijentima

Identifikacijski broj dobavljača:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Bilo koje slovo koje unesemo u parametre koji će se zatim odnositi na polje klijenta/dobavljača. Radi jednostavnosti, preporučuje se “F”

*Primjer*: “F” odgovara dobavljačima

Kod vrste računa za klijente:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Glavni račun u odnosu na klijente. Da biste ga vidjeli i iz Fluentisa, idite na **Početna > Parametri > Administracija > Računovodstveni parametri**. Dvaput kliknite na trenutnu godinu, a zatim desno biste trebali vidjeti “Vrsta računa”

*Primjer*: “FIT” odgovara klijentima u Italiji

Kod vrste računa za dobavljače:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Glavni račun u odnosu na dobavljače. Da biste ga vidjeli i iz Fluentisa, idite na **Početna stranica > Parametri > Administracija > Računovodstveni parametri**. Dvaput kliknite na trenutnu godinu, a zatim desno biste trebali vidjeti “Vrsta računa”

*Primjer*: “CIT” odgovara dobavljačima u Italiji  

Grupa klijenata:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Možete vidjeti kodove iz Home **Početna > Računovodstvo > Kontni plan**, na prvoj kartici prikaza nalazi se kod grupe.

*Primjer*: “1520” odgovara klijentima u Italiji

-        Tablica/mapping stupac: select MBGR_Gruppo from MB_GRUPP

Grupa dobavljača:

-        Polje: obavezno

-        Tip: niz znakova

-        Opis: Možete vidjeti kodove prisutne od **Početna stranica > Računovodstvo > Kontni plan**, u prvom prikazu postoji kod grupe.

*Primjer*: “2506” odgovara Dobavljačima Italije

-        Tablica/mapping stupac: select MBGR_Gruppo from MB_GRUPPI

Šifra Tipa popusta 1:

-        Polje: obavezno samo ako je unesen popust 1

-        Tip: niz znakova

-        Opis: Predstavlja kategoriju primijenjenog 
popusta na cjenik

*Primjer*: “C1” odgovara kaskadnom popustu

-        Tablica/mapping stupac: select MBST_TipSco from MB_Sconti

Šifra Tipa popusta 2:

-        Polje: obavezno samo ako je unesen popust 2

-        Tip: niz znakova

-        Opis: Predstavlja kategoriju primijenjenog 
popusta na cjenik

*Primjer*: “3” odgovara komercijalnom popustu

-        Tablica/mapping stupac: select MBST_TipSco from MB_Sconti



### Pokretanje uvoza

Nakon što unesete podatke, za pokretanje uvoza kliknite na gumb u izborniku uvoza, koji se nalazi gore lijevo, također nazvan “Uvoz” kao što je prikazano na slici ispod.

![](/img/it-it/applications/bizlink/import-contacts-registry/image11.png)



### Zaključci-Uspješan unos

Ako sve prođe bez problema, neće se pojaviti nikakva poruka o pogrešci. Za dodatnu provjeru uspješnosti, provjerite u kartici članaka (**Početna stranica > Artikli**) jesu li uvezeni članci od dobavljača prisutni. Inače, na zaslonu će se pojaviti poruka o pogrešci koja će pokazati koje su postavke i/ili polja neispravni. Za tumačenje vrste pogreške pogledajte Korisne savjete i upozorenja u posljednjem odlomku.





### Korisni savjeti i upozorenja 

**Preporučena Excel formatiranja**:

-        Za ispravan uvoz, snažno se preporučuje formatiranje stupaca prema tipu navedenom pod "Formattazione Excel" za svako polje. Na primjer, ako je tip polja decimalan i u tom polju treba unijeti valutu, formatirajte polje kao valutu. To je zato što će, primjerice, ako se ćelija ne formatira, Excel ukloniti nevažne znamenke. Za unos formatiranja slijedite sljedeće korake:

Prvo odaberite željeni stupac kao što je prikazano na slici ispod:

![](/img/it-it/applications/bizlink/import-contacts-registry/image12.png) 

Zatim, nakon postavljanja pokazivača miša unutar stupca, pritisnite desnu tipku miša.

![](/img/it-it/applications/bizlink/import-contacts-registry/image13.png) 

Odaberite lijevim klikom  **> Oblikuj ćelije**…

![](/img/it-it/applications/bizlink/import-contacts-registry/image14.png) 

Na ovom se zaslonu može formatirati odabrani stupac. Na temelju uputa navedenih u "Unos polja" odaberite odgovarajuću kategoriju, s pripadajućim specifikacijama (npr. valuta, simbol nijedan). Istu stvar moguće je učiniti i iz elektroničke tablice unutar Fluentisa.

**Pažnja:** Klasičan slučaj odnosi se na kodove koji sadrže nule, navodno neznačajne, npr. “001”. Ako je polje formatirano kao generičko ili numeričko, nule bi bile odbačene; ako je formatirano kao niz, nule bi se zadržale.

**Tablica/mapping stupac**:

-        Ako postoji unos  “Unos polja” ", to znači da unesena vrijednost u polje za uvoz već može biti prisutna u bazi podataka. Također je unesena i u polja koja će biti unesena iz početka kako bismo možda vidjeli primjer, ako postoji, u bazi podataka. Za pregled povezanih podataka prisutnih u bazi podataka dovoljno je slijediti ove korake, koristeći kao primjer klasu artikala i pripadno mapiranje:

select MBDC_Classe from MB_Classi (**\<-** ovo je mapiranje). Izvršite upit u “Microsoft SQL server management studio” i dobijte sljedeći rezultat:

![](/img/it-it/applications/bizlink/import-contacts-registry/image15.png) 

Kada se to gleda na taj način, ne prenosi nikakve informacije. Kako bismo razumjeli njezino značenje, zamijenimo simbol “*” iza klauzule select s poljem kako bismo sastavili novi upit. U ovom slučaju imali bismo  select * from MB_Class, što služi za odabir cjelokupnog sadržaja tablice, sada to izvršimo.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image16.png)

Ovo je korisno jer, kao što je prikazano na slici, putem opisa (MBDC_Descr) moguće je razumjeti što polje predstavlja i provjeriti je li ono što ćemo unijeti prisutno u bazi podataka.

Ovaj opisani postupak je univerzalan, odnosno vrijedi za svako polje.

Istu reprezentaciju moguće je vidjeti i u Fluentisu:

S početne stranice Fluentisa odaberite **Artikli > Artikli dobavljača** (vidi sliku ispod).

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image17.png)

Zatim, u okviru pretrage koja se pojavi, kliknite lijevim gumbom miša na strelicu pored artikala, koja otvara padajući izbornik gdje je moguće vidjeti klasu artikala s odgovarajućim opisom kao što je prikazano na slici.

![](/img/it-it/applications/bizlink/import-contacts-registry/image18.png) 

Ovo se odnosi na klasu artikala. Za ostala polja možemo primijeniti isti postupak, ali na različitim mjestima.

Trebali bismo unijeti jednu od postojećih vrijednosti, inače uvoz neće uspjeti i dobit ćemo grešku. To vrijedi za svako polje koje ima mapiranu tablicu/stupac.

Ako želimo dodati polje s mapiranjem koje nije prisutno u bazi podataka, možemo ga dodati putem upita ili putem Fluentisa. U ovom slučaju, preporučuje se unos putem Fluentisa. Također, za klasu artikala, iz Artikala dobavljača (kao što je prikazano na slici iznad), desnim klikom unutar filtera pretrage klase artikala odaberite “otvori obrazac”.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image19.png)

Na formi koja se otvori, kliknite gumb za pretraživanje kako biste vidjeli postojeće klase artikala.

 ![](/img/neutral/common/search.png)

Ispod zadnjeg ispunjenog reda nalazi se prazan red. On služi za unos novih vrijednosti.

![](/img/it-it/applications/bizlink/import-contacts-registry/image21.png) 

Unesite nove vrijednosti u taj red i nakon toga jednostavno pritisnite Enter.

 Ovaj postupak je sličan za ostala polja, jedina razlika je u tome gdje se nalaze filteri pretrage na koje treba lijevim klikom otvoriti obrazac.

**Pogreške:** 

-        U slučaju neuspješnog uvoza, kako je već spomenuto, pojavit će se zaslon s greškom.

 Ako je greška nastala u dijelu podataka, moguće je pronaći redak koji sadrži grešku, jer će na primjer biti napisano “System.ArgumentException: Error importing row 4”. Međutim, taj redak (vidi sliku ispod) nije stvarni redak koji sadrži grešku. Da biste precizno odredili koji redak sadrži grešku, koristeći brojeve u lijevom stupcu, dodajte 1. 

 Dakle: 

 Stvarni redak s greškom  = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-contacts-registry/image22.png)

   

Za tumačenje greške, slijedite ove korake: U istom retku gdje je prikazan broj retka, naći ćete **predmet** na koju se odnosi greška, zatim slijedi stvarna  **greška**, na kraju je navedeno **svojstvo** u kojem je pronađena greška. U primjeru koji je naveden:“Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.**PurchasePriceLists**not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. U ovom slučaju, jedinica mjere vezana uz cijenu kupnje ima grešku jer je nula. Naime, njezino unošenje je obavezno.

 Ako je greška nastala u dijelu parametara, poruka će biti slična, a metoda rješavanja ostaje ista: provjeriti i ispraviti unos navedenog svojstva.

**Pažnja**: Ako je pronađen prazan redak, neće biti prijavljena nikakva greška, ali će se uvoz završiti tamo. Primjerice, ako je prvi redak (redak br. 4) prazan iz nekog razloga, a ispod njega (od reda br. 5) postoje popunjeni retci, ništa se neće uvesti.

**Pažnja**: Ako se u šifraniku od 10 redaka dogodi greška u retku br. 7, prva 6 redaka će se ipak unijeti ako nisu uzrokovali probleme! Ponovnim pokretanjem uvoza bez mijenjanja prvih 6 redaka (i naravno, ako je greška ispravljena), neće biti problema, pa čak ni duplikata, jer se prvo provjerava prisutnost kontakta. Ako se promijeni bilo koja vrijednost u prvih 6 redaka, taj će kontakt biti smatran novim.

Na kraju, moguće je dobiti i drugu poruku greške.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image23.png)

Kao što se može primijetiti iz gornje prikazane slike, ovakva vrsta poruka je lakša za tumačenje jer se daje točna referenca na ćeliju s pripadajućom greškom. U ovom slučaju, u ćeliji F:4 nema nikakve vrijednosti.
