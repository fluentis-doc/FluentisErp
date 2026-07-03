---
title: Izlazni e-dokumenti
sidebar_position: 2
---

Forma **Izlazni e-dokumenti** podeljena je na dva dela: zaglavlje koje sadrži polja filtera za filtriranje dokumenata i tabelu rezultata izvršene pretrage.

## Dugmad na traci menija

- **Traži**: pokreće pretragu i prikazuje rezultate u tabeli prema kriterijumima unetim u filtere zaglavlja.
- **Prikaži**: otvara integrisani preglednik za prikaz XML datoteke pomoću stilskog šablona koji je unapred učitan u Fluentis, kako bi se sadržaj mogao prikazati u čitljivom obliku.

:::note[Opcije prikaza]
Na traci menija, u odeljku *Prikaži*, nalazi se posebno dugme **Promeni prikaz**, kojim je moguće prebacivati se između dva alternativna stila prikaza računa.
:::

- **Otvori dokument**: otvara dokument računa na koji se odnosi predmetna XML datoteka.
- **Preuzmi priloge**: preuzima kopiju XML datoteke na lokalni računar radi dalje obrade, na primer putem usluga slanja trećih strana.
- **Ponovo učitaj datoteku**: aktivno je kada je red u statusu *Generisano* i omogućava ponovno učitavanje datoteke iz spoljne fascikle (lokalne ili mrežne). Ova funkcija je korisna kada je potrebno ponovo učitati XML datoteku koja je ručno izmenjena radi postavljanja određenih oznaka ili podataka kojima sistem ne upravlja, bez potrebe za prolaskom kroz korak *Potpisano*, kao što je to ranije bilo potrebno.

  Fluentis proverava da li datoteka ima isti naziv i da li je XML sintaksički ispravan, ali ne proverava strukturu prema pravilima SdI-ja. Stoga se za pogrešnu oznaku ili neispravnu vrednost neće prikazati nikakva poruka, a slanje u SdI neće biti izvršeno. U evidenciji datoteke, kojoj se može pristupiti, na primer, dugmetom **Prikaži**, u polju **Informacije** navodi se da je datoteka ručno prepisana, zajedno sa datumom izmene.

- **Štampa / Pregled štampe**: omogućava štampanje ili generisanje pregleda štampe XML dokumenta.

:::note[Opcije prikaza]
Na traci menija, u odeljku *Prikaži*, nalazi se poseban padajući meni u kojem je moguće odabrati jedan od dva alternativna načina štampe.
:::

- **Štampa / Pregled štampe priloga**: omogućava štampanje ili generisanje pregleda štampe PDF priloga XML dokumenta, ako je uključen u datoteku.

## Vrednosti prikazane u tabeli

- **Status SdI-ja**: status dokumenta povezan sa slanjem u SdI putem Fluentis Business Huba.
- **Tip**: referentna oznaka vrste prodajnog dokumenta.
- **Datum**, **Broj**, **Kupac**: datum i broj dokumenta, kao i kupac na kojeg dokument glasi.
- **Datum prijema kupca**: datum dostave dokumenta kupcu ili datum kada je dokument stavljen na raspolaganje u zaštićenom području kupca. Poslednji slučaj odnosi se na slanja kod kojih SdI ne može ispravno identifikovati kupca/primaoca.
- **Naziv datoteke ES**: naziv XML datoteke koja se kreira kada dokument pređe u status **GENERISANO**. U izvornom obliku ili nakon primene digitalnog potpisa predstavlja datoteku računa koja se šalje u SdI.
- **Datum poslednjeg događaja**: odnosi se na poslednju radnju koju je izvršio operater ili na poslednje obaveštenje primljeno od SdI-ja tokom postupka upravljanja dokumentom.

Klikom na proširenje računa (dugme **+** na krajnjoj levoj strani) otvara se detaljni prikaz prelaza između statusa dokumenta. Prikazuju se pojedinačni prelazi izvršeni tokom upravljanja dokumentom, sa pripadajućim datumom izvršenja i nazivom eventualne datoteke generisane promenom statusa:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image02.png)

U tabeli **Registar SdI dokumenata** prikazuju se svi dokumenti kreirani u izlaznom procesu upravljanja računima, nezavisno od njihovog statusa. Dvostrukim klikom na red računa otvara se panel u kojem je moguće pregledati dokumente kreirane tokom obrade datoteke računa i istoriju prelaza između statusa.

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image03.png)

U tabeli **Registar SdI dokumenata**, nakon odabira jednog dokumenta računa ili više dokumenata računa koji se nalaze u istom statusu, moguće je upravljati statusom obrade dokumenta putem padajućeg menija **Status** na traci menija i odabrati novi status dokumenta:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image04.png)