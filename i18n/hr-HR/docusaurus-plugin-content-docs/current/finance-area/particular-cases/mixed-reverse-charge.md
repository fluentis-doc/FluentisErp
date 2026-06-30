---
sidebar_position: 2
title: Mješoviti prijenos porezne obveze
---

Fluentis ERP omogućuje automatsko upravljanje situacijama tzv. **mješovitog prijenosa porezne obveze (mixed reverse charge)**, odnosno slučajevima kada se na istom ulaznom računu dio stavki obračunava prema postupku prijenosa porezne obveze, a dio prema redovnom režimu PDV-a.

Ova funkcionalnost **nadopunjuje** postojeće postavke koje su se ranije koristile za djelomično rješavanje takvih situacija, posebno oznaku **Isključi iz automatskih knjiženja** u tablici **Stope i načini obračuna PDV-a**. Nove postavke mogu se koristiti umjesto te oznake kako bi se omogućilo potpunije i učinkovitije upravljanje mješovitim reverse charge transakcijama.

Funkcionalnost se temelji na sljedećim elementima:

- oznaci (**Reverse Charge**) u tablici **Stope i načini obračuna PDV-a**
- posebnoj **Vrsti iznosa** u računovodstvenom predlošku

### Tablica stopa i načina obračuna PDV-a

Za PDV stopu koja se primjenjuje na dio računa obuhvaćen prijenosom porezne obveze potrebno je uključiti oznaku **Reverse Charge**.

Na taj način sustav prepoznaje da PDV obračunan za tu stavku neće biti uključen u ukupni iznos knjiženja niti će biti uključen u otvorenu stavku prema dobavljaču. Pretpostavlja se da dobavljač obračunava otvorene stavke prema logici **osnovica + PDV**.

:::tip Napomena
Logika novih postavki razlikuje se od dosadašnjeg načina rada. Umjesto označavanja dijela koji se isključuje iz postupka prijenosa porezne obveze, sada se označava dio koji **podliježe** reverse charge postupku.

PDV obračunan prema reverse charge postupku neće biti uključen u ukupni iznos knjiženja niti će biti plaćen dobavljaču. Zbog toga više nije potrebno mijenjati način obračuna otvorene stavke na **Samo osnovica** – čak i kada je odabran način obračuna **Osnovica + PDV**, sustav automatski isključuje reverse charge PDV iz otvorene stavke.
:::

### Računovodstveni predlošci – Vrsta iznosa

U računovodstvenom predlošku koji se koristi za knjiženje reverse charge transakcija, vrsta iznosa **Ukupno dokumenta/knjiženja** izračunava se kao:

> **Osnovica + redovni PDV − reverse charge PDV**

Budući da reverse charge PDV nije iskazan na računu dobavljača i ne predstavlja obvezu plaćanja dobavljaču, njegov se iznos oduzima od ukupne vrijednosti dokumenta.

Uvedena je nova vrsta iznosa **Reverse charge**, koja sadrži iznos PDV-a obračunanog prema postupku prijenosa porezne obveze. Koristi se za:

- privremeno knjiženje PDV-a,
- dvije PDV stavke koje sustav automatski generira tijekom knjiženja.

:::note Napomena
Vrsta iznosa **Reverse charge** ne uključuje neodbitni dio PDV-a, kako bi se zadržala usklađenost s iznosom evidentiranim kod dobavljača. Neodbitni dio PDV-a knjiži se kao trošak u prvom knjiženju, a zatim se kroz prijenos evidentira kao izlazni PDV, odnosno PDV za uplatu.
:::

Računovodstveni predlošci za reverse charge imaju sljedeću strukturu:

![](/img/it-it/finance-area/other/mixrev1.png)

![](/img/it-it/finance-area/other/mixrev2.png)