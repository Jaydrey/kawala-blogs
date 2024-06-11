import Notifications from "@/types/notification";

const NotificationMessage = ({
  notification,
}: {
  notification: Notifications;
}) => {
  return (
    <div className="py-3 w-full flex flex-col">
      {/* notification message */}
      <p>{notification.message}</p>
      {/* notification date */}
      <time
        className="text-gray-600 text-sm"
        dateTime={notification.actionDate}
        aria-label="notification date"
      >
        {notification.actionDate}
      </time>
    </div>
  );
};

export default NotificationMessage;

