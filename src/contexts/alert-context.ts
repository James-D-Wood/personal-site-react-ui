import React from 'react';

export enum AlertLevel {
  SUCCESS = '#05872A',
  INFO = '#1E8DD4',
  WARN = '#D4D248',
  ERROR = '#D43333',
}

export interface Alert {
  message: string;
  level: AlertLevel;
}

export interface AlertContextInterface {
    alert: Alert | null,
    setAlert: (a: Alert | null) => void,
}

const AlertContext = React.createContext<AlertContextInterface>({
  alert: {
    message: '',
    level: AlertLevel.INFO,
  },
  setAlert: (a: Alert | null) => { console.log(a); },
});

export default AlertContext;
