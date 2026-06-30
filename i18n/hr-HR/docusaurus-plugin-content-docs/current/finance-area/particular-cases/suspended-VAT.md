---
sidebar_position: 3
title: PDV prema naplaćenim naknadama
---

:::important Fluentis Academy
**PDV prema naplaćenim naknadama** (tzv. **PDV po naplati**) predstavlja poseban način obračuna PDV-a kod kojeg porezna obveza ne nastaje prilikom isporuke dobra ili usluge, već u trenutku naplate odnosno plaćanja računa.

Porezni obveznik koji primjenjuje ovaj postupak obračunava PDV za sve izlazne i ulazne transakcije prema načelu novčanog tijeka. Drugim riječima, obveza PDV-a nastaje tek kada kupac plati račun, dok se pravo na odbitak pretporeza ostvaruje tek nakon što porezni obveznik podmiri račun dobavljača.

Na taj se način odstupa od uobičajenog načela prema kojem PDV postaje obvezan već u trenutku evidentiranja računa u poslovnim knjigama.

U praksi to znači da se PDV na izlaznim računima plaća tek nakon naplate od kupca, dok se pretporez po ulaznim računima može odbiti tek nakon plaćanja dobavljaču.

Bez obzira na trenutak naplate ili plaćanja, PDV mora biti obračunan najkasnije u roku od jedne godine od datuma isporuke robe ili usluge, osim u slučajevima stečaja ili drugih zakonom propisanih postupaka insolventnosti kupca ili naručitelja.
:::

### Konfiguracija računovodstvenih predložaka

Glavne postavke za upravljanje ovim poreznim postupkom definiraju se pravilnom konfiguracijom računovodstvenih predložaka.

Ključno je pravilno odabrati odgovarajuću **Vrstu prometa PDV-a** u računovodstvenim predlošcima.

Konkretno:

- računovodstveni predložak za knjiženje ulaznih računa mora imati vrstu prometa **PDV ulaza**
- računovodstveni predložak za knjiženje izlaznih računa mora imati vrstu prometa **Prodaja s PDV-om**
- računovodstveni predlošci za naplatu i plaćanje koriste standardnu vrstu prometa **Bez PDV-a**, dok se automatsko knjiženje prijenosa PDV-a izvršava putem polja **Automatski predložak**
- računovodstveni predložak za prijenos ulaznog PDV-a mora imati vrstu prometa **Prijenos ulaznog PDV-a**
- računovodstveni predložak za prijenos izlaznog PDV-a mora imati vrstu prometa **Prijenos izlaznog PDV-a**

Računovodstveni predlošci za knjiženje ulaznih i izlaznih računa razlikuju se od standardnih predložaka po tome što se PDV knjiži na posebne kontne račune namijenjene PDV-u u prema naplaćenoj naknadi, a ne izravno na standardne račune pretporeza ili obveze PDV-a koji se koriste u redovnom obračunu.

PDV registar može ostati isti kao i kod standardnog postupka te nije potrebno definirati poseban registar. Vrsta prometa PDV-a određena u računovodstvenom predlošku osigurava da se obračunani PDV ne uzima u obzir kao pretporez ili porezna obveza sve dok se ne izvrši automatski prijenos, iako će transakcije biti vidljive u evidenciji PDV-a za odgovarajuće razdoblje.

Računovodstveni predlošci za naplatu i plaćanje ostaju nepromijenjeni u odnosu na standardni postupak.

Automatski računovodstveni predlošci za prijenos PDV-a u prema naplaćenoj naknadi zatvaraju posebna konta PDV-a prema naplaćenoj naknadi te iznose prenose na standardna konta izlaznog odnosno ulaznog PDV-a. Od tog trenutka PDV postaje dospio za plaćanje ili ostvaruje pravo na odbitak pretporeza.

U nastavku su prikazani primjeri konfiguracije.

![](/img/it-it/finance-area/other/suspvat1.png)

![](/img/it-it/finance-area/other/suspvat2.png)

![](/img/it-it/finance-area/other/suspvat3.png)

![](/img/it-it/finance-area/other/suspvat4.png)

![](/img/it-it/finance-area/other/suspvat5.png)

### Obračun PDV-a nakon proteka jedne godine od transakcije

Sustav omogućuje automatsko pronalaženje otvorenih stavaka koje su ostale nenaplaćene ili neplaćene dulje od jedne godine te automatsko knjiženje prijenosa PDV-a kako bi on postao dospio za plaćanje odnosno priznat kao pretporez, sukladno važećim propisima.

Za tu svrhu može se koristiti forma **[Prijenos otvorenih stavaka](/docs/finance-area/maturity-values/procedures/maturity-values-giro/filter-tab)** uz odgovarajuću konfiguraciju.

### Konfiguracija u slučaju korištenja bankovnih mjenica (Ri.Ba.) i nenaplaćenih potraživanja

Ako se u prodajnom procesu koriste **Ri.Ba. (Ricevute Bancarie)** te se one predaju banci na naplatu ili na naplatu uz klauzulu *salvo buon fine*, računovodstveni predlošci konfiguriraju se na sljedeći način:

1. **Knjiženje izlaznog računa**: koristi se računovodstveni predložak konfiguriran prema prethodno opisanim pravilima.

2. **Generiranje Ri.Ba.**: koristi se standardni računovodstveni predložak. Otvorena stavka nastala izlaznim računom zatvara se, ali se još ne provodi prijenos PDV-a.

3. **Knjiženje predaje Ri.Ba. banci**: računovodstveni predložak mora biti povezan s automatskim predloškom za prijenos PDV-a. Prijenos PDV-a knjiži se na datum dospijeća bankovne mjenice.

4. **Knjiženje uplate**: provodi se na uobičajeni način.

#### Knjiženje nenaplaćenih Ri.Ba.

Kod knjiženja nenaplaćenih bankovnih mjenica nije potrebna posebna konfiguracija računovodstvenog predloška.

Sustav automatski prepoznaje otvorenu stavku zatvorenu putem Ri.Ba. koja je povezana s PDV-om prema naplaćenim naknadama te:

- poništava prethodno knjiženje prijenosa PDV-a,
- umjesto ponovnog otvaranja izvorne otvorene stavke evidentira storno plaćanja kako bi poništio zatvaranje nastalo izdavanjem Ri.Ba.,
- ponovno otvara izvornu otvorenu stavku povezanu s PDV-om prema naplaćenim naknadama.