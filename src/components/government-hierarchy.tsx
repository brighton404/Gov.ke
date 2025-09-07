import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ChevronRight, Crown, Users, Scale, MapPin } from "lucide-react";
import { useState } from "react";

interface Position {
  title: string;
  description: string;
  level: number;
  department?: string;
  count?: number;
}

interface Branch {
  name: string;
  icon: React.ReactNode;
  color: string;
  positions: Position[];
}

const governmentBranches: Branch[] = [
  {
    name: "Executive Branch",
    icon: <Crown className="w-5 h-5" />,
    color: "bg-blue-500",
    positions: [
      {
        title: "President",
        description: "Head of State and Government, Commander-in-Chief of the Defence Forces",
        level: 1
      },
      {
        title: "Deputy President",
        description: "Principal assistant to the President in the discharge of the President's functions",
        level: 2
      },
      {
        title: "Cabinet Secretaries",
        description: "Heads of government ministries, appointed by the President",
        level: 3,
        count: 22
      },
      {
        title: "Principal Secretaries",
        description: "Chief executives of government ministries and state departments",
        level: 4,
        count: 50
      },
      {
        title: "Director-General, Office of the President",
        description: "Chief administrative officer in the Office of the President",
        level: 4
      },
      {
        title: "Attorney General",
        description: "Principal legal adviser to the Government",
        level: 3
      },
      {
        title: "Solicitor General",
        description: "Deputy to the Attorney General",
        level: 4
      },
      {
        title: "Inspector General of Police",
        description: "Head of the National Police Service",
        level: 4
      },
      {
        title: "Chief of Defence Forces",
        description: "Head of the Kenya Defence Forces",
        level: 4
      },
      {
        title: "Director General, National Intelligence Service",
        description: "Head of Kenya's intelligence service",
        level: 4
      },
      {
        title: "County Governors",
        description: "Chief executives of county governments",
        level: 3,
        count: 47
      },
      {
        title: "Deputy County Governors",
        description: "Principal assistants to County Governors",
        level: 4,
        count: 47
      },
      {
        title: "County Secretaries",
        description: "Chief administrative officers of county governments",
        level: 5,
        count: 47
      },
      {
        title: "County Executive Committee Members",
        description: "Heads of county departments, appointed by Governors",
        level: 5,
        count: 470
      },
      {
        title: "County Commissioners",
        description: "National government representatives at county level",
        level: 5,
        count: 47
      },
      {
        title: "Sub-County Administrators",
        description: "Administrative heads of sub-counties",
        level: 6,
        count: 314
      },
      {
        title: "Divisional Commissioners",
        description: "Administrative officers at divisional level",
        level: 7,
        count: 850
      },
      {
        title: "Chiefs",
        description: "Administrative officers at location level",
        level: 8,
        count: 2500
      },
      {
        title: "Assistant Chiefs",
        description: "Administrative officers at sub-location level",
        level: 9,
        count: 8000
      },
      {
        title: "Village Elders",
        description: "Grassroots administrative assistants",
        level: 10,
        count: 15000
      }
    ]
  },
  {
    name: "Legislative Branch",
    icon: <Users className="w-5 h-5" />,
    color: "bg-green-500",
    positions: [
      {
        title: "Speaker of the National Assembly",
        description: "Presides over the National Assembly proceedings",
        level: 1
      },
      {
        title: "Deputy Speaker of National Assembly",
        description: "Deputy presiding officer of the National Assembly",
        level: 2
      },
      {
        title: "Speaker of the Senate",
        description: "Presides over the Senate proceedings",
        level: 1
      },
      {
        title: "Deputy Speaker of Senate",
        description: "Deputy presiding officer of the Senate",
        level: 2
      },
      {
        title: "National Assembly Majority Leader",
        description: "Leader of the majority party in National Assembly",
        level: 2
      },
      {
        title: "National Assembly Minority Leader",
        description: "Leader of the minority parties in National Assembly",
        level: 2
      },
      {
        title: "Senate Majority Leader",
        description: "Leader of the majority party in Senate",
        level: 2
      },
      {
        title: "Senate Minority Leader",
        description: "Leader of the minority parties in Senate",
        level: 2
      },
      {
        title: "Members of National Assembly",
        description: "Elected representatives from constituencies nationwide",
        level: 3,
        count: 349
      },
      {
        title: "Senators",
        description: "Represent counties in the upper house of Parliament",
        level: 3,
        count: 67
      },
      {
        title: "Clerk of the National Assembly",
        description: "Chief procedural advisor and administrative head of National Assembly",
        level: 3
      },
      {
        title: "Clerk of the Senate",
        description: "Chief procedural advisor and administrative head of Senate",
        level: 3
      },
      {
        title: "County Assembly Speakers",
        description: "Preside over county assembly proceedings",
        level: 4,
        count: 47
      },
      {
        title: "Deputy County Assembly Speakers",
        description: "Deputy presiding officers of county assemblies",
        level: 5,
        count: 47
      },
      {
        title: "County Assembly Majority Leaders",
        description: "Leaders of majority parties in county assemblies",
        level: 5,
        count: 47
      },
      {
        title: "County Assembly Minority Leaders",
        description: "Leaders of minority parties in county assemblies",
        level: 5,
        count: 47
      },
      {
        title: "Members of County Assemblies",
        description: "Elected representatives at county level",
        level: 6,
        count: 2222
      },
      {
        title: "County Assembly Clerks",
        description: "Administrative heads of county assemblies",
        level: 6,
        count: 47
      }
    ]
  },
  {
    name: "Judicial Branch",
    icon: <Scale className="w-5 h-5" />,
    color: "bg-purple-500",
    positions: [
      {
        title: "Chief Justice",
        description: "Head of the Judiciary and President of the Supreme Court",
        level: 1
      },
      {
        title: "Deputy Chief Justice",
        description: "Deputy head of the Judiciary",
        level: 2
      },
      {
        title: "Supreme Court Judges",
        description: "Final court of appeal and constitutional interpretation",
        level: 2,
        count: 5
      },
      {
        title: "Chief Registrar of the Judiciary",
        description: "Administrative head of the judiciary",
        level: 3
      },
      {
        title: "President of the Court of Appeal",
        description: "Head of the Court of Appeal",
        level: 3
      },
      {
        title: "Court of Appeal Judges",
        description: "Appellate jurisdiction over High Court decisions",
        level: 4,
        count: 30
      },
      {
        title: "Principal Judge of the High Court",
        description: "Administrative head of the High Court",
        level: 4
      },
      {
        title: "High Court Judges",
        description: "Unlimited original jurisdiction in civil and criminal matters",
        level: 5,
        count: 150
      },
      {
        title: "Chief Magistrates",
        description: "Senior magistrates heading court stations",
        level: 6,
        count: 50
      },
      {
        title: "Principal Magistrates",
        description: "Senior magistrates with enhanced jurisdiction",
        level: 6,
        count: 80
      },
      {
        title: "Senior Principal Magistrates",
        description: "Magistrates with supervisory roles",
        level: 6,
        count: 60
      },
      {
        title: "Magistrates",
        description: "Subordinate court judges handling various legal matters",
        level: 7,
        count: 400
      },
      {
        title: "Senior Resident Magistrates",
        description: "Experienced magistrates with expanded jurisdiction",
        level: 7,
        count: 120
      },
      {
        title: "Resident Magistrates",
        description: "Magistrates handling serious criminal and civil cases",
        level: 8,
        count: 200
      },
      {
        title: "District Magistrates",
        description: "Magistrates handling local criminal and civil matters",
        level: 9,
        count: 300
      },
      {
        title: "Chief Kadhi",
        description: "Head of the Kadhi courts",
        level: 6
      },
      {
        title: "Kadhis",
        description: "Islamic law judges for personal status matters",
        level: 7,
        count: 17
      },
      {
        title: "Court Clerks",
        description: "Administrative support staff in courts",
        level: 8,
        count: 2000
      }
    ]
  },
  {
    name: "Independent Offices & Commissions",
    icon: <MapPin className="w-5 h-5" />,
    color: "bg-orange-500",
    positions: [
      {
        title: "Auditor General",
        description: "Head of the national audit office",
        level: 1
      },
      {
        title: "Controller of Budget",
        description: "Overseer of national and county budget implementation",
        level: 1
      },
      {
        title: "Director of Public Prosecutions",
        description: "Head of public prosecution service",
        level: 1
      },
      {
        title: "Chairperson, Independent Electoral and Boundaries Commission",
        description: "Head of electoral management body",
        level: 1
      },
      {
        title: "Chairperson, Kenya National Commission on Human Rights",
        description: "Head of national human rights institution",
        level: 1
      },
      {
        title: "Chairperson, Commission on Administrative Justice",
        description: "Head of ombudsman institution",
        level: 1
      },
      {
        title: "Chairperson, Ethics and Anti-Corruption Commission",
        description: "Head of anti-corruption body",
        level: 1
      },
      {
        title: "Chairperson, National Gender and Equality Commission",
        description: "Head of gender equality oversight body",
        level: 1
      },
      {
        title: "Chairperson, Commission on Revenue Allocation",
        description: "Head of revenue sharing advisory body",
        level: 1
      },
      {
        title: "Chairperson, Public Service Commission",
        description: "Head of public service management body",
        level: 1
      },
      {
        title: "Chairperson, Teachers Service Commission",
        description: "Head of teachers' employer body",
        level: 1
      },
      {
        title: "Chairperson, Judicial Service Commission",
        description: "Head of judicial administration body",
        level: 1
      },
      {
        title: "Chairperson, Parliamentary Service Commission",
        description: "Head of parliamentary administration body",
        level: 1
      },
      {
        title: "Chairperson, Salaries and Remuneration Commission",
        description: "Head of public sector remuneration oversight",
        level: 1
      }
    ]
  }
];

