import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Target, 
  BookOpen, 
  Menu,
  X
} from "lucide-react";

const ScrollNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", icon: <User className="h-4 w-4" /> },
    { label: "Skills", href: "#skills", icon: <Award className="h-4 w-4" /> },
    { label: "Projects", href: "#projects", icon: <Target className="h-4 w-4" /> },
    { label: "Education", href: "#education", icon: <GraduationCap className="h-4 w-4" /> },
    { label: "Experience", href: "#experience", icon: <Briefcase className="h-4 w-4" /> },
    { label: "Blog", href: "#blog", icon: <BookOpen className="h-4 w-4" /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm animate-fade-in hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">FP</span>
              </div>
              <span className="font-semibold text-foreground">Faisal Pervez</span>
            </div>
            
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm animate-fade-in md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">FP</span>
              </div>
              <span className="font-semibold text-foreground">Faisal Pervez</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border shadow-lg animate-scale-in">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                    className="gap-2 hover:bg-primary/10 hover:text-primary transition-colors justify-start"
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ScrollNavigation;