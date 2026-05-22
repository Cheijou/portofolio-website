import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function PortfolioWebsite() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [currentIndexes, setCurrentIndexes] = useState({});

  const nextImage = (projectIndex, total) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % total,
    }));
  };

  const prevImage = (projectIndex, total) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + total) % total,
    }));
  };

  const projects = [
    {
      title: "Focus Arena",
      description:
        "A gamified productivity platform using Pomodoro-based systems to improve task consistency and user motivation.",
      stack: "Laravel • PHP • MySQL",
      category: "Full-Stack Web App",
      destiny: "https://github.com/Cheijou/focus-arena",
      mockupBg: "from-[#4E3B31] to-[#6E5849]",
      mockupAccent: "#C79A4A",
      images: ["/1.png", "/1-2.png", "/1-3.png"],
    },
    {
      title: "Competition Information System",
      description:
        "Full-stack competition management website developed for PIMUS XV Universitas Surabaya.",
      stack: "Laravel • Web Development",
      category: "Full-Stack Web App",
      destiny: "#",
      mockupBg: "from-[#1a1a2e] to-[#16213e]",
      mockupAccent: "#e94560",
      images: ["/2.png", "/2-2.png", "/2-3.png", "/2-4.png", "/2-5.png"],
    },
    {
      title: "Scholar Crawler",
      description:
        "Google Scholar crawler that using web crawling, extract, analyze, & retrieve journals based on the input keyword using PHP & Python.",
      stack: "PHP • Python • Web Crawling • Text Mining",
      category: "AI & Text",
      destiny: "https://github.com/Cheijou/information-retrieval-project",
      mockupBg: "from-[#0f2027] to-[#203a43]",
      mockupAccent: "#00d4aa",
      images: ["/3.png"],
    },
    {
      title: "Pamer Yuk",
      description:
        "My database final project for a social media style application with relational database implementation.",
      stack: "C# • Database Systems",
      category: "Desktop App",
      destiny: "https://github.com/Cheijou/pamer-yuk-db",
      mockupBg: "from-[#2d1b69] to-[#11023a]",
      mockupAccent: "#a855f7",
      images: ["/4.png", "/4-2.png", "/4-3.png"],
    },
    {
      title: "Portal Berita",
      description:
        "News article website integrated with a hybrid cross mobile platform application using modern frontend technologies.",
      stack: "TypeScript • Ionic",
      category: "Hybrid Mobile App",
      destiny: "https://github.com/Cheijou/project_HMP",
      mockupBg: "from-[#1a1a1a] to-[#2d2d2d]",
      mockupAccent: "#f59e0b",
      images: ["/5.png"],
    },
    {
      title: "Chicken Meat Classification App",
      description:
        "Final project for an image processing course, focused image processing & machine learning for chicken meat classification.",
      stack: "Python • Machine Learning",
      category: "AI & Image",
      destiny: "https://github.com/Cheijou/chicken-meat-classfication",
      mockupBg: "from-[#1a2e1a] to-[#0f1f0f]",
      mockupAccent: "#22c55e",
      images: ["/6.png"],
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "C",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "R",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
        },
      ],
    },
    {
      category: "Web & Mobile Development",
      items: [
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "NextJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: ".NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "Ionic",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      category: "AI & Data",
      items: [
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "Keras",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
        },
        {
          name: "Numpy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
          name: "Anaconda",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg",
        },
        {
          name: "Beautiful Soup",
          icon: "https://img.icons8.com/ios/50/soup-plate--v1.png",
        },
        {
          name: "OpenCV",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "SQLite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Canva",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        {
          name: "Selenium",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#4E3B31] font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#F7F1E5]/95 border-b border-[#E8D5B5] px-6 md:px-20 py-5 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-8 text-sm md:text-base font-medium text-[#6E5849]">
            {["about", "skills", "projects", "experience", "contact"].map(
              (id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="cursor-pointer hover:text-[#C79A4A] transition-colors duration-300 bg-transparent border-none p-0 capitalize"
                >
                  {id}
                </button>
              ),
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-6 md:px-20 pt-36 pb-20 ">
        <div className="absolute top-0 left-0 pointer-events-none w-72 h-72 bg-[#F3D8A6] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 pointer-events-none w-80 h-80 bg-[#E8C07D] rounded-full blur-3xl opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#A67C52] mb-4">
              Portfolio Website
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Samuel Calvin
              <br />
              <span className="text-[#C79A4A]">Muliawan</span>
            </h1>
            <p className="text-lg leading-relaxed text-[#6E5849] max-w-xl mb-8">
              Informatics Engineering student passionate about full-stack web
              development, artificial intelligence, and fun user centered
              digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="px-7 py-3 bg-[#C79A4A] text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-none"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-7 py-3 border border-[#C79A4A] rounded-2xl hover:bg-[#F1DFC0] transition-all duration-300 cursor-pointer bg-transparent"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[340px] h-[420px] rounded-[40px] bg-gradient-to-br from-[#F3D8A6] to-[#E8C07D] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
              <img
                src="/vin.jpeg"
                alt="Samuel Calvin Muliawan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-20 py-22">
        <div className="max-w-6xl mx-auto bg-[#FFF8ED] rounded-[40px] p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] mb-3">
                About Me
              </p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Building fun,
                <span className="text-[#C79A4A]"> impactful</span>
                <br />
                digital experiences.
              </h2>
            </div>
            <p className="text-[#6E5849] leading-relaxed text-lg">
              I enjoy building modern websites, experimenting with AI models,
              and designing interactive experiences that feel both elegant and
              engaging. I love combining analytical thinking with creativity to
              solve real-world problems through technology.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] mb-3">
              Skills
            </p>
            <h2 className="text-4xl font-bold">Tech Stack</h2>
          </div>
          <div className="md:columns-2 gap-6 space-y-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="break-inside-avoid bg-[#FFF8ED] rounded-[28px] p-6 shadow-md border border-[#F1DFC0]"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#A67C52] mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 w-16 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#F7F1E5] flex items-center justify-center shadow-sm">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      <span className="text-xs text-center font-medium text-[#6E5849]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] mb-3">
              Featured Projects
            </p>
            <h2 className="text-4xl font-bold">Selected Works</h2>
          </div>

          {/* 2-column grid, each card: mockup left + description right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, projectIndex) => (
              <div
                key={project.title}
                className="bg-[#FFF8ED] rounded-[28px] overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border border-[#F1DFC0] flex flex-col"
              >
                {/* Mockup area */}
                <div
                  className={`w-full h-52 bg-gradient-to-br ${project.mockupBg} relative overflow-hidden flex-shrink-0`}
                >
                  {/* Decorative dots like reference */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  {/* Mockup screen frame */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.images[currentIndexes[projectIndex] || 0]}
                      alt={project.title}
                    />

                    {project.images.length > 1 && (
                      <>
                        {/* Left Button */}
                        <button
                          onClick={() =>
                            prevImage(projectIndex, project.images.length)
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white z-10"
                        >
                          ←
                        </button>

                        {/* Right Button */}
                        <button
                          onClick={() =>
                            nextImage(projectIndex, project.images.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white z-10"
                        >
                          →
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {project.images.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i === (currentIndexes[projectIndex] || 0)
                                  ? "bg-white"
                                  : "bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Description area */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#F7E8C8] text-[#A67C52] font-medium ml-2 whitespace-nowrap flex-shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[#6E5849] leading-relaxed text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="text-xs font-medium text-[#A67C52] mb-4">
                    {project.stack}
                  </div>
                  {project.destiny !== "#" && (
                    <a
                      href={project.destiny}
                      target="_blank"
                      className="self-start px-5 py-2 rounded-xl bg-[#F3D8A6] hover:bg-[#E8C07D] transition-all duration-300 text-sm font-medium cursor-pointer border-none"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] mb-3">
              Experience
            </p>

            <h2 className="text-4xl font-bold">
              Professional & Leadership Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PIMUS */}
            <div className="bg-[#FFF8ED] rounded-[30px] p-8 shadow-lg border border-[#F1DFC0] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Full-stack Developer
                  </h3>

                  <p className="text-[#A67C52] font-medium mt-1">
                    PIMUS XV Universitas Surabaya
                  </p>
                </div>

                <span className="text-xs px-3 py-2 rounded-full bg-[#F7E8C8] text-[#A67C52] font-semibold whitespace-nowrap">
                  Jul 2025 — Dec 2025
                </span>
              </div>

              <ul className="list-disc ml-5 text-[#6E5849] leading-relaxed space-y-2 text-sm">
                <li>
                  Participated as vice coordinator in developing a competition
                  information system website
                </li>

                <li>
                  Developed submission and participant management features
                </li>

                <li>Collaborated using Laravel-based development workflows</li>

                <li>Assisted in bug maintenance during competition periods</li>
              </ul>
            </div>

            {/* DATABASE TA */}
            <div className="bg-[#FFF8ED] rounded-[30px] p-8 shadow-lg border border-[#F1DFC0] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Database Teaching Assistant
                  </h3>

                  <p className="text-[#A67C52] font-medium mt-1">
                    Universitas Surabaya
                  </p>
                </div>

                <span className="text-xs px-3 py-2 rounded-full bg-[#F7E8C8] text-[#A67C52] font-semibold whitespace-nowrap">
                  Sep 2025 — Dec 2025
                </span>
              </div>

              <ul className="list-disc ml-5 text-[#6E5849] leading-relaxed space-y-2 text-sm">
                <li>
                  Assisted students in understanding database concepts and SQL
                  implementation
                </li>

                <li>Guided practical sessions and assignments</li>

                <li>Supported lecturers during laboratory activities</li>
              </ul>
            </div>

            {/* KSM IF */}
            <div className="bg-[#FFF8ED] rounded-[30px] p-8 shadow-lg border border-[#F1DFC0] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Coordinator of Creative Design Department
                  </h3>

                  <p className="text-[#A67C52] font-medium mt-1">
                    KSM-IF Universitas Surabaya
                  </p>
                </div>

                <span className="text-xs px-3 py-2 rounded-full bg-[#F7E8C8] text-[#A67C52] font-semibold whitespace-nowrap">
                  Oct 2024 — Aug 2025
                </span>
              </div>

              <ul className="list-disc ml-5 text-[#6E5849] leading-relaxed space-y-2 text-sm">
                <li>
                  Led the creative design division for events and publications
                </li>

                <li>Maintained and managed the official KSM-IF website</li>

                <li>
                  Coordinated documentation, design tasks, and collaboration
                </li>

                <li>Ensured visual consistency across organizational media</li>
              </ul>
            </div>

            {/* KSM MEMBER */}
            <div className="bg-[#FFF8ED] rounded-[30px] p-8 shadow-lg border border-[#F1DFC0] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Member of Creative Design Department
                  </h3>

                  <p className="text-[#A67C52] font-medium mt-1">
                    KSM-IF Universitas Surabaya
                  </p>
                </div>

                <span className="text-xs px-3 py-2 rounded-full bg-[#F7E8C8] text-[#A67C52] font-semibold whitespace-nowrap">
                  Oct 2023 — Aug 2024
                </span>
              </div>

              <ul className="list-disc ml-5 text-[#6E5849] leading-relaxed space-y-2 text-sm">
                <li>Created promotional and visual materials for activities</li>

                <li>Supported publication and event documentation needs</li>

                <li>
                  Collaborated with internal divisions for digital content
                </li>
              </ul>
            </div>

            {/* MOB FT */}
            <div className="bg-[#FFF8ED] rounded-[30px] p-8 shadow-lg border border-[#F1DFC0] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Vice Coordinator of Technical Equipment Division
                  </h3>

                  <p className="text-[#A67C52] font-medium mt-1">
                    MOB-FT Universitas Surabaya
                  </p>
                </div>

                <span className="text-xs px-3 py-2 rounded-full bg-[#F7E8C8] text-[#A67C52] font-semibold whitespace-nowrap">
                  May 2025 — Aug 2025
                </span>
              </div>

              <ul className="list-disc ml-5 text-[#6E5849] leading-relaxed space-y-2 text-sm">
                <li>
                  Coordinated technical preparation and operational logistics
                </li>

                <li>Managed division coordination during event execution</li>

                <li>
                  Ensured all technical requirements were properly prepared
                </li>
              </ul>
            </div>

            {/* ILPC */}
            <div className="bg-[#FFF8ED] rounded-[30px] p-8 shadow-lg border border-[#F1DFC0] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Vice Coordinator of Equipment Division
                  </h3>

                  <p className="text-[#A67C52] font-medium mt-1">
                    Informatics Logical & Programming Competition (ILPC)
                  </p>
                </div>

                <span className="text-xs px-3 py-2 rounded-full bg-[#F7E8C8] text-[#A67C52] font-semibold whitespace-nowrap">
                  Oct 2024 — Feb 2025
                </span>
              </div>

              <ul className="list-disc ml-5 text-[#6E5849] leading-relaxed space-y-2 text-sm">
                <li>Coordinated event equipment preparation and logistics</li>

                <li>
                  Managed operational support during competition execution
                </li>

                <li>
                  Collaborated with committees to ensure technical readiness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] mb-3">
            Contact
          </p>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Let's build something
            <span className="text-[#C79A4A]"> amazing.</span>
          </h2>
          <p className="text-lg text-[#6E5849] mb-10">
            Open for internship opportunities, collaborations, and exciting
            projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Cheijou"
              target="_blank"
              className="px-7 py-3 rounded-2xl bg-[#C79A4A] text-white shadow-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/calvmlwn/"
              target="_blank"
              className="px-7 py-3 rounded-2xl border border-[#C79A4A] hover:bg-[#F1DFC0] transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <footer className="mt-20 py-8 border-t border-[#E8D5B5] text-center">
        <p className="text-sm text-[#6E5849]">
          © {new Date().getFullYear()} Samuel Calvin Muliawan. All Rights
          Reserved.
        </p>

        <p className="text-sm text-[#A67C52] mt-2">
          Built with React • TailwindCSS • JavaScript • Vite
        </p>
      </footer>
    </div>
  );
}

export default PortfolioWebsite;
