---
title: Početni parametri skladišta
sidebar_position: 2
---

:::important[Čemu služi]
Uvod u početne parametre skladišta u sistemu Fluentis predstavlja osnovu za upravljanje logističkim operacijama unutar sistema. Ovi parametri, dostupni putem namenski predviđenog obrasca, omogućavaju precizno podešavanje načina upravljanja skladištem i definisanje operativnih pravila koja utiču na ceo lanac nabavke i distribucije.

U sistemu Fluentis početni parametri obuhvataju zastavice i podešavanja koja regulišu ključne aspekte, kao što su izmena skladišnih knjiženja, upravljanje sastavnicama i obračun prosečnih i poslednjih troškova. Na primer, zastavica „Izmena skladišnih knjiženja povezanih sa drugim dokumentima” omogućava izmenu robnih kretanja i direktnu interakciju između različitih dokumenata skladišnih kretanja, dok zastavica „Dozvoli negativne zalihe” pruža dodatnu fleksibilnost prilikom izdavanja robe iz skladišta.

Važno je napomenuti da se ovi parametri moraju ponovo generisati svake godine kako bi se obezbedilo pravilno upravljanje skladišnim operacijama i njihovo ažuriranje. Osim toga, za svako pojedinačno skladište moguće je odrediti da li se njime upravlja prema lokaciji, projektu ili kupcu/dobavljaču, što omogućava prilagođavanje operacija specifičnim poslovnim potrebama.

Takođe je moguće podesiti određene periode tokom kojih je dozvoljeno unositi knjiženja, čime se skladišne operacije dinamički prilagođavaju poslovnim potrebama. Konfiguracija ovih parametara ne samo da optimizuje procese već ima i ključnu ulogu u obezbeđivanju operativne efikasnosti i sledljivosti robe, što su ključni elementi uspešnog upravljanja savremenom logistikom.
:::

U obrascu *Pretraga početnih parametara skladišta* izaberite željeni red i dvaput kliknite na njega ili kliknite na dugme *Novo*.

## 1. Podaci

**Godina**: predstavlja godinu za koju se podešavaju parametri.

**Datum poslednjeg zatvaranja poslovne godine**: predstavlja datum poslednjeg zatvaranja skladišta uz prenos stanja (pogledajte [Vrednovanje skladišta](/docs/logistics/physical-inventory/warehouse-valorization)). U većini slučajeva to je 31. 12. prethodne godine. Sledećeg dana, obično 1. januara, unose se skladišna knjiženja ulaza za početni inventar, koja se automatski kreiraju postupkom *Vrednovanje skladišta* primenom šablona ulaza *Zalihe*. Taj šablon mora imati aktiviranu zastavicu *Zalihe*.

Za svako skladište u okviru preduzeća mora postojati tačno jedan šablon ulaza za početne zalihe. Količine evidentirane ovim šablonom na dan „otvaranja” skladišta predstavljaju *početne zalihe* tog skladišta. Sva kretanja nakon ovog ulaznog knjiženja identifikuju se kao ulazi ili izlazi iz skladišta, u zavisnosti od toga da li je reč o ulazu ili izlazu robe.

## 2. Opšte

**Izmena skladišnih knjiženja povezanih sa drugim dokumentima**: omogućava izmenu skladišnih knjiženja povezanih sa nabavnim otpremnicama, ulaznim fakturama, prodajnim otpremnicama, izlaznim fakturama i drugim dokumentima. Ako ova zastavica nije aktivirana, skladišni dokumenti kreirani na osnovu nabavnih ili prodajnih dokumenata ne mogu se menjati. U tom slučaju prikazuje se poruka koja obaveštava da izmena nije moguća.

Prilikom izmene skladišnih knjiženja iz dokumenata moguće je odabrati da li će se menjati količina, cena, obe vrednosti ili nijedna od njih. To znači da, kada se izmeni dokument koji je već proknjižen u skladištu, na primer nabavna otpremnica, aplikacija proverava da li su aktivirane zastavice za izmenu količine i cene. Ako jesu, izmene dokumenta prenose se i na povezano skladišno knjiženje. U suprotnom, izmene dokumenta ne utiču na odgovarajuće skladišno knjiženje. Moguće je aktivirati samo jednu od ove dve zastavice. Osim toga, moguće je omogućiti direktno dodavanje ili brisanje skladišnih kretanja iz dokumenta, umetanjem ili uklanjanjem pojedinačnih redova.

