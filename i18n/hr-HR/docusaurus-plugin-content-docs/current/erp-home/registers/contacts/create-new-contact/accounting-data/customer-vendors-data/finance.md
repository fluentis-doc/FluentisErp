---
title: Administracija
sidebar_position: 2
---

U ovom obrascu nalaze se sljedeća polja:

**Valuta**: obavezno polje koje se standardno predlaže na temelju valute tvrtke, ali može biti promijenjeno kako bi se imala ta pretpostavka prilikom stvaranja dokumenata i knjigovodstvenih zapisa; 

**Stopa PDV-a**: to je stopa PDV-a koja će se predložiti u aktivnom/pasivnom ciklusu dokumentacije i u knjigovodstvenim zapisima.

:::note VAŽNO 
Prioritet valorizacije polja [PDV](/docs/sales/sales-invoices/invoicing/items) polja u dokumentima uključuje sljedeći redoslijed:  
1. provjera [Deklaracija namjere](/docs/finance-area/declarations/declarations/intent-declaration), ukoliko postoje, i promjena PDV broja unutar dokumenta;  
2. šifarnik kupca/dobavljač;  
3. šifarnik artikla.

Preporučljivo je procijeniti, na temelju logike prioriteta valorizacije, treba li ispuniti ovo polje u matičnim podacima kupca/dobavljača.

*Primjer*: ako popunim polje u evidenciji intra-EU kupca s stopom PDV-a za neoporezivost, ta stopa će prevladati u dokumentima u odnosu na eventualnu redovitu stopu PDV-a unesenu u evidenciju artikala koji se fakturiraju. Ova prevlast možda nije prikladna u drugim situacijama i stoga treba uzeti u obzir.

**Tipo rač. PDV-a**: ovo polje omogućuje definiranje, u kombinaciji s postavkama općih knjiženja, koji će se PDV podračun za kupnju/prodaju koristiti u zapisima povezanim s subjektom koji je trenutno u uporabi. Postoji zadani tip rač. PDV-a unutar računskih parametara; (uglavnom se koristi za poreze koji NISU talijanski).

**Tip rač. članka**: za knjiženje računa u **Fluentisu**, omogućuje definiranje logike valorizacije detaljnog podračuna za kupovinu/prodaju razlikujući kontraporavnanje (trošak/prihod) u odnosu na kupca/dobavljača koji je primatelj računa o kupnji ili prodaji.

*Primjer*:

U kontnom planu imam račun 500 Prodaja proizvoda koji ima sljedeća podkonta:

500-001 Prihodi od gotovih proizvoda

500-002 Međusobni prihodi od gotovih proizvoda

500-003 Strani prihodi od gotovih proizvoda

Artikal XYZ ima prihod od prodaje  ‘A – Prihodi od gotovih proizvoda' u evidenciji, koji je povezan s računom 500-001 Prihodi od gotovih proizvoda.

Ako je moj kupac s kodom 001 talijanski, postavka je zadovoljavajuća, redak prodaje članka *XYZ* s prihodom od prodaje ‘A', a zatim knjiženje prihoda na odgovarajući račun.

Ali ako je prodaja klijentu s kodom 002 Intercompany ili klijentu s kodom 003 inozemni, kako bi se izbjeglo da korisnik svaki put mora pamtiti promjenu prihoda od prodaje (u B ili C) na svim redovima dokumenta (faktura) kako bi knjižili dokument na odgovarajući račun, moguće je definirati ispravnu valorizaciju za dotičnu evidenciju, koja će prevladati nad općom postavkom.

 ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image03.png)

Ispunjavanje polja vrši se putem kombiniranog okvira povezanog s tablicom [Vrsta stavke knjiženja:](/docs/configurations/tables/finance/articles-accounting-types) u ovoj tablici stvorit ćemo, na primjer, vrstu knjiženja s kodom 1 ‘Intercompany' i vrstu knjiženja s kodom 2 ‘Inozemstvo', te ćemo postaviti zastavu‘Kupac' na oba tako da ova dva zapisa budu vidljiva u evidenciji kupaca. Dakle, u evidenciji klijenta s kodom 002 postavit ćemo vrstu knjiženja s kodom 1 'Intercompany' a kod klijenta s kodom 003, postavit ćemo vrstu knjiženja s kodom 2 ‘Inozemstvo'.

Nakon toga će biti potrebno unijeti u tablicu [Promet prodaje,](/docs/configurations/tables/sales/sales-turnover) u odgovarajućem retku 'A - Prihodi od gotovih proizvoda' (u donjoj grid)

- redak vrste knjiženja ‘Intercompany' i račun 400-001 Prihodi intercompany od gotovih proizvoda;

- redak vrste knjiženja ‘Inozemstvo' i račun 400-002 Prihodi iz inozemstva od gotovih proizvoda.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image04.png)

Na ovaj način, korisnik će naknadno morati postaviti samo evidenciju, a postavke će automatski valorizirati odgovarajući podračun; knjiženje će provjeriti za svaki unos prihoda od prodaje u fakturi postoji li pojedinosti s određenim računom za vrstu koja je unesena kod klijenta.

Isto tako, postavke djeluju na strani dobavljača, postavljanjem flag *Dobavljači* u tablici [Vrsta stavke knjiženja](/docs/configurations/tables/finance/articles-accounting-types) i ažuriranjem tablice **Promet nabave**.


**Detaljni konto za račune koji se očekuju**: u ovom polju navedite podračun u imovini (prioritetan u odnosu na zadano unesen u računskim parametrima) koji će se koristiti u postupku područja kupovine **Kontabilizacija računa koji se trebaju platiti** (trenutno onemogućena funkcionalnost).


