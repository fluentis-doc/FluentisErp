---
title: Kreiranje periodičnog zatvaranja konta
sidebar_position: 3
---

Ova procedura omogućava kreiranje novih simulacija međuperiodnog (privremenog) bilansa.

Polazni podaci uvek dolaze iz glavne knjige u trenutku kreiranja zatvaranja: program preuzima salda različitih podkonta prema parametrima definisanim u ovom obrascu. Nakon toga omogućava dodavanje svih operacija obračuna vremenskih razgraničenja, amortizacije i ručnih knjiženja kako bi se dobila simulacija bilansa sa potrebnim korekcijama i usklađivanjima. Ova operacija nema nikakav uticaj na podatke glavne knjige niti na završno godišnje zatvaranje poslovnih knjiga. Modul privremenih zatvaranja koristi potpuno odvojene tabele u odnosu na glavnu knjigu.

## Kartica *Opšte*

**Izaberi podatke po odeljenju**: Ako je opcija aktivirana, prethodno polje za izbor odeljenja postaje filter koji omogućava preuzimanje samo podataka određenog odeljenja iz knjigovodstva.

**Godina knjiženja**: Godina na koju se podaci odnose; koristi se za identifikaciju podrazumevanih konta za knjiženje korekcija i odgovarajućih računovodstvenih perioda.

**Isključi predložak**: Ako se preuzimaju podaci za celu već zatvorenu poslovnu godinu, omogućava isključivanje knjiženja zatvaranja konta kako bi se dobili podaci isključivo za poslovnu godinu.

**Područje**: Vidljivo samo u preduzećima koja koriste kontroling; ovde se bira područje analize koje će biti povezano sa obrađenim podacima.

### Odeljak za **preuzimanje finansijskih vrednosti imovine**

Aktiviranjem opcije **Preuzmi kretanja tipa imovine** (podrazumevano uključena) omogućava se filtriranje podataka. ERP će u privremeno zatvaranje uključiti i salda podkonta povezanih sa tipovima konta koji imaju aktiviranu opciju za praćenje vrednosti imovine.

Filteri za datum knjiženja i datum obračuna omogućavaju definisanje vremenskog perioda koji će se koristiti za preuzimanje imovinskih podataka iz knjiženja izabranog perioda.

:::tip Napomena
Ako zatvaranje i ponovno otvaranje konta još nisu evidentirani u knjigovodstvu, početni datum treba postaviti na datum poslednjeg evidentiranog otvaranja konta kako bi imovinski podaci bili ispravni.

U tom slučaju može se pojaviti razlika između imovinskog i ekonomskog salda tekućeg perioda, koja predstavlja dobitak ili gubitak iz prethodnog perioda koji još nije evidentiran kroz zatvaranje i ponovno otvaranje konta u glavnoj knjizi. Tokom kreiranja, Fluentis će ponuditi mogućnost knjiženja te razlike na podrazumevana konta dobiti ili gubitka.

Ako se ta opcija ne odabere, nastaje neuravnoteženo knjiženje, pa je potrebno omogućiti čuvanje neuravnoteženih unosa. Ukoliko zatvaranje ne uključuje preuzimanje imovinskih vrednosti, knjiženje privremenog zatvaranja (samo ekonomski deo) biće neuravnoteženo za iznos dobiti ili gubitka perioda.
:::

Ako zatvaranje ne uključuje preuzimanje imovinskih vrednosti, knjiženje međuperiodnog zatvaranja (samo ekonomski deo) biće neuravnoteženo za iznos dobiti ili gubitka perioda.

### Odeljak za **preuzimanje ekonomskih vrednosti**

Aktiviranjem opcije **Preuzmi kretanja ekonomskog tipa** (podrazumevano uključena) omogućava se dodatno filtriranje podataka. ERP uključuje u privremeno zatvaranje salda podkonta povezanih sa tipovima konta koji imaju status ekonomskog troška ili ekonomskog prihoda.

Filteri za datum knjiženja, datum obračuna i datum dokumenta omogućavaju definisanje vremenskog raspona koji će se koristiti za preuzimanje ekonomskih podataka.

:::tip NAPOMENA
Filter datuma dokumenta nije aktiviran podrazumevano, jer sva knjigovodstvena knjiženja ne sadrže podatak o datumu dokumenta (najčešće ga imaju samo knjiženja ulaznih i izlaznih faktura).
:::

