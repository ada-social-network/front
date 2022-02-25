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
  )
}
