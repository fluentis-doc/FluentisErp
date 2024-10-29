---
title: Achiziţii
sidebar_position: 1
---

Gestionarea **Achiziţii** în Fluentis ERP este concepută pentru a sprijini operatorii de afaceri în gestionarea rapidă a toată documentația referitoare la gestionarea Lanțului de Furnizare.   

Prin emiterea comenzilor de furnizare, care pot avea loc în mod manual sau automat, este posibil să se procedeze cu aprovizionarea bunurilor destinate gestionării producției sau a depozitului și crearea tuturor documentelor necesare pentru procesul de furnizare, inclusiv *DDT de achiziție*, *Facturi*, *Cereri de Achiziție*, *Cereri de Ofertă*.   

Interconectarea cu domeniul **Logistică** garantează actualizarea stocurilor și generarea de cereri de reintegrare a stocurilor, în timp ce integrarea cu domeniul **Administrație** facilitează gestionarea financiară a achizițiilor, asigurând un proces fluid și înregistrarea precisă a tranzacțiilor.    
Domeniul *Achiziții* este, de asemenea, integrat cu **Planificarea** prin generarea de RDA pornind de la cereri de material necesar pentru producție și cu domeniul **Vânzări** grație posibilității de a genera comenzi furnizor pe baza comenzilor clienților.

## Modulele domeniului

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Cereri de achiziție (Richieste di acquisto)</Link>
        <p>Elaborarea cererii de material de achiziționat pe baza cererilor venite din alte departamente sau a semnalărilor de lipsuri. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Cereri de ofertă (Richieste di offerta)</Link>
        <p>Compararea ofertelor furnizorilor pentru a alege cea mai bună ofertă și a o transforma în comandă de achiziție.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Comenzi furnizori (Ordini fornitori)</Link>
        <p>Gestionarea și organizarea procesului de achiziție de bunuri și servicii de la furnizori. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Recepția mărfurilor (Ricevimento merci)</Link>
        <p>Înregistrarea sosirii mărfii înainte de crearea DDT-ului sau a facturii de achiziție. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">DDT de achiziție (DDT di acquisto)</Link>
        <p>Urmărirea și documentarea transferului de mărfuri în intrare și înregistrarea în depozit. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Facturi de achiziție (Fatture di acquisto)</Link>
        <p>Atestarea sumei datorate de companie unui furnizor pentru bunurile sau serviciile primite, specificând costurile, TVA-ul și condițiile de plată. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-price-lists/general-overview">Listine furnizori (Listini fornitori)</Link>
        <p>Gestionarea și actualizarea prețurilor convenite cu furnizorii, automatizând aplicarea prețurilor, discounturilor și eventualelor condiții personalizate. </p>
    </div>
    <div className="card">
###     Comenzi de achiziție (Commesse di acquisto)
        <p>Gestionarea comenzilor de achiziție pe baza contractelor negociate anterior cu furnizorul. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     Gestionarea prețurilor (Gestione prezzi)
        <p><Link to="/docs/purchase/price-control/definition" className="bold-link">Definirea politicilor de discounturi (Definizione politiche sconti)</Link></p>
        <p>Aplicarea discounturilor asociate furnizorului, clasei de articol și/sau categoriilor de discount.</p>
        <p><Link to="/docs/purchase/price-control/formulas" className="bold-link">Formulele de actualizare a politicilor de prețuri/discounturi (Formule di aggiornamento politiche prezzi/sconti)</Link></p>
        <p>Definirea regulilor de actualizare a prețurilor în listinele de achiziții/vânzări. </p>
        <p><Link to="/docs/purchase/price-control/correspondence" className="bold-link">Corespondența categoriilor de discount achiziții/vânzări (Corrispondenza categorie sconto acq//ven)</Link></p>
        <p>Potrivirea categoriei de discount generic la condițiile de discount ce urmează a fi aplicate clienților/furnizorilor proprii.</p>
    </div>
</div>

## Pornire rapidă (Fast start)

:::important ATENȚIE (ATTENZIONE)
Înainte de a utiliza funcționalitățile disponibile, este necesar să se configureze Tabelele și Parametrii domeniului.

Alternativ, este disponibilă procedura de Pornire Rapidă descrisă mai jos. 
:::

Pornirea Rapidă este o procedură proiectată pentru a simplifica și accelera inițializarea software-ului de gestionare, permițând popularea automată a sistemului cu parametrii și tabele de bază. Această funcționalitate reduce semnificativ timpul și efortul necesar pentru configurarea inițială, evitând introducerea manuală a fiecărei setări în parte.    

Recomandăm consultarea [articolului](/docs/guide/fast-start#tabelle-acquisti) corespunzător înainte de a aborda modulul.