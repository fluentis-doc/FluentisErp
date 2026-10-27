---
title: Početni parametri skladišta
sidebar_position: 2
---

:::important Čemu služi
Uvod u početne parametre skladišta u sustavu Fluentis služi kao temeljna referentna točka za upravljanje logističkim operacijama unutar sustava. Ti parametri, dostupni putem namjenskog obrasca, omogućuju precizno konfiguriranje načina upravljanja skladištem i definiranje operativnih pravila koja utječu na cijeli lanac nabave i distribucije.

U sustavu Fluentis početni parametri uključuju zastavice i postavke koje reguliraju ključne aspekte, kao što su izmjena skladišnih knjiženja, upravljanje sastavnicama te izračun prosječnih i posljednjih troškova. Primjerice, zastavica „Izmjena skladišnih knjiženja povezanih s drugim dokumentima” omogućuje izmjenu kretanja robe i izravnu interakciju između različitih dokumenata skladišnih kretanja, dok zastavica „Dopusti negativnu zalihu” pruža dodatnu fleksibilnost pri izdavanju robe iz skladišta.

Važno je napomenuti da se ovi parametri moraju ponovno generirati svake godine kako bi se osiguralo pravilno upravljanje i ažuriranje skladišnih operacija. Osim toga, za svako pojedino skladište moguće je odrediti upravlja li se njime prema lokaciji, projektu ili kupcu/dobavljaču, što omogućuje prilagodbu operacija specifičnim poslovnim potrebama.

Također je moguće postaviti određena razdoblja tijekom kojih se mogu unositi knjiženja, čime se skladišne operacije dinamički prilagođavaju poslovnim potrebama. Konfiguracija ovih parametara ne samo da optimizira procese već ima i ključnu ulogu u osiguravanju operativne učinkovitosti i sljedivosti robe, što su ključni elementi uspješnog upravljanja suvremenom logistikom.
:::

U obrascu *Pretraživanje početnih parametara skladišta* odaberite željeni redak i dvaput kliknite na njega ili kliknite gumb *Novo*.

## 1. Podaci

**Godina**: predstavlja godinu za koju se žele postaviti parametri.

**Datum posljednjeg zatvaranja poslovne godine**: predstavlja datum posljednjeg zatvaranja skladišta uz prijenos stanja (pogledajte [Vrednovanje skladišta](/docs/logistics/physical-inventory/warehouse-valorization)). U većini slučajeva to je 31. 12. prethodne godine. Sljedećeg dana, obično 1. siječnja, unose se skladišna knjiženja ulaza za početni inventar, koja se automatski stvaraju postupkom *Vrednovanje (valorizacija) skladišta* primjenom predloška ulaza *Zalihe*. Taj predložak mora imati aktiviranu zastavicu *Zalihe*.

Za svako skladište unutar društva mora postojati točno jedan predložak ulaza za početne zalihe. Količine evidentirane tim predloškom na dan „otvaranja” skladišta predstavljaju *početne zalihe* tog skladišta. Sva kretanja nakon ovog ulaznog knjiženja identificiraju se kao ulazi ili izlazi iz skladišta, ovisno o tome radi li se o ulazu ili izlazu robe.

## 2. Općenito

**Izmjena skladišnih knjiženja povezanih s drugim dokumentima**: omogućuje izmjenu skladišnih knjiženja povezanih s nabavnim otpremnicama, ulaznim računima, prodajnim otpremnicama, izlaznim računima i drugim dokumentima. Ako ova zastavica nije aktivirana, skladišni dokumenti izrađeni na temelju nabavnih ili prodajnih dokumenata ne mogu se mijenjati. U tom će se slučaju prikazati poruka koja obavještava da izmjena nije moguća.

Kod izmjene skladišnih knjiženja iz dokumenata moguće je odabrati hoće li se mijenjati količina, cijena, oboje ili ništa od navedenog. To znači da, kada se izmijeni dokument koji je već proknjižen u skladištu, primjerice nabavna otpremnica, aplikacija provjerava jesu li aktivirane zastavice za izmjenu količine i cijena. Ako jesu, izmjene dokumenta prenose se i na povezano skladišno knjiženje. U suprotnom izmjene dokumenta ne utječu na pripadajuće skladišno knjiženje. Moguće je aktivirati samo jednu od tih dviju zastavica. Osim toga, moguće je omogućiti izravno dodavanje ili brisanje skladišnih kretanja iz dokumenta, umetanjem ili uklanjanjem pojedinačnih redaka.

