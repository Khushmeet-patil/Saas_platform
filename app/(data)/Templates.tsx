import { icons } from "lucide-react";

export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information',
        category: 'Blog',
        icon: '/blogging.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche & outline topic and give me the result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog title',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter your blog outline(optional)',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that provides blog content based on your blog title and outline.',
        category: 'Blog',
        icon: '/blog.png',
        aiPrompt: 'Generate Blog Content based on the topic and outline in Rich text editor format',
        slug: 'blog-content-generation',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter your blog outline(optional)',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title generator for your blog content ',
        category: 'Blog',
        icon: '/topic.png',
        aiPrompt: 'Generate the top 5 blog topic ideas in bullet points only based on the given topic',
        slug: 'blog-topic-ideas',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'title',
                required: true,
            },
            
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI tool that generates SEO-optimized high-ranking YouTube video titles for a video based on its title & outline topic',
        category: 'YouTube Tools',
        icon: '/computer.png',
        aiPrompt: 'Give me the best SEO-optimized high-ranked 5 title ideas for a YouTube video based on the given niche & outline topic and give me the result in Rich text editor format',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter your video SEO title',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Enter your video outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'An AI tool that generates YouTube video descriptions with optimized content and engagement also give relevant tags',
        category: 'YouTube Tools',
        icon: '/play.png',
        aiPrompt: 'Generate an engaging YouTube video description based on the given title and content overview',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter your video title',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Enter your video content overview',
                field: 'textarea',
                name: 'content',
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'An AI tool that generates relevant and high-ranking YouTube tags for a video based on its title',
        category: 'YouTube Tools',
        icon: '/tag.png',
        aiPrompt: 'Generate a list of relevant high-ranking tags for a YouTube video based on the given title and niche',
        slug: 'youtube-tags',
        form: [
            {
                label: 'Enter your video title',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Enter your video outline(optional)',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Rewrite Articles (Plagiarism-Free)',
        desc: 'An AI tool that rewrites articles to ensure plagiarism-free content and maintain original meaning',
        category: 'Content Tools',
        icon: '/documents.png',
        aiPrompt: 'Rewrite the given article while maintaining its original meaning and ensuring plagiarism-free content',
        slug: 'rewrite-articles',
        form: [
            {
                label: 'Enter your article text',
                field: 'textarea',
                name: 'article',
                required: true,
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that enhances your text by adding relevant emojis, making it more engaging and interactive',
        category: 'Text Enhancement',
        icon: '/emoji.png',
        aiPrompt: 'Enhance the given text by adding appropriate emojis for better engagement',
        slug: 'add-emojis-to-text',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true,
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'An AI tool that improves text quality for better readability and engagement',
        category: 'Text Enhancement',
        icon: '/text.png',
        aiPrompt: 'Improve the given text by making it more engaging, readable, and impactful',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true,
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that generates engaging Instagram posts with captions , generating catchy and viral-worthy titles in your chosen language',
        category: 'Social Media Tools',
        icon: '/instagram.png',
        aiPrompt: 'Generate an engaging Instagram post caption based on the given theme and message',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter KeyWords for your Post',
                field: 'input',
                name: 'theme',
                required: true,
            },
            
        ]
    },
    {
        name: 'Instagram Hashtag Generator',
        desc: 'An AI tool that generates relevant and trending Instagram hashtags to increase your post visibility and engagement',
        category: 'Social Media Tools',
        icon: '/hashtag.png',
        aiPrompt: 'Generate a list of relevant and trending Instagram hashtags based on the post topic and content',
        slug: 'instagram-hashtag-generator',
        form: [
            {
                label: 'Enter your post topic/niche',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter additional post details (optional)',
                field: 'textarea',
                name: 'details',
            }
        ]
    }
]
