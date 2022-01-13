import { useRouter } from "next/router";
import AllMeetupPage from "./all-meetup";

import Layout from "../components/layout/Layout";

function HomePage() {
  const router = useRouter();
  return <AllMeetupPage />;
}

export default HomePage;
