import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      className="btn btn-primary btn-block "
      disabled={isSubmitting}
      type="submit">
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          ...sending
        </>
      ) : (
        text
      )}
    </button>
  );
};
export default SubmitBtn;
