import User from "./user";

type Notifications = {
    message?:  string | null;
    userMessage?: string | null;
    user?: User,
    actionDate: string,
}

export default Notifications;

