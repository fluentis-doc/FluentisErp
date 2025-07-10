---
title: Parametri DDMRP articole
sidebar_position: 5
---

Acest form permite configurarea parametrilor necesari pentru gestionarea unui articol buffer, și anume gestionat cu DDMRP.

Pentru fiecare articol buffer trebuie să existe cel puțin o înregistrare în acest tabel, una pentru fiecare centru de distribuție (vedeți **Facilităţi de producție**) în care articolul este gestionat pe stoc DDMRP și, eventual, unul pentru fabrică (câmp *Gestiune* gol) dacă articolul este gestionat pe stoc DDMRP și în fabrică.

Parametrii DDMRP care trebuie definiți sunt următorii:

**Gestiune**: reprezintă codul asociat unității logistice a înregistrării, adică centrului de distribuție (sau hub intermediar) și se lasă necompletat dacă înregistrarea se referă la fabrică.

**Furnizor**: indică furnizorul acestui articol în această unitate logistică.

În mod implicit, unitatea logistică furnizoare este indicată în tabelul *Facilităţi de producție*; cu acest câmp se pot gestiona excepțiile pentru fiecare articol.

De exemplu, articolele acestei unități logistice sunt furnizate în mod normal de un hub, dar unele articole sunt furnizate de un alt hub sau direct din fabrică.

În cazul în care furnizorul nu este prezent în tabelul unității logistice, acesta este un furnizor extern și, prin urmare, va fi emis un ordin de achiziție comun furnizorului respectiv.

**Zile pentru transport**: reprezintă timpul de aprovizionare cu bunuri de la unitatea logistică sau furnizorul extern inserat în câmpul *Furnizor*.

**Cod profil (buffer profile)**: este codul profilului buffer asociat acestui articol în unitatea logistică indicată în câmpul *Gestiune*.

**Factor Lead time (lead time factor)**: utilizat pentru a forța o valoare diferită de cea prevăzută de profilul buffer asociat înregistrării.

**Factor de variabilitate (variability factor)**: utilizat pentru a forța o valoare diferită de cea prevăzută de profilul buffer asociat înregistrării.

**Consum mediu zilnic (ADU)**: reprezintă cantitatea medie consumată în fiecare zi la unitatea logistică a înregistrării (deci variază pentru fiecare unitate logistică) și trebuie să ia în considerare o perioadă de timp suficient de lungă (de câteva ori timpul de aprovizionare al articolului) pentru a efectua media.
  
Această valoare afectează mult nivelul stocului articolului și trebuie actualizat periodic [(vedeți procedura)](/docs/ddmrp/procedures/adu-update).

**Lead time decuplat (DLT)**: câmp nemodificabil, rezultat din calculul procedurii relative.  
Este timpul necesar furnizării articolului, având în vedere prezența altor buffere în lista sa sau în rețeaua logistică.

În cazul unui centru de distribuție, este suma timpului de transport de la unitatea logistică furnizoare și al eventualului timp de producție dacă unitatea furnizoare este fabrica și articolul nu este un buffer în fabrică (nu există deci un stoc).

**Lead time cumulat (CLT)**: câmp needitabil, rezultat din calculul procedurii de calcul DLT.

Este timpul necesar pentru furnizarea articolului în fabrică dacă niciunul dintre articolele din listă nu este un buffer, deci este timpul de producție în cazul lipsei totale de stoc pentru articolele sale din lista de componente.

**Ciclu de reordonare dorit (DOC)**: este exprimat în zile și reprezintă numărul de zile care trec între două ordine succesive.

Valoarea sa este luată în considerare la calcularea zonei verzi a acestui articol.

**Cantitatea minimă pentru comandă (MOQ)**: reprezintă cantitate minimă pentru comandă impusă de furnizor sau impusă intern (în special pentru a minimiza setările de producție).

Valoarea sa este luată în considerare la calcularea zonei verzi al acestui articol.

**Zona verde**: câmp needitabil, rezultat al procedurii de actualizare a zonei.

Zona verde determină dimensiunea ordinelor (niciun ordin propus de DDMRP nu poate avea o cantitate inferioară zonei verzi) și, prin urmare, și frecvența relativă de reordonare, egală cu raportul dintre zona verde și ADU, precum și nivelul mediu și maxim de stoc prevăzute.

**Zona galbenă**: câmp needitabil, rezultat al procedurii de actualizare a zonei.

Zona galbenă reprezintă consumul mediu în perioada de timp necesară pentru reaaprovizionarea cu articol (DLT). 
  

