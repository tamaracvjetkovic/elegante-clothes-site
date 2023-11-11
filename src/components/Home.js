import React from 'react'
import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = ( { blogs} ) => {

  return (
    <div className = "Home">
      <BlogList blogs = { blogs } title = "All Blogs!" />
    </div>
  )
}

export default Home
