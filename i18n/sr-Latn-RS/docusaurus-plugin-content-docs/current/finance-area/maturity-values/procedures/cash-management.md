---
title: Upravljanje likvidnošću
sidebar_position: 6
---

Svrha ove procedure je da omogući jednostavan i brz pregled stanja likvidnosti po bankovnim računima, kako bi se proverila raspoloživa sredstva za svaki račun i, po potrebi, odložilo plaćanje obaveza ili promenila banka preko koje će se izvršiti plaćanje.

### Način rada

Postoje dva moguća načina rada:

- sa povezivanjem na **Novčani tok**,
- bez povezivanja na **Novčani tok**.

Kada se koristi **Novčani tok**, moguće je uzeti u obzir i podatke preuzete iz bilansa, čime se period analize može proširiti izvan podataka koji postoje u računovodstvenim knjiženjima.

Ako se **Novčani tok** ne koristi, prikazivaće se isključivo računovodstvena stanja i podaci iz glavne knjige.

:::danger PAŽNJA

Prilikom otvaranja obrasca korisniku se prikazuje poslednje sačuvano stanje, odnosno podaci onakvi kakvi su bili prilikom poslednjeg rada u proceduri.
Sve izmene koje korisnik izvrši i sačuva postaju nova referentna situacija, dok se prethodna verzija arhivira u bazi podataka. Trenutno nije moguće pregledati prethodno sačuvane verzije.

:::

### Specifična logika Novčanog toka

Ako već postoji obračunat **Novčani tok** i obrazac **Upravljanje likvidnošću** se otvara prvi put, korisnik može odabrati simulaciju Novčanog toka iz koje će biti preuzeti obrađeni podaci.
Nakon izbora Novčanog toka, Fluentis će preuzeti salda finansijskih konta i prikazati ih u gornjem pregledu.

**PAŽNJA:** potrebno je otvoriti proširivi odeljak **Raspoloživa likvidnost** kako bi bio prikazan spisak bankovnih računa sa njihovim saldima i iznosima rezervisanim u portfelju.

![](/img/it-it/finance-area/maturity-values/cash-management-1.png)

Sve ostale vrednosti preuzimaju se iz bočnog panela **Novčani tok**, pretragom pomoću komande **Pretraga novčanog toka**, izborom željenih redova i njihovim dodavanjem pomoću komande **Kreiraj iz novčanog toka**.

![](/img/it-it/finance-area/maturity-values/cash-management-2.png)

![](/img/it-it/finance-area/maturity-values/cash-management-3.png)

Korisnik može kreirati novu simulaciju Novčanog toka pomoću komande **Izračunaj novčani tok**. Na taj način nastaje nova simulacija koristeći prethodno sačuvane podrazumevane parametre, na isti način kao kod izvoza podataka u eksterni sistem za upravljanje trezorom, kao što je *DocFinance*, odnosno kao kod procedure za automatsko kreiranje Novčanog toka.
Po završetku obračuna Fluentis će ponuditi mogućnost ažuriranja podataka u proceduri **Upravljanje likvidnošću**.
Alternativno, korisnik može prvo kreirati novu simulaciju u proceduri **Novčani tok**, a zatim ponovo otvoriti **Upravljanje likvidnošću**. U tom slučaju Fluentis će prilikom otvaranja procedure prikazati pitanje da li želi da ažurira podatke koristeći novu simulaciju Novčanog toka.
U oba slučaja, ukoliko korisnik odbije ažuriranje, postojeći podaci ostaju nepromenjeni.
Ako se potvrdi ažuriranje, Fluentis će uporediti prethodno učitane podatke sa novim rezultatima:
- ažuriraće podatke o raspoloživoj likvidnosti,
- proveriće da li pojedini redovi i dalje postoje u novoj simulaciji,
- ukloniće redove koji više ne postoje,
- ažuriraće iznose ili datume dospeća ukoliko su promenjeni.

Ručno uneseni podaci koje je korisnik prethodno definisao (na primer **Iznos za plaćanje** ili **Očekivani datum**) neće biti prepisani tokom ažuriranja, kako bi se sačuvale korisničke izmene.
Nakon završetka ažuriranja korisnik može pregledati nove planirane tokove u panelu **Novčani tok** i dodati ih u trenutno upravljanje likvidnošću.

### Specifična logika kada se ne koristi Novčani tok

U ovom slučaju prilikom otvaranja obrasca ne izvršava se nikakva automatska radnja.

Korisniku je dostupna komanda **Ažuriraj stavke**, koja omogućava usklađivanje stavki simulacije (donji pregled) sa trenutnim stanjem otvorenih stavki. Ako je otvorena stavka zatvorena, biće uklonjena iz upravljanja likvidnošću, a ukoliko je i dalje otvorena, ažuriraće se njen preostali iznos i/ili datum dospeća.

### Opšta logika

#### Gornji pregled

Korisnik može preuzeti željena stanja računa iz bočnog panela **Knjiženja** i uključiti ih u raspoloživa sredstva. Ovaj panel prikazuje **Pregled konta**, odnosno pojedinačna računovodstvena knjiženja.

