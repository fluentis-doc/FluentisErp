---
title: Obračuni troškova resursa
sidebar_position: 2
---

Obračun troškova služi za unos i odobravanje troškova evidentiranih u dokumentima **Intervencije** i **Prijave aktivnosti** resursa.

Podržana su dva načina rada:

1 - Obračuni troškova generišu se grupno za sve resurse putem posebne procedure.

Dostupna je procedura u kojoj su prikazani svi troškovi svih resursa. Troškovi ističu eventualna odstupanja u odnosu na odobrene limite, a odgovorno lice vrši njihovu proveru i odobravanje. Po završetku provere kreira se sažetak za svaki pojedinačni resurs.

2 - Obračuni troškova obrađuju se pojedinačno, direktnim kreiranjem obračuna troškova za izabrani resurs.

Obračun troškova generiše se kao novi dokument. Nakon izbora željenog perioda i resursa automatski će se učitati svi troškovi koji odgovaraju zadatim kriterijumima.

Resurs može pregledati troškove, brisati ih, dodavati priloge i unositi nove troškove.

## Zaglavlje

Za ispravan rad obavezno je popuniti sledeće podatke u zaglavlju:

**Vrsta obračuna troškova**: vrsta dokumenta obračuna troškova koja će se koristiti.

**Obračunski period**: označava period kojem troškovi pripadaju, a koji se po pravilu podudara sa mesecom obračunske liste plata u kojoj će troškovi biti obrađeni.

**Od datuma / Do datuma**: određuje raspon datuma koji se koristi za pretragu i uključivanje troškova prema datumu nastanka u različitim dokumentima. Ovaj raspon može biti različit od obračunskog perioda.

**Resurs**: resurs na kojeg glasi obračun troškova.

**Status troška**: opšti status zaglavlja obračuna troškova. Automatski se određuje prema statusima pojedinačnih redova (na primer, ako su svi redovi odobreni, odobreno će biti i zaglavlje. Ako su neki redovi odobreni, a neki nisu, status zaglavlja biće **Delimično odobreno**).

**Godina**: godina obračuna troškova.

**Datum**: datum obračuna troškova.

**Broj**: broj obračuna troškova.

Opis je neobavezno polje.

**Opis**: dodatni opis po potrebi.

Polja **Vrsta obračuna troškova** i **Resurs (audit)** automatski će biti predložena ako su konfigurisana u **Parametrima za projekte > Parametri operatera**.

### Status zaglavlja obračuna troškova

Na osnovu statusa pojedinačnih redova automatski će biti postavljen status zaglavlja.  
Prilikom čuvanja:

ako **SVI** redovi troškova imaju status:
- **Uneto**:  
  tada će i status zaglavlja biti = **Uneto**
- **Odobreno**:  
  tada će i status zaglavlja biti = **Odobreno**
- **Nije autorizovano**:  
  tada će i status zaglavlja biti = **Nije odobreno**
- **Delimično odobreno**:  
  tada će i status zaglavlja biti = **Delimično odobreno**
- **Prinudno odobreno**:  
  tada će i status zaglavlja biti = **Prinudno odobreno**

Ako postoji samo jedan red troška sa statusom **Uneto**, status zaglavlja biće **Uneto**.  
Ako svi redovi troškova imaju status **Odobreno** ili **Prinudno odobreno**, bez prisustva bilo kog drugog statusa, status zaglavlja biće **Prinudno odobreno**.  
Ako redovi troškova imaju kombinaciju različitih statusa, zaglavlje će imati status **Delimično odobreno**.

## Kartica Troškovi

Na ovoj kartici prikazan je detaljan spisak troškova koji su uneti u pojedinačne dokumente ili direktno u obračun troškova.

**Vrsta troška**: vrsta nastalog troška.

**Datum troška**: datum kada je trošak nastao.

**Iznos**: iznos nastalog troška.

**Limit (Plafon)**: maksimalni dnevni iznos definisan u šifarniku resursa za određenu vrstu troška. Ako je **limit = 0**, to znači da ograničenje ne postoji.

