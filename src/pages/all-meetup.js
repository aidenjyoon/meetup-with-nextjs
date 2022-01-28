import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "111",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/The_site_of_Blakeney_Chapel_-_geograph.org.uk_-_980743.jpg",
    title: "11111",
    description: "1111111",
  },
  {
    id: "2222",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/The_site_of_Blakeney_Chapel_-_geograph.org.uk_-_980743.jpg",
    title: "222222",
    description: "2222222222222",
  },
];

const AllMeetupPage = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http request and fetch data
    setLoadedMeetups(DUMMY_DATA);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

const getStaticProps = async () => {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 1,
  };
};

export default AllMeetupPage;
export { getStaticProps };
