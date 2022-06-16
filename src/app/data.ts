import {Data, ResumeEdu, ResumeWork} from "./types";

export const myData: Data[] = [{
  name: "Noah Furniss",
  cellNumber:"765-730-1329",
  email:"noahfurniss@gmail.com"
}]

export const myResumeEdu: ResumeEdu[] = [
  {
    id: "1",
    campus: "Indiana University Purdue University Indianapolis: IUPUI",
    school: "Purdue School of Engineering and Technology",
    concentration: "Bachelor of Science - Computer and Information Technology: Web / Software Development",
    startYear: "2018",
    endYear:"2022"
  },{
    id: "2",
    campus: "IU Kokomo",
    school: "School of Science",
    concentration: "New Media",
    startYear: "2017",
    endYear:"2018"
  },{
    id: "3",
    campus: "Fishers High School",
    school: "",
    concentration: "Core 40",
    startYear: "2013",
    endYear:"2017"
  },
]

export const myResumeWork: ResumeWork[] = [
  {
    id: "1",
    company: "Best Buy",
    position:"Consulting Agent & Advance Repair Agent",
    start: "October 2020",
    end:" April 2022",
    role1:"Consult clients on various computer, phone, and miscellaneous technology issues. Then troubleshoot multiple solutions for the given technical issue.",
    role2:"Perform repairs on Apple products and complete tickets using GSX/AST.",
    role3:"Repair clients devices. This could range anywhere from installing updates, to correcting firmware issues.",
    role4:""
  },{
    id: "2",
    company: "IUPUI: University Information Technology Service - TCC",
    position: "Consultant & Consultant Supervisor",
    start: "August 2018",
    end: "October 2020",
    role1: "Trained and oversaw consultants.",
    role2: "Assisted with both First and Second Tier IT Support for IUPUI Students.",
    role3: "",
    role4: ""
  },{
    id: "3",
    company: "IUPUI: School of Engineering and Technology\n",
    position: "Assistant to the Webmaster",
    start: "January 2020",
    end: "December 2020",
    role1: "Developed Engineering and Technology Website using Trello (Kanban).",
    role2: "Built and maintained Engineering and Technology school website using Cascade CMS.",
    role3: "",
    role4: ""
  },{
    id: "4",
    company: "IUPUI: Multidisciplinary Undergraduate Research Institute",
    position: "Researcher / Developer",
    start: "May 2019",
    end: "August 2019",
    role1: "Researched and Developed a mobile application with React Native.",
    role2: "Presented total research findings at CRL Summer Symposium at IUPUI.",
    role3: "Developed application using a broken version of Agile in a small group setting.",
    role4: ""
  },{
    id: "5",
    company: "Cambria Suites",
    position: "Front Desk Attendant",
    start: "July 2017",
    end: "August 2018",
    role1: "Check in and check out guests, assist with administrative tasks.",
    role2: "Assist guest with any presented issues.",
    role3: "",
    role4: ""
  }
]
