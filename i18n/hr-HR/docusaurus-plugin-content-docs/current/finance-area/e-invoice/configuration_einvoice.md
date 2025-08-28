---
title: Dodatna podešavanja za elektroničko fakturiranje
sidebar_position: 4
---
### Upravljanje knjižnim odobrenjem  

Počevši od verzije 606, knjižna odobrenja uvijek se moraju unositi u Fluentis s negativnim predznakom, posebno će se negativna vrijednost umetnuti počevši od polja Količina. Dokument vraća poruku upozorenja ako zbroj nije negativan s prijedlogom za obrnuti predznak.  

Što se tiče elektroničkog fakturiranja, za potrebe provjera koje provodi SDI potrebno je da znak dokumenta bude pozitivan, stoga će parser koji generira xml datoteku omogućiti novu inverziju znaka (kada je vrsta dokumenta TD04).  

:::note BILJEŠKA
Za računovodstvene potrebe, u slučaju da su unutar odobrenja prisutni mješoviti predznaci (pozitivne linije i negativne linije), potrebno je omogućiti mogućnost upravljanja njihovim mijenjanjem u administraciji (računovodstvu) internog parametra u bazi podataka (varijacija od 0 do 1, u prošlosti je postavljeno -1 prije gornje promjene). Obratite se tehničkoj dokumentaciji i eventualno službi za podršku.  
:::

### Kodiranje artikla po kupcu (Oznaka 2.2.1.3 Šifraartikla)

Oznaka koda stavke može se ponoviti nekoliko puta, generirajući dvostruko kodiranje, promjenom koda u oznaci 2.2.1.3.1 

```xml
    <CodiceTipo> . 
```
Šifra vrste koja je predložena prema zadanim postavkama (u prodajnim fakturama) je ona koja se odnosi na šifru stavke prisutnu u Fluentisu (iz matičnih podataka o stavci tvrtke u upotrebi) koja se može prijaviti s dva različita. 
    
```xml
    <CodiceTipo> 
```
**Prema zadanim postavkama kodiranje se odvija prema ovoj shemi**
    
```xml
    <CodiceArticolo> 
    <CodiceTipo>Codice Art. fornitore</CodiceTipo>    
    <CodiceValore>1504X0</CodiceValore>
    </CodiceArticolo> 
```         

Ili se *TipKoda* može prilagoditi popunjavanjem polja **[može prilagoditi popunjavanjem polja](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)** u bazi podataka kupaca na kartici s *fiskalnim informacijama*. 

:::note BILJEŠKA
Obratite pažnju, ovo je par susjednih polja koja se odnose na kodiranje naše tvrtke (dobavljača) za prilagodbu u usporedbi sa zadanim i na kupca za dvostruko kodiranje koje se umeće u izgled fakture. 
:::

Esempio:

```xml
    <CodiceArticolo>
    <CodiceTipo>MIOCODICE</CodiceTipo>
    <CodiceValore>104X0</CodiceValore>
    </CodiceArticolo>
```

Moguće su i druge specifične vrste kodiranja, kao što je EAN kodiranje ili specifično kodiranje za sektor medicinskih uređaja. 

Primjer:

```xml
    <CodiceArticolo> 
    <CodiceTipo>EAN</CodiceTipo>
    <CodiceValore>XX345678</CodiceValore>
    </CodiceArticolo>
```

Moguće je podržati kodiranje na tablici **[Vrste barkodova](/docs/configurations/tables/general-settings/barcode-types)**

Praktičan primjer korištenja za 'Medicinske uređaje': Kodirane su 3 vrste crtičnog koda (također aktiviranje flaga **Export Public računovodstvo** za upravljanje barkodom u xml putu elektroničke fakture): 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode.png)

tada je u **[šifarniku artikla](/docs/erp-home/registers/items/create-new-item)** naznačena vrijednost za svaku vrstu koda: 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode2.png)


Rezultat će biti  