**Dopusti nepotpunu protustavku sastavnice**: ako je aktivirana, omogućuje izmjenu sastavnice protustavke kretanja. Ako nije aktivirana, protustavka će se automatski izraditi za cijelu sastavnicu, bez mogućnosti izmjene.

Protustavka nastaje na temelju drugog predloška skladišnog kretanja povezanog s glavnim predloškom, koji se primjenjuje na komponente sastavnice. Primjerice, može se koristiti za upravljanje proizvodnim primkama putem skladišnih kretanja (izlaz komponenti sastavnice) ili za rastavljanje materijala. U jednostavnijim poslovnim okruženjima to omogućuje evidentiranje ulaza gotovih proizvoda i izlaza komponenti bez korištenja modula proizvodnje.

**Vrednovanje po skladištu**: omogućuje određivanje hoće li se pri zatvaranju skladišta uzimati u obzir prosječni troškovi (ili posljednji odnosno standardni troškovi, ovisno o odabranoj vrsti troška za zatvaranje skladišta) povezani s kretanjima tijekom godine u pojedinom skladištu. To znači da će artikl koji je imao kretanja u tri skladišta, primjerice, ako je ova zastavica aktivirana, imati tri zasebna retka u Povijesti skladišta za godinu za koju se provodi zatvaranje, vjerojatno s tri različita prosječna i tri različita posljednja troška.

**Dopusti izmjenu konta artikala koji su već korišteni**: omogućuje izmjenu podataka „Nabavna prodaja” i „Prodajna prodaja” za artikle koji su već imali skladišna kretanja. Ako zastavica nije aktivirana, takva je izmjena onemogućena.

**Upravljanje statusom radnog ciklusa putem tijeka rada (Workflow)**: ako je aktivirano, status radnog ciklusa može se mijenjati samo putem tijeka rada (Workflow).

**Kontrola odnosa artikl/dobavljač putem tijeka rada (Workflow)**: ako je aktivirana, zastavica **Blokiranje retka**, koja se nalazi na kartici **Preferirani dobavljači** u šifarniku artikala, može se mijenjati samo putem tijeka rada (Workflow).

**Datum početka razdoblja i Datum završetka razdoblja**: omogućuju korisniku definiranje razdoblja unutar kojeg se skladišna knjiženja mogu unositi, mijenjati i/ili brisati. Uobičajeno se kao datum početka razdoblja postavlja datum neposredno prije datuma posljednjeg zatvaranja skladišta, a kao datum završetka razdoblja kraj tekuće kalendarske godine.

### 2.1 Upravljanje lotovima i serijskim brojevima

**Upravljanje lotovima i serijskim brojevima**: omogućuje određivanje jesu li dopuštena skladišna kretanja za artikle koji se prate po lotovima i/ili serijskim brojevima. Ako ova zastavica nije aktivirana, sve ostale zastavice u bazi podataka koje upravljaju opcijama povezanim sa lotovima i serijskim brojevima nemaju učinka.

**Obvezni lotovi i serijski brojevi**: ako je aktivirana, korisnik mora unijeti lotove artikla u sve nabavne i prodajne dokumente, pod uvjetom da se artikl prati po lotovima ili serijskim brojevima.

**Omogućena jedinstvenost lotova**: ako je aktivirana, osigurava jedinstvenost lotova na razini društva i divizije prilikom njezina stvaranja. Ako više artikala koristi isti *tip koda lotova*, redni broj kojim se stvara lot nastavlja se povećavati. Ako nije aktivirana, jedinstvenost se određuje prema artiklu i varijanti. To znači da će se pri stvaranju novih lotova za različite artikle koji koriste isti *tip koda lota* svima predlagati isti prvi lot.

**Upravljanje statusom lotova putem tijeka rada (Workflow)**: ako je aktivirano, **Status lotova** te zastavice **Lotovi raspoloživa za prodaju** i **Zatvoreno** u šifarniku lotova mogu se mijenjati samo putem tijeka rada (Workflow). Isto vrijedi i za zastavice **Poništeno**, **Prisilno zatvoreno** i **Rezervirano** u šifarniku serijskih brojeva.

