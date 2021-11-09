import { Link } from "react-router-dom";

function Home({ members }) {
  return members.map((member, index) =>
    member.type === "pj" ? (
      <Link key={index} to={`/company/${member.id}`}>
        {member.name}
      </Link>
    ) : (
      <Link key={index} to={`/customer/${member.id}`}>
        {member.name}
      </Link>
    )
  );
}

export default Home;
