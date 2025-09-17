---
title: Uvoz prodajnih cjenika
sidebar_position: 2
---



Ovaj dokument će objasniti kako **Uvoz cjenika dobavljača** u  **Fluentis** pomoću **proračunske tablice**.

Ovaj uvoz moguć je zahvaljujući korištenju **BizLink Parameters**  jer svaki put kada se red obradi, oni će biti pozvani.


### Kako otvoriti uvoz kroz proračunske tablice

Kliknite na **Alati** (prema zadanim postavkama nalazi se na desnoj strani Fluentisa).

Kliknite odjeljak **BizLink**

Kliknite na **Uvoz na zahtjev > Šifarnik > Uvoz artikala i cjenika**  kao što je prikazano na donjoj slici.

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image03.png) 
 

### Odjeljak datuma

U ovom odjeljku unijet ćemo podatke koji će zatim biti trajni pohranjivanjem u bazu podataka **Fluentis**.

Proračunska tablica za uvoz sada je prikazana na zaslonu.

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image04.png)

Od ove točke možete krenuti različitim putevima:

 1. Uvezite već popunjenu proračunsku tablicu, **Datoteka > Otvori**.  
 2. Dodajte različite stupce kopiranjem i lijepljenjem s popisa spremljenog na našem računalu.  
 3. Spremite ovu datoteku (**Datoteka > Spremi**) na svoje računalo, zatim dodajte razne podatke i zatim je ponovno uvezite u Fluentis (pogledajte točku 1). Ovo bi moglo biti vrlo korisno za prosljeđivanje predloška proračunske tablice za uvoz koji treba ispuniti za buduće cjenike koje će nam dobavljači slati.  

**PAŽNJA**: ako imamo proračunsku tablicu spremljenu na našem računalu, ona mora slijediti izgled lista na gornjoj slici. Odnosno, isti redoslijed stupaca, tip podataka itd. Potonji su detaljno objašnjeni u sljedećem odlomku.


### Umetanje polja

Kada je polje umetnuto, mnoge stvari se moraju uzeti u obzir uključujući vrstu, maksimalnu duljinu, potrebno itd...

Opće indikacije:

-        Ako je polje napisano crvenom bojom ono je obavezno polje

-        Ako je naziv ćelije označen zelenom bojom, to je **odjeljak**

-        Ako je naziv ćelije označen žutom bojom, to je **polje**

-        Polje: označava da li je unos obavezan ili ne

-        Vrsta: označava vrstu polja

-        Excel formatiranje: označava preporučeno Excel formatiranje kako biste izbjegli netočne unose, pogledajte korisne savjete i upozorenja na kraju dokumenta.

-        Dužina: označava ima li polje ograničenje broja znakova koje treba poštovati  

-        Opis: kratak opis polja

*Primjer*: pravi primjer onoga što možete napisati u tom polju

-        Preslikavanje tablice/stupca: ako postoji, označava preslikavanje odgovarajućeg polja u bazi podataka Za dodatne informacije pogledajte korisne savjete i upozorenja na kraju dokumenta.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image05.png) 


**Podaci o artiklu**:

Klasa:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: šifra koja se odnosi na klasu artikla

*Primjer*: “1” odgovara poluproizvodima, “IMB” odgovara pakiranju

-        Mapiranje tablice/stupca: select MBDC_Classe from MB_Classi

Šifra:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: referentni kod artikla

*Primjer*: 02030508

Opis:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: opis artikla, može odgovarati i šifri 

*Primjer*: teniska loptica, može odgovarati broju artikla  

Jedinica mjere:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 3 znaka

-        Opis: šifra koja se odnosi na mjerenje koje se koristi za dotičnu stavku  

*Primjer*: “cm” odgovara centimetrima, “Utovarna jedinica” odgovara paleti

-        Mapiranje tablice/stupca: select MBUM_Codice from MB_UnitaMisura

PDV:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 3 znaka

