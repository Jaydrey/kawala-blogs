import Notifications from "@/types/notification";
import User, { createFullName } from "@/types/user";

const userFollowing: User = {
  firstName: "Jarib",
  lastName: "Lad-Wetshi",
  fullName: createFullName("Jarib", null, "Lad-Wetshi"),
};

const notifications: Notifications[] = [
  {
    userMessage: "started following you",
    user: userFollowing,
    actionDate: "Mar 3, 2022",
  },
  {
    message: "Your blog was published",
    actionDate: "8 minutes ago",
  },
];

export default notifications;
