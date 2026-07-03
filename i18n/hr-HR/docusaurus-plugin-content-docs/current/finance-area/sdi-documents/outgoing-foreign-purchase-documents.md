---
title: Izlazni inozemni e-dokumenti
sidebar_position: 5
---

:::tip[Napomena]
Za nabave je ova **obveza ukinuta** uvođenjem trenutačnog slanja [**fakture**](/docs/finance-area/e-invoice/auto-invoice/auto-invoice-generation) u SdI.

Za prodaje se trenutačno primjenjuje izravno slanje računa (vidi u nastavku).
:::

Propisi su predviđali obvezu slanja poreznoj upravi i podataka o transakcijama prodaje robe i pružanja usluga koje su **IZVRŠENE** prema subjektima koji nisu identificirani ili nemaju sjedište na državnom području, kao i o transakcijama koje su od takvih subjekata **PRIMLJENE**.

- Za **IZDANE** dokumente moguće je koristiti isti format koji je predviđen za talijanske e-račune. Alternativno, dokumenti se mogu poslati u formatu predviđenom za inozemne dokumente nabave, opisanom u sljedećoj točki.

- Za slanje dokumenata nabave od inozemnih dobavljača u SdI predviđen je [**poseban format**](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign).

Digitalni potpis obvezan je za obje vrste datoteka.

Slanje ovih datoteka u SdI u sustavu Fluentis upravlja se promjenom statusa dokumenata.

XML dokument zatim se šalje u SdI, koji ga provjerava i zaprima te vraća obavijesti o eventualnom odbijanju zbog neusklađenosti datoteke ili o uspješnom zaprimanju.

**Iz ove forme moguće je pojedinačno za svaki dokument ili skupno za više dokumenata istodobno upravljati promjenom statusa radi slanja u SdI, primjenjujući isti format kao za talijanske račune.**

U formi **Izlazni inozemni dokumenti nabave** prikazuju se sve datoteke generirane iz računovodstvenih knjiženja koje se odnose na ovu vrstu poslovnog događaja. Forma je podijeljena na gornji dio, u kojem se nalaze filtri za odabir datoteka kojima se upravlja, uključujući:

- Od datuma / do datuma zaprimanja
- Od datuma / do datuma zaprimanja kupca

U mreži rezultata prikazuju se podaci o datotekama kojima se već upravljalo ili kojima tek treba upravljati:

- **Status SdI-ja**: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u sustavu Fluentis i status koji vraća Fluentis Business Hub, a koji je izravno preuzet iz SdI-ja.
- **Naziv SdI datoteke**: naziv datoteke koja se stvara kada dokument prijeđe u status **GENERIRANO**. U izvornom obliku ili nakon primjene digitalnog potpisa predstavlja datoteku računa koja se šalje u SdI.
- **SdI ID**: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku zaprimanja.
- **Datum posljednjeg događaja**: datum posljednje promjene statusa datoteke, izvršene ručno ili kao posljedica napredovanja obrade u SdI-ju.

Na traci izbornika dostupne su funkcije za upravljanje odabranim dokumentom ili dokumentima:

- Gumb ![](/img/neutral/common/view.png) **Prikaži** omogućuje pregled detalja dokumenta, gdje je moguće pregledati događaje povezane s generiranom XML datotekom, preuzeti je ili promijeniti njezin status:

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)

- Gumb ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png) **Preuzmi privitak** preuzima odabranu datoteku u odabranu mapu datotečnog sustava.

- Gumb ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **Otvori dokument** otvara računovodstveno knjiženje povezano s odabranom datotekom.