import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import cartoons from "../../assets/cartoons.png";
import styles from "../../styles/MyProfile.module.css";
import NotAuthenticated from "../../components/NotAuthenticated";
import Asset from "../../components/Asset";

/*
 * My Profile (Component):
 * This component manages and displays the current user's profile information.
 *
 * Responsibilities:
 * - Fetches the current users profile data using the custom useCurrentUser hook.
 * - Displays user details, such as username and account creation date.
 */

const MyProfile = () => {
  const [profile, setProfile] = useState(null); //profile data intially set to null
  const currentUser = useCurrentUser(); //get the currently logged in user
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      // Fetch the users profile data when the component mounts or when the currentuser changes
      axiosReq
        .get(`/profiles/${currentUser.profile_id}/`)
        .then((response) => {
          setProfile(response.data); // Update the profile state with the fetched data
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [currentUser]); // Trigger this effect when currentUser changes

  return (
    <>
      {currentUser ? (
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Card className={styles.Card}>
            <div>
              <Card.Header className={`${styles.Header} py-5`}>
                Welcome to your profile, {currentUser.username}!
              </Card.Header>
              {isLoading ? ( // Display spinner when loading
                <Asset spinner message="Loading your profile..." />
              ) : profile ? (
                <>
                  <Card.Text className="py-3">
                    <strong>
                      You have been staying organized since {profile.created_at}
                    </strong>
                  </Card.Text>
                </>
              ) : null}
              <Card.Footer className="d-flex flex-column align-items-center">
                <img src={cartoons} alt="cartoons doing tasks" height="150" />
                <Card.Subtitle className="mb-2 mt-4 text-muted">
                  Exciting new features are on the way! while you wait, we are
                  here to help you stay organized and wish you the best of luck
                  with your tasks. You are doing well!
                </Card.Subtitle>
              </Card.Footer>
            </div>
          </Card>
        </Container>
      ) : (
        <NotAuthenticated />
      )}
    </>
  );
};
export default MyProfile;