**Detaljni konto za fakturiranje**:  polje, ekskluzivno upravljano za klijentske evidencije, omogućuje definiranje podračuna koji će se koristiti za fakturiranje tijekom stvaranja računa iz dostavnih listova (DDT);

*Primjer*: razmislimo o veleprodaji. 

Klijent X, poslovnica sa sjedištem u Sacileu, koji je u svojoj evidenciji ispunio podračun za fakturiranje = klijent Y (matična tvrtka) sa sjedištem u Milanu. 

Naša tvrtka dostavlja s DDT-om u trgovinu X u Sacileu, a zatim, kada izda račun, taj se račun upućuje matičnoj tvrtki klijenta Y u Milanu.

Metoda alternativna (preporučena) sastoji se uvijek upravljanju šifarnikom klijenta Y, matična tvrtka u Milanu, i u njezinom šifarnikom kodiranje ** [odredišta robe](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) ** = klijent X, trgovina u Sacileu. Na taj način dostavni listovi (DDT) i računi su upućeni istom subjektu s većom jasnoćom.

**Detaljni konto-glavna grupa**: u analizi kreditnog rizika klijenata, omogućava spajanje klijenata koji pripadaju istoj poslovnoj grupi; 

**Podračun plaćanja (Plć. Dobav.)**: ovaj podračun se povezuje s knjigovodstvenim stavkama kako bi se mogla provjeriti usmjeravanje plaćanja/inkasa u ispisima kalendara dospijeća i simulacijama novčanog tijeka;  

**Prijeboj konta troška**: ovo je podračun koji se preporučuje kao zadano u zapisima industrijskog računovodstva (POLJE ZASTARJELO, PRISUTNO ZBOG RETROKOMPATIBILNOSTI);

**Trošak/Prihod od unaprijed određenih suprotnih strana**: ovo je podračun opće knjige koji se zadano predlaže u knjiženjima knjigovodstva PDV-a; u slučaju knjiženja dokumenata iz kupnje/prodaje, ovaj podračun je zadana vrijednost koja se koristi ako nije unesen iznos kupnje/prodaje u redove artikala;


*Prioritet valorizacije* polja račun, podračun, opis u odjeljku **Podaci PDV-a** dokumenta u **Računovodstvenom Zapisu**:  
1. Vrednovanje [Prometa od Prodaje](/docs/configurations/tables/sales/sales-turnover)/ **Prometa od Nabave** prisutnog na fakturi koji se obračunava i šifre računa, podračuna i opisa povezanog sa svakom vrstom u tablicama Promet od nabave / Promet od prodaje.    
2. Šifarnik o Kupcu/Dobavljaču 

**Alternativni trošak/Prihod od suprotnih strana**: ovaj grid omogućava prethodnu definiciju popisa podračuna i pripadajućih stopa PDV-a koje će se predložiti u knjiženjima PDV-a na ime subjekta; kako biste koristili ovu opciju, potrebno je postaviti zadano ‘Pozicija PDV‘ i ne unijeti nikakav predefinirani trošak/prhod od suprotnih strana;

**Bez popratnog računa**: flag koji sprječava stvaranje pratnih računa za prodaju određenog subjekta.

**Sumirano fakturiranje**: omogućuje mogućnost grupiranja više transportnih dokumenata u jednom računu za kupnju/prodaju, prema logici grupiranja same procedure;

**Ne grupiraj po odredištu**: označava da se za subjekt u upotrebi nikada ne želi grupirati DDT po odredištu tijekom izrade računa za prodaju;

**Grupiraj po narudžbama prodaje**: za subjekt, DDT-ovi transporta trebaju biti grupirani po narudžbi prodaje kako bi se stvorili računi za prodaju;

**Izrada fakture iz Otpr/Prim za Nar. Kl.**: za subjekt, DDT-ovi transporta trebaju biti grupirani po  **narudžbi kupaca** kako bi se stvorili računi za prodaju;

**Upravljanje EDI**: omogućava upravljanje EDI datotekama (trenutno onemogućena funkcionalnost);

**Intrastat/Kod. Usluge**: flag koja omogućava upravljanje intrastatnom prijavom za dokumente/zapise koji su na teret trenutnog subjekta; u slučaju subjekta s flagom ‘Intrastat', moguće je navesti zadani kod usluge za odjeljke quater i quinquies u intrastat prijavi;

**Postotak troškova Intrastat/Znak**: označava prosječan postotak troškova koji se treba dodati/oduzeti od vrijednosti robe za izračun statističke vrijednosti u intrastat prijavi; / znak koji određuje trebaju li troškovi biti zbrojeni ili oduzeti kako bi se dobila statistička vrijednost robe u intrastat prijavi;

**Administrativna kategorija**: statistički podatak o administrativnoj kategoriji povezanoj sa subjektom;

**Komercijalna kategorija**: statistički podatak, ali i konfiguracija popusta prema kriterijima udruživanja definiranim u cjenovnicima prodajnog područja;

**Kategorija fakturiranja**: kriterij za filtriranje u postupku stvaranja računa prodaje iz DDT-a;

**Odgovorna osoba**: za analize rizika klijenata, interna osoba odgovorna za poslovanje subjekta.

*Poseban gumb*:
> **Izračun popusta**: za dodjelu konfiguracije popusta (definirane u modulu *Prodaja > Cjenici prodaje*) šifarnika klijenta koji se koristi. Gumb je **aktivan** **samo** unutar šifarnika klijenta.