import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a className="group font-medium font-sans text-lg py-1 sm:py-0 hover:text-blue-700">
                      Andreas Ellwanger{' '}
                      <span className="hidden sm:visible font-normal opacity-70 group-hover:opacity-100 inline-block md:inline">
                        — (Junior) Software Engineer
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="sm:space-x-8 items-center">
                  {/*<Page href="/blog" title="blog" />*/}
                  <Page href="/projects" title="projects" />
                  {/*<Page href="/about" title="About" />*/}
                  <a
                    href="/cv.pdf"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm bg-blue-700 text-white hover:opacity-70"
                  >
                    curriculum vitae
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700">
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
            <div className="pt-2 pb-3 space-y-1">
              <Page className="block" href="/projects" title="Projects" />
              {/*<Page className="block" href="/about" title="About" />*/}
              <a
                href="/cv.pdf"
                className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm bg-blue-700 text-white hover:opacity-70"
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
        className={`text-lg text-blue-700 hover:opacity-70 ml-5 py-1 ${className} ${
          router.pathname === href ? 'underline' : ''
        }`}
      >
        {title}
      </a>
    </Link>
  )
}
