---
title: Administracija
sidebar_position: 2
---

U ovom obrascu nalaze se sledeća polja:

**Valuta**: obavezno polje koje se podrazumevano predlaže na osnovu valute preduzeća, ali se može promeniti kako bi se koristila kao podrazumevana vrednost prilikom kreiranja dokumenata i knjigovodstvenih knjiženja;

**PDV stopa (šifra)**: predstavlja PDV stopu koja će se predlagati u ulaznim i izlaznim dokumentima, kao i u knjigovodstvenim knjiženjima.

:::note VAŽNO
Prioritet popunjavanja polja [PDV](/docs/sales/sales-invoices/invoicing/sales-invoice) u dokumentima prati sledeći redosled:

1. provera [Izjave o nameri](/docs/finance-area/declarations/declarations/intent-declaration), ukoliko postoje, i eventualna promena PDV šifre u dokumentu;
2. šifarnik kupca/dobavljača;
3. šifarnik artikla.

Preporučuje se da se, na osnovu logike prioriteta popunjavanja, proceni da li ovo polje treba popunjavati u matičnim podacima kupca/dobavljača.

*Primer*: ukoliko se u šifarniku kupca iz EU unese PDV stopa za neoporezivi promet, ta stopa će imati prioritet u dokumentima u odnosu na redovnu PDV stopu definisanu na artiklu. Takvo ponašanje možda neće biti odgovarajuće u svim situacijama i zato ga treba pažljivo proceniti.
:::

**Vrsta PDV knjiženja**: ovo polje omogućava definisanje vrste PDV podkonta za nabavku ili prodaju koji će se koristiti u knjiženjima vezanim za konkretnog partnera, u kombinaciji sa podešavanjima knjigovodstvenih šablona glavne knjige. U parametrima računovodstva postoji podrazumevana vrsta PDV knjiženja (*default*), koja se uglavnom koristi u poreskim sistemima van Italije.

**Vrsta knjiženja artikla**: prilikom knjiženja faktura u Fluentisu omogućava definisanje logike određivanja odgovarajućeg podkonta za promet nabavke ili prodaje. Na taj način moguće je razlikovati konto troška ili prihoda u zavisnosti od kupca ili dobavljača na kojeg glasi ulazna ili izlazna faktura.

*Primer*:

U kontnom planu postoji konto **500 – Prihodi od prodaje proizvoda** sa sledećim podkontima:

- **500-001** Prihodi od prodaje gotovih proizvoda
- **500-002** Prihodi od prodaje gotovih proizvoda unutar grupe (*intercompany*)
- **500-003** Prihodi od prodaje gotovih proizvoda u inostranstvu

Artikl **XYZ** u svom šifarniku ima dodeljenu šifru fakturisanja **A – Prihodi od prodaje gotovih proizvoda**, koja je povezana sa kontom **500-001 Prihodi od prodaje gotovih proizvoda**.

Ako je kupac **001** domaći kupac, ova postavka je dovoljna. Prilikom prodaje artikla XYZ koristiće se šifra fakturisanja **A**, a prihod će se automatski knjižiti na konto **500-001**.

Međutim, ako se prodaja vrši:

- kupcu **002** koji pripada istoj grupi preduzeća (*intercompany*), ili
- kupcu **003** koji je strani kupac,

da korisnik ne bi morao ručno da menja šifru fakturisanja na svakoj stavci dokumenta radi knjiženja prihoda na odgovarajući konto, moguće je unapred definisati odgovarajuće podešavanje direktno na matičnoj kartici kupca.

Na taj način sistem automatski koristi odgovarajuću šifru fakturisanja i pripadajući konto prihoda, bez potrebe za ručnim intervencijama korisnika.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image03.png)

Polje se popunjava putem padajućeg menija povezanog sa šifarnikom **Vrsta knjiženja artikla**. Na primer, mogu se definisati vrste knjiženja **Intercompany** i **Inostranstvo**, uz aktiviranu oznaku **Kupac**, kako bi bile dostupne na karticama kupaca.

Kupcu **002** dodeljuje se vrsta knjiženja *Intercompany*, a kupcu **003** vrsta knjiženja *Inostranstvo*.

