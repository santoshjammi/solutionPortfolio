Comprehensive HeptaCare Health Web App: Requirements & User Workflows
Version: 2.0

This document outlines the detailed requirements and user workflows for a modern healthcare web application, focusing on a lead-based management system. The system is designed for use by Business Development Executives (BDEs), doctors, hospital staff, and other key personnel.

1. User Roles and Access Control (RBAC)
The system will implement a granular Role-Based Access Control (RBAC) model to manage user permissions.

User Roles:

BDE

Senior BDE

Lead

Manager

Senior Manager

Regional Head

Director

Key Requirement: The system will use RBAC to assign leads, manage data visibility, and control access to features based on the user's role and location.

2. Lead Management System
The core of the application is a lead management system with a defined lead lifecycle.

Lead Statuses:
The following are the lead statuses a patient can progress through:

New Lead: An initial patient inquiry.

Cross-transfer: A lead transferred to another BDE or department.

DNP (Did Not Pursue): A lead that did not continue with the treatment process.

Follow-up: A lead requiring further contact.

In-Patient: The patient has been admitted to the hospital.

Out-Patient: The patient is receiving treatment without being admitted.

Other statuses as required.

Lead Assignment:
New leads will be assigned to BDEs in a round-robin fashion to ensure fair distribution.

3. Patient & Data Management
The system will manage patient information, with a focus on creating a single, comprehensive record.

Patient Record Creation & Verification:

For every new lead, the system must first verify if an existing patient record exists based on name and phone number.

A new patient record should only be created if no existing record is found.

Once a patient record is created, it will be the single source of truth for all future interactions, regardless of the lead status.

Patient Details:
The system will capture the following key details for each patient:

Demographics: Name, age, gender, phone number, address, email, location.

Medical Information: Exact disease, diagnostic reports, and other relevant medical documents.

Lead-Specific Patient Data:

A patient may have multiple leads, each tied to a specific disease. A new lead is created for every new disease.

If a patient returns with the same disease, the new lead will be created, but the system must link to the patient's existing history for that specific disease.

4. BDE Workflows and Patient Interactions
The BDE portal is the primary interface for managing leads and interacting with patients.

New Lead Page:
The BDE's new lead page will include:

A main section for remarks.

A dropdown or selection to mark the current status (e.g., New Lead, Follow-up).

Options to classify the lead as In-Patient or Out-Patient.

Documentation Upload:

The system will provide an option to upload all required documentation for the patient's disease.

Uploaded files must follow a standard naming format, such as DocumentName_PatientName_YYYYMMDD.pdf (e.g., CircumcisionOperationNotes_JohnDoe_20250926.pdf). The system must support various text formats.

Consent Forms:
A digital consent form must be generated and filled out for every patient, especially for in-patient treatments.

Notification System:

Notifications to doctors and hospitals will be triggered only when an In-Patient or Out-Patient action is performed by the BDE team. This prevents unnecessary alerts during the initial lead stages.

5. Other Actors and Integrations
The system will integrate with other key actors in the healthcare ecosystem.

Actors:

Doctors

Hospitals

Insurance Agencies

Integration & Data Sharing:

The system must facilitate secure, consent-based sharing of patient information with doctors and hospitals.

It should include a process for insurance policy verification and pre-authorization.

6. General System Requirements
Security:

End-to-end encryption for all data (in-transit and at-rest).

Compliance with healthcare regulations (e.g., HIPAA, GDPR).

System Notifications:

Automated notifications for all key events, such as a lead status change, a doctor's confirmation, or a document upload.