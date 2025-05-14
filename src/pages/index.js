import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';



import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
  title: <a href='docs/finance-area/finance-intro'><Translate>{'Amministrativa'}</Translate></a>,
  description: (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><a href='docs/finance-area/declarations/intro'><Translate>Dichiarazioni & Intrastat</Translate></a></li> 
      <li><a href='docs/finance-area/ledger-records/intro'><Translate>Registrazioni contabili</Translate></a></li>
      <li><a href='docs/finance-area/maturity-values/intro'><Translate>Partite</Translate></a></li>
      <li><a href='docs/finance-area/professional-men/general-overview'><Translate>Percipienti</Translate></a></li> 
      <li><a href='docs/finance-area/fixed-assets/general-overview'><Translate>Cespiti</Translate></a></li> 
      <li><a href='docs/finance-area/e-invoice/create-electronic-invoice'><Translate>Fatturazione Elettronica</Translate></a></li> 
      <li><a href='docs/finance-area/leasing/search'><Translate>Leasing</Translate></a></li>
      <li><a href='docs/finance-area/sdi-documents/sdi-documents-intro'><Translate>Documenti SDI</Translate></a></li>  
    </ul>
   ),    
  },
  {
    title: <a href='docs/crm/crm-intro'><Translate>{'CRM'}</Translate></a>,
    description: (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href='docs/crm/home-crm/contacts/search-contacts'><Translate>Contatti CRM</Translate></a></li>   
        <li><a href='docs/crm/budget-marketing-automation/newsletter/search-newsletter'><Translate>Newsletter</Translate></a></li> 
        <li><a href='docs/crm/campaign/campaign-search'><Translate>Campagne marketing</Translate></a></li>
        <li><a href='docs/crm/chance/search-chances'><Translate>Opportunità</Translate></a></li>
        <li><a href='docs/crm/sales-forecast-crm/new-sales-forecast'><Translate>Previsioni di vendita</Translate></a></li>
        <li><a href='docs/crm/helpdesk/tickets'><Translate>Helpdesk</Translate></a></li>  
      </ul>
     ),    
    },
  {
    title: <a href='docs/treasury/treasury-intro'><Translate>{'Tesoreria'}</Translate></a>,
    description: (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><a href='docs/treasury/bank-account/bank-movements'><Translate>Conti correnti</Translate></a></li> 
      <li><a href='docs/treasury/docfinance/general-overview'><Translate>DocFinance</Translate></a></li> 
      <li><a href='docs/treasury/vendors-payments/general-overview'><Translate>Pagamenti fornitori</Translate></a></li> 
      <li><a href='docs/treasury/customer-risk/general-overview'><Translate>Rischio cliente</Translate></a></li> 
      <li><a href='docs/treasury/cash-flow/general-overview'><Translate>Cash flow</Translate></a></li> 
      <li><a href='docs/treasury/bills-holding/general-overview'><Translate>Portafoglio effetti</Translate></a></li> 
      <li><a href='docs/treasury/advance/advances-collections'><Translate>Anticipi & Incassi</Translate></a></li>
    </ul>
     ),    
    },
    {
      title: <a href='docs/controlling/controlling-intro'><Translate>{'Controlling'}</Translate></a>,
      description: (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href='docs/controlling/mid-year-closures/general-overview'><Translate>Chiusure infrannuali</Translate></a></li> 
          <li><a href='docs/controlling/reclassifications/reclassification-overview'><Translate>Riclassificazioni</Translate></a></li> 
          <li><a href='docs/controlling/budget/general-overview'><Translate>Budget</Translate></a></li> 
          <li><a href='docs/controlling/controlling-recordings/controlling-recording-intro'><Translate>Contabilità gestionale</Translate></a></li> 
          <li><a href='docs/controlling/sales-forecast/sales-forecast-intro'><Translate>Previsioni di vendita</Translate></a></li> 
          <li><a href='docs/controlling/controlling/cost-calculation/product-cost-intro'><Translate>Calcolo costo</Translate></a></li> 
        </ul>
       ),    
      },
      {
        title: <a href='docs/purchase/purchases-intro'><Translate>{'Acquisti'}</Translate></a>,
        description: (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href='docs/purchase/purchase-requests/general-overview'><Translate>Richieste di acquisto</Translate></a></li> 
            <li><a href='docs/purchase/offer-request/settings'><Translate>Richieste di offerta</Translate></a></li> 
            <li><a href='docs/purchase/purchase-orders/general-overview'><Translate>Ordini fornitori</Translate></a></li> 
            <li><a href='docs/purchase/goods-reception/receipt-goods-form-settings-and-structure'><Translate>Ricevimento merci</Translate></a></li> 
            <li><a href='docs/purchase/purchase-delivery-note/general-overview'><Translate>DDT di acquisto</Translate></a></li> 
            <li><a href='docs/purchase/purchase-invoices/general-overview'><Translate>Fatture di acquisto</Translate></a></li> 
            <li><a href='docs/purchase/purchase-price-lists/general-overview'><Translate>Listini fornitori</Translate></a></li> 
            <li><a href='docs/purchase/price-control/definition'><Translate>Gestione prezzi</Translate></a></li> 
          </ul>
         ),    
        },
        {
          title: <a href='docs/sales/sales-intro'><Translate>{'Vendite'}</Translate></a>,
          description: (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href='docs/sales/offers/search-offers'><Translate>Offerte</Translate></a></li> 
              <li><a href='docs/sales/sales-orders/settings'><Translate>Ordini cliente</Translate></a></li> 
              <li><a href='docs/sales/sales-delivery-notes/general-overview'><Translate>DDT di vendita</Translate></a></li> 
              <li><a href='docs/sales/sales-invoices/general-overview'><Translate>Fatture di vendita</Translate></a></li> 
              <li><a href='docs/sales/pos/general-overview'><Translate>POS</Translate></a></li> 
              <li><a href='docs/sales/agents/general-overview'><Translate>Liquidazione agenti</Translate></a></li> 
              <li><a href='docs/sales/sales-price-list/general-overview'><Translate>Listini di vendita</Translate></a></li> 
              <li><a href='docs/sales/price-control/definition'><Translate>Gestione prezzi</Translate></a></li> 
            </ul>
           ),    
          },
          {
            title: <a href='docs/logistics/logistics-intro'><Translate>{'Logistica'}</Translate></a>,
            description: (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href='docs/logistics/items/items-intro'><Translate>Articoli</Translate></a></li> 
                <li><a href='docs/logistics/warehouse/stock-records/records'><Translate>Magazzino</Translate></a></li> 
                <li><a href='docs/logistics/lots-serial-numbers/Lots-serial-number-intro'><Translate>Lotti & Numeri di serie</Translate></a></li> 
                <li><a href='docs/logistics/picking/picking-intro'><Translate>Picking</Translate></a></li> 
                <li><a href='docs/logistics/physical-inventory/physical-inventory-intro'><Translate>Inventari fisici</Translate></a></li> 
                <li><a href='docs/logistics/udc/loading-unit-intro'><Translate>UDC</Translate></a></li> 
                <li><a href='docs/logistics/load-plans/create-plan'><Translate>Piani di carico</Translate></a></li> 
                <li><a href='docs/logistics/shipping/shippings-intro'><Translate>Spedizioni</Translate></a></li> 
                <li><a href='docs/logistics/motorvehicles/motorvehicle-management'><Translate>Automezzi</Translate></a></li> 
                <li><a href='docs/logistics/wms/wms-intro'><Translate>WMS</Translate></a></li> 
              </ul>
             ),    
            },
            {
              title: <a href='docs/planning/planning-intro'><Translate>{'Pianificazione'}</Translate></a>,
              description: (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li><a href='docs/planning/mps-master-production-scheduling/job-orders-intro'><Translate>Commesse di produzione</Translate></a></li> 
                  <li><a href='docs/planning/ms-master-scheduling/ms-master-scheduling-intro'><Translate>MS - Master scheduling</Translate></a></li> 
                  <li><a href='docs/planning/capacity-requirements-planning/capacity-requirements-planning-intro'><Translate>CRP-Capacity requirements</Translate></a></li> 
                </ul>
               ),    
              },
              {
                title: <a href='docs/production/production-intro'><Translate>{'Produzione'}</Translate></a>,
                description: (
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href='docs/production/mrp-material-requirement-planning/mrp'><Translate>MRP</Translate></a></li> 
                    <li><a href='docs/production/pp-production-in-progress/production-orders/search-production-orders'><Translate>PP - Production in progress</Translate></a></li> 
                    <li><a href='docs/production/pp-production-in-progress/production-orders/search-production-orders'><Translate>Gestione ore produzione</Translate></a></li> 
                    <li><a href='docs/production/pp-production-in-progress/production-orders/search-production-orders'><Translate>Controllo produzione</Translate></a></li> 
                    <li><a href='docs/production/mes/mes-intro'><Translate>Fluentis MES</Translate></a></li> 
                  </ul>
                 ),    
                },
                {
                  title: <a href='docs/subcontractor/subcontractor-intro'><Translate>{'Conto lavoro'}</Translate></a>,
                  description: (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li><a href='docs/subcontractor/subcontractor-orders/subcontractor-orders-intro'><Translate>Ordini di conto lavoro</Translate></a></li> 
                      <li><a href='docs/subcontractor/delivery-note/general-overview'><Translate>DDT di consegna</Translate></a></li> 
                      <li><a href='docs/subcontractor/subcontractor-returns/general-overview'><Translate>Rientri</Translate></a></li> 
                      <li><a href='docs/subcontractor/subcontractor-price-lists/insert-price-list'><Translate>Listini di conto lavoro</Translate></a></li> 
                    </ul>
                   ),    
                  },
                  {
                    title: <a href='docs/project-management/project-management-intro'><Translate>{'Gestione progetti'}</Translate></a>,
                    description: (
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href='docs/project-management/projects/search-projects-intro'><Translate>Progetti</Translate></a></li> 
                        <li><a href='docs/project-management/registers/resources-management/search-resources'><Translate>Anagrafiche</Translate></a></li> 
                        <li><a href='docs/project-management/intervention-requests/search-intervention-request'><Translate>Richieste di intervento</Translate></a></li> 
                        <li><a href='docs/project-management/planned-interventions/new-planned-intervention'><Translate>Interventi pianificati</Translate></a></li> 
                        <li><a href='docs/project-management/service-activities/search-intervention'><Translate>Interventi</Translate></a></li> 
                        <li><a href='docs/project-management/activities-by-project/new-activity-by-project'><Translate>Attività</Translate></a></li> 
                        <li><a href='docs/project-management/work-project-status/new-work-project-status'><Translate>Stato avanzamento lavori</Translate></a></li> 
                        <li><a href='docs/project-management/transverse-procedures'><Translate>Pianificazione a calendario delle risorse</Translate></a></li> 
                      </ul>
                     ),    
                    },
                    {
                      title: <a href='docs/quality/quality-intro'><Translate>{'Qualità'}</Translate></a>,
                      description: (
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                          <li><a href='docs/quality/external-origin-documents/external-origin-document-intro'><Translate>Documenti di origine esterna</Translate></a></li> 
                          <li><a href='docs/quality/internal-origin-documents/internal-origin-document-intro'><Translate>Documenti di origine interna</Translate></a></li> 
                          <li><a href='docs/quality/item-control/item-control-intro'><Translate>Controlli articolo</Translate></a></li> 
                          <li><a href='docs/quality/claims-and-non-compliance/claim-and-non-compliance-intro'><Translate>Reclami e non conformità</Translate></a></li> 
                          <li><a href='docs/quality/corrective-actions/corrective-action-intro'><Translate>Azioni correttive</Translate></a></li> 
                          <li><a href='docs/quality/calibration-tools/calibration-intro'><Translate>Taratura strumenti</Translate></a></li> 
                          <li><a href='docs/quality/vendor-rating/vendor-rating-intro'><Translate>Qualificazione fornitore</Translate></a></li> 
                        </ul>
                       ),    
                      },
                      {
                        title: <a href='docs/ddmrp/master-data/introduction'><Translate>{'DDMRP'}</Translate></a>,
                        description: (
                          <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href='docs/ddmrp/master-data/introduction'><Translate>Anagrafiche</Translate></a></li> 
                            <li><a href='docs/ddmrp/procedures/ADU-update'><Translate>Procedure</Translate></a></li> 
                            <li><a href='docs/ddmrp/views_and_forms/buffer-status'><Translate>Forms e report</Translate></a></li> 
                          </ul>
                         ),    
                        },

];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--3 margin-bottom--lg')}>
      <h4 className="description margin-bottom--md">{title}</h4>
      <div className="margin-bottom--md">
        <strong className="hr-line"></strong>
      </div>
      <div className='description'>{description}</div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.title}`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <Translate>siteConfig.title</Translate>
          </h1>{" "}
          <p className="hero__subtitle">
            <Translate>siteConfig.tagline</Translate>
          </p>
          <div className={styles.buttons}>
            <a
              className="button button--primary bottoneCustom bi bi-arrow-up-right-circle-fill"
              href="docs/guide/intro/intro-erp"
            >
              <Translate>siteConfig.introductionButton</Translate>
            </a>

          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container padding-top--lg">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
