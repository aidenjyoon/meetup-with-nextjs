import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY = [
  {
    id: "111",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/The_site_of_Blakeney_Chapel_-_geograph.org.uk_-_980743.jpg",
    title: "11111",
    description: "1111111",
  },
];

const AllMeetupPage = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http request and fetch data
    setLoadedMeetups(DUMMY);
  }, []);
  return <MeetupList meetups={props.meetups} />;
};

const getStaticProps = async () => {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY,
    },
  };
};

export default AllMeetupPage;
export { getStaticProps };
