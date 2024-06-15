import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Link } from "react-router-dom";
import EditMembershipDialog from "@/components/dialogs/EditMembershipDialog";
import EditOrganisationDialog from "@/components/dialogs/EditOrganisationDialog";
import EditContactDialog from "@/components/dialogs/EditContactDialog";
import EditAccountDialog from "@/components/dialogs/EditAccountDialog";
import ShareTransactionsTable from "@/components/ShareTransactionsTable";
import TRANSACTIONS from "@/data/available-bookings";
import { Button } from "@/components/ui/button";

interface MemberDetailsPageProps {
  // define your props here
}

const MemberDetailsPage: React.FC<MemberDetailsPageProps> = () => {
  // const params = useParams();
  const cardClassesForOrganisation = "m-2";

  return (
    <section className="flex w-full flex-col items-center gap-4">
      <div>
        <Link
          to=".."
          relative="path"
          className="w-30 m-2 rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700"
        >
          Zurück
        </Link>
      </div>
      <Card className="m-2 w-1/3">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Kontakt</CardTitle>
          <EditContactDialog />
        </CardHeader>
        <CardContent>
          <div className="grid">
            <label>Herr Hans Meiser</label>
            <label>Vor der Häke 23b</label>
            <label>31812 Bad Pyrmont</label>
            <div className="mt-2 grid">
              <label>ubrockerhoff@hotmail.de</label>
              <label>+49 (0)5251 123456</label>
            </div>
          </div>
        </CardContent>
      </Card>
      <Tabs defaultValue="membership" className="w-1/3">
        <TabsList className="grid w-full grid-cols-3 bg-slate-50">
          <TabsTrigger
            value="membership"
            className="hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 data-[state=active]:bg-slate-400"
          >
            Mitgliedschaft
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 data-[state=active]:bg-slate-400"
          >
            Bankdetails
          </TabsTrigger>
          <TabsTrigger
            value="bookings"
            className="hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 data-[state=active]:bg-slate-400"
          >
            Beteiligungen
          </TabsTrigger>
        </TabsList>
        <TabsContent value="membership">
          <Card className="m-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Mitgliedschaft</CardTitle>
              <EditMembershipDialog />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-1">
                <div className="flex justify-end">
                  <label>Mitgliedsnr.</label>
                </div>
                <div className="ml-2 flex justify-start">
                  <label>2023000023</label>
                </div>
                <div className="flex justify-end">
                  <label>Typ</label>
                </div>
                <div className="ml-2 flex justify-start">
                  <label>institutionell</label>
                </div>
                <div className="flex justify-end">
                  <label>Mitglied seid</label>
                </div>
                <div className="ml-2 flex justify-start">
                  <label>12.04.2023</label>
                </div>
                <div className="flex justify-end">
                  <label>Anteile</label>
                </div>
                <div className="ml-2 flex justify-start">
                  <label>5</label>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className={cardClassesForOrganisation}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Organisation</CardTitle>
              <EditOrganisationDialog />
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
        </TabsContent>
        <TabsContent value="account">
          <Card className="m-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Konto</CardTitle>
              <EditAccountDialog />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-1">
                <div className="flex justify-end">
                  <label>Inhaber</label>
                </div>
                <div className="justify-left col-span-2 ml-2 flex">
                  <label>Ulrich Brockerhoff</label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="flex justify-end">
                  <label>Institut</label>
                </div>
                <div className="justify-left col-span-2 ml-2 flex">
                  <label>Sparkasse Bad Pyrmont</label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="flex justify-end">
                  <label>IBAN</label>
                </div>
                <div className="justify-left col-span-2 ml-2 flex">
                  <label>DE72 0000 1111 2222 3333 21</label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="flex justify-end">
                  <label>BIC</label>
                </div>
                <div className="justify-left col-span-2 ml-2 flex">
                  <label>SP1234X</label>
                </div>
              </div>
              <div className="mt-2 flex justify-center gap-2">
                <Checkbox id="checkbox" checked={true} className="mt-1" />
                <label htmlFor="checkbox" className="text-gray-600">
                  SEPA Einzug erteilt am 23.06.2023
                </label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bookings">
          <div className="mb-4 mt-2 flex justify-center">
            <Card className="m-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Beteiligung</CardTitle>
              </CardHeader>
              <CardContent>2500 €</CardContent>
            </Card>
            <Card className="m-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Offene Zeichnungen</CardTitle>
              </CardHeader>
              <CardContent>keine</CardContent>
            </Card>
            <Card className="m-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Offene Kündigungen</CardTitle>
              </CardHeader>
              <CardContent>keine</CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" className="m-1">
              Zeichnen
            </Button>
            <Button variant="outline" className="m-1">
              Einbuchen
            </Button>
            <Button variant="outline" className="m-1">
              Kündigen
            </Button>
            <Button variant="outline" className="m-1">
              Ausbuchen
            </Button>
          </div>
          <ShareTransactionsTable transactions={TRANSACTIONS} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MemberDetailsPage;
