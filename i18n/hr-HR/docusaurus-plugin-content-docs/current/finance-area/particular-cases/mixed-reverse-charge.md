---
sidebar_position: 2
title: Mješoviti Reverse Charge
---

U sustavu postoji posebna funkcionalnost za automatsko upravljanje situacijama takozvanog mješovitog reverse charge-a, tj. kada je u istoj fakturi za kupovinu jedan dio fakturiran prema reverse charge-u, a drugi prema običnom režimu.

Ovaj skup postavki **nadograđuje**  one koje su već bile prisutne i s kojima se prije pokušavalo (ne potpuno) upravljati mješovitom situacijom, posebno flag  *Izuzmi iz automatskih predložaka* u tablici Aliquote e modalità IVA.    
Sadašnje postavke mogu se koristiti umjesto tog flaga za potpunije i funkcionalnije upravljanje.


Specifične implementacije za ovu funkcionalnost uključuju:

- **Flag** u tablici **Stope i načini obračuna PDV-a**
- Specifičan **Tip iznosa** u računovodstvenom predlošku

### Tablica stopa i načina obračuna PDV-a

Za kod PDV-a koji će biti dodijeljen dijelu fakturiranoj u reverse charge-u, omogućit će se **flag** **Reverse Charge**  koji označava stopu koja se koristi za reverse charge. To znači da PDV ove stavke neće biti uključeno u ukupnu registraciju niti će biti obračunato za stavke (pretpostavka je da dobavljač ima logiku obračuna stavki prema *osnovici + PDV*).

:::tip Napomena 
Logika "novih postavki" za mješovitu situaciju je obrnuta u odnosu na prošlost; umjesto da se identificira dio koji se ne knjiži jer je isključen iz reverse charge-a, sada se označava dio koji je u reverse charge-u. PDV u reverse charge-u neće se dodavati u ukupnu registraciju kao prije, niti će biti plaćen dobavljaču (što se već događalo, ali bez potrebe za postavljanjem metode obračuna stavke na samo osnovicu, jer i ostavljajući osnovnu postavku na osnovicu + PDV, dio u reverse charge-u neće biti dodan u otvorenu stavku). 
:::

### Računovodstveni predlošci: Tip iznosa

U računovodstvenom predlošku koji će se koristiti za knjiženje reverse charge-a, tip iznosa *Ukupno dokument/registracijae* bit će valoriziran s osnovicom + običnim PDV-om - PDV-om u reverse charge-u (jer se PDV u reverse charge-u oduzima putem gore navedenog flaga i u ovoj logici ne smije se dodavati u ukupnu vrijednost jer ne dolazi iz fakture od dobavljača, dakle nije za plaćanje).

Predviđen je novi tip iznosa *Reverse charge* koji valorizira s PDV-om u reverse charge-u i koristi se za privremenu stavku PDV-a i za dvije PDV stavke automatske registracije.

:::note Napomena 
Tip iznosa *Reverse charge* ne uzima u obzir neodbitni PDV (također zbog usklađivanja s iznosom koji imam kod dobavljača). Neodbitni dio završava kao trošak u prvoj registraciji, a zatim ide u PDV na dugovanje kroz prijenos, kao PDV za plaćanje. 
:::

Računovodstveni predlošci za reverse charge postaju sljedeći:

![](/img/it-it/finance-area/other/mixrev1.png)

![](/img/it-it/finance-area/other/mixrev2.png)