-        Opis: šifra koja se odnosi na mjerenje koje se koristi za dotičnu stavku

*Primjer*: “25” odgovara 25% PDV-a, “N” Ne podliježe oporezivanju PDV-om prema čl. 13. st. 10. Zakona o PDV-u

-        Mapiranje tablice/stupca: select MBIV_Code from MB_iva

Kategorija proizvoda:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 3 znaka

-        Opis: šifra koja se odnosi na kategoriju robe predmetne stavke  

*Primjer*: “206” odgovara ljepilima, “211” odgovara sirovinama

-        Tablica/stupac mapiranja: select MBCM_Codice from MB_CatMerceologica

Račun za kupnju:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 10 znakova

-        Primjer: šifra koja se odnosi na vrstu izdane fakture za predmetnu stavku

*Primjer*: “4” odgovara kupnji poluproizvoda, “1” odgovara sirovinama

-        Mapiranje tablice/stupca: select MBFA_TipoFatt from mb_TipoFattAcq

Izlazni račun:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 10 znakova

-        Opis: šifra koja se odnosi na vrstu izdane fakture za predmetnu stavku  

*Primjer*: “4” odgovara kupnji poluproizvoda, “1” odgovara sirovinama

-        Mapiranje tablice/stupca: select MBFA_TipoFatt from mb_TipoFattVend

Nomenklatura:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 50 znakova

-        Opis:

*Primjer*: “32049000” odgovara bojama

-        Mapiranje tablice/stupca: select INCN_CodNomencl from IN_CodNomenc

Barkod:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: barkod predmetne stavke

*Primjer*: ABC-1234

Vrsta lota:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: 2 znaka

-        Opis: vrsta lota kojem predmet pripada

*Primjer*: “4” odgovara kupnji poluproizvoda, “1” odgovara sirovinama 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image06.png) 


**Podaci o cjeniku**:

Cijena:

-        Polje: obavezno

-        Tip: decimalni

-        Excel formatiranje: valuta, simbol nema

-        Maksimalna duljina: /

-        Opis: kataloška cijena artikla

*Primjer*: “10.99”, “123.45”

Mjerna jedinica:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: koristi se za definiranje cijene s obzirom na količinu (npr. cijena po kilogramu, cijena po kvadratnom metru)

*Primjer*: “kg” odgovara kilogramima

-        Mapiranje tablice/stupca: select MBUM_Codice from MB_UnitaMisura

Iznos:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: količina artikla na koji se odnosi prethodna cijena

*Primjer*: 500

Vrsta nosača Qty-Val-PxQ:

-        Polje: nije obavezno

-        Vrsta: niz znakova 

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: Pokazuje jesu li primijenjene vrijednosti okvira količina, vrijednost ili cijena po količini. Obično se koristi onaj kvantitativni, to jest: dana određena količina. količinu primijeniti x% popusta     

*Primjer*: Qty, Val, PxQ

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image07.png)


**Popusti**:

Popust1:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: mogući popusti primjenjivi

*Primjer*: “50+10” početni popust od 50% primjenjuje se na zbroj retka, a daljnji popust od 10% primjenjuje se na novi zbroj.

Potpuno ista stvar za druga dva popusta, samo se vrijednost popusta mijenja.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image08.png) 


**Popusti po količini (Tip razreda ‘Qty')**:

Popust11:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: popust se primjenjuje ako se kupi određena količina predmetnog artikla  

*Primjer*: 10

Količina1:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: minimalna količina potrebna za odgovarajući popust  

*Primjer*: 550

Ista stvar za druga dva popusta i količine, samo se mijenja odgovarajuća vrijednost.

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image09.png)


**Popust za vrijednost (Tip razreda ‘Val'):**

Popust1:

-        Polje: nije obavezno 

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2 

-        Maksimalna duljina: /

-        Opis: popust se primjenjuje ako premašuje oporezivi iznos određenog retka

*Primjer*: 20

Vrijednost1:

-        Polje: nije obavezno 

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: minimalni oporezivi iznos potreban za dobivanje odgovarajućeg popusta

*Primjer*: 950

Potpuno ista stvar za druga dva popusta i vrijednosti. 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image10.png) 


