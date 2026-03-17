/**
 * Centralized content for OmniLink Singapore website.
 * All copy is localized for Singapore/APAC market.
 */

export const siteConfig = {
  name: "OmniLink",
  tagline: "Intelligent Business Process Automation",
  region: "Singapore",
};

export const homeContent = {
  hero: {
    eyebrow: "Transform Your Workflows",
    title: "Connect Your Teams, Tools, and Knowledge",
    description:
      "Streamline operations with intelligent workflow automation. Turn meetings into actions, connect your tools, and access knowledge naturally. Start with what you need most.",
    cta: "Let's connect",
  },
  testimonialStrip: {
    quote:
      "We use AI and automation where they make sense, not because they're trendy. Every feature is guided by real business needs.",
    attribution: "Deligo",
    stats: [
      { value: "18+", label: "Years building automation" },
      { value: "Singapore", label: "APAC-focused" },
    ],
  },
  coreFeatures: {
    title: "Transform Your Business Operations",
    subtitle:
      "Unify workflow management, AI capabilities, and knowledge processing in one intelligent platform that adapts to how your teams work",
    features: [
      {
        title: "Workflow Intelligence",
        description:
          "Convert meetings and conversations into structured, actionable information automatically",
      },
      {
        title: "Smart Integration",
        description:
          "Connect seamlessly with your existing tools and processes",
      },
      {
        title: "AI Automation",
        description:
          "Reduce manual work with intelligent assistance that learns your processes",
      },
      {
        title: "Knowledge Hub",
        description:
          "Access information naturally through conversation or voice",
      },
    ],
  },
  solutions: {
    title: "Solutions for Every Team",
    subtitle: "Here's how different teams put OmniLink to work",
    items: [
      {
        title: "Project Management",
        features: [
          "Automated documentation",
          "Contextual task management",
          "Intelligent project tracking",
        ],
        cta: "Boost Your Projects",
        href: "/solutions/project-management",
      },
      {
        title: "Sales Operations",
        features: [
          "Deal progress tracking",
          "Document processing",
          "Performance analytics",
        ],
        cta: "Drive More Sales",
        href: "/solutions/sales",
      },
      {
        title: "Customer Support",
        features: [
          "Sentiment analysis",
          "Automated response systems",
          "Support performance metrics",
        ],
        cta: "Enhance Support",
        href: "/solutions/customer-care",
      },
      {
        title: "AI Integration",
        features: [
          "Quick AI implementation",
          "Custom tools development",
          "Workflow automation",
        ],
        cta: "Start With AI",
        href: "/solutions/ai-integration",
      },
    ],
  },
  flexibleImplementation: {
    title: "Flexible Implementation That Works For You",
    subtitle:
      "Transform your workflow at your own pace with OmniLink's adaptable implementation approach. Start with essential features and expand as your needs grow, without disrupting your existing processes.",
    description:
      "Whether you're looking to enhance project management, streamline communications, or leverage AI capabilities, OmniLink integrates seamlessly with your current tools while providing a clear path for future expansion.",
    items: [
      {
        title: "Start with what you need",
        description:
          "Begin with the features that solve your most pressing challenges",
      },
      {
        title: "Scale as you grow",
        description: "Add capabilities and users as your needs evolve",
      },
      {
        title: "Maintain existing workflows",
        description:
          "Integrate seamlessly with your current tools and processes",
      },
      {
        title: "Add capabilities progressively",
        description: "Expand functionality at your own pace",
      },
    ],
  },
};

