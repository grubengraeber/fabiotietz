import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppContext } from '@/context/app-context';
import CV from './cv';

// TODO: language
function CvStructure() {
    const { showResumePanel, setShowResumePanel } = useAppContext();

    const toggleShowResumePanel = () => {
        setShowResumePanel(!showResumePanel)
    }

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

            <CV />
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    </div>
  )
}

export default CvStructure
