import React from 'react'

const BlogList = ( { blogs, handleDelete } ) => {
  return (
    <div className = "BlogList">
      {blogs.map((blog) => (
        <div className = "BlogPreview" key = { blog.id }>
          <h3> { blog.title } </h3>
          <p> Autor: { blog.author } </p>
          <button className = "hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full"> Delete Blog! </button>
        </div>
      ))}
    </div>
  )
}

export default BlogList
