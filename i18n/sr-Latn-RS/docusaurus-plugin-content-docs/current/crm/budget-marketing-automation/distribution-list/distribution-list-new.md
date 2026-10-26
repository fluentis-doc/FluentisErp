---
title: Nova distribuciona lista
sidebar_position: 3
---

Postupak kreiranja nove **distribucione liste** omogućava definisanje karakteristika liste koja će se koristiti u postupku slanja [*Newsletter-a*](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), kao i definisanje **CRM kontakata** ili kontakta koji će biti deo te liste. Za kreiranje nove liste potrebno je kliknuti na dugme Novo ![](/img/neutral/common/new.png) na formi za pretragu distribucionih lista.

Forma se sastoji od dve sekcije.

Gornja sekcija omogućava definisanje sledećih informacija:

**Naziv**: odgovara identifikacionom kodu distribucione liste;  
**Datum kreiranja**: datum kada je lista kreirana;  
**Beleška**: alfanumeričko polje koje omogućava unos slobodnih beleški;  
**Autor**: prikazuje korisnika koji je kreirao listu;  
**Predmet poslovanja**: označava vrstu dokumenta ili šifarnika na koji se odnosi slanje. Dozvoljene su sledeće vrednosti:
- CRM kontakti
- marketinška kampanja
- poslovna prilika
- zahtev za nabavku
- upit za ponudu
- prodajna ponuda
- prodajna narudžbina
- prodajna otpremnica
- izlazni račun
- servisna intervencija u modulu Projekti

**Vrsta**: omogućava definisanje vrste distribucione liste između **Statičke** ili **Dinamičke**.

Donja forma razlikuje se u zavisnosti od toga da li je lista statička ili dinamička.

## ***STATIČKA LISTA***

Sekcija je podeljena na 2 kartice.

**Kartica Dodeljeno**

Na kartici Dodeljeno prikazani su subjekti koji su već dodeljeni distribucionoj listi.

**Kartica Nije dodeljeno**

Na kartici Nije dodeljeno prikazani su kontakti koji još nisu dodeljeni određenoj listi. Kartica je podeljena na 2 sekcije. Prva sekcija je Filtriranje, gde možete postaviti niz filtera koji se odnose na kontakte koje želite da izdvojite.

Druga sekcija, odnosno rezultujuća mreža, prikazuje subjekte izdvojene na osnovu prethodno postavljenih filtera nakon što pritisnete dugme Traži ![](/img/neutral/common/search.png).  
Dugme Dodeli ![](/img/neutral/common/assign-row.png) premešta kontakt sa kartice **Nije dodeljeno** na karticu **Dodeljeno**, čime se kontakt dodaje u distribucionu listu.

**Grupiši po kontaktu**: omogućava grupisanje subjekata (kontakata i referenci) u jedan red prema kontaktu kojem pripadaju.

## ***DINAMIČKA LISTA***

Ova sekcija je podeljena na 2 kartice.

**Kartica Konfiguracija**

Na početku je potrebno navesti sledeća 3 podatka:

**Oblast**: koristi se za definisanje oblasti u Fluentisu iz koje će se podaci preuzimati;  
**Modul**: odnosi se na prethodno odabranu oblast;  
**SQL Query**: potrebno je odabrati prethodno kreiran SQL upit u Fluentisu (za više informacija pogledajte odeljak Fluentis Query Studio).

U donjoj mreži prikazuju se svojstva i način njihovog mapiranja.

**Kartica Mapiranje**

Na ovoj kartici u realnom vremenu prikazani su kontakti obrađeni i dodati na distribucionu listu prema SQL upitu navedenom na kartici Konfiguracija.
