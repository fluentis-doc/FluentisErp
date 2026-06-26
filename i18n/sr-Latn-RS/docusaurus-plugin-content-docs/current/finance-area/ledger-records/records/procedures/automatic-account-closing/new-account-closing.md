---
title: Novo automatsko zatvaranje
sidebar_position: 2
---

Procedura automatskog zatvaranja konta upravlja zatvaranjem poslovnih knjiga i naknadnim ponovnim otvaranjem konta. Postupak generiše isključivo računovodstvena knjiženja i nema uticaja na originalna knjiženja u glavnoj knjizi.

Obrazac se sastoji od više kartica i zajedničkog zaglavlja u kojem se unose osnovni podaci, kao što su datum zatvaranja i opis.

## Obavezna polja

Prilikom kreiranja novog zatvaranja automatski se predlažu datum zatvaranja (tekući datum) i broj verzije (redni broj), ali ih je moguće izmeniti.

Pre nego što se zapis sačuva, potrebno je uneti opis i **popuniti sva obavezna polja na kartici Parametri**.

Čuvanje zapisa omogućava korišćenje funkcija na alatnoj traci:

- **Vrati vrednosti podkonta**
- **Kreiraj knjiženje zatvaranja konta**

## Parametri

Na kartici **Parametri** potrebno je definisati:

- kriterijume za izbor računovodstvenih knjiženja koja će biti uključena u zatvaranje. **Datumi knjiženja** i **datumi obračuna** određuju koja će knjiženja biti uključena u obračun salda. Datumi obračuna uobičajeno odgovaraju poslovnoj godini (01.01.–31.12.), dok se krajnji datum knjiženja po potrebi može pomeriti u narednu godinu radi uključivanja korektivnih knjiženja. **Preporuka je da se filter po datumu knjiženja ne koristi.**

- podkonta, tip knjiženja, datum knjiženja i datum obračuna koji će biti korišćeni za knjiženja zatvaranja glavne knjige. Ove vrednosti (osim datuma knjiženja) automatski se preuzimaju iz **[Parametara računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**, kartica **Računi**.

- (opciono) istovremeno automatsko ponovno otvaranje konta, umesto pokretanja zasebne procedure **[Automatsko otvaranje konta](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new)**.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab/image01.png)

**Godina knjiženja**: preuzima odgovarajuću godinu iz **[Parametara računovodstva](/docs/configurations/parameters/finance/accounting-parameters)** i koristi se za upravljanje ponovnim otvaranjem knjiženja usklađenja, koje se aktivira opcijom **Žiro račun – knjiženja usklađenja**.

Ova opcija omogućava ponovno knjiženje aktivnih i pasivnih vremenskih razgraničenja nakon ponovnog otvaranja konta, pod uslovom da su prethodno obrađena procedurom **[Knjiženja usklađenja](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**.

Aktivna i pasivna vremenska razgraničenja (*risconti*) knjiže se sa datumom ponovnog otvaranja konta, dok se obračunati prihodi i rashodi (*ratei*) knjiže sa datumom izvornog dokumenta.

**Opcija Upravljanje saldom (zatvaranje i ponovno otvaranje) za knjiženja u valuti**: kada je aktivirana, program generiše poseban red za svaku valutu u kojoj postoji stanje podkonta, uz istovremeno očuvanje ispravnog ukupnog iznosa u valuti kompanije. Ova opcija je neophodna za ispravan prikaz početnih salda u izveštaju **Izvod računa u valuti**.

:::danger UPOZORENJE
Pre pokretanja obračuna potrebno je proveriti podešavanja u tabeli **[Tipovi konta](/docs/configurations/tables/finance/account-types)**.

Posebno je važno da tipovi konta za kupce, dobavljače, agente i banke, osim odgovarajućih oznaka za vrstu konta, imaju uključenu i oznaku koja ih svrstava u **Aktivu** ili **Pasivu**.
:::

Nakon toga može se pokrenuti funkcija **Vrati vrednosti podkonta**, kojom program obračunava saldo svakog podkonta i prikazuje rezultate na karticama **Dobit i gubitak** i **Bilans stanja**.

Kada su rezultati provereni, potrebno je vratiti se na karticu **Parametri** i pokrenuti funkciju **Kreiraj knjiženje zatvaranja konta**, čime se automatski kreiraju odgovarajuća računovodstvena knjiženja i zapis dobija status **Proknjiženo**.

:::note NAPOMENA
Ako je aktivirana opcija **Žiro račun – knjiženja usklađenja**, nakon izvršavanja funkcije **Vrati vrednosti podkonta** biće prikazana dodatna kartica **[Ponovno otvaranje knjiženja usklađenja](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**.
:::

### Funkcije

> **Sačuvaj**: čuva zaglavlje zatvaranja konta nakon unosa opisa.  
> **Vrati vrednosti podkonta**: obračunava saldo svih podkonta i prikazuje rezultate na karticama **Dobit i gubitak** i **Bilans stanja**.  
> **Kreiraj knjiženje zatvaranja konta**: generiše računovodstveno knjiženje zatvaranja konta.  
> **Poništi knjiženje**: stornira i uklanja prethodno generisano knjiženje zatvaranja konta.

### Dobit i gubitak

Na kartici **Dobit i gubitak** prikazani su pozitivni i negativni elementi prihoda, zajedno s rezultatom poslovanja. Moguće je filtrirati konta prikazana u obe sekcije.

Pozitivni i negativni elementi prihoda mogu se filtrirati pomoću polja **Analitičko konto rashoda**, **Analitičko konto prihoda** i odgovarajućih dugmadi za pretragu na alatnoj traci (vidi tabelu ispod).

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/profit-and-loss-tab/image01.png)

#### Specifične funkcije

> **Pretraga konta prihoda**: omogućava pretragu željenih konta prihoda unutar zatvaranja konta.  
> **Pretraga konta rashoda**: omogućava pretragu željenih konta rashoda unutar zatvaranja konta.

### Bilans stanja

Na kartici **Bilans stanja** prikazani su elementi aktive i pasive zajedno sa rezultatom poslovanja. Kao i na kartici **[Dobit i gubitak](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**, moguće je filtrirati konta prikazana u donjim sekcijama korišćenjem odgovarajućih polja i dugmadi za pretragu na alatnoj traci.

#### Specifične funkcije

> **Pretraga aktive**: omogućava pretragu željenih konta aktive unutar zatvaranja konta.  
> **Pretraga pasive**: omogućava pretragu željenih konta pasive unutar zatvaranja konta.

### Knjiženja

Generisana knjiženja mogu se otvoriti dvostrukim klikom.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image01.png)

#### Prvi pregled

- prvo knjiženje zatvara konta prihoda;
- drugo knjiženje zatvara konta rashoda;
- treće knjiženje evidentira dobit ili gubitak zatvaranjem odgovarajućih konta.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image02.png)

