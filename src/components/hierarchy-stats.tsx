import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Users, Building, MapPin, Scale } from "lucide-react";

const stats = [
  {
    title: "Total Government Positions",
    value: "32,000+",
    description: "Across all branches and levels",
    icon: <Users className="w-5 h-5" />,
    color: "text-blue-600"
  },
  {
    title: "Administrative Units",
    value: "47",
    description: "Counties with 314 sub-counties",
    icon: <MapPin className="w-5 h-5" />,
    color: "text-green-600"
  },
  {
    title: "Independent Offices",
    value: "14",
    description: "Constitutional commissions and offices",
    icon: <Building className="w-5 h-5" />,
    color: "text-purple-600"
  },
  {
    title: "Grassroots Officers",
    value: "25,500+",
    description: "Chiefs, assistants, and village elders",
    icon: <Scale className="w-5 h-5" />,
    color: "text-orange-600"
  }
];

export function HierarchyStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <div className={stat.color}>
              {stat.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}