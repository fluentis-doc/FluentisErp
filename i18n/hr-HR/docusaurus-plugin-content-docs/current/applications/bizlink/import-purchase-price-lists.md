---
title: Uvoz cjenika dobavljača
sidebar_position: 3
---


Ovaj dokument će objasniti kako **Uvesti cjenike dobavljača** u **Fluentis** pomoću **proračunske tablice**.

Ovaj uvoz moguć je zahvaljujući korištenju **BizLink Parameters** jer svaki put kada se red obradi, oni će biti pozvani.


### Kako otvoriti uvoz proračunske tablice

Kliknite na **Alati** (obično se nalazi na desnoj strani Fluentisa).

Kliknite odjeljak **BizLink**

Kliknite na **Uvoz na zahtjev > Dokumenti o nabavi > Uvoz cjenika dobavljača** kao što je prikazano na slici ispod.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image03.png) 



### Odjeljak datuma

U ovom odjeljku unijet ćemo podatke koji će zatim biti trajni pohranjivanjem u bazu podataka Fluentis.

Proračunska tablica za uvoz sada je prikazana na zaslonu.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image04.png) 

Od ove točke možete krenuti različitim putevima:

 1. Uvezite već kompiliranu proračunsku tablicu, **Datoteka > Open**.  
 2. Dodajte različite stupce kopiranjem i lijepljenjem s popisa spremljenog na našem računalu.  
 3. Spremite ovu datoteku (**Datoteka > Spremi**) na računalo, zatim dodajte različite podatke i zatim je ponovno uvezite u Fluentis (vidi točku 1). Ovo bi moglo biti vrlo korisno za prosljeđivanje predloška proračunske tablice za uvoz koji treba ispuniti za buduće cjenike koje će nam dobavljači slati.  
 4. Dodajte polja ručno.  

**PAŽNJA**: ako imamo proračunsku tablicu spremljenu na našem računalu, ona mora slijediti izgled lista na gornjoj slici. To jest, isti redoslijed stupaca, tip podataka itd. Potonji su detaljno objašnjeni u sljedećem odlomku.  


### Umetanje polja  

Kada je polje umetnuto, mnoge stvari se moraju uzeti u obzir uključujući vrstu, maksimalnu duljinu, potrebno itd...  

Opće indikacije:

-        Ako je polje napisano crvenom bojom ono je obavezno polje

-        Ako je naziv ćelije označen zelenom bojom, to je **odjeljak**

-        Ako je naziv ćelije označen žutom bojom, to je **polje**

-        Polje: označava je li umetanje obavezno ili ne

-        Vrsta: označava vrstu polja

-        Excel formatiranje: označava preporučeno Excel formatiranje kako biste izbjegli netočne unose, pogledajte posljednji odjeljak Korisni savjeti i upozorenja  

-        Dužina: označava ima li polje ograničenje broja znakova koje treba poštovati  

-        Opis: kratak opis polja

*Primjer*: pravi primjer onoga što možete napisati u tom polju

-        Mapiranje tablice/stupca: ako je prisutno, označava preslikavanje odgovarajućeg polja u bazi podataka. Za dodatne informacije pogledajte zadnji odjeljak. 

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image05.png) 



**Podaci o artiklu dobavljača**:

Šifra:

-        Polje: obavezno

-        Vrsta: niz znakova 

-        Excel formatiranje: tekst

-        Maksimalna duljina: 50 znakova

-        Opis: referentna šifra artikla koju koristi dobavljač  

*Primjer*: 02030508

Opis:

-        Polje: obavezno

-        Vrsta: niz znakova 

-        Excel formatiranje: tekst

-        Maksimalna duljina: 200 znakova

-        Opis: opis artikla koji je dao dobavljač  

*Primjer*: teniska loptica osjetljiva na rotaciju, može odgovarati broju artikla

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image06.png) 


**Podaci o artiklu**:

