import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <Link href="/">
                    <a className="py-1 font-sans text-lg font-bold">Andreas Ellwanger</a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="items-center sm:space-x-8">
                  {/*<Page href="/blog" title="blog" />*/}
                  <Page href="/projects" title="Projects" />
                  <Page href="/about" title="About" />
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
            <div className="flex flex-col space-y-1 pt-2 pb-3">
              <Page href="/projects" title="Projects" />
              <Page href="/about" title="About" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;

const Page = ({
  className = '',
  title,
  href,
}: {
  className?: string;
  title: string;
  href: string;
}) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`ml-5 py-1 text-lg opacity-80 hover:opacity-100 ${className} ${
          router.pathname === href ? 'opacity-100' : ''
        }`}
      >
        {title}
      </a>
    </Link>
  );
};
