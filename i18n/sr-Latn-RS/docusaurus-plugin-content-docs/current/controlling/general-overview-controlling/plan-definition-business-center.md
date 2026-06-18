---
title: Definicija plana poslovnih centara
sidebar_position: 2.1
---

Plan [***poslovnih centara***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) predstavlja prvi i najvažniji korak za pravilno postavljanje analitičkog i upravljačkog računovodstva. Da bi se centri mogli šifrirati, najpre je potrebno definisati ***Dimenzije*** analize, a zatim i ***Kategorije poslovnih centara***.

:::tip NAPOMENA
U preduzećima u kojima opcija *kontrolinga* nije aktivirana, omogućeno je kreiranje troškovnih centara bez dimenzije analize i bez kategorije centra.
:::

[***Dimenzija***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) analize je, u suštini, dosledan kriterijum za raspodelu troškova i prihoda unutar preduzeća. U analitičkom računovodstvu najčešće postoji dimenzija INDUSTRIJE/DIREKCIJE, koja se koristi u svim preduzećima za podelu poslovanja na različite funkcionalne celine. U ovoj dimenziji nalaze se: centar administracije, centar direkcije, centar tehničke pripreme, centar komercijale, proizvodni centri (pojedinačne mašine, grupe mašina, radne grupe itd.). Tipičan alternativni primer dimenzije su PROJEKTI, odnosno preduzeća koja posluju po projektima ili nalozima. Dimenzija Projekti obuhvata sve direktne troškove i prihode projekta, dok je prijem pomoćnih i opštih troškova (npr. direkcije, administracije) iz industrijske/direkcijske dimenzije moguć putem *cost driver-a* (nosioca troškova). Pored toga, mogu se definisati dodatne dimenzije koje omogućavaju odvojeno praćenje određenih vrsta troškova, kao što su: dimenzija sajmova, dimenzija investicija, dimenzija budžeta nabavke.

:::tip NAPOMENA
Ove alternativne dimenzije, koje nisu povezane sa industrijskim/direkcijskim modelom ili modelom projekata, obično su samostalni elementi i mogu se dodati nakon početne konfiguracije.
:::

*Obavezna karakteristika poslovnih centara* je njihova kategorija. Na nivou industrijske/direkcijske dimenzije postoji pet osnovnih tipova poslovnih centara:

***1) Proizvodni ili direktni centri:*** direktno učestvuju u proizvodnji proizvoda ili usluga. Ključno je njihovo pravilno grupisanje, jer pogrešna agregacija može dovesti do netačnih troškovnih tarifa i iskriviti analizu profitabilnosti. Ne smeju se, na primer, grupisati mašine sa različitim troškovima u isti centar jer će ponderisana prosečna tarifa biti nerealna. Takođe, mašine sa operaterima ne treba mešati sa automatizovanim mašinama, jer to može iskriviti obračune marži;

***2) Indirektni pomoćni centri:*** nisu direktno povezani sa proizvodnim procesom, ali su neophodni za rad proizvodnih centara. Njihovi troškovi se redistribuiraju pomoću *cost driver-a* (nosioca troškova);

***3) Indirektni zajednički centri:*** predstavljaju organizacione i funkcionalne celine (npr. komercijalni sektor, tehnička služba, kontrola kvaliteta);

***4) Profitni centri ili centri poslovnog rezultata:*** omogućavaju povezivanje prihoda i troškova specifičnih poslovnih segmenata. Primer mogu biti grupe proizvoda, prodajni kanali i slično;

***5) Virtuelni ili pomoćni centri:*** služe kao podrška modelu, bilo za redistribuciju troškova, bilo kao privremeni centri za knjiženje podataka koji se ne koriste u analizi.

:::tip NAPOMENA
Kategorije centara nisu samo teorijski okvir, već imaju i operativnu funkciju: prilikom povezivanja centara sa kontnim planom moguće je povezati svaki sintetički konto sa pojedinačnim centrima. Alternativno, može se odrediti kategorija centara, čime se korisniku u padajućem meniju prikazuju samo centri iz te kategorije.
:::

Za određene centre može biti potrebno definisati troškovnu tarifu. To se postiže povezivanjem poslovnog centra sa [*modelom reklasifikacije troškova*](/docs/controlling/reclassifications/create-reclassification-model). Logika obračuna može se zasnivati na dve [*jedinice mere*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) (npr. radni sati, proizvedene količine) ili na procentualnoj raspodeli troškova.