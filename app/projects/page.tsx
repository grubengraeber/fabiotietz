import { NextPage } from 'next'
import Projects from './projects'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Props { }

// TODO: language
const TestRoute: NextPage<Props> = ({ }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
        <Card>
            <CardHeader>

            <CardTitle>
            Projects
            </CardTitle>
            </CardHeader>
            <CardContent>
                <Projects />
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    </div>
    )
}

export default TestRoute