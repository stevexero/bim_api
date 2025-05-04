'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/signup') {
    return null;
  }

  return (
    <footer className='bg-white border-t border-gray-200 text-xs'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          {/* Company and Socials */}
          <Link href='/'>BIMSystems</Link>
          <div className='flex space-x-4'>
            <Link href='/'>Twitter</Link>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Instagram</Link>
            <Link href='/'>LinkedIn</Link>
          </div>
        </div>
        <div className='flex flex-col'>
          {/* Products */}
          <p>Products</p>
          <Link href='/'>
            Core Inventory Management (stock levels, SKUs, variants)
          </Link>
          <Link href='/'>Receiving & Put-Away Module</Link>
          <Link href='/'>Picking & Packing Workflows</Link>
          <Link href='/'>
            Shipping Integration (labels, carriers, tracking)
          </Link>
          <Link href='/'>Multi-Location & Bin Tracking</Link>
          <Link href='/'>Analytics & Reporting Dashboard</Link>
          <Link href='/'>RESTful API & Webhooks</Link>
          <Link href='/'>Mobile-Friendly UI</Link>
          <Link href='/'>Role-Based Access Control</Link>
          <Link href='/'>Multi-Tenant SaaS Platform with Subdomains</Link>

          {/* Services */}
          <p>Services</p>
          <Link href='/'>Onboarding & Data Migration</Link>
          <Link href='/'>
            Custom Integrations (ERP, Shopify, QuickBooks, etc.)
          </Link>
          <Link href='/'>Implementation & Configuration</Link>
          <Link href='/'>Training & Workshops</Link>
          <Link href='/'>Dedicated & SLA-Backed Support</Link>
          <Link href='/'>White-Glove Deployment (hosted or self-hosted)</Link>
          <Link href='/'>Business Process Consulting</Link>
          <Link href='/'>API Key Management & Security Audits</Link>
          <Link href='/'>Feature Customization & Plugin Development</Link>
        </div>

        <div className='flex flex-col'>
          {/* Support and Resources */}
          <p>Resources</p>
          <Link href='/'>Support</Link>
          <Link href='/'>System Status</Link>
          <Link href='/'>Become a Partner</Link>
          <Link href='/'>Integrations</Link>
          <Link href='/'>Brand Assets / Logos</Link>
          <Link href='/'>Security and Compliance</Link>
          <Link href='/'>DPA</Link>
          <Link href='/'>SOC2</Link>
          <Link href='/'>HIPAA</Link>
        </div>
        <div className='flex flex-col'>
          {/* Developers and API */}
          <p>Developers</p>
          <Link href='/'>Documentation</Link>
          <Link href='/'>BIM UI</Link>
          <Link href='/'>Changelog</Link>
          <Link href='/'>Contributing</Link>
          <Link href='/'>Open Source</Link>
          <Link href='/'>BIMSquad</Link>
          <Link href='/'>DevTo</Link>
          <Link href='/'>RSS</Link>
        </div>
        <div className='flex flex-col'>
          {/* Legal and Privacy */}
          <p>Company</p>
          <Link href='/'>Blog</Link>
          <Link href='/'>Customer Stories</Link>
          <Link href='/'>Careers</Link>
          <Link href='/'>Events & Webinars</Link>
          <Link href='/'>General Availability</Link>
          <Link href='/'>Terms of Service</Link>
          <Link href='/'>Privacy Policy</Link>
          <Link href='/'>Privacy Settings</Link>
          <Link href='/'>Acceptable Use Policy</Link>
          <Link href='/'>Support Policy</Link>
          <Link href='/'>Service Level Agreement</Link>
          <Link href='/'>Humans.txt</Link>
          <Link href='/'>Lawyers.txt</Link>
          <Link href='/'>Security.txt</Link>
        </div>
      </div>
      <div className='flex justify-between border-t border-gray-200'>
        <p>© 2025 BIMSystems. All rights reserved.</p>
        <p>Powered by BIMSystems</p>
      </div>
    </footer>
  );
}
