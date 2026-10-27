---
title: Parametri Pickinga (slaganja/preuzimanja robe)
sidebar_position: 6
---

:::important[Čemu služi]
Ova funkcionalnost omogućava korisnicima da konfigurišu i prilagode sistem različitim operativnim potrebama, čime se obezbeđuje nesmetano i dosledno odvijanje logističkih aktivnosti.

U ovom odeljku moguće je dodeliti podrazumevana skladišta i šablone izlaza, odrediti da li treba proveravati raspoloživost artikala i definisati da li je obavezan unos podataka kao što je šifra operatera. Ostale opcije obuhvataju upravljanje artiklima koji se prate po lotovima ili serijskim brojevima, kao i kontrolu količina prilikom kreiranja Pickinga. Ovaj modul za podešavanje parametara ne samo da olakšava rad već obezbeđuje i usklađenost postupaka sa poslovnim pravilima i važećim propisima, omogućavajući efikasno i precizno upravljanje skladištem.
:::

Obrazac se otvara putem menija **Parametri > Logistika > Parametri Pickinga** i omogućava konfigurisanje svih postavki koje se odnose na funkcionisanje Pickinga, odnosno lista za preuzimanje. Modul Pickinga može se koristiti tek nakon odgovarajućeg podešavanja ovog obrasca.

#### Posebno dugme

> **Vrati na prethodno stanje**: dugme za vraćanje parametara na prethodno stanje.

## Opšte

Na ovoj kartici mogu se konfigurisati opšta podešavanja za upravljanje Pickingom. Moguće je dodeliti skladište i šablon koji će se podrazumevano koristiti za izlaz robe prilikom Pickinga. Za to je dovoljno označiti **Prioritet parametara Pickinga** i izabrati **Skladište** i **Šablon**.

Takođe je moguće odabrati da li će se prilikom izlaza robe **Proveravati raspoloživost**, da li će **Nalozi kupaca biti isključeni** iz obračuna raspoloživosti i/ili da li će sistem blokirati operaciju ako raspoloživa količina nije dovoljna za količinu koju treba evidentirati (**Obavezna raspoloživost**).

Ako je izabrana provera raspoloživosti, moguće je odrediti način njenog obračuna uzimajući u obzir **Kooperaciju**, **Planiranu proizvodnju**, **Nabavku**, **Odobrenu proizvodnju**, **Prodaju** i/ili **Skladište**.

U opštim podešavanjima moguće je odrediti da li je prilikom kreiranja Pickinga obavezan unos **Šifre operatera**, da li **Numerisanje treba da bude uzastopno po godinama** i da li je obavezan unos **Šifre operatera koji potvrđuje Picking**.

Ako je za artikle potrebno posebno upravljanje, moguće je aktivirati opciju **Upravljanje veličinama i bojama**.

U odeljku **Upravljanje lotovima i serijskim brojevima** moguće je aktivirati sledeće zastavice:

**Upravljanje lotovima / serijskim brojevima**: omogućava upravljanje lotovima i serijskim brojevima putem odgovarajućih tabela.

**Predlog lotova / serijskih brojeva**: ako je aktivirano, prilikom promene količine u redu Pickinga automatski se predlažu lotovi u odgovarajućoj tabeli, ako se artikal prati po lotovima uz metod izdavanja FIFO ili prema datumu isteka.

**Automatsko skladišno kretanje prilikom potvrde**: ako je aktivirano, u obrascima *Upravljanje proverom* i *Potvrda Pickinga* automatski se evidentira izlaz robe iz reda. U tom slučaju nije potrebno zasebno pokretati postupak [Izlaz robe nakon provere](/docs/logistics/picking/unload-check-row-management). Ako zastavica nije aktivirana, sprovodi se provera, ali se skladišno kretanje ne evidentira. Ono se mora naknadno evidentirati putem postupka [Izlaz robe nakon provere](/docs/logistics/picking/unload-check-row-management).

**Prikaz tabele za realizaciju**: ako je aktivirano, omogućava prikaz u obliku tabele u obrascu za realizaciju Pickinga.

**Prikaz stabla za realizaciju**: ako je aktivirano, omogućava prikaz u obliku stabla u obrascu za realizaciju Pickinga.

## WMS Mobile

Na ovoj kartici mogu se definisati parametri za funkcionisanje Pickinga u sistemu WMS Mobile.

**Vrsta konta prevoznika**: predstavlja prevoznika koji će biti dodeljen Picking dokumentima kreiranim putem sistema WMS Mobile.

Moguće je izabrati i različite vrste Pickinga.

Takođe je potrebno odrediti šablone koji će se koristiti za sledeća skladišna kretanja:

- izlaz UDC-a prilikom potvrde prenosa;
- šablon koji se predlaže za izlaz prilikom Pickinga;
- izlaz iz polaznog skladišta;
- ulaz u odredišno skladište;
- šablon izlaza iz skladišta kooperacije.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).