Ako zatvaranje ne uključuje preuzimanje ekonomskih vrednosti, knjiženje privremenog zatvaranja (samo imovinski deo) biće neuravnoteženo za iznos dobiti ili gubitka perioda.

### Odeljak o **podacima za zatvaranje konta**

Ovaj odeljak sadrži elemente koji će biti povezani sa simulacijom bilansa.

**Predložak zatvaranja konta**: Koristi se za kreiranje knjiženja preuzimanja salda. Predložak mora podržavati centre troškova/profita i projekte kako bi ti elementi bili uključeni u privremeno zatvaranje.

**Datum zatvaranja**: Datum kreiranja simulacije, koji se koristi kao datum zatvaranja i svih povezanih knjiženja.

**Broj zatvaranja**: Sekvencijalni broj zatvaranja koji sistem automatski generiše.

**Opis zatvaranja**: Opis koji će biti prikazan u svim formama modula privremenog zatvaranja, bilansa i budžeta. Preporučuje se jasan opis perioda na koji se simulacija odnosi, kako bi identifikacija bila jednostavnija.

**Datum obračuna za konta prihoda/troškova (od/do)**: Ovaj period je obavezan za kreiranje privremenog zatvaranja. Označava period ekonomske pripadnosti koji će biti referenca za obračun knjiženja korekcija i integracija, za preračun amortizacije i za sve ostale povezane procedure.

Na primer, ukoliko su preuzeta knjiženja za prvo polugodište poslovne godine X i isti period je definisan kao period ekonomske pripadnosti, procedure korekcije će proveravati da li postoje knjiženja sa ekonomskom pripadnošću izvan tog polugodišta kako bi evidentirala odgovarajuća vremenska razgraničenja.

### Opcije za **zatvaranje konta**

**Zatvaranje po projektu/nalogu**: Ako je aktivirano, program će kreirati knjiženja privremenog zatvaranja za svaki projekat koji je evidentiran u izabranom periodu.

**Uključi privremena knjiženja**: Ako je aktivirano, prilikom preuzimanja podataka iz knjigovodstva uzimaju se u obzir i privremena knjiženja.

### Odeljak **Obračunate vrednosti**

Ovaj odeljak prikazuje ukupne imovinske i ekonomske vrednosti izračunate iz prvog knjiženja zatvaranja.

(Ako je aktivirana opcija **Zatvaranje po projektu/nalogu**, ovaj odeljak prikazivaće samo podatke prvog projekta ili naloga identifikovanog u posmatranom periodu.)

### Korekcije i integracije

Ovaj odeljak omogućava automatsko upravljanje relevantnim knjiženjima korekcija i integracija na kraju procesa prenosa podataka u privremeno zatvaranje.

:::note NAPOMENA
Ova vrsta usklađivanja automatski se izvršava samo za knjiženja ekonomskog karaktera povezana sa kontima kod kojih je aktivirana opcija *Usluga*.
:::

Referenca za korekcije i integracije odnosi se na **period ekonomske pripadnosti** definisan u početnim parametrima (kao i na centre troškova/profita za analitički deo).

**Automatska korekcija knjiženja**: Aktiviranjem ove opcije omogućava se sekcija za automatske korekcije.

Potrebno je definisati predložak knjiženja koji će evidentirati operaciju. Ukoliko je potrebno korigovati i knjiženja centara troškova/profita (CDC/CDP), predložak mora podržavati njihovu obradu.

Preporučena podešavanja uključuju opciju **grupisanja po knjiženju** i korišćenje **godišnjeg kalendara**.

:::tip NAPOMENA
Podkonta koja će se koristiti biće ona definisana u kontnom planu za odgovarajući konto troška ili prihoda, odnosno generičko podkonto definisano u računovodstvenim parametrima godine privremenog zatvaranja.
:::

Ova opcija automatski generiše ono što korisnik može naknadno zasebno obrađivati kroz proceduru **Zapisi usklađenja** u okviru menija privremenih zatvaranja.

**Automatski unos integracije**: Aktiviranjem ove opcije omogućava se sekcija za automatske integracije. Potrebno je definisati predložak knjiženja koji će evidentirati operaciju, kao i **datum početka ekonomske pripadnosti**.

