// gitprofile.config.js

const config = {
  github: {
    username: 'Yanxiang-Zhou', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zhouyanxiang',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://yanxiang-zhou.github.io',
    phone: '',
    email: 'yzhou791@gatech.edu',
  },
  resume: {
    fileUrl: 'resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'c/c++',
    'JavaScript',
    'React.js',
    'Node.js',
    'd3.js',
    'GraphQL',
    'MySQL',
    'Git',
    'Docker',
    'HTML',
    'CSS',
    'Pytorch',
    'Tensorflow',
    'Flask',
    'NLP',
    'AWS',
  ],
  experiences: [
    {
      company: 'Huaxia Bank',
      position: 'Software Engineer Intern',
      from: 'January 2020',
      to: 'June 2020',
    },
    {
      company: 'Peakview Capital',
      position: 'Data Scientist Intern',
      from: 'October 2020',
      to: 'January 2021',
    },
    {
      company: 'Mentra',
      position: 'Data Scientist',
      from: 'October 2021',
      to: 'March 2022',
    },
  ],
  education: [
    {
      institution: 'Georgia Institute of Technology',
      degree: 'Master of Computer Science',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Central University of Finance and Economics',
      degree: 'Bachelor of Economics',
      from: '2017',
      to: '2021',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
