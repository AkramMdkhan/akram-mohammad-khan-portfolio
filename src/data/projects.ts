export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  name: string;
  image: string; // screenshot saved in public/projects/
  shortDescription: string; // shown on the card
  description: string; // shown on the details page
  techStack: string[];
  liveUrl: string;
  githubUrl: string; // client repo only
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "pizzahub",
    name: "PizzaHub",
    image: "/projects/pizzahub.jpg",
    shortDescription:
      "A role-based pizza ordering platform for customers, vendors and admins.",
    description:
      "PizzaHub is a full-stack pizza ordering and delivery platform with three roles. Customers browse the menu with search, category and location filters and price sorting, place orders with delivery details, and track or cancel pending orders from their dashboard. Vendors add and manage menu items, accept or reject incoming orders, and upgrade from the Free plan (3 active items) to Premium through Stripe Checkout, which is activated by verified webhooks. Admins manage users, approve or reject menu items before they go live, and review all subscription transactions. Users sign in with email or Google, and role-based route guards and JWT-verified API requests keep each dashboard private.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Better Auth",
      "JWT",
      "Stripe",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://pizzahub-client-beige.vercel.app",
    githubUrl: "https://github.com/AkramMdkhan/pizzahub-client",
    challenges: [
      "Verifying Stripe webhooks on the Express server. The route needed the raw request body and had to be mounted before the JSON parser so Premium only activates on signed events.",
      "Sharing login between the Next.js client and the separate Express server, using a shared JWT secret and middleware that checks both the token and the user's role.",
      "Enforcing the order rules on the server: no ordering your own items, no duplicate active order for the same item and date, and one-time accept or reject by the vendor.",
      "Fixing a live \"MongoTopologyClosedError\" on Vercel by tuning the MongoDB connection pool, after dashboards crashed with a session error in production.",
    ],
    improvements: [
      "Add customer reviews and ratings for menu items.",
      "Show an order status timeline from placed to delivered.",
      "Send email notifications when an order is accepted or rejected.",
      "Add a wishlist so customers can save favourite pizzas.",
    ],
  },
  {
    slug: "shebabondhu",
    name: "ShebaBondhu",
    image: "/projects/shebabondhu.JPG",
    shortDescription:
      "A community platform to create, join and manage local social service events.",
    description:
      "ShebaBondhu (সেবাবন্ধু) connects people with social service events in their area, such as winter clothes and blanket distribution drives. Visitors can browse upcoming events with search and type filters and open a public details page. Logged-in users can join events, create their own, and update or delete the events they created. A Joined Events page lists everything they signed up for, sorted by date. Users sign in with email or Google, can update their profile, and switch between light and dark themes. The Express API protects private actions with JWT verification.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "JWT",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://shebabondhu-client.vercel.app/",
    githubUrl: "https://github.com/AkramMdkhan/shebabondhu-client",
    challenges: [
      "Sharing login between the Next.js client and the separate Express server. I used the Better Auth JWT plugin and verified tokens on the server through the JWKS endpoint.",
      "Protecting private routes and sending users back to the page they wanted after login, without logging them out on reload.",
      "Setting up Google sign-in, including fixing a \"Provider not found\" error caused by the auth config and environment keys.",
      "Making sure only the creator can update or delete an event, and that deleting an event also removes its joins.",
    ],
    improvements: [
      "Upload event images directly instead of pasting an image URL.",
      "Send email reminders to people who joined an event.",
      "Show event locations on a map.",
      "Add GitHub login alongside Google.",
    ],
  },
  {
    slug: "bazardor",
    name: "BazarDor",
    image: "/projects/bazardor.png",
    shortDescription:
      "A Bengali grocery price tracker showing which items got cheaper or costlier today.",
    description:
      "BazarDor (বাজার দর) helps people check daily grocery prices. It shows the items whose prices went up or down today, a full product grid, category pages, and a product details page with a market-wise table of minimum, maximum and average prices. Users can sign up with email or Google, and private pages like the profile and product details are protected.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB Atlas",
    ],
    liveUrl: "https://assignment-seven-bazardor.vercel.app",
    githubUrl: "https://github.com/AkramMdkhan/assignment-seven-bazardor",
    challenges: [
      "Connecting MongoDB Atlas to Better Auth. A DNS connection error stopped sign-up data from saving until I fixed the connection.",
      "Protecting private pages like the profile and product details, and sending users back to the page they wanted after signing in.",
      "Matching the Figma design closely, including the sticky header with a live price ticker, while keeping it responsive.",
    ],
    improvements: [
      "Add price history charts for each product.",
      "Let users save favourite items and get price-drop alerts.",
      "Add GitHub login alongside Google.",
    ],
  },
  {
    slug: "fit-log",
    name: "Fit Log",
    image: "/projects/fitlog.jpg",
    shortDescription:
      "A workout planner where you browse workouts, plan your day and track what you finish.",
    description:
      "Fit Log turns a Figma design into a working workout planner. Visitors browse a library of workouts loaded from an API, open a details page, and add workouts to today's plan or save them for later. The My Plan page shows summary metrics, Today's Plan and Saved tabs, and lets users mark workouts as done or remove them. Search and sorting make it easy to find the right workout.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Compiler",
      "react-hot-toast",
    ],
    liveUrl: "https://b-14-assignment-6-fit-log-xi.vercel.app",
    githubUrl: "https://github.com/AkramMdkhan/B-14-Assignment-6-Fit-Log",
    challenges: [
      "Sharing the plan and saved state across pages with React Context, and keeping it after a page reload using localStorage.",
      "Fixing a wrong import path for the context provider that broke the workout details page.",
      "Making sure every page, including the details page and invalid URLs, still works after a reload on the deployed site.",
    ],
    improvements: [
      "Add user accounts so plans sync across devices.",
      "Add progress charts for completed workouts.",
      "Limit a day's plan to five workouts, with a clear message when it's full.",
    ],
  },
  {
    slug: "dev-stack",
    name: "DevStack",
    image: "/projects/devstack.png",
    shortDescription:
      "Explore developer technologies and build your own custom tech stack.",
    description:
      "DevStack lets visitors explore popular development technologies in a card grid, with details like category, difficulty and rating. They can add technologies to a Your Stack sidebar, remove one, or clear everything, and duplicates are blocked. Toast messages confirm every action, and a loading state shows while the data loads.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "react-toastify"],
    liveUrl: "https://dev-stack-by-akram.netlify.app",
    githubUrl: "https://github.com/AkramMdkhan/B-14-Assignment-5-Dev-Stack-",
    challenges: [
      "Keeping the stack state in sync across add, remove and remove-all while blocking duplicates.",
      "Getting toast notifications to appear. They only worked after adding the ToastContainer in main.tsx.",
      "Showing a realistic loading state when the technology data comes from a local JSON file.",
    ],
    improvements: [
      "Save the chosen stack so it stays after a refresh.",
      "Load the technology data from a real API.",
      "Add side-by-side technology comparison.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}