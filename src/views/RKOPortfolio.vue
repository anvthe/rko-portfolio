<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

// Navigation items
const navItems = [
  {id: 'about', text: 'About'},
  {id: 'experience', text: 'Experience'},
  {id: 'skills', text: 'Skills'},
  {id: 'portfolio', text: 'Portfolio'},
  {id: 'education', text: 'Education'},
  {id: 'contact', text: 'Contact'}
];

// Social links
const socialLinks = [
  { icon: 'fab fa-github', url: 'https://www.github.com/AnVThe', color: '#181717'}, // GitHub black
  { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/AnVThe', color: '#1877F2' }, // Facebook blue
  { icon: 'fab fa-twitter', url: 'https://www.twitter.com/AnVThe', color: '#1DA1F2' }, // Twitter blue
  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/anvthe/', color: '#0A66C2' }, // LinkedIn blue
  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/anvthe/', color: '#E1306C' } // Instagram pink
]

const socialPlatforms = [
  { icon: 'fab fa-github', url: 'https://www.github.com/AnVThe', color: '#181717'}, // GitHub black
  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/anvthe/', color: '#0A66C2' }, // LinkedIn blue

]



// Skills data
const skills = [
  {name: 'Java', percentage: 80, icon: 'fab fa-java'},
  {name: 'Spring Boot', percentage: 75, icon: 'fas fa-leaf'},
  {name: 'JavaScript', percentage: 60, icon: 'fab fa-js-square'},
  {name: 'Vue.js', percentage: 70, icon: 'fab fa-vuejs'},
  {name: 'CSS/Tailwind', percentage: 75, icon: 'fab fa-css3-alt'},
  {name: 'MySQL', percentage: 70, icon: 'fas fa-database'}
];

// Projects data
const projects = [
  {
    title: 'RxLocate',
    description: 'Pharmacy management system with inventory tracking',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    link: 'https://github.com/anvthe/RxLocate-Full',
    tags: ['Java', 'Spring Boot', 'Vue.js']
  },
  {
    title: 'FoodDash',
    description: 'Food delivery platform with real-time tracking',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    link: '#',
    tags: ['JavaScript', 'Node.js', 'MongoDB']
  },
  {
    title: 'TaskFlow',
    description: 'Productivity app with team collaboration features',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    link: '#',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS']
  },
  {
    title: 'AdManager Pro',
    description: 'Digital advertising campaign management system',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    link: '#',
    tags: ['Spring Boot', 'React', 'AWS']
  }
];

// Experience data
const experiences = [
  {
    company: 'CreativeM',
    position: 'Back End Developer',
    duration: 'March 2016 - Present',
    description: [
      'Developed and maintained 10+ microservices using Java and Spring Boot',
      'Improved API response times by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored 3 junior developers in best practices'
    ],
    logo: 'https://via.placeholder.com/100?text=CM'
  },
  {
    company: 'WebNote',
    position: 'Web Developer',
    duration: 'April 2014 - March 2016',
    description: [
      'Built responsive web applications serving 50k+ monthly users',
      'Reduced page load times by 30% through performance optimization',
      'Collaborated with designers to implement UI/UX improvements'
    ],
    logo: 'https://via.placeholder.com/100?text=WN'
  },
  {
    company: 'WEBM',
    position: 'Intern',
    duration: 'April 2013 - February 2014',
    description: [
      'Assisted in developing internal tools and utilities',
      'Participated in code reviews and team knowledge sharing',
      'Learned industry best practices and development workflows'
    ],
    logo: 'https://via.placeholder.com/100?text=WM'
  }
];

// Education data
const education = [
  {
    degree: "Bachelor's Degree",
    field: 'Computer Science and Engineering',
    institution: 'American International University-Bangladesh',
    duration: '2009 - 2013',
    achievements: [
      'Graduated with honors (GPA: 3.8/4.0)',
      'Specialized in Software Engineering',
      'Capstone project awarded best in class'
    ],
    logo: 'https://via.placeholder.com/100?text=AIUB'
  },
  {
    degree: 'College (HSC)',
    field: 'Science',
    institution: 'Milestone School and College, Dhaka',
    duration: '2009 - 2013',
    achievements: [
      'Focus on Mathematics and Physics',
      'Developed strong analytical skills'
    ],
    logo: 'https://via.placeholder.com/100?text=MSC'
  },
  {
    degree: 'High School (SSC)',
    field: 'Science',
    institution: 'Abdur Rod High School & College, Bhola',
    duration: '2009 - 2011',
    achievements: [
      'Focus on Mathematics and Physics',
      'Developed strong analytical skills'
    ],
    logo: 'https://via.placeholder.com/100?text=MSC'
  }
];

// Testimonials data
const testimonials = [
  {
    name: 'Sonia',
    position: 'CEO at WEBM',
    quote: 'Roney demonstrated exceptional problem-solving skills during his internship. He quickly adapted to our development environment and contributed valuable code to our projects. His attention to detail and willingness to learn made him a valuable team member.',
    image: 'src/assets/images/SONIA.jpg'
  },
  {
    name: 'RKO',
    position: 'CTO at CreativeM',
    quote: 'As a backend developer, Roney showed deep understanding of Java and Spring framework. His code was clean, efficient, and well-documented. He consistently met deadlines and was always willing to help teammates.',
    image: 'src/assets/images/RKO.jpg'
  }
];

// Form data
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Active mobile menu state
const isMobileMenuOpen = ref(false);

// Active testimonial index
const activeTestimonial = ref(0);

// Smooth scroll to section
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
  isMobileMenuOpen.value = false;
};

