import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Search, 
  User, 
  MessageSquare, 
  LogOut, 
  Settings,
  Home
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/browse" 
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/browse') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Search className="h-4 w-4" />
              <span>Browse</span>
            </Link>
            
            <Link 
              to="/profile" 
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/profile') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <User className="h-4 w-4" />
              <span>My Profile</span>
            </Link>
            
            <Link 
              to="/requests" 
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/requests') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Requests</span>
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button variant="gradient" size="sm">
              Join Now
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  SkillSwap
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connect, learn, and grow together through skill exchange.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/browse" className="hover:text-primary transition-colors">Browse Skills</Link></li>
                <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link to="/safety" className="hover:text-primary transition-colors">Safety</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}