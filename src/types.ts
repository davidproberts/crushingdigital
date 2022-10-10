interface Candidate {
  id: number
  created_at?: string
  blurb: string
  display_name: string
  gitsource?: string
  linkedin?: string
  rate: number
  candidate_skills?: Array<SkillsLink>
  candidate_verification?: Array<CandidateVerification>
  candidate_approval?: Array<CandidateApproval>
  timezone: number
  yoe: number
  user_id: string
  link_1?: string
  link_2?: string
  link_3?: string
  active?: boolean
  email: string | undefined
  allow_emails: boolean
  delete_me: boolean
}

interface CandidateVerification {
  candidate_id: number | null
  verified?: boolean
  verify_req: string | null
}

interface CandidateApproval {
  candidate_id: number | null
  approved?: boolean
}

interface Skill {
  id: number
  created_at?: string
  name: string
  active: boolean
}

interface SkillsLink {
  skills?: Skill
}

interface Job {
  id?: number
  created_at?: string
  company: string
  title: string
  blurb: string
  website?: string
  jobspec?: string
  rate: number
  skills_link?: Array<SkillsLink>
  timezone: number
  yoe: number
  verified?: boolean
  verify_req: boolean
  approved?: boolean
  user_id: string
  link_1?: string
  link_2?: string
  link_3?: string
  active?: boolean
}

interface CDEvent {
  id: number
  created_at?: string
  type: string
  descr: string
  author_id: string
  candidate_id: number
  note: string
}

interface ClickData {
  id?: number
  created_at?: string
  link_type: string
  candidate_id: number
  who_clicked?: string
}

export type { Candidate, Skill, Job, SkillsLink, CDEvent, CandidateVerification, CandidateApproval, ClickData }
