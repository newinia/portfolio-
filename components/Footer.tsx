export default function Footer() {
  return (
    <footer className="border-t">
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        flex
        justify-between
        items-center
        "
      >
        <div>
          <h3 className="font-bold text-xl">
            Portfolio
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            © 2026 All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/newi-muchlisinia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            LinkedIn
          </a>
        
          <a
            href="https://github.com/newinia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            GitHub
          </a>
        
          <a
            href="mailto:newimuchlisinia@gmail.com"
            className="hover:text-gray-500 transition-colors"
          >
            Email
          </a>
        
        </div>
      </div>
    </footer>
  );
}
