---
title: Izlazni inostrani e-dokumenti
sidebar_position: 5
---

:::tip[Napomena]
Za nabavke je ova **obaveza ukinuta** uvođenjem trenutnog slanja [**fakture**](/docs/finance-area/e-invoice/auto-invoice/auto-invoice-generation) u SdI.

Za prodaje se trenutno primenjuje direktno slanje računa (vidi u nastavku).
:::

Propisi su predviđali obavezu slanja poreskoj upravi i podataka o transakcijama prodaje robe i pružanja usluga koje su **IZVRŠENE** prema subjektima koji nisu identifikovani ili nemaju sedište na državnoj teritoriji, kao i o transakcijama koje su od takvih subjekata **PRIMLJENE**.

- Za **IZDATE** dokumente moguće je koristiti isti format koji je predviđen za italijanske e-račune. Alternativno, dokumenti se mogu poslati u formatu predviđenom za inostrane dokumente nabavke, opisanom u sledećoj tački.

- Za slanje dokumenata nabavke od inostranih dobavljača u SdI predviđen je [**poseban format**](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign).

Digitalni potpis je obavezan za obe vrste datoteka.

Slanjem ovih datoteka u SdI u sistemu Fluentis upravlja se promenom statusa dokumenata.

XML dokument se zatim šalje u SdI, koji ga proverava i prima, a zatim vraća obaveštenja o eventualnom odbijanju zbog neusaglašenosti datoteke ili o uspešnom prijemu.

**Iz ove forme moguće je pojedinačno za svaki dokument ili grupno za više dokumenata istovremeno upravljati promenom statusa radi slanja u SdI, primenjujući isti format kao za italijanske račune.**

U formi **Izlazni inostrani dokumenti nabavke** prikazuju se sve datoteke generisane iz računovodstvenih knjiženja koja se odnose na ovu vrstu poslovnog događaja. Forma je podeljena na gornji deo, u kojem se nalaze filteri za odabir datoteka kojima se upravlja, uključujući:

- Od datuma / do datuma prijema
- Od datuma / do datuma prijema kupca

U tabeli rezultata prikazuju se podaci o datotekama kojima se već upravljalo ili kojima tek treba upravljati:

- **Status SdI-ja**: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u sistemu Fluentis i status koji vraća Fluentis Business Hub, a koji je direktno preuzet iz SdI-ja.
- **Naziv SdI datoteke**: naziv datoteke koja se kreira kada dokument pređe u status **GENERISANO**. U izvornom obliku ili nakon primene digitalnog potpisa predstavlja datoteku računa koja se šalje u SdI.
- **SdI ID**: jedinstveni identifikator koji SdI dodeljuje dokumentu u trenutku prijema.
- **Datum poslednjeg događaja**: datum poslednje promene statusa datoteke, izvršene ručno ili kao posledica napredovanja obrade u SdI-ju.

Na traci menija dostupne su funkcije za upravljanje odabranim dokumentom ili dokumentima:

- Dugme ![](/img/neutral/common/view.png) **Prikaži** omogućava pregled detalja dokumenta, gde je moguće pregledati događaje povezane sa generisanom XML datotekom, preuzeti je ili promeniti njen status:

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)

- Dugme ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png) **Preuzmi prilog** preuzima odabranu datoteku u odabranu fasciklu sistema datoteka.

- Dugme ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **Otvori dokument** otvara računovodstveno knjiženje povezano sa odabranom datotekom.