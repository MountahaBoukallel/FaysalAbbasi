import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">About Me</h2>
            <p className="text-xl text-muted-foreground">Your path into safety?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I'm a qualified Occupational Health and Safety professional with internationally recognized credentials, 
                including the <span className="font-semibold text-primary">NEBOSH Level 6 International Diploma (with credits)</span>. 
                I specialize in occupational hazard identification & risk management within oil & gas drilling material logistics 
                with direct experience working in projects associated with Saudi Aramco.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mb-6">
                My core strengths include hazard identification, ergonomic risk assessment, safety reporting systems, 
                and fostering a culture of proactive compliance. I've contributed to HSE Inspections & improvements 
                across high-risk supply chain and industrial operations at Saudi Aramco Industrial facility.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                This portfolio highlights my practical field experience, my area of specialization, safety-related projects, 
                and the practical tools I use to support efficient and safer operations. I am continually advancing my career 
                academically and practically to stay aligned with global HSE standards and to support organizations in building 
                stronger safety cultures.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card border-safety-blue/20 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Zero-Incident Record</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Successfully managed the relocation of 28,461 drilling equipment items with zero incidents or equipment loss.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-safety-orange/20 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Regulatory Compliance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Expert in Aramco, OSHA, and ILO standards with proven track record in corporate audits and QSI assessments.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-safety-blue/20 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Multicultural Training</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Exceptional communication skills in English, Urdu, and Arabic, enabling effective safety training across diverse teams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;