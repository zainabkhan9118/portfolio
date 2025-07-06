"use client";

import { useRef, useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);
  
  useEffect(() => {
    // Check if html2pdf is already loaded
    const checkIfLibraryLoaded = () => {
      if ((window as any).html2pdf) {
        setIsLibraryLoaded(true);
        return true;
      }
      return false;
    };
    
    // If not loaded, try to load it manually
    if (!checkIfLibraryLoaded()) {
      const script = document.createElement('script');
      script.src = '/html2pdf.bundle.min.js';
      script.async = false;
      script.onload = () => {
        console.log("html2pdf library loaded successfully");
        setIsLibraryLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load html2pdf library");
      };
      document.body.appendChild(script);
    }
    
    // Check periodically for a few seconds in case the script is loading slowly
    const checkInterval = setInterval(() => {
      if (checkIfLibraryLoaded()) {
        clearInterval(checkInterval);
      }
    }, 500);
    
    // Clean up the interval
    return () => clearInterval(checkInterval);
  }, []);
  
  // Create a print-friendly version for PDF export
  const createPrintableResume = () => {
    const container = document.createElement('div');
    container.style.backgroundColor = '#ffffff';
    container.style.color = '#000000';
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.maxWidth = '800px';
    container.style.margin = '0 auto';
    
    // Header
    const header = document.createElement('div');
    header.style.borderBottom = '2px solid #cccccc';
    header.style.marginBottom = '20px';
    header.style.paddingBottom = '10px';
    
    const name = document.createElement('h1');
    name.textContent = 'Zainab Iqbal';
    name.style.fontSize = '28px';
    name.style.margin = '0 0 5px 0';
    
    const title = document.createElement('div');
    title.textContent = 'Senior Frontend Developer | React.js Expert | Next.js | Full-Stack Specialist';
    title.style.fontSize = '16px';
    title.style.marginBottom = '5px';
    
    const contact = document.createElement('div');
    contact.textContent = 'zainabkhan3473@gmail.com | (+92) 311 0522349 | GitHub: zainabkhan9118 | Abbottabad, Pakistan | DOB: 20 Jan 2002';
    contact.style.fontSize = '12px';
    
    header.appendChild(name);
    header.appendChild(title);
    header.appendChild(contact);
    container.appendChild(header);
    
    // Professional Summary
    const summarySection = document.createElement('div');
    summarySection.style.marginBottom = '15px';
    
    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = 'Professional Summary';
    summaryTitle.style.fontSize = '18px';
    summaryTitle.style.margin = '0 0 8px 0';
    
    const summaryContent = document.createElement('p');
    summaryContent.textContent = 'Innovative frontend developer with 1+ years of experience building complex web applications using React.js and Next.js. Specializes in creating seamless user experiences across travel, e-commerce, and SaaS platforms. Full-stack capable with expertise in API integration, performance optimization, and scalable architecture. Proven ability to lead development teams and deliver projects that drive business results.';
    summaryContent.style.margin = '0';
    summaryContent.style.fontSize = '14px';
    summaryContent.style.lineHeight = '1.5';
    
    summarySection.appendChild(summaryTitle);
    summarySection.appendChild(summaryContent);
    container.appendChild(summarySection);
    
    // Technical Skills
    const skillsSection = document.createElement('div');
    skillsSection.style.marginBottom = '15px';
    
    const skillsTitle = document.createElement('h2');
    skillsTitle.textContent = 'Technical Skills';
    skillsTitle.style.fontSize = '18px';
    skillsTitle.style.margin = '0 0 8px 0';
    
    const skillsList = document.createElement('ul');
    skillsList.style.columnCount = '2';
    skillsList.style.paddingLeft = '20px';
    skillsList.style.margin = '0';
    
    const skills = [
      '<b>Frontend:</b> React.js, Next.js, Redux, Tailwind CSS, SCSS, Material UI',
      '<b>Backend:</b> NestJS, Node.js, Express, Laravel',
      '<b>Languages:</b> JavaScript, TypeScript, HTML5, CSS3, Python',
      '<b>DevOps:</b> Git, GitHub, Vercel, Netlify, Postman',
      '<b>Databases:</b> MongoDB, Firebase, MySQL',
      '<b>API Integration:</b> Amadeus, Stripe, RESTful, GraphQL'
    ];
    
    skills.forEach(skill => {
      const item = document.createElement('li');
      item.innerHTML = skill;
      item.style.fontSize = '14px';
      item.style.marginBottom = '5px';
      skillsList.appendChild(item);
    });
    
    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsList);
    container.appendChild(skillsSection);
    
    // Professional Experience
    const expSection = document.createElement('div');
    expSection.style.marginBottom = '15px';
    
    const expTitle = document.createElement('h2');
    expTitle.textContent = 'Professional Experience';
    expTitle.style.fontSize = '18px';
    expTitle.style.margin = '0 0 8px 0';
    
    // Job 1
    const job1 = document.createElement('div');
    job1.style.marginBottom = '10px';
    
    const jobTitle1 = document.createElement('div');
    jobTitle1.innerHTML = '<b>Firnas.tech – Associate Software Engineer (Abbottabad)</b>';
    jobTitle1.style.fontSize = '16px';
    
    const jobDate1 = document.createElement('div');
    jobDate1.textContent = 'Jul 2024 – Present';
    jobDate1.style.fontSize = '12px';
    jobDate1.style.marginBottom = '5px';
    
    const jobDuties1 = document.createElement('ul');
    jobDuties1.style.margin = '0';
    jobDuties1.style.paddingLeft = '20px';
    
    const duties1 = [
      'Lead developer for 5+ production applications serving 50,000+ monthly active users',
      'Implemented micro-frontend architecture that reduced build times by 35%',
      'Mentored 3 junior developers in React best practices and code quality standards',
      'Designed component library that accelerated development by 25%',
      'Integrated complex third-party APIs including payment processors and travel APIs'
    ];
    
    duties1.forEach(duty => {
      const item = document.createElement('li');
      item.textContent = duty;
      item.style.fontSize = '14px';
      item.style.marginBottom = '3px';
      jobDuties1.appendChild(item);
    });
    
    job1.appendChild(jobTitle1);
    job1.appendChild(jobDate1);
    job1.appendChild(jobDuties1);
    
    // Job 2
    const job2 = document.createElement('div');
    
    const jobTitle2 = document.createElement('div');
    jobTitle2.innerHTML = '<b>Prodigy – AI/ML Intern (Remote)</b>';
    jobTitle2.style.fontSize = '16px';
    
    const jobDate2 = document.createElement('div');
    jobDate2.textContent = 'Oct 2024 – Nov 2024';
    jobDate2.style.fontSize = '12px';
    jobDate2.style.marginBottom = '5px';
    
    const jobDuties2 = document.createElement('ul');
    jobDuties2.style.margin = '0';
    jobDuties2.style.paddingLeft = '20px';
    
    const duties2 = [
      'Developed React interfaces for ML model interaction and visualization',
      'Optimized model inference times by 40% through Web Workers',
      'Created automated testing pipelines for model validation'
    ];
    
    duties2.forEach(duty => {
      const item = document.createElement('li');
      item.textContent = duty;
      item.style.fontSize = '14px';
      item.style.marginBottom = '3px';
      jobDuties2.appendChild(item);
    });
    
    job2.appendChild(jobTitle2);
    job2.appendChild(jobDate2);
    job2.appendChild(jobDuties2);
    
    expSection.appendChild(expTitle);
    expSection.appendChild(job1);
    expSection.appendChild(job2);
    container.appendChild(expSection);
    
    // Key Projects
    const projectsSection = document.createElement('div');
    projectsSection.style.marginBottom = '15px';
    
    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = 'Key Projects';
    projectsTitle.style.fontSize = '18px';
    projectsTitle.style.margin = '0 0 8px 0';
    
    const projectsList = document.createElement('ul');
    projectsList.style.margin = '0';
    projectsList.style.paddingLeft = '20px';
    
    const projects = [
      '<b>Aerona:</b> Comprehensive Travel Platform. https://aeronaa.vercel.app/',
      '<b>GigGives:</b> Equipment Rental Marketplace. https://gig-gives.vercel.app/',
      '<b>Zara Schools:</b> Scalable e-learning app. https://zara-school-nextjs-ashen.vercel.app/',
      '<b>Lemara Commercial:</b> Real Estate Platform. https://lemara-commercial.vercel.app',
      '<b>4 Rays:</b> Casino management tool. https://4rays.vercel.app',
      '<b>S4:</b> Security Recruitment Platform. https://sfour.co.uk/'
    ];
    
    projects.forEach(project => {
      const item = document.createElement('li');
      item.innerHTML = project;
      item.style.fontSize = '14px';
      item.style.marginBottom = '5px';
      projectsList.appendChild(item);
    });
    
    projectsSection.appendChild(projectsTitle);
    projectsSection.appendChild(projectsList);
    container.appendChild(projectsSection);
    
    // Education
    const eduSection = document.createElement('div');
    
    const eduTitle = document.createElement('h2');
    eduTitle.textContent = 'Education';
    eduTitle.style.fontSize = '18px';
    eduTitle.style.margin = '0 0 8px 0';
    
    const eduList = document.createElement('ul');
    eduList.style.margin = '0';
    eduList.style.paddingLeft = '20px';
    
    const edu1 = document.createElement('li');
    edu1.innerHTML = '<b>COMSATS University Islamabad, Abbottabad Campus.</b> BS Computer Science Mar 2022 – Mar 2026<br>CGPA: 3.94';
    edu1.style.fontSize = '14px';
    edu1.style.marginBottom = '5px';
    
    const edu2 = document.createElement('li');
    edu2.innerHTML = '<b>Army Burnhall College for Girls, Abbottabad.</b> FSc (Pre-Medical) Graduated in 2020';
    edu2.style.fontSize = '14px';
    
    eduList.appendChild(edu1);
    eduList.appendChild(edu2);
    
    eduSection.appendChild(eduTitle);
    eduSection.appendChild(eduList);
    container.appendChild(eduSection);
    
    // Footer
    const footer = document.createElement('div');
    footer.textContent = 'This resume is styled to match my portfolio. For ATS, copy-paste the content as plain text if needed.';
    footer.style.textAlign = 'center';
    footer.style.fontSize = '10px';
    footer.style.marginTop = '20px';
    footer.style.color = '#666666';
    
    container.appendChild(footer);
    
    return container;
  };

  const downloadPDF = () => {
    try {
      // Show a download progress indicator
      const downloadButton = document.querySelector('.no-print') as HTMLElement;
      if (downloadButton) {
        downloadButton.textContent = 'Generating PDF...';
        downloadButton.classList.add('opacity-50');
      }
      
      // Create a printable version with simple styling
      const printableResume = createPrintableResume();
      document.body.appendChild(printableResume);
      
      // Use browser's native print functionality with landscape mode
      const printWindow = window.open('', '', 'height=800,width=800');
      
      if (!printWindow) {
        alert('Please allow pop-ups to download the resume as PDF');
        if (downloadButton) {
          downloadButton.textContent = 'Download PDF';
          downloadButton.classList.remove('opacity-50');
        }
        return;
      }
      
      printWindow.document.write('<html><head><title>Zainab Iqbal - Resume</title>');
      printWindow.document.write('<style>body { margin: 0; padding: 0; }</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(printableResume.outerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      
      // Remove the element from the original page
      document.body.removeChild(printableResume);
      
      // Reset the download button
      if (downloadButton) {
        downloadButton.textContent = 'Download PDF';
        downloadButton.classList.remove('opacity-50');
      }
      
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
      
    } catch (error) {
      console.error('Error creating printable resume:', error);
      alert('An error occurred while generating the PDF. Please try the print option instead.');
      
      // Reset the download button
      const downloadButton = document.querySelector('.no-print') as HTMLElement;
      if (downloadButton) {
        downloadButton.textContent = 'Download PDF';
        downloadButton.classList.remove('opacity-50');
      }
    }
  };
  
  // Check if we're generating PDF to avoid background effects that might cause errors
  const isPdfClass = 'pdf-mode';
  
  return (
    <div className="min-h-screen bg-black text-silver-100 px-4 py-10 font-mono">
      {/* Background effects matching the homepage - not shown in PDF */}
      <div className="fixed inset-0 z-0 no-print">
        <div className="absolute inset-0 bg-[url('/grid-pattern-dark.svg')] bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple-900/20 filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-blue-900/20 filter blur-[100px] animate-float-delayed"></div>
        {/* Removed noise.png to avoid 404 errors */}
      </div>
      
      <div ref={resumeRef} className="max-w-3xl mx-auto bg-black/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white mb-2">Zainab Iqbal</h1>
            <div className="text-lg text-silver-200 font-semibold mb-1">Senior Frontend Developer | React.js Expert | Next.js | Full-Stack Specialist</div>
            <div className="text-silver-300 text-sm">
              zainabkhan3473@gmail.com | (+92) 311 0522349 | <a href="https://github.com/zainabkhan9118" className="underline text-silver-400 hover:text-white" target="_blank" rel="noopener noreferrer">GitHub: zainabkhan9118</a> | Abbottabad, Pakistan | DOB: 20 Jan 2002
            </div>
          </div>
          <button 
            onClick={downloadPDF}
            disabled={!isLibraryLoaded}
            className={`mt-4 md:mt-0 btn-shine flex items-center px-6 py-3 bg-white text-black border border-white/30 rounded-md font-medium shadow transition-colors no-print ${isLibraryLoaded ? 'hover:bg-silver-100' : 'opacity-75 cursor-not-allowed'}`}
            title={isLibraryLoaded ? "Download resume as PDF" : "PDF generator is loading..."}
          >
            <Download className="w-5 h-5 mr-2" /> 
            {isLibraryLoaded ? 'Download PDF' : 'Loading PDF Generator...'}
          </button>
        </div>
        <hr className="border-white/20 mb-6" />
        <section className="mb-6">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white mb-2">Professional Summary</h2>
          <p className="text-silver-200">
            Innovative frontend developer with 1+ years of experience building complex web applications using React.js and Next.js. Specializes in creating seamless user experiences across travel, e-commerce, and SaaS platforms. Full-stack capable with expertise in API integration, performance optimization, and scalable architecture. Proven ability to lead development teams and deliver projects that drive business results.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white mb-2">Technical Skills</h2>
          <ul className="text-silver-200 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
            <li><b className="text-white">Frontend:</b> React.js, Next.js, Redux, Tailwind CSS, SCSS, Material UI</li>
            <li><b className="text-white">Backend:</b> NestJS, Node.js, Express, Laravel</li>
            <li><b className="text-white">Languages:</b> JavaScript, TypeScript, HTML5, CSS3, Python</li>
            <li><b className="text-white">DevOps:</b> Git, GitHub, Vercel, Netlify, Postman</li>
            <li><b className="text-white">Databases:</b> MongoDB, Firebase, MySQL</li>
            <li><b className="text-white">API Integration:</b> Amadeus, Stripe, RESTful, GraphQL</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white mb-2">Professional Experience</h2>
          <div className="mb-3">
            <div className="font-semibold text-white">Firnas.tech – Associate Software Engineer (Abbottabad)</div>
            <div className="text-silver-400 text-xs mb-1">Jul 2024 – Present</div>
            <ul className="list-disc list-inside text-silver-200 text-sm">
              <li>Lead developer for 5+ production applications serving 50,000+ monthly active users</li>
              <li>Implemented micro-frontend architecture that reduced build times by 35%</li>
              <li>Mentored 3 junior developers in React best practices and code quality standards</li>
              <li>Designed component library that accelerated development by 25%</li>
              <li>Integrated complex third-party APIs including payment processors and travel APIs</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Prodigy – AI/ML Intern (Remote)</div>
            <div className="text-silver-400 text-xs mb-1">Oct 2024 – Nov 2024</div>
            <ul className="list-disc list-inside text-silver-200 text-sm">
              <li>Developed React interfaces for ML model interaction and visualization</li>
              <li>Optimized model inference times by 40% through Web Workers</li>
              <li>Created automated testing pipelines for model validation</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white mb-2">Key Projects</h2>
          <ul className="text-silver-200 text-sm space-y-2">
            <li><b className="text-white">Aerona:</b> Comprehensive Travel Platform. <span className="text-silver-400">https://aeronaa.vercel.app/</span></li>
            <li><b className="text-white">GigGives:</b> Equipment Rental Marketplace. <span className="text-silver-400">https://gig-gives.vercel.app/</span></li>
            <li><b className="text-white">Zara Schools:</b> Scalable e-learning app. <span className="text-silver-400">https://zara-school-nextjs-ashen.vercel.app/</span></li>
            <li><b className="text-white">Lemara Commercial:</b> Real Estate Platform. <span className="text-silver-400">https://lemara-commercial.vercel.app</span></li>
            <li><b className="text-white">4 Rays:</b> Casino management tool. <span className="text-silver-400">https://4rays.vercel.app</span></li>
            <li><b className="text-white">S4:</b> Security Recruitment Platform. <span className="text-silver-400">https://sfour.co.uk/</span></li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white mb-2">Education</h2>
          <ul className="text-silver-200 text-sm">
            <li><b className="text-white">COMSATS University Islamabad, Abbottabad Campus.</b> BS Computer Science Mar 2022 – Mar 2026<br /><span className="text-silver-400">CGPA: 3.94</span></li>
            <li><b className="text-white">Army Burnhall College for Girls, Abbottabad.</b> FSc (Pre-Medical) Graduated in 2020</li>
          </ul>
        </section>
        {/* <div className="text-center text-xs text-silver-400 mt-8">This resume is styled to match my portfolio. For ATS, copy-paste the content as plain text if needed.</div> */}
      </div>
      {/* PDF libraries for client-side export */}
      <script src="/html2pdf.bundle.min.js" async={false} defer={false}></script>
      <style jsx global>{`
        .no-print { display: block; }
        .pdf-only { display: none; }
        @media print {
          .no-print { display: none !important; }
          .pdf-only { display: block !important; }
        }
        
        /* Special class added during PDF generation */
        .generating-pdf .fixed,
        .generating-pdf .animate-float,
        .generating-pdf .animate-float-delayed,
        .generating-pdf .animate-shine,
        .generating-pdf .bg-gradient-to-r,
        .generating-pdf .backdrop-blur-sm {
          display: none !important;
        }
        
        /* Override problematic styles for PDF generation */
        html2pdf-ready .text-transparent.bg-clip-text.bg-gradient-to-r {
          color: white !important;
          -webkit-text-fill-color: white !important;
          background-image: none !important;
        }
        
        /* Add animations matching homepage */
        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }
        
        .animate-shine {
          background-size: 200% 100%;
          animation: shine 6s ease-in-out infinite;
        }
        
        /* Button shine effect matching homepage */
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        
        .btn-shine::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.1) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: rotate(30deg);
          transition: transform 0.5s;
          opacity: 0;
        }
        
        .btn-shine:hover::before {
          transform: rotate(30deg) translate(100%, -100%);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
