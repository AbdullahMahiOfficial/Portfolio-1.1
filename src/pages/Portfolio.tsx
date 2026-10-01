  import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import Navigation from '@/components/Navigation';
import AnimatedProgressBar from '@/components/AnimatedProgressBar';
import CircularProgress from '@/components/CircularProgress';
import CertificationDialog from '@/components/CertificationDialog';
import { Card, CardContent } from '@/components/ui/card';
import ProjectDialog  from '@/components/ui/ProjectDialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import { Download, Mail, MapPin, Phone, Globe, Award, Briefcase, GraduationCap, Calendar, Building2, Linkedin, Github, Facebook } from 'lucide-react';

const Portfolio = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  
  const statsVisible = useIntersectionObserver(statsRef);
  const skillsVisible = useIntersectionObserver(skillsRef);
  const languagesVisible = useIntersectionObserver(languagesRef);

  const experienceCount = useAnimatedCounter(7, 2000, statsVisible);
  const certificationsCount = useAnimatedCounter(50, 2000, statsVisible);
  const clientsCount = useAnimatedCounter(100, 2000, statsVisible);
  
  const getColorByPercentage = (percentage: number): string => {
  if (percentage >= 90) return '#4CAF50';       // 🟩 Green
  if (percentage >= 80) return '#FF9800';       // 🟧 Orange
  if (percentage >= 70) return '#FFEB3B';       // 🟨 Yellow
  if (percentage >= 60) return '#2196F3';       // 🟦 Blue
  if (percentage >= 50) return '#9C27B0';       // 🟪 Purple
  return '#000000';                             // Default fallback
};


  // Technical Skills Data - 50+ skills from work experience
  const technicalSkills = [
    { name: 'Microsoft Azure', percentage: 90, color: 'high' as const },
    { name: 'Amazon Web Services (AWS)', percentage: 75, color: 'medium-high' as const },
    { name: 'Huawei Cloud', percentage: 80, color: 'medium-high' as const },
    { name: 'Linux System Administration', percentage: 80, color: 'low-medium' as const },
    { name: 'Windows Server', percentage: 90, color: 'low' as const },
    { name: 'Docker', percentage: 90, color: 'high' as const },
    { name: 'Kubernetes', percentage: 90, color: 'high' as const },
    { name: 'Jenkins', percentage: 75, color: 'high' as const },
    { name: 'CI/CD Pipelines', percentage: 80, color: 'high' as const },
    { name: 'Terraform', percentage: 60, color: 'medium' as const },
    { name: 'Ansible', percentage: 60, color: 'medium' as const },
    { name: 'DevOps Tools', percentage: 75, color: 'high' as const },
    { name: 'Configuration Management', percentage: 85, color: 'high' as const },
    // { name: 'Continuous Integration (CI)', percentage: 90, color: 'high' as const },
    // { name: 'Continuous Delivery (CD)', percentage: 90, color: 'high' as const },
    { name: 'Network Security', percentage: 85, color: 'high' as const },
    { name: 'System Configuration', percentage: 90, color: 'high' as const },
    { name: 'IT Infrastructure Services', percentage: 85, color: 'high' as const },
    { name: 'Troubleshooting', percentage: 100, color: 'high' as const },
    { name: 'Problem-Solving', percentage: 100, color: 'high' as const },
    { name: 'Communication', percentage: 100, color: 'high' as const },
    { name: 'Microsoft 365', percentage: 100, color: 'high' as const },
    // { name: 'Microsoft Intune', percentage: 95, color: 'high' as const },
    { name: 'GitHub Enterprise Server', percentage: 90, color: 'high' as const },
    { name: 'VPN Configuration', percentage: 90, color: 'high' as const },
    // { name: 'Site-to-Site VPN', percentage: 90, color: 'high' as const },
    // { name: 'Point-to-Site VPN', percentage: 90, color: 'high' as const },
    { name: 'Azure Site Recovery', percentage: 85, color: 'high' as const },
    // { name: 'Disaster Recovery', percentage: 90, color: 'high' as const },
    // { name: 'Virtual Machine Migration', percentage: 90, color: 'high' as const },
    // { name: 'Database Migration', percentage: 85, color: 'high' as const },
    // { name: 'Hyper-V', percentage: 85, color: 'high' as const },
    // { name: 'VMware', percentage: 60, color: 'medium' as const },
    // { name: 'Nested Virtualization', percentage: 80, color: 'medium' as const },
    { name: 'Cloud Architecture', percentage: 90, color: 'high' as const },
    { name: 'Cloud Migration', percentage: 90, color: 'high' as const },
    { name: 'Security Monitoring', percentage: 85, color: 'low' as const },
    // { name: 'Threat Management', percentage: 85, color: 'high' as const },
    // { name: 'Customer Relationship Management', percentage: 90, color: 'high' as const },
    { name: 'Project Management', percentage: 100, color: 'high' as const },
    { name: 'Team Leadership', percentage: 100, color: 'high' as const },
    // { name: 'Technical Support', percentage: 95, color: 'high' as const },
    // { name: 'Hardware Installation', percentage: 90, color: 'high' as const },
    { name: 'Software Configuration', percentage: 70, color: 'high' as const },
    // { name: 'OS Installation', percentage: 95, color: 'high' as const },
    // { name: 'Hardware Troubleshooting', percentage: 95, color: 'high' as const },
    // { name: 'IT Help Desk', percentage: 90, color: 'high' as const },
    // { name: 'Cross-functional Collaboration', percentage: 90, color: 'high' as const },
    // { name: 'Time Management', percentage: 90, color: 'high' as const },
    // { name: 'Planning & Coordination', percentage: 90, color: 'high' as const },
    // { name: 'Strategic Planning', percentage: 85, color: 'high' as const },
    { name: 'Solution Architecture', percentage: 95, color: 'high' as const },
    { name: 'Cloud Security', percentage: 90, color: 'high' as const },
    { name: 'Automation', percentage: 75, color: 'high' as const },
    { name: 'Monitoring & Alerting', percentage: 85, color: 'high' as const },
    { name: 'Performance Optimization', percentage: 95, color: 'high' as const },
    // { name: 'Disaster Recovery Planning', percentage: 85, color: 'high' as const },
    { name: 'Backup Solutions', percentage: 90, color: 'high' as const },
    { name: 'Cloud Cost Optimization', percentage: 100, color: 'medium' as const },
    // { name: 'Vendor Management', percentage: 80, color: 'medium' as const },
    // { name: 'Documentation', percentage: 85, color: 'high' as const },
  ];

  // Language Skills Data
  const languageSkills = [
    { name: 'Bengali', percentage: 100 },
    { name: 'English', percentage: 90 },
    { name: 'Hindi', percentage: 50 },
    // { name: 'Urdu', percentage: 50 },
    
  ];

  // 40 Certification badges
  // Change the content of "badge" tag of each entry. with <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/s1.jpeg" alt="CKA badge" className="w-full h-full object-cover" /></div>

  // upload all the certifiacate images in badges folder and replace src="/badges/certificate-img.webp" for each entry

  const certifications= [
    // { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    // certificateImage: "/badges/test-image.jpg",
    // isPotrait : false
    // },
    
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/CKA.webp",
    isPotrait : false
    },
    
    // { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/2-RHCE.webp" alt="RHCE badge" className="object-contain w-full h-full" /></div>,
    // certificateImage: "/badges/2-RHCE.webp",
    // isPotrait : false
    // },
    
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3-AZ-305.webp" alt="AZ 305 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/AZ-305.webp",
    isPotrait : false
    },
    
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4-AZ-400.webp" alt="AZ 400 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/AZ-400.webp",
    isPotrait : false
    },
    
    { badge: <div className="w-[210px] h-[210px] rounded-lg flex items-center justify-center"><img src="/badges/5-MS-102.webp" alt="MS 102 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/MS-102.webp",
    isPotrait : false
    },
    
    { badge: <div className="w-[190px] h-[190px] rounded-lg flex items-center justify-center"><img src="/badges/6-SC-100.webp" alt="PL 600 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/6-SC-100.webp",
    isPotrait : false
    },
    
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/6-PL-600.webp" alt="PL 600 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/PL-600.webp",
    isPotrait : false
    },
    
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/7-RHCSA.webp" alt="RHCSA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/RHCSA.webp",
    isPotrait : false
    },
        
    // { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/7-AZ-800.webp" alt="AZ 104 badge" className="w-full h-full object-cover" /></div>,
    // certificateImage: "/badges/7-AZ-800.webp",
    // isPotrait : false
    // },

    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/GH-200.webp" alt="GH-200 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/GH-200.webp",
    isPotrait : false
    },

  
    { badge: <div className="w-[210px] h-[210px] rounded-lg flex items-center justify-center"><img src="/badges/8-AZ-104.webp" alt="AZ 104 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/AZ-104.webp",
    isPotrait : false
    },

    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/9-SC-200.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/SC-200.webp",
    isPotrait : true
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/10-MS-700.webp" alt="MS 700 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/MS-700.webp",
    isPotrait : false
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/11-PL-400.webp" alt="PL 400 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/PL-400.webp",
    isPotrait : false
    },
        
    // { badge: <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center"><img src="/badges/12-MTCNA.webp" alt="MTCNA badge" className="w-full h-full object-cover" /></div>,
    // certificateImage: "/badges/MTCNA.webp",
    // isPotrait : false
    // },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center"><img src="/badges/12-MTCNA.webp" alt="MTCNA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/MTCNA.webp",
    isPotrait : true
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/13-AZ-900.webp" alt="AZ 900 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/AZ-900.webp",
    isPotrait : false
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/14-AI-900.webp" alt="AI 900 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/AI-900.webp",
    isPotrait : false
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/15-SC-900.webp" alt="SC 900 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/SC-900.webp",
    isPotrait : false
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/16-DP-900.webp" alt="DP 900 badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/DP-900.webp",
    isPotrait : false
    },
        
    // { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/DP-900.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    // certificateImage: "/badges/DP-900.webp",
    // isPotrait : false
    // },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/2.0-DevSecOps.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/2.0-DevSecOps.webp",
    isPotrait : false
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/2.1-manage.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/2.1-manage.webp",
    isPotrait : false
    },
               
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/2.2-CKAD.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/2.2-CKAD.webp",
    isPotrait : false
    },
        
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/2.3-CKS.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/2.3-CKS.webp",
    isPotrait : false
    },

    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3.1-Google.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/1-Google.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3.2-Google.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/2-Google.webp",
    isPotrait : false
    },

    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3.3-Linux.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/3-Linux.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3.4-Certified.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/3.4-Certified.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3.5-Learning.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/3.5-Learning.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3.6-Computer.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/3.6-Computer.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/3.7-Cloud-Native.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/3.7-Cloud-Native.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.1-AKS.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.1-AKS.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.2-AAC.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.2-AAC.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.3-ABS.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.3-ABS.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.4-KCNA.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.4-KCNA.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.5-Jenkins.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.5-Jenkins.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.6-ArgoCD.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.6-ArgoCD.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.7-FluxCD.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.7-FluxCD.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/4.8-Istio.webp" alt="CKA badge" className="object-contain w-full h-full" /></div>,
    certificateImage: "/badges/4.8-Istio.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/5.1-CCNA Enterprise.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/1-CCNA Enterprise.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/5.2-CCNA Switching.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/2-CCNA Switching.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/5.3-introduction.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/3-introduction.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/5.4-cybersecurity.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/4-cybersecurity.webp",
    isPotrait : false
    },
    { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/5.5-networking.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    certificateImage: "/badges/5-networking.webp",
    isPotrait : false
    },

    // { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/5.6-networking.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    // certificateImage: "/badges/5.6-networking.webp",
    // isPotrait : false
    // },

    // { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    // certificateImage: "/badges/1-CKA.webp",
    // isPotrait : false
    // },
    // { badge: <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"><img src="/badges/1-CKA.webp" alt="CKA badge" className="w-full h-full object-cover" /></div>,
    // certificateImage: "/badges/1-CKA.webp",
    // isPotrait : false
    // },


    
    
   
  ];

  // Portfolio projects - 12 total, 3 columns
  const portfolioProjects = [
    // { 
    //   title: "E-commerce Platform", 
    //   category: "E-commerce", 
    //   description: "Full-stack e-commerce solution with payment integration", 
    //   icon: "/c_logo/1-CKA.webp",
    //   details: "Built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment processing, and admin dashboard."
    // },

    { 
      title: "Email Infrastructure Modernization", 
      category: "Email Migration", 
      description: "Email Infrastructure Modernization: Zimbra to Microsoft 365 Migration", 
      icon: "/c_logo/BBF Logo.webp",
      details: `Successfully led the Email Infrastructure Modernization project for Bangladesh Brand Forum, conducted in 2025. The initiative involved migrating the entire organization’s email system from Zimbra to Microsoft 365, resulting in enhanced security, reliability, and user experience with zero data loss and minimal disruption.

Key Services Deployed:
- Exchange Online: Migrated all user mailboxes, including emails, contacts, and calendars, ensuring seamless continuity.
- Azure Active Directory (AAD): Integrated for secure identity and access management across Microsoft 365 services.
- Microsoft 365 Security & Compliance Center: Configured policies for data loss prevention (DLP), email encryption, and threat protection.
- Outlook Mobile & Desktop Clients: Rolled out with pre-configured profiles for a smooth user transition.
- Microsoft Teams & OneDrive Enablement: Introduced collaboration tools to complement the email migration and boost productivity.
- PowerShell Scripting: Utilized for bulk mailbox migration, license assignment, and post-migration validation.
- User Training & Support: Conducted onboarding sessions and provided documentation to ensure user readiness and adoption.`
    },

    { 
      title: "Kubernetes Autoscaling System", 
      category: "Platform & DevOps", 
      description: "Implementation and Optimization of Kubernetes Autoscaling for Microservices Architecture", 
      icon: "/c_logo/IIT.webp",
      details: `Successfully designed and implemented a scalable Kubernetes-based microservices architecture as part of a university project (April–May 2025). The project focused on optimizing resource utilization, performance, and reliability through dynamic autoscaling strategies.

Key Services Deployed:
- Kubernetes Cluster Setup: Deployed using Minikube and kubectl for local development and testing.
- Horizontal Pod Autoscaler (HPA): Configured to scale microservices based on CPU and memory usage.
- Custom Metrics Integration: Enabled Metrics Server for advanced autoscaling triggers.
- Load Testing & Optimization: Conducted performance tests using K6 to fine-tune scaling thresholds.
- CI/CD Pipeline: Integrated GitHub Actions for automated deployment and updates.
- Monitoring & Logging: Implemented Grafana for real-time observability.
- Documentation & Demo: Delivered comprehensive technical documentation and a live demo for evaluation.`
    },

    // { 
    //   title: "Corporate Website", 
    //   category: "Corporate", 
    //   description: "Professional business website with CMS", 
    //   icon: "/c_logo/1-CKA.webp",
    //   details: `"Responsive corporate website with content management system, contact forms, and SEO optimization."`
    // },

    { 
      title: "GitHub Enterprise Server Deployment", 
      category: "Cloud & Infrastructure", 
      description: "Secure SCM Infrastructure — GitHub Enterprise Server Deployment", 
      icon: "/c_logo/Prime_Bank.webp",
      details: `Successfully led the deployment of GitHub Enterprise Server for Prime Bank PLC in January 2025. This project significantly enhanced source code security, development workflow control, and compliance with internal IT policies.

Key Services Deployed:
- GitHub Enterprise Server: Installed in a secure, on-premises environment with no public exposure.
- Identity and access management: Integrated with Entra ID for secure authentication and role-based access.
- CI/CD pipeline enablement: Configured GitHub Actions for automated internal deployments.
- Security hardening: Applied firewall rules, SSL encryption, and audit logging.
- Backup and disaster recovery: Implemented automated backup and recovery protocols.
- User Training and UAT: Ensured smooth adoption and validated system functionality.`
    },
    
    { 
      title: "Microsoft Cloud Deployment", 
      category: "Microsoft Services", 
      description: "End-to-End User Deployment of Microsoft Cloud Services", 
      icon: "/c_logo/BSEZ.webp",
      details: `Successfully led the end-user deployment of Microsoft Cloud Services for Bangladesh SEZ from 9 March 2025 to 10 March 2025. This project improved endpoint security, identity management, and user productivity across the organization.

Key Services Deployed:
- Windows OS installation: Deployed and configured across all user devices.
- Windows license activation: Ensured compliance through proper activation.
- Microsoft Intune enrollment: Enabled centralized device management and policy enforcement.
- Entra ID integration: Joined devices to Azure AD for secure identity and access control.
- Conditional access: Applied policies to secure remote access and enforce compliance.
- Microsoft 365 configuration: Set up Outlook, Teams, and OneDrive for collaboration.
- User Training and UAT: Delivered onboarding sessions and validated system functionality.`
    },

    { 
      title: "Enterprise Deployment", 
      category: "Microsoft Services", 
      description: "Secure Deployment of Microsoft Enterprise Services", 
      icon: "/c_logo/Prime_Bank.webp",
      details: `Successfully led the deployment of Microsoft services for Prime Bank PLC, conducted from November 2024 to December 2024. The result is improved performance, scalability, and reliability.

Key Services Deployed:
- Windows Server 2022 Datacenter licenses: Deployed to provide robust server infrastructure.
- SQL Server 2022 Standard Core (SQL DB) licenses: Implemented for efficient database management.
- Microsoft 365 Apps for Enterprise: Configured for enhanced productivity and collaboration.
- Microsoft 365 Business Standard Licenses: Set up to support business operations.
- User Deployment Training Onsite: Conducted to ensure smooth user adoption.
- User Acceptance Testing (UAT): Managed to validate system functionality.
- Technical Query Resolution: Addressed all types of technical issues related to Windows Server and SQL Server.
- End User Technical Support: Provided comprehensive support to ensure user satisfaction.`
    },

    { 
      title: "Microsoft Services Deployment", 
      category: "Microsoft Services", 
      description: "Enterprise Endpoint Security and Compliance Deployment using Microsoft Intune & Defender", 
      icon: "/c_logo/BSEZ.webp",
      details: `Successfully led the deployment of Microsoft services for Bangladesh SEZ from December 2024 to January 2025. This project significantly enhanced performance, scalability, and reliability.

Key Services Deployed:
- Microsoft 365 Business Premium: Boosted productivity and security.
- Identity and access management: Ensured secure access to applications.
- Advanced cyberthreat protection: Guarded against viruses and phishing.
- Device and endpoint protection: Safeguarded all devices.
- Data encryption: Secured sensitive business data.
- Cloud storage and collaboration: Set up OneDrive, Teams, and SharePoint.
- Microsoft Intune Policy Configuration: Managed and secured devices.
- Conditional access: Ensured secure remote access.
- Endpoint Detection and Response (EDR): Monitored and responded to threats.
- User Training and UAT: Ensured smooth adoption and validated system functionality.`
    },

    { 
      title: "Utkorsho Platform Implementation", 
      category: "Platform & DevOps", 
      description: "Utkorsho Platform Implementation and Go-Live Project", 
      icon: "/c_logo/Utk.webp",
      details: `Successfully led the deployment of the Utkorsho platform, conducted from January 2024 to February 2024. The platform was commercially launched on February 5, 2024, resulting in improved performance, scalability, and reliability.

Key Services Deployed:
- Cloud Container Engine: Implemented to manage and orchestrate containerized applications.
- Elastic Volume Service: Deployed multiple instances to ensure efficient data storage and management.
- Elastic Cloud Server: Provided robust and scalable computing resources.
- NAT Gateway: Enabled secure and efficient network address translation.
- Application Operations Management: Integrated for streamlined application monitoring and management.
- Elastic Load Balance: Ensured high availability and reliability of applications.
- Relational Database Service: Deployed high-availability database solutions for optimal data management.
- Virtual Private Cloud: Enhanced network security and isolation through advanced VPC configurations.`
    },

    { 
      title: "Prohori GPS Tracker Migration", 
      category: "Cloud Migration", 
      description: "Prohori GPS Tracking System Digital Transformation Initiative", 
      icon: "/c_logo/Prohori.webp",
      details: `Successfully led the full migration of the Prohori GPS Tracker platform from AWS to Huawei Cloud, spanning from December 2023 to January 2024. The platform was commercially launched on January 18, 2024, ensuring a seamless transition and enhanced performance.

Key Services Migrated:
- Elastic Volume Service: Ensured seamless data storage and management.
- Elastic Cloud Server: Provided robust and scalable computing resources.
- Virtual Private Cloud: Enhanced network security and isolation.
- Nginx Web Server: Improved web server performance and reliability.
- Database Server: Optimized data management and retrieval processes.`
    },

    { 
      title: "TechShopBD Migration", 
      category: "Cloud Migration", 
      description: "Migration of TechShop Platform to Scalable Cloud Architecture", 
      icon: "/c_logo/TechShop.webp",
      details: `Led the comprehensive migration of TechShopBd.com’s platform from AWS to Huawei Cloud, executed from November 2023 to December 2023. The platform was successfully launched commercially on December 22, 2023, resulting in enhanced performance, scalability, and reliability.

Key Services Migrated:
- Elastic Volume Service: Ensured seamless data storage and management.
- Elastic Cloud Server: Provided robust and scalable computing resources.
- Object Storage Service: Facilitated efficient and secure data storage.
- Virtual Private Cloud: Enhanced network security and isolation.
- Web Server: Improved website performance and user experience.
- Database Server: Optimized data management and retrieval processes.`
    },

    { 
      title: "Rokomari Cloud Migration ", 
      category: "Cloud Migration", 
      description: "Rokomari Cloud Migration and Performance Enhancement Project", 
      icon: "/c_logo/Rokomari.webp",
      details: `Successfully led the full migration of Rokomari.com’s platform from AWS to Huawei Cloud, conducted from August 2023 to October 2023. The platform was commercially launched on October 6, 2023, resulting in improved performance, scalability, and reliability.

Key Services Migrated:
- Elastic Cloud Server: Migrated multiple instances to ensure robust and scalable computing resources.
- Elastic Volume Service: Transitioned storage solutions to enhance data management and accessibility.
- Relational Database Service: Implemented high-availability database solutions for improved data integrity and performance.
- Simple Message Notification: Integrated notification services to streamline communication processes.
- Web Server: Improved website performance and user experience.
- Database Server: Optimized data management and retrieval processes.
- Virtual Private Cloud: Enhanced network security and isolation through advanced VPC configurations. `
    },

    // { 
    //   title: "Corporate Website", 
    //   category: "Corporate", 
    //   description: "Professional business website with CMS", 
    //   icon: "/c_logo/1-CKA.webp",
    //   details: `"Responsive corporate website with content management system, contact forms, and SEO optimization."`
    // },


    { 
      title: "Azure IaaS Infrastructure Deployment", 
      category: "Cloud Infrastructure", 
      description: "Windows Server Deployment and Monitoring in Azure", 
      icon: "/c_logo/Syn.webp",
      details: `Successfully led the Windows Server Deployment and Monitoring in Azure project for Syngenta Bangladesh Limited, conducted in 2023. The project focused on deploying Windows Server instances in Azure with robust monitoring and security configurations to ensure continuous availability and performance.

Key Services Deployed:
- Azure Virtual Machines (Windows Server): Provisioned and configured for scalable and secure server hosting.
- Azure Monitor: Enabled for real-time performance tracking, alerting, and diagnostics.
- Network Security Groups (NSGs): Configured to enforce inbound and outbound traffic rules for enhanced protection.
- Azure Backup: Set up for automated backup and recovery of server data.
- Update Management: Enabled to ensure timely patching and compliance with security standards.
- Role-Based Access Control (RBAC): Applied to manage secure access to server resources.`
    },
    // { 
    //   title: "E-commerce Platform", 
    //   category: "E-commerce", 
    //   description: "Full-stack e-commerce solution with payment integration", 
    //   icon: "/c_logo/1-CKA.webp",
    //   details: `"Built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment processing, and admin dashboard."`
    // },
    { 
      title: "Azure PaaS Web Solution Deployment", 
      category: "DevOps & PaaS", 
      description: "Infrastructure Configuration, Maintenance, and Monitoring", 
      icon: "/c_logo/CE.webp",
      details: `Successfully led the Infrastructure Configuration, Maintenance, and Monitoring project for Computer Edge Limited, conducted in 2023. The project focused on deploying and optimizing Azure-based services to ensure high performance, security, and continuous availability of web applications.

Key Services Deployed:
- Azure Web App Services: Configured to host scalable and secure web applications with built-in load balancing and auto-scaling.
- Application Insights: Integrated for real-time performance monitoring, diagnostics, and usage analytics.
- Azure Monitor: Enabled to track metrics, logs, and alerts for proactive infrastructure management.
- Backup & Recovery Solutions: Configured for data protection and business continuity.
- Role-Based Access Control (RBAC): Applied to enforce secure and granular access to resources.`
    },



  ];

  // Experience data with 150x150 logos
  // const experiences = [
