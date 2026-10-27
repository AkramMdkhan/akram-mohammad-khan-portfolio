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
    liveUrl: "https://brilliant-chaja-01e52a.netlify.app/",
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