Klasa:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: šifra koja se odnosi na klasu artikla

*Primjer*: “1” odgovara poluproizvodima, “IMB” odgovara pakiranju

-        Mapiranje tablice/stupca: select MBDC_Classe from MB_Classi

Interna šifra:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 50 znakova

-        Opis: ako nije dodijeljen, uzima se onaj dobavljača. Identificirat će stavku, pa ako dobijete stavku, u skladu s tim modificirate interni kod. U suprotnom, ako dobijete stavku, ostavite nepromijenjenu šifru stavke i, na primjer, izmijenite opis, ažuriranje stavke izvršit će se s tom šifrom stavke. (Nemojte ažurirati mjernu jedinicu)  

*Primjer*: 7710ct7tb

Interni opis:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 200 znakova

-        Opis: ako nije dodijeljen, uzima se onaj dobavljača

*Primjer*: teniska loptica osjetljiva na vrtnju

Jedinica mjere:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 3 znaka

-        Opis: šifra koja se odnosi na mjerenje koje se koristi za dotičnu stavku  

*Primjer*: “cm” odgovara centimetrima, “Transportna jedinica” odgovara paleti 

-        Mapiranje tablice/stupca: select MBUM_Codice from MB_UnitaMisura

PDV:

-        Polje: nije obavezno

-        Vrsta: niz znakova 

-        Excel formatiranje: tekst

-        Maksimalna duljina: 3 znaka

-        Opis: šifra koja se odnosi na mjerenje koje se koristi za dotičnu stavku

*Primjer*: “22” Primjer odgovara 22% PDV-a, “944” Oslobođeno čl. 40 c. 4 bis DL 331

-        Mapiranje tablice/stupca: select MBIV_Code from MB_iva

Kategorija proizvoda

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 3 znaka

-        Opis: šifra koja se odnosi na kategoriju robe predmetne stavke

*Primjer*: “206” odgovara ljepilima, “211” odgovara sirovinama

-        Mapiranje tablice/stupca: select MBCM_Codice from MB_CatMerceologica

Račun za kupnju:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 10 znakova

-        Opis: šifra koja se odnosi na vrstu izdane fakture za predmetnu stavku

*Primjer*: “4” odgovara kupnji poluproizvoda, “1” odgovara sirovinama

-        Mapiranje tablice/stupca: select MBFA_TipoFatt from mb_TipoFattAcq

Barkod:

-        Polje: nije obavezno

-        Vrsta: niz znakova 

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: barkod dotičnog artikla

*Primjer*: ABC-1234

Vrsta lota:

-        Polje: nije obavezno

-        Vrsta: niz znakova 

-        Excel formatiranje: tekst

-        Maksimalna duljina: 2 znaka

-        Opis: vrsta lota kojoj predmet pripada

*Primjer*: “4” odgovara kupnji poluproizvoda, “1” codgovara sirovinama

Nomenklatura:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 50 znakova

-        Opis: nomenklatura, klasifikacija artikala

*Primjer*: “32049000” odgovara bojama

-        Mapiranje tablice/stupca: select INCN_CodNomencl from IN_CodNomenc

Šifra proizvođača:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 100 znakova

-        Opis: šifra proizvođača artikla

*Primjer*: art0102032019

Komercijalni kod:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 100 znakova

-        Opis: šifra komercijalne kategorije

*Primjer*: “P” označava privatno

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image07.png) 


**Podaci o cjeniku**:

Cijena:

-        Polje: obavezno

-        Vrsta: decimalni

-        Excel formatiranje: valuta, simbol nema

-        Maksimalna duljina: /

-        Opis: kataloška cijena artikla

*Primjer*: 10.99, 123.45

UM cijena:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: koristi se za definiranje cijene s obzirom na količinu (npr. cijena po kilogramu, cijena po kvadratnom metru)

*Primjer*: “kg” odgovara kilogramima

