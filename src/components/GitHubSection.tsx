import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Star,
  GitFork,
  Users,
  BookOpen,
  Activity
} from 'lucide-react';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export default function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState<
    {
      name: string;
      count: number;
      percent: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        // Your GitHub username
        const username = 'maheshmochi';

        let userData: GitHubUser | null = null;
        let reposData: Repository[] = [];

        try {
          // ==========================
          // Fetch GitHub Profile
          // ==========================
          const userRes = await fetch(
            `https://api.github.com/users/${username}`
          );

          if (userRes.ok) {
            userData = await userRes.json();
          }

          // ==========================
          // Fetch GitHub Repositories
          // ==========================
          const reposRes = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
          );

          if (reposRes.ok) {
            reposData = await reposRes.json();
          }
        } catch (error) {
          console.warn(
            'Network error while fetching GitHub data.',
            error
          );
        }

        // ==========================
        // Fallback Profile Data
        // ==========================
        if (!userData) {
          userData = {
            login: 'maheshmochi',
            avatar_url:
              'https://github.com/maheshmochi.png',
            public_repos: 0,
            followers: 0,
            following: 0,
            html_url:
              'https://github.com/maheshmochi'
          };
        }

        setUser(userData);

        // Show latest 4 repositories
        setRepos(reposData.slice(0, 4));

        // ==========================
        // Calculate Language Stats
        // ==========================
        const langCounts: Record<string, number> = {};

        let total = 0;

        reposData.forEach((repo) => {
          if (repo.language) {
            langCounts[repo.language] =
              (langCounts[repo.language] || 0) + 1;

            total++;
          }
        });

        const langArray =
          total > 0
            ? Object.entries(langCounts)
                .map(([name, count]) => ({
                  name,
                  count,
                  percent: Math.round(
                    (count / total) * 100
                  )
                }))
                .sort(
                  (a, b) => b.count - a.count
                )
                .slice(0, 5)
            : [];

        setLanguages(langArray);
      } catch (error) {
        console.error(
          'Error fetching GitHub data:',
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section
      id="github"
      className="py-24 relative px-6 z-10 bg-gradient-to-t from-transparent to-black/50"
    >
      <div className="max-w-6xl mx-auto">

        {/* =================================
            SECTION TITLE
        ================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white flex items-center justify-center gap-4">

            <Github
              size={40}
              className="text-[#9d4edd]"
            />

            GitHub{' '}

            <span className="text-gradient">
              Activity
            </span>

          </h2>
        </motion.div>

        {/* =================================
            LOADING
        ================================= */}
        {loading ? (
          <div className="flex justify-center items-center h-64">

            <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-[#9d4edd] animate-spin" />

          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* =================================
                GITHUB PROFILE STATS
            ================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {user && (
                <>

                  {/* GitHub Avatar */}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block z-10 relative group-hover:scale-105 transition-transform"
                  >

                    <img
                      src={user.avatar_url}
                      alt={`${user.login} GitHub profile`}
                      className="w-24 h-24 rounded-full border-4 border-[#9d4edd]/30 mb-4 object-cover"
                    />

                    <div className="absolute inset-0 rounded-full ring-2 ring-[#9d4edd] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />

                  </a>

                  {/* Username */}
                  <h3 className="text-2xl font-bold text-white mb-1 z-10">
                    @{user.login}
                  </h3>

                  <p className="text-white/60 mb-8 z-10 text-sm">
                    GitHub Profile Stats
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 w-full text-center z-10">

                    {/* Repositories */}
                    <div>

                      <div className="flex items-center justify-center mb-2 text-[#9d4edd]">
                        <BookOpen size={20} />
                      </div>

                      <div className="text-2xl font-mono font-bold text-white">
                        {user.public_repos}
                      </div>

                      <div className="text-xs text-white/50 uppercase tracking-widest mt-1">
                        Repos
                      </div>

                    </div>

                    {/* Followers */}
                    <div>

                      <div className="flex items-center justify-center mb-2 text-[#9d4edd]">
                        <Users size={20} />
                      </div>

                      <div className="text-2xl font-mono font-bold text-white">
                        {user.followers}
                      </div>

                      <div className="text-xs text-white/50 uppercase tracking-widest mt-1">
                        Followers
                      </div>

                    </div>

                    {/* Following */}
                    <div>

                      <div className="flex items-center justify-center mb-2 text-[#9d4edd]">
                        <Activity size={20} />
                      </div>

                      <div className="text-2xl font-mono font-bold text-white">
                        {user.following}
                      </div>

                      <div className="text-xs text-white/50 uppercase tracking-widest mt-1">
                        Following
                      </div>

                    </div>

                  </div>

                </>
              )}

            </motion.div>

            {/* =================================
                TOP LANGUAGES
            ================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="glass-panel p-8 rounded-2xl"
            >

              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Top Languages
              </h3>

              {languages.length > 0 ? (

                <div className="space-y-6">

                  {languages.map(
                    (lang, idx) => (
                      <div key={lang.name}>

                        <div className="flex justify-between items-center mb-2">

                          <span className="text-white/90 font-medium">
                            {lang.name}
                          </span>

                          <span className="text-white/50 font-mono text-sm">
                            {lang.percent}%
                          </span>

                        </div>

                        <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">

                          <motion.div
                            initial={{
                              width: 0
                            }}
                            whileInView={{
                              width: `${lang.percent}%`
                            }}
                            viewport={{
                              once: true
                            }}
                            transition={{
                              duration: 1,
                              delay:
                                0.2 +
                                idx * 0.1
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-[#9d4edd] to-[#e0c3fc]"
                          />

                        </div>

                      </div>
                    )
                  )}

                </div>

              ) : (

                <div className="h-full min-h-[200px] flex items-center justify-center text-center">

                  <p className="text-white/40 text-sm">
                    Language statistics will appear
                    when your repositories are available.
                  </p>

                </div>

              )}

            </motion.div>

            {/* =================================
                RECENT REPOSITORIES
            ================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="glass-panel p-8 rounded-2xl flex flex-col"
            >

              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Recent Activity
              </h3>

              {repos.length > 0 ? (

                <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">

                  {repos.map(
                    (repo) => (

                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#9d4edd]/30 transition-all group"
                      >

                        {/* Repository Name + Date */}
                        <div className="flex justify-between items-start mb-2">

                          <h4 className="text-[#e0c3fc] font-medium group-hover:text-white transition-colors truncate pr-4">
                            {repo.name}
                          </h4>

                          <span className="text-xs text-white/40 font-mono whitespace-nowrap">
                            {new Date(
                              repo.updated_at
                            ).toLocaleDateString()}
                          </span>

                        </div>

                        {/* Repository Description */}
                        {repo.description && (
                          <p className="text-sm text-white/60 line-clamp-2 mb-3">
                            {repo.description}
                          </p>
                        )}

                        {/* Repository Information */}
                        <div className="flex items-center gap-4 mt-auto">

                          {/* Language */}
                          {repo.language && (
                            <div className="flex items-center gap-1.5 text-xs text-white/50">

                              <div className="w-2 h-2 rounded-full bg-[#9d4edd]" />

                              {repo.language}

                            </div>
                          )}

                          {/* Stars */}
                          <div className="flex items-center gap-1.5 text-xs text-white/50">

                            <Star size={12} />

                            {repo.stargazers_count}

                          </div>

                          {/* Forks */}
                          <div className="flex items-center gap-1.5 text-xs text-white/50">

                            <GitFork size={12} />

                            {repo.forks_count}

                          </div>

                        </div>

                      </a>

                    )
                  )}

                </div>

              ) : (

                <div className="flex-1 flex items-center justify-center text-center">

                  <div>

                    <Github
                      size={36}
                      className="mx-auto mb-3 text-white/20"
                    />

                    <p className="text-white/40 text-sm">
                      No public repositories found yet.
                    </p>

                    <a
                      href="https://github.com/maheshmochi"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-4 text-[#c084fc] hover:text-white transition-colors text-sm"
                    >
                      View GitHub Profile →
                    </a>

                  </div>

                </div>

              )}

            </motion.div>

          </div>

        )}

      </div>
    </section>
  );
}