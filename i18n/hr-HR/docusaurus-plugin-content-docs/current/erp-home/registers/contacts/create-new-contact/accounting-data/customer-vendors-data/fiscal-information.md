---
title: Porezni podaci
sidebar_position: 3
---

U ovoj kartici unose se podaci i parametri uglavnom fiskalne prirode.

### Polja

**Nije u kupcu/dobavljaču**: ovo polje je zastarjelo i prisutno radi retrokompatibilnosti (odnosi se na Spezometar prije 2017. koji je ukinut). Unatoč tome, flag je još uvijek funkcionalan, jer je još uvijek prisutna godišnja funkcionalnost Spezometara (čl. 21. DL 78/2010).

**Isključi iz izjave black list**: ovo polje je zastarjelo i prisutno radi retrokompatibilnosti. Fiskalna obveza trenutno je ukinuta.

**CIG**: ova opcija aktivira odgovarajuće polje unutar računa prodaje kako bi se naznačio kod identifikacije natječaja (primjerice, za javne natječaje).

**CUP**: ova opcija aktivira odgovarajuće polje unutar računa prodaje kako bi se naznačio jedinstveni kod projekta (za fakturiranje javnim tijelima).

**Porez po odbitku**: ova oznaka, koja se koristi zajedno sa sljedećim poljem Vrsta poreznog odbitka, aktivira za trenutno otvorene matične podatke dobavljača upravljanje porezom po odbitku na naknade primateljima dohotka. Kada je ova funkcionalnost aktivna na strani dobavljača, unos dokumenata te knjiženje zaprimljenih računa i izvršenih plaćanja obavlja se putem modula [Primatelji naknada](/docs/finance-area/professional-men/general-overview). Na taj se način omogućuje ispravno i automatsko upravljanje porezom po odbitku te popunjavanje podataka za Jedinstvenu potvrdu (CU – Certificazione Unica).

**Tip odbitka poreza**: polje (padajući izbornik) povezano je s tablicom  [**Vrste odbitka**](/docs/configurations/tables/finance/withholding-tax-types) unutar koje se definiraju vrste poreza po odbitku (ili poreza) koje treba koristiti. Za svaki redak koji odgovara vrsti poreza po odbitku, potrebno je popuniti polja koja omogućuju automatsko upravljanje izračunom i knjiženjem pomoću [**Primatelji naknada**](/docs/finance-area/professional-men/general-overview). 


### Javna uprava/Elektroničko fakturiranje 

Opcija **Elektroničko fakturiranje** omogućuje prilagodbe u donjoj tablici koje se odnose na specifičnosti elektroničkog fakturiranja za javnu upravu ili elektroničkog fakturiranja s privatnim osobama.

**Šifra ureda / Kod primatelja**: *IPA* kod javne ustanove primatelja računa ili (aktivan flag *Elektroničko fakturiranje*) *SDI* kod primatelja računa.

**Naziv ureda / Opis primatelja**: opis polja ureda / primatelja koje se popunjava imenom javnog ureda ili privatne osobe.

**Naziv tvrtke**: U ovom polju moguće je povezati već kodiranu evidenciju u Fluentisu koja se odnosi, na primjer, na javni ured koji ovisi o glavnoj evidenciji koju koristimo (primjer: ured za javne radove u općini ili neka zdravstvena ustanova) Ova povezana evidencija trebala bi biti postavljena kao odredište za glavnu evidenciju u kartici [**dostava**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), na taj način odredište (primjerice, ured za javne radove) bit će navedeno u .xml datoteci zajedno s kodom ureda i drugim podacima kao što su adresa itd.

Za ispravno upravljanje s više šifri ureda (i stoga više subjekata) koji se odnose na istu glavnu evidenciju, preporučuje se upravljanje i popunjavanje ovog polja (koje nije obavezno i nije potrebno u slučaju pojedinačne šifre izravno povezane s relevantnom evidencijom).


**Datum početka**: određuje datum unosa stavke ili bilo koji datum od kojeg je aktivan odnos isporuke s određenom javnom upravom.


<a id="codice_articolo_fornitore_cliente" style={{ textDecoration: 'none' , color: 'inherit' }}></a>


**Datum završetka**: određuje datum završetka odnosa isporuke s javnom upravom i čini ovu poziciju nepodobnom za generiranje elektroničkog računa.

**Email:** prostor rezerviran za PEC adresu u slučaju da je aktiviran PEC način primatelja u polju *Vrsta koda*

**Porezni režim**: polje potrebno za upravljanje elektroničkim računima (posebno za ulazne fakture u unutar EU-a ili *reverse charge*): podaci su uneseni u Fluentisove generirane .xml zapise. Padajući izbornik povezan je s fiksnom tablicom koja sadrži moguće porezne režime za odabir.

