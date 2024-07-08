import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useAppContext } from '@/context/app-context';
import { ReceiptText } from 'lucide-react';
import React from 'react'
import DataProtection from './data-protection';
import { Button } from '@/components/ui/button';

function Terms() {
  const { showTerms, setShowTerms } = useAppContext();

    const toggleTerms = () => {
        setShowTerms(!showTerms);
    }

  return (
    <AlertDialog open={showTerms} onOpenChange={toggleTerms} >
        <AlertDialogTrigger asChild>
            <div className='text-sm hover:underline inline-flex gap-4'>
                <ReceiptText /> Terms of Service
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent className='overflow-y-scroll max-h-screen h-5/6 w-1/2'>
          <AlertDialogTitle>Terms of Service</AlertDialogTitle>
          <AlertDialogDescription>
            Read our Terms of Service below 
          </AlertDialogDescription>
          <h1>Terms of Service</h1>

        <h2>1. Introduction</h2>
        <p>Welcome to Fabio TIETZ Innovations e.U. (&QUOT;we&QUOT;, &QUOT;our&QUOT;, &QUOT;us&QUOT;). These Terms of Service (&QUOT;Terms&QUOT;) govern your use of our website located at <a href="fabiotietz.com">your-website.com</a> (the &QUOT;Service&QUOT;).</p>
        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you do not have permission to access the Service.</p>

        <h2>2. Privacy Policy</h2>
        <p>Your privacy is important to us. Please read our <DataProtection /> to understand how we collect, use, and share information about you.</p>

        <h2>3. Use of the Service</h2>
        <h3>Eligibility</h3>
        <p>You must be at least 18 years old to use our Service. By using our Service, you represent and warrant that you meet this requirement.</p>
        <h3>Account Registration</h3>
        <p>To access certain features of the Service, you may need to register for an account. You must provide accurate and complete information and keep your account information updated. You are responsible for safeguarding your password and for any activities or actions under your account.</p>

        <h2>4. Content</h2>
        <h3>Your Content</h3>
        <p>You retain ownership of any content you submit, post, or display on or through the Service (&QUOT;Your Content&QUOT;). By submitting, posting, or displaying Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute Your Content.</p>
        <h3>Our Content</h3>
        <p>We own or license all materials, including but not limited to text, images, graphics, software, and other content contained in the Service (the &QUOT;Content&QUOT;). You may not use, copy, modify, or distribute our Content without our written permission.</p>

        <h2>5. Prohibited Activities</h2>
        <p>You agree not to engage in any of the following prohibited activities:</p>
        <ul>
            <li>Using the Service for any illegal purpose or in violation of any local, national, or international law.</li>
            <li>Interfering with the security or operation of the Service.</li>
            <li>Misrepresenting your identity or affiliation with any person or entity.</li>
            <li>Uploading or transmitting any harmful code or viruses.</li>
        </ul>

        <h2>6. Termination</h2>
        <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2>7. Disclaimers</h2>
        <p>The Service is provided on an &QUOT;as is&QUOT; and &QUOT;as available&QUOT; basis. We make no warranties, expressed or implied, regarding the Service, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the Service; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the European Union, without regard to its conflict of law provisions.</p>

        <h2>10. Changes to the Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&APOS; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul>
            <li>By email: <a href="mailto:fabio@fabiotietz.com">fabio@fabiotietz.com</a></li>
            <li>By visiting this page on our website: <a href="your-website.com/contact">fabiotietz.com/contact</a></li>
        </ul>
<AlertDialogCancel asChild>
<Button className='text-black dark:text-white' onClick={() => console.debug('Clicked on Cancel button')} disabled={false}>Cancel</Button>
</AlertDialogCancel>
</AlertDialogContent>
</AlertDialog>
  )
}

export default Terms
