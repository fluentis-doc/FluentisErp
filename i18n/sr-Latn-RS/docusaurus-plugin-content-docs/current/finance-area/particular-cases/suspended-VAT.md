---
sidebar_position: 3
title: PDV po naplaćenoj realizaciji
---

:::important Fluentis Academy
**PDV po naplaćenoj realizaciji** (tzv. **PDV po naplati**) predstavlja poseban način obračuna PDV-a kod kojeg poreska obaveza ne nastaje u trenutku isporuke robe ili usluge, već u trenutku naplate, odnosno plaćanja računa.

Poreski obveznik koji primenjuje ovaj postupak obračunava PDV za sve izlazne i ulazne transakcije prema principu novčanog toka. Drugim rečima, obaveza za PDV nastaje tek kada kupac plati račun, dok se pravo na odbitak prethodnog poreza ostvaruje tek nakon što poreski obveznik izmiri račun dobavljača.

Na taj način odstupa se od uobičajenog principa prema kojem PDV postaje obavezan već u trenutku evidentiranja računa u poslovnim knjigama.

U praksi to znači da se PDV po izlaznim računima plaća tek nakon naplate od kupca, dok se prethodni porez po ulaznim računima može odbiti tek nakon plaćanja dobavljaču.

Bez obzira na trenutak naplate ili plaćanja, PDV mora biti obračunat najkasnije u roku od jedne godine od datuma isporuke robe ili usluge, osim u slučajevima stečaja ili drugih zakonom propisanih postupaka insolventnosti kupca ili naručioca.
:::

### Konfiguracija obrazaca knjiženja

Glavna podešavanja za upravljanje ovim poreskim režimom definišu se pravilnom konfiguracijom obrazaca knjiženja.

Ključno je pravilno odabrati odgovarajuću **Vrstu PDV prometa** u obrascima knjiženja.

Konkretno:

- obrazac knjiženja za evidentiranje ulaznih računa mora imati vrstu prometa **Ulazni PDV**
- obrazac knjiženja za evidentiranje izlaznih računa mora imati vrstu prometa **Prodaja sa PDV-om**
- obrasci knjiženja za naplatu i plaćanje koriste standardnu vrstu prometa **Bez PDV-a**, dok se automatsko knjiženje prenosa PDV-a izvršava putem polja **Automatski obrazac**
- obrazac knjiženja za prenos ulaznog PDV-a mora imati vrstu prometa **Prenos ulaznog PDV-a**
- obrazac knjiženja za prenos izlaznog PDV-a mora imati vrstu prometa **Prenos izlaznog PDV-a**

Obrasci knjiženja za evidentiranje ulaznih i izlaznih računa razlikuju se od standardnih obrazaca po tome što se PDV knjiži na posebne kontne račune namenjene PDV-u po naplaćenoj realizaciji, a ne direktno na standardne račune prethodnog poreza ili obaveze za PDV koji se koriste u redovnom obračunu.

PDV knjiga može ostati ista kao i kod standardnog postupka i nije potrebno definisati poseban registar. Vrsta PDV prometa definisana u obrascu knjiženja obezbeđuje da se obračunati PDV ne uzima u obzir kao prethodni porez ili poreska obaveza sve dok se ne izvrši automatski prenos, iako će transakcije biti vidljive u PDV evidenciji za odgovarajući period.

Obrasci knjiženja za naplatu i plaćanje ostaju nepromenjeni u odnosu na standardni postupak.

Automatski obrasci knjiženja za prenos PDV-a po naplaćenoj realizaciji zatvaraju posebne kontne račune PDV-a po naplaćenoj realizaciji i prenose iznose na standardne račune izlaznog, odnosno ulaznog PDV-a. Od tog trenutka PDV dospeva za plaćanje ili se ostvaruje pravo na odbitak prethodnog poreza.

U nastavku su prikazani primeri konfiguracije.

![](/img/it-it/finance-area/other/suspvat1.png)

![](/img/it-it/finance-area/other/suspvat2.png)

![](/img/it-it/finance-area/other/suspvat3.png)

![](/img/it-it/finance-area/other/suspvat4.png)

![](/img/it-it/finance-area/other/suspvat5.png)

### Obračun PDV-a nakon isteka jedne godine od transakcije

Sistem omogućava automatsko pronalaženje otvorenih stavki koje su ostale nenaplaćene ili neplaćene duže od jedne godine, kao i automatsko knjiženje prenosa PDV-a kako bi on postao dospeo za plaćanje, odnosno priznat kao prethodni porez, u skladu sa važećim propisima.

U tu svrhu može se koristiti forma **[Prenos otvorenih stavki](/docs/finance-area/maturity-values/procedures/maturity-values-giro/filter-tab)** uz odgovarajuću konfiguraciju.

### Konfiguracija u slučaju korišćenja bankarskih menica (Ri.Ba.) i nenaplaćenih potraživanja

Ako se u procesu prodaje koriste **Ri.Ba. (Ricevute Bancarie)** i predaju banci na naplatu ili na naplatu uz klauzulu *salvo buon fine*, obrasci knjiženja konfigurišu se na sledeći način:

1. **Knjiženje izlaznog računa**: koristi se obrazac knjiženja konfigurisan prema prethodno opisanim pravilima.

2. **Generisanje Ri.Ba.**: koristi se standardni obrazac knjiženja. Otvorena stavka nastala izlaznim računom zatvara se, ali se prenos PDV-a još ne izvršava.

3. **Knjiženje predaje Ri.Ba. banci**: obrazac knjiženja mora biti povezan sa automatskim obrascem za prenos PDV-a. Prenos PDV-a knjiži se na datum dospeća bankarske menice.

4. **Knjiženje uplate**: sprovodi se na uobičajen način.

#### Knjiženje nenaplaćenih Ri.Ba.

Kod knjiženja nenaplaćenih bankarskih menica nije potrebna posebna konfiguracija obrasca knjiženja.

Sistem automatski prepoznaje otvorenu stavku zatvorenu putem Ri.Ba. koja je povezana sa PDV-om po naplaćenoj realizaciji i:

- poništava prethodno knjiženje prenosa PDV-a,
- umesto ponovnog otvaranja izvorne otvorene stavke evidentira storno plaćanja kako bi poništio zatvaranje nastalo izdavanjem Ri.Ba.,
- ponovo otvara izvornu otvorenu stavku povezanu sa PDV-om po naplaćenoj realizaciji.