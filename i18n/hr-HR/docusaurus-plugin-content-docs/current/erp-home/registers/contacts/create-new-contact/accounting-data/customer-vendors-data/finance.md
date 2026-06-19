---
title: Administracija
sidebar_position: 2
---

U ovom obrascu nalaze se sljedeća polja:

**Valuta**: obavezno polje koje se standardno predlaže na temelju valute tvrtke, ali može biti promijenjeno kako bi se imala ta pretpostavka prilikom stvaranja dokumenata i knjigovodstvenih zapisa; 

**Stopa (šifra) PDV-a**: to je stopa PDV-a koja će se predložiti u aktivnom/pasivnom ciklusu dokumentacije i u knjigovodstvenim zapisima.

:::note VAŽNO 
Prioritet valorizacije polja [PDV](/docs/sales/sales-invoices/invoicing/sales-invoice) polja u dokumentima uključuje sljedeći redoslijed:  
1. provjera [Deklaracija namjere](/docs/finance-area/declarations/declarations/intent-declaration), ukoliko postoje, i promjena PDV broja unutar dokumenta;  
2. šifarnik kupca/dobavljač;  
3. šifarnik artikla.

Preporučljivo je procijeniti, na temelju logike prioriteta valorizacije, treba li ispuniti ovo polje u matičnim podacima kupca/dobavljača.

*Primjer*: ako se popuni polje u evidenciji intra-EU kupca s stopom PDV-a za neoporezivost, ta stopa će prevladati u dokumentima u odnosu na eventualnu redovitu stopu PDV-a unesenu u evidenciju artikala koji se fakturiraju. Ova prevlast možda nije prikladna u drugim situacijama i stoga treba uzeti u obzir.

**Vrsta knjiženja PDV-a**: ovo polje omogućuje definiranje, u kombinaciji s postavkama računovodstvenih predložaka glavne knjige, koji će se PDV podkonto za nabavu ili prodaju koristiti u knjiženjima vezanima uz predmetni subjekt. U parametrima računovodstva postoji zadana vrsta PDV knjiženja (default), koja se uglavnom koristi za porezne sustave izvan Italije.

**Vrsta knjiženja artikla**: kod knjiženja računa u Fluentisu omogućuje definiranje logike određivanja detaljnog podkonta za promet nabave ili prodaje. Na taj se način može razlikovati konto protustavke (troška ili prihoda) od kupca ili dobavljača na kojeg glasi ulazni ili izlazni račun.

*Primjer*:

U kontnom planu postoji konto **500 – Prihodi od prodaje proizvoda** sa sljedećim podkontima:

- **500-001** Prihodi od prodaje gotovih proizvoda
- **500-002** Prihodi od prodaje gotovih proizvoda unutar grupe (intercompany)
- **500-003** Prihodi od prodaje gotovih proizvoda u inozemstvu

Artikl **XYZ** u svojoj matičnoj kartici ima dodijeljenu šifru fakturiranja **A – Prihodi od prodaje gotovih proizvoda**, koja je povezana s kontom **500-001 Prihodi od prodaje gotovih proizvoda**.

Ako je kupac **001** domaći kupac, navedena postavka je dovoljna. Prilikom prodaje artikla XYZ koristit će se šifra fakturiranja **A**, a prihod će se automatski knjižiti na konto **500-001**.

Međutim, ako se prodaja obavlja:

- kupcu **002** koji pripada istoj grupi društava (*intercompany*), ili
- kupcu **003** koji je inozemni kupac,

kako korisnik ne bi morao ručno mijenjati šifru fakturiranja na svakoj stavci dokumenta (računa) radi knjiženja prihoda na odgovarajući konto, moguće je unaprijed definirati odgovarajuću postavku na samoj matičnoj kartici kupca.

Na taj način sustav automatski koristi ispravnu šifru fakturiranja i odgovarajuće konto prihoda, bez potrebe za ručnim intervencijama korisnika.

 ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image03.png)

Polje se popunjava putem padajućeg izbornika povezanog sa šifarnikom **Vrsta knjiženja artikla**. Primjerice, mogu se definirati vrste knjiženja **Intercompany** i **Inozemstvo**, uz uključenu oznaku **Kupac** kako bi bile dostupne na karticama kupaca.

Kupcu **002** dodjeljuje se vrsta knjiženja *Intercompany*, a kupcu **003** vrsta knjiženja *Inozemstvo*.

