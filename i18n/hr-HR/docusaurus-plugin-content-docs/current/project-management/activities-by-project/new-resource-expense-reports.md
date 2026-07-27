---
title: Obračuni troškova resursa
sidebar_position: 2
---

Obračun troškova služi za unos i odobravanje troškova evidentiranih u dokumentima **Intervencije** i **Prijave aktivnosti** resursa.

Podržana su dva načina rada:

1 - Obračuni troškova generiraju se skupno za sve resurse putem posebne procedure.

Dostupna je procedura u kojoj su prikazani svi troškovi svih resursa. Troškovi ističu eventualna odstupanja u odnosu na odobrene limite, a odgovorna osoba provodi njihovu provjeru i odobravanje. Po završetku provjere kreira se sažetak za svaki pojedini resurs.

2 - Obračuni troškova obrađuju se pojedinačno, izravnim kreiranjem obračuna troškova za odabrani resurs.

Obračun troškova generira se kao novi dokument. Nakon odabira željenog razdoblja i resursa automatski će se učitati svi troškovi koji odgovaraju zadanim kriterijima.

Resurs može pregledavati troškove, brisati ih, dodavati privitke i unositi nove troškove.

## Zaglavlje

Za ispravan rad obvezno je popuniti sljedeće podatke u zaglavlju:

**Vrsta obračuna troškova**: vrsta dokumenta obračuna troškova koja će se koristiti.

**Period obračuna**: označava razdoblje kojem troškovi pripadaju, a koje se u pravilu podudara s mjesecom obračunske liste plaće u kojoj će troškovi biti obrađeni.

**Od datuma / Do datuma**: određuje raspon datuma koji se koristi za pretraživanje i uključivanje troškova prema datumu nastanka u različitim dokumentima. Ovaj raspon može biti različit od obračunskog razdoblja.

**Resurs**: resurs na kojeg glasi obračun troškova.

**Status troška**: opći status zaglavlja obračuna troškova. Automatski se određuje prema statusima pojedinih redaka (primjerice, ako su svi redci odobreni, odobreno će biti i zaglavlje. Ako su neki redci odobreni, a neki nisu, status zaglavlja bit će **Djelomično odobreno**).

**Godina**: godina obračuna troškova.

**Datum**: datum obračuna troškova.

**Broj**: broj obračuna troškova.

Opis je neobavezno polje.

**Opis**: dodatni opis po potrebi.

Polja **Vrsta obračuna troškova** i **Resurs (audit)** automatski će biti predložena ako su konfigurirana u **Parametrima za projekte > Parametri operatera**.

### Status zaglavlja obračuna troškova

Na temelju statusa pojedinih redaka automatski će se postaviti status zaglavlja.
Prilikom spremanja:

ako **SVI** redci troškova imaju status:
- **Uneseno**:  
  tada će i status zaglavlja biti = **Uneseno**
- **Odobreno**:  
  tada će i status zaglavlja biti = **Odobreno**
- **Nije autorizirano**:  
  tada će i status zaglavlja biti = **Nije odobreno**
- **Djelomično odobreno**:  
  tada će i status zaglavlja biti = **Djelomično odobreno**
- **Prisilno odobreno**:  
  tada će i status zaglavlja biti = **Prisilno odobreno**

Ako postoji samo jedan redak troška sa statusom **Uneseno**, status zaglavlja bit će **Uneseno**.
Ako svi redci troškova imaju status **Odobreno** ili **Prisilno odobreno**, bez prisutnosti bilo kojeg drugog statusa, status zaglavlja bit će **Prisilno odobreno**.
Ako redci troškova imaju kombinaciju različitih statusa, zaglavlje će imati status **Djelomično odobreno**.

## Kartica Troškovi

Na ovoj kartici prikazan je detaljan popis troškova koji su uneseni u pojedinim dokumentima ili izravno u obračun troškova.

**Vrsta troška**: vrsta nastalog troška.

**Datum troška**: datum kada je trošak nastao.

**Iznos**: iznos nastalog troška.

