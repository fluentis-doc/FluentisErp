---
title: Parametri
sidebar_position: 3
---

Unutar odjeljka **Parametri**, postupak prikazuje sve stavke s detaljima artikala unesenih u odabrane dokumente, prenoseći iz svakog od njih podatke preuzete iz dokumenta. Konkretno:

![](/img/it-it/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters/image01.png)

 

**Status i šifra PDV-a**: se preuzimaju  iz registra nositelja;

**Vrijednost u valuti**: Prikazuje podatak o iznosu artikla (cijena* × količina − popusti) u valuti računa za nabavu (polje je prisutno samo za Intra2)

**Iznos transakcija**: preuzima iznos artikla prema tečaju unesenom na računu;

**Priroda transakcije**: preuzima se iz vrste dokumenta;

**Kombinirana nomenklatura**: iz retka artikla na računu, a ako je prazno, iz šifrarnika artikala;

**Neto masa**: izračunava se na temelju težine postavljene u šifrarniku artikla;

**Dodatna jed. mjere**: može se automatski izračunati ako kod nomenklature predviđa drugu mjernu jedinicu, putem konverzije između upravljačke mjerne jedinice i ove, prema faktorima konverzije definiranima za artikl;  

**Statistička vrijednost**: izračunava se na više načina, ovisno o postavkama (postotna varijacija u odnosu na šifrarnik kupca/dobavljača, ili uvećana za troškove koji su posebno uneseni u dokument);

**Šifra prijevoza i Način prijevoza**: unose se na temelju šifri luke/otpreme pridruženih dokumentu;

**Podaci o županijama podrijetla/odredišta** i o **zemlji podrijetla/odredišta** čitaju se iz šfarnika subjekta na kojeg glasi dokument ili iz tablice društva.

Na kraju rešetke prikazuju se reference na izvorni dokument retka.  

Nakon što se unesu svi potrebni podaci u model (što ovisi o oznaci "Pojednostavljeno" u zaglavlju deklaracije, kao i o vrsti razdoblja sažetka), moguće je prijeći na izradu modela. Ova radnja će prenijeti detalje u odjeljke bis/ter/quater, ovisno o prirodi Intrastat transakcije (tip 2 se prikazuje u odjeljku ter za ispravke, tip “S” u odjeljku quater). Moguće je, prije ovog prijenosa, provesti prvo grupiranje iznosa: ova će se operacija izvršiti po dokumentu, što će uzrokovati prvo zaokruživanje podataka na cijeli broj.  



| Funkcija  | Značenje |
| --- | --- |
| Izbriši  | Tipka za brisanje odabranih intrakomunitarnih računa. |
| Kreiranje | Izvodi kreiranje Intrastat obrasca prenoseći podatke iz ove kartice u odgovarajuće odjeljke obrasca.|
| Izbriši sve | Izvodi brisanje svih redaka iz tablice. |
| Grupiraj  | Grupira retke prema primatelju računa i ostalim sličnim podacima. |
| Spremi | Omogućuje spremanje unesenih podataka, primjerice za nastavak rada kasnije. |






