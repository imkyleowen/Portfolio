const projects = [
  {
    title: "St. Benedict School of Novaliches Website",
    type: "Frontend Developer",
    description: "A responsive school website designed with St. Benedict School branding, clear navigation, homepage sections, news, events, and admissions presentation.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    coverImage: "assets/sbsn-home.png",
    websiteLink: "https://www.sbsn-edu-ph.com/",
    overview: "Designed and developed the front-end interface of the St. Benedict School of Novaliches website. The project focused on creating a responsive, modern, and user-friendly website that showcases the school's identity, news, events, and admissions information.",
    features: [
      "Full-width homepage banner",
      "School-branded maroon and gold layout",
      "Navigation for Home, About, News, and Admissions",
      "News and upcoming events sections",
      "Responsive frontend layout",
      "Footer with school contact information"
    ],
    gallery: [
      { src: "assets/sbsn-home.png", label: "Homepage Banner" },
      { src: "assets/sbsn-about.png", label: "About Section" },
      { src: "assets/sbsn-stats.png", label: "Statistics Section" },
      { src: "assets/sbsn-news.png", label: "News Section" },
      { src: "assets/sbsn-events.png", label: "Upcoming Events" },
      { src: "assets/sbsn-footer.png", label: "Footer Section" }
    ],
    role: "Frontend Developer — designed and developed the website interface using HTML, CSS, JavaScript, PHP, and MySQL, focusing on layout, navigation, branding, and user experience."
  },
  {
    title: "Hospital Patient Management System",
    type: "Desktop Application",
    description: "A Java Swing and MySQL desktop application developed to streamline hospital operations through integrated modules for patient management, appointments, billing, laboratory, pharmacy, and medical records.",
    technologies: ["Java", "Java Swing", "MySQL", "JDBC"],
    coverImage: "assets/hospital-dashboard.png",
    overview: "The Hospital Patient Management System is a desktop-based healthcare management application developed using Java Swing and MySQL. It centralizes hospital operations by integrating patient records, appointments, laboratory requests, pharmacy, billing, admissions, surgeries, and administrative management into one system.",
    features: [
      "Secure login system",
      "Administration dashboard",
      "Patient, doctor, department, room, and bed management",
      "Appointment and billing modules",
      "Prescription and medical record handling",
      "Role-based access for hospital users",
      "Search, refresh, and data management functions",
      "MySQL database integration"
    ],
    gallery: [
      { src: "assets/hospital-login.png", label: "Login Screen" },
      { src: "assets/hospital-dashboard.png", label: "Administration Dashboard" }
    ],
    role: "Worked on system modules, database integration, reusable Java Swing UI components, CRUD functionality, dashboard interfaces, and overall system functionality using Java and MySQL."
  },
  {
    title: "Blood Bank Management System",
    type: "Database Application",
    description: "A Java Swing and MySQL donor and blood inventory management application with search, update, eligibility checking, and database integration.",
    technologies: ["Java", "Java Swing", "MySQL", "JDBC"],
    coverImage: "assets/blood-bank-dashboard.png",
    overview: "The Blood Bank Management System is a Java Swing desktop application built to manage donor information, blood records, donation dates, and eligibility status through a MySQL database. The system supports adding, updating, searching, clearing, and displaying donor records in a table-based interface.",
    features: [
      "Add, update, search, clear, and display donor records",
      "Blood type and donor information management",
      "Automated eligibility/status checking based on donation dates",
      "Real-time table updates",
      "Date selection for birth date, last donation, and registration",
      "MySQL database integration using JDBC",
      "Data validation for form inputs"
    ],
    gallery: [
      { src: "assets/blood-bank-dashboard.png", label: "Blood Bank Management System Interface" }
    ],
    role: "Developed the interface, database connection, CRUD functions, search function, table display, and donor eligibility logic using Java Swing, JDBC, and MySQL."
  },
  {
    title: "Autonomous Line Follower Robot",
    type: "Embedded Systems Project",
    description: "An Arduino-based autonomous robot capable of following a predefined path using infrared sensors, motor control, and real-time decision making.",
    technologies: ["Arduino Uno", "Embedded C++", "L298N", "IR Sensors", "TCS3200"],
    coverImage: "assets/robot-line-follower.png",
    overview: "The Autonomous Line Follower Robot is an embedded systems project developed using Arduino Uno, infrared sensors, and an L298N motor driver. It follows black guide lines while continuously adjusting motor behavior based on sensor readings. A TCS3200 color sensor was also integrated for color-marker detection during navigation testing.",
    features: [
      "Autonomous line-following behavior",
      "Arduino Uno control system",
      "IR sensor-based line detection",
      "L298N motor driver integration",
      "DC motor movement control",
      "TCS3200 color sensor integration",
      "Sensor calibration and testing",
      "Hardware assembly and troubleshooting"
    ],
    gallery: [
      { src: "assets/robot-line-follower.png", label: "Autonomous Line Follower Robot" }
    ],
    role: "Calibrated IR sensor, Color Sensor, Motor Driver."
  },
  {
    title: "Personal Portfolio Website",
    type: "Web Portfolio",
    description: "A responsive personal portfolio website built to showcase projects, skills, CV, experience, and contact information for web developer applications.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    coverImage: "assets/portfolio-website.png",
    overview: "A personal portfolio website designed to present my background, technical skills, academic projects, CV, and contact information in a clean and professional web developer format. The site uses a fixed left dashboard/sidebar, project case-study modals, Bootstrap Icons, and responsive sections for easy navigation.",
    features: [
      "Fixed left dashboard/sidebar navigation",
      "Responsive landing page layout",
      "Bootstrap Icons integration",
      "Curriculum Vitae preview modal",
      "Project case-study view modal",
      "Project screenshot gallery"
    ],
    gallery: [
      { src: "assets/portfolio-website.png", label: "Portfolio Website Homepage" }
    ],
    role: "Creator"
  }
];
