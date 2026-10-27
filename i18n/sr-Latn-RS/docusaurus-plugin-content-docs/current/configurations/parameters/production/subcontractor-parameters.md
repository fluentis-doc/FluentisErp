---
title: Parametri podizvođača
sidebar_position: 2
tags: [Podizvođači]
---

U ovom prozoru podešavaju se svi parametri koji se odnose na upravljanje podizvođačima, a posebno na način izvršavanja skladišnih kretanja koja pokreću postupci ovog modula.

## Opšte

#### Podaci koji se predlažu u nalozima

> **Ponovno generisanje materijala pri ažuriranju artikla**: ako je opcija aktivirana, svaki put kada se izmeni red artikla na kartici *Artikli za proizvodnju* u nalogu podizvođača, postupak ponovo generiše podatke o materijalima koje je potrebno isporučiti i upotrebiti. Ti podaci unose se na poslednju karticu istog naloga.

> **Predloženi podaci o materijalima**: prikazuje pet mogućnosti za automatsko predlaganje materijala na kartici *Materijali za isporuku* u nalogu podizvođača.
>
> Dostupne su sledeće mogućnosti:
>
> 1. *Prema poslednjoj isporuci istom podizvođaču*: proverava se poslednji kreirani nalog podizvođača za istog podizvođača u kojem se nalazi isti artikal za proizvodnju.
> 2. *Razrada jednog nivoa strukture sastavnice*: proverava se sastavnica artikla unetog na kartici *Artikli za proizvodnju*.
> 3. *Isporuka istog artikla za proizvodnju*: na kartici *Materijali za isporuku* predlaže se isti artikal koji je unet na kartici *Artikli za proizvodnju*.
> 4. *Bez materijala*: na kartici *Materijali za isporuku* ne predlaže se nijedan materijal.
> 5. *Iz naloga za proizvodnju*: koristi se za naloge podizvođača generisane puštanjem planiranog naloga za podizvođača ili iz naloga za proizvodnju koji sadrži spoljnu fazu.

> **Verzija**: omogućava izbor verzije sastavnice.

#### Uzimanje u obzir raspoloživosti iz

> U ovom odeljku određuje se da li će se uzimati u obzir raspoloživost iz područja **Podizvođači**, **Proizvodnja**, **Nabavka**, **Skladište** i **Prodaja**. Svaki potvrdni okvir označava da li korisnik želi da postupak kreiranja naloga podizvođača uzima u obzir raspoloživost materijala na osnovu podataka iz odgovarajućeg područja ERP sistema.
>
> Na primer, ako korisnik aktivira samo opciju **Nabavka**, a ne i **Prodaja**, uzimaće se u obzir raspoloživost na osnovu narudžbina dobavljačima, otpremnica i ulaznih faktura, kao i zahteva za nabavku, dok se raspoloživost na osnovu narudžbina kupaca, otpremnica i izlaznih faktura neće uzimati u obzir.

#### Gotovi proizvodi

> **Predlaganje poslednje cene izvršene obrade**: ako je opcija aktivirana, u nalogu podizvođača, u polju jedinične cene obrade na kartici *Artikli za proizvodnju*, predlaže se cena iz poslednjeg naloga podizvođača izdatog istom podizvođaču za taj artikal.

> **Uzimanje u obzir količina prema ekonomičnoj količini serije** i **Uzimanje u obzir višekratnika ekonomične količine serije**: omogućava određivanje da li će se prilikom unosa artikla na karticu *Artikli za proizvodnju* u nalogu podizvođača količine artikla određivati prema ekonomičnoj količini serije i da li će se uzimati u obzir i njeni višekratnici.

**Vrsta otpremnice**: u ovom odeljku podešava se [vrsta prodajne otpremnice](/docs/configurations/tables/sales/delivery-notes-type) koja će se predlagati kao podrazumevana pri korišćenju postupka kreiranja otpremnice za isporuku podizvođaču. Ta vrsta otpremnice automatski će koristiti skladište i šablon definisane u odgovarajućim padajućim menijima u odeljku „Isporuka materijala podizvođačima” u parametrima podizvođača.

**Podrazumevana merna jedinica zapremine**: omogućava određivanje podrazumevane merne jedinice koja će se koristiti za zapremine.

