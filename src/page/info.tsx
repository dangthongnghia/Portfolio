import { useEffect, useState } from 'react'
import { profileApi } from '../api/GithubApi'
import Icon from '../components/Icon'
import '../App.css'
interface GitHubProfile {
  avatar_url: string
  name: string
  login: string
  bio: string
  location: string
  blog: string
  public_repos: number
  followers: number
  following: number
  company?: string
  twitter_username?: string
  html_url: string
}

function Info() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await profileApi()
        setProfile(response.data)
        console.log(response)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-[#060D10] via-[#0A1520] to-[#111827] flex items-center justify-center'>
        <div className='relative'>
          <div className='w-20 h-20 border-4 border-[#21A691] border-t-transparent rounded-full animate-spin'></div>
          <div className='absolute inset-0 w-20 h-20 border-4 border-[#C778DD] border-b-transparent rounded-full animate-spin animate-reverse'></div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#060D10] via-[#0A1520] to-[#111827] relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-[#21A691] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-[#C778DD] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000'></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjFBNjkxIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-20"></div>

      <div className='relative z-10 container mx-auto px-6 py-20'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 text-3xl font-fira mb-4'>
            <span className='text-[#21A691]'>$</span>
            <span className='text-white'>whoami</span>
          </div>
          <div className='w-24 h-1 bg-gradient-to-r from-[#21A691] to-[#C778DD] mx-auto'></div>
        </div>

        {/* Main Profile Card */}
        <div className='max-w-6xl mx-auto'>
          <div className='bg-[#1A1E29]/80 backdrop-blur-xl rounded-3xl border border-[#21A691]/20 shadow-2xl overflow-hidden'>
            <div className='grid lg:grid-cols-2 gap-0'>
              {/* Left Side - Profile Image & Quick Stats */}
              <div className='relative p-8 lg:p-12 bg-gradient-to-br from-[#21A691]/10 to-[#C778DD]/10'>
                <div className='text-center'>
                  {/* Profile Avatar */}
                  <div className='relative inline-block mb-8'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#21A691] to-[#C778DD] rounded-full animate-pulse'></div>
                    <img
                      src={profile?.avatar_url}
                      alt={profile?.name}
                      className='relative w-40 h-40 rounded-full border-4 border-white object-cover z-10'
                    />
                    <div className='absolute -bottom-2 -right-2 w-12 h-12 bg-[#21A691] rounded-full flex items-center justify-center border-4 border-[#1A1E29]'>
                      <Icon name='code' size={20} className='text-white' />
                    </div>
                  </div>

                  {/* Name & Username */}
                  <h1 className='text-4xl font-bold text-white mb-2 font-inter'>{profile?.name}</h1>
                  <p className='text-[#21A691] text-xl font-jetbrains mb-6'>@{profile?.login}</p>

                  {/* GitHub Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-8'>
                    <div className='text-center p-4 bg-[#0A1520]/50 rounded-xl border border-[#21A691]/20'>
                      <div className='text-2xl font-bold text-[#21A691] font-jetbrains'>{profile?.public_repos}</div>
                      <div className='text-sm text-gray-400'>Repos</div>
                    </div>
                    <div className='text-center p-4 bg-[#0A1520]/50 rounded-xl border border-[#C778DD]/20'>
                      <div className='text-2xl font-bold text-[#C778DD] font-jetbrains'>{profile?.followers}</div>
                      <div className='text-sm text-gray-400'>Followers</div>
                    </div>
                    <div className='text-center p-4 bg-[#0A1520]/50 rounded-xl border border-blue-500/20'>
                      <div className='text-2xl font-bold text-blue-400 font-jetbrains'>{profile?.following}</div>
                      <div className='text-sm text-gray-400'>Following</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Profile Details */}
              <div className='p-8 lg:p-12'>
                <div className='space-y-8'>
                  {/* Bio Section */}
                  <div className='space-y-4'>
                    <h3 className='text-xl font-semibold text-white flex items-center gap-2 font-inter'>
                      <Icon name='user' size={20} className='text-[#21A691]' />
                      About Me
                    </h3>
                    <p className='text-gray-300 leading-relaxed font-inter text-lg'>
                      {profile?.bio || 'Passionate developer building amazing things with code.'}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className='space-y-6'>
                    <h3 className='text-xl font-semibold text-white flex items-center gap-2 font-inter'>
                      <Icon name='contact' size={20} className='text-[#C778DD]' />
                      Contact Info
                    </h3>

                    <div className='space-y-4'>
                      {profile?.location && (
                        <div className='flex items-center gap-4 p-3 bg-[#0A1520]/30 rounded-lg border border-[#21A691]/10 hover:border-[#21A691]/30 transition-colors'>
                          <Icon name='location' size={20} className='text-[#21A691]' />
                          <span className='text-gray-300 font-inter'>{profile.location}</span>
                        </div>
                      )}

                      {profile?.blog && (
                        <div className='flex items-center gap-4 p-3 bg-[#0A1520]/30 rounded-lg border border-[#C778DD]/10 hover:border-[#C778DD]/30 transition-colors'>
                          <Icon name='link' size={20} className='text-[#C778DD]' />
                          <a
                            href={profile.blog}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-300 hover:text-[#C778DD] transition-colors font-inter'
                          >
                            {profile.blog}
                          </a>
                        </div>
                      )}

                      {profile?.company && (
                        <div className='flex items-center gap-4 p-3 bg-[#0A1520]/30 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-colors'>
                          <Icon name='work' size={20} className='text-blue-400' />
                          <span className='text-gray-300 font-inter'>{profile.company}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='space-y-4'>
                    <h3 className='text-xl font-semibold text-white font-inter'>Let's Connect</h3>
                    <div className='flex flex-col sm:flex-row gap-4'>
                      <a
                        href={profile?.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#21A691] to-[#1A8A7A] text-white rounded-lg hover:shadow-lg hover:shadow-[#21A691]/25 transition-all duration-300 font-inter font-medium'
                      >
                        <Icon name='github' size={20} />
                        View GitHub Profile
                      </a>

                      <a
                        href='mailto:dangnghia2385@gmail.com'
                        className='flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C778DD] to-[#A855F7] text-white rounded-lg hover:shadow-lg hover:shadow-[#C778DD]/25 transition-all duration-300 font-inter font-medium'
                      >
                        <Icon name='email' size={20} />
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className='max-w-6xl mx-auto mt-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-white mb-4 font-inter'>
              <span className='text-[#21A691]'>const</span> techStack <span className='text-[#C778DD]'>=</span> [
            </h2>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {[
              { name: 'React', color: '#61DAFB' },
              { name: 'TypeScript', color: '#3178C6' },
              { name: 'Node.js', color: '#339933' },
              { name: 'Python', color: '#3776AB' },
              { name: 'Git', color: '#F05032' },
              { name: 'Docker', color: '#2496ED' }
            ].map((tech) => (
              <div
                key={tech.name}
                className='group p-6 bg-[#1A1E29]/60 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-[#21A691]/50 transition-all duration-300 hover:transform hover:scale-105'
              >
                <div className='text-center'>
                  <div
                    className='w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg'
                    style={{ backgroundColor: tech.color + '20', border: `2px solid ${tech.color}40` }}
                  >
                    {tech.name[0]}
                  </div>
                  <p className='text-gray-300 font-inter text-sm group-hover:text-white transition-colors'>
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-8'>
            <p className='text-2xl text-white font-inter'>
              <span className='text-[#C778DD]'>];</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
