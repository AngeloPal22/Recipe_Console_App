# File: TIMELINE.md

## Project Timeline Overview

Total Development Duration: **15 Days**

The project is divided into four main phases:
1. Planning Phase
2. Development Phase
3. Testing Phase
4. Documentation Phase

Each phase includes defined tasks, estimated timelines, and clear deliverables.

---

## Development Phases

### 1. Planning Phase (Days 1–2)

**Objective:**  
Define project scope, requirements, and technical design.

**Tasks:**
- Define project requirements and scope
- Create project proposal
- Design system architecture
- Define data models and JSON structure
- Plan folder and file structure

**Deliverables:**
- `PROJECT_PROPOSAL.md`
- `SYSTEM_DESIGN.md`
- `TECHNICAL_SPECS.md`
- Initial folder structure plan

---

### 2. Development Phase (Days 3–11)

Development is broken down into feature-based milestones.

---

#### Milestone 1: Project Setup & Core Structure (Days 3–4)

**Tasks:**
- Initialize Node.js and TypeScript project
- Configure `tsconfig.json`
- Install required npm packages
- Create base folder structure
- Implement basic application entry point

**Estimated Time:** 2 days  
**Deliverables:**
- Working TypeScript project
- Compilable and runnable console app

---

#### Milestone 2: Data Model & Storage (Days 5–6)

**Tasks:**
- Define Recipe interface and model
- Implement JSON file read/write logic
- Handle file creation if missing
- Implement basic error handling for file operations

**Estimated Time:** 2 days  
**Deliverables:**
- Persistent recipe storage using JSON
- Working file storage module

---

#### Milestone 3: Core Recipe Features (Days 7–9)

**Tasks:**
- Implement Add Recipe functionality
- Implement Edit Recipe functionality
- Implement Delete Recipe functionality
- Implement View Recipes functionality
- Validate user input

**Estimated Time:** 3 days  
**Deliverables:**
- Fully functional CRUD operations
- Recipe management via console

---

#### Milestone 4: Sharing & UI Improvements (Days 10–11)

**Tasks:**
- Implement Share Recipe feature
- Improve console menu navigation
- Format output for readability
- Handle edge cases and invalid inputs

**Estimated Time:** 2 days  
**Deliverables:**
- Enhanced user experience
- Shareable recipe output

---

### 3. Testing Phase (Days 12–13)

**Objective:**  
Ensure application stability and correctness.

**Tasks:**
- Manual testing of all features
- Test edge cases (empty inputs, invalid IDs)
- Verify data persistence
- Fix identified bugs

**Estimated Time:** 2 days  
**Deliverables:**
- Bug-free console application
- Verified feature behavior

---

### 4. Documentation Phase (Days 14–15)

**Objective:**  
Prepare final documentation and project polish.

**Tasks:**
- Write `README.md`
- Update technical documentation
- Add usage instructions
- Final code cleanup and formatting

**Estimated Time:** 2 days  
**Deliverables:**
- Complete project documentation
- Submission-ready project

---

## Task Breakdown by Feature

| Feature        | Tasks Included                                  | Estimated Time |
|---------------|--------------------------------------------------|----------------|
| Add Recipe     | Input handling, validation, save to JSON        | 1 day          |
| Edit Recipe    | Recipe lookup, update logic, persistence        | 1 day          |
| Delete Recipe  | Confirmation, removal, save changes             | 0.5 day        |
| View Recipes   | List display, detail view formatting            | 0.5 day        |
| Export/Import   | Export/Import formatting (JSON)                   | 0.5 day        |

---

## Milestones & Checkpoints

### Milestone Checkpoints

| Day | Milestone | Deliverable |
|----|----------|------------|
| 2  | Planning Complete | Design and spec documents |
| 4  | Project Setup | Runnable TypeScript app |
| 6  | Storage Ready | JSON persistence working |
| 9  | Core Features | CRUD operations complete |
| 11 | Feature Complete | UI and sharing done |
| 13 | Testing Done | Stable application |
| 15 | Final Delivery | Full documentation |

---

## Timeline Summary

- Total duration: **15 days**
- Scope: Beginner-friendly yet structured
- Outcome: Fully functional TypeScript console application
- Ready for extension or migration to advanced systems

---
