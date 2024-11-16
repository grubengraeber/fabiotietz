import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import ReactPlayer from 'react-player/lazy'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import remarkGfm from 'remark-gfm'
import BlogPost from '@/app/data/blog/BlogPost'
import rehypeRaw from 'rehype-raw'
import "@/css/github-markdown.css"


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
  <div className="my-4 justify-center flex">
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="rounded-lg"
    />
  </div>
)

export default function BlogWrapper({ 
  title, 
  content, 
  bannerImage, 
  video, 
  tags,
  technologies,
  projectName,
  sources,
  slug,
  date,
}: BlogPost) {
  const components = {
    img: ({ src, alt }: { src?: string; alt?: string }) => 
      src ? <CustomImage src={src} alt={alt || 'An image in the blog-post'} /> : null,
    video: ({ src }: { src?: string }) => 
      src ? <VideoPlayer url={src} /> : null,
  }

  const [text, setText] = useState<string | null>("")

  useEffect(() => {
    fetch(content)
      .then(res => res.text())
      .then(setText)
  }, [content])

  return (
    <>
    <Card className="max-w-4xl mx-auto my-8 overflow-hidden">
      <div className="">
        <Image
          src={bannerImage}
          alt="Blog post banner"
          /* fill */
          height={320}
          width={640}
          priority
          className='w-full h-auto'
        />
      </div>
      <CardContent className="p-6 md:p-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown 
          className={"markdown-body"}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={components}
          >
            {text}
          </ReactMarkdown>
        </div>
        <CardFooter className="mt-8 grid grid-cols-1">
          <div>
            <h3 className="text-l font-bold">Sources:</h3>
            <ul>
            {
              sources?.map(source => (
                <li key={source}><a href={source} target="_blank" rel="noreferrer" className="text-sm text-blue-500 mr-2">{source}</a></li>
              ))
            }
            </ul>
          </div>
          <div className='my-8'>
          {
            tags?.map(tag => (
              <span key={tag} className="text-sm text-gray-500 mr-2">#{tag}</span>
            ))
          }
          </div>
          <p className="text-sm">Published on {new Date(date)?.toLocaleDateString()}</p>
        </CardFooter>
      </CardContent>
    </Card>
    </>
  )
}