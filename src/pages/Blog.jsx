import React from 'react'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: '5 Tips to Land Your Dream Job Faster',
      snippet: 'Searching for the perfect job can be tough. Here are 5 proven strategies that will help you stand out and get hired faster...',
      image: 'blog1.jpg',
    },
    {
      id: 2,
      title: 'Remote Work: The New Normal in 2025',
      snippet: 'Remote jobs have transformed the way we work. Discover the benefits and how to make the most of a remote career...',
      image: 'blog2.jpg',
    },
    {
      id: 3,
      title: 'Top Skills Employers Are Looking For Today',
      snippet: 'Employers want more than just a degree. Here’s a list of in-demand skills that can boost your chances of getting hired...',
      image: 'blog3.jpg',
    },
  ]

  return (
    <section className="py-12 bg-white min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest From the Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-300">
                {/* Optional image area */}
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{blog.snippet}</p>
                <button className="text-blue-600 text-sm font-medium hover:underline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
