import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import riskAssessmentImg from "@/assets/risk-assessment.jpg";
import safetyTrainingImg from "@/assets/safety-training.jpg";
import complianceAuditImg from "@/assets/compliance-audit.jpg";
import emergencyResponseImg from "@/assets/emergency-response.jpg";
import { 
  AlertTriangle, 
  FileText, 
  Users, 
  Clock, 
  ShieldCheck, 
  Search,
  TrendingUp,
  Laptop
} from "lucide-react";

const SkillsSection = () => {
  const topSkills = [
    {
      title: "Safety Management",
      description: "Comprehensive safety program development and implementation with proven track record in high-risk environments.",
      image: riskAssessmentImg,
      icon: <AlertTriangle className="h-6 w-6" />,
      badge: "Core Expertise"
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk identification, analysis, and mitigation strategies for industrial operations.",
      image: safetyTrainingImg,
      icon: <Users className="h-6 w-6" />,
      badge: "NEBOSH Certified"
    },
    {
      title: "Emergency Response",
      description: "Emergency planning, evacuation procedures, and crisis management for critical operations.",
      image: complianceAuditImg,
      icon: <ShieldCheck className="h-6 w-6" />,
      badge: "Aramco Certified"
    },
    {
      title: "Safety Training",
      description: "Development and delivery of safety training programs for multicultural teams.",
      image: emergencyResponseImg,
      icon: <AlertTriangle className="h-6 w-6" />,
      badge: "Multilingual"
    }
  ];

  const additionalSkills = [
    {
      title: "Leadership & Team Management",
      icon: <Users className="h-5 w-5" />,
      category: "Management"
    },
    {
      title: "Time Management",
      icon: <Clock className="h-5 w-5" />,
      category: "Management"
    },
    {
      title: "Conflict Resolution",
      icon: <Users className="h-5 w-5" />,
      category: "Soft Skills"
    },
    {
      title: "Regulatory Compliance",
      icon: <ShieldCheck className="h-5 w-5" />,
      category: "Compliance"
    },
    {
      title: "Heavy Equipment Safety",
      icon: <ShieldCheck className="h-5 w-5" />,
      category: "Technical"
    },
    {
      title: "Inspection & Auditing",
      icon: <Search className="h-5 w-5" />,
      category: "Technical"
    },
    {
      title: "Incident Investigation",
      icon: <FileText className="h-5 w-5" />,
      category: "Technical"
    },
    {
      title: "Microsoft Office Suite",
      icon: <Laptop className="h-5 w-5" />,
      category: "Technical"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Core Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive safety management capabilities backed by international certifications and real-world experience
          </p>
        </div>

        {/* Top 4 Skills with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {topSkills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={skill.image} 
                  alt={skill.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full font-medium">
                    {skill.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expertise */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Additional Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{skill.title}</h4>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;