Kako bi se integrisala i knjiženja centara troškova i profita, predložak mora podržavati njihovu obradu.

Preporučuje se korišćenje podrazumevanog podešavanja **godišnjeg kalendara**.

Aktiviranjem ove opcije program će proveravati, *počevši od* datuma početka definisanog za **integraciju knjiženja integracije**, stavke troškova i prihoda koje postoje u računovodstvu, ali nisu uključene u zatvaranje (odnosno knjiženja koja se nalaze van definisanog raspona datuma knjiženja ili ekonomske pripadnosti), kako bi kreirao vremenska razgraničenja za dane koji pripadaju periodu obuhvaćenom zatvaranjem.

:::tip NAPOMENA
Podkonta koja će biti korišćena biće ona definisana u kontnom planu za odgovarajuće konto troška ili prihoda, odnosno generičko podkonto definisano u računovodstvenim parametrima godine privremenog zatvaranja.

Ako trošak ili prihod ima period ekonomske pripadnosti koji je *u potpunosti obuhvaćen periodom zatvaranja* i nalazi se u računovodstvenom knjiženju koje u zaglavlju sadrži popunjeno podkonto, Fluentis će pretpostaviti da se radi o fakturi i koristiće podkonta preuzeta iz šifarnika kupca ili dobavljača, odnosno iz računovodstvenih parametara izabrane godine, umesto podkonta za vremenska razgraničenja.
:::

Ova opcija automatski generiše ono čime korisnik može zasebno upravljati i nakon obrade završnih salda, putem procedure *Zapisi integracije*.

:::danger VAŽNO
Posebnu pažnju treba posvetiti definisanju **datuma početka obračuna**.

Uobičajeno se ovaj datum postavlja jednako datumu poslednjeg otvaranja konta evidentiranog u računovodstvu.

Primer: Ako se kreira zatvaranje za prvo tromesečje poslovne godine, period ekonomske pripadnosti će najčešće biti od 01.01. godine X do 31.03. godine X. Ukoliko postoji ponovno otvaranje konta iz prethodne godine, u okviru tog perioda već će biti preneti troškovi i prihodi vremenskih razgraničenja iz bilansa godine X-1. U tom slučaju datum početka integracije treba postaviti na 01.01. godine X kako bi sistem proverio da li postoje knjiženja nakon 31.03. koja pripadaju prethodnom tromesečju.

**Ako ponovno otvaranje konta nije izvršeno**, datum početka treba postaviti na 01.01. godine X-1 kako bi bili uključeni i zapisi koji bi inače bili preneti kroz ponovno otvaranje konta (vremenska razgraničenja i prelazni troškovi) iz prethodne godine.
:::

:::danger PAŽNJA
Modul kontrolinga u određenim situacijama funkcioniše fleksibilnije od administrativnog modula. Naime, može automatski korigovati svaki trošak ili prihod (za kompatibilne tipove konta) i u prošlosti i u budućnosti, jer troškove i prihode raspoređuje po mesecima i automatski isključuje vrednosti koje ne pripadaju posmatranom periodu zatvaranja.

Na primer, ako je trošak evidentiran u godini X, a ekonomski pripada (delimično ili u potpunosti) godini X-1, tokom obrade perioda za završne podatke godine X sistem će uzeti u obzir samo traženi period ekonomske pripadnosti.

Posebnu pažnju treba posvetiti **upravljanju vremenskim razgraničenjima u administrativnom modulu. Preporučuje se obračun i knjiženje razgraničenja, zatvaranje i ponovno otvaranje konta izvršavati putem automatskih procedura, izbegavajući ručna knjiženja**.

Automatska procedura podrazumeva da knjiženja ponovnog otvaranja vremenskih razgraničenja imaju datum jednak izvornom knjiženju koje se koriguje, kao i ekonomsku pripadnost koja odgovara godini X-1. Na taj način izbegava se ponovno obračunavanje dodatnih korekcija u zatvaranjima godine X, jer su ispravna salda već uključena u rezultate godine X.
:::

### Odeljak Povrat amortizacije osnovnih sredstava

