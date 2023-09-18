export const Notification = ({ toastMessage }) => {
  if (toastMessage === null) {
    return null;
  }
  const style = toastMessage.split("")[0] === "A" ? "success" : "error";
  return <div className={style}>{toastMessage}</div>;
};
