import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const features = [
    {
    title: <Translate>{'Home & Impostazioni'}</Translate>,
    description: (
      <ul>
           <a><b>Home</b></a>
        <li><a href='docs/erp-home/home'><Translate>Connessione e Temi</Translate></a></li> 
        <li><a href='docs/erp-home/registers/registers-intro'><Translate>Anagrafiche</Translate></a></li> 
          <a><b><Translate>Impostazioni</Translate></b></a>
        <li><a href='docs/applications/applications-intro'><Translate>Strumenti</Translate></a></li> 
        <li><a href='docs/object-navigator/object-navigator-intro'><Translate>Object navigator</Translate></a></li> 
        <li><a href='docs/configurations/configuration'><Translate>Configurazioni (table, parametri, utilità)</Translate></a></li> 
        <li><a href='docs/form-navigator/form-navigator-intro'><Translate>Form navigator</Translate></a></li> 
        <li><a href='docs/panels/context-panel'><Translate>Context panel</Translate></a></li> 
        <li><a href='docs/guide/guide-intro'><Translate>Varie</Translate></a></li> 
      </ul>
     ),    
    },
    {
    title: <Translate>{'Amministrativa'}</Translate>,
    description: (
      <ul>
        <li><a href='docs/finance-area/declarations/intro'><Translate>Dichiarazioni & Intrastat</Translate></a></li> 
        <li><a href='docs/finance-area/ledger-records/records/general-overview'><Translate>Registrazioni contabili</Translate></a></li>
        <li><a href='docs/finance-area/maturity-values/maturity-values/maturity-values/maturity-values-management'><Translate>Partite</Translate></a></li>
        <li><a href='docs/finance-area/professional-men/general-overview'><Translate>Percipienti</Translate></a></li> 
        <li><a href='docs/finance-area/fixed-assets/general-overview'><Translate>Cespiti</Translate></a></li> 
        <li><a href='docs/finance-area/e-invoice/create-electronic-invoice'><Translate>Fatturazione Elettronica</Translate></a></li> 
        <li><a href='docs/finance-area/leasing/search'><Translate>Leasing</Translate></a></li>
        <li><a href='docs/finance-area/sdi-documents/sdi-documents-intro'><Translate>Documenti SDI</Translate></a></li>  
      </ul>
     ),    
    },
    {
      title: <Translate>{'CRM'}</Translate>,
      description: (
        <ul>
          <li><a href='docs/crm/crm-intro'><Translate>CRM</Translate></a></li> 
          <li><a href='docs/crm/my-crm-area/calendar'><Translate>My CRM area</Translate></a></li>
          <li><a href='docs/crm/budget-marketing-automation/template/template-search'><Translate>Budget and Marketing Automation</Translate></a></li>
          <li><a href='docs/crm/contacts/search-contacts'><Translate>Contatti CRM</Translate></a></li> 
          <li><a href='docs/crm/chance/search-chances'><Translate>Opportunità</Translate></a></li> 
          <li><a href='docs/crm/tickets-management/tickets'><Translate>Tickets Management</Translate></a></li> 
        </ul>
       ),    
      },
    {
      title: <Translate>{'Tesoreria'}</Translate>,
      description: (
        <ul>
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
        title: <Translate>{'Controlling'}</Translate>,
        description: (
          <ul>
            <li><a href='docs/controlling/mid-year-closures/general-overview'><Translate>Chiusure infrannuali</Translate></a></li> 
            <li><a href='docs/controlling/reclassifications/reclassifications-management'><Translate>Riclassificazioni</Translate></a></li> 
            <li><a href='docs/controlling/budget/general-overview'><Translate>Budgeting</Translate></a></li> 
            <li><a href='docs/controlling/controlling-recordings/first-note/recording-physical-movements'><Translate>Contabilità gestionale</Translate></a></li> 
            <li><a href='docs/controlling/cost-calculation/cost'><Translate>Calcolo costo</Translate></a></li> 
          </ul>
         ),    
        },
        {
          title: <Translate>{'Acquisti'}</Translate>,
          description: (
            <ul>
              <li><a href='docs/purchase/purchase-requests/general-overview'><Translate>Richieste di acquisto</Translate></a></li> 
              <li><a href='docs/purchase/offer-request/insert-offert-request'><Translate>Richieste di offerta</Translate></a></li> 
              <li><a href='docs/purchase/purchase-orders/general-overview'><Translate>Ordini fornitori</Translate></a></li> 
              <li><a href='docs/purchase/goods-reception/receipt-goods-form-settings-and-structure'><Translate>Ricevimento merci</Translate></a></li> 
              <li><a href='docs/purchase/purchase-delivery-note/general-overview'><Translate>DDT di acquisto</Translate></a></li> 
              <li><a href='docs/purchase/purchase-invoices/general-overview'><Translate>Fatture di acquisto</Translate></a></li> 
              <li><a href='docs/purchase/purchase-price-lists/general-overview'><Translate>Listini fornitori</Translate></a></li> 
              <li><a href='docs/purchase/return'><Translate>Resi fornitori</Translate></a></li> 
              <li><a href='docs/purchase/price-control/definition'><Translate>Gestione prezzi</Translate></a></li> 
            </ul>
           ),    
          },
          {
            title: <Translate>{'Vendite'}</Translate>,
            description: (
              <ul>
                <li><a href='docs/sales/sales-orders/settings'><Translate>Ordini cliente</Translate></a></li> 
                <li><a href='docs/sales/sales-delivery-notes/general-overview'><Translate>DDT di vendita</Translate></a></li> 
                <li><a href='docs/sales/sales-invoices/general-overview'><Translate>Fatture di vendita</Translate></a></li> 
                <li><a href='docs/sales/pos/general-overview'><Translate>POS</Translate></a></li> 
                <li><a href='docs/sales/agents/general-overview'><Translate>Liquidazione agenti</Translate></a></li> 
                <li><a href='docs/sales/price-control/definition'><Translate>Gestione prezzi</Translate></a></li> 
              </ul>
             ),    
            },
            {
              title: <Translate>{'Logistica'}</Translate>,
              description: (
                <ul>
                  <li><a href='docs/logistics/items/items-intro'><Translate>Articoli</Translate></a></li> 
                  <li><a href='docs/logistics/warehouse/stock-records/records'><Translate>Magazzino</Translate></a></li> 
                  <li><a href='docs/logistics/lots-serial-numbers/general-overview'><Translate>Lotti & Numeri di serie</Translate></a></li> 
                  <li><a href='docs/logistics/picking/general-overview'><Translate>Picking</Translate></a></li> 
                  <li><a href='docs/logistics/physical-inventory/general-overview'><Translate>Inventari fisici</Translate></a></li> 
                  <li><a href='docs/logistics/udc/general-overview'><Translate>UDC</Translate></a></li> 
                  <li><a href='docs/logistics/load-plans/create-plan'><Translate>Piani di carico</Translate></a></li> 
                  <li><a href='docs/logistics/wms/intro'><Translate>WMS</Translate></a></li> 
                  <li><a href='docs/logistics/motorvehicles/motorvehicle-management'><Translate>Automezzi</Translate></a></li> 
                </ul>
               ),    
              },
              {
                title: <Translate>{'Pianificazione'}</Translate>,
                description: (
                  <ul>
                    <li><a href='docs/planning/mps-master-production-scheduling/job-order-creation'><Translate>Commesse di produzione</Translate></a></li> 
                    <li><a href='docs/planning/ms-master-scheduling/general-schedule'><Translate>MS - Master scheduling</Translate></a></li> 
                    <li><a href='docs/planning/capacity-requirements-planning/general-overview'><Translate>CRP-Capacity requirements</Translate></a></li> 
                  </ul>
                 ),    
                },
                {
                  title: <Translate>{'Produzione'}</Translate>,
                  description: (
                    <ul>
                      <li><a href='docs/production/mrp-material-requirement-planning/mrp'><Translate>MRP</Translate></a></li> 
                      <li><a href='docs/production/pp-production-in-progress/production-orders/search-production-orders'><Translate>PP - Production in progress</Translate></a></li> 
                      <li><a href='docs/production/pp-production-in-progress/production-orders/search-production-orders'><Translate>Gestione ore produzione</Translate></a></li> 
                      <li><a href='docs/production/pp-production-in-progress/production-orders/search-production-orders'><Translate>Controllo produzione</Translate></a></li> 
                      <li><a href='docs/production/mes/mes-main-form'><Translate>Fluentis MES</Translate></a></li> 
                    </ul>
                   ),    
                  },
                  {
                    title: <Translate>{'Conto lavoro'}</Translate>,
                    description: (
                      <ul>
                        <li><a href='docs/subcontractor/subcontractor-orders/subcontractor-orders-intro'><Translate>Ordini di conto lavoro</Translate></a></li> 
                        <li><a href='docs/subcontractor/delivery-note/general-overview'><Translate>DDT di consegna</Translate></a></li> 
                        <li><a href='docs/subcontractor/subcontractor-returns/general-overview'><Translate>Rientri</Translate></a></li> 
                        <li><a href='docs/subcontractor/subcontractor-price-lists/insert-price-list'><Translate>Listini di conto lavoro</Translate></a></li> 
                      </ul>
                     ),    
                    },
                    {
                      title: <Translate>{'Gestione progetti'}</Translate>,
                      description: (
                        <ul>
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
                        title: <Translate>{'Qualità'}</Translate>,
                        description: (
                          <ul>
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
                          title: <Translate>{'DDMRP'}</Translate>,
                          description: (
                            <ul>
                              <li><a href='docs/ddmrp/master-data/introduction'><Translate>Anagrafiche</Translate></a></li> 
                              <li><a href='docs/ddmrp/procedures/ADU-update'><Translate>Procedure</Translate></a></li> 
                              <li><a href='docs/ddmrp/views_and_forms/buffer-status'><Translate>Forms e report</Translate></a></li> 
                            </ul>
                           ),    
                          },

];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--2')}>
      {imgUrl && (
        <div className="text--left">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
          <Link 
            className="button button--secondary button--lg"
            to="/docs/video/intro">
            Video tutorial
          </Link>
        </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
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
