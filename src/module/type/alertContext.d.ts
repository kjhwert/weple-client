interface IAlertContext {
  setAlertVisible?: () => void;
  setConfirmAlertInvisible?: () => void;
  onAlertCancel?: () => void;
  setConfirmAlert?: (data: IAlertConfirm) => void;
  setCheckAlert?: (data: IAlertCheck) => void;
  setWarningAlertVisible: (title: string, description: string) => void;
}

interface IAlertCheck {
  type: 'check' | 'email' | 'warning' | 'delete';
  title: string;
  description: string;
}

interface IAlertConfirm {
  type: 'check' | 'email' | 'warning' | 'delete';
  title: string;
  description: string;
  confirmedText: string;
  canceledText: string;
}
