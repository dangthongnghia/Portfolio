import Icon from '../components/Icon'

export function About() {
  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'Next.js', level: 80, color: '#000000' },
        { name: 'Vue.js', level: 75, color: '#4FC08D' },
        { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
        { name: 'SASS/SCSS', level: 85, color: '#CC6699' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Python', level: 80, color: '#3776AB' },
        { name: 'Express.js', level: 85, color: '#000000' },
        { name: 'FastAPI', level: 75, color: '#009688' },
        { name: 'MongoDB', level: 80, color: '#47A248' },
        { name: 'PostgreSQL', level: 75, color: '#336791' }
      ]
    },
    {
      category: 'Tools & Others',
      technologies: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Docker', level: 75, color: '#2496ED' },
        { name: 'AWS', level: 70, color: '#FF9900' },
        { name: 'Firebase', level: 80, color: '#FFCA28' },
        { name: 'Figma', level: 85, color: '#F24E1E' },
        { name: 'VS Code', level: 95, color: '#007ACC' }
      ]
    }
  ]

  const timeline = [
    {
      year: '2025',
      title: 'Full-Stack Developer',
      company: 'SweetSoft Company',
      description:
        'Developed end-to-end web solutions, from database design to frontend implementation. Worked with modern tech stack including React, Express.js, and MongoDB.',
      achievements: ['Launched 3 major features', 'Reduced load time by 60%', 'Integrated payment systems']
    },
    {
      year: '2024',
      title: 'Frontend Developer',
      company: 'Web Agency',
      description:
        'Specialized in creating responsive and interactive user interfaces. Collaborated with designers to bring pixel-perfect designs to life.',
      achievements: ['Built 10+ responsive websites', 'Improved SEO scores', 'Implemented modern animations']
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#060D10] via-[#0A1520] to-[#111827] relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-[#21A691] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-[#C778DD] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative z-10 container mx-auto px-6 py-20'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 text-3xl font-fira mb-4'>
            <span className='text-[#21A691]'>function</span>
            <span className='text-white'>aboutMe</span>
            <span className='text-[#C778DD]'>()</span>
            <span className='text-white'> {'{'}</span>
          </div>
          <p className='text-gray-400 text-lg font-inter max-w-2xl mx-auto'>
            My journey, skills, and experiences in the world of software development
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#21A691] to-[#C778DD] mx-auto mt-6'></div>
        </div>

        {/* Introduction */}
        <div className='max-w-4xl mx-auto mb-20'>
          <div className='bg-[#1A1E29]/80 backdrop-blur-xl rounded-3xl border border-[#21A691]/20 p-8 lg:p-12'>
            <h2 className='text-2xl font-bold text-white mb-6 font-inter flex items-center gap-3'>
              <Icon name='user' size={24} className='text-[#21A691]' />
              Who I Am
            </h2>
            <div className='space-y-4 text-gray-300 font-inter leading-relaxed'>
              <p>
                I'm a passionate full-stack developer with over 3 years of experience building modern web applications.
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community. I believe in writing clean, maintainable code and
                creating user experiences that make a difference.
              </p>
              <p>
                My goal is to bridge the gap between technical functionality and user experience, creating applications
                that are not only powerful but also delightful to use.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className='max-w-6xl mx-auto mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center font-inter'>
            <span className='text-[#21A691]'>const</span> skills <span className='text-[#C778DD]'>=</span> {'{'}
          </h2>

          <div className='grid lg:grid-cols-3 gap-8'>
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={groupIndex}
                className='bg-[#1A1E29]/80 backdrop-blur-xl rounded-2xl border border-[#21A691]/20 p-6'
              >
                <h3 className='text-xl font-bold text-white mb-6 font-inter text-center'>{skillGroup.category}</h3>
                <div className='space-y-4'>
                  {skillGroup.technologies.map((tech, index) => (
                    <div key={index} className='group'>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-gray-300 font-inter font-medium'>{tech.name}</span>
                        <span className='text-gray-400 font-jetbrains text-sm'>{tech.level}%</span>
                      </div>
                      <div className='w-full bg-[#0A1520] rounded-full h-2 overflow-hidden'>
                        <div
                          className='h-2 rounded-full transition-all duration-1000 ease-out'
                          style={{
                            width: `${tech.level}%`,
                            backgroundColor: tech.color,
                            boxShadow: `0 0 10px ${tech.color}40`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-8'>
            <p className='text-2xl text-white font-inter'>
              <span className='text-[#C778DD]'>{'}'}</span>
              <span className='text-white'>;</span>
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className='max-w-4xl mx-auto mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center font-inter'>
            <span className='text-[#21A691]'>const</span> experience <span className='text-[#C778DD]'>=</span> [
          </h2>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#21A691] to-[#C778DD]'></div>

            <div className='space-y-8'>
              {timeline.map((item, index) => (
                <div key={index} className='relative flex items-start gap-6'>
                  {/* Timeline Dot */}
                  <div className='relative z-10 w-16 h-16 bg-gradient-to-r from-[#21A691] to-[#C778DD] rounded-full flex items-center justify-center text-white font-bold font-jetbrains border-4 border-[#1A1E29]'>
                    {item.year}
                  </div>

                  {/* Content */}
                  <div className='flex-1 bg-[#1A1E29]/80 backdrop-blur-xl rounded-2xl border border-[#21A691]/20 p-6 hover:border-[#21A691]/40 transition-all duration-300'>
                    <div className='mb-4'>
                      <h3 className='text-xl font-bold text-white font-inter'>{item.title}</h3>
                      <p className='text-[#21A691] font-inter font-medium'>{item.company}</p>
                    </div>

                    <p className='text-gray-300 font-inter mb-4 leading-relaxed'>{item.description}</p>

                    <div className='space-y-2'>
                      <h4 className='text-sm font-semibold text-[#C778DD] font-inter'>Key Achievements:</h4>
                      <ul className='space-y-1'>
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className='text-gray-300 text-sm font-inter flex items-center gap-2'>
                            <div className='w-1.5 h-1.5 bg-[#21A691] rounded-full'></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center mt-8'>
            <p className='text-2xl text-white font-inter'>
              <span className='text-[#C778DD]'>];</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center'>
          <p className='text-2xl text-white font-inter mb-4'>
            <span className='text-white'>{'}'}</span>
          </p>
          <p className='text-gray-400 font-inter'>
            Ready to build something amazing together? <span className='text-[#21A691]'>Let's connect!</span>
          </p>
        </div>
      </div>
    </div>
  )
}
