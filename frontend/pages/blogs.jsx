import Head from "next/head";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Moment from 'react-moment'; 

const Blogs = ({ blogs }) => {
  return (
    <div className="min-h-screen w-full px-6 sm:px-10 md:px-20">
      <Head>
        <title>Onebyte Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto font-light">
        {blogs.map((blog) => (
          <div className="mb-8" key={blog.id}>
            <div className="text-3xl text-indigo-500 font-semibold">
              <a href={blog.html_url}>{blog.title}</a>
            </div>
            <div className="flex flex-row mt-4 items-center font-light text-sm text-gray-500 ">
              <a
                href="https://github.com/8bitzz/"
                className="flex flex-row items-center  hover:text-gray-900"
              >
                <img
                  src={blog.user.avatar_url}
                  alt=""
                  className="w-8 h-8 rounded-full mr-2"
                ></img>
                8bitzz
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <a href={blog.html_url} className="ml-1 hover:text-gray-900">
                {blog.comments} comments
              </a>
              <span className="ml-4">
                Created at: {" "}
                <Moment format="YYYY/MM/DD">{blog.created_at}</Moment>
              </span>
            </div>
            <div className="markdown-body mt-4">
              <ReactMarkdown
                children={blog.body}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={xonokai}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              ></ReactMarkdown>
            </div>
            <div className="flex flex-row mt-4 items-center font-light text-sm text-gray-500 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <a href={blog.html_url} className="ml-1 hover:text-gray-900">
                {blog.comments} comments
              </a>
              <span className="ml-4">
                Last updated:{" "}
                <Moment format="YYYY/MM/DD">{blog.updated_at}</Moment>
              </span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

Blogs.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/repos/8bitzz/blogs/issues"
  );
  const data = await response.data;

  return {
    blogs: data,
  };
};

export default Blogs;
