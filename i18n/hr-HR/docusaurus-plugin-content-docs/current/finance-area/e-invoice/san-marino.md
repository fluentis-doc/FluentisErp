---
title: Elektronički račun iz San Marina
sidebar_position: 5
---

:::note NAPOMENA
U ovom se odjeljku obrađuje upravljanje elektroničkim računom u vezi s gospodarskim subjektima, korisnicima Fluentisa **stanovnicima**  ili onima koji imaju poslovni nastan u San Marinu.

NE odnosi se stoga na aspekte povezane s izdavanjem računa od strane talijanskih subjekata prema San Marinu ili na račune primljene iz San Marina.
:::

### Tablica *Konfiguracija elektroničkih dokumenata* 

Unutar tablice, koja se inače ispunjava za konfiguraciju Fluentis Business Hub-a koji se povezuje s talijanskim SDI-jem, u ovom je slučaju potrebno ispuniti, osim uobičajenih polja za koja se upućuje [**ovdje (video Početna konfiguracija elektroničkog fakturiranja)*)**](/docs/finance-area/sdi-documents/sdi-documents-intro/), i dva posebna polja koja vrijede za San Marino:

- flag **Test San Marino** (za identifikaciju veze s fiskalnim simulacijskim okruženjem), koji ima prednost i zaobilazi flag *Je test* u zaglavlju (koji je u ovom slučaju nevažeći) 

- **Token San Marino** za unos vjerodajnice za povezivanje s poreznim uredom San Marina (umjesto s talijanskim SDI-jem) 

![](/img/it-it/finance-area/sdi-documents/sanmarino/sdiconfig.png)

:::tip INFO
Iako su polja u tablici koja se odnose na povezivanje s Fluentis Business Hub-om i talijanskim SDI-jem obvezna (kao što su korisničko ime i lozinka), u slučaju San Marina poziv će se izvršavati izravno prema web servisu Porezne uprave San Marina. Stoga može biti potrebno unijeti "fiktivne" vjerodajnice za Fluentis Business Hub kako bi se omogućilo spremanje sadržaja obrasca i unos stvarno potrebnih polja za povezivanje, kao što je Token za web servis San Marina.
:::

### Bizlink konektori koje je potrebno omogućiti

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors.png)

U slučaju da konektori prikazani na slici nisu već prisutni u sustavu i potrebno ih je unijeti ručno, preporučuje se kopirati prikazane kodove i opise, a zatim u odgovarajućim poljima odabrati vrste povezane s elektroničkim fakturiranjem San Marina.  


<details>

  <summary>Konkretno: (Click to expand)</summary>
 


  1. Vrsta konektora: San Marino INPUT i OUTPUT – za ulazne i izlazne račune 
  
  2. Partner: Fluentis
  
  3. Tijek: San Marino
   
  4. Identifikator: Mora odgovarati parametru *Globalidentifier* postavljenom u konfiguraciji usluge Bizlink, inače će dotični konektori biti onemogućeni. 
  Stoga, prilikom instalacije i prije upotrebe, konektori bi iz predostrožnosti mogli biti onemogućeni te ih je potrebno aktivirati brisanje stringa SANMARINO iz konektora ako je parametar usluge Bizlink postavljen na NULL,
  ili unijeti u parametar *Globalidentifier* usluge string SANMARINO, ostavljajući konektore nepromijenjene; u tom slučaju, međutim, string SANMARINO mora biti unesen u sve ostale konektore koji su potrebni za željene funkcionalnosti.
  
  5. Operacija toka: odabrati stavke za slanje, primanje ili brisanje, odgovarajuće za ulazne ili izlazne račune. Stavke su usklađene s kodovima vidljivima na slici (koji predstavljaju potrebne konektore).
    
Dokument toka: odabrati stavke za slanje ili primanje, prema potrebi.
  
![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors3.png)


</details>

## OSNOVNA LOGIKA

### **Nabava**:

Gospodarski subjekt iz San Marina prima od poreznog ureda San Marina – istovremeno s PEC porukom koja obavještava o dolaznoj "inozemnoj" fakturi (odnosno od talijanskog poduzeća koje prodaje subjektu iz San Marina) – dokument koji dolazi iz talijanskog SDI sustava te se datoteka nalazi u *Ulaznim dokumentima nabave* kao i inače.

Navedena elektronička faktura za nabavu u tom trenutku unutar Fluentisa ima status ***Nepridruženo***. 