**Cijena po količini (Tip razreda ‘PxQ')**:

Cijena1:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-         Opis: jedinična cijena koja se primjenjuje ako se prekorači određena količina 

*Primjer*: 3.99

Količina1:

-        Polje: nije obavezno

-        Tip: decimalni

-        Excel formatiranje: broj, decimalno mjesto = 2

-        Maksimalna duljina: /

-        Opis: minimalna količina potrebna za odgovarajuću jediničnu cijenu

*Primjer*: 250

Potpuno ista stvar za druge dvije cijene i relativne količine, samo se odnosna vrijednost mijenja. 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image11.png) 


**Ostali podaci**:

Bilješka:

-        Polje: nije obavezno

-        Vrsta: niz znakova 

-        Excel formatiranje: tekst

-        Maksimalna duljina: /

-        Opis: dodatne napomene

*Primjer*: ne izlagati sunčevoj svjetlosti

-        Tablica/stupac mapiranja: select MBNC_Codice from MB_NoteCodificat


### BizLink Parameters

Ovi će se parametri koristiti za obradu redaka umetnutih u odjeljak Podaci. Kao što možete vidjeti na slici, neka su polja već unaprijed popunjena, ali ništa nas ne sprječava da ih izmijenimo. 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image12.png)

1      BizLink Spreadsheet:

-        Polje: ne ulaziti/ne dirati

2      Jezik:

-        Obavezno polje

-        Vrsta: niz znakova

-        Opis: ISO kod koji se odnosi na jezik

*Primjer*: “it-IT” predstavlja talijanski jezik, “hr-HR” predstavlja hrvatski jezik.

3      Tvrtka:

-        Obavezno polje

-        Vrsta: niz znakova

-        Opis: to je unaprijed popunjeno polje jer uzima vrijednosti već unutar Fluentisa, mogu se vidjeti u gornjem lijevom kutu.

*Primjer*: “1” odgovara demo tvrtke 

-        Mapiranje tablice/stupca: Select MBSC_Code from MB_Soc

4      Divizija:

-        Polje: obavezno 

-        Vrsta: niz znakova

-        Opis: što se tiče tvrtke, unaprijed je popunjen

*Primjer*: “1” odgovara registriranom uredu, “2” operativnom sjedištu u Milanu

-        Mapiranje tablice/stupc: select MBDP_Code from MB_Dep

5      Država:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: država u kojoj se nalazi odjel za koji je uvezen cjenik

*Primjer*: “HR” odgovara Hrvatskoj, “USA” odgovara Sjedinjenim Američkim Državama

-        Mapiranje tablice/stupca: select MBNZ_Codice from MB_Nazioni

6      Vrsta Barcoda:

-        Polje: obavezno samo ako je u navedenom odjeljku upisan crtični kod barem jednog artikla

-        Vrsta: niz znakova

-        Opis: služi za označavanje vrste korištenog crtičnog koda

*Primjer*: “39” odgovara COD39

-        Mapiranje tablice/stupca: select MBBC_Codice from MB_BarCode

7       Priroda cjenika (GEN-CUST):

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: služi za označavanje je li cjenik standardni ili prilagođeni. GEN se obično navodi za cjenike koji se mogu prenositi od kupca do kupca jer će biti isti. Ako je umjesto toga CUST, to odgovara personaliziranom cjeniku za kupca, tj. posebno kreiranom za kupca čiji su konto i podkonto umetnuti u parametre.

*Primjer*: “GEN” odgovara općem “CUST”

-        Mapiranje tablice/stupca:

8      Vrsta cjenika:

-        Polje: obavezno 

-        Vrsta: niz znakova

-        Opis: služi za označavanje vrste cjenika, upisuje se ako je priroda cjenika = ”GEN” u protivnom ne treba se ubacivati 

