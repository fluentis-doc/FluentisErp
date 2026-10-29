---
title: Kategorija osnovnog sredstva
sidebar_position: 5
---

:::tip[Fast Start]
Na ovu tabelu odnosi se postupak [**Fast Start**](/docs/guide/fast-start).

Ako nameravate ručno da konfigurišete tabelu, pogledajte kontrolnu listu na povezanoj stranici.
:::

U ovoj tabeli definišu se kategorije osnovnih sredstava kojima se upravlja u preduzeću.

### Gornja tabela

**Kategorija**: alfanumerička šifra kategorije.

**Opis kategorije**: opis kategorije.

**Konto**: bilansni konto osnovnog sredstva.

**Analitički konto**: bilansni analitički konto osnovnog sredstva.

**Opis**: opis bilansnog analitičkog konta osnovnog sredstva.

**Materijalno/nematerijalno**: oznaka vrste imovine, materijalne ili nematerijalne.

**Maksimalni iznos amortizacije**: najveći iznos amortizacije koji se može obračunati za svako osnovno sredstvo u kategoriji.

**Procenat amortizacije**: najveći procenat vrednosti osnovnog sredstva koji se može amortizovati.

**Povećanja vrednosti**: ako oznaka nije aktivirana, što je podrazumevana postavka, svaki red povećanja vrednosti osnovnog sredstva obrađuje se zasebno, sa sopstvenim detaljima amortizacije. Ako je oznaka aktivirana, svako povećanje pripisuje se izvornom redu nabavke, čime se početna vrednost povećava uz zadržavanje izvornog datuma nabavke.

**Ograničenje ukupne amortizacije**: granični iznos za primenu ukupne amortizacije od 100% u godini nabavke.

**Revalorizacije**: oznaka za upravljanje detaljima revalorizacije.

**Šifra bilansa**: šifra bilansa koja se koristi za štampanje izveštaja o revalorizacijama.

**Vanbilansno upravljanje**: aktivira upravljanje vanbilansnim podacima osnovnog sredstva. To uključuje dupliranje računovodstvenih bilansnih vrednosti kako bi se omogućio zaseban vanbilansni obračun amortizacije.

**Dani**: aktiviranjem ove oznake pri obračunu amortizacije uzima se u obzir tačan broj dana posedovanja sredstva u tekućoj godini. Time se zamenjuje standardna logika prema kojoj se obračunava puni iznos amortizacije nezavisno od datuma nabavke, uz mogućnost prepolovljavanja amortizacije u prvoj godini ako je u drugoj tabeli aktivirana oznaka *Amortizacija u prvoj godini* (videti u nastavku).

**Numerisanje**: (opciono) omogućava definisanje posebnog numerisanja kartica osnovnih sredstava za svaku pojedinačnu kategoriju. Polje je povezano sa [**odgovarajućom tabelom**](/docs/configurations/tables/fluentis-numerations), u kojoj se definiše brojač. Ako brojač nije definisan, podrazumevano se nastavlja korišćenje opšteg numerisanja osnovnih sredstava, eventualno povezanog sa prefiksom ili jedinstvenim numerisanjem.

### Druga tabela

Drugi odeljak namenjen je podešavanju detalja amortizacije koji se primenjuju na odabranu kategoriju osnovnih sredstava iz gornje tabele.

**Vrsta amortizacije**: bira se vrsta amortizacije između redovne, ubrzane i usporene amortizacije. Usporena amortizacija se po pravilu ne koristi.

**Konto**: konto troška na kojem se evidentira periodična amortizacija.

**Analitički konto**: analitički konto troška na kojem se evidentira periodična amortizacija.

**Opis konta**: opis analitičkog konta troška.

**Konto ispravke vrednosti**: konto ispravke vrednosti na kojem se akumulira periodična amortizacija.

**Analitički konto ispravke vrednosti**: analitički konto ispravke vrednosti na kojem se akumulira periodična amortizacija. To može biti i isti konto na kojem se evidentira vrednost imovine, kako bi se vrednost direktno umanjivala na tom kontu.

**Opis konta**: opis analitičkog konta ispravke vrednosti.

**Isključi**: ovom oznakom odabrana vrsta amortizacije isključuje se iz automatskog obračuna amortizacije.

