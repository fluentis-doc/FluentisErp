---
sidebar_position: 2
title: Mešoviti reverse charge
---

Fluentis ERP omogućava automatsko upravljanje situacijama tzv. **mešovitog reverse charge** postupka, odnosno slučajevima kada se na istoj ulaznoj fakturi jedan deo stavki obračunava prema postupku prenosa poreske obaveze (*reverse charge*), dok se drugi deo obračunava prema redovnom PDV režimu.

Ova funkcionalnost **dopunjuje** postojeće postavke koje su se ranije koristile za delimično rešavanje ovakvih situacija, naročito opciju **Isključi iz automatskih knjiženja** u tabeli **PDV stope i načini obračuna**. Nove postavke mogu se koristiti umesto te opcije kako bi se omogućilo potpunije i efikasnije upravljanje mešovitim *reverse charge* transakcijama.

Funkcionalnost se zasniva na sledećim elementima:

- opciji **Reverse Charge** u tabeli **PDV stope i načini obračuna**
- posebnoj **Vrsti iznosa** u obrascu knjiženja

## Tabela PDV stopa i načina obračuna

Za PDV stopu koja se primenjuje na deo fakture obuhvaćen postupkom prenosa poreske obaveze potrebno je uključiti opciju **Reverse Charge**.

Na taj način sistem prepoznaje da PDV obračunat za tu stavku neće biti uključen u ukupan iznos knjiženja niti u otvorenu stavku prema dobavljaču. Pretpostavlja se da dobavljač formira otvorene stavke prema principu **osnovica + PDV**.

:::tip Napomena
Logika novih postavki razlikuje se od prethodnog načina rada. Umesto označavanja dela koji se isključuje iz *reverse charge* postupka, sada se označava deo koji **podleže** *reverse charge* režimu.

PDV obračunat po *reverse charge* postupku neće biti uključen u ukupan iznos knjiženja niti će biti plaćen dobavljaču. Zbog toga više nije potrebno menjati način obračuna otvorene stavke na **Samo osnovica** – čak i kada je izabran način obračuna **Osnovica + PDV**, sistem automatski isključuje *reverse charge* PDV iz otvorene stavke.
:::

## Obrasci knjiženja – Vrsta iznosa

U obrascu knjiženja koji se koristi za evidentiranje *reverse charge* transakcija, vrsta iznosa **Ukupan iznos dokumenta/knjiženja** izračunava se na sledeći način:

> **Osnovica + redovni PDV − reverse charge PDV**

Pošto *reverse charge* PDV nije iskazan na fakturi dobavljača i ne predstavlja obavezu prema dobavljaču, njegov iznos se oduzima od ukupne vrednosti dokumenta.

Uvedena je nova vrsta iznosa **Reverse charge**, koja sadrži iznos PDV-a obračunatog po postupku prenosa poreske obaveze. Koristi se za:

- privremeno knjiženje PDV-a,
- dve PDV stavke koje sistem automatski generiše tokom knjiženja.

:::note Napomena
Vrsta iznosa **Reverse charge** ne uključuje neodbitni deo PDV-a, kako bi se zadržala usklađenost sa iznosom evidentiranim kod dobavljača. Neodbitni deo PDV-a knjiži se kao trošak u prvom knjiženju, a zatim se kroz prenos evidentira kao izlazni PDV, odnosno PDV za uplatu.
:::

Obrasci knjiženja za *reverse charge* imaju sledeću strukturu:

![](/img/it-it/finance-area/other/mixrev1.png)

![](/img/it-it/finance-area/other/mixrev2.png)