export const featuresContent = {
  hero: {
    title: "Building Blocks of Intelligent Automation",
    subtitle:
      "Core capabilities that power OmniLink. Start with what you need most and expand as you grow.",
  },
  sections: [
    {
      title: "Communication & Collaboration",
      subtitle: "Connect teams and conversations seamlessly",
      features: [
        {
          title: "Meeting Management",
          summary: "Transform meetings into actionable knowledge",
          bullets: ["Searchable transcripts", "Auto action items", "Preserved context"],
          description:
            "Transform your meetings into actionable knowledge. Our system quietly joins your video calls, capturing everything while you focus on the conversation. When someone says 'we should create a task for this' or 'let's update the documentation,' it understands and helps make it happen. After the meeting, you get searchable transcripts, clear action items, and preserved context for future reference.",
        },
        {
          title: "Communication Hub",
          summary: "One place for every conversation",
          bullets: ["Slack, email, transcripts connected", "Natural language search", "Context preserved"],
          description:
            "Stop switching between tools to find information. Whether it's in Slack, email, or meeting transcripts, every conversation is connected and contextual. Ask questions naturally like 'what did we discuss about the pricing last week?' and get meaningful answers. The system understands context, preserves conversation history, and helps you find exactly what you need.",
        },
        {
          title: "Voice Processing",
          summary: "Talk to your systems naturally",
          bullets: ["Voice commands for tasks", "Context-aware responses", "Hands-free documentation"],
          description:
            "Talk to your systems naturally. Voice isn't just another way to input data - it's often the most natural way to work. When you say 'update the project status,' the system knows which project you mean. Need to search documentation or create a task? Just ask. It's like having a knowledgeable assistant who remembers everything and understands context.",
        },
      ],
    },
    {
      title: "Work Management",
      subtitle: "Make work flow naturally",
      features: [
        {
          title: "Task Intelligence",
          summary: "Tasks that work smarter",
          bullets: ["Auto-create from meetings", "Context-based priorities", "Project momentum tracking"],
          description:
            "Make your tasks work smarter, not harder. During meetings, the system identifies when tasks should be created and connects them to relevant discussions automatically. It understands task relationships, suggests priorities based on context, and helps maintain project momentum. Think of it as a smart assistant that knows what needs to be done and why.",
        },
        {
          title: "Process Automation",
          summary: "Routine tasks handle themselves",
          bullets: ["CRM updates from email", "Smart notifications", "Workflow triggers"],
          description:
            "Let routine tasks handle themselves. The system learns your common workflows and helps automate them naturally. When a sales email arrives, it doesn't just forward it - it understands the content, updates your CRM, notifies the right people, and triggers appropriate workflows. You stay in control while repetitive tasks take care of themselves.",
        },
        {
          title: "Performance Analytics",
          summary: "See how work really happens",
          bullets: ["Pattern detection", "Bottleneck alerts", "Improvement suggestions"],
          description:
            "Understand how work really happens. Beyond basic metrics, see patterns in how your team works, identify bottlenecks before they become problems, and get intelligent suggestions for process improvements. It's like having a dedicated analyst watching your workflows and suggesting ways to make them better.",
        },
      ],
    },
    {
      title: "System Integration",
      subtitle: "Connect and enhance your existing tools",
      features: [
        {
          title: "API Integration",
          summary: "Connect any system with an API",
          bullets: ["CRM, PM tools, custom software", "Intelligent data flow", "Start small, scale up"],
          description:
            "Connect any system with an API. Whether it's your CRM, project management tool, or custom software, OmniLink creates intelligent connections. Instead of just moving data between systems, it understands the information and makes it useful. Start with one connection and expand as needed - the system grows with you.",
        },
        {
          title: "Custom Workflows",
          summary: "Workflows that match how you work",
          bullets: ["Custom triggers", "Adapts to your processes", "Built for your team"],
          description:
            "Build workflows that match how you actually work. No need to change your processes - the system adapts to you. Create custom triggers, automate specific actions, and connect tools in ways that make sense for your team. It's like having a system that's been custom-built for your needs, because it has.",
        },
        {
          title: "Data Transformation",
          summary: "Turn information into action",
          bullets: ["Email to CRM", "Meetings to decisions", "Connected and meaningful"],
          description:
            "Turn information into action. When data moves between systems, it's not just copied - it's transformed into whatever format works best. Unstructured emails become structured CRM entries. Meeting discussions become documented decisions. Everything stays connected and meaningful.",
        },
      ],
    },
    {
      title: "Core Intelligence",
      subtitle: "The building blocks of intelligent automation",
      features: [
        {
          title: "AI Integration",
          summary: "AI on your terms",
          bullets: ["GPT-4, Claude, Gemini - mix and match", "Enhance, don't replace", "Start small, expand"],
          description:
            "Work with AI on your terms. We're not tied to a single AI provider or approach. Need GPT-4 for creative tasks but prefer Claude for analysis? Want Gemini for specific workflows? Mix and match as needed. The AI enhances rather than replaces your team's work, and you maintain control over how it's used. Start small with specific tasks and expand as you see results.",
        },
        {
          title: "Natural Language Processing",
          summary: "Talk to your systems like a colleague",
          bullets: ["Natural questions", "Context-aware", "Universal translator for tools"],
          description:
            "Interact with your systems like you're talking to a knowledgeable colleague. Ask questions naturally, give instructions conversationally, and get meaningful responses. The system understands context - when you say 'find the latest version,' it knows what you're working on. It's like having a universal translator between you and your tools.",
        },
        {
          title: "Knowledge Processing",
          summary: "Information that understands context",
          bullets: ["RAG-powered search", "Cross-system answers", "Every doc, email, transcript"],
          description:
            "Transform how your team works with information. Using advanced techniques like RAG, the system doesn't just store information - it understands it. Ask 'What did we decide about the pricing structure?' and get relevant information from across all your systems. It's like having a team member who's read and understood every document, email, and meeting transcript.",
        },
      ],
    },
    {
      title: "Team Empowerment",
      subtitle: "Enhance human capabilities",
      features: [
        {
          title: "Efficiency Multipliers",
          summary: "More effective without changing how you work",
          bullets: ["Routine tasks automated", "Proactive info", "Focus on decisions"],
          description:
            "Make your team more effective without changing how they work. The system handles routine tasks automatically, provides relevant information proactively, and helps everyone stay focused on important decisions. It's like giving each team member a skilled assistant who knows exactly when to help and when to stay out of the way.",
        },
        {
          title: "Knowledge Access",
          summary: "Collective knowledge at your fingertips",
          bullets: ["Interconnected network", "Find when you need it", "Build on team expertise"],
          description:
            "Put your team's collective knowledge to work. Every piece of information, whether from meetings, documents, or conversations, becomes part of an interconnected knowledge network. Find what you need when you need it, understand context at a glance, and build on what your team already knows. It's like having instant access to your entire team's expertise.",
        },
        {
          title: "Decision Support",
          summary: "Better decisions with complete context",
          bullets: ["Relevant info gathered", "Pattern highlighting", "Right info, right time"],
          description:
            "Make better decisions with complete context. The system brings together relevant information, highlights important patterns, and helps you understand implications. But it never makes decisions for you - instead, it ensures you have the right information at the right time. Think of it as having a really thorough research assistant always at hand.",
        },
      ],
    },
  ],
  cta: {
    title: "Ready to enhance your workflows?",
    subtitle: "Start with the features you need most. Add capabilities as you grow.",
    primary: "Let's connect",
    secondary: "Learn More",
  },
};

