---
title: Kreiranje usklađenja
sidebar_position: 2
---

Ova procedura omogućava obračun i knjiženje **vremenskih razgraničenja** (aktivnih i pasivnih) koja se odnose na računovodstvena knjiženja evidentirana u bazi podataka.
Tipični primeri su razgraničenja troškova i prihoda za osiguranje, zakup, lizing ili ugovore o održavanju, kada se period na koji se odnose proteže kroz dve poslovne godine. U skladu sa računovodstvenim principima, takve stavke podležu obračunu vremenskih razgraničenja.

## Preduslovi za korišćenje procedure

1. U tabeli **[Tipovi konta](/docs/configurations/tables/finance/account-types)** potrebno je definisati ekonomske tipove konta (na primer *Za razgraničenje*) sa uključenom opcijom **Usluga**.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image01.png)

Obračun će biti izvršen **isključivo** za podkonta kojima je u kontnom planu dodeljen ovaj tip konta.

2. U **[Parametrima knjiženja](/docs/configurations/parameters/finance/accounting-parameters)** potrebno je definisati podrazumevana podkonta za aktivna i pasivna vremenska razgraničenja.

:::note NAPOMENA
Na nivou kontnog plana moguće je definisati posebna podkonta vremenskih razgraničenja za pojedina konta rashoda ili prihoda. Takva podkonta imaju prioritet prilikom kreiranja knjiženja razgraničenja.
:::

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image02.png)

3. Potrebno je pravilno koristiti period važenja u računovodstvenim knjiženjima.

:::note NAPOMENA
Preporučuje se da se u **[Parametrima unosa](/docs/finance-area/ledger-records/records/ledger-record)** aktivira opcija **Bez datuma za servisni tip konta**, kako bi korisnik bio obavezan da za svako knjiženje unese period na koji se knjiženje odnosi.
:::

## Rad sa procedurom

### Postupak

- odabrati obračunski period za koji se vrši obračun i datum obračuna (podrazumevano se predlaže današnji datum);
- definisati datum knjiženja i datum obračuna koji će biti dodeljeni novim knjiženjima;
- izabrati šablone knjiženja koji će se koristiti za aktivna i pasivna vremenska razgraničenja.

Opcija **Pojedinačno knjiženje** određuje da li će sva razgraničenja biti objedinjena u jedno knjiženje za aktivna i jedno za pasivna razgraničenja.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image01.png)

Nakon čuvanja podešavanja, pritiskom na dugme **Izračunaj** popunjava se donji pregled sa predloženim obračunima. Za svaki red prikazuju se:
- vrsta knjiženja;
- referenca na izvorno knjiženje;
- broj dana razgraničenja;
- obračunati iznos;
- podkonto.

Po potrebi moguće je ručno izmeniti iznos i podkonto.
Ako izabrani šabloni knjiženja podržavaju rad sa centrima troška ili profitnim centrima, a izvorno knjiženje sadrži odgovarajuće podatke, u donjem delu obrasca biće prikazani i detalji raspodele. Sledeći korak je potvrda svakog obračuna označavanjem opcije **Kontrolisano**. Tek nakon potvrde omogućene su eventualne izmene i kontrola raspodele po centrima troška ili profitnim centrima.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image04.png)