U tabeli **Fakturisanje prodaje**, za stavku **A – Prihodi od prodaje gotovih proizvoda**, potrebno je definisati:
- **Intercompany** → konto **500-002 Prihodi od prodaje gotovih proizvoda unutar grupe**
- **Inostranstvo** → konto **500-003 Prihodi od prodaje gotovih proizvoda u inostranstvu**

Na taj način Fluentis automatski koristi odgovarajući konto prihoda prema vrsti kupca, bez ručnih izmena na dokumentima.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image04.png)

Na taj način korisnik treba samo ispravno da podesi karticu kupca, a sistem će automatski koristiti odgovarajući konto prema odabranoj vrsti knjiženja. Prilikom knjiženja proverava se da li za odabranu šifru fakturisanja postoji posebno konto povezano sa vrstom knjiženja definisanom na kupcu.

Ista logika primenjuje se i na dobavljače: potrebno je uključiti oznaku **Dobavljač** u šifarniku **Vrsta knjiženja artikla** i definisati odgovarajuća konta u tabeli **Promet nabavke**.

**Detaljni konto za knjiženje nefakturisanih računa**: u ovom polju definiše se bilančni podkonto (koji ima prioritet nad podrazumevanim podešavanjima iz računovodstvenih parametara) koji se koristi u postupku **Knjiženje obračunatih računa**, kao i u postupcima obračuna vremenskih razgraničenja i simulacijama međuobračunskih finansijskih izveštaja kada je potrebno evidentirati troškove ili prihode perioda. Polje je dostupno u zavisnosti od vrste konta:

- **Dobavljač** → primljeni računi za obračun
- **Kupac** → izdati računi za obračun

**Podkonto knjižnog odobrenja za obračun**: u ovom polju definiše se bilančni podkonto (koji ima prioritet nad podrazumevanim podešavanjima iz računovodstvenih parametara) koji se koristi za obračun primljenih ili izdatih knjižnih odobrenja, kao i u postupcima vremenskih razgraničenja i simulacijama finansijskih izveštaja. Polje je dostupno u zavisnosti od vrste konta:

- **Dobavljač** → primljena knjižna odobrenja za obračun
- **Kupac** → izdata knjižna odobrenja za obračun

**Podkonto za fakturisanje**: polje dostupno isključivo na karticama kupaca koje omogućava definisanje podkonta na koji će račun biti naslovljen prilikom kreiranja računa iz otpremnice.

Primer: u maloprodajnim lancima pojedina poslovnica može biti evidentirana kao kupac za isporuku robe, dok se račun izdaje na centralu društva.

Na primer, poslovnica **X** u Sisku može imati u polju *Podkonto za fakturisanje* definisanu centralu **Y** u Zagrebu. Roba se isporučuje poslovnici X putem otpremnice, dok se račun automatski izdaje na kupca Y.

Alternativni i preporučeni pristup jeste vođenje samo kartice centrale (kupac Y), dok se poslovnica X definiše kao [**adresa isporuke**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery). Na taj način i otpremnica i račun glase na istog kupca, što pojednostavljuje administraciju i obezbeđuje veću preglednost podataka.

**Detaljni konto – glavna grupa**: u analizi kreditnog rizika kupaca omogućava povezivanje kupaca koji pripadaju istoj poslovnoj grupi;

**Detaljni konto za plaćanje dobavljaču**: ovaj podkonto povezuje se sa kreiranim knjigovodstvenim stavkama kako bi se u izveštajima o dospećima i simulacijama novčanog toka moglo pratiti usmeravanje plaćanja i naplata.

**Detaljni konto podrazumevanog troška**: ovaj podkonto predstavlja podrazumevani konto glavne knjige koji se predlaže u PDV knjiženjima. Prilikom knjiženja dokumenata iz modula nabavke ili prodaje, ovaj podkonto koristi se kao podrazumevana vrednost u slučaju da na stavkama artikala nije definisan konto prometa nabavke odnosno prodaje.

### Prioritet popunjavanja polja konto, podkonto i opis u sekciji PDV stavke računovodstvenog knjiženja

Prilikom popunjavanja polja **konto**, **podkonto** i **opis** u sekciji **PDV stavke** računovodstvenog knjiženja, sistem koristi sledeći redosled prioriteta:

1. Podešavanja definisana u šifarnicima [Prometa prodaje](/docs/configurations/tables/sales/sales-turnover) i Prometa nabavke, povezana sa šifrom fakturisanja korišćenom na dokumentu koji se knjiži.
2. Podaci definisani na kartici **kupca** ili **dobavljača**.