```xml
     <CodiceArticolo> 
     <CodiceTipo>DM1</CodiceTipo> 
     <CodiceValore>26554/R</CodiceValore> 
     </CodiceArticolo> 
```

prema propisima Ministarstva zdravstva. 

Što se tiče mogućnosti dvostrukog kodiranja na fakturi, dodajući da na strani kupca koji je vlasnik dokumenta, šifra artikla kupca, ako je umetnuta u kartici Kupci šifarnika artkla, koji se odnosi na kupca fakture, može biti izraženo na 2 različita načina: 

- s oznakom CodiceTipo koja sadrži riječi "Klijent Art Kod".

primjer:

```xml
    <CodiceArticolo> 
    <CodiceTipo>Codice Art. cliente</CodiceTipo>    
    <CodiceValore>XX4</CodiceValore>
    </CodiceArticolo> 
```

- s oznakom CodiceTipo koja je jednaka kodu artikla kupca (od para polja *tipa koda artikla dobavljača/kupca*) koji se nalazi u bazi podataka kupca na kartici s poreznim podacima 
primjer:

```xml
    <CodiceArticolo>
    <CodiceTipo>CODCLI</CodiceTipo>
    <CodiceValore>XX4</CodiceValore></CodiceArticolo>
    </CodiceArticolo>
```

gdje je CODCLI vrijednost unesena u polje *vrste šifre artikla kupca* u Šifarniku o kupcima. 

:::tip UVID 
Ako želite vidjeti kod članka Fluentis drugačije od standarda, morate prilagoditi FSItem transformaciju u ruci koja se zove FullTextDescriptionXMLFE. Ako ne želite ništa umetnuti u oznaku CodiceArticolo za CodiceType “art. dobavljač", u transformaciji, u mreži, ništa se ne smije unijeti u korespondenciju s nizom " Engine Parameters ". Da biste isključili kod klase u pojedinačnim redcima dokumenta, potrebno je prilagoditi transformaciju FullTextDesctiption FSItem objekta u Arm promjenom teksta sadržanog u odjeljku EngineParameters retka “Default” iz “ItemClassCode +”-“+ Šifra” u “Šifra”  
:::

### Izjava namjere ( tag 2.2.1.16 Ostalipodacioupravljanju) 

Podaci iz izjave volje automatski se upisuju kao "ostali podaci o upravljanju": 

2.2.1.16.1 Vrstapodataka POKUŠAJ 

2.2.1.16.2 Referencateksta identifikacijska i progresivna referenca prijavljuju se čitanjem iz **[registra izjava namjere](/docs/finance-area/declarations/declarations/intent-declaration)**

2.2.1.16.4 Referentnidatum datum protokola prijavljuje se čitanjem iz registra izjava namjere 


### Fiksne zabilješke na fakturi ( tag 2.1.1.11 Predložak)

Za upravljanje bilješkama koje su u ispisima starih faktura trajno umetnute u izvješće (na primjer "Doprinos Conai plaćen gdje je dospjelo"), nove bilješke moraju se umetnuti u tablicu Šifrirane bilješke (Alati -> Upravljanje šifriranim bilješkama). Questo tipo di annotazioni vengono riportate nel tag Causale del file XML. 
Le condizioni da rispettare per avere compilato il tag Causale sono: 
- il tipo nota codificata deve avere codice        
   
```
   ELEKTRONIČKO FAKTURIRANJE_PREDLOŽAK
```
   
- zabilježba mora biti povezana s pojedinom tvrtkom
- javlja se ono što je napisano u polju Opis, ako je ovo prazno ono što je u polju ‘Naslov’
 
### Fiksne napomene za korisnika  ( tag 2.1.1.11 Predložak)

Za upravljanje bilješkama koje se trebaju prijaviti na temelju kupca, mora se upravljati šifriranim bilješkama u relevantnoj tablici (Alati -> Upravljanje šifriranim bilješkama). O ovoj vrsti komentara izvješćuje se u oznaci predloška XML datoteke koja se može replicirati više puta u datoteci. 

