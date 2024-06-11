import Notifications from "@/types/notification";
import User from "@/types/user";

const UserCard = ({
  user,
  notification,
}: {
  user?: User;
  notification?: Notifications;
}) => {
  return (
    <div className="py-6 w-full flex">
      {/* image of user */}
      <div className="py-2 flex flex-col justify-center">
        <div className="text-slate-100 bg-purple-700 w-10 h-10 rounded-full flex justify-center items-center">
          {user ? (
            <p className="text-xl">{user.fullName[0]}</p>
          ) : notification ? (
            <p className="text-lg">{notification.user?.fullName[0]}</p>
          ) : (
            <></>
          )}
          <p></p>
        </div>
      </div>
      {/* detail of user */}
      <div className="px-3 py-2 flex flex-col justify-center gap-1">
        <div>
          {user ? (
            <p>
              <span>{user.fullName}</span>
            </p>
          ) : notification ? (
            <p className="flex flex-wrap">
              <span> {notification.user?.fullName} </span>
              <span className="text-gray-600">{notification.userMessage}</span>
            </p>
          ) : (
            <></>
          )}
        </div>
        {notification && (
          <div>
            <time
              className="text-gray-600 text-sm"
              dateTime={notification.actionDate}
              aria-label="notification date"
            >
              {notification.actionDate}
            </time>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
