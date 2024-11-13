import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPreview({ title, imageUrl, slug }: { title: string, imageUrl: string, slug: string }) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold line-clamp-2 group-hover:underline">{title}</h2>
        </CardContent>
      </Card>
    </Link>
  )
}