Za dotično poduzeće mora biti aktiviran flag (u tablici Società - SH_Companies izravno u bazi podataka) koji omogućuje kreiranje ulaznih računa iz SDI datoteke.
Korisnik zatim kreira ulazni račun u tom trenutku elektronička faktura prelazi u status ***Primljeno*** nadopunjuje potrebne podatke, posebno vrstu troška nabave u redovima – kako bi se specificirala vrsta robe (vidi sliku dolje) – te stopu PDV-a u svrhu obračuna jednofaznog poreza, podaci koji su zahtijevani prema poreznim propisima San Marina.

<details>

  <summary>Detalji nadopune računa: (Click to expand)</summary>

Navođenje vrste robe vrši se izravno putem tablice za definiranje stavki Fakturirane nabave, gdje se u polju Vrsta PDV-a (fiksna tablica) nalaze informacije koje će se koristiti za popunjavanje odgovarajućeg taga. 

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/xmlpurchaseinvoice.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/vatintegration.png)

</details>

Nakon što korisnik nadopuni račun, pomoću odgovarajuće promjene statusa (workflow) kreira se datoteka za integraciju uvoza, koja se šalje Poreznom uredu San Marina. 

U ovom trenutku, statusi dokumenta specifični za San Marino su sljedeći: 

- **Kontrolirano**: izvršava se provjera nad računom nabave u Fluentisu kako bi se utvrdilo jesu li ispunjena potrebna polja;
- **Generirano**: kreira se datoteka u XML-SM strukturi
- **Za slanje**: datoteka se šalje na FBH, a odatle Poreznom uredu San Marina; 
- **Odbijeno HUB_SM**: ako datoteku ne prihvati, a time ni obradi, Porezni ured San Marina – iz ovog stanja može se vratiti u stanje *Primljeno*;
- **U HUB-SM**: dok je datoteka pohranjena kod Poreznog ureda San Marina;  
- **Odbijeno – Nekompatibilno HUB-SM**: ako Porezni ured San Marina odbije datoteku; iz ovog stanja može se vratiti u stanje Primljeno radi ispravka i ponovnog slanja;  	
- **Prihvaćeno HUB-SM**: ako je obrada uspješna. Uspješno preuzimanje podataka iz XML-RSM formata predstavlja službeno podnošenje računa Poreznom uredu, zabilježeno na datum slanja datoteke;  
- **Obrisano**: stanje koje se postiže slanjem zahtjeva za brisanjem; ako je zahtjev uspješan, dokument se može ponovno vratiti u stanje *Primljeno*.
 
:::note **NOTA**
U vremenskom razdoblju između slanja datoteka i njihove stvarne obrade, operater ima mogućnost njihovog brisanja, u slučaju da u međuvremenu uoči eventualne greške pri ispunjavanju.

Postavljanje (upload) datoteke za integraciju u privremeno područje automatski pokreće brisanje bilo koje druge datoteke za integraciju koja se odnosi na isti FE Import i koja je u tom trenutku prisutna u privremenom području;
drugim riječima, u privremenom području za svaki FE Import vrijedi posljednja učitana verzija datoteke za integraciju.
:::

		
Porezni ured putem automatiziranih procesa obrađuje račune u skupinama te izdaje eventualne obavijesti o plaćanju vezane uz porez na uvoz (Jednofazni porez).  
Zadnja faza procesa je potvrda primitka i prihvaćanja datoteke od strane Poreznog ureda San Marina (obavijest o „Vidimaciji“), koja ažurira status dokumenta.

Ulazni račun se potom, kao i obično, knjiži za svrhe računovodstva.


:::note **Napomena** 
Računi za uvoz usluga oslobođenih plaćanja jednofaznog poreza moraju se integrirati u HUB-SM označavanjem Vrste robe 9 "Oslobođene usluge", prema postupcima opisanim u ovom dokumentu, kako bi se izbjeglo njihovo zadržavanje na neodređeno vrijeme na popisu računa za podnošenje.
Za ovu vrstu računa nije predviđena ni obrada u skupinama ni slanje bilo kakve obavijesti o „vidimaciji“ prema SDI sustavu.  
:::

### **Prodaja**:

Tijek je sličan talijanskom (koristi se isti SDI format, iako su neki tagovi ispunjeni na poseban način).  

<details>

  <summary>Specifični tagovi za San Marino(specifični za SM): (Click to expand)</summary>

Fiksni tag PDV identifikacijskog broja pošiljatelja, primjer: 

```xml
    <IdTrasmittente>
    	<IdPaese>SM</IdPaese>
    	<IdCodice>96428100588</IdCodice>
    </IdTrasmittente>
```    