U tablici **Fakturiranje prodaje**, za stavku **A – Prihodi od prodaje gotovih proizvoda**, potrebno je definirati:
- **Intercompany** → konto **500-002 Prihodi od prodaje gotovih proizvoda unutar grupe**
- **Inozemstvo** → konto **500-003 Prihodi od prodaje gotovih proizvoda u inozemstvu**

Na taj način Fluentis automatski koristi odgovarajući konto prihoda prema vrsti kupca, bez ručnih izmjena na dokumentima.
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image04.png)

Na taj način korisnik treba samo ispravno postaviti karticu kupca, a sustav će automatski koristiti odgovarajuće konto prema odabranoj vrsti knjiženja. Prilikom knjiženja provjerava se postoji li za odabranu šifru fakturiranja posebno konto povezano s vrstom knjiženja definiranoj na kupcu.

Ista logika primjenjuje se i na dobavljače: potrebno je uključiti oznaku **Dobavljač** u šifrarniku **Vrsta knjiženja artikla** te definirati odgovarajuća konta u tablici **Promet nabave**.

**Detaljni konto za knjižene neprimljenih računa**: u ovom se polju definira bilančno podkonto (koje ima prioritet nad zadanim postavkama iz računovodstvenih parametara) koje se koristi u postupku **Knjiženje obračunatih računa**, kao i u postupcima obračuna vremenskih razgraničenja i simulacijama međuobračunskih financijskih izvještaja kada je potrebno evidentirati troškove ili prihode razdoblja. Polje je dostupno ovisno o vrsti konta:
- **Dobavljač** → primljeni računi za obračun
- **Kupac** → izdani računi za obračun

**Podkonto knjižnog odobrenja za obračun**: u ovom se polju definira bilančni podkonto (koje ima prioritet nad zadanim postavkama iz računovodstvenih parametara) koje se koristi za obračun primljenih ili izdanih odobrenja te u postupcima vremenskih razgraničenja i simulacijama financijskih izvještaja. Polje je dostupno ovisno o vrsti konta:
- **Dobavljač** → primljena odobrenja za obračun
- **Kupac** → izdana odobrenja za obračun

**Podkonto za fakturiranje**:  polje, ekskluzivno upravljano za klijentske evidencije, omogućuje definiranje podračuna koji će se koristiti za fakturiranje tijekom stvaranja računa iz dostavnih listova (DDT);

**Podkonto za fakturiranje**: polje dostupno isključivo na karticama kupaca koje omogućuje definiranje podkonta na koje će se račun nasloviti prilikom kreiranja računa iz otpremnice.

Primjer: u maloprodajnim lancima pojedina poslovnica može biti evidentirana kao kupac za isporuku robe, dok se račun izdaje na centralu društva.

Primjerice, poslovnica **X** u Sisku može imati u polju *Podkonto za fakturiranje* definiranu centralu **Y** u Zagrebu. Roba se isporučuje poslovnici X putem otpremnice, dok se račun automatski izdaje na kupca Y.

Alternativni i preporučeni pristup jest vođenje samo kartice centrale (kupac Y), dok se poslovnica X definira kao [**adresa isporuke**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery). Na taj način i otpremnica i račun glase na istog kupca, što pojednostavljuje administraciju i osigurava veću preglednost podataka.

**Detaljni konto-glavna grupa**: u analizi kreditnog rizika klijenata, omogućava spajanje klijenata koji pripadaju istoj poslovnoj grupi; 

**Detaljni konto za plaćanje dobavljaču**: ovaj podkonto povezuje se s kreiranim računovodstvenim stavkama kako bi se u izvještajima o dospijećima i simulacijama novčanog toka moglo pratiti usmjeravanje plaćanja i naplata.

**Detaljni konto predefiniranog troška**: ovaj podkonto predstavlja zadani konto glavne knjige koji se predlaže u PDV knjiženjima. Prilikom knjiženja dokumenata iz modula nabave ili prodaje, ovaj podkonto koristi se kao zadana vrijednost u slučaju da na stavkama artikala nije definiran konto prometa nabave odnosno prodaje.

Prioritet popunjavanja polja konto, podkonto i opis u sekciji **PDV stavke** računovodstvenog knjiženja
Prilikom popunjavanja polja **konto**, **podkonto** i **opis** u sekciji **PDV stavke** računovodstvenog knjiženja, sustav koristi sljedeći redoslijed prioriteta:
1. Postavke definirane u šifarnicima [Prometa prodaje](/docs/configurations/tables/sales/sales-turnover) i Prometa nabave, povezane sa šifrom fakturiranja korištenom na dokumentu koji se knjiži.
2. Podaci definirani na kartici **kupca** ili **dobavljača**.

