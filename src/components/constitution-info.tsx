import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Calendar, Users2, Gavel } from "lucide-react";

const constitutionalPrinciples = [
  {
    title: "Separation of Powers",
    description: "Executive, Legislative, and Judicial branches operate independently with checks and balances",
    icon: <Gavel className="w-4 h-4" />
  },
  {
    title: "Devolved Government",
    description: "Power shared between national and 47 county governments for local governance",
    icon: <Users2 className="w-4 h-4" />
  },
  {
    title: "Democratic Representation",
    description: "Citizens elect representatives at national and county levels every five years",
    icon: <Users2 className="w-4 h-4" />
  },
  {
    title: "Constitutional Supremacy",
    description: "The Constitution is the supreme law, with all government power derived from it",
    icon: <BookOpen className="w-4 h-4" />
  }
];

export function ConstitutionInfo() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-red-500 text-white">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <CardTitle>Constitutional Framework</CardTitle>
            <CardDescription>
              Kenya's government structure is established by the 2010 Constitution
            </CardDescription>
          </div>
          <Badge variant="outline" className="ml-auto">
            <Calendar className="w-3 h-3 mr-1" />
            Est. 2010
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {constitutionalPrinciples.map((principle, index) => (
            <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/30">
              <div className="text-primary mt-0.5">
                {principle.icon}
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">{principle.title}</h4>
                <p className="text-xs text-muted-foreground">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Fact:</strong> Kenya operates a presidential system with a bicameral parliament, 
            combining national government with devolved county governments for effective governance at all levels.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}