Za svaki odjeljak 2.2.1 Detalji stavki u odjeljku 2.2 Podaci o robi i uslugama

```xml
    <AltriDatiGestionali>
    		<TipoDato>TM</TipoDato>
    		<RiferimentoTesto>1</RiferimentoTesto>
    	</AltriDatiGestionali>
```

gdje je vrijednost taga Tip podatka *TM* fiksna, a vrijednost taga RiferimentoTesto uzeta je s popisa vrijednosti polja **Vrsta PDV-a** povezanim s klasama **Promet prodaje** (tablica Fluentis) unesenim na računu.

![](/img/it-it/finance-area/sdi-documents/sanmarino/salesturnover.png)

U odjeljku Sažetak podataka za svaku vrijednost polja Vrsta PDV-a  (navedenog gore) povezanu s prodajnim prometom, pronađenu u dokumentu, umetnut je specifičan tag *Normativni referent* gdje je vrijednost dobivena spajanjem koda Vrsta PDV-a  povezanog s prometom i vrijednosti polja Kategorija PDV-a prisutnog u tablici  [**Stopa PDV-a**](/docs/configurations/tables/finance/vat-rates). 

```xml
    <DatiRiepilogo>
    		<AliquotaIVA>0.00</AliquotaIVA>
    		<Natura>N3.1</Natura>
    		<ImponibileImporto>1725.00</ImponibileImporto>
    		<Imposta>0.00</Imposta>
    		<EsigibilitaIVA>I</EsigibilitaIVA>
    		<RiferimentoNormativo>**TM:1**, ESENZIONE</RiferimentoNormativo>
    	</DatiRiepilogo>
```
  

</details>

Porezni ured San Marina djeluje kao posrednik u procesu slanja, stoga su predviđena posebna stanja dokumenta vezana uz činjenicu da datoteka prolazi kroz porezni ured San Marina (dakle, San Marino obavlja prvu provjeru zahtjeva specifičnih u pogledu ispunjavanja tagova), a zatim, ako ju prihvati i talijanski SDI, stanje dokumenta prelazi u uobičajeno stanje (npr. Dostavljeno).

Informacije o obavijestima o dostavi i slično (talijanske) prolaze kroz porezni ured San Marina koji ih prosljeđuje Fluentis Business Hubu za evidentiranje u sustavu upravljanja.

(Glavna) STANJA (u *kurzivu* ona *SPECIFIČNA ZA SM*):

- **Kontrolirano**: Izvršava se provjera računa nabave u Fluentisu kako bi se potvrdilo da su ispunjena potrebna polja; posebno za San Marino dodan je zahtjev da ista faktura može sadržavati isključivo sljedeće kombinacije vezane uz vrstu robe (tag TM): sirovine zajedno s potrošnim materijalom i osnovnim sredstvima, te zasebno usluge po ugovoru o radu, i to i sa i bez sirovina (odvojeno jedna od druge); 
- **Generirano**: kreira datoteku sa XML-SM strukturom;  
- **Za slanje**: prenosi datoteku na FBH, a od tamo dalje Poreznom uredu San Marina;
- ***Odbijeno HUB_SM***: ukoliko Ured za poreze S.M.-a odbaci datoteku zbog formalnih pogrešaka u skladu sa specifikacijama XML formata, može li se iz tog statusa ponovno vratiti u status *Nije pregledano*.  
- ***U HUB-SM***: za vrijeme dok se datoteka nalazi u Poreznom uredu S.M.-a.
- ***Obrisano u HUB-u S.M.-a***: na temelju zahtjeva za brisanje pokrenutog odgovarajućom promjenom statusa.
- ***Odbijeno – Nesukladno u HUB-u S.M.-a***: ako Porezni ured S.M.-a odbaci datoteku zbog bitnih pogrešaka vezanih uz ispravnost podataka na računu (Porezni ured putem automatiziranih obrada provodi preuzimanje podataka i obradu računa u skupinama, nakon čega provodi eventualne provjere – npr. uplate PDV-a iskazanog na računu koje se prosljeđuju talijanskoj Financijskoj upravi, itd.), zatim odlučuje o nastavku postupka; iz tog statusa datoteka se može ponovno postaviti u stanje *Zaprimljeno* radi ispravka i ponovnog slanja.    
- ***Nije dostavljeno SDI-u***: u slučaju nemogućnosti dostave
- ***U očekivanju odgovora***: u iščekivanju poruke s odgovorom od talijanskog SDI sustava  
- **U SDI-u**: u prijenosu kod talijanskog SDI sustava koji provodi uobičajene kontrole predviđene u Italiji.
- **Nesukladno**: odbijeno zbog neusklađenosti s kontrolama koje provodi talijanski SDI sustav.
- **Nedostavljena**: nemogućnost dostave primatelju. 
- **Dostavljeno**: dostava primatelju je izvršena. 

