import React, { useEffect } from 'react';
import { Alert } from '../contexts/alert-context';

interface AlertPropoverProps {
  alert: Alert;
  setAlert: (a: Alert | null) => void;
}

export default function AlertPopover(props: AlertPropoverProps): JSX.Element {
  const { alert, setAlert } = props;

  useEffect(() => {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, []);

  return (
    <>
      {alert && (
        <div className="flex flex-col items-center z-50">
          <div
            className="fixed p-3 my-4 border-slate-50 text-slate-50 rounded-md w-full shadow-md container"
            style={{
              backgroundColor: alert.level,
            }}
          >
            <p className="font-sansBold text-md">{alert.message}</p>
          </div>
        </div>
      )}
    </>
  );
}