**Tip koda artikla za dobavljača/klijenta:** u dva polja, moguće je unijeti prateći kod uz šifru artikla za upotrebu u ulaznom ili izlaznom fakturiranju u svrhu xml obrasca. Funkcionalnost je korisna u različitim slučajevima, kao što je automatsko stvaranje ulaznih faktura iz primljenih xml datoteka, omogućavajući prepoznavanje šifre artikla koji koristi dobavljač u odnosu na postavke artikla u glavnom šifarniku u odjeljku preferiranih dobavljača.

**Grupa PDV/Šifarnik:** polje potrebno za upravljanje PDV grupom kojem pripada klijent ili dobavljač. U ovom polju bit će pozvana osnovna evidencija (koja se prethodno mora kreirati) matičnog subjekta kako bi se unio porezni identifikacijski broj tog subjekta u xml format umjesto broja subjekta koji je član grupe, prema propisima.

:::tip Info: GRUPA PDV  
S uvođenjem ove norme predviđena je mogućnost za poduzeća povezana financijskim, ekonomskim i organizacijskim interesima da stvore jedinstvenu grupu, tretiranu kao jedan porezni obveznik (samo za potrebe PDV-a) pred poreznim tijelima. Stoga će imati jedinstveni porezni identifikacijski broj. Poduzeća koja čine dio grupe fakturirat će poslove prema trećim stranama s zajedničkim PDV identifikacijskim brojem, PDV identifikacijskim brojem grupe. Suprotno tome, prijenosi dobara i pružanje usluga između tvrtki unutar grupe neće utjecati na PDV bazu, budući da se tretiraju kao interni poslovi unutar same grupe. Drugim riječima, sve transakcije izvršene od strane jednog subjekta unutar grupe smatraju se izvršenima od strane cijele grupe. Faktura i ostali dokumenti izdavat će se od strane predstavnika Grupe ili sudionika, navodeći na njima, osim PDV identifikacijskog broja Grupe, i porezni identifikacijski broj sudionika koji je izvršio operaciju.
:::

### Ograničenje rokova trajanja pokvarljivih dobara

**Čl. 62**: opcija koja omogućuje aktivaciju upravljanja maksimalnim rokovima plaćanja u prehrambenom sektoru za pokvarljive i nepokvarljive proizvode prema čl. 62. Zakonodavni dekret br. 192/2012; posebno, prilikom unošenja artikala na fakturi, provjerava rok plaćanja u usporedbi s obveznim rokovima za ovu vrstu proizvoda. Upravlja se sljedećim dvjema opcijama:

> **Tjedno rješenje 30 dana**: postavlja rješenje plaćanja od 30 dana zaobilazeći druge postavke (uključujući one koje se odnose na čl. 62, npr. rješenje u 60 dana).  
> **Tjedno rješenje 60 dana**: NIJE UPRAVLJANO / ONEMOGUĆENO

Postoje i druge postavke koje se odnose na **upravljanje pokvarljivom robom**:  
> **Dani plaćanja za pokvarljivu robu** unutar [Šifarnik artikla > kartica Općenito](/docs/erp-home/registers/items/create-new-item) gdje je definiran rok trajanja koji se primjenjuje;  
> **Dana do primitka računa** u *Šifarnik klijenta/dobavljača > kartica Opće > kartica Alternativne adrese* korisno je radi pridržavanja točnog datuma primitka računa (da bi se omogućilo polje, vrsta adrese povezana s korištenom alternativnom adresom i definirana u tablici [Tipovi adresa](/docs/configurations/tables/general-settings/address-types)  mora imati postavljeni flag  *Email*).
> **Dani prijevoza** u tablici *Zone*,  polje koje se može unijeti u *Šifarnik klijenta/dobavljača > kartica [Dostava*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) 

### Logika izračuna datuma dospijeća plaćanja 

Rok plaćanja predlaže se na temelju datuma početka obračuna računa.
Datum početka obračuna automatski se izračunava na sljedeći način:

- početno se postavlja na kasniji datum između datuma unosa i datuma računa;
- ako su za vrstu adrese e-maila za fakturiranje definirani dani primitka računa, oni se pribrajaju datumu računa, a datum početka obračuna postaje kasniji od sljedeća dva datuma:
postojećeg datuma početka obračuna, datuma računa uvećanog za dane primitka računa;
- ako za vrstu adrese e-maila za fakturiranje nisu definirani dani primitka računa, sustav provjerava postoje li dani transporta definirani u šifri zone povezanoj s kupcem. U tom slučaju dani transporta pribrajaju se datumu računa, a datum početka obračuna postaje kasniji od sljedeća dva datuma: postojećeg datuma početka obračuna, datuma računa uvećanog za dane transporta;
- ako za zonu kupca nisu definirani dani transporta, datum početka obračuna odgovara kasnijem datumu između datuma unosa računa i datuma računa.

