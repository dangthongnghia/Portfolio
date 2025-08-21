import { useState } from 'react'
import Icon from '../components/Icon'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'dangnghia2385@gmail.com'
      }

      console.log('Sending with params:', templateParams)

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('SUCCESS!', result.status, result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('FAILED...', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }
  const contactMethods = [
    {
      icon: 'email',
      title: 'Email',
      description: 'Send me an email',
      value: 'dangnghia2385@gmail.com',
      link: 'mailto:dangnghia2385@gmail.com',
      color: '#21A691'
    },
    {
      icon: 'github',
      title: 'GitHub',
      description: 'Check out my repositories',
      value: 'github.com/dangthongnghia',
      link: 'https://github.com/dangthongnghia',
      color: '#C778DD'
    },
    {
      icon: 'link',
      title: 'LinkedIn',
      description: 'Connect professionally',
      value: 'linkedin.com/in/nghia-dang-8666b427b',
      link: 'https://linkedin.com/in/nghia-dang-8666b427b',
      color: '#0077B5'
    },
    {
      icon: 'location',
      title: 'Location',
      description: "Where I'm based",
      value: 'Khanh Hoa Province, Vietnam',
      link: '',
      color: '#FF6B6B'
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
            <span className='text-white'>contactMe</span>
            <span className='text-[#C778DD]'>()</span>
            <span className='text-white'> {'{'}</span>
          </div>
          <p className='text-gray-400 text-lg font-inter max-w-2xl mx-auto'>
            Let's collaborate on your next project or just have a chat about technology
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#21A691] to-[#C778DD] mx-auto mt-6'></div>
        </div>

        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div className='bg-[#1A1E29]/80 backdrop-blur-xl rounded-3xl border border-[#21A691]/20 p-8'>
                <h2 className='text-2xl font-bold text-white mb-6 font-inter flex items-center gap-3'>
                  <Icon name='contact' size={24} className='text-[#21A691]' />
                  Get In Touch
                </h2>
                <p className='text-gray-300 font-inter leading-relaxed mb-8'>
                  I'm always interested in hearing about new opportunities, interesting projects, or just connecting
                  with fellow developers. Whether you have a question or just want to say hi, I'll try my best to get
                  back to you!
                </p>

                <div className='space-y-6'>
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className='group p-4 bg-[#0A1520]/30 rounded-xl border border-gray-700/30 hover:border-[#21A691]/30 transition-all duration-300'
                    >
                      {method.link ? (
                        <a
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : '_self'}
                          rel='noopener noreferrer'
                          className='flex items-center gap-4'
                        >
                          <div
                            className='w-12 h-12 rounded-lg flex items-center justify-center'
                            style={{ backgroundColor: method.color + '20' }}
                          >
                            <Icon name={method.icon} size={20} />
                          </div>
                          <div>
                            <h3 className='text-white font-inter font-semibold group-hover:text-[#21A691] transition-colors'>
                              {method.title}
                            </h3>
                            <p className='text-gray-400 text-sm font-inter'>{method.description}</p>
                            <p className='text-gray-300 text-sm font-jetbrains'>{method.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className='flex items-center gap-4'>
                          <div
                            className='w-12 h-12 rounded-lg flex items-center justify-center'
                            style={{ backgroundColor: method.color + '20' }}
                          >
                            <Icon name={method.icon} size={20} />
                          </div>
                          <div>
                            <h3 className='text-white font-inter font-semibold'>{method.title}</h3>
                            <p className='text-gray-400 text-sm font-inter'>{method.description}</p>
                            <p className='text-gray-300 text-sm font-jetbrains'>{method.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-[#1A1E29]/80 backdrop-blur-xl rounded-3xl border border-[#21A691]/20 p-8'>
              <h2 className='text-2xl font-bold text-white mb-6 font-inter'>Send Message</h2>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-gray-300 font-inter font-medium mb-2'>
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-[#0A1520]/50 border border-gray-700/50 rounded-lg text-white font-inter placeholder-gray-500 focus:border-[#21A691] focus:outline-none focus:ring-2 focus:ring-[#21A691]/20 transition-all'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-gray-300 font-inter font-medium mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-[#0A1520]/50 border border-gray-700/50 rounded-lg text-white font-inter placeholder-gray-500 focus:border-[#21A691] focus:outline-none focus:ring-2 focus:ring-[#21A691]/20 transition-all'
                      placeholder='dangnghia2385@gmail.com'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='subject' className='block text-gray-300 font-inter font-medium mb-2'>
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-[#0A1520]/50 border border-gray-700/50 rounded-lg text-white font-inter placeholder-gray-500 focus:border-[#21A691] focus:outline-none focus:ring-2 focus:ring-[#21A691]/20 transition-all'
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-gray-300 font-inter font-medium mb-2'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 bg-[#0A1520]/50 border border-gray-700/50 rounded-lg text-white font-inter placeholder-gray-500 focus:border-[#21A691] focus:outline-none focus:ring-2 focus:ring-[#21A691]/20 transition-all resize-none'
                    placeholder='Tell me about your project or just say hello...'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-inter font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#21A691] to-[#1A8A7A] hover:shadow-lg hover:shadow-[#21A691]/25 hover:transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className='flex items-center justify-center gap-2'>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className='p-4 bg-green-500/20 border border-green-500/30 rounded-lg'>
                    <p className='text-green-400 font-inter text-center'>
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className='p-4 bg-red-500/20 border border-red-500/30 rounded-lg'>
                    <p className='text-red-400 font-inter text-center'>
                      ❌ Something went wrong. Please try again or contact me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center mt-16'>
          <p className='text-2xl text-white font-inter mb-4'>
            <span className='text-white'>{'}'}</span>
          </p>
          <p className='text-gray-400 font-inter'>
            Looking forward to hearing from you! <span className='text-[#21A691]'>🚀</span>
          </p>
        </div>
      </div>
    </div>
  )
}
