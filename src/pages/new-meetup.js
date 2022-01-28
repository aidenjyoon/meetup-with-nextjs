import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHanlder = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      header: {
        "Content-Type": "applications/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHanlder} />;
};

export default NewMeetupPage;
