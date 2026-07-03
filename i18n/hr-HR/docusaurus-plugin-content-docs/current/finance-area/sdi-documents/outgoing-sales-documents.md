---
title: Izlazni e-dokumenti
sidebar_position: 2
---

Forma **Izlazni e-dokumenti** podijeljena je na dva dijela: zaglavlje koje sadrži polja filtra za filtriranje dokumenata i mrežu rezultata izvršene pretrage.

## Gumbi na traci izbornika

- **Traži**: pokreće pretragu i prikazuje rezultate u mreži prema kriterijima unesenima u filtre zaglavlja.
- **Prikaži**: otvara integrirani preglednik za prikaz XML datoteke pomoću stilskog predloška koji je unaprijed učitan u Fluentis, kako bi se sadržaj mogao prikazati u čitljivom obliku.

:::note[Opcije prikaza]
Na traci izbornika, u odjeljku *Prikaži*, nalazi se poseban gumb **Promijeni prikaz**, kojim je moguće prebacivati se između dvaju alternativnih stilova prikaza računa.
:::

- **Otvori dokument**: otvara dokument računa na koji se odnosi predmetna XML datoteka.
- **Preuzmi privitke**: preuzima kopiju XML datoteke na lokalno računalo radi daljnje obrade, primjerice putem usluga slanja trećih strana.
- **Ponovno učitaj datoteku**: aktivan je kada je redak u statusu *Generirano* i omogućuje ponovno učitavanje datoteke iz vanjske mape (lokalne ili mrežne). Ova je funkcija korisna kada je potrebno ponovno učitati XML datoteku koja je ručno izmijenjena radi postavljanja određenih oznaka ili podataka kojima sustav ne upravlja, bez potrebe za prolaskom kroz korak *Potpisano*, kao što je to bilo potrebno ranije.

  Fluentis provjerava ima li datoteka isti naziv i je li XML sintaktički ispravan, ali ne provjerava strukturu prema pravilima SdI-ja. Stoga se za pogrešnu oznaku ili neispravnu vrijednost neće prikazati nikakva poruka, a slanje u SdI neće biti izvršeno. U zapisniku datoteke, kojem se može pristupiti, primjerice, gumbom **Prikaži**, u polju **Informacije** navodi se da je datoteka ručno prebrisana, zajedno s datumom izmjene.

- **Ispis / Pregled ispisa**: omogućuje ispis ili generiranje pregleda ispisa XML dokumenta.

:::note[Opcije prikaza]
Na traci izbornika, u odjeljku *Prikaži*, nalazi se poseban padajući izbornik u kojem je moguće odabrati jedan od dvaju alternativnih načina ispisa.
:::

- **Ispis / Pregled ispisa privitka**: omogućuje ispis ili generiranje pregleda ispisa PDF privitka XML dokumenta, ako je uključen u datoteku.

## Vrijednosti prikazane u tablici

- **Status SdI-ja**: status dokumenta povezan sa slanjem u SdI putem Fluentis Business Huba.
- **Tip**: referentna oznaka vrste prodajnog dokumenta.
- **Datum**, **Broj**, **Kupac**: datum i broj dokumenta te kupac na kojeg dokument glasi.
- **Datum primanja kupca**: datum dostave dokumenta kupcu ili datum kada je dokument stavljen na raspolaganje u zaštićenom području kupca. Potonji se slučaj odnosi na slanja kod kojih SdI ne može ispravno identificirati kupca/primatelja.
- **Naziv datoteke ES**: naziv XML datoteke koja se stvara kada dokument prijeđe u status **GENERIRANO**. U izvornom obliku ili nakon primjene digitalnog potpisa predstavlja datoteku računa koja se šalje u SdI.
- **Datum zadnjeg događaja**: odnosi se na posljednju radnju koju je izvršio operater ili na posljednju obavijest primljenu od SdI-ja tijekom postupka upravljanja dokumentom.

Klikom na proširenje računa (gumb **+** na krajnjoj lijevoj strani) otvara se detaljni prikaz prijelaza između statusa dokumenta. Prikazuju se pojedinačni prijelazi izvršeni tijekom upravljanja dokumentom, s pripadajućim datumom izvršenja i nazivom eventualne datoteke generirane promjenom statusa:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image02.png)

U tablici **Registar SdI dokumenata** prikazuju se svi dokumenti stvoreni u izlaznom procesu upravljanja računima, neovisno o njihovu statusu. Dvostrukim klikom na redak računa otvara se ploča u kojoj je moguće pregledati dokumente stvorene tijekom obrade datoteke računa i povijest prijelaza između statusa.

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image03.png)

U tablici **Registar SdI dokumenata**, nakon odabira jednog dokumenta računa ili više dokumenata računa koji se nalaze u istom statusu, moguće je upravljati statusom obrade dokumenta putem padajućeg izbornika **Status** na traci izbornika i odabrati novi status dokumenta:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image04.png)