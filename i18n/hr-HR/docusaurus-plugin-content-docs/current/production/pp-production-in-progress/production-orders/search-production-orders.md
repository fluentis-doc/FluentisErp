---
title: Pretraga proizvodnih naloga
description: Vodič za pretragu i napredno upravljanje proizvodnim nalozima u Fluentisu, uključujući generiranje lotova, promjenu statusa i dopunu podataka.
sidebar_position: 2
schema: TechArticle
tags:
  - Proizvodnja
  - Nalozi
  - Planiranje
last_update:
  author: Fluentis Documentation Team
---

# Pretraga proizvodnih naloga

:::important Čemu služi

Modul namijenjen upravljanju **Proizvodnim nalozima** u Fluentisu osmišljen je za učinkovitu podršku aktivnostima kontrole i planiranja proizvodnje.  
Iz glavne forme moguće je pregledavati i upravljati nalozima u različitim statusima, primjerice *Lansiran* ili *Izvršni*, uz jednostavno razlikovanje naloga koji se mogu pokrenuti od onih koji su već u obradi.

Jedna od glavnih funkcionalnosti jest mogućnost kreiranja više lotova iz jednog proizvodnog naloga, čime se omogućuje veća fleksibilnost i preciznije upravljanje količinama za proizvodnju. Svakom lotu mogu se pridružiti posebni detalji, čime se osigurava optimalna sljedivost. Intuitivno upravljanje nalozima ne samo da pojednostavljuje praćenje proizvodnih faza, već olakšava i prilagodbu promjenama operativnih potreba, čineći Fluentis strateškim alatom za povećanje učinkovitosti proizvodnje.
:::

Modul **Proizvodni nalozi** omogućuje pretragu i upravljanje proizvodnim nalozima putem namjenske forme.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

#### Specifični gumbi

- **Generiraj lotove**: aktivan je tek nakon odabira naloga te omogućuje kreiranje proizvodnih lotova na temelju količine iz samog proizvodnog naloga. Time je moguće kreirati nove proizvodne naloge s istim glavnim brojem, ali s različitim brojem lota, pri čemu je za svaki lot moguće definirati količinu za proizvodnju.

Ako se nalog nalazi u statusu **Zatvoren**, aktivira se i oznaka **Održavaj referencu na proizvodni nalog**, koja omogućuje odabir hoće li se novi lot naloga kreirati s referencom na izvorni radni nalog ili bez nje. U tom je slučaju važno imati na umu da će radni nalog ostati u statusu *Zatvoren*, pa ga korisnik po potrebi mora ručno ponovno otvoriti.

:::note Napomena
Količina izvornog lota **ne može se mijenjati** ako su već kreirane *Liste preuzimanja*, *deklaracije proizvodnje* ili ako su pojedini materijali već utrošeni.

I dalje je moguće generirati nove lotove, ali **bez izmjene količine izvornog lota**.
:::

> **Odaberi projekt**: ovaj gumb omogućuje povezivanje projekta s odabranim proizvodnim nalozima;
>
> **Promjena statusa naloga/narudžbe**: ovaj gumb, koji postaje aktivan tek nakon odabira jednog ili više naloga, omogućuje promjenu statusa odabranih naloga (*Lansiran*, *Izvršni*, *Zatvoren*, *Arhiviran*);
>
> **Kompletiranje podataka naloga/narudžbe**: ovaj gumb, koji postaje aktivan tek nakon odabira jednog ili više naloga, omogućuje ponovno generiranje podataka proizvodnog naloga, zamjenjujući ih podacima iz sastavnice i tehnološkog postupka definiranih u šifarniku;
>
> **Ponovni izračun troškova proizvodnog naloga**: ovaj gumb omogućuje ponovni izračun troškova proizvodnje za odabrane proizvodne naloge;
>
> **Aktiviraj oznaku obvezno**: omogućuje aktiviranje oznake **Obvezno** na svim odabranim proizvodnim nalozima;
>
> **Deaktiviraj oznaku obvezno**: omogućuje deaktiviranje oznake **Obvezno** na svim odabranim proizvodnim nalozima.