// Download CV function
const downloadCV = () => {
  // In a real app, initiate file download
  alert('Downloading CV...');
};

// Logout function
const logout = () => {
  localStorage.removeItem('authToken');
  router.push('/login');
};

// Form submission
const submitForm = () => {
  alert('Message sent successfully!');
  form.value = {name: '', email: '', subject: '', message: ''};
};

// Navigation between testimonials
const nextTestimonial = () => {
  activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  activeTestimonial.value = (activeTestimonial.value - 1 + testimonials.length) % testimonials.length;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">

    <!-- Navigation -->
    <nav class="fixed w-full bg-black shadow-sm z-50">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold text-orange-600">Roney</span>
          </div>

          <div class="hidden md:flex items-center space-x-8">
            <a
                v-for="item in navItems"
                :key="item.id"
                @click.prevent="scrollToSection(item.id)"
                class="text-gray-500 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
            >
              {{ item.text }}
            </a>
          </div>

        </div>
      </div>


    </nav>

    <!-- Hero Section -->
    <header class="relative pt-24 pb-16 md:pt-32 md:pb-24 text-white overflow-hidden">
      <!-- Background Image -->
      <img
          src="@/assets/images/DSC00101.JPG"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <!-- Overlay (for darkening background if needed) -->
      <!--      <div class="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-700/80"></div>-->
      <div class="absolute inset-0 bg-gradient-to-r"></div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
            class="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white mx-auto mb-8 shadow-xl"
        >
          <img src="@/assets/images/jack.JPG" alt="Roney" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Md. Hashibur Rahman Khan</h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">Software Engineer at Computer Network Systems (CNS) Limited</p>

        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
              @click="scrollToSection('contact')"
              class="px-8 py-3 bg-white text-orange-700 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 transition-transform"
          >
            <i class="fas fa-paper-plane mr-2"></i> Hire Me
          </button>
          <button
              @click="downloadCV"
              class="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-orange-700 transition-colors shadow-lg transform hover:scale-105 transition-transform"
          >
            <i class="fas fa-download mr-2"></i> Download CV
          </button>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mt-12">
          <a
              v-for="social in socialPlatforms"
              :key="social.url"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full flex items-center justify-center transition-transform transform hover:scale-110"
              :style="{ backgroundColor: '#333' }"
          >
          <i
              :class="[social.icon, 'text-xl']"
              :style="{ color: social.color }"
          ></i>
          </a>

        </div>
      </div>
    </header>


    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- About Section -->
      <section id="about" class="mb-20">
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="p-8 md:p-10">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-orange-600">
              About Me
            </h2>
            <div class="md:flex">
              <div class="md:w-full md:pr-8 mb-8 md:mb-0">
                <p class="text-gray-600 mb-6 leading-relaxed">
                  I'm a passionate software engineer with 2+ years of experience building robust backend systems and web
                  applications.
                  My expertise lies in Java, Spring Boot, and modern JavaScript frameworks.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  Currently leading backend development at CreativeM, I specialize in creating scalable microservices
                  architectures
                  and optimizing system performance. I'm dedicated to writing clean, maintainable code and mentoring
                  junior developers.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      <!-- Experience Section -->
      <section id="experience" class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-orange-600">
          Work Experience
        </h2>
        <div class="space-y-8">
          <div
              v-for="exp in experiences"
              :key="exp.company"
              class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="md:flex">
              <div class="md:w-1/4 bg-orange-700 text-white p-8 flex flex-col items-center justify-center">
                <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
                  <img :src="exp.logo" :alt="exp.company" class="w-16 h-16 object-contain">
                </div>
                <h3 class="text-xl font-bold text-center">{{ exp.company }}</h3>
                <p class="text-orange-200 text-sm mt-2 text-center">{{ exp.duration }}</p>
              </div>
              <div class="md:w-3/4 p-8">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ exp.position }}</h3>
                <ul class="space-y-3">
                  <li
                      v-for="(item, index) in exp.description"
                      :key="index"
                      class="flex items-start text-gray-600"
                  >
                    <i class="fas fa-check text-orange-600 mr-2 mt-1"></i>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-orange-600">
          Technical Skills
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div
              v-for="skill in skills"
              :key="skill.name"
              class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                <i :class="skill.icon" class="text-orange-600 text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800">{{ skill.name }}</h3>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div
                  class="h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-1000"
                  :style="{ width: `${skill.percentage}%` }"
              ></div>
            </div>
            <div class="flex justify-between mt-2 text-sm text-gray-600">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section id="portfolio" class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-orange-600">
          My Projects
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
              v-for="project in projects"
              :key="project.title"
              class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div class="relative overflow-hidden h-48">
              <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              >
              <div
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                    :href="project.link"
                    target="_blank"
                    class="px-4 py-2 bg-white text-orange-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      <!-- Education Section -->
      <section id="education" class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-orange-600">
          Education
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div
              v-for="edu in education"
              :key="edu.institution"
              class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <img :src="edu.logo" :alt="edu.institution" class="w-12 h-12 object-contain">
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800">{{ edu.degree }}</h3>
                  <p class="text-orange-600">{{ edu.institution }}</p>
                </div>
              </div>
              <div class="mb-4">
                <h4 class="font-medium text-gray-700 mb-2">{{ edu.field }}</h4>
                <p class="text-gray-500 text-sm">{{ edu.duration }}</p>
              </div>
              <ul class="space-y-2">
                <li
                    v-for="(item, index) in edu.achievements"
                    :key="index"
                    class="flex items-start text-gray-600"
                >
                  <i class="fas fa-award text-orange-500 mr-2 mt-1"></i>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-orange-600">
          What People Say
        </h2>
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="p-8 md:p-10">
            <div class="relative">
              <div class="overflow-hidden">
                <div
                    class="flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${activeTestimonial * 100}%)` }"
                >
                  <div
                      v-for="testimonial in testimonials"
                      :key="testimonial.name"
                      class="w-full flex-shrink-0 px-4"
                  >
                    <div class="md:flex items-center">
                      <div class="md:w-1/5 mb-8 md:mb-0 flex justify-center">
                        <img
                            :src="testimonial.image"
                            :alt="testimonial.name"
                            class="w-24 h-24 rounded-full object-cover border-4 border-orange-100 shadow-md"
                        >
                      </div>
                      <div class="md:w-4/5 md:pl-8">
                        <div class="text-orange-600 text-5xl mb-4">"</div>
                        <p class="text-gray-600 text-lg italic mb-6">{{ testimonial.quote }}</p>
                        <div>
                          <h4 class="text-xl font-semibold text-gray-800">{{ testimonial.name }}</h4>
                          <p class="text-orange-600">{{ testimonial.position }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                  @click="prevTestimonial"
                  class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none"
              >
                <i class="fas fa-chevron-left text-orange-600"></i>
              </button>
              <button
                  @click="nextTestimonial"
                  class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none"
              >
                <i class="fas fa-chevron-right text-orange-600"></i>
              </button>
            </div>
            <div class="flex justify-center mt-8 space-x-2">
              <button
                  v-for="(_, index) in testimonials"
                  :key="index"
                  @click="activeTestimonial = index"
                  class="w-3 h-3 rounded-full focus:outline-none transition-all"
                  :class="activeTestimonial === index ? 'bg-orange-600 w-6' : 'bg-gray-300'"
              ></button>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-orange-600">
          Get In Touch
        </h2>
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="md:flex">
            <!-- Contact Form -->
            <div class="md:w-2/3 p-8 md:p-10">
              <h3 class="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                    >
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                        required
                    >
                  </div>
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                      type="text"
                      id="subject"
                      v-model="form.subject"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="What's this about?"
                      required
                  >
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Your message here..."
                      required
                  ></textarea>
                </div>
                <button
                    type="submit"
                    class="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all shadow-md hover:shadow-lg"
                >
                  <i class="fas fa-paper-plane mr-2"></i> Send Message
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="md:w-1/3 bg-gray-50 p-8 md:p-10">
              <h3 class="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <p class="text-gray-600 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas or opportunities to be part of your vision.
              </p>

              <div class="space-y-6">
                <!-- Address -->
                <div class="flex items-start">
                  <div class="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-orange-600"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-800 mb-1">Address</h4>
                    <p class="text-gray-600">Bishal Center, Zero Point</p>
                    <p class="text-gray-600">Tushar Dhara R/A, Kodomtali</p>
                    <p class="text-gray-600">Dhaka-1362, Bangladesh</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start">
                  <div class="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <i class="fas fa-phone-alt text-orange-600"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-800 mb-1">Phone</h4>
                    <p class="text-gray-600">+880 1619 109909</p>
                    <p class="text-gray-500 text-sm mt-1">Available Mon-Fri, 9AM-5PM</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start">
                  <div class="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <i class="fas fa-envelope text-orange-600"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-800 mb-1">Email</h4>
                    <a href="mailto:roneykhan@live.com" class="text-orange-600 hover:text-orange-800 transition-colors">roneykhan@live.com</a>
                    <p class="text-gray-500 text-sm mt-1">Typically replies within 24 hours</p>
                  </div>
                </div>

                <!-- Social Media -->
                <div class="pt-4">
                  <h4 class="text-lg font-medium text-gray-800 mb-4">Follow Me</h4>
                  <div class="flex space-x-4">
                    <a
                        v-for="social in socialLinks"
                        :key="social.url"
                        :href="social.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-10 h-10 rounded-full flex items-center justify-center transition-transform transform hover:scale-110"

                    >
                    <i
                        :class="[social.icon, 'text-xl']"
                        :style="{ color: social.color }"
                    ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Footer Content -->
        <div class="flex flex-col items-center text-center space-y-8">


          <!-- Name -->
          <h2 class="text-2xl sm:text-3xl md:text-4xl text-orange-600 font-bold">
            Roney Khan
          </h2>

          <!-- Description -->
          <p class="text-gray-400 max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed px-2">
            Software Engineer specializing in Java, Spring Boot, and modern web technologies.
          </p>

          <!-- Navigation Links -->
          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a
                v-for="item in navItems"
                :key="item.id"
                @click.prevent="scrollToSection(item.id)"
                class="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
            >
              {{ item.text }}
            </a>
          </div>

          <!-- Divider -->
          <div class="w-full border-t border-gray-700"></div>

          <!-- Footer Bottom -->
          <p class="text-gray-500 text-xs sm:text-sm">
            &copy; 2025 Roney Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>