**Plafon potrošena kvota**: ako postoje drugi obračuni troškova za isti resurs, istu vrstu troška i isti datum, raspoloživi limit smatra se delimično iskorišćenim (npr. dve intervencije istog dana za isti resurs i istu vrstu troška).

**Prekoračeni iznos**: deo iznosa koji premašuje limit. Izračunava se prema sledećoj formuli:  
	Prekoračenje = Limit – Iznos troška – Već iskorišćeni deo limita  
	U obzir se uzimaju samo negativne vrednosti, odnosno one koje premašuju limit.

**Status troška**: označava da li je trošak odobren / nije odobren / delimično odobren / prinudno odobren.

**Datum provere**: datum kada je trošak potvrđen.

**Prilozi**: označava da li postoje prilozi za trošak.

**Način plaćanja**: način plaćanja korišćen za nastali trošak.

**Povraćaj iznosa**: označava da li trošak treba da bude refundiran kroz obračunsku listu plata. Na primer, ako resurs koristi službenu kreditnu karticu, ova opcija će biti isključena.

**Kumulativni trošak**: označava da je trošak deo zbirnog troška (stoga resurs može biti različit od onog kojem će refundacija biti isplaćena).

**Resurs**: resurs za kojeg je trošak nastao.

**Beleške**: napomene unete za predmetni trošak.

**Dokument**: označava izvorni dokument iz kojeg trošak potiče.

**Ručno izmenjeno**: ako je status prinudno promenjen u odnosu na predloženi ili je izmenjen iznos prekoračenja, oznaka se automatski uključuje.

U tabeli se mogu nalaziti redovi koji se odnose na resurse različite od glavnog resursa navedenog na obračunu troškova.
To se događa kod detaljnih redova zbirnih troškova, gde su u detaljima navedeni različiti resursi.
Svi detaljni redovi biće uključeni u obračun troškova resursa koji je stvarno podmirio trošak. Time se obezbeđuje ispravna refundacija kroz obračunsku listu plata. Podaci o pojedinačnim resursima i dalje su potrebni radi provere njihovih pojedinačnih limita.

### Status reda troška

Svaki red troška nalazi se u određenom **statusu**, a dozvoljene vrednosti su:

- **Uneto**

- **Odobreno**: status se dodeljuje ako je trošak konfigurisan u šifarniku resursa i ne premašuje odobreni limit.

- **Nije autorizovano**: status se dodeljuje ako trošak **nije** konfigurisan u šifarniku resursa ili ako u potpunosti premašuje odobreni limit. Polje **Prekoračeni iznos** imaće vrednost jednaku iznosu troška.

- **Delimično odobreno**: status se dodeljuje ako je trošak konfigurisan u šifarniku resursa, ali samo delimično premašuje odobreni limit. Polje **Prekoračeni iznos** može se uređivati.

- **Prinudno odobreno**: koristi se kada trošak premašuje limit ili nije predviđen u šifarniku resursa, ali se ipak odluči da se prinudno odobri. Polje **Prekoračeni iznos** biće postavljeno na **0**.

U slučaju **Delimično odobrenog troška**, polje **Prekoračeni iznos** može se uređivati.  
Time je omogućeno prilagođavanje raspodele raspoloživog limita (na primer kada postoji više troškova iste vrste za isti resurs i isti dan ili kada je potrebno povećati limit za konkretan slučaj).  
U slučaju **Prinudno odobrenog troška**, polje **Prekoračeni iznos** uvek će biti postavljeno na **0**.

## Kartica Prilozi

Kartica je podeljena na tri oblasti:
- sa leve strane nalazi se spisak troškova (kao na prvoj kartici), ali samo sa osnovnim podacima;
- u sredini se nalazi spisak priloga koji pripadaju izabranom trošku;
- sa desne strane prikazuje se pregled izabranog priloga.

Na vrhu se nalazi oznaka za filtriranje:

