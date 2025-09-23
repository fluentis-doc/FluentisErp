---
title: Context Panel
sidebar_position: 4
---

Paneli konteksta, tzv. **Context Panel**, omogućuju trenutačan prikaz sažetih informacija o određenom poslovnom objektu u sustavu Fluentis.  

Izrada kontekstualnog panela (context panel) uključuje nekoliko koraka parametrizacije, točnije:
1. eventualno kreiranje nadzorne ploče (ako se context panel temelji na nadzornoj ploči).
2. kreiranje **context panela** putem pripadajuće forme.
3. parametrizacija **context panela** i definiranje pripadajućih poveznica.

Za otvaranje forme povezane s **Context Panel**, da **Arm** > **Platform** > **Context Panel**

Forma za kontekstualne panele sastoji se od sljedećih dijelova: 

### Ribbon izbornik
Ribbon izbornik sadrži kontrole za interakciju s formom:
* Traži: za pretraživanje već definiranih context panela u Fluentisu.
* Novo: za kreiranje novog context panela.
* Izmijeni: za uređivanje već postojećeg context panela.
* Prikaži: za prikaz već postojećeg context panela u načinu samo za čitanje.
* Izbriši: za uklanjanje postojećih ExtraData zapisa u Fluentisu.  

### Glavni dio
Glavni dio se sastoji od rešetke sa sljedećim poljima:
* Business Object: obavezno – označava objekt na kojem se temelji kontekstualni panel.
* Lokalizirani kod: neobavezno – označava lokalizirani opis.
* Naziv: naziv.
* Obrazac: neobavezno – označava formu na kojoj se temelji kontekstualni panel.
* Nadzorna ploča: neobavezno – označava nadzornu ploču na kojoj se temelji kontekstualni panel.
* Izvještaj: neobavezno – označava izvještaj na kojem se temelji kontekstualni panel.

## Detalji

Obrazac detalja se sastoji od 3 dijela:

### Ribbon izbornik
Ribbon izbornik sadrži isključivo gumb **Spremi**, koji se koristi za spremanje konfiguracije. 

### Zaglavlje
Tab koji se odnosi na zaglavlje sastoji se od sljedećih inputa/polja:
* Business Object: obavezno – poslovni objekt na kojem se temelji kontekstualni panel.
* Lokalizirani kod: neobavezno – lokalizirani opis.
* Naziv: obavezno – opis.
* Prava:
* Tip:
* Nadzorna ploča:
* Definicija:
* Prikaži u Kontekstualnom izborniku:
* Prikaži u Kontekstualnom panelu:
* Slika:
* Arm Obrazac konteksta:
* Poredak:
* Predefinirana definicija povezivanja:


### Kartica Povezivanja

***za završiti.***


# Primjer primjene
Želimo kreirati **kontekstualni panel** koji prikazuje **postotak amortizacije** za odabrani osnovni resurs (cespit).  
**Postotak amortizacije** izračunava se kao postotni omjer između amortizacijskog fonda i povijesnog troška osnovnog sredstva.  

Kako bismo postigli ovaj rezultat, potrebno je:
1. Kreirati, putem **FluentisQueryStudio**, SQL upit koji će dohvatiti podatke o osnovnim sredstvima iz Fluentis MSSQL baze.
2. Kreirati izvor podataka (datasource) koji će se temeljiti na gore navedenom upitu.
3. Definirati parametar unutar izvora podataka koji će služiti kao WHERE filtar za upit, ovisno o odabranom osnovnom sredstvu.
4. Kreirati nadzornu ploču (dashboard) koja će se temeljiti na datasourceu iz točke 2.
5. Kreirati parametrizaciju u Arm-u za kontekstualni panel.
6. Otvoriti formu osnovnih sredstava (Fixed Assets).
---
1. Za korištenje **FluentisQueryStudio** pogledajte odgovarajuću dokumentaciju.  

```SQL
SELECT * FROM Fluentis.FI_FixedAssets WHERE FIFA_Id = @ID
```
gdje je ```@ID``` parametar koji se naknadno definira na razini DataSource.  

2. Kreiramo datasource temeljen na upitu iz prethodne točke; za postupak kreiranja datasourcea pogledajte pripadajuću dokumentaciju. 


U tabu ***Visible property*** povucimo svojstva koja nas zanimaju, poput: **Id**, **Description**, **Code**, **TotalAmount**, **TotalDepreciation**, **NetAmount**.  

1. Definiramo parametar u datasourceu putem taba **parameters**.

)

1. U Fluentisu kreiramo Kontrolnu ploču; za sve detalje vezane uz dashboardove pogledajte pripadajuću dokumentaciju. 

2. Iz Arm-a kreiramo parametrizaciju za **context panel**.  



3. Odaberemo zapis u formi osnovnih sredstava; zatim će u kontekstualnom panelu biti prikazan postotak amortizacije za to sredstvo.  