import { useEffect } from "react";
import { toast } from "react-toastify";
import useAlertStore from "../../store/useAlertStore";

const GlobalAlert = () => {
  const alert = useAlertStore((state) => state.alert);
  const setAlert = useAlertStore((state) => state.setAlert);

  useEffect(() => {
    if (alert) {
      toast(alert.message, { type: alert.type });
      setAlert(null);
    }
  }, [alert, setAlert]);

  return null;
};

export default GlobalAlert;
