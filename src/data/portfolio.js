import todosImage from '../assets/awesometodos_v3.png'
import teechImage from '../assets/teech.png'
import smartwasteImage from '../assets/smartwaste.png'
import suepImage from '../assets/suep.png'

export const navigation = [
  {
    id: 'projects',
    label: 'Projects',
    icon: 'projects',
  },
  {
    id: 'services',
    label: 'Services',
    icon: 'services',
  },
  {
    id: 'journal',
    label: 'Journal',
    icon: 'journal',
  },
  {
    id: 'tech-stack',
    label: 'Tech Stack',
    icon: 'tech',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'contact',
  },
]

export const projects = [
  {
    id: 1,
    slug: 'teech',
    title: 'Teech',
    tagline: 'A clearer way for students and faculty to connect for consultations.',
    description:
      'A consultation platform that gives students and faculty a clearer way to connect, from finding available instructors to booking consultations.',
    overview: [
      'Teech is a consultation platform that makes it easier for students and faculty to connect. Instead of chasing teachers between classes or waiting on replies, students can find available instructors and book a consultation in a few steps.',
      'It is built with Next.js and React, styled with CSS Modules, and designed to feel simple and clear for both students and faculty.',
    ],
    motivation: [
      'As a student, I have seen how hard it can be to get time with faculty: consultation hours clash with classes, and it is rarely clear who is available and when.',
      'I wanted a clearer, more respectful way for both sides to set up consultations. Teech is my take on that, putting teachers within reach.',
    ],
    technologies: [
      'Next.js',
      'React',
      'CSS Modules',
      'UI/UX',
    ],
    link: 'https://teech-app.vercel.app/',
    source: 'https://github.com/Aelowww/Teech',
    image: teechImage,
  },
  {
    id: 2,
    slug: 'smart-waste-classifier',
    title: 'Smart Waste Management Classifier',
    tagline: 'My machine learning course project: sorting waste from a single photo.',
    description:
      'A computer vision project for my machine learning course that classifies waste from a photo into six categories and gives disposal guidance, running entirely in the browser.',
    overview: [
      'SmartWaste is a web app that identifies common waste materials from a single photo and explains how to handle them. Upload an image and it predicts one of six categories (cardboard, glass, metal, paper, plastic or trash), shows a confidence score for each, and gives disposal guidance.',
      'Under the hood it uses transfer learning: a MobileNetV2 network pretrained on ImageNet, topped with a new classification head (global average pooling, a 256-unit dense layer, dropout and a six-way softmax). The deepest blocks were then fine-tuned on waste photos with a small learning rate.',
      'The trained model runs entirely in the browser with ONNX Runtime Web. There is no account and no waiting, and photos never leave the device.',
    ],
    motivation: [
      'I built SmartWaste for my machine learning course. Sorting waste properly is something most people want to do but often get wrong, because it is hard to tell at a glance which materials can be recycled.',
      'It was also a chance to take a model beyond the notebook: train it with transfer learning, then ship it as a real tool anyone can use from their browser, with privacy built in.',
    ],
    technologies: [
      'Computer Vision',
      'MobileNetV2',
      'Transfer Learning',
      'ONNX Runtime Web',
    ],
    link: 'https://smartwaste-cv.vercel.app/#classifier',
    source: 'https://github.com/anniesrdnl/Smart-Waste-Management-Classifier',
    image: smartwasteImage,
  },
  {
    id: 3,
    slug: 'school-uniform-exchange-platform',
    title: 'School Uniform Exchange Platform',
    tagline: 'Buy, sell and swap pre-loved school uniforms with students on your campus.',
    description:
      'A simple platform where students can buy, sell, and exchange second-hand school uniforms, making uniforms more affordable, accessible, and sustainable.',
    overview: [
      'School Uniform Exchange Platform is a web app where students can buy, sell and swap second-hand school uniforms. Students outgrow uniforms long before the uniforms wear out, so it gives them a simple way to pass them on, making uniforms more affordable, accessible and sustainable.',
      'Students can list a uniform with up to five photos and choose to sell it, swap it or both. Others can search by keyword, category, size, condition and price, send a request to buy or swap, and message the seller to arrange a hand-over on campus. An admin dashboard handles user verification, reports and listing moderation.',
      'The frontend is built with React, Vite and Tailwind CSS. The API runs on Node.js and Express, with Supabase for the PostgreSQL database and authentication, Cloudinary for photo storage and Vercel for hosting.',
    ],
    motivation: [
      'Students outgrow their uniforms long before the uniforms wear out, and buying new ones every school year adds up. Meanwhile, uniforms that are still in good condition end up sitting in closets or thrown away.',
      'I wanted to give students a simple way to pass them on: a place to find the right size for less, swap what no longer fits and keep usable uniforms in circulation. It was also my chance to build a complete full-stack product, from the database and API to messaging and an admin dashboard.',
    ],
    technologies: [
      'React',
      'Express',
      'Supabase',
      'Tailwind CSS',
    ],
    link: 'https://school-uniform-exchange-platform.vercel.app/',
    source: 'https://github.com/anniesrdnl/School-Uniform-Exchange-Platform',
    image: suepImage,
  },
  {
    id: 4,
    slug: 'awesome-todos',
    title: 'Awesome Todos',
    tagline: 'A simple, clean way to keep track of everyday tasks.',
    description:
      'A simple task management web app for creating, organizing, and tracking todos through a clean and straightforward interface.',
    overview: [
      'Awesome Todos is a simple task management app for creating, organizing and tracking todos. It sticks to the essentials and keeps the interface clean, so adding a task or checking one off takes a second.',
      'It is built with React and plain CSS, which made it a good way to practice components, state and handling user input.',
    ],
    motivation: [
      'Awesome Todos was one of my early React projects. I wanted to understand how components and state fit together by building something small that I would actually use day to day.',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'CSS',
    ],
    link: 'https://awesometodos-app-1.onrender.com',
    source: 'https://github.com/anniesrdnl/Awesometodos_app',
    image: todosImage,
  },
]

