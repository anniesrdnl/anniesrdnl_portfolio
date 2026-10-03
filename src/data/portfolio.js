import todosImage from '../assets/awesometodos.png'
import teechImage from '../assets/teech.png'
import smartwasteImage from '../assets/smartwaste.png'

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
    title: 'Smart Waste Management Classifier',
    description:
      'A computer vision project for my machine learning course that classifies waste from a photo into six categories and gives disposal guidance, running entirely in the browser.',
    technologies: [
      'Computer Vision',
      'MobileNetV2',
      'Transfer Learning',
      'ONNX Runtime Web',
    ],
    link: 'https://smartwaste-cv.vercel.app/#classifier',
    image: smartwasteImage,
  },
  {
    id: 2,
    title: 'Awesome Todos',
    description:
      'A simple task management web app for creating, organizing, and tracking todos through a clean and straightforward interface.',
    technologies: [
      'React.js',
      'JavaScript',
      'CSS',
    ],
    link: 'https://awesometodos-app-1.onrender.com',
    image: todosImage,
  },
  {
    id: 3,
    title: 'Teech',
    description:
      'A consultation platform that gives students and faculty a clearer way to connect, from finding available instructors to booking consultations.',
    technologies: [
      'Next.js',
      'React',
      'CSS Modules',
      'UI/UX',
    ],
    link: 'https://teech-app.vercel.app/',
    image: teechImage,
  },
]

export const services = [
  {
    title: 'Product Design',
    description:
      'Designing clear, intuitive, and responsive digital experiences from early concepts to polished interfaces.',
  },
  {
    title: 'Web Product Development',
    description:
      'Turning product ideas into responsive, interactive, and production-ready web applications.',
  },
  {
    title: 'Full-stack Delivery',
    description:
      'Handling the complete development process across frontend, backend, APIs, databases, deployment, and iteration.',
  },
]

export const journals = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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