export const aboutContent = {
  hero: {
    title: "Connecting Systems, Empowering Teams",
    subtitle:
      "Born from years of observing how information moves through organizations, OmniLink emerged as a solution to disconnected business tools and scattered data. Our focus is practical: helping Singapore businesses and regional teams work more effectively with the tools they already use or build new ones.",
  },
  deligo: {
    title: "Deligo - Authors of OmniLink",
    description:
      "Starting in 2006 as e-commerce specialists, we gained deep insights into business operations across websites, warehousing, accounting, and customer care. This experience led us to develop DRADS (Deligo Rapid Apps Development System), which then helped us create OmniLink as we integrated AI capabilities. Throughout our journey, we've maintained our focus on practical solutions that enhance human capabilities while keeping people in control of decision-making.",
    timeline: [
      {
        title: "E-commerce Foundations (since 2006)",
        description:
          "Started building comprehensive e-commerce solutions, working with everything from websites to warehousing, accounting, and customer care.",
      },
      {
        title: "Business Process Expertise",
        description:
          "Gained deep understanding of how information moves through companies, working with various departments and seeing common challenges across organizations.",
      },
      {
        title: "DRADS Development",
        description:
          "Created Deligo Rapid Apps Development System (DRADS) to speed up software development while maintaining quality.",
      },
      {
        title: "OmniLink Evolution",
        description:
          "Extended DRADS capabilities with AI features, natural language processing, and voice commands, creating what became OmniLink.",
      },
    ],
  },
  whatIsOmniLink: {
    title: "What is OmniLink?",
    stats: [
      { value: "Since 2006", label: "Deligo building automation" },
      { value: "Singapore", label: "APAC-focused" },
    ],
    paragraphs: [
      {
        heading: "Unified automation framework",
        text: "OmniLink integrates custom apps, project management, and knowledge sharing into one system. From web apps to voice and natural language - it adapts to how your teams work.",
      },
      {
        heading: "Connection layer or foundation",
        text: "Enhance existing tools with AI, build custom apps from scratch, or combine both. Information flows naturally between systems and teams, with humans in control of critical decisions.",
      },
    ],
    description:
      "OmniLink is a comprehensive framework for business process automation that seamlessly integrates custom applications, project management, and knowledge sharing into a unified system. Through multiple interfaces - from traditional web apps to voice commands and natural language processing - OmniLink adapts to how your teams naturally work while maintaining robust control over automated processes.",
    approaches: [
      {
        title: "Connection Layer",
        description:
          "Enhance your existing tools with AI capabilities and better integration. OmniLink sits on top of your current software, helping information flow more naturally between systems and teams.",
      },
      {
        title: "Complete Solution",
        description:
          "Build custom software from scratch using our DRADS (Deligo Rapid Apps Development System) foundation, with OmniLink features built right in for a fully integrated experience.",
      },
      {
        title: "Hybrid Approach",
        description:
          "Combine new custom-built components with your existing systems. Get the best of both worlds by keeping what works while adding new capabilities where needed.",
      },
    ],
  },
  approach: {
    title: "Our Approach",
    subtitle: "How we think about technology and business",
    items: [
      {
        title: "Practical Innovation",
        description:
          "We use AI and automation where they make sense, not because they're trendy. Every feature and capability is guided by real business needs and practical benefits.",
      },
      {
        title: "Human-Centered",
        description:
          "Technology should enhance human capabilities, not replace them. We keep humans in control, using AI and automation to handle routine tasks and support better decisions.",
      },
      {
        title: "Progressive Implementation",
        description:
          "Start small, see results, then expand. Whether connecting existing tools or building new ones, we believe in gradual, practical improvements over big bang changes.",
      },
    ],
  },
  technicalCapability: {
    title: "Technical Capability",
    subtitle: "Combining speed with expertise",
    items: [
      {
        title: "Rapid Development",
        description:
          "Combining low-code/no-code platforms with traditional development expertise, we accelerate delivery while maintaining quality. Our senior developers leverage rapid development tools alongside classical programming to create robust, scalable solutions.",
      },
      {
        title: "Integration Expertise",
        description:
          "Deep experience connecting different systems and making them work together efficiently. Whether through APIs or custom solutions, we make systems talk to each other.",
      },
      {
        title: "AI Implementation",
        description:
          "Responsible AI usage focused on practical benefits. We implement AI capabilities where they make sense, always keeping human oversight and control.",
      },
    ],
  },
  lookingForward: {
    title: "Looking Forward",
    description:
      "As we continue to evolve, our focus remains on practical innovation that delivers real value. We're expanding our AI capabilities, enhancing our integration framework, and developing new ways to make business processes more efficient - all while keeping the human element at the center of everything we do.",
  },
};

