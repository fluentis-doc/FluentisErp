---
title: Kodovi plaća
sidebar_position: 4
---

#### Specifična polja  

**Šifra / Opis** : šifra i opis koji identificiraju šifru za obračun plaće.  

**Intervencija** : flag koji se koristi u određenim izvoznim datotekama obračuna plaće za potrebe vanjskih sustava koji nisu dio Fluentis-a.

**Vanjski** : ako je omogućeno, sustav provjerava postavke vrste intervencije povezane s izjavom o aktivnostima. Ako ta vrsta intervencije ima aktiviranu oznaku vanjsko, ista će biti automatski postavljena u platnoj listi.

**Šifra mjerne jedinice** : mjerna jedinica korištena u izvoznim datotekama obračuna plaće za vanjske sustave.

**Redovno**: ako je omogućeno, koristi se kao zadana šifra za redovne radne sate u slučaju da nisu postavljene preciznije konfiguracije.

**Konačne vrijednosti**: ako je omogućeno, vrijednost pridružena ovoj šifri plaće bit će prikazana u odjeljku "Vrijednosti" u sažetku platne liste te neće biti uključena u pokrete.

**Povrat putovanja**: Ako je omogućeno, sati putovanja uneseni s ovom šifrom bit će zbrojeni s redovnim satima. Ako ukupni broj sati prelazi 8, sustav automatski unosi red s količinom 1 u pokretima, što označava jednu službenu cestu, neovisno o stvarnom broju prijavljenih sati putovanja. Ako nije omogućeno, sati putovanja bit će evidentirani odvojeno, prema stvarnim prijavljenim satima. Ova opcija služi za identifikaciju dana službenih putovanja u odjeljku Pokreti sažetka platne liste.

**Svečanost**: ako je omogućeno, koristi se za označavanje dana blagdana u odjeljku Pokreti sažetka platne liste – prema postavkama iz kalendara blagdana.

**Prekovremeni rad**: ako je omogućeno, koristi se za označavanje prekovremenih sati u odjeljku Pokreti sažetka platne liste – prema definiranim satnicama za zaposlenika.

**Prekovremeni rad na blagdane i vikende**: ako je omogućeno, koristi se za označavanje prekovremenih sati odrađenih subotom i nedjeljom u odjeljku Pokreti sažetka platne liste – prema važećim radnim rasporedima. 

**Godišnji odmor**: ako je omogućeno, koristi se za označavanje dana godišnjeg odmora u odjeljku Pokreti sažetka platne liste – na temelju kategorije aktivnosti iz prijave aktivnosti.

**Dozvoljeno**: ako je omogućeno, koristi se za označavanje sati dopusta (npr. privatnih obveza) u odjeljku Pokreti sažetka platne liste – prema kategoriji aktivnosti iz prijave aktivnosti.

**ROL**: ako je omogućeno, koristi se za označavanje sati ROL-a u odjeljku Pokreti sažetka platne liste – također na temelju prijavljenih aktivnosti.

**Smart Working**: ako je omogućeno, koristi se za označavanje dana rada na daljinu u odjeljku Pokreti sažetka platne liste – prema aktivnostima kod kojih je označen “Smartworking”. Ova opcija zamjenjuje šifru plaće povezanu s kategorijom aktivnosti.

**Ne izvozi se**: ako je omogućeno, sprječava izvoz ove šifre plaće u datoteke za vanjske sustave izvan Fluentis-a.

**Izvozna šifra**: šifra koja se koristi u izvoznim datotekama za sustave koji nisu dio Fluentis-a.  