-        Mapiranje tablice/stupca: select MBUM_Codice from MB_UnitaMisura


**Količina**:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: količina artikla na koji se odnosi prethodna cijena

*Primjer*: 500


**Dodatna vrijednost**:

-        Polje: nije obavezno

-        Tipo: decimale

-        Formattazione Excel: numero, posizione decimali = 2

-        Lunghezza massima: /

-        Opis: dodatna vrijednost koja se može koristiti pri izradi prodajnih cjenika iz nabavnih cjenika. Na primjer, ako postoje troškovi prijevoza (koje moramo platiti dobavljaču), oni su ovdje prijavljeni da bi se zatim koristili u izračunu prodajne cijene tog artikla.

*Primjer*: 123.45


**Dodatni %**:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Lunghezza massima: /

-        Opis: dodatni postotak koji se može koristiti pri izradi prodajnih cjenika iz nabavnih cjenika
Primjer: 10

*Primjer*: 10        

  ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image08.png)


**Popusti**:

Popust1:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: mogući popusti primjenjivi

*Primjer*: “50+10” početni popust od 50% primjenjuje se na zbroj retka, a daljnji popust od 10% primjenjuje se na novi zbroj.

Potpuno ista stvar za druga dva popusta, samo se vrijednost popusta mijenja.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image09.png) 


**Količinski popusti**:

Popust1:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: popust se primjenjuje ako se kupi određena količina predmetnog artikla

*Primjer*: 10

Količina1:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: minimalna količina potrebna za odgovarajući popust

*Primjer*: 550

Potpuno ista stvar za druga dva količinska popusta, samo se odgovarajuća vrijednost mijenja.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image10.png) 


**Vrijednosni popusti**:

Popust1:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: popust se primjenjuje ako premašuje oporezivi iznos određenog retka

*Primjer*: 20

Vrijednost1:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: minimalni oporezivi iznos potreban za dobivanje odgovarajućeg popusta

*Primjer*: 950

Potpuno ista stvar za druga dva popusta i vrijednosti.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image11.png) 


**Cijena po količini**:

Cijena1:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: jedinična cijena koja se primjenjuje ako se prekorači određena količina

*Primjer*: 3.99

Količina1:

-        Polje: nije obavezno

-        Vrsta: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: minimalna količina potrebna za odgovarajuću jediničnu cijenu

*Primjer*: 250

Potpuno ista stvar za druge dvije cijene i relativne količine, samo se odnosna vrijednost mijenja.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image12.png) 


**Ostali podaci**:

Bilješka:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: dodatne napomene

*Opis*: ne izlagati sunčevoj svjetlosti

-        Tablica/stupac mapiranja: select MBNC_Codice from MB_NoteCodificat



### BizLink Parameters

Ovi će se parametri koristiti za obradu redaka umetnutih u odjeljak Podaci. Kao što možete vidjeti na slici, neka su polja već unaprijed popunjena, ali ništa nas ne sprječava da ih izmijenimo.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image13.png)

1      BizLink Spreadsheet:

-        Polje: ne ispunjavati

2      Jezik:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: ISO kod koji se odnosi na jezik

*Primjer*: “it-IT” predstavlja talijanski jezik, “en-US” predstavlja engleski jezik u Americi.

3      Tvrtke:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: to je unaprijed popunjeno polje jer uzima vrijednosti koje su već unutar Fluentisa, a mogu se vidjeti u gornjem lijevom kutu.

*Primjer*: “1” odgovara demo tvrtki

-        Mapiranje tablice/stupca: Select MBSC_Code from MB_Soc

4      Divizija:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: što se tiče tvrtke, unaprijed je popunjeno

*Primjer*: “1” odgovara registriranom uredu, “2” operativnom sjedištu u Milanu

-        Mapiranje tablice/stupca: select MBDP_Code from MB_Dep

5      Nacija:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: država u kojoj se nalazi odjel za koji je uvezen cjenik

