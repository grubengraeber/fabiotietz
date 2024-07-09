'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CV from "./cv/cv";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";

// TODO: language
export default function Me() {

    const { showResumePanel, setShowResumePanel } = useAppContext();

    const toggleShowResumePanel = () => {
        setShowResumePanel(!showResumePanel)
    }

    const pdfUrl = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resume-vdRderZ12BKSGo84rXe7SxYSydzdjs.pdf";

    return (
    <div className="flex items-center justify-center mb-16 w-full">
        <Card>
            <CardHeader>
            <CardTitle className="flow-root">
                <div className="float-left">
            Me
                </div>
                <div className="float-right">

            <Button onClick={toggleShowResumePanel}>
                Download CV
            </Button>
                </div>
            </CardTitle>
            </CardHeader>
            <CardContent>

            {/* <iframe 
                    src={pdfUrl} 
                    title="CV"
                    className='w-full h-screen max-w-3xl'
                /> */}
            <CV />
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    </div>)
}
