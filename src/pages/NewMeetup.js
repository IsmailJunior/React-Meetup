/** @format */
import { useHistory } from "react-router-dom";
import { NewMeetupForm } from "../index";

export default function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://react-5bcb3-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .then(() => {
        history.replace("/");
      });
  }
  return (
    <section>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
