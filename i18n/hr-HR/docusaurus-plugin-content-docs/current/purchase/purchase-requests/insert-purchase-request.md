---
title: Unos zahtjeva za kupovinu
sidebar_position: 3
---

Ova značajka omogućuje unos novog zahtjeva za kupnju koji će zatim trebati biti odobren pomoću gumba **Autorizacija Zahtjeva nabave**.

**Vrsta**: obavezno polje. Ovisno o odabranoj [Vrsti RDA](/docs/configurations/tables/purchase/purchase-request-type), aktivirat će se određene značajke, poput kontrole dostupnosti. Pri unosu vrste, bit će automatski popunjeni i **Datum/Godina/Broj**;           
**Bilješke**: unesite napomene vidljive na razini RDA;             
**Status zahtjeva**: ne može se uređivati. Prikazuje status obrade cijelog zahtjeva uzimajući u obzir status svakog pojedinog artikla.

Zatim slijedi mreža Artikala s pripadajućim podacima.

**Vrsta linije**: omogućuje odabir različitih artikala iz padajućeg izbornika s različitim karakteristikama.

**Razred/Kod/Opis artikla**: mogu se unijeti **ručno** ili pomoću **pomoći u polju** koje će ponuditi sve podatke u *Šifarnik artikala*.

Nakon unosa artikla, njegov će se *Opis* automatski preuzeti iz šifarnika. Ako artikl ima *Varijacije*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Varijante**: ako odabrani artikl ima varijacije, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati drugačiju cijenu od postavljene standardne cijene. Stoga, cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To eventualno može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.

**Prisilno obrađeno**: moguće je postaviti prisilnu obradu za odabranu liniju. Na taj način, neće se vršiti inventar u skladištu.

Ova kartica se dalje dijeli u različite kartice.

### Podaci o Artiklima

Svi su informativni podaci koji se automatski preuzimaju iz artikla/dobavljača. Ipak, moguće je prebrisati te informacije na razini linije. 
Zastava **Autorizirano** može se postaviti putem gumba  **Autorizacija Zahtjeva nabave**; u Ribbon traci; od tog trenutka dokument se smatra potvrđenim.

### Analitika

Sadrži polja koja se odnose na analitičko računovodstvo. Prikazuju se centri troškova/profita na koje se raspodjeljuju vrijednosti kupljenih proizvoda. Ovi podaci se mogu unijeti: ručno ili automatski, u slučaju da su centri troškova/profita prethodno uneseni u šifarnik kontakata, šifarnik artikala ili plan računa.

### Priloženi dokumenti

Prikazuje pojedinosti o eventualnom priloženom dokumentu (naziv, vrsta dokumenta, eventualne napomene, referenca na našu/vašu stranu). Za upute o tome kako priložiti dokument, pogledajte članak  [Priloži dokumente](/docs/guide/operations-with-data/attach-documents).

### Zahtjev za ponudom

Na ovoj kartici prikazani su preferirani dobavljači izabranih artikala u mreži s pripadajućim podacima. S ove kartice možete odabrati najbolju cijenu. Alternativno, moguće je ručno unijeti dobavljača koji će se razmatrati za ovaj artikl. Prisutnost barem jednog retka na ovoj kartici omogućuje aktivaciju gumba **Generiranje RDO** u Ribbon traci. Klikom na ovaj gumb, stvorit će se Upit za ponudu za odabrane retke. Stvoreni dokument može se pregledati u pretraživanju RDO, ili ga možete otvoriti izravno pomoću gumba **Otvori zahtjeve za ponudu** u Ribbon traci.
Da biste poništili stvaranje, možete koristiti gumb **Povrat RDO** u Ribbon traci, koji će obrisati stvoreni Upit za ponudu.


Uobičajeno, na dnu svakog obrasca u svim karticama prikazani su ukupni **Iznos bez poreza**, ukupan **Iznos poreza** i **Ukupan iznos** cijele narudžbe za kupnju.
