'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CV from "./cv";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";

// TODO: language
export default function Me() {

    const { showResumePanel, setShowResumePanel } = useAppContext();

    const toggleShowResumePanel = () => {
        setShowResumePanel(!showResumePanel)
    }

    return (
    <div className="flex items-center justify-center min-h-screen">
        <Card>
            <CardHeader>

            <CardTitle>
            Me
            </CardTitle>
            </CardHeader>
            <CardContent>

            <CV /> {/* TODO: downloadable CV */}
            </CardContent>
            <CardFooter>

            <Button onClick={toggleShowResumePanel}>
                Download CV
            </Button>
            </CardFooter>
        </Card>
    </div>)
}
