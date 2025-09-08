import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Crown, Users, Scale, ExternalLink, Plus, Minus } from "lucide-react";

interface NodePosition {
  id: string;
  title: string;
  description: string;
  level: number;
  count?: number;
  wikiUrl?: string;
  responsibilities?: string[];
  qualifications?: string[];
  termLength?: string;
}

interface NodeBranch {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  positions: NodePosition[];
}

const nodeData: NodeBranch[] = [
  {
    id: "executive",
    name: "Executive Branch",
    icon: <Crown className="w-4 h-4" />,
    color: "bg-blue-500",
    positions: [
      {
        id: "president",
        title: "President",
        description: "Head of State and Government, Commander-in-Chief of the Defence Forces",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/President_of_Kenya",
        responsibilities: [
          "Preserve, protect and defend the Constitution",
          "Safeguard sovereignty of the Republic",
          "Promote and enhance unity of the nation",
          "Respect, uphold and safeguard human dignity"
        ],
        qualifications: [
          "Citizen of Kenya by birth",
          "At least 35 years of age",
          "Holder of a degree from a university recognized in Kenya",
          "Nominated by at least 2,000 registered voters from each of majority of counties"
        ],
        termLength: "5 years (maximum 2 terms)"
      },
      {
        id: "deputy-president",
        title: "Deputy President",
        description: "Principal assistant to the President in the discharge of the President's functions",
        level: 2,
        wikiUrl: "https://en.wikipedia.org/wiki/Deputy_President_of_Kenya",
        responsibilities: [
          "Assist the President in execution of functions",
          "Perform functions conferred by Constitution or legislation",
          "Act as President when President is absent or temporarily incapacitated"
        ],
        qualifications: [
          "Same qualifications as President",
          "Running mate of presidential candidate"
        ],
        termLength: "5 years (serves with President)"
      },
      {
        id: "cabinet-secretaries",
        title: "Cabinet Secretaries",
        description: "Heads of government ministries, appointed by the President",
        level: 3,
        count: 22,
        wikiUrl: "https://en.wikipedia.org/wiki/Cabinet_of_Kenya",
        responsibilities: [
          "Exercise executive authority assigned by President",
          "Implement national government policy",
          "Coordinate and supervise government functions",
          "Prepare policy for approval by Cabinet"
        ],
        qualifications: [
          "Not be a member of Parliament",
          "Degree from university recognized in Kenya",
          "Demonstrate competence and integrity"
        ]
      },
      {
        id: "attorney-general",
        title: "Attorney General",
        description: "Principal legal adviser to the Government",
        level: 3,
        wikiUrl: "https://en.wikipedia.org/wiki/Attorney_General_of_Kenya",
        responsibilities: [
          "Principal legal adviser to Government",
          "Represent the national government in court",
          "Promote rule of law and good governance",
          "Draft government legislation"
        ],
        qualifications: [
          "Advocate of the High Court of Kenya",
          "At least 15 years experience",
          "High moral character and integrity"
        ]
      },
      {
        id: "county-governors",
        title: "County Governors",
        description: "Chief executives of county governments",
        level: 3,
        count: 47,
        wikiUrl: "https://en.wikipedia.org/wiki/List_of_governors_of_Kenya",
        responsibilities: [
          "Chief executive of county government",
          "Implement county legislation",
          "Coordinate county administration",
          "Represent the county in inter-governmental relations"
        ],
        qualifications: [
          "Citizen of Kenya",
          "Registered voter",
          "Degree from university recognized in Kenya",
          "Meet requirements of Chapter Six of Constitution"
        ],
        termLength: "5 years (maximum 2 terms)"
      },
      {
        id: "county-commissioners",
        title: "County Commissioners",
        description: "National government representatives at county level",
        level: 5,
        count: 47,
        wikiUrl: "https://en.wikipedia.org/wiki/Provincial_administration_of_Kenya",
        responsibilities: [
          "Coordinate national government functions at county level",
          "Maintain law and order",
          "Supervise sub-county administrators",
          "Coordinate security operations"
        ],
        qualifications: [
          "University degree",
          "Experience in public administration",
          "Meet public service requirements"
        ]
      },
      {
        id: "chiefs",
        title: "Chiefs",
        description: "Administrative officers at location level",
        level: 8,
        count: 2500,
        wikiUrl: "https://en.wikipedia.org/wiki/Provincial_administration_of_Kenya",
        responsibilities: [
          "Maintain law and order at location level",
          "Coordinate government services",
          "Register births and deaths",
          "Issue certificates and permits"
        ],
        qualifications: [
          "Kenya Certificate of Secondary Education",
          "Training in public administration",
          "Knowledge of local area and customs"
        ]
      },
      {
        id: "assistant-chiefs",
        title: "Assistant Chiefs",
        description: "Administrative officers at sub-location level",
        level: 9,
        count: 8000,
        wikiUrl: "https://en.wikipedia.org/wiki/Provincial_administration_of_Kenya",
        responsibilities: [
          "Assist chiefs in administrative duties",
          "Maintain peace and security",
          "Facilitate government service delivery",
          "Coordinate with local communities"
        ],
        qualifications: [
          "Kenya Certificate of Secondary Education",
          "Basic training in administration",
          "Good knowledge of local area"
        ]
      }
    ]
  },
  {
    id: "legislative",
    name: "Legislative Branch",
    icon: <Users className="w-4 h-4" />,
    color: "bg-green-500",
    positions: [
      {
        id: "speaker-national-assembly",
        title: "Speaker of National Assembly",
        description: "Presides over the National Assembly proceedings",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/Speaker_of_the_National_Assembly_of_Kenya",
        responsibilities: [
          "Preside over National Assembly proceedings",
          "Ensure order and application of rules",
          "Represent the Assembly in its relations with other institutions",
          "Perform ceremonial functions"
        ],
        qualifications: [
          "Qualified to be elected as MP",
          "Elected by National Assembly members"
        ],
        termLength: "Life of Parliament (5 years)"
      },
      {
        id: "speaker-senate",
        title: "Speaker of Senate",
        description: "Presides over the Senate proceedings",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/Speaker_of_the_Senate_of_Kenya",
        responsibilities: [
          "Preside over Senate proceedings",
          "Ensure Senate rules are followed",
          "Represent Senate in relations with other bodies",
          "Chair joint sittings of Parliament"
        ],
        qualifications: [
          "Qualified to be elected as Senator",
          "Elected by Senate members"
        ],
        termLength: "Life of Parliament (5 years)"
      },
      {
        id: "majority-leader-na",
        title: "National Assembly Majority Leader",
        description: "Leader of the majority party in National Assembly",
        level: 2,
        wikiUrl: "https://en.wikipedia.org/wiki/National_Assembly_(Kenya)",
        responsibilities: [
          "Lead majority party business in the Assembly",
          "Coordinate government legislative agenda",
          "Represent majority party interests",
          "Liaise with executive on policy matters"
        ],
        qualifications: [
          "Elected Member of Parliament",
          "Member of majority party",
          "Appointed by party leadership"
        ],
        termLength: "Life of Parliament (5 years)"
      },
      {
        id: "mps",
        title: "Members of Parliament",
        description: "Elected representatives from constituencies nationwide",
        level: 3,
        count: 349,
        wikiUrl: "https://en.wikipedia.org/wiki/National_Assembly_(Kenya)",
        responsibilities: [
          "Represent constituents",
          "Make laws for peace, order and good government",
          "Determine allocation of national revenue",
          "Exercise oversight over national executive"
        ],
        qualifications: [
          "Citizen of Kenya",
          "At least 21 years of age",
          "Registered voter",
          "Meet requirements of Chapter Six of Constitution"
        ],
        termLength: "5 years"
      },
      {
        id: "senators",
        title: "Senators",
        description: "Represent counties in the upper house of Parliament",
        level: 3,
        count: 67,
        wikiUrl: "https://en.wikipedia.org/wiki/Senate_(Kenya)",
        responsibilities: [
          "Represent counties",
          "Participate in law-making concerning counties",
          "Determine allocation of national revenue among counties",
          "Exercise oversight over county governments"
        ],
        qualifications: [
          "Citizen of Kenya",
          "At least 21 years of age",
          "Registered voter",
          "Meet requirements of Chapter Six of Constitution"
        ],
        termLength: "5 years"
      },
      {
        id: "mcas",
        title: "Members of County Assemblies",
        description: "Elected representatives at county level",
        level: 6,
        count: 2222,
        wikiUrl: "https://en.wikipedia.org/wiki/County_governments_of_Kenya",
        responsibilities: [
          "Make county laws and policies",
          "Approve county budgets",
          "Exercise oversight over county executive",
          "Represent ward interests"
        ],
        qualifications: [
          "Citizen of Kenya",
          "At least 21 years of age",
          "Registered voter in the ward",
          "Meet integrity requirements"
        ],
        termLength: "5 years"
      }
    ]
  },
  {
    id: "judicial",
    name: "Judicial Branch",
    icon: <Scale className="w-4 h-4" />,
    color: "bg-purple-500",
    positions: [
      {
        id: "chief-justice",
        title: "Chief Justice",
        description: "Head of the Judiciary and President of the Supreme Court",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/Chief_Justice_of_Kenya",
        responsibilities: [
          "Head of Judiciary",
          "Administrative head of all courts",
          "President of Supreme Court",
          "Final responsibility for efficient operation of courts"
        ],
        qualifications: [
          "At least 15 years experience as superior court judge",
          "Or at least 20 years experience as distinguished academic or legal practitioner",
          "High moral character and integrity"
        ],
        termLength: "Non-renewable term (retirement at 70)"
      },
      {
        id: "deputy-chief-justice",
        title: "Deputy Chief Justice",
        description: "Deputy head of the Judiciary",
        level: 2,
        wikiUrl: "https://en.wikipedia.org/wiki/Chief_Justice_of_Kenya",
        responsibilities: [
          "Assist Chief Justice in administrative duties",
          "Act as Chief Justice when absent",
          "Member of Supreme Court",
          "Oversee judicial reform programs"
        ],
        qualifications: [
          "At least 15 years experience as superior court judge",
          "Or at least 20 years experience as distinguished academic or legal practitioner",
          "High moral character and integrity"
        ],
        termLength: "Non-renewable term (retirement at 70)"
      },
      {
        id: "supreme-court-judges",
        title: "Supreme Court Judges",
        description: "Final court of appeal and constitutional interpretation",
        level: 2,
        count: 5,
        wikiUrl: "https://en.wikipedia.org/wiki/Supreme_Court_of_Kenya",
        responsibilities: [
          "Final court of appeal",
          "Exclusive jurisdiction in presidential election disputes",
          "Advisory jurisdiction on devolution matters",
          "Constitutional interpretation"
        ],
        qualifications: [
          "At least 15 years experience as superior court judge",
          "Or at least 20 years experience as distinguished academic or legal practitioner",
          "High moral character and integrity"
        ]
      },
      {
        id: "court-of-appeal-judges",
        title: "Court of Appeal Judges",
        description: "Appellate jurisdiction over High Court decisions",
        level: 4,
        count: 30,
        wikiUrl: "https://en.wikipedia.org/wiki/Court_of_Appeal_(Kenya)",
        responsibilities: [
          "Hear appeals from High Court",
          "Interpret law and set precedents",
          "Review lower court decisions",
          "Ensure uniform application of law"
        ],
        qualifications: [
          "At least 10 years experience as High Court judge",
          "Or at least 15 years as advocate",
          "High moral character and integrity"
        ]
      },
      {
        id: "high-court-judges",
        title: "High Court Judges",
        description: "Unlimited original jurisdiction in civil and criminal matters",
        level: 5,
        count: 150,
        wikiUrl: "https://en.wikipedia.org/wiki/High_Court_of_Kenya",
        responsibilities: [
          "Unlimited original jurisdiction",
          "Supervisory jurisdiction over subordinate courts",
          "Constitutional and human rights enforcement",
          "Appeals from subordinate courts"
        ],
        qualifications: [
          "At least 10 years experience as magistrate",
          "Or advocate of High Court",
          "Or distinguished academic or legal practitioner",
          "High moral character and integrity"
        ]
      },
      {
        id: "chief-magistrates",
        title: "Chief Magistrates",
        description: "Senior magistrates heading court stations",
        level: 6,
        count: 50,
        wikiUrl: "https://en.wikipedia.org/wiki/Magistrate_court_(Kenya)",
        responsibilities: [
          "Administrative oversight of court station",
          "Handle serious criminal and civil cases",
          "Supervise junior magistrates",
          "Ensure efficient court operations"
        ],
        qualifications: [
          "Law degree and admission to bar",
          "At least 7 years experience as magistrate",
          "Leadership and administrative skills"
        ]
      },
      {
        id: "magistrates",
        title: "Magistrates",
        description: "Subordinate court judges handling various legal matters",
        level: 7,
        count: 400,
        wikiUrl: "https://en.wikipedia.org/wiki/Magistrate_court_(Kenya)",
        responsibilities: [
          "Try criminal and civil cases within jurisdiction",
          "Issue warrants and summons",
          "Conduct preliminary inquiries",
          "Handle traffic and minor offenses"
        ],
        qualifications: [
          "Law degree from recognized university",
          "Admission to the bar",
          "Pass judiciary recruitment exams",
          "Good moral character"
        ]
      },
      {
        id: "kadhis",
        title: "Kadhis",
        description: "Islamic law judges for personal status matters",
        level: 7,
        count: 17,
        wikiUrl: "https://en.wikipedia.org/wiki/Kadhi_courts",
        responsibilities: [
          "Determine Islamic personal status matters",
          "Handle marriage, divorce, and inheritance cases",
          "Apply Islamic law (Sharia)",
          "Serve Muslim communities"
        ],
        qualifications: [
          "Deep knowledge of Islamic law",
          "Recognized Islamic legal education",
          "Fluency in Arabic and local languages",
          "High moral standing in community"
        ]
      }
    ]
  },
  {
    id: "independent",
    name: "Independent Offices",
    icon: <ExternalLink className="w-4 h-4" />,
    color: "bg-orange-500",
    positions: [
      {
        id: "auditor-general",
        title: "Auditor General",
        description: "Head of the national audit office",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/Auditor_General_of_Kenya",
        responsibilities: [
          "Audit public institutions and use of public resources",
          "Ensure accountability in public finance management",
          "Report to Parliament on government spending",
          "Promote transparency and good governance"
        ],
        qualifications: [
          "Professional qualification in audit/accounting",
          "At least 15 years experience in audit",
          "High integrity and independence",
          "Strong leadership skills"
        ],
        termLength: "8 years (non-renewable)"
      },
      {
        id: "dpp",
        title: "Director of Public Prosecutions",
        description: "Head of public prosecution service",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/Director_of_Public_Prosecutions_(Kenya)",
        responsibilities: [
          "Direct and control criminal prosecutions",
          "Institute and conduct criminal proceedings",
          "Take over and continue criminal proceedings",
          "Discontinue criminal proceedings at any stage"
        ],
        qualifications: [
          "Advocate of High Court of Kenya",
          "At least 15 years experience in criminal law",
          "High moral character and integrity",
          "Strong prosecutorial experience"
        ],
        termLength: "8 years (renewable once)"
      },
      {
        id: "iebc-chair",
        title: "IEBC Chairperson",
        description: "Head of electoral management body",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/Independent_Electoral_and_Boundaries_Commission",
        responsibilities: [
          "Conduct free and fair elections",
          "Review electoral boundaries",
          "Register voters and political parties",
          "Ensure electoral integrity and transparency"
        ],
        qualifications: [
          "Degree from recognized university",
          "At least 10 years experience in public service",
          "High integrity and impartiality",
          "Knowledge of electoral processes"
        ],
        termLength: "6 years (non-renewable)"
      },
      {
        id: "eacc-chair",
        title: "EACC Chairperson",
        description: "Head of anti-corruption body",
        level: 1,
        wikiUrl: "https://en.wikipedia.org/wiki/Ethics_and_Anti-Corruption_Commission",
        responsibilities: [
          "Investigate corruption and economic crimes",
          "Prevent corruption through education and systems",
          "Prosecute corruption cases",
          "Recover proceeds of corruption"
        ],
        qualifications: [
          "University degree preferably in law",
          "At least 15 years relevant experience",
          "High integrity and moral character",
          "Knowledge of anti-corruption work"
        ],
        termLength: "6 years (renewable once)"
      }
    ]
  }
];

