---
title: Radni centri
sidebar_position: 3
---

Putem ovog obrasca moguće je definisati različite radne centre, zajedno s informacijama o mašinama i grupama radnika koje ih čine.

Obrazac omogućava unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.

### Pretraga radnih centara

Obrazac se sastoji od područja za filtriranje i tabele rezultata. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

### Unos radnih centara

Za unos novog radnog centra potrebno je kliknuti na prvi prazan red u tabeli ili koristiti dugme **Novo**.

Obrazac se sastoji iz tri dijela. U prvom dijelu unose se osnovni podaci o radnom centru:

**Radni centar**: označava šifru radnog centra;  
**Opis radnog centra**: označava naziv/opis radnog centra;  
**Fiksno vrijeme**: označava da radni centar radi s fiksnim vremenom obrade, odnosno da vrijeme obrade ne zavisi od količine;  
**Vrsta kapaciteta**: određuje način upravljanja kapacitetom radnog centra;  
**Tip radnog centra**: označava da li je radni centar interni ili eksterni;  
**Mašina**: označava šifru mašine povezane s radnim centrom;  
**Broj mašina**: označava broj ekvivalentnih mašina;  
**Grupa radnika**: označava grupu radnika povezanu s radnim centrom;  
**Broj radnika**: označava broj radnika u radnom centru;  
**Prioritet za izračun dostupnosti**: određuje kriterij koji će se koristiti za izračun raspoloživosti radnog centra;  
**Sektor/Odjel**: označava organizacionu jedinicu kojoj pripada radni centar;  
**% iskorištenosti radnog centra**: određuje procenat efikasnosti radnog centra;  
**% minimalne popunjenosti**: određuje minimalni procenat slobodnog kapaciteta koji mora postojati da bi radnom centru mogao biti dodijeljen novi zadatak;  
**Vrijeme početka rada**: označava početak radnog vremena;  
**Vrijeme početka pauze**: označava početak pauze;  
**Vrijeme završetka pauze**: označava završetak pauze;  
**Vrijeme završetka rada**: označava kraj radnog vremena;  
**Dnevni radni sati**: označava ukupan broj radnih sati u toku dana;  
**Radna smjena**: označava šifru radne smjene povezane s radnim centrom;  
**Opis smjene**: prikazuje opis radne smjene;  
**Datum unosa**: prikazuje datum kreiranja zapisa;  
**Datum posljednje izmjene**: prikazuje datum posljednje izmjene zapisa;  
**Opis mašine**: prikazuje opis povezane mašine;  
**Opis grupe radnika**: prikazuje opis grupe radnika;  
**Opis sektora**: prikazuje opis organizacione jedinice.

U drugom dijelu moguće je definisati izuzetke vezane za radno vrijeme odabranog radnog centra.

<details>
<summary>Sljedeća polja koriste se isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling)</summary>

**Vrsta kapaciteta**: odaberite **Konačni kapacitet** kako bi se u obzir uzeli proizvodni kapacitet radnog centra i svi resursi povezani s njim (mašine, radnici i generički resursi). Za radne centre s mašinama kapacitet se izračunava na osnovu svih mašina u centru, njihovih standardnih radnih smjena i izuzetaka iz kalendara (pogledajte histogram opterećenja). Za radne centre bez mašina broj zadataka koji se mogu istovremeno izvršavati određuje se prema broju raspoloživih radnika s odgovarajućom kvalifikacijom, uzimajući u obzir standardne smjene i kalendarske izuzetke. U tom slučaju kapacitet prikazan na histogramima odgovara vrijednosti polja **Prosječno odrađeni sati**. Ova vrijednost pojedinog dana može biti manja od simuliranog opterećenja, iako je raspoređivanje izvršeno uz konačni kapacitet, jer prikazani kapacitet ne uzima u obzir sve radnike koji posjeduju traženu kvalifikaciju, budući da radnici često imaju više kvalifikacija i nisu isključivo raspoređeni na jedan radni centar.

Ako odaberete **Beskonačni kapacitet**, radni centar ne smije imati ni mašine ni kvalifikacije. U tom slučaju zadaci se raspoređuju uzimajući u obzir samo ograničenja materijala, standardne radne smjene i kalendarske izuzetke radnog centra. Ova opcija je pogodna kada radni centar uvijek raspolaže dovoljnim resursima te nije potrebno čekati njihovu dostupnost. Koristite ovu opciju za operacije koje izvršavaju eksterni kooperanti (operacije po fazama), osim ako želite planirati kooperanta uz konačni kapacitet. Kod eksterne faze planirane uz beskonačni kapacitet trajanje faze određeno je brojem sati operacije i trajanjem radne smjene centra. Na primjer, ako faza traje 40 sati, a standardna smjena traje 8 sati, ukupno trajanje faze biće 5 radnih dana. U tom slučaju može biti korisno uključiti opciju **Fiksno vrijeme** kako bi trajanje faze bilo nezavisno od količine.

**Vrsta planiranja radnog centra**: odaberite **Standardno** ako radni centar koristi mašine kojima su potrebni radnici s punim ili djelimičnim angažmanom, **Automatski** ako koristi mašine koje mogu raditi bez radnika, **Zajedno** ako ne koristi mašine i broj radnika mora biti fiksan ili **Fleksibilna radna stanica** ako ne koristi mašine, a broj radnika može varirati između minimalnog broja definisanog u fazi i maksimalnog broja definisanog u polju **Maksimalan broj radnika**.

**Kvalifikacija za pripremu**: određuje kvalifikaciju potrebnu za pripremu mašina radnog centra.

**Kvalifikacija za obradu**: određuje kvalifikaciju potrebnu za izvođenje operacija u radnom centru.

**Broj radnika za pripremu**: određuje broj radnika potrebnih za pripremu mašina.

**Maksimalan broj radnika za obradu**: određuje najveći broj radnika koji se može dodijeliti zadatku (samo za radne centre tipa **Fleksibilna radna stanica**). Planer će koristiti najmanji broj radnika definisan u fazi, a najviše broj naveden u ovom polju.

**Maksimalan broj zadataka**: određuje najveći broj zadataka koji mogu biti aktivni u isto vrijeme. Ako polje nije popunjeno, ograničenje će biti određeno brojem mašina, potrebnim brojem radnika ili potrebnim proizvodnim resursima. Na primjer, ako radni centar ima 10 mašina, ali želite da se istovremeno koristi najviše 5, unesite vrijednost **5**.

**Prosječno odrađeni sati**: određuje prosječan broj radnih sati u jednom danu. Za radne centre bez mašina ova vrijednost predstavlja kapacitet, dok se za radne centre s mašinama kapacitet računa kao zbir kapaciteta svih mašina za svaki dan, uzimajući u obzir njihove radne smjene i kalendarske izuzetke.

**Buffer vrijeme**: određuje željeni broj sati buffera. Planer će nastojati održavati red čekanja zadataka koji čekaju obradu na ovom radnom centru u trajanju jednakom ovoj vrijednosti. Na taj način primjenjuje se jedno od osnovnih načela **Theory of Constraints (TOC)**, odnosno osigurava se da radni centri koji predstavljaju usko grlo nikada ne ostanu bez posla zbog nedostatka materijala izazvanog lošim planiranjem.

</details>

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte dokument [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).