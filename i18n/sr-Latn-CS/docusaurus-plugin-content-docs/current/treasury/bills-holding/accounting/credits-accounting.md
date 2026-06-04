---
title: Knjiženje odobrenja
sidebar_position: 3
---

Obrazac se nalazi u Riznica > Portfelj potraživanja > Knjiženja > Knjiženje prihoda.

S ovog obrasca prelazi se na završnu fazu portfelja mjenica: postupak će zatvoriti prijelazni račun banke koja je izvršila prezentaciju kako bi se iznos prenio na stvarni tekući račun banke navedene u nalogu.

:::tip[Napomena]
**Potrebno je izričito pristupiti ovom obrascu za ovu knjiženje, budući da nije predviđen nikakav gumb unutar mjenice ili naloga**. 
:::

## Knjiženje odobrenja

1. Koristite gornji dio obrasca za filtriranje pretrage mjenica koje treba knjižiti kao priljev: knjiženje priljeva može se izvršiti samo za već knjižene mjenice. Odabir se vrši na detaljima mjenica kako bi se mogli utvrditi iznosi koji se knjiže za svaki datum dospijeća

2. Odaberite iz središnjeg dijela mjenice koje želite obraditi. 

3. Popuni parametre za knjiženje, kao što su kontrolna **šifra knjiženja**, **datum knjiženja** i datum razgraničenja.

:::note[Napomena]
Ovaj se odjeljak može unaprijed postaviti unutar [**parametara**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) modula Portfelj mjenica.
:::

4. Također popunite i ostala polja za upravljanje knjiženjem:

**Troškovi provizija**: podračun na koji će se knjižiti troškovi provizija, koji treba navesti u sljedećem polju.

**Provizije**: Iznos provizija na knjiženje priljeva mjenica koji se evidentira u računovodstvu; za svaku mjenicu može biti automatski predložen na temelju *provizija* postavljenih u [***šifarniku banaka***](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry).  

**Pasivni troškovi**:  račun na koji će se knjižiti obračunati pasivni kamatni troškovi za mjenice na eskont.

:::note[Napomena]
U ovom su odjeljku također dostupna tri polja za prikaz ukupnih iznosa odabranih mjenica u središnjoj tablici:

**Ukupno odabranih pasivnih troškova**: zbroj vrijednosti pasivnih troškova za sve odabrane mjenice;

**Ukupno odabranih provizija**: zbroj vrijednosti provizija za sve odabrane mjenice;

**Ukupan iznos odabranih mjenica**:  zbroj vrijednosti svih odabranih mjenica;
:::

4. Klikni gumb **Knjiženje priljeva** na traci izbornika



**Specifični gumbi**

**Traži**: Pretraži popis efekata za uplatu.

**Knjiženje**: Izvršava knjiženje za odabrane stavke.



### Predhodni

S kartice Prethodni moguće je poništiti već izvršena knjiženja.

Poništenje će biti moguće samo ako je razdoblje još uvijek izmjenjivo (knjiga dnevnika nije ispisana i računi nisu zatvoreni).

Dvostruki klik na odjeljak s evidentiranim stavkama omogućit će prikaz pripadajućeg računovodstvenog zapisa. 

Prisutna je kartica za detaljno pregledavanje uočenih grešaka tijekom knjiženja.



**Specifični gumbi**

**Traži**: Pretraži popis izvršenih knjiženja.

**Poništavanje knjiženja**: Izvršava obnavljanje odabranih knjiženja za sve dokumente koji se u njima nalaze.

**Poništavanje registracija**: Izvršava obnovu odabrane računovodstvene registracije.




