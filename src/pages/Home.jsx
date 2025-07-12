import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SkillCard from "@/components/SkillCard";
import { 
  Search, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  MessageSquare,
  UserCheck,
  TrendingUp,
  Shield
} from "lucide-react";

// Mock data for demonstration
const featuredSkills = [
  {
    id: "1",
    name: "Sarah Chen",
    location: "San Francisco, CA",
    avatar: "",
    skillsOffered: [
      { name: "React Development", description: "Frontend web development", level: "expert" },
      { name: "UI/UX Design", description: "User interface design", level: "intermediate" }
    ],
    skillsWanted: [
      { name: "Spanish", description: "Conversational Spanish", level: "beginner" },
      { name: "Photography", description: "Portrait photography", level: "beginner" }
    ],
    rating: 4.9,
    totalSwaps: 23
  },
  {
    id: "2", 
    name: "Marcus Johnson",
    location: "Austin, TX",
    avatar: "",
    skillsOffered: [
      { name: "Guitar Lessons", description: "Acoustic and electric guitar", level: "expert" },
      { name: "Music Production", description: "Digital audio workstations", level: "intermediate" }
    ],
    skillsWanted: [
      { name: "Python Programming", description: "Data science applications", level: "beginner" }
    ],
    rating: 4.8,
    totalSwaps: 15
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    location: "New York, NY", 
    avatar: "",
    skillsOffered: [
      { name: "French Tutoring", description: "Native French speaker", level: "expert" },
      { name: "Baking", description: "Pastries and breads", level: "intermediate" }
    ],
    skillsWanted: [
      { name: "Yoga Instruction", description: "Beginner yoga poses", level: "beginner" },
      { name: "Digital Marketing", description: "Social media strategy", level: "intermediate" }
    ],
    rating: 5.0,
    totalSwaps: 31
  }
];

const features = [
  {
    icon: Users,
    title: "Connect with Skilled People",
    description: "Find others who have the skills you want to learn and are interested in what you can teach."
  },
  {
    icon: MessageSquare,
    title: "Easy Skill Exchange",
    description: "Send requests, schedule sessions, and exchange knowledge in a safe, structured environment."
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Leave and receive feedback to build trust and showcase your teaching abilities."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Verified profiles and community guidelines ensure a positive experience for everyone."
  }
];

const stats = [
  { number: "10,000+", label: "Active Members" },
  { number: "50,000+", label: "Skills Exchanged" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "200+", label: "Skill Categories" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Navigation to browse page with search query will be implemented
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Exchange Skills,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Build Community
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Connect with others to teach what you know and learn what you want. 
                Join thousands of skill swappers worldwide.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto animate-slide-up">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background rounded-lg border shadow-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for skills like 'Python', 'Guitar', 'Spanish'..."
                    className="pl-10 border-0 focus-visible:ring-0 bg-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="animate-pulse-glow"
                  onClick={handleSearch}
                >
                  Search Skills
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="btn-glow">
                Join SkillSwap
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl">
                Browse Skills
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How SkillSwap Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, safe, and effective skill exchange in four easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center card-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Skill Swappers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet some of our amazing community members ready to share their knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              {...skill}
              onClick={() => console.log("View profile:", skill.id)}
              onRequestSwap={() => console.log("Request swap with:", skill.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Skill Swappers
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="container px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Start Swapping?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our community of learners and teachers. 
              Create your profile in minutes and start connecting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="btn-glow">
                Create Your Profile
                <UserCheck className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-2" />
                Free to join
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-2" />
                Safe & secure
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-2" />
                No fees
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}