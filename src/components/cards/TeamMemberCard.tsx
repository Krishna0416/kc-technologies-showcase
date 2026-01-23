import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  index?: number;
}

const TeamMemberCard = ({ name, role, bio, image, index = 0 }: TeamMemberCardProps) => {
  return (
    <div
      className={cn(
        "relative p-6 rounded-xl bg-card border border-border/50 text-center",
        "hover-lift transition-all duration-300",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Avatar */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-bold text-primary">
            {name.charAt(0)}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-1">
        {name}
      </h3>
      <p className="text-sm text-primary font-medium mb-3">
        {role}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {bio}
      </p>
    </div>
  );
};

export default TeamMemberCard;
