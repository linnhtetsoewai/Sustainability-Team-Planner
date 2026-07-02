// Sustainability Team Planner - auto-generated database file
// Last saved: 2026-07-02T19:52:52.726Z
// Do not edit manually unless you know what you are doing.
window.__DB__ = {
  "settings": {
    "blendedRate": 350,
    "currency": "AED",
    "weeksInPeriod": 4
  },
  "team": [
    {
      "id": "t_mrunmai",
      "name": "Mrunmai Vaidya",
      "role": "Sustainability Lead",
      "email": "Mrunmai.Vaidya@ghd.com",
      "weeklyCapacity": 40,
      "skills": "Estidama; LEED; Fitwel; Reporting; Client engagement",
      "notes": "",
      "hourlyRate": 450
    },
    {
      "id": "t_areesha",
      "name": "Areesha Rashid",
      "role": "Sustainability Consultant",
      "email": "Areesha.Rashid@ghd.com",
      "weeklyCapacity": 40,
      "skills": "LEED; Estidama; Fitwel; Evidence packs;",
      "notes": "",
      "hourlyRate": 350
    },
    {
      "id": "t_linn",
      "name": "Linn Htet Soe Wai",
      "role": "Computational Designer / Sustainability",
      "email": "LinnHtetSoe.Wai@ghd.com",
      "weeklyCapacity": 40,
      "skills": "Rhino/GH; CFD; UTCI",
      "notes": "Simulation & computational tasks",
      "hourlyRate": 300
    }
  ],
  "projects": [
    {
      "id": "p_ta13",
      "code": "12654321",
      "name": "TA13 Development",
      "shortName": "Fahid TA13",
      "client": "Aldar Properties",
      "pm": "Ibrahim",
      "sustainabilityLead": "t_mrunmai",
      "startDate": "2026-01-15",
      "endDate": "2026-12-20",
      "allocatedHours": 620,
      "allocatedBudget": 279000,
      "status": "In Progress",
      "notes": "Estidama PBRS + LEED + Fitwel certification"
    },
    {
      "id": "p_canopies",
      "code": "12698765",
      "name": "The Canopies (Wussom Bay Residences)",
      "shortName": "The Canopies",
      "client": "Aldar Properties",
      "pm": "Saleh",
      "sustainabilityLead": "t_areesha",
      "startDate": "2026-02-01",
      "endDate": "2026-10-30",
      "allocatedHours": 480,
      "allocatedBudget": 168000,
      "status": "In Progress",
      "notes": "Focus on outdoor thermal comfort & Estidama PCRS"
    },
    {
      "id": "p_bag",
      "code": "12687994",
      "name": "BAG Masterplan",
      "shortName": "BAG",
      "client": "Aldar Properties",
      "pm": "Duua",
      "sustainabilityLead": "t_mrunmai",
      "startDate": "2026-03-01",
      "endDate": "2027-02-28",
      "allocatedHours": 800,
      "allocatedBudget": 360000,
      "status": "In Progress",
      "notes": "Estidama + Fitwel evidence coordination"
    },
    {
      "id": "p_noma",
      "code": "12676543",
      "name": "NoMA Sustainability Advisory",
      "shortName": "NoMA",
      "client": "Aldar Properties",
      "pm": "",
      "sustainabilityLead": "t_mrunmai",
      "startDate": "2026-05-01",
      "endDate": "2026-09-30",
      "allocatedHours": 240,
      "allocatedBudget": 108000,
      "status": "Not Started",
      "notes": "Advisory + LEED pre-assessment"
    }
  ],
  "milestones": [
    {
      "id": "m_ta13_sd_100",
      "projectId": "p_ta13",
      "stageName": "Detailed Design",
      "submissionLabel": "100%",
      "kickoffDate": "2026-07-10",
      "submissionDate": "2026-07-10",
      "status": "Planned",
      "ownerId": "t_mrunmai",
      "notes": "Full schematic issue"
    },
    {
      "id": "m_canopies_concept_100",
      "projectId": "p_canopies",
      "stageName": "Schematic Design",
      "submissionLabel": "50%",
      "kickoffDate": "2026-04-05",
      "submissionDate": "2026-07-24",
      "status": "Planned",
      "ownerId": "t_mrunmai",
      "notes": "Concept issue"
    },
    {
      "id": "m_bag_concept_100",
      "projectId": "p_bag",
      "stageName": "Concept Design",
      "submissionLabel": "100%",
      "kickoffDate": "2026-03-25",
      "submissionDate": "2026-03-24",
      "status": "Approved",
      "ownerId": "t_areesha",
      "notes": "Concept agreed"
    },
    {
      "id": "m_noma_concept_100",
      "projectId": "p_noma",
      "stageName": "Schematic Design",
      "submissionLabel": "50%",
      "kickoffDate": "2026-07-01",
      "submissionDate": "",
      "status": "Planned",
      "ownerId": "t_mrunmai",
      "notes": "Client issue"
    }
  ],
  "tasks": [
    {
      "id": "4b9me9xu",
      "projectId": "p_ta13",
      "name": "Reviewing all Submission Package",
      "assigneeId": "t_linn",
      "allocatedHours": 40,
      "actualHours": 0,
      "startDate": "2026-07-01",
      "dueDate": "2026-07-07",
      "status": "In Progress",
      "priority": "High",
      "notes": "",
      "taskType": "project",
      "dailyAllocations": [
        {
          "date": "2026-07-01",
          "hours": 8
        },
        {
          "date": "2026-07-02",
          "hours": 8
        },
        {
          "date": "2026-07-03",
          "hours": 8
        },
        {
          "date": "2026-07-06",
          "hours": 8
        },
        {
          "date": "2026-07-07",
          "hours": 8
        }
      ]
    },
    {
      "id": "flr2rg1t",
      "projectId": "p_ta13",
      "name": "Reviewing all LEED/Estidam/Fitwel Submission Package",
      "assigneeId": "t_areesha",
      "allocatedHours": 40,
      "actualHours": 5,
      "startDate": "2026-07-01",
      "dueDate": "2026-07-07",
      "status": "In Progress",
      "priority": "High",
      "notes": "",
      "taskType": "project",
      "dailyAllocations": [
        {
          "date": "2026-07-01",
          "hours": 8
        },
        {
          "date": "2026-07-02",
          "hours": 8
        },
        {
          "date": "2026-07-03",
          "hours": 8
        },
        {
          "date": "2026-07-06",
          "hours": 8
        },
        {
          "date": "2026-07-07",
          "hours": 8
        }
      ]
    },
    {
      "id": "t2ppdrj0",
      "taskType": "project",
      "projectId": "p_ta13",
      "name": "Shading Analysis",
      "assigneeId": "t_linn",
      "allocatedHours": 8,
      "actualHours": 0,
      "startDate": "2026-07-08",
      "dueDate": "2026-07-08",
      "status": "Not Started",
      "priority": "Medium",
      "notes": "Re-running shading analysis with updated landscape plan",
      "dailyAllocations": [
        {
          "date": "2026-07-08",
          "hours": 8
        }
      ]
    },
    {
      "id": "ochcqmt3",
      "taskType": "project",
      "projectId": "p_ta13",
      "name": "Updating DD Report",
      "assigneeId": "t_linn",
      "allocatedHours": 24,
      "actualHours": 0,
      "startDate": "2026-07-08",
      "dueDate": "2026-07-10",
      "status": "Not Started",
      "priority": "Medium",
      "notes": "Thermal Comfort Sections",
      "dailyAllocations": [
        {
          "date": "2026-07-08",
          "hours": 8
        },
        {
          "date": "2026-07-09",
          "hours": 8
        },
        {
          "date": "2026-07-10",
          "hours": 8
        }
      ]
    },
    {
      "id": "t854nos1",
      "taskType": "project",
      "projectId": "p_ta13",
      "name": "Updating DD Report",
      "assigneeId": "t_areesha",
      "allocatedHours": 24,
      "actualHours": 0,
      "startDate": "2026-07-08",
      "dueDate": "2026-07-10",
      "status": "Not Started",
      "priority": "Medium",
      "notes": "Remaining Sections",
      "dailyAllocations": [
        {
          "date": "2026-07-08",
          "hours": 8
        },
        {
          "date": "2026-07-09",
          "hours": 8
        },
        {
          "date": "2026-07-10",
          "hours": 8
        }
      ]
    },
    {
      "id": "acz2kxkn",
      "taskType": "project",
      "projectId": "p_bag",
      "name": "Stakeholder Coordination",
      "assigneeId": "t_mrunmai",
      "allocatedHours": 48,
      "actualHours": 0,
      "startDate": "2026-07-06",
      "dueDate": "2026-07-13",
      "status": "In Progress",
      "priority": "Medium",
      "notes": "",
      "dailyAllocations": [
        {
          "date": "2026-07-06",
          "hours": 8
        },
        {
          "date": "2026-07-07",
          "hours": 8
        },
        {
          "date": "2026-07-08",
          "hours": 8
        },
        {
          "date": "2026-07-09",
          "hours": 8
        },
        {
          "date": "2026-07-10",
          "hours": 8
        },
        {
          "date": "2026-07-13",
          "hours": 8
        }
      ]
    }
  ],
  "timesheet": [
    {
      "id": "c1n8sve9",
      "weekEnding": "2026-07-03",
      "personId": "t_areesha",
      "projectId": "p_ta13",
      "taskId": "flr2rg1t",
      "hoursLogged": 5,
      "billable": "Y",
      "notes": ""
    },
    {
      "id": "yyrd09v0",
      "weekEnding": "2026-07-03",
      "personId": "t_linn",
      "projectId": "p_ta13",
      "taskId": "4b9me9xu",
      "hoursLogged": 5,
      "billable": "Y",
      "notes": ""
    }
  ],
  "notes": [
    {
      "id": "n_01",
      "dateCreated": "2026-06-10",
      "ownerId": "t_mrunmai",
      "category": "Reminder",
      "subject": "Estidama submission deadline — BAG",
      "details": "Prepare Estidama Pearl 2 submission pack for BAG masterplan.",
      "followUpDate": "2026-07-15",
      "status": "Open",
      "priority": "High"
    },
    {
      "id": "n_02",
      "dateCreated": "2026-06-10",
      "ownerId": "t_areesha",
      "category": "Action Item",
      "subject": "Fitwel evidence request to MEP — NoMA",
      "details": "Send formal evidence request to MEP discipline lead.",
      "followUpDate": "2026-06-25",
      "status": "In Progress",
      "priority": "High"
    },
    {
      "id": "n_03",
      "dateCreated": "2026-06-10",
      "ownerId": "t_linn",
      "category": "Action Item",
      "subject": "UTCI report peer review — The Canopies",
      "details": "Book 1h slot with Mrunmai to peer review before client issue.",
      "followUpDate": "2026-06-28",
      "status": "Open",
      "priority": "Medium"
    },
    {
      "id": "n_04",
      "dateCreated": "2026-06-10",
      "ownerId": "t_mrunmai",
      "category": "Risk",
      "subject": "LEED credit interpretation — TA13",
      "details": "Ambiguity on LEED v4 EQc7 daylight credit — awaiting USGBC CIR response.",
      "followUpDate": "2026-06-20",
      "status": "Open",
      "priority": "Medium"
    },
    {
      "id": "n_05",
      "dateCreated": "2026-06-10",
      "ownerId": "t_mrunmai",
      "category": "Reminder",
      "subject": "NoMA workshop agenda",
      "details": "Draft workshop agenda and pre-read for strategy session.",
      "followUpDate": "2026-07-05",
      "status": "Open",
      "priority": "High"
    }
  ]
};
