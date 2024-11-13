import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import ReactPlayer from 'react-player/lazy'
import { Card, CardContent } from "@/components/ui/card"
import remarkGfm from 'remark-gfm'


export interface BlogWrapperProps {
  title: string
  slug: string
  content: string
  bannerImage: string
  video?: string
  sources?: string[]
}

const VideoPlayer = ({ url }: { url: string }) => (
  <div className="aspect-w-16 aspect-h-9 my-4">
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      controls
    />
  </div>
)

const CustomImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-4">
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      layout="responsive"
      className="rounded-lg"
    />
  </div>
)

export default function BlogWrapper({ 
  title = "Sample Blog Post", 
  content = "", 
  bannerImage = "/placeholder.svg?height=400&width=1200"
}: BlogWrapperProps) {
  const components = {
    img: ({ src, alt }: { src?: string; alt?: string }) => 
      src ? <CustomImage src={src} alt={alt || ''} /> : null,
    p: ({ children }: { children?: React.ReactNode }) => {
      if (React.isValidElement(children) && children.type === 'img') {
        return <>{children}</>
      }
      return <p>{children}</p>
    },
    video: ({ src }: { src?: string }) => 
      src ? <VideoPlayer url={src} /> : null,
  }

  return (
    <Card className="max-w-4xl mx-auto my-8 overflow-hidden">
      <div className="relative h-64 md:h-80">
        <Image
          src={bannerImage}
          alt="Blog post banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <CardContent className="p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{content}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  )
}