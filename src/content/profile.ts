import type { Profile } from './types'

export const profile: Profile = {
  inputs: {
    name: 'Gayathri Thiyagarajan',
    role: 'Senior Engineering Leader',
    focus: 'Distributed systems, data platforms, and ML enablement',
    tagline:
      'Engineering leader with manager-of-managers responsibility, owning business-critical platforms at enterprise scale with a strong focus on reliability, security, governance, and operational excellence.',
    email: 'gaythu.rajan@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaythu-rajan' },
    ],
    about: {
      paragraphs: [
        'Leader with manager-of-managers responsibility, owning software, data, and ML enablement platforms at enterprise scale.',
        'I set and execute multi-year engineering strategies, with accountability for org design, location strategy, hiring, and restructures.',
      ],
      bullets: [
        'Platform and distributed systems ownership (AWS, Kafka, Kubernetes).',
        'Reliability, security, governance, and compliance at scale.',
        'Cost optimisation and capacity planning; executive communication and decision support.',
      ],
    },
    experience: [
      {
        company: 'Amazon',
        title: 'Senior Engineering Leader – AWS Services',
        period: '2022 — Present',
        highlights: [
          'Led 30+ engineers across multiple teams with dedicated charters.',
          'Owned business-critical AWS services including Managed Service for Kafka (MSK), AWS Config, and AWS Resource Explorer.',
          'Defined 2–3 year technical strategies, team charters, and ownership boundaries; made resourcing and prioritisation decisions across competing initiatives.',
          'Accountable for maintaining 99.9% service availability for large-scale distributed systems.',
          'Led security and compliance initiatives across 500K+ hosts.',
          'Delivered ~$7M in infrastructure cost savings through capacity planning and optimisation.',
          'Authored and presented strategy documents (PR/FAQs) at VP level; launched 4 external product features in 3 years.',
          'Built, restructured, and scaled engineering teams; developed managers and senior engineers with succession planning and promotion support.',
        ],
      },
      {
        company: 'Expedia Group',
        title: 'Senior Engineering Leader – Data & Platform Engineering',
        period: '2018 — 2022',
        highlights: [
          'Led platform teams in Data & AI (streaming, ingestion, observability, ML enablement).',
          'Led Kafka-based streaming platforms handling billions of messages daily.',
          'Built and scaled a Data Quality platform from scratch; owned platforms monitoring data quality, feature drift, and model drift at scale.',
          'Led ~20 engineers with 2 managers delivering event-driven data capture platforms; standardised platform architecture for reuse across 10+ brands.',
          'Owned platform vision, roadmap, and delivery; managed managers and senior engineers; owned hiring and early-career programmes.',
        ],
      },
      {
        company: 'Capgemini',
        title: 'Senior Engineering Lead',
        period: '2011 — 2018',
        highlights: [
          'Senior leader within the Application Development & Integration practice.',
          'Led and mentored engineers across multiple delivery teams; recognised subject-matter expert in domain-driven design and distributed systems.',
          'Supported recruitment, early talent, and returner programmes; selected for Capgemini Future Leaders Programme.',
        ],
      },
    ],
    projects: [
      {
        name: 'AWS services leadership (MSK, AWS Config, Resource Explorer)',
        description:
          'Led globally distributed teams owning business-critical AWS services; accountable for strategy, architecture, execution, and operational excellence.',
        tags: ['AWS', 'Kafka', 'Reliability', 'Security'],
        links: [],
      },
      {
        name: 'Data & ML enablement platforms (Expedia Group)',
        description:
          'Owned streaming, ingestion, observability, and ML enablement platforms; built data quality and monitoring capabilities at scale.',
        tags: ['Kafka', 'Data Platforms', 'ML Enablement'],
        links: [],
      },
    ],
  },
  derived: {
    // generatedSummary: "Optional: later filled by LLM generation"
  },
}

