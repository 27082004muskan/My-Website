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

  return (
    <section id="certifications" className="py-25 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-orange-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-gray-600 to-orange-700 bg-clip-text text-transparent">
              Certifications
            </h2>
            <Award className="w-6 h-6 text-orange-400" />
          </div>
          {/* <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Verified achievements from industry leaders and learning platforms.
          </p> */}
        </div>

        {/* Web Development Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-r from-gray-800/80 to-orange-800/60">
              <Code className="w-6 h-6 text-orange-700" />
            </div>
            <h3 className="text-2xl font-bold text-orange-700">Web Development</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mernCertifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gray-900/80 border border-gray-800/50 rounded-xl p-6 hover:bg-gray-200 hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => handleDownload(cert)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <Code className="w-5 h-5" style={{ color: cert.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg group-hover:text-orange-800 ">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Analytics Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-r from-gray-800/80 to-orange-800/60">
              <BarChart3 className="w-6 h-6 text-orange-700" />
            </div>
            <h3 className="text-2xl font-bold text-orange-700">Data Analytics</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataCertifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gray-900/80 border border-gray-800/50 rounded-xl p-6 hover:bg-gray-200 hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => handleDownload(cert)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <BarChart3 className="w-5 h-5" style={{ color: cert.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg group-hover:text-orange-800 ">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