**Dozvoli nepotpunu protivstavku sastavnice**: ako je aktivirana, omogućava izmenu protivstavke kretanja sastavnice. Ako nije aktivirana, protivstavka se automatski kreira za celu sastavnicu, bez mogućnosti izmene.

Protivstavka nastaje na osnovu drugog šablona skladišnog kretanja povezanog sa glavnim šablonom, koji se primenjuje na komponente sastavnice. Na primer, može se koristiti za upravljanje proizvodnim prijemnicama putem skladišnih kretanja (izlaz komponenti sastavnice) ili za rastavljanje materijala. U jednostavnijim poslovnim okruženjima to omogućava evidentiranje ulaza gotovih proizvoda i izlaza komponenti bez korišćenja modula proizvodnje.

**Vrednovanje po skladištu**: omogućava određivanje da li će se prilikom zatvaranja skladišta uzimati u obzir prosečni troškovi (ili poslednji, odnosno standardni troškovi, u zavisnosti od izabrane vrste troška za zatvaranje skladišta) povezani sa kretanjima tokom godine u pojedinačnom skladištu. To znači da će artikal koji je imao kretanja u tri skladišta, na primer, ako je ova zastavica aktivirana, imati tri zasebna reda u Istoriji skladišta za godinu za koju se sprovodi zatvaranje, verovatno sa tri različita prosečna i tri različita poslednja troška.

**Dozvoli izmenu konta artikala koji su već korišćeni**: omogućava izmenu podataka „Nabavna prodaja” i „Prodajna prodaja” za artikle koji su već imali skladišna kretanja. Ako zastavica nije aktivirana, takva izmena nije dozvoljena.

**Upravljanje statusom radnog ciklusa putem toka rada (Workflow)**: ako je aktivirano, status radnog ciklusa može se menjati samo putem toka rada (Workflow).

**Kontrola odnosa artikal/dobavljač putem toka rada (Workflow)**: ako je aktivirana, zastavica **Blokiranje reda**, koja se nalazi na kartici **Preferirani dobavljači** u šifarniku artikala, može se menjati samo putem toka rada (Workflow).

**Datum početka perioda i Datum završetka perioda**: omogućavaju korisniku da definiše period u okviru kojeg se skladišna knjiženja mogu unositi, menjati i/ili brisati. Uobičajeno se kao datum početka perioda postavlja datum neposredno pre datuma poslednjeg zatvaranja skladišta, a kao datum završetka perioda kraj tekuće kalendarske godine.

### 2.1 Upravljanje lotovima i serijskim brojevima

**Upravljanje lotovima i serijskim brojevima**: omogućava određivanje da li su dozvoljena skladišna kretanja za artikle koji se prate po lotovima i/ili serijskim brojevima. Ako ova zastavica nije aktivirana, sve ostale zastavice u bazi podataka koje upravljaju opcijama povezanim sa lotovima i serijskim brojevima nemaju efekta.

**Obavezni lotovi i serijski brojevi**: ako je aktivirana, korisnik mora da unese lotove artikla u sve nabavne i prodajne dokumente, pod uslovom da se artikal prati po lotovima ili serijskim brojevima.

**Omogućena jedinstvenost lotova**: ako je aktivirana, obezbeđuje jedinstvenost lotova na nivou preduzeća i divizije prilikom njihovog kreiranja. Ako više artikala koristi isti *tip koda lota*, redni broj za kreiranje lota nastavlja da se povećava. Ako nije aktivirana, jedinstvenost se određuje prema artiklu i varijanti. To znači da će se prilikom kreiranja novih lotova za različite artikle koji koriste isti *tip koda lota* svima predlagati isti prvi lot.

**Upravljanje statusom lotova putem toka rada (Workflow)**: ako je aktivirano, **Status lotova** i zastavice **Lotovi raspoloživi za prodaju** i **Zatvoreno** u šifarniku lotova mogu se menjati samo putem toka rada (Workflow). Isto važi i za zastavice **Poništeno**, **Prisilno zatvoreno** i **Rezervisano** u šifarniku serijskih brojeva.

