import UserCard from "./UserCard";
import Notifications from "@/types/notification";

const UserNotificationCard = ({
  notification,
}: {
  notification: Notifications;
}) => {
  return (
    <div role="button">
        <UserCard notification={notification} />
    </div>
  );
};

export default UserNotificationCard;
