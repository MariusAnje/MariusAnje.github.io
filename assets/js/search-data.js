// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Please check for  Google Scholar .",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "The pdf version is to the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-repositories",
              title: "Repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-people",
              title: "People",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-fit-workshop-26",
      
        title: "FIT Workshop 26",
      
      description: "FIT workshop",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/FIT-26-post/";
        
      },
    },{id: "news-the-transistor-is-invented",
          title: 'The transistor is invented',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-zheyu-yan-won-the-best-paper-award-in-iccad-2023",
          title: 'Zheyu Yan won the Best Paper Award in ICCAD 2023.',
          description: "",
          section: "News",},{id: "news-zheyu-yan-nominated-for-best-paper-award-in-iccad-2024",
          title: 'Zheyu Yan Nominated for Best Paper Award in ICCAD 2024.',
          description: "",
          section: "News",},{id: "projects-hardware-fairness",
          title: 'Hardware Fairness',
          description: "Hardware design and the fairness of a neural network",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CIM_Fair/";
            },},{id: "projects-realistic-worst-case-performances",
          title: 'Realistic Worst-Case Performances',
          description: "Improving realistic worst-case performance of NVCiM DNN accelerators through training with right-censored gaussian noise",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RCG/";
            },},{id: "projects-swim",
          title: 'SWIM',
          description: "SWIM - Selective Write-Verify for Computing-in-Memory Neural Accelerators",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SWIM/";
            },},{id: "projects-worst-case-performances",
          title: 'Worst-Case Performances',
          description: "Compute-in-Memory Based Neural Network Accelerators for Safety-Critical Systems - Worst-Case Scenarios and Protections",
          section: "Projects",handler: () => {
              window.location.href = "/projects/worst/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%79%61%6E%32_%41%54_%7A%6A%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zyyan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Wd8mEEAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