**Koristi barkodove skladišnih kretanja**: ako je aktivirano, u retcima skladišnih kretanja prikazuje se stupac **Barkod**.

## 3. Parametri zatvaranja

Na ovoj kartici moguće je odrediti za koja će se **skladišta** zatvaranje provoditi prema **varijanti**, **lokaciji**, **lotovima i serijskim brojevima**, **prodajnim projektima** i **kupcu/dobavljaču**. Aktiviranjem jedne od ovih zastavica određuje se da se skladišno knjiženje ulaza za početni inventar, koje automatski izrađuje postupak *Vrednovanje skladišta*, mora izraditi uzimajući u obzir odabranu postavku.

*Za svako skladište moguće je omogućiti sljedeće načine upravljanja:*

**Varijante**: ako je aktivirano, zatvaranje i prijenos stanja uzimat će u obzir varijante.

**Lokacije**: ako je aktivirano, zatvaranje i prijenos stanja uzimat će u obzir lokacije.

**Lotovi i serijski brojevi**: ako je aktivirano, zatvaranje i prijenos stanja uzimat će u obzir lotove i serijske brojeve.

**Projekt** (*Prodajni projekti* u prethodnim verzijama): ako je aktivirano, zatvaranje i prijenos stanja uzimat će u obzir projekt (prodajni projekt).

**Kupac/dobavljač**: ako je aktivirano, zatvaranje i prijenos stanja uzimat će u obzir kupca/dobavljača.

*Primjer*

U skladištu *Kooperacija* obično je aktivirana zastavica u stupcu *Kupac/dobavljač* jer je korisno da postupak izradi skladišno knjiženje ulaza za početni inventar za svakog kooperanta zasebno. U skladištima u kojima se skladišti i zaprima roba koja se prati po lotovima preporučuje se aktivirati zastavicu *Lotovi i serijski brojevi*. Isto tako, u skladištima u kojima se skladišti i zaprima roba koja se prati po varijantama preporučuje se aktivirati odgovarajuću zastavicu.

## 4. Parametri zaliha

Na ovoj kartici moguće je odrediti način upravljanja *zalihama* za svako skladište.

**Dopusti negativnu zalihu**: omogućuje da zaliha artikla bude manja od nule. Ako ova zastavica nije aktivirana, sustav uvijek onemogućuje spremanje skladišnih knjiženja ili izlaznih transakcija koje bi dovele zalihu bilo kojeg artikla ispod nule. Važno je napomenuti da aktiviranje ove zastavice ne omogućuje negativnu zalihu za artikle koji se prate po lotovima ili serijskim brojevima jer se takav artikl ne može izdati ako ne postoji zaliha lotova ili serijskog broja koji se želi izdati.

*Za svako skladište moguće je omogućiti sljedeće načine upravljanja:*

**Negativna zaliha**: omogućuje negativnu zalihu u tom skladištu, ali samo ako je u odjeljku *Opći parametri* aktivirana i zastavica *Dopusti negativnu zalihu*.

**Zaliha po lokaciji**: omogućuje provjeru zalihe i prema lokaciji navedenoj u skladišnom kretanju. Ako zaliha na toj lokaciji nije dovoljna, kretanje se neće izraditi.

**Zaliha po projektu**: omogućuje provjeru zalihe i prema projektu navedenom u skladišnom kretanju. Ako zaliha za taj projekt nije dovoljna, kretanje se neće izraditi.

**Zaliha po kupcu/dobavljaču**: omogućuje provjeru zalihe i prema kupcu/dobavljaču navedenom u knjiženju. Ako zaliha za tog kupca/dobavljača nije dovoljna, kretanje se neće izraditi. Ova se opcija može koristiti za skladišta kooperanata.

:::important Pažnja
Svaki put kada se mijenjaju postavke na kartici parametara zatvaranja ili na kartici parametara zaliha, važno je provjeriti jesu li obje kartice konfigurirane na dosljedan način. U suprotnom se može dogoditi da se, unatoč upravljanju zalihama prema kontu ili lokaciji, nakon prvog zatvaranja skladišta zaliha prikaže bez dodijeljenog konta ili s praznom lokacijom jer zatvaranje nije prenijelo te podatke.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).