*Primjer*: “GB” odgovara Velikoj Britaniji, “USA” odgovara Sjedinjenim Državama

-        Mapiranje tablice/stupca: select MBNZ_Codice from MB_Nazioni

6      Barkod:

-        Polje: obavezno samo ako je bar kod barem jednog artikla unesen u navedenom odjeljku

-        Vrsta: niz znakova

-        Opis: služi za označavanje vrste korištenog barkoda

*Primjer*: “39” odgovara COD39

-        Mapiranje tablice/stupca: select MBBC_Codice from MB_BarCode

7      Račun:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: račun dobavljača, knjiga dobavljača

*Primjer*: “1701” koji ima 3 podračuna (vidi dolje)

-        Mapiranje tablice/stupca: select MBPC_Conto from MB_PiaCon

8      Podračun:

-        Polje: obavezno

-        Vrsta: niz znakova 

-        Opis: podračun dobavljača, knjiga dobavljača

*Primjer*: za račun 1701 koji smo vidjeli ranije, postoje 3 podračuna: “001” koji odgovara računima, “002” koji odgovara vrijednostima otpremnice i “” (nije naveden podračun) koji odgovara novcu i novčanim ekvivalentima.

-      Mapiranje tablice/stupca: select BPC_SottoConto from MB_PiaCon

9      Valuta:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: valuta u kojoj se tumače vrijednosti unesene u danom odjeljku

*Primjer*: “EUR” odgovara euru, “USD” odgovara dolaru

-        Mapping table/stupca: select MBDI_Divisa from MB_Divise

10  Početak valjanosti:

-        Polje: obavezno

-        Vrsta: datum i vrijeme

-        Opis: označava početak važenja umetnutog cjenika (dd/mm/gggg)

*Primjer*: 1/10/2018

11  Kraj valjanosti:

-        Polje: nije obavezno

-        Vrsta: datum i vrijeme

-        Opis: ako postoji, označava kraj valjanosti umetnutog cjenika (dd/mm/gggg)

*Primjer*: 31/12/2027

12  Cjenik vrste popusta::

-        Polje: nije obavezno

-        Vrsta: niz znakova 

-        Opis: ako postoji, označava vrstu danog popusta, postojat će tri različite vrste za svaki odgovarajući popust u odjeljku Popusti

*Primjer*: "4" odgovara konačnom popustu na akciji

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

15 Vrsta količinskog popusta:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Opis: ako postoji, označava vrstu odobrenog popusta

*Primjer*: “4” odgovara konačnom popustu na akciji

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

16 Vrsta vrijednosnog popusta:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Opis: ako postoji, označava vrstu odobrenog popusta

*Primjer*: “4” odgovara konačnom popustu na akciji

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

17 Za podizvođača:

-        Polje: obavezno

-        Tip: boolean

-        Opis: označava hoće li ovaj (podugovarateljski) cjenik biti za podizvođača ili ne

*Primjer*: “1” odgovara točno, “0” odgovara netočno

18 Umetanje artikla:

-        Polje: obavezno

-        Tip: boolean

-        Opis: ako je postavljeno na 1, umeće artikl u tablicu baze podataka artikla MG_AnaArt

*Primjer*: “1” odgovara točno, “0” odgovara netočno

19  Umetanje stavke od strane dobavljača:

-        Polje: obavezno

-        Tip: boolean

-        Opis: ako je postavljeno na 1, umeće artikl u tablicu artikla dobavljača  MB_ArticoliFornitore, MG_FornPreferenziali

*Primjer*: “1” odgovara true, “0” odgovara false

### Započni uvoz

Nakon što su podaci uneseni, za početak uvoza kliknite na gumb u izborniku za uvoz, u gornjem lijevom kutu, koji se naziva i "Uvoz"  kao na slici ispod.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image14.png)

 

### Zaključci – Došlo je do umetanja