// Add this function at the top of your file
const getEmploymentPeriod = (startDateStr) => {
  const startDate = new Date(startDateStr);
  const now = new Date();

  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();

  const totalMonths = years * 12 + months;
  const yearsPart = Math.floor(totalMonths / 12);
  const monthsPart = totalMonths % 12;

  let periodStr = '';
  if (yearsPart > 0) periodStr += `${yearsPart} Year${yearsPart > 1 ? 's' : ''}`;
  if (monthsPart > 0) {
    if (periodStr) periodStr += ' ';
    periodStr += `${monthsPart} Month${monthsPart > 1 ? 's' : ''}`;
  }

  return periodStr || 'Less than a month';
};

// Define start date and auto-calculated period
const startDate = 'September 1, 2024';
const period = `October 2024 - Present (${getEmploymentPeriod(startDate)})`;

// Replace your experiences array with this
const experiences = [
  {
    title: "Solution Architect - Enterprise Business",
    company: "ADN Technologies Limited",
    period: period, // ✅ Auto-calculated period
    description: `Lead end‑to‑end solution architecture for cloud and hybrid infrastructures on Azure and AWS supporting enterprise and banking environments.
Design and standardize CI/CD automation using GitHub Actions, enabling DevOps, GitOps, and continuous delivery practices.
Drive cloud transformation initiatives including migration, optimization, hardening, and high‑availability architecture.
Act as technical authority for enterprise programs, ensuring compliance with security, governance, and regulatory frameworks.
Implement SCM governance and identity integration, including GitHub Enterprise Server, Entra ID, and Active Directory.
Define DevOps‑ready and cloud‑native architecture patterns to improve operational efficiency and release predictability.
Collaborate with cross‑functional teams and vendors to align architecture with digital transformation roadmaps.`,
    logo: (
      <div className="w-[120px] h-[120px] rounded-lg flex items-center justify-center">
        <img src="c_logo/ADN.webp" alt="ADN Logo" className="max-w-full max-h-full object-contain rounded-lg" />
      </div>
    )
  },

  // {
  //   title: "Solution Architect - Enterprise Business",
  //   company: "ADN Technologies Limited",
  //   period: "October 2024 - Present (11 Months)",
  //   description: `Architecting robust cloud solutions in Azure and AWS to meet diverse business needs.
  //   Managing and optimizing for seamless performance and reliability.
  //   Resolving complex technical issues in Azure, AWS, Microsoft 365, and Intune.
  //   Leading successful server migrations for smooth transitions.
  //   Securing GitHub Enterprise Server within private networks to protect code repositories.
  //   Streamlining deployments using Docker, Kubernetes, and CI/CD pipelines for faster delivery cycles.
  //   Monitoring security threats and managing activities within the Microsoft Partner Center.
  //   Managing customer relationships to ensure satisfaction and success.
  //   Collaborating with internal IT teams to monitor and address security threats, managing full group IT operations.`,
  //   // logo: (
  //   //   <div className="w-[150px] h-[150px] rounded-lg flex items-center justify-center">
  //   //     <img src="c_logo/ADN.webp" alt="ADN Logo" className="w-full h-full object-cover rounded-lg" />
  //   //   </div>
  //   // )
  //       logo: (
  //   <div className="w-[120px] h-[120px] rounded-lg flex items-start justify-center">
  //     <img
  //       src="/c_logo/ADN.webp"
  //       alt="ADN Logo"
  //       className="w-full h-full object-contain rounded-lg"
  //     />
  //   </div>
  //       )
  //   },

  {
    title: "System Engineer - Cloud Infrastructure",
    company: "Corporate Projukti Limited",
    period: "Jan 2023 - Sep 2024 (1 Year 9 Months)",
    description: `Designed and operated high‑availability cloud platforms on Azure and Huawei Cloud for enterprise workloads.
Led cloud migration projects from on‑premises and AWS environments to Azure and Huawei Cloud.
Implemented disaster recovery and business continuity solutions using Azure Site Recovery and HA patterns.
Administered Linux systems, storage, networking, and virtualization to ensure platform reliability.
Managed monitoring, alerting, and incident response to meet strict SLA and MOU requirements.
Optimized cloud resource consumption and cost efficiency across hybrid cloud environments.
Supported architecture decisions through operational insights and performance analysis.`,
      logo: (
        <div className="w-[120px] h-[120px] rounded-lg flex items-center justify-center">
          <img src="/c_logo/CPL.webp" alt="CPL Logo" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )
    },

    {
      title: "Executive - Information Technology",
      company: "NASSA Group",
      period: "Jul 2018 - Jun 2020 (2 Years)",
      description: `Managed enterprise IT operations to ensure system availability and service continuity.
Supported server infrastructure, endpoints, and business‑critical applications at enterprise scale.
Coordinated external vendors and service providers to resolve high‑impact incidents.
Led OS deployment, system standardization, and hardware lifecycle management.
Monitored network performance and application health to prevent service degradation.
Supported IT governance, compliance, and infrastructure planning initiatives.
Resolved complex incidents and service requests within defined service‑level targets.`,
      // logo: (
      //   <div className="w-[120px] h-[120px] rounded-lg flex items-start justify-center bg-white p-2">
      //     <img src="/c_logo/NG.webp" alt="NASSA Group Logo" className="w-full h-full object-cover rounded-lg " />
      //   </div>
      // )
      logo: (
  <div className="w-[120px] h-[120px] rounded-lg flex items-start justify-center"> 
    <img
      src="/c_logo/NG.webp"
      alt="NASSA Group Logo"
      className="max-w-full max-h-full object-contain rounded-lg"
    />
  </div>
)

    },

    {
      title: "Executive - Information Technology",
      company: "Micro Fibre Group",
      period: "May 2016 - Jun 2018 (2 Years 2 Months)",
      description: `Supported enterprise IT operations and infrastructure services to maintain operational stability.
Installed and maintained operating systems, hardware, and network components.
Delivered cross‑department technical support to minimize downtime and improve productivity.
Managed OS provisioning and software deployment following standardized IT policies.
Improved infrastructure reliability through incident management and preventive maintenance.
Assisted in LAN configuration, monitoring, and troubleshooting.
Documented issues and resolutions to support knowledge management and process improvement.`,
      logo: (
        <div className="w-[120px] h-[120px] rounded-lg flex items-center justify-center">
          <img
            src="/c_logo/MFG.webp"
            alt="Micro Fibre Group Logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-40 pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-80 h-80 rounded-sm overflow-hidden flex-shrink-0 ">
              <img 
                src="/lovable-uploads/profile-photo.webp" 
                alt="Abdullah Al Mamun"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-primary mb-4">Abdullah Al Mamun</h1>
              <p className="text-xl text-cool-primary mb-6 font-semibold">
                {/* Solution Architect | Cloud Strategist | DevOps Innovator */}
                Solution Architect | Cloud • DevOps • Microsoft 365 | Hybrid Infrastructure
              </p>
              
              <div className="mb-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-4 text-justify">
                  I design and deliver secure, scalable, and high‑performance cloud solutions aligned with modern business needs. With hands‑on expertise across Azure, AWS, and Huawei Cloud, I help organizations modernize infrastructure, automate operations, strengthen security, and achieve operational excellence.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">My expertise includes:</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* LEFT COLUMN */}
                    <div>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          {/* Architecting cloud-native and hybrid environments */}
                          Cloud & Hybrid Architecture Design (Azure / AWS / Huawei Cloud)
                        </span>
                      </div>

                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          {/* Implementing DevOps pipelines using Kubernetes, Docker, and Jenkins */}
                          DevOps & CI/CD Automation (K8s, Docker, Jenkins, GitHub Actions)
                        </span>
                      </div>

                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          {/* Managing enterprise-grade Linux systems */}
                          Kubernetes Administration & Secure Delivery (CKA/DevSecOps)
                        </span>
                      </div>

                      {/* ✅ NEW #7 (add here - end of left column) */}
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          {/* Deploying endpoint security and compliance using Intune & Microsoft Defender */}
                          Microsoft 365, Entra ID & Identity Security (Zero Trust approach)
                        </span>
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div>
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          {/* Enhancing collaboration and security through Microsoft 365 */}
                          Enterprise Endpoint Security & Compliance (Intune + Defender)
                        </span>
                      </div>

                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          Leading seamless cloud migrations and automation initiatives
                          {/* Windows Server & Infrastructure Services (Hybrid workloads, migration readiness) */}
                        </span>
                      </div>

                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          {/* Proven ability to align technical solutions with business goals, timelines, and budgets */}
                          Monitoring, Backup & Disaster Recovery (HA + business continuity)
                        </span>
                      </div>

                      {/* ✅ NEW #8 (add here - end of right column) */}
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="w-2 h-2 bg-cool-primary rounded-full mt-2"></span>
                        <span className="text-sm text-muted-foreground">
                          {/* Designing monitoring, backup, and disaster recovery strategies for high availability */}
                          {/* Stakeholder Communication & Delivery Ownership (scope, timeline, budget) */}
                          Align technical solutions with business goals, timelines, and budgets
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 text-justify">
                  Certified in Azure Solutions Architecture, DevOps Engineering, Microsoft 365 Administration, and Kubernetes (CKA), I bring a strategic mindset with hands‑on technical leadership—ensuring every solution is secure, scalable, reliable, and aligned with business goals.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Nick Name:</p>
                  <p className="font-medium text-primary">Abdullah Mahi</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email:</p>
                  <p className="font-medium text-primary">Abdullah.Cloud.Dev@outlook.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Mobile:</p>
                  <p className="font-medium text-primary">+880 1687 032087</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address:</p>
                  <p className="font-medium text-primary">Dhaka, Bangladesh</p>
                </div>

                {/* <div>
                  <p className="text-sm text-muted-foreground">Date of Birth:</p>
                  <p className="font-medium text-primary">January 9th</p>
                </div>

                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Address:</p>
                  <p className="font-medium text-primary">Dhaka, Bangladesh</p>
                </div> */}
              </div>
              
              {/* Social Profiles */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="https://github.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://facebook.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="https://AbdullahMahiOfficial.com" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-cool-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => window.location.reload()}>
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-cool-primary mb-2">{experienceCount}</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => window.location.reload()}>
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-cool-accent mb-2">{certificationsCount}</div>
                <div className="text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => window.location.reload()}>
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-cool-secondary mb-2">{clientsCount}</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section - 4 columns, 40 total */}
      <section id="certifications" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
            {certifications.map((cert, index) => (

              <div key={index} className="w-[200px] h-[200px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <CertificationDialog
                  badge={cert.badge}
                  certificateImage={cert.certificateImage}
                  isPotrait = {cert.isPotrait}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Skills Section - Animated on click/visit */}
      
      <section id="skills" className="py-16 bg-cool-light" onClick={() => window.location.reload()}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills</h2>
  
            {/* Technical Skills */}
          <div ref={skillsRef} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <AnimatedProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  shouldAnimate={skillsVisible}
                  
                />
              ))}
            </div>
          </div>


          {/* Language Skills */}
          <div ref={languagesRef}>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Language Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {languageSkills.map((language, index) => (
                <CircularProgress
                  key={index}
                  percentage={language.percentage}
                  label={language.name}
                  shouldAnimate={languagesVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 border border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {exp.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-cool-primary mb-2">{exp.company}</h4>
                      <p className="text-muted-foreground mb-4">{exp.period}</p>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-cool-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Education</h2>
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex items-start space-x-6">
                <div className="w-[120px] h-[140px] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/c_logo/JU.webp" alt="JU ogo" className="w-full h-full object-contain rounded-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-primary mb-2">Jahangirnagar University</h3>
                  <h4 className="text-lg font-semibold text-cool-primary mb-2">Master of Science in Information Technology</h4>
                  <p className="text-muted-foreground mb-4">Institute of Information Technology</p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    The Master of Science in Information Technology (MSc in IT) is an advanced graduate program designed to build strong theoretical foundations and practical expertise in modern information technology. Offered by the Institute of Information Technology at Jahangirnagar University, the program emphasizes internationally aligned disciplines including software engineering and application development, data science and database systems, cloud computing and distributed systems, cybersecurity and information assurance, networking and communication technologies, artificial intelligence and machine learning, and IT project management with enterprise solutions.
                    <br />
                    Structured to meet the evolving needs of the global ICT industry, the program equips graduates with the capability to design, implement, and manage complex, scalable, and secure information systems, preparing them for senior technical and leadership roles in technology‑driven organizations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section - 3 columns, 12 total, clickable with details */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12">My Recent Works</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectDialog key={index} project={project} index={index} />
              // <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border border-border cursor-pointer" onClick={() => alert(project.details)}>
              //   <CardContent className="p-6">
              //     <div className="text-center">
              //       {/* <div className="text-4xl mb-4">{project.icon}</div> */}
              //       <div className="text-4xl mb-4">
              //         <img src={project.icon} alt={`${project.title} icon`} className="w-[100px] h-[100px] mx-auto" />
              //       </div>

              //       <h3 className="text-lg font-semibold mb-2 text-primary">{project.title}</h3>
              //       <Badge variant="secondary" className="mb-3 bg-cool-light text-cool-primary">{project.category}</Badge>
              //       <p className="text-sm text-muted-foreground">{project.description}</p>
              //     </div>
              //   </CardContent>
              // </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 bg-cool-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">My Resume</h2>
          
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 text-center">
              <div className="w-24 h-24 bg-cool-light rounded-lg flex items-center justify-center mx-auto mb-6">
                <Download className="w-12 h-12 text-cool-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Resume</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download my complete professional resume with detailed information about my experience, 
                skills, education, and certifications in cloud architecture and DevOps.
              </p>
              
              {/* <Button 
                className="bg-cool-primary hover:bg-cool-accent text-white px-8 py-3"
                onClick={() => window.open('https://drive.google.com/file/d/1jMhJz6fdqiSR8SREPa0dLN8CLviVW_WC/view?usp=sharing', )}
              >
                <Download className="w-4 h-4 mr-2" />
                Download my Resume
              </Button> */}
              
              <Button
                className="bg-cool-primary hover:bg-cool-accent text-white px-8 py-3"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/lovable-uploads/CV.pdf";
                  link.download = "K M Abdulla Al Mamun"; // You can rename the file here
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download my Resume
              </Button>

              <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">What's Included</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Professional Summary</li>
                    <li>• Work Experience</li>
                    <li>• Technical Skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Additional Info</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Certifications</li>
                    <li>• Education Details</li>
                    <li>• Project Portfolio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Contact Info</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Email & Phone</li>
                    <li>• LinkedIn Profile</li>
                    <li>• Location Details</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12">Let's Keep In Touch<br />I am very much looking forward to hearing from you</p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Address:</h4>
                  <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-accent rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Mobile:</h4>
                  <p className="text-muted-foreground">+880 1687 032087</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-secondary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email:</h4>
                  <p className="text-muted-foreground">Abdullah.Cloud.Dev@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cool-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Social Profiles:</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://linkedin.com/in/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://facebook.com/abdullahmahiofficial/" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://AbdullahMahiOfficial.com" target="_blank" rel="noopener noreferrer" className="text-cool-primary hover:text-cool-accent transition-colors">
                      <Globe className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cool-light rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Leave me a message</h3>
              <p className="text-muted-foreground mb-6">If you have any observations, I am ready to give you feedback. The quickest way to get in touch with me is to fill up the contact form.</p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="border-border" />
                  <Input placeholder="Your Email Address" className="border-border" />
                </div>
                <Input placeholder="Subject" className="border-border" />
                <Textarea placeholder="Your Message" rows={4} className="border-border" />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="not-robot" className="rounded" />
                  <label htmlFor="not-robot" className="text-sm text-muted-foreground">I'm not a robot</label>
                </div>
                <Button className="w-full bg-cool-primary hover:bg-cool-accent text-white">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-nav-primary text-nav-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block rounded-full backdrop-blur-sm">
            <p className="text-sm">Copyright © Abdullah Mahi Official. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;