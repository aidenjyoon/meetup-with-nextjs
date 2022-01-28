import MeetupDetail from "../../components/meetups/MeetupDetails";

const MeetupDetails = () => {
  return <MeetupDetail></MeetupDetail>;
};

const getStaticPaths = async (context) => {
  const metupId = context.params.meetupId;

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: metupId,
        },
      },
    ],
  };
};

const getStaticProps = async (context) => {
  const metupId = context.params.meetupId;

  return {
    props: {
      meeetupData: {
        id: meetupId,
      },
    },
  };
};

export { getStaticPaths, getStaticProps };
export default MeetupDetails;