Korisnik u svakom slučaju može ručno promijeniti datum početka obračuna i unijeti željeni datum. Sustav će pritom zabilježiti da je datum početka obračuna izmijenjen ručno.

**Da biste pravilno predstavili datum dospijeća, potrebno je šifrirati 2 nove opcije plaćanja s postavljenom opcijom “DL Čl.62”, obje s postavljenom opcijom "kraj mjeseca" i postavljenom opcijom "komercijalno", jednu s rokom od 30 dana, a drugu s rokom od 60 dana.**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image04.png)

Ako su uvjeti plaćanja definirani na matičnim podacima kupca povoljniji od onih izračunanih za poljoprivredne ili prehrambene artikle, zadržavaju se uvjeti plaćanja definirani za kupca. Prilikom ručnog unosa računa (uključujući slučaj kada se preuzimaju stavke iz narudžbe kupca), za kupca kod kojeg je aktivirana oznaka Art. 62 moguće je unijeti samo artikle koji imaju istu vrstu plaćanja, odnosno: sve artikle s rokom plaćanja od 30 dana, ili sve artikle s rokom plaćanja od 60 dana, ili artikle bez definiranog roka plaćanja.

Sustav će prikazati poruku upozorenja koja će spriječiti unos artikala s različitim rokovima plaćanja te obavijestiti korisnika da će se uvjeti plaćanja automatski prilagoditi na temelju rokova plaćanja definiranih na artiklima.

Prilikom kreiranja računa iz drugih dokumenata (primjerice iz otpremnice), dokumenti će se automatski razdvojiti prema rokovima plaćanja definiranim na artiklima. Ako isti dokument sadrži artikle s različitim rokovima plaćanja, sustav će kreirati više zasebnih računa.

### Polja koja se odnose na upravljanje odvojenim SDD (Sepa Direct Debit – SEPA izravna naplata)**

SEPA Direktna naplata, koja zamjenjuje prethodni nacionalni RID, alat je za autoriziranu naplatu temeljem ovlasti o naplati koje Dužnik daje svojem Vjerovniku.

Temelji se na prethodnom sporazumu (nalogu) između Dužnika i Vjerovnika koji ovom posljednjem omogućuje da zatraži pokretanje međubankarske procedure za automatsko zaduživanje računa Dužnika.

**Mandat kod namjene**: U ovom polju treba upisati ‘Purpose code' (obično se postavlja kod“GDSV” [PurchaseSaleOfGoodsAndServices])

**Šifra klijenta/mandata**: U ovom polju treba unijeti identifikacijski kod dodijeljen mandatu potpisanom od strane dužnika. Odgovara pravilniku (službenom tehničkom dokumentu) ad AT-01 Unique Mandate Reference.

 Polje nije *case-sensitive*. Primjerice, identifikatori 123AAa45678, 123aaA45678, 123aaa45678 e 123AAA45678 trebali bi se smatrati identičnima.

 Ne može se popuniti samo razmacima i mora sadržavati samo znakove koji pripadaju osnovnom latiničkom setu

*Primjer*: IT05394480900

**Promjena mandat**: kartica trenutačno nije podržana i treba ostati neoznačena.

**Datum potpisa mandata**: U ovom polju treba unijeti datum potpisa mandata.

**Datum prvog izvršenja / Datum zadnjeg izvršenja**: Budući da je sdd naplata (kao i "stari" RID sustav) po prirodi periodična izvedba, ovaj raspon datuma kontrolira početak i završetak valjanosti izvedbe.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image05.png)

Za upravljanje SDD-om također treba popuniti polja

- **Jedinstveni kod kupca**

- **Identifikator vjerovnika**: primjer IT95ZZZ0000007333890900

U tablici  **Tvrtka**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image06.png)

### DRUGO 

**Upravljanje zajedničkim računima**: opcija omogućava upravljanje zajedničkim izdavanjem računa za prodaju.

Ova situacija je česta, primjerice, u prodaji privatnim osobama dobara koja mogu biti predmet poreznog odbitka od poreza na dohodak. Ako trošak podnosi više osoba, račun mora biti na ime oboje kako bi se mogao ostvariti porezni odbitak.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image07.png)

S aktivnom opcijom, unutar računa koji su na ime povezani s određenom evidencijom, prikazat će se dodatna kartica na kojem možete unijeti suvlasnike.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image08.png)

Da biste pozvali suvlasnike unutar povezane evidencije, potrebno ih je prethodno kodirati u odjeljku  **Alternativne adrese** unutar odjeljka Opći podaci.

U tu svrhu, potrebno je unaprijed definirati vrstu adrese s aktivnom opcijom **Suvlasnici** unutar tablice **Vrste adresa** na koju je povezan combo box polja **Vrsta adrese**.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image09.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image10.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image11.png)

Zatim ćemo ih unijeti na fakturi, navodeći i postotak raspodjele troškova.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image12.png)