**Limit (Plafond)**: maksimalni dnevni iznos definiran u šifarniku resursa za određenu vrstu troška. Ako je **limit = 0**, znači da ograničenje ne postoji.

**Plafond potrošena kvota**: ako postoje drugi obračuni troškova za isti resurs, istu vrstu troška i isti datum, raspoloživi limit smatra se djelomično iskorištenim (npr. dvije intervencije istoga dana za isti resurs i istu vrstu troška).

**Prekoračeni iznos**: dio iznosa koji premašuje limit. Izračunava se prema sljedećoj formuli:  
	Prekoračenje = Limit – Iznos troška – Već iskorišteni dio limita  
	U obzir se uzimaju samo negativne vrijednosti, odnosno one koje premašuju limit.

**Status troška**: označava je li trošak odobren / nije odobren / djelomično odobren / prisilno odobren.

**Datum provjere**: datum kada je trošak potvrđen.

**Prilozi**: označava postoje li privici za trošak.

**Način plaćanja**: način plaćanja korišten za nastali trošak.

**Povrat iznosa**: označava treba li trošak biti refundiran kroz obračunsku listu plaće. Primjerice, ako resurs koristi službenu kreditnu karticu, ova će opcija biti isključena.

**Kumulativni trošak**: označava da je trošak dio zbirnog troška (stoga resurs može biti različit od onoga kojem će refundacija biti isplaćena).

**Resurs**: resurs za kojeg je trošak nastao.

**Bilješke**: napomene unesene za predmetni trošak.

**Dokument**: označava izvorni dokument iz kojeg trošak potječe.

**Ručno izmijenjeno**: ako je status prisilno promijenjen u odnosu na predloženi ili je izmijenjen iznos prekoračenja, oznaka se automatski uključuje.

U tablici se mogu nalaziti redci koji se odnose na resurse različite od glavnog resursa navedenog na obračunu troškova.
To se događa kod detaljnih redaka zbirnih troškova, gdje su u detaljima navedeni različiti resursi.
Svi detaljni redci bit će uključeni u obračuna troškova resursa koji je stvarno podmirio trošak. Time se osigurava ispravna refundacija kroz obračunsku listu plaće. Podaci o pojedinim resursima i dalje su potrebni radi provjere njihovih pojedinačnih limita.

### Status retka troška

Svaki redak troška nalazi se u određenom **statusu**, a dopuštene vrijednosti su:

- **Uneseno**

- **Odobreno**: status se dodjeljuje ako je trošak konfiguriran u šifarniku resursa i ne premašuje odobreni limit.

- **Nije autorizirano**: status se dodjeljuje ako trošak **nije** konfiguriran u šifarniku resursa ili ako u cijelosti premašuje odobreni limit. Polje **Prekoračeni iznos** imat će vrijednost jednaku iznosu troška.

- **Djelomično odobreno**: status se dodjeljuje ako je trošak konfiguriran u šifarniku resursa, ali samo djelomično premašuje odobreni limit. Polje **Prekoračeni iznos** može se uređivati.

- **Prisilno odobreno**: koristi se kada trošak premašuje limit ili nije predviđen u šifarniku resursa, ali se ipak odluči prisilno odobriti. Polje **Prekoračeni iznos** bit će postavljeno na **0**.

U slučaju **Djelomično odobrenog troška**, polje **Prekoračeni iznos** može se uređivati.
Time je omogućena prilagodba raspodjele raspoloživog limita (primjerice kada postoji više troškova iste vrste za isti resurs i isti dan ili kada je potrebno povećati limit za konkretan slučaj).
U slučaju **Prisilno odobrenog troška**, polje **Prekoračeni iznos** uvijek će biti postavljeno na **0**.

## Kartica Prilozi

Kartica je podijeljena na tri područja:
- s lijeve strane nalazi se popis troškova (kao na prvoj kartici), ali samo s osnovnim podacima;
- u sredini se nalazi popis privitaka koji pripadaju odabranom trošku;
- s desne strane prikazuje se pregled odabranog privitka.

Na vrhu se nalazi oznaka za filtriranje:

