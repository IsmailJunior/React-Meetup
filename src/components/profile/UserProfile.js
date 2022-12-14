/** @format */

import { ProfileForm } from "../../index";
import classes from "./UserProfile.module.css";

export default function UserProfile() {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}