Na taj način sustav prvo koristi specifične postavke vezane uz vrstu fakturiranja, a tek ako one nisu definirane, primjenjuje podatke iz matične kartice poslovnog partnera.

**Konto avansa**: omogućuje povezivanje posebnog podkonta predujmova s karticom kupca. Primjerice, moguće je koristiti podkonto povezan s vrstom konta vrstom konta **kupci**.

Podkonto definiran u ovom polju koristi se za knjiženje redaka tipa **6 – Račun za predujam** i **7 – Storno predujma** na izlaznim računima.

Kod izdavanja računa za predujam dokument je i dalje naslovljen na stvarnog kupca. Redak tipa **Račun za predujam** evidentira obvezu za primljeni predujam, a tijekom knjiženja iznos se automatski prenosi s općeg konta predujmova na podkonto predujma definiran za tog kupca.

Prilikom izdavanja konačnog računa, redak tipa **Storno predujma** zatvara prethodno evidentirani predujam. Knjiženjem završnog računa zatvara se saldo na kontu predujmova kupca te se istodobno poništavaju prijenosi nastali knjiženjem računa za predujam.

Na taj način saldo svakog podkonta predujmova kupca prikazuje iznos još neiskorištenih predujmova za pojedinog kupca.

:::warning[Pažnja]
Kod ove funkcionalnosti nastaju razlike između računovodstvenih knjiženja i otvorenih stavaka, stoga korištene računovodstvene šifre ne smiju zahtijevati obaveznu usklađenost (ravnotežu) otvorenih stavaka.
:::

**Alternativni trošak/Prihod prijeboja**: ova tablica omogućava prethodnu definiciju popisa konta i pripadajućih stopa PDV-a koje će se predložiti u knjiženjima PDV-a na ime subjekta; kako bi se koristila ova opciju, potrebno je postaviti zadano ‘Pozicija PDV‘ i ne unijeti nikakav predefinirani trošak/prihod od suprotnih strana;

**Bez popratnog računa**: opcija koji sprječava stvaranje popratnih računa za prodaju određenog subjekta.

**Sumirano fakturiranje**: omogućuje mogućnost grupiranja više transportnih dokumenata u jednom računu za nabavu/prodaju, prema logici grupiranja same procedure;

**Ne grupiraj po odredištu**: označava da se za subjekt u upotrebi nikada ne žele grupirati dokument po odredištu tijekom izrade izlaznih računa;

**Grupiraj po narudžbama/otpremnicama**: za subjekt, dokumenti transporta trebaju biti grupirani po narudžbama kako bi se stvorili izlazni računi;

**Izrada fakture iz Otpr/Prim**: za subjekt, dokumenti transporta trebaju biti grupirani po **narudžbi kupaca** kako bi se stvorili izlazni računi;

**Upravljanje EDI**: omogućava upravljanje EDI datotekama (trenutno onemogućena funkcionalnost);

**Intrastat/Šifra servisa**: opcija koja omogućava upravljanje intrastat prijavom za dokumente/zapise koji su na teret trenutnog subjekta; u slučaju subjekta s opcijom ‘Intrastat', moguće je navesti zadanu šifru usluge za odjeljke *quater* i *quinquies* u intrastat prijavi;

**Postotak troškova Intrastat/Znak**: označava prosječan postotak troškova koji se treba dodati/oduzeti od vrijednosti robe za izračun statističke vrijednosti u intrastat prijavi; / znak koji određuje trebaju li troškovi biti zbrojeni ili oduzeti kako bi se dobila statistička vrijednost robe u intrastat prijavi;

**Administrativna kategorija**: statistički podatak o administrativnoj kategoriji povezanoj sa subjektom;

**Komercijalna kategorija**: statistički podatak, ali i konfiguracija popusta prema kriterijima udruživanja definiranim u cjenicima prodajnog područja;

**Kategorija fakturiranja**: kriterij za filtriranje u postupku stvaranja izlaznog računa iz otpremnice;

**Odgovoran**: za analize rizika klijenata, interna osoba odgovorna za poslovanje subjekta.

*Poseban gumb*:
> **Izračunavanje popusta**: za dodjelu konfiguracije popusta (definirane u modulu *Prodaja > Cjenici prodaje*) šifarnika klijenta koji se koristi. Gumb je aktivan samo unutar šifarnika klijenta.