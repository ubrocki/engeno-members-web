import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <section className="flex">
      <Card className="m-2 h-36 w-48">
        <CardHeader>
          <CardTitle>Genossen</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <h2 className="text-3xl">198</h2>
        </CardContent>
      </Card>
      <Card className="m-2 h-36 w-48">
        <CardHeader>
          <CardTitle>Beteiligungen</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">102.500 €</h1>
        </CardContent>
      </Card>
      <Card className="m-2 h-36 w-48">
        <CardHeader>
          <CardTitle>Interessenten</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <h2 className="text-3xl">33</h2>
        </CardContent>
      </Card>
    </section>
  );
};

export default HomePage;
