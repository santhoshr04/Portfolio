import { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const GitHubActivity = () => {
  const [activities, setActivities] = useState([]);
  const username = "santhoshr04"; // Replace with your GitHub username
  const token = "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"; // Replace with your GitHub token

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

        setActivities(filteredEvents.slice(0, 5)); // Show only the latest 5 activities
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
                <div key={index} className="bg-tertiary p-4 rounded-xl shadow-md border border-gray-700">
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
                </div>
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

// import { useState, useEffect } from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const GitHubActivityCard = ({ index, activity }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[200px] flex items-center justify-center">
//           <h3 className="text-white font-bold text-[22px]">
//             {activity.type.replace(/([A-Z])/g, " $1")}
//           </h3>
//         </div>

//         <div className="mt-5">
//           {activity.type === "PushEvent" && activity.payload.commits ? (
//             <p className="text-sm text-secondary">
//               Commit: "{activity.payload.commits[0]?.message}"
//             </p>
//           ) : null}

//           {activity.type === "PullRequestEvent" && (
//             <p className="text-sm text-secondary">Opened a Pull Request</p>
//           )}

//           {activity.type === "PullRequestReviewEvent" && (
//             <p className="text-sm text-secondary">Reviewed a Pull Request</p>
//           )}
//         </div>

//         <p className="mt-4 text-xs text-gray-500">
//           {new Date(activity.created_at).toLocaleString()}
//         </p>
//       </Tilt>
//     </motion.div>
//   );
// };

// const GitHubActivity = () => {
//   const [activities, setActivities] = useState([]);
//   const username = "santhoshr04"; // Replace with your GitHub username

//   useEffect(() => {
//     const fetchGitHubActivity = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/users/${username}/events`);
//         const data = await response.json();

//         // Filter for meaningful events
//         const filteredEvents = data
//           .filter(
//             (event) =>
//               event.type === "PushEvent" ||
//               event.type === "PullRequestEvent" ||
//               event.type === "PullRequestReviewEvent"
//           )
//           .slice(0, 5); // Limit to 5 activities

//         setActivities(filteredEvents);
//       } catch (error) {
//         console.error("Error fetching GitHub activity:", error);
//       }
//     };

//     fetchGitHubActivity();
//   }, []);

//   return (
//     <>
      // <motion.div variants={textVariant()}>
      //   <p className={`${styles.sectionSubText}`}>My GitHub</p>
      //   <h2 className={`${styles.sectionHeadText}`}>Recent Activity.</h2>
      // </motion.div>

      // <div className="w-full flex">
      //   <motion.p
      //     variants={fadeIn("", "", 0.1, 1)}
      //     className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      //   >
      //     Here's a quick look at my recent GitHub activity, including commits, pull requests, and code reviews.
      //   </motion.p>
      // </div>

//       <div className="mt-20 flex flex-wrap gap-7">
//         {activities.length > 0 ? (
//           activities.map((activity, index) => (
//             <GitHubActivityCard key={index} index={index} activity={activity} />
//           ))
//         ) : (
//           <p className="text-center text-gray-400">Loading activity...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(GitHubActivity, "");
