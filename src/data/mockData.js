export const userProfile = {
    name: "Alex",
    xp: 1250,
    streak: 4,
    rank: "Top 15%",
    solved: 12,
    total: 50
};

export const sqlProblems = [
    {
        id: 1,
        title: "Calculate Monthly Recurring Revenue",
        difficulty: "Medium",
        acceptance: "45%",
        status: "Solved",
        tags: ["Business Logic", "Aggregation"],
        description: "Write a query to calculate the MRR for each month in 2024. You have a table `subscriptions` with columns `user_id`, `amount`, `start_date`, and `status`.",
        expectedSchema: "month | mrr"
    },
    {
        id: 2,
        title: "Find Duplicate Users",
        difficulty: "Easy",
        acceptance: "85%",
        status: "Unsolved",
        tags: ["Data Cleaning", "Grouping"],
        description: "Identify users who have created multiple accounts with the same email address in the `users` table.",
        expectedSchema: "email | count"
    },
    {
        id: 3,
        title: "Top Selling Products by Region",
        difficulty: "Hard",
        acceptance: "30%",
        status: "Unsolved",
        tags: ["Joins", "Ranking"],
        description: "Find the top 3 selling products in each region for Q1 2025. Tables: `orders`, `products`, `regions`.",
        expectedSchema: "region | product_name | total_sales"
    },
    {
        id: 4,
        title: "Customer Churn Analysis",
        difficulty: "Medium",
        acceptance: "50%",
        status: "Unsolved",
        tags: ["Business Logic", "Date Math"],
        description: "Calculate the churn rate for March 2025. Churn is defined as users who cancelled their subscription within the month.",
        expectedSchema: "total_users | churned_users | churn_rate"
    },
    {
        id: 5,
        title: "Null Value Cleanup",
        difficulty: "Easy",
        acceptance: "90%",
        status: "Solved",
        tags: ["Data Cleaning", "Filtering"],
        description: "Select all records from `transactions` where the `amount` is NULL or 0.",
        expectedSchema: "transaction_id | user_id | amount"
    }
];
