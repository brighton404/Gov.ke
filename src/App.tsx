import { GovernmentHierarchy } from './components/government-hierarchy';
import { HierarchyStats } from './components/hierarchy-stats';
import { ConstitutionInfo } from './components/constitution-info';
import { NodeChart } from './components/node-chart';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Flag, Info, List, Network } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [viewMode, setViewMode] = useState<'list' | 'chart'>('list');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red  border border-2 w-10 h-10"></div>
              <div>
                <h1 className="text-2xl font-bold">Kenya Government Hierarchy</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex gap-2">
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4 mr-2" />
                  List View
                </Button>
                <Button
                  variant={viewMode === 'chart' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('chart')}
                >
                  <Network className="w-4 h-4 mr-2" />
                  Chart View
                </Button>
              </div>
              <Badge variant="outline" className="hidden sm:inline-flex">
                <Info className="w-3 h-3 mr-1" />
                Republic of Kenya
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Understanding Kenya's Government Structure</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the complete hierarchy of Kenya's government, from the President at the top 
              to local government officials. Our democratic system is built on the principles of 
              separation of powers and devolved governance.
            </p>
          </div>
        </div>

        {/* Mobile View Toggle */}
        <div className="sm:hidden mb-6">
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="flex-1"
            >
              <List className="w-4 h-4 mr-2" />
              List View
            </Button>
            <Button
              variant={viewMode === 'chart' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('chart')}
              className="flex-1"
            >
              <Network className="w-4 h-4 mr-2" />
              Chart View
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <HierarchyStats />

        {/* Government Content */}
        {viewMode === 'list' ? (
          <div className="mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Government Branches</h2>
              <p className="text-muted-foreground">
                Click on each branch to explore the hierarchy of positions and their responsibilities.
              </p>
            </div>
            <GovernmentHierarchy />
          </div>
        ) : (
          <div className="mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Interactive Government Chart</h2>
              <p className="text-muted-foreground">
                Click on branches to expand their structure, then click on individual offices for detailed information and Wikipedia sources.
              </p>
            </div>
            <Card className="p-6 border-none">
              <NodeChart />
            </Card>
          </div>
        )}

        {/* Constitutional Framework */}
        <ConstitutionInfo />
        
        {/* Footer Info */}
        <footer className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              This hierarchy represents the structure as established by the Constitution of Kenya 2010
            </p>
            <p>
              Position counts are approximate and may vary based on current appointments and elections
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}