**Prikaži troškove sa potrebnim dokazom – bez priloga**

Prikazaće se svi troškovi kojima nedostaje prilog, a čija konfiguracija zahteva obavezno prilaganje dokumentacije.  
Na ovom ekranu korisnik može dodati nedostajući prilog, koji će biti sačuvan i nakon toga vidljiv i u odgovarajućim dokumentima (**Aktivnosti**/**Intervencije**). Način dodavanja isti je kao i u ostalim oblastima sistema – metodom **drag & drop** ili pomoću dugmeta na alatnoj traci.  
Brisanje obračuna troškova **neće** obrisati priloge; oni će ostati sačuvani u sistemu i povezani sa izvornim dokumentom.

## Kartica Sažeci

Na kartici **Sažeci** prikazani su ukupni iznosi unetih troškova, uz detaljan pregled iznosa koji će biti refundirani i iznosa koji neće biti refundirani.  
Ako je trošak plaćen službenom kreditnom karticom (i izvorno označen kao **za povraćaj**), iznos prekoračenja smatraće se iznosom koji će biti terećen na obračunskoj listi plata.  
Ako je trošak plaćen sopstvenim sredstvima (i izvorno označen kao **za povraćaj**), na obračunskoj listi plata biće priznat samo iznos do maksimalnog limita.  
Detaljni iznosi dostupni su na kartici **Ukupni iznosi** obračuna troškova resursa generisanog ovom procedurom.  
Na ovoj kartici prikazani su sažeci ukupnih iznosa.  
Ukupni iznosi obračunavaju se na sledeći način:

- **Ukupan iznos troškova**: ukupan zbir vrednosti polja **Iznos** za svaki red troška.
- **Ukupan prekoračeni iznos**: ukupan zbir vrednosti polja **Prekoračeni iznos** za svaki red troška.
- **Ukupno zaduženo na platnoj listi**: iznos terećen na obračunskoj listi plata = zbir vrednosti polja **Prekoračeni iznos** za redove troškova koji imaju:
    - status **Nije autorizovano** ili **Delimično odobreno**
    - **nemaju** uključenu oznaku **Za povraćaj**

- **Ukupno nepriznato na obračunu plata**: iznos koji neće biti priznat na obračunskoj listi plata = zbir vrednosti polja **Prekoračeni iznos** za redove troškova koji imaju:
    - status **Nije odobreno** ili **Delimično odobreno**
    - imaju uključenu oznaku **Za povraćaj**

- **Ukupan iznos za isplatu u obračunu plata**: iznos koji će biti isplaćen na obračunskoj listi plata = zbir vrednosti polja **Iznos**, umanjen za vrednost polja **Prekoračeni iznos**, za redove troškova koji imaju:
    - status **Odobreno** ili **Delimično odobreno**
    - imaju uključenu oznaku **Za povraćaj**

- **Ukupno nepotvrđeni troškovi**:  
  zbir vrednosti polja **Iznos** za redove koji imaju status **Uneto**.

## Funkcionalnosti alatne trake

Na alatnoj traci dostupna su sledeća dugmad:

**Učitaj troškove**: pretražuje i učitava troškove u obračun troškova.

**Novi obračun troškova**: kreira novi zapis troška u obračunu troškova.

**Obriši red**: briše izabrane redove troškova koji više nisu potrebni.

**Promeni status**: omogućava grupnu promenu statusa izabranih redova (dostupno samo korisnicima sa odgovarajućim ovlašćenjima).

**Obrada troškova**: otvara prozor za izbor, sličan proceduri **Proveri obračune troškova resursa**, koji omogućava pretragu dodatnih troškova i njihovo dodavanje u obračun troškova na kojem se trenutno radi.

**Otvori intervenciju**: ako je dostupno, otvara dokument iz kojeg potiče trošak, odnosno **Intervenciju**.

**Otvori aktivnost**: ako je dostupno, otvara dokument iz kojeg potiče trošak, odnosno **Prijavu aktivnosti**.