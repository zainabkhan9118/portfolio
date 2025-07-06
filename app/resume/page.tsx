"use client";

import { useRef } from "react";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#f1f5f2] text-gray-900 px-4 py-10 font-sans">
      <div ref={resumeRef} className="max-w-3xl mx-auto bg-white/80 rounded-2xl shadow-2xl p-8 border border-emerald-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-4xl font-extrabold text-emerald-700 mb-2">Zainab Iqbal</h1>
            <div className="text-lg text-emerald-900 font-semibold mb-1">Senior Frontend Developer | React.js Expert | Next.js | Full-Stack Specialist</div>
            <div className="text-emerald-800 text-sm">
              zainabkhan3473@gmail.com | (+92) 311 0522349 | <a href="https://github.com/zainabkhan9118" className="underline text-emerald-700 hover:text-emerald-900" target="_blank" rel="noopener noreferrer">GitHub: zainabkhan9118</a> | Abbottabad, Pakistan | DOB: 20 Jan 2002
            </div>
          </div>
          {/* Download PDF button removed as requested */}
        </div>
        <hr className="border-emerald-400/40 mb-6" />
        <section className="mb-6">
          <h2 className="text-xl font-bold text-emerald-700 mb-2">Professional Summary</h2>
          <p className="text-emerald-900">
            Innovative frontend developer with 1+ years of experience building complex web applications using React.js and Next.js. Specializes in creating seamless user experiences across travel, e-commerce, and SaaS platforms. Full-stack capable with expertise in API integration, performance optimization, and scalable architecture. Proven ability to lead development teams and deliver projects that drive business results.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-emerald-700 mb-2">Technical Skills</h2>
          <ul className="text-emerald-900 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
            <li><b>Frontend:</b> React.js, Next.js, Redux, Tailwind CSS, SCSS, Material UI</li>
            <li><b>Backend:</b> NestJS, Node.js, Express, Laravel</li>
            <li><b>Languages:</b> JavaScript, TypeScript, HTML5, CSS3, Python</li>
            <li><b>DevOps:</b> Git, GitHub, Vercel, Netlify, Postman</li>
            <li><b>Databases:</b> MongoDB, Firebase, MySQL</li>
            <li><b>API Integration:</b> Amadeus, Stripe, RESTful, GraphQL</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-emerald-700 mb-2">Professional Experience</h2>
          <div className="mb-3">
            <div className="font-semibold text-emerald-900">Firnas.tech – Associate Software Engineer (Abbottabad)</div>
            <div className="text-emerald-800 text-xs mb-1">Jul 2024 – Present</div>
            <ul className="list-disc list-inside text-emerald-900 text-sm">
              <li>Lead developer for 5+ production applications serving 50,000+ monthly active users</li>
              <li>Implemented micro-frontend architecture that reduced build times by 35%</li>
              <li>Mentored 3 junior developers in React best practices and code quality standards</li>
              <li>Designed component library that accelerated development by 25%</li>
              <li>Integrated complex third-party APIs including payment processors and travel APIs</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-emerald-900">Prodigy – AI/ML Intern (Remote)</div>
            <div className="text-emerald-800 text-xs mb-1">Oct 2024 – Nov 2024</div>
            <ul className="list-disc list-inside text-emerald-900 text-sm">
              <li>Developed React interfaces for ML model interaction and visualization</li>
              <li>Optimized model inference times by 40% through Web Workers</li>
              <li>Created automated testing pipelines for model validation</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-emerald-700 mb-2">Key Projects</h2>
          <ul className="text-emerald-900 text-sm space-y-2">
            <li><b>Aerona:</b> Comprehensive Travel Platform. <span className="text-emerald-600">https://aeronaa.vercel.app/</span></li>
            <li><b>GigGives:</b> Equipment Rental Marketplace. <span className="text-emerald-600">https://gig-gives.vercel.app/</span></li>
            <li><b>Zara Schools:</b> Scalable e-learning app. <span className="text-emerald-600">https://zara-school-nextjs-ashen.vercel.app/</span></li>
            <li><b>Lemara Commercial:</b> Real Estate Platform. <span className="text-emerald-600">https://lemara-commercial.vercel.app</span></li>
            <li><b>4 Rays:</b> Casino management tool. <span className="text-emerald-600">https://4rays.vercel.app</span></li>
            <li><b>S4:</b> Security Recruitment Platform. <span className="text-emerald-600">https://sfour.co.uk/</span></li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-emerald-700 mb-2">Education</h2>
          <ul className="text-emerald-900 text-sm">
            <li><b>COMSATS University Islamabad, Abbottabad Campus.</b> BS Computer Science Mar 2022 – Mar 2026<br /><span className="text-emerald-600">CGPA: 3.94</span></li>
            <li><b>Army Burnhall College for Girls, Abbottabad.</b> FSc (Pre-Medical) Graduated in 2020</li>
          </ul>
        </section>
        <div className="text-center text-xs text-emerald-700 mt-8">This resume is styled to match my portfolio. For ATS, copy-paste the content as plain text if needed.</div>
      </div>
      {/* PDF libraries for client-side export */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
      <style jsx global>{`
        .no-print { display: block; }
        @media print {
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
