---
title: Tipovi odbitka poreza
sidebar_position: 34
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako tablicu želite konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

U ovoj tablici pretražuju se i unose vrste poreza po odbitku (ritenuta d'acconto) koje se povezuju s primateljima naknada (trgovački agenti također su primatelji naknada), radi ispravnog vođenja računovodstvenih knjiženja i drugih povezanih poreznih obveza.

#### Specifična polja

**Kod poreza po odbitku**: alfanumerički kod od 5 znakova kojim se identificira porez po odbitku; uobičajeno se koristi službeni kod poreza koji je odredilo nadležno ministarstvo.

**Opis poreza po odbitku**: opis koda poreza po odbitku.

**[Porezni kod](/docs/configurations/tables/finance/tax-code)**: otvara tablicu poreznih kodova. Tablica je unaprijed popunjena prilikom instalacije i sadrži cjelovit popis poreznih kodova predviđenih za obrazac F24.

**Računovodstveni predložak glavne knjige**: ovo je obvezno polje za knjiženje naknade u računovodstvu. U pravilu se radi o predlošku za PDV, primjerice za uobičajenu domaću nabavu u Italiji. Moguće je unijeti i predloške bez PDV-a radi obrade poreza po odbitku za povremene suradnike koji nemaju PDV identifikacijski broj.

**Vrste poreza po odbitku za elektroničko fakturiranje**: u ovo polje moguće je unijeti posebnu šifru vrste poreza po odbitku koja se koristi za izlazno elektroničko fakturiranje, odnosno kada je društvo koje koristi sustav podložno porezu po odbitku koji zadržava njegov kupac, primatelj robe ili naručitelj usluge. Za važeće šifre pogledajte ažurirane tehničke specifikacije za elektroničko fakturiranje koje se mogu preuzeti s web-stranice talijanske Porezne uprave.

**Obrazac u obrascu 770**: obvezno polje. Obrazac 770 nije podržan u ovom postupku.

**Kod plaćanja u obrascu 770**: kod plaćanja u obrascu 770. Ovo polje nije obvezno i ne koristi se.

**Vrste stavki**: moguće je odabrati neto ili bruto stavke. Razlika se odnosi na stvaranje rokova dospijeća u neto ili bruto iznosu, nakon uključivanja svih poreza na teret primatelja naknade. Standardna postavka predviđa neto stavke kako bi se u evidenciji dospijeća prikazao stvarni iznos koji treba platiti stručnjaku. U tom slučaju računovodstveni predložak ne smije sadržavati zabranu knjiženja neuravnoteženih stavki.

**Vrsta poreza po odbitku**: moguće je odabrati porez koji se obračunava kao predujam ili kao konačni porez. Ta razlika trenutačno ne utječe na rad modula, ali je važna za obrazac CU (jedinstvena potvrda), u kojem se popunjava jedno od dva polja: *Porez po odbitku kao predujam* ili *Porez po odbitku kao konačni porez*.

**Kod plaćanja**: kod plaćanja poreza po odbitku. Taj se podatak preuzima u postupku obrade obrasca CU (jedinstvena potvrda). Za njegovo postavljanje preporučuje se konzultirati odgovarajuće službene upute koje se mogu preuzeti s web-stranice talijanske Porezne uprave.

**Kod ostalih iznosa koji ne podliježu porezu po odbitku**: polje omogućuje određivanje koda za iznose koji ne podliježu porezu po odbitku za svaku pojedinu vrstu poreza. Kod je u pravilu brojčani i definiran je službenim uputama talijanske Porezne uprave. Ako polje nije popunjeno, prilikom obrade obrasca CU u [**odgovarajućem modulu**](/docs/finance-area/declarations/declarations/withholding-tax-certification) automatski će se postaviti *kod 21* za retke naknada primateljima unesene u dokumente s **vrstom retka 4** (*Ostalo*). Ta se vrsta retka može koristiti, primjerice, za troškove koje je primatelj naknade unaprijed platio u ime klijenta, a zatim ih ponovno zaračunao klijentu.

**Obveze prema državi**: ovo analitičko konto pohranjuje konto obveze koji se koristi za evidentiranje obveze po osnovi poreza po odbitku. Konto se koristi u postupku knjiženja plaćanja. Tim se knjiženjem evidentira obveza za porez po odbitku koju je potrebno uplatiti, jer se taj porez obračunava prema načelu blagajne. Kada se plaćanje odnosi na naknade primateljima, knjiženje je potrebno dopuniti stavkama koje se odnose na porez po odbitku te pravilno postaviti tablice modula kako bi se omogućio ispis potvrda o porezu po odbitku.

**Kategorija agenta**: vrsta agenta na temelju koje se određuju postotci doprinosa instituciji Enasarco. Ako je kategorija postavljena, potrebno je unijeti i prethodno navedeno analitičko konto obveze prema instituciji Enasarco. Polje je obvezno ako je omogućeno upravljanje doprinosima Enasarco na teret društva.

**Doprinos Enasarco na teret društva**: ova zastavica aktivira postavke sljedeća dva analitička konta te obvezuje na dodjelu kategorije agenta i analitičkog konta obveze za dio doprinosa na teret agenta. Aktiviranjem ove zastavice omogućuje se računovodstveno evidentiranje doprinosa Enasarco putem istoimenog postupka knjiženja. Preporučuje se aktivirati ovu opciju kako bi se doprinosi evidentirali zasebno, jer se doprinos Enasarco obračunava prema načelu nastanka događaja, a ne prema načelu blagajne kao porez po odbitku. U okviru ove postavke nalaze se i sljedeća polja:

**Obveza Enasarco na teret agenta**: polje služi za postavljanje analitičkog konta obveze na kojem će se evidentirati iznos na teret agenta. To se konto koristi prilikom knjiženja plaćanja ili knjiženja doprinosa Enasarco, ovisno o tome je li omogućeno upravljanje doprinosima Enasarco na teret društva. Polje je obvezno ako je postavljeno sljedeće polje kategorije agenta.

**Trošak na teret društva**: analitičko konto koje se koristi za računovodstveno evidentiranje troška doprinosa Enasarco na teret društva.

**Obveza na teret društva**: analitičko konto koje se koristi za računovodstveno evidentiranje obveze za doprinose Enasarco na teret društva.

### Postotci

Odjeljak sadrži sljedeća polja (kliknite strelicu s desne strane odjeljka):

% **Porez po odbitku**: postotak poreza po odbitku.

% **Oporezivi iznos**: postotak koji se primjenjuje na osnovicu za obračun poreza po odbitku.

% **Mirovinski fond**: postotak doprinosa za mirovinski fond.

% **Paušalno umanjenje naknade**: polje se ne koristi.

Odjeljak **INPS** omogućuje aktiviranje dodatnog odjeljka za poreze unutar naknade primatelju, radi upravljanja doprinosima INPS koji se, primjerice, plaćaju za projektne suradnike i slične kategorije.