export function NodeChart() {
  const [expandedBranches, setExpandedBranches] = useState<string[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<NodePosition | null>(null);

  const toggleBranch = (branchId: string) => {
    setExpandedBranches(prev => 
      prev.includes(branchId) 
        ? prev.filter(id => id !== branchId)
        : [...prev, branchId]
    );
  };

  const selectPosition = (position: NodePosition) => {
    setSelectedPosition(position);
  };

  return (
    <div className="w-full h-fit min-h-[600px] relative overflow-auto">
      {/* Central Government Node */}
      <div className="flex flex-col items-center pt-8">
        {/* Branch Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-6xl pb-6">
          {nodeData.map((branch, branchIndex) => (
            <div key={branch.id} className="flex flex-col items-center">
              {/* Branch Root Node */}
              <Card 
                className={`p-4 cursor-pointer transition-all hover:scale-105 border-2 ${
                  expandedBranches.includes(branch.id) ? 'ring-2 ring-offset-2' : ''
                }`}
                onClick={() => toggleBranch(branch.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full text-white ${branch.color}`}>
                    {branch.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm">{branch.name}</h3>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {branch.positions.length} levels
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-2">
                    {expandedBranches.includes(branch.id) ? 
                      <Minus className="w-4 h-4" /> : 
                      <Plus className="w-4 h-4" />
                    }
                  </Button>
                </div>
              </Card>

              {/* Connecting Line */}
              {expandedBranches.includes(branch.id) && (
                <div className="w-0.5 h-8 bg-border my-2"></div>
              )}

              {/* Position Nodes */}
              {expandedBranches.includes(branch.id) && (
                <div className="">
                  {branch.positions
                    .sort((a, b) => a.level - b.level)
                    .map((position, posIndex) => (
                    <div key={position.id} className="flex flex-col items-center">
                      {posIndex > 0 && (
                        <div className="w-0.5 h-4 bg-border"></div>
                      )}
                      <Card 
                        className="p-3 cursor-pointer transition-all hover:scale-105 hover:shadow-md max-w-xs"
                        onClick={() => selectPosition(position)}
                      >
                        <div className="text-center">
                          <h4 className="font-medium text-sm">{position.title}</h4>
                          {position.count && (
                            <Badge variant="outline" className="text-xs mt-1">
                              {position.count} positions
                            </Badge>
                          )}
                          <Badge 
                            variant="secondary" 
                            className="text-xs mt-1 ml-1"
                          >
                            Level {position.level}
                          </Badge>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Position Details Modal */}
      <Dialog open={!!selectedPosition} onOpenChange={() => setSelectedPosition(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedPosition && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selectedPosition.title}
                  {selectedPosition.count && (
                    <Badge variant="outline">
                      {selectedPosition.count} positions
                    </Badge>
                  )}
                </DialogTitle>
                <DialogDescription>
                  {selectedPosition.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                {selectedPosition.responsibilities && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedPosition.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPosition.qualifications && (
                  <div>
                    <h4 className="font-semibold mb-2">Qualifications Required</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedPosition.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPosition.termLength && (
                  <div>
                    <h4 className="font-semibold mb-2">Term of Office</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedPosition.termLength}
                    </p>
                  </div>
                )}

                {selectedPosition.wikiUrl && (
                  <div className="pt-4 border-t">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(selectedPosition.wikiUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More on Wikipedia
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}