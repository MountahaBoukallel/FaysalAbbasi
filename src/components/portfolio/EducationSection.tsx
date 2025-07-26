import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const neboshEducation = [
    {
      degree: "NEBOSH Level 6 International Diploma",
      subtitle: "Occupational Health and Safety Management Professionals",
      institution: "Green World Group – Saudi Arabia",
      accreditation: "(accredited by NCFE UK)",
      grade: "Credit",
      year: "Feb 2025",
      level: "UK RQF Level 6 (equivalent to a bachelor's degree level qualification)",
      status: "Completed",
      featured: true
    },
    {
      degree: "NEBOSH International General Certificate",
      subtitle: "Occupational Health & Safety (IGC)",
      institution: "British Safety Council / Save Fast Dubai",
      accreditation: "",
      grade: "Pass",
      year: "June 2024",
      level: "International Certification",
      status: "Completed",
      featured: true
    }
  ];

  const otherEducation = [
    {
      degree: "IELTS Academic",
      subtitle: "English Language Proficiency",
      institution: "British Council",
      grade: "Band 6.5",
      year: "Jan 2025",
      status: "Completed",
      icon: "🎓"
    },
    {
      degree: "FA (Fine Arts), Intermediate College Diploma",
      subtitle: "",
      institution: "Pakistan, Islamabad",
      grade: "Pass",
      year: "Dec 2019",
      status: "Completed",
      icon: "🎓"
    },
    {
      degree: "Matriculation/High School Diploma (Science)",
      subtitle: "",
      institution: "Pakistan Islamabad",
      grade: "Pass",
      year: "2006",
      status: "Completed",
      icon: "🎓"
    }
  ];

  const professionalCertifications = [
    {
      title: "IOSH Managing Safely",
      institution: "Save Fast Dubai",
      year: "2023"
    },
    {
      title: "OSHA 30 Hours (General Industry)",
      institution: "Green World Group – Saudi Arabia",
      year: "2024"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Education & Qualifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            International certifications and academic qualifications in occupational health and safety management
          </p>
        </div>

        {/* NEBOSH Qualifications - Highlighted */}
        <div className="space-y-6 mb-12">
          {neboshEducation.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border-l-4 border-secondary overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                        <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                      {edu.subtitle && (
                        <p className="text-gray-600 mb-2">{edu.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.institution} {edu.accreditation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      {edu.level && (
                        <p className="text-sm text-secondary font-medium mt-2">{edu.level}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      <span className="bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full font-medium">
                        Grade: {edu.grade}
                      </span>
                    </div>
                    <div>
                      <span className="text-green-600 text-sm font-medium">
                        Status: {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Education */}
        <div className="space-y-4 mb-12">
          {otherEducation.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                      {edu.subtitle && (
                        <p className="text-gray-600 mb-2">{edu.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        Grade: {edu.grade}
                      </span>
                    </div>
                    <div>
                      <span className="text-green-600 text-sm font-medium">
                        Status: {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Professional Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Additional Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalCertifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.institution}</p>
                    <p className="text-sm text-gray-600">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;