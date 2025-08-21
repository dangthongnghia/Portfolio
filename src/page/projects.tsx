import { useEffect, useState } from 'react'
import Icon from '../components/Icon'
import {publicRepo} from '../api/GithubApi'
interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  language: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  private: boolean // Thêm property private
}

export function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    const fetchRepositories = async () => {
      try {

        const response = await publicRepo()
       

        // Filter: Chỉ lấy public repos và loại bỏ repos có dấu chấm trong tên
        setRepositories(
          response.data.filter(
            (repo: Repository) =>
              !repo.private && // Chỉ lấy public repositories
              !repo.name.includes('.') // Loại bỏ repos có dấu chấm (thường là config repos)
          )
        )
      } catch (error) {
        console.error('Error fetching repositories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      React: '#61dafb',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#1572B6',
      Vue: '#4FC08D',
      PHP: '#4F5D95',
      C: '#555555',
      'C++': '#f34b7d',
      'C#': '#239120',
      Go: '#00ADD8',
      Rust: '#dea584',
      Swift: '#ffac45',
      Kotlin: '#F18E33'
    }
    return colors[language] || '#8b949e'
  }

  const filters = ['all', 'JavaScript', 'TypeScript', 'C#', 'React', 'Vue']

  const filteredRepos = repositories.filter((repo) => {
    if (selectedFilter === 'all') return true
    return repo.language === selectedFilter || repo.topics.includes(selectedFilter.toLowerCase())
  })

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
            <span className='text-[#21A691]'>const</span>
            <span className='text-white'>projects</span>
            <span className='text-[#C778DD]'> = [</span>
          </div>
          <p className='text-gray-400 text-lg font-inter max-w-2xl mx-auto'>
            Collection of my public projects, from web applications to open-source contributions
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#21A691] to-[#C778DD] mx-auto mt-6'></div>
        </div>

        {/* Stats */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-6 bg-[#1A1E29]/60 backdrop-blur-xl rounded-2xl border border-[#21A691]/20 px-8 py-4'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-[#21A691] font-jetbrains'>{repositories.length}</div>
              <div className='text-sm text-gray-400 font-inter'>Public Repos</div>
            </div>
            <div className='w-px h-8 bg-gray-600'></div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-[#C778DD] font-jetbrains'>
                {repositories.reduce((total, repo) => total + repo.stargazers_count, 0)}
              </div>
              <div className='text-sm text-gray-400 font-inter'>Total Stars</div>
            </div>
            <div className='w-px h-8 bg-gray-600'></div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-blue-400 font-jetbrains'>
                {new Set(repositories.map((repo) => repo.language).filter(Boolean)).size}
              </div>
              <div className='text-sm text-gray-400 font-inter'>Languages</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-[#21A691] to-[#1A8A7A] text-white shadow-lg shadow-[#21A691]/25'
                  : 'bg-[#1A1E29]/60 text-gray-400 hover:text-white hover:bg-[#1A1E29] border border-gray-700/30'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className='group bg-[#1A1E29]/80 backdrop-blur-xl rounded-2xl border border-[#21A691]/20 hover:border-[#21A691]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#21A691]/10 overflow-hidden'
            >
              <div className='p-6'>
                {/* Project Header */}
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#21A691] to-[#C778DD] rounded-lg flex items-center justify-center'>
                      <Icon name='project' size={20} className='text-white' />
                    </div>
                    <div>
                      <div className='flex items-center gap-2'>
                        <h3 className='text-lg font-bold text-white font-inter group-hover:text-[#21A691] transition-colors'>
                          {repo.name}
                        </h3>
                        {/* Public Badge */}
                        <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-md font-jetbrains border border-green-500/30'>
                          Public
                        </span>
                      </div>
                      <div className='flex items-center gap-2 mt-1'>
                        {repo.language && (
                          <div className='flex items-center gap-1'>
                            <div
                              className='w-3 h-3 rounded-full'
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            ></div>
                            <span className='text-sm text-gray-400 font-jetbrains'>{repo.language}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-300 text-sm font-inter leading-relaxed mb-4 h-12 overflow-hidden'>
                  {repo.description || 'No description available'}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className='px-2 py-1 bg-[#C778DD]/20 text-[#C778DD] text-xs rounded-md font-jetbrains'
                      >
                        #{topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className='px-2 py-1 bg-gray-700/30 text-gray-400 text-xs rounded-md font-jetbrains'>
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Stats */}
                <div className='flex items-center gap-4 mb-6'>
                  <div className='flex items-center gap-1'>
                    <Icon name='star' size={16} className='text-yellow-400' />
                    <span className='text-sm text-gray-400 font-jetbrains'>{repo.stargazers_count}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Icon name='github' size={16} className='text-gray-400' />
                    <span className='text-sm text-gray-400 font-jetbrains'>{repo.forks_count}</span>
                  </div>
                  <div className='text-sm text-gray-500 font-jetbrains ml-auto'>
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#21A691] to-[#1A8A7A] text-white rounded-lg hover:shadow-lg hover:shadow-[#21A691]/25 transition-all duration-300 font-inter font-medium text-sm'
                  >
                    <Icon name='github' size={16} />
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C778DD] to-[#A855F7] text-white rounded-lg hover:shadow-lg hover:shadow-[#C778DD]/25 transition-all duration-300 font-inter font-medium text-sm'
                    >
                      <Icon name='external' size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRepos.length === 0 && (
          <div className='text-center py-16'>
            <div className='w-20 h-20 bg-[#1A1E29] rounded-full flex items-center justify-center mx-auto mb-6'>
              <Icon name='project' size={40} className='text-gray-400' />
            </div>
            <h3 className='text-xl font-bold text-white mb-2 font-inter'>No public projects found</h3>
            <p className='text-gray-400 font-inter'>Try adjusting your filter to see more public repositories</p>
          </div>
        )}

        {/* Footer */}
        <div className='text-center mt-16'>
          <p className='text-2xl text-white font-inter'>
            <span className='text-[#C778DD]'>];</span>
          </p>
          <p className='text-gray-400 mt-4 font-inter'>
            Want to collaborate? <span className='text-[#21A691]'>Let's build something amazing together!</span>
          </p>
        </div>
      </div>
    </div>
  )
}