*Primjer*: “GEN” odgovara općem, “PRO” odgovara promotivnom

-        Mapiranje tablice/stupca: select MBLV_List from MB_LisVen

9      Konto:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: konto kupaca, knjiga kupaca. Ako je cjenik prilagođen, kreirat će se konto i podračun kako je navedeno u odgovarajućim parametrima. Ako je opći, ne treba ga unositi

*Primjer*: “1200” koji ima 3 podračuna (vidi dolje)

-        Mapiranje tablice/stupca: select MBPC_Conto from MB_PiaCon

10  Podkonto:

-        Polje: obavezno 

-        Vrsta: niz znakova

-        Opis: podračun kupaca, knjiga kupaca. Ako je cjenik prilagođen, kreirat će se konto i podkonto kako je navedeno u odgovarajućim parametrima. Ako je opći, ne treba ga unositi 

*Primjer*: za prethodno viđeni konto 1200 postoje 3 podkonto: “001” koji odgovara računima, “002” koji odgovara vrijednostima otpremnica i “” (nije naveden podkonto) koji odgovara novcu i novčanim ekvivalentima. 

-        Mapiranje tablice/stupca: select BPC_SottoConto from MB_PiaCon

11 Valuta:

-        Polje: obavezno

-        Vrsta: niz znakova

-        Opis: valuta u kojoj se tumače vrijednosti unesene u danom odjeljku

*Primjer*: “EUR” odgovara euru, “USD” odgovara dolaru 

-        Mapiranje tablice/stupca: select MBDI_Divisa from MB_Divise

12  Zaokruživanje:

-        Polje: obavezno

-        Tip: decimalni

-        Opis: označava treba li zaokružiti prema gore ili dolje

*Primjer*: 1 odgovara ničemu, 2 odgovara višku, 3 odgovara manjku

-        Mapiranje tablice/stupca: select MBRNT_Id from MB_RoundingType

13   Početak valjanosti:

-        Polje: obavezno

-        Vrsta: datum i vrijeme

-        Opis: označava početak važenja umetnutog cjenika (dd/mm/gggg)

*Primjer*: 1/10/2018

14  Kraj valjanosti:

-        Polje: nije obavezno

-        Vrsta: datum i vrijeme

-        Opis: ako postoji, označava kraj valjanosti umetnutog cjenika (dd/mm/gggg)

*Primjer*: 31/12/2027

15  Cjenik vrste popusta1:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Opis: ako postoji, označava vrstu popusta navedenog u odjeljku **Popusti**

*Primjer*: “4”  odgovara konačnom popustu na akciji 

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

16  Cjenik vrste popusta2:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Opis: ako postoji, označava vrstu popusta navedenog u odjeljku **Popusti**

*Primjer*: “4” odgovara konačnom popustu na akciji 

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

17  Cjenik vrsta popusta3:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Opis: ako postoji, označava vrstu popusta navedenog u odjeljku **Popusti**

*Primjer*: “4” odgovara konačnom popustu na akciji

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

18  Vrsta količinskog popusta:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Opis: ako postoji, označava vrstu odobrenog popusta

*Primjer*: “4” odgovara konačnom popustu na akciji

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

19  Vrsta vrijednosnog popusta:

-        Polje: nije obavezno

-        Vrsta: niz znakova

-        Opis: ako postoji, označava vrstu odobrenog popusta

*Primjer*: “4” odgovara konačnom popustu na akciji 

-        Mapiranje tablice/stupca: select MBST_Code from MB_Sconti

### Započni uvoz 

Nakon što su podaci uneseni, za početak uvoza kliknite na gumb u izborniku za uvoz, u gornjem lijevom kutu, koji se naziva i “Uvoz” kao na slici ispod. 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image13.png) 

### Zaključci – Umetanje uspješno

