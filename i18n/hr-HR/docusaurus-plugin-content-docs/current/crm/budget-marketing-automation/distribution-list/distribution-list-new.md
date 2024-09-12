---
title: Nova lista distribucije
sidebar_position: 3
---

Postupak stvaranja nove **Lista di distribuzione** omogućuje definiranje karakteristika liste koja će se koristiti u postupku slanja [Newslettera](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), kao i definiranje **Kontakata CRM** koji će biti dio te liste. Za stvaranje nove liste potrebno je kliknuti na tipku Novo ![](/img/neutral/common/new.png) na maski pretraživanja lista distribucije.

Obrazac se sastoji od dvije sekcije.

Gornja sekcija omogućuje definiranje sljedećih informacija:

**Naziv**: odgovara identifikacijskom kodu liste distribucije;

**Datum kreiranja**: datum kada je lista kreirana;

**Bilješka**: alfanumeričko polje koje omogućuje unos slobodnih bilješki;

**Autor**: prikazuje korisnika koji je generirao listu;

**Vrsta**: omogućuje definiranje vrste liste distribucije između **Statične** ili **Dinamične**.


Donji obrazac razlikuje se ovisno o tome je li lista statička ili dinamična.

## ***STATIČNA LISTA***

Sekcija je podijeljena u 2 kartice.

**Kartica Dodijeljeno**

Na kartici Dodijeljeno prikazani su subjekti koji su već dodijeljeni listi distribucije.

![](/img/it-it/applications/crm/distribution-list/assigned.png)

**Kartica Nije dodijeljeno**

Na kartici Nije dodijeljeno prikazani su i kontakti koji još nisu dodijeljeni određenoj listi. Kartica je podijeljena u 2 sekcije. Prva sekcija je Filtriranje, gdje možete postaviti niz filtera koji se odnose na kontakte koje želite izdvojiti.

![](/img/it-it/applications/crm/distribution-list/not-assigned.png)

Druga sekcija, tj. rezultirajuća mreža, prikazuje subjekte izvučene na temelju prethodno postavljenih filtera nakon što pritisnete tipku Traži ![](/img/neutral/common/search.png).  
Gumb Dodijeli ![](/img/neutral/common/assign-row.png) premješta kontakt s kartice **Nije dodijeljeno** na karticu **Dodijeljeno**, čime se kontakt dodaje u listu distribucije. .

**Razvrstaj po kontaktu**: omogućuje grupiranje subjekata (kontakata i referenci) u jedan red prema kontaktu kojem pripadaju. 


## ***DINAMIČKA LISTA***

Ova sekcija je podijeljena u 2 kartice.

**Kartica Konfiguracija**

Na početku morate navesti ova 3 podatka:   
**Područje**: koristi se za definiranje područja u Fluentisu gdje će se podaci dohvatiti;  
**Modul**: odnosi se na prethodno odabrano područje;
**Sql Query**: treba odabrati prethodno stvoreni Sql upit u Fluentisu (za više informacija pogledajte odjeljak Fluentis Query Studio).  
U donjoj mreži prikazuju se svojstva i kako su mapirana.

![](/img/it-it/applications/crm/distribution-list/configuration.png)

**Kartica Mapping**

Na ovoj kartici u stvarnom vremenu prikazani su kontakti obrađeni i dodani na popis distribucije prema SQL upitu navedenom na kartici Konfiguracija.

![](/img/it-it/applications/crm/distribution-list/mapping.png)