**Prikaži troškove s potrebnim dokazom – bez privitka**

Prikazat će se svi troškovi kojima nedostaje privitak, a čija konfiguracija zahtijeva obvezno prilaganje dokumentacije.
Na ovom zaslonu korisnik može dodati nedostajući privitak, koji će biti spremljen te će nakon toga biti vidljiv i u odgovarajućim dokumentima (**Aktivnosti**/**Intervencije**). Način dodavanja jednak je kao i u ostalim područjima sustava – metodom **drag & drop** ili pomoću gumba na alatnoj traci.
Brisanje obračuna troškova **neće** obrisati privitke; oni će ostati spremljeni u sustavu i povezani s izvornim dokumentom.

## Kartica Sažeci

Na kartici **Sažeci** prikazani su ukupni iznosi unesenih troškova, uz detaljan pregled iznosa koji će biti refundirani te iznosa koji neće biti refundirani.
Ako je trošak plaćen službenom kreditnom karticom (te je izvorno označen kao **za povrat**), iznos prekoračenja smatrat će se iznosom koji će biti terećen na obračunskoj listi plaće.
Ako je trošak plaćen vlastitim sredstvima (te je izvorno označen kao **za povrat**), na obračunskoj listi plaće bit će priznat samo iznos do maksimalnog limita.
Detaljni iznosi dostupni su na kartici **Ukupni iznosi** obračuna troškova resursa generiranog ovom procedurom.
Na ovoj kartici prikazani su sažeci ukupnih iznosa.
Ukupni iznosi izračunavaju se na sljedeći način:

- **Ukupan iznos troškova**: ukupni zbroj vrijednosti polja **Iznos** za svaki redak troška.
- **Ukupan prekoračeni iznos**: ukupni zbroj vrijednosti polja **Prekoračeni iznos** za svaki redak troška.
- **Ukupno zaduženo na platnoj listi**: iznos terećen na obračunskoj listi plaće = zbroj vrijednosti polja **Prekoračeni iznos** za retke troškova koji imaju:
    - status **Nije autorizirano** ili **Djelomično odobreno**
    - **nemaju** uključenu oznaku **Za povrat**

- **Ukupno nepriznato na obračunu plaće**: iznos koji neće biti priznat na obračunskoj listi plaće = zbroj vrijednosti polja **Prekoračeni iznos** za retke troškova koji imaju:
    - status **Nije odobreno** ili **Djelomično odobreno**
    - imaju uključenu oznaku **Za povrat**

- **Ukupno iznos za isplatu u obračunu plaće**: iznos koji će biti isplaćen na obračunskoj listi plaće = zbroj vrijednosti polja **Iznos**, umanjen za vrijednost polja **Prekoračeni iznos**, za retke troškova koji imaju:
    - status **Odobreno** ili **Djelomično odobreno**
    - imaju uključenu oznaku **Za povrat**

- **Ukupno nepotvrđeni troškovi**:
  zbroj vrijednosti polja **Iznos** za retke koji imaju status **Uneseno**.

  ## Funkcionalnosti alatne trake

Na alatnoj traci dostupni su sljedeći gumbi:

**Učitaj troškove**: pretražuje i učitava troškove u obračun troškova.

**Novi obračun troškova**: stvara novi zapis troška u obračunu troškova.

**Obriši redak**: briše odabrane retke troškova koji više nisu potrebni.

**Promijeni status**: omogućuje skupnu promjenu statusa odabranih redaka (dostupno samo korisnicima s odgovarajućim ovlastima).

**Obrada troškova**: otvara prozor za odabir, sličan proceduri **Provjeri obračuna troškova resursa**, koji omogućuje pretraživanje dodatnih troškova i njihovo dodavanje u obračun troškova na kojem se trenutno radi.

**Otvori intervenciju**: ako je dostupno, otvara dokument iz kojeg potječe trošak, odnosno **Intervenciju**.

**Otvori aktivnost**: ako je dostupno, otvara dokument iz kojeg potječe trošak, odnosno **Prijavu aktivnosti**.