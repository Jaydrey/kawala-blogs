import NotificationMessage from "@/components/NotificationMessage";
import UserNotificationCard from "@/components/UserNotificationCard";
import notifications from "@/data/notification_data";

const NotificationPage = () => {
  const allNotifications = notifications;
  return (
    <main className="w-full md:w-[80%] md:mx-auto flex flex-col gap-2">
      {allNotifications &&
        allNotifications.map((notification, notificationIndex) => {
          return notification.userMessage ? (
            <UserNotificationCard
              key={notificationIndex}
              notification={notification}
            />
          ) : notification.message ? (
            <NotificationMessage notification={notification} />
          ) : (
            <></>
          );
        })}
    </main>
  );
};

export default NotificationPage;
