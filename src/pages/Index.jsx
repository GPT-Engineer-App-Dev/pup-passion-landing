import React from 'react';
import { Paw, Heart, Bone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pawsome Dogs</h1>
        <p className="text-xl text-gray-600">Discover the joy of canine companionship</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" />
              Loyal Companions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dogs are known for their unwavering loyalty and affection towards their human families.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2" />
              Unconditional Love
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Experience the pure and unconditional love that only a dog can provide.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bone className="mr-2" />
              Playful Nature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dogs bring joy and laughter with their playful antics and boundless energy.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Furry Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((dog) => (
            <Card key={dog}>
              <img src="/placeholder.svg" alt={`Dog ${dog}`} className="mx-auto object-cover w-full h-48" />
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Adorable Pup {dog}</h3>
                <p className="text-gray-600">A loving and energetic companion waiting for a forever home.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Find Your Perfect Companion?</h2>
        <Button size="lg">Adopt a Dog Today</Button>
      </div>
    </div>
  );
};

export default Index;