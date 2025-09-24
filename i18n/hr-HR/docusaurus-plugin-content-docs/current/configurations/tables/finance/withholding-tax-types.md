---
title: Tipovi odbitka poreza
sidebar_position: 34
---

:::tip[FAst Start]
Na ovu tablicu utječe procedura [**Fast Start**](/docs/guide/fast-start)

U slučaju ručne konfiguracije potrebno je slijediti kontrolni popis na poveznici.
:::

U ovoj se tablici pretražuju i unose vrste poreza po odbitku koje se dodjeljuju primateljima naknada (trgovački agenti također spadaju u primatelje) radi pravilnog upravljanja knjiženjima i ostalim povezanim poreznim obvezama.

#### Specifična polja

**Šifra poreza**: alfanumerička šifra od 5 znakova koja identificira porez; obično se koristi šifra ministarstva.

**Opis poreza**: opis šifre poreza.

**[Šifra poreza prema zakonu](/docs/configurations/tables/finance/tax-code)**: poziva tablicu šifri poreza; unaprijed je popunjena prilikom instalacije i sadrži cjelokupan popis šifri poreza predviđenih za obrazac F24.

**Računovodstvena šifra**: questo campo prevede l'impostazione obbligatoria per registrare il compenso in contabilità: si tratta normalmente di una causale iva, tipo un normale acquisto Italia. E' comunque prevista anche la valorizzazione di causali non Iva per gestire i casi di gestione ritenute a collaboratori saltuari non titolari di partita IVA.

**Vrste poreza za elektroničko fakturiranje**: u ovom polju moguće je unijeti šifru vrste poreza koja vrijedi za elektroničko fakturiranje (kada tvrtka podliježe odbitku poreza od strane svog klijenta / primatelja / naručitelja). Za važeće šifre pogledajte tehničke specifikacije elektroničkog fakturiranja na webu Porezne uprave.

**Odjeljak u obrascu 770**: obavezno polje; napomena: obrazac 770 se ipak ne obrađuje u ovoj proceduri.

**Šifra plaćanja u obrascu 770**: šifra plaćanja u 770 nije obavezna i trenutno se ne koristi.

**Vrste stavki**: izbor je između neto stavki i bruto stavki. Razlika se odnosi na kreiranje dospijeća neto ili bruto svih poreza i obaveza koje snosi primatelj. Standardna postavka su neto stavke kako bi se dobio raspored dospijeća s stvarnim iznosom za isplatu profesionalcu. U tom slučaju računovodstvena šifra ne smije imati blokadu za knjiženje neuravnoteženih stavki.

**Vrsta poreza**: opcija predujam ili porez po odbitku. Trenutno ovo nema utjecaja na rad modula, ali je važno za CU (Certificazione Unica / Jedinstvenu potvrdu) za popunjavanje polja Predujam ili *Porez po odbitku*.

**Šifra plaćanja**:šifra plaćanja poreza. Ovaj podatak koristi se u postupku pripreme CU i za njegovo pravilno vođenje preporučuje se konzultirati službene upute Porezne uprave.

**Šifra za ostale iznose koji nisu podložni porezu**: omogućuje specifično označavanje, za svaku vrstu poreza, šifre (obično numeričke prema uputama Porezne uprave) za iznose koji nisu predmet poreza po odbitku. Ako polje nije popunjeno, prilikom pripreme CU u [**odgovarajućem modulu**](/docs/finance-area/declarations/declarations/withholding-tax-certification), automatski će se koristiti *šifra 21* za stavke naknada primatelja unesene u dokumentima s **vrsta stavke 4** (*Ostalo*) npr. za unaprijed plaćene troškove primatelja u ime klijenta koje se naknadno tereće. 

**Dug prema državnom proračunu**: ovaj podračun pohranjuje podračun obaveze za porez po odbitku. Koristi se u postupku knjiženja plaćanja: prilikom plaćanja naknada primateljima potrebno je integrirati knjiženje s poreznim stavkama i upravljati tablicama modula kako bi se omogućio ispis potvrda o porezu po odbitku.

**Kategorija agenta** tip agenta koji određuje postotke doprinosa za Enasarco (talijanski fond za agente). Ako je kategorija postavljena, potrebno je unijeti i prethodni podračun obaveze prema Enasarcu. Polje je obavezno ako se vodi upravljanje Enasarco doprinosima na teret tvrtke.

**Enasarco doprinos na teret tvrtke**: ovaj označivač aktivira postavljanje dva sljedeća podračuna i čini obaveznim dodjelu kategorije agenta i podračuna obaveze za dio koji snosi agent. Aktivacija ovog označivača omogućuje knjiženje Enasarco doprinosa pomoću odgovarajuće procedure. Opcija je preporučena kako bi se omogućilo autonomno knjiženje, budući da se Enasarco doprinos obračunava po razdoblju (competenza), a ne po naplati kao porez po odbitku.

**Dug Enasarco na teret agenta**: polje za postavljanje podračuna obaveze na kojem će se evidentirati iznos koji snosi agent. Ovaj podračun koristi se pri knjiženju plaćanja ili pri knjiženju Enasarco doprinosa, ovisno o tome je li aktivirana opcija upravljanja Enasarco doprinosima na teret tvrtke. Polje je obavezno ako je definirana kategorija agenta.

**Trošak na teret tvrtke**: podračun koji se koristi za knjiženje Enasarco troška na teret tvrtke.

**Dug na teret tvrtke**: podračun koji se koristi za knjiženje Enasarco obaveze na teret tvrtke.


### Postotci

Ovaj odjeljak sadrži sljedeća polja (klikom na strelicu desno):

% **Porez po odbitku**: postotak primjene poreza po odbitku.

% **Osnova**: osnovica za obračun poreza po odbitku.

% **Doprinos za mirovinsku štednju**:  postotak doprinosa za mirovinsku štednju.

% **Smanjenje paušalne naknade**: polje trenutno nije u upotrebi.

Odjeljak INPS omogućuje aktiviranje dodatnog odjeljka za poreze unutar naknade primatelja, kako bi se upravljalo INPS doprinosima koje, primjerice, plaćaju projektni suradnici i slični vanjski suradnici.
