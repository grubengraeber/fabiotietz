import { Input } from '@/components/ui/input'
import { NextPage } from 'next'

interface Props { }

const Contact: NextPage<Props> = ({ }) => {
    return <div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">

        <div className="text-4xl font-bold tracking-tight sm:text-6xl">
            <Input />

        </div>

        </div>
        </div>
        
    </div>
}

export default Contact