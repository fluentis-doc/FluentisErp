---
title: Introduzione
sidebar_position: 1
---

La valutazione dei fornitori si riferisce al processo di approvazione dei potenziali fornitori e valutazione dei fornitori storici attraverso valutazioni quantitative e qualitative. Lo scopo principale è quello di compilare una graduatoria dei fornitori disponibili ai fini della qualità del prodotto/servizio.   


## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/initial-vendor-rating">Valutazioni iniziali e periodiche</Link>
        <p>E' un criterio di valutazione *soggettivo* che si basa su domande (*Check-List*) predefinite per *Classi di fornitura* fatte a potenziali fornitori o fornitori storici.</p>
    </div>
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/vendor-rating-on-nc">Valutazioni periodiche su Non conformità</Link>
        <p>E' un criterio di valutazione *oggettivo* che si basa sulle *Non conformità* attribuite a *Fornitori* in un determinato arco temporale.</p>
    </div>
</div>


## Per iniziare ad utilizzare   

le **Valutazioni iniziali e periodiche**:
- devi definire: un [*Tipo valutazione*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type), un conto [*Fornitore*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) e una [*Valutazione fornitore*](/docs/configurations/tables/quality/vendor-rating/vendor-ratings)   
- per agevolare la gestione delle *Valutazioni iniziali e periodiche* impostare i [*Parametri Qualificazione fornitore*](/docs/configurations/parameters/quality/vendor-ratings) nella sessione *Valutazioni iniziali*   
- devi inserire una nuova [*Valutazione iniziali*](/docs/quality/vendor-rating/initial-vendor-rating)   

le **Valutazioni periodiche su Non conformità**:
- devi definire un [*Tipo valutazione*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type)   
- per agevolare la gestione delle *Valutazioni periodiche su Non conformità* impostare i [*Parametri Qualificazione fornitore*](/docs/configurations/parameters/quality/vendor-ratings) nella sessione *Valutazioni periodiche Non conformità*   
- devi inserire almeno una nuova [*Non conformità a fornitore*](/docs/quality/claims-and-non-compliance/non-compliances/non-compliance) con data compresa nel periodo che si desidera valutare   
- devi elaborare una [*Valutazione periodica su Non conformità*](/docs/quality/vendor-rating/vendor-rating-on-nc)   


## Collegamenti con altri moduli
Il modulo dei *Documenti di origine esterna* non è collegato ad alcun altro modulo.   
