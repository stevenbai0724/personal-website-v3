import Link from 'next/link'

const navItems = {
  '/blog': {
    name: 'blog',
  },
  'https://youtube.com/@stevenbai0724': {
    name: 'YouTube',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="fixed top-0 bg-white dark:bg-black border-b-1 z-90 left-0 w-full py-3 flex flex-row justify-center">
        <nav
          className="flex flex-row w-2xl justify-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row w-full justify-between">
            <Link
                  href="/"
                  className="transition-all  text-2xl font-bold hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  Steven Bai
            </Link>
            <div className="flex flex-row">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    target={(`${path}`.includes("https:")) ? "_blank" : "_self"}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle items-center relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
