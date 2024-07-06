export interface Project {
    id: number
    title: string
    year: number
    image: string
    description: string
    technologies: string[]
    projectLink: string
    projectLinkActive: boolean
    githubLink: string
    publicGithubLink: boolean
}