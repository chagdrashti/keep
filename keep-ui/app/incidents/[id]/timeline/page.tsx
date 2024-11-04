import { getIncidentWithErrorHandling } from "../getIncidentWithErrorHandling";
import IncidentTimeline from "./incident-timeline";

type PageProps = {
  params: { id: string };
};

export default async function IncidentTimelinePage({
  params: { id },
}: PageProps) {
  const incident = await getIncidentWithErrorHandling(id);
  return <IncidentTimeline incident={incident} />;
}

export async function generateMetadata({ params }: PageProps) {
  const incident = await getIncidentWithErrorHandling(params.id);
  const incidentName =
    incident.user_generated_name || incident.ai_generated_name;
  const incidentDescription =
    incident.user_summary || incident.generated_summary;
  return {
    title: `${incidentName} — Timeline`,
    description: incidentDescription,
  };
}
