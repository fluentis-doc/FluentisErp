---
title: Amortizacija
sidebar_position: 2
---

Prije svega, od temeljne je važnosti upravljati flagom **Operazioni incrementali**. Budući da se postupkom amortizacije upravlja drugačijom logikom, ako poduzeće koristi inkrementalnu opciju za svoje kategorije, bit će potrebno aktivirati ovu oznaku kako bi se identificirali podaci.

Stoga, ako postoje obje kategorije osnovnog sredstva s inkrementalnom opcijom i kategorije bez te opcije, amortizacija osnovnog sredstva mora se provesti u dvije faze nakon pretraživanja sa i bez tog flaga.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image01.png)

U podnožju obrasca, međutim, mora biti postavljena referentna godina izračuna: obično će se morati modificirati kako bi se umetnula godina koja prethodi tekućoj. Obračun amortizacije za godinu X nije dopušten ako amortizacija za godinu X-1 nije obračunata.  

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image02.png)

 Nakon što se izvrši pretraživanje podataka, moguće je, redak po redak, unijeti broj dana primjene kao i postotak amortizacije. U stvarnosti, preporučljivo je izvršiti izračun ovih posebnih slučajeva izravno unutar pojedinačne kartice osnovnog sredstva kako bi se izvršio brzi izračun s ukupnim odabirom redaka.   

Alternativna opcija koja se može koristiti, ako se žele koristiti različiti postoci između različitih sredstava, može se postaviti definicija **[parametra modula osnovnih sredstava](/docs/configurations/parameters/finance/fixed-assets-parameters)** pod nazivom **Postotak pojedinačne imovine**, što omogućuje da se definira postotak amortizacije koji će se koristiti definiran za svako sredstvo.  

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image03.png)



| Funkcija | Značenje |
| --- | --- |
| Traži | Traži popis amortizacije za izračun. |
| Amortizacija | Izvodi izračun za odabrane retke. |






