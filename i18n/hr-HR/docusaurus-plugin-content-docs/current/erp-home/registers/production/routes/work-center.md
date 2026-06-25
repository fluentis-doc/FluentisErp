---
title: Centri rada
sidebar_position: 3
---

Putem ovog obrasca mogu se šifrirati različiti centri rada, uključujući informacije o strojevima i radnim skupinama koje ih čine.

Ova tablica omogućuje unos novih zapisa ili pretraživanje već postojećih kako bi ih vidjeli, modificirali ili obrisali.

### Pretraživanje centara rada 

Obrazac se sastoji od područja filtra i rezultata. Nakon postavljanja svih željenih filtara, dovoljno je kliknuti na gumb **Traži** kako biste vidjeli rezultate unutar područja rezultata.

### Unos centara rada 

Za unos novih kodiranja, potrebno je kliknuti na prazan red u tablici ili pritisnuti gumb **Umetni**. 

Tablica se sastoji od tri dijela, gdje se u prvom dijelu unose sljedeći podaci o centru rada:

**Centri rada**: označava šifru centra rada;    
**Opis centra rada**: označava opis centra rada;   
**Fiksno vrijeme**: označava da centar rada radi s fiksnim vremenom, vrijeme obrade artikla ne ovisi o broju komada;  
**Tip kapaciteta**: označava s kojim kapacitetom centar radi; 
**Opis Radni centar**: označava je li centar rada interni ili eksterni;   
**Stroj**: označava kod stroja povezanog s tim centrom rada;  
**Broj strojeva**: označava broj ekvivalentnih strojeva;  
**Grupe Radne Snage**: označava kod radne skupine povezane s centrom rada;  
**Broj radnika**: označava broj radnika u centru rada;  
**Prioritet za izračun dostupnosti**: označava koji kriterij koristiti za izračun dostupnosti tog centra rada tijekom vremena;  
**Sektor/odjel**: označava kod odjela u koji je smješten centar rada;  
**% korištenje radnog centra**: označava postotak učinkovitosti centra rada;  
**% minimalne razine zaposlenosti**: označava minimalni postotak koji mora biti slobodan u centru rada kako bi mu se dodijelila druga aktivnost;  
**Vrijeme početka rada**: označava vrijeme početka rada centra rada;  
**Vrijeme početka pauze**: označava vrijeme početka pauze centra rada;  
**Vrijeme završetka pauze**: označava vrijeme završetka pauze centra rada;  
**Vrijeme završetka rada**: označava vrijeme završetka rada centra rada;  
**Dnevni sati**: označava ukupne dnevne radne sate;  
**Radna smjena**: označava kod radne smjene povezane s centrom rada;  
**Opis smjene**: označava opis radne smjene povezane s centrom rada;  
**Datum unosa**: označava datum unosa zapisa;  
**Datum zadnje promjene**: označava datum posljednje izmjene zapisa;  
**Opis stroja**: označava opis stroja;  
**Opis grupe radne snage**: označava opis radne skupine;  
**Opis sektora**: označava opis odjela;  
  
U drugom dijelu mogu se unijeti iznimke u vezi s radnim vremenom odabranog centra rada.

<details>
<summary>Sljedeća polja koriste se isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling)</summary>

**Vrsta kapaciteta**: odaberite **Konačni kapacitet** kako bi se u obzir uzeli proizvodni kapacitet radnog centra i resursi povezani s njim (strojevi, radnici i generički resursi). Za radne centre sa strojevima kapacitet se izračunava na temelju svih strojeva u centru, njihovih standardnih radnih smjena i pripadajućih iznimki kalendara (pogledajte histogram opterećenja). Za radne centre bez strojeva broj zadataka koji se mogu istodobno izvršavati određen je brojem raspoloživih radnika s kvalifikacijom potrebnom za taj radni centar (prema standardnim radnim smjenama i iznimkama kalendara). U tom slučaju kapacitet prikazan na histogramima odgovara vrijednosti polja **Prosječno odrađeni sati** radnog centra. Ta vrijednost pojedinog dana može biti manja od simuliranog opterećenja, iako je raspoređivanje izvršeno uz konačni kapacitet. Razlog je što se kapacitet prikazan na histogramima ne izračunava uzimajući u obzir sve radnike koji posjeduju traženu kvalifikaciju, jer radnici često imaju više kvalifikacija i nisu isključivo raspoređeni na jedan radni centar, pa bi takav izračun bio nerealan i precijenjen.

