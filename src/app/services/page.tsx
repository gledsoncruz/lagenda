import { getServiceAll } from "@/actions/service-actions";
import { Container } from "@/components/container";

export default async function ServicesPage() {

  const services = await getServiceAll();

  return (
    <Container>
      <h1>Serviços</h1>
      <ul>
        {services?.map((s) => (
          <li key={s.id}>{s.name} - R$ {s.price.toFixed(2)}</li>
        ))}
      </ul>
    </Container>
  )
}