---
title: Novi nalog za nabavku
sidebar_position: 1
---

Obrazac se otvara putem menija **Nabavka > Nalog za nabavku > Kreiraj nalog za nabavku** ili iz filtera za pretragu nabavnih narudžbina, pomoću dugmeta *Novi radni nalog*.

## *Kako kreirati nalog za nabavku*

<details>

<summary>Kliknite za prikaz ključnih koraka</summary>

1. **Unesite obavezne podatke**: *Tip radnog naloga* i *Dobavljač*. *Godina*, *Broj* i *Datum unosa* biće automatski predloženi.

2. **Unesite ili izmenite neobavezne podatke** u zaglavlju, kao što su *popusti*, *odredište* i sl.

3. **Unesite artikle**: dvostrukim klikom na polje *Artikal* otvara se pomoćni prozor za artikle koji omogućava pretragu i izbor postojećih artikala. Svi ostali podaci reda, kao što su *jedinica mere*, *količina* i *cena*, biće automatski predloženi, ali se mogu menjati.  
Alternativno, moguće je izabrati *Tip reda* **Nešifrirani artikal** i ručno uneti sledeće podatke.

4. **Unesite eventualne popuste ili dodatne informacije** na kartici *Podaci*.

5. **Proverite odeljak Sažeci** i unesite eventualne troškove ili konačne popuste.

6. Nakon provere narudžbine, **unesite *Datum potvrde* i aktivirajte opciju *Odštampano* u zaglavlju** kako bi dokument postao dostupan za postupke razduženja.

</details>

## **1. Obavezni podaci**

Za kreiranje nove narudžbine korisnik mora uneti sledeće podatke:

- **Dobavljač**: može se uneti putem [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).
- **Tip naloga**: prethodno definisan u tabeli [Tipovi nabavnih narudžbina](/docs/configurations/tables/purchase/purchase-job-order-types). Ovo polje određuje raspon numeracije dokumenta koji se unosi i automatski predlaže *Broj* na osnovu datuma unosa i poslednjeg unetog broja.
- **Godina / Datum unosa**: prikazuje se trenutni datum, ali ga je moguće ručno promeniti.
- **Broj**: svakom dokumentu dodeljuje se broj prema numeraciji definisanoj u tabeli [Numeracije](/docs/configurations/tables/fluentis-numerations).
- **Interni broj**: neobavezan podatak; predlaže se ista vrednost kao u prethodnom polju, ali korisnik može da je promeni i unese drugačiji alfanumerički kod.

Obrazac sadrži više kartica.

## **2. Zaglavlje**