**Podrazumevana merna jedinica mase**: omogućava određivanje podrazumevane merne jedinice koja će se koristiti za mase.

**Vrednovanje obrade materijala prema trošku**: omogućava određivanje da li će se obrada materijala vrednovati prema poslednjem ili prosečnom trošku. Time se određuje da li će se materijali koje koriste podizvođači obračunavati prema poslednjem ili prosečnom trošku navedenom u šifarniku artikala. Osim toga, aktiviranjem opcija **Lotovi** i/ili **Nalog za proizvodnju** moguće je predlagati poslednji ili prosečni trošak za odgovarajući lot i/ili nalog za proizvodnju, u zavisnosti od aktiviranih opcija.

#### Razduženje

> **Prikaz mreže razduženja**: ako je opcija aktivirana, u postupcima razduženja naloga putem otpremnice za isporuku ili povrata prikazivaće se mreža razduženja.

> **Prikaz hijerarhijske strukture razduženja**: ako je opcija aktivirana, u postupcima razduženja naloga putem otpremnice za isporuku ili povrata prikazivaće se hijerarhijska struktura. Obe opcije mogu biti aktivirane istovremeno.

**Obavezna šifra operatera**: ako je opcija aktivirana, određuje se da li je obavezan unos šifre operatera prilikom unosa otpremnice za isporuku podizvođaču.

**Automatsko predlaganje serijskog broja za vraćeni artikal ako postoji i kao utrošeni materijal**: prilikom povrata od podizvođača, ako je ova opcija aktivirana, sistem automatski predlaže serijski broj za artikal.

**Provera raspoloživosti**: ako je opcija aktivirana, određuje se da li će postupak proveravati raspoloživost na osnovu opcija izabranih u odeljku *Uzimanje u obzir raspoloživosti iz*.

**Obavezna raspoloživost**: ako je opcija aktivirana, onemogućava se unos materijala u naloge podizvođača ako materijal nije raspoloživ na datum eventualne isporuke podizvođaču.

**Bez materijala za isporuku**: ako je opcija aktivirana, na kartici *Materijali za isporuku* neće se predlagati nijedan artikal, bez obzira na artikle koje je potrebno proizvesti.

**Automatski ulaz/izlaz**: ako je opcija aktivirana, skladišni izlaz izvršava se automatski čim se odštampa otpremnica za isporuku. Time se preskače korak zasebnog izvršavanja izlaza za otpremnice za isporuku podizvođaču.

**Knjiženje skladišta sa datumom dokumenta**:

Za knjiženje **otpremnica za isporuku**, ako je ova opcija aktivirana, koristi se *Datum prevoza* (na kartici *Sažeci > Primalac*), ako je unet. U suprotnom se koristi datum kreiranja dokumenta naveden u zaglavlju. Ako opcija nije aktivirana, izlaz iz dokumenta uvek se izvršava sa tekućim datumom.

Za knjiženje **povrata od podizvođača**, ako je opcija aktivirana, uvek se koristi *Datum povrata* iz zaglavlja. Ako opcija nije aktivirana, knjiženje iz dokumenta izvršava se pomoću polja *Podrazumevani datum dokumenta* iz zaglavlja.

**Blokiranje unosa dokumenta neradnim danima**: ako je opcija aktivirana, onemogućava unos naloga, otpremnice i povrata od podizvođača neradnim danima.

**Provera referentnog podizvođača za artikle**: ako je opcija aktivirana, prilikom kreiranja naloga podizvođača proverava se da li je podizvođač naveden u zaglavlju naloga ujedno i preferirani dobavljač artikla unetog na kartici *Artikli za proizvodnju*.

**Obavezni lotovi i serijski brojevi**: ako je opcija aktivirana, korisnik mora da unese lot artikla u svim dokumentima, pod uslovom da se artikal vodi po lotovima ili serijskim brojevima.

**Ponovni izračun prevoza**: ovom opcijom omogućava se prenos ukupne mase, zapremine i broja paketa iz redova dokumenta na karticu *Prevoz* otpremnice. Ako opcija nije aktivirana, ova polja neće se popunjavati.

