---
title: Parametri podizvođača
sidebar_position: 2
tags: [Podizvođači]
---

U ovom se prozoru postavljaju svi parametri koji se odnose na upravljanje podizvođačima, a posebno na način izvršavanja skladišnih kretanja koja pokreću postupci ovog modula.

## Općenito

#### Podaci koji se predlažu u nalozima

> **Ponovno generiranje materijala pri ažuriranju artikla**: ako je opcija aktivirana, svaki put kada se izmijeni redak artikla na kartici *Artikli za proizvodnju* u nalogu podizvođača, postupak ponovno generira podatke o materijalima koje je potrebno isporučiti i upotrijebiti. Ti se podaci unose na posljednju karticu istog naloga.

> **Predloženi podaci o materijalima**: prikazuje pet mogućnosti za automatsko predlaganje materijala na kartici *Materijali za isporuku* u nalogu podizvođača.
>
> Dostupne su sljedeće mogućnosti:
>
> 1. *Prema posljednjoj isporuci istom podizvođaču*: provjerava se posljednji izrađeni nalog podizvođača za istog podizvođača u kojem se nalazi isti artikl za proizvodnju.
> 2. *Razrada jedne razine strukture sastavnice*: provjerava se sastavnica artikla unesenog na kartici *Artikli za proizvodnju*.
> 3. *Isporuka istog artikla za proizvodnju*: na kartici *Materijali za isporuku* predlaže se isti artikl koji je unesen na kartici *Artikli za proizvodnju*.
> 4. *Bez materijala*: na kartici *Materijali za isporuku* ne predlaže se nijedan materijal.
> 5. *Iz naloga za proizvodnju*: upotrebljava se za naloge podizvođača generirane puštanjem planiranog naloga za podizvođača ili iz naloga za proizvodnju koji sadrži vanjsku fazu.

> **Verzija**: omogućuje odabir verzije sastavnice.

#### Uzimanje u obzir raspoloživosti iz

> U ovom se odjeljku određuje hoće li se uzimati u obzir raspoloživost iz područja **Podizvođači**, **Proizvodnja**, **Nabava**, **Skladište** i **Prodaja**. Svaki potvrdni okvir označava želi li korisnik da postupak izrade naloga podizvođača uzima u obzir raspoloživost materijala na temelju podataka iz odgovarajućeg područja ERP sustava.
>
> Primjerice, ako korisnik aktivira samo opciju **Nabava**, a ne i **Prodaja**, uzimat će se u obzir raspoloživost na temelju narudžbi dobavljačima, otpremnica i računa nabave te zahtjeva za nabavu, dok se raspoloživost na temelju narudžbi kupaca, otpremnica i računa prodaje neće uzimati u obzir.

#### Gotovi proizvodi

> **Predlaganje posljednje cijene izvršene obrade**: ako je opcija aktivirana, u nalogu podizvođača, u polju jedinične cijene obrade na kartici *Artikli za proizvodnju*, predlaže se cijena iz posljednjeg naloga podizvođača izdanog istom podizvođaču za taj artikl.

> **Uzimanje u obzir količina prema ekonomičnoj količini serije** i **Uzimanje u obzir višekratnika ekonomične količine serije**: omogućuje određivanje hoće li se prilikom unosa artikla na karticu *Artikli za proizvodnju* u nalogu podizvođača količine artikla određivati prema ekonomičnoj količini serije i hoće li se uzimati u obzir i njezini višekratnici.

**Vrsta otpremnice**: u ovom se odjeljku postavlja [vrsta prodajne otpremnice](/docs/configurations/tables/sales/delivery-notes-type) koja će se predlagati kao zadana pri upotrebi postupka izrade otpremnice za isporuku podizvođaču. Ta će vrsta otpremnice automatski upotrebljavati skladište i predložak definirane u odgovarajućim padajućim izbornicima u odjeljku „Isporuka materijala podizvođačima” u parametrima podizvođača.

**Zadana mjerna jedinica volumena**: omogućuje određivanje zadane mjerne jedinice koja će se upotrebljavati za volumene.

**Zadana mjerna jedinica mase**: omogućuje određivanje zadane mjerne jedinice koja će se upotrebljavati za mase.

