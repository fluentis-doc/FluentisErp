---
title: Tipovi odbitka poreza
sidebar_position: 34
---

:::tip[Fast Start]
Na ovu tabelu odnosi se postupak [**Fast Start**](/docs/guide/fast-start).

Ako želite ručno da konfigurišete tabelu, pogledajte kontrolnu listu na povezanoj stranici.
:::

U ovoj tabeli pretražuju se i unose tipovi poreza po odbitku (*ritenuta d'acconto*) koji se povezuju sa primaocima naknada (trgovački agenti takođe su primaoci naknada), radi pravilnog vođenja računovodstvenih knjiženja i drugih povezanih poreskih obaveza.

#### Specifična polja

**Šifra poreza po odbitku**: alfanumerička šifra od 5 znakova kojom se identifikuje porez po odbitku; uobičajeno se koristi zvanična šifra poreza koju je odredilo nadležno ministarstvo.

**Opis poreza po odbitku**: opis šifre poreza po odbitku.

**[Poreska šifra](/docs/configurations/tables/finance/tax-code)**: otvara tabelu poreskih šifara. Tabela je unapred popunjena prilikom instalacije i sadrži kompletnu listu poreskih šifara predviđenih za obrazac F24.

**Računovodstveni šablon glavne knjige**: ovo je obavezno polje za knjiženje naknade u računovodstvu. Po pravilu je reč o šablonu za PDV, na primer za uobičajenu domaću nabavku u Italiji. Moguće je uneti i šablone bez PDV-a radi obrade poreza po odbitku za povremene saradnike koji nemaju identifikacioni broj za PDV.

**Tipovi poreza po odbitku za elektronsko fakturisanje**: u ovo polje moguće je uneti posebnu šifru tipa poreza po odbitku koja se koristi za izlazno elektronsko fakturisanje, odnosno kada je preduzeće koje koristi sistem obveznik poreza po odbitku koji zadržava njegov kupac, primalac robe ili naručilac usluge. Za važeće šifre pogledajte ažurirane tehničke specifikacije za elektronsko fakturisanje koje se mogu preuzeti sa veb-stranice italijanske Poreske uprave.

**Obrazac u obrascu 770**: obavezno polje. Obrazac 770 nije podržan u ovom postupku.

**Šifra plaćanja u obrascu 770**: šifra plaćanja u obrascu 770. Ovo polje nije obavezno i ne koristi se.

**Tipovi stavki**: moguće je izabrati neto ili bruto stavke. Razlika se odnosi na kreiranje rokova dospeća u neto ili bruto iznosu, nakon uključivanja svih poreza na teret primaoca naknade. Standardno podešavanje predviđa neto stavke kako bi se u evidenciji dospeća prikazao stvarni iznos koji treba platiti stručnjaku. U tom slučaju računovodstveni šablon ne sme da sadrži zabranu knjiženja neuravnoteženih stavki.

**Tip poreza po odbitku**: moguće je izabrati porez koji se obračunava kao akontacioni ili kao konačni porez. Ova razlika trenutno ne utiče na rad modula, ali je važna za obrazac CU (jedinstvena potvrda), u kojem se popunjava jedno od dva polja: *Porez po odbitku kao akontacija* ili *Porez po odbitku kao konačni porez*.

**Šifra plaćanja**: šifra plaćanja poreza po odbitku. Ovaj podatak preuzima se prilikom obrade obrasca CU (jedinstvena potvrda). Za njeno podešavanje preporučuje se konsultovanje odgovarajućih zvaničnih uputstava koja se mogu preuzeti sa veb-stranice italijanske Poreske uprave.

**Šifra ostalih iznosa koji ne podležu porezu po odbitku**: polje omogućava određivanje šifre za iznose koji ne podležu porezu po odbitku za svaki pojedinačni tip poreza. Šifra je po pravilu numerička i definisana je zvaničnim uputstvima italijanske Poreske uprave. Ako polje nije popunjeno, prilikom obrade obrasca CU u [**odgovarajućem modulu**](/docs/finance-area/declarations/declarations/withholding-tax-certification) automatski će se postaviti *šifra 21* za redove naknada primaocima unete u dokumente sa **tipom reda 4** (*Ostalo*). Ovaj tip reda može se koristiti, na primer, za troškove koje je primalac naknade unapred platio u ime klijenta, a zatim ih ponovo fakturisao klijentu.

**Obaveze prema državi**: ovo analitičko konto čuva konto obaveze koje se koristi za evidentiranje obaveze po osnovu poreza po odbitku. Konto se koristi u postupku knjiženja plaćanja. Tim knjiženjem evidentira se obaveza za porez po odbitku koju je potrebno uplatiti, jer se taj porez obračunava prema načelu blagajne. Kada se plaćanje odnosi na naknade primaocima, knjiženje je potrebno dopuniti stavkama koje se odnose na porez po odbitku i pravilno podesiti tabele modula kako bi se omogućilo štampanje potvrda o porezu po odbitku.

**Kategorija agenta**: tip agenta na osnovu kojeg se određuju procenti doprinosa instituciji Enasarco. Ako je kategorija postavljena, potrebno je uneti i prethodno navedeno analitičko konto obaveze prema instituciji Enasarco. Polje je obavezno ako je omogućeno upravljanje doprinosima Enasarco na teret preduzeća.

**Doprinos Enasarco na teret preduzeća**: ova oznaka aktivira podešavanja sledeća dva analitička konta i zahteva dodeljivanje kategorije agenta i analitičkog konta obaveze za deo doprinosa na teret agenta. Aktiviranjem ove oznake omogućava se računovodstveno evidentiranje doprinosa Enasarco putem istoimenog postupka knjiženja. Preporučuje se aktiviranje ove opcije kako bi se doprinosi evidentirali zasebno, jer se doprinos Enasarco obračunava prema načelu nastanka poslovnog događaja, a ne prema načelu blagajne kao porez po odbitku. U okviru ovog podešavanja nalaze se i sledeća polja:

**Obaveza Enasarco na teret agenta**: polje služi za podešavanje analitičkog konta obaveze na kojem će se evidentirati iznos na teret agenta. Ovo konto koristi se prilikom knjiženja plaćanja ili knjiženja doprinosa Enasarco, u zavisnosti od toga da li je omogućeno upravljanje doprinosima Enasarco na teret preduzeća. Polje je obavezno ako je postavljeno sledeće polje kategorije agenta.

**Trošak na teret preduzeća**: analitičko konto koje se koristi za računovodstveno evidentiranje troška doprinosa Enasarco na teret preduzeća.

**Obaveza na teret preduzeća**: analitičko konto koje se koristi za računovodstveno evidentiranje obaveze za doprinose Enasarco na teret preduzeća.

### Procenti

Odeljak sadrži sledeća polja (kliknite na strelicu sa desne strane odeljka):

% **Porez po odbitku**: procenat poreza po odbitku.

% **Oporezivi iznos**: procenat koji se primenjuje na osnovicu za obračun poreza po odbitku.

% **Penzijski fond**: procenat doprinosa za penzijski fond.

% **Paušalno umanjenje naknade**: polje se ne koristi.

Odeljak **INPS** omogućava aktiviranje dodatnog odeljka za poreze u okviru naknade primaocu, radi upravljanja doprinosima INPS koji se, na primer, plaćaju za projektne saradnike i slične kategorije.