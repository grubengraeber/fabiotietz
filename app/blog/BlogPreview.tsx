import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function BlogPreview({ title, imageUrl, slug, tags }: { title: string, imageUrl: string, slug: string, tags?: string[] }) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt="The Banner image of the blog post"
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold line-clamp-2 group-hover:underline">{title}</h2>
          <CardFooter className="mt-4">
            <div className="flex flex-wrap gap-2">
              {
                tags?.map(tag => (
                  <span key={tag} className="text-sm text-gray-500">#{tag}</span>
                ))
              }
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  )
}