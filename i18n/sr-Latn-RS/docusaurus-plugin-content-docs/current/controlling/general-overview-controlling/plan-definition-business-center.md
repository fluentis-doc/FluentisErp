---
title: Definicija plana poslovnih centara
sidebar_position: 2.1
---

Plan [***poslovnih centara***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) je prvi i najvažniji korak za  pravilno postavljanje analitičkog i upravljačkog računovodstva. Kako bi se mogli centri šifrirati, prvo je
potrebno definirati ***Dimenzije*** analize, a zatim ***Kategorije poslovnih centara***.

:::tip NAPOMENA
U tvrtkama u kojima opcija *kontrolinga* nije aktivirana, omogućeno je kreiranje troškovnih centara bez dimenzije analize i bez kategorije centra.
:::

[***Dimenzija***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) analize je, u suštini, dosljedan kriterij za raspodjelu troškova i prihoda unutar poduzeća. U analitičkom računovodstvu najčešće postoji dimenzija
INDUSTRIJE/DIREKCIJE, koja se koristi u svim poduzećima za podjelu poslovanja na različite funkcionalne entitete. U ovoj dimenziji nalaze se: centar administracije, centar direkcije, centar tehničkog ureda, centar komercijalnog odjela, proizvodni centri
(pojedinačni strojevi, skupine strojeva, radne skupine itd.). Tipičan alternativni primjer dimenzije su PROJEKTI, odnosno tvrtke koje posluju po projektima ili narudžbama. Dimenzija Projekti obuhvaća sve direktne troškove i prihode projekta, dok primanje pomoćnih i općih troškova (npr. direkcije, administracije) iz industrijske/direkcijske dimenzije je moguće putem cost drivera (nositelj troškova).
Osim toga, mogu se definirati dodatne dimenzije, koje omogućuju odvojeno praćenje određenih vrsta troškova, kao što su: dimenzija sajmova, dimenzija investicija, dimenzija nabavnog budžeta.

:::tip NAPOMENA
Ove alternativne dimenzije, koje nisu povezane s industrijskim/direkcijskim modelom ili modelom projekata, obično su samostalni elementi i mogu se dodati nakon početne konfiguracije.
:::


*Obavezna karakteristika poslovnih centara* je njihova kategorija. Na razini industrijske/direkcijske dimenzije postoji pet osnovnih tipova poslovnih centara:

***1)	Proizvodni ili direktni centri:*** izravno sudjeluju u proizvodnji proizvoda ili usluga. Ključno je njihovo ispravno grupiranje, jer pogrešna agregacija može dovesti do netočnih troškovnih tarifa i iskriviti analizu profitabilnosti. Ne smije se, primjerice, kombinirati strojevi s različitim troškovima u istom centru jer će ponderirana prosječna tarifa biti nerealna. Također,
strojevi s operaterima ne smiju se miješati s automatiziranim strojevima, jer to može iskriviti izračune marži.;

***2)	Neizravni pomoćni centri:*** nisu izravno povezani s proizvodnim procesom, ali su nužni za rad proizvodnih centara. Njihovi troškovi se redistribuiraju pomoću cost drivera (upravljača troškovima).;

***3)	Neizravni zajednički centri:*** su strukturirani i funkcionalni (npr. komercijalni odjel, tehnička služba, kontrola kvalitete).;

***4)	Centri profita ili rezultata poslovanja:*** omogućuju povezivanje prihoda i troškova specifičnih poslovnih segmenata. Primjeri mogu biti grupe proizvoda, prodajni kanali itd.;

***5)	Virtualni ili pomoćni centri:*** služe kao podrška modelu, bilo za redistribuciju troškova, bilo kao privremeni centri za knjiženje podataka koji se ne koriste u analizi.


:::tip NAPOMENA
Kategorije centara nisu samo teoretski okvir, već imaju i operativnu funkciju: prilikom povezivanja centara s računovodstvenim planom, moguće je povezati svaki sintetički račun s pojedinačnim centrima. Alternativno, može se odrediti kategorija centara, čime se korisniku u padajućem izborniku prikazuju samo centri iz te kategorije.
:::

Za određene centre može biti potrebno definirati tarifu troška. To se postiže povezivanjem poslovnog centra s [*modelom reklasifikacije troškova*](/docs/controlling/reclassifications/create-reclassification-model) Logika izračuna može se temeljiti na dvije [*jedinice mjere*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) (npr. radni sati, proizvedene količine) ili postotnoj raspodjeli troškova.