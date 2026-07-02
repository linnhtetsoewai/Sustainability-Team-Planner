// GHD Sustainability Planner — auto-generated database file
// Last saved: 2026-07-02T08:56:01.000Z
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
      "notes": ""
    },
    {
      "id": "t_areesha",
      "name": "Areesha Rashid",
      "role": "Sustainability Consultant",
      "email": "Areesha.Rashid@ghd.com",
      "weeklyCapacity": 40,
      "skills": "LEED; Estidama; Fitwel; Evidence packs;",
      "notes": ""
    },
    {
      "id": "t_linn",
      "name": "Linn Htet Soe Wai",
      "role": "Computational Designer / Sustainability",
      "email": "LinnHtetSoe.Wai@ghd.com",
      "weeklyCapacity": 40,
      "skills": "Rhino/GH; CFD; UTCI",
      "notes": "Simulation & computational tasks"
    }
  ],
  "projects": [
    {
      "id": "p_ta13",
      "code": "12654321",
      "name": "TA13 Development",
      "shortName": "Fahid TA13",
      "client": "Aldar Properties",
      "pm": "J. Pardesi",
      "sustainabilityLead": "t_mrunmai",
      "startDate": "2026-01-15",
      "endDate": "2026-12-20",
      "allocatedHours": 620,
      "allocatedBudget": 217000,
      "status": "In Progress",
      "notes": "Estidama PBRS + LEED + Fitwel certification"
    },
    {
      "id": "p_canopies",
      "code": "12698765",
      "name": "The Canopies (Wussom Bay Residences)",
      "shortName": "The Canopies",
      "client": "Wussom Bay Developments",
      "pm": "N. AlHussain",
      "sustainabilityLead": "t_mrunmai",
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
      "client": "Modon",
      "pm": "J. Pardesi",
      "sustainabilityLead": "t_areesha",
      "startDate": "2026-03-01",
      "endDate": "2027-02-28",
      "allocatedHours": 800,
      "allocatedBudget": 280000,
      "status": "In Progress",
      "notes": "Estidama + Fitwel evidence coordination"
    },
    {
      "id": "p_noma",
      "code": "12676543",
      "name": "NoMA Sustainability Advisory",
      "shortName": "NoMA",
      "client": "NoMA Holdings",
      "pm": "M.T. Jawed",
      "sustainabilityLead": "t_mrunmai",
      "startDate": "2026-05-01",
      "endDate": "2026-09-30",
      "allocatedHours": 240,
      "allocatedBudget": 84000,
      "status": "Not Started",
      "notes": "Advisory + LEED pre-assessment"
    }
  ],
  "tasks": [
    {
      "id": "task_06",
      "projectId": "p_canopies",
      "name": "Outdoor thermal comfort (UTCI) study",
      "assigneeId": "t_linn",
      "allocatedHours": 80,
      "actualHours": 55,
      "startDate": "2026-02-10",
      "dueDate": "2026-06-30",
      "status": "In Progress",
      "priority": "High",
      "notes": "Rhino + ENVI-met, 3 scenarios"
    },
    {
      "id": "task_07",
      "projectId": "p_canopies",
      "name": "Wind CFD analysis",
      "assigneeId": "t_linn",
      "allocatedHours": 56,
      "actualHours": 28,
      "startDate": "2026-03-15",
      "dueDate": "2026-07-15",
      "status": "In Progress",
      "priority": "High",
      "notes": "Pedestrian wind comfort — Lawson"
    },
    {
      "id": "task_08",
      "projectId": "p_canopies",
      "name": "Estidama PCRS credit LC-R4 evidence",
      "assigneeId": "t_areesha",
      "allocatedHours": 32,
      "actualHours": 26,
      "startDate": "2026-03-01",
      "dueDate": "2026-06-01",
      "status": "In Progress",
      "priority": "Medium",
      "notes": "Ecological network evidence pack"
    },
    {
      "id": "task_09",
      "projectId": "p_canopies",
      "name": "Facade shading study",
      "assigneeId": "t_linn",
      "allocatedHours": 40,
      "actualHours": 12,
      "startDate": "2026-05-01",
      "dueDate": "2026-08-30",
      "status": "In Progress",
      "priority": "Medium",
      "notes": "LSG / SHGC optimisation"
    },
    {
      "id": "task_10",
      "projectId": "p_canopies",
      "name": "Peer review of sustainability BOD",
      "assigneeId": "t_mrunmai",
      "allocatedHours": 24,
      "actualHours": 24,
      "startDate": "2026-02-15",
      "dueDate": "2026-03-30",
      "status": "Completed",
      "priority": "High",
      "notes": "BOD signed off by client"
    },
    {
      "id": "task_11",
      "projectId": "p_bag",
      "name": "Estidama tracker maintenance",
      "assigneeId": "t_areesha",
      "allocatedHours": 60,
      "actualHours": 22,
      "startDate": "2026-03-05",
      "dueDate": "2027-01-30",
      "status": "In Progress",
      "priority": "Medium",
      "notes": "Monthly cadence"
    },
    {
      "id": "task_12",
      "projectId": "p_bag",
      "name": "Fitwel evidence coordination",
      "assigneeId": "t_areesha",
      "allocatedHours": 72,
      "actualHours": 30,
      "startDate": "2026-03-15",
      "dueDate": "2026-11-30",
      "status": "In Progress",
      "priority": "High",
      "notes": "Coordination with client H&S team"
    },
    {
      "id": "task_13",
      "projectId": "p_bag",
      "name": "MEP discipline requests coordination",
      "assigneeId": "t_mrunmai",
      "allocatedHours": 48,
      "actualHours": 16,
      "startDate": "2026-04-01",
      "dueDate": "2026-12-15",
      "status": "In Progress",
      "priority": "Medium",
      "notes": "Cross-discipline sustainability RFIs"
    },
    {
      "id": "task_14",
      "projectId": "p_bag",
      "name": "Daylight & views credit",
      "assigneeId": "t_linn",
      "allocatedHours": 40,
      "actualHours": 8,
      "startDate": "2026-06-01",
      "dueDate": "2026-10-15",
      "status": "In Progress",
      "priority": "Medium",
      "notes": "Rhino model + ClimateStudio"
    },
    {
      "id": "task_15",
      "projectId": "p_bag",
      "name": "Sustainability report drafting",
      "assigneeId": "t_mrunmai",
      "allocatedHours": 80,
      "actualHours": 0,
      "startDate": "2026-10-01",
      "dueDate": "2027-02-20",
      "status": "Not Started",
      "priority": "Medium",
      "notes": "To start at DD stage"
    },
    {
      "id": "task_16",
      "projectId": "p_noma",
      "name": "Strategy workshop prep",
      "assigneeId": "t_mrunmai",
      "allocatedHours": 32,
      "actualHours": 0,
      "startDate": "2026-05-05",
      "dueDate": "2026-05-25",
      "status": "Not Started",
      "priority": "High",
      "notes": "Half-day workshop with client"
    },
    {
      "id": "task_17",
      "projectId": "p_noma",
      "name": "Sustainability benchmarking study",
      "assigneeId": "t_areesha",
      "allocatedHours": 40,
      "actualHours": 0,
      "startDate": "2026-05-15",
      "dueDate": "2026-06-30",
      "status": "Not Started",
      "priority": "Medium",
      "notes": "3 peer developments"
    },
    {
      "id": "task_18",
      "projectId": "p_noma",
      "name": "Client presentation",
      "assigneeId": "t_mrunmai",
      "allocatedHours": 16,
      "actualHours": 0,
      "startDate": "2026-06-10",
      "dueDate": "2026-06-20",
      "status": "Not Started",
      "priority": "High",
      "notes": "Deck + narrative"
    },
    {
      "id": "task_19",
      "projectId": "p_noma",
      "name": "LEED pre-assessment",
      "assigneeId": "t_areesha",
      "allocatedHours": 48,
      "actualHours": 0,
      "startDate": "2026-06-15",
      "dueDate": "2026-08-15",
      "status": "Not Started",
      "priority": "Medium",
      "notes": "LEED BD+C Core & Shell v4.1"
    },
    {
      "id": "task_20",
      "projectId": "p_noma",
      "name": "Carbon footprint estimate",
      "assigneeId": "t_linn",
      "allocatedHours": 32,
      "actualHours": 0,
      "startDate": "2026-07-01",
      "dueDate": "2026-08-30",
      "status": "Not Started",
      "priority": "Medium",
      "notes": "OneClick LCA — high level"
    },
    {
      "id": "4b9me9xu",
      "projectId": "p_ta13",
      "name": "Reviewing all the Estidama Package",
      "assigneeId": "t_linn",
      "allocatedHours": 16,
      "actualHours": 8,
      "startDate": "2026-07-01",
      "dueDate": "2026-07-03",
      "status": "In Progress",
      "priority": "High",
      "notes": ""
    },
    {
      "id": "flr2rg1t",
      "projectId": "p_ta13",
      "name": "Reviewing all LEED Submission Package",
      "assigneeId": "t_areesha",
      "allocatedHours": 24,
      "actualHours": 4,
      "startDate": "2026-07-01",
      "dueDate": "2026-07-03",
      "status": "In Progress",
      "priority": "High",
      "notes": ""
    }
  ],
  "timesheet": [
    {
      "id": "ts_01",
      "weekEnding": "2026-06-05",
      "personId": "t_linn",
      "projectId": "p_canopies",
      "taskId": "task_06",
      "hoursLogged": 12,
      "billable": "Y",
      "notes": "UTCI baseline runs"
    },
    {
      "id": "ts_02",
      "weekEnding": "2026-06-05",
      "personId": "t_areesha",
      "projectId": "p_bag",
      "taskId": "task_11",
      "hoursLogged": 6,
      "billable": "Y",
      "notes": "Estidama tracker update"
    },
    {
      "id": "ts_04",
      "weekEnding": "2026-06-19",
      "personId": "t_areesha",
      "projectId": "p_bag",
      "taskId": "task_12",
      "hoursLogged": 8,
      "billable": "Y",
      "notes": "Fitwel client call"
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