**Vrednovanje obrade materijala prema trošku**: omogućuje određivanje hoće li se obrada materijala vrednovati prema posljednjem ili prosječnom trošku. Time se određuje hoće li se materijali koje upotrebljavaju podizvođači obračunavati prema posljednjem ili prosječnom trošku navedenom u šifarniku artikla. Osim toga, aktiviranjem opcija **Lotovi** i/ili **Radni nalog za proizvodnju** moguće je predlagati posljednji ili prosječni trošak za odgovarajući lot i/ili radni nalog za proizvodnju, ovisno o aktiviranim opcijama.

#### Razduženje

> **Prikaz mreže razduženja**: ako je opcija aktivirana, u postupcima razduženja naloga putem otpremnice za isporuku ili povrata prikazivat će se mreža razduženja.

> **Prikaz hijerarhijske strukture razduženja**: ako je opcija aktivirana, u postupcima razduženja naloga putem otpremnice za isporuku ili povrata prikazivat će se hijerarhijska struktura. Obje opcije mogu biti aktivirane istodobno.

**Obvezna šifra operatera**: ako je opcija aktivirana, određuje se je li obvezan unos šifre operatera prilikom unosa otpremnice za isporuku podizvođaču.

**Automatsko predlaganje serijskog broja za vraćeni artikl ako postoji i kao utrošeni materijal**: prilikom povrata od podizvođača, ako je ova opcija aktivirana, sustav automatski predlaže serijski broj za artikl.

**Provjera raspoloživosti**: ako je opcija aktivirana, određuje se hoće li postupak provjeravati raspoloživost na temelju opcija odabranih u odjeljku *Uzimanje u obzir raspoloživosti iz*.

**Obvezna raspoloživost**: ako je opcija aktivirana, onemogućuje unos materijala u naloge podizvođača ako materijal nije raspoloživ na datum eventualne isporuke podizvođaču.

**Bez materijala za isporuku**: ako je opcija aktivirana, na kartici *Materijali za isporuku* neće se predlagati nijedan artikl, bez obzira na artikle koje je potrebno proizvesti.

**Automatski ulaz/izlaz**: ako je opcija aktivirana, skladišni izlaz automatski se izvršava čim se ispiše otpremnica za isporuku. Time se preskače korak zasebnog izvršavanja izlaza za otpremnice za isporuku podizvođaču.

**Knjiženja skladišta s datumom dokumenta**:

Za knjiženje **otpremnica za isporuku**, ako je ova opcija aktivirana, upotrebljava se *Datum prijevoza* (na kartici *Sažeci > Primatelj*), ako je unesen. U suprotnom se upotrebljava datum izrade dokumenta naveden u zaglavlju. Ako opcija nije aktivirana, izlaz se iz dokumenta uvijek izvršava s tekućim datumom.

Za knjiženje **povrata od podizvođača**, ako je opcija aktivirana, uvijek se upotrebljava *Datum povrata* iz zaglavlja. Ako opcija nije aktivirana, knjiženje iz dokumenta izvršava se s pomoću polja *Zadani datum dokumenta* iz zaglavlja.

**Blokiranje unosa dokumenta na neradne dane**: ako je opcija aktivirana, onemogućuje unos naloga, otpremnice i povrata od podizvođača na neradne dane.

**Provjera referentnog podizvođača za artikle**: ako je opcija aktivirana, prilikom izrade naloga podizvođača provjerava se je li podizvođač naveden u zaglavlju naloga ujedno i preferirani dobavljač artikla unesenog na kartici *Artikli za proizvodnju*.

**Obvezni lotovi i serijski brojevi**: ako je opcija aktivirana, korisnik mora unijeti lot artikla u svim dokumentima, pod uvjetom da se artikl vodi po lotovima ili serijskim brojevima.

**Ponovni izračun prijevoza**: ovom se opcijom omogućuje prijenos ukupne mase, volumena i broja paketa iz redaka dokumenta na karticu *Prijevoz* otpremnice. Ako opcija nije aktivirana, ta polja neće se popunjavati.

**Provjera artikala pri kraju zaliha**: ako je opcija aktivirana, sustav provjerava raspoloživost artikala u retcima naloga i upozorava ako je artikl označen kao artikl pri kraju zaliha, odnosno ako je u [šifarniku artikala](/docs/erp-home/registers/items/create-new-item) aktivirana opcija *Pri kraju zaliha*.

