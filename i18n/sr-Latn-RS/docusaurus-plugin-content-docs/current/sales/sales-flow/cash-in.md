---
title: Generisanje avansa iz naloga kupca
sidebar_position: 7
---

Za naplatu avansa za robu naručenu od kupca nije potrebno kreirati *proforma fakturu*, već se postupak pokreće iz modula prodaje kroz obrazac **Nalog kupca**.

## Faza 1

Kreirati novi nalog kupca. Obavezno je uneti artikl sa šifrom.

Na kartici **Zaglavlje** popuniti sledeća polja:

- tip naloga
- kupac
- datum isporuke
- datum kada roba može biti spremna
- oznaku **Potvrđeno**
- datum potvrde
- oznaku **Odštampano**

Na kartici **Plaćanja** potrebno je uneti način plaćanja **ANT (avans)** umesto načina plaćanja predloženog sa kartice kupca.

Zatim otvoriti karticu **Artikli** i obavezno uneti artikl sa šifrom, jer u suprotnom procedura neće funkcionisati.

Takođe, na stavci artikla polje **Fakturisano prodaja** mora biti popunjeno.

Sačuvati nalog.

Otvoriti karticu **Pregledi**, a zatim sekciju **Pregled dospeća**.

Izabrati odgovarajući red u tabeli i na alatnoj traci pokrenuti funkciju **Kreiraj avans**.

Otvoriće se prozor **Kreiranje avansa** u kojem je potrebno uneti:

- vrstu dokumenta (preporučeno **GEN**)
- opis, na primer: *Nalog broj ... – avansno plaćanje*

## Faza 2 – Evidentiranje primljenog avansa

Otvoriti modul **Administracija** i kreirati novu računovodstvenu registraciju.

U polje **Uzrok** uneti odgovarajući tip naplate:

- Naplata
- Naplata bankovnim transferom

u zavisnosti od dostupnih opcija.

Postupak:

1. Na alatnoj traci kliknuti na **Pretraži usaglašavanja**.
2. Dvoklikom izabrati usaglašavanje kreirano iz naloga kupca.
3. Otvoriti karticu **Registracija**.
4. U dnevniku knjiženja, u opis uneti naziv banke (na primer *Bankovni depoziti*).
5. Sačuvati dokument.

Nakon čuvanja pojaviće se pitanje za kreiranje avansne fakture.

Odabrati **Da**.

## Faza 3 – Upravljanje avansima

Otvoriti obrazac **Upravljanje avansima**.

Kliknuti na **Traži** i izabrati odgovarajući red naloga.

Na alatnoj traci kliknuti na **Fakturisanje avansa**.

Otvoriće se prozor **Kreiranje avansne stavke**.

Potrebno je popuniti:

- tip fakture
- PDV
- tip prodajnog fakturisanja (na primer *Avansi od kupaca*)

Potvrditi unos.

## Faza 4

Nakon potvrde automatski će se otvoriti upravo kreirana avansna faktura.

:::warning Pažnja
Bez oznake **Odštampano** faktura neće moći da se knjiži.
:::

Otvoriti karticu **Plaćanja**.

Obrisati način plaćanja koji je automatski predložen sa kartice kupca (bankovni transfer, menica i slično).

Potrebno je da ostane samo:

- **ANT (Avans)**

Sačuvati dokument.

## Faza 5 – Knjiženje fakture

Otvoriti modul:

**Prodaja > Prodajne fakture**

Pokrenuti proceduru knjiženja upravo kreirane fakture.

U slučaju greške potrebno je proveriti da li su u parametrima tipa fakture pravilno podešene opcije za knjiženje.

Nakon toga na alatnoj traci pokrenuti proceduru:

**Izvršenje iz naloga kupaca**

Izabrati odgovarajući nalog i kliknuti na **Prenos**.

Sačuvati dokument.

Otvoriti karticu **Artikli** i proveriti da li je u koloni **Fakturisano nabavka** upisan odgovarajući račun.

:::warning Pažnja
Ukoliko ovo polje nije popunjeno, na kraju procesa može doći do greške.
:::

Na alatnoj traci pojaviće se dugme **Upravljanje avansima**.

Ako dugme nije vidljivo:

1. zatvoriti fakturu
2. ponovo otvoriti dokument

U obrascu **Upravljanje avansima** otvoriti karticu **Storno avansa**.

Izabrati odgovarajući red i kliknuti na:

**Kreiraj storno**

Nakon toga aktiviraće se dugme:

**Kreiraj zatvaranje radova**

Zatvoriti fakturu i izvršiti knjiženje koristeći standardnu proceduru knjiženja faktura.