Odeljak **Povrat amortizacije osnovnih sredstava** omogućava automatsko evidentiranje amortizacije za period ekonomske pripadnosti kao završnu fazu unosa podataka tokom periodične obrade.

Primenjuje se ista logika kao kod procedure *Amortizacija osnovnih sredstava* iz modula Osnovna sredstva, ali samo za dane koji pripadaju ekonomskom periodu definisanom u zatvaranju.

Nakon aktiviranja obračuna potrebno je definisati predložak knjiženja koji će se koristiti i odabrati da li će se kreirati *jedinstveno zbirno knjiženje* ili pojedinačno knjiženje za svako osnovno sredstvo.

Opcija **Inkrementalne operacije**, definisana u modulu Osnovna sredstva, omogućava filtriranje kategorija osnovnih sredstava koje će biti obrađene.

Ova opcija automatski generiše ono čime korisnik može upravljati i naknadno putem procedure *Povrat amortizacije osnovnih sredstava*.

:::tip NAPOMENA
Ako u preduzeću postoje i inkrementalne i neinkrementalne kategorije osnovnih sredstava, preporučuje se korišćenje procedure *Povrat amortizacije osnovnih sredstava* kako bi se obe vrste obračuna mogle pokrenuti uzastopno.
:::

### Računovodstvo zaliha

Ovaj odeljak omogućava automatsko evidentiranje početnih i završnih zaliha za odgovarajući period kao završni korak unosa podataka u okviru periodične obrade.

Nakon aktiviranja funkcionalnosti potrebno je definisati period koji će se koristiti, vrstu zaliha koje treba obraditi (*pozitivne ili negativne*), metod obračuna troška (*prosečni trošak, poslednji trošak, FIFO na godišnjem nivou, LIFO na godišnjem nivou ili područje*), kao i predložak knjiženja koji će biti korišćen za kreiranje zapisa.

Prisustvo ili odsustvo opcije **Kontroling** utiče na način obrade:

- Ako opcija *nije aktivirana*, **FluentisERP** će kreirati knjiženja početnih i završnih zaliha na početni i završni datum perioda privremenog zatvaranja i dodati ih ostalim korektivnim knjiženjima zatvaranja.
- Ako je opcija *aktivirana*, **FluentisERP** će kreirati knjiženja početnih i završnih zaliha za svaki pojedinačni mesec u okviru perioda zatvaranja i evidentirati ih kao vanbilansna knjiženja u području povezanom sa zatvaranjem (dakle, neće biti deo samog zatvaranja već će važiti isključivo za potrebe kontrolinga).

:::tip NAPOMENA
Procedura proverava da li ovakva knjiženja već postoje i, ukoliko ih pronađe, traži potvrdu za njihovo brisanje i ponovno kreiranje ili za njihovo dopunjavanje (na primer kada se obrađuju samo određena skladišta, a ne sva skladišta, korišćenjem dostupnog filtera).

Ako je potrebno kreirati i knjiženja za kontroling i korektivna knjiženja unutar zatvaranja, proceduru je potrebno pokrenuti *najpre* sa aktiviranom opcijom **Kontroling**, a *zatim* ponoviti sa deaktiviranom opcijom.
:::

## Kartica *Parametri*

Kartica **Parametri** omogućava definisanje načina prikaza salda za određene vrste konta ili pojedinačna konta/podkonta.

Detaljnije:

**Opšte**: Ovo je podrazumevano podešavanje sistema. Sa ovom opcijom ERP izračunava dugovni ili potražni saldo, kao i ukupni saldo.

**Dugovni/Potražni**: Ovom opcijom program izračunava ukupan iznos dugovnih knjiženja, ukupan iznos potražnih knjiženja i odgovarajući završni saldo.

Polje **Referenca** odnosi se na različite opcije modela reklasifikacije u modulu *Izveštavanje > Reklasifikacije*, gde je moguće definisati prikaz samo **dugovne**, samo **potražne** ili ukupne vrednosti.

Na primer, u reklasifikaciji može biti korisno prikazati trošak (odnosno ukupan iznos dugovnih knjiženja podkonta X) i njegove korekcije (odnosno ukupan iznos potražnih knjiženja podkonta X) na dve odvojene pozicije. Na taj način dobijaju se detaljnije informacije u odnosu na jednostavan algebarski saldo tipa „dugovno – potražno“.