-- **************************************************************************************************
-- ********************************** WARNING !!!! **************************************************
--		Replace placeholders ? with valid values before running the script
--		set @deleteIfExists = 0 if you don't want to replace existing data 
--		(read farther for more details on parameters)
-- **************************************************************************************************

-- **********************************************************************************************************************************************************************
declare @deleteIfExists bit = 0 -- When = 1 before inserting it deletes existing data for the same flow if they exist
declare @removeOnly bit = 0 -- When = 1 it just deletes data and doesn't carry on any further tasks
declare @setupConnector bit = 1 -- When = 1 it setups also the connector. This is deprecated except in the case it is really necesssary
--								   connectors should be setup by users
-- **********************************************************************************************************************************************************************

declare @docTypeName nvarchar(100) = 'Txt' -- Document type for the parser (Example: N'Xml'). See BZ_DocumentTypes
declare @filePattern nvarchar(100) = 'Registrazione.txt' -- [BZFD_FileNamePattern] - used in flow document (Example: N'^(f|F)attura_([a-z]|[A-Z]|[0-9]|_)+.(x|X)(m|M)(l|L)')
declare @parserName nvarchar(100) = 'Txt' -- Name of the parser to use (Example: N'Xml'). See BZ_Parsers
declare @connTypeName nvarchar(100) = 'Folder Monitor' -- Name of the connector type (Example: N'Folder Monitor'). See BZ_Connectors

-- Partner
declare @partnerName nvarchar(100) = 'DocFinance' -- Partner name (Example: N'Fluentis') see BZ_Partners
declare @partnerDesc nvarchar(2048) = 'Doc Finance' -- Description (Example: N'Fluentis')

--Flow
declare @flowName nvarchar(100) = 'DocFinance' -- Name of the flow (Example: N'FLOW_StdAccountDataImportFromExcel')
declare @flowDesc nvarchar(2048) = 'Flusso di gestione del Doc Finance' -- Flow description (Example: N'Standard account data import from Excel file')

--Flow operation
declare @flowOpName nvarchar(100) = 'FLOW_OP_StdRegImport' -- Flow operation name (Example: N'FLOW_OP_StdAccountDataImportFromExcel')
declare @flowOpDesc nvarchar(2048) = 'Importazione registrazione' -- Flow operation description (Example: N'Standard account data import flow operation from Excel file')
declare @flowOpIsImport bit = 1 -- = 0 = Export, 1 = Import
declare @flowOpExportWorkflow nvarchar(1024) = NULL -- Export workflow. If it's an import it is usually NULL

--Flow document
declare @flowDocName nvarchar(100) = 'FLOW_DOC_StdRegImport' -- Flow document name (Example: N'FLOW_DOC_StdAccountDataImportFromExcel')
declare @flowDocDesc nvarchar(2048) = 'Importazione registrazione' -- Flow document decription (Example: N'Standard account data import flow doc from Excel file')
declare @flowDocFilePart nvarchar(2048) = 'DocFinanceRegistrazione.txt'

-- Connector
declare @connName nvarchar(100) = 'CONN_StdImportReg' -- Connector name (Example: N'CONN_StdExcelAccountDataImport')
declare @connDesc nvarchar(2048) = 'Import registrazione for doc finance' -- Connector description (Example: N'Connector for importing account data from Excel file')
declare @connConfig nvarchar(max) = '<Configuration fileMask="RITCOGE.txt" incomingFolder="C:\BizLink\Input\Incoming" processedFolder="C:\BizLink\Input\Processed" failedFolder="C:\BizLink\Input\Failed" binaryFile="false" />' -- Configuration for the connector (Example: N'<Configuration fileMask="*.*" incomingFolder="C:\BizLink\Input\Incoming" processedFolder="C:\BizLink\Input\Processed" failedFolder="C:\BizLink\Input\Failed" binaryFile="true" />')

-- Parser object
declare @parserObjVer nvarchar(100) = '1.0' -- Parser object version (Example: N'1.0')
declare @parserObjName nvarchar(100) = 'PO_StdFluentisDocFinanceImportReg' -- Parser object name (Example: N'PO_StdFluentisAccountDataImportFromExcel')
declare @parserObjDesc nvarchar(2048) = 'Import registrazione for doc finance' -- Parser object description (Example: N'Parser object for account data import')
declare @parserWorkflow nvarchar(2048) = NULL -- usually NULL.  (Example: NULL)

-- Configuration (XML of the parser object)
declare @parserObjConfig nvarchar(max) = '<Object name="Registrazione" alias="Registrazione" description="Registrazione">
  <Field name="RECH_ITEM" alias="RECH_ITEM" description="" type="System.String, mscorlib" bizLinkField="RECH_ITEM" uiPosition="0" />
</Object>' -- Parser object XML. Enter here the configuration XML for the Parser Object. Use a nvarchar string: N'....'