Izborom reda i korišćenjem komande **Kreiraj iz knjiženja**, Fluentis će preuzeti konto i kreirati red sa **stanjem računa na današnji dan**, **a ne sa iznosom izabranog knjiženja**.

Takođe je moguće ručno uneti novi zapis raspoložive likvidnosti ili izmeniti valutu i/ili iznos u evrima.

:::note OSTALA POLJA U TABELI

**Ukupna kreditna linija**: osnovna kreditna linija definisana u šifarniku banke.
**Kreditna linija za avanse**: kreditna linija za avansno finansiranje definisana u šifarniku banke.
**SBF kreditna linija**: SBF kreditna linija definisana u šifarniku banke.
**Saldo avansa**: predstavlja stanje avansa po fakturama, odnosno ukupan iznos prikazan u proceduri **Avansi i naplate**, za stavke čiji je datum dospeća veći od današnjeg.
**Saldo SBF**: predstavlja stanje predatih efekata, odnosno ukupan iznos efekata prikazanih u portfelju sa datumom dospeća nakon današnjeg datuma.
**Preostalo za avanse**: raspoloživi iznos za avansno finansiranje, odnosno razlika između kreditne linije i trenutno iskorišćenog iznosa avansa.
**Preostalo za SBF**: raspoloživi iznos SBF kreditne linije, odnosno razlika između ukupne kreditne linije i iskorišćenog iznosa.
**Raspoloživa likvidnost**: zbir knjigovodstvenog stanja i vrednosti predatih efekata.
**Kumulativna likvidnost**: kumulativni zbir raspoložive likvidnosti. Vrednost poslednjeg reda prikazuje se i u zaglavlju proširivog odeljka.

:::

#### Donji pregled

U donji pregled moguće je ručno unositi nove redove, čak i kada nisu povezani sa računovodstvenim knjiženjima (na primer za evidentiranje vanračunovodstvenih troškova ili prihoda, kao što su zarade ili PDV za uplatu).
Polja koja je moguće menjati su:
- **Očekivani datum**
- **Redni broj**
- **Iznos za plaćanje**
- oznaka **Isključeno**
- oznaka **Sakrij**

Redovi će biti prikazani crvenom bojom kada vrednost u koloni **Kumulativno** postane negativna.

![](/img/it-it/finance-area/maturity-values/cash-management-4.png)

**Predviđeni datum** predstavlja **očekivani datum** definisan na otvorenoj stavci (ili današnji datum ako je očekivani datum raniji). Promena ove vrednosti u obrascu automatski će ažurirati očekivani datum na povezanoj otvorenoj stavci prilikom snimanja.
Ako red potiče iz **Novčanog toka**, koristiće se očekivani datum definisan u toj stavci Novčanog toka (ili današnji datum ako je raniji).
**Datum dospeća** predstavlja stvarni datum dospeća otvorene stavke ili finansijskog toka.
**Redni broj** određuje redosled izvršenja plaćanja. Može se promeniti ručnim unosom nove vrednosti ili korišćenjem komande **Promeni predviđeni datum**, koja pomera izabranu stavku iza svih postojećih stavki sa zadatim datumom i automatski prilagođava njihov redni broj.
**Konto/Podkonto** može se uređivati samo kod ručno unetih redova, dok nije moguće menjati redove koji potiču iz otvorenih stavki ili Novčanog toka.
**Napomena** se automatski popunjava nazivom kupca ili dobavljača, dok se kod ručno unetih redova unosi opis finansijskog toka. Iznosi se ne mogu menjati kod redova koji potiču iz otvorenih stavki ili Novčanog toka.

Krajnje desno polje **Račun** predstavlja bankovni račun koji se koristi za plaćanje, a preuzima se iz otvorene stavke ili iz Novčanog toka.

Opcija **Isključeno** isključuje red iz obračuna, ali ga ostavlja vidljivim u pregledu.

Opcija **Sakrij** automatski postavlja oznaku za skriveni red. Takvi redovi se ne uključuju u obračun i mogu biti sakriveni aktiviranjem filtera **Isključi skrivene** u zaglavlju obrasca. Uklanjanjem ove oznake skriveni redovi će ponovo biti prikazani.

Krajnje desne kolone odnose se na **[Nivoe autorizacije](/docs/configurations/tables/finance/authorization-levels/)** i prikazuju sledeće informacije: **Datum autorizacije, Korisnik, Opis, Šifra, Opis nivoa autorizacije i Napomena autorizacije**.

### Ostale funkcionalnosti

- filter po **Bankovnom računu** (u zaglavlju obrasca), koji omogućava prikaz raspoložive likvidnosti samo za izabrani bankovni račun u gornjem pregledu;
- komanda **Promeni banku**, koja omogućava masovnu promenu bankovnog računa za izabrane redove;
- komanda **Autorizuj otvorenu stavku**, koja omogućava autorizaciju odabranih otvorenih stavki, pod uslovom da korisnik ima odgovarajuća prava u skladu sa dostignutim **[Nivoom autorizacije](/docs/configurations/tables/finance/authorization-levels/)**;

- komanda **Kreiraj plaćanje**, koja omogućava kreiranje naloga za plaćanje u modulu **Plaćanja dobavljačima**, ukoliko su izabrane stavke spremne za plaćanje.