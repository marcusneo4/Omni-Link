/**
 * Solution page content for OmniLink Singapore.
 * Maps slugs to full page content.
 */

export type SolutionSlug =
  | "project-management"
  | "sales"
  | "customer-care"
  | "ai-integration";

export interface SolutionContent {
  slug: SolutionSlug;
  title: string;
  subtitle: string;
  keyCapabilities: { title: string; description?: string }[];
  challenges?: { title: string; items: string[] };
  howWeSolved?: { title: string; items: { title: string; points: string[] }[] };
  workflows?: { title: string; steps: string[] };
  dailyProcess?: { title: string; items: { phase: string; description: string }[] };
  results?: { title: string; items: { title: string; points: string[] }[] };
  faqs: { question: string; answer: string }[];
}

export const solutionsData: Record<SolutionSlug, SolutionContent> = {
  "project-management": {
    slug: "project-management",
    title: "Project Management",
    subtitle:
      "Connect Your Tools, Enhance Your Workflow. Capture meeting details, maintain documentation, and manage tasks - all while staying focused on your work. Keep your existing tools while adding responsible AI capabilities.",
    keyCapabilities: [
      { title: "Unified Information Flow", description: "Connect meetings, tasks, and documents in one place. Access project updates across all channels using voice, text, or traditional interfaces." },
      { title: "Meeting Management", description: "Let AI handle meeting transcription and summaries. Focus on the discussion while maintaining complete records of decisions and action items." },
      { title: "Documentation System", description: "Turn conversations into lasting knowledge. Keep documentation current without extra effort through automated updates and AI assistance." },
      { title: "Task Management", description: "Create and update tasks naturally during discussions. Maintain project momentum with AI-assisted task creation and context-rich updates." },
      { title: "Knowledge Processing", description: "Access information naturally using voice or text queries. Find what you need across all your project data with AI-powered search and context understanding." },
      { title: "Workflow Intelligence", description: "Let AI learn from your team's patterns to suggest next actions and automate routine tasks. Maintain control while increasing efficiency." },
    ],
    challenges: {
      title: "Our Challenges",
      items: [
        "Managing multiple client projects simultaneously while maintaining quality and timelines",
        "Capturing important details from numerous client meetings and turning them into actionable items",
        "Keeping project documentation current and easily accessible across team members",
        "Connecting information scattered across different tools and platforms into a cohesive workflow",
        "Getting new team members up to speed quickly with project context and requirements",
      ],
    },
    howWeSolved: {
      title: "How We Solved Them",
      items: [
        {
          title: "Meeting Management",
          points: [
            "Made meeting content instantly searchable and accessible",
            "Created two ways to add transcription: calendar invites or quick Slack commands",
            "Set up transcriptor to join Google Meet, Teams, and Zoom calls automatically",
          ],
        },
        {
          title: "Project Documentation Flow",
          points: [
            "Implemented periodic document syncing to maintain consistency",
            "Built two-way synchronization for tasks and comments",
            "Enabled real-time updates across all platforms",
            "Connected ClickUp tasks, Slack conversations, and meeting transcripts in one workspace",
          ],
        },
        {
          title: "Documentation Management",
          points: [
            "Support for natural language queries to find information",
            "Knowledge base integration for technical content",
            "AI-assisted creation and editing capabilities",
            "Direct access through existing ClickUp interface",
          ],
        },
      ],
    },
    dailyProcess: {
      title: "Our Daily Workflow",
      items: [
        { phase: "During Meetings", description: "Our transcriptor joins automatically and captures everything while we focus on discussion. Team members can follow through summaries of the transcripts, and important points are flagged automatically." },
        { phase: "After Meetings", description: "AI helps process the transcript to update tasks, add comments, and maintain documentation. Key decisions and action items are automatically distributed to relevant project spaces." },
        { phase: "Daily Progress", description: "We can generate status updates and reports directly from OmniLink enriched with context from all communication channels. This keeps stakeholders informed with minimal manual effort." },
        { phase: "Team Collaboration", description: "Each person works their way - through ClickUp interface, voice commands, or chat. All interactions sync automatically while keeping humans in control of important decisions." },
      ],
    },
    results: {
      title: "Our Results",
      items: [
        { title: "Efficiency Gains", points: ["Better information accessibility", "More precise project tracking", "Faster and more accurate task updates", "Less time on meeting notes, more on development"] },
        { title: "Better Communication", points: ["Improved client communications", "More effective context sharing", "Reduced information gaps between tools"] },
        { title: "Knowledge Preservation", points: ["More consistent documentation", "Easier team member onboarding", "Better preservation of project knowledge"] },
      ],
    },
    faqs: [
      { question: "How does OmniLink handle document access and management?", answer: "OmniLink offers multiple ways to work with documentation: direct access through your existing tools, AI-assisted creation and editing, knowledge base integration, and natural language queries for information retrieval." },
      { question: "How does the meeting transcription service work?", answer: "The transcriptor joins meetings either through calendar invites or a quick Slack command. After the meeting, the transcript is processed and made immediately available for your team." },
      { question: "How does OmniLink handle permissions and security?", answer: "OmniLink uses your personal access tokens and respects your existing system permissions. You can only access content you have permissions for, and all changes are attributed to you." },
      { question: "How does the AI integration work with project management?", answer: "AI helps process meeting transcripts, suggests task updates, assists with documentation, and enables natural language interaction with your project data. You maintain control while the AI handles routine work." },
      { question: "Can we start small and expand later?", answer: "Yes, you can start with just meeting transcription or documentation and add more capabilities as needed. The system is designed for gradual adoption based on your team's needs." },
      { question: "How do team members interact with the system?", answer: "Team members can choose their preferred method - voice, text, or traditional UI. The system adapts to how each person wants to work while maintaining information consistency." },
    ],
  },
  sales: {
    slug: "sales",
    title: "Sales Operations",
    subtitle:
      "Transform Your Sales Operations with powerful workflow automations. Connect your existing tools with AI capabilities to streamline deal management, automate routine tasks, and help your team focus on closing deals.",
    keyCapabilities: [
      { title: "Deal Management", description: "Get clear next steps for each deal, track progress automatically, and extract information from unstructured emails. Connect seamlessly with your CRM." },
      { title: "Sales Team Support", description: "Automate follow-up communications, generate activity reports, and track performance metrics. Let AI handle routine tasks while your team focuses on relationships." },
      { title: "Knowledge Management", description: "Maintain up-to-date client information, organize sales documentation, and access historical deal context instantly." },
      { title: "Workflow Automation", description: "Create automated deal updates, send notifications to relevant channels, and manage deal assignments automatically." },
      { title: "Performance Analytics", description: "Track key sales metrics, generate insights from deal patterns, and visualize team performance. Make data-driven decisions with automated reporting." },
      { title: "Meeting Intelligence", description: "Capture and analyze sales calls and meetings automatically. Get AI-powered summaries, extract action items, and maintain complete conversation history." },
    ],
    workflows: {
      title: "Example Workflows",
      steps: [
        "Email arrives → Information extracted automatically → Deal created in CRM → OmniLink connects relevant documents → Follow-ups scheduled",
        "Automatic updates to sales channels, deal status notifications, performance metric reports, and team assignment notifications",
        "Automatic categorization of sales documents, information extraction, context preservation, and easy retrieval when needed",
      ],
    },
    faqs: [
      { question: "How does OmniLink integrate with our CRM?", answer: "OmniLink connects with your existing CRM system, automating data exchange and maintaining consistency across platforms while respecting your existing workflows." },
      { question: "Can we customize the automation workflows?", answer: "Yes, OmniLink's features are built to your specific needs. We can start with basic automations and expand as your team grows comfortable with the system." },
      { question: "How does the email processing work?", answer: "OmniLink can automatically extract relevant information from emails, create or update deals, and trigger appropriate follow-up actions based on your sales process." },
      { question: "What kind of metrics can we track?", answer: "You can track various sales metrics, including deal progress, team performance, response times, and custom KPIs specific to your sales process." },
    ],
  },
  "customer-care": {
    slug: "customer-care",
    title: "Customer Care",
    subtitle:
      "Enhance Your Customer Support. Connect your communication channels, empower your agents with AI assistance, and maintain high-quality customer support while automating routine tasks.",
    keyCapabilities: [
      { title: "Unified Communications", description: "Connect multiple channels including email, chat, and phone. Access complete customer interaction history and maintain context across conversations." },
      { title: "Knowledge Management", description: "Build and maintain both internal and customer-facing knowledge bases. Enable natural language search and automatic content updates." },
      { title: "AI-Assisted Support", description: "Analyze customer sentiment, suggest relevant responses, and help agents make informed decisions while maintaining human oversight." },
      { title: "Performance Analytics", description: "Track response metrics, monitor resolution times, and analyze customer satisfaction. Generate insights for continuous improvement." },
      { title: "Customer Insights", description: "Classify inquiries automatically, identify trending issues, and support proactive solution development through pattern recognition." },
      { title: "Process Automation", description: "Automate routine tasks, streamline documentation, and maintain quality control while keeping agents in control of final decisions." },
    ],
    workflows: {
      title: "Example Workflows",
      steps: [
        "Customer inquiry arrives → Context gathered automatically → Relevant knowledge suggested → Agent assisted with response → Quality checks performed",
        "Common issues identified → Content updates suggested → Knowledge base maintained → Self-service options enhanced",
        "Interactions analyzed → Metrics tracked → Insights generated → Improvement areas identified → Team performance optimized",
      ],
    },
    faqs: [
      { question: "How does OmniLink work with our existing CRM?", answer: "OmniLink enhances rather than replaces your CRM, connecting seamlessly to add AI capabilities and automation while maintaining your existing workflows." },
      { question: "What kind of AI assistance does it provide?", answer: "OmniLink provides sentiment analysis, response suggestions, and pattern recognition while keeping agents in control of final decisions and customer interactions." },
      { question: "How does the knowledge base integration work?", answer: "OmniLink connects your existing knowledge bases, enables natural language search, and helps maintain content based on actual customer interactions and common issues." },
      { question: "What metrics can we track?", answer: "You can track response times, resolution rates, customer satisfaction, agent performance, and custom KPIs specific to your support process." },
    ],
  },
  "ai-integration": {
    slug: "ai-integration",
    title: "AI Integration",
    subtitle:
      "Connect Your Systems with AI. Transform how your team works by adding AI capabilities to your existing tools. Connect systems, automate workflows, and enhance efficiency while keeping humans in control. Start with specific improvements and expand as you see results.",
    keyCapabilities: [
      { title: "Data Processing", description: "Transform unstructured data into actionable information. Extract key details from emails, documents, and communications automatically." },
      { title: "Natural Language Interface", description: "Talk to your existing systems naturally. Query data, update information, and manage workflows using conversation or voice commands." },
      { title: "Smart Automation", description: "Connect different systems seamlessly. Create intelligent workflows that handle routine tasks while maintaining human oversight." },
      { title: "Intelligent Filtering", description: "Automatically classify and route information. Ensure important updates reach the right people while reducing noise." },
      { title: "System Integration", description: "Connect any system with an API. Transform data between formats and enable seamless communication between tools." },
      { title: "Performance Tracking", description: "Monitor efficiency gains and process improvements. Get insights into workflow optimization opportunities." },
    ],
    workflows: {
      title: "Implementation Strategy",
      steps: [
        "Starting Point: Start with quick wins, plan gradual rollout, define success metrics, choose initial integrations, identify key pain points",
        "Integration Process: Train team members, test thoroughly, configure AI assistance, set up data flows, connect through APIs",
        "Ongoing Support: Scale gradually, add capabilities, adjust configurations, gather feedback, monitor performance",
      ],
    },
    faqs: [
      { question: "How does OmniLink integrate with existing systems?", answer: "OmniLink connects through available APIs, enhancing your current tools while preserving existing workflows. We start small and expand based on your needs." },
      { question: "What kind of efficiency gains can we expect?", answer: "Teams typically see significant improvements in routine task handling, data processing, and information flow. The AI assists rather than replaces, multiplying human efficiency." },
      { question: "How do you ensure quality and accuracy?", answer: "We maintain human oversight in all critical processes. AI suggests and assists, but final decisions remain with your team members." },
      { question: "Can we customize the integration to our needs?", answer: "Yes, OmniLink is highly customizable. We can adapt to your specific workflows, tools, and processes, starting with what matters most to your team." },
      { question: "Do we need to change our existing workflows?", answer: "No, OmniLink enhances rather than replaces your current processes. We adapt to how your team works, adding capabilities while maintaining familiar workflows." },
      { question: "How long does implementation take?", answer: "Implementation is gradual and based on your needs. We can start with simple integrations in days and expand capabilities over time as your team sees value." },
    ],
  },
};

export const solutionSlugs: SolutionSlug[] = [
  "project-management",
  "sales",
  "customer-care",
  "ai-integration",
];

const VALID_SLUGS: ReadonlySet<string> = new Set(solutionSlugs);

/**
 * Type guard to validate a string is a known solution slug.
 * Use before indexing solutionsData to avoid unsafe casts.
 *
 * @param slug - Unknown string from URL params
 * @returns True if slug is a valid SolutionSlug
 */
export function isValidSolutionSlug(slug: unknown): slug is SolutionSlug {
  return typeof slug === "string" && VALID_SLUGS.has(slug);
}

/**
 * Resolves solution content by slug. Returns null for invalid slugs.
 *
 * @param slug - URL param string
 * @returns SolutionContent or null if slug is invalid
 */
export function getSolutionBySlug(slug: unknown): SolutionContent | null {
  if (!isValidSolutionSlug(slug)) return null;
  return solutionsData[slug];
}
