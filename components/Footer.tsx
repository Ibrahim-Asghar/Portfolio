export default function Footer() {
    return (
      <footer className="border-t border-black mt-44">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
          <small className="font-bold">
            All rights reserved &copy; {new Date().getFullYear()}
          </small>
  
          <small className="font-semibold">
            <a href="https://github.com/Ibrahim-Asghar"   target="_blank"  rel="noreferrer noopener">
              Prepared by <span className="text-blue-800">M.Ibrahim</span>
            </a>
          </small>
        </div>
      </footer>
    );
  }
