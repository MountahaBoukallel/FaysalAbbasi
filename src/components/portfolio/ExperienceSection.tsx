import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Calendar, 
  MapPin, 
  Trophy, 
  ArrowRight,
  Shield,
  Briefcase,
  Target
} from "lucide-react";

const ExperienceSection = () => {
  const currentRole = {
    title: "Secretary to Drilling Support Unit Supervisor / HSE Focal Support",
    company: "Saudi Aramco (via Contractor) – Drilling Support Unit",
    location: "SPARK 6602, Saudi Arabia",
    period: "June 2022 – Present",
    type: "Current Role",
    description: "Serving as the secretary to the Drilling Support Unit Supervisor in Saudi Aramco's Drilling Rig Support and Logistics Department, while performing executive administrative duties I provide an active role and hands-on support in health, safety, and environmental (HSE) initiatives.",
    responsibilities: [
      "Provide direct administrative and operational support to the Drilling Support Unit Supervisor",
      "Coordinate with logistics, HSE, and operations teams for safe equipment relocation",
      "Assist in implementing Aramco's HSE standards and Job Safety Analyses (JSA)",
      "Organize weekly safety meetings, toolbox talks, and HSE campaigns",
      "Utilize Aramco's Safelife system for safety observations and audits",
      "Maintain comprehensive safety protocols and compliance documentation"
    ],
    achievements: [
      "Coordinated safe relocation of 28,461 drilling assets with zero incidents",
      "Supported successful Corporate Environmental Audit and QSI with zero findings",
      "Enhanced coordination between safety, logistics, and supervisory teams"
    ],
    featured: true
  };

  const otherExperiences = [
    {
      title: "Safety Advisor (Freelance)",
      company: "Khaksaar Developers (PVT) LTD",
      location: "Islamabad, Pakistan",
      period: "December 2019 – April 2022",
      type: "Contract",
      description: "Worked as a freelance Safety Advisor on multiple large-scale construction projects, providing end-to-end oversight of health, safety, and environmental (HSE) compliance.",
      responsibilities: [
        "Developed site-specific HSE policies aligned with Pakistan Occupational Health and Safety Act, 2018",
        "Conducted risk assessments, safety inspections, and Job Hazard Analyses (JHA)",
        "Delivered safety inductions, toolbox talks, and ongoing safety training",
        "Supervised critical construction activities ensuring safety compliance",
        "Investigated incidents with root cause analysis and corrective measures",
        "Maintained comprehensive HSE documentation and audit readiness"
      ],
      achievements: [
        "Achieved zero major incidents across all projects",
        "Successfully led multiple on-site HSE audits",
        "Improved site safety performance significantly"
      ],
      projects: [
        "Boundary Wall Construction – Pakistan Medical & Dental Society",
        "PWD Housing Society Construction Project"
      ]
    },
    {
      title: "Admin Operations",
      company: "Pakistan Overseas Employment Promoters Association (POEPA)",
      location: "Islamabad, Pakistan",
      period: "January 2011 – March 2022",
      type: "Full-time",
      description: "Led high-level administrative and operational functions for POEPA, a regulatory body supporting over 4,000 licensed overseas employment promoters.",
      responsibilities: [
        "Managed membership lifecycle for 4,000+ promoters including onboarding and renewals",
        "Provided executive support to Secretary General and Central Chairman",
        "Planned and executed high-profile events like Annual General Body Meeting (AGM)",
        "Maintained detailed documentation for meetings and operational records",
        "Collaborated with ILO for awareness and training sessions",
        "Enforced administrative policies and optimized operational workflows"
      ],
      achievements: [
        "Successfully organized multiple AGM and election cycles with full compliance",
        "Enhanced member satisfaction through timely complaint resolution",
        "Contributed to standardized awareness programs with ILO partnership"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track record of excellence in health, safety, and environmental management across diverse industries
          </p>
        </div>

        {/* Current Role - Highlighted */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-l-4 border-secondary overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{currentRole.title}</h3>
                      <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-medium text-secondary mb-2">
                      <Building className="h-5 w-5" />
                      <span>{currentRole.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{currentRole.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{currentRole.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{currentRole.description}</p>
                  </div>
                </div>
                <div>
                  <span className="bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full font-medium">
                    {currentRole.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities and Achievements Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary" />
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {currentRole.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="h-3 w-3 mt-1 text-secondary flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-secondary" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {currentRole.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="h-3 w-3 mt-1 text-secondary flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Experiences - Standard Design */}
        <div className="space-y-8">
          {otherExperiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                        <Building className="h-5 w-5" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>
                    </div>
                  </div>
                  <div>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Projects (if any) */}
                {exp.projects && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-gray-600" />
                      Key Projects:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6">
                      {exp.projects.map((project, i) => (
                        <li key={i} className="text-sm">{project}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Responsibilities and Achievements Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gray-600" />
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <ArrowRight className="h-3 w-3 mt-1 text-gray-500 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-gray-600" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <ArrowRight className="h-3 w-3 mt-1 text-gray-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero border-0 text-white shadow-hero rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to enhance your workplace safety?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how my expertise in HSE management can contribute to your organization's safety goals and operational excellence.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;