export const pricingContent = {
  hero: {
    title: "Transparent Pricing for Real Solutions",
    subtitle:
      "Simple 2-tier pricing. Choose the plan that fits your team. All prices in Singapore Dollars (SGD) per month.",
  },
  services: [
    {
      title: "Starter",
      subtitle: "Ideal for small teams getting started",
      price: "200",
      unit: "per month",
      features: [
        "Core workflow automation",
        "Basic integrations & setup",
        "Email & chat support",
        "Up to 5 users",
      ],
      cta: "Get Started",
    },
    {
      title: "Professional",
      subtitle: "For teams ready to scale",
      price: "300",
      unit: "per month",
      features: [
        "Full OmniLink capabilities",
        "Advanced integrations & custom workflows",
        "Priority support",
        "Unlimited users",
      ],
      cta: "Contact Us",
    },
  ],
  referral: {
    title: "Referral Bonus Scheme",
    subtitle: "Share OmniLink and earn rewards",
    description:
      "Refer a business to OmniLink and both of you benefit. When your referral signs up, you receive a bonus and they get a welcome discount.",
    benefits: [
      {
        title: "For You (Referrer)",
        description: "Earn S$100 credit for each successful referral. Use it toward your next month's subscription or consulting services.",
      },
      {
        title: "For Your Referral",
        description: "New customers referred by you receive 10% off their first 3 months. A great way to try OmniLink with less risk.",
      },
    ],
    cta: "Get Your Referral Link",
  },
  serviceFeatures: {
    title: "Service Features",
    subtitle: "What's included in our pricing",
    items: [
      { title: "Flexible Integration", description: "Connect with your existing tools and systems, from project management tools, CRMs, ERPs to custom solutions" },
      { title: "Custom Development", description: "Tailored solutions built on our DRADS foundation with OmniLink features" },
      { title: "Business Expertise", description: "Deep understanding of business processes and technology implementation" },
      { title: "Practical AI Implementation", description: "Responsible AI usage focused on real business benefits" },
      { title: "Rapid Development", description: "Using low-code and no-code solutions to accelerate development without compromising quality" },
      { title: "Project Transparency", description: "Full accountability through project management system tracking all work and deliverables" },
    ],
  },
  quote: {
    text: "While I hate giving vague answers, the honest truth about pricing is 'it depends.' What makes OmniLink unique is our ability to start small, show value quickly, and expand based on results. You'll see the effects almost right away, allowing you to evaluate the value and make informed decisions about next steps. Unlike classical development that can take months before showing results, with OmniLink you can start seeing benefits within weeks. This highly influences the budget decisions as there is always a high correlation between what you pay and what you get.",
    author: "Maciej",
    role: "OmniLink Co-Owner",
  },
  implementation: {
    title: "Implementation Process",
    subtitle: "Our process is iterative and adaptable, with many steps happening in parallel to ensure rapid value delivery",
    steps: [
      { title: "Free Initial Consultation", description: "A 30-minute video call to understand your needs and determine if OmniLink is the right fit. Additional follow-up discussions as needed, with no commitment required." },
      { title: "NDA & Deep Dive", description: "After signing an NDA, we can fully understand your business operations and specific needs, protecting your confidential information while allowing for detailed discussion." },
      { title: "Requirements Analysis", description: "Deep access into your systems to understand workflows, identify patterns, and find opportunities to reuse proven solutions. This crucial phase shapes what we can practically achieve together." },
      { title: "Solution Design", description: "Breaking down improvements into smaller, valuable chunks. We prioritize quick wins and immediate value where possible, allowing for rapid feedback and adjustment." },
      { title: "Development & Integration", description: "Rapid implementation of initial features, typically showing first results within weeks. Basic deployments target 2-3 months, with continuous delivery of new capabilities." },
      { title: "Testing & Validation", description: "Continuous testing process with strong emphasis on your feedback. We want to know what works, what doesn't, and what needs adjustment." },
      { title: "Flexible Deployment", description: "Quick, iterative deployments - sometimes multiple times per day - to get features into your hands fast and gather immediate feedback." },
      { title: "Ongoing Partnership", description: "Long-term support and evolution of your solution. We're here to help adjust scope, fix issues, and continuously improve your systems." },
    ],
  },
  highlights: {
    title: "Implementation Highlights",
    subtitle: "Key aspects of our development approach",
    items: [
      { title: "Parallel Development", description: "Solution design, development, testing, and deployment often happen simultaneously, accelerating delivery of value." },
      { title: "Iterative Approach", description: "Multiple passes through development phases as needed, ensuring continuous improvement and adaptation." },
      { title: "Rapid Value Delivery", description: "Focus on delivering valuable features as quickly as possible, with initial rollouts possible within weeks." },
      { title: "Flexible Scope", description: "Ability to adjust direction, expand or limit scope based on your evolving needs and feedback." },
      { title: "Continuous Feedback", description: "Regular check-ins and adjustments based on your experience with the system and changing requirements." },
      { title: "Long-Term Partnership", description: "19+ years of software expertise, committed to supporting your success for the long run." },
    ],
  },
  faqs: [
    { question: "What's included in each tier?", answer: "The Starter tier (S$200/month) includes core workflow automation, basic integrations, and support for up to 5 users. The Professional tier (S$300/month) unlocks full OmniLink capabilities, advanced integrations, unlimited users, and priority support. Both plans can be upgraded or downgraded as your needs change." },
    { question: "Who's the perfect OmniLink client?", answer: "OmniLink is ideal for organizations with tens of employees who are using traditional business tools - email, CRM, Microsoft Office or Google Sheets, internal communication tools - but without effective connections between these systems. You don't need to implement OmniLink across your entire organization; it can be targeted to specific departments. The key is having data that needs to move more efficiently within your organization. If you're looking to centralize and streamline your information flow, OmniLink can help speed up and improve your processes." },
    { question: "How do you handle ongoing support and maintenance?", answer: "We provide dedicated support through our team of developers and project managers. All work is tracked through our project management system (ClickUp), ensuring full accountability and transparency about where your investment is going. We establish regular meeting schedules for updates, feedback, and planning. While we prefer using our project management system for optimal tracking and efficiency, we're flexible and can adapt to your preferred communication style, including email-based workflows." },
    { question: "What type of consulting services do you offer?", answer: "Our consulting approach starts with understanding your organization and identifying opportunities for technical improvements. While consulting is included in standard deployment packages, we also offer specialized consulting for more complex scenarios where the solution isn't immediately obvious. This might involve larger workflow redesigns, helping articulate undefined needs, or simply recommending and optimizing existing systems. Sometimes, the best solution might not even require custom development - we're here to help you find the most effective approach, whether that's through custom development or better use of existing tools." },
    { question: "Do you offer fixed-price projects?", answer: "Yes, we can provide fixed-price quotes when project specifications are clear and well-defined. We'll work with you to establish clear scope and deliverables before providing a fixed quote." },
    { question: "How do you approach solution development?", answer: "We always seek the most efficient solution for your needs. If a simple integration through tools like Zapier or Make can solve your problem in an hour, we'll recommend that over building a custom solution. Our goal is to find the right balance between effectiveness and efficiency, whether that means using existing tools or building custom solutions." },
    { question: "How quickly can we see results?", answer: "Usually initial features can be rolled out within weeks of starting the project. We break down improvements into smaller, valuable chunks, allowing you to see benefits quickly while we continue building more comprehensive solutions. Basic deployments typically target 2-3 months for completion." },
    { question: "What makes OmniLink different from other solutions?", answer: "OmniLink combines practical automation with deep business process understanding. Instead of forcing you to adapt to new systems, we enhance and connect your existing tools while maintaining human control over critical decisions." },
  ],
};
