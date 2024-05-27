
import { Card } from "@/components/ui/card";
import CV from "./cv";

export default function Me() {

    return <div className="flex items-center justify-between">
        <div className='p-4 '>

            <h1 className='text-black'>Me</h1>
        </div>
        <Card>
            <CV /> {/* TODO: downloadable CV */}
        </Card>
    </div>
}