export function GovernmentHierarchy() {
  const [expandedBranches, setExpandedBranches] = useState<string[]>([]);

  const toggleBranch = (branchName: string) => {
    setExpandedBranches(prev => 
      prev.includes(branchName) 
        ? prev.filter(name => name !== branchName)
        : [...prev, branchName]
    );
  };

  const getLevelIndent = (level: number) => {
    return `ml-${(level - 1) * 6}`;
  };

  const getLevelBorder = (level: number) => {
    const colors = ['border-l-4 border-red-500', 'border-l-4 border-orange-500', 'border-l-4 border-yellow-500', 'border-l-4 border-green-500', 'border-l-4 border-blue-500'];
    return colors[Math.min(level - 1, colors.length - 1)];
  };

  return (
    <div className="space-y-6">
      {governmentBranches.map((branch) => (
        <Card key={branch.name} className="overflow-hidden">
          <Collapsible 
            open={expandedBranches.includes(branch.name)}
            onOpenChange={() => toggleBranch(branch.name)}
          >
            <CollapsibleTrigger className="w-full">
              <CardHeader className="hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full text-white ${branch.color}`}>
                    {branch.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <CardTitle className="flex items-center gap-2">
                      {branch.name}
                      {expandedBranches.includes(branch.name) ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                      }
                    </CardTitle>
                    <CardDescription>
                      {branch.positions.length} levels of hierarchy
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    {branch.positions.reduce((sum, pos) => sum + (pos.count || 1), 0)} positions
                  </Badge>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {branch.positions
                    .sort((a, b) => a.level - b.level)
                    .map((position, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg bg-muted/30 ${getLevelIndent(position.level)} ${getLevelBorder(position.level)}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium">{position.title}</h4>
                            {position.count && (
                              <Badge variant="outline" className="text-xs">
                                {position.count} {position.count === 1 ? 'position' : 'positions'}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {position.description}
                          </p>
                          {position.department && (
                            <div className="flex items-center gap-1 mt-2">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{position.department}</span>
                            </div>
                          )}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Level {position.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  );
}