#### Drugi pregled

- četvrto knjiženje zatvara konta obaveza;
- peto knjiženje zatvara konta aktive, uključujući konto dobiti ili gubitka.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image03.png)

#### Treći pregled

Prikazana su tri knjiženja ponovnog otvaranja:
- prvo otvara konta obaveza;
- drugo otvara konta aktive;
- treće prenosi rezultat tekuće poslovne godine na konto dobiti ili gubitka prethodne godine.

:::note NAPOMENA

Naknadno uočene greške mogu se ispraviti na jedan od sledećih načina:

- moguće je direktno obrisati izvršeno zatvaranje konta i, na zahtev programa, obrisati i povezana knjiženja, nakon čega se postupak može ponovo pokrenuti od početka;

- kao alternativu, moguće je koristiti funkciju **Poništi knjiženje**, koja se nalazi na kartici **Parametri**.
:::

Postoje posebna korisnička ovlašćenja za knjiženje i poništavanje knjiženja.

:::danger PAŽNJA
Zatvaranje konta blokira sva knjiženja unutar definisanog datumskog raspona. Nakon izvršenog zatvaranja nije moguće unositi nova knjiženja u tom periodu.

**Vanbilansna konta** nikada nisu obuhvaćena postupkom zatvaranja i ponovnog otvaranja konta.
:::

### Ponovno otvaranje knjiženja usklađenja

Na ovoj kartici prikazan je rezultat opcije za automatski prenos knjiženja usklađenja nakon ponovnog otvaranja konta.

Kada je ova opcija aktivna, aplikacija će evidentirati storno vremenskih razgraničenja na datum ponovnog otvaranja konta, **dok će knjiženja obračunatih prihoda i rashoda biti preneta sa datumom izvornog knjiženja usklađenja.**

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image01.png)

Dvostrukim klikom na pojedinačni red moguće je otvoriti detalje generisanih knjiženja.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image02.png)

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image03.png)

:::tip INFO
Generisanje knjiženja za ponovno otvaranje obračunatih prihoda i rashoda sa datumom izvornog knjiženja neophodno je kako bi se omogućio ispravan obračun međuperiodnih zatvaranja u Fluentis ERP-u.

Na primer, ako je 15.04.2023. proknjižen trošak za obračunski period od **01.11.2022. do 31.03.2023.**, na datum **31.12.2022.** biće evidentiran obračun za dva meseca.

Ako bi se storno obračuna knjižio na **01.01.**, rezultat bi zavisio od načina filtriranja obračunskih perioda tokom međugodišnjih zatvaranja, pa postoji mogućnost da se u izveštajima prikaže samo storno troška (odnosno ponovno otvaranje obračuna), bez odgovarajućeg troška.

Suprotno tome, ako se storno knjiži istog dana kada i originalni račun, oba knjiženja će uvek biti obrađena zajedno, bez obzira na način filtriranja podataka za međuperiodna zatvaranja. Time se postiže očekivani računovodstveni rezultat, odnosno neutralan efekat na bilans, jer je trošak već pravilno raspoređen na prethodnu poslovnu godinu.
:::