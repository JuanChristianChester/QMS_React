-- Create tables
CREATE TABLE tblPDCAStage (
	PDCAID int,
	PDCAStage varchar(255),
	PRIMARY KEY (PDCAID)
);

CREATE TABLE tblPDCASection (
	PDCASectionID int, 
	PDCAID int, 
	Section varchar(255),
	PRIMARY KEY (PDCASectionID),
	FOREIGN KEY (PDCAID) REFERENCES tblPDCAStage(PDCAID)
);

CREATE TABLE tblISO9001Pages (
	PageNumber int,
	Link varchar(255),
	PRIMARY KEY (PageNumber)
);

CREATE TABLE tblQMSRequirements (
	QMSID int,
	PageID int,
	QMSSection varchar(255),
	Description varchar(255),
	SectionDescription varchar(255),
	PRIMARY KEY (QMSID),
	FOREIGN KEY (PageID) REFERENCES tblISO9001Pages(PageNumber)
);

CREATE TABLE tblAuditFeedback (
	AuditID int,
	AuditDetails varchar(255),
	FeedbackResponse varchar(255),
	PRIMARY KEY (AuditID)
);

 CREATE TABLE tblQMSJoinFeedback (
	AuditID int,
	QMSID int,
	PRIMARY KEY (AuditID, QMSID),
	FOREIGN KEY (AuditID) REFERENCES tblAuditFeedback(AuditID),
	FOREIGN KEY (QMSID) REFERENCES tblQMSRequirements(QMSID)
 );

CREATE TABLE tblQMSJoinPDCA (
	PDCASectionID int,
	QMSID int,
	PRIMARY KEY (PDCASectionID, QMSID),
	FOREIGN KEY (PDCASectionID) REFERENCES tblPDCASection(PDCASectionID),
	FOREIGN KEY (QMSID) REFERENCES tblQMSRequirements(QMSID)
);

CREATE TABLE tblExternalLinks (
	LinkID int,
	Link varchar(255),
	PRIMARY KEY (LinkID)
);

CREATE TABLE tblEvidence (
	PDCASectionID int,
	EvidenceID int,
	EvidenceDate date,
	Body varchar(255),
	PRIMARY KEY (EvidenceID),
	FOREIGN KEY (PDCASectionID) REFERENCES tblPDCASection(PDCASectionID)
);

CREATE TABLE tblEvidenceLinkJoin (
	EvidenceID int,
	LinkID int,
	PRIMARY KEY (EvidenceID, LinkID),
	FOREIGN KEY (EvidenceID) REFERENCES tblEvidence(EvidenceID),
	FOREIGN KEY (LinkID) REFERENCES tblExternalLinks(LinkID)
);

-- Insert data

INSERT INTO tblPDCAStage (PDCAID, PDCAStage) VALUES (1, 'Plan');
INSERT INTO tblPDCAStage (PDCAID, PDCAStage) VALUES (2, 'Do');
INSERT INTO tblPDCAStage (PDCAID, PDCAStage) VALUES (3, 'Check');
INSERT INTO tblPDCAStage (PDCAID, PDCAStage) VALUES (4, 'Act');

INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (1, 1, 'Define the context of the organization');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (2, 1, 'Define the scope, objectives and policies of the organization');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (3, 1, 'Determine the processes in the organization');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (4, 1, 'Determine the sequence of the processes');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (5, 1, 'Define people or remits who take process ownership and accountability');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (6, 1, 'Define the need for documented information\nneed for\ndocumented\ninformation');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (7, 1, 'Define the interfaces, risks and activities within the process\ninterfaces, risks\nand activities\nwithin the\nprocess');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (8, 1, 'Define the monitoring and measurement requirements');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (9, 2, 'Implement');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (10, 2, 'Define the resources needed');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (11, 3, 'Verify the process against its planned objectives');
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (12, 4, 'Improvement');


-- insert data into tblISO9001Pages
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (1, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en');
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (2, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en:clause:4.4');
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (3, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en:clause:4.4.1');
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (4, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en:clause:4.4.2');
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (5, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en:clause:4.4.3');
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (6, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en:clause:4.4.4');
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (7, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en:clause:4.4.5');
INSERT INTO tblISO9001Pages (PageNumber, Link) VALUES (8, 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en:clause:4.4.6');

-- insert data into tblQMSRequirements
INSERT INTO tblQMSRequirements (QMSID, PageID, QMSSection, Description, SectionDescription) VALUES (1, 4, '4.4', 'Quality Management System and its processes', 'The organization shall establish, implement, maintain and continually improve a quality management system, including the processes needed and their interactions, in accordance with the requirements of this International Standard.');
INSERT INTO tblQMSRequirements (QMSID, PageID, QMSSection, Description, SectionDescription) VALUES (2, 4, '4.4', 'Quality Management System and its processes', 'The organization shall determine the processes needed for the quality management system and their application throughout the organization, and shall:');
INSERT INTO tblQMSRequirements (QMSID, PageID, QMSSection, Description, SectionDescription) VALUES (3, 4, '4.4', 'Quality Management System and its processes', 'a) determine the inputs required and the outputs expected from these processes;');

/* add some data to tblAuditFeedback */
INSERT INTO tblAuditFeedback (AuditID, AuditDetails) VALUES (1, 'Widget Loose');