Nakon što u gornjem delu izabere obavezne podatke, korisnik može nastaviti unos sledećih informacija [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili pomoću [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Unošenjem **Dobavljača** sistem automatski predlaže sve podatke specifične za karticu **Zaglavlje**, prema prethodno definisanim informacijama u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u poljima koja se odnose na njegovu adresu i u sledećim odeljcima:

- **Valuta**: odeljak koji sadrži podatke o [valuti](/docs/configurations/tables/general-settings/currencies), [kursu](/docs/guide/common/glossary/glossary-intro#currency-exchange), [datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: odeljak koji sadrži informacije o [*državi*](/docs/guide/common/glossary/glossary-intro#country), [jeziku](/docs/guide/common/glossary/glossary-intro#language), [zoni](/docs/guide/common/glossary/glossary-intro#zone).
- **Pošiljka**: odeljak koji sadrži podatke o [*isporuci*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Paritetu](/docs/guide/common/glossary/glossary-intro#carriage), [Pakovanju](/docs/guide/common/glossary/glossary-intro#packing), podrazumevanom [Cenovniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) i njegovom [periodu važenja](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Plaćanja**: odeljak koji sadrži podatke o [*plaćanjima*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *popustima*, *odredištu* i *prevozniku*.

Sva ova polja korisnik može obrisati ili ručno izmeniti.

#### Neobavezna polja

> **Pošiljka**, *Paritet* i *Pakovanje* preuzimaju se iz šifarnika dobavljača, ako su tamo definisani; u suprotnom ih je moguće uneti ručno.  
> **Cenovnik**: ako u šifarniku dobavljača postoji cenovnik označen kao *Podrazumevan*, biće predložen u ovom polju zajedno sa datumima svog važenja.

> **Procenjeni datum isporuke**: označava očekivani datum isporuke robe.  
> **Datum početka/završetka**: omogućava unos početnog i završnog datuma naloga.

> **Beleške dobavljača**: ovo polje preuzima se iz [šifarnika dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), ali se može uneti i ručno.  
> **Naša/Vaša referenca**: u ova polja obično se unose interna referenca i referenca dobavljača za dokument. Ako postoje, preuzimaju se iz šifarnika dobavljača, u suprotnom se mogu uneti ručno. Ovi podaci će zatim biti preneti u narudžbinu dobavljača kreiranu putem *Evidentiranja iz projekta*.  
> **Početna beleška podnaloga**: mogu se izabrati beleške koje su prethodno unete u tabelu na putanji *Konfiguracija > Alati > Upravljanje kodiranim beleškama*. Korisnik treba dvaput kliknuti na polje *Početne beleške* kako bi otvorio pomoć za kodirane beleške i izabrao željene podatke.  
> **Projekat**: pomoću pomoći za izbor dokument se može povezati sa [projektom](/docs/project-management/projects/search-projects-intro). Ovo povezivanje funkcioniše samo na nivou zaglavlja artikla.

> **Status izvršenja**: kada se projekat izvrši putem narudžbine dobavljaču, njegov *Status izvršenja* automatski se menja iz *Neizvršen* u *Delimično izvršen* ili *Izvršen*. Korisnik može ručno označiti izvršenje naloga za nabavku koji nije u potpunosti izvršen; u tom slučaju u istoimeno polje biće sačuvan i **Datum izvršenja**.  
> **Datum potvrde**: omogućava unos datuma kada je projekat potvrđen.  
> **Odštampano**: ova oznaka se automatski aktivira prilikom pokretanja konačne štampe putem dugmeta na alatnoj traci. Alternativno, može se aktivirati i ručno kako bi bilo moguće izvršiti projekat.

:::important Napomena
Da bi izvršenje naloga za nabavku moglo biti sprovedeno u okviru narudžbine dobavljaču, potrebno je da projekat ima unet *Datum potvrde* i da je oznaka *Odštampano* aktivna.
:::

### 2.1 Plaćanja

[Uslovi plaćanja](/docs/configurations/tables/general-settings/payment-terms) automatski se preuzimaju iz *Šifarnika dobavljača > kartica Plaćanja*, a korisnik ih može izmeniti ili obrisati.

Ako je uz [Tip plaćanja](/docs/configurations/tables/general-settings/payment-types) povezan finansijski popust, iznos popusta uzima se u obzir samo u računovodstvene svrhe, odnosno pri određivanju dospeća dokumenta, ali ne i u ukupnom iznosu otpremnice.

#### Specifično dugme

> **Obriši plaćanje**: koristi se za brisanje označenih stavki plaćanja.

### 2.2 Popusti

Prikazuju se samo unapred definisani popusti preuzeti iz *Šifarnika dobavljača > kartica Popusti*. Korisnik ih može izmeniti ili obrisati.

Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi red artikla unet u dokument.

Ako se nakon unosa redova artikala unese novi popust u zaglavlju, taj popust neće biti prenet na već unete redove artikala.

*Specifično dugme*

> **Obriši rabat**: koristi se za brisanje izabranih redova popusta.

### 2.3 Odredište

Ovde se prikazuju informacije unete u *Šifarniku dobavljača > kartica Isporuke*, ali samo ako postoje podrazumevane vrednosti. Padajući meni prikazuje sve primaoce, odredišta i prevoznike definisane u šifarniku dobavljača.

Adrese za isporuku (primalac/odredište i prevoznik) mogu se uneti i samo opisno, bez prethodnog unosa među kontakte.

### 2.4 Prevoznik

U ovom polju moguće je uneti *Prevoznika* koji će izvršiti isporuku narudžbine. Ako je unet u *Šifarniku dobavljača > kartica Isporuke*, biće moguće izabrati prevoznika iz padajućeg menija u drugoj koloni; alternativno, dovoljno je dvaput kliknuti na treću kolonu (*Prevoznik*) kako bi se izabrao jedan od kontakata kompanije.

Po želji se mogu dodati detalji o *Registarskoj oznaci* prevoznika i *Datumu/Vremenu prevoza*.

### 2.5 Dodatni podaci

Ovde se prikazuju informacije unete u *Šifarniku subjekta > kartica Dodatni podaci*, ali samo ako postoje podrazumevani podaci.

## **3. Artikli**

Za unos novog artikla u Grid dovoljno je pozicionirati se na red kako biste uneli različite podatke ili koristiti dugme *Novi artikal* koje se nalazi na alatnoj traci.

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz korišćenje [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), ili mogu biti predloženi iz povezanih procedura.

### 3.1 Obavezni podaci

**Red**: ovo polje automatski će se i redom popunjavati prilikom unosa podataka u red.

- **Tip reda** omogućava izbor, putem padajućeg menija, artikala sa različitim svojstvima:
> - *Artikal sa klasom*: artikli koji su kodirani u šifarniku; mogu se knjižiti u analitičkom računovodstvu i evidentirati u skladištu. <br />
> - *Artikal bez klase*: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu. <br />
> - *Trošak (artikli)*: mogu biti kodirani ili nekodirani i prikazuju se odvojeno u sažecima dokumenata. Ako je troškovni artikal kodiran i poreski relevantan, biće evidentiran u skladištu; ako nije kodiran ili nije poreski relevantan, neće biti evidentiran u skladištu. <br />
> - *Stavka beleške*: opisne beleške koje se štampaju na dokumentu i nemaju uticaja na računovodstvo niti na skladište.

:::note Napomena
Ako se direktno započne sa unosom šifre artikla, njegova klasa, opis i tip reda (*Artikal sa klasom*) automatski će biti uneti.
:::

**Klasa/Artikal/Opis artikla**: mogu se uneti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz korišćenje [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), koja će prikazati sve podatke unete u *Šifarnik artikala*.

Nakon unosa artikla, njegov *Opis* automatski će biti preuzet iz šifarnika. Ako artikal ima *Varijante*, potrebno je izabrati željenu varijantu iz padajućeg menija *Varijante*.

**Jedinica mere**: predlaže se glavna jedinica mere artikla, ali korisnik ima mogućnost da izabere drugu jedinicu mere.

### 3.2 Neobavezni podaci

**Količina**: predstavlja količinu glavne jedinice mere i kao podrazumevanu vrednost ima 1; može se uneti ručno ili preuzeti iz dokumenta koji se koristi za preuzimanje (na primer iz narudžbine dobavljača).

- **Cena**: cena se preuzima iz cenovnika koji je definisan u šifarniku kontakta. Referentni cenovnik za određeni artikal prikazan je na kartici Podaci. U istom dokumentu mogu se nalaziti artikli sa cenama preuzetim iz različitih cenovnika, ako je u šifarniku subjekta povezano više cenovnika u nizu (vidi [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Dvostrukim klikom na polje *Cenovnici* (koje se nalazi u okviru stavke *Projekti*) korisnik može izabrati cenovnik različit od podrazumevanog, iz kojeg će biti preuzeta cena unetog artikla. Ako cenovnik nije dostupan, kao predlog koristi se *poslednji trošak* iz šifarnika artikla.

**PDV**: *prioritet* ima podatak unet u polje Šifra PDV-a u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrednost iz *Šifarnika artikla*, ali korisnik ima mogućnost da unese i drugu vrednost. Ovo polje je obavezno.

- **Tip prometa nabavke**: prikazuje se vrednost uneta na kartici [Opšti podaci](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako podatak nije unet, ništa se ne prikazuje, a prilikom knjiženja računa koristiće se vrednost iz polja *Podrazumevani konto troška/prihoda* u šifarniku kontakta.

- **Prinudno izvršeno**: aktiviranjem ove oznake, red artikla biće označen kao *Prinudno izvršen* i više neće biti dostupan za dalja izvršenja.

### 3.3 Ukupno

- **Popusti**: prikazuju se svi popusti povezani sa artiklom, svaki sa sopstvenom osnovicom i pravilom obračuna.

*Specifično dugme*

> **Obriši popust**: omogućava brisanje izabranog popusta iz odgovarajuće tabele.

### 3.4 Podaci

Na ovoj kartici prikazuju se ili unose dodatne informacije vezane za artikal:

- **Artikal**: prikazuje izabrani artikal iz gornje tabele.

- **Varijante**: u ovom polju moguće je izabrati varijantu artikla među onima prethodno definisanim na kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u kartici artikla. Ako su u cenovniku definisane različite cene i/ili popusti za svaku varijantu, oni će se automatski ažurirati prilikom izbora druge varijante artikla.

- **Beleška**: ovo su beleške vezane za red artikla; mogu se uneti i putem kodiranih *pomoćnih* beleški. Beleške će biti prikazane u svim dokumentima koji se generišu iz sistema.

- **Skladište i predložak**: sistem automatski predlaže skladište i predložak koji će biti korišćeni i u narudžbini dobavljaču generisanoj putem *Evidencije projekta*.

- **Projekat**: predstavlja projekat kojem se dokument ili red artikla može dodeliti. Ako je u zaglavlju dokumenta unet projekat, on će se automatski primeniti na sve redove; alternativno, projekat se može izabrati putem odgovarajuće *pomoći* za projekte.

- **Cenovnik**: prikazuje cenovnik iz kojeg je preuzeta cena artikla, uključujući datum početka/završetka važenja i posebne uslove (npr. **Tip raspona** popusta) dodeljene artiklu u cenovniku.

- **Ručna cena**: ovo polje se automatski aktivira kada je cena artikla uneta ili izmenjena ručno.

- **Procenjeni datum isporuke**: omogućava unos datuma kada se očekuje isporuka artikla.

- **Marka**: prikazuje marku artikla, preuzetu iz njegove kartice ili iz cenovnika artikla.

### 3.5 Sekcija vrednosti

Sekcija u donjem desnom delu prikazuje sažetak troškova koji učestvuju u formiranju konačne cene svakog artikla izabranog u pregledu artikala. Polja koja se nalaze u ovoj sekciji su:

- **Cena**: vrednost polja Cena;
- **Količina**: vrednost polja Količina ili Alternativna količina, u zavisnosti od oznake Cena po jedinici alternativne mere;
- **Iznos reda**: Cena artikla × Količina artikla;
- **Ukupan rabat**: zbir svih popusta na artikal, uključujući i konačne popuste;
- **Iznos**: Bruto iznos − Popusti;
- **PDV**: Osnovica × stopa PDV-a artikla;
- **Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim delovima ove kartice prikazane su glavne informacije celog dokumenta, kao i određena specifična dugmad.

### 4.1 Konačni popusti

Mogu se uneti samo popusti izraženi u procentima, koji će se primeniti na ukupan iznos dokumenta.

Popusti uneti u ovom odeljku obračunavaju se i prikazuju na svakom artiklu dokumenta, na *kartici Artikli > kartica Popusti/Cenovnici*.

**Tip/Opis popusta**: omogućava izbor tipa popusta (predefinisanog u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), određujući prioritet primene popusta i da li će se popust obračunavati na osnovicu ili kaskadno u odnosu na prethodno primenjene popuste.  
**Prioritet**: predstavlja prioritet primene popusta; redosled primene odvija se uzlaznim redosledom.  
**Kaskada/Iznos**: definiše da li se obračun popusta zasniva na (cena × količina) − (već obračunati popusti) ili na (cena × količina).  
**Vrednost**: numerička vrednost popusta koji treba primeniti.

### 4.2 Troškovi

Ovde su prikazani troškovi uneti u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Postoji i mogućnost unosa troškova koji se odnose samo na korišćeni dokument.

**Tip/Opis**: omogućava izbor tipa troškova (predefinisanog u *Tipovima troškova*), dodeljujući tipu procenat troška koji treba primeniti.  
**Procenat/Vrednost**: polje koje određuje da li će troškovi biti obračunati procentualno ili kao unapred definisani novčani iznos.  
**Procenat**: numerička vrednost procenta troškova.

### 4.3 Ukupni iznosi dokumenta

- **Završne beleške radnog naloga**: opisno polje koje korisnik može popuniti, takođe uz pomoć *kodiranih beleški*.
- **Bruto iznos artikala**: predstavlja zbir vrednosti svih artikala.
- **Avans**: predstavlja vrednost eventualnog avansa primljenog za dokument.
- **Poklonjeni iznos**: predstavlja iznos artikala tipa poklon unetih na kartici *Artikli*.
- **Ukupno primenjeni rabati**: predstavlja ukupnu vrednost popusta primenjenih na artikle, isključujući konačne popuste.
- **Neto iznos artikala**: *Bruto iznos artikala* – *Ukupno primenjenih popusta*.
- **Konačni popusti artikala**: predstavlja vrednost konačnih popusta izraženu u procentima na bruto iznos artikala.
- **Iznos umanjen za ukupan popust**: *Neto iznos artikala* – *Ukupno konačnih popusta*.
- **Ukupno za stavke troškova**: predstavlja vrednost troškova unetih na prethodnoj kartici kao artikli tipa *Trošak*.
- **Troškovi naplate**: predstavlja zbir troškova naplate unetih u Grid *Troškovi*.
- **Trošak overe**: predstavlja zbir troškova takse unetih u Grid *Troškovi*.
- **Ukupno troškovi/popusti/doplate**: predstavlja ukupnu vrednost troškova unetih u Grid *Troškovi*.
- **Osnovica**: *Neto iznos artikala* – *Konačni popusti* + *Ukupno troškovi* + *Ukupno troškovi/popusti/doplate*.
- **PDV**: predstavlja zbir vrednosti sadržanih u sažecima PDV-a.
- **Ukupno**: *Osnovica* + *PDV*.