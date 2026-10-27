---
title: Parametri Pickinga (slaganja/preuzimanja robe)
sidebar_position: 6
---

:::important Čemu služi
Ova funkcionalnost omogućuje korisnicima konfiguriranje i prilagodbu sustava različitim operativnim potrebama, čime se osigurava nesmetano i dosljedno odvijanje logističkih aktivnosti.

U ovom odjeljku moguće je dodijeliti zadana skladišta i predloške izlaza, odrediti treba li provjeravati raspoloživost artikala te definirati je li obvezan unos podataka kao što je šifra operatera. Ostale opcije uključuju upravljanje artiklima koji se prate po lotovima ili serijskim brojevima te kontrolu količina prilikom izrade Pickinga. Ovaj modul za parametrizaciju ne samo da olakšava rad već osigurava i usklađenost postupaka s poslovnim pravilima i važećim propisima, omogućujući učinkovito i precizno upravljanje skladištem.
:::

Obrazac se otvara putem izbornika **Parametri > Logistika > Parametri Picking** i omogućuje konfiguriranje svih postavki koje se odnose na funkcioniranje Pickinga odnosno lista za preuzimanje. Modul Pickinga može se koristiti tek nakon odgovarajuće konfiguracije ovog obrasca.

#### Poseban gumb

> **Vrati na prethodno stanje**: gumb za vraćanje parametara na prethodno stanje.

## Općenito

Na ovoj kartici mogu se konfigurirati opće postavke upravljanja Pickingom. Moguće je dodijeliti skladište i predložak koji će se prema zadanim postavkama koristiti za izlaz robe prilikom Pickinga. Za to je dovoljno označiti **Prioritet parametara Pickinga** i odabrati **Skladište** i **Predložak**.

Također je moguće odabrati hoće li se prilikom izlaza robe **Provjeravati raspoloživost**, hoće li se **Narudžbe kupaca isključiti** iz izračuna raspoloživosti i/ili hoće li sustav blokirati operaciju ako raspoloživa količina nije dovoljna za količinu koju treba evidentirati (**Obvezna raspoloživost**).

Ako je odabrana provjera raspoloživosti, moguće je odrediti kako će se ona izračunavati uzimajući u obzir **Kooperaciju**, **Planiranu proizvodnju**, **Nabavu**, **Odobrenu proizvodnju**, **Prodaju** i/ili **Skladište**.

U općim postavkama moguće je odrediti je li prilikom izrade Pickinga obvezan unos **Šifre operatera**, treba li **Numeriranje biti slijedno po godinama** te je li obvezan unos **Šifre operatera koji potvrđuje Picking**.

Ako je za artikle potrebno posebno upravljanje, moguće je aktivirati opciju **Upravljanje veličinama i bojama**.

U odjeljku **Upravljanje lotovima i serijskim brojevima** moguće je aktivirati sljedeće zastavice:

**Upravljanje lotovima / serijskim brojevima**: omogućuje upravljanje lotovima i serijskim brojevima putem odgovarajućih mreža.

**Prijedlog lotova / serijskih brojeva**: ako je aktivirano, prilikom promjene količine u retku Pickinga automatski se predlažu lotovi u odgovarajućoj mreži, ako se artikl prati po lotovima s metodom izdavanja FIFO ili prema datumu isteka.

**Automatsko skladišno kretanje prilikom potvrde**: ako je aktivirano, u obrascima *Upravljanje provjerom* i *Potvrda Pickinga* automatski se evidentira izlaz robe iz retka. U tom slučaju nije potrebno zasebno provoditi postupak [Izlaz robe nakon provjere](/docs/logistics/picking/unload-check-row-management). Ako zastavica nije aktivirana, provodi se provjera, ali bez skladišnog kretanja, koje je potrebno naknadno evidentirati putem postupka [Izlaz robe nakon provjere](/docs/logistics/picking/unload-check-row-management).

**Prikaz mreže za realizaciju**: ako je aktivirano, omogućuje prikaz u obliku mreže u obrascu za realizaciju Pickinga.

**Prikaz stabla za realizaciju**: ako je aktivirano, omogućuje prikaz u obliku stabla u obrascu za realizaciju Pickinga.

## WMS Mobile

Na ovoj kartici mogu se definirati parametri za funkcioniranje Pickinga u sustavu WMS Mobile.

**Vrsta konta prijevoznika**: predstavlja prijevoznika koji će biti dodijeljen Picking dokumentima izrađenima putem sustava WMS Mobile.

Moguće je odabrati i različite vrste Pickinga.

Također je potrebno odrediti predloške koji će se koristiti za sljedeća skladišna kretanja:

- izlaz UDC-a prilikom potvrde prijenosa;
- predložak koji se predlaže za izlaz prilikom Pickinga;
- izlaz iz polaznog skladišta;
- ulaz u odredišno skladište;
- predložak izlaza iz skladišta kooperacije.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).