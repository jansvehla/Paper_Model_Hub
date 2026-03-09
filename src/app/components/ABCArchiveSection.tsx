import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Archive, Download, Eye } from 'lucide-react';

const archiveItems = [
  {
    id: 1,
    title: 'ABC Magazine Vol. 45',
    issue: 'Spring 2023',
    description: 'Features aircraft models including Boeing 777 and F-16 Fighting Falcon',
    pages: 128,
    downloads: '2.4K',
  },
  {
    id: 2,
    title: 'ABC Magazine Vol. 44',
    issue: 'Winter 2022',
    description: 'Special edition on maritime vessels and historic ships',
    pages: 112,
    downloads: '1.8K',
  },
  {
    id: 3,
    title: 'ABC Magazine Vol. 43',
    issue: 'Fall 2022',
    description: 'Architectural landmarks and famous buildings from around the world',
    pages: 96,
    downloads: '3.2K',
  },
  {
    id: 4,
    title: 'ABC Magazine Vol. 42',
    issue: 'Summer 2022',
    description: 'Classic automobiles and racing vehicles collection',
    pages: 104,
    downloads: '2.7K',
  },
];

export function ABCArchiveSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#4A90E2] rounded-2xl mb-4">
            <Archive className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl mb-4 text-gray-900">ABC Paper Model Magazine Archive</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Access our complete digital archive of ABC Magazine, featuring thousands of paper model designs spanning over two decades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {archiveItems.map((item) => (
            <Card key={item.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1609081704841-37b6ea9a2b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcGFwZXIlMjBtYWdhemluZSUyMGFyY2hpdmV8ZW58MXx8fHwxNzcyOTk5NDMwfDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.issue}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.pages} pages</span>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{item.downloads}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#4A90E2] hover:bg-[#3A7BC8]">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="bg-white">
            View Complete Archive
          </Button>
        </div>
      </div>
    </section>
  );
}
