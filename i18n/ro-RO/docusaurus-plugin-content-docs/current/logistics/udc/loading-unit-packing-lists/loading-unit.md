---
title: Liste ieșiri UdI/Listă ambalare (versiune WPF și WMS)
sidebar_position: 1
---

## Liste de ieșire UdI / Listă de ambalare (versiune WPF)

:::important Utilizare  
Funcționalitatea *Listă de ieșire UdI / Listă de ambalare* din Fluentis oferă un mod eficient și structurat de gestionare a expedierilor prin utilizarea unităților de încărcare (UdI).  
Acest instrument este ideal pentru pregătirea livrărilor către clienți, permițând gruparea articolelor în UdI predefinite.  
Crearea unei noi *liste de ieșire* presupune completarea obligatorie a tipului dispoziției de livrare, a gestiunii și a utilizatorului. Operatorul poate selecta UdI deja existente și încărcate în gestiune direct din tab-ul *Detalii unitate de încărcare*.   
Listele de ieșire UdI permit și generarea automată a documentelor de transport (avize, facturi), incluzând toate detaliile despre articolele și unitățile implicate în livrare.  
:::

Cu ajutorul *listelor de ieșire*, puteți crea dispoziții de livrare bazate pe unități de încărcare, spre deosebire de cele clasice, care includ articole individuale.

Pentru a accesa listele existente deschideți form-ul de **Căutare**, iar pentru o nouă listă, faceți clic pe butonul **Nou**.

### Date obligatorii  
- **Tip dispoziție de livrare**: selectați tipul [dispoziției de livrare](/docs/logistics/picking/picking-management).  
- **Utilizator**: angajatul care creează documentul.  
- **Confirmare utilizator**: angajatul responsabil cu validarea listei.

După completarea câmpurilor, salvați lista pentru a continua procesul.

#### Selecție unități de încărcare

Utilizați butonul **Help UdI** din ribbon bar pentru a deschide fereastra de selecție a UdI-urilor.

*Opțiuni de căutare*:  
- activând opțiunea pe ordine client: pentru fiecare ordin client sunt afișate articolele care il compun, iar dacă acestea au fost deja incluse într-o UdI, în tabelul inferior sunt vizualizare toate detaliile UdI. Odată selectate UdI dorite, acestea sunt adăugate în listă.
- neactivând opțiunea pe ordine client: sunt afișate toate UdI pentru a fi selectate.

În tabelul **Detaliu** vor apărea doar UdI cu starea *încărcată*, după care este posibil să salvați *Lista* și să o închideți.  
În form-ul de **Căutare**, lista va fi prezentă cu starea **Suspendată**. Este necesar să descărcați UdI ale listei (vedeți *Butoane specifice* mai jos) pentru a trece la starea **Verificată** și pentru a activa butoanele din ribbon bar **Facturi** și **Avize**.  

#### Butoane specifice  
> - **Facturi**: creează factura din *Lista* selectată; în formul care se deschide este solicitat [Tipul Facturii](/docs/configurations/tables/sales/invoices-type) care urmează a fi creată și eventual gruparea care trebuie adoptată; factura este creată deja *Descărcată* (pentru a evita riscul unei descărcări duble).  
> - **Avize**: creează avize din *Lista* selectată; în formul care se deschide este solicitat [Tipul avizului](/docs/configurations/tables/sales/delivery-notes-type) care urmează a fi creat și eventual gruparea care trebuie adoptată; aviz-ul este creat deja *Descărcat* (pentru a evita riscul unei descărcări duble).  
> - **Gestionare UdI**: selectând o *Listă de ieșire* și făcând clic pe acest buton se deschide formul **Gestionare UdI** în care UdI din listă sunt deja filtrate. În acest form, UdI pot fi gestionate în depozit cu diversele butoane din ribbon bar.  

Pentru toate informațiile despre cum să utilizați acest form din WMS consultați [Liste ieșiri UdI/Listă ambalare](/docs/logistics/wms/udc/loading-unit-picking-list)

## Liste ieșiri UdI/Listă ambalare (versiune WMS)

:::important Utilizare
Funcționalitatea *Liste de ieșiri/Lista de ambalare* din WMS Fluentis permite crearea unui dispozitii de livrare cu unități de încărcare, facilitând pregătirea expedierilor direct legate ordinelor client.  
Datorită acestui instrument, utilizatorii pot selecta, modifica și gestiona eficient UdI, optimizând procesul de colectare și asigurând o documentație corectă pentru expedieri.
:::

