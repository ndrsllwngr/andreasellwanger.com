import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <Link href="/">
                    <a className="group py-1 font-sans text-lg font-medium hover:text-blue-700 sm:py-0">
                      Andreas Ellwanger{' '}
                      <span className="inline-block hidden font-normal opacity-70 group-hover:opacity-100 sm:visible md:inline">
                        — (Junior) Software Engineer
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="items-center sm:space-x-8">
                  {/*<Page href="/blog" title="blog" />*/}
                  <Page href="/projects" title="projects" />
                  {/*<Page href="/about" title="About" />*/}
                  <a
                    href="/cv.pdf"
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-700 px-4 py-2 text-white shadow-sm hover:opacity-70"
                  >
                    curriculum vitae
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Page className="block" href="/projects" title="Projects" />
              {/*<Page className="block" href="/about" title="About" />*/}
              <a
                href="/cv.pdf"
                className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-700 px-4 py-2 text-white shadow-sm hover:opacity-70"
              >
                Curriculum Vitae
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar

const Page = ({
  className = '',
  title,
  href,
}: {
  className?: string
  title: string
  href: string
}) => {
  const router = useRouter()
  return (
    <Link href={href}>
      <a
        className={`ml-5 py-1 text-lg text-blue-700 hover:opacity-70 ${className} ${
          router.pathname === href ? 'underline' : ''
        }`}
      >
        {title}
      </a>
    </Link>
  )
}
