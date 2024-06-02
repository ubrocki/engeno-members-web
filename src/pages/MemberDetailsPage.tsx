import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MemberDetailsPageProps {
  // define your props here
}

const MemberDetailsPage: React.FC<MemberDetailsPageProps> = () => {
  // const params = useParams();

  return (
    <section className="flex items-center flex-col gap-4">
      <div>
        <Link
          to=".."
          relative="path"
          className="w-30 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 m-2"
        >
          Zurück
        </Link>
      </div>
      <Tabs defaultValue="membership">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="membership">Mitgliedschaft</TabsTrigger>
          <TabsTrigger value="account">Bankdetails</TabsTrigger>
          <TabsTrigger value="bookings">Anteile</TabsTrigger>
        </TabsList>
        <TabsContent value="membership">
          <Card className="m-2 w-full max-w-md">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Mitgliedschaft</CardTitle>
              <Button variant="outline" className="justify-self-end ">
                Editieren
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-1">
                <div className="flex justify-end">
                  <label>Mitgliedsnr.</label>
                </div>
                <div className="flex justify-start ml-2">
                  <label>2023000023</label>
                </div>
                <div className="flex justify-end">
                  <label>Typ</label>
                </div>
                <div className="flex justify-start ml-2">
                  <label>institutionell</label>
                </div>
                <div className="flex justify-end">
                  <label>Mitglied seid</label>
                </div>
                <div className="flex justify-start ml-2">
                  <label>12.04.2023</label>
                </div>
                <div className="flex justify-end">
                  <label>Anteile</label>
                </div>
                <div className="flex justify-start ml-2">
                  <label>5</label>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="m-2 w-full max-w-md">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Organisation</CardTitle>
              <Button variant="outline" className="justify-self-end ">
                Editieren
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex justify-normal gap-4">
                <label>Phönix Contact GmbH</label>
              </div>
              <div className="flex justify-normal gap-4">
                <label>Hinter dem Mond 3</label>
              </div>
              <div className="flex justify-normal gap-4">
                <label>12345 Bloomberg</label>
              </div>
            </CardContent>
          </Card>
          <Card className="m-2 w-full max-w-md">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Kontakt</CardTitle>
              <Button variant="outline" className="justify-self-end ">
                Editieren
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid">
                <label>Hand Meiser</label>
                <label>Vor der Häke 23b</label>
                <label>31812 Bad Pyrmont</label>
                <div className="grid mt-2">
                  <label>ubrockerhoff@hotmail.de</label>
                  <label>+49 (0)5251 123456</label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card className="m-2 w-full max-w-md">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Konto</CardTitle>
              <Button variant="outline" className="justify-self-end ">
                Editieren
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex justify-normal gap-4">
                <label>Inhaber</label>
                <label>Ulrich Brickerhoff</label>
              </div>
              <div className="flex justify-normal gap-4">
                <label>Institut</label>
                <label>Sparkasse Bad Pyrmont</label>
              </div>
              <div className="flex justify-normal gap-4">
                <label>IBAN</label>
                <label>DE12 0000 1111 2222 3333 21</label>
              </div>
              <div className="flex justify-normal gap-4">
                <label>BIC</label>
                <label>SP1234X</label>
              </div>
              <div className="flex justify-center gap-2 mt-2">
                <Checkbox id="checkbox" checked={true} className="mt-1" />
                <label htmlFor="checkbox" className="text-gray-600">
                  SEPA Einzugsermächtigung erteilt
                </label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MemberDetailsPage;