Uvjeti koje treba poštovati da bi se ispunila oznaka predloška su: 
- šifrirana vrsta bilješke mora imati šifru 
```
   ELEKTRONIČKO FAKTURIRANJE_PREDLOŽAK
```
- bilješke moraju biti umetnute u karticu 'Razno' baze podataka o korisnicima, namijenjenu upravljanju specifičnim bilješkama koje treba prijaviti prilikom ispisa dokumenata.
- bilješka mora imati oznaku 'Ispis u prodajnim fakturama' ili, ako je prazna, prijavljuje se ono što je napisano u polju retka 'Napomene'  
 
### Upravljanje dodatnim slobodnim podacima (tag 2.2.1.16 Ostalipodacioupravljanju)

Za upravljanje dodatnim 'besplatnim' podacima reda, u Fluentis je potrebno umetnuti ExtraData s kodom koji počinje s

```
  AltriDGes_
```
(es. AltriDGes_AltriDati3). 

Ovi ekstrapodaci, jednostavnog tipa, moraju biti povezani s nadređenim objektom

```
   FSSalesInvoiceItem
```
na svojstvo, zapravo, ExtraData (postoje 3 vrste: niz, numerički, podaci). 

U svaki redak članka, dakle, korisnik može slobodno (ručno) dodati ove dodatne podatke; kao rezultat će redak članka imati, (na primjer, ako su dodatni podaci tipa string), ovaj dodatni odjeljak: 

```xml
    <AltriDatiGestionali> 
    <TipoDato>AltriDati3</TipoDato> 
    <RiferimentoTesto>Testo esempio</RiferimentoTesto> 
    </AltriDatiGestionali> 
```

gdje: 
- ‘Vrsta podataka’ preuzeta je iz teksta koji slijedi iza koda  
```
   AltriDGes_ 
```
dodatnog datuma, 
- kada je vrsta dodatnih podataka numerička, ono što je u polju 'Vrijednost' dodatnih podataka završava u oznaci 'Referentni broj', a ono što je u polju 'Opis' (ako nije prazno) dodatnih podataka sami podaci će završiti u 'Reference teksta'. 

Primjer

```xml
    <AltriDatiGestionali>
    <TipoDato>Spessore</TipoDato>
    <RiferimentoNumero>500</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Upravljanje "administrativnom referencom" u zaglavlju dokumenta (oznaka tag 1.2.6 Administrativna referenca) 

“Administrativna referenca” u zaglavlju fakture upravlja se uzimanjem "Referentne osobe" umetnute uz bilješku iz baze podataka kupaca. 

```
   XMLPA
```


Na računu su prikazana polja “Ime” + “ “ + “Prezime” tako upisane osobe.  

### Upravljanje "administrativnom referencom" prema detaljima retka (oznaka 2.2.1.15 Administrativna referenca)

Neka javna tijela zahtijevaju 'administrativnu referencu' za jedan redak članka (a ne u zaglavlju).   

U Fluentis je moguće umetnuti 'ExtraData' s kodom 

```
   RiferimentoAmminis
```

 

Ovi ekstrapodaci, jednostavnog tipa, moraju biti povezani s nadređenim objektom  

```
   FSSalesInvoiceItem
```


sa svojstvom Dodatni podaci (očekuje se kao niz). 

Stoga u svaki redak članka korisnik može slobodno (ručno) dodati ove dodatne podatke i rezultat će biti da će taj redak članka imati ovaj dodatni odjeljak:  

```xml
    <RiferimentoAmministrazione>RifAmm</RiferimentoAmministrazione> 
```

Gdje je vrijednost ‘RifAmm’ preuzeta iz “Opisa” dodatnih podataka umetnutih u retku stavke.

### Alternativna mjerna jedinica (oznaka 2.2.1.16 Ostaliupravljačkipodaci)
 
Količina koja se koristi za izračun cijene linije (bez obzira je li prva ili druga, ovisi o UMPrezzo zastavici same linije) navedena je u oznaci 2.2.1.5 Količina.

Jedinica mjerenja koja se ne odnosi na cijenu prijavljena je kao "Ostali podaci upravljanja", 

con DataType = 
```
   QTALTERNA
