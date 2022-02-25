<<<<<<< HEAD
export default function Footer () {
  return (
    <>
      <footer className="flex">
        <div className="fixed bottom-0 left-0 text-center w-full bg-red text-white z-50">
          <div className="container pt-3 mx-20 px-10 sm:flex sm:mt-auto">
            <div className="ml-12 mt-1 sm:mt-0 sm:w-full sm:px-8 flex md:flex-row font-normal text white md:mt-0 mb-1">Ada Tech School</div>
            <div className="mt-1 sm:mt-0 sm:w-full sm:px-8 flex md:flex-row font-normal text-white md:mt-0 mb-1">Notion</div>
            <div className="mt-1 sm:mt-0 sm:w-full sm:px-8 flex md:flex-row font-normal text-white md:mt-0 mb-1">Rejoindre le BDA</div>
          </div>
          <div className="w-full container px-1">
            <div className="w-full justify-end pt-2 border-t-2 border-white sm:flex text-sm text-white font-normal mb-1">
            © 2022 by AdaHub</div>
          </div>
        </div>
      </footer>
    </>
=======

export default function Footer () {
  return (
    <div>
      <footer className='bg-white'>
        {/* eslint-disable-next-line max-len */}
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
            <a
              href='https://adatechschool.fr/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            />
            <span className='sr-only'>Adahub</span>
          </div>
          <div className='mt-8 md:mt-0 md:order-1'>
            <p className='text-center text-base text-gray-400'>
              &copy; {`${new Date().getFullYear()} Trevor Njeru. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    </div>
>>>>>>> refs/remotes/origin/Footer
  )
}
