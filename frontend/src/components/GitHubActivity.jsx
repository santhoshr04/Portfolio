import { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const GitHubActivity = () => {
  const [activities, setActivities] = useState([]);
  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const token = import.meta.env.VITE_GITHUB_TOKEN;


  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events`, {
          headers: {
            Authorization: `token ${token}`, // Authenticate request
          },
        });

        const data = await response.json();

        // Filter events to include only commits, pushes, and pull requests
        const filteredEvents = data.filter(
          (event) =>
            event.type === "PushEvent" ||
            event.type === "PullRequestEvent" ||
            event.type === "PullRequestReviewEvent"
        );

        setActivities(filteredEvents.slice(0, 6)); // Show only the latest 5 activities
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
      }
    };

    fetchGitHubActivity();
  }, []);

  return (
    <section className="lg:px-20 px-8 text-white">
      <div className="lg:px-5">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>My GitHub</p>
            <h2 className={`${styles.sectionHeadText}`}>Recent Activity.</h2>
          </motion.div>

          <div className="">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 pb-2 text-secondary text-[17px max-w-3xl leading-[30px]"
            >
              Here's a quick look at my recent GitHub activity, including commits, pull requests, and code reviews.
            </motion.p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <Tilt key={index} className="bg-tertiary p-4 rounded-xl shadow-md">
                  <p className="text-lg font-semibold">{activity.type.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Repo:{" "}
                    {/* <a href={`https://github.com/${activity.repo.name}`} className="text-blue-400 hover:underline"> */}
                      {activity.repo.name}
                    {/* </a> */}
                  </p>
                  {activity.payload.commits && (
                    <p className="text-sm mt-2">
                      Latest Commit: "{activity.payload.commits[0]?.message}"
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">{new Date(activity.created_at).toLocaleString()}</p>
                </Tilt>
              ))
            ) : (
              <p className="text-center text-gray-400">Loading activity...</p>
            )}
          </div>
      </div>
    </section>
  );
};

export default GitHubActivity;