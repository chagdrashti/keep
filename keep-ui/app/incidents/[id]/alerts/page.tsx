import { Card } from "@tremor/react";
import IncidentOverview from "./incident-overview";
import IncidentAlerts from "./incident-alerts";
import { getIncidentWithErrorHandling } from "../getIncidentWithErrorHandling";

type PageProps = {
  params: { id: string };
};

export default async function IncidentAlertsPage({
  params: { id },
}: PageProps) {
  const incident = await getIncidentWithErrorHandling(id);
  return (
    <>
      <Card className="mb-4">
        <IncidentOverview incident={incident} />
      </Card>
      <IncidentAlerts incident={incident} />
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const incident = await getIncidentWithErrorHandling(params.id);
  return {
    title: `${incident.user_generated_name} — Alerts`,
    description: incident.user_summary || incident.generated_summary,
  };
}