Ako sve bude u redu, neće se pojaviti poruka o pogrešci. Za daljnju provjeru uspjeha, idite i provjerite u registru artikala (**Početna stranica > Artikli**) postoje li oni uvezeni od dobavljača. U protivnom će se na ekranu pojaviti poruka o pogrešci koja će pokazati koji parametri i/ili polja nisu točni. Za tumačenje vrste pogreške, pogledajte Korisni savjeti i upozorenja u zadnjem paragrafu.

### Korisni savjeti i upozorenja


**Preporučeno Excel formatiranje**:

-        Za ispravan uvoz, snažno se preporučuje formatiranje stupaca prema vrsti naznačenoj u odjeljku “Excel Formatting” svakog polja. Na primjer, ako je vrsta polja decimalna i valuta će biti umetnuta u to polje, formatirajte polje kao valutu. To je zato što, na primjer, ako ćelija nije formatirana, Excel uklanja beznačajne brojke. Za umetanje oblikovanja slijedite ove korake:

Prvo odaberite željeni stupac kao na sl. pod, ispod:

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image15.png)


Zatim, nakon postavljanja pokazivača miša unutar stupca, pritisnite desnu tipku miša.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image16.png)


Odaberite lijevim klikom  **> Format Cells…**

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image17.png) 

Na ovom zaslonu zatim možete oblikovati odabrani stupac. Na temelju indikacija navedenih u poljima za umetanje, odaberite odgovarajuću kategoriju, s relevantnim specifikacijama (npr. valuta, simbol nema). Potpuno ista stvar može se učiniti iz proračunske tablice unutar Fluentisa.

**Pažnja**: klasični slučaj odnosi se na kodove koji sadrže naizgled beznačajne nule, npr. “001”. Ako je polje formatirano generički ili brojčano, nule će biti odbačene, a ako je formatirano kao niz, umjesto toga će se zadržati.

**Mapiranje tablice/stupca**:

-        Ako je stavka mapiranja tablice/stupca prisutna u umetanju polja, to znači da vrijednost umetnuta u polje za uvoz mora već biti prisutna u bazi podataka. Za pregled relevantnih podataka prisutnih u bazi podataka, jednostavno slijedite korake u nastavku, u kojima će se klasa članka i njeno mapiranje koristiti kao primjer:

select MBDC_Classe from MB_Classi (**\<-** ovo je mapiranje). Pokrećemo upit u “Microsoft SQL server management studio” i dobivamo sljedeći rezultat:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image18.png) 

Ovako gledano, ne prikazuje ništa kako bi razumjeli njegovo značenje, zamijenite simbol “*” nakon klauzule za odabir u polju da biste sastavili novi upit. U ovom slučaju bi morali odabrati select * from MB_Class, koji se koristi za odabir cijelog sadržaja tablice, učinimo to sada.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image19.png)

Ovo je koristi jer je, kao što je prikazano na slici, kroz opis (MBDC_Descr) moguće razumjeti što polje predstavlja i provjeriti nalazi li se ono što ćete unijeti u bazu ili ne.

Ovaj opisani postupak je univerzalan, odnosno odnosi se na svako polje.

Isti prikaz se može vidjeti u Fluentisu:

Na početnoj stranici Fluentisa odaberite **Artikli > Artikli dobavljača** (pogledajte sliku u nastavku).

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image20.png) 

Zatim u maski za pretraživanje koja se pojavi kliknite lijevom tipkom miša na mali trokutić pored artikala, čime se otvara padajući izbornik na kojem možete vidjeti klasu artikala sa njihovim opisom kao na slici. 

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image21.png) 

Ovo je za kategoriju artikli. Za ostala polja isti postupak se može izvesti samo u različitim točkama.

Stoga bismo trebali unijeti jednu od sadašnjih vrijednosti, inače uvoz neće biti uspješan i dobit ćemo pogrešku. Ovo je za svako polje za koje je prisutno preslikavanje tablice/stupca.