Na taj način sistem prvo koristi specifična podešavanja vezana za vrstu fakturisanja, a tek ukoliko ona nisu definisana, primenjuje podatke iz matične kartice poslovnog partnera.

**Konto avansa**: omogućava povezivanje posebnog podkonta avansa sa karticom kupca. Na primer, moguće je koristiti podkonto povezan sa vrstom konta **kupci**.

Podkonto definisan u ovom polju koristi se za knjiženje redova tipa **6 – Račun za avans** i **7 – Storno avansa** na izlaznim računima.

Kod izdavanja računa za avans dokument je i dalje naslovljen na stvarnog kupca. Red tipa **Račun za avans** evidentira obavezu za primljeni avans, a tokom knjiženja iznos se automatski prenosi sa opšteg konta avansa na podkonto avansa definisan za tog kupca.

Prilikom izdavanja konačnog računa, red tipa **Storno avansa** zatvara prethodno evidentirani avans. Knjiženjem završnog računa zatvara se saldo na kontu avansa kupca, a istovremeno se poništavaju prenosi nastali knjiženjem računa za avans.

Na taj način saldo svakog podkonta avansa kupca prikazuje iznos još neiskorišćenih avansa za pojedinog kupca.

:::warning[Pažnja]
Kod ove funkcionalnosti nastaju razlike između računovodstvenih knjiženja i otvorenih stavki, stoga korišćene računovodstvene šifre ne smeju zahtevati obavezno usklađivanje (ravnotežu) otvorenih stavki.
:::

**Alternativni trošak/prihod protivstavke**: ova tabela omogućava prethodnu definiciju liste konta i pripadajućih stopa PDV-a koje će biti predložene u PDV knjiženjima za dati subjekt. Da bi se koristila ova opcija, potrebno je postaviti podrazumevanu **PDV poziciju** i ne unositi nikakav podrazumevani trošak/prihod protivstavke.

**Bez pratećeg računa**: opcija koja sprečava kreiranje pratećih računa za prodaju određenom subjektu.

**Zbirno fakturisanje**: omogućava grupisanje više transportnih dokumenata u jedan ulazni/izlazni račun, prema logici grupisanja same procedure.

**Ne grupiši po odredištu**: označava da se za dati subjekt dokumenti nikada ne grupišu po odredištu prilikom kreiranja izlaznih računa.

**Grupiši po narudžbinama/otpremnicama**: za dati subjekt transportni dokumenti treba da budu grupisani po narudžbinama radi kreiranja izlaznih računa.

**Kreiranje fakture iz Otpremnice/Prijema**: za dati subjekt transportni dokumenti treba da budu grupisani po **narudžbini kupca** radi kreiranja izlaznih računa.

**EDI upravljanje**: omogućava upravljanje EDI datotekama (trenutno onemogućena funkcionalnost).

**Intrastat/Šifra usluge**: opcija koja omogućava upravljanje Intrastat prijavom za dokumente/knjiženja vezana za trenutni subjekt. Ukoliko je za subjekt aktivirana opcija **Intrastat**, moguće je definisati podrazumevanu šifru usluge za odeljke *quater* i *quinquies* Intrastat prijave.

**Procenat troškova Intrastat/Znak**: označava prosečan procenat troškova koji treba dodati ili oduzeti od vrednosti robe radi obračuna statističke vrednosti u Intrastat prijavi; znak određuje da li se troškovi sabiraju ili oduzimaju kako bi se dobila statistička vrednost robe.

**Administrativna kategorija**: statistički podatak o administrativnoj kategoriji povezanoj sa subjektom.

**Komercijalna kategorija**: statistički podatak, ali i konfiguracija popusta prema kriterijumima grupisanja definisanim u prodajnim cenovnicima.

**Kategorija fakturisanja**: kriterijum za filtriranje u postupku kreiranja izlaznih računa iz otpremnica.

**Odgovorno lice**: za potrebe analiza kreditnog rizika kupaca, predstavlja internu osobu odgovornu za poslovanje sa datim subjektom.

*Posebno dugme*:
> **Obračun popusta**: koristi se za dodelu konfiguracije popusta (definisane u modulu *Prodaja > Cenovnici prodaje*) kartici kupca koja je trenutno u upotrebi. Dugme je aktivno samo u kartici kupca.