```
i količina navedena u oznaci ‘RiferimentoNumero’. 

Primjer

```xml
    <AltriDatiGestionali>
    <TipoDato>QTAALTERNA</TipoDato>
    <RiferimentoNumero>4.00</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Podaci o narudžbi (oznaka 2.1.2 DatiOrdineAcquisto)

U oznaci

2.1.2 Podaci o narudžbi

2.1.2.1 RiferimentoNumeroLinea

2.1.2.2 ID dokumenta

Prijavljuje se referenca na narudžbu kupca.

Oznaka **IdDocumento** izvješćuje o tekstu koji se nalazi u polju **Vaša referenca** u **zaglavlju narudžbe kupca** povezanom s retkom stavke fakture, a u **nedostatku te vrijednosti** prijavljuje se *Vaša referenca* **zaglavlja fakture**. 

Ova oznaka umetnuta je samo za retke fakture koji su povezani s redovima prodajnog naloga.

Ako faktura nije stvorena iz Fluentisovih narudžbi korisnika, da biste imali referencu na narudžbenicu, mora se unijeti kod u polje **Referenca narudžbe** koje je prisutno, za svaki redak fakture, u kartici s pojedinostima za redak **podataka artikla**. 

![](/img/it-it/finance-area/e-invoice/configuration/datiarticolo.png)

### DDT podaci (oznaka 2.1.8 DatiDDT)
 
Nel tag 

2.1.8 DDT podaci

2.1.8.1 NumeroDDT

2.1.8.2 DataDDT 

2.1.8.3 RiferimentoNumeroLinea 

Prijavljuje se referenca na DDT iz kojeg je faktura izrađena.   
U “RiferimentoNumeroLinea” prijavljeni su samo brojevi reda fakture povezani s DDT redom.  

### Biljegovina (Oznaka 2.1.1.6 DatiBollo)  

Sljedeća pravila moraju se poštovati za upravljanje biljegovinom:

- U tablici **[Vrste troškova](/docs/configurations/tables/general-settings/expenses-types)** trošak tipa “marka” mora biti upisan sa zastavicom u polju *Marka* i s *vrijednošću marke* od 2 eura.  
- U bazi podataka o kupcima, trošak tipa “markica” mora se dodati u odjeljak **[Troškovi popusta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts)** odabirom koda koji je prethodno kreiran u tablici *Vrste troškova*.   
- Kako biste izbjegli njihovo naplatu kupcu: u trošku biljege u registru kupaca vrijednost mora biti 0.  
- U tablici **[Tvrtka](/docs/configurations/tables/general-settings/company)** ispunite polja *Troškovi marke* (2 eura) i *Min. troškovi roof* (77,47 eura) 
- Troškovi markica automatski se pojavljuju na prodajnim fakturama ako ih ima u evidenciji kupaca   
- U prodajnoj fakturi moguće je promijeniti vrijednost predloženog troška (Ploča Sažetak > Agenti/Popusti/Troškovi), stoga se za svaku pojedinačnu fakturu može napraviti izbor hoće li se naplatiti ili ne (kako ne bi naplatili biljegovina, ali ipak pribavite dokaz na fakturi, jednostavno unesite trošak s iznosom = 0)  
- Kada se kreira XML datoteka, ako u sažetcima faktura postoji trošak tipa biljege, dodaje se odjeljak virtualne biljege  

```xml
        <DatiBollo>
        <BolloVirtuale>SI</BolloVirtuale>
        <ImportoBollo>2.00</ImportoBollo>
        </DatiBollo> 
```

- Ako u sažetcima faktura postoji trošak biljegine s vrijednošću koja nije 0 (slučaj zaduženja na fakturi), odjeljak s pojedinostima retka dodaje se u XML s brojem zadnjeg retka fakture + 1 i vrijednošću žig.  
 
