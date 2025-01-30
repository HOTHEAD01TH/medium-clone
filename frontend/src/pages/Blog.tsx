import { useEffect, useState } from 'react';

export const Blog = () => {
     const [blogs, setBlogs] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const response = await fetch("/api/v1/blog");
                    const data = await response.json();
                    setBlogs(data);
               } catch (error) {
                    console.error(error);
               }
               setLoading(false);
          };
          fetchBlogs();
     }, []);

     return (
          <div>
               <h1>Blog</h1>
               {loading ? (
                    <p>Loading...</p>
               ) : (
                    <ul>
                         {blogs.map((blog: any) => (
                              <li key={blog.id}>
                                   <a href={`/blog/${blog.id}`}>{blog.title}</a>
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
}