import { useParams, Link } from "react-router-dom";

function Customer({ members }) {
  const params = useParams();

  const membere = members.filter((item) => item.id === params.id);

  const member = membere[0];

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Customer;