Procedura este utilizată pentru crearea de *liste de ieșiri* cu unități de încărcare.  
 
*Listele de ieșiri UdI* sunt folosite în cazul în care se dorește expedierea mărfii către un client.  
În cazil mișcărilor UdI în propriile depozite este oportun să se utilizeze [Listele de transfer UdI](/docs/logistics/wms/udc/loading-unit-transfer-list).  

#### Căutare liste

După căutarea listelor dorite, acestea pot fi deschise cu butonul **Deschide** și apoi modificate în tab *Detaliu UdI*.  
În acest tab puteți să selectați o unitate de încărcare existentă și să o eliminați din listă cu butonul **Șterge UdI** sau să adăugați una nouă citind codul de bare corespunzător.  
Odată ce modificările sunt finalizate, este necesar să salvați lista cu butonul **Salvează**.  

#### Creare liste

Tot din form-ul principal se pote crea o nouă listă utilizând butonul **Nou**.  

Automat sunt propuse: data curentă și gestiunea indicată în tabelul *Parametrii gestiune încărcare/descărcare pe utilizator*. De asemenea, simutan cu inserearea tipului dispozitiei de livrare, este propus și numărul listei. 
Utilizatorul poate introduce, în tab *Detaliu UdI*, unitățile de încărcare care vor fi adăugate listei prin citirea codurilor de bare corespunzătoare. 

**Parametrii de încărcare/descărcare** de introdus în tabelul [Parametrii încărcare/descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Pentru acest parametru, șablonul de gestiune poate fi necompletat.

:::note Nota  
Dacă în [Parametrii încărcare/descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociată pentru acel utilizator o singură gestiune, se propune implicit aceea. Dacă însă sunt mai multe asociate, nu este propus implicit niciunul și utilizatorul poate alege doar dintre cele existente.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod Barcode** consultați pagina [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

## Confirmare transfer UdI (versiune WMS)

:::important Utilizare
Această procedură este utilizată pentru a căuta și a confirma o [Listă de Transfer UdI](/docs/logistics/UdI/loading-unit-packing-lists/transfer-unit) existentă pentru a efectua mișcarea de gestiune.
:::

Puteți să căutați lista dorită după: dată, număr și gestiune și puteți să o confirmați direct cu butonul **Confirmă** fără a fi necesar să o deschideți.  
Altfel, puteți să deschideți lista cu butonul **Deschide** și să vizualizați unitățile de încărcare care nu au fost încă descărcate și pe cele care au fost deja descărcate în tab-urile corespunzătoare, pentru ca apoi să o confirmați și să creați mișcarea de gestiune.

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii încărcare/descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Aria | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

Parametrii sunt introduși de două ori deoarece form-ul utilizează atât un șablon de încărcare cu gestiunea identică cu cea a destinației listei, cât și una de descărcare cu gestiunea cea în care sunt stocate unitățile de încărcare care trebuie transferate.  
Ambele șabloane utilizate trebuie să aibă flag-ul *Listă componente* dezactivat și să nu aibă contrapartide.  

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod Barcode** consultați pagina [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Confirmare ieșire UdI (versiune WMS)

:::important Utilizare
Form-ul **Confirmare ieșire UdI** este utilizat pentru a căuta și a confirma o [Lista ieșiri UdI/Lista de ambalare](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existentă pentru a efectua mișcarea de gestiune de descărcare.
:::

Puteți să căutați lista dorită după: dată, număr și gestiune și puteți să o confirmați direct cu butonul **Confirmă** fără a fi necesar să o deschideți.  
Altfel, puteți să deschideți lista cu butonul **Deschide** și să vizualizați unitățile de încărcare care nu au fost încă descărcate și pe cele care au fost deja descărcate în tab-urile corespunzătoare, pentru ca apoi să o confirmați și să creați mișcarea de gestiune.

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii încărcare/descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Aria | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Acest parametru trebuie creat cu gestiunea listelor de *ieșire* și cu șablonul de gestiune cu tipul de descărcare și fără contrapartidă.

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod Barcode** consultați pagina [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).