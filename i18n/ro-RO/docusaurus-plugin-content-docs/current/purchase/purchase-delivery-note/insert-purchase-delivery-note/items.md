---
title: Articole
sidebar_position: 4
---

import RowType from './../../../import/sections/row-type.md'

<RowType />

**Cantitate**: este cantitatea care se refera la U.M. principala care poate fi inserata manual de utilizator sau care este preluata din ordin furnizor in baza caruia s-a facut executarea.

**Pret**: pretul este propus din ordin și poate fi modificat;

**TVA**: este preluat cu prioritate campul TVA din Registrul furnizorului.

**Facturare achizitii**: este propusa informatia care se afla in tab "Generalitati" din Registrul articole. In cazul in care acesta nu este prezent, trebuie inserat.

**Unitate de masura alternativa**: este propusa U.M. prezenta in gestiunea U.M. alternative din Registrul articolului care are flag-ul "implicit".

**Cantitatea alternativa**: este propusa valoarea relativa la U.M. alternativa, calculata prin multiplicarea sau divizarea cantitatii gestionale (relativa la U.M. principala) cu factorul de conversie inserat in registru.

**Gestiunea si sablonul**: sunt propuse gestiunea si sablonul de referinta care vor fi utilizate automat la incarcarea in gestiune a articolelor respective.

Bara de meniu: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferente fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile sunt enumerate dupa cum urmeaza:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Permite salvarea operatiilor efectuate. Acelasi rezultat il puteti obtine si cand treceti pe o linie diferita de cea pe care doriti sa o salvati. |
| Articol nou | Permite inserarea unui articol nou. |
| Sterge articol | Permite eliminarea articolului inserat. |
| Variaza - Gaseste ultimele preturi | Permite cautarea conditiilor de vanzare pentru articol in documentele de vanzare precedente si permite preluarea pretului si a discountului. |
| Import din barcode | Permite importul articolelor din barcode. |
| Sterge discounturi | Permite eliminarea discountului asociat unui articol. |
| Gestiune ambalaje |  |



| Functie | Functionalitate |
| --- | --- |
| Document manager | Procedura da posibilitatea de a asocia anumite fisiere articolului curent. |

## Răspunsuri (Riepiloghi)

În diversele secțiuni ale acestui tab sunt prezentate informațiile principale ale întregului document și câteva butoane specifice.

## Discounturi finale (Sconti finali)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### Cheltuieli (Spese)

Sunt propuse cheltuielile introduse în registrul de contact, în tab-ul *Cheltuieli/Discounturi (Spese/Sconti)*. În această grilă, eventualele cheltuieli trebuie introduse în mod pozitiv, eventualele discounturi în mod negativ.      

Aceste elemente se aplică la întreaga documentație și nu sunt distribuite între liniile articolelor. Ele pot include costuri suplimentare, discounturi globale sau majorări aplicate întregului document. Dacă sunt setate în registrul articolului, sunt propuse automat la momentul creării documentului.

- **Tip/Descriere (Tipo/Descrizione)**: permite alegerea tipurilor de cheltuire (predefinite în tabelul [Tipuri cheltuieli](/docs/configurations/tables/general-settings/expenses-types)), atribuind tipologiei procentajul de cheltuială care trebuie aplicat.  
- **Sumă cheltuială (Importo spesa)**: indică valoarea cheltuielii exprimată în moneda documentului.    
- **TVA (IVA)**: indică cota de TVA care trebuie aplicată cheltuielilor introduse.   
- **Procentaj/Valoare (Percentuale/Valore)**: indică dacă se calculează cheltuielile cu un procentaj sau cu o valoare monetară predefinită. Selectând *valoare*, suma cheltuielii trebuie introdusă sub denumirea omonimă.      
- **Procentaj (Percentuale)**: valoare numerică a procentului de cheltuială.  