Ako sve bude u redu, neće se pojaviti poruka o pogrešci. Za daljnju provjeru uspjeha, idite i provjerite u registru artikala (Početna stranica i Artikli) postoje li oni uvezeni putem prodajnog popisa. U protivnom će se na ekranu pojaviti poruka o pogrešci koja će pokazati koji su parametri i/ili polja netočni. Za tumačenje pogreške, pogledajte Korisni savjeti i upozorenja u zadnjem paragrafu.  

### Korisni savjeti i upozorenja 

**Preporučeno Excel formatiranje**:

-        Za ispravan uvoz, preporučuje se formatiranje stupaca prema vrsti naznačenoj u odjeljku “Excel Formatting” svakog polja. Na primjer, ako je vrsta polja decimalna i valuta će biti umetnuta u to polje, formatirajte polje kao valutu. To je zato što, na primjer, ako ćelija nije formatirana, Excel uklanja beznačajne brojke. Za umetanje oblikovanja slijedite ove korake: 

Prvo odaberite željeni stupac kao što je prikazano u nastavku:

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image14.png)

Zatim, nakon postavljanja pokazivača miša unutar stupca, pritisnite desnu tipku miša. 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image15.png) 


Odaberite lijevim klikom **> Formatiraj ćelije…**

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image16.png)

Na ovom zaslonu zatim možete oblikovati odabrani stupac. Na temelju indikacija navedenih u poljima za umetanje, odaberite odgovarajuću kategoriju, s relevantnim specifikacijama (npr. valuta). Potpuno ista stvar može se učiniti iz proračunske tablice unutar Fluentisa. 

**Pažnja**: Klasični slučaj odnosi se na kodove koji sadrže nule, npr.  “001”. Ako je polje formatirano generički ili brojčano, nule će biti odbačene, a ako je formatirano kao niz, umjesto toga će se zadržati. 

**Mapiranje tablice/stupca**:

-        Ako je stavka mapiranja tablice/stupca prisutna u umetanju polja, to znači da vrijednost umetnuta u polje za uvoz mora već biti prisutna u bazi podataka. Da biste vidjeli relevantne podatke prisutne u bazi podataka, jednostavno slijedite korake u nastavku, u kojima će se klasa artikla i njeno mapiranje koristiti kao primjer: 

select MBDC_Classe from MB_Classi (ß ovo je mapiranje). okrećemo upit u “Microsoft SQL server management studio” i dobivamo sljedeći rezultat: 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image17.png) 

Gledano ovako, ne pokazuje ništa da biste razumjeli njegovo značenje, zamijenite simbol “*” nakon klauzule za odabir u polju da biste sastavili novi upit. U ovom slučaju bismo stoga morali select * from MB_Class, koji se koristi za odabir cijelog sadržaja tablice, učinimo to sada.  

![](/img/it-it/applications/bizlink/import-sales-price-lists/image18.png) 

Ovo je korisno jer je, kao što je prikazano na slici, kroz opis (MBDC_Descr) moguće razumjeti što polje predstavlja i provjeriti nalazi li se ono što ćete unijeti u bazi ili ne. 

Ovaj upravo opisani postupak je univerzalan, tj. odnosi se na svako polje. 

Isti prikaz se može vidjeti u Fluentisu: 

Na početnoj stranici Fluentisa odaberite  **Artikli > Artikli** (pogledajte sliku u nastavku).

![](/img/it-it/applications/bizlink/import-sales-price-lists/image19.png) 

Zatim u maski za pretraživanje koja se pojavi kliknite lijevom tipkom miša na mali trokutić pored artikala, čime se otvara padajući izbornik na kojem možete vidjeti klasu artikala sa njihovim opisom kao na slici. 

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image20.png)

Ovo je za klasu artikla. Za ostala polja isti postupak se može izvesti samo u različitim točkama. 

Stoga bismo trebali unijeti jednu od sadašnjih vrijednosti, inače uvoz neće biti uspješan i dobit ćemo pogrešku. Ovo je za svako polje za koje je prisutno preslikavanje tablice/stupca. 