**Aktiviranje kontrole kvalitete**: funkcionalnost je u izradi.

**Upravljanje dvjema mjernim jedinicama**: samo ako je ova opcija aktivirana, sustav može upravljati alternativnom mjernom jedinicom u dokumentima podizvođača.

**Automatski prijedlog alternativne mjerne jedinice**: ako je opcija aktivirana, predlaže se količina izražena u alternativnoj mjernoj jedinici, pod uvjetom da je u šifarniku artikla definirana zadana alternativna mjerna jedinica. Ova se opcija može aktivirati samo ako je prethodno aktivirana opcija **Upravljanje dvjema mjernim jedinicama**.

**Uzimanje u obzir skladišta prema vrsti povratne otpremnice**: omogućuje odabir hoće li se skladišta određivati prema vrsti povratne otpremnice ili prema vrsti otpremnice za isporuku, umjesto prema postavkama unesenima u odgovarajućim padajućim izbornicima u odjeljcima *Isporuka materijala podizvođačima* i *Povrat proizvoda*.

## 2. Skladišta

#### Isporuka materijala podizvođačima – W.I.P.

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za izlaz materijala namijenjenih podizvođačima kada je aktivirano upravljanje W.I.P. skladištem, koje se može uključiti u [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

U tom slučaju svi nalozi podizvođača izrađeni putem postupka *Puštanje planiranih naloga* ili izravno iz naloga za proizvodnju upotrebljavat će ovo skladište i predložak za izlaz materijala navedenih na kartici [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) naloga podizvođača.

#### Isporuka materijala podizvođačima

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za izlaz materijala namijenjenih podizvođačima.

Odabrano skladište predstavlja skladište iz kojeg će se izdavati materijali navedeni na kartici [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) naloga podizvođača.

Ove se postavke upotrebljavaju samo za ručno izrađene naloge podizvođača ako je aktivirano upravljanje W.I.P. skladištem. Ako upravljanje W.I.P. skladištem nije aktivirano, primjenjuju se u svim slučajevima.

#### Potrošnja utrošenih materijala

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za izlaz materijala koje su podizvođači utrošili.

Odabrano skladište predstavlja skladište iz kojeg će se izdavati materijali navedeni na kartici *Materijali* dokumenta povrata od podizvođača.

#### Ulaz materijala kod podizvođača

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za ulaz materijala namijenjenih podizvođačima.

Odabrano skladište predstavlja skladište na koje će se zaprimiti materijali navedeni na kartici *Materijali za isporuku* naloga podizvođača.

Ovi se podaci preuzimaju iz protustavke predloška definirane u tablici predložaka skladišnih kretanja, za predložak kojim se izvršava izlaz materijala namijenjenih podizvođačima, odnosno za predložak odabran u odgovarajućem padajućem izborniku odjeljka *Isporuka materijala podizvođačima*.

#### Isporuka materijala između podizvođača

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za premještanje materijala od jednog podizvođača drugome.

#### Povrat W.I.P. artikla

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za ulaz poluproizvoda koje su izradili podizvođači. Ove se postavke upotrebljavaju za sve vanjske faze koje nisu posljednja faza tehnološkog postupka.

Odabrano skladište predstavlja skladište na koje će se zaprimiti artikli navedeni na kartici *Artikli* dokumenta povrata od podizvođača.

#### Povrat gotovog artikla

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za ulaz gotovih proizvoda ili poluproizvoda koje su izradili podizvođači. Ove se postavke upotrebljavaju kada je vanjska faza posljednja faza tehnološkog postupka.

Odabrano skladište predstavlja skladište na koje će se zaprimiti artikli navedeni na kartici *Artikli* dokumenta povrata od podizvođača.

#### Vraćeni materijal

U ovom se odjeljku postavljaju skladište i pripadajući predložak koji se upotrebljavaju za ulaz vraćenih materijala.

Odabrano skladište predstavlja skladište na koje će se zaprimiti artikli navedeni na kartici *Utrošeni materijali* dokumenta povrata od podizvođača, kojima je dodijeljena vraćena količina.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).