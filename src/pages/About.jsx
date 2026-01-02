import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  HeartPulse,
  SmilePlus,
  Dna,
  Video,
  Globe,
  Biohazard,
  Radiation,
  Star,
  User,
  BookOpen,
  Stethoscope,
  PackageSearch,
  Rocket,
} from "lucide-react";
import { banner_style } from "../Styles/styles";
import about1 from "../assets/Images1/about1.png"
const data = {
  event: {
    title: "About Us",
    date: "25th - 27th Nov 2025",
    organizer: "Helix Conferences",
    description: [
      <>
  
The <Link to="/nursesummit-orators"className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300">
World Nursing & Nurse Practices Conclave, </Link>
 organized by Helix Conferences, is a distinguished international forum dedicated to advancing professional nursing practice, clinical excellence, and leadership across global healthcare systems.
The conclave is designed to facilitate high-level knowledge exchange, interdisciplinary collaboration, and evidence-based dialogue that strengthens nursing competencies and healthcare outcomes. Key focus areas include advanced nursing practice, patient safety, clinical decision-making, nursing education, digital health integration, mental health, and workforce resilience.
Through keynote addresses, plenary sessions, expert-led panels, skills workshops, and practice-driven presentations, participants gain strategic insights into evolving care models, healthcare technologies, regulatory standards, and professional development pathways.
<Link to= "/about-nursesummit"  className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300">
 </Link>
 
      
      </>,
      <>
        {/* From cutting-edge AI to advanced robotics, from cybersecurity trends to sustainable engineering—we curate thought-provoking content and create immersive spaces where innovation thrives. Explore our sessions to engage with the future of technology, exchange ideas with global experts, and drive impactful solutions across industries.{" "} */}
        <Link
          to= "/nursesummit-conference-tracks/" 
          target="blank"
          rel="noopener noreferrer"
          className="text-accent font-bold"
        ></Link>{" "}
      </>,
    ],
  },

  join: [
    {
      text: "",
      // linkText: "Microbiome Science",
      // link: "/",
      suffix:
       "Join global nursing leaders, educators, and healthcare professionals in shaping a compassionate, skilled, and future-ready nursing workforce..",
    },
  ],
highlights: [
  {
    title: "Distinguished Keynote Speakers",
    description:
      "Engage with internationally recognized nursing leaders and healthcare experts driving excellence in nursing practice and patient care.",
  },
  {
    title: "Clinical Workshops and Expert Sessions",
    description:
      "Participate in in-depth sessions on advanced nursing skills, evidence-based practice, patient safety, and clinical innovation.",
  },
  {
    title: "Innovation and Practice Exhibition",
    description:
      "Explore nursing technologies, digital health tools, patient care solutions, and next-generation clinical support systems.",
  },
  {
    title: "Strategic Networking Opportunities",
    description:
      "Connect with global nursing professionals, educators, healthcare organizations, and policy leaders.",
  },
  {
    title: "Patient-Centered Care Focus",
    description:
      "Gain insights into holistic care models, quality improvement, ethics, and compassionate nursing practices.",
  },
  {
    title: "Professional & Clinical Intelligence",
    description:
      "Discover the latest research, best practices, regulatory updates, and global nursing standards.",
    linkText: "View event schedule",
    link: "/nursesummit-event-schedule",
  },
  {
    title: "Collaboration and Leadership Platforms",
    description:
      "Build interdisciplinary partnerships to strengthen nursing leadership and healthcare delivery.",
  },
  {
    title: "Professional Development and Accreditation",
    description:
      "Earn professional development recognition through certified nursing education sessions and hands-on clinical workshops.",
  },
],








  dates: {
    eventDate: "25th-27th Nov 2025",
    venue: "Novotel Valencia, Spain",
    registrationDeadline: "1st Nov 2025",
  },
};

const AboutPublicHealth = () => {
  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      <div
        className={`${banner_style} w-full mx-auto about-banner`}
        style={{
          backgroundImage:
            `url(${about1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
          {data.event.title}
        </h1>
      </div>

      <h1 className="text-4xl mt-2 font-bold text-one">
Empowering Nurses Advancing Healthcare Excellence
      </h1>
      <p className="text-center text-gray-600 text-3xl mb-6">
        <strong>
          19<sup></sup> - 20<sup></sup> Nov 2026
        </strong>
      </p>

      {data.event.description.map((desc, idx) => (
        <p
          key={idx}
          className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
        >
          {desc}
        </p>
      ))}

      {/* Join Section */}
      <section className="mb-10 text-center w-full min-w-4xl px-2 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-one mb-4 w-full">
          Join the Global Community at on NURSESUMMIT-2026
        </h2>
        {data.join.map((para, idx) => (
          <p
            key={idx}
            className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
          >
            {para.text} <Link to={para.link}>{para.linkText}</Link>
            {para.suffix}
          </p>
        ))}
      </section>

      {/* Themes Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl my-8 font-bold text-one">Who Can Attend...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <User className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
 Registered Nurses and Advanced Practice Nurses
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <BookOpen className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
Nursing Educators and Academic Leaders
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <Rocket className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
Clinical Nurse Specialists and Nurse Practitioners
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <PackageSearch className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
Nursing Administrators and Healthcare Managers
            </h3>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl font-bold text-one mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-start">
          {data.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 text-md text-gray-800 text-left flex items-start shadow-sm "
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-3 mt-1" />
              <div className="flex flex-wrap items-start">
                <h3 className="font-semibold whitespace-nowrap mr-1">
                  {highlight.title} –
                </h3>
                <p className="text-md text-gray-600 flex-1">
                  {highlight.link ? (
                    <>
                      {highlight.description}{" "}
                      <Link to={highlight.link} className>
                        {highlight.linkText}
                      </Link>
                    </>
                  ) : (
                    highlight.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dates Section */}
      {/* <section className="mb-16 text-center w-full md:px-12 px-4">
        <h2 className="text-4xl font-bold text-one mb-8">
          Important Dates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Calendar className="w-6 h-6 text-one mb-2" />
            <strong>Event Date</strong>
            <p>{data.dates.eventDate}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Globe className="w-6 h-6 text-one mb-2" />
            <strong>Proposed Venue</strong>
            <p>{data.dates.venue}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <BadgeCheck className="w-6 h-6 text-one mb-2" />
            <strong>Registration Deadline</strong>
            <p>{data.dates.registrationDeadline}</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPublicHealth;
