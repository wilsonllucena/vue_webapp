export const auth = () => {
    return {
        isAuthenticated: !!localStorage.getItem("@Event:user"),
        user: localStorage.getItem("@Event:user"),
        token: localStorage.getItem("@Event:token"),
    };
};