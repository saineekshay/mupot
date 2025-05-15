import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-blue-500/20 px-6 py-2 rounded-full inline-block mb-6">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">A Sai Neekshay</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Computer Science Student & Aspiring Software Engineer
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="https://github.com/saineekshay" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/saineekshay" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/saineekshay" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="mailto:aadisaineekshay@gmail.com" className="text-2xl hover:text-blue-300 transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            I am a motivated student with a passion for technology and a strong drive to become a
            skilled developer. Currently exploring the foundations of software development and
            artificial intelligence, I am committed to turning my curiosity into a future career in tech.
            With each project and learning opportunity, I'm building the skills needed to solve real-world
            challenges through innovative solutions.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">B.Tech. in Computer Science</h3>
              <p className="text-gray-600">Nalla Narasimha Reddy Engineering College</p>
              <p className="text-gray-500">April 2024 - Expected</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Computer Science Engineering</li>
                  <li>Python development</li>
                  <li>Machine Learning</li>
                  <li>Web Development</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Diploma in Electronics Communication</h3>
              <p className="text-gray-600">Siddhartha institute of engineering and technology</p>
              <p className="text-gray-500">March 2020 - April 2023</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Analog Communication</li>
                  <li>Digital Communication</li>
                  <li>Industrial Training</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Primary Studies</h3>
              <p className="text-gray-600">St. Jhons High School</p>
              <p className="text-gray-500">March 2007 - 2020</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Mathematics</li>
                  <li>English (First language)</li>
                  <li>Remaining Standard Subjects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Bank Management System</h3>
              <p className="text-gray-600 mb-4">
                Secure banking system with features for account management, transactions, and
                administrative controls.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">JSP</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">Oracle</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Student Learning Portal</h3>
              <p className="text-gray-600 mb-4">
                Interactive learning platform with course management, progress tracking, and assessment
                tools.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">HTML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python</li>
                <li>R</li>
                <li>Java</li>
                <li>Programming in C</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Web Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Databases</h3>
              <ul className="space-y-2 text-gray-600">
                <li>MongoDB</li>
                <li>Oracle</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git</li>
                <li>Docker</li>
                <li>Jenkins</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Address:</span>
                  <span>Hyderabad, Telangana</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:aadisaineekshay@gmail.com" className="text-blue-600 hover:text-blue-800">
                    aadisaineekshay@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Phone:</span>
                  <span>+91 9390189376</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Social Profiles</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/saineekshay" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-800">
                  <FaLinkedin />
                </a>
                <a href="mailto:aadisaineekshay@gmail.com" className="text-3xl text-blue-600 hover:text-blue-800">
                  <FaEnvelope />
                </a>
                <a href="https://instagram.com/saineekshay" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-800">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;