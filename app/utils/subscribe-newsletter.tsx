"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/app-context';
import { Mails } from 'lucide-react';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
    email: string;
  };


function SubscribeNewsletter() {

    const { showNewsletterPanel, setShowNewsletterPanel } = useAppContext();

    const togglePanelOpen = () => {
        setShowNewsletterPanel(!showNewsletterPanel);
        }

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const onSubmit = (data: FormData) => {
        console.log(data);
        // TODO: subscription logic
        toast('Successfully subscribed to my newsletter', {
            action: <Button onClick={() => null}>undo</Button>
        })
        setShowNewsletterPanel(false);

      };


  return (
    <>
      <AlertDialog open={showNewsletterPanel} onOpenChange={togglePanelOpen}>
        <AlertDialogTrigger asChild>
            <div className='text-sm hover:underline inline-flex gap-4'>
                <Mails /> Newsletter
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Subscribe to our Newsletter</AlertDialogTitle>
          <AlertDialogDescription>
            Enter your email address below to subscribe to our newsletter.
          </AlertDialogDescription>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <div className="mt-4 flex justify-end gap-4">
              <AlertDialogAction asChild>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
              </AlertDialogAction>
              <AlertDialogCancel asChild>
                <Button onClick={() => console.debug('Clicked on Cancel button')} disabled={false}>Cancel</Button>
              </AlertDialogCancel>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default SubscribeNewsletter
