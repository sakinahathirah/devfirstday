// 🧑‍💻 USER DATA
export const user = {
  id: 1,
  name: "Sarah",
  email: "sarah@example.com",
  createdAt: "2025-06-01", // used to calculate Days Since Joined
  notifications: true,
};

// ✅ TASKS DATA
export const tasks = [
  {
    id: 1,
    title: "Complete Profile",
    description: "Fill in your user profile to get started.",
    category: "onboarding",
    status: "Completed",
    checklist: ["Enter name", "Upload photo", "Add bio"],
  },
  {
    id: 2,
    title: "Watch Welcome Video",
    description: "Learn about the platform and the onboarding process.",
    category: "onboarding",
    status: "Completed",
    checklist: ["Watch intro video", "Mark as complete"],
  },
  {
    id: 3,
    title: "Read Getting Started Docs",
    description: "Go through the initial documentation to understand your role.",
    category: "docs",
    status: "Completed",
    checklist: ["Open guide", "Skim sections", "Finish reading"],
  },
  {
    id: 4,
    title: "Explore UI Guidelines",
    description: "Read UI/UX standards to align your design practices.",
    category: "docs",
    status: "In Progress",
    checklist: ["Visit style guide", "Read components", "Bookmark"],
  },
  {
    id: 5,
    title: "Connect GitHub Account",
    description: "Link your GitHub account to sync your commits.",
    category: "tools",
    status: "Completed",
    checklist: ["Login to GitHub", "Authorize app"],
  },
  {
    id: 6,
    title: "Connect Slack Workspace",
    description: "Join the team Slack to stay updated.",
    category: "tools",
    status: "Completed",
    checklist: ["Open Slack", "Join #dev-team"],
  },
  {
    id: 7,
    title: "Set Up Task Manager (Trello)",
    description: "Set up a task board to manage your daily goals.",
    category: "tools",
    status: "Not Started",
    checklist: ["Accept invite", "Create test card"],
  },
  {
    id: 8,
    title: "First Code Commit",
    description: "Make your first Git commit to the onboarding repo.",
    category: "onboarding",
    status: "Completed",
    checklist: ["Clone repo", "Commit change", "Push to GitHub"],
  },
  {
    id: 9,
    title: "Submit Feedback Form",
    description: "Give feedback on your onboarding experience.",
    category: "onboarding",
    status: "In Progress",
    checklist: ["Fill form", "Submit response"],
  },
  {
    id: 10,
    title: "Review API Integration Docs",
    description: "Understand how APIs are integrated into the system.",
    category: "docs",
    status: "Not Started",
    checklist: ["Open API docs", "Read intro", "Try example"],
  },
];

// 🧮 BACKEND-LIKE COMPUTATION
const totalDocs = tasks.filter(t => t.category === "docs").length;
const totalTools = tasks.filter(t => t.category === "tools").length;
const totalTasks = tasks.length;
const completedTasks = tasks.filter(t => t.status === "Completed").length;
const docsRead = tasks.filter(t => t.category === "docs" && t.status === "Completed").length;
const toolsConnected = tasks.filter(t => t.category === "tools" && t.status === "Completed").length;

// 📊 METRICS (from task status + user data)
export const metrics = [
  {
    title: 'Tasks Completed',
    progress: completedTasks,
    type: 'number',
    description: `Out of ${totalTasks} onboarding steps`,
  },
  {
    title: 'Docs Read',
    progress: docsRead,
    type: 'percent',
    description: `${docsRead} of ${totalDocs} user guides opened`,
  },
  {
    title: 'Tools Connected',
    progress: (toolsConnected / totalTools) * 100,
    type: 'progress',
    description: `${toolsConnected} of ${totalTools} tools connected`,
  },
  {
    title: 'Days Since Joined',
    progress: getDaysSinceJoined(user.createdAt),
    type: 'number',
    description: `Joined on ${user.createdAt}`,
  },
];


// ✅ ONBOARDING STEPS (custom)
export const steps = [
  {
    title: "Complete Profile",
    status: getTaskStatus("Complete Profile"),
  },
  {
    title: "Connect GitHub & Slack",
    status: toolsConnected >= 2 ? "done" : "pending",
  },
  {
    title: "Finish All Docs",
    status: docsRead === 3 ? "done" : "pending",
  },
  {
    title: "Submit Feedback Form",
    status: getTaskStatus("Submit Feedback Form"),
  },
  {
    title: "Complete 80% Tasks",
    status: completedTasks >= 8 ? "done" : "pending",
  },
];

// 🔧 HELPERS
function getTaskStatus(taskTitle) {
  const task = tasks.find(t => t.title === taskTitle);
  return task?.status === "Completed" ? "done" : "pending";
}

function getDaysSinceJoined(joinedDate) {
  const joined = new Date(joinedDate);
  const today = new Date();
  const diff = Math.floor((today - joined) / (1000 * 60 * 60 * 24));
  return diff;
}
