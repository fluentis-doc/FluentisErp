---
title: Knjiženje POS-a
sidebar_position: 4
---

Postupak se otvara putem izbornika **Prodaja > POS > Knjiženje > Knjiženje POS-a**.

Da bi se POS mogao knjižiti, mora ispunjavati određene uvjete: u zaglavlju dokumenta mora biti označen parametar *Ispisano*, a vrsta POS-a mora sadržavati opći predložak za knjiženje.

:::danger[Pažnja]
Polje **Konto** definirano u zaglavlju POS-a nije relevantno za proces **knjiženja**.  
Predložak knjiženja povezan s dokumentom mora sadržavati definiran **fiksni konto kupca**, detaljno specificiran s kodom **podkonta** (na primjer konto "Kupci – gotovinska prodaja").  
Vrsta iznosa na retku predloška za podkonto kupca mora biti postavljena na *Ukupni iznos dokumenta / registracije*.
:::

## Knjiženje

Forma u gornjem dijelu sadrži filtre pretraživanja za pronalaženje i prikaz na popisu POS dokumenata koji čekaju knjiženje.

U donjem dijelu forme nalaze se parametri za upravljanje procesom knjiženja:

**Datum knjiženja jednak datumu dokumenta**: ova oznaka nalaže da se svaka pojedina faktura knjiži na datum njenog izdavanja. 

Ako se oznaka deaktivira, aktivira se sljedeće polje, **Datum knjiženja**, u kojem se može postaviti fiksni datum za knjiženje.  

#### Specifične tipke    
> **Pretraga**: pretražuje POS dokumente; prikazuju se svi POS-ovi koji su ispisani, a još nisu knjiženi.   
> **Knjiženje**: izvršava knjiženje odabranih POS dokumenata, prema definiranim postavkama.  

## Povijest knjiženja  

## Prethodno

Forma prikazuje popis već izvršenih knjiženja, omogućujući pregled i eventualno poništavanje istih putem namjenskih tipki.

Poništavanje knjiženja moguće je samo ako je razdoblje još uvijek otvoreno za izmjene.  

**Knjiženje POS-a**: prikazuje mrežu s detaljima provedenih knjiženja. Popunjava se nakon pokretanja postupka pretrage, a korisnik može označiti knjiženja na koja želi primijeniti funkcije dostupne na traci izbornika.  

Podaci u donjim mrežama, **Prodajno mjesto** i **Knjigovodstvena registracija**, odnose se na odabranu stavku u gornjoj mreži.  
Dvostrukim klikom na unos u sekciji prodajnih mjesta ili knjiženja moguće je otvoriti odgovarajući zapis prodajnog mjesta ili knjiženja.  

#### Specifične tipke   
> **Pretraga**: prikazuje popis izvršenih knjiženja.     
> **Poništi knjiženje**: ovim se gumbom briše cijelo provedeno knjiženje, zajedno sa svim pridruženim POS dokumentima.  
