// Optional component for additional head elements
// This can be used when you need to add dynamic scripts or meta tags

import { usePathname } from 'next/navigation';

interface SEOHeadProps {
  children?: React.ReactNode;
}

export default function SEOHead({ children }: SEOHeadProps) {
  const pathname = usePathname();
  
  // You can add logic here to modify head elements based on pathname
  // or pass props to customize per page
  
  return <>{children}</>;
}

// Example usage in a page:
// import SEOHead from '@/components/SEOHead';
// 
// <SEOHead>
//   <script type="application/ld+json">
//     {JSON.stringify(yourSchemaData)}
//   </script>
// </SEOHead>

