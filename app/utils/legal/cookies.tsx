import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useAppContext } from '@/context/app-context'
import { Cookie } from 'lucide-react'
import React from 'react'


// TODO: language
function Cookies() {

    const { showCookies, setShowCookies } = useAppContext();

    const toggleCookies = () => {
        setShowCookies(!showCookies);
    }

  return (
    <AlertDialog open={showCookies} onOpenChange={toggleCookies} >
        <AlertDialogTrigger asChild>
            <div className='text-sm hover:underline inline-flex gap-4'>
                <Cookie /> Cookie Policy
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent className='overflow-y-scroll max-h-screen h-5/6 w-1/2'>
          <AlertDialogTitle>Cookie Policy</AlertDialogTitle>
          <AlertDialogDescription>
            Read our Cookie Policy below 
          </AlertDialogDescription>
          <h2>Cookie Policy</h2> 
          <p>

<h4>Introduction</h4> 
Fabio TIETZ Innovations e.U. (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) uses cookies on our website (the &quot;Service&quot;). By using the Service, you consent to the use of cookies.
</p>


<h4>What are cookies?</h4>
<p>
Cookies are small text files that are placed on your device (computer, smartphone, or other electronic device) when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the site owners.
</p>


<h4>How we use cookies</h4> 
 <strong>We use cookies to:</strong>   
    

<p>
Recognize you when you visit our website.
Remember your preferences and settings.
Improve your user experience by understanding how you use our site.
Analyze our website traffic.
</p>

<h4>Types of cookies we use</h4>
<strong>We use the following types of cookies:</strong> 

<h4>Essential cookies</h4>
<p>These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p> 

<h4>Preference cookies</h4>
<p>Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.</p>

<h4>Statistics cookies</h4>
<p>Statistics cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p>

<h4>Marketing cookies</h4>
<p>
Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
</p>
<h4>
Managing cookies
</h4>
<p>
You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
</p>
<h4>
Changes to this Cookie Policy
</h4>
<p>
We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
</p>

<p>If you have any questions about this Privacy Policy, You can contact us:</p>
<ul>
<li>
<p>By email: fabio@fabiotietz.com</p>
</li>
<li>
<p>By visiting this page on our website: <a href="https://fabiotietz.com/contact" rel="external nofollow noopener" target="_blank">https://fabiotietz.com/contact</a></p>
</li>
</ul>
<AlertDialogCancel asChild>
<Button className='text-black dark:text-white' onClick={() => {}} disabled={false}>Cancel</Button>
</AlertDialogCancel>
</AlertDialogContent>
</AlertDialog>
  )
}

export default Cookies


/* 

Cookie Policy
Introduction
Fabio TIETZ Innovations e.U. ("we", "our", "us") uses cookies on our website (the "Service"). By using the Service, you consent to the use of cookies.

What are cookies?
Cookies are small text files that are placed on your device (computer, smartphone, or other electronic device) when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the site owners.

How we use cookies
We use cookies to:

Recognize you when you visit our website.
Remember your preferences and settings.
Improve your user experience by understanding how you use our site.
Analyze our website traffic.
Types of cookies we use
We use the following types of cookies:

Essential cookies
These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.

Preference cookies
Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.

Statistics cookies
Statistics cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.

Marketing cookies
Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.

Managing cookies
You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.

Changes to this Cookie Policy
We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.

Contact Us
If you have any questions about this Cookie Policy, please contact us:

By email: ascac
By visiting this page on our website: [your-website.com/contact]

*/