**Provera artikala pri kraju zaliha**: ako je opcija aktivirana, sistem proverava raspoloživost artikala u redovima naloga i upozorava ako je artikal označen kao artikal pri kraju zaliha, odnosno ako je u [šifarniku artikala](/docs/erp-home/registers/items/create-new-item) aktivirana opcija *Pri kraju zaliha*.

**Aktiviranje kontrole kvaliteta**: funkcionalnost je u izradi.

**Upravljanje dvema mernim jedinicama**: samo ako je ova opcija aktivirana, sistem može da upravlja alternativnom mernom jedinicom u dokumentima podizvođača.

**Automatski predlog alternativne merne jedinice**: ako je opcija aktivirana, predlaže se količina izražena u alternativnoj mernoj jedinici, pod uslovom da je u šifarniku artikala definisana podrazumevana alternativna merna jedinica. Ova opcija može se aktivirati samo ako je prethodno aktivirana opcija **Upravljanje dvema mernim jedinicama**.

**Uzimanje u obzir skladišta prema vrsti povratne otpremnice**: omogućava izbor da li će se skladišta određivati prema vrsti povratne otpremnice ili prema vrsti otpremnice za isporuku, umesto prema podešavanjima unetim u odgovarajuće padajuće menije u odeljcima *Isporuka materijala podizvođačima* i *Povrat proizvoda*.

## 2. Skladišta

#### Isporuka materijala podizvođačima – W.I.P.

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za izlaz materijala namenjenih podizvođačima kada je aktivirano upravljanje W.I.P. skladištem, koje se može uključiti u [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

U tom slučaju svi nalozi podizvođača kreirani putem postupka *Puštanje planiranih naloga* ili direktno iz naloga za proizvodnju koristiće ovo skladište i šablon za izlaz materijala navedenih na kartici [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) naloga podizvođača.

#### Isporuka materijala podizvođačima

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za izlaz materijala namenjenih podizvođačima.

Izabrano skladište predstavlja skladište iz kojeg će se izdavati materijali navedeni na kartici [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) naloga podizvođača.

Ova podešavanja koriste se samo za ručno kreirane naloge podizvođača ako je aktivirano upravljanje W.I.P. skladištem. Ako upravljanje W.I.P. skladištem nije aktivirano, primenjuju se u svim slučajevima.

#### Potrošnja utrošenih materijala

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za izlaz materijala koje su podizvođači utrošili.

Izabrano skladište predstavlja skladište iz kojeg će se izdavati materijali navedeni na kartici *Materijali* dokumenta povrata od podizvođača.

#### Ulaz materijala kod podizvođača

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za ulaz materijala namenjenih podizvođačima.

Izabrano skladište predstavlja skladište na koje će se zaprimiti materijali navedeni na kartici *Materijali za isporuku* naloga podizvođača.

Ovi podaci preuzimaju se iz protivstavke šablona definisane u tabeli šablona skladišnih kretanja, za šablon kojim se izvršava izlaz materijala namenjenih podizvođačima, odnosno za šablon izabran u odgovarajućem padajućem meniju odeljka *Isporuka materijala podizvođačima*.

#### Isporuka materijala između podizvođača

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za premeštanje materijala od jednog podizvođača drugom.

#### Povrat W.I.P. artikla

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za ulaz poluproizvoda koje su izradili podizvođači. Ova podešavanja koriste se za sve spoljne faze koje nisu poslednja faza tehnološkog postupka.

Izabrano skladište predstavlja skladište na koje će se zaprimiti artikli navedeni na kartici *Artikli* dokumenta povrata od podizvođača.

#### Povrat gotovog artikla

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za ulaz gotovih proizvoda ili poluproizvoda koje su izradili podizvođači. Ova podešavanja koriste se kada je spoljna faza poslednja faza tehnološkog postupka.

Izabrano skladište predstavlja skladište na koje će se zaprimiti artikli navedeni na kartici *Artikli* dokumenta povrata od podizvođača.

#### Vraćeni materijal

U ovom odeljku podešavaju se skladište i pripadajući šablon koji se koriste za ulaz vraćenih materijala.

Izabrano skladište predstavlja skladište na koje će se zaprimiti artikli navedeni na kartici *Utrošeni materijali* dokumenta povrata od podizvođača, kojima je dodeljena vraćena količina.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).