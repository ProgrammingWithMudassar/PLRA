import avatar from '../../Assets/png/avatar.jpg'
import Logo from '../../Assets/png/Logo.png'
import {
  faHome, faUser, faClipboard, faCog,
  faBriefcase, faCalendar, faFileAlt, faClock,
  faBook, faCheckSquare, faSortDown
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope
} from '@fortawesome/free-regular-svg-icons'



export const TabBarData = [
  {
    key: 1,
    route: '',
    text: 'Dashboard',
    icon: faHome,
  },
  {
    key: 2,
    text: "Employee",
    icon: faUser,
    dropdownItems: [
      { key: 1, route: "employee/basic_information", text: "Basic Information " },
      { key: 2, route: "employee/personal_information", text: "Personal Information" },
      { key: 3, route: "employee/employment_history", text: "Employment History" },
      { key: 4, route: "employee/contact_information", text: "Contact Information" },
      { key: 5, route: "employee/personal_document", text: "Personal Document" },
      { key: 6, route: "employee/family_information", text: "Family Information" },
      { key: 7, route: "employee/references", text: "References" },
      { key: 8, route: "employee/education", text: "Education" },
      { key: 9, route: "employee/address", text: "Address" },
      { key: 10, route: "employee/training", text: "Training" },
      { key: 11, route: "employee/skills", text: "Skills" },
    ],
  },
  {
    key: 3,
    text: 'Leaves',
    icon: faClipboard,
  },
  {
    key: 4,
    text: 'LeavePlanner',
    icon: faClock,
    dropdownItems: [
      { key: 1, route: 'LeavePlanner', text: 'Option1' },
      { key: 2, route: 'LeavePlanner/Option2', text: 'Option2' },
      { key: 3, route: 'LeavePlanner/Option3', text: 'Option3' },
    ],
  },
  {
    key: 5,
    text: 'Attendance',
    icon: faFileAlt,
    dropdownItems: [
      { key: 1, route: 'Payroll', text: 'Option1' },
      { key: 2, route: 'Payroll/Option2', text: 'Option2' },
      { key: 3, route: 'Payroll/Option3', text: 'Option3' },
    ],
  },
  {
    key: 6,
    text: 'Branches',
    icon: faUser,
    dropdownItems: [
      { key: 1, route: 'branches', text: 'Option1' },
      { key: 2, route: 'branches/Option2', text: 'Option2' },
      { key: 3, route: 'branches/Option3', text: 'Option3' },
    ],
  },
  {
    key: 7,
    text: 'Tasks',
    icon: faCalendar,
    dropdownItems: [
      { key: 1, route: 'Tasks', text: 'Option1' },
      { key: 2, route: 'Tasks/Option2', text: 'Option2' },
      { key: 3, route: 'Tasks/Option3', text: 'Option3' },
    ],
  },
  {
    key: 8,
    route: 'notices',
    text: 'Notices',
    icon: faBriefcase,
  },
  {
    key: 9,
    route: '',
    text: 'Notes Pool',
    icon: faBook,
  },
  {
    key: 10,
    route: '',
    text: 'Performance',
    icon: faCheckSquare,
  },
  {
    key: 11,
    route: '',
    text: 'Setting',
    icon: faCog,
  },
];

export const Employee_DropDown= [
  { key: 1, route: "employee/basic_information", text: "Basic Information " },
  { key: 2, route: "employee/personal_information", text: "Personal Information" },
  { key: 3, route: "employee/employment_history", text: "Employment History" },
  { key: 4, route: "employee/contact_information", text: "Contact Information" },
  { key: 5, route: "employee/personal_document", text: "Personal Document" },
  { key: 6, route: "employee/family_information", text: "Family Information" },
  { key: 7, route: "employee/references", text: "References" },
  { key: 8, route: "employee/education", text: "Education" },
  { key: 9, route: "employee/address", text: "Address" },
  { key: 10, route: "employee/training", text: "Training" },
  { key: 11, route: "employee/skills", text: "Skills" },
]

export const SlideBarData = [
  {
    key: 1,
    route: '',
    text: 'Dashboard',
    icon: faHome,
  },
  {
    key: 2,
    text: "Employee",
    icon: faUser,
    route: "employee/basic_information",
  },
  {
    key: 3,
    text: 'Leaves',
    icon: faClipboard,
  },
  {
    key: 4,
    text: 'LeavePlanner',
    icon: faClock,
    route: 'LeavePlanner',
  },
  {
    key: 5,
    text: 'Attendance',
    icon: faFileAlt,
  },
  {
    key: 6,
    text: 'Branches',
    icon: faUser,
  },
  {
    key: 7,
    text: 'Tasks',
    icon: faCalendar,
  },
  {
    key: 8,
    route: 'notices',
    text: 'Notices',
    icon: faBriefcase,
  },
  {
    key: 9,
    route: '',
    text: 'Notes Pool',
    icon: faBook,
  },
  {
    key: 10,
    route: '',
    text: 'Performance',
    icon: faCheckSquare,
  },
  {
    key: 11,
    route: '',
    text: 'Setting',
    icon: faCog,
  },
];

export const Sidebar_header = {
  title: "PLRA LOGO",
  avatar: avatar,
  Logo_Image: Logo,
  avatarDown: faSortDown,
  settingIcon: faCog,
  messageIcon: faEnvelope
};