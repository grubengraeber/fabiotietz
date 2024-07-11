"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

// TODO: language
export default function Contact() {

    const contactMe = "Contact Me";
    const name = "Name";
    const email = "Email";
    const message = "Message";

    const emptyForm = {
        name: "",
        email: "",
        message: "",
      }

  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (changeEvent: any) => {
    const { name, value } = changeEvent.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (submitEvent: any) => {
    submitEvent.preventDefault()
    
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(formData),
      });

    if (response.ok) {
        toast(
            'Email sent successfully', 
            {
                description: `I will get back to your provided email address: '${formData.email}' soon.`,
                action: {
                    label: 'dismiss', onClick(event) {},
                }
            }
        );
        setFormData(emptyForm);
        return;
    }
    toast(
        'An error occured while contacting me', 
        {
            description: "Please make sure that the data you provided doesn't have empty fields and try again sending.",
            action: {
                label: 'dismiss', onClick(event) {},
            }
        }
    )
  }

  return (
    <div className="flex items-center justify-center mt-16">
        <Card className="w-[450px]">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 rounded-md shadow-md"
        >
            <CardHeader>
                <CardTitle>
        {contactMe}
                </CardTitle>
            </CardHeader>
            <CardContent>
                
        <div>
          <Label htmlFor="name">{name}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <Label htmlFor="email">{email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <Label htmlFor="message">{message}</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            />
        </div>
            </CardContent>
            <CardFooter>

        <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-500">
          Submit
        </Button>
            </CardFooter>
      </form>
            </Card>
    </div>
  )
}