:::note Nota
Dacă *Tipul cheltuielii* introdus are indicatorul [distribuit](/docs/configurations/tables/general-settings/expenses-types#flag-di-aggancio-alle-logiche) activ, în timpul încărcării DDT-ului în depozit, cheltuiala va fi distribuită pe toate articolele în funcție de sumele totale ale fiecărei linii de articol. Rezultatul distribuției cheltuielii este vizibil în [înregistrarea depozitului](/docs/logistics/warehouse/stock-records/record).    
1. Dacă articolele au un preț: cheltuiala totală va fi distribuită proporțional pe sumele nete ale fiecărui articol; rezultatul va fi adăugat la prețul inițial al articolului în câmpul *Sumă totală* al înregistrării. Dacă pentru unele linii suma este 0, aceasta va fi considerată 1 pentru a permite o distribuție a cheltuielii pe toate articolele.   
2. Dacă toate articolele au preț egal cu 0: cheltuiala va fi distribuită uniform între toate liniile de articol și, pe baza acestei distribuții, va fi calculat *suma mișcării/suma de gestionare* în înregistrare, ținând cont de cantitățile fiecărui articol.   
:::

### Răspunsuri TVA (Riepiloghi IVA)

Se propune rezumatul TVA-ului documentului, pentru fiecare cod TVA.

### Rezumat termene (Riepilogo scadenze)

Reprezintă rezumatul termenelor documentului, pentru fiecare *tip* și *soluție* de plată.  
- **Număr (Numero)**: valoare progresivă a liniei.  
- **Plată (Pagamento)**: reprezintă codul alfanumeric al *Tipului de plată* preluat din *Antetul documentului > tab Plata*.  
- **Sumă (Importo)**: suma termenului calculată. Poate fi forțată manual, caz în care se activează automat indicatorul următor *Modificare manuală (Modifica manuale)*. (Sunt activate automat controale și avertismente privind concordanța între valorile termenelor și totalul facturii)
- **Data limită (Data scadenza)**: data limită calculată. Poate fi forțată manual, caz în care se activează automat indicatorul următor *Modificare manuală (Modifica manuale)*.
- **Cheltuieli de încasare (Spese di incasso)**: câmp în care sunt raportate cheltuielile de încasare calculate.
- **TVA (IVA)**: care trebuie aplicată cheltuielilor de încasare (poate fi setată și manual)
- **Cauza plății (Causale pagamento)**: este posibil să introduceți direct în factură o cauză contabilă care dă naștere la o scriere automată de încasare / plată. NB fiți atenți la șablonul cauzei deoarece va folosi conturile existente și fără subcont, motiv pentru care este prezent câmpul următor.
- **Cont subcont client / furnizor (Conto sottoconto cliente / fornitore)**: contul folosit pentru a încasare/plată (casă sau bancă de exemplu) a termenului, suprascriind contul prezent în cauza contabilă de plată (sau încasare).
- **Individual (Singolo)**: activează contabilizarea închiderii termenelor în scrierea automatizată.
- **Modele de referință pentru plată (Modelli riferimento pagamento)**: Model de creare a codului de plată. În unele locații internaționale, fiecare termen din factură prevede un cod atribuit de cel care facturează: acest cod este structurat conform unor modele specifice (tabel MB_PaymentReferenceModels), astfel încât să se poată construi codul cu un algoritm.
- **Coduri modele de plată (Codici modelli pagamento)**: Acesta este codul (structurat conform modelului anterior) care trebuie menționat în partida și apoi în plățile pe care le trimitem băncii, astfel încât aceasta să comunice beneficiarului care este termenul care a fost plătit (și astfel să automatizeze importul din mișcările bancare cu închiderea partidei). De aici, se completează în partida și în fișierul Sepa.
- **Data limită plății anticipate (Data limite pag anticipato)**: Acesta este un câmp prevăzut în structura facturilor Sdi, data limită pentru a putea aplica discountul financiar.
- **Tip discount (Tipo sconto)**: Tip de discount financiar.
- **Valoare discount (Valore sconto)**: Valoarea discountului financiar la încasare.

### Alte câmpuri (Altri campi)

- **Volum (Volume)**: se propune volumul cumulativ, rezultatul din suma volumelor articolelor (valoarea este preluată din *Registrul articolului > tab* [*Greutăți/Dimensiuni*](/docs/erp-home/registers/items/create-new-items/item-registry/weights-dimensions)), atunci când unitatea de măsură a volumului articolelor corespunde cu cea introdusă în parametrii DDT-ului. Se iau în considerare doar articolele care au acest câmp completat.

- **Greutate netă/brută (Peso netto/lordo)**: se propune greutatea netă cumulativă, rezultatul din suma greutăților articolelor (valoarea este preluată din *Registrul articolului > tab* [*Greutăți/Dimensiuni*](/docs/erp-home/registers/items/create-new-items/item-registry/weights-dimensions)), atunci când unitatea de măsură a greutății articolelor corespunde cu cea introdusă în parametrii DDT-ului. Se iau în considerare doar articolele care au acest câmp completat.

- **Coli (Colli)**: se propune numărul de coli, pe baza datelor introduse în *Registrul articolului > tab* [*Greutăți/Dimensiuni*](/docs/erp-home/registers/items/create-new-items/item-registry/weights-dimensions), în câmpurile *Articole prezente într-un col (Articoli presenti in un collo)* sau *Coli pentru a forma articolul (Colli per formare l'articolo)*. Se iau în considerare doar articolele care au acest câmp completat.

- **Valori modificate manual (Valori modificati manualmente)**: activând acest indicator, va fi posibil să modificați manual valorile de *volum*, *greutate netă*, *greutate brută* și *colii*.

### Totale document (Totali documento)

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## Transport (Trasporto)

Tab-ul conține informații referitoare la transportul articolelor.

Combo box-urile propun toți *Destinatarii*, *Destinațiile* și *Vechiculii* introduse în *Registrul de contact > tab [Livrări](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* dar pot fi introduse manual. 

Datele prezente sunt: 

- **Expeditor (Mittente)**: în acest câmp este posibil să introduceți contul/subcontul expeditorului.
- **Destinatar (Destinatario)**: se propune destinatarul implicit introdus în registrul clientului; dacă nu este prezent, se ia adresa clientului.    
- **Destinație (Destinazione)**: se propune destinația implicită a destinatarului, dacă este introdusă în registrul clientului.        
- **Volum (Volume)**: se propune volumul cumulativ, rezultatul din suma volumelor articolelor (valoarea este preluată din registrul articolului > tab Greutăți/Dimensiuni), atunci când unitatea de măsură a volumului articolelor corespunde cu cea introdusă în parametrii facturii. 
- **Greutate netă (Peso netto)**: se propune greutatea netă cumulativă, rezultatul din suma greutăților articolelor (valoarea este preluată din registrul articolului > tab Greutăți/Dimensiuni), atunci când unitatea de măsură a greutății articolelor corespunde cu cea introdusă în parametrii facturii. 
- **Greutate brută (Peso lordo)**: se propune greutatea brută cumulativă, rezultatul din suma greutăților articolelor (valoarea este preluată din registrul articolului > tab Greutăți/Dimensiuni), atunci când unitatea de măsură a greutății articolelor corespunde cu cea introdusă în parametrii facturii.     
- **Aspectul exterior al bunului (Aspetto esteriore bene)**: combo box care trimite la tabelul omonim în care se codifică datele.     
- **Coli (Colli)**: se propune numărul de coli, pe baza datelor introduse în *Registrul articolului > tab Greutăți/Dimensiuni*, în câmpurile *Articole prezente într-un col (Articoli presenti in un collo)* sau *Coli pentru a forma articolul (Colli per formare l'articolo)*. Se iau în considerare doar articolele care au acest câmp completat.     
- **Valori modificate manual (Valori modificati manualmente)**: cu acest indicator facem posibilă modificarea câmpurilor Volum, Greutate netă, Greutate brută și Coli, care altfel riportă datele din registrul articolului fără posibilitatea de modificare.     
- **Intrare/Ișire a biroului vamal (Ingresso/Uscita dell'ufficio doganale)**: câmpuri utilizate pentru eTransport în versiunea română, care fac referire la tabelul *Birou vamal*.     
- **Intrare/Ișire punct de frontieră (Ingresso/Uscita valico di frontiera)**: câmpuri utilizate pentru eTransport în versiunea română, care fac referire la tabelul *Punct de frontieră*.      
- **Transport (Trasporto)**: este necesar să selectați figura care se va ocupa de transport, marcând indicatorul în *Expeditor (Mittente)*, *Destinatar (Destinatario)* sau *Vechicul (Vettore)*; în funcție de selecție, secțiunea de mai jos se va schimba; dacă transportul este pe cheltuiala *Expeditorului*, va fi posibil să introduceți numărul de înmatriculare al vehiculului, Remorca, Data și Ora începerii transportului; dacă este pe cheltuiala *Destinatarului*, va fi posibil să introduceți numărul de înmatriculare al vehiculului, Remorca, Data și Ora începerii transportului; dacă este pe cheltuiala *Vechicului*, în schimb câmpurile disponibile vor fi Registrul contabil al Vechicului, Numărul de înmatriculare, Remorca, Data și Ora transportului, eventual Clientul, Încărcătorul, Proprietarul, Locul de încărcare.