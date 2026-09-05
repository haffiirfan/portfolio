import { NavbarDemo } from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import TextSummarizer from "../assets/FYPImages/textSummarize.webp";
import MysteryLetter from "../assets/FYPImages/mysteryLetter.jpg";
import Sentiment from "../assets/FYPImages/sentimentAnalysis.png";
import HelmetDetection from "../assets/FYPImages/helmetDetection.jpeg";
import waterSafety from "../assets/FYPImages/waterSafetyPrediction.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Subway Surfer (C++ Game)",
    description:
      "Developed a 2D endless runner game inspired by Subway Surfer using C++ and OOP principles. Features include directional movement, obstacle generation, coin collection, magnet power-up, scoring system, and game-over logic for an immersive gameplay experience.",
    techStack: ["C++", "OOP", "Game Development", "File Handling"],
    image: "",
    github: ""
  },
  {
    title: "Text Summarizer",
    description:
      "A text summarization web application built using the T5 transformer model and deployed with Streamlit. Generates concise, meaningful summaries from long text inputs, demonstrating practical NLP applications and model deployment.",
    techStack: ["Python", "Transformers", "T5 Model", "NLP", "Streamlit"],
    image: TextSummarizer,
    github: ""
  },
  {
    title: "Mystery Letters (Word Guessing Game)",
    description:
      "Developed Mystery-Letters, a logic-driven word-guessing game where players deduce a secret two-letter combination using clues such as ‘Fermi,’ ‘Pico,’ and ‘Bagels.’ Players get 15 attempts, creating a fun mix of reasoning, deduction, and entertainment.",
    techStack: ["Python", "Logic Building", "Game Design"],
    image: MysteryLetter,
    github: ""
  },
  {
    title: "Movie Review Sentiment Analyzer",
    description:
      "Built a Streamlit web app that classifies movie reviews as positive or negative using NLP and deep learning models. Adapted from an open-source project, with enhanced interactivity and real-time prediction interface.",
    techStack: ["Python", "NLP", "Deep Learning", "Streamlit"],
    image: Sentiment,
    github: ""
  },
  {
    title: "Helmet Detection with YOLOv8",
    description:
      "Implemented a custom helmet detection system using YOLOv8 and Roboflow. Used transfer learning, custom dataset preparation, and data augmentation to achieve high detection accuracy on real-world visuals.",
    techStack: ["Python", "YOLOv8", "Roboflow", "Computer Vision", "Deep Learning"],
    image: HelmetDetection,
    github: ""
  },
  {
    title: "Water Safety Prediction Model",
    description:
      "Created a Streamlit-based Water Potability Prediction System using a trained ML classifier. The model evaluates multiple physicochemical properties — pH, hardness, chloramines, organic carbon, turbidity, etc. — to determine if water is safe for drinking.",
    techStack: ["Python", "Machine Learning", "Streamlit", "Data Preprocessing"],
    image: waterSafety,
    github: ""
  }
];

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-[#FFE9D9] dark:bg-[#0c0d0e] text-gray-900 dark:text-white transition-colors duration-300">
      <NavbarDemo />

      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFB646] SyneClass">All Projects</h1>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-base max-w-xl mx-auto">
            Explore a curated selection of AI, Deep Learning, and Software Engineering projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#141416] shadow-md rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-[#FFB646]/60 dark:border-gray-800 flex flex-col justify-between h-full"
            >
              <div>
                <div className="h-44 w-full bg-[#FFB646]/20 dark:bg-white/5 rounded-xl mb-4 flex items-center justify-center text-gray-500 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <span className="font-semibold text-[#FF9330]">Interactive Project</span>
                  )}
                </div>

                <h2 className="text-xl font-semibold mb-2 text-[#FFB646] SyneClass">{project.title}</h2>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#FFB646]/20 text-[#FF9330] px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-semibold text-[#FFB646] hover:text-[#E5942E] transition-colors"
                  >
                    View on GitHub →
                  </a>
                ) : (
                  <span className="inline-block mt-2 text-sm font-semibold text-gray-400 cursor-default">
                    Academic / Research Project
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