**Procenat**: procenat amortizacije koji se primenjuje za odabranu vrstu amortizacije.

**Broj godina**: polje je aktivno samo za ubrzanu amortizaciju, a u njega se unose tri godine tokom kojih se ona primenjuje. Za korišćena osnovna sredstva broj godina primene automatski se postavlja samo na godinu nabavke.

**Amortizacija u prvoj godini**: automatski se predlaže za sve kategorije materijalnih osnovnih sredstava. Prepolovljava procenat amortizacije u godini početka korišćenja osnovnog sredstva.

**Poreska**: može se aktivirati za redove ubrzane amortizacije kako bi se njome upravljalo kao poreskom amortizacijom koja se ne knjiži u računovodstvu.

**Vrsta poreske priznatosti**: omogućava dodeljivanje šifre poreske priznatosti odabranoj vrsti amortizacije.

**Opis poreske priznatosti**: opis vrste poreske priznatosti.

**Konto / analitički konto / opis poreski nepriznatog iznosa**: u ovo polje može se uneti računovodstveni analitički konto na kojem će se automatski knjižiti poreski nepriznati deo amortizacije. Konto se prenosi u karticu osnovnog sredstva, u red koji odgovara pripadajućem iznosu amortizacije. Da bi se iznos knjižio, i tokom knjiženja godišnje amortizacije i tokom ponovnog obračuna amortizacije pri zatvaranju privremenih konta, potrebno je aktivirati odgovarajuću oznaku. Ta oznaka može se unapred podesiti u [**parametrima osnovnih sredstava**](/docs/configurations/parameters/finance/fixed-assets-parameters).

#### Posebna dugmad

**Pretraži gornju tabelu**: omogućava pretraživanje gornje tabele prema kategoriji i opisu.

**Unesi u gornju tabelu**: omogućava unos nove kategorije osnovnih sredstava.

**Unesi u tabelu detalja**: omogućava unos detalja za odabranu kategoriju iz gornje tabele.

**Unesi u tabelu centara troška**: omogućava unos centara troška za odabranu kategoriju iz gornje tabele. ZASTARELO.

**Izbriši odabrane redove**: omogućava brisanje odabranih redova kategorija osnovnih sredstava.

**Izbriši odabrane redove iz donje tabele**: omogućava brisanje odabranih redova iz donje tabele, odnosno detalja vrste amortizacije.

**Izbriši odabrane redove iz tabele centara troška**: omogućava brisanje odabranih redova iz tabele centara troška. ZASTARELO.

**Sačuvaj**: omogućava čuvanje promena.

### TABELA CENTARA TROŠKA (UKLONJENA AKO JE U TABELI PREDUZEĆA AKTIVIRAN POTPUNI MODUL CONTROLLING, BEZ PARAMETRA ZA KORIŠĆENJE RAČUNOVODSTVENIH CENTARA)

:::note Napomena
Iako se upravljanje centrima troška za osnovna sredstva može sprovoditi primenom složenijih pravila amortizacije, korisnih za detaljnu kontrolu poslovanja, moguće je i dodeliti pojedinačni centar troška svakom osnovnom sredstvu na kartici **Detalji**. Centar troška može se dodeliti i direktno kategoriji osnovnog sredstva, ali je u tom slučaju potrebno deaktivirati oznaku za upravljanje kontrolingom u šifarniku aktivnog preduzeća. Dodeljeni centar troška vrednuje se godišnjim iznosom amortizacije obračunatim za poreske i računovodstvene potrebe.
:::

Na kartici osnovnog sredstva, u tabeli centara troška na kartici **Transakcije imovine**, moguće je za **pojedinačni red amortizacije** definisati podrazumevani procenat raspodele na centar troška za osnovna sredstva koja pripadaju toj kategoriji. Ova postavka podređena je dodeli centara troška direktno na kartici pojedinačnog osnovnog sredstva, u odeljku Detalji.

**Centar troška**: centar troška kojem se dodeljuje vrednost osnovnih sredstava iz odabrane kategorije.

**Opis**: opis centra troška.

**Procenat**: procenat vrednosti koji se dodeljuje centru troška.

### VIDEO-UPUTSTVA

:::important Pogledajte i
[**VIDEO-UPUTSTVA O TABELAMA OSNOVNIH SREDSTAVA**](/docs/video/finance/intro)
:::