import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, MessageSquare } from "lucide-react";

interface Skill {
  name: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'expert';
}

interface SkillCardProps {
  id: string;
  name: string;
  location?: string;
  avatar?: string;
  skillsOffered: Skill[];
  skillsWanted: Skill[];
  rating?: number;
  totalSwaps?: number;
  onClick?: () => void;
  onRequestSwap?: () => void;
}

const skillLevelColors = {
  beginner: "skill-beginner",
  intermediate: "skill-intermediate", 
  expert: "skill-expert"
};

export default function SkillCard({
  id,
  name,
  location,
  avatar,
  skillsOffered,
  skillsWanted,
  rating = 0,
  totalSwaps = 0,
  onClick,
  onRequestSwap
}: SkillCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="card-hover cursor-pointer group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {name}
              </h3>
              {location && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {location}
                </div>
              )}
            </div>
          </div>
          
          {rating > 0 && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
              <span>{rating.toFixed(1)}</span>
              <span className="ml-1">({totalSwaps})</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4" onClick={onClick}>
        {/* Skills Offered */}
        <div>
          <h4 className="font-medium text-sm text-muted-foreground mb-2">Skills Offered</h4>
          <div className="flex flex-wrap gap-2">
            {skillsOffered.slice(0, 3).map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className={`${skillLevelColors[skill.level]} border`}
              >
                {skill.name}
              </Badge>
            ))}
            {skillsOffered.length > 3 && (
              <Badge variant="outline" className="text-muted-foreground">
                +{skillsOffered.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Skills Wanted */}
        {skillsWanted.length > 0 && (
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">Looking to Learn</h4>
            <div className="flex flex-wrap gap-2">
              {skillsWanted.slice(0, 2).map((skill, index) => (
                <Badge key={index} variant="outline" className="text-muted-foreground">
                  {skill.name}
                </Badge>
              ))}
              {skillsWanted.length > 2 && (
                <Badge variant="outline" className="text-muted-foreground">
                  +{skillsWanted.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex w-full space-x-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={onClick}>
            View Profile
          </Button>
          <Button 
            variant="gradient" 
            size="sm" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onRequestSwap?.();
            }}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Request Swap
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}