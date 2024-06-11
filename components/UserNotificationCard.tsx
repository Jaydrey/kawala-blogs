import UserCard from "./UserCard";
import Notifications from "@/types/notification";

const UserNotificationCard = ({
  notification,
}: {
  notification: Notifications;
}) => {
  return (
    <div>
        <UserCard notification={notification} />
    </div>
  );
};

export default UserNotificationCard;
