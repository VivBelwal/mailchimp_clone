import optimize from "../assets/Images/Optimize.avif";
import email_automation from "../assets/Images/email_automation.avif";
import generative from "../assets/Images/generative_ai.avif";
import refine from "../assets/Images/refine.avif";


let features_data = [
  {
    title: "Convert with email automations",
    image: email_automation,
    description:
      "Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.",
    button_text: "Explore marketing automation",
    bg: "bg-[#d99536]"
  },
  {
    title: "Create faster with generative AI",
    image: generative,
    description:
      "Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates.",
    button_text: "Explore AI tools",
    bg: "bg-[#f6f6f4]"
  },
  {
    title: "Refine with segmentation",
    image: refine,
    description:
      "Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.",
    button_text: "Explore audience management",
    bg: "bg-[#e7b75f]"
  },
  {
    title: "Optimize with analytics & reporting",
    image: optimize,
    description:
      "Analyze performance with custom reports, funnel visualizations, and industry benchmarking.",
    button_text: "Explore analytics & reporting",
    bg: "bg-[#fbeeca]"
  },
];

export default features_data