**Koristi bar-kodove skladišnih kretanja**: ako je aktivirano, u redovima skladišnih kretanja prikazuje se kolona **Bar-kod**.

## 3. Parametri zatvaranja

Na ovoj kartici moguće je odrediti za koja će se **skladišta** zatvaranje sprovoditi prema **varijanti**, **lokaciji**, **lotovima i serijskim brojevima**, **prodajnim projektima** i **kupcu/dobavljaču**. Aktiviranjem jedne od ovih zastavica određuje se da skladišno knjiženje ulaza za početni inventar, koje automatski kreira postupak *Vrednovanje skladišta*, mora biti kreirano uz uvažavanje izabrane postavke.

*Za svako skladište moguće je omogućiti sledeće načine upravljanja:*

**Varijante**: ako je aktivirano, zatvaranje i prenos stanja uvažavaće varijante.

**Lokacije**: ako je aktivirano, zatvaranje i prenos stanja uvažavaće lokacije.

**Lotovi i serijski brojevi**: ako je aktivirano, zatvaranje i prenos stanja uvažavaće lotove i serijske brojeve.

**Projekat** (*Prodajni projekti* u prethodnim verzijama): ako je aktivirano, zatvaranje i prenos stanja uvažavaće projekat (prodajni projekat).

**Kupac/dobavljač**: ako je aktivirano, zatvaranje i prenos stanja uvažavaće kupca/dobavljača.

*Primer*

U skladištu *Kooperacija* obično je aktivirana zastavica u koloni *Kupac/dobavljač* jer je korisno da postupak kreira skladišno knjiženje ulaza za početni inventar zasebno za svakog kooperanta. U skladištima u kojima se skladišti i prima roba koja se prati po lotovima preporučuje se aktiviranje zastavice *Lotovi i serijski brojevi*. Isto tako, u skladištima u kojima se skladišti i prima roba koja se prati po varijantama preporučuje se aktiviranje odgovarajuće zastavice.

## 4. Parametri zaliha

Na ovoj kartici moguće je odrediti način upravljanja *zalihama* za svako skladište.

**Dozvoli negativne zalihe**: omogućava da zaliha artikla bude manja od nule. Ako ova zastavica nije aktivirana, sistem uvek onemogućava čuvanje skladišnih knjiženja ili izlaznih transakcija koje bi dovele do toga da zaliha bilo kog artikla padne ispod nule. Važno je napomenuti da aktiviranje ove zastavice ne omogućava negativne zalihe za artikle koji se prate po lotovima ili serijskim brojevima, jer se takav artikal ne može izdati ako ne postoji zaliha lota ili serijskog broja koji se želi izdati.

*Za svako skladište moguće je omogućiti sledeće načine upravljanja:*

**Negativne zalihe**: omogućava negativne zalihe u tom skladištu, ali samo ako je u odeljku *Opšti parametri* aktivirana i zastavica *Dozvoli negativne zalihe*.

**Zalihe po lokaciji**: omogućava proveru zaliha i prema lokaciji navedenoj u skladišnom kretanju. Ako zalihe na toj lokaciji nisu dovoljne, kretanje neće biti kreirano.

**Zalihe po projektu**: omogućava proveru zaliha i prema projektu navedenom u skladišnom kretanju. Ako zalihe za taj projekat nisu dovoljne, kretanje neće biti kreirano.

**Zalihe po kupcu/dobavljaču**: omogućava proveru zaliha i prema kupcu/dobavljaču navedenom u knjiženju. Ako zalihe za tog kupca/dobavljača nisu dovoljne, kretanje neće biti kreirano. Ova opcija može se koristiti za skladišta kooperanata.

:::important[Pažnja]
Svaki put kada se menjaju podešavanja na kartici parametara zatvaranja ili na kartici parametara zaliha, važno je proveriti da li su obe kartice konfigurisane na dosledan način. U suprotnom se može dogoditi da se, uprkos upravljanju zalihama prema kontu ili lokaciji, nakon prvog zatvaranja skladišta zalihe prikažu bez dodeljenog konta ili sa praznom lokacijom, jer zatvaranje nije prenelo te podatke.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).