**Zona roșie**: câmp needitabil, rezultat al procedurii de actualizare a zonei.

Zona roșie determină nivelul stocului de siguranță, stocul minim și maxim prevăzute.

Dimensiunea sa crește pe măsură ce variabilitatea asociată buffer-ului crește (vedeți profil buffer).

**Prag vârf ordine (OST)**: este utilizat la calcularea NFP (Net Flow Position).

Când cererea totală dintr-o zi depășește această valoare, aceasta este luată în considerare la calculul NFP.

Se recomandă utilizarea unei valori cuprinse între 50% și 100% din zona roșie a articolului.

O valoare prea mică ar da impresia că fluctuațiile normale ale cererii ar fi vârfuri de cerere și, prin urmare, ordinele ar fi emise prea des cu un stoc mediu mai mare decât necesarul.

O valoare prea mare nu ar permite recunoașterea vârfurilor cererii (mari, dar nu enorme) și, în consecință, stocul ar fi mai mic decât necesarul, cu o scădere mare a zonei roșii sau chiar epuizarea stocurilor.
  
**Orizont vârfuri ordine (OSH)**: reprezintă orizontul de timp începând din data curentă în care să se verifice dacă există vârfuri de cerere (calcul NFP).  
Această valoare nu trebuie să fie mai mică decât valoarea DLT (lead time decuplat), deoarece este necesar să se observe orice vârf al cererii cu suficient timp înainte, cel puțin egal cu timpul necesar pentru furnizarea articolului.

**Metoda de prognoză a consumului mediu zilnic**: permite selectarea uneia din următoarele metode care va fi aplicată prin procedura sa de actualizare ADU (consumul mediu zilnic):  

  - 0 nicio actualizare
  - 1 media aritmetică pe trecut (se analizează consumurile efective din trecut și toate consumurile au aceeași pondere)
  - 2 media ponderată pe trecut (consumurile recente au o pondere mai mare decât cele trecute)
  - 3 media aritmetică pe viitor (se analizează tabelul prognozelor de  consum zilnic)
  - 4 media aritmetică a trecutului și viitorului (combinație a metodelor 1 și 3)
  - 5 trecutul ponderat și viitorul aritmetic (combinație a metodelor 2 și 3)

**Zile în trecut**: reprezintă perioada de timp din trecut pentru a efectua media consumului zilnic.

**Zile în viitor**: reprezintă perioada de timp din viitor pentru a efectua prognoza medie a consumului zilnic.

**Tip stoc**: definește tipul de stoc DDMRP  
  - 1 = Replenished (stoc dinamic)
  - 2 = Replenished override (stoc static)
  - 3 = Min-max (stoc min—max)

*Butoane specifice*:  

> **Import**: permite inserarea parametrilor DDMRP pentru o combinație articol-variantă-gestiune în care codul gestiunii identifică o [**unitate logistică**](/docs/ddmrp/master-data/facilities), cum ar fi un centru de distribuție, un hub sau o fabrică (în acest caz, câmpul este gol).  
*Procedura*: 
- alegeți din combo o gestiune. Astfel vor fi afișate articolele pentru care nu există deja o înregistrare în parametrii DDMRP pentru depozitul respectiv (pentru fabrică alegeți oricare dintre cele asociate acesteia, deoarece pentru sistem toate depozitele din fabrică sunt echivalente cu depozitul cu cod nul).  
- alegeți un profil buffer pe care să îl asociați noii înregistrări pentru a activa butonul *Inserare*.  
- alegeți rândurile pe care doriți să le importați și apăsați butonul *Inserare*.
- deschideți noile înregistrări pentru a finaliza introducerea datelor.

> **Substituie parametri**: funcționează selectând rânduri din form care au valoarea egală cu cea din câmpul *Gestiune*.
Operația trebuie făcută pe fiecare gestiune în parte și când trebuie făcută mai multor gestiuni.
*Procedura*:
- selectați rândurile pentru a activa butonul  
- în form-ul care se deschide puteți modifica unul sau mai mulți parametri pentru înregistrările selectate.  
Modificarea are loc numai dacă parametrul este activat (trebuie să fie bifat).

> **Șterge**: permite ștergerea unei linii. Astfel articolul din depozitul indicat nu mai este considerat un buffer DDMRP.  
Valorile istorice referitoare la articol-gestiune vor fi păstrate oricum și vor putea fi vizualizate atât din istoricul parametrilor DDMRP, cât și din istoricul Net Flow Position.