-- Create tables
CREATE TABLE tblPDCAStage (
	PDCAID int,
	PDCAStage varchar(255),
	PRIMARY KEY (PDCAID)
)

CREATE TABLE tblPDCASection (
	PDCASectionID int, 
	PDCAID int, 
	Section varchar(255),
	PRIMARY KEY (PDCASectionID),
	FOREIGN KEY (PDCAID) REFERENCES tblPDCAStage(PDCAID)
)

CREATE TABLE tblISO9001Pages (
	PageNumber int,
	Link varchar(255),
	PRIMARY KEY (PageNumber)
)

CREATE TABLE tblQMSRequirements (
	QMSID int,
	PageID int,
	QMSSection varchar(255),
	Description varchar(255),
	SectionDescription varchar(255),
	PRIMARY KEY (QMSID),
	FOREIGN KEY (PageID) REFERENCES tblISO9001Pages(PageNumber)
)

CREATE TABLE tblAuditFeedback (
	AuditID int,
	AuditDetails varchar(255),
	FeedbackResponse varchar(255),
	PRIMARY KEY (AuditID)
)

 CREATE TABLE tblQMSJoinFeedback (
	AuditID int,
	QMSID int,
	PRIMARY KEY (AuditID, QMSID),
	FOREIGN KEY (AuditID) REFERENCES tblAuditFeedback(AuditID),
	FOREIGN KEY (QMSID) REFERENCES tblQMSRequirements(QMSID)
 )

CREATE TABLE tblQMSJoinPDCA (
	PDCASectionID int,
	QMSID int,
	PRIMARY KEY (PDCASectionID, QMSID),
	FOREIGN KEY (PDCASectionID) REFERENCES tblPDCASection(PDCASectionID),
	FOREIGN KEY (QMSID) REFERENCES tblQMSRequirements(QMSID)
)

CREATE TABLE tblExternalLinks (
	LinkID int,
	Link varchar(255),
	PRIMARY KEY (LinkID)
)

CREATE TABLE tblEvidence (
	PDCASectionID int,
	EvidenceID int,
	EvidenceDate date,
	Body varchar(255),
	PRIMARY KEY (EvidenceID),
	FOREIGN KEY (PDCASectionID) REFERENCES tblPDCASection(PDCASectionID)
)

CREATE TABLE tblEvidenceLinkJoin (
	EvidenceID int,
	LinkID int,
	PRIMARY KEY (EvidenceID, LinkID),
	FOREIGN KEY (EvidenceID) REFERENCES tblEvidence(EvidenceID),
	FOREIGN KEY (LinkID) REFERENCES tblExternalLinks(LinkID)
)

-- Insert data

-- Insert data into tblPDCAStage
INSERT INTO tblPDCAStage (PDCAID, PDCAStage)
VALUES
    (1, 'Plan'),
    (2, 'Do'),
    (3, 'Check'),
    (4, 'Act')

-- Insert data into tblPDCASection
INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section)
VALUES
    (1, 1, 'Plan Section 1'),
    (2, 1, 'Plan Section 2'),
    (3, 2, 'Do Section 1'),
    (4, 2, 'Do Section 2'),
    (5, 3, 'Check Section 1'),
    (6, 4, 'Act Section 1')

-- Insert data into tblISO9001Pages
INSERT INTO tblISO9001Pages (PageNumber, Link)
VALUES
    (101, 'https://example.com/page1'),
    (102, 'https://example.com/page2'),
    (103, 'https://example.com/page3')

-- Insert data into tblQMSRequirements
INSERT INTO tblQMSRequirements (QMSID, PageID, QMSSection, Description, SectionDescription)
VALUES
    (1, 101, 'Section A', 'Requirement 1', 'Description for Requirement 1'),
    (2, 101, 'Section B', 'Requirement 2', 'Description for Requirement 2'),
    (3, 102, 'Section C', 'Requirement 3', 'Description for Requirement 3'),
    (4, 103, 'Section D', 'Requirement 4', 'Description for Requirement 4')

-- Insert data into tblAuditFeedback
INSERT INTO tblAuditFeedback (AuditID, AuditDetails, FeedbackResponse)
VALUES
    (101, 'Audit 1 Details', 'Feedback for Audit 1'),
    (102, 'Audit 2 Details', 'Feedback for Audit 2')

-- Insert data into tblQMSJoinFeedback
INSERT INTO tblQMSJoinFeedback (AuditID, QMSID)
VALUES
    (101, 1),
    (101, 2),
    (102, 3),
    (102, 4)

-- Insert data into tblQMSJoinPDCA
INSERT INTO tblQMSJoinPDCA (PDCASectionID, QMSID)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 1),
    (6, 2)

-- Insert data into tblExternalLinks
INSERT INTO tblExternalLinks (LinkID, Link)
VALUES
    (1, 'https://external-link-1.com'),
    (2, 'https://external-link-2.com')

-- Insert data into tblEvidence
INSERT INTO tblEvidence (PDCASectionID, EvidenceID, EvidenceDate, Body)
VALUES
    (1, 101, '2023-09-12', 'Evidence for PDCA Section 1'),
    (2, 102, '2023-09-13', 'Evidence for PDCA Section 2')

-- Insert data into tblEvidenceLinkJoin
INSERT INTO tblEvidenceLinkJoin (EvidenceID, LinkID)
VALUES
    (101, 1),
    (102, 2)