Sve stavke označene kao **Kontrolisano** biće obuhvaćene računovodstvenim knjiženjem koje se izvršava pritiskom na dugme **Knjiži**.
Korisnik može kreirati više knjiženja, ponovo pokrenuti obračun radi uključivanja novih računovodstvenih knjiženja ili generisati dodatna vremenska razgraničenja za novonastale transakcije.
Na raspolaganju je i **[kartica za poništavanje](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**, koja omogućava vraćanje prethodnog stanja.

:::note NAPOMENA
Biće proknjižene sve stavke kod kojih je aktivirana opcija **Kontrolisano**.
:::

U slučaju da su računovodstvena knjiženja izmenjena nakon pokretanja obračuna, preporučuje se korišćenje opcije **Proveri obračun usklađenja**.
Ova funkcija ponovo obračunava svaku stavku pojedinačno i prikazuje eventualne razlike u odnosu na već predložene vrednosti, naročito u poljima **Usklađenje duguje/potražuje** i **Novo usklađenje duguje/potražuje**. Korisnik zatim može prihvatiti usklađivanje razlika ili ih zanemariti.
Funkcija će takođe ukloniti stavke razgraničenja koje se odnose na računovodstvena knjiženja koja više ne postoje. Knjiženje neće biti moguće ukoliko postoje stavke koje upućuju na nepostojeća knjiženja. U tom slučaju potrebno je otvoriti ovaj obrazac i ukloniti takve stavke.

:::danger PAŽNJA
Ako su usklađenja već proknjižena, ne postoji zabrana izmene izvornog računovodstvenog knjiženja koje je dovelo do razgraničenja. Jedina zabrana odnosi se na brisanje tog knjiženja, što nije dozvoljeno.

Zbog toga se preporučuje poseban oprez prilikom izmene knjiženja koja učestvuju u postupcima godišnjih usklađenja.
:::

:::note NAPOMENA
U okviru procedure **[Automatsko zatvaranje konta](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)** dostupna je opcija za automatski prenos knjiženja usklađenja nakon ponovnog otvaranja konta.
Kada je ova opcija aktivna, aplikacija će na datum ponovnog otvaranja automatski proknjižiti storno aktivnih i pasivnih vremenskih razgraničenja, dok će knjiženja obračuna biti preneta sa datumom izvornog knjiženja usklađenja.
:::

**Opcija Pojedinačno knjiženje:** kada je uključena, sva knjiženja usklađenja biće objedinjena u jedno knjiženje (jedan broj knjiženja), umesto da se za svako razgraničenje kreira posebno knjiženje.

Prilikom ponovnog otvaranja konta, prenos aktivnih i pasivnih vremenskih razgraničenja pratiće isto podešavanje.

## UPRAVLJANJE FAKTURAMA KOJE TREBA PRIMITI

U ovom odeljku opisano je automatsko upravljanje fakturama koje treba primiti, odnosno obračunima koji se evidentiraju na kraju poslovne godine kada će rashod ili prihod biti proknjižen tek u narednoj poslovnoj godini.
Softver automatski prepoznaje ovakve situacije i koristi odgovarajuće konto definisano u opštim računovodstvenim parametrima.
Takođe je moguće definisati posebno konto za svakog pojedinačnog dobavljača ili kupca.
Na isti način moguće je definisati posebno konto i za ostala aktivna ili pasivna vremenska razgraničenja, povezivanjem posebnog konta sa odgovarajućim kontom rashoda ili prihoda direktno u kontnom planu.

### Standardna situacija BEZ POSEBNIH PODEŠAVANJA ZA DOBAVLJAČA

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image08.png)

### I BEZ POSEBNOG KONTA NA KONTU RASHODA

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image09.png)

### PODEŠAVANJA SU DEFINISANA ISKLJUČIVO U PARAMETRIMA RAČUNOVODSTVA

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image10.png)

**SLUČAJ 1: knjiženje u godini X, a obračun u celosti pripada godini X+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image11.png)

**SLUČAJ 2: knjiženje u godini Y, a obračun u celosti pripada godini Y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image12.png)

**SLUČAJ 3: knjiženje u godini X, a obračunsko razdoblje prelazi iz godine X u godinu X+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**SLUČAJ 4: knjiženje u godini Y, a obračunsko razdoblje prelazi iz godine Y u godinu Y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

## REZULTATI

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image15.png)

- **Redak 1** predstavlja vremensko razgraničenje za **slučaj 1**, u kojem je cjelokupan trošak knjižen u godini **X**, a odnosi se na obračunsko razdoblje godine **X+1**. Fluentis koristi konto **Obračunati troškovi** definiran u parametrima računovodstva.

- **Redak 2** predstavlja obračun za **slučaj 2**, u kojem je cjelokupan trošak knjižen u godini **Y**, a odnosi se na obračunsko razdoblje godine **Y-1**. Fluentis koristi konto **Računi za primitak** definiran u parametrima računovodstva.

- **Redak 3** predstavlja vremensko razgraničenje za **slučaj 3**, u kojem je trošak knjižen u godini **X**, ali se samo djelomično odnosi na obračunsko razdoblje godine **X+1**. Fluentis koristi konto **Obračunati troškovi** definiran u parametrima računovodstva.

- **Redak 4** predstavlja obračun za **slučaj 4**, u kojem je trošak knjižen u godini **Y**, ali se samo djelomično odnosi na obračunsko razdoblje godine **Y-1**. Fluentis također koristi konto **Obračunati troškovi** definiran u parametrima računovodstva.

## S POSEBNIM POSTAVKAMA ZA DOBAVLJAČA ILI KONTO

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image16.png)

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image17.png)

## REZULTAT

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image18.png)

Umjesto zadanih podkonta definiranih u parametrima računovodstva, koriste se posebno definirana podkonta preuzeta s konta troška ili iz podataka dobavljača.

## Kartica **Povrati**

Završna kartica **Povrati** omogućuje pregled svih izvršenih knjiženja usklađenja te njihovo poništavanje pomoću odgovarajuće funkcije.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/restore-tab/image01.png)

Prije pokretanja postupka poništavanja moguće je koristiti filtre prema **kontu/podkontu**, kao i odgovarajuće opcije za prikaz isključivo knjiženja obračuna ili isključivo knjiženja vremenskih razgraničenja.