Ako odaberete **Beskonačni kapacitet**, radni centar ne smije imati ni strojeve ni kvalifikacije. U tom slučaju zadaci se raspoređuju uzimajući u obzir samo ograničenja materijala te standardne radne smjene i iznimke kalendara radnog centra. Ova je opcija prikladna kada radni centar uvijek raspolaže dovoljnim resursima te nije potrebno čekati njihovo oslobađanje. Koristite ovu vrijednost za operacije koje izvode vanjski kooperanti (dorada po fazi), osim ako želite raspoređivati kooperanta uz konačni kapacitet. Kod vanjske faze raspoređene uz beskonačni kapacitet trajanje faze određeno je brojem sati operacije i trajanjem radne smjene centra. Primjerice, ako faza traje 40 sati, a standardna smjena centra traje 8 sati, trajanje faze bit će 5 radnih dana. U tom slučaju može biti potrebno uključiti opciju **Fiksno vrijeme** radnog centra kako bi trajanje faze bilo neovisno o količini.
**Vrsta raspoređivanja radnog centra**: odaberite **Standardno** ako radni centar koristi strojeve kojima su potrebni radnici s punim ili djelomičnim angažmanom, **Automatski** ako koristi strojeve koji mogu raditi bez radnika, **Zajedno** ako ne koristi strojeve i broj radnika dodijeljenih zadatku mora biti fiksan ili **Fleksibilna radna stanica** ako ne koristi strojeve, a broj radnika može varirati od minimalne vrijednosti definirane u fazi do maksimalne vrijednosti određene poljem **Maksimalan broj radnika** radnog centra.
**Kvalifikacija za pripremu**: određuje kvalifikaciju radnika potrebnu za pripremu strojeva radnog centra.
**Kvalifikacija za obradu**: određuje kvalifikaciju radnika potrebnu za izvođenje operacije u radnom centru.
**Broj radnika za pripremu**: određuje broj radnika potreban za pripremu strojeva radnog centra.
**Maksimalan broj radnika za obradu**: određuje najveći broj radnika koji se može dodijeliti zadatku (samo za radni centar vrste **Fleksibilna radna stanica**). Raspoređivač će koristiti najmanji broj radnika definiran u fazi, a najviše broj naveden u ovom polju.
**Maksimalan broj zadataka**: određuje najveći broj istodobno aktivnih zadataka koji se mogu rasporediti. Ako polje nije popunjeno, ograničenje će biti određeno brojem strojeva, potrebnim brojem radnika ili potrebnim proizvodnim resursima. Primjerice, ako radni centar ima 10 strojeva, ali želite da se istodobno koristi najviše 5, u ovo polje unesite vrijednost **5**.
**Prosječno odrađeni sati**: određuje prosječan broj radnih sati u jednom danu. Za radne centre bez strojeva ova se vrijednost koristi kao kapacitet, dok se za radne centre sa strojevima kapacitet računa kao zbroj kapaciteta svih strojeva za svaki dan, uzimajući u obzir njihove radne smjene i iznimke kalendara.
**Buffer vrijeme**: određuje željeni broj sati buffera. Raspoređivač će nastojati stvoriti red čekanja zadataka koji čekaju obradu u ovom radnom centru u trajanju jednakom vrijednosti ovog polja. Time se primjenjuje jedno od osnovnih načela **Theory of Constraints (TOC)**, odnosno osigurava da radni centri koji predstavljaju usko grlo nikada ne ostanu bez posla zbog nedostatka materijala, kao posljedice lošeg planiranja aktivnosti.

</details>

Za sve što nije detaljno navedeno u ovom dokumentu o zajedničkom radu oblika, pogledajte sljedeću vezu [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).