Međutim, ako želimo dodati polje s mapiranjem koje nije prisutno u bazi podataka, morat će se umetnuti ili putem upita ili iz Fluentisa, u ovom slučaju upit za umetanje se ne preporučuje jer ga je kompliciranije sastaviti od pogled viđen ranije. Stoga je preporučeni postupak umetanje iz Fluentisa. Opet u slučaju klase članaka, iz članaka (slika iznad) pritisnite desnu tipku unutar filtera za pretraživanje klase članaka i odaberite **Otvori obrazac**.

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image21.png)

U obrascu koji se otvori pritisnite gumb **Traži** kako biste vidjeli prisutne klase stavki.

 ![](/img/neutral/common/search.png)

Ispod posljednjeg retka nalazi se prazan red. To je onaj koji se koristi za umetanje novih vrijednosti. 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image23.png) 

Nove vrijednosti koje treba umetnuti moraju biti zapisane tamo i nakon toga samo pritisnite enter. 

 Ova procedura je slična i za ostala polja, jedino što se mijenja je gdje se nalaze filteri pretraživanja u kojima se pritiskom na lijevu tipku otvara obrazac.

**Greške**:

-        U slučaju neuspješnog uvoza, kao što je prethodno spomenuto, na zaslonu će se pojaviti zaslon s pogreškom. 

 Ako je pogreška nastala u podatkovnom dijelu, moguće je pratiti redak koji sadrži pogrešku jer će tamo biti napisano, na primjer, “System.ArgumentException: Error importing row 4”. U ovom slučaju (vidi sliku u nastavku), pogreška će se pronaći u retku 4, koji međutim nije stvarni redak koji sadrži pogrešku. Da biste točno razumjeli koji red sadrži pogrešku, dodajte mu 1 pomoću brojeva u lijevom stupcu. 
 1. Dakle: 

 Pravi red koji sadrži pogrešku = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-sales-price-lists/image24.png)

   

Da biste interpretirali grešku u poruci, slijedite sljedeće korake: u istom retku koji sadrži broj retka koji ste ranije vidjeli, nalazi se objekt na koji se odnosi greška, zatim sama greška, i na kraju svojstvo povezano s tom greškom u kojem je došlo do problema. Kao u prethodno navedenom primjeru: “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. Kao što se može vidjeti iz gornje slike, jedinica mjere povezana s cjenikom za kupnju generirala je grešku jer je vrijednost prazna (null). Naime, njezin unos je obavezan. 

 Ako je greška počinjena u dijelu s parametrima, poruka će biti slična. Metoda rješavanja ostaje ista, dakle, na temelju svojstva potrebno je provjeriti ispravnost unosa istog.

**Pažnja**: Ako se pronađe potpuno prazan redak, neće biti prijavljena nikakva greška, ali će se uvoz završiti na tom mjestu. Na primjer, ako je prvi redak (redak br. 4) iz nekog razloga prazan, a ispod (od reda br. 5 nadalje) se nalaze popunjeni redovi, ništa neće biti uvezeno.

**Pažnja**: Ako se unese cjenik s 10 redaka, na primjer, i dođe do greške u redu br. 7, prvih 6 redaka, koji nisu uzrokovali probleme, bit će uneseni! Ako se nijedna vrijednost u prvih 6 redaka ne promijeni (i naravno, ako je greška ispravljena), ponovno pokretanje uvoza neće izazvati probleme, uključujući duplikate, jer se prvo provjerava je li artikl već prisutan. Ako se promijeni i samo jedna vrijednost, taj artikl će se unijeti kao novi artikl.

Na kraju, još jedna poruka o grešci koja se može pojaviti je sljedeća.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image25.png) 

Kao što se može vidjeti na gornjoj slici, ova vrsta poruka je lakša za interpretaciju jer je naveden točan referentni podatak o ćeliji s pripadajućom greškom. U ovom slučaju, u ćeliji F:4 nije prisutna nijedna vrijednost.
