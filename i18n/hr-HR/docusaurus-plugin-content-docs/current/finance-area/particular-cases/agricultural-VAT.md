---
sidebar_position: 1
title: Poseban postupak PDV-a za poljoprivredu
---

Poseban postupak PDV-a za poljoprivredu predviđa da se pretporez na nabave ne može odbiti, dok se za isporuke primjenjuje kompenzacijska stopa. Za razliku od redovnog sustava PDV-a, u kojem se pretporez odbija od obveze PDV-a, u ovom postupku PDV na nabavama uvijek je nepriznat, dok se PDV obračunan na prodajama plaća samo djelomično primjenom unaprijed propisanih kompenzacijskih stopa, koje ovise o vrsti prodanog dobra.

### Prethodna konfiguracija

Za ispravno obračunavanje kompenzacijske stope potrebno je najprije definirati odgovarajuće izlazne PDV stope, pri čemu će se za izračun koristiti polje **Postotak nedopuštenog odbitka**.

![](/img/it-it/finance-area/other/agr1.png)

Ako PDV stopa **X** ima kompenzacijsku stopu **Y**, tada je potrebno:

- u polje **% poljoprivrednog odbitka PDV-a** upisati vrijednost **Y** (informativni podatak koji se prikazuje na ispisu obračuna PDV-a),
- u polje **Postotak nedopuštenog odbitka** upisati vrijednost izračunanu prema formuli **Y × 100 / X**.

Potrebno je definirati i poseban konto na kojem će se evidentirati kompenzirani dio PDV-a dobiven primjenom postotka nedopuštenog odbitka.

![](/img/it-it/finance-area/other/agr2.png)

Nakon toga potrebno je definirati posebne knjižne sheme za evidentiranje prodaja u posebnom postupku PDV-a za poljoprivredu. One moraju sadržavati:

- vrstu prometa **Prodaja – poljoprivredni postupak**,
- poseban konto PDV-a za evidentiranje kompenziranog dijela PDV-a.

Za ove transakcije nije potrebno definirati zaseban PDV registar.

![](/img/it-it/finance-area/other/agr3.png)

I nabave u posebnom postupku PDV-a za poljoprivredu moraju se evidentirati posebnom knjižnom shemom koja je povezana s ovim poreznim postupkom.

![](/img/it-it/finance-area/other/agr4.png)

Budući da PDV evidentiran ovom knjižnom shemom uvijek mora imati **100 % nedopuštenog odbitka** (ili **0 % PDV-a** kod neoporezivih, oslobođenih ili izuzetih transakcija), preporučuje se konfigurirati karticu **Kontrola PDV stopa** kako bi se spriječio unos pogrešnih vrijednosti.

![](/img/it-it/finance-area/other/agr5.png)

Ako se evidentiraju i unutarzajedničke nabave koje podliježu posebnom postupku PDV-a za poljoprivredu, umjesto standardnih knjižnih shema za unutarzajedničke nabave s pripadajućim prijenosom PDV-a potrebno je koristiti posebne vrste prometa:

- **Poljoprivredna unutarzajednička nabava**,
- odgovarajući prijenos PDV-a za poljoprivredni postupak.

Kod takvih nabava pretporez ostaje **100 % nepriznat**, dok se na izlaznoj strani obračunava PDV koji se mora platiti. Promjena PDV stope može se automatski primijeniti konfiguriranjem **automatske PDV stope** u PDV mreži, na isti način kao kod mješovitog reverse charge postupka.

### Rezultat u obračunu PDV-a

Periodični obračun PDV-a prikazuje sažetak transakcija evidentiranih u posebnom postupku PDV-a za poljoprivredu na sljedeći način:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger Pažnja
Zatvaranje konta **PDV prodaje – poljoprivreda**, koji se koristi za evidentiranje kompenziranog dijela izlaznog PDV-a, korisnik mora provesti **ručno**, odgovarajućim knjiženjem.
:::