-- BizLink object
declare @bzObjName nvarchar(100) = 'BO_StdFluentisDocFinRegImport' -- Name of the object (Example: N'BO_StdFluentisAccountDataImportFromExcel')
declare @bzObjVer nvarchar(100) = '1.0' -- Version (Example: N'1.0')
declare @bzObjDesc nvarchar(max) = 'Import doc finance Registrazione' -- Description (Example: N'Standard import of account data from Excel file')
declare @bzObjAlias nvarchar(100) = 'BO_StdFluentisDocFinRegImport' -- Alias (Example: N'BO_StdFluentisAccountDataImportFromExcel')
declare @bzObjWorkflow nvarchar(2048) = 'class:Fluentis.BizLink.Core.WorkFlows.ImportWorkflows.DocFinRegImportWorkflow, Fluentis.BizLink.Core.DocFin' -- Workflow (Example: NULL)
declare @bzObjNoAutoprocess bit = 0 -- No auto process (Example: 0)
declare @bzSkipWorkflow bit = 0 -- Skip Workflow (Example: 0)

-- Configuration (XML of the BizLInk object)
declare @bzObjConfig nvarchar(max) = '<Object name="Registrazione" alias="Registrazione" description="Registrazione">
  <Field name="RECH_ITEM" alias="RECH_ITEM" description="" type="System.String, mscorlib" uiPosition="0" />
</Object>' -- BizLink Object XML. Enter the configuration XML for the BizLink Object. Use a nvarchar string: N'....'
-- **************************************************************************************************

BEGIN TRANSACTION

-- Delete all data
IF (@deleteIfExists = 1 OR @removeOnly = 1)
BEGIN	
	ALTER TABLE [Fluentis].[BZ_Connectors] DROP CONSTRAINT [FK_BZ_Connectors_BZ_ConnectorType]	
	ALTER TABLE [Fluentis].[BZ_Connectors] DROP CONSTRAINT [FK_BZ_Connectors_BZ_FlowDocuments]
	ALTER TABLE [Fluentis].[BZ_Connectors] DROP CONSTRAINT [FK_BZ_Connectors_BZ_FlowOperations]
	ALTER TABLE [Fluentis].[BZ_Connectors] DROP CONSTRAINT [FK_BZ_Connectors_BZ_Flows]
	ALTER TABLE [Fluentis].[BZ_Connectors] DROP CONSTRAINT [FK_BZ_Connectors_BZ_Partners]
	
	DELETE FROM [Fluentis].[BZ_FlowDocuments] WHERE [BZ_FlowDocuments].[BZFD_Code]=@flowDocName	
	DELETE FROM [Fluentis].[BZ_FlowOperations] WHERE [BZ_FlowOperations].[BZFO_Code]=@flowOpName		
	DELETE FROM [Fluentis].[BZ_Flows] WHERE [BZ_Flows].[BZF_Code]=@flowName
	DELETE FROM [Fluentis].[BZ_ParserObjects] WHERE [BZ_ParserObjects].[BZPO_Code]=@parserObjName	
	DELETE FROM [Fluentis].[BZ_Objects] WHERE [BZ_Objects].[BZO_Code]=@bzObjName	
	DELETE FROM [Fluentis].[BZ_Connectors] WHERE [BZ_Connectors].[BZCN_Code]=@connName			
	DELETE FROM [Fluentis].[BZ_Partners] WHERE [BZ_Partners].[BZP_Code]=@partnerName		

	ALTER TABLE [Fluentis].[BZ_Connectors]
		ADD CONSTRAINT [FK_BZ_Connectors_BZ_ConnectorType] FOREIGN KEY ([BZCN_BZCT_Id]) REFERENCES [Fluentis].[BZ_ConnectorType] ([BZCT_Id])
	ALTER TABLE [Fluentis].[BZ_Connectors]
		ADD CONSTRAINT [FK_BZ_Connectors_BZ_FlowDocuments] FOREIGN KEY ([BZCN_BZFD_Id]) REFERENCES [Fluentis].[BZ_FlowDocuments] ([BZFD_Id])
	ALTER TABLE [Fluentis].[BZ_Connectors]
		ADD CONSTRAINT [FK_BZ_Connectors_BZ_FlowOperations] FOREIGN KEY ([BZCN_BZFO_Id]) REFERENCES [Fluentis].[BZ_FlowOperations] ([BZFO_ID])
	ALTER TABLE [Fluentis].[BZ_Connectors]
		ADD CONSTRAINT [FK_BZ_Connectors_BZ_Flows] FOREIGN KEY ([BZCN_BZFL_Id]) REFERENCES [Fluentis].[BZ_Flows] ([BZFL_Id])
	ALTER TABLE [Fluentis].[BZ_Connectors]
		ADD CONSTRAINT [FK_BZ_Connectors_BZ_Partners] FOREIGN KEY ([BZCN_BZPA_Id]) REFERENCES [Fluentis].[BZ_Partners] ([BZPA_Id])

	PRINT 'Data removed'	
