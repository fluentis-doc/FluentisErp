---
title: Kreiranje ulaznih računa
sidebar_position: 1
---

Ovaj obrazac se otvara putem **Nabavka > Ulazni računi > Kreiranje ulaznih računa** pomoću dugmeta **Novi**, koje se nalazi u obrascu [Pretraga ulaznih računa](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices).

U obrascu za unos automatski se predlaže trenutni **Datum**, ali ga korisnik može promeniti.

## **1. Obavezni podaci**

Za nastavak kreiranja ulaznog računa korisnik mora uneti obavezna polja:

- **Tip ulaznog računa**, predefinisan u **Tabele > Nabavka > [Tip ulaznog računa](/docs/configurations/tables/purchase/purchase-invoices-type)**;

- **Datum** i **Broj** dokumenta koje je dodelio dobavljač;

- **Dobavljač**, korišćenjem [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [direktnim](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka.

Obrazac sadrži niz kartica.

## **2. Zaglavlje**

Nakon izbora obaveznih podataka u gornjem delu, korisnik može nastaviti [ručni](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sledećih podataka ili koristiti [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), ili se, prema izabranim postupcima, polja *automatski* popunjavaju.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generisan.
:::

### 2.1 Podaci dobavljača

Unošenjem **Dobavljača** automatski se *predlažu* svi specifični podaci sa kartice **Zaglavlje**, prema prethodno podešenim podacima u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *odeljcima*:

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Dostava](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Dostava**: [Način dostave](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakovanje](/docs/guide/common/glossary/glossary-intro#packing), [Cenovnik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period važenja](/docs/guide/common/glossary/glossary-intro#validity-date).

### 2.2 Ostala opciona polja

**Status računa**: kada se račun kreira, nijedna oznaka nije aktivna. Ovaj odeljak uključuje sledeća polja:
> **Kontrolisano**: aktivna oznaka omogućava knjiženje računa;  
> **Knjiženo**: oznaka se automatski aktivira kada račun podržava [postupak knjiženja](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting);  
> **Utovareno**: oznaka postaje aktivna kada račun podržava [postupak učitavanja (stavljanja) u skladište]header-procedures/automatic-loading-on-warehouse). U slučaju da je račun kreiran iz već učitanog transportnog dokumenta, postoji opšti parametar **VE-PurchaseInvoices_VerifyLoadStatusDDT** koji blokira oznaku **Utovareno** i na računu.  
> **Poništeno**: aktivna oznaka omogućava poništavanje računa.

:::note NAPOMENA
Oznake se mogu ukloniti postupkom vraćanja operacije.
:::

**Beleške dobavljača**: predlaže se informacija uneta u šifarnik dobavljača, dok se u slučaju automatskog kreiranja iz drugog dokumenta preuzimaju isti podaci koji se nalaze u odgovarajućem polju izvornog dokumenta.

Moguće ih je uneti i ručno. Desnim klikom miša može se otvoriti forma za unos duže beleške; ako polje sadrži vrednost, boja pozadine polja se menja.

**Naša/Vaša referenca**: kada se završi postupak:

- [Izvršenje narudžbine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), takođe se predlaže informacija iz odgovarajućeg polja narudžbine.

Ovaj prenos važi samo ako je račun kreiran preuzimanjem podataka iz samo jedne narudžbine.

- [Valorizacija primke](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization), predlaže se informacija iz odgovarajućeg polja otpremnice.

Ovaj prenos važi samo ako je račun kreiran iz samo jedne otpremnice.

**Početne beleške**: ponovo će biti predložene informacije iz narudžbine u slučaju [Preuzimanja iz narudžbine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Mogu se uneti i ručno pomoću [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), kako bi se otvorile beleške koje su već unete u prethodnoj tabeli koja se nalazi na putanji *Konfiguracija > Alati > Upravljanje kodiranim beleškama*. Korisnik mora dvaput kliknuti na polje **Početne beleške** kako bi otvorio *pomoćne kodirane beleške* i izabrao podatke ili desnim klikom miša otvorio prozor za unos veoma duge beleške. Ako polje sadrži vrednost, boja pozadine polja se menja.

**Projekat**: pomoću [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument sa projektom.

Ovo povezivanje funkcioniše samo na nivou zaglavlja artikla.

**Status dokumenta**: odnosi se na tabelu statusa dokumenta; podatak mora uneti korisnik i može se koristiti u postupcima replikacije instaliranim u upravljanju poslovnicama sa prodajnim mestima.

**Referenca**: nakon kreiranja [storno](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) računa, korisnik mora povezati dva računa unošenjem *broja*, *datuma* i *tipa* izvornog računa.

**Knj. zap.**: navodi broj, datum i protokol knjiženja koji proizlaze iz knjiženja računa.

### 2.3 Plaćanja

**Plaćanja** se automatski preuzimaju iz *Šifarnika dobavljača > kartica Plaćanja* i korisnik ih može menjati/bristi.
Ako je **Tip plaćanja** povezan sa finansijskim popustom, iznos popusta uzima se u obzir samo u računovodstvene svrhe, odnosno u dospećima plaćanja dokumenta, a ne u ukupnom iznosu računa.

Ako dokument potiče iz:

- *Narudžbine dobavljaču*, tipovi plaćanja mogu se preuzeti iz prvog dokumenta ili iz Šifarnika dobavljača; sva plaćanja dokumenata koja treba obraditi mogu se prikazati na jednom obrascu, a korisnik može izabrati željeni tip plaćanja.

- *Otpremnice*, plaćanja dobavljača mogu se zadržati ili pojedinačna plaćanja prisutna na svakoj otpremnici; u tom slučaju, na računu se prikazuje tip plaćanja sa osnovicom i PDV-om istim kao na otpremnici; dodatno, za eventualne redove artikala dodate na račun, koji ne potiču iz otpremnice, dodaje se novi red.

#### Specifično dugme

**Obriši plaćanje**: koristi se za brisanje izabranih redova plaćanja.

### 2.4 Popusti

Predlažu se samo predefinisani popusti preuzeti iz *Šifarnika dobavljača > kartica Popusti* i korisnik ih može menjati/brisati.

Popusti predloženi u zaglavlju dokumenta prenose se u svaki novi red artikla unet u dokument.

Ako se nakon unosa redova artikala unese novi popust u zaglavlje, on se neće preneti na već unete redove artikala.

#### Specifično dugme

**Otkaži (rabate)**: koristi se za brisanje izabranih redova popusta.

### 2.5 Pošiljka

Ovde se predlaže informacija uneta u podatke dobavljača, kartica [Pošiljke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), samo ako postoje podrazumevani podaci.

Padajući meni nudi sve *Primaoce* i *Odredišta* unete u Šifarnik dobavljača.

Adrese isporuke (primalac/odredište i prevoznik) mogu se uneti i samo kao opis, bez prethodnog unosa među kontaktima.

### 2.6 Prevoznik

U ovom polju moguće je uneti prevoznika koji će obaviti isporuku. Ako je prevoznik definisan na kartici dobavljača, na kartici **Pošiljke**, moći će da se izabere iz padajućeg menija u drugoj koloni. U suprotnom, dovoljno je dvaput kliknuti na treću kolonu (**Prevoznik**) kako bi se izabrao jedan od kontakata kompanije.

Po želji je moguće uneti i podatke o registarskoj oznaci vozila prevoznika, kao i datum i vreme prevoza.

### 2.7 Dodatni podaci

Ovde se predlaže informacija uneta u *Šifarnik dobavljača > kartica Dodatni podaci*, samo ako postoje podrazumevani podaci.

## Procedure

### Automatsko zaduženje skladišta

Ovaj postupak pokreće se pomoću dugmeta **Automatsko zaduženje skladišta**, koje se nalazi u zaglavlju dokumenta, i poštuje niz prethodno podešenih parametara na računu. Za detalje pogledajte identičan postupak: [Učitavanje ulaznih računa u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

Rezultat se može videti u Logistika > [Zapisi](/docs/logistics/warehouse/stock-records/records) ili u proceduri [Zaduženje skladišta ulaznim računima](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

### Izvršenje otpremnice/primke

Postupak omogućava kreiranje ulaznog računa preuzimanjem stavki iz jednog ili više dokumenata dobavljača. U zaglavlju računa, klikom na dugme **Izvršenje otpremnice/primke** otvara se prozor za izbor i filtriranje dokumenata povezanih sa izabranim dobavljačem. Izabrane stavke mogu se preneti na račun, uz mogućnost potpunog ili delimičnog zatvaranja dokumenata.

Da bi se postupak mogao koristiti, moraju biti ispunjeni sledeći uslovi:

- dobavljač na izabranim dokumentima mora odgovarati dobavljaču navedenom na računu;
- dokument mora imati status **Kontrolisano**, a status **Valorizovano** ne sme biti postavljen.

#### Postupak

U zaglavlju novog ulaznog računa potrebno je izabrati tip računa koji želite da kreirate i dobavljača. Nakon unosa tih podataka potrebno je kliknuti na dugme **Izvršenje otpremnice/primke** kako bi se otvorio obrazac za preuzimanje dokumenata.

Filteri za dobavljača i valutu automatski će biti podešeni prema podacima dobavljača izabranog na računu.

U oblasti za filtriranje moguće je izabrati način prikaza podataka u tabelarnom prikazu (Grid), u hijerarhijskoj strukturi ili kombinacijom oba prikaza istovremeno.

> Hijerarhijska struktura omogućava pregledniji prikaz DDT dokumenata dostupnih za preuzimanje i artikala sadržanih u svakom od njih. Takođe omogućava masovni izbor svih artikala unutar pojedinačnog DDT-a jednostavnim označavanjem polja za potvrdu (*flag*) na redu DDT dokumenta.

> Tabelarni prikaz (Grid) omogućava veću prilagodljivost obrasca dodavanjem polja putem Object Navigator-a. U tom slučaju masovni izbor stavki obavlja se korišćenjem dugmadi na tastaturi, nakon čega je potrebno kliknuti na dugme **Izaberi/Odznači** na alatnoj traci (Ribbon Bar).

Nakon što se podese svi željeni filteri, klikom na dugme **Traži** u donjem delu prikazaće se svi dokumenti koji imaju status **Kontrolisano**, a još nisu valorizovani ili su valorizovani samo delimično.

U prikazu rezultata korisnik zatim može:

- Izabrati sve ili samo pojedine artikle – dovoljno je označiti opciju (*flag*) na početku reda artikla. Količina za preuzimanje automatski će biti postavljena jednako preostaloj količini.

- Izabrati pojedine artikle za delimično preuzimanje – u tom slučaju potrebno je ručno izmeniti polje **Količina za preuzimanje**.

Za završetak postupka potrebno je kliknuti na dugme **Prenos**, nakon čega će sistem preuzeti sve podatke iz izabranih dokumenata i preneti ih na ulazni račun.

:::tip Zapamti
Beleške unete u zaglavlju dokumenta (kao što su **Naša referenca**, **Vaša referenca** ili **Početne beleške**) prenose se u zaglavlje računa samo ako se podaci preuzimaju iz jednog dokumenta. Ako se račun kreira preuzimanjem podataka iz više dokumenata, navedene beleške neće biti automatski prenete u zaglavlje računa.
:::

#### Specifična dugmad

> **Traži**: omogućava pretragu DDT dokumenata dostupnih za prenos.  
> **Prenos**: omogućava prenos izabranih artikala/narudžbina u dokument.  
> **Označi sve**: označava sve artikle na spisku.  
> **Odznači sve**: uklanja oznaku sa svih artikala na spisku.  
> **Označi**: aktivira oznaku (*flag*) za sve redove koji su izabrani mišem.  
> **Odznači**: deaktivira oznaku (*flag*) za sve redove koji su izabrani mišem.

### Preuzimanje iz narudžbine (od dobavljača)

Postupak omogućava kreiranje ulaznog računa preuzimanjem jedne ili više narudžbina dobavljaču.

U zaglavlju dokumenta, pritiskom na dugme **Preuzimanje iz narudžbine** otvara se obrazac u kojem je moguće filtrirati narudžbine povezane sa dobavljačem navedenim na računu. Nakon toga moguće je preneti artikle na račun, pri čemu se može u potpunosti ili delimično preuzeti cela narudžbina ili pojedina njena stavka.

Za korišćenje ove procedure potrebno je ispuniti sledeće uslove:

- dobavljač na izabranoj narudžbini mora odgovarati dobavljaču navedenom na računu;
- narudžbina mora imati status **Odštampano** i prethodno mora biti potvrđena.

#### Postupak

U zaglavlju novog ulaznog računa potrebno je izabrati tip računa koji želite da kreirate i dobavljača. Nakon unosa tih podataka potrebno je kliknuti na dugme **Preuzimanje iz narudžbine** kako bi se otvorio obrazac za preuzimanje narudžbina.

Filteri za dobavljača i valutu automatski će biti podešeni prema dobavljaču izabranom na računu.

U oblasti za filtriranje moguće je izabrati način prikaza podataka: tabelarni prikaz (Grid), hijerarhijski prikaz (Hijerarhijska struktura) ili kombinaciju oba prikaza istovremeno.

> Hijerarhijska struktura omogućava pregledniju podelu pojedinačnih narudžbina i artikala sadržanih u svakoj od njih. Takođe omogućava masovni izbor svih artikala iz određene narudžbine jednostavnim označavanjem opcije (*flag*) na redu narudžbine.

> Tabelarni prikaz (Grid) omogućava veću prilagodljivost obrasca dodavanjem dodatnih polja putem Object Navigator-a. U tom slučaju masovni izbor obavlja se korišćenjem dugmadi na tastaturi, nakon čega je potrebno kliknuti na dugme **Aktiviraj/Deaktiviraj samo izabrane redove** na alatnoj traci (Ribbon Bar).

Nakon što se podese svi željeni filteri, klikom na dugme **Traži** u donjem delu prozora prikazaće se sve narudžbine koje imaju status **Odštampano** i **Potvrđeno**, a koje još nisu preuzete (zatvorene) ili su preuzete samo delimično.

:::note NAPOMENA
Postupak preuzima sve podatke sadržane u narudžbini, pa će se kao posledica primeniti uslovi nabavke definisani na narudžbini, čak i ako su oni u međuvremenu promenjeni.
U slučaju preuzimanja više narudžbina koje imaju isti način plaćanja i/ili istu adresu isporuke, na račun će biti preneti podaci iz narudžbina. U suprotnom će se koristiti podaci definisani u matičnim podacima dobavljača.
:::

U prikazu rezultata korisnik ima mogućnost:

- Izabrati sve ili samo pojedine ponuđene artikle – dovoljno je označiti opciju (*flag*) na početku reda artikla. Polje **Količina za izvršenje** automatski će biti postavljeno na vrednost preostale količine.

- Izabrati pojedine artikle za delimično izvršenje – u tom slučaju potrebno je ručno izmeniti vrednost u polju **Količina za izvršenje**.

- Za završetak postupka potrebno je kliknuti na dugme **Preuzimanje**, nakon čega će sistem preuzeti sve podatke iz izabrane narudžbine (ili narudžbina) i preneti ih na ulazni račun.

:::tip Zapamti
Beleške unete u zaglavlju narudžbine (na primer **Naša referenca**, **Vaša referenca** ili **Početne beleške**) prenose se u zaglavlje ulaznog računa samo ako se podaci preuzimaju iz jedne narudžbine.

Ako se račun kreira preuzimanjem podataka iz više narudžbina, navedene beleške neće biti automatski prenete u zaglavlje računa.
:::

#### Specifična dugmad

> **Traži**: omogućava pretragu narudžbina dobavljača.  
> **Preuzimanje**: omogućava prenos izabranih artikala/narudžbina.  
> **Prinudno izvršenje narudžbine**: omogućava prinudno izvršenje narudžbine.  
> **Označi sve**: omogućava označavanje svih stavki na spisku.  
> **Odznači sve**: omogućava uklanjanje oznake sa svih stavki na spisku.  
> **Aktiviraj samo izabrane redove**: aktivira oznake (*flagove*) za sve redove koji su izabrani mišem.  
> **Deaktiviraj samo izabrane redove**: deaktivira oznake (*flagove*) za sve redove koji su izabrani mišem.

:::tip Zapamti
U slučaju višestrukih delimičnih preuzimanja iste stavke artikla unutar istog računa, moguće je izabrati da li će se količine sabirati u jednu stavku na računu ili će ostati prikazane kao zasebni redovi. To se određuje u tabeli **Tipovi ulaznih računa**: ako je oznaka **Ne sabiraj količine artikla pri preuzimanju** deaktivirana, količine će biti sabrane u jedan red računa; ako je oznaka aktivirana, svako delimično preuzimanje biće prikazano u zasebnom redu računa.
:::

### SDI zatvaranje dokumenata

Klikom na dugme **SDI – Zatvaranje dokumenata** otvara se modul koji omogućava ručno povezivanje narudžbina i DDT dokumenata nabavke sa računima generisanim iz primljenih XML datoteka. Ovaj postupak se takođe automatski pokreće kada se povezivanje izvrši sa ekrana **Ulazni dokumenti nabavke**. Modul je podeljen na dva glavna dela: levi deo namenjen je prikazu DDT dokumenata i narudžbina, dok desni deo prikazuje stavke (artikle) računa.

Tabela narudžbina i primki/otpremnica sadrži sledeće kolone:

- Broj povezanog reda računa
- Tip dokumenta
- Broj dokumenta
- Datum
- Broj reda
- Klasa artikla
- Šifra artikla
- Opis artikla
- Količina
- Cena
- Ukupan popust
- Neto iznos
- Jedinična neto cena

Redovi koji su već povezani sa stavkama računa biće označeni zelenom bojom kako bi ih bilo lakše prepoznati.

Tabela računa sadrži sledeće kolone:

- Broj reda
- Klasa artikla
- Šifra artikla
- Opis artikla
- Količina
- Cena
- Ukupan popust
- Neto iznos
- Jedinična neto cena

Redovi koji su već povezani sa stavkama dokumenata primki/otpremnica ili narudžbina biće posebno označeni kako bi se olakšala provera. U ovim tabelama prikazuju se samo redovi dokumenata ili narudžbina koji još nisu obrađeni (preuzeti) niti su prethodno ručno povezani.
Za uspostavljanje veze potrebno je u kolonu **Broj povezanog reda računa** uneti broj reda računa sa kojim se želi povezati dokument, a zatim na alatnoj traci kliknuti na dugme **Poveži**.

:::note Napomena
Isti broj reda računa ne može istovremeno biti povezan i sa dokumentom primki/otpremnica i sa narudžbinom.
:::

Klikom na dugme **Poveži**, redovi koji imaju popunjeno polje **Broj povezanog reda računa** biće povezani i obrađeni u odgovarajućim DDT dokumentima ili narudžbinama. Dugme **Poništi povezivanje** (*Rollback Associa*) omogućava uklanjanje uspostavljene veze i vraćanje ispravnog statusa obrade za povezane DDT dokumente ili narudžbine.

Tokom postupka povezivanja sistem sprovodi nekoliko provera kako bi obezbedio usklađenost podataka:

- **Cene**: proveravaju se razlike između cena navedenih na narudžbinama/DDT dokumentima i cena na automatski generisanom računu.
- **Popusti**: proveravaju se odstupanja u ukupnim iznosima popusta.
- **Jedinična neto cena**: proveravaju se razlike između jedinične neto cene navedene na računu i one na dokumentima/narudžbinama.
- **Ukupan iznos**: proveravaju se razlike između ukupnog iznosa računa i zbira ukupnih iznosa povezanih stavki na dokumentima/narudžbinama.

Ako jedna ili više navedenih provera ne prođu uspešno, povezivanje se neće izvršiti automatski. U tom slučaju greška će biti prikazana u tabeli grešaka, zajedno sa brojem reda računa na koji se odnosi i opisom utvrđene nepravilnosti.

## **3. Artikli**

Na ovoj kartici unose se svi artikli sa pripadajućim podacima.

Podaci se unose **ručno**, pomoću **pomoćnog polja** ili ih mogu predložiti povezane procedure.

Da biste uneli **Novi artikal** u obrazac, dovoljno je postaviti se na red kako biste popunili različite podatke ili koristiti dugme **Novo** na alatnoj traci.

:::note Napomena
Ako je račun kreiran preuzimanjem podataka iz narudžbine ili dokumenta nabavke, obavezni podaci biće automatski preuzeti iz izvornog dokumenta.
:::

### 3.1 Obavezni podaci

**Red**: ovo polje će se automatski popunjavati redosledom unosa podataka u red.

**Tip linije**: omogućava izbor različitih tipova artikala iz liste za izbor.

> **Artikal sa šifrom**: to su artikli definisani u šifarniku i mogu se knjižiti u analitičkom računovodstvu i evidentirati u skladištu.  
> **Artikal bez šifre**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu.  
> **Artikal troška**: to su šifrirani ili nešifrirani artikli koji se posebno prikazuju u sažecima dokumenta; ako je artikal troška šifriran i poreski je relevantan, biće evidentiran u skladištu, a ako nije šifriran ili nije poreski relevantan, neće biti evidentiran u skladištu.  
> **Napomena o artiklu**: to su opisne napomene koje se prikazuju na štampi dokumenta; ne utiču na računovodstvo ni na skladište.  
> **Gratis artikal**: gratis artikal se u poreskom i skladišnom smislu tretira kao šifrirani ili nešifrirani artikal, ali se, pošto predstavlja poklon, posebno evidentira u sažecima računa. Ako je na kartici aktivirana oznaka **Pravo naplate PDV-a**, obračunava se iznos PDV-a za poklon, koji može ili ne mora biti na teret dobavljača.

:::note NAPOMENA
Ako se direktno započne unos artikla, njegova *klasa*, *šifra* i *tip linije* – *Artikal sa šifrom* popunjavaju se automatski.
:::

**Klasa/Artikal/Opis artikla**: mogu se uneti ručno ili pomoću pomoćnog polja koje će predložiti sve povezane informacije unete u *Šifarnik artikla*.

Nakon unosa artikla, njegov *Opis* će automatski biti preuzet iz šifarnika. Ako artikal ima *Varijante*, potrebno je izabrati željenu varijantu iz padajućeg menija *Varijante*.

**Varijante**: ako izabrani artikal ima varijacije/varijante, potrebno je izabrati željenu varijantu iz padajućeg menija. Izbor varijante koristan je za artikle sa ovom posebnom konfiguracijom koji mogu imati drugačiju cenu od definisane standardne cene. Zbog toga cena artikla sa varijantama može biti različita od cene artikla bez varijanti. To može zahtevati upravljanje varijantama artikla u referentnom cenovniku.

**Jedinica mere**: automatski se predlaže glavna jedinica mere artikla, ali korisnik može izabrati drugu jedinicu mere.

**Količina**: predstavlja količinu glavne jedinice mere i podrazumevana vrednost je 1; može se uneti ručno ili preuzeti iz dokumenta koji se izvršava (npr. iz narudžbine).

**Cena**: cena se predlaže iz cenovnika unetog u šifarnik kontakta; referentni cenovnik za sam artikal prikazan je na kartici *Popusti/Cenovnici*.

Isti dokument može sadržati artikle sa cenama preuzetim iz različitih cenovnika ako je u šifarniku subjekta povezano više cenovnika u kaskadi (vidi **Šifarnik klijenta**).

Dvostrukim klikom na polje **Cenovnici** (kartica *Popusti/Cenovnici*) korisnik ima mogućnost izbora drugačije ponude od podrazumevane, iz koje će biti preuzeta cena unetog artikla.

Ako cenovnik ne postoji, predložena vrednost može biti preuzeta iz **poslednje nabavne cene** unete u šifarnik artikla, ukoliko u kartici [Podešavanja narudžbina dobavljaču](/docs/erp-home/registers/items/create-new-item) nije podešeno da se *trošak postavlja na nulu* u slučaju nepostojanja cenovnika.

**Iznos**: automatski se izračunava nakon primene svih popusta, odnosno predstavlja neto iznos stavke umanjen za odobrene popuste.

**Ukupan rabat**: prikazuje ukupan iznos svih popusta definisanih na kartici **Popusti/Cenovnici** za pojedinačni red artikla.

**PDV**: prioritet ima podatak unet u polje **PDV** u *Šifarniku kontakta*. Ako taj podatak ne postoji, predlaže se vrednost iz *Šifarnika artikla*, ali korisnik može uneti drugu vrednost. Ovo je obavezno polje.

### Nije obavezno uneti sledeće podatke

**Tip prometa nabavke**: predložena vrednost je ona uneta na kartici *Opšte* u šifarniku artikla. Ako nije dostupna, neće biti predložena nijedna vrednost.

Moguće je da nedostatak ove informacije izazove greške pri knjiženju računa koji će biti generisan iz otpremnice, ako postupak takođe ne pronađe vrednost u polju **Podrazumevani trošak/prihod računa** u *Šifarniku kontakta*.

**Alternativna jedinica mere**: ova polja prikazuju količinu u alternativnoj jedinici mere ako je podatak dostupan na kartici **Alternativne jedinice mere** u podacima artikla (koristi se ona koja ima aktiviranu oznaku **Podrazumevano**) i ako su u podešavanjima dokumenta aktivirane oznake **Upravljanje dvostrukim jedinicama mere** i **Automatski predlog alternativne jedinice mere**.

**Alternativna količina**: predložena je vrednost koja se odnosi na alternativnu jedinicu mere, a izračunava se množenjem ili deljenjem *upravljačke količine* (koja se odnosi na glavnu jedinicu mere) sa *faktorom konverzije* podešenim na kartici *Alternativne jedinice mere* u *Šifarniku artikla*.

**Skladište/Opis/Predložak**: ovi podaci su potrebni za evidentiranje ulaza u skladište. Preuzimaju se na osnovu dokumenta nabavke iz tabele *Tipovi narudžbina/Otpremnice/Primke* ili se unose ručno.

**Težine**: prikazuju se ukupne neto i bruto težine stavki artikla. Prikazuju se težine artikala iz šifarnika pomnožene sa količinom stavke.

#### Specifična dugmad

> **Upravljanje ambalažom**: omogućava otvaranje upravljanja pakovanjem za vraćene stavke u dokumentima nabavke. Dugme postaje aktivno kada je dokument sačuvan, ali nije učitan. Klikom na ovo dugme otvara se odgovarajući obrazac u kojem je moguće uneti količinu, izabrati stavku i izvršiti prenos izabranog pakovanja u stavke artikla pritiskom na dugme **Izvrši**. Na ovom obrascu prikazuju se artikli koji su uneti sa prirodom pakovanja i koji se nalaze u tabeli **Vraćena pakovanja**.  
> **Storno**: omogućava storniranje tipova dokumenata koji imaju prirodu povrata.  
> **Ažuriraj cenovnike**: omogućava ažuriranje cene artikla prema novom cenovniku (ako je unet ažurirani cenovnik). Klikom na padajući meni pored dugmeta biće moguće kreirati novi cenovnik ako još nije kreiran.

:::important Zapamti
Prilikom kreiranja ili ažuriranja cenovnika putem ove procedure, u cenovnik se prenose samo oni popusti koji su ručno uneti na računu.
:::

### 3.3 Popusti/Cenovnici

**Cenovnik**: prikazuje se cenovnik iz kojeg je preuzet artikal, sa datumom početka/završetka važenja i posebnim uslovima (npr. raspon popusta) dodeljenim artiklu u cenovniku.

**Ručna cena**: automatski se aktivira kada korisnik ručno unese ili izmeni cenu artikla.

**Popusti**: prikazuju se svi popusti povezani sa artiklom, svaki sa sopstvenom osnovom obračuna i dodelom.

#### Specifično dugme

> **Obriši rabate**: omogućava brisanje izabranog popusta iz odgovarajuće tabele.

:::important Zapamti
Za upravljanje popustima na poresku osnovicu potrebno je u bazi podataka aktivirati opšti parametar **GEN-GlobalSettings_CalculateDiscountOnAmount** za odgovarajuću kompaniju. Ako navedeni parametar nije aktivan, popusti na poresku osnovicu automatski će biti pretvoreni u kaskadne popuste.
:::

### 3.4 Podaci artikla

**Artikal**: prikazuje klasu, šifru i opis artikla izabranog u tabelarnom prikazu.

**Varijante**: u ovom polju moguće je izabrati varijantu artikla među onima koje su prethodno definisane na kartici **Varijante** u šifarniku artikla. Ako su u cenovniku za pojedine varijante definisane različite cene i/ili popusti, oni će se automatski ažurirati prilikom izbora druge varijante artikla.

**Beleške**: odnose se na pojedinačni red artikla. Mogu se uneti i pomoću unapred definisanih (kodiranih) beleški. Biće prenete u sve dokumente koji se naknadno generišu iz ovog dokumenta.

**Skladište i predložak**: predlažu se skladište i predložak koji će se automatski koristiti prilikom knjiženja prijema odgovarajućih artikala u skladište. Ovi podaci preuzimaju se iz **Tipova ulaznih računa** ili iz narudžbine odnosno otpremnice/primke, ako je račun nastao preuzimanjem narudžbine ili valorizacijom otpremnica/primki. Podaci se mogu ručno izmeniti za svaki red artikla pojedinačno.

**Lokacija**: automatski se predlaže ako je za izabrani skladišni predložak definisana lokacija u tabeli **Skladišni predložak** ili ako je za artikal definisana lokacija u **Mapi lokacija po artiklu**. Po potrebi se vrednost može ručno uneti ili izmeniti.

**Alternativna jedinica mere / Alternativna količina**: ako je u šifarniku artikla definisana alternativna jedinica mere sa aktiviranom oznakom **Podrazumevano**, i ako je u **Parametrima narudžbina dobavljaču** aktivirana opcija **Automatski predlog alternativne jedinice mere**, ove vrednosti će biti automatski predložene prilikom unosa artikla.

**Cena za alternativnu jedinicu mere**: ako je ova oznaka aktivna, znači da se cena uneta na redu artikla odnosi na alternativnu jedinicu mere, a ne na osnovnu jedinicu mere artikla. Ova oznaka, zajedno sa poljima **Alternativna jedinica mere** i **Alternativna količina**, vidljiva je samo ako je u **Parametrima ulaznih računa** aktivirana opcija **Upravljanje dvostrukom jedinicom mere**.

**Projekat**: predstavlja projekat koji se povezuje sa dokumentom. Ako je projekat unet u zaglavlju dokumenta, automatski će biti prenet na sve redove artikala. U suprotnom, projekat se može izabrati putem odgovarajućeg pomoćnog menija za izbor projekata.

**Od/Do datuma obračuna**: omogućavaju definisanje datuma obračunskog perioda za dokument. Ako je u tabeli **Kompanija** aktivirana opcija *Controlling*, prilikom kreiranja računa iz otpremnice/primke ili iz povrata kooperantske proizvodnje (podizvođač), kao datumi obračunskog perioda preuzimaju se datumi iz dokumenta prijema u skladište. Kod dokumenata koji nisu knjiženi u skladište ili kod artikala koji su ručno uneti na račun, datumi obračunskog perioda odgovaraju datumu računa.

**Povrat PDV-a**: ako je aktiviran, PDV na poklon uzima se u obzir u ukupnom iznosu računa.

**Marka**: predstavlja marku artikla koja se preuzima iz šifarnika artikla ili iz cenovnika artikla.

**Referenca naloga**: u slučaju da je račun generisan iz narudžbine, referenca na narudžbinu u ovom polju biće automatski uneta.

### 3.5 Lotovi i serijski brojevi

U oba pregleda mogu se uneti i lotovi i serijski brojevi koji treba da budu evidentirani u skladištu i koji su povezani sa artiklom u *Šifarniku artikla > kartica* [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item), ili se mogu uneti ručno.

Ako artikal ne podržava upravljanje lotovima/serijskim brojevima, ova kartica će biti onemogućena.

:::note Zapamti
Ako je u **Parametrima ulaznih DDT dokumenata** deaktivirana opcija **Lotovi i serijski brojevi obavezni**, dokument će biti moguće sačuvati i bez unosa lotova ili serijskih brojeva. Prilikom skladišnog knjiženja (prijema) DDT dokumenta, lotovi će biti automatski predloženi ako prethodno nisu bili uneti.
:::

#### Specifična dugmad

> **Obriši lot**: omogućava brisanje izabranog lota.  
> **Obriši serijski broj**: omogućava brisanje izabranog reda serijskog broja.

### 3.6 Analitika

Može sadržati informacije o centrima troškova/profitnim centrima na koje su raspoređene vrednosti artikla.

Ovi podaci mogu se unositi ručno ili *automatski* (ako su centri troškova/profitni centri prethodno uneti u *šifarnik subjekta*, *šifarnik artikla* ili u *kontni plan*).

#### Specifična dugmad

> **Obriši mesta troškova**: omogućava brisanje izabranog reda mesta troška.  
> **Obriši profitne centre**: omogućava brisanje izabranog reda profitnog centra.

### 3.7 Dodatni podaci

Prikazuje spisak **Dodatnih podataka** povezanih sa artiklom, uz mogućnost dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, kao i mogućnost da se, pomoću odgovarajuće oznake, izaberu dodatni podaci koji će biti odštampani.

### 3.8 Dokumenti u prilogu

Prikazuje detalje o eventualnim **Dokumentima u prilogu** (naziv, tip dokumenta, eventualne beleške, naša/vaša referenca). Uputstva o tome kako priložiti dokument pogledajte u članku **Priloži dokumente**.

### 3.9 CONAI materijali za artikal (Italija)

Ova kartica je vidljiva samo ako je za aktivnu kompaniju uključeno upravljanje CONAI naknadama.
U ovom delu prikazuju se ambalažni materijali od kojih se sastoji artikal, zajedno sa pripadajućom jedinicom mere, jediničnom težinom (umanjenom za eventualni procenat izuzeća definisan u šifarniku kupca) i ukupnom težinom, koja se izračunava množenjem broja prodatih artikala sa jediničnom težinom.
Prilikom čuvanja dokumenta ili pritiskom na dugme **Ponovni obračun CONAI**, Fluentis će automatski dodati jedan ili više redova troškova, pri čemu će preuzeti artikal ambalažnog materijala, postaviti količinu jednaku zbiru količina i cenu jednaku CONAI trošku definisanom za taj materijal.
Za više informacija o upravljanju CONAI naknadama u Fluentisu pogledajte odgovarajuću dokumentaciju.

### 3.10 Troškovi za obračun

Kartice **Troškovi za obračun** i **Troškovi (Spese)** nisu podržane niti se koriste u trenutnoj verziji Fluentisa.

### 3.11 Odeljak sa vrednostima

Odeljak prikazuje pregled troškova koji doprinose formiranju konačne cene izabranog artikla u tabeli artikala.

**Jedinična cena**: vrednost polja **Cena**.

**Količina**: vrednost polja **Količina**.

**Iznos reda**: Cena artikla × Količina artikla.

**Ukupan rabat**: zbir popusta artikla, uključujući i konačne popuste.

**Osnovica (iznos)**: Iznos bez popusta − Popusti.

**Porez**: Osnovica × stopa PDV-a artikla.

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim odeljcima ove kartice prikazane su glavne informacije o celom dokumentu i pojedina specifična dugmad.

### 4.1 Konačni popusti artikala

Mogu se uneti samo popusti izraženi u procentima koji se primenjuju na ukupan iznos dokumenta.
Popusti uneti u ovom odeljku obračunavaju se i prikazuju na svakom artiklu dokumenta, na kartici *Artikli > kartica Popusti/Cenovnici*.

**Tip/Opis popusta**: omogućava izbor tipova popusta (unapred definisanih u *Tipovima rabata*), dodeljujući prioritet primene popusta tipu i određujući da li se popust obračunava na osnovu poreske osnovice ili se primenjuje kaskadno u odnosu na prethodno primenjene popuste.  
**Prioritet**: predstavlja prioritet primene popusta; redosled primene je rastući.  
**Kaskada/Iznos**: određuje da li se obračun popusta zasniva na (*cena × količina*) − (*već obračunati popusti*) ili na (*cena × količina*).  
**Vrednost**: numerička vrednost konačnog popusta koji će se primeniti.

### 4.2 Troškovi

Predlažu se troškovi uneti u šifarnik kontakta, na kartici **Troškovi/Popusti**. U ovoj tabeli troškove treba unositi sa pozitivnim predznakom, a popuste sa negativnim predznakom.
Ovi elementi primenjuju se na ceo dokument i ne raspoređuju se na pojedinačne redove artikala. Mogu uključivati dodatne troškove, globalne popuste i povećanja cene (dodatke) primenjene na ceo dokument. Ako su definisani u šifarniku kontakta, automatski će biti predloženi prilikom kreiranja dokumenta.

**Tip/Opis**: omogućava izbor tipova troškova (unapred definisanih u *Tipovima troškova*), dodeljujući tipu procenat troška koji će se primeniti.  
**Iznos troška**: označava vrednost troška izraženu u valuti dokumenta.  
**PDV**: označava stopu PDV-a koja će se primeniti na unete troškove.  
**Procenat/Vrednost**: polje koje određuje da li će se troškovi obračunavati procentualno ili prema unapred definisanoj novčanoj vrednosti.  
**Procenat**: numerička vrednost procenta troška.

:::note Napomena

Ako izabrani tip troška ima aktiviranu oznaku **Raspodeljeno**, prilikom knjiženja računa u skladište trošak će biti raspodeljen na sve artikle proporcionalno ukupnim iznosima pojedinačnih stavki artikala. Rezultat raspodele troška vidljiv je u skladišnom knjiženju.

> 1. Ako artikli imaju definisanu cenu: ukupan trošak raspodeljuje se proporcionalno neto iznosima pojedinačnih artikala. Dobijeni iznos dodaje se početnoj ceni artikla u polju **Ukupan iznos skladišnog knjiženja**. Ako pojedine stavke imaju iznos 0, radi raspodele će se tretirati kao da imaju vrednost 1, kako bi trošak bio raspodeljen na sve artikle.
> 2. Ako svi artikli imaju cenu 0: trošak se ravnomerno raspodeljuje na sve stavke artikala. Na osnovu tako raspodeljenog troška izračunava se iznos skladišnog kretanja / upravljački iznos u skladišnom knjiženju, uzimajući u obzir količine pojedinačnih artikala.
:::

### 4.3 Sažetak PDV-a

Prikazuje sažetak PDV-a dokumenta, za svaku stopu PDV-a.

### 4.4 Pregled dospeća plaćanja

Prikazuje sažetak dospeća plaćanja dokumenta, za svaki *tip* i *način plaćanja*.

**Broj**: progresivna vrednost reda.

**Plaćanje**: predstavlja alfanumerički kod *Tipa plaćanja* preuzet iz *Zaglavlja dokumenta > kartica Plaćanja*.

**Iznos**: obračunati iznos dospeća plaćanja. Može se ručno promeniti, u kom slučaju se automatski aktivira sledeća oznaka **Ručno uređivanje**. (Automatski se sprovode kontrole i upozorenja o usklađenosti između vrednosti dospeća plaćanja i ukupnog iznosa računa.)

**Datum dospeća**: datum obračunatog dospeća plaćanja. Može se ručno promeniti, u kom slučaju se automatski aktivira sledeća oznaka **Ručno uređivanje**.

**Troškovi**: polje u kojem su prikazani troškovi naplate.

**PDV**: stopa PDV-a koja se primenjuje na troškove naplate (može se postaviti i ručno).

**Predložak plaćanja**: na računu je moguće direktno uneti predložak (kontnu osnovu) koji automatski generiše knjiženje naplate ili plaćanja.

Napomena: potrebno je obratiti pažnju na predložak izabranog konta, jer će sistem koristiti definisana konta čak i ako nije naveden analitički podkonto. Upravo zbog toga postoji i sledeće polje.

**Konto/Podkonto klijenta/dobavljača**: konto koje se koristi za naplatu/plaćanje dospeća, zamenjujući konto prisutan u predlošku plaćanja (ili naplate).

**Oznaka**: samo dospeća plaćanja koja imaju ovu oznaku obrađuju se u plaćanju sa izabranim predloškom i podešenim kontom.

**Referentni modeli plaćanja**: model za generisanje poziva na broj plaćanja. U nekim stranim lokalizacijama svako dospeće plaćanja na računu ima šifru koju dodeljuje izdavalac računa. Ta šifra je strukturisana prema određenim modelima (tabela **MB_PaymentReferenceModels**) kako bi mogla automatski da se generiše pomoću algoritma.

**Tipovi modela plaćanja**: ovo je šifra (strukturisana prema prethodnom modelu) koja se unosi u dospeće plaćanja i u naloge za plaćanje koji se šalju banci, kako bi se primaocu naznačilo koje je dospeće plaćanja izmireno (i time automatizovao uvoz bankovnih transakcija sa zatvaranjem stavke). Tako se popunjava u stavci i u SEPA datoteci.

**Rok za avansno plaćanje**: ovo je polje predviđeno u SDI formatu računa i označava poslednji datum do kojeg se može ostvariti finansijski popust za prevremeno plaćanje. Nakon tog datuma više nije moguće primeniti ugovoreni popust.

**Tip popusta**: tip finansijskog popusta.

**Finansijska vrednost rabata**: označava vrednost finansijskog popusta koji se odobrava ako se račun plati u roku za prevremeno plaćanje. Ovaj iznos koristi se za obračun umanjenja obaveze odnosno potraživanja prilikom naplate ili plaćanja.

**Br. priznanice**: eventualni broj priznanice za primljeni novac.

**Jed.**: aktivira knjiženje zatvaranja dospeća plaćanja u automatskim knjiženjima.

### 4.5 Ostala polja

**Završne beleške**: slobodno polje koje korisnik može popuniti, uključujući i *Pomoć kodiranim beleškama*.

### 4.6 Ukupno – dokument

**Iznos stavki bez popusta**: predstavlja zbir vrednosti svih stavki.

**Zaduženje**: predstavlja vrednost eventualno primljene akontacije za dokument.

**Poklonjeni iznos**: predstavlja iznos stavki tipa **Gratis artikal** unetih na kartici *Artikli*.

**Ukupni primenjeni rabati**: predstavlja ukupnu vrednost primenjenih popusta na stavkama, bez konačnih popusta.

**Neto iznos artikala**: *Iznos stavki bez popusta − Ukupni primenjeni rabati*.

**Konačni popusti artikala**: predstavlja vrednost konačnih popusta izraženih u procentima na bruto iznos stavki.

**Iznos umanjen za ukupan popust**: *Neto iznos artikala − Ukupno konačnih rabata*.

**Ukupno za stavke troškova**: predstavlja vrednost troškova unetih na prethodnoj kartici kao stavke *Tipova troškova*.

**Troškovi naplate**: predstavlja zbir unetih troškova naplate u tabeli *Troškovi*.

**Trošak overe**: predstavlja zbir unetih troškova marke u tabeli *Troškovi*.

**Ukupno troškovi/popusti/doplate**: predstavlja vrednost troškova unetih u tabelu *Troškovi*.

**Osnovica**: *Neto iznos artikala − Konačni popusti + Ukupno za stavke troškova + Ukupno troškovi/popusti/doplate*.

**Porez**: predstavlja zbir vrednosti sadržanih u pregledima PDV-a.

**Ukupno**: *Osnovica + PDV*.