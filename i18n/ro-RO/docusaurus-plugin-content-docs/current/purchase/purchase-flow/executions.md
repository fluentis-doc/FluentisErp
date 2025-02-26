---
title: Execuții
sidebar_position: 5
---

Ciclul de execuție în Fluentis servește la gestionarea într-un mod structurat și integrat a întregului flux operațional de achiziție, de la faza inițială de cerere de achiziție până la faza finală de facturare. Fiecare etapă este caracterizată prin proceduri specifice și configurații care garantează o gestionare fluentă și integrată a fluxului de lucru.

## Conversia din Ofertă în Comandă

Procedura de conversie din ofertă furnizor în comandă de achiziție poate fi inițiată: 

- Din Meniul [Proceduri](/docs/purchase/offer-request/procedures/order-creation): mergând pe *Achiziții > Cereri de Ofertă > Proceduri > Creare Comandă furnizor din Ofertă furnizor*.

Această procedură permite transformarea unei cereri de ofertă într-o comandă de achiziție efectivă. 
Pentru a executa conversia, este necesar să configurați Tipul de comandă furnizor dorit în tabelul [Tip cerere de ofertă](/docs/configurations/tables/purchase/purchase-offer-type). 

În timpul procedurii de conversie, apare un pop-up cu următoarele opțiuni:
- Cerere de ofertă: permite crearea unei comenzi de achiziție pentru fiecare cerere de ofertă.
- Cont: permite gruparea cererilor de ofertă după furnizor.
- Închide ofertele legate: introduce o *Dată închidere* pentru RDO-urile convertite în comenzi de achiziție.

Odată confirmată conversia, sistemul generează o nouă comandă furnizor folosind datele cererii de ofertă și notifică utilizatorul cu un mesaj pop-up privind succesul conversiei.

Pentru detalii suplimentare despre procedură, se face referire la pagina corespunzătoare a documentației.

## Conversia din Cerere de Achiziție în Comandă

Procedura de creare a Comenzii furnizor din Cerere de Achiziție poate fi inițiată:

- Din Meniul [Proceduri](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): mergând pe *Achiziții > Comenzi Furnizori > Proceduri > Creare automată comenzi*.

Această procedură permite crearea uneia sau mai multor comenzi de achiziție pornind de la una sau mai multe cereri de achiziție și se compune din cinci tab-uri:

- Filtru De: permite introducerea de filtre pentru a selecta RDA-urile (cu statut "Autorizată") care urmează să fie convertite în comandă.
- Alegerea furnizorului: permite alegerea furnizorului căruia îi va fi atribuită comanda pe baza mai multor criterii, inclusiv: cel mai bun preț de achiziție, furnizor preferențial implicit, cea mai bună condiție de plată, etc.
- Prototype comandă: afișează rezumatul comenzii de creat și permite generarea unei comenzi noi sau adăugarea liniilor de articol la o comandă existentă. 
- Parametri: configurează opțiunile de creare a comenzii, cum ar fi tipul de comandă de creat și datele de utilizat dacă nu sunt codificate pentru fiecare articol. Este posibil să alegeți, de asemenea, să luați în considerare disponibilitățile provenind din diferitele arii ale gestionării. 
- Operații: permite vizualizarea, filtrarea și anularea operațiunilor anterioare. 

Odată confirmat prototipul de comandă, făcând clic pe butonul *Generează comenzi furnizor*, sistemul va crea comenzile de achiziție pe baza parametrilor aleși. 

Aceeași procedură poate fi utilizată pentru crearea comenzilor furnizor din comenzile clientului. Pentru detalii suplimentare, consultați [pagina](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) corespunzătoare a documentației.


## Execuția din Comenzi în DDT

Procedura de execuție din comandă în Document de Transport este disponibilă în două moduri:

- Din Meniul [Proceduri](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): mergând pe *Achiziții > DDT de Achiziție > Proceduri > Execuție din comenzi*.
- Execuția din [Antet](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) DDT: utilizând butonul *Execuție din Comandă* pentru a deschide o fereastră de selecție a comenzilor confirmate ale furnizorului care urmează să fie transferate în DDT.

Această procedură permite transformarea uneia sau mai multor comenzi de achiziție în unul sau mai multe DDT. Înainte de a iniția procedura, este necesar să configurați tipul de DDT dorit în tabelul [Tipuri de comandă furnizor](/docs/configurations/tables/purchase/purchase-orders-type/). Procedura automată permite crearea de DDT doar dacă comanda este imprimată și confirmată.

Condițiile pentru execuție sunt: 

- Furnizorul comenzilor trebuie să coincidă cu furnizorul DDT-ului.
- Comanda de executat trebuie să aibă indicatorul "Imprimată" și o *Dată de Confirmare* a comenzii.
- Pentru a doua procedură, *Tipul comenzii* trebuie să aibă un *Tip de aviz de livrare* asociat.

Condițiile de grupare a comenzilor în DDT pot fi definite în [Parametrii grupării DDT de achiziție](/docs/configurations/parameters/purchase/dn-grouping).

După ce ați selectat comenzile și ați setat filtrele, făcând clic pe *Transfer*, se va genera DDT-ul cu datele comenzii. Dacă execuția a fost efectuată corect, comanda va schimba automat starea în *"Executat"* sau *"Parțial Executat"*.

Execuția din comandă în DDT poate fi finalizată de asemenea din antetul facturii folosind butonul *Execuție din comandă*.

## Execuția din DDT în Facturi

Procedura de execuție din DDT în factură poate fi inițiată în două moduri:

- Din Meniul [Proceduri](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): mergând pe *Achiziții > Facturi de achiziție > Proceduri > Valorificare DDT de achiziție*. 
- Din [Antet](/docs/purchase/purchase-invoices/insert-purchase-invoice/header) Facturii de Vânzare: utilizând butonul *Execuție DDT* în antetul facturii.


Această procedură permite crearea uneia sau mai multor facturi pornind de la unul sau mai multe DDT. Procedura este compusă din trei tab-uri principale:

- Valorificare: permite introducerea de filtre pentru a selecta DDT-urile de facturat (cu statut "Verificat") și specificarea datei de creare a facturii.
- Parametri: configurează tipul de factură de creat, dacă nu este indicat în tabelul [Tipuri DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) și referințele DDT care trebuie incluse în factură.
- Precedente: permite vizualizarea, filtrarea și anularea operațiunilor de facturare anterioare.

Condițiile de grupare a DDT-urilor în factură pot fi definite în [Parametrii grupării facturii de achiziție](/docs/configurations/parameters/purchase/invoice-grouping/).

După ce ați selectat DDT-urile și ați setat parametrii, este posibil să continuați cu crearea facturii făcând clic pe *Valorificare DDT de achiziție*.

Execuția din DDT în factură poate fi finalizată de asemenea din antetul facturii utilizând butonul *Execuție DDT*.