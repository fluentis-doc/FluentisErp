---
title: Analiza raspoloživosti
sidebar_position: 6
---

Prozor za ispis analize dostupnosti otvara se putem puta **Početna stranica > Artikli > Analiza raspoloživosti** i sastoji se od tri dijela: područje filtra, mreža rezultata po skladištu, mreža pojedinosti.

### Područje filtra 

Pomoću filtara za **Artikl**, možete odrediti koji artikl ili koju seriju artikala želite provjeriti za dostupnost na skladištu.

**Kumulativna količina**

Ova opcija služi da odlučite želite li vidjeti kumulativnu količinu dostupnu za taj artikl, ili želite vidjeti dostupnost za svaki pojedini dokument. Također, u ovoj sekciji možete odlučiti hoće li se uzeti u obzir i zaliha koja još nije dostupna u razdoblju koje se razmatra, ili želite vidjeti i zalihu koja će biti dostupna od datuma pretrage ako ta zalihua nije u kašnjenju.

**Razmotri dostupnosti koje dolaze iz**

U ovoj sekciji možete odlučiti hoćete li uzeti u obzir raspoloživosti koje dolaze iz svih ili nekih od ponuđenih kategorija, poput: rad po narudžbi, planirana proizvodnja, nabava, izdana proizvodnja, prodaja i skladište.

**Provjeravanje perioda**

U ovoj sekciji možete odabrati razdoblje koje želite provjeriti, koje može biti: **Mjesečno** (u tom se slučaju označava broj mjeseci koji želite pregledati), **Tjedno**, **Dnevno** ili možete odabrati određeni datum za provjeru.

**Prikaži retke bez raspoloživosti**

Ako aktivan, ovaj flag ukazuje da želite prikazati čak i retke koji trenutačno nemaju raspoloživost, odabirom prikaza među njima:

- *Samo u zakašnjenju*: dakle retci čija bi količina trebala biti proizvedena na datum koji se promatra, ali zbog proizvodnih kašnjenja još uvijek nije;

- *Samo s negativnom zalihom*: dakle, količine koje trebaju biti proizvedene, koje su već planirane, ali za koje zalihama nije dovoljno da pokriju proizvodnju (vjerojatno će biti unesen nalog dobavljaču radi pokrivanja nedostajuće količine);

- *Sažeto*: pregled obiju navedenih opcija;;

- *Detalj sastavnice*: odlučujući uključiti detalj sastavnice odlučujete vidjeti dostupnost svih pojedinih komponenti osnovne distinkcije traženog artikla (prikazuju se i komponente s dostupnošću nula);

**Prodajna mjesta**

U slučaju maloprodaje, možete odlučiti prikazati dostupnost filtriranjem po prodajnom mjestu.

**Za dokumente koji nemaju potrebne datume**

U ovom slučaju možete odabrati hoćete li uzeti u obzir artikle koji nemaju datum primljenje robe ili datum spremnosti za isporuku, ili ih i dalje razmatrati dodjeljujući im datum koji se određuje prilikom pretraživanja i koji se navodi u odgovarajućem polju;


**Raspoloživost skladišta**

U ovoj sekciji možete odabrati koje skladište uzeti u obzir prilikom provjere stanja zaliha.

Nakon postavljanja različitih filtera i oznaka, kliknite na gumb **Traži** smješten u ribbon Bar.

### Raspoloživost proizvoda 

U rezultatnim tablicama za skladište možete vidjeti različite redove dostupnosti prema dokumentima ili kumulativni red prema skladištima. Dakle, možete vidjeti opću dostupnost na temelju obveza svih skladišta (Ukupno) ili dostupnost za pojedino skladište (sve različite kartice s
imenima skladišta kodiranim u bazi podataka).

### Detalji

U mreži detalja, klikom na odabrani redak u mreži za skladište, prikazat će se svi dokumenti povezani s tim pojedinačnim redkom. Dakle, narudžba klijenta na koju se odnosi, proizvodni nalog i povezana narudžba te eventualni prodajni dokumenti ako postoje (poput otpremnica, računa).

![](/img/it-it/erp-home/registers/items/availability-analysis/image10.png)

Što se tiče opisa zajedničkih funkcionalnosti koje se pojavljuju u svim obrascima, prisutnih u traci s opcijama, upućuje se na članak o [Zajedničkim gumbima](/docs/guide/common/common-buttons), posebno za funkcionalnosti ispisa također se upućuje na članak o [Pregledu i Ispisu](/docs/guide/common/operations-with-data/reports).


*Poseban gumb*:
> **Proširi/Skupi ekransku tablicu artikala**: gumb koji omogućuje proširivanje ili smanjenje mrežnih prikaza rezultata.

Za sve informacije koje nisu detaljno opisane u ovom dokumentu o zajedničkom radu formi, molimo pogledajte sljedeću vezu [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).
