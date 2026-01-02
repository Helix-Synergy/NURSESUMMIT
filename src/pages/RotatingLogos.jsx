import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.webp";
import img2 from "../assets/tracks/img2.webp"
import img3  from "../assets/tracks/img3.png";
import img4 from "../assets/tracks/img4.webp";
import img5 from "../assets/tracks/img5.jpg";
import img6 from "../assets/tracks/img6.jpg"
import img7 from "../assets/tracks/img7.jpg";
import img8 from "../assets/tracks/img8.jpg"
import img9 from "../assets/tracks/img9.webp";
import img10 from "../assets/tracks/img10.jpg"
import img11 from "../assets/tracks/img11.webp";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.avif";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.jpg";
import img16 from "../assets/tracks/img16.jpg"
import img17 from "../assets/tracks/img17.webp"
import img18 from "../assets/tracks/img18.jpg";
import img19 from "../assets/tracks/img19.jpeg"
import img20 from "../assets/tracks/img20.jpg"

export const tracks = [
  {
    image: img1,
    title: "Public Health",
    description: (
      <>
 {" "}
        <Link
          to= "/nursesummit-orators" 
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Public Health
        </Link> nursing focuses on preventing disease, promoting health, and protecting communities. It addresses health equity, vaccination programs, maternal and child health, environmental health, and emergency preparedness. Nurses play a critical role in education, surveillance, policy implementation, and community-based interventions to improve population-level health outcomes globally.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Future of Nursing",
    description: (
      <>
The{" "}
        <Link
          to=  "/nursesummit-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Future of Nursing
        </Link>{" "} emphasizes expanded professional roles, leadership development, advanced education, and digital integration. It highlights workforce resilience, policy engagement, interdisciplinary collaboration, and innovation in care delivery. Empowering nurses with skills, technology, and authority strengthens healthcare systems and enables patient-centered, equitable, and sustainable care for future global health challenges.
      </>
    ),
  },

  {
    image: img3,
    title: "Digital Health & Tele-Nursing",
    description: (
      <>
{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Digital Health and Tele-Nursing 
        </Link>integrate telehealth platforms, mobile technologies, and remote monitoring into nursing practice. These tools enhance access to care, continuity, patient engagement, and efficiency. Nurses use digital systems for assessment, education, monitoring, and coordination, enabling personalized, data-driven, and timely care across diverse healthcare environments worldwide.
      </>
    ),
  },

  {
    image: img4,
    title: "Advanced Clinical Nursing",
    description: (
      <>
  Advanced{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        > Clinical Nursing </Link>{" "} focuses on specialized, evidence-based practice for managing complex health conditions. It enhances diagnostic reasoning, therapeutic decision-making, and clinical leadership. Advanced practice nurses deliver high-quality care across acute and chronic settings, improving patient outcomes, care coordination, and healthcare system performance through expertise, autonomy, and continuous professional development.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Critical Care Nursing",
    description: (
      <>
{" "}
        <Link
          to="/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Critical Care Nursing 
        </Link>{" "}  provides specialized care for patients with life-threatening conditions. It emphasizes advanced monitoring, mechanical ventilation, emergency response, and rapid clinical decision-making. Nurses collaborate with multidisciplinary teams to ensure patient safety, stabilize critical conditions, support families, and deliver compassionate, high-intensity care in intensive and emergency healthcare settings.
      </>
    ),
  },

  {
    image: img6,
    title: "Mental Health",
    description: (
      <>

        <Link
          to= "/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Mental Health
        </Link>{" "} nursing supports individuals experiencing psychological, emotional, and behavioral challenges. It focuses on assessment, therapeutic communication, crisis management, and holistic care. Nurses promote recovery, resilience, and social integration while addressing stigma, supporting families, and delivering integrated mental health services across clinical, community, and digital care settings.
      </>
    ),
  },

  {
    image: img7,
    title: "Nursing Leadership",
    description: (
      <>
{" "}
        <Link
          to="/about-nursesummit"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Nursing Leadership
        </Link>{" "}   develops competencies in management, communication, and strategic decision-making. It empowers nurses to lead healthcare teams, influence policy, improve quality, and drive innovation. Effective nurse leaders foster professional growth, patient safety, workforce engagement, and organizational excellence while shaping resilient and responsive healthcare systems in complex care environments.
      </>
    ),
  },

  {
    image:  img8,
    title: "Infectious Disease",
    description: (
      <>
  {" "}
        <Link
          to=  "/executive-panel-members/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Infectious Disease
        </Link>{" "}  nursing focuses on prevention, detection, and management of communicable diseases. It emphasizes vaccination, surveillance, outbreak response, patient education, and antimicrobial stewardship. Nurses play a vital role in infection containment, public health preparedness, and global health security through evidence-based practice and interdisciplinary collaboration across healthcare settings.
      
      </>
    ),
  },

  {
    image: img9,
    title: "Primary Care & Family Nursing",
    description: (
      <>
{" "}
        <Link
          to= "/nursesummit-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Primary Care and Family Nursing
        </Link>{" "} deliver comprehensive, continuous care across the lifespan. It emphasizes health promotion, disease prevention, chronic condition management, and family-centered care. Nurses support early intervention, patient education, and long-term wellness, strengthening community health outcomes and improving accessibility, affordability, and quality of primary healthcare services.
      </>
    ),
  },

  {
    image: img10,
    title: "Nursing Education",
    description: (
      <>
{" "}
        <Link
          to="/about-nursesummit" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nursing Education        </Link>{" "} focuses on preparing competent, ethical, and skilled nursing professionals. It integrates clinical training, simulation, evidence-based curricula, and digital learning. Educators support lifelong learning, critical thinking, and professional development, ensuring nurses are prepared to meet evolving healthcare demands, technological advancements, and global patient care challenges.
      </>
    ),
  },

  {
    image: img11,
    title: "Pediatric & Neonatal Nursing",
    description: (
      <>
     {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Pediatric and Neonatal Nursing
        </Link> specializes in caring for infants, children, and adolescents. It focuses on growth, development, family-centered care, and early intervention. Nurses manage acute and chronic pediatric conditions, support neonatal intensive care, educate families, and promote healthy outcomes during critical developmental stages.
      </>

    ),
  },

  {
    image: img12,
    title: "Patient Safety",
    description: (
      <>
 {" "}
        <Link
          to="/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Patient Safety
        </Link>{" "}  in nursing focuses on preventing harm and improving care quality. It emphasizes risk management, error reduction, clinical vigilance, and adherence to best practices. Nurses promote safety culture, effective communication, and continuous improvement to ensure reliable, high-quality, and patient-centered care across all healthcare settings.
      
      </>
    ),
  },

  {
    image: img13,
    title: "Midwifery and Women’s Health",
    description: (
      <>
{" "}
        <Link
          to="/about-nursesummit" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Midwifery and Women’s Health
        </Link> nursing supports reproductive, maternal, and gynecological care across the lifespan. It emphasizes prenatal care, childbirth, postnatal support, and women’s wellness. Nurses promote safe motherhood, informed decision-making, gender-sensitive care, and holistic approaches to improving women’s health outcomes globally.
        
      </>
    ),
  },

  {
    image:img14,
    title: "Telemedicine",
    description: (
      <>
 {" "}
        <Link
          to= "https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Telemedicine
        </Link>  enables healthcare delivery through digital platforms and virtual consultations. Nurses play a key role in triage, assessment, patient education, monitoring, and follow-up care. Telemedicine improves access, continuity, and efficiency, particularly for remote populations, chronic disease management, and time-sensitive healthcare services across diverse settings.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Neurodiversity",
    description: (
      <>
      {" "}
        <Link
          to= "/about-nursesummit" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Neurodiversity
        </Link> recognizes neurological differences such as autism and ADHD as natural human variations. Nursing care emphasizes inclusive, respectful, and person-centered approaches. Nurses support communication, sensory needs, behavioral strategies, and family education, promoting dignity, independence, and improved quality of life for neurodivergent individuals.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Geriatric Nursing",
    description: (
      <>
{" "}
        <Link
          to=  "/nursesummit-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Geriatric Nursing
        </Link>  addresses the complex healthcare needs of older adults. It focuses on chronic disease management, mobility, cognitive health, medication safety, and end-of-life care. Nurses promote healthy aging, independence, dignity, and quality of life while supporting families and coordinating multidisciplinary care for aging populations.
</>
    ),
  },

  {
    image:img17,
    title: "Genetic Disorders",
    description: (
      <>
 {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Genetic Disorders
        </Link> nursing supports individuals with inherited and genetic conditions. It emphasizes early identification, genetic counseling, patient education, and coordinated care. Nurses help patients and families understand risks, treatment options, and lifelong management strategies, supporting informed decision-making and improving outcomes in precision and genomic medicine.
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Infection Control & Prevention",
    description: (
      <>
   {" "}
        <Link
          to= "/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Infection Control and Prevention
        </Link>  focus on reducing healthcare-associated infections. Nurses implement hygiene practices, isolation protocols, surveillance, and staff education. Effective infection control protects patients, healthcare workers, and communities, ensuring safe care environments and strengthening preparedness against outbreaks, antimicrobial resistance, and emerging infectious diseases.
      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "Autism",
    description: (
      <>
  {" "}
        <Link
          to= "https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Autism
        </Link>-focused nursing care supports individuals with autism spectrum disorder across all life stages. It emphasizes early screening, behavioral support, communication strategies, sensory-friendly care, and family education. Nurses promote inclusion, independence, and personalized care approaches that enhance development, social participation, and overall well-being.
      </>
    ),
  },
  {
    image:img20,
    title: "Rehabilitation Nursing",
    description: (
      <>
{" "}
        <Link
          to="/about-nursesummit" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        Rehabilitation Nursing
</Link>{" "} supports patients recovering from injury, illness, or surgery. It focuses on restoring function, mobility, and independence through therapeutic care, education, and motivation. Nurses collaborate with multidisciplinary teams to improve physical, cognitive, and emotional recovery, enhancing quality of life and long-term health outcomes.
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