Međutim, ako želimo dodati polje s preslikavanjem koje nije prisutno u bazi podataka, morat ćemo ga umetnuti ili putem upita ili iz Fluentisa, u ovom slučaju upit za umetanje se ne preporučuje jer ga je kompliciranije sastaviti od pogleda viđenog prije. Stoga je preporučeni postupak umetanje iz Fluentisa. Opet u slučaju klase artikla, od artikala dobavljača (slika iznad) pritisnite desnu tipku unutar filtra za pretraživanje klase artikla i odaberite **Otvori obrazac**.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image22.png) 

U obrascu koji se otvori pritisnite gumb **Pretraživanje** kako biste vidjeli prisutne klase stavki.

![](/img/neutral/common/search.png) 

Ispod posljednjeg retka nalazi se prazan red. To je onaj koji se koristi za umetanje novih vrijednosti.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image24.png)

Nove vrijednosti koje treba umetnuti moraju biti zapisane tamo i nakon toga samo pritisnite enter.


  Ova procedura je slična i za ostala polja, jedino što se mijenja je gdje se nalaze filteri pretraživanja u kojima se pritiskom na lijevu tipku otvara obrazac.

**Greške**: 

-        U slučaju neuspješnog uvoza, kao što je prethodno spomenuto, na zaslonu će se pojaviti poruka s pogreškom.

 Ako je pogreška napravljena u podatkovnom dijelu, moguće je pratiti redak koji sadrži pogrešku kao što će na primjer biti napisano “System.ArgumentException: Error importing row 4”.

U ovom slučaju (vidi sliku u nastavku), pogreška će se naći u retku 4, koji međutim nije stvarni redak koji sadrži pogrešku. Da biste točno razumjeli koji red sadrži pogrešku, dodajte mu 1 pomoću brojeva u lijevom stupcu.

 Pravi red koji sadrži pogrešku  = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image25.png)

Kako bi se interpretirala pogreška u poruci, slijedite sljedeće korake: na istoj liniji koja sadrži broj linije prikazan ranije, nalazi se objekt na koji se pogreška odnosi, zatim sama pogreška, i naposljetku svojstvo u kojem je ta pogreška pronađena.  U primjeru navedenom gore “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. U ovom slučaju, kao što se može vidjeti iz slike iznad, jedinica mjere vezana uz cijenu u cjeniku uzrokovala je pogrešku jer je ona postavljena na null. Naime, njezin unos je obavezan.

 Ako je pogreška napravljena u dijelu s parametrima, poruka će biti slična, metoda rješavanja uvijek ostaje prethodna stoga, na temelju svojstva, provjerite ispravnost umetanja iste.

**Upozorenje**: Ako se pronađe potpuno prazan redak, neće biti prijavljena nikakva pogreška, ali uvoz će tu završiti. Na primjer, ako je prvi redak (redak br. 4) iz nekog razloga prazan, a ispod (od uključenog retka br. 5) pronađeni su popunjeni redovi, ništa se neće uvesti.

**Upozorenje**: Ako je umetnut cjenik od 10 redaka, npr. i na retku br. 7 javlja se pogreška, prvih 6 redaka nije uzrokovalo nikakve probleme i umetnuto je! Ako se vrijednost ne promijeni u prvih 6 redaka (i ako je greška očito ispravljena), ponovnim pokretanjem uvoza neće biti problema, čak ni dupliciranja jer se prvo traži ako je stavka već prisutna. Ako se čak i samo jedna vrijednost promijeni, ta će stavka biti umetnuta jer se vidi kao nova stavka.

Na kraju, još jedna poruka o pogrešci koja se može pojaviti je sljedeća.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image26.png) 

Kao što možete vidjeti na gornjoj slici, ovu vrstu poruke lakše je protumačiti jer je navedena točna referenca ćelije s relativnom pogreškom. U ovom slučaju nema vrijednosti u ćeliji F:4.
