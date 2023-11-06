export interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  isClearable?: boolean;
  customInput?: any;
  minYear?: number;
  maxYear?: number;
  inline?: boolean;
  dateFormat?: string;
  placeholderText?: string;
  shouldCloseOnSelect?: boolean;
  highlightDates?: object | any;
  customRef?: any;
  customInputsComponent?: React.ReactElement;
  customHeader?: boolean;
}