<details>

  <summary>Detalji promjena statusa (specifični za SM): (Click to expand)</summary>

Za slanje --> Odbijeno od HUB-a S.M. (automatski)

Za poslati --> Prijenos u HUB - SM (automatski) 

Odbijeno od strane HUB - SM --> Vrati u neispitano (ručno)

Prijenos u HUB - SM --> Za brisanje iz HUB - SM (ručno) --> Iz ovog stanja će automatski biti resetiran na Neispitano (ili na druge statusne oznake, ovisno o odgovoru od HUB - SM) 

---

Prijenos u HUB-SM --> Odbijeno od strane HUB - SM (automatski) 

Prijenos u HUB-SM --> Nije preuzeto od strane HUB-SM (automatski) --> Prelazi u Odbijeno od strane HUB-SM  (automatski) ili Prihvaćeno od strane HUB-SM (automatski)

Prijenos u HUB-SM --> Prihvaćeno od strane HUB-SM (automatski)

---

Odbijeno od strane Hub SM Nesukladno --> Vrati u neispitano (ručno) 

Prihvaćeno od strane HUB-SM --> U SDI (automatski)

Prihvaćeno od strane HUB-SM --> Nije poslano u SDI (automatski) 

Prihvaćeno od strane HUB-SM --> Čeka se odgovor od SDI-ja (automatski) 


</details>

:::note Napomena
Ako je račun unutar okvira sporazuma o razmjeni, HUB-SM šalje FE datoteku prema SDI-u i postupak se nastavlja sljedećim koracima. U suprotnom, postupak se završava. 

SDI obavještava HUB-SM o zaprimanju ili odbacivanju FE datoteke. U slučaju zaprimanja, kupac/naručitelj koji je talijanski porezni obveznik ima elektronički račun na raspolaganju putem talijanskog portala "Računi i potvrde" ili u "poreskoj ladici". Ako račun sadrži naplatu PDV-a, tada se nalazi u stanju "na čekanju" (u očekivanju ovjere), inače se smatra dovršenim s aspekta kupca.  

HUB-SM obavještava OESM o ishodu zaprimljenom od SDI-a (potvrda/očitovanje o odbacivanju).
:::

Izdavatelj/davatelj usluga OESM izrađuje elektronički račun i šalje ga HUB-SM-u (bilo u slučaju zaračunavanja PDV-a – gdje će porez naknadno proslijediti Porezni ured San Marina talijanskoj Agenziji za prihode, bilo bez zaračunavanja PDV-a). 

Tijekom faze prijenosa događaju se sljedeće radnje:
- izračunava se hash kod koji odgovara datoteci; vrijednost hasha pohranjuje se u HUB-SM i vraća pošiljatelju.   
- provodi se sintaktička provjera FE datoteke: ako se otkriju pogreške, one se odmah prijavljuju pošiljatelju i FE datoteka se odmah odbacuje.
  
Nakon što je poslana HUB-SM-u, svaka FE datoteka ostaje pohranjena u privremenom području do izvršenja automatske obrade koja potvrđuje, preuzima i obrađuje podatke.
Tijekom tog vremenskog razdoblja, pošiljatelj može izbrisati ili zamijeniti datoteke koje su poslane, ali još nisu obrađene.  

Računi koji ne sadrže PDV prolaze kroz kraći postupak: račun koji je uspješno zaprimljen od strane HUB-SM uključuje se u Sastavnica materijala Export i šalje se talijanskom SDI-u.
Pozitivna povratna informacija od strane SDI-ja pokreće, od strane Poreznog ureda, registraciju zahtjeva za povrat na Porezni račun, čime se stvara dostupnost poreznog kredita. 

Isporuke s PDV-om, nakon prve formalne provjere, unose se u izvozne liste, ali ostaju na čekanju dok OESM ne izvrši uplatu PDV-a na tekući račun Porezne uprave San Marina i ne preda papirnatu potvrdu o uplati Poreznoj upravi.
Tek tada će datoteke pripadajućih računa biti proslijeđene talijanskom SDI-u.

