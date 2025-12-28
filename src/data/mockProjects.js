export const projects = [
    {
        id: 1,
        title: "Optimize Supply Chain Logistics",
        role: "Junior Supply Chain Analyst",
        company: "LogiTech Solutions",
        logoColor: "bg-blue-500",
        tags: ["Python", "Pandas", "Data Cleaning"],
        difficulty: "Intermediate",
        time: "4 Hours",
        xp: 500,
        description: "Analyze shipping data to identify bottlenecks in the North American distribution network.",
        steps: [
            {
                id: 1,
                title: "The Brief",
                status: "active", // active, completed, locked
                type: "brief",
                content: {
                    scenario: "LogiTech Solutions has seen a 15% increase in shipping delays in Q3. The VP of Operations wants to know why.",
                    roleDescription: "You are acting as a Junior Analyst. Your goal is to ingest the raw shipment logs, clean the data, and identify the top 3 delayed routes.",
                    deliverable: "A summary report identifying the root cause of delays."
                }
            },
            {
                id: 2,
                title: "Data Discovery",
                status: "locked",
                type: "discovery",
                content: {
                    instruction: "Download the raw dataset and inspect it for anomalies.",
                    resources: [
                        { name: "shipping_logs_raw.csv", type: "csv" },
                        { name: "warehouse_codes.pdf", type: "pdf" }
                    ],
                    quiz: {
                        question: "Which column in the dataset contains NULL values for 'delivery_date'?",
                        correctAnswer: "shipment_id_882", // simplified mock validation
                        placeholder: "Enter the Shipment ID with null dates..."
                    }
                }
            },
            {
                id: 3,
                title: "Analysis & Cleaning",
                status: "locked",
                type: "submission",
                content: {
                    instruction: "Calculate the average delay per route. Filter out any shipments that are still 'In Transit'.",
                    submissionType: "file",
                    placeholder: "Upload your Python script (.py) or SQL query (.sql)"
                }
            }
        ]
    },
    {
        id: 2,
        title: "E-commerce Churn Analysis",
        role: "Marketing Analyst",
        company: "Shopifyy (Mock)",
        logoColor: "bg-green-500",
        tags: ["SQL", "Cohort Analysis", "Advanced"],
        difficulty: "Advanced",
        time: "6 Hours",
        xp: 750,
        description: "Determine why customer retention dropped by 5% last month using cohort analysis.",
        steps: [] // limited mock data for the list view
    },
    {
        id: 3,
        title: "Healthcare Patient Triage",
        role: "Data Scientist",
        company: "MediCare Plus",
        logoColor: "bg-red-500",
        tags: ["R", "Statistics", "Beginner"],
        difficulty: "Beginner",
        time: "2 Hours",
        xp: 300,
        description: "Build a simple logic model to categorize incoming patients based on vital signs.",
        steps: []
    }
];