END

IF (@removeOnly = 0)
BEGIN

	-- Flow
	IF (SELECT COUNT(*) FROM [Fluentis].[BZ_Flows] WHERE [BZ_Flows].[BZF_Code]=@flowName) = 0
	BEGIN
		INSERT INTO [Fluentis].[BZ_Flows] (
		[BZ_Flows].[BZF_Code], 
		[BZ_Flows].[BZF_Description], 
		[BZ_Flows].[BZF_IsDisabled])
		VALUES (
		@flowName, 
		@flowDesc, 
		0)
	END
	
	-- Partner
	IF (SELECT COUNT(*) FROM [Fluentis].[BZ_Partners] WHERE [BZ_Partners].[BZP_Code]=@partnerName) = 0
	BEGIN
		INSERT INTO [Fluentis].[BZ_Partners] (
		[BZ_Partners].[BZP_Code], 
		[BZ_Partners].[BZP_Description]) 
		VALUES (
		@partnerName, 
		@partnerDesc)
	END
	
	-- Flow operation
	IF (SELECT COUNT(*) FROM [Fluentis].[BZ_FlowOperations] WHERE [BZ_FlowOperations].[BZFO_Code]=@flowOpName) = 0
	BEGIN
		INSERT INTO [Fluentis].[BZ_FlowOperations] (
		[BZ_FlowOperations].[BZFO_Flow_BZF_Id], 
		[BZ_FlowOperations].[BZFO_Code], 
		[BZ_FlowOperations].[BZFO_Description], 
		[BZ_FlowOperations].[BZFO_IsImport], 
		[BZ_FlowOperations].[BZFO_IsGrouped], 
		[BZ_FlowOperations].[BZFO_ExportWorkflow], 
		[BZ_FlowOperations].[BZFO_IsDisabled], 
		[BZ_FlowOperations].[BZFO_AutoDelivery]) 
		VALUES (
		(SELECT [BZ_Flows].[BZF_Id] FROM [Fluentis].[BZ_Flows] WHERE [BZ_Flows].[BZF_Code] = @flowName), 	
		@flowOpName, 
		@flowOpDesc, 
		@flowOpIsImport, 
		0, 
		@flowOpExportWorkflow, 
		0, 
		1)
	END
	
	
	-- Biz Link object
	IF (SELECT COUNT(*) FROM [Fluentis].[BZ_Objects] WHERE [BZ_Objects].[BZO_Code]=@bzObjName) = 0
	BEGIN
		INSERT INTO [Fluentis].[BZ_Objects] (
		[BZ_Objects].[BZO_Code], 
		[BZ_Objects].[BZO_Description], 
		[BZ_Objects].[BZO_Alias], 
		[BZ_Objects].[BZO_Version], 
		[BZ_Objects].[BZO_Configuration], 
		[BZ_Objects].[BZO_Workflow], 
		[BZ_Objects].[BZO_SkipLookupBeforeWorkflow], 
		[BZ_Objects].[BZO_DoNotAutoProcess]) 
		VALUES (
		@bzObjName, 
		@bzObjDesc, 
		@bzObjAlias, 
		@bzObjVer, 
		@bzObjConfig,
		@bzObjWorkflow,
		@bzSkipWorkflow, 
		@bzObjNoAutoprocess)
	END
	

	-- Parser object
	IF (SELECT COUNT(*) FROM [Fluentis].[BZ_ParserObjects] WHERE [BZ_ParserObjects].[BZPO_Code]=@parserObjName) = 0
	BEGIN
		INSERT INTO [Fluentis].[BZ_ParserObjects] (
		[BZ_ParserObjects].[BZPO_Parser_BZPR_Id], 
		[BZ_ParserObjects].[BZPO_Code], 
		[BZ_ParserObjects].[BZPO_Description], 
		[BZ_ParserObjects].[BZPO_Version], 
		[BZ_ParserObjects].[BZPO_Configuration], 
		[BZ_ParserObjects].[BZPO_BizLinkObject_BZO_Id], 
		[BZ_ParserObjects].[BZPO_Workflow], 
		[BZ_ParserObjects].[BZPO_ParentObject_BZPO_Id], 
		[BZ_ParserObjects].[BZPO_Priority], 
		[BZ_ParserObjects].[BZPO_DocumentObjectNamePattern], 
		[BZ_ParserObjects].[BZPO_DeliveryWorkflow]) 
		VALUES (
		(SELECT [BZ_Parsers].[BZPR_Id] FROM [Fluentis].[BZ_Parsers] WHERE [BZ_Parsers].[BZPR_Code]=@parserName), 
		@parserObjName, 
		@parserObjDesc,
		@parserObjVer,
		@parserObjConfig,
		(SELECT [BZ_Objects].[BZO_Id] FROM [Fluentis].[BZ_Objects] WHERE [BZ_Objects].[BZO_Code]=@bzObjName), 
		@parserWorkflow, 
		NULL, 
		NULL, 
		NULL, 
		NULL)
	END

	
	-- Flow documents
	IF (SELECT COUNT(*) FROM [Fluentis].[BZ_FlowDocuments] WHERE [BZ_FlowDocuments].[BZFD_Code]=@flowDocName) = 0
	BEGIN
		INSERT INTO [Fluentis].[BZ_FlowDocuments] 
		(
		[BZ_FlowDocuments].[BZFD_Operation_BZFO_Id], 
		[BZ_FlowDocuments].[BZFD_DocumentType_BZDT_Id], 
		[BZ_FlowDocuments].[BZFD_Code], 
		[BZ_FlowDocuments].[BZFD_Description], 
		[BZ_FlowDocuments].[BZFD_FileNamePattern], 
		[BZ_FlowDocuments].[BZFD_Parser_BZPR_Id], 
		[BZ_FlowDocuments].[BZFD_ParserObject_BZPO_Id], 
		[BZ_FlowDocuments].[BZFD_TransmissionReceivedWorkflow], 
		[BZ_FlowDocuments].[BZFD_TransmissionProcessedWorkflow]) 
		VALUES (
		(SELECT [BZ_FlowOperations].[BZFO_Id] FROM [Fluentis].[BZ_FlowOperations] WHERE [BZ_FlowOperations].[BZFO_Code]=@flowOpName), 
		(SELECT [BZ_DocumentTypes].[BZDT_Id] FROM [Fluentis].[BZ_DocumentTypes] WHERE [BZ_DocumentTypes].[BZDT_Code]=@docTypeName), 	
		@flowDocName, 
		@flowDocDesc, 
		@flowDocFilePart, 
		(SELECT [BZ_Parsers].[BZPR_Id] FROM [Fluentis].[BZ_Parsers] WHERE [BZ_Parsers].[BZPR_Code]=@parserName),
		(SELECT [BZ_ParserObjects].[BZPO_Id] FROM [Fluentis].[BZ_ParserObjects] WHERE [BZ_ParserObjects].[BZPO_Code]=@parserObjName),
		NULL, 
		NULL)
	END
	
	
	-- Connector
	IF ((SELECT COUNT(*) FROM [Fluentis].[BZ_Connectors] WHERE [BZ_Connectors].[BZCN_Code]=@connName) = 0 AND @setupConnector = 1)
	BEGIN
		INSERT INTO [Fluentis].[BZ_Connectors] (
		[BZ_Connectors].[BZCN_Code], 
		[BZ_Connectors].[BZCN_Description], 
		[BZ_Connectors].[BZCN_ConnectorType_BZCT_Id], 
		[BZ_Connectors].[BZCN_Configuration], 
		[BZ_Connectors].[BZCN_Partner_BZP_Id], 
		[BZ_Connectors].[BZCN_Flow_BZF_Id], 
		[BZ_Connectors].[BZCN_FlowOperation_BZFO_Id], 
		[BZ_Connectors].[BZCN_FlowDocument_BZFD_Id],
		[BZ_Connectors].[BZCN_LastModified],
		[BZ_Connectors].[BZCN_UseExtendedSrv],
		[BZ_Connectors].[BZCN_ItemNature]) VALUES (	
		@connName, 
		@connDesc, 
		(SELECT [BZ_ConnectorTypes].[BZCT_Id] FROM [Fluentis].[BZ_ConnectorTypes] WHERE [BZ_ConnectorTypes].[BZCT_Code]=@connTypeName), 
		@connConfig, 
		(SELECT [BZ_Partners].[BZP_Id] FROM [Fluentis].[BZ_Partners] WHERE [BZ_Partners].[BZP_Code]=@partnerName),
		(SELECT [BZ_Flows].[BZF_Id] FROM [Fluentis].[BZ_Flows] WHERE [BZ_Flows].[BZF_Code]=@flowName), 
		(SELECT [BZ_FlowOperations].[BZFO_Id] FROM [Fluentis].[BZ_FlowOperations] WHERE [BZ_FlowOperations].[BZFO_Code]=@flowOpName), 
		(SELECT [BZ_FlowDocuments].[BZFD_Id] FROM [Fluentis].[BZ_FlowDocuments] WHERE [BZ_FlowDocuments].[BZFD_Code]=@flowDocName),
		GETDATE(),
		1,
		2)
	END
	
	PRINT 'Data created' 
	
END -- removeOnly data

COMMIT TRANSACTION

