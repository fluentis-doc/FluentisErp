---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u području **Nabava > Ulazni računi**. Ulazni računi su porezni dokumenti koje izdaju dobavljači kao potvrdu isporuke robe ili pružanja usluga poduzeću. Oni predstavljaju osnovu za računovodstveno evidentiranje poslovnog događaja te za obračun i plaćanje obveza prema dobavljačima.

Ova aplikacija omogućuje: praćenje dokumenata o robama koje su isporučene/naplative od dobavljača; automatsko stvaranje računa iz primitka robe; automatsko stvaranje iz narudžbenica dobavljača; automatsko knjiženje robe na skladište; vrednovanje robe prisutne na skladištu; povezivanje postojećih varijanti s dodatnim atributima na razini artikla; provjeru usklađenosti uvjeta dobivene fakture s uvjetima narudžbe dobavljača; rezervaciju utovara serija izravno iz ulazne fakture; automatsko knjiženje ulazne fakture.

## Konfiguracija modula

Prije korištenja modula potrebno je konfigurirati sljedeće tablice i parametre:

> **Tablice**: obrasce čine Tablica prodaje i [Tipovi ulaznih računa](/docs/configurations/tables/purchase/purchase-invoices-type).
>
> **Parametri**: obrazac je [Parametri ulaznih računa](/docs/configurations/parameters/purchase/purchase-invoices-parameters).

Konkretnije:

- Numeracije: definiranje numeracija koje će se koristiti za ulazne račune.
- Promet nabave: definiranje vrsta prometa nabave koje će se koristiti u dokumentima.
- Vrste ulaznih računa: kreiranje i definiranje vrsta računa koje će se koristiti u sustavu.
- Parametri ulaznih računa: postavljanje specifičnih parametara za upravljanje ulaznim računima.
- Parametri grupiranja ulaznih računa: definiranje kriterija za grupiranje DDT dokumenata prilikom kreiranja zbirnih računa.

## Povezanost s ostalim modulima

:::info Narudžbe dobavljača
Ulazni račun može se kreirati preuzimanjem jedne ili više narudžbi dobavljača izravno unutar računa korištenjem funkcije **Preuzimanje iz narudžbi**.
:::

:::info Primke nabave (DDT)
Ulazni račun može se kreirati preuzimanjem jedne ili više primki nabave (DDT), bilo izravno unutar računa korištenjem funkcije **Preuzimanje DDT-a**, bilo putem procedure **Vrednovanje primki nabave**.
:::

:::info Povrat iz kooperacije
Procedura **Vrednovanje povrata** omogućuje generiranje ulaznog računa preuzimanjem jednog ili više povrata iz kooperacije.
:::

:::info Zaprimanje robe
Procedura **Kreiranje ulaznog računa iz prijema robe** omogućuje izradu ulaznog računa na temelju prethodno evidentiranog zaprimanja robe.
:::

:::info Logistika
Ulazni računi određenog tipa mogu se knjižiti na skladište kako bi se evidentirao dolazak robe i ažurirale zalihe materijala.
:::

:::info Knjiženje
Automatsko knjiženje ulaznih računa omogućuje ažuriranje financijskih i računovodstvenih evidencija te osigurava usklađenost s poslovnim knjigama.
:::