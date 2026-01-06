import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Target,
  Users,
  Award,
  Zap,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Brain,
} from "lucide-react";

export default function Portfolio() {
  const [currentWord, setCurrentWord] = useState(0);
  const canvasRef = useRef(null);

  const words = [
    "Thoughtful Engineer",
    "Problem-Centered",
    "Precision-Oriented",
    "Impact-Focused"
  ];

  /* ===================== TEXT ROTATION ===================== */
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentWord((p) => (p + 1) % words.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  /* ===================== CANVAS BACKGROUND ===================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "rgba(59,130,246,0.8)";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(59,130,246,0.5)";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 100) {
            ctx.strokeStyle = `rgba(96,165,250,${0.2 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const stats = [
    {icon: <Target />, value: "93%", label: "Retrieval Accuracy Achieved"},
    {icon: <Users />, value: "95%+", label: "Intruder Detection Accuracy"},
    {icon: <Award />, value: "$2.1M", label: "Client Cost Savings"},
    {icon: <Zap />, value: "140s → 20s", label: "Execution Time Reduction"}
  ];

  const experience = [
    {
      company: "Oracle",
      role: "AI/ML Engineer Intern",
      period: "Feb 2025 – Jul 2025",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Automated extraction of key legal clauses from 100+ page documents using LLMSherpa, Word2Vec embeddings, and dense vector search across 8 US regions",
        "Improved retrieval accuracy from 61% to 93% by designing an LLM-based taxonomy filtering layer (Cohere Command R+), eliminating irrelevant semantic matches at scale",
        "Led a 5-member team to deploy the system across diverse document structures, reducing annual client costs from $2.3M to $200K–$300K"
      ]
    },
    {
      company: "Toyota Kirloskar Auto Parts",
      role: "Data Analyst Intern",
      period: "Jun 2024 – Sep 2024",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Automated Excel-based safety validations for large datasets (1000 rows × 700 columns) using Python and Pandas, replacing manual checks driven by frequently changing criteria sheets",
        "Reduced execution time from 140s to 20s by eliminating Excel Macros and implementing an optimized Python pipeline",
        "Built a Tkinter GUI for one-click execution, enabling fully automated validation for gears, axles and driveshafts with 100% accuracy and zero manual intervention"
      ]
    }
  ];

  const projects = [
    {
      title: "Explainable Skin Lesion Classification with Attention-Enhanced CNNs",
      impact: "87.4% Test Accuracy",
      stack: "Python • PyTorch • EfficientNet-B0",
      desc: "Built an interpretable skin-lesion classification model using EfficientNet-B0 with a metadata-conditioned spatial attention module, embedding explainability directly into training. Achieved improved macro-F1 from 0.776 → 0.789, delivering balanced performance across 7 lesion classes on the HAM10000 dataset.",
      highlights: ["Trainable attention", "87.4% accuracy", "Balanced performance"]
    },
    {
      title: "Human Intruder Detection System",
      impact: "95%+ Accuracy",
      stack: "Python • PyTorch • Raspberry Pi • YOLO • MTCNN • ResNet",
      desc: "Built a real-time intruder detection system using YOLO, MTCNN and ResNet, classifying students, faculty, and intruders from live CCTV feeds. Enabled low-latency, real-time alerts through integration with existing CCTV infrastructure.",
      highlights: ["Real-time detection", "CCTV integration", "Face recognition"]
    }
  ];

  const skills = {
    "Programming": ["Python", "Java", "C", "C++"],
    "AI/ML & Data Science": ["PyTorch", "TensorFlow", "Keras", "Pandas", "NumPy", "LangChain", "Hugging Face"],
    "Web Development": ["HTML", "CSS", "JavaScript", "NodeJS", "React", "Streamlit", "Tkinter", "Django"],
    "Databases & Tools": ["PostgreSQL", "MySQL", "Git", "GitHub", "Power BI", "Matplotlib", "Seaborn"]
  };

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Virginia",
      period: "Aug 2025 – Dec 2026",
      location: "Charlottesville, VA",
      gpa: "4.00 / 4.00",
      courses: ["Machine Learning", "Natural Language Processing", "Human Computer Interaction"]
    },
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      school: "Visvesvarya Technological University",
      period: "Dec 2021 – Jul 2025",
      location: "Bengaluru, Karnataka",
      gpa: "3.90 / 4.00",
      courses: ["Data Structures & Algorithms", "Database Management", "Deep Learning"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white min-h-screen relative overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* NAV */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-slate-900/60 backdrop-blur-xl rounded-full border border-blue-500/20 shadow-lg shadow-blue-500/10">
        <div className="flex gap-8 text-sm font-medium">
          {["Home", "Experience", "Projects", "Skills", "Contact"].map((i) => (
            <a 
              key={i} 
              href={`#${i.toLowerCase()}`} 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {i}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 relative"
      >
        <div className="z-10 max-w-5xl">
          <div className="mb-8 inline-block">
            <div className="text-blue-400 text-sm font-mono mb-4 tracking-widest animate-pulse">
              &lt;SYSTEM.INITIALIZE&gt;
            </div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-[fade-in_1s_ease-out]">
            Tejas Venu
          </h1>
          
          <div className="h-16 mb-6">
            <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-[slide-up_0.5s_ease-out]">
              {words[currentWord]}
            </p>
          </div>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto animate-[fade-in_1s_ease-out_0.5s_both]">
            CS Graduate Student specializing in Machine Learning & Generative AI • Building intelligent, data-driven systems with Python, PyTorch & LangChain
          </p>

          <div className="flex gap-4 justify-center mb-12 animate-[fade-in_1s_ease-out_0.7s_both]">
            <a href="mailto:pmm7nh@virginia.edu" className="flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
              <span>pmm7nh@virginia.edu</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:+19044962830" className="text-blue-400 hover:text-cyan-400 transition-colors">
              +1 (904) 496-2830
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                style={{ animation: `fade-in 0.8s ease-out ${1 + i * 0.1}s both` }}
              >
                <div className="text-blue-400 flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300">
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>

          <ChevronDown className="mx-auto animate-bounce text-blue-400/60" size={32} />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
        
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group"
              style={{ animation: `fade-in 0.8s ease-out ${i * 0.2}s both` }}
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-cyan-400" size={24} />
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-300 mb-1">{exp.role}</p>
                  <p className="text-sm text-slate-500">{exp.location}</p>
                </div>
                <span className="text-cyan-400 font-mono text-sm bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, j) => (
                  <li 
                    key={j} 
                    className="text-slate-300 flex items-start gap-3 group-hover:text-white transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 relative">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Featured Projects
        </h2>

        <div className="space-y-10 max-w-5xl mx-auto relative z-10">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group relative"
              style={{ animation: `fade-in 0.8s ease-out ${i * 0.2}s both` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-[2px] rounded-3xl">
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-3xl p-8 hover:bg-slate-900/95 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      {proj.title}
                    </h3>
                  </div>
                  
                  <div className="inline-block mb-4">
                    <p className="text-cyan-400 font-bold text-lg bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                      {proj.impact}
                    </p>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {proj.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.highlights.map((highlight, j) => (
                      <span 
                        key={j}
                        className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-400 font-mono">
                    <span className="text-blue-400">Stack:</span> {proj.stack}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
        
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={i}
              className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group"
              style={{ animation: `fade-in 0.8s ease-out ${i * 0.2}s both` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-cyan-400" size={24} />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <span 
                    key={j}
                    className="bg-blue-500/10 text-slate-300 px-4 py-2 rounded-full border border-blue-500/20 text-sm hover:bg-blue-500/20 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
                style={{ animation: `fade-in 0.8s ease-out ${i * 0.2}s both` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <GraduationCap className="text-cyan-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-slate-300 mb-1">{edu.school}</p>
                    <p className="text-sm text-slate-500 mb-2">{edu.location}</p>
                    <span className="text-cyan-400 font-mono text-sm bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 inline-block">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <p className="text-blue-400 font-semibold mt-3">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.courses.map((course, j) => (
                    <span 
                      key={j}
                      className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 relative z-10">
          Let's Build Together
        </h2>
        <p className="text-xl text-slate-300 mb-12 relative z-10">
          Open to opportunities in Machine Learning, Data Engineering, Data Science and Software Development
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 relative z-10">
          <a 
            href="mailto:pmm7nh@virginia.edu"
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a 
            href="https://drive.google.com/file/d/1Pa_bMLKgROzxyiFEB6lwSSASMufAuZKu/view?usp=sharing"
            className="px-10 py-4 border-2 border-blue-500/30 rounded-full hover:bg-blue-500/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-8 justify-center relative z-10">
          <a 
            href="https://www.linkedin.com/in/tejas-venu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={40} />
          </a>
          <a 
            href="https://github.com/Tejas-Venu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <Github size={40} />
          </a>
          <a 
            href="mailto:pmm7nh@virginia.edu"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <Mail size={40} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-400 border-t border-blue-500/10 relative backdrop-blur-sm">
        <p className="font-mono text-sm mb-2">
          &lt;/SYSTEM&gt; Built with precision and innovation
        </p>
        <p className="text-xs text-slate-500">
          © 2025 Tejas Venu. All rights reserved.
        </p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}