Ovaj odjeljak je dodan za provjeru ukupnih iznosa računa  

```xml
    <NumeroLinea>2</NumeroLinea>
    <TipoCessionePrestazione>AC</TipoCessionePrestazione>
    <Descrizione>Spesebollo</Descrizione>
    <Quantita>1.00</Quantita>
    <PrezzoUnitario>2.00000000</PrezzoUnitario>
    <PrezzoTotale>2.00</PrezzoTotale>
    <AliquotaIVA>0.00</AliquotaIVA>
    <Natura>N3</Natura>
```

### Kodovi Cig i Cup (oznaka 2.1.2.6 CodiceCUP i 2.1.2.7 CodiceCIG) 
 
Podatkovna oznaka narudžbenice sadrži CIG i CUP, zbog čega se za prijavu ova 2 koda faktura mora odnositi na narudžbu korisnika Fluentisa ili mora biti naveden ref. Narudžba u istoimenom uređivanju prisutna u kartici Podaci stavke kartice Stavke na fakturi.  

    2.1.2 \<DatiOrdineAcquisto> 
    2.1.2.1 \<RiferimentoNumeroLinea> 
    2.1.2.2 \<IdDocumento> 
    …….. 
    2.1.2.6 \<CodiceCUP> 
    2.1.2.7 \<CodiceCIG>

### Decimale koje se koriste za numerička polja 
Kako biste saznali koliko se maksimalnih decimala može navesti za svako numeričko polje, pogledajte tehničke specifikacije za elektronički račun Porezne uprave: 

Prema specifikacijama: 
- količina artikla: decimale od 2 do 8  
- jedinična cijena: decimale od 2 do 8  
- postotak popusta: 2 decimale  
 
### Porez po odbitku i Enasarco (oznaka 2.1.1.5 DatiRitenuta)  

Za upravljanje porezom po odbitku:  

- u bazi podataka o kupcima aktivirajte flag **Porez po odbitku** u kartici **fiskalnih informacija** i navedite vrstu poreza po odbitku koji će se koristiti putem kombiniranog okvira **Vrsta poreza** po odbitku.   
- u tablici **Vrste poreza** po odbitku ispravno kodirajte šifru za elektroničko fakturiranje (RT01, RT02).   
- ispunite račun kao i obično, dokument automatski pronalazi obvezu poreza po odbitku za retke na kojima je moguće napraviti obračun i automatski izračunava iznos poreza po odbitku.   
- kreirajte XML datoteku koja sadrži naznaku poreza po odbitku i za svaki redak oznaku "Porez po odbitku DA" ako je red predmet.     

Što se tiče Enasarca, s verzijom 1.6 sheme elektroničkog fakturiranja (na snazi od 01.10.2020.) definirano je da se odjeljak 2.1.1.5, u početku posvećen samo zadržavanjima, sada može replicirati N puta kako bi se također naznačio Enasarco, za kojoj je dodijeljena šifra RT04. Fluentis, ako porez po odbitku umetnut u zaglavlje ima postavke enasarco, također vrednuje broj enasarco u dokumentu i valorizira odjeljak 2.1.1.5 prema potrebi  

:::danger[PAŽNJA]
RAČUNOVODSTVO: aktivna faktura povezana s nastalim porezom po odbitku i Enasarco doprinosom bit će obračunata automatskim generiranjem ispravnog računovodstvenog unosa koji poništava porez po odbitku i doprinos iz kredita kupcu. OBRATITE PAŽNJU DA JE U KONFIGURACIJI POVEZANE VRSTE ZADRŽANJA, POLJE **Vrste dospijeća** postavljeno na *Neto stavke*, inače će računovodstveni unos i izračun otvorenih stavki biti netočni i nedostajati u prijenosu poreza po odbitku.  

:::tip **VIDI TAKOĐER**
Za upravljanje povratom **doprinosa za socijalno osiguranje** u elektroničkom računu pogledajte [**ovdje**](/docs/configurations/tables/general-settings/expenses-types)
:::