import React from 'react';
import { Award, Calendar, Download, Code, BarChart3, Star } from 'lucide-react';
import MicroSoft from "../assets/certificates/MicroSoft_Azure.png";
import Full from "../assets/certificates/Full_Stack_Linkedin.pdf";
import Ambassador from "../assets/certificates/image.png";
import Google from "../assets/certificates/htmlCssClone.png";
import Tata from "../assets/certificates/TATA.pdf";
import Deloitte from "../assets/certificates/Deloitte.pdf";
import SQL from "../assets/certificates/sql.pdf";
import Excel from "../assets/certificates/Excel.pdf";
import Tableau from "../assets/certificates/tableau.pdf";
import PowerBi from "../assets/certificates/powerBi.pdf";
import React_Mern from "../assets/certificates/react.pdf";
import NodeJs from "../assets/certificates/Node.pdf";
import Npm from "../assets/certificates/npm.pdf";
import Express from "../assets/certificates/express.pdf";
import PageLayout from "./PageLayout";

const Certifications = () => {
  const mernCertifications = [
    {
      title: "How Web Works and Intro to Azure",
      issuer: "Microsoft",
      date: "2024",
      downloadUrl: MicroSoft,
      fileName: "Microsoft_Azure",
      color: "#10b981"
    },
    {
      title: "React Essential Training",
      issuer: "LinkedIn Learning",
      date: "2025",
      downloadUrl: React_Mern,
      fileName: "React_Essential",
      color: "#61dafb"
    },
    {
      title: "Node.js Essential Training",
      issuer: "LinkedIn Learning",
      date: "2025",
      downloadUrl: NodeJs,
      fileName: "Nodejs_Essential",
      color: "#339933"
    },
    {
      title: "Learning npm: A Package Manager",
      issuer: "LinkedIn Learning",
      date: "2025",
      downloadUrl: Npm,
      fileName: "NPM_Package",
      color: "#10b981"
    },
    {
      title: "Express Essential: Build Powerful Web Apps",
      issuer: "LinkedIn Learning",
      date: "2025",
      downloadUrl: Express,
      fileName: "Express_NodeJS",
      color: "#f59e0b"
    },
    {
      title: "Full Stack Development",
      issuer: "LinkedIn Learning",
      date: "2024",
      downloadUrl: Full,
      fileName: "Full_Stack",
      color: "#f59e0b"
    },
    {
      title: "HTML, CSS, JS",
      issuer: "Microsoft Learn Student Ambassador",
      date: "2024",
      downloadUrl: Ambassador,
      fileName: "HTML_CSS_JS",
      color: "#e34c26"
    },
    {
      title: "Tinder Clone using HTML, CSS",
      issuer: "Google Developer Student Club",
      date: "2024",
      downloadUrl: Google,
      fileName: "Tinder_Clone",
      color: "#1572b6"
    }
  ];

  const dataCertifications = [
    {
      title: "Data Analytics",
      issuer: "Deloitte Australia - Forage",
      date: "2024",
      downloadUrl: Deloitte,
      fileName: "Deloitte_Analytics",
      color: "#3b82f6"
    },
    {
      title: "Data Visualization: Empowering Business Insights",
      issuer: "TATA Group - Forage",
      date: "2024",
      downloadUrl: Tata,
      fileName: "TATA_Visualization",
      color: "#3b82f6"
    },
    {
      title: "Power BI Essential Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      downloadUrl: PowerBi,
      fileName: "Power_BI",
      color: "#f2c811"
    },
    {
      title: "SQL - Query Language",
      issuer: "Ws Cube",
      date: "2024",
      downloadUrl: SQL,
      fileName: "SQL_Query",
      color: "#336791"
    },
    {
      title: "Tableau 2024.1: Essential Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      downloadUrl: Tableau,
      fileName: "Tableau_Training",
      color: "#e97627"
    },
    {
      title: "Excel Essential Training - Microsoft 365",
      issuer: "LinkedIn Learning",
      date: "2024",
      downloadUrl: Excel,
      fileName: "Excel_Training",
      color: "#217346"
    }
  ];

  const handleDownload = (cert) => {
    const link = document.createElement('a');
    link.href = cert.downloadUrl;
    link.download = `${cert.fileName}.${cert.downloadUrl.includes('.png') ? 'png' : 'pdf'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CertCard = ({ cert, type }) => {
    const Icon = type === 'web' ? Code : BarChart3;

    return (
      <div
        className="group cursor-pointer rounded-2xl border border-violet-400/10 bg-[#0d1528] p-6 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/10"
        onClick={() => handleDownload(cert)}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="rounded-lg p-2"
              style={{ backgroundColor: `${cert.color}20` }}
            >
              <Icon className="h-5 w-5" style={{ color: cert.color }} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white group-hover:text-violet-300">
                {cert.title}
              </h4>
              <p className="text-sm text-slate-400">{cert.issuer}</p>
            </div>
          </div>
          <Download className="h-5 w-5 text-slate-500 transition-colors group-hover:text-violet-400" />
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          <span>{cert.date}</span>
        </div>
      </div>
    );
  };

  return (
    <PageLayout
      id="certifications"
      badge="Verified Achievements"
      badgeIcon={Award}
      label="Certifications"
      title="Industry-recognized credentials and learning milestones"
      description="Certifications from Microsoft, LinkedIn Learning, Deloitte, TATA, and more — covering web development and data analytics."
    >
      <div className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-xl bg-violet-500/15 p-3 text-violet-300">
            <Code className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Web Development</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mernCertifications.map((cert, index) => (
            <CertCard key={index} cert={cert} type="web" />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-xl bg-cyan-500/15 p-3 text-cyan-300">
            <BarChart3 className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Data Analytics</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dataCertifications.map((cert, index) => (
            <CertCard key={index} cert={cert} type="data" />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-10 py-6 backdrop-blur-sm">
          <Star className="h-5 w-5 text-violet-400" />
          <span className="text-lg font-semibold text-slate-200">Continuously upskilling through industry programs</span>
          <Star className="h-5 w-5 text-violet-400" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Certifications;