export const services = [
  {
    slug: 'product-design',
    title: 'Product Design',
    description:
      'Designing clear, intuitive, and responsive digital experiences from early concepts to polished interfaces.',
    overview: [
      'I design digital products that are clear, intuitive and easy to use, from rough early ideas to polished, responsive interfaces that are ready to build.',
      'Good design starts with understanding who will use the product and what they need to get done, so every screen has a clear purpose and nothing gets in the way.',
    ],
    offerings: [
      'User flows and wireframes',
      'High-fidelity UI design in Figma',
      'Responsive layouts for desktop and mobile',
      'Interactive prototypes for testing ideas',
      'Reusable components and simple design systems',
    ],
    process: [
      {
        title: 'Understand',
        text: 'Learn the goals, the users and the problem the product needs to solve.',
      },
      {
        title: 'Explore',
        text: 'Sketch flows and wireframes to try ideas quickly before committing.',
      },
      {
        title: 'Design',
        text: 'Turn the strongest direction into polished, responsive screens.',
      },
      {
        title: 'Refine',
        text: 'Gather feedback and iterate until it feels effortless to use.',
      },
    ],
    tools: [
      'Figma',
      'UI/UX',
      'Responsive Design',
      'Prototyping',
    ],
    projects: [
      'teech',
      'smart-waste-classifier',
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Product Development',
    description:
      'Turning product ideas into responsive, interactive, and production-ready web applications.',
    overview: [
      'I turn product ideas and designs into fast, responsive and interactive web applications that work well on any screen.',
      'I care about clean, maintainable code and the small details, like loading states, accessibility and smooth interactions, that make a product feel finished.',
    ],
    offerings: [
      'Responsive websites and web apps',
      'Turning Figma designs into accurate, working code',
      'Interactive interfaces with React and Next.js',
      'Performance and accessibility improvements',
      'Deployment and hosting on Vercel',
    ],
    process: [
      {
        title: 'Plan',
        text: 'Break the product into pages, components and the data each one needs.',
      },
      {
        title: 'Build',
        text: 'Develop the interface in small, working pieces that can be reviewed early.',
      },
      {
        title: 'Test',
        text: 'Check it across screen sizes and browsers, and polish the details.',
      },
      {
        title: 'Launch',
        text: 'Deploy it live and keep improving it based on real use.',
      },
    ],
    tools: [
      'React.js',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'Vite',
      'Vercel',
    ],
    projects: [
      'smart-waste-classifier',
      'school-uniform-exchange-platform',
      'teech',
      'awesome-todos',
    ],
  },
  {
    slug: 'ui-ux-delivery',
    title: 'UI/UX Delivery',
    description:
      'Taking interfaces from design to a polished, accessible product, and refining the experience based on how people actually use it.',
    overview: [
      'I close the gap between a design file and a finished product: every screen built accurately, every state accounted for and every interaction tuned so it feels effortless.',
      'Because I both design and develop, I can review an interface, find where people get stuck and ship the fixes myself, from the component library down to the final details.',
    ],
    offerings: [
      'UX reviews and usability improvements',
      'Accurate design-to-code implementation',
      'Accessible interfaces with clear focus states and contrast',
      'Reusable UI components and design systems',
      'Interaction details: loading, empty and error states',
    ],
    process: [
      {
        title: 'Review',
        text: 'Walk through the interface to find friction, inconsistencies and accessibility gaps.',
      },
      {
        title: 'Prioritize',
        text: 'Decide which improvements matter most to users and tackle those first.',
      },
      {
        title: 'Build',
        text: 'Implement the UI as reusable, accessible components that match the design.',
      },
      {
        title: 'Refine',
        text: 'Polish the details, test with real use and keep the experience consistent.',
      },
    ],
    tools: [
      'Figma',
      'UI/UX',
      'Accessibility',
      'Design Systems',
      'React.js',
      'Tailwind CSS',
    ],
    projects: [
      'teech',
      'smart-waste-classifier',
    ],
  },
]

export const journals = [
  {
    id: 5,
    title: 'Still Figuring Things Out',
    excerpt:
      'College made me realize that I do not need to have everything figured out yet. Sometimes learning means trying something, getting it wrong, and trying again.',
    date: 'JULY 2026',
    content: [
      {
        type: 'paragraph',
        text: 'I used to think that by the time I reached college, I would already know exactly what I wanted to do and where I wanted to go.',
      },
      {
        type: 'paragraph',
        text: 'That turned out to be far from reality. The more things I learn, the more I realize how much I still do not know.',
      },
      {
        type: 'paragraph',
        text: 'At first, that bothered me. I would look at other students who seemed confident about their plans and wonder why I was still trying to figure mine out.',
      },
      {
        type: 'paragraph',
        text: 'Eventually, I started seeing things differently. Maybe college is not about having everything figured out. Maybe this is exactly the time when I am supposed to explore, make mistakes, change my mind, and learn what actually works for me.',
      },
      {
        type: 'heading',
        text: 'Learning by Doing',
      },
      {
        type: 'paragraph',
        text: 'Some of the things I understand best now are things I struggled with at first. There were projects I did not know how to start, lessons I had to read more than once, and problems that took hours before they finally made sense.',
      },
      {
        type: 'paragraph',
        text: 'I learned that being confused at the beginning does not mean I cannot do something. Sometimes I just need more time to understand it.',
      },
      {
        type: 'paragraph',
        text: 'I am still figuring things out, and I think I am becoming more comfortable with that.',
      },
    ],
  },
  {
    id: 6,
    title: 'One Deadline at a Time',
    excerpt:
      'Some weeks feel like everything is due at once. I am learning to focus on what I can finish today instead of worrying about everything at the same time.',
    date: 'MAY 2026',
    content: [
      {
        type: 'paragraph',
        text: 'There are weeks in college when every subject somehow decides to have a deadline at the same time.',
      },
      {
        type: 'paragraph',
        text: 'A presentation is coming up, another project needs revisions, there is something to study for, and suddenly my to-do list feels much longer than the number of hours I have.',
      },
      {
        type: 'paragraph',
        text: 'My first reaction used to be trying to think about everything at once. Instead of helping, it usually made me feel like I was already behind before I even started.',
      },
      {
        type: 'heading',
        text: 'Doing What I Can Today',
      },
      {
        type: 'paragraph',
        text: 'I am slowly learning that I work better when I stop looking at the entire pile and focus on one thing at a time.',
      },
      {
        type: 'paragraph',
        text: 'Sometimes that means finishing one small task before moving to the next. Other times it means accepting that something does not need to be perfect before I can call it finished.',
      },
      {
        type: 'paragraph',
        text: 'The deadlines have not disappeared, but I am getting better at not letting all of them occupy my mind at the same time.',
      },
      {
        type: 'paragraph',
        text: 'For now, one deadline at a time is enough.',
      },
    ],
  },
  {
    id: 7,
    title: 'More Than Just Grades',
    excerpt:
      'I used to think doing well in college was mostly about getting good grades. Over time, I learned that growth also comes from the people I meet, the mistakes I make, and the things I try outside the classroom.',
    date: 'FEBRUARY 2026',
    content: [
      {
        type: 'paragraph',
        text: 'For a long time, grades were one of the easiest ways for me to measure whether I was doing well.',
      },
      {
        type: 'paragraph',
        text: 'A high score felt like proof that I understood something. A low one could make me question whether I had worked hard enough.',
      },
      {
        type: 'paragraph',
        text: 'But college has given me experiences that cannot really be measured by a number on a screen.',
      },
      {
        type: 'heading',
        text: 'The Things a Grade Cannot Measure',
      },
      {
        type: 'paragraph',
        text: 'I have learned from working with people who approach problems differently from me. I have learned from presentations that did not go exactly as planned and projects that required more revisions than expected.',
      },
      {
        type: 'paragraph',
        text: 'I have also learned that some of the most useful skills come from simply trying things outside the classroom.',
      },
      {
        type: 'paragraph',
        text: 'Grades still matter to me, but I no longer want them to be the only way I decide whether I am growing.',
      },
      {
        type: 'paragraph',
        text: 'Sometimes progress looks like a good grade. Sometimes it is simply being able to do something today that I could not do before.',
      },
    ],
  },
]

export const stack = {
  FRONTEND: [
    'Figma',
    'React.js',
    'JavaScript',
    'Tailwind CSS',
  ],
  BACKEND: [
    'Node.js',
    'Express',
    'Supabase',
    'PostgreSQL',
    'REST APIs',
  ],
  'MACHINE LEARNING': [
    'Claude',
    'Google Colab',
  ],
  'NO-CODE': [
    'WordPress',
  ],
  'DEVELOPER TOOLS': [
    'Git',
    'GitHub',
    'Vite',
    'Vercel',
    'npm',
  ],
}
