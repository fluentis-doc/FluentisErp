---
title: What is Electronic Invoicing 
sidebar_position: 1
---

Electronic invoicing is a digital system for the issuance and transmission of invoices that replaces paper support in favor of new digital communication modes. With electronic invoicing, issued invoices and variation notes must be produced in the new digital format "XML eXtensible Markup Language," a language that allows computer supports to define and control the meaning of the contained elements with standardized procedures, thus verifying the information for the regulatory controls required by law. 

The Italian legal system introduced the management of electronic invoicing with the financial law of 2008 in compliance with community regulations, and since 6/06/2014, it has made electronic invoices mandatory for issuing documents to the Public Administration. The "electronic invoice" provided for by Italian regulations is an XML file (eXtensible Markup Language) compliant with the technical specifications as outlined in Annex A of the Director's provision of the Revenue Agency, protocol no. 89757/2018 of 30/04/2018. The content of any invoice is generally regulated by Articles 21 and 21-bis of D.P.R. no. 633/1972. 

The generated invoice file in the new XML standard contains a different representation of the mandatory data required under VAT regulations, possibly supplemented by additional information or elements that can facilitate their management and accounting. Article 1, c. 917, lett. a and b of Law no. 205 of December 27, 2017 (2018 Budget Law) introduced, starting from January 1, 2019, the obligation of electronic invoicing for the sale of goods and the provision of services carried out between subjects resident, established, or identified in the territory of the State using the same IT solutions already adopted for issuing electronic invoices to the PA. 

The electronic invoices issued so far in favor of the PA and subsequently those issued for B2B and B2C are conveyed and sent to the "Interchange System," which is an IT system managed by the Revenue Agency capable of receiving electronic invoices, performing checks on the received files, and correctly exchanging information with the transmitting subject as well as forwarding invoices to the recipient subjects. 

The companies involved in the electronic invoicing process will be concerned both regarding the management of the ACTIVE cycle, namely at the moment the invoice relating to sold products or rendered services is issued, and regarding the PASSIVE cycle, that is, the receipt of documents issued by their suppliers.

## Operational Flow in Fluentis

Regarding the management of electronic invoicing and related obligations, in Fluentis it is possible to manage:
- issuance of sales documents to subjects resident/established/identified in the territory of the Italian state
- issuance of sales documents to the Public Administration
- acquisition of electronic purchase documents issued by Italian suppliers (NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- Communication to the SdI of purchase and sales documents issued by foreign suppliers or addressed to foreign customers (subjects NOT resident/established/identified in Italian territory) (previously called spesometro)

The management of the flows requires the configuration of a connection in BizLink, dedicated to communication with the Fluentis Business Hub service. The purpose and objective of the service are to send documents to the SdI, acquire from the SdI the invoicing documents relating to the passive cycle (NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS), acquire notifications and messages related to the various phases of sending active invoices.

The communication protocol between Fluentis Business HUB and the SdI (NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS) is the application cooperation system based on the Web Service:
- the invoice, issued by Fluentis, passes through the BizLink connection to the Fluentis Business Hub 
- The Fluentis Business Hub service sends the documents to the SdI 
- Fluentis Digital Hub acquires notifications from the SdI regarding the status of the documents and transfers them to the management software
- Fluentis Digital Hub receives the passive invoices transferred by Fluentis clients' suppliers
- Sorts invoices according to individual client configurations 

In Fluentis, it will thus be possible to:
- generate sales invoices in electronic format according to the layout provided for B2B/B2C/PA invoicing
- if one decides to digitally sign the invoice files or if this step is mandatory due to the nature of the documents, manage the export of XML documents to an external file system folder for digitally signing the documents using third-party signing software, and then re-import the signed file (.xml and .p7m)
- view the content of the XML file and possibly attach the PDF file (standard format) of the invoice document to the XML file
- send documents to the SdI (NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- monitor the status of sent documents through bulk search grids, document status viewing fields in individual documents, and dashboards for viewing logs transmitted by the SdI
- acquire passive invoices sent by suppliers (NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)

The management of the transmission and acquisition of electronic documents occurs through the CHANGE STATUS procedure of the documents.

Fluentis allows, through Fluentis Business Hub, the transfer to the SdI of both signed invoice files and files without a digital signature. To apply the digital signature to the generated documents, it will be necessary to download the documents to a filesystem folder, apply the digital signature with external signing software (e.g., DIKE), and re-import the signed file (xml or p7m) which will then be sent to the SdI in the new format. Once sent to the SdI, Fluentis acquires the notifications produced by the Interchange System and associates them with the relevant documents, managing the evolution of the document statuses. 

If there is no active connection to the Fluentis Business Hub, it will still be possible to generate the XML files of the active cycle for the selected contacts, download the produced files, and proceed with sending them through external channels to Fluentis. The XML files generated by Fluentis and acquired by the SdI relating to the passive cycle are stored in the Document Management of Fluentis, in addition to being always available in the various phases of managing the sales document through the specific functionality **SDI Document Registry** where it is possible to view the time history of the document transmission and download and view the files produced by Fluentis (XML and PDF) and received from the SdI. The passive electronic invoicing cycle towards individuals does not allow for the possible rejection by the recipient of the invoicing document, which must therefore be managed as an accounting requirement according to current regulations.