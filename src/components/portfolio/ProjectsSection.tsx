import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Target, 
  CheckCircle, 
  TrendingUp,
  Users,
  FileText,
  Award,
  Zap
} from "lucide-react";

const ProjectsSection = () => {
  const mainProject = {
    title: "Strategic Safety and Operational Excellence in Relocating Aramco Drilling Assets",
    description: "As Secretary to the Drilling Support Unit Supervisor, I played a pivotal role in the seamless execution of a high-stakes project involving the relocation of 28,461 critical drilling equipment items from Aramco Dhahran to the Aramco Industrial Facility SPARK 6602.",
    responsibilities: [
      "Facilitated implementation of Aramco safety standards across all relocation phases",
      "Advised teams on safety procedures for forklift operations and equipment handling",
      "Conducted weekly safety meetings with proactive mitigation strategies",
      "Prepared detailed documentation of safety protocols and compliance records"
    ],
    achievements: [
      "Successfully managed safe relocation of 28,461 drilling equipment items",
      "Achieved zero-incident record throughout the entire project",
      "Met and exceeded Aramco's stringent safety benchmarks",
      "Maintained zero loss or damage to critical assets"
    ],
    tools: [
      "Aramco safety standards and policies",
      "Advanced safe handling methodologies",
      "Industry-standard forklift operation protocols",
      "Comprehensive compliance documentation systems"
    ],
    impact: "This project underscores my ability to bridge administrative expertise with operational safety and compliance in a high-pressure environment. By aligning closely with Aramco's standards, I contributed to the successful execution of a large-scale logistical operation while upholding the highest levels of safety and efficiency."
  };

  const certifications = [
    { name: "Confined Space Awareness", issuer: "Aramco" },
    { name: "Work Permit", issuer: "Aramco" },
    { name: "Fire Safety Awareness", issuer: "Aramco" },
    { name: "Hydrogen Sulfide Awareness for Drilling Operations", issuer: "Aramco" },
    { name: "Job Hazard Analysis (JHA)", issuer: "Aramco" },
    { name: "Injury Reporting & Investigation", issuer: "Aramco" },
    { name: "Floor Warden", issuer: "Aramco" },
    { name: "Safety Handbook | Emergency Response", issuer: "Aramco" },
    { name: "Safety Management System", issuer: "Aramco" },
    { name: "Environmental Management System (EMS)", issuer: "Aramco" },
    { name: "Office Safety Awareness", issuer: "Aramco" },
    { name: "Supply Chain Code of Conduct", issuer: "Aramco" },
    { name: "Ethics and Compliance for Upstream", issuer: "Aramco" }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Featured Project</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Demonstrating excellence in large-scale HSE management and operational coordination
          </p>
        </div>

        {/* Main Project */}
        <Card className="mb-16 shadow-card border-0 bg-card">
          <CardHeader className="bg-gradient-hero text-white rounded-t-lg">
            <CardTitle className="text-2xl mb-4">{mainProject.title}</CardTitle>
            <p className="text-white/90 leading-relaxed">{mainProject.description}</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                  <Target className="h-5 w-5 text-primary" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {mainProject.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                  <Award className="h-5 w-5 text-secondary" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {mainProject.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <TrendingUp className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tools and Practices */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                <Zap className="h-5 w-5 text-accent" />
                Tools and Practices
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {mainProject.tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Shield className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-card p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                Project Impact
              </h3>
              <p className="text-muted-foreground leading-relaxed">{mainProject.impact}</p>
            </div>
          </CardContent>
        </Card>

        {/* Saudi Aramco Mandatory HSE Training */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Saudi Aramco Mandatory HSE Training</h3>
            <p className="text-lg text-muted-foreground">
              Comprehensive safety training portfolio demonstrating commitment to industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card border-0 bg-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm mb-1 leading-tight">
                        {cert.name}
                      </h4>
                      <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                        {cert.issuer}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training and Awareness Sessions */}
        <div className="mt-16">
          <Card className="bg-gradient-card border border-accent/20 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Training & Awareness Sessions</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Regularly conduct and participate in HSE training sessions, toolbox talks, and awareness programs 
                to promote safety culture and ensure team competency across all operational levels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;