Za račune s obračunatim PDV-om, pozitivan ishod koji stigne od SDI-a pokreće, sa strane Porezne uprave, registraciju zahtjeva za povrat na Porezni račun, čime se stvara raspoloživost poreznog kredita.
U tom trenutku, talijanski kupac moći će pregledati račune s obračunatim PDV-om, a koji još nisu konačno obrađeni, putem portala "Fatture e corrispettivi", uz prikaz sljedeće dvije faze obrade:

- Račun još nije ovjeren od strane talijanske Porezne uprave (Provincijska direkcija PU), te je stoga valjan samo u komercijalne svrhe;
- Račun je ovjeren od strane talijanske Porezne uprave (Provincijska direkcija PU), te je stoga valjan za odbitak PDV-a od strane talijanskog kupca.

Za svaku FE datoteku koju HUB-SM proslijedi SDI-u, taj sustav generira i vraća HUB-SM-u XML datoteku potvrde, kojom se potvrđuje dostava, nedostava ili odbacivanje. 


## UPRAVLJANJE JEDNOFAZNIM POREZOM U FIKSNOM IZNOSU 

:::tip Info
Porezni sustav San Marina trenutno predviđa, općenito, jednofazni porez od 17% na kupnju / uvoz opće robe, odnosno druge stope ovisno o vrsti robe, poput goriva itd...

Samo za posredničke usluge (agencijske usluge) predviđen je jednofazni porez u fiksnom iznosu od 2 €.
Ostale vrste usluga izuzete su od jednofaznog poreza, ali ulazni račun (kako će biti detaljnije objašnjeno u nastavku) svejedno obrađuju poduzeća sa sjedištem u San Marinu kako bi poslali Poreznoj upravi datoteku s integracijom kupnje – iako s oznakom oslobođenja od PDV-a.

Što se tiče prodaje robe prema Italiji, primjena talijanskog PDV-a je neobavezna i primjenjuje se na zahtjev kupca, u suprotnom se fakturira s šifrom oslobođenja od PDV-a.

Prodaja usluga je uvijek oslobođena PDV-a.
:::

Za kupnju agencijskih usluga (provizije), zakonodavstvo San Marina predviđa jednofazni porez u fiksnom iznosu od 2 € po dokumentu: u suštini, bez obzira na poreznu osnovicu, iznos poreza je uvijek fiksan i iznosi 2 €.

### KONFIGURACIJA U TABLICI STOPOVA PDV-a
Jednofazni porez se u biti smatra PDV stopom koja se primjenjuje na različite artikle. Za lokalizaciju San Marina, dostupan je prikaz polja **Fiksna vrijednost**:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase1.png)

Kada se u ovo polje unese vrijednost, polje za postotak automatski se postavlja na nulu, i obrnuto.

### PRIMJENA U DOKUMENTIMA NABAVNO/PRODAJNOG CIKLUSA, U NAKNADAMA, KNJIŽENJIMA I OBRAČUNIMA

Npr. prodajni račun: **prvi redak artikla** s fiksnim jednofaznim porezom bit će popunjen s odgovarajućim iznosom:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase2.png)

Svi ostali redci artikala (ili troškova) s istom fiksnom stopom imat će porez = 0.:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase3.png)

Ukupno u PDV rekapitulacijama: bez obzira na ukupnu poreznu osnovicu za ovu stopu, iznos poreza bit će onaj fiksiran u tablici.

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase4.png)

Rezultat u knjiženju: samo jedan redak imat će fiksni iznos od 2 €

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase5.png)

U ručno unesenim knjiženjima, polje za fiksni porez neće biti moguće mijenjati: preciznije rečeno, polje se čini izmjenjivim, ali nakon izlaska iz njega, Fluentis će automatski poništiti izmjenu i vratiti prethodni iznos preuzet iz tablice PDV-a. 

### INTEGRACIJA UVOZNOG RAČUNA – DETALJI ZA FIKSNI JEDNOFAZNI POREZ 
Kada se zaprimi elektronički račun iz Italije, iz SDI datoteke se generira ulazni račun; stavkama se dodjeljuju nabavne vrijednosti i odgovarajuće PDV stope, kako bi se zatim telematski poslala integracija Poreznoj upravi San Marina i platila odgovarajuća porezna obveza.


:::note Napomena 
Flag za identifikaciju fiksnog poreza od 2 €, nazvana ‘S.Marino’, koja se prethodno koristila za kreiranje integracijske datoteke, više nije u upotrebi, jer se sada izravno koristi novo posebno polje, koje se pravilno obrađuje u dokumentima i knjiženjima.
:::
