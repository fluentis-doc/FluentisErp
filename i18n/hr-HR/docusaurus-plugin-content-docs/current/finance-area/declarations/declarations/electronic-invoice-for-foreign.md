---
title: Elektroničko fakturiranje s nerezidentnim subjektima  
sidebar_position: 1
---

Funkcija **Administracija > Izjave > Elektroničko fakturiranje s nerezidentnim subjektima** generira XML datoteke povezane s dokumentima kupnje i prodaje koje se šalju (kao alternativa slanju putem istog formata predviđenog za elektroničke račune s rezidentima u Italiji) talijanskoj Poreznoj upravi. Time se zamjenjuje obveza tzv. "spesometra", koja je u biti ukinuta ili, preciznije, sada poznata kao "esterometro", kako bi se razlikovalo ono što je od nje ostalo.  

Pristup funkciji prikazuje masku podijeljenu u gornji dio zaglavlja, gdje je moguće postaviti niz filtera za prikaz i upravljanje XML datotekama za slanje:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image01.png)

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image02.png)

- **Stanje SdI**: prikazuje status dokumenta, uključujući i interni status u Fluentisu te status iz Fluentis Business Hub-a koji dolazi izravno iz SdI-a.  

- **Naziv datoteke SdI**: naziv datoteke koja se kreira kada dokument dobije status GENERIRANA. Bilo u originalnom formatu ili nakon dodavanja digitalnog potpisa, predstavlja datoteku računa za slanje SdI-u.

- **Sdi Id**: jedinstveni identifikator koji SdI dodjeljuje dokumentu prilikom zaprimanja.  

- **Datum zaprimanja SdI-a**: datum kada je sustav za razmjenu informacija (SdI) preuzeo poslani dokument. Ta se informacija dobiva iz potvrde o primitku koju SdI izdaje nakon zaprimanja.  

- **Datum zatvaranja**: datum zatvaranja toka obrade (npr. dokument dostavljen).  

- **Datum posljednjeg događaja**: datum zadnje promjene statusa datoteke, bilo ručno ili automatski putem obrade na SdI-u.  

U traci izbornika, u dijelu za elektroničko fakturiranje, putem funkcije **Registar dokumenata SdI ![](/img/neutral/common/legenda.png)** moguće je pregledati poduzete radnje nad odabranim dokumentom, funkcija **Ispis![](/img/neutral/common/print.png)** omogućuje ispis pridružene XML datoteke, a funkcije **SPreuzmi prilog** i **Preuzmi sadržaj registra** ![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image05.png) omogućuju preuzimanje XML datoteka.  

Dvaput klikom na red u rezultatu prikaza otvara se detalj kontabilnog zapisa. I tamo je moguće pregledati i promijeniti status obrade datoteke za slanje SdI-u (pomoću posebnog padajućeg izbornika u traci izbornika).

Pretraga s ovog obrasca dohvaća sve (**kontabilizirane**) povezane s knjigovodstvenim događajima čiji je tip prometa (za potrebe PDV-a) prodaja unutar EU ili prodaja izvan EU, ili one koje imaju ispunjeno polje „Konto partnera“ u panelu s parametrima:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image06.png)

Pretražuju se **samo oni dokumenti koji NISU već poslani** putem elektroničkog fakturiranja nerezidentnim subjektima prema formatu koji se koristi za talijanske račune.  

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image07.png)

Ako usluga Fluentis Business Hub nije konfigurirana u sustavu, moguće je pristupiti funkciji ![](/img/neutral/common/legenda.png) i preuzeti generiranu XML datoteku kako bi se koristila izvan Fluentisa.

XML datoteka koja se stvara tijekom obrade statusa od strane operatera mora biti potpisana. Ako je aktivna usluga Fluentis Business Hub, kopija datoteke se kreira u mapi specificiranoj u postavkama, gdje je potrebno navesti privremenu mapu za pohranu XML datoteka koje treba potpisati i kasnije preuzeti potpisane datoteke:   

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image09.png)

Nakon slanja datoteke SdI-u, ona može imati jedan od sljedećih statusa:

**Nije sukladno:** datoteka sadrži pogreške zbog kojih je SdI ne može prihvatiti. U tom je slučaju potrebno pristupiti ![](/img/neutral/common/legenda.png) **u panelu Registar dokumenata SdI** i pregledati razlog nesukladnosti, ispraviti eventualnu nepravilnost i ponovno poslati regeneriranu datoteku.  

**Dostavljena:** datoteka je ispravno poslana i prihvaćena od strane SdI-a. U tom je slučaju moguće pregledati ishod dostave pristupom panelu Registar dokumenata SdI putem funkcije ![](/img/neutral/common/legenda.png) za odabranu datoteku.  



<iframe width="560" height="315" src="https://www.youtube.com/embed/Rbf4cul7SIA" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>


