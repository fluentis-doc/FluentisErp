---
title: Pretraga proizvodnih naloga
description: Vodič za pretragu i napredno upravljanje proizvodnim nalozima u Fluentisu, uključujući generisanje lotova, promenu statusa i dopunu podataka.
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

Modul namenjen upravljanju **Proizvodnim nalozima** u Fluentisu osmišljen je za efikasnu podršku aktivnostima kontrole i planiranja proizvodnje.  
Iz glavne forme moguće je pregledavati i upravljati nalozima u različitim statusima, na primer *Lansiran* ili *Izvršni*, uz jednostavno razlikovanje naloga koji se mogu pokrenuti od onih koji su već u obradi.

Jedna od glavnih funkcionalnosti jeste mogućnost kreiranja više lotova iz jednog proizvodnog naloga, čime se omogućava veća fleksibilnost i preciznije upravljanje količinama za proizvodnju. Svakom lotu mogu se pridružiti posebni detalji, čime se obezbeđuje optimalna sledljivost. Intuitivno upravljanje nalozima ne samo da pojednostavljuje praćenje proizvodnih faza, već olakšava i prilagođavanje promenama operativnih potreba, čineći Fluentis strateškim alatom za povećanje efikasnosti proizvodnje.
:::

Modul **Proizvodni nalozi** omogućava pretragu i upravljanje proizvodnim nalozima putem namenske forme.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

#### Specifična dugmad

- **Generiši lotove**: aktivno je tek nakon odabira naloga i omogućava kreiranje proizvodnih lotova na osnovu količine iz samog proizvodnog naloga. Time je moguće kreirati nove proizvodne naloge sa istim glavnim brojem, ali sa različitim brojem lota, pri čemu je za svaki lot moguće definisati količinu za proizvodnju.

Ako se nalog nalazi u statusu **Zatvoren**, aktivira se i oznaka **Održavaj referencu na proizvodni nalog**, koja omogućava odabir da li će se novi lot naloga kreirati sa referencom na izvorni radni nalog ili bez nje. U tom slučaju važno je imati na umu da će radni nalog ostati u statusu *Zatvoren*, pa ga korisnik po potrebi mora ručno ponovo otvoriti.

:::note Napomena
Količina izvornog lota **ne može se menjati** ako su već kreirane *Liste preuzimanja*, *deklaracije proizvodnje* ili ako su pojedini materijali već utrošeni.

I dalje je moguće generisati nove lotove, ali **bez izmene količine izvornog lota**.
:::

> **Odaberi projekat**: ovo dugme omogućava povezivanje projekta sa odabranim proizvodnim nalozima;
>
> **Promena statusa naloga/narudžbine**: ovo dugme, koje postaje aktivno tek nakon odabira jednog ili više naloga, omogućava promenu statusa odabranih naloga (*Lansiran*, *Izvršni*, *Zatvoren*, *Arhiviran*);
>
> **Kompletiranje podataka naloga/narudžbine**: ovo dugme, koje postaje aktivno tek nakon odabira jednog ili više naloga, omogućava ponovno generisanje podataka proizvodnog naloga, zamenjujući ih podacima iz sastavnice i tehnološkog postupka definisanih u šifarniku;
>
> **Ponovni obračun troškova proizvodnog naloga**: ovo dugme omogućava ponovni obračun troškova proizvodnje za odabrane proizvodne naloge;
>
> **Aktiviraj oznaku obavezno**: omogućava aktiviranje oznake **Obavezno** na svim odabranim proizvodnim nalozima;
>
> **Deaktiviraj oznaku obavezno**: omogućava deaktiviranje oznake **Obavezno** na svim odabranim proizvodnim nalozima.