---
title: Audit Trail
sidebar_position: 2
---

**Audit Trail** predstavlja aplikativni dio koji omogućuje konfiguriranje vrste ZAPISA koji prate svaku operaciju unutar Fluentisa, od strane bilo kojeg operatera.

Vrlo je koristan i ponekad obavezan u određenim poslovnim sektorima u kojima je potrebno proizvesti dokumente koji se odnose na “tko je izvršio”, “koja aktivnost” i posebno “kada”, odnosno u kojem vremenskom razdoblju.

Moguće je generirati dnevnike koji također naglašavaju koje su vrijednosti promijenjene u vezi s bilo kojim podatkom. 

Već su dostupna dva korisna obrasca dnevnika bez potrebe za dodatnom konfiguracijom: 

**Monitor aktivnosti** koji u stvarnom vremenu prikazuje korisnike prijavljene na sustav i obrasce koje otvaraju. Osvježavanje obrasca može se obaviti ručno pritiskom na gumb **Ažuriraj**, ili automatski nakon što pritisnete **Ažurirajte podatke automatski**.

**Povijest aktivnosti**: ovaj panel automatski prati i pohranjuje sve pristupe svim obrascima od strane bilo kojeg korisnika. 


### SPECIFIČNI ZAPISNICI  

Moguće je konfigurirati zapisnik kako bi se pratili detalji promjena ili brisanja određenih podataka. Na primjer, možemo pratiti promjene koje se događaju na knjigovodstvenim zapisima. 

Otvorite Konfiguracija -> **Konfiguracija  Audit Trail** i pritisnite **Novo**

Definirajte kod i opis za novi specifični zapisnik, a zatim, u donjoj mreži, postavite povezani poslovni objekt (i, ako je potrebno, njegov roditeljski objekt). 

Definiranjem objekta prikazat će se povezane značajke i moći će se odabrati one koje treba pratiti kako bi se pratile promjene ili brisanja. 

![](/img/it-it/applications/audittrail/audittrail.png)


Za **upit u ZAPIS** otvorite **Audit Trail**:

Na obrascu, jednostavnim pritiskom na gumb **Traži** prikazat će se sve operacije koje su podvrgnute nadzoru, a bit će vidljiva vrsta operacije: Unos, izmjena, brisanje.

Kako biste vidjeli detalje i stoga podatke prije i nakon izmjene, **trebate odabrati** u zaglavlju područje, kako vrstu ZAPISA prethodno konfiguriranu putem polja  **Registar aktivnosti**, tako i **Objekt